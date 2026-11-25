import { NextResponse } from "next/server";

import { monographBySlug } from "@/data";
import { ruleById } from "@/data/rules";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;
  const monograph = monographBySlug.get(slug);
  if (!monograph) {
    return NextResponse.json({ error: "Monograph not found" }, { status: 404 });
  }
  const relatedRules = monograph.interactionRuleIds
    .map((id) => ruleById.get(id))
    .filter((rule) => rule !== undefined);
  return NextResponse.json({ monograph, relatedRules });
}
