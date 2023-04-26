# 环境部署

## 准备工作

```
Vue >= 3.2 (推荐^3.2.40版本)
Typescript >= 4.8.4
Ant-design-vue >= 3.2.13
```

## 运行系统

1、解压项目到工作目录后

2、导入到 `Microsoft VS Code`,菜单`File`->`Import`,然后选择项目,选择工作目录,然后点击 `Finish` 按钮，即可成功导入。

3、 执行`pnpm i` 会自定加载依赖包,初次加载会比较慢（根据自身网络情况而定）

4、打开项目运行出现如下图表示启动成功。

```
(♥◠‿◠)ﾉﾞ     ლ(´ڡ`ლ)ﾞ
 .-------.       ____     __
 |  _ _   \      \   \   /  /
 | ( ' )  |       \  _. /  '
 |(_ o _) /        _( )_ .'
 | (_,_).' __  ___(_ o _)'
 |  |\ \  |  ||   |(_,_)'
 |  | \ `'   /|   `-'  /
 |  |  \    /  \      /
 ''-'   `'-'    `-..-'
```

5、打开浏览器，输入：(http://localhost:233 (opens new window)) （默认账户/密码 admin/admin123）若能正确展示登录页面，并能成功登录，菜单及页面展示正常，则表明环境搭建成功

## 必要配置

修改本地环境配置,在根目录下的.env 和 .env.development 文件

```
# port
VITE_PORT = 2333

# spa-title
VITE_GLOB_APP_TITLE = Shss Web

# spa shortname
VITE_GLOB_APP_SHORT_NAME = shss_web

VITE_APP_IMAGE_PREFIX=http://192.168.10.18:9000

```

```
# public path
VITE_PUBLIC_PATH = /

# Cross-domain proxy, you can configure multiple
# Please note that no line breaks
VITE_PROXY = [["/basic-api","https://gdyd.cai988.com:89/api"]]

VITE_GLOB_CNAME = https://gdyd.cai988.com

VITE_GLOB_FILE_URL = https://gdyd.cai988.com:89/apifile

# Delete console
VITE_DROP_CONSOLE = false

# Basic interface address SPA
VITE_GLOB_API_URL=/basic-api

# File upload address， optional
VITE_GLOB_UPLOAD_URL=/upload

# Interface prefix
VITE_GLOB_API_URL_PREFIX=

```

修改线上环境配置,在根目录下的.env 和 .env.production 文件

```
# public path
VITE_PUBLIC_PATH = /

# Delete console
VITE_DROP_CONSOLE = true

# Whether to enable gzip or brotli compression
# Optional: gzip | brotli | none
# If you need multiple forms, you can use `,` to separate
VITE_BUILD_COMPRESS = 'none'

# Whether to delete origin files when using compress, default false
VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE = false

VITE_GLOB_CNAME = https://gdyd.cai988.com

# Basic interface address SPA
VITE_GLOB_API_URL = /api

# Basic interface address SPA
VITE_GLOB_FILE_URL = /apifile

# File upload address， optional
# It can be forwarded by nginx or write the actual address directly
VITE_GLOB_UPLOAD_URL=/upload

# Interface prefix
VITE_GLOB_API_URL_PREFIX=

# Whether to enable image compression
VITE_USE_IMAGEMIN= true

# Is it compatible with older browsers
VITE_LEGACY = false

```

## 部署系统

- 打包工程文件

在 项目的根目录下执行 `pnpm build` 打包 Web 工程，生成 dist 包文件。

- 部署工程文件
