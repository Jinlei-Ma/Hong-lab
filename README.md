# 当前网页 GitHub 部署包

这个文件夹是从你现在本地网页项目中单独整理出来的 GitHub 部署版本。

原项目没有被改动，你现在只需要使用这个新文件夹里的内容即可。

## 目录说明

- `publish-to-github/`
  这是已经导出的静态网页版本，内容和你当前本地部署网页对应。
  如果你想最省事地部署到 GitHub Pages，就用这个文件夹里的内容。
  这个版本最适合以下情况：
  你的仓库名就是 `你的用户名.github.io`，或者你绑定的是站点根域名。

- `source-project/`
  这是当前网页的源码备份，保留了 `app/`、`components/`、`lib/`、`public/` 和构建配置。
  后面如果你想继续改页面，再用这份源码。
  我已经额外补好了 GitHub Actions 自动部署配置，普通仓库名也能更稳地部署到 GitHub Pages。

## 最省事的部署方式

1. 在 GitHub 新建一个仓库。
2. 打开 `publish-to-github/`。
3. 把 `publish-to-github/` 里面的全部文件直接上传到仓库根目录。
   注意：是上传这个文件夹里面的内容，不是把整个 `GitHub部署版-当前网页` 文件夹一起当作网站根目录。
4. 在 GitHub 仓库中打开 `Settings` -> `Pages`。
5. `Build and deployment` 里选择 `Deploy from a branch`。
6. 选择 `main` 分支和 `/ (root)` 目录。
7. 保存后等待 GitHub Pages 发布。

## 为什么推荐用 `publish-to-github/`

因为你现在这个站点已经是静态导出格式，`publish-to-github/` 里已经包含：

- `index.html`
- 各栏目页面
- `_next/` 静态资源
- `media/` 图片资源
- `.nojekyll`

所以直接上传就能最大程度保持和你当前本地网页一致。

## 如果你的仓库不是 `你的用户名.github.io`

更推荐用 `source-project/` 这套源码版：

1. 把 `source-project/` 里面的全部文件上传到 GitHub 仓库根目录。
2. 打开仓库 `Settings` -> `Pages`。
3. 在 `Source` 或部署方式里选择 `GitHub Actions`。
4. 之后只要推送到 `main` 分支，就会自动构建并发布。

这个版本我已经加了自动识别仓库名的配置，适合部署到：

- `https://你的用户名.github.io/仓库名/`
- 或普通 GitHub Pages 项目仓库

## 如果后面你要继续改网页

使用 `source-project/`：

1. 进入 `source-project/`
2. 安装依赖
3. 运行构建

常用命令：

```bash
npm install
npm run build
```

构建完成后，会重新生成新的静态导出文件，再拿去部署到 GitHub Pages。
