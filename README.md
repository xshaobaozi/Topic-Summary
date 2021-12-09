# React

- React 合成事件
  - [深入 React 合成事件机制原理](https://zhuanlan.zhihu.com/p/347531057)
  - [React 合成事件](./md/React合成事件.md)
- redux 相关
  - [Redux 遵循的三个原则是什么](./md/Redux遵循的三个原则是什么.md)
- setState 相关
  - [react setState 是同步还是异步](./md/reactsetState是同步还是异步.md)
- fiber 相关
- diff
- key 作用
- context
- 跨组件传递数据
- 生命周期
- useEffect
- hook 原理
- useState
- 有什么 hook
- useMeno、useCallback
- 组件更新优化
- 什么是高阶组件，请举例说明
  - [什么是高阶组件，请举例说明](./md/什么是高阶组件，请举例说明.md)

# Vue

- vue 生命周期每一步做了什么
  - [Vue 每个生命周期做了什么](https://www.jianshu.com/p/8c23ed71a59d)
- 响应式原理
  - [深入浅出 Vue 响应式原理](https://segmentfault.com/a/1190000019700618)
  - [尤雨溪国外教程：亲手带你写个简易版的 Vue！](https://juejin.cn/post/6992018709439053837#heading-5)
  - 数组监听
- nextTick
  - [浅析 Vue.nextTick()原理](https://segmentfault.com/a/1190000020499713?utm_source=sf-similar-article)
- v-model 原理
- vue 动画
- vue data 为什么是函数
  - [为什么 vue 组件中 data 必须用函数表达？](https://zhuanlan.zhihu.com/p/159452050)
- 虚拟 dom
- vuex 原理
  - [vuex 工作原理详解](https://www.jianshu.com/p/d95a7b8afa06)
  - [Mutation 不能使用异步函数，为什么？](https://www.jianshu.com/p/d071e205b249)
  - [为什么 Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作？](https://blog.csdn.net/weixin_49757069/article/details/118388279)
- ref reactivestopImmediatePropagation
- slot 原理
- key
  - [vue中的key](https://juejin.cn/post/6844904053344829453)
- diff
  - [15张图，20分钟吃透Diff算法核心原理，我说的！！！](https://juejin.cn/post/6994959998283907102)
  - [React、Vue2、Vue3的三种Diff算法](https://juejin.cn/post/6919376064833667080)
- 组件 prop 和 state 传递
- setup 相关
- vue.use
- destroy 后还能做什么操作
- watch
- computed
  - [vuex 工作原理详解](https://www.jianshu.com/p/d95a7b8afa06)
- vue2 和 vue3 区别

# 路由

    vue、react路由原理

# 跨端

    Taro原理

# Javascript 基础

- 前端模块化机制

  - AMD 推崇依赖前置
  - CMD 推崇依赖就近
  - [前端模块化机制](https://zhuanlan.zhihu.com/p/129317481)
  - [CommonJS 和 ES6 模块的使用方法](https://www.jianshu.com/p/474a60e8e6ff)
  - [一览 js 模块化：从 CommonJS 到 ES6](https://segmentfault.com/a/1190000017492700)

- 0.1 + 0.1 != 0.2

- 浮点数转二进制时丢失了精度，计算完再转回十进制时和理论结果不同十进制转二进制计算后再转十进制输出

- 实现一个 promise

- 解释一下原型链

  - 原型链是 js 的原型对象 每个对象都有它的原型 比如 new Person -> Person 类 -> Object -> null

- [instanceof](./src/instanceof.js)
- 实现 add(1)(2)(3)
  - [curry](./src/curry.js)
- apply call bind 的作用及区别
  - [apply](./src/apply.js)
  - [bind](./src/bind.js)
  - [call](./src/call.js)

# CSS

- BFC

  - [bfc](./md/bfc.md)

- flex 实现元素均匀分布并向左对齐

- position 有哪些值，作用分别是什么

  - [position 有哪些值，作用分别是什么.md](./md/position有哪些值，作用分别是什么.md)

# webpack

- webpack 原理
- ast
- babel 相关
  - babel 原理
  - 怎么写一个 babel
- vite 和 webpack
- rollup、vite、webpack 有什么区别

# 浏览器

- web work
- server work
- pwa
- 离线缓存
- 减少白屏

  - [前端性能优化之白屏时间](https://cloud.tencent.com/developer/article/1508941)

  - [前端项目分析：我是如何做页面加载优化的（减少白屏时间，加快页面打开速度）](https://my.oschina.net/yunxiaomeng/blog/4830799)

- 说下你对 DOM 树的理解

  - DOM 是英文 Document Object Model 的缩写，即文档对象模型。它是一种跨平台的、独立于编程语言的 API，它把 HTML、XHTML 或 XML 文档当作一个树结构，而每个节点视为一个对象，这些对象可以被编程语言操作，进而改变文档的结构，映射到文档的显示。简单来说，DOM 就是我们为了方便编程语言对 HTML 等文档进行操作，所以啊，把 HTML 文档中的节点全部视为一个个的对象，然后这些对象依照层级关系形成一棵树，这棵树就命名为 DOM 树。有了对象，编程就方便多了，只要一层层拿到对象就可以优雅地改变对象的属性进而动态地改变 HTML 等文档的展示。

- 重排和重绘是什么，有什么区别

  - [【开发必看】你真的了解回流和重绘吗？](https://zhuanlan.zhihu.com/p/54811712)

- https 加密过程是怎样的

  - [HTTPS 加密（握手）过程](https://www.jianshu.com/p/e30a8c4fa329)

  - [HTTPS 为什么安全? 真的安全吗?](https://www.jianshu.com/p/463291c6b22d)

  - [HTTPS 中间人攻击及其防范](https://segmentfault.com/a/1190000013075736)

  - [浏览器 CA 认证流程](https://blog.csdn.net/qq_22771739/article/details/86479411)

- http1/2/3 做了哪些改进

  - [HTTP/2 相比 1.0 有哪些重大改进？](https://www.zhihu.com/question/34074946)
  - [http1/2/3 协议的对比（防忘）](https://www.jianshu.com/p/2e90fb951d17)

- 浏览器缓存策略

  - [浏览器缓存策略](https://www.cnblogs.com/roy1/p/13710238.html)

  - `Expires`和`Last-Modified`

  - [浏览器缓存](./md/浏览器缓存.md)

  - 3 次握手过程

# 微前端

# server less

# 算法

- 常用排序
- 洗牌算法
- 反转二叉树
