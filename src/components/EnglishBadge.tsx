import type { EnglishLevel } from '../data/attractionsData';

const config: Record<EnglishLevel, { icon: string; label: string; color: string }> = {
  none:     { icon: '🟢', label: '无需英文', color: 'bg-green-100 text-green-800 border-green-200' },
  basic:    { icon: '🟡', label: '基础英文', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
  required: { icon: '🔴', label: '需要英文', color: 'bg-red-100 text-red-800 border-red-200' },
};

export default function EnglishBadge({ level }: { level: EnglishLevel }) {
  const c = config[level];
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${c.color}`}>
      <span>{c.icon}</span>
      <span>{c.label}</span>
    </span>
  );
}
