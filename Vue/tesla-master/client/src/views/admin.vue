<template>
  <el-row class="tac">
    <el-col :span="4" class="left">
      <h5 class="mb-2 title">特斯拉后台管理系统</h5>
      <el-menu default-active="1" @open="handleOpen" @close="handleClose" router="true">
        <el-menu-item index="1" route="/admin/menuhome">
          <el-icon>
            <House />
          </el-icon>
          <span>首页</span>
        </el-menu-item>

        <el-menu-item index="2" route="/admin/vip">
          <el-icon>
            <User />
          </el-icon>
          <span>会员管理</span>
        </el-menu-item>

        <el-menu-item index="3" route="/admin/car">
          <el-icon>
            <document />
          </el-icon>
          <span>汽车信息管理</span>
        </el-menu-item>
        <el-menu-item index="4" route="/admin/order">
          <el-icon>
            <Grid />
          </el-icon>
          <span>订单管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>

    <el-col :span="20">
      <div class="header">
        <div class="box">
          <el-avatar
            :size="50"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <div class="welcome">欢迎管理员！</div>
        </div>
        <el-button type="danger" @click="logout" class="setting">退出登录</el-button>
      </div>

      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import axios from "axios";
import { onBeforeMount, onMounted } from "vue";
import useAllInfoStore from "../stores/allInfo";

const useInfoStore = useAllInfoStore();
let info;

onBeforeMount(() => {
  // 向数据库获取用户购物车信息
  axios({
    method: "post",
    url: "http://localhost:3000/shoppingcart",
    data: {
      methods: "get"
    }
  })
    .then(res => {
      console.log(res.data.data.allInfo);
      useInfoStore.saveInfo(res.data.data.allInfo);
      console.log(useInfoStore.useAccount);
    })
    .catch(err => {
      console.log(err);
    });

  axios({
    method: "post",
    url: "http://localhost:3000/car",
    data: {
      methods: "get"
    }
  })
    .then(res => {
      // info=JSON.parse(JSON.stringify(res.data.data))
      // console.log(res.data.data.data);
      info = JSON.parse(JSON.stringify(res.data.data.data));
      console.log(info);
      useInfoStore.saveCar(info);
    })
    .catch(err => {
      console.log(err);
    });
});

const router = useRouter();
// 点击退出登录
const logout = () => {
  router.push({
    path: "/account"
  });
  console.log("111");
  ElMessage.success("已退出登录");
};
</script>

<style lang="less" scoped>
.tac {
  height: 100%;
  width: 100%;
  .left {
    top: 0;
    left: 0;
  }
  .title {
    font-size: 20px;
    padding: 5px;
    margin-left: 20px;
    margin-top: 10px;
  }

  .header {
    display: flex;
    padding-left: 80%;
    .box {
      display: flex;
      .welcome {
        margin-top: 13%;
      }
    }

    .setting {
      margin-top: 6%;
    }
  }
}
</style>