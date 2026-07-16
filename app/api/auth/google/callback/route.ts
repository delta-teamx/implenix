import { NextRequest, NextResponse } from 'next/server';
import { exchangeCodeForTokens } from '@/lib/googleCalendar';

export const runtime = 'nodejs';

// Google redirects here after the user consents. Exchange the code
// for tokens and render a one-time page showing the refresh token so
// the operator can paste it into Vercel env vars. In production this
// route should be locked behind a simple auth check (not shipped now
// because it's only used once during initial setup).
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return html(
      `Google returned an error: <code>${escapeHtml(error)}</code>`,
      500,
    );
  }
  if (!code) {
    return html(
      'Missing <code>code</code> parameter. This URL should be reached via the OAuth redirect from Google.',
      400,
    );
  }

  try {
    const tokens = await exchangeCodeForTokens(code);
    if (!tokens.refresh_token) {
      return html(
        `<h2>No refresh token returned.</h2>
         <p>This usually means the account has already granted access with a different refresh token still active. To force a new refresh token:</p>
         <ol>
           <li>Go to <a href="https://myaccount.google.com/connections" target="_blank" rel="noopener">https://myaccount.google.com/connections</a></li>
           <li>Find the Implenix Booking app and remove it</li>
           <li>Revisit <code>/api/auth/google/setup</code> to try again</li>
         </ol>`,
        400,
      );
    }
    return html(
      `<h2>Success, copy this refresh token into Vercel.</h2>
       <p>Add it as <code>GOOGLE_REFRESH_TOKEN</code> in your Vercel project's <strong>Production</strong>, <strong>Preview</strong>, and <strong>Development</strong> environments.</p>
       <pre style="background:#111;color:#3dfaff;padding:16px;border:1px solid #444;overflow-x:auto;word-break:break-all;white-space:pre-wrap;">${escapeHtml(
         tokens.refresh_token,
       )}</pre>
       <h3>After you paste it:</h3>
       <ol>
         <li>Trigger a redeploy on Vercel so the token is picked up</li>
         <li>Visit <code>/contact</code>, the booking widget should now render available time slots from your Google Calendar</li>
         <li>Book a test slot to verify a real Google Meet link is generated</li>
       </ol>
       <p style="opacity:.6;margin-top:2em;">This page will not be shown again unless the app is revoked and re-consented. Close this tab after saving the token, it will not display on refresh.</p>`,
      200,
    );
  } catch (err) {
    return html(
      `<h2>Token exchange failed</h2><pre>${escapeHtml(
        err instanceof Error ? err.message : String(err),
      )}</pre>`,
      500,
    );
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#39;';
      default:
        return c;
    }
  });
}

function html(body: string, status: number) {
  return new NextResponse(
    `<!doctype html><html><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow"><title>Implenix Google Calendar setup</title><style>body{font-family:system-ui,sans-serif;background:#070538;color:#fff;padding:2em;max-width:720px;margin:0 auto;line-height:1.6}code{background:#111;padding:2px 6px;border-radius:3px;color:#3dfaff}a{color:#3dfaff}h2,h3{color:#bb00ff}</style></head><body>${body}</body></html>`,
    {
      status,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    },
  );
}
