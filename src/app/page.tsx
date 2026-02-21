import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, Cpu, Zap, Download } from "lucide-react";
import productsData from "@/data/products.json";
import { Product } from "@/lib/types";

export default function Home() {
  // JSONからのデータ読み込み
  const products = productsData as unknown as Product[];
  const newProducts = products.filter(p => p.isNew).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ヒーローセクション */}
      <section className="relative h-[600px] w-full bg-slate-900 flex items-center">
        {/* 背景画像（ダミー背景） */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/hero/hero_bg.png"
            alt="Factory Automations"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* ダークグラデーションオーバーレイ */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 z-20 w-full">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 mb-4 border border-blue-500 text-blue-400 font-bold text-sm tracking-wider rounded">
              NEXT GENERATION FA SOLUTION
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              製造現場の<span className="text-blue-500">未来</span>を、<br />
              ミリ単位の精度で創る。
            </h1>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              自社開発の高精度サーボモータから、AI対応エッジ解析ターミナルまで。<br className="hidden md:block" />
              TechGear Solutionsは、工場の省人化と生産性向上を支援する総合FA機器メーカーです。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded transition flex items-center gap-2 group"
              >
                製品カタログを見る
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent hover:bg-white/10 border border-white text-white font-bold px-8 py-4 rounded transition"
              >
                導入事例・ご相談
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* カテゴリセクション */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">製品カテゴリ</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-slate-500 mt-6 max-w-2xl mx-auto">
              最先端のロボティクス技術と長年培ったモーター制御技術で、あらゆる産業の自動化ニーズに応えます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* カテゴリ 1 */}
            <Link href="/products?category=産業用ロボット" className="group">
              <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition">
                <div className="h-48 relative overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition z-10"></div>
                  <Image
                    src="/images/categories/industrial_robot.png"
                    alt="産業用ロボット" fill className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-blue-600 text-white p-2 rounded">
                    <Factory className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">産業用ロボット</h3>
                  <p className="text-slate-600 text-sm line-clamp-2">組立、ピック＆プレース、パレタイジングなど、高精度と高速動作を両立するロボットアーム群。</p>
                </div>
              </div>
            </Link>

            {/* カテゴリ 2 */}
            <Link href="/products?category=精密モーター" className="group">
              <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition">
                <div className="h-48 relative overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition z-10"></div>
                  <Image
                    src="/images/categories/stepper_motor.png"
                    alt="精密モーター" fill className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-blue-600 text-white p-2 rounded">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">精密モーター</h3>
                  <p className="text-slate-600 text-sm line-clamp-2">機器への組み込みに最適な小型・高トルクモーター。ステッピングモーターからACサーボまで幅広く展開。</p>
                </div>
              </div>
            </Link>

            {/* カテゴリ 3 */}
            <Link href="/products?category=制御システム" className="group">
              <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition">
                <div className="h-48 relative overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition z-10"></div>
                  <Image
                    src="/images/categories/plc_controller.png"
                    alt="制御システム" fill className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-blue-600 text-white p-2 rounded">
                    <Cpu className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">制御システム・PLC</h3>
                  <p className="text-slate-600 text-sm line-clamp-2">現場のモーターやロボットを統合制御するハイエンドPLCおよびエッジAI解析ターミナル。</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 新製品ピックアップ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">新製品ピックアップ</h2>
              <div className="w-16 h-1 bg-blue-600"></div>
            </div>
            <Link href="/products" className="hidden md:flex items-center text-blue-600 font-bold hover:text-blue-700 transition gap-1">
              全製品を見る <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {newProducts.map((product) => (
              <div key={product.id} className="bg-white border border-slate-200 p-6 rounded-lg flex flex-col h-full shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">{product.category}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                  <Link href={`/products/${product.id}`} className="hover:text-blue-600 transition">{product.name}</Link>
                </h3>
                <p className="text-sm text-slate-600 mb-6 flex-grow">{product.description}</p>

                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <ul className="text-sm text-slate-500 flex flex-col gap-2 mb-4">
                    {product.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Link
                      href={`/products/${product.id}`}
                      className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-center text-sm font-bold py-2 rounded transition"
                    >
                      詳細を見る
                    </Link>
                    <button className="flex items-center justify-center p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 rounded transition" title="仕様書ダウンロード">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/products" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition gap-1">
              全製品を見る <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 導入実績・CTA */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">御社の課題を、私たちの技術で解決します。</h2>
          <p className="text-blue-100 mb-10 text-lg">
            製品の選定から、カスタマイズ、現場への導入サポートまで、専任のエンジニアがトータルで支援。<br />
            最新の製品カタログ（PDF）や、導入事例集を無料でご提供しています。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-slate-50 font-bold px-8 py-4 rounded shadow-lg transition flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              カタログ一括ダウンロード
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 font-bold px-8 py-4 rounded transition flex items-center justify-center gap-2">
              技術相談・見積依頼
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
