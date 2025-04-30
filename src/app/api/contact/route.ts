import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  try {
    await resend.emails.send({
      from: "株式会社月の庭 <info@tuki-no-niwa.info>",
      to: ["info@tuki-no-niwa.info"],
      subject: `【お問い合わせ】${subject}`,
      html: `
        <h2>お問い合わせ内容</h2>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>メール:</strong> ${email}</p>
        <p><strong>件名:</strong> ${subject}</p>
        <p><strong>内容:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }
}
