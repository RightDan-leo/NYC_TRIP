import { useRef } from 'react';
import type { ItineraryItem } from '../data/itineraryData';
import EnglishBadge from './EnglishBadge';

interface ItineraryCardProps {
  item: ItineraryItem;
  index: number;
  onUpdate: (index: number, field: keyof ItineraryItem, value: string) => void;
}

export default function ItineraryCard({ item, index, onUpdate }: ItineraryCardProps) {
  const dateRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLSpanElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);

  const handleBlur = (field: keyof ItineraryItem, ref: React.RefObject<HTMLElement | null>) => {
    const text = ref.current?.innerText ?? '';
    onUpdate(index, field, text);
  };

  const isWork = item.event.includes('【工作】');

  // Color bar and card styling based on work/leisure
  const barColor = isWork ? 'bg-red-500' : 'bg-blue-400';
  const cardClass = isWork
    ? 'bg-red-50/80 border-red-200 hover:bg-red-100/80'
    : 'bg-white/80 border-slate-100 hover:bg-white';

  const dateClass = isWork
    ? 'text-xs font-bold text-red-600 editable'
    : 'text-xs font-bold text-blue-600 editable';

  const eventClass = isWork
    ? 'font-bold text-red-800 editable'
    : 'font-bold text-slate-800 editable';

  const noteClass = isWork
    ? 'md:w-44 italic text-[11px] text-red-400 bg-red-50 p-2 rounded border border-dashed border-red-200 editable'
    : 'md:w-44 italic text-[11px] text-slate-400 bg-slate-50 p-2 rounded border border-dashed border-slate-200 editable';

  return (
    <div className={`flex rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-all ${cardClass}`}>
      {/* Left color bar */}
      <div className={`w-1 shrink-0 ${barColor}`} />

      {/* Card content */}
      <div className="flex-1 p-3 flex flex-col md:flex-row md:items-center gap-3">
        {/* Date & Time */}
        <div className="md:w-24 shrink-0">
          <div
            ref={dateRef}
            className={dateClass}
            contentEditable
            suppressContentEditableWarning
            onBlur={() => handleBlur('date', dateRef)}
          >
            {item.date}
          </div>
          <div
            ref={timeRef}
            className="text-sm text-slate-500 editable"
            contentEditable
            suppressContentEditableWarning
            onBlur={() => handleBlur('time', timeRef)}
          >
            {item.time}
          </div>
        </div>

        {/* Event & Location */}
        <div className="grow min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <div
              ref={eventRef}
              className={eventClass}
              contentEditable
              suppressContentEditableWarning
              onBlur={() => handleBlur('event', eventRef)}
            >
              {item.event}
            </div>
            {item.englishLevel && <EnglishBadge level={item.englishLevel} />}
          </div>
          <div className="text-[11px] text-slate-500 flex items-center mt-1">
            <span className="mr-1.5">📍</span>
            <span
              ref={locationRef}
              className="editable"
              contentEditable
              suppressContentEditableWarning
              onBlur={() => handleBlur('location', locationRef)}
            >
              {item.location}
            </span>
          </div>
        </div>

        {/* Note */}
        <div
          ref={noteRef}
          className={noteClass}
          contentEditable
          suppressContentEditableWarning
          onBlur={() => handleBlur('note', noteRef)}
        >
          {item.note}
        </div>
      </div>
    </div>
  );
}
