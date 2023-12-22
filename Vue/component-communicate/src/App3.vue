<template>
    <div>
     <headx @add="handle"/>
      <list :msg="message"/>
    </div>
  </template>
  
  <script>
  import list from '@/components/body3/ListX.vue'
  import headx from '@/components/body3/Head.vue'
    export default {
      components:{
        list,
        headx
      },

      data(){
        return{
          message:''
        }
      },
      methods:{
        handle(val){
          this.message = val
        }
      }
    }
  </script>
  
  <style lang="css" scoped>
  
  </style>