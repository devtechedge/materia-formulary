/* eslint-disable @typescript-eslint/no-explicit-any */
import { eq } from "drizzle-orm";

import type { Stack } from "@/lib/types";
import { getDb } from "./client";
import { stacks } from "./schema";

const memory = new Map<string, Stack>();

function key(accountRef: string, id: string): string {
  return `${accountRef}:${id}`;
}

export async function listStacks(accountRef: string): Promise<Stack[]> {
  const db = getDb();
  if (!db) {
    return [...memory.entries()]
      .filter(([stored]) => stored.startsWith(`${accountRef}:`))
      .map(([, stack]) => stack)
      .sort((a, b) => a.name.localeCompare(b.name));
  }
  const rows = await db.select().from(stacks).where(eq(stacks.accountRef, accountRef));
  return rows.map((row: any) => ({ id: row.id, name: row.name, items: row.items as Stack["items"] }));
}

export async function saveStack(accountRef: string, stack: Stack): Promise<void> {
  const db = getDb();
  if (!db) {
    memory.set(key(accountRef, stack.id), stack);
    return;
  }
  await db
    .insert(stacks)
    .values({
      accountRef,
      id: stack.id,
      name: stack.name,
      items: stack.items,
    })
    .onConflictDoUpdate({
      target: [stacks.accountRef, stacks.id],
      set: { name: stack.name, items: stack.items, updatedAt: new Date() },
    });
}
