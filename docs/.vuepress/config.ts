import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

import navbar from './configs/navbar'
import sidebar from './configs/sidebar'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/common/',
  lang: 'zh-CN',
  title: '通用前端模块',
  description: '自用前端公共模块',
  head: [
    ['link', { rel: 'manifest', href: '/common/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#1e72ff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/common/apple-touch-icon.png'
      }
    ],
    [
      'link',
      { rel: 'mask-icon', href: '/common/safari-pinned-tab.svg', color: '#1e72ff' }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/common/favicon-16x16.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/common/favicon-32x32.png'
      }
    ],
    ['link', { rel: 'icon', type: 'image/png', href: '/common/favicon.png' }]
  ],

  themeConfig: {
    navbar: navbar,
    sidebar: sidebar,
    sidebarDepth: 0,

    repo: 'zhengxs2018/common',
    docsDir: 'docs',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    editLinkText: '在 GitHub 上编辑此页'
  },
  plugins: [['@vuepress/search'], ['@vuepress/pwa'], ['@vuepress/pwa-popup']]
})
