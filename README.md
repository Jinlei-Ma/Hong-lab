# GitHub 公开主页最终仓库

这个文件夹就是给 GitHub 用的最终版本。

你要公开访问主页时，不要再上传上一级目录，也不要只上传某个子文件夹。
正确做法是：把这个文件夹里的全部内容直接放到 GitHub 仓库根目录。

## 里面已经包含

- 当前网页源码
- 团队成员照片
- 个人主页、科研成果、教学研究等原始资料
- GitHub Pages 自动部署工作流
- 适配普通仓库名和 `用户名.github.io` 仓库名的配置

## 你要上传到 GitHub 的内容

把这个目录中的全部内容上传到仓库根目录：

- `app/`
- `components/`
- `lib/`
- `public/`
- `.github/workflows/deploy.yml`
- `package.json`
- `package-lock.json`
- `next.config.mjs`
- `tsconfig.json`
- `next-env.d.ts`
- `资料源文件/`

## 推荐发布方式

### 方式一：仓库名是 `jinlei-ma.github.io`

如果你的仓库名就是：

```text
jinlei-ma.github.io
```

那么上传这份仓库后，在 GitHub 仓库里：

1. 打开 `Settings`
2. 打开 `Pages`
3. 在 Source 里选择 `GitHub Actions`
4. 等待工作流执行完成

之后主页地址就是：

```text
https://jinlei-ma.github.io/
```

### 方式二：仓库名是普通项目名

如果仓库名不是 `jinlei-ma.github.io`，也没关系。
这份配置已经兼容普通项目仓库，发布地址会变成：

```text
https://jinlei-ma.github.io/仓库名/
```

同样只需要在 `Pages` 里选择 `GitHub Actions`。

## 当前环境说明

我已经把本地项目整理成这份最终仓库，并补齐了团队成员照片与原始资料。
但当前这个终端没有现成的 GitHub 远程仓库地址，也没有可用的 `gh` 命令，所以我还不能直接替你把代码推送到 GitHub。

如果你已经在 GitHub 上建好仓库，我下一步只需要知道仓库地址，就可以继续帮你处理推送步骤。
