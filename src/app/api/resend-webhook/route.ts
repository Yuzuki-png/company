import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const SECRET = process.env.RESEND_WEBHOOK_SECRET || "";
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || "";

function isValidSignature(body: string, signature: string): boolean {
const expected = crypto
    .createHmac("sha256", SECRET)
    .update(body, "utf8")
    .digest("hex");
return expected === signature;
}

export async function POST(req: NextRequest) {
const signature = req.headers.get("resend-signature") || "";
const rawBody = await req.text();

  // セキュリティ検証（任意）
if (!isValidSignature(rawBody, signature)) {
    return new NextResponse("Invalid signature", { status: 403 });
}

const body = JSON.parse(rawBody);
console.log("✅ Resend Webhook 受信:", body);

  // `email.sent` イベントのときだけ通知
if (body.type === "email.sent") {
    const { to, subject } = body.data;

    await fetch(SLACK_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        text: `✅ メール送信完了\n宛先: ${to}\n件名: ${subject}`,
    }),
    });
}

return NextResponse.json({ received: true });
}
