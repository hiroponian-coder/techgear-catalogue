import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, FileText, CheckCircle2, Factory, MonitorSmartphone } from "lucide-react";
import productsData from "@/data/products.json";
import { Product } from "@/lib/types";

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const resolvedParams = await params;
    const product = (productsData as unknown as Product[]).find(p => p.id === resolvedParams.id);

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-slate-50 min-h-screen pb-24">
            {/* ページヘッダー（パンくずリスト） */}
            <div className="bg-slate-900 py-6 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-400 font-medium whitespace-nowrap">
                        <Link href="/" className="hover:text-blue-400 transition">ホーム</Link>
                        <ChevronRight className="w-3 h-3 mx-2 flex-shrink-0" />
                        <Link href="/products" className="hover:text-blue-400 transition">製品カテゴリ</Link>
                        <ChevronRight className="w-3 h-3 mx-2 flex-shrink-0" />
                        <Link href={`/products?category=${product.category}`} className="hover:text-blue-400 transition">{product.category}</Link>
                        <ChevronRight className="w-3 h-3 mx-2 flex-shrink-0" />
                        <span className="text-white truncate">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10">

                {/* 製品ヘッダー領域（画像 + 概要 + CTA） */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                    <div className="flex flex-col md:flex-row">
                        {/* 左側：製品画像 */}
                        <div className="w-full md:w-1/2 lg:w-3/5 relative h-64 md:h-auto min-h-[400px] border-r border-slate-100 bg-slate-100">
                            <Image
                                src={product.image_url}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                            {product.isNew && (
                                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded shadow-md">
                                    NEW ENTRY
                                </div>
                            )}
                        </div>

                        {/* 右側：製品情報とCTA */}
                        <div className="w-full md:w-1/2 lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                            <span className="inline-block bg-blue-50 text-blue-700 font-bold text-xs px-3 py-1 rounded-full mb-4 w-max border border-blue-200">
                                {product.category}
                            </span>
                            <h1 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
                                {product.name}
                            </h1>
                            <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base">
                                {product.description}
                            </p>

                            <div className="space-y-4 mb-10">
                                {product.features.map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                        <span className="text-slate-800 font-medium text-sm">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto flex flex-col gap-3">
                                <Link
                                    href="/contact"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition shadow-md shadow-blue-200"
                                >
                                    <FileText className="w-5 h-5" />
                                    お見積り・資料を請求する
                                </Link>
                                <div className="text-center text-xs text-slate-500 mt-2">
                                    ※最短1営業日以内に担当よりご連絡いたします。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 詳細仕様・スペック表 */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-slate-100">
                        <MonitorSmartphone className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">詳細仕様・スペック</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <tbody className="divide-y divide-slate-100 border-t border-slate-100">
                                {Object.entries(product.specs).map(([key, value]) => (
                                    <tr key={key} className="hover:bg-slate-50 transition-colors">
                                        <th className="py-4 px-6 font-bold text-slate-700 bg-slate-50/50 w-1/3 border-r border-slate-100 uppercase tracking-wide text-xs">
                                            {key}
                                        </th>
                                        <td className="py-4 px-6 text-slate-800 font-medium">
                                            {value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 bg-amber-50 rounded-lg p-5 border border-amber-200 flex items-start gap-3">
                        <Factory className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-bold text-amber-900 text-sm mb-1">導入前の注意事項</h4>
                            <p className="text-xs text-amber-800/80 leading-relaxed">
                                本製品の仕様は改良のため予告なく変更する場合があります。また、特殊環境下（高温・多湿・クリーンルーム等）でのご使用をご検討のお客様は、事前に必ず営業担当までご相談ください。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 hover:bg-white px-6 py-3 rounded-full transition bg-slate-200/50 font-bold text-sm">
                        <ArrowLeft className="w-4 h-4" />
                        製品一覧に戻る
                    </Link>
                </div>

            </div>
        </div>
    );
}
