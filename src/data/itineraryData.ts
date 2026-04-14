import type { EnglishLevel } from './attractionsData';

export interface ItineraryItem {
  date: string;
  time: string;
  event: string;
  location: string;
  note: string;
  englishLevel?: EnglishLevel;
  attractionId?: string; // links to attractions dictionary
}

export interface MapPin {
  name: string;
  coords: [number, number];
  icon: string;
}

export const initialItinerary: ItineraryItem[] = [
  // ── 04/15 周三（到达日 · 夜间）─────────────────────────
  {
    date: "04/15 周三",
    time: "20:35",
    event: "✈️ 航班降落 JFK 机场",
    location: "JFK International Airport",
    note: "落地后取行李约30分钟",
    englishLevel: "basic"
  },
  {
    date: "04/15 周三",
    time: "21:30",
    event: "🚕 JFK → 酒店（建议打车）",
    location: "JFK → Westhouse Hotel, 201 W 55th St",
    note: "晚间打车约$70+小费，Uber约$55-65，约45-60分钟",
    englishLevel: "basic"
  },
  {
    date: "04/15 周三",
    time: "22:30",
    event: "🏨 入住酒店 + 酒店附近觅食",
    location: "Westhouse Hotel, 201 W 55th St",
    note: "附近有24h营业的Halal Guys、Shake Shack等快餐",
    englishLevel: "basic"
  },

  // ── 04/16 周四（自由日 + 下午踩点工作）──────────────────────
  {
    date: "04/16 周四",
    time: "08:30",
    event: "🗽 出发前往自由女神",
    location: "地铁1线 → South Ferry 站",
    note: "务必提前网购09:00首班渡轮船票！",
    englishLevel: "basic"
  },
  {
    date: "04/16 周四",
    time: "09:00",
    event: "🗽 自由女神 & Ellis Island",
    location: "Battery Park 渡轮码头",
    note: "渡轮往返约2.5h，船上甲板拍照最佳角度",
    englishLevel: "basic",
    attractionId: "statue_of_liberty"
  },
  {
    date: "04/16 周四",
    time: "11:30",
    event: "🐂 华尔街 & 铜牛打卡",
    location: "Wall St / Charging Bull, Broadway",
    note: "步行即达，摸牛鼻=好运，拍照5-10分钟",
    englishLevel: "none",
    attractionId: "wall_street"
  },
  {
    date: "04/16 周四",
    time: "12:00",
    event: "🥟 中国城午餐 @ Joe's Shanghai",
    location: "Joe's Shanghai, 46 Bowery",
    note: "全中文环境！蟹粉小笼包纽约第一",
    englishLevel: "none",
    attractionId: "chinatown"
  },
  {
    date: "04/16 周四",
    time: "13:15",
    event: "🚶 前往踩点地点",
    location: "中国城 → 419 Lafayette St（步行约10分钟）",
    note: "从中国城步行前往NoHo，提前到达准备",
    englishLevel: "none"
  },
  {
    date: "04/16 周四",
    time: "14:00-16:00",
    event: "【工作】万龙觉醒见面会场踩点",
    location: "419 Lafayette St. Flr. 7, New York, NY 10003",
    note: "场地考察，确认18号见面会布置方案"
  },
  {
    date: "04/16 周四",
    time: "16:15",
    event: "🌉 布鲁克林大桥步行 → DUMBO",
    location: "Brooklyn Bridge, City Hall 侧",
    note: "从踩点地点步行10分钟到桥头，30分钟走到DUMBO",
    englishLevel: "none",
    attractionId: "brooklyn_bridge"
  },
  {
    date: "04/16 周四",
    time: "17:00",
    event: "📸 DUMBO 拍照 + Jacques Torres",
    location: "Washington St, DUMBO, Brooklyn",
    note: "经典「桥下曼哈顿」角度，热巧克力必喝",
    englishLevel: "basic",
    attractionId: "dumbo"
  },
  {
    date: "04/16 周四",
    time: "17:45",
    event: "🍽️ Chelsea Market 美食 + High Line",
    location: "Chelsea Market, 75 9th Ave",
    note: "地铁F线至14St，Los Tacos No.1 必吃，楼上直通High Line",
    englishLevel: "basic",
    attractionId: "chelsea_market"
  },
  {
    date: "04/16 周四",
    time: "18:30",
    event: "🌿 High Line 空中花园散步（日落时分）",
    location: "The High Line, 从Chelsea Market旁入口上",
    note: "傍晚散步正好欣赏日落+城市天际线",
    englishLevel: "none",
    attractionId: "high_line"
  },
  {
    date: "04/16 周四",
    time: "19:30",
    event: "🌶️ 晚餐 @ 麻辣项目 MáLà Project",
    location: "122 1st Ave, East Village",
    note: "麻辣干锅自选食材+辣度，中文服务，人均$20-30",
    englishLevel: "none"
  },
  {
    date: "04/16 周四",
    time: "21:00",
    event: "🏙️ 帝国大厦夜景登顶",
    location: "Empire State Building, 350 5th Ave",
    note: "提前网购票，86层露天360°夜景，人少绝佳",
    englishLevel: "basic",
    attractionId: "empire_state"
  },

  // ── 04/17 周五（工作日 + 晚间自由）──────────────────────
  {
    date: "04/17 周五",
    time: "09:00-17:00",
    event: "【工作】万龙觉醒 1v1 会议（共2场）",
    location: "会议室 19A, 430 Park Ave 19th Floor",
    note: "全天工作，注意会议间隙休息"
  },
  {
    date: "04/17 周五",
    time: "18:00",
    event: "✨ 时代广场 (Times Square)",
    location: "Broadway & 7th Ave, 42-47th St",
    note: "纽约必到！巨幅LED屏+TKTS红阶梯拍照",
    englishLevel: "none",
    attractionId: "times_square"
  },
  {
    date: "04/17 周五",
    time: "18:30",
    event: "🍫 M&M's World / Hershey's",
    location: "1600 Broadway, Times Square",
    note: "三层巧克力天堂，可定制照片M&M，买伴手礼",
    englishLevel: "basic",
    attractionId: "mm_world"
  },
  {
    date: "04/17 周五",
    time: "19:30",
    event: "🌶️ 川菜晚餐 @ 川里川外",
    location: "川里川外, 39th St",
    note: "全中文服务，正宗成都味，犒劳工作一天",
    englishLevel: "none"
  },

  // ── 04/18 周六（上午自由 + 傍晚工作）──────────────────────
  {
    date: "04/18 周六",
    time: "09:30",
    event: "🏛️ 大都会博物馆 (The Met)",
    location: "1000 5th Ave, Central Park",
    note: "门票$30/人，租中文语音导览！重点看中国馆+埃及馆，3小时",
    englishLevel: "basic",
    attractionId: "the_met"
  },
  {
    date: "04/18 周六",
    time: "12:30",
    event: "🌳 中央公园漫步",
    location: "Central Park, Bethesda Fountain → Bow Bridge",
    note: "从Met南门直接进公园，Bow Bridge是最佳拍照点",
    englishLevel: "none",
    attractionId: "central_park"
  },
  {
    date: "04/18 周六",
    time: "13:30",
    event: "🪞 Summit One Vanderbilt",
    location: "One Vanderbilt, 42nd St",
    note: "全镜面沉浸体验，务必提前网购票，穿长裤",
    englishLevel: "basic",
    attractionId: "summit_ov"
  },
  {
    date: "04/18 周六",
    time: "15:30",
    event: "🚇 返回酒店/工作准备",
    location: "→ 419 Lafayette St",
    note: "确保16:00前到达工作地点"
  },
  {
    date: "04/18 周六",
    time: "16:30-22:30",
    event: "【工作】万龙觉醒见面会",
    location: "419 Lafayette St. Flr. 7, NY 10003",
    note: "重要活动，全程参与"
  },

  // ── 04/19 周日（工作日 + 最后一晚）──────────────────────
  {
    date: "04/19 周日",
    time: "09:00-17:00",
    event: "【工作】万龙觉醒 1v1 会议（共2场）",
    location: "Jay Suites, 315 Madison Ave, NY 10017",
    note: "全天工作"
  },
  {
    date: "04/19 周日",
    time: "17:30",
    event: "🛍️ 第五大道 & Columbus Circle",
    location: "5th Ave, 49th-59th St → Columbus Circle",
    note: "Apple Store玻璃立方体、Tiffany旗舰店，部分有中文导购",
    englishLevel: "basic",
    attractionId: "fifth_avenue"
  },
  {
    date: "04/19 周日",
    time: "19:00",
    event: "🍽️ 告别晚宴 @ 大董纽约 或 海底捞",
    location: "大董 DaDong, 3 Bryant Park / 海底捞",
    note: "中文服务，总结出差成果，合影留念",
    englishLevel: "none"
  },
  {
    date: "04/19 周日",
    time: "21:00",
    event: "🌃 Bryant Park 最后一晚夜景",
    location: "Bryant Park, 42nd St & 6th Ave",
    note: "旁边是纽约公共图书馆，最后一晚回味纽约",
    englishLevel: "none",
    attractionId: "bryant_park"
  },
  {
    date: "04/19 周日",
    time: "22:00",
    event: "📦 回酒店收拾行李",
    location: "Westhouse Hotel",
    note: "注意行李重量（经济舱23kg/件），整理伴手礼"
  },

  // ── 04/20 周一（返程日）──────────────────────────────
  {
    date: "04/20 周一",
    time: "06:30",
    event: "🚕 退房 → JFK 机场",
    location: "Westhouse Hotel → JFK",
    note: "⚠️ 10:00起飞需提前3h到！打车约45min",
    englishLevel: "basic"
  },
  {
    date: "04/20 周一",
    time: "10:00",
    event: "✈️ 航班起飞 · 返回中国",
    location: "JFK International Airport",
    note: "⚠️ 今天最冷仅10°C，穿厚外套！安全到家！",
    englishLevel: "basic"
  }
];

