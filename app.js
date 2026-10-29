// ===== CONFIG =====
// Clinic WhatsApp number: country code + number, digits only (no +, spaces). Placeholder below.
const CLINIC_WHATSAPP = "910000000000";
// Google Apps Script web app URL (see SETUP.md). Leave empty to skip saving to Google Sheets.
const SHEET_WEBAPP_URL = "";
// ==================
document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(this));
  const text = `Hi SmileCraft, I'd like to book an appointment.\nName: ${d.name}\nPhone: ${d.phone}\nTreatment: ${d.treatment || "-"}\nPreferred date: ${d.date || "-"}\nPreferred time: ${d.time || "-"}` + (d.message ? `\nMessage: ${d.message}` : "");
  if (SHEET_WEBAPP_URL) {
    // text/plain avoids a CORS preflight; Apps Script reads e.postData.contents
    fetch(SHEET_WEBAPP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(d) }).catch(() => {});
  }
  window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  document.getElementById("formNote").textContent = "Thanks! WhatsApp should open with your details. (Demo site)";
  this.reset();
});
