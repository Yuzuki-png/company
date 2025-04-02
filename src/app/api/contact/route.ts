import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { get } from "@vercel/edge-config";

// Edge Runtimeからノードランタイムに変更
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    // フォームデータの取得
    const formData = await request.json();
    const { name, email, subject, message } = formData;

    // 入力検証
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "全ての項目を入力してください" },
        { status: 400 }
      );
    }

    // Resendの初期化
    const resend = new Resend(process.env.RESEND_API_KEY);

    // メール送信
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [process.env.EMAIL_TO || ""],
      subject: `ウェブサイトからのお問い合わせ: ${subject}`,
      html: `
        <h3>ウェブサイトからのお問い合わせ</h3>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>件名:</strong> ${subject}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // 自動返信メール
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: "【Waka-Tsuki】お問い合わせありがとうございます",
      html: `
        <p>${name} 様</p>
        <p>Waka-Tsukiへのお問い合わせありがとうございます。<br>
        以下の内容でお問い合わせを受け付けました。</p>
        
        <p><strong>件名:</strong> ${subject}</p>
        <p><strong>メッセージ:</strong><br>
        ${message.replace(/\n/g, "<br>")}</p>
        
        <p>内容を確認次第、担当者よりご連絡いたします。<br>
        しばらくお待ちくださいませ。</p>
        
        <p><small>※このメールは自動送信されています。</small></p>
        
        <p>--<br>
        Waka-Tsuki<br>
        info@waka-tsuki.jp</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json(
      { error: "メールの送信に失敗しました" },
      { status: 500 }
    );
  }
}
