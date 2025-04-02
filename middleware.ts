// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const basicAuth = request.headers.get("authorization");
  const user = "user";
  const pass = "password";

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [u, p] = atob(authValue).split(":");
    if (u === user && p === pass) return NextResponse.next();
  }

  return new Response("Authentication Required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

// 適用するパスを指定（例：すべてのページに適用）
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
