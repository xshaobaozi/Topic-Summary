
setState 分两种情况,
如果处于`isBatchingUpdates`为 false 为同步更新
如果处于`isBatchingUpdates`为 true 为异步更新 通过合并数据最后统一更新
经过 React 处理的事件是不会同步更新 this.state 的. 通过 addEventListener || setTimeout/setInterval 的方式处理的则会同步更新。
