<template>
  <div class="header">
    <Header />
  </div>
  <div class="main">
    <div class="left">
      <el-carousel :interval="4000" type="card" height="60vh">
        <el-carousel-item v-for="item in cars" :key="item">
          <img :src="item.src" alt />
          <div class="carName">{{ item.name }}</div>
          <div class="button">
            <el-button @click="order(item.name)">立即订购</el-button>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="right" v-if="isLogin">
      <div class="head">{{accountStore.useAccount}}的购物车</div>
      <div
        v-for="(value, key) in accountStore.commodity"
        :class="{none:Number(value) === 0 ? true : false,item:Number(value) === 0 ? false :true}"
      >
        <div class="car">{{key}}</div>
        <div class="num">
          <div class="name">{{ key }}</div>
          <div class="buy">订购：{{ value }}件</div>
          <div class="box">
            <div class="add" @click="addCar(key)">+</div>
            <div class="dec" @click="decreaseCars(key)">-</div>
          </div>
        </div>
      </div>
    </div>
    <div class="right" v-else>
      <div class="head">请登录添加至购物车</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import axios from "axios";
// import { storeToRefs } from "pinia";
import useAccountStore from "../stores/account";

const accountStore = useAccountStore();
console.log(accountStore.commodity);

let isLogin = ref(false);
if (accountStore.useAccount) {
  isLogin = true;
}

const cars = [
  {
    src:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/4f2499ba-7b5f-411b-81fd-2260108aee66/bvlatuR/std/2880x1800/Homepage-Model-3-Hero-Desktop-CN?quality=auto-medium&format=auto",
    name: "Model 3"
  },
  {
    src:
      "https://tesla-cdn.thron.cn/delivery/public/image/tesla/6eaf68ac-240a-4aa7-8500-05918f77927b/bvlatuR/std/0x0/6eaf68ac-240a-4aa7-8500-05918f77927b",
    name: "Model Y"
  },
  {
    src:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/898c2038-c428-452c-84bf-034d5c48ca8e/bvlatuR/std/4096x2560/Model-S-homepage-desktop",
    name: "Model S"
  },
  {
    src:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/05a76324-947e-453b-a628-8b2d759756fa/bvlatuR/std/2880x1800/Homepage-Model-X-Desktop-LHD?quality=auto-medium&format=auto",
    name: "Model X"
  },
  {
    src:
      "https://tesla-cdn.thron.cn/delivery/public/image/tesla/0f22af4d-15e0-452d-ba66-1359490b4a0b/bvlatuR/std/2880x1800/Cybertruck-Hero-Desktop",
    name: "Cybertruck"
  },
  {
    src:
      "https://tesla-cdn.thron.cn/delivery/public/image/tesla/dede7688-4a2a-49ff-9696-5052e8f6cf6e/bvlatuR/std/2880x1800/PW-Hero-Desktop-EMEA?quality=auto-medium&format=auto",
    name: "Powerwall"
  }
];
const trimAll = ele => {
  if (typeof ele === "string") {
    return ele.split(/[\t\r\f\n\s]*/g).join("");
  } else {
    console.error(
      `${typeof ele} is not the expected type, but the string type is expected`
    );
  }
};

const order = e => {
  let t = trimAll(e);
  accountStore.addCars(t);
  console.log(accountStore.commodity);
  axios({
    method: "post",
    url: "http://localhost:3000/shoppingcart",
    data: {
      methods: "add",
      account: accountStore.useAccount,
      car: accountStore.commodity,
      id: accountStore.userId
    }
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
const addCar = e => {
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
};

const decreaseCars = e => {
  accountStore.deleteCars(e);
  console.log(accountStore.commodity);
  axios({
    method: "post",
    url: "http://localhost:3000/shoppingcart",
    data: {
      methods: "decrease",
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
};
</script>

<style lang="less" scoped>
.header {
  width: 100vw;
  height: 8vh;
}
.main {
  width: 100vw;
  height: 80vh;
  margin-top: 12vh;
  display: flex;
  position: relative;
  .left {
    flex: 4;
    img {
      width: 100%;
      height: 100%;
    }
    .carName {
      position: absolute;
      bottom: 10vh;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 30px;
    }
    .button {
      position: absolute;
      bottom: 5vh;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
  .right {
    flex: 1;
    .head {
      font-size: 30px;
      text-align: center;
      margin-top: -5vh;
    }
    .none {
      display: none;
    }
    .item {
      display: flex;
      margin-top: 2vh;
      padding: 0 3vw;

      .car {
        font-size: 15px;
        width: 70px;
        height: 70px;
        border: 1px solid #000;
        line-height: 70px;
        text-align: center;
        border-radius: 20px;
      }
      .num {
        margin: 5px;
        .name {
          font-weight: 550;
          margin-bottom: 10px;
          width: 20px;
        }
        .box {
          display: flex;
          justify-content: space-between;
          padding-top: 10px;
          .add {
            font-size: 20px;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            border: 1px solid #000;
            border-radius: 5px;
            cursor: pointer;
          }
          .dec {
            font-size: 20px;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            border: 1px solid #000;
            border-radius: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>