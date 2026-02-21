import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Wrench, Phone, ChevronRight, Briefcase } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechGear Solutions | 産業用ロボット・機械部品",
  description: "次世代のFA（ファクトリーオートメーション）を支える、高精度ロボット・モータ・制御システムのカタログサイト。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-slate-50 text-slate-900 flex flex-col min-h-screen`}>

        {/* ヘッダーエリア */}
        <header className="bg-slate-900 text-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            {/* ロゴ */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-1.5 rounded-md group-hover:bg-blue-500 transition">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                TechGear <span className="text-blue-400 font-light">Solutions</span>
              </span>
            </Link>

            {/* ナビゲーション（PC） */}
            <nav className="hidden md:block">
              <ul className="flex gap-8 text-sm font-medium">
                <li><Link href="/" className="hover:text-blue-400 transition">ホーム</Link></li>
                <li><Link href="/products" className="hover:text-blue-400 transition">製品情報（カタログ）</Link></li>
                <li><Link href="/company" className="hover:text-blue-400 transition">企業情報</Link></li>
              </ul>
            </nav>

            {/* お問い合わせ（CTAボタン） */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex flex-col items-end text-xs text-slate-300">
                <span>ご相談・お見積り</span>
                <span className="font-bold text-sm text-white flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-400" /> 0120-XXXX-XXXX
                </span>
              </div>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-md transition duration-300 flex items-center gap-1"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </header>

        {/* メインコンテンツ */}
        <main className="flex-grow">
          {children}
        </main>

        {/* フッターエリア */}
        <footer className="bg-slate-900 border-t-4 border-blue-600 text-slate-300 py-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1 border-r border-slate-800 pr-8">
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-5 h-5 text-blue-500" />
                <span className="font-bold text-lg text-white tracking-tight">TechGear Solutions</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                次世代のFAを支える、高精度ロボット・モータ・制御システムのリーディングカンパニー。
              </p>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-500" /> 製品カテゴリ
              </h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/products?category=ロボット" className="hover:text-blue-400 transition flex items-center gap-1"><ChevronRight className="w-3 h-3" /> 産業用ロボット</Link></li>
                <li><Link href="/products?category=モーター" className="hover:text-blue-400 transition flex items-center gap-1"><ChevronRight className="w-3 h-3" /> 精密モーター</Link></li>
                <li><Link href="/products?category=制御" className="hover:text-blue-400 transition flex items-center gap-1"><ChevronRight className="w-3 h-3" /> 制御システム</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2 bg-slate-800/50 p-6 rounded-lg text-sm">
              <h4 className="text-white font-bold mb-3">カタログダウンロード・各種お問い合わせ</h4>
              <p className="text-slate-400 mb-4">最新の製品カタログ（PDF）やDXソリューションの導入事例集をご希望の企業様は、お気軽にご連絡ください。</p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-2 rounded transition">資料請求する</Link>
                <Link href="/contact" className="border border-slate-600 hover:border-slate-400 text-white font-bold px-6 py-2 rounded transition">担当者に相談</Link>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} TechGear Solutions Inc. All rights reserved. (Demo Site)
          </div>
        </footer>

      </body>
    </html>
  );
}
