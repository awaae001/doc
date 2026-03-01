import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "文轩夜话",
  description: "公开的文档知识库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '关于',
        items: [
          { text: '关于本站', link: '/about-site' },
          { text: '快速开始', link: '/start' }
        ]
      },{
        text: 'cardplus',
        items:[
          {text: 'home', link:'cardplus/Home.md'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/awaae001' }
    ]
  }
})
