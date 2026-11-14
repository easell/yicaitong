// 站点常量 —— 全站唯一信息源
// 只收录已核实事实（见 docs/01-事实底座与证据链 v2，✅ 项）；⚠️ 项一律以注释留白，不渲染。
export const SITE = {
  name: '易采通',
  legalName: '湖南易采通供应链有限公司',
  url: 'https://www.easell.com',
  tagline: '湖南省集采集供平台',
  shortDesc:
    '易采通是湖南省集采集供平台，由湖南省循环经济研究会可降解塑料产业创新专委会监管，主打全生物降解纸杯、打包盒、垃圾袋、购物袋、刀叉勺、吸管等一次性可降解餐饮具与制品，统一监管、统一采购、统一仓储、统一配送，每件产品可溯源。',
  // 统一社会信用代码（营业执照正本转录，已核实）
  uscc: '91430104MABEXYD64',
  // 注册地址（营业执照口径）
  address: '湖南省长沙市岳麓区学士街道学华村碧桂园（智慧园）30 栋 102',
  phone: '400-0731-816',
  phoneNote: '7×24 小时服务热线',
  // ⚠️ 待核：400 协议 2025-11-07 到期，上线前确认是否续费在用
  // 备案号占位 —— 湘ICP备2022019296号-1 状态待核，上线前替换为有效备案号
  icpPlaceholder: '湘ICP备XXXXXXXX号',
  groupUrl: 'https://yuhao.group',
  founded: '2022-09-01',
} as const;

export const NAV = [
  { href: '/products/', label: '产品中心' },
  { href: '/quality/', label: '溯源与品控' },
  { href: '/model/', label: '集采集供' },
  { href: '/policy/', label: '禁塑政策' },
  { href: '/dealers/', label: '经销合作' },
  { href: '/about/', label: '关于易采通' },
] as const;
