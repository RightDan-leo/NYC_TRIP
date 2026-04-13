import type { WeatherDay } from '../data/weatherData';

export default function WeatherCard({ day }: { day: WeatherDay }) {
  const hasWarning = !!day.warning;
  return (
    <div className="flex items-center gap-3 md:gap-4 px-3 md:px-4 py-3 md:py-4 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl border border-sky-100">
      <div className="text-3xl md:text-4xl">{day.icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="font-bold text-slate-800 text-sm md:text-base">{day.date} {day.dayLabel}</span>
          <span className="text-xs md:text-sm text-slate-500">{day.condition}</span>
        </div>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-lg md:text-xl font-bold text-red-500">{day.high}°C</span>
          <span className="text-slate-300">/</span>
          <span className="text-lg md:text-xl font-bold text-blue-500">{day.low}°C</span>
          <span className="text-xs md:text-sm text-slate-400">({day.highF}°F / {day.lowF}°F)</span>
        </div>
      </div>
      <div className="text-right shrink-0">
        <div className="text-xs md:text-sm text-slate-500">👔 {day.clothing}</div>
        {hasWarning && (
          <div className="text-xs md:text-sm text-amber-600 font-medium mt-1">{day.warning}</div>
        )}
      </div>
    </div>
  );
}
