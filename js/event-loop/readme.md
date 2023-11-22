# JS 是单线程语言


- 进程：CPU运行指令和保存上下文所需要的时间

- 线程：进程中的更小的单位，描述了一段指令执行所需的时间

## 浏览器新开一个tab就是新开一个进程
需要多个线程配合才能完成页面的展示
1. 渲染线程（GPU）
2. http请求线程
3. js引擎线程

渲染线程（GPU）和 js 引擎线程 是互斥的


# JS 单线程
优点：
1. 节省内存 
2. 单线程，没有锁的概念，所有可以节约上下文切换的时间

# 异步
- 宏任务(macrotask)
宏任务包含: script setTime setInterval setImmediate I/O UI-rendering
- 微任务(microtask)
微任务包含：promise.then() MutationObserver Process.nextTick()

# event-loop
1. 执行同步代码（这属于宏任务）
2. 当执行栈为空，查询是否有异步代码需要执行
3. 如果有的话，执行微任务
4. 微任务执行完毕了后，如果有需要会渲染页面
5. 执行宏任务（也叫下一轮的event-loop的开始）
