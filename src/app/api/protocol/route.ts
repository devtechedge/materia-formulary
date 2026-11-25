import { NextResponse } from "next/server";

import { auditStack } from "@/lib/engine";
import { auditToMarkdown } from "@/lib/export";
import { stackSchema } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = stackSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid stack payload" }, { status: 400 });
  }
  const report = auditStack(parsed.data.items);
  const markdown = auditToMarkdown(report, parsed.data);
  return new NextResponse(markdown, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "content-disposition": 'attachment; filename="materia-protocol.md"',
    },
  });
}
