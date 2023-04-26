import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Shss Docs',
  description: 'Shss Docs',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',
  base: '/',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/web-portals/': sidebarGuide(),
      '/backstage-management/': sidebarGuide()
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Zone'
    },

    lastUpdatedText: '最后更新',

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outlineTitle: '这一页'
  }
})

function nav() {
  return [
    { text: '文档', link: '/web-portals/introduce', activeMatch: '/web-portals/' },
    {
      text: version,
      items: [
        {
          text: '门户网站',
          link: 'https://gdyd.cai988.com:89'
        },
        {
          text: '后台管理系统',
          link: 'https://gdyd.cai988.com:89/admin'
        }
      ]
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: '门户网站',
      collapsible: true,
      items: [
        { text: '介绍', link: '/web-portals/introduce' },
        { text: '快速了解', link: '/web-portals/quick-understanding' },
        { text: '环境部署', link: '/web-portals/environment-deployment' },
        { text: '项目介绍', link: '/web-portals/project-introduction' },
        { text: '功能组件', link: '/web-portals/functional-components' }
      ]
    },
    {
      text: '后台管理',
      collapsible: true,
      items: [{ text: '前端手册', link: '/backstage-management/front-end-manual' }]
    }
  ]
}
