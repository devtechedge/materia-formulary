import { NextResponse } from "next/server";

import { databaseEnabled, rawQuery } from "@/db/client";

export const dynamic = "force-dynamic";

const STATEMENTS = [
  `create table if not exists stacks (
    account_ref text not null,
    id text not null,
    name text not null,
    items jsonb not null,
    updated_at timestamptz not null default now(),
    primary key (account_ref, id)
  )`,
  `create index if not exists stacks_account_ref_idx on stacks (account_ref)`,
  `create table if not exists review_log (
    id text primary key,
    account_ref text not null,
    slug text not null,
    reviewer text not null,
    previous_value text not null,
    created_at timestamptz not null default now()
  )`,
  `create index if not exists review_log_account_ref_idx on review_log (account_ref)`,
];

export async function GET() {
  if (!databaseEnabled()) {
    return NextResponse.json({ mode: "demo", applied: 0, message: "No DATABASE_URL. Using deterministic demo data." });
  }
  for (const statement of STATEMENTS) {
    await rawQuery(statement);
  }
  return NextResponse.json({ mode: "live", applied: STATEMENTS.length });
}
