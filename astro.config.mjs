// Astro 配置 —— 湖南易采通供应链有限公司官网（easell.com）
// 纯静态 SSG；中文站面向百度 + 微信生态；托管待定（阿里云 OSS+CDN，见 docs/02 方案 §二）
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.easell.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('404'),
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
});
