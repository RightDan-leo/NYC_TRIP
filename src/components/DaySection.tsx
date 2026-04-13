import type { ItineraryItem } from '../data/itineraryData';
import type { WeatherDay } from '../data/weatherData';
import { attractions } from '../data/attractionsData';
import WeatherCard from './WeatherCard';
import ItineraryCard from './ItineraryCard';
import AttractionCard from './AttractionCard';

interface DaySectionProps {
  dateKey: string;                 // e.g. "04/14"
  items: { item: ItineraryItem; globalIndex: number }[];
  weather?: WeatherDay;
  onUpdate: (index: number, field: keyof ItineraryItem, value: string) => void;
}

export default function DaySection({ dateKey, items, weather, onUpdate }: DaySectionProps) {
  // Build a theme label from the date
  const dayThemes: Record<string, string> = {
    '04/15': '到达日（夜间）',
    '04/16': '全天自由日 ⭐',
    '04/17': '工作 + 晚间自由',
    '04/18': '上午自由 + 傍晚工作',
    '04/19': '工作 + 最后一晚',
    '04/20': '返程日',
  };

  return (
    <section className="mb-6">
      {/* Day header */}
      <div className="sticky top-14 z-10 bg-slate-100/95 backdrop-blur-sm rounded-t-xl px-1 pt-2">
        {weather && <WeatherCard day={weather} />}
        {!weather && (
          <div className="px-4 py-2 font-bold text-slate-700">
            📅 {dateKey} — {dayThemes[dateKey] || ''}
          </div>
        )}
      </div>

      {/* Itinerary items */}
      <div className="space-y-2 mt-2">
        {items.map(({ item, globalIndex }) => (
          <div key={globalIndex}>
            <ItineraryCard
              item={item}
              index={globalIndex}
              onUpdate={onUpdate}
            />
            {/* Show attraction detail if linked */}
            {item.attractionId && attractions[item.attractionId] && (
              <AttractionCard attraction={attractions[item.attractionId]} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
