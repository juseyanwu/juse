
class Limit {
    constructor(paralleCount = 2) {
        this.tasks = []
        this.runningCount = 0
        this.paralleCount = paralleCount
    }

    add(task) {
        return new Promise((resolve, reject) => {
            this.tasks.push({ // 把add里面的resolve保留
                task,
                resolve,
                reject
            })

            this._run()
        })
    }

    _run() { //执行任务,while + 递归
        while(this.runningCount < this.paralleCount && this.tasks.length) {
            const {task, resolve, reject} = this.tasks.shift()
            task().then(resolve,reject).finally(() => {
                this.runningCount--
                this._run()
            })
            this.runningCount++
        }
    }
}

const limit = new Limit(2)


function ajax(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time);
    })
}



function addTask(time, name) {
    limit.add(() => ajax(time))
    .then(() => {
        console.log(`任务${name}完成`);
        
    }).catch(() => {
        console.log(`任务${name}失败`);
    })
}

addTask(10000, 1)
addTask(5000, 2)
addTask(1000, 3)
addTask(3000, 4)
addTask(7000, 5)