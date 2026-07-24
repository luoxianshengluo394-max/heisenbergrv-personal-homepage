# heisenbergrv.com

luoxiansheng 的个人主页，展示 Embedded Systems、Edge AI、MCU Firmware、Power Electronics 与 Hardware Systems 项目。

## 本地预览

需要 Node.js 22 或更高版本，以及 pnpm。

```bash
pnpm install
pnpm dev
```

浏览器访问 `http://localhost:3000`。

## 目录结构

```text
app/                    Next.js 页面入口、全局样式与元数据
components/home/        首页头像、奶蛙图片墙与项目卡片组件
data/projects.ts        项目列表、介绍、标签与链接
public/images/          网页图片资源
```

日后修改项目内容时，主要编辑 `data/projects.ts`；修改头像时，替换
`public/images/milk-frog/hero-leaf.webp`；修改首页文字时，编辑 `app/page.tsx`。

## 构建

```bash
pnpm build
```

静态网站会生成到 `out/` 目录。

## Cloudflare Pages

在 Cloudflare Pages 中连接本仓库，并使用以下设置：

- Framework preset: `Next.js (Static HTML Export)`
- Production branch: `main`
- Build command: `npx next build`
- Build output directory: `out`

每次推送到 `main` 分支后，Cloudflare Pages 会自动构建并发布新版网站。

## 项目地址

- Website: <https://heisenbergrv.com>
- GitHub: <https://github.com/luoxianshengluo394-max>
- Email: <luoxianshengluo394@gmail.com>
