import { NextResponse } from "next/server";

import { currentAccountRef } from "@/lib/account";
import { listStacks, saveStack } from "@/db/store";
import { stackSchema } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function GET() {
  const accountRef = await currentAccountRef();
  const stacks = await listStacks(accountRef);
  return NextResponse.json({ accountRef, stacks });
}

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = stackSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid stack payload" }, { status: 400 });
  }
  const accountRef = await currentAccountRef();
  await saveStack(accountRef, parsed.data);
  const stacks = await listStacks(accountRef);
  return NextResponse.json({ accountRef, stack: parsed.data, stacks }, { status: 201 });
}
