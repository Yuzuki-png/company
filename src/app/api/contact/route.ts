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
    await resend.emails.send({
      from: "株式会社月の庭 <info@tuki-no-niwa.info>",
      to: [email],
      subject: "【株式会社月の庭】お問い合わせありがとうございます",
      html: `
        <p>※このメールはシステムからの自動返信です</p>
        <p>お世話になっております。</p>
        <p>この度は株式会社月の庭へお問い合わせいただき、誠にありがとうございます。</p>
        <p>内容を確認のうえ、担当者より改めてご連絡させていただきますので、今しばらくお待ちいただけますと幸いです。</p>
        <p>なお、お問い合わせの内容によっては、ご返信までにお時間をいただく場合がございます。</p>
        <p>あらかじめご了承いただきますようお願い申し上げます。</p>
        <p>引き続きどうぞよろしくお願いいたします。</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }
}
