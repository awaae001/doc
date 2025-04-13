import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "呓语梦轩 · 藏经阁",
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
          {text: '角色信息编辑器', link: 'cardplus/CharacterCardEditor.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/awaae001' }
    ]
  }
})
