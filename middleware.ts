import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./app/_lib/auth";
export default NextAuth(authConfig).auth;
export async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;
  if (!session || !session.user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  const userRole = session.user.role;
  // Faculty-only routes
  if (pathname.startsWith("/dashboard/faculty") && userRole !== "FACULTY") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  // Student-only routes
  if (pathname.startsWith("/dashboard/student") && userRole !== "STUDENT") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard/:path*"],
};
