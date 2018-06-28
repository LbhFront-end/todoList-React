todoList-React
=====================

将前面同样项目需求，不过是 `Vue版` 的 todoList 改造为 `React` 版本,也尝试应用新的框架 `Ant Design`

遇到的问题
-------------------

因为是第一次尝试将 `Vue` 项目 改为 `React` 项目，所以自然而然
会遇到很多坑，先作记录

px2rem 自动转换
----------------

这个真的是找了很久很久，花了一个上午的时间去配置尝试。之前 `Vue` 项目有很多教程找得到，而这个 `React` 可以找得到的少之又少，也可能是我不知道怎么去找，对于 `Webpack` 还是处于看得懂，但是如果更改过就不知道从何先手去改。  

这次搭建 `React` 是用 `generator-react-webpack` 去构建，从 `defaults.js` 里面修改主要用了 `webpack-px2rem-loader` 和在 `Main.js` 引入了 `react-flexible` 

安装如下：  
>npm install webpack-px2rem-loader --save
>
>npm install react-flexible --save

`export default` 与 `import`/`路由`
--------------------------------

导入的时候要不要加大括号取决你是不是一开始导出的时候用的是 `export default`  

 另外要注意的点是：  
 引入路由的 `Link`  记得加大括号

自动引入 `antd-mobile` 样式
------------------------------
在 `.babelrc.js` 中更改配置  
加上  

    "plugins": ["transform-runtime", ["import", {
        "libraryName": "antd-mobile",
        "style": "css"
    }]]

注意别把 `antd-mobile` 写成 `antd`  
然后 `transform-runtime` 跟 `import` 需要下载,前者生产跟开发环境都下载 