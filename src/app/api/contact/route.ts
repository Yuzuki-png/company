import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
  // 証明書 CN が合わない場合だけ ↓ を一時的に付ける
  // tls: { rejectUnauthorized: false },
});

export async function POST(req: NextRequest) {
  console.log('お問い合わせフォームからのリクエスト受信');
  const { name, email, subject, message } = await req.json();
  console.log('受信データ:', { name, email, subject, message });

  try {
    await transporter.sendMail({
      from: `"株式会社月の庭" <info@tuki-no-niwa.info>`,
      to: "info@tuki-no-niwa.info",
      replyTo: email,
      subject: `【お問い合わせ】${subject}`,
      html: `
        <h2>お問い合わせ内容</h2>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>メール:</strong> ${email}</p>
        <p><strong>件名:</strong> ${subject}</p>
        <p><strong>内容:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    await transporter.sendMail({
      from: `"株式会社月の庭" <info@tuki-no-niwa.info>`,
      to: email,
      subject: "【株式会社月の庭】お問い合わせありがとうございます",
      html: `
        <p>※このメールはシステムからの自動返信です</p>
        <p>お世話になっております。</p>
        <p>この度は株式会社月の庭へお問い合わせいただき、誠にありがとうございます。</p>
        <p>内容を確認のうえ、担当者より改めてご連絡いたしますので、今しばらくお待ちください。</p>
        <p>引き続きよろしくお願いいたします。</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("メール送信エラー:", err);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }
}
