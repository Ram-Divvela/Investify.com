import { NextResponse } from "next/server";

// Temporarily disable authentication
export function middleware(req: Request) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/settings/:path*"], // Remove /dashboard from the matcher
};