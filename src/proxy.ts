import { NextResponse, type NextRequest } from "next/server";

import { ACCOUNT_COOKIE } from "@/lib/account";

const VALID = /^[a-zA-Z0-9_-]{8,64}$/;

export function proxy(request: NextRequest) {
  const existing = request.cookies.get(ACCOUNT_COOKIE)?.value;
  if (existing && VALID.test(existing)) return NextResponse.next();

  const accountRef = crypto.randomUUID().replace(/-/g, "").slice(0, 24);
  const response = NextResponse.next();
  response.cookies.set(ACCOUNT_COOKIE, accountRef, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.svg|fonts/|opengraph-image|robots.txt|sitemap.xml).*)"],
};
