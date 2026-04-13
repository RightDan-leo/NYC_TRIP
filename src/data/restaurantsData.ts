import type { EnglishLevel } from './attractionsData';

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  image: string;
  description: string;
  englishLevel: EnglishLevel;
  chineseMenu: boolean;
  chineseService: boolean;
  priceRange: string;
  address: string;
  coords: [number, number];
  recommended: string[];
  spiceLevel: number; // 0-3, for Sichuan friends
}

export const restaurants: Restaurant[] = [
  {
    id: "keens",
    name: "Keens Steakhouse",
    cuisine: "美式牛排",
    image: "/images/restaurants/keens.webp",
    description: "1885年开业的纽约传奇牛排馆，天花板挂满百年烟斗收藏。招牌 Mutton Chop（羊排）全纽约独此一家。",
    englishLevel: "basic",
    chineseMenu: false,
    chineseService: false,
    priceRange: "$70-100",
    address: "72 W 36th St",
    coords: [40.7502, -73.9876],
    recommended: ["Mutton Chop", "Prime Rib", "Creamed Spinach"],
    spiceLevel: 0
  },
  {
    id: "chuanlichuanwai",
    name: "川里川外",
    cuisine: "川菜",
    image: "/images/restaurants/chuanlichuanwai.webp",
    description: "纽约中城最受好评的川菜馆之一，老板和服务员都是四川人，全程中文无障碍。味道接近成都本地水准。",
    englishLevel: "none",
    chineseMenu: true,
    chineseService: true,
    priceRange: "$30-40",
    address: "39th St, Midtown",
    coords: [40.7527, -73.9862],
    recommended: ["毛血旺", "水煮鱼", "回锅肉", "麻婆豆腐"],
    spiceLevel: 3
  },
  {
    id: "mala_project",
    name: "麻辣项目 MáLà Project",
    cuisine: "麻辣干锅",
    image: "/images/restaurants/mala_project.webp",
    description: "East Village 最火的中式麻辣干锅店，自选食材+辣度，本质就是国内的麻辣香锅。老板是中国人，有中文服务。",
    englishLevel: "none",
    chineseMenu: true,
    chineseService: true,
    priceRange: "$20-30",
    address: "122 1st Ave, East Village",
    coords: [40.7275, -73.9843],
    recommended: ["麻辣香锅（自选）", "辣度可调至变态辣"],
    spiceLevel: 3
  },
  {
    id: "joes_shanghai",
    name: "Joe's Shanghai 鹿鸣春",
    cuisine: "上海菜",
    image: "/images/restaurants/joes_shanghai.webp",
    description: "中国城排名第一的小笼包餐厅，蟹粉小笼包是招牌中的招牌。完全中文环境，四川朋友可以毫无压力地点菜。",
    englishLevel: "none",
    chineseMenu: true,
    chineseService: true,
    priceRange: "$15-25",
    address: "46 Bowery, Chinatown",
    coords: [40.7153, -73.9975],
    recommended: ["蟹粉小笼包", "红烧肉", "葱油面"],
    spiceLevel: 0
  },
  {
    id: "haidilao",
    name: "海底捞 Haidilao",
    cuisine: "四川火锅",
    image: "/images/restaurants/haidilao.webp",
    description: "最熟悉的海底捞，纽约有多家分店。和国内一模一样的服务和味道，最后一餐吃火锅是完美的收官选择。",
    englishLevel: "none",
    chineseMenu: true,
    chineseService: true,
    priceRange: "$50-70",
    address: "多个分店 (Midtown/Flushing)",
    coords: [40.7559, -73.9837],
    recommended: ["麻辣锅底", "毛肚", "虾滑", "手工面表演"],
    spiceLevel: 3
  },
  {
    id: "dadong",
    name: "大董纽约 DaDong",
    cuisine: "创意中餐",
    image: "/images/restaurants/dadong.webp",
    description: "米其林推荐餐厅，北京烤鸭纽约第一。环境高端大气，适合告别晚宴。中文服务完善，菜单有中英双语。",
    englishLevel: "none",
    chineseMenu: true,
    chineseService: true,
    priceRange: "$80-120",
    address: "3 Bryant Park",
    coords: [40.7539, -73.9840],
    recommended: ["北京烤鸭", "意境菜品", "甜品"],
    spiceLevel: 1
  },
  {
    id: "xian_famous",
    name: "Xi'an Famous Foods",
    cuisine: "陕西小吃",
    image: "/images/restaurants/xian_famous.webp",
    description: "纽约最受欢迎的中式小吃连锁之一，主打陕西风味。biangbiang面和肉夹馍是招牌。多个分店遍布曼哈顿。",
    englishLevel: "none",
    chineseMenu: true,
    chineseService: true,
    priceRange: "$10-18",
    address: "多个分店",
    coords: [40.7576, -73.9857],
    recommended: ["biangbiang面", "肉夹馍", "凉皮"],
    spiceLevel: 2
  }
];
