// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // リクエスト情報をログに出力
  console.log("==== Middleware Debug ====");
  console.log(`Request URL: ${request.url}`);
  console.log(`Request path: ${request.nextUrl.pathname}`);

  const basicAuth = request.headers.get("authorization");
  console.log(`Authorization header exists: ${basicAuth ? "Yes" : "No"}`);

  const user = process.env.BASIC_AUTH_USER;
  const pass = process.env.BASIC_AUTH_PASS;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    try {
      const [u, p] = atob(authValue).split(":");
      console.log(
        `Attempted login - User: ${u}, Password: ${"*".repeat(p.length)}`
      );

      if (u === user && p === pass) {
        console.log("Authentication successful!");
        return NextResponse.next();
      } else {
        console.log("Authentication failed: Invalid credentials");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(`Authorization decode error: ${error.message}`);
      } else {
        console.log("Authorization decode error: Unknown error occurred");
      }
    }
  } else {
    console.log("No authorization header found");
  }

  console.log("Returning 401 - Authentication Required");
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
