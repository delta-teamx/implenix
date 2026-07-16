import { NextResponse } from 'next/server';
import { buildAuthUrl } from '@/lib/googleCalendar';

// Kicks off the one-time OAuth flow. Visit this URL once in a browser
// (signed into the Google account that hosts the bookings). Google
// asks for calendar permissions; on approval you're redirected to
// /api/auth/google/callback which prints the refresh token to paste
// into Vercel env vars.
export const runtime = 'nodejs';

export async function GET() {
  try {
    // Cheap CSRF state, enough for this one-time flow.
    const state = Math.random().toString(36).slice(2);
    return NextResponse.redirect(buildAuthUrl(state));
  } catch (err) {
    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : 'Setup failed',
        hint: 'Make sure GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are set in the env before visiting this URL.',
      },
      { status: 500 },
    );
  }
}
