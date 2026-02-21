import Link from "next/link";
import { ChevronRight, Mail, Phone, Building2 } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-slate-50 min-h-screen pb-24">
            {/* ページヘッダー */}
            <div className="bg-slate-900 py-12 border-b-4 border-blue-600">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center text-sm text-blue-400 mb-4 font-medium">
                        <Link href="/" className="hover:text-blue-300 transition">ホーム</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-slate-300">お問い合わせ</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        お問い合わせ・資料請求
                    </h1>
                    <p className="text-slate-400 mt-4 max-w-2xl">
                        製品に関する技術的なご相談、お見積りのご依頼、総合カタログのダウンロードなど、
                        各種お問い合わせはこちらから承ります。
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">

                    <div className="grid md:grid-cols-3">
                        {/* 左側：連絡先情報 */}
                        <div className="bg-slate-900 text-white p-8 md:col-span-1 border-r border-slate-800">
                            <h3 className="text-xl font-bold mb-6">お電話でのご相談</h3>
                            <div className="flex items-start gap-3 mb-6">
                                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                                <div>
                                    <div className="font-bold text-xl tracking-wider">0120-XXX-XXX</div>
                                    <div className="text-xs text-slate-400 mt-1">受付：平日 9:00 - 18:00<br />（土日祝・弊社休業日を除く）</div>
                                </div>
                            </div>

                            <div className="h-px bg-slate-800 my-8"></div>

                            <h3 className="text-lg font-bold mb-6">本社所在地</h3>
                            <div className="flex items-start gap-3 mb-4 text-sm text-slate-300">
                                <Building2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <div>
                                    〒100-0005<br />
                                    東京都千代田区丸の内1-1-1<br />
                                    TechGearビル 15F
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                info@techgear-solutions.demo
                            </div>
                        </div>

                        {/* 右側：お問い合わせフォーム */}
                        <div className="p-8 md:p-12 md:col-span-2">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">お問い合わせフォーム</h2>
                            <p className="text-sm text-slate-500 mb-8">
                                以下の項目にご入力いただき、「送信する」ボタンを押してください。<br />
                                ※本サイトはデモサイトのため、実際には送信されません。
                            </p>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
                                    <select className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-3">
                                        <option>製品に関するお問い合わせ・技術相談</option>
                                        <option>お見積りのご依頼</option>
                                        <option>製品カタログ（PDF）のダウンロード</option>
                                        <option>導入事例の詳細について</option>
                                        <option>その他</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">御社名 <span className="text-red-500">*</span></label>
                                        <input type="text" className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-3" placeholder="株式会社〇〇" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">部署名</label>
                                        <input type="text" className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-3" placeholder="生産技術部" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">ご担当者名 <span className="text-red-500">*</span></label>
                                        <input type="text" className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-3" placeholder="山田 太郎" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">メールアドレス <span className="text-red-500">*</span></label>
                                        <input type="email" className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-3" placeholder="yamada@example.com" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">ご相談・お問い合わせ内容詳細</label>
                                    <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-3" placeholder="ご検討中の用途や、導入における課題などをご自由にご記入ください。"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-md transition duration-300 shadow-md flex justify-center items-center gap-2 mt-4">
                                    <Mail className="w-5 h-5" /> 送信する（デモ）
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
