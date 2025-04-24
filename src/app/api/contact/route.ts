import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ノードランタイムを使用
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    console.log("POSTリクエスト開始");

    // フォームデータの取得
    const formData = await request.json();
    const { name, email, subject, message } = formData;

    console.log("フォームデータ:", {
      name,
      email,
      subject,
      messageLength: message?.length,
    });

    // 入力検証
    if (!name || !email || !subject || !message) {
      console.log("入力検証失敗");
      return NextResponse.json(
        { error: "全ての項目を入力してください" },
        { status: 400 }
      );
    }

    // 環境変数のチェック
    console.log("環境変数チェック:");
    console.log("SMTP_USER 存在:", !!process.env.SMTP_USER);
    console.log("SMTP_PASS 存在:", !!process.env.SMTP_PASS);
    console.log(
      "SMTP_USER の最初の3文字:",
      process.env.SMTP_USER?.substring(0, 3)
    );

    // SMTPサーバーの選択（Xserver または Gmail）
    // ここを切り替えてテストします
    const useGmail = true; // テスト用にGmailを使用

    // nodemailerのトランスポーター初期化
    console.log("トランスポーター初期化開始");
    const transporter = useGmail
      ? nodemailer.createTransport({
          // Gmailの設定
          service: "gmail",
          auth: {
            // ※テスト後は削除してください（セキュリティ上の理由）
            user: "youremail@gmail.com", // Gmailアドレスを入力
            pass: "your-app-password", // Gmailのアプリパスワードを入力
          },
        })
      : nodemailer.createTransport({
          // Xserverの設定
          host: "sv7017.xserver.jp", // XserverのSMTPサーバー
          port: 465, // 標準のSMTPSポートに戻す
          secure: true, // SSL/TLS
          auth: {
            user: process.env.SMTP_USER || "", // メールアドレス
            pass: "u4EHZqbG!#!b8dH", // パスワードを直接指定
          },
          tls: {
            // 自己署名証明書を許可
            rejectUnauthorized: false,
          },
          debug: true, // デバッグモード有効化
        });

    // トランスポーターの検証を試みる
    try {
      console.log("SMTP接続検証開始");
      await transporter.verify();
      console.log("SMTP接続検証成功");
    } catch (verifyError) {
      console.error("SMTP接続検証エラー:", verifyError);
      // エラーをスローせず、メール送信を試みる
    }

    console.log("トランスポーター設定完了");

    // メール送信 - 管理者向け
    console.log("管理者向けメール送信開始");
    try {
      const adminMailInfo = await transporter.sendMail({
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
      console.log("管理者向けメール送信成功:", adminMailInfo.messageId);
    } catch (adminMailError) {
      console.error("管理者向けメール送信エラー:", adminMailError);
      throw adminMailError;
    }

    // 自動返信メール - ユーザー向け
    console.log("ユーザー向け自動返信メール送信開始");
    try {
      const userMailInfo = await transporter.sendMail({
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
      console.log("ユーザー向けメール送信成功:", userMailInfo.messageId);
    } catch (userMailError) {
      console.error("ユーザー向けメール送信エラー:", userMailError);
      throw userMailError;
    }

    console.log("メール送信処理完了");
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("メール送信エラー:", error);
    console.error("エラー詳細:", {
      name: error?.name || "unknown",
      message: error?.message || "unknown",
      code: error?.code || "unknown",
      command: error?.command || "unknown",
      response: error?.response || "unknown",
      responseCode: error?.responseCode || "unknown",
      stack: error?.stack || "unknown",
    });

    return NextResponse.json(
      { error: "メールの送信に失敗しました" },
      { status: 500 }
    );
  }
}
