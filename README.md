# 易采通官网 · yicaitong

湖南易采通供应链有限公司（湖南省集采集供平台）官方网站。中文站，面向百度检索。

- 技术栈：Astro 4.16 静态站点（SSG）
- 部署：Cloudflare Pages，`main` 分支推送即自动构建
- 构建命令：`npm run build`　输出目录：`dist`

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 产物在 dist/
npm run preview
```

## 目录

```
src/
  data/site.ts       站点常量：公司信息、导航、联系方式
  data/products.ts   产品与规格数据（唯一数据源）
  layouts/           基础布局（SEO/OG/JSON-LD）
  components/        页头、页脚
  pages/             首页、产品中心（4 品类）、溯源品控、集采集供、禁塑政策、经销合作、关于、联系、404
public/img/          站点图片（已剔除第三方品牌图）
docs/                见同级 ../docs 目录：事实底座、内容方案、建站说明
```

## 内容纪律

1. 只写可核验的事实，每条对外数字须有来源（见 `../docs/01-事实底座与证据链.md`）。
2. 环保宣称必须挂标准号或检测报告编号；可降解 ≠ 可堆肥，不得泛称"环保无污染"。
3. 未核实项一律不上站：供应链数字（32/166/30+/20000㎡）、价格承诺、荣誉称号、领导姓名。
4. 图片不得含第三方品牌 logo 或水印。

## 部署

- GitHub：https://github.com/easell/yicaitong
- Cloudflare Pages 项目：`yicaitong`（Git 连接型，生产分支 `main`，构建 `npm run build` → `dist`）
- 预览：https://yicaitong.pages.dev
- 推送即构建；若推送后没触发构建，说明 Cloudflare Pages 的 GitHub App 未包含本仓库，见 `../docs/03-建站说明与待补清单.md` 第四节。

## 上线状态

正式域名（easell.com）未接入。上线阻塞项见 `../docs/03-建站说明与待补清单.md`：备案状态、表单后端、400 续费、域名解析与接入方式、地址口径。
