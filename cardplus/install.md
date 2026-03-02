# 如何安装

对于一般用户来说，安装 APP 简直是轻而易举

但是如果你不是一般用户，你是 牛逼 的 用户，你可以试试 `clone` 仓库，本地运行

## 下载构建版本

前往主仓库的 `Actions` 页面下载对应产物：

- `web-build`：Web 部署版本
- `linux-appimage`：Linux 应用
- `windows-nsis-installer`：Windows `.exe` 安装器
- `windows-msi-installer`：Windows `.msi` 安装器

## 本地构建

确保你可爱的电脑上有 [nodejs](https://nodejs.org/zh-cn) 和 [git](https://git-scm.com/)。

```bash
~
❯ node -v
v24.11.0

~
❯ git -v
git version 2.53.0

```

如果有，那就`clone`

```bash
git clone https://github.com/awaae001/st_cardplus.git
cd st_cardplus
pnpm install
pnpm dev:web
```

`web` 是 `web-only` 模式的标记，如果你**没有** `Rust` 工具链，请使用 `web-only`模式启动

桌面端还需要 Rust 与 Tauri 工具链。
