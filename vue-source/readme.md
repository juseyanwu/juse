## vue 源码之compile

## 从vue源码中学到了什么？
    代码之美 逻辑，封装，抽象，性能，严谨
    原来vue这样的框架也是可以写出来，调用api可以完成业务，未来更对写出这样的高质量代码，甚至是开源项目有着憧憬

- 正则表达式
    [\s]

- 闭包的高级使用
    - 在vue源码中，学习到了闭包的使用案例
    - 在compile模块 由template字符串转虚拟DOM时，我们会先tokenizer，在tokenizer函数内部会闭包一个push方法用于收集token的关键信息
    比如标签，属性，文本等
    - 在这个例子里的主要好处是私有化push，不影响外界，可读性就很好 把复杂留给自己

- 模块化
    - reactivity 响应式
        effect track trigger    WeakMap
        proxy
        baseHandler

    - complie 
        template -> ast -> VDOM(虚拟dom)
        ？
        parse 函数负责 template字符串的解析
        tokenizer 分词 将template字符串先分词 
        <div id="#app">
    每个模块内部的功能也分工的很明确

    模板字符串->tokens数组->向虚拟DOM(AST walk递归（生成虚拟dom数）)抽象语法树 -> helper(位运算) -> 代码