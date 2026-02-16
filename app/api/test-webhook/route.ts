import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL || '';
  
  return NextResponse.json({
    webhookConfigured: !!WEBHOOK_URL,
    webhookUrl: WEBHOOK_URL ? 'Set (hidden for security)' : 'Not configured',
    message: WEBHOOK_URL 
      ? 'Webhook URL is configured. Check .env.local file if you need to update it.'
      : 'Webhook URL is not configured. Please add GOOGLE_SHEETS_WEBHOOK_URL to .env.local',
    instructions: 'Visit /api/test-webhook to check if webhook is configured'
  });
}

