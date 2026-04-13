import { restaurants } from '../data/restaurantsData';
import RestaurantCard from './RestaurantCard';

export default function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 px-2 md:px-4">
      {/* Sichuan survival guide */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-4 md:p-5 border border-red-100">
        <h3 className="text-base md:text-lg font-bold text-red-800 mb-3">🌶️ 四川人纽约生存指南</h3>

        <div className="space-y-3 text-sm md:text-base text-slate-700">
          <div>
            <h4 className="font-semibold text-red-700 mb-1.5">语言自救锦囊</h4>
            <ul className="space-y-1.5 ml-3">
              <li>"Can I pay by card?" — 能刷卡吗？</li>
              <li>"Where is the restroom?" — 洗手间在哪？</li>
              <li>"How much?" — 多少钱？</li>
              <li>"No, thank you." — 拒绝推销万能句</li>
              <li>📱 装好 Apple Translate 或 Google Translate</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-red-700 mb-1.5">支付攻略</h4>
            <ul className="space-y-1.5 ml-3">
              <li>全程 Apple Pay / Google Pay 即可</li>
              <li>地铁：OMNY 手机 NFC 直接刷</li>
              <li>基本不需要现金</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-red-700 mb-1.5">小费指南</h4>
            <ul className="space-y-1.5 ml-3">
              <li>餐厅坐下吃：18-20%（必须给）</li>
              <li>快餐 / 外带：不需要</li>
              <li>出租车 / Uber：10-15%</li>
              <li>酒店行李：$2/件</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Safety tips */}
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-4 md:p-5 border border-amber-100">
        <h3 className="text-base md:text-lg font-bold text-amber-800 mb-3">⚠️ 安全提醒</h3>

        <div className="space-y-3 text-sm md:text-base text-slate-700">
          <div>
            <h4 className="font-semibold text-amber-700 mb-1.5">时代广场</h4>
            <ul className="space-y-1.5 ml-3">
              <li>❌ 不要接受陌生人的CD光盘（骗局）</li>
              <li>📸 与Cosplay角色合影会要$5-10小费</li>
              <li>🛡️ 注意随身物品</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-amber-700 mb-1.5">地铁</h4>
            <ul className="space-y-1.5 ml-3">
              <li>深夜避开空车厢，选坐中间车厢</li>
              <li>用 OMNY（NFC）付费，不买实体卡</li>
              <li>Google Maps 查路线最可靠</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-amber-700 mb-1.5">通用</h4>
            <ul className="space-y-1.5 ml-3">
              <li>全程使用手机 NFC 支付</li>
              <li>随身带护照复印件（原件放酒店保险箱）</li>
              <li>紧急电话：911</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Restaurant section - spans full width */}
      <div className="md:col-span-2">
        <h3 className="text-base md:text-lg font-bold text-slate-800 mb-3 px-1">🍽️ 推荐餐厅（按辣度排序 🌶️）</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[...restaurants]
            .sort((a, b) => b.spiceLevel - a.spiceLevel)
            .map(r => (
              <RestaurantCard key={r.id} restaurant={r} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
