import { cookies } from "next/headers";

export const ACCOUNT_COOKIE = "materia_account";
export const DEMO_ACCOUNT = "demo";

export async function currentAccountRef(): Promise<string> {
  const store = await cookies();
  const value = store.get(ACCOUNT_COOKIE)?.value;
  if (!value || !/^[a-zA-Z0-9_-]{1,64}$/.test(value)) return DEMO_ACCOUNT;
  return value;
}

export function accountRefFromHeader(header: string | null): string {
  if (!header || !/^[a-zA-Z0-9_-]{1,64}$/.test(header)) return DEMO_ACCOUNT;
  return header;
}
