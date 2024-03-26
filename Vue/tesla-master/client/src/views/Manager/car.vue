<template>
  <div class="add">
    <el-button type="success" @click="clickAdd">点击添加</el-button>
  </div>
  <div class="input" v-show="isShow">
    <el-input class="in" v-model="input1" placeholder="请输入车型" />
    <el-input v-model="input2" placeholder="请输入价格" />
    <el-button class="bt" type="success" @click="commit">点击提交</el-button>
  </div>
  <div class="main" v-for="item in info" :key="item">
    <div class="img">
      <img
        src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-3-Main-Hero-Desktop-LHD"
        alt
      />
    </div>
    <div class="info">
      <div class="box">型号:{{ item.name }}</div>
      <div class="box">价格:￥{{ item.price }}</div>
      <el-button type="danger" class="delete" @click="deleteCarInfo(item.name)">删除该车信息</el-button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import useAllInfoStore from "../../stores/allInfo";
import { useRouter } from "vue-router";
const router = useRouter();

const useInfoStore = useAllInfoStore();

let info = reactive([]);
info = JSON.parse(JSON.stringify(useInfoStore.useCar));

const input1 = ref("");
const input2 = ref("");
let isShow = ref(false);
const clickAdd = () => {
  console.log(1);
  isShow.value = true;
};

const commit = () => {
  console.log(input1._value);
  console.log(input2._value);
  useInfoStore.addCar({ name: input1._value, price: input2._value });
  let cars = { name: input1._value, price: input2._value };
  // 同时将该数据插入到数据库里
  axios({
    method: "post",
    url: "http://localhost:3000/car",
    data: {
      methods: "insert",
      car: cars
    }
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  console.log(useInfoStore.useCar);
  info = JSON.parse(JSON.stringify(useInfoStore.useCar));
  isShow.value = false;
  router.push({
    path: "/admin/success"
  });
};

// 点击删除该款车的信息
const deleteCarInfo = e => {
  console.log(e);
  axios({
    method: "post",
    url: "http://localhost:3000/car",
    data: {
      methods: "delete",
      deletename: e
    }
  })
    .then(res => {
      info = JSON.parse(JSON.stringify(res.data.data.data));
      router.push({
        path: "/admin/success"
      });
      console.log(info);
    })
    .catch(err => {
      console.log(err);
    });

  const newArr = info.filter(item => item.name !== e);
  console.log(newArr);
  useInfoStore.deleteCar(newArr);

  info = JSON.parse(JSON.stringify(useInfoStore.useCar));
  router.push({
    path: "/admin/success"
  });
};
</script>

<style lang="less" scoped>
.input {
  width: 30%;
  height: 30%;
  background: #f1f3f4;
  position: absolute;
  left: 45%;
  .in {
    margin: 30px 0;
  }
  .bt {
    margin: 10px 220px;
  }
}
.add {
  margin: 10px;
}
.main {
  width: 40%;
  height: 30%;
  margin-left: 20%;
  margin-bottom: 8%;
  .img {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    display: flex;
    padding: 10px;
    .box {
      // width: 10%;
      // width: 200px;
      height: 30px;
      margin: 10px;
      font-size: 18px;
    }
    .delete {
      margin-left: 150px;
    }
  }
}
</style>