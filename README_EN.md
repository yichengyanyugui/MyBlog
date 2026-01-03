# MyBlog - Personal Blog Site

English | [中文](README.md)

A modern personal blog project based on Hexo, supporting multiple elegant themes and providing fast, flexible blog building and deployment solutions.

## 📋 Project Overview

**MyBlog** is a personal blog repository built with Hexo, a static site generator. This project aims to provide bloggers with:

- 📝 Lightweight Markdown writing experience
- 🎨 Multiple high-quality theme support (Anzhiyu, Butterfly, Landscape, YCYYG)
- 🚀 One-click quick deployment to multiple platforms
- 📱 Perfect mobile adaptation
- 🔍 Rich built-in features including search, categories, and tags

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| **Framework** | Hexo 7.3.0 |
| **Language** | JavaScript |
| **Package Manager** | npm |
| **Deployment** | Git + GitHub Pages or other static hosting |
| **Themes** | Anzhiyu / Butterfly / Landscape / YCYYG |

### Core Dependencies

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

## 📁 Project Structure

```
MyBlog/
├── source/              # Article source files
│   ├── _posts/         # Blog posts (Markdown format)
│   ├── _data/          # Data files (links, creativity, etc.)
│   ├── categories/     # Category pages
│   ├── tags/           # Tag pages
│   ├── link/           # Friendlinks page
│   └── music/          # Music page
├── public/              # Generated static files (build output)
├── themes/              # Theme folder
│   ├── anzhiyu/        # Recommended theme
│   ├── butterfly/      # Butterfly theme
│   ├── landscape/      # Default theme
│   └── ycyyg/          # YCYYG theme
├── scaffolds/           # Article templates
├── _config.yml          # Main configuration file
├── _config.anzhiyu.yml  # Anzhiyu theme config
├── _config.butterfly.yml # Butterfly theme config
├── _config.landscape.yml # Landscape theme config
├── _config.ycyyg.yml    # YCYYG theme config
├── package.json         # Project dependencies
└── db.json             # Hexo database
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 10.13.0
- npm or yarn
- Git

### Installation Steps

1. **Clone the Repository**
```bash
git clone https://github.com/yichengyaugugui/MyBlog.git
cd MyBlog
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start Local Development Server**
```bash
npm run server
# Or use Hexo command
hexo server
```
Visit `http://localhost:4000` to preview your blog

4. **Create a New Post**
```bash
hexo new post "Post Title"
# Edit the generated Markdown file: source/_posts/Post Title.md
```

5. **Generate Static Files**
```bash
npm run build
# Or use Hexo command
hexo generate
```

6. **Clean Cache**
```bash
npm run clean
# Or use Hexo command
hexo clean
```

## 📝 Writing Guide

### Front Matter Format

Add metadata (Front Matter) at the beginning of each article:

```yaml
---
title: Article Title
date: 2026-01-03 12:00:00
categories: Category Name
tags:
  - tag1
  - tag2
description: Brief article description
---

# Article Content
Write your article content using Markdown format...
```

### Common Fields Reference

| Field | Description | Example |
|-------|-------------|---------|
| `title` | Article title | "My First Blog Post" |
| `date` | Publication date | 2026-01-03 |
| `categories` | Article category | Technology |
| `tags` | Article tags | ["Hexo", "Blog"] |
| `description` | Article summary | "This is a tech article..." |
| `sticky` | Pin weight | 100 (higher value = higher priority) |

## 🎨 Theme Switching

This project includes multiple high-quality themes for you to choose from.

### How to Switch Themes

1. Edit `_config.yml` and find the `theme` field
2. Change it to the desired theme name

```yaml
# Modify this line
theme: anzhiyu  # Options: anzhiyu / butterfly / landscape / ycyyg
```

3. Restart the local server or regenerate

### Theme Configuration

- **Anzhiyu**: Edit `_config.anzhiyu.yml`
- **Butterfly**: Edit `_config.butterfly.yml`
- **Landscape**: Edit `_config.landscape.yml`
- **YCYYG**: Edit `_config.ycyyg.yml`

## 🌐 Deployment Guide

### Option 1: GitHub Pages

1. Create a repository named `username.github.io` on GitHub

2. Edit `_config.yml`
```yaml
deploy:
  type: git
  repo: https://github.com/username/username.github.io.git
  branch: main
```

3. Deploy
```bash
npm run deploy
# Or use Hexo command
hexo deploy
```

4. Visit `https://username.github.io` to view your blog

### Option 2: Vercel (Recommended)

1. Log in to [Vercel](https://vercel.com)
2. Connect your GitHub repository
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `public`
4. Click "Deploy" for automatic deployment

### Option 3: Netlify

1. Log in to [Netlify](https://netlify.com)
2. Select your GitHub repository
3. Netlify will automatically detect Hexo configuration and deploy

### Option 4: Self-hosted Server

```bash
# Generate static files
npm run build

# Upload the public directory to your server
# Use Nginx/Apache to serve static files
```

## ⚙️ Common Configuration

### Website Basic Settings (_config.yml)

```yaml
# Website title
title: MyBlog

# Subtitle
subtitle: Personal Blog

# Website description (SEO)
description: Sharing tech, life, and thoughts

# Website keywords
keywords: Hexo, Blog, Technology

# Author name
author: Your Name

# Language
language: zh-CN

# Timezone
timezone: Asia/Shanghai

# Website URL (Important!)
url: https://yourblog.com

# Article permalink format
permalink: :year/:month/:day/:title/
```

### Navigation Menu (Theme Configuration)

For example, editing `_config.anzhiyu.yml`:

```yaml
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags
  About: /about
  Links: /link
```

## 🔧 Daily Maintenance

### Common Commands

```bash
# Start local server
npm run server

# Clean cache and build
npm run clean && npm run build

# Deploy to remote
npm run deploy

# Quick deployment workflow
npm run clean && npm run build && npm run deploy
```

### Content Updates

1. Edit or create articles (in `source/_posts/`)
2. Run `hexo server` to preview locally
3. After confirming, run `npm run build`
4. Execute `npm run deploy` to publish

## 📚 Documentation Resources

- **Hexo Official Docs**: https://hexo.io/
- **Anzhiyu Theme Docs**: https://docs.anheyu.com/
- **Butterfly Theme**: https://butterfly.js.org/
- **YCYYG Theme**: https://github.com/YunYouJun/hexo-theme-ycyyg

## 💡 Frequently Asked Questions

### Q: How to add comment functionality?
A: Enable comment components in the theme configuration file (supports Disqus, Valine, Waline, etc.)

### Q: How to add search functionality?
A: Install `hexo-generator-search` or `algolia` plugin and enable it in the configuration file

### Q: How to speed up website loading?
A: 
- Enable CDN acceleration
- Configure image lazy loading
- Enable website compression and caching
- Enable related optimization options in theme configuration

### Q: Articles don't display after deployment?
A: Check:
- Ensure the article's `date` field is not in the future
- Run `hexo clean` to clear cache
- Check the `render_drafts` setting in `_config.yml`

## 📄 License

This project retains its original license. See the respective theme folders for individual theme licenses.

## 🤝 Contributing

Feel free to submit Issues and Pull Requests!

## 👨‍💻 Author

- **Blogger**: MyBlog Owner

---

**Last Updated**: 2026-01-03

**Happy blogging! ✨**
