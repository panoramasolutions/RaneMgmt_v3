from fastapi import FastAPI, APIRouter, HTTPException, Header, Depends
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', 'rmc-admin-2025')

app = FastAPI(title="Rane Management Consultant API")
api_router = APIRouter(prefix="/api")


# ============ Models ============
class LeadCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    company: Optional[str] = None
    service_interest: Optional[str] = None
    message: str
    lead_type: str = Field(default="inquiry")  # inquiry | consultation | career


class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    company: Optional[str] = None
    service_interest: Optional[str] = None
    message: str
    lead_type: str = "inquiry"
    status: str = "new"  # new | contacted | qualified | closed
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class LeadStatusUpdate(BaseModel):
    status: str


# ============ Admin auth dependency ============
async def verify_admin(x_admin_password: Optional[str] = Header(default=None)):
    if not x_admin_password or x_admin_password != ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Invalid admin credentials")
    return True


# ============ Routes ============
@api_router.get("/")
async def root():
    return {"service": "Rane Management Consultant API", "status": "operational"}


@api_router.post("/leads", response_model=Lead, status_code=201)
async def create_lead(payload: LeadCreate):
    lead = Lead(**payload.model_dump())
    doc = lead.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.leads.insert_one(doc)
    return lead


@api_router.get("/leads", response_model=List[Lead])
async def list_leads(_: bool = Depends(verify_admin)):
    docs = await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(2000)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            d['created_at'] = datetime.fromisoformat(d['created_at'])
    return docs


@api_router.patch("/leads/{lead_id}", response_model=Lead)
async def update_lead_status(lead_id: str, body: LeadStatusUpdate, _: bool = Depends(verify_admin)):
    if body.status not in {"new", "contacted", "qualified", "closed"}:
        raise HTTPException(status_code=400, detail="Invalid status value")
    result = await db.leads.find_one_and_update(
        {"id": lead_id},
        {"$set": {"status": body.status}},
        return_document=True,
        projection={"_id": 0},
    )
    if not result:
        raise HTTPException(status_code=404, detail="Lead not found")
    if isinstance(result.get('created_at'), str):
        result['created_at'] = datetime.fromisoformat(result['created_at'])
    return result


@api_router.delete("/leads/{lead_id}", status_code=204)
async def delete_lead(lead_id: str, _: bool = Depends(verify_admin)):
    result = await db.leads.delete_one({"id": lead_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Lead not found")
    return None


@api_router.post("/admin/verify")
async def verify_admin_password(_: bool = Depends(verify_admin)):
    return {"authenticated": True}


@api_router.get("/stats/public")
async def public_stats():
    """Aggregate stats for marketing display (combines real lead count w/ static brand stats)."""
    total_leads = await db.leads.count_documents({})
    return {
        "years_experience": 30,
        "projects_delivered": 500,
        "government_engagements": 100,
        "acres_surveyed_million": 1,
        "active_inquiries": total_leads,
    }


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
