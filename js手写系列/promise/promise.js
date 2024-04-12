class MyPromise {
    constructor(executor) {  //1.executor是promise里接收到的回调函数  2.翻译过来是解释器，解决器的意思  3.这个函数会被调用掉
        
        this.state = 'pending'  //promise的状态
        this.value = undefined   //这里把value 和 reason 存起来是为了让后面的then可以拿到
        this.reason = undefined
        this.onFulfilledCallbacks = []  //只要状态变为fulfilled就要执行的函数
        this.onRejectedCallbacks = []    //只要状态变为rejected就要执行的函数

        const resolve = (value) => {
            if(this.state === 'pending'){
                this.state = 'fulfilled'
                this.value = value
                this.onFulfilledCallbacks.forEach(cb => cb(value)) //把then中的回调函数触发掉
            }
        }

        const reject = (reason) => {
            if(this.state === 'pending'){
                this.state = 'rejected'
                this.reason = reason
                this.onRejectedCallbacks.forEach(cb => cb(reason)) //把then中的回调函数触发掉
            }
        }

        executor(resolve,reject)
    }

    then(onFulfilled,onRejected){
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;  
        //判断传进来的参数是不是函数体，如果是，当自己，如果不是，传一个没有意义的函数体
        onRejected = typeof onRejected === 'function' ? onRejected : value => value;

        // 返回一个promise
        const newPromise = new MyPromise((resolve,reject) => {
            if(this.state === 'fulfilled'){  //then前面的promise对象状态是同步变更完成了，自己把自己的回调触发掉就好了，没必要存起来
                                                //  这种情况在前面的promise回调里面写的是同步代码时
                setTimeout(()=>{
                    try{
                       const result = onFulfilled(this.value)
                        resolve(result)  //应该放result里面的resolve中的参数，不在意细节
                    }
                    catch(error){
                        reject(error)
                    }
                })                                  //因为then里面的逻辑必须是微任务，打造微任务是很麻烦的，所以写成宏任务
            }

            if(this.state === 'rejected'){
                setTimeout(() => {
                    try{
                        const result = onRejected(this.reason)
                        resolve(result)
                    }
                    catch(error){
                        reject(error)
                    }
                })
            }

            if(this.state === 'pending'){ //缓存then中的回调
                this.onFulfilledCallbacks.push((value)=>{
                    setTimeout(()=>{
                        try{
                           const result = onFulfilled(value)
                            resolve(result)
                        }catch(error){
                            reject(error)
                        }                            //保障将来onFulfilled在resolve中调用是一个异步函数
                    })

                    this.onRejectedCallbacks.push((reason)=>{
                        setTimeout(()=>{
                            try{
                               const result = onRejected(reason)
                                resolve(result)
                            }catch(error){
                                reject(error)
                            }                            //保障将来onFulfilled在resolve中调用是一个异步函数
                        })
                    })
                })
            }
        })

        return newPromise
    }

    static race(promises){          //static 静态方法，实例对象访问不到，相当于MyPromise.race
        return new MyPromise((resolve,reject) => {
            // 看promises里面的哪个对象的状态先变更完成
            // resolve()
            for(let promise of promises){
                promise.then(
                    (value) => {
                        resolve(value)
                    }, 
                    (reason) => {
                        reject(reason)
                    }
                )
            }
        })
    }
}

function a () {
    return new MyPromise((resolve)=>{
        setTimeout(()=>{
            console.log('a');
            resolve('ok')
        },1000)
    })
}

function b () {
    return new MyPromise ((resolve)=>{
        setTimeout(() => {
            console.log('b');
            resolve('yes')
        }, 500);
    })
}

a().then((res)=>{
    b()
    console.log(res);
})

// then里面的逻辑为什么是异步的，因为他需要等待promise的状态变更，而前面的promise的状态变更要等到promise里的异步执行完，例如发完一个需要耗时的请求
// 而then为什么是微任务呢，因为假设设计成宏任务的话，害怕promise里的状态变更完了之后想要执行then里的逻辑却没机会执行了，去执行其他宏任务了


// a()
// .then(...)

// 因为a()立即执行，.then也是立即执行，只不过里面的回调不会立即触发，那么.then里的回调要存起来，不然在该执行他的那个时间点就没办法触发它