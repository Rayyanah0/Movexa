import { NextResponse, type NextRequest } from "next/server";
import { store } from "@/lib/demo-store";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const limitParam = req.nextUrl.searchParams.get("limit");
  const limit = limitParam ? Math.min(Math.max(1, parseInt(limitParam, 10)), 200) : 50;
  return NextResponse.json({ events: store.events.slice(0, limit) });
}
