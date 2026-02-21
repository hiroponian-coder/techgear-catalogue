import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Filter, ChevronRight } from "lucide-react";
import productsData from "@/data/products.json";
import { Product } from "@/lib/types";

export default async function ProductsPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string }>;
}) {
    const resolvedParams = await searchParams;
    const categoryFilter = resolvedParams.category;

    const allProducts = productsData as unknown as Product[];

    // カテゴリ絞り込み
    const filteredProducts = categoryFilter
        ? allProducts.filter(p => p.category === categoryFilter)
        : allProducts;

    // 全カテゴリのリスト（重複排除）
    const categories = Array.from(new Set(allProducts.map(p => p.category)));

    return (
        <div className="bg-slate-50 min-h-screen pb-20">

            {/* ページヘッダー */}
            <div className="bg-slate-900 py-12 border-b-4 border-blue-600">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center text-sm text-blue-400 mb-4 font-medium">
                        <Link href="/" className="hover:text-blue-300 transition">ホーム</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-slate-300">製品カテゴリ</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        {categoryFilter ? `${categoryFilter}の製品一覧` : "すべての製品"}
                    </h1>
                    <p className="text-slate-400 mt-4 max-w-2xl">
                        TechGear Solutionsが提供する最先端のFA製品・制御システムの一覧です。
                        お客様の環境や用途に合わせて最適なソリューションをご提案いたします。
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">

                {/* サイドバー（PCでは左側に固定配置） */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm sticky top-24">
                        <div className="flex items-center gap-2 font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100">
                            <Filter className="w-5 h-5 text-blue-600" />
                            カテゴリで絞り込む
                        </div>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/products"
                                    className={`block px-3 py-2 rounded transition text-sm font-medium ${!categoryFilter ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
                                >
                                    すべての製品
                                </Link>
                            </li>
                            {categories.map(cat => (
                                <li key={cat}>
                                    <Link
                                        href={`/products?category=${cat}`}
                                        className={`block px-3 py-2 rounded transition text-sm font-medium ${categoryFilter === cat ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        {cat}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 pt-6 border-t border-slate-100">
                            <h4 className="font-bold text-sm text-slate-900 mb-3">カタログダウンロード</h4>
                            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                                全製品の仕様を網羅した総合カタログ（PDF）をご用意しております。
                            </p>
                            <Link href="/contact" className="block text-center bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 rounded transition">
                                ダウンロード申請へ
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* メインの製品リスト */}
                <div className="flex-grow">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-slate-800">
                            検索結果：<span className="text-blue-600 ml-1">{filteredProducts.length}</span> 件
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <Link href={`/products/${product.id}`} key={product.id} className="group flex flex-col bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition">
                                <div className="h-48 relative bg-slate-100 overflow-hidden border-b border-slate-100">
                                    <Image
                                        src={product.image_url}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    {product.isNew && (
                                        <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-sm shadow-sm">
                                            NEW ENTRY
                                        </div>
                                    )}
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <span className="text-xs text-blue-600 font-bold mb-2 tracking-wide uppercase">{product.category}</span>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-slate-500 line-clamp-2 mt-auto">
                                        {product.description}
                                    </p>
                                </div>
                                <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-600">詳細スペック・仕様を見る</span>
                                    <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="bg-white p-12 text-center rounded-lg border border-slate-200">
                            <p className="text-slate-500">条件に一致する製品が見つかりませんでした。</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
