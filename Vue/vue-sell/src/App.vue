<template>
  <v-header />
  <router-view/>
</template>

<script>
import Header from '@/components/header/Header.vue'
import axios from 'axios'
export default{
  components:{
    'v-header':Header
  },
  created(){
    axios.get('/api/seller')
    .then((data)=>{
      console.log(data);
    })
  }

}
</script>




<style lang="less">

</style>
