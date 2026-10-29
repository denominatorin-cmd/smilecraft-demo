# Connect the booking form to Google Sheets

Sheet: https://docs.google.com/spreadsheets/d/15ZBc5YMs1xzPhXAjVQ-ruzBZUeadnmyOhdAtGmweNSc/edit

1. Open the sheet, then **Extensions > Apps Script**.
2. Delete the sample code and paste the contents of `apps-script.gs`. Click **Save**.
3. Click **Deploy > New deployment**, then the gear icon, and choose **Web app**.
4. Set **Execute as: Me** and **Who has access: Anyone**. Click **Deploy**.
5. Approve the permission prompt (Advanced > Go to project > Allow).
6. Copy the **Web app URL** (ends in `/exec`).
7. In `app.js`, paste it into `SHEET_WEBAPP_URL = "..."`.
8. For a real clinic, set `CLINIC_WHATSAPP` in `app.js` to their number (e.g. `919812345678`).
9. Test: submit the form; a new row should appear in the Appointments tab.

If you edit the script later, use **Deploy > Manage deployments > Edit > New version** so the URL stays the same.
