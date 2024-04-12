class MyPromise {
    constructor(executor){
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        this.resolvecallback = []
        this.rejectedcallback = []

        const resolve = (value) => {
            if(this.state === 'pending'){
                this.state = 'fulfilled'
                this.value = value
                this.resolvecallback.forEach(cb=>cb(value))
            }
        }

        const reject = (reason) => {
            if(this.state === 'pending'){
                this.state = 'rejected'
                this.reason = reason
                this.rejectedcallback.forEach(cb=>cb(reason))
            }
        }


        executor(resolve,reject)
    }

    then(resolvecallback,rejectedcallback){

    }
}