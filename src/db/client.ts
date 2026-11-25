import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema";

let pool: Pool | null = null;

export function databaseEnabled(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

export function getDb() {
  if (!process.env.DATABASE_URL) return null;
  if (!pool) pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 3 });
  return drizzle(pool, { schema });
}

export async function rawQuery(sql: string, params: unknown[] = []): Promise<unknown[]> {
  if (!process.env.DATABASE_URL) return [];
  if (!pool) pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 3 });
  const result = await pool.query(sql, params);
  return result.rows;
}
