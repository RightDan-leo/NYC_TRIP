export type EnglishLevel = 'none' | 'basic' | 'required';

export interface Attraction {
  id: string;
  name: string;
  nameEn: string;
  image: string;
  description: string;
  englishLevel: EnglishLevel;
  price?: string;
  hours?: string;
  address: string;
  tips?: string[];
  coords: [number, number];
}

export const attractions: Record<string, Attraction> = {
  columbus_circle: {
    id: "columbus_circle",
    name: "Columbus Circle & 中央公园南",
    nameEn: "Columbus Circle & Central Park South",
    image: "/images/attractions/columbus_circle.webp",
    description: "酒店步行5分钟即达，纽约最标志性的城市绿洲入口。傍晚的 Columbus Circle 车水马龙，适合拍出「纽约初印象」照片。喷泉广场被高楼环绕，是经典的纽约都市风景线。",
    englishLevel: "none",
    address: "Columbus Circle, Central Park South",
    tips: ["酒店步行仅5分钟", "傍晚光线最适合拍照", "轻松无压力的第一站"],
    coords: [40.7681, -73.9819]
  },
  the_met: {
    id: "the_met",
    name: "大都会博物馆 (The Met)",
    nameEn: "The Metropolitan Museum of Art",
    image: "/images/attractions/the_met.webp",
    description: "世界四大博物馆之一，收藏超过200万件文物。中国馆有完整的明代苏州园林「明轩」，三位四川朋友会倍感亲切。埃及馆的丹铎神庙(Temple of Dendur)是绝对必看项。建议至少3小时。",
    englishLevel: "basic",
    price: "$30/人",
    hours: "周日-二、四 10:00-17:00 / 周五六 10:00-21:00 / 周三闭馆",
    address: "1000 5th Ave, Central Park",
    tips: ["租中文语音导览器（$7）！三位朋友可独立逛", "自助购票机支持中文界面", "重点看中国馆和埃及馆"],
    coords: [40.7794, -73.9632]
  },
  central_park: {
    id: "central_park",
    name: "中央公园",
    nameEn: "Central Park",
    image: "/images/attractions/central_park.webp",
    description: "纽约的「绿肺」，面积是北京颐和园的1.5倍。Bethesda Fountain 是电影《Friends》《Home Alone 2》经典取景地。从 Met 南门出来步行5分钟即到。Bow Bridge（弓桥）是最浪漫的拍照点。",
    englishLevel: "none",
    address: "Central Park, Bethesda Fountain",
    tips: ["免费入场", "自带水和零食，公园内买东西贵", "Bow Bridge 是最佳拍照点"],
    coords: [40.7736, -73.9712]
  },
  fifth_avenue: {
    id: "fifth_avenue",
    name: "第五大道",
    nameEn: "Fifth Avenue",
    image: "/images/attractions/fifth_avenue.webp",
    description: "全球最贵的购物街之一。从49街到59街最精华：Apple Store 玻璃立方体（拍照圣地），Rockefeller Center，Tiffany & Co. 旗舰店。大品牌店通常有中文导购。",
    englishLevel: "basic",
    address: "5th Ave, 49th-59th St",
    tips: ["可以问 'Do you have Chinese-speaking staff?'", "Apple Store 玻璃立方体是拍照热点", "免费逛街"],
    coords: [40.7637, -73.9721]
  },
  statue_of_liberty: {
    id: "statue_of_liberty",
    name: "自由女神像",
    nameEn: "Statue of Liberty",
    image: "/images/attractions/statue_of_liberty.webp",
    description: "纽约的终极地标。从 Battery Park 乘坐渡轮前往 Liberty Island（约15分钟船程），近距离瞻仰这座48米高的铜像。建议只买 Ground Access（不上基座），渡轮上拍照角度最佳。",
    englishLevel: "basic",
    price: "$24/人 (含渡轮+Ellis Island)",
    hours: "首班渡轮 09:00",
    address: "Battery Park 渡轮码头",
    tips: ["必须提前在 statuecitycruises.com 网购！", "船上甲板风大，带外套", "安检严格类似机场", "建议订09:00首班"],
    coords: [40.6892, -74.0445]
  },
  wall_street: {
    id: "wall_street",
    name: "华尔街 & 铜牛",
    nameEn: "Wall Street & Charging Bull",
    image: "/images/attractions/wall_street.webp",
    description: "全球金融中心的象征。铜牛(Charging Bull)就在 Broadway 和 Morris St 路口，排队摸牛鼻子据说能带来好运。旁边的 Fearless Girl（无畏女孩）雕塑也是热门打卡点。",
    englishLevel: "none",
    address: "Wall St / Broadway & Morris St",
    tips: ["纯拍照打卡，5-10分钟", "免费", "铜牛摸鼻子=好运"],
    coords: [40.7060, -74.0132]
  },
  chinatown: {
    id: "chinatown",
    name: "中国城",
    nameEn: "Chinatown",
    image: "/images/attractions/chinatown.webp",
    description: "纽约最大的华人社区，满街中文招牌，恍如回到国内。Joe's Shanghai（鹿鸣春）的蟹粉小笼包全纽约排名第一。这里是三位朋友「语言自由」的天堂。",
    englishLevel: "none",
    address: "Canal St & Mott St",
    tips: ["全中文环境！", "Joe's Shanghai 小笼包必吃", "可以顺便买中式零食和调料"],
    coords: [40.7158, -73.9970]
  },
  brooklyn_bridge: {
    id: "brooklyn_bridge",
    name: "布鲁克林大桥",
    nameEn: "Brooklyn Bridge",
    image: "/images/attractions/brooklyn_bridge.webp",
    description: "1883年建成的标志性悬索桥。步行通道在汽车道上方，全程约30分钟。终点 DUMBO 是纽约最火的网红拍照地——在 Washington Street 能拍到曼哈顿大桥框住帝国大厦的经典构图。",
    englishLevel: "none",
    address: "Brooklyn Bridge, City Hall 侧",
    tips: ["从曼哈顿走向布鲁克林方向最佳（面对天际线）", "DUMBO的Washington St是经典机位", "免费"],
    coords: [40.7061, -73.9969]
  },
  empire_state: {
    id: "empire_state",
    name: "帝国大厦",
    nameEn: "Empire State Building",
    image: "/images/attractions/empire_state.webp",
    description: "纽约最经典的观景台，86层露天360°观景台是《西雅图不眠夜》《金刚》的取景地。强烈建议夜间去——21:00后人少，灯火辉煌的曼哈顿尽收眼底。",
    englishLevel: "basic",
    price: "86层约$44/人",
    hours: "每日开放至深夜",
    address: "350 5th Ave",
    tips: ["建议21:00后去，人少夜景绝佳", "提前网购门票", "出示手机电子票即可入场"],
    coords: [40.7484, -73.9857]
  },
  times_square: {
    id: "times_square",
    name: "时代广场",
    nameEn: "Times Square",
    image: "/images/attractions/times_square.webp",
    description: "全世界最繁忙的十字路口之一，被称为「世界的十字路口」。数十块巨型LED屏幕24小时播放广告。TKTS红阶梯是最佳拍照点，可以坐在台阶上拍出经典构图。",
    englishLevel: "none",
    address: "Broadway & 7th Ave, 42-47th St",
    tips: ["免费纯视觉体验", "TKTS红阶梯是最佳拍照点", "⚠️ 不要接受陌生人的CD光盘（骗局）", "与Cosplay角色合影后会要$5-10小费"],
    coords: [40.7588, -73.9851]
  },
  mm_world: {
    id: "mm_world",
    name: "M&M's World",
    nameEn: "M&M's World Times Square",
    image: "/images/attractions/mm_world.webp",
    description: "时代广场的巧克力/糖果旗舰店。三层楼，可以定制印有自己照片的M&M巧克力豆。隔壁 Hershey's Chocolate World 可以现场看制作 s'mores。极佳的伴手礼购买地。",
    englishLevel: "basic",
    price: "免费参观（购物另计）",
    address: "1600 Broadway, Times Square",
    tips: ["可以定制照片M&M巧克力", "适合买伴手礼", "自助选购无需交流"],
    coords: [40.7590, -73.9845]
  },
  chelsea_market: {
    id: "chelsea_market",
    name: "Chelsea Market",
    nameEn: "Chelsea Market",
    image: "/images/attractions/chelsea_market.webp",
    description: "由饼干工厂改造的室内美食市集，纽约本地人最爱的美食天堂。必吃：Los Tacos No. 1（全纽约最好吃的taco）、Lobster Place（龙虾卷）、Very Fresh Noodles（手拉面）。楼上就是 High Line 入口。",
    englishLevel: "basic",
    price: "人均$15-25",
    hours: "07:00-21:00",
    address: "75 9th Ave",
    tips: ["看菜单指着点即可", "Los Tacos No. 1 必吃", "楼上直通 High Line"],
    coords: [40.7423, -74.0062]
  },
  high_line: {
    id: "high_line",
    name: "High Line 空中花园",
    nameEn: "The High Line",
    image: "/images/attractions/high_line.webp",
    description: "由废弃高架铁路改造的空中步道公园，全长2.3公里。沿途有城市菜园、街头艺术、和令人惊叹的城市天际线视角。从 Chelsea Market 旁边的入口上去最方便。",
    englishLevel: "none",
    address: "Gansevoort St to 34th St",
    tips: ["免费入场", "从Chelsea Market旁入口最方便", "单向散步约30-40分，不必走全程"],
    coords: [40.7480, -74.0048]
  },
  summit_ov: {
    id: "summit_ov",
    name: "Summit One Vanderbilt",
    nameEn: "SUMMIT One Vanderbilt",
    image: "/images/attractions/summit_ov.webp",
    description: "纽约最火的沉浸式观景体验。最大亮点是 LEVITATION——全镜面地板反射下方42层楼的城市景观，走在上面如同悬浮空中。银色气球房间(Air)非常适合拍照。必须提前预约！",
    englishLevel: "basic",
    price: "$42-55/人",
    hours: "09:00-00:00（最后入场22:30）",
    address: "One Vanderbilt, 42nd St (Grand Central旁)",
    tips: ["必须提前在 summitov.com 预约！", "地面是镜子，建议穿长裤", "扫码入场跟着人流走即可"],
    coords: [40.7529, -73.9785]
  },
  soho: {
    id: "soho",
    name: "SoHo & NoHo 购物区",
    nameEn: "SoHo & NoHo",
    image: "/images/attractions/soho.webp",
    description: "纽约最时尚的购物区，充满19世纪铸铁建筑改造的品牌店铺。Nike SoHo 旗舰店（4层楼）、Supreme、Glossier 都在这里。NoHo 则更小众文艺，有独立设计师店。",
    englishLevel: "basic",
    address: "SoHo, Broadway & Prince St",
    tips: ["大品牌有时有中文导购", "看标价购物即可", "铸铁建筑本身就很适合拍照"],
    coords: [40.7233, -73.9985]
  },
  bryant_park: {
    id: "bryant_park",
    name: "Bryant Park",
    nameEn: "Bryant Park",
    image: "/images/attractions/bryant_park.webp",
    description: "隐藏在中城摩天楼之间的城市绿洲，旁边是纽约公共图书馆（《后天》电影取景地）。晚间灯光柔和，坐在草坪上看着四周的大楼灯光，是最后一晚最适合回味纽约的方式。",
    englishLevel: "none",
    address: "Bryant Park, 42nd St & 6th Ave",
    tips: ["免费入场", "旁边的纽约公共图书馆外观值得拍照", "最后一晚适合在此回味纽约"],
    coords: [40.7536, -73.9832]
  },
  dumbo: {
    id: "dumbo",
    name: "DUMBO 拍照打卡",
    nameEn: "DUMBO Brooklyn",
    image: "/images/attractions/dumbo.webp",
    description: "Down Under the Manhattan Bridge Overpass 的缩写，纽约最火的网红拍照地。Washington Street 能拍到曼哈顿大桥框住帝国大厦的经典构图。Jacques Torres 巧克力店也在这里。",
    englishLevel: "basic",
    address: "Washington St, DUMBO, Brooklyn",
    tips: ["Washington St是经典机位", "Jacques Torres 热巧克力必喝", "Time Out Market可以吃午餐"],
    coords: [40.7033, -73.9893]
  }
};
