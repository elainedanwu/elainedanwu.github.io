# 网站项目 (Docusaurus + TinaCMS)

本项目使用 [Docusaurus](https://docusaurus.io/) 构建，并集成了 [TinaCMS](https://tina.io/) 进行内容管理。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/elainedanwu/elainedanwu.github.io)

### 🛠️ 安装依赖

```bash
pnpm install
```

### 🚀 本地开发

**注意：** 请使用以下命令启动，以便同时开启 TinaCMS 编辑器，**不要**直接使用 `docusaurus start`。

```bash
pnpm tinacms dev -c "docusaurus start"
```

  * **网站预览:** http://localhost:3000
  * **CMS 编辑器:** http://localhost:3000/admin

### 📝 撰写文档注意事项 (重要)

在 `docs/` 或 `blog/` 目录下新建 `.md` 文件时，请务必遵守以下规则，否则会导致报错：

1.  **必须包含 Title**: 必须在文件顶部的 Frontmatter 中定义 `title`。
2.  **冒号处理**: 如果标题中包含 **冒号 (`:`)**，**必须**用英文双引号将整个标题括起来。

**✅ 正确写法：**

```markdown
---
title: "2024: A Year Surrounded by Light"
sidebar_position: 1
---
```

**❌ 错误写法 (会导致启动失败)：**

```markdown
---
title: 2024: A Year Surrounded by Light
---
```

### 📦 构建 (Build)

生成静态文件到 `build` 目录：

```bash
pnpm build
```

### ☁️ 部署 (Deployment)

发布到 GitHub Pages：

**使用 SSH:**

```bash
USE_SSH=true pnpm deploy
```

**不使用 SSH:**

```bash
GIT_USER=<你的GitHub用户名> pnpm deploy
```