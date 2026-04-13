import { useState } from 'react';
import type { Restaurant } from '../data/restaurantsData';
import EnglishBadge from './EnglishBadge';

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const [expanded, setExpanded] = useState(false);
  const spiceIcons = '🌶️'.repeat(restaurant.spiceLevel);

  return (
    <div
      className="rounded-xl border border-orange-100 bg-gradient-to-br from-white to-orange-50/30 overflow-hidden cursor-pointer hover:shadow-md transition-all"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <span className="text-lg">🍽️</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-sm text-orange-900">{restaurant.name}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-100 text-orange-600 border border-orange-200">{restaurant.cuisine}</span>
            {spiceIcons && <span className="text-xs">{spiceIcons}</span>}
          </div>
          <div className="flex items-center gap-2 mt-0.5 text-[10px] text-slate-500">
            <span>💰 {restaurant.priceRange}/人</span>
            <span>📍 {restaurant.address}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <EnglishBadge level={restaurant.englishLevel} />
          <div className="flex gap-1">
            {restaurant.chineseMenu && <span className="text-[9px] px-1 py-0.5 rounded bg-green-50 text-green-700 border border-green-200">中文菜单</span>}
            {restaurant.chineseService && <span className="text-[9px] px-1 py-0.5 rounded bg-green-50 text-green-700 border border-green-200">中文服务</span>}
          </div>
        </div>
      </div>

      {/* Expandable */}
      {expanded && (
        <div className="px-4 pb-4 border-t border-orange-50">
          <p className="text-xs text-slate-600 leading-relaxed mt-3">{restaurant.description}</p>
          {restaurant.recommended.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="text-[11px] text-slate-500">推荐：</span>
              {restaurant.recommended.map((item, i) => (
                <span key={i} className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200">{item}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
