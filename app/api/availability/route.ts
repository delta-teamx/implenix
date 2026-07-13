import { NextRequest, NextResponse } from 'next/server';
import {
  BOOKING_CONFIG,
  computeSlots,
  getBusyRanges,
  apiError,
} from '@/lib/googleCalendar';

export const runtime = 'nodejs';

// GET /api/availability?date=2026-08-14
// Returns the available booking slots for the given date, honoring
// working hours + working days + existing calendar events.
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const dateParam = searchParams.get('date');

  if (!dateParam || !/^\d{4}-\d{2}-\d{2}$/.test(dateParam)) {
    return apiError('Invalid or missing `date` parameter (YYYY-MM-DD)', 400);
  }

  // Enforce lookahead window
  const now = new Date();
  const dayStart = parseLocalDay(dateParam);
  if (Number.isNaN(dayStart.getTime())) {
    return apiError('Invalid date', 400);
  }
  const maxAllowed = new Date(
    now.getTime() + BOOKING_CONFIG.maxLeadDays * 24 * 60 * 60_000,
  );
  if (dayStart > maxAllowed) {
    return NextResponse.json({ date: dateParam, slots: [] });
  }
  if (dayStart.getTime() + 24 * 60 * 60_000 < now.getTime()) {
    return NextResponse.json({ date: dateParam, slots: [] });
  }

  try {
    const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60_000);
    const busy = await getBusyRanges(dayStart.toISOString(), dayEnd.toISOString());
    const slots = computeSlots(dayStart, busy, now);
    return NextResponse.json({
      date: dateParam,
      timezone: BOOKING_CONFIG.timezone,
      durationMinutes: BOOKING_CONFIG.durationMinutes,
      slots,
    });
  } catch (err) {
    return apiError(
      err instanceof Error ? err.message : 'Failed to fetch availability',
      500,
    );
  }
}

// Parses YYYY-MM-DD as local time midnight in the booking timezone.
// For simplicity we treat the date as midnight in the server's tz;
// working-hours logic then applies inside computeSlots.
function parseLocalDay(dateStr: string): Date {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, (m ?? 1) - 1, d ?? 1, 0, 0, 0, 0);
  return dt;
}
