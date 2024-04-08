class MyPromise {
    constructor(executor){
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        this.onFulfilledCallback = []
        this.onRejectedCallback = []

        const reslove = (value) => {
            if(this.state === 'pending'){
                this.state = 'fulfilled'
                this.value = value
                this.onFulfilledCallback.forEach(cb=>cb(value))
            }
        }

        const reject = (reason) => {
            if(this.state === 'pending'){
                this.state = 'rejected'
                this.reason = reason
                this.onRejectedCallback.forEach(cb=>cb(reason))
            }
        }

        executor(reslove,reject)
    }
    
    then(onFulfilled,onRejected){

    }
}

let p = new MyPromise((reject)=>{
    reject('zjy')
})

console.log(p);