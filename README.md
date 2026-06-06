# 四川科技企业官网

纯静态企业网站，11 个页面，打开即用。深蓝（`#12212f`）+ 金色（`#ffad00`）。

---

## 如何修改内容

所有内容在 `data/` 目录下，改完即生效，无需编译。

### 公司信息 → `data/config.js`

```javascript
company: {
  shortName: "四川科技",               // 简称
  fullName: "四川科技",                 // 全称
  icp: "京ICP备13014254号"             // 备案号
},
contact: {
  phone: "（010）88258670 / 71 / 72",   // 电话
  email: "sales@xxx.com",              // 邮箱
  workHours: "周一至周五 9:00 - 18:00"  // 工作时间
}
```

### 产品 → `data/products.js`

```javascript
{
  name: "光电倍增管(PMT)",              // 名称
  link: "product-detail.html?id=pmt",  // 详情链接（id 需唯一）
  brief: {                              // ← 列表卡片用
    img: "images/prod/pmt.png",         //    图片
    desc: "Photonis品牌，多型号可选"     //    简介
  },
  detail: {                             // ← 详情页用（可选，不配则自动用brief）
    images: ["...png", "...png"],       //    画廊多图
    text: "<p>详细描述</p><table>..."    //    详情正文（HTML）
  }
}
```

添加新分类直接复制已有分类块，修改 `id`、`name` 和 `items` 即可。

### 新闻 → `data/news.js`

```javascript
{
  id: "news1",                              // 唯一 ID
  thumb: "images/news-thumb-1.png",         // 列表缩略图
  hero: "images/news-detail-news1.png",      // 详情头图
  date: "2025-04-15",
  category: "公司动态",
  title: "新闻标题",
  desc: "摘要文字（列表显示）",
  content: "<p>正文 HTML</p>",              // 详情页正文
  views: 238                                // 浏览量
}
```

### 品牌 → `data/brands.js`

```javascript
{ name: "ORTEC", image: "images/brand-ortec.png", country: "美国", desc: "核电子学" }
```

### 服务项目 / 招聘职位 / 业务领域

分别在 `data/config.js`（`serviceItems`、`jobs`）和 `data/sectors.js` 中修改。

---

## 如何换图片

所有图片在 `images/` 下，是**纯色占位 PNG**。用 Photoshop / Canva / 画图 等工具生成同名 PNG 覆盖即可。

| 目录 | 内容 | 建议尺寸 |
|------|------|----------|
| `images/` | Logo、Banner、品牌 Logo、新闻图 | 见现有文件 |
| `images/prod/` | 产品图片 | 300×240 |

---

## 部署

整个文件夹上传到任意 Web 服务器（Nginx/Apache/OSS/GitHub Pages），无后端依赖。
