# Google Sheets API v4 Setup Guide

This is the **SIMPLEST** way to save form data to Google Sheets - Direct API, no Apps Script needed!

## ✅ Answers to Your Questions:

1. **Do I need to create table columns?**

   - ✅ **YES!** Create headers in **Row 1** of your Google Sheet

2. **Do I need Content-Type: application/json?**
   - ✅ **YES!** It's already in the code

## 📋 Step-by-Step Setup

### Step 1: Create Google Sheet with Headers

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. **Create two tabs:**

   **Tab 1: "Form Submissions"**

   - In Row 1, add these headers:

   ```
   Timestamp | Type | Name | WhatsApp Number | Consent
   ```

   **Tab 2: "Enquiries"**

   - In Row 1, add these headers:

   ```
   Timestamp | Type | Name | Email | Phone | Consent
   ```

4. **Share the sheet** (right-click → Share → Get shareable link)
   - Make it **"Anyone with the link can view"** (for API access)

### Step 2: Get Google Sheet ID

From your Google Sheet URL:

```
https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
```

Copy the `SHEET_ID_HERE` part (long string between `/d/` and `/edit`)

### Step 3: Get Google API Key (FREE)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or use existing)
3. Go to **"APIs & Services"** → **"Library"**
4. Search for **"Google Sheets API"**
5. Click **"Enable"**
6. Go to **"APIs & Services"** → **"Credentials"**
7. Click **"Create Credentials"** → **"API Key"**
8. Copy your API Key
9. (Optional but recommended) Click on the API key to restrict it:
   - Under "API restrictions", select "Restrict key"
   - Choose "Google Sheets API"

### Step 4: Add to Environment Variables

Create/update `.env.local` in your project root:

```env
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_API_KEY=your_api_key_here
```

### Step 5: Restart Server

Restart your Next.js dev server:

```bash
npm run dev
```

### Step 6: Test!

Submit a form and check your Google Sheet - data should appear immediately!

## 🔍 Troubleshooting

**If you get 200 but data doesn't save:**

1. ✅ **Check sheet headers exist** - Row 1 must have the exact headers
2. ✅ **Check sheet tab name** - Must match exactly (case-sensitive):
   - "Form Submissions" (not "Form submissions" or "form submissions")
   - "Enquiries" (not "Enquiries " or "enquiries")
3. ✅ **Check Sheet ID is correct** - From the URL
4. ✅ **Check API Key is enabled** - Google Sheets API must be enabled
5. ✅ **Check sheet is shared** - Should be viewable by anyone with link
6. ✅ **Check console logs** - Look for error messages

## 💡 Important Notes

- **Headers are REQUIRED** - The API needs to know where to append data
- **Sheet tab names must match exactly** (case-sensitive)
- **API Key is free** - No payment needed
- **No OAuth needed** - Just API key
- **No Apps Script needed** - Direct API call

## 🎯 Why 200 Response but No Data?

Common reasons:

1. ❌ Sheet tab name doesn't exist or is misspelled
2. ❌ Headers not in Row 1
3. ❌ Sheet not shared (API can't access it)
4. ❌ Wrong Sheet ID
5. ❌ Google Sheets API not enabled for your project

Check the console logs for specific error messages!
