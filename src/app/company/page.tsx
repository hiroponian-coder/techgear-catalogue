import { Building2, MapPin, Target, Users } from "lucide-react";

export default function CompanyPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">企業情報</h1>
                    <div className="h-1 w-20 bg-blue-600 rounded"></div>
                    <p className="mt-4 text-slate-600">Company Profile</p>
                </div>

                {/* Mission / Vision */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Target className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-bold text-slate-900">企業理念</h2>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-blue-600">"Empowering the Future of Manufacturing"</h3>
                        <p className="text-slate-700 leading-relaxed">
                            私たちは、「製造業の未来を力強く支える」をミッションに掲げています。
                            最新のロボティクス技術と、長年培ってきた精密加工ノウハウを融合させることで、
                            世界中の工場に革新をもたらし、生産現場の課題解決に貢献する圧倒的なソリューションを提供します。
                        </p>
                    </div>
                </div>

                {/* Company Overview Table */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-12">
                    <div className="bg-slate-900 px-8 py-4 flex items-center gap-3">
                        <Building2 className="w-5 h-5 text-blue-400" />
                        <h2 className="text-xl font-bold text-white">会社概要</h2>
                    </div>
                    <div className="divide-y divide-slate-100">
                        <div className="flex flex-col sm:flex-row px-8 py-5 hover:bg-slate-50 transition">
                            <div className="sm:w-1/3 font-bold text-slate-900 mb-2 sm:mb-0">会社名</div>
                            <div className="sm:w-2/3 text-slate-700">TechGear Solutions 株式会社 (TechGear Solutions Inc.)</div>
                        </div>
                        <div className="flex flex-col sm:flex-row px-8 py-5 hover:bg-slate-50 transition">
                            <div className="sm:w-1/3 font-bold text-slate-900 mb-2 sm:mb-0">設立</div>
                            <div className="sm:w-2/3 text-slate-700">2010年4月1日</div>
                        </div>
                        <div className="flex flex-col sm:flex-row px-8 py-5 hover:bg-slate-50 transition">
                            <div className="sm:w-1/3 font-bold text-slate-900 mb-2 sm:mb-0">資本金</div>
                            <div className="sm:w-2/3 text-slate-700">5,000万円</div>
                        </div>
                        <div className="flex flex-col sm:flex-row px-8 py-5 hover:bg-slate-50 transition">
                            <div className="sm:w-1/3 font-bold text-slate-900 mb-2 sm:mb-0">代表者</div>
                            <div className="sm:w-2/3 text-slate-700">代表取締役社長 山田 太郎</div>
                        </div>
                        <div className="flex flex-col sm:flex-row px-8 py-5 hover:bg-slate-50 transition">
                            <div className="sm:w-1/3 font-bold text-slate-900 mb-2 sm:mb-0">従業員数</div>
                            <div className="sm:w-2/3 text-slate-700 flex items-center gap-2">
                                <Users className="w-4 h-4 text-slate-400" /> 120名（2025年4月現在）
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row px-8 py-5 hover:bg-slate-50 transition">
                            <div className="sm:w-1/3 font-bold text-slate-900 mb-2 sm:mb-0">事業内容</div>
                            <div className="sm:w-2/3 text-slate-700 leading-relaxed">
                                <ul className="list-disc list-inside space-y-1">
                                    <li>産業用ロボット・自動化設備の研究開発、製造、販売</li>
                                    <li>精密モーターおよびモーション制御システムの提供</li>
                                    <li>FA（ファクトリーオートメーション）最適化コンサルティング</li>
                                    <li>IoT/AIを活用したスマートファクトリーソリューションの導入支援</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row px-8 py-5 hover:bg-slate-50 transition">
                            <div className="sm:w-1/3 font-bold text-slate-900 mb-2 sm:mb-0">所在地</div>
                            <div className="sm:w-2/3 text-slate-700 flex items-start gap-2">
                                <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                                <div>
                                    〒100-0005<br />
                                    東京都千代田区丸の内1-1-1<br />
                                    TechGearタワー 15F
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
