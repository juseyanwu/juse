<template>
  <div class="body">
    <ul>
      <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['msg'],
  watch:{
        msg(newval){
          this.lists.push(newval)
        }
      },
  data() {
    return {
      lists: ['html', 'css'],
    }
  },
}
</script>

<style lang="css" scoped></style>