import { NextResponse } from "next/server";

import { searchMonographs } from "@/lib/search";
import { searchSchema } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const parsed = searchSchema.safeParse({
    q: url.searchParams.get("q") ?? undefined,
    category: url.searchParams.get("category") ?? undefined,
    grade: url.searchParams.get("grade") ?? undefined,
    goal: url.searchParams.get("goal") ?? undefined,
  });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid search parameters" }, { status: 400 });
  }

  const results = searchMonographs(parsed.data);
  return NextResponse.json({ count: results.length, monographs: results });
}
