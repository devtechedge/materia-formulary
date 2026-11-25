/* eslint-disable @typescript-eslint/no-explicit-any */
import { index, jsonb, pgTable, primaryKey, text, timestamp } from "drizzle-orm/pg-core";

export const stacks = pgTable(
  "stacks",
  {
    accountRef: text("account_ref").notNull(),
    id: text("id").notNull(),
    name: text("name").notNull(),
    items: jsonb("items").notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table: any) => [
    primaryKey({ columns: [table.accountRef, table.id] }),
    index("stacks_account_ref_idx").on(table.accountRef),
  ],
);

export const reviewLog = pgTable(
  "review_log",
  {
    id: text("id").notNull(),
    accountRef: text("account_ref").notNull(),
    slug: text("slug").notNull(),
    reviewer: text("reviewer").notNull(),
    previousValue: text("previous_value").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table: any) => [
    primaryKey({ columns: [table.id] }),
    index("review_log_account_ref_idx").on(table.accountRef),
  ],
);
