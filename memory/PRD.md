# Rane Management Consultant Pvt. Ltd. — Website PRD

## Original Problem Statement
A modern, premium, trustworthy, government-grade consulting website for Rane Management Consultant Pvt. Ltd. (Est. 1995). Communicate trust, authority, 30+ years of government experience, GIS capability, modern technology fluency. Tone like Deloitte / PwC / ESRI / Bentley / MMRDA / CIDCO — but more modern.

## Stack
- Frontend: React (CRA) + TailwindCSS + React Router + Sonner toasts
- Backend: FastAPI + Motor (MongoDB)
- Fonts: Poppins (headings), Inter (body), JetBrains Mono (mono)
- Palette: Deep Navy `#0F2744`, Gold `#C8A44D`, GIS Teal `#0E8B8B`, Bg `#F8FAFC`

## User Personas
1. **Government Project Director** evaluating consultants for land mandates.
2. **Infrastructure / PSU Procurement Manager** running RFPs.
3. **Private Developer / Renewable Energy IPP** needing land due diligence.
4. **Job Candidate** (surveyor, GIS analyst, etc.).
5. **Admin / RMC sales team** reviewing inbound leads.

## What's Implemented (2026-02-15)
- 8 marketing pages: Home, About, Services, GIS Solutions, Land Acquisition, Projects, Careers, Contact
- Sticky glassmorphism navbar + premium navy footer with offices
- Hero with bridge/infrastructure imagery + gradient overlay + gold-accented headline + sub-bar with stats
- Trust logo marquee (MMRDA, CIDCO, MIDC, NHAI, etc.)
- Animated company timeline (1995 → 2025+)
- 6 core service cards w/ accent borders
- Why-Choose split (image + value pillars)
- Premium dark GIS dashboard mockup (cadastral parcels, KPIs, layers, tools)
- Project showcase + filterable Projects portfolio (8 projects)
- Industry coverage grid (8 sectors)
- Testimonial cards, big animated stat counters, final CTA
- Services page with 6 alternating sections + 4-stage process flow
- About with mission/vision/founder vision, values, leadership grid, timeline
- GIS Solutions: dark hero, capabilities, dashboard mockup, before/after case studies, tech stack
- Land Acquisition: problem ↔ solution split, 8-step process, success stories
- Careers: benefits, openings list with apply-prefill, application form
- Contact: two offices, embedded Google Maps, full inquiry form
- Backend leads CRUD (`/api/leads`) + admin password gate (`x-admin-password`)
- Admin console at `/admin` with login, filter sidebar, leads table, status dropdown (new / contacted / qualified / closed), delete, detail panel
- Stats endpoint `/api/stats/public`
- Scroll-reveal + count-up animation
- Topographic background pattern + noise overlay on dark sections
- data-testid attributes on every interactive element

## Tested
- Backend pytest suite: 16/16 pass (leads CRUD, auth, validation, stats)
- Frontend testing agent: all 8 pages render, forms submit, admin flow works, project filters work, status PATCH/DELETE work — 100% pass

## Admin Credentials
Password: `rmc-admin-2025` (env `ADMIN_PASSWORD` in `/app/backend/.env`)

## Backlog (P1)
- File upload (resume PDF) for careers application via object storage
- Lead export to CSV from admin
- Email notification on new lead (Resend / SendGrid)
- Real interactive Leaflet map on GIS Solutions page
- Case study deep-dive pages per project (currently cards only)
- Multilingual: Marathi + Hindi toggle for government users
- Sitemap.xml + robots.txt + structured-data JSON-LD per page

## Backlog (P2)
- JWT-based admin auth with multi-user roles
- Native BSON datetime in Mongo
- Server-side rendering / static export for SEO
- CRM webhook (HubSpot / Salesforce) on lead creation
- Replace static GIS mockup with live interactive Leaflet + sample GeoJSON parcels

## Next Tasks
1. (Optional) Wire `Resend` email so the admin gets pinged when a lead arrives.
2. (Optional) Add file upload for resumes via object storage.
3. (Optional) Add per-project case-study pages for deeper SEO.
