### 项目预览
[项目预览](https://build-csyihhcgbt.now.sh)
### react+redux+react-router 写的架子以后项目可以直接拿来用
1. 使用webpack 4 搭建
2. react热更新 react-hot-loader
4. 分离css
5. 支持 scss/less/css
6. 支持 postcss
7. 分离打包第三方库文件
8. 分离 公共模块
9. 项目结构分层合理
11. eslint 代码检测
12. axios 异步请求
13. 增加 redux-saga 处理异步
14. 增加 router-redux 整合 (react-router-config/connnect-react-router)
15. 增加 module 和 router 按需加载(react-loadable)(完成)
16. 防抖和节流函数的运用
17. menu.js 多级菜单处理

全局的菜单和路由的配置文件在`src/common/menu.js`,`src/common/router.js`,参考了`antd-prod`项目的配置，在这俩个文件中配置项目的菜单和路由导航，使用了`react-loadable` 来做路由的按需加载
### 文件结构

```
── build
├── config
│   ├── build
│   │   └── records.json
│   ├── port.js
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   ├── webpack.dll.config.js
│   └── webpack.pro.js
├── package.json
├── postcss.config.js
├── readme.md
├── src
│   ├── assets
│   │   ├── css
│   │   │   ├── app.scss
│   │   │   ├── counter.scss
│   │   │   ├── home.scss
│   │   │   ├── index.scss
│   │   │   ├── layout.scss
│   │   │   ├── loading.scss
│   │   │   └── welcome.css
│   │   ├── images
│   │   │   └── logo.svg
│   │   └── js
│   ├── common
│   │   ├── menu.js
│   │   └── router.js
│   ├── components
│   │   ├── loading.js
│   │   └── Welcome.js
│   ├── containers
│   ├── layouts
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── layout.js
│   │   └── Nav.js
│   ├── main.js
│   ├── routes
│   │   ├── About
│   │   │   └── About.js
│   │   ├── Authorized.js
│   │   ├── Counter
│   │   │   ├── index.js
│   │   │   └── modules
│   │   │       ├── actions.js
│   │   │       ├── reducers.js
│   │   │       └── sagas.js
│   │   ├── Home
│   │   │   └── Home.js
│   │   ├── index.js
│   │   ├── root.js
│   │   ├── router.js
│   │   └── Todo
│   │       ├── components
│   │       │   ├── Footer.js
│   │       │   └── Todo.js
│   │       ├── containers
│   │       │   ├── AddTodo.js
│   │       │   └── TodoList.js
│   │       ├── index.js
│   │       └── modules
│   │           ├── actions.js
│   │           └── reducers.js
│   ├── services
│   ├── store
│   │   ├── createStore.js
│   │   ├── reducers.js
│   │   └── sagas.js
│   └── utils
│       └── debounce.js
│       └── ajax.js
└── static
    ├── css
    │   └── 404.css
    ├── images
    │   ├── 404.svg
    │   └── favicon.ico
    ├── js
    │   └── vendors_lib.js
    ├── NoMatch.js
    ├── tpl.html
    └── vendors-manifest.json

```

## 前台页面
### react/redux/react-router 结构
### main.js
前端程序源文件
### components
全局可复用的表现组件
### containers
全局可复用的容器组件
### assets
存放静态文件,比如css/images/js
### common
#### menu.js
项目菜单的配置文件
#### router.js
项目路由的配置文件
### layouts
主页结构布局文件
### routes
路由文件，一个路由一个文件夹，比如 Todo 文件夹，里面包括 components 路由展示文件， containers 路由容器组件 index.js 是子路由的入口文件。 modules 是 子路由的 redux 文件夹，里面包括 actions 和 reducers 和 sagas 文件
#### index.js
用 store 启动主程序路由
#### root.js
为上下文 provider 包住组件
#### router.js
所有的路由文件集合,使用了`react-router-config`的 `renderRoutes`方法渲染 放在 `src/common/router.js`文件中的路由
### store
文件夹中 reducers.js 是所有 reducer的集合， createStore.js 是配置 redux Store 的文件，可以在这里添加中间件, sagas.js 是全局的 sagas 文件集合
### service
该文件中存放 api 文件
### utils
存放工具类的文件。比如封装 ajax 请求，封装的时间处理等
### webpack 配置
#### webpack.dll.config.js
打包第三方框架文件，包括 react, react-dom, react-router-dom, redux, react-redux, 项目开始是要先运行一下这个文件再`npm start`
#### webpack.common.js
webpack 公共配置
#### webpack.dev.js
webpack 开发环境配置,包括
- scss,less
- html模板
- 热更新
  - babel-plugin-react-transform 不推荐 开发者已经停止维护了
  - react-hot-loader@v3 推荐
- webpack4 的 分离公共模块
#### webapck.pro.js
- css 缩小
- js 压缩


#### 注意问题：
1. 有时候你需要 `rm -rf node_modules/` 文件夹 然后重新 `npm install`,这个时候你会发现`node-sass`模块不管你怎么安装都没用，这个原因大部分是因为`cnpm`的源导致的，推荐安装 `nrm` 管理所有的 `npm` 源，使用`nrm use npm` 切换回 `npm` 的源 然后重新 `npm install` 就可以安装上了
2. `bable` 的配置需要俩个 一个是 `babel-preset-react` 和 `babel-preset-env` 然后 配置 `env` 的 插件 ，如果不是 `env`的插件 需要 单独的 `plugins` 模块安装

```

{
  "presets":[
    "react",
    ["env", {
      "targets": {
         "browsers": ["last 2 versions", "safari >= 7"],
         "node": "current"
      },
      "modules": false,
      "debug": true,
      "include": [
        "transform-es2015-arrow-functions",
        "transform-es2015-spread"
      ],
      "exclude": [],
      "useBuiltIns": true
    }]
  ],
  "plugins":[
        ["transform-runtime", {
            "helpers": false,
            "polyfill": false,
            "regenerator": true
        }],
        "transform-object-rest-spread"
  ]
}

```

> tip: 建议还是在`create-react-app` 脚手架的基础上进行自定义配置，自己搭的话需要从头再来
