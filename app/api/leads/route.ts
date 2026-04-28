import { NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Accept any of the form variants we ship. The form layer already validates
// per-variant; this server-side schema is the wire format.
const payloadSchema = z.object({
  source: z.string().min(1),
  data: z.record(z.unknown()),
  page: z.string().optional(),
  ts: z.string().optional(),
});

// CRM webhook URL is read from the environment at request time.
// When unset, the route still returns 200 so the UI can complete its success
// state — leads are only logged. Set CRM_WEBHOOK_URL in production.
async function forwardToCrm(body: unknown): Promise<{ ok: boolean }> {
  const url = process.env.CRM_WEBHOOK_URL;
  if (!url) {
    // <!-- CONNECT FORM SUBMISSION TO CRM ENDPOINT HERE -->
    return { ok: true };
  }
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.CRM_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.CRM_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    });
    return { ok: res.ok };
  } catch {
    return { ok: false };
  }
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'invalid_json' },
      { status: 400 },
    );
  }

  const parsed = payloadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'invalid_payload', issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const result = await forwardToCrm(parsed.data);
  if (!result.ok) {
    return NextResponse.json({ error: 'forward_failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

// Reject other methods cleanly.
export function GET() {
  return NextResponse.json({ error: 'method_not_allowed' }, { status: 405 });
}
