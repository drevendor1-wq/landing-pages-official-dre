# Google Sheets Integration Setup

Follow these steps to connect the forms to Google Sheets:

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "HADO Form Submissions" or any name you prefer
4. Share the sheet with `saileshdre@gmail.com` (optional, but recommended)
5. Copy the Sheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`
   - Copy the `SHEET_ID` part (the long string between `/d/` and `/edit`)

## Step 2: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the content from `google-apps-script.js`
4. Replace `YOUR_SHEET_ID` with your actual Sheet ID from Step 1
5. Save the project (File > Save or Ctrl+S)
6. Name it "HADO Form Handler" or any name you prefer

## Step 3: Deploy as Web App

1. Click "Deploy" > "New deployment"
2. Click the gear icon ⚙️ next to "Select type" and choose "Web app"
3. Set the following:
   - Description: "HADO Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone" (important!)
4. Click "Deploy"
5. Authorize the script when prompted (click "Authorize access" and sign in)
6. Copy the Web app URL that's generated

## Step 4: Add Environment Variable

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following line:
   ```
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_WEB_APP_ID/exec
   ```
   Replace `YOUR_WEB_APP_ID` with the actual URL from Step 3

3. Restart your Next.js development server for the changes to take effect

## Step 5: Test

1. Submit a form from your website
2. Check your Google Sheet - you should see the data appear in the appropriate sheet:
   - Form submissions go to "Form Submissions" sheet
   - Enquiries go to "Enquiries" sheet

## Notes

- The script will automatically create the sheets ("Form Submissions" and "Enquiries") if they don't exist
- Headers are automatically added on the first row
- Each submission includes a timestamp
- Make sure to keep the Web app URL private and secure

## Troubleshooting

- **Check if webhook is configured**: Visit `http://localhost:3000/api/test-webhook` to verify your webhook URL is set
- **Check browser console**: Open browser DevTools (F12) and check the Console tab for any errors when submitting forms
- **Check server logs**: Look at your Next.js terminal/console for API errors
- **Check Google Apps Script logs**: 
  1. Go to Google Apps Script editor
  2. Click "Executions" in the left menu
  3. Check for any errors in recent executions
- **Verify Sheet ID**: Make sure you replaced `YOUR_SHEET_ID` in the Google Apps Script with your actual Sheet ID
- **Check deployment settings**: Make sure "Who has access" is set to "Anyone" when deploying
- **Verify environment variable**: Check that `.env.local` exists and has `GOOGLE_SHEETS_WEBHOOK_URL` set correctly
- **Restart server**: After adding/updating `.env.local`, restart your Next.js dev server
- **Test the webhook directly**: You can test the Google Apps Script webhook by sending a POST request with Postman or curl

