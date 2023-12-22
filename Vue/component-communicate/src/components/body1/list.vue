<template>
      <div class="body">
        <ul>
          <li v-for="(item,index) in list" :key="index">{{ item }}</li>
        </ul>
        <button @click="changeprops">修改props</button>
      </div>
</template>

<script>
    export default {
        props:['list'],
        methods:{
            changeprops(){
                this.list[0] = 'HTML'
            }
        }
    }
</script>

<style lang="css" scoped>

</style>