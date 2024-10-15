import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";

import { sessionOptions, SessionData } from "@/lib/iron-session";

export async function middleware(request: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  const isLoggedIn = session.token;

  if (isLoggedIn && request.nextUrl.pathname.startsWith("/login"))
    return NextResponse.redirect(new URL("/", request.url));

  if (!isLoggedIn && !request.nextUrl.pathname.startsWith("/login"))
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/", "/users/:path*", "/login"],
};
