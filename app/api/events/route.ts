import { NextResponse, type NextRequest } from "next/server";
import { store } from "@/lib/demo-store";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const limitParam = req.nextUrl.searchParams.get("limit");
  const agentId = req.nextUrl.searchParams.get("agentId");
  const limit = limitParam ? Math.min(Math.max(1, parseInt(limitParam, 10)), 200) : 50;
  const events = agentId
    ? store.events.filter((e) => e.agentId === agentId)
    : store.events;
  return NextResponse.json({ events: events.slice(0, limit) });
}
