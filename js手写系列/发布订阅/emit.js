class EventEmitter {
    constructor() {
        this.events = {}
    }

    on(type, fn) {
        if(!this.events[type]) {
            this.events[type] = []
        }
        this.events[type].push(fn)
    }

    emit(type) {
        if (type) {
            this.events[type].forEach(fn => {
                fn()
            });
        }
    }

    off(type, fn) {
        if (this.events[type]) {
            this.events[type] = this.events[type].filter(item => item !== fn)
        }
    }

    once(type, fn) {
        const onceFunc = () => {
            fn()
            this.off(type, onceFunc)
        }
        this.on(type, onceFunc)
    }

}

let emitter = new EventEmitter()