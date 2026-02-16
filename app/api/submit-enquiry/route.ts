import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, unitType, message, consent } = body;

    // Validate required fields (unitType is optional)
    if (!name || !email || !phone || !consent) {
      return NextResponse.json(
        { error: 'All required fields are missing' },
        { status: 400 }
      );
    }

    // Get Google Apps Script webhook URL from environment variable
    const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL || '';

    if (!WEBHOOK_URL) {
      // In development, just log the data
      console.log('Enquiry Submission:', { name, email, phone, unitType, message, consent, timestamp: new Date().toISOString() });
      return NextResponse.json(
        { message: 'Enquiry submitted successfully (webhook not configured)' },
        { status: 200 }
      );
    }

    // Prepare the data to send
    const payload = {
      type: 'enquiry',
      name,
      email,
      phone,
      unitType: unitType || '',
      message: message || '',
      consent,
      timestamp: new Date().toISOString(),
    };
    
    console.log('Sending enquiry to Google Sheets:', payload);
    
    // Send data to Google Sheets via Apps Script webhook
    // Google Apps Script web apps require proper POST format
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow', // Important for Google Apps Script redirects
    });

    // Google Apps Script may return HTML or text, so we check status
    const responseText = await response.text();
    console.log('Google Sheets Response:', response.status, responseText);

    if (!response.ok) {
      console.error('Google Sheets Error:', response.status, responseText);
      throw new Error(`Failed to send data to Google Sheets: ${response.status}`);
    }

    // Try to parse as JSON, but don't fail if it's not
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (e) {
      // If response is not JSON (common with Apps Script), that's okay
      responseData = { success: true, message: responseText };
    }

    return NextResponse.json(
      { message: 'Enquiry submitted successfully', details: responseData },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    return NextResponse.json(
      { error: 'Failed to submit enquiry' },
      { status: 500 }
    );
  }
}
