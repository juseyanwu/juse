<template>
   <div class="header">
    <Header/>
   </div>
    <div class="container">
        <div id="container"></div>
    </div>
    <div class="search">
      <el-input v-model="input" class="w-50 m-2" placeholder="查找附近门店">
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
    </div>
</template>
<script setup>
import { Search } from '@element-plus/icons-vue'
import { onMounted,ref } from "vue";
import Header from "../components/Header.vue";

onMounted(() => {
  var map = new BMap.Map("container");
  var point = new BMap.Point(116.404, 39.915);
  map.centerAndZoom(point, 15);
  map.enableScrollWheelZoom(true);
  
  

});

const input = ref('')
</script>
<style lang="less" scoped>
.header{
  width: 100%;
  height: 50px;
}
.container{
  // padding: 20px;
  #container {
    box-sizing: border-box;
  width: 100vw;
  height: 90vh;
  // border-radius: 20px;
}
}
.search{
  position: fixed;
  margin-left: 50px;
  width: 300px;
  height: 90px;
  top: 100px;
}
</style>
