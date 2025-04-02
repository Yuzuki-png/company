// middleware.ts
import { NextResponse } from "next/server";

export function middleware(request: Request) {
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
