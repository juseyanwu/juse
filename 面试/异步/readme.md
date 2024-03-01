then:
1. 默认返回一个promise 对象，状态为fulfilled
2. 当then前面的promise状态为fulfilled，then中的回调直接执行
    当then前面的promise状态为rejected，then中的第二个回调直接执行，
    当then前面的promise状态为pending，then中的回调需要被缓存起来交给resolve或者reject执行