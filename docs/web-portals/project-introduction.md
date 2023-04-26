# 项目介绍

## 文件结构

```
├── build                                  // 打包配置
│       └── script                        // 打包脚本
│       └── vite                          // vite 配置
│       └── constant.ts                      // 通用常量
│       └── generateModifyVars.ts            // less变量生成
│       └── utils.ts                         // 通用工具
├── src         // 框架核心
│       └── api                       // 接口
│       └── assets                        // 资源
│       └── components                    // 公共组件
│       └── design                   // less 设计济源
│       └── directives                       // 全局指令
│       └── enums                         // 全局枚举
│       └── hooks                           // 全局钩子
│       └── layouts                       // layout框架页面
│       └── router                         // 路由表
│       └── settings                           // 全局配置
│       └── store                       // 全局公共存储
│       └── utils                         // 全局工具
│       └── views                           // 页面
```

## 配置文件

.env

```
# port
VITE_PORT = 2333

# spa-title
VITE_GLOB_APP_TITLE = Shss Web

# spa shortname
VITE_GLOB_APP_SHORT_NAME = shss_web

VITE_APP_IMAGE_PREFIX=http://192.168.10.18:9000

```

.env.development

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

.env.production

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

## 核心技术

### Vue3

**介绍**

Vue 3 是一款流行的 JavaScript 前端框架，是 Vue.js 的下一个版本。Vue 3 在功能、性能和编码体验等方面有着很大的改进和升级

**优点**

1. 更快的渲染速度：Vue 3 中使用了新的响应式 API 来跟踪组件状态的更改，这使得虚拟 DOM 在更新时更快，渲染性能更高。

2. 更小的大小：Vue 3 中的代码量比 Vue 2 更少，同时使用了 tree shaking 来优化打包大小。这使得 Vue 3 的终端包更小，加载更快。

3. 更好的 TypeScript 支持：Vue 3 中的 TypeScript 支持得到了大幅度改善，TypeScript 开发人员可以更容易地使用 Vue 框架，代码智能提示也更加友好。

4. 更优雅的 Composition API：Composition API 是 Vue 3 中的一个新特性，使用 Composition API 开发组件不再依赖选项，使用起来更加简洁、灵活，很好地解决了 Vue 2 中的一些问题。

5. 更好的自定义渲染器：Vue 3 支持使用长列表或自定义表格等，可以提高性能和灵活性，同时也可以帮助更好地应对复杂的场景。

6. 更好的 TypeScript 支持：Vue 3 中的 TypeScript 支持得到了大幅度改善，TypeScript 开发人员可以更容易地使用 Vue 框架，代码智能提示也更加友好。

### Typescript

**介绍**

TypeScript 是由微软公司开发的一种编程语言，是 JavaScript 的一个超集，可以编译成纯 JavaScript 代码。

**优点**

1. 静态类型检查：TypeScript 对 JavaScript 进行了扩展，使其具有静态类型检查的能力，在编译时可以发现代码错误，提高代码质量和稳定性。

2. 更好的 IDE 支持：TypeScript 提供了一些常用语言功能的类型定义，IDE 可以在代码补全、重构、代码跟踪等方面提供更好的支持，使得代码开发变得更加高效。

3. 更好的可读性和可维护性：TypeScript 通过类型定义的方式可以让代码更加易读、易懂，使得团队协作和代码维护更加容易。

4. 兼容性和平滑迁移：TypeScript 是一种 JavaScript 的超集，可以兼容 JavaScript 的所有代码，同时也可以逐步添加类型定义，在不影响已有代码的情况下完成平滑迁移。

5. 支持 ES6 和 ES7 语法：TypeScript 对 ES6 和 ES7 语法的支持非常好，可以使用最新的 ES6 和 ES7 语言特性，提高开发效率和代码质量。

### Konva

**介绍**

Konva 是一款基于 Canvas 的 HTML5 图形框架，可以在 Web 应用程序中绘制复杂的图形、动画和其他可视化内容。

**优点**

1. 强大的绘图能力：Konva 提供了丰富的绘图 API，可以轻松地绘制出各种复杂的图形、动画和其他可视化内容。

2. 高性能：Konva 使用了 Canvas 作为底层绘图引擎，具有出色的性能，可以快速渲染大量图形和动画。

3. 简单易用：Konva 提供了简单、易用的 API，即使是没有过多绘图经验的开发者也可以轻松上手。

4. 支持移动设备：Konva 支持移动设备的触摸事件和手势，可以为移动应用程序提供更强大的交互体验。

5. 开源，可扩展性强：Konva 是开源框架，可以通过插件等方式进行扩展。
