"""Backend API tests for Rane Management Consultant leads CRUD + admin verify + public stats."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://rane-land-advisory.preview.emergentagent.com').rstrip('/')
ADMIN_PASSWORD = 'rmc-admin-2025'
ADMIN_HEADERS = {"x-admin-password": ADMIN_PASSWORD}


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="module")
def created_lead_id(session):
    payload = {
        "name": "TEST_Lead_Auto",
        "email": "test_auto@example.com",
        "phone": "+91-9999999999",
        "company": "TEST Co",
        "service_interest": "GIS",
        "message": "Automated test inquiry",
        "lead_type": "inquiry",
    }
    r = session.post(f"{BASE_URL}/api/leads", json=payload)
    assert r.status_code == 201, f"create lead failed: {r.status_code} {r.text}"
    data = r.json()
    assert data["status"] == "new"
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "created_at" in data
    assert data["name"] == payload["name"]
    return data["id"]


# ---------- Public endpoints ----------
class TestPublic:
    def test_root(self, session):
        r = session.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        assert r.json().get("status") == "operational"

    def test_create_lead_201(self, created_lead_id):
        assert isinstance(created_lead_id, str)

    def test_stats_public_keys(self, session):
        r = session.get(f"{BASE_URL}/api/stats/public")
        assert r.status_code == 200
        d = r.json()
        for k in ["years_experience", "projects_delivered", "government_engagements",
                  "acres_surveyed_million", "active_inquiries"]:
            assert k in d, f"missing key {k}"
        assert isinstance(d["active_inquiries"], int)

    def test_create_lead_invalid_email(self, session):
        r = session.post(f"{BASE_URL}/api/leads", json={
            "name": "Bad", "email": "not-an-email", "phone": "123", "message": "x"
        })
        assert r.status_code == 422


# ---------- Admin auth ----------
class TestAdminAuth:
    def test_admin_verify_correct(self, session):
        r = session.post(f"{BASE_URL}/api/admin/verify", headers=ADMIN_HEADERS)
        assert r.status_code == 200
        assert r.json() == {"authenticated": True}

    def test_admin_verify_wrong(self, session):
        r = session.post(f"{BASE_URL}/api/admin/verify", headers={"x-admin-password": "wrong"})
        assert r.status_code == 401

    def test_admin_verify_missing(self, session):
        r = session.post(f"{BASE_URL}/api/admin/verify")
        assert r.status_code == 401


# ---------- Admin leads CRUD ----------
class TestLeadsAdmin:
    def test_list_leads_unauthorized(self, session):
        r = session.get(f"{BASE_URL}/api/leads")
        assert r.status_code == 401

    def test_list_leads_authorized_sorted_desc(self, session, created_lead_id):
        r = session.get(f"{BASE_URL}/api/leads", headers=ADMIN_HEADERS)
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        assert any(x["id"] == created_lead_id for x in data)
        if len(data) >= 2:
            assert data[0]["created_at"] >= data[1]["created_at"]

    def test_patch_status_valid(self, session, created_lead_id):
        r = session.patch(f"{BASE_URL}/api/leads/{created_lead_id}",
                          headers=ADMIN_HEADERS, json={"status": "contacted"})
        assert r.status_code == 200
        assert r.json()["status"] == "contacted"
        # verify persistence
        rg = session.get(f"{BASE_URL}/api/leads", headers=ADMIN_HEADERS)
        rec = next((x for x in rg.json() if x["id"] == created_lead_id), None)
        assert rec is not None and rec["status"] == "contacted"

    def test_patch_status_invalid(self, session, created_lead_id):
        r = session.patch(f"{BASE_URL}/api/leads/{created_lead_id}",
                          headers=ADMIN_HEADERS, json={"status": "bogus"})
        assert r.status_code == 400

    def test_patch_status_unknown_id(self, session):
        r = session.patch(f"{BASE_URL}/api/leads/nonexistent-id-xyz",
                          headers=ADMIN_HEADERS, json={"status": "new"})
        assert r.status_code == 404

    def test_patch_without_admin(self, session, created_lead_id):
        r = session.patch(f"{BASE_URL}/api/leads/{created_lead_id}",
                          json={"status": "new"})
        assert r.status_code == 401

    def test_delete_without_admin(self, session, created_lead_id):
        r = session.delete(f"{BASE_URL}/api/leads/{created_lead_id}")
        assert r.status_code == 401

    def test_delete_unknown(self, session):
        r = session.delete(f"{BASE_URL}/api/leads/nonexistent-id-xyz",
                           headers=ADMIN_HEADERS)
        assert r.status_code == 404

    def test_delete_success(self, session, created_lead_id):
        r = session.delete(f"{BASE_URL}/api/leads/{created_lead_id}", headers=ADMIN_HEADERS)
        assert r.status_code == 204
        # verify removed
        rg = session.get(f"{BASE_URL}/api/leads", headers=ADMIN_HEADERS)
        assert not any(x["id"] == created_lead_id for x in rg.json())
