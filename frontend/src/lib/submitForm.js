// Static-deployable form submission helper.
//
// In production (GitHub Pages, Vercel, Netlify, anywhere static):
// set REACT_APP_FORM_ENDPOINT to your Google Apps Script Web App URL
// (or any other webhook that accepts JSON POST — Formspree, Make, n8n, etc.).
//
// If the env var is empty, the helper acts as a graceful no-op so the
// form still shows a success state during local dev / before integration.
//
// Google Apps Script note:
// Apps Script Web Apps return an opaque response under CORS, so we POST
// with `mode: "no-cors"`. The browser cannot read the response body but
// the row IS appended to the sheet. To detect failures use a Cloud
// Function or set `Access-Control-Allow-Origin: *` in your Apps Script.

const ENDPOINT = process.env.REACT_APP_FORM_ENDPOINT || "";

export async function submitForm(payload) {
  if (!ENDPOINT) {
    // No webhook configured yet — soft-success for dev / pre-launch.
    await new Promise((r) => setTimeout(r, 600));
    // eslint-disable-next-line no-console
    console.info("[RMC] REACT_APP_FORM_ENDPOINT not set. Form payload:", payload);
    return { ok: true, mocked: true };
  }

  try {
    await fetch(ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        submitted_at: new Date().toISOString(),
        source: "ranemc.in",
      }),
    });
    return { ok: true };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[RMC] Form submission failed:", err);
    return { ok: false, error: err };
  }
}
