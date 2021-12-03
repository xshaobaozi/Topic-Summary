# React

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

## 解释一下原型链

原型链是 js 的原型对象 每个对象都有它的原型 比如 new Person -> Person 类 -> Object -> null

## instanceof 原理

[instanceof](./src/instanceof.js)

## apply call bind 的作用及区别

[apply](./src/apply.js)
[bind](./src/bind.js)
[call](./src/call.js)

# CSS

## flex实现元素均匀分布并向左对齐

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

## 说下你对 DOM 树的理解

DOM 是英文 Document Object Model 的缩写，即文档对象模型。它是一种跨平台的、独立于编程语言的 API，它把 HTML、XHTML 或 XML 文档当作一个树结构，而每个节点视为一个对象，这些对象可以被编程语言操作，进而改变文档的结构，映射到文档的显示。

简单来说，DOM 就是我们为了方便编程语言对 HTML 等文档进行操作，所以啊，把 HTML 文档中的节点全部视为一个个的对象，然后这些对象依照层级关系形成一棵树，这棵树就命名为 DOM 树。有了对象，编程就方便多了，只要一层层拿到对象就可以优雅地改变对象的属性进而动态地改变 HTML 等文档的展示。

## 重排和重绘是什么，有什么区别

[【开发必看】你真的了解回流和重绘吗？](https://zhuanlan.zhihu.com/p/54811712)

## https 加密过程是怎样的
[HTTPS加密（握手）过程](https://www.jianshu.com/p/e30a8c4fa329)

[HTTPS 为什么安全? 真的安全吗?](https://www.jianshu.com/p/463291c6b22d)

[HTTPS 中间人攻击及其防范](https://segmentfault.com/a/1190000013075736)

[浏览器CA认证流程](https://blog.csdn.net/qq_22771739/article/details/86479411)

## 实现 add(1)(2)(3)
[curry](./src/curry.js)

# 算法

## 翻转二叉树