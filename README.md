# Rane Management Consultant Pvt. Ltd. — Marketing Website

Premium, government-grade marketing site for **Rane Management Consultant Pvt. Ltd.** (Est. 1995) — Land Survey, Land Acquisition, GIS & Geospatial Solutions, Revenue Record Verification, Infrastructure Advisory and Architecture & Valuation.

- React 19 (Create React App) + TailwindCSS + shadcn/ui + Sonner
- Cinematic full-bleed drone-reel hero, editorial typography, animated GIS dashboard mockup
- 8 pages: Home, About, Services, GIS Solutions, Land Acquisition, Projects, Careers, Contact
- 100% static — directly deployable to **GitHub Pages**, Vercel, Netlify, S3+CloudFront, or any static host
- Contact + Careers forms POST to a configurable webhook (Google Apps Script → Google Sheet, Formspree, Make, n8n…)

---

## Repository layout

```
.
├── .github/workflows/deploy.yml   ← Auto-deploys to GitHub Pages
├── frontend/                      ← The deployable React app
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── .env.example
├── backend/                       ← Legacy FastAPI + Mongo (NOT deployed; safe to delete)
└── README.md
```

The `backend/` folder is **not part of the GitHub deployment**. It is kept for reference and may be removed.

---

## Local development

```bash
cd frontend
cp .env.example .env          # optional — only needed once form webhook is wired
yarn install
yarn start                    # http://localhost:3000
```

To produce a production build:

```bash
yarn build                    # outputs to frontend/build/
```

---

## Deploy to GitHub Pages (recommended)

### 1. Push the repo to GitHub

Create a new GitHub repository and push this codebase to its `main` branch.

### 2. Enable GitHub Pages

In your repository:

`Settings` → `Pages` → under **Build and deployment**, set **Source** to **GitHub Actions**.

### 3. (Optional) Add the form webhook secret

`Settings` → `Secrets and variables` → `Actions` → `New repository secret`:

| Name | Value |
| --- | --- |
| `REACT_APP_FORM_ENDPOINT` | Your Google Apps Script Web App URL |

If you skip this step the forms still render and show a success state — they just don't send anywhere yet.

### 4. Push to `main`

The workflow at `.github/workflows/deploy.yml` runs `yarn build` inside `frontend/`, uploads `frontend/build/` as an artifact, and publishes it to GitHub Pages. The site is live at:

- `https://<username>.github.io/<repo-name>/` (project page), or
- `https://<username>.github.io/` (if the repo is named `<username>.github.io`), or
- your custom domain (set it under `Settings` → `Pages` → `Custom domain`).

Routing uses **`HashRouter`**, so URLs are `https://your-site/#/about`, `https://your-site/#/contact`, etc. This works on GitHub Pages with zero server config — including hard refresh and direct deep links.

---

## Wire the forms to Google Sheets (do this whenever you're ready)

The Contact and Careers forms send a JSON `POST` to whatever URL you put in `REACT_APP_FORM_ENDPOINT`. Each payload looks like:

```json
{
  "name": "Suresh Patil",
  "email": "suresh@example.com",
  "phone": "+91 98765 43210",
  "company": "Acme Infra Pvt. Ltd.",
  "service_interest": "GIS & Geospatial Solutions",
  "message": "We need a GIS dashboard for a 1,200 km corridor.",
  "lead_type": "inquiry",
  "submitted_at": "2026-02-15T11:42:17.812Z",
  "source": "ranemc.in"
}
```

`lead_type` is `"inquiry"` for Contact submissions and `"career"` for Careers applications.

### Google Apps Script recipe

1. Create a new Google Sheet (e.g. `RMC Leads`). Add a tab called `Leads` with the header row:
   `Timestamp | Type | Name | Email | Phone | Company | Service | Message`

2. From the sheet, open `Extensions` → `Apps Script` and paste:

   ```js
   function doPost(e) {
     const data = JSON.parse(e.postData.contents);
     const sheet = SpreadsheetApp
       .getActiveSpreadsheet()
       .getSheetByName('Leads');

     sheet.appendRow([
       new Date(),
       data.lead_type || '',
       data.name || '',
       data.email || '',
       data.phone || '',
       data.company || '',
       data.service_interest || '',
       data.message || ''
     ]);

     // Optional: email yourself instantly on every new lead
     // MailApp.sendEmail('you@ranemc.in', 'New RMC Lead', JSON.stringify(data, null, 2));

     return ContentService
       .createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. `Deploy` → `New deployment` → type `Web app`:
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy** and authorise.

4. Copy the **Web app URL** that ends in `/exec`.

5. Add it to your GitHub repo as the `REACT_APP_FORM_ENDPOINT` secret (see step 3 above). Push a trivial change to trigger a rebuild — the next deploy will have your forms wired.

> **CORS note.** The frontend posts with `mode: "no-cors"` so the browser cannot read the Apps Script response. Rows still land in the sheet. If you ever need to read the response (validation, double-submit prevention, etc.), switch to Cloud Run / Cloud Functions / Formspree instead.

---

## Deploy to other hosts

The build output (`frontend/build/`) is a plain static site. It works on:

- **Vercel** — `New Project` → import the repo → set root directory to `frontend` → done.
- **Netlify** — `New site` → set base directory `frontend`, build command `yarn build`, publish directory `build`.
- **Cloudflare Pages** — same as Netlify.
- **S3 + CloudFront** — `yarn build`, sync `frontend/build/` to your bucket.

For all of them, set `REACT_APP_FORM_ENDPOINT` as a build-time environment variable.

---

## Customising the drone-reel hero

The cinematic background video lives in `frontend/src/components/HeroVideo.jsx`. Replace the two `SRC_PRIMARY` / `SRC_LIGHT` URLs and the `POSTER` URL with your own clips and you're done. Recommended specs:

- MP4, H.264, 1080p, 24-30 fps
- 8-25 MB primary, 4-8 MB lighter fallback
- 10-20 second seamless loop
- No subtitles, no on-screen text

---

## Tech stack reference

| Concern | Choice |
| --- | --- |
| Framework | React 19 (CRA 5) |
| Routing | `react-router-dom` v6 with `HashRouter` |
| Styling | TailwindCSS + design tokens in `src/index.css` |
| UI primitives | shadcn/ui (Radix UI) — included but only Toaster is used so far |
| Toasts | `sonner` |
| Icons | `lucide-react` |
| Fonts | Poppins (headings), Inter (body), JetBrains Mono (mono) — loaded from Google Fonts |
| Hero video | Pexels CDN MP4 (swap to your own asset for production) |

---

## License

Proprietary. © Rane Management Consultant Pvt. Ltd.
