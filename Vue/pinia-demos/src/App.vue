<script setup>
// 以组件为开发单元
import {ref} from 'vue'
const {todos,addTodo} = useTodoStore()
// const todos = ref([
//   {text:'haha'}
// ])
//todos 来到 vuex mapState pinia
import {useTodoStore} from './store/todo.js'
import TodoList from './components/TodoList.vue';
const todoStore = useTodoStore()
console.log(todoStore.todos);
</script>

<template>
  <div>
    <TodoList :todos="todoStore.todos" 
    :addTodo="todoStore.addTodo"/>
  </div>
</template>

<style scoped>
</style>
