import { NextResponse } from "next/server";

const TELEGRAM_API = "https://api.telegram.org";

export type BookingPayload = {
  service: string;
  servicePrice: string;
  location: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
};

function formatMessage(payload: BookingPayload): string {
  const lines = [
    "🩺 New Eye Test Booking",
    "",
    "Service: " + payload.service + " (" + payload.servicePrice + ")",
    "Location: " + payload.location,
    "Date & Time: " + payload.date + " at " + payload.time,
    "",
    "Patient details:",
    "• Name: " + payload.firstName + " " + payload.lastName,
    "• Email: " + payload.email,
    "• Phone: " + payload.phone,
  ];
  if (payload.dateOfBirth) {
    lines.push("• DOB: " + payload.dateOfBirth);
  }
  return lines.join("\n");
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      {
        error: "Telegram is not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.",
      },
      { status: 503 }
    );
  }

  let body: BookingPayload;
  try {
    body = (await request.json()) as BookingPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const text = formatMessage(body);
  const url = `${TELEGRAM_API}/bot${token}/sendMessage`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    const data = (await res.json()) as { ok?: boolean; description?: string };
    if (!res.ok || !data.ok) {
      return NextResponse.json(
        { error: data.description ?? "Telegram API error" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Failed to send to Telegram" },
      { status: 502 }
    );
  }
}