export const mapPins: MapPin[] = [
  // 住宿
  { name: "Westhouse Hotel (住宿)", coords: [40.7648, -73.9808], icon: "blue" },
  // 工作地点
  { name: "430 Park Ave 19F (万龙觉醒会议)", coords: [40.7616, -73.9726], icon: "red" },
  { name: "419 Lafayette St (万龙觉醒见面会)", coords: [40.7282, -73.9929], icon: "red" },
  { name: "Jay Suites (04/19会议)", coords: [40.7516, -73.9796], icon: "red" },
  // 景点
  { name: "自由女神渡轮口", coords: [40.7033, -74.0170], icon: "green" },
  { name: "华尔街 铜牛", coords: [40.7060, -74.0132], icon: "yellow" },
  { name: "中国城", coords: [40.7158, -73.9970], icon: "orange" },
  { name: "Brooklyn Bridge", coords: [40.7061, -73.9969], icon: "green" },
  { name: "DUMBO", coords: [40.7033, -73.9893], icon: "purple" },
  { name: "Chelsea Market", coords: [40.7423, -74.0062], icon: "orange" },
  { name: "High Line", coords: [40.7480, -74.0048], icon: "green" },
  { name: "帝国大厦", coords: [40.7484, -73.9857], icon: "purple" },
  { name: "时代广场", coords: [40.7588, -73.9851], icon: "yellow" },
  { name: "大都会博物馆", coords: [40.7794, -73.9632], icon: "blue" },
  { name: "中央公园 Bethesda", coords: [40.7736, -73.9712], icon: "green" },
  { name: "Summit One Vanderbilt", coords: [40.7529, -73.9785], icon: "purple" },
  { name: "第五大道", coords: [40.7637, -73.9721], icon: "orange" },
  { name: "Columbus Circle", coords: [40.7681, -73.9819], icon: "green" },
  { name: "Bryant Park", coords: [40.7536, -73.9832], icon: "green" },
  // 餐厅
  { name: "Joe's Shanghai", coords: [40.7153, -73.9975], icon: "orange" },
  { name: "麻辣项目", coords: [40.7275, -73.9843], icon: "orange" },
  { name: "川里川外", coords: [40.7527, -73.9862], icon: "orange" },
  { name: "大董纽约", coords: [40.7539, -73.9840], icon: "orange" }
];
