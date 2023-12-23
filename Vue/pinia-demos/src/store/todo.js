//todo 数据管理模块 state状态 修改状态的方法
import {ref} from 'vue'
import {defineStore} from 'pinia'

// pinia配合vue3.0
// use开头的是hook函数
export const useTodoStore = defineStore("todo",()=>{
    const todos = ref([
        {txt:'年前脱单'}
    ])
    const addTodo = ()=>{
        todos.value = [{txt:'吃饭'}, ...todos.value]
    }
    return{
        todos,
        addTodo,
    }
})