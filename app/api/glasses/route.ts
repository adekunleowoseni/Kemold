import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const GLASSES_PATH = path.join(process.cwd(), "data", "glasses.json");

export type GlassProduct = {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  desc: string;
  image: string;
  alt: string;
  badge: string | null;
  badgeClass: string | null;
  colors: string[];
  ageGroup: "kids" | "teens" | "adults";
  frameShape: string;
  material: string;
};

function loadGlasses(): GlassProduct[] {
  try {
    const raw = fs.readFileSync(GLASSES_PATH, "utf-8");
    const data = JSON.parse(raw) as { glasses: GlassProduct[] };
    return data.glasses ?? [];
  } catch {
    return [];
  }
}

export async function GET() {
  const glasses = loadGlasses();
  return NextResponse.json({ glasses, total: glasses.length });
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  let body: Partial<GlassProduct>;
  try {
    body = (await request.json()) as Partial<GlassProduct>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const id = body.id ?? `glass-${Date.now()}`;
  const product: GlassProduct = {
    id,
    name: body.name ?? "Unnamed",
    price: body.price ?? "$0",
    priceNumber: typeof body.priceNumber === "number" ? body.priceNumber : 0,
    desc: body.desc ?? "",
    image: body.image ?? "",
    alt: body.alt ?? body.name ?? "Glasses",
    badge: body.badge ?? null,
    badgeClass: body.badgeClass ?? null,
    colors: Array.isArray(body.colors) ? body.colors : [],
    ageGroup: body.ageGroup ?? "adults",
    frameShape: body.frameShape ?? "rectangle",
    material: body.material ?? "acetate",
  };

  if (token && chatId) {
    const text = [
      "🕶 New glass added (add to data/glasses.json):",
      "",
      JSON.stringify(product, null, 2),
    ].join("\n");

    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });
    } catch {
      // ignore Telegram errors
    }
  }

  return NextResponse.json({ success: true, product });
}
