// Google Apps Script to receive form data and write to Google Sheets
// Copy this code to Google Apps Script: https://script.google.com/
// Deploy it as a web app and use the web app URL as GOOGLE_SHEETS_WEBHOOK_URL

// CRITICAL: Handle CORS preflight requests (OPTIONS)
// Note: Google Apps Script web apps with "Anyone" access handle CORS automatically
function doOptions(e) {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    // Log that we received a request
    Logger.log('doPost called');
    
    // Check if e exists
    if (!e) {
      Logger.log('ERROR: e is undefined');
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Request object is undefined'
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Check if postData exists
    if (!e.postData) {
      Logger.log('ERROR: e.postData is undefined. e keys: ' + Object.keys(e).join(', '));
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'postData is undefined. Ensure you are sending a POST request with Content-Type: application/json header.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }
    
    Logger.log('postData exists, type: ' + (e.postData.type || 'unknown'));
    
    // Check if postData.contents exists
    if (!e.postData.contents) {
      Logger.log('ERROR: e.postData.contents is undefined. postData type: ' + e.postData.type);
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'postData.contents is undefined. Make sure Content-Type: application/json header is set.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Parse the JSON data
    let data;
    try {
      data = JSON.parse(e.postData.contents);
      Logger.log('Successfully parsed data: ' + JSON.stringify(data));
    } catch (parseError) {
      Logger.log('ERROR parsing JSON: ' + parseError.toString());
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Failed to parse JSON: ' + parseError.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Replace 'YOUR_SHEET_ID' with your actual Google Sheet ID
    // You can find the sheet ID in the URL: https://docs.google.com/spreadsheets/d/SHEET_ID/edit
    // Copy the SHEET_ID part (the long string between /d/ and /edit)
    const sheetId = '1nl6wC8sfv_Y82hmHpWZwfAFwar70-rSQTfyKN93jQbI'; // ⚠️ REPLACE THIS WITH YOUR ACTUAL SHEET ID
    

    
    // Open the spreadsheet
    let sheet;
    try {
      sheet = SpreadsheetApp.openById(sheetId);
      Logger.log('Sheet opened successfully');
    } catch (sheetError) {
      Logger.log('ERROR opening sheet: ' + sheetError.toString());
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Failed to open sheet: ' + sheetError.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Determine which sheet tab to write to based on form type
    let targetSheet;
    if (data.type === 'form') {
      // Get or create "Form Submissions" sheet tab
      targetSheet = sheet.getSheetByName('Form Submissions');
      if (!targetSheet) {
        targetSheet = sheet.insertSheet('Form Submissions');
      }
      // Set headers if this is the first row
      if (targetSheet.getLastRow() === 0) {
        targetSheet.appendRow(['Timestamp', 'Type', 'Name', 'Email', 'Phone', 'Unit Type', 'Consent']);
      }
      // Append the data
      targetSheet.appendRow([
        data.timestamp || new Date(),
        'Form',
        data.name || '',
        data.email || '',
        data.phone || '',
        data.unitType || '',
        data.consent ? 'Yes' : 'No'
      ]);
      Logger.log('Form data appended successfully');
    } else if (data.type === 'enquiry') {
      // Get or create "Enquiries" sheet tab
      targetSheet = sheet.getSheetByName('Enquiries');
      if (!targetSheet) {
        targetSheet = sheet.insertSheet('Enquiries');
      }
      // Set headers if this is the first row
      if (targetSheet.getLastRow() === 0) {
        targetSheet.appendRow(['Timestamp', 'Type', 'Name', 'Email', 'Phone', 'Unit Type', 'Message', 'Consent']);
      }
      // Append the data
      targetSheet.appendRow([
        data.timestamp || new Date(),
        'Enquiry',
        data.name || '',
        data.email || '',
        data.phone || '',
        data.unitType || '',
        data.message || '',
        data.consent ? 'Yes' : 'No'
      ]);
      Logger.log('Enquiry data appended successfully');
    } else {
      Logger.log('ERROR: Invalid form type: ' + data.type);
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Invalid form type: ' + data.type
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Return success response
    // Note: Google Apps Script web apps with "Anyone" access handle CORS automatically
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    }))
    .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('ERROR in doPost: ' + error.toString());
    Logger.log('ERROR stack: ' + (error.stack || 'No stack trace'));
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing/debugging)
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    message: 'This endpoint only accepts POST requests',
    usage: 'Send a POST request with JSON data containing: type, name, and other fields'
  }))
  .setMimeType(ContentService.MimeType.JSON);
}

// Test function (for testing in Apps Script editor)
function test() {
  const testData = {
    type: 'form',
    name: 'Test User',
    whatsapp: '+1234567890',
    consent: true,
    timestamp: new Date().toISOString()
  };
  
  const mockEvent = {
    postData: {
      type: 'application/json',
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log('Test result: ' + result.getContent());
}
