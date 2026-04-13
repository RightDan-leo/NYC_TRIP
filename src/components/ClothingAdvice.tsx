import { weatherData } from '../data/weatherData';

export default function ClothingAdvice() {
  // Find min low and max high across the trip
  const minLow = Math.min(...weatherData.map(d => d.low));
  const maxHigh = Math.max(...weatherData.map(d => d.high));

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-5 border border-slate-100">
      <h3 className="text-base font-bold text-slate-800 mb-3">👔 穿衣建议</h3>

      <div className="space-y-2 text-xs text-slate-600">
        <div className="flex items-start gap-2">
          <span>🌡️</span>
          <span>气温范围：<strong className="text-blue-600">{minLow}°C</strong> – <strong className="text-red-500">{maxHigh}°C</strong>，日间炎热夜间骤冷</span>
        </div>
        <div className="flex items-start gap-2">
          <span>👕</span>
          <span>层叠穿法：轻薄T恤 + 可脱卸外套（前半程热，后半程冷）</span>
        </div>
        <div className="flex items-start gap-2">
          <span>👟</span>
          <span>足部：黑色高质感运动鞋（日行2万步）</span>
        </div>
        <div className="flex items-start gap-2">
          <span>☂️</span>
          <span>备品：折叠伞（多天有雨）</span>
        </div>
        <div className="flex items-start gap-2">
          <span>🧥</span>
          <span className="text-red-600 font-medium">⚠️ 04/19-20 夜间降至 3°C，务必带厚外套！</span>
        </div>
      </div>

      <h3 className="text-base font-bold text-amber-800 mt-5 mb-3">⚠️ 安全提醒</h3>
      <div className="space-y-2 text-xs text-slate-600">
        <div className="flex items-start gap-2">
          <span>🛡️</span>
          <span>时代广场：拒绝任何强行合影或递CD（骗局）</span>
        </div>
        <div className="flex items-start gap-2">
          <span>🚇</span>
          <span>地铁：深夜避开空车厢，选中间车厢</span>
        </div>
        <div className="flex items-start gap-2">
          <span>💳</span>
          <span>支付：全程使用手机 NFC (OMNY)</span>
        </div>
        <div className="flex items-start gap-2">
          <span>📱</span>
          <span>装好 Apple/Google Translate 实时翻译</span>
        </div>
      </div>
    </div>
  );
}
