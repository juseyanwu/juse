# 企业级开发

- 代码的健壮性
    校验一下参数
    进程的安全性
    单线程 简单 + event loop 太脆了
    throw + try catch()

- cache 自由变量 key 的设置
    1+12 与 11+2    '1,12'  '11,2'
    - arguments 伪数组 兼容性不好
    [...arguments].join('')
    Array.from(arguments)
    Object.prototype.toString
    Array.prototype.join.call(arguments)借给arguments用
    [1,2,3].join(',') //this 指向数组

- fibonacci 爬楼梯
    - 递归的通用问题（不停的入栈，可能会爆栈）
        自顶向下解决问题 CEO 递归的不停的入栈
    - 记忆函数 备忘录 
    - 自底向上 解决
        f(1) = 1  f(2) = 1  


- 使用递归，快速的，基于自顶向下的思想来解决问题
    - 程序栈的问题 40%

- 可以先使用memoize 备忘录模式，来优化
    空间 {} key：value
- 都可以自底向上解决，每一步都有一个公式 f(n) = f(n-1) + f(n-2)
 动态规划 dp
    for 循环 (自底向上) 88%
- 99.9% 
    空间上再优化，不需要数组，我们只要最后的结果
    [a,b] = [b,a+b]
