# React

# Redux 遵循的三个原则是什么

1、单一事实来源：整个应用程序的状态存储在单个存储中的对象/状态树中。单一状态树可以更轻松地跟踪随时间的变化以及调试或检查应用程序。

2、状态是只读的：改变状态的唯一方法是触发一个动作。操作是描述更改的普通 JS 对象。就像状态是数据的最小表示一样，动作是对该数据更改的最小表示。

3、使用纯函数进行更改：为了指定状态树如何通过操作转换，需要纯函数。纯函数是那些返回值仅取决于其参数值的函数。

## React 合成事件

[深入 React 合成事件机制原理](https://zhuanlan.zhihu.com/p/347531057)

- 对事件进行归类，可以在事件产生的任务上包含不同的优先级
- 提供合成事件对象，抹平浏览器的兼容性差异
- 事件处理函数不是绑定到组件的元素上的，而是绑定到 root 上，这和 fiber 树的结构特点有关，即事件处理函数只能作为 fiber 的 prop。
- 绑定到 root 上的事件监听不是我们在组件里写的事件处理函数，而是一个持有事件优先级，并能传递事件执行阶段标志的监听器。

源码中事件系统的代码量很大，我能活着出来主要是带着这几个问题去看的代码：绑定事件的过程是怎么样的、事件系统和优先级的联系、真正的事件处理函数到底如何执行的。

总结一下事件机制的原理：一个组件如果含有事件的 prop，那么将会在对应 fiber 节点的 commit 阶段绑定一个事件监听到 root 上，这个事件监听是持有优先级的，这将它和优先级机制联系了起来，可以把合成事件机制当作一个协调者，负责去协调合成事件对象、收集事件、触发真正的事件处理函数这三个过程

## react setState 是同步还是异步

setState 分两种情况,
如果处于`isBatchingUpdates`为 false 为同步更新
如果处于`isBatchingUpdates`为 true 为异步更新 通过合并数据最后统一更新
经过 React 处理的事件是不会同步更新 this.state 的. 通过 addEventListener || setTimeout/setInterval 的方式处理的则会同步更新。

## 什么是高阶组件，请举例说明

高阶组件是通过装饰器模式对组件进行包装 传入一个组件,返回一个新的组件,比如想对组件进行拓展 但是不想修改组件的代码 可以通过高阶组件实现

- 高阶组件可以用来作为状态的抽象和管理、属性的管理、组件的渲染等。
- 由于 Mixins 产生的问题比其带来的价值要大的多，因此我们要么避免过早的抽象，要么可以使用高阶组件。
- 不要在 render 方法内使用高阶组件，否则每一次渲染都会创建一个新的组件，并引起该组件的卸载和渲染。
- 高阶组件返回的新组件中将没有参数组件中的任何静态方法。因此需要对静态方法进行拷贝(可使用 hoist-non-react-statics ）或分别导出组件自身的静态方法。
- 在高阶组件中由于 refs 属性不能贯穿传递，但可以使用 React.forwardRef 来替代。
- 在高阶组件内，应避免对组件做任何修改。应使用组合技术，将输入的组件包裹到一个容器组件中。

# Vue

# Javascript 基础

## 0.1 + 0.1 != 0.2

浮点数转二进制时丢失了精度，计算完再转回十进制时和理论结果不同
十进制转二进制计算后再转十进制输出

## 实现一个 promise

## 解释一下原型链

原型链是 js 的原型对象 每个对象都有它的原型 比如 new Person -> Person 类 -> Object -> null

## instanceof 原理

[instanceof](./src/instanceof.js)

## apply call bind 的作用及区别

[apply](./src/apply.js)
[bind](./src/bind.js)
[call](./src/call.js)

# CSS

## BFC

### 条件

- 根元素或其它包含它的元素
- 浮动元素 (元素的 float 不是 none)
- 绝对定位元素 (元素具有 position 为 absolute 或 fixed)
- 内联块 (元素具有 display: inline-block)
- 表格单元格 (元素具有 display: table-cell，HTML 表格单元格默认属性)
- 表格标题 (元素具有 display: table-caption, HTML 表格标题默认属性)
- 具有 overflow 且值不是 visible 的块元素，
- display: flow-root
- column-span: all 应当总是会创建一个新的格式化上下文，即便具有 column-span: all 的元素并不被包裹在一个多列容器中。
- 一个块格式化上下文包括创建它的元素内部所有内容，除了被包含于创建新的块级格式化上下文的后代元素内的元素。

### BFC 特性(功能)

- 使 BFC 内部浮动元素不会到处乱跑；
- 和浮动元素产生边界。

## flex 实现元素均匀分布并向左对齐

## position 有哪些值，作用分别是什么

position 的属性值: relative，absolute，fixed，static，inherit，sticky

### static

static(没有定位)是 position 的默认值，元素处于正常的文档流中，会忽略 left、top、right、bottom 和 z-index 属性。

### relative

relative(相对定位)是指给元素设置相对于原本位置的定位，元素并不脱离文档流，因此元素原本的位置会被保留，其他的元素位置不会受到影响。
使用场景：子元素相对于父元素进行定位

### absolute

absolute(绝对定位)是指给元素设置绝对的定位，相对定位的对象可以分为两种情况：

- 设置了 absolute 的元素如果存在有祖先元素设置了 position 属性为 relative 或者 absolute，则这时元素的定位对象为此已设置 position 属性的祖先元素。

- 如果并没有设置了 position 属性的祖先元素，则此时相对于 body 进行定位。

#### 使用场景

跟随图标 图标使用不依赖定位父级的 absolute 和 margin 属性进行定位，这样，当文本的字符个数改变时，图标的位置可以自适应
视频提示 一般在视频图片上的边角上都会有"自制"、"最新"、"1080p"等诸如此类的提示。使用不依赖的绝对定位属性，可以让父级元素不设置 relative，拓展性更强
边缘对齐

### fixed

可以简单说 fixed 是特殊版的 absolute，fixed 元素总是相对于 body 定位的。

#### 使用场景：侧边栏或者广告图

### inherit

继承父元素的 position 属性，但需要注意的是 IE8 以及往前的版本都不支持 inherit 属性。

### sticky

设置了 sticky 的元素，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是 top、left 等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成 fixed，根据设置的 left、top 等属性成固定位置的效果。
当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。亦即如果你设置了 top: 50px，那么在 sticky 元素到达距离相对定位的元素顶部 50px 的位置时固定，不再向上移动（相当于此时 fixed 定位）。

#### 使用场景：

跟随窗口

# 浏览器

## 减少白屏

[前端性能优化之白屏时间](https://cloud.tencent.com/developer/article/1508941)

[前端项目分析：我是如何做页面加载优化的（减少白屏时间，加快页面打开速度）](https://my.oschina.net/yunxiaomeng/blog/4830799)

## 说下你对 DOM 树的理解

DOM 是英文 Document Object Model 的缩写，即文档对象模型。它是一种跨平台的、独立于编程语言的 API，它把 HTML、XHTML 或 XML 文档当作一个树结构，而每个节点视为一个对象，这些对象可以被编程语言操作，进而改变文档的结构，映射到文档的显示。

简单来说，DOM 就是我们为了方便编程语言对 HTML 等文档进行操作，所以啊，把 HTML 文档中的节点全部视为一个个的对象，然后这些对象依照层级关系形成一棵树，这棵树就命名为 DOM 树。有了对象，编程就方便多了，只要一层层拿到对象就可以优雅地改变对象的属性进而动态地改变 HTML 等文档的展示。

## 重排和重绘是什么，有什么区别

[【开发必看】你真的了解回流和重绘吗？](https://zhuanlan.zhihu.com/p/54811712)

## https 加密过程是怎样的

[HTTPS 加密（握手）过程](https://www.jianshu.com/p/e30a8c4fa329)

[HTTPS 为什么安全? 真的安全吗?](https://www.jianshu.com/p/463291c6b22d)

[HTTPS 中间人攻击及其防范](https://segmentfault.com/a/1190000013075736)

[浏览器 CA 认证流程](https://blog.csdn.net/qq_22771739/article/details/86479411)

## 浏览器缓存策略

[浏览器缓存策略](https://www.cnblogs.com/roy1/p/13710238.html)

`Expires`和`Last-Modified`

[浏览器缓存](./md/浏览器缓存.md)

## 3 次握手过程

## 实现 add(1)(2)(3)

[curry](./src/curry.js)

# 算法

## 反转二叉树
