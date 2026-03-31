# 洪竞科个人主页

这个文件夹是独立整理出来的一套静态个人主页，和当前课题组网站代码分开，原有 `app/`、`public/`、`lib/` 等内容没有改动。

## 文件结构

- `index.html`：主页入口
- `styles.css`：页面样式
- `script.js`：加载完整文本的小脚本
- `assets/profile-photo.jpg`：个人照片
- `source-docs/`：复制过来的原始 Word 文档
- `source-text/`：从 Word 导出的纯文本版本

## 本地预览

在当前目录进入这个文件夹后运行：

```bash
python3 -m http.server 8000
```

然后在浏览器打开：

```text
http://localhost:8000
```

## 发布到 GitHub Pages

1. 新建一个 GitHub 仓库。
2. 把这个文件夹里的全部内容上传到仓库根目录。
3. 打开 GitHub 仓库的 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. 选择 `main` 分支和 `/ (root)` 目录。
6. 保存后等待 GitHub Pages 自动发布。

## 说明

- 页面内容整理自 `个人主页.docx`、`科研成果.docx`、`教学研究.docx`。
- 原始 Word 文档和导出的 TXT 文本都保留在本文件夹里，便于后续继续修改网页内容。
- 如果后面你想把这个静态页再升级成多页面版本，我可以继续在这个文件夹内扩展，不会影响现在的课题组网站代码。
