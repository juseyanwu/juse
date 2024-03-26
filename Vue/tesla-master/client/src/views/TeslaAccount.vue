<template>
  <Header />
  <div class="main">
    <div class="left">{{ accountStore.useAccount }}'s Tesla</div>
    <div class="right">
      <div class="box">主页</div>
      <div class="box">充电</div>
      <div class="box">设置</div>
      <div class="box" @click="logOut">退出登录</div>
    </div>
  </div>

  <div class="img">
    <img
      src="https://tesla-cdn.thron.com/delivery/public/image/tesla/9ed31f26-4d49-4701-bc5b-2121ff85e5b3/bvlatuR/std/2880x1800/Model-S-Main-Hero-Desktop-LHD?quality=auto-medium&format=auto"
      alt
    />
  </div>
  <div class="botton">
    <div class="name">Model S</div>
    <div class="button">
      <el-row>
        <el-button type="primary" round class="class" @click="preserveCar('ModelS')">订购</el-button>
        <el-button round class="class">预约试驾</el-button>
      </el-row>
    </div>
  </div>

  <div class="img">
    <img
      src="https://tesla-cdn.thron.com/delivery/public/image/tesla/5a7b3001-249f-4065-a330-4ea6a17ccf7b/bvlatuR/std/2560x1708/Model-3-Main-Hero-Desktop-LHD"
      alt
    />
  </div>
  <div class="botton">
    <div class="name">Model 3</div>
    <div class="button">
      <el-row>
        <el-button type="primary" round class="class" @click="preserveCar('Model3')">订购</el-button>
        <el-button round class="class">预约试驾</el-button>
      </el-row>
    </div>
  </div>

  <div class="img">
    <img
      src="https://tesla-cdn.thron.com/delivery/public/image/tesla/37612e96-a8a7-46ea-9847-4fff683483b0/bvlatuR/std/2880x1800/Model-X-Main-Hero-Desktop-LHD?quality=auto-medium&format=auto"
      alt
    />
  </div>
  <div class="botton">
    <div class="name">Model X</div>
    <div class="button">
      <el-row>
        <el-button type="primary" round class="class" @click="preserveCar('ModelX')">订购</el-button>
        <el-button round class="class">预约试驾</el-button>
      </el-row>
    </div>
  </div>
  <div class="img">
    <img
      src="https://tesla-cdn.thron.com/delivery/public/image/tesla/91abd4c7-32a1-41cc-ade5-b64774dbea61/bvlatuR/std/2880x1800/Model-Y-Main-Hero-Desktop-Global?quality=auto-medium&format=auto"
      alt
    />
  </div>
  <div class="botton">
    <div class="name">Model Y</div>
    <div class="button">
      <el-row>
        <el-button type="primary" round class="class" @click="preserveCar('ModelY')">订购</el-button>
        <el-button round class="class">预约试驾</el-button>
      </el-row>
    </div>
  </div>

  <div class="img">
    <img
      src="https://tesla-cdn.thron.cn/delivery/public/image/tesla/0f22af4d-15e0-452d-ba66-1359490b4a0b/bvlatuR/std/2880x1800/Cybertruck-Hero-Desktop"
      alt
    />
  </div>
  <div class="botton">
    <div class="name">Cybertruct</div>
    <div class="button">
      <el-row>
        <el-button type="primary" round class="class" @click="preserveCar('Cybertruck')">订购</el-button>
        <el-button round class="class">预约试驾</el-button>
      </el-row>
    </div>
  </div>
  <div class="img">
    <img
      src="https://tesla-cdn.thron.cn/delivery/public/image/tesla/dede7688-4a2a-49ff-9696-5052e8f6cf6e/bvlatuR/std/2880x1800/PW-Hero-Desktop-EMEA?quality=auto-medium&format=auto"
      alt
    />
  </div>
  <div class="botton">
    <div class="name">Powerwall</div>
    <div class="button">
      <el-row>
        <el-button type="primary" round class="class" @click="preserveCar('Powerwall')">订购</el-button>
        <el-button round class="class">预约试驾</el-button>
      </el-row>
    </div>
  </div>

  <!-- <div class="page"></div> -->
</template>

<script setup>
import Header from "../components/Header.vue";
import useAccountStore from "../stores/account";
import { ElMessage } from "element-plus";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";


onMounted(() => {
  // 登录页阻止回退
  sessionStorage.clear();
  history.pushState(null, null, document.URL);
  window.addEventListener(
    "popstate",
    function() {
      history.pushState(null, null, document.URL);
    },
    false
  );
});
const accountStore = useAccountStore();
const { useAccount, useLogOut } = storeToRefs(accountStore);
const router = useRouter();

const logOut = () => {
  router.push({
    path: "/account"
  });

  accountStore.useLogOut();
  ElMessage.success("已退出登录");
};

// 订车
const preserveCar = (e) => {
  // console.log(e);
  accountStore.addCars(e);
  console.log(accountStore.commodity);
  axios({
    method: "post",
    url: "http://localhost:3000/shoppingcart",
    data: {
      methods: "add",
      account: accountStore.useAccount,
      car: accountStore.commodity
    }
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });

    router.push({
    path: "/onlionShop"
  });
};
</script>

<script>
// 组件路由守卫
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

// const router = useRouter();
const accountStore = useAccountStore();
// const { useAccount } = storeToRefs(accountStore);
export default defineComponent({
  beforeRouteEnter(to, from, next) {
    // console.log(accountStore.useAccount);
    if (accountStore.useAccount !== "") {
      next();
    } else {
      router.push({
        path: "/teslaaccount"
      });
    }
  }
});
</script>
<style lang="less" scoped>
.main {
  margin: 15vh 20vw 0;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
  }
  .right {
    display: flex;
    font-size: 15px;
    .box {
      margin: 10px;
      font-weight: 300;
      cursor: pointer;
    }
  }
}
.img {
  width: 60vw;
  height: 70vh;
  margin: 5vh 20vw;
  // background: url("https://www.tesla.cn/tesla_theme/assets/img/mytesla/v3/header-nocar-models.jpg?20170815");
  // background-repeat: no-repeat;
  // background-size: 80% 140%;
  // background-position: 7vw -8vh;
  img {
    width: 100%;
    height: 100%;
  }
}
.botton {
  margin: 0 15vw;
  .name {
    display: flex;
    justify-content: center;
    font-size: 40px;
  }
  .button {
    display: flex;
    justify-content: center;
    margin-top: 2vh;
    .class {
      width: 200px;
      height: 40px;
    }
  }
}
</style>