/* eslint-disable @typescript-eslint/no-explicit-any */
// The installed Drizzle release ships only .d.cts declarations, which the bundler
// module resolution cannot read for ESM imports. These narrow shims keep the
// server-only data path typechecked without weakening application types.

declare module "drizzle-orm" {
  export function eq(column: unknown, value: unknown): unknown;
  export function and(...conditions: unknown[]): unknown;
}

declare module "drizzle-orm/pg-core" {
  export const pgTable: (...args: any[]) => any;
  export const text: (...args: any[]) => any;
  export const jsonb: (...args: any[]) => any;
  export const timestamp: (...args: any[]) => any;
  export const index: (...args: any[]) => any;
  export const primaryKey: (...args: any[]) => any;
}

declare module "drizzle-orm/node-postgres" {
  export function drizzle(pool: unknown, config?: unknown): any;
}
