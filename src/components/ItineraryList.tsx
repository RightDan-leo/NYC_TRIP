import { useMemo } from 'react';
import type { ItineraryItem } from '../data/itineraryData';
import { weatherData } from '../data/weatherData';
import DaySection from './DaySection';

interface ItineraryListProps {
  items: ItineraryItem[];
  onUpdate: (index: number, field: keyof ItineraryItem, value: string) => void;
  onReset: () => void;
}

export default function ItineraryList({ items, onUpdate, onReset }: ItineraryListProps) {
  // Group items by date prefix (e.g. "04/14")
  const groupedDays = useMemo(() => {
    const groups: { dateKey: string; items: { item: ItineraryItem; globalIndex: number }[] }[] = [];
    let currentKey = '';

    items.forEach((item, index) => {
      const key = item.date.slice(0, 5); // "04/14"
      if (key !== currentKey) {
        currentKey = key;
        groups.push({ dateKey: key, items: [] });
      }
      groups[groups.length - 1].items.push({ item, globalIndex: index });
    });

    return groups;
  }, [items]);

  return (
    <div>
      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-4">
        <button className="px-4 py-2 text-sm font-semibold text-blue-600 border-b-2 border-blue-600">
          行程计划表
        </button>
        <button className="px-4 py-2 text-sm text-slate-400">
          推荐餐厅
        </button>
      </div>

      {/* Edit hint + Reset */}
      <div className="flex justify-between items-center mb-4 px-1">
        <span className="text-xs text-slate-400">直接点击下方文字即可编辑行程</span>
        <button
          className="text-xs text-red-500 hover:text-red-700 underline"
          onClick={() => { if (confirm('确定要重置为初始行程？')) onReset(); }}
        >
          重置为初始行程
        </button>
      </div>

      {/* Day sections */}
      {groupedDays.map(({ dateKey, items: dayItems }) => {
        const weather = weatherData.find(w => w.date === dateKey);
        return (
          <DaySection
            key={dateKey}
            dateKey={dateKey}
            items={dayItems}
            weather={weather}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}
