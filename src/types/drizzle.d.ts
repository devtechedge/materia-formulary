/* eslint-disable @typescript-eslint/no-explicit-any */

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
