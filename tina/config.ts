import { defineConfig } from "tinacms";

// 获取分支环境变量
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  
  // 1. 基础配置
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  // 2. 构建配置
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },

  // 3. 媒体配置
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",
    },
  },

  // 4. 搜索配置
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },

  // 5. 数据结构 (Schema)
  schema: {
    collections: [
      // --- 文档集合 (Docs) ---
      {
        name: "doc",
        label: "Docs",
        path: "docs",
        format: "md", // 根据你的文件后缀设为 md
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          // 🔴 修复点：将 'id' 改为 'slug'，避免与系统保留字冲突
          {
            type: "string",
            name: "slug", 
            label: "Slug (URL)",
            description: "自定义文档的 URL 路径",
          },
          {
            type: "string",
            name: "sidebar_label",
            label: "Sidebar Label",
          },
          {
            type: "number",
            name: "sidebar_position",
            label: "Sidebar Position",
          },
          {
            type: "string",
            name: "description",
            label: "Description (SEO)",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      // --- 博客集合 (Blog Posts) ---
      {
        name: "post",
        label: "Blog Posts",
        path: "blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
            ui: {
              dateFormat: "YYYY-MM-DD"
            }
          },
          {
            type: "string",
            name: "slug",
            label: "Slug (URL)",
          },
          {
            type: "string",
            name: "authors",
            label: "Authors",
            list: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "image",
            name: "image",
            label: "Cover Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});