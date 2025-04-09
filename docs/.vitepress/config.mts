import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/rust/",
  title: "Rust学习笔记",
  description: "天天向上",
  lastUpdated: true,
  themeConfig: {
    outlineTitle: "页面导航",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/Rust基础知识/安装&&更新' }
    ],

    sidebar: [
      {
        text: 'Rust基础知识',
        collapsed: false,
        items: [
          { text: '安装&&更新', link: '/Rust基础知识/安装&&更新' },
          { text: '编译器与包管理工具以及开发环境搭建', link: '/Rust基础知识/编译器与包管理工具以及开发环境搭建' },
          { text: '获取Rust的库、国内源以及windows、Linux、MacOS的不同', link: '/Rust基础知识/获取Rust的库、国内源以及windows、Linux、MacOS的不同' }
        ]
      },
      {
        text: '变量与常见的数据类型',
        collapsed: false,
        items: [
          { text: '变量与不可变性', link: '/变量与常见的数据类型/变量与不可变性' },
          { text: '常量const与静态变量static', link: '/变量与常见的数据类型/常量const与静态变量static' },
          { text: 'Rust基础数据类型', link: '/变量与常见的数据类型/Rust基础数据类型' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wjr-dev/rust' }
    ]
  },
})
