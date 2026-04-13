import { useState } from 'react';
import type { Attraction } from '../data/attractionsData';
import EnglishBadge from './EnglishBadge';

export default function AttractionCard({ attraction }: { attraction: Attraction }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="ml-8 mr-4 mb-3 rounded-xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50/30 overflow-hidden cursor-pointer hover:shadow-md transition-all"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header - always visible */}
      <div className="flex items-center gap-3 px-4 py-2.5">
        <span className="text-lg">🏛️</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-sm text-indigo-900">{attraction.name}</span>
            <EnglishBadge level={attraction.englishLevel} />
          </div>
          <div className="text-[11px] text-slate-400">{attraction.nameEn}</div>
        </div>
        <span className={`text-xs text-slate-400 transition-transform ${expanded ? 'rotate-180' : ''}`}>▼</span>
      </div>

      {/* Expandable detail */}
      {expanded && (
        <div className="px-4 pb-4 border-t border-indigo-50">
          {/* Description */}
          <p className="text-xs text-slate-600 leading-relaxed mt-3">{attraction.description}</p>

          {/* Meta info */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-[11px] text-slate-500">
            {attraction.price && <span>🎫 {attraction.price}</span>}
            {attraction.hours && <span>⏰ {attraction.hours}</span>}
            <span>📍 {attraction.address}</span>
          </div>

          {/* Tips */}
          {attraction.tips && attraction.tips.length > 0 && (
            <div className="mt-3 space-y-1">
              {attraction.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-1.5 text-[11px]">
                  <span className="text-amber-500 shrink-0">💡</span>
                  <span className="text-slate-600">{tip}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
