<template>
    <div>
        <li class="todo" :class="{ completed:todo.done }">
            <div class="view">
                <label v-text="todo.text"></label>
            </div>
        </li>
    </div>
</template>

<script setup>
defineProps({
    todo:Object
})
</script>

<style scoped>

</style>