"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          プライバシーポリシー
        </h1>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md privacy-policy-content">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">基本方針</h2>
            <p className="mb-4">
              株式会社月の庭（以下、「当社」という。）は、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、当社で取扱う個人情報の取得、利用、管理を適正に行います。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">適用範囲</h2>
            <p className="mb-4">
              本プライバシーポリシーは、お客様の個人情報もしくはそれに準ずる情報を取り扱う際に、当社が遵守する方針を示したものです。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">事業者情報</h2>
            <div className="mb-4">
              <p className="mb-2">
                <strong>会社名</strong> 株式会社月の庭
              </p>
              <p className="mb-2">
                <strong>住所</strong> 〒336-0021
              </p>
              <p className="mb-2">埼玉県さいたま市南区別所5丁目15番地2</p>
              <p>
                <strong>代表者</strong> 西　麻耶子
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">個人情報の取得方法</h2>
            <p className="mb-4">
              当社はユーザーが利用登録をするとき、氏名・生年月日・住所・電話番号・メールアドレスなど個人を特定できる情報を取得させていただきます。お問い合わせフォームやコメントの送信時には、氏名・電話番号・メールアドレスを取得させていただきます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">個人情報の利用目的</h2>
            <p className="mb-4">
              当社は、お客様からご提供いただく情報を以下の目的の範囲内において利用します。
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>ご本人確認のため</li>
              <li>お問い合わせ、コメント等の確認・回答のため</li>
              <li>メールマガジン・DM・各種お知らせ等の配信・送付のため</li>
              <li>キャンペーン・アンケート・モニター・取材等の実施のため</li>
              <li>サービスの提供・改善・開発・マーケティングのため</li>
              <li>
                お客さまの承諾・申込みに基づく、提携事業者・団体等への個人情報の提供のため
              </li>
              <li>利用規約等で禁じている行為などの調査のため</li>
              <li>その他個別に承諾いただいた目的</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              個人データを安全に管理するための措置
            </h2>
            <p className="mb-4">
              当社は、個人情報の正確性及び安全確保のために、セキュリティ対策を徹底し、個人情報の漏洩、改ざん、不正アクセスなどの危険については、必要かつ適切なレベルの安全対策を実施します。
            </p>
            <p className="mb-4">
              当社は、第三者に重要な情報を読み取られたり、改ざんされたりすることを防ぐために、SSLによる暗号化を使用しております。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              SSL（Secure Socket Layer）について
            </h2>
            <p className="mb-4">
              当社のWebサイトはSSLに対応しており、WebブラウザとWebサーバーとの通信を暗号化しています。ユーザーが入力する氏名や住所、電話番号などの個人情報は自動的に暗号化されます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              個人データの共同利用
            </h2>
            <p className="mb-4">当社は、以下のとおり共同利用を行います。</p>
            <div className="mb-2">
              <h3 className="text-lg font-semibold mb-2">
                個人データの管理に関する責任者
              </h3>
              <p>株式会社月の庭</p>
            </div>
            <div className="mb-2">
              <h3 className="text-lg font-semibold mb-2">
                共同して利用する者の利用目的
              </h3>
              <p>上記「利用目的」の内容と同様。</p>
            </div>
            <div className="mb-2">
              <h3 className="text-lg font-semibold mb-2">利用項目</h3>
              <p>氏名、住所、電話番号、メールアドレス</p>
            </div>
            <div className="mb-2">
              <h3 className="text-lg font-semibold mb-2">
                共同して利用する者の範囲
              </h3>
              <p>当社企業グループを構成する企業</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              個人データの第三者提供について
            </h2>
            <p className="mb-4">
              当社は、以下を含む正当な理由がある場合を除き、個人情報を第三者に提供することはありません。
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>ご本人の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命・身体・財産の保護に必要な場合</li>
              <li>公衆衛生・児童の健全育成に必要な場合</li>
              <li>
                国の機関等の法令の定める事務への協力の場合（税務調査、統計調査等）
              </li>
            </ul>
            <p className="mb-4">
              当社では、利用目的の達成に必要な範囲内において、他の事業者へ個人情報を委託することがあります。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              保有個人データの開示、訂正
            </h2>
            <p className="mb-4">
              当社は本人から個人情報の開示を求められたときには、遅滞なく本人に対しこれを開示します。個人情報の利用目的の通知や訂正、追加、削除、利用の停止、第三者への提供の停止を希望される方は下記の送付先宛にご請求ください。
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold mb-2">送付先住所</p>
              <p>〒336-0021</p>
              <p>埼玉県さいたま市南区別所5丁目15番地2</p>
              <p>株式会社月の庭</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              個人情報取り扱いに関する相談や苦情の連絡先
            </h2>
            <p className="mb-4">
              当社の個人情報の取り扱いに関するご質問やご不明点、苦情、その他のお問い合わせはお問い合わせフォームよりご連絡ください。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookieについて</h2>
            <p className="mb-4">
              Cookie（クッキー）は、利用者のサイト閲覧履歴を、利用者のコンピュータに保存しておく仕組みです。
            </p>
            <p className="mb-4">
              利用者はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。ただし、Cookieを拒否した場合、当社のいくつかのサービス・機能が正しく動作しない場合があります。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">アクセス解析</h2>
            <p className="mb-4">
              当社では、サイトの分析と改善のためにGoogleが提供している「Google
              アナリティクス」を利用しています。このサービスは、トラフィックデータの収集のためにCookie（クッキー）を使用しています。
            </p>
            <p className="mb-4">
              トラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">広告配信</h2>
            <p className="mb-4">
              当社は、第三者配信の広告サービス「Google
              アドセンス」を利用しています。
            </p>
            <p className="mb-4">
              広告配信事業者は、利用者の興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。これによって利用者のブラウザを識別できるようになりますが、個人を特定するものではありません。
            </p>
            <p className="mb-4">
              Cookie（クッキー）を無効にする方法や「Google
              アドセンス」に関する詳細は、Googleのポリシーと規約をご覧ください。
            </p>
            <p className="mb-4">
              また、Amazonのアソシエイトとして、当社は適格販売により収入を得ています。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              コメント・お問い合わせフォーム
            </h2>
            <p className="mb-4">
              当社では、コメント・お問い合わせフォームに表示されているデータ、そしてスパム検出に役立てるためのIPアドレスやブラウザのユーザーエージェント文字列等を収集します。
            </p>
            <p className="mb-4">
              メールアドレスから作成される匿名化されたハッシュ文字列は、あなたが「Gravatar」サービスを使用中かどうか確認するため同サービスに提供されることがあります。同サービスのプライバシーポリシーは、Automatticのプライバシーポリシーをご覧ください。
            </p>
            <p className="mb-4">
              なお、コメントが承認されると、プロフィール画像がコメントとともに一般公開されます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              他サイトからの埋め込みコンテンツ
            </h2>
            <p className="mb-4">
              当社Webサイトには、埋め込みコンテンツ
              （動画、画像、投稿など）が含まれます。他サイトからの埋め込みコンテンツは、訪問者がそのサイトを訪れた場合とまったく同じように振る舞います。
            </p>
            <p className="mb-4">
              これらのサイトは、あなたのデータの収集、Cookie（クッキー）の使用、サードパーティによる追加トラッキングの埋め込み、埋め込みコンテンツとのやりとりの監視を行うことがあります。
            </p>
            <p className="mb-4">
              アカウントを使ってそのサイトにログイン中の場合、埋め込みコンテンツとのやりとりのトラッキングも含まれます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">免責事項</h2>
            <p className="mb-4">
              当社Webサイトのコンテンツ・情報について、可能な限り正確な情報を掲載するよう努めておりますが、正確性や安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
            </p>
            <p className="mb-4">
              当社Webサイトからリンクやバナーなどによって他のサイトに移動した場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
            </p>
            <p className="mb-4">
              当社Webサイトで掲載している料金表記について、予告なく変更されることがあります。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">著作権・肖像権</h2>
            <p className="mb-4">
              当社Webサイトで掲載しているすべてのコンテンツ（文章、画像、動画、音声、ファイル等）の著作権・肖像権等は当サイト所有者または各権利所有者が保有し、許可なく無断利用（転載、複製、譲渡、二次利用等）することを禁止します。また、コンテンツの内容を変形・変更・加筆修正することも一切認めておりません。
            </p>
            <p className="mb-4">
              各権利所有者におかれましては、万一掲載内容に問題がございましたら、ご本人様よりお問い合わせください。迅速に対応いたします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">リンク</h2>
            <p className="mb-4">
              当社Webサイトは原則リンクフリーです。リンクを行う場合の許可や連絡は不要です。引用する際は、引用元の明記と該当ページへのリンクをお願いします。
            </p>
            <p className="mb-4">
              ただし、画像ファイルへの直リンク、インラインフレームを使用したHTMLページ内で表示する形でのリンクはご遠慮ください。また、Webサイトの内容等によってはリンクの設置をお断りすることがあります。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              プライバシーポリシーの制定日及び改定日
            </h2>
            <p className="mb-4">
              当社は、本プライバシーポリシーの内容を適宜見直し、その改善に努めます。本プライバシーポリシーは、事前の予告なく変更することがあります。
            </p>
            <p className="mb-4">
              本プライバシーポリシーの変更は、当社Webサイトに掲載された時点で有効になるものとします。
            </p>
          </section>

          <div className="mt-8 text-right">
            <p className="text-black font-medium">制定：2025年4月20日</p>
          </div>
        </div>
      </div>
    </div>
  );
}
