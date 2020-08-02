# 前端技术（追溯法）

- [前端技术（追溯法）](#前端技术追溯法)
  - [浏览器更替](#浏览器更替)
  - [前端框架更替](#前端框架更替)
  - [部署方式演变历史](#部署方式演变历史)
  - [开发方式](#开发方式)

## 浏览器更替

1. 1994 年最早的 Netscape （网景浏览器）
2. 微软操作系统捆绑销售 IE，打败了 Netscape
3. Netscape 改名 Mozilla，Opera 浏览器初现
4. Apple 推出 Webkit 内核
5. 因为 IE 标准落后，2008 年 Webkit 内核的 Chrome 出现，逐渐占领市场
6. Opera 放弃自研的 Presto 内核转向 WebKit，微软放弃 IE 推出 Edge
7. 各大浏览器均基于 chromium 进行二次开发（QQ、UC、360）
8. 微软重新基于 chromium 开发新的 Edge

## 前端框架更替

1. 没有框架，手写 dom 操作代码
2. 在 IE 泛滥，浏览器兼容性成为主要难题时，使用 JQuery 抹平浏览器差异后再操作 dom
3. backbone、Angular 等 MVC 框架
4. 不直接操作 dom，数据驱动：Vue、React、Angular
5. 新的展现形式：小程序、Hybrid 开发、Electron、React Native 和 Weex

## 部署方式演变历史

1. 手动使用 ftp 上传到服务器
2. 动静分离，充分利用缓存
3. 使用 CI 工具持续部署，使用 CDN 加快静态资源加载速度

## 开发方式

1. 不分前后端，由开发人员完整地完成数据读取和页面展示
2. 由前端/设计编写 html 模版，交给开发人员填入数据
3. 前后端分离，通过接口进行数据交换
4. BFF 和 Serverless，由前端开发自行获取数据，后端专注于领域开发
