# 机器学习任务
transformers 属于huggingface的核心库
- pipeline 分发任务
    pipeline(task,model)

- 数组和hashtable
    - 相同点
        都是数据容器 线性 
    - 区别
        数组， dict O(1)时间复杂度   栈 队列 链表  连续与不连续（内存空间）
        非线性 树 图

- transformers 支持哪些nlp任务
    SUPPORTED_TASKS 常量
    items 值是一个Dict JS JSON  由key value 构成
    for k ,v  in 循环   for 计数循环
    图解HTTP协议
    计算机组成原理

- 读/写 操作系统 I/O 操作 Input 内存
 Output 硬盘 
    同步代码    I/O  远程-> 内存|硬盘 网络传输
    的耗时
    for() ms 结束  多进程切换 轮循
    阻塞 
- 人生苦短 我用python
    - requests 网络请求
    requests.get(url, stream=True).raw
    http 请求的方法 get 明文请求 a
    post 提交表单

    - PIL 库 图片的读写等功能
        Image r
        imageDraw w
    - 
    


