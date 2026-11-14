// 产品数据 —— 仅收录已核实口径（ITEM LIST / 印刷内容定稿 / 介绍文档）
// 价格、进价、阶梯价等内部数据一律不上站。
export interface Category {
  slug: string;
  name: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  standards: string[];
  series: string[];
  specs: { label: string; value: string }[];
  notes: string[];
}

export const CATEGORIES: Category[] = [
  {
    slug: 'cups',
    name: '纸杯',
    title: '全生物降解纸杯批发定制',
    description:
      '品尝杯、冷热饮杯、咖啡杯、奶茶杯、汤桶、汤碗、爆米花桶系列，纸板+涂层（CA）与纸板+PLA 两条材质线，执行 GB/T 18006.3-2020，支持定制印刷。',
    image: '/img/cat-cups.webp',
    alt: '全生物降解牛皮纸汤桶与汤碗系列',
    standards: ['GB/T 18006.3-2020（一次性可降解餐饮具）'],
    series: ['品尝杯系列', '冷热饮系列', '咖啡杯系列', '奶茶系列', '汤桶系列', '汤碗系列', '爆米花桶系列'],
    specs: [
      { label: '材质线', value: '纸板+CA（涂层）／纸板+PLA' },
      { label: '适用温度', value: '0–100℃（可盛装冷热食品、可冷藏）' },
      { label: '质保期', value: '二年' },
      { label: '整箱装量', value: '如纸杯每箱 20 条 × 50 个（按规格略有差异）' },
      { label: '定制', value: '支持定制规格与 LOGO 印刷' },
    ],
    notes: [
      '内层不含微塑料：涂层线采用无塑涂层，PLA 线采用聚乳酸淋膜，具体以产品包装标注为准。',
      '包装按要求标注执行标准号、生产日期、质保期与生产商信息。',
    ],
  },
  {
    slug: 'boxes',
    name: '快餐打包盒与分格餐盒',
    title: '可降解打包盒、分格餐盒批发',
    description:
      '方型/圆形打包盒、分格餐盒、分格沙拉盒等一次性餐饮具，适合餐饮外卖、商超熟食与团餐场景，支持定制。',
    image: '/img/cat-boxes.webp',
    alt: '牛皮纸沙拉盒与打包盒',
    standards: ['GB/T 18006.3-2020（一次性可降解餐饮具）'],
    series: ['方型打包盒', '圆形打包盒', '分格餐盒', '分格沙拉盒', '沙拉盒'],
    specs: [
      { label: '常见材质', value: '纸板+涂层（CA／PLA）、淀粉基复合材料（以具体产品标注为准）' },
      { label: '定制', value: '支持规格定制与 LOGO 印刷' },
      { label: '场景', value: '外卖打包、商超熟食、团餐配送' },
    ],
    notes: ['执行标准与检测报告随订单提供，包装标注生产日期与质保期。'],
  },
  {
    slug: 'bags',
    name: '垃圾袋与购物袋',
    title: '全生物降解垃圾袋、购物袋批发定制',
    description:
      '生物降解塑料购物袋执行 GB/T 38082-2019，生物分解塑料垃圾袋执行 GB/T 28018-2011，材质 PLA+PBAT，支持背心袋、平口袋定制印刷。',
    image: '/img/cat-bags.webp',
    alt: '印有易采通信息的全生物降解垃圾袋',
    standards: ['GB/T 38082-2019（生物降解塑料购物袋）', 'GB/T 28018-2011（生物分解塑料垃圾袋）'],
    series: ['全降解购物袋（背心袋）', '全降解垃圾袋（平口/点断式）', '定制印刷袋'],
    specs: [
      { label: '材质', value: 'PLA+PBAT（+碳酸钙填充，以产品标注为准）' },
      { label: '常见规格', value: '购物袋 (20+10)×32cm 至 (38+19)×55cm 等多档' },
      { label: '包装', value: '如 50 个/扎 × 20 扎/件（按规格略有差异）' },
      { label: '质保期', value: '一年' },
      { label: '定制', value: '支持尺寸、厚度与印刷定制' },
    ],
    notes: ['袋子按标准印制规范标识，便于监督核查与溯源。'],
  },
  {
    slug: 'cutlery',
    name: '刀叉勺与吸管',
    title: '可降解刀叉勺、吸管批发',
    description:
      '玉米淀粉基刀叉勺，纸吸管与 PLA 吸管（单支独立包装），适配奶茶、咖啡与快餐场景，支持定制。',
    image: '/img/cat-cutlery.webp',
    alt: '玉米淀粉基可降解刀叉勺',
    standards: ['GB/T 18006.3-2020（一次性可降解餐饮具）'],
    series: ['刀叉勺（淀粉基）', '纸吸管', 'PLA 吸管（单支独立包装）'],
    specs: [
      { label: '刀叉勺', value: '玉米淀粉基材质，可定制颜色与包装' },
      { label: '吸管', value: '纸吸管／PLA 吸管，单支独立包装，尖口设计' },
      { label: '定制', value: '支持 LOGO 印刷' },
    ],
    notes: ['各品类执行相应国家标准，检测报告可随订单索取。'],
  },
];
