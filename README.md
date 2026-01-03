# MyBlog - 个人博客站点

[English](README_EN.md) | 中文

一个基于 Hexo 的现代个人博客项目，支持多款精美主题，提供快速、灵活的博客搭建和部署方案。

## 📋 项目概述

**MyBlog** 是一个使用 Hexo 静态站点生成器构建的个人博客仓库。该项目旨在为博主提供：

- 📝 轻量级 Markdown 文章撰写体验
- 🎨 多款高质量主题支持（Anzhiyu、Butterfly、Landscape、YCYYG）
- 🚀 一键快速部署到多个平台
- 📱 完美的移动端适配
- 🔍 内置搜索、分类、标签等丰富功能

## 🛠️ 技术栈

| 技术 | 说明 |
|------|------|
| **框架** | Hexo 7.3.0 |
| **语言** | JavaScript |
| **包管理** | npm |
| **部署** | Git + GitHub Pages 或其他静态托管 |
| **主题** | Anzhiyu / Butterfly / Landscape / YCYYG |

### 核心依赖

```json
{
  "hexo": "^7.0.0",
  "hexo-renderer-pug": "^3.0.0",
  "hexo-renderer-stylus": "^3.0.1",
  "hexo-generator-archive": "^2.0.0",
  "hexo-generator-category": "^2.0.0",
  "hexo-generator-tag": "^2.0.0",
  "hexo-deployer-git": "^4.0.0"
}
```

## 📁 项目结构

```
MyBlog/
├── source/              # 文章源文件
│   ├── _posts/         # 博客文章（Markdown 格式）
│   ├── _data/          # 数据文件（链接、创意等）
│   ├── categories/     # 分类页面
│   ├── tags/           # 标签页面
│   ├── link/           # 友链页面
│   └── music/          # 音乐页面
├── public/              # 生成的静态文件（构建输出）
├── themes/              # 主题文件夹
│   ├── anzhiyu/        # 推荐主题
│   ├── butterfly/      # 蝴蝶主题
│   ├── landscape/      # 默认主题
│   └── ycyyg/          # 样式主题
├── scaffolds/           # 文章模板
├── _config.yml          # 主配置文件
├── _config.anzhiyu.yml  # Anzhiyu 主题配置
├── _config.butterfly.yml # Butterfly 主题配置
├── _config.landscape.yml # Landscape 主题配置
├── _config.ycyyg.yml    # YCYYG 主题配置
├── package.json         # 项目依赖
└── db.json             # Hexo 数据库
```

## 🚀 快速开始

### 前置要求

- Node.js >= 10.13.0
- npm 或 yarn
- Git

### 安装步骤

1. **克隆仓库**
```bash
git clone https://github.com/yichengyaugugui/MyBlog.git
cd MyBlog
```

2. **安装依赖**
```bash
npm install
```

3. **本地开发服务**
```bash
npm run server
# 或使用 Hexo 命令
hexo server
```
访问 `http://localhost:4000` 预览博客

4. **创建新文章**
```bash
hexo new post "文章标题"
# 编辑生成的 Markdown 文件：source/_posts/文章标题.md
```

5. **生成静态文件**
```bash
npm run build
# 或使用 Hexo 命令
hexo generate
```

6. **清理缓存**
```bash
npm run clean
# 或使用 Hexo 命令
hexo clean
```

## 📝 文章写作指南

### Front Matter 格式

在每篇文章的开头添加元数据（Front Matter）：

```yaml
---
title: 文章标题
date: 2026-01-03 12:00:00
categories: 分类名
tags:
  - 标签1
  - 标签2
description: 文章简要描述
---

# 文章正文
正文内容使用 Markdown 格式编写...
```

### 常用字段说明

| 字段 | 说明 | 示例 |
|------|------|------|
| `title` | 文章标题 | "我的第一篇博客" |
| `date` | 发布日期 | 2026-01-03 |
| `categories` | 文章分类 | 技术 |
| `tags` | 文章标签 | ["Hexo", "博客"] |
| `description` | 文章摘要 | "这是一篇技术文章..." |
| `sticky` | 置顶权重 | 100（数值越大越靠前） |

## 🎨 主题切换

本项目内置多个高质量主题，可根据喜好切换。

