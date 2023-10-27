var input = document.getElementById('list-input')
var ul = document.getElementById('list')

var todoItem =[]
input.onkeyup= function(e){
    if(e.keyCode===13){
        if(input.value !==''){
            todoItem.push(input.value)
            makeList()
        }

    }
}

function makeList(){
    //循环数组todoItem,生成多份li结构,添加到ul中
}