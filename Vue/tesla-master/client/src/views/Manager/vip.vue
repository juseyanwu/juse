<template>
  <div class="main">
    <div class="search">
      <el-input v-model="input" placeholder="请输入需要查找的账号：" class="input" />
      <el-button type="success" @click="toSearch(input)">查询</el-button>
    </div>
    <div class="header">
      <div class="box">账号</div>
      <div class="box">Model 3 /辆</div>
      <div class="box">Model X /辆</div>
      <div class="box">Model S /辆</div>
      <div class="box">Model Y /辆</div>
      <div class="box">Cybertruck /辆</div>
      <div class="box">Powerwall /件</div>
      <div class="box"></div>
    </div>
    <div class="container" v-for="item in data" :key="item">
      <div class="box">{{ item.account }}</div>
      <div class="box">{{ item.commodity.Model3 }}</div>
      <div class="box">{{ item.commodity.ModelX }}</div>
      <div class="box">{{ item.commodity.ModelS }}</div>
      <div class="box">{{ item.commodity.ModelY }}</div>
      <div class="box">{{ item.commodity.Cybertruck }}</div>
      <div class="box">{{ item.commodity.Powerwall }}</div>
      <div class="box">
        <el-button type="danger" size="small" @click="deleteData(item.account)">删除</el-button>
      </div>
    </div>
  </div>
  <el-button text>Click to open the Message Box</el-button>
</template>
  

<script setup>
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import useAllInfoStore from "../../stores/allInfo";
import axios from "axios";
import { useRouter } from "vue-router";
import { ElMessage, ElMessageBox } from 'element-plus'
const router = useRouter();

var tableData;
let data = ref([]);
const useInfoStore = useAllInfoStore();

// console.log(useInfoStore.useAccount);
tableData = useInfoStore.useAccount;
data = JSON.parse(JSON.stringify(tableData));
console.log(data);

// 加载页面的时候获取页面数据
onBeforeMount(() => {
  tableData = useInfoStore.useAccount;
  data = JSON.parse(JSON.stringify(tableData));
});

// 删除数据
const deleteData = e => {
  console.log(e);
  
  const newArr=data.filter(item=>item.account!==e)
  console.log(newArr);
  useInfoStore.deleteAccount(newArr)
  router.push({
    path: "/admin/success"
  });
};

// 查找
let newArr1=[]
const input = ref('')
const toSearch=(e)=>{
   newArr1=data.filter(item=>item.account===e)
  console.log(newArr1);
  open()
  return newArr1
}

// 弹出框
const open = () => {
  if(newArr1.length){
    ElMessageBox.alert("账号："+newArr1[0].account+"   定购Model Y  "+newArr1[0].commodity.ModelY+'辆   ',
    '查询成功', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: '关闭',
    callback: (action) => {
      ElMessage({
        type: 'info',
        message: `已关闭`,
      })
    },
  })
  }else{
    ElMessageBox.alert("未找到该账号信息",
    '查询失败', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: '关闭',
    callback: (action) => {
      ElMessage({
        type: 'info',
        message: `已关闭`,
      })
    },
  })
  }
  
}
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 5%;
  .search{
    display: flex;
    margin-bottom: 20px;
    .input{
      width: 30%;
      margin-right: 30px;
    }
  }
  .header {
    display: flex;
    width: 100%;
    height: 5%;
    border-bottom: 1px solid #ebeef5;
    .box {
      flex: 1;
      color: #909399;
    }
  }
  .container {
    display: flex;
    width: 100%;
    height: 5%;
    align-items: center;
    border-bottom: 1px solid #ebeef5;
    .box {
      flex: 1;
    }
  }
}
</style>