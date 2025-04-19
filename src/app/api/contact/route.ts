import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ノードランタイムを使用
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

    // nodemailerのトランスポーター初期化（Xserver用）
    const transporter = nodemailer.createTransport({
      host: "sv7017.xserver.jp", // XserverのSMTPサーバー
      port: 465,
      secure: true, // SSL/TLS
      auth: {
        user: process.env.SMTP_USER || "", // メールアドレス
        pass: process.env.SMTP_PASS || "", // パスワード
      },
    });

    // メール送信 - 管理者向け
    await transporter.sendMail({
      from: `"株式会社月の庭" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER || "", // 自分宛て
      replyTo: email, // 返信先は問い合わせたユーザーのアドレス
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

    // 自動返信メール - ユーザー向け
    await transporter.sendMail({
      from: `"株式会社月の庭" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "【株式会社月の庭】お問い合わせありがとうございます",
      html: `
        <p>${name} 様</p>
        <p>お世話になっております。</p>
        
        <p>この度は株式会社月の庭へお問い合わせいただき、誠にありがとうございます。</p>
        
        <p>内容を確認のうえ、担当者より改めてご連絡させていただきますので、今しばらくお待ちいただけますと幸いです。</p>
        
        <p>なお、お問い合わせの内容によっては、ご返信までにお時間をいただく場合がございます。</p>
        
        <p>あらかじめご了承いただきますようお願い申し上げます。</p>
        
        <p>引き続きどうぞよろしくお願いいたします。</p>
        
        <p><small>※このメールはシステムからの自動返信です</small></p>
        
        <p>--<br>
        株式会社月の庭<br>
        ${process.env.SMTP_USER}</p>
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
