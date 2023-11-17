let arr = ['a','b','c','d','e']

for(let item of arr){
    console.log(item);
}

let obj = {
    name:'啊伟',
    age: 18,
    like: {
        type:'coding'
    }
}
let data = Object.create(obj)

for(let key in data){
    console.log(obj[key]);
}

//遍历数组的时候打印下标
if(data.hasOwnProperty(key)){
    console.log(key);
}