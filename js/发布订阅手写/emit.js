class EventEmitter {
  constructor() {
    this.event = {};
  }
  on(type, cb) {
    if (!this.event[type]) {
      this.event[type] = [cb];
    } else {
      this.event[type].push(cb);
    }
  }

  emit(type, ...args) {
    if (!this.event[type]) {
      return;
    } else {
      this.event[type].forEach((cb) => {
        cb(...args);
      });
    }
  }

  off(type, cb) {
    if (!this.event[type]) {
      return;
    }
    else{
      this.event[type] = this.event[type].filter(item => item!=cb) //过滤数组，把符合item不等于cb的函数过滤出来得到一个新数组
    }
  }

  on(type,cb){
    const fn = (...args) => {
      cb(...args)
      this.off(type,fn)
    }
    this.on(type,fn)
  }
}
9
let ev = new EventEmitter();

const fn = (a, b, c) => {
  console.log(a, b, c);
};

const fn1 = (a, b) => {
  console.log(a, b, 1);
};

const fn2 = (a, b) => {
  console.log(a, b, 2);
};

const fn3 = (a, b) => {
  console.log(a, b, 3);
};


ev.on("run", fn1);
ev.on("run", fn2);
ev.on("run", fn3);

ev.off('run',fn1)


ev.emit("run", 1, 2, 3);
