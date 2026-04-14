export interface WeatherDay {
  date: string;
  dayLabel: string;
  icon: string;
  high: number;
  low: number;
  highF: number;
  lowF: number;
  condition: string;
  clothing: string;
  warning?: string;
}

export const weatherData: WeatherDay[] = [
  {
    date: "04/15",
    dayLabel: "周三 · 到达日（夜间）",
    icon: "🌦️",
    high: 28, low: 17, highF: 82, lowF: 63,
    condition: "小雨转多云",
    clothing: "短袖 + 薄外套备用",
    warning: "本周最热的一天 🔥 落地已是夜间，注意温差"
  },
  {
    date: "04/16",
    dayLabel: "周四 · 自由日 + 下午踩点",
    icon: "☁️",
    high: 26, low: 17, highF: 78, lowF: 63,
    condition: "多云",
    clothing: "短袖 + 轻薄外套",
    warning: "最重要的一天！穿舒适运动鞋"
  },
  {
    date: "04/17",
    dayLabel: "周五 · 工作日",
    icon: "🌤️",
    high: 25, low: 13, highF: 77, lowF: 56,
    condition: "晴间多云",
    clothing: "商务装 + 外套",
    warning: "昼夜温差 12°C，晚间降温明显"
  },
  {
    date: "04/18",
    dayLabel: "周六 · 半工作日",
    icon: "⛅",
    high: 20, low: 13, highF: 68, lowF: 56,
    condition: "多云，夜间小雨",
    clothing: "长袖 + 外套 + 雨伞",
    warning: "气温下降，注意保暖"
  },
  {
    date: "04/19",
    dayLabel: "周日 · 工作 + 最后一晚",
    icon: "🌦️",
    high: 22, low: 3, highF: 72, lowF: 38,
    condition: "小雨转晴",
    clothing: "长袖 + 厚外套",
    warning: "⚠️ 夜间骤降至 3°C！务必穿厚外套"
  },
  {
    date: "04/20",
    dayLabel: "周一 · 返程日",
    icon: "🌤️",
    high: 10, low: 3, highF: 50, lowF: 38,
    condition: "多云转晴",
    clothing: "厚外套 + 围巾",
    warning: "⚠️ 全程最冷！最高仅 10°C"
  }
];
