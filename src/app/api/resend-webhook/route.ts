import { NextRequest, NextResponse } from "next/server";
// import crypto from "crypto";

const SECRET = process.env.RESEND_WEBHOOK_SECRET || "";
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || "";

// function isValidSignature(body: string, signature: string): boolean {
//   const expectedSignature = crypto
//     .createHmac("sha256", SECRET)
//     .update(body, "utf8")
//     .digest("hex");

  // timingSafeEqualで安全な比較を行う（長さが一致しないと例外になるので注意）
//     if (expectedSignature.length !== signature.length) return false;
//     return crypto.timingSafeEqual(
//         Buffer.from(signature),
//         Buffer.from(expectedSignature)
//     );
// }

export async function POST(req: NextRequest) {
//   const signature = req.headers.get("resend-signature") || "";
  const rawBody = await req.text();

  if (!SECRET || !SLACK_WEBHOOK_URL) {
    console.warn("RESEND_WEBHOOK_SECRET または SLACK_WEBHOOK_URL が未設定です");
    return new NextResponse("設定エラー", { status: 500 });
  }

  // 署名の検証（セキュリティ強化）
//   if (!isValidSignature(rawBody, signature)) {
//     console.warn("⚠️ 不正な署名のWebhookリクエストを拒否しました");
//     return new NextResponse("Invalid signature", { status: 403 });
//   }

  const body = JSON.parse(rawBody);
  console.log("✅ Resend Webhook 受信:", body);

  // メール送信成功時にのみSlack通知
  if (body.type === "email.sent") {
    const { to, subject } = body.data;

    try {
      const slackRes = await fetch(SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `✅ *メール送信完了*\n*宛先:* ${to}\n*件名:* ${subject}`,
        }),
      });

      if (!slackRes.ok) {
        console.error("Slack通知に失敗しました:", await slackRes.text());
      }
    } catch (error) {
      console.error("Slack通知中にエラーが発生:", error);
    }
  }

  return NextResponse.json({ received: true });
}
