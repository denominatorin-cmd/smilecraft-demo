// Paste into Extensions > Apps Script of the "SmileCraft Demo – Appointments" sheet.
function doPost(e) {
  const d = JSON.parse(e.postData.contents || "{}");
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Appointments");
  sheet.appendRow([new Date(), d.name || "", "'" + (d.phone || ""), d.treatment || "", d.date || "", d.time || "", d.message || ""]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
