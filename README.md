# Magic Note 课堂笔记原型

原网址：[在线体验](https://demo-classroom.happymorel8.chatgpt.site/)

这是为 GitHub Pages 整理的独立静态网站文件。代码和页面已准备；本包尚未上传，也尚未生成 GitHub Pages 地址。

## 发布

1. 在 `kechangyuan3` 账号下新建仓库，建议命名 `magic-note-demo`，默认分支为 `main`。
2. 解压本包，把本目录的内容上传到仓库根目录。不要只上传 ZIP；确保包含 `.github/workflows/pages.yml`。
3. 在仓库 `Settings → Pages → Build and deployment → Source` 选择 `GitHub Actions`。如首次运行失败，在 `Actions` 中重新运行 `Publish website`。
4. 部署成功后，在 Pages 设置或成功的 Actions 运行中复制真实发布地址。预期路径为 `https://kechangyuan3.github.io/magic-note-demo/`，目前尚未上线。

GitHub Free 通常需要公开仓库使用 Pages；如果需要私有源代码，请先核对账号套餐。Pages 网页本身通常公开。用户评论研究原站为私有，发布本包前请确认愿意公开其中的研究内容。原网址不受本包影响。

## 数据

浏览器中新增的个人笔记、上传文件和录音保存在当前浏览器，不在本包内。迁移网址不会自动搬迁旧域名的本机数据；请在旧站导出要保留的内容。研究页支持从旧站导出和在新站导入编码结果。

页面使用浏览器录音和语音服务。GitHub Pages 提供 HTTPS，但语音识别是否可用仍取决于浏览器、网络和麦克风权限。手势模型已随包提供，构建时按固定 SHA256 校验；缺失时才重新下载。
