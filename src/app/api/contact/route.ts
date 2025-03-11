import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { get } from "@vercel/edge-config";

export const runtime = "edge";

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

    // Edge Configからメール設定を取得
    const emailConfig = await get("emailConfig");

    if (!emailConfig) {
      return NextResponse.json(
        { error: "メール設定の取得に失敗しました" },
        { status: 500 }
      );
    }

    // Nodemailerトランスポーターの作成
    const transporter = nodemailer.createTransport({
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.secure,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // メールオプションの設定
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `ウェブサイトからのお問い合わせ: ${subject}`,
      text: `
        名前: ${name}
        メールアドレス: ${email}
        件名: ${subject}
        
        メッセージ:
        ${message}
      `,
      html: `
        <h3>ウェブサイトからのお問い合わせ</h3>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>件名:</strong> ${subject}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // メール送信
    await transporter.sendMail(mailOptions);

    // 自動返信メール
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "【Waka-Tsuki】お問い合わせありがとうございます",
      text: `
        ${name} 様
        
        Waka-Tsukiへのお問い合わせありがとうございます。
        以下の内容でお問い合わせを受け付けました。
        
        件名: ${subject}
        メッセージ:
        ${message}
        
        内容を確認次第、担当者よりご連絡いたします。
        しばらくお待ちくださいませ。
        
        ※このメールは自動送信されています。
        
        --
        Waka-Tsuki
        info@waka-tsuki.jp
      `,
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
    };

    // 自動返信メール送信
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json(
      { error: "メールの送信に失敗しました" },
      { status: 500 }
    );
  }
}
