import { NextResponse } from "next/server";

import { auditStack } from "@/lib/engine";
import { stackSchema } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = stackSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid stack payload" }, { status: 400 });
  }
  return NextResponse.json(auditStack(parsed.data.items));
}