### 切换主题步骤

1. 编辑 `_config.yml`，找到 `theme` 字段
2. 修改为对应主题名称

```yaml
# 修改这一行
theme: anzhiyu  # 可选: anzhiyu / butterfly / landscape / ycyyg
```

3. 重启本地服务或重新生成

### 主题配置

- **Anzhiyu**：编辑 `_config.anzhiyu.yml`
- **Butterfly**：编辑 `_config.butterfly.yml`
- **Landscape**：编辑 `_config.landscape.yml`
- **YCYYG**：编辑 `_config.ycyyg.yml`

## 🌐 部署指南

### 方案 1：GitHub Pages

1. 在 GitHub 创建仓库 `username.github.io`

2. 编辑 `_config.yml`
```yaml
deploy:
  type: git
  repo: https://github.com/username/username.github.io.git
  branch: main
```

3. 部署
```bash
npm run deploy
# 或使用 Hexo 命令
hexo deploy
```

4. 访问 `https://username.github.io` 查看博客

### 方案 2：Vercel（推荐）

1. 登录 [Vercel](https://vercel.com)
2. 连接 GitHub 仓库
3. 配置构建设置：
   - **Build Command**: `npm run build`
   - **Output Directory**: `public`
4. 点击"Deploy"自动部署

### 方案 3：Netlify

1. 登录 [Netlify](https://netlify.com)
2. 选择 GitHub 仓库
3. 自动识别 Hexo 配置即可部署

### 方案 4：自建服务器

```bash
# 生成静态文件
npm run build

# 将 public 目录上传到服务器
# 使用 Nginx/Apache 提供静态文件服务
```

## ⚙️ 常见配置

### 网站基本信息（_config.yml）

```yaml
# 网站标题
title: 一城烟雨归

# 副标题
subtitle: 个人博客

# 网站描述（SEO）
description: 分享技术、生活与思考

# 网站关键词
keywords: Hexo, 博客, 技术

# 作者名
author: 一城烟雨归

# 语言
language: zh-CN

# 时区
timezone: Asia/Shanghai

# 网站URL（重要！）
url: https://yourblog.com

# 文章链接格式
permalink: :year/:month/:day/:title/
```

### 导航菜单（主题配置文件）

以 Anzhiyu 为例，编辑 `_config.anzhiyu.yml`：

```yaml
menu:
  首页: /
  文章: /archives
  分类: /categories
  标签: /tags
  关于: /about
  友链: /link
```

## 🔧 日常维护

### 常用命令

```bash
# 启动本地服务
npm run server

# 清理缓存并构建
npm run clean && npm run build

# 部署到远程
npm run deploy

# 快速部署流程
npm run clean && npm run build && npm run deploy
```

### 内容更新

1. 编辑或创建文章（位于 `source/_posts/`）
2. 运行 `hexo server` 本地预览
3. 确认无误后运行 `npm run build`
4. 执行 `npm run deploy` 发布

## 📚 文档资源

- **Hexo 官方文档**: https://hexo.io/zh-cn/
- **Anzhiyu 主题文档**: https://docs.anheyu.com/
- **Butterfly 主题**: https://butterfly.js.org/
- **YCYYG 主题**: https://github.com/YunYouJun/hexo-theme-ycyyg

## 💡 常见问题

### Q: 如何添加评论功能？
A: 在主题配置文件中启用评论组件（支持 Disqus、Valine、Waline 等）

### Q: 如何添加搜索功能？
A: 安装 `hexo-generator-search` 或 `algolia` 插件，在配置文件中启用

### Q: 如何加快网站加载速度？
A: 
- 启用 CDN 加速
- 配置图片懒加载
- 启用网站压缩和缓存
- 在主题配置中启用相关优化选项

### Q: 部署后文章不显示？
A: 检查：
- 确认文章的 `date` 字段不在未来
- 运行 `hexo clean` 清理缓存
- 检查 `_config.yml` 中的 `render_drafts` 设置

## 📄 许可证

本项目保持原有许可证。各主题许可证详见对应主题文件夹。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 👨‍💻 作者

- **博主**: 一城烟雨归

---

**最后更新**: 2026-01-03

**祝你使用愉快！✨**
