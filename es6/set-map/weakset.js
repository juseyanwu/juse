let obj = {name:'德玛西亚'}


let ws = new WeakSet()
ws.add(obj)

obj = null   //相当于把垃圾回收机制让obj被清理掉  如果不写这一行代码，obj仍然会被清除

console.log(ws);