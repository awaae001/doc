import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "文轩夜话",
  description: "公开的文档知识库",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/images/icon.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/icon.png',
    nav: [
      { text: '主页', link: '/' },
    ],

    sidebar: [
      {
        text: '关于',
        collapsed: false,
        items: [
          { text: '关于本站', link: '/about-site' },
          { text: '快速开始', link: '/start' }
        ]
      },{
        text: 'cardplus',
        collapsed: false,
        items:[
          { text: '概览', link: '/cardplus/Home' },
          { text: '安装', link: '/cardplus/install' },
          {
            text: '使用',
            collapsed: false,
            items: [
              { text: '角色信息', link: '/cardplus/use/cardinfo' },
              { text: '世界信息', link: '/cardplus/use/world' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/awaae001/doc' }
    ]
  }
})
