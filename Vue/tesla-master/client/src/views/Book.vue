<template>
  <div class="header">
    <Header />
  </div>
  <div class="box">
    <div class="left">
      <el-carousel :interval="5000" arrow="always" class="change" height="70vh">
        <el-carousel-item v-for="item in isActive? imgModels :imgModelsPlain" :key="item">
          <img class="pics" :src="item" />
        </el-carousel-item>
      </el-carousel>
      <div class="botton">
        <div class="cir" @click="showMenu">
          <div class="arr"></div>
        </div>
        <div class="price">￥{{ isActive ?models.realPrice: modelsplaid.realPrice }} 实际价格</div>
        <div class="savePrice">￥{{ isActive ?models.savePrice: modelsplaid.savePrice }} 减去节省的燃油费</div>
      </div>
    </div>
    <div class="right">
      <div class="name">Model S</div>
      <div class="data">预计交付日期：第二季度</div>
      <div class="num">
        <div class="box1">续航里程</div>
        <div class="box1">最高时速</div>
        <div class="box1">百公里加速</div>
      </div>
      <div class="des" v-if="isActive">
        <div class="box2">{{ models.routes }}</div>
        <div class="box2">{{ models.speed }}</div>
        <div class="box2">{{ models.acc }}</div>
      </div>
      <div class="des" v-else>
        <div class="box2">{{ modelsplaid.routes }}</div>
        <div class="box2">{{ modelsplaid.speed }}</div>
        <div class="box2">{{ modelsplaid.acc }}</div>
      </div>
      <div class="models">
        <div class="title">双电机全轮驱动</div>
        <div :class="{money:true,border:isActive}" @click="changeColor(1)">
          <div class="left">Model S</div>
          <div class="right">￥789,900</div>
        </div>
        <div class="title">三电机全轮驱动</div>
        <div :class="{money:true,border:!isActive}" @click="changeColor(2)">
          <div class="left">Model S Plaid版</div>
          <div class="right">￥1009,900</div>
        </div>
      </div>

      <div class="more">查看详情</div>
    </div>
  </div>
  <div class="menu animate__animated animate__slideInRight" v-show="show">
    <!-- <div class="del"></div> -->

    <div class="main">
      <el-icon class="del" @click="close">
        <Close />
      </el-icon>
      <h1>新能源车激励政策</h1>
      <p>Tesla 纯电动车在全国部分省市享受新能源汽车牌照政策和差异化鼓励政策。</p>
      <p>【北京】Tesla 享有免费新能源车牌照，可以参加新能源牌照指标轮候配置。不受工作日高峰时段或者重污染红色预警区域限行措施限制，在全市每周每天24小时均可上路行驶。</p>
      <p>【上海】Tesla 享有免费新能源车牌照，无需竞拍。</p>
      <p>【杭州】Tesla 享有免费新能源车牌照，无需摇号，无需竞拍。不受市区“错峰限行”和西湖景区“单双号”限行措施的限制（浙A号牌）。</p>
      <p>【广州】Tesla 享有免费新能源车牌照，无需摇号，无需竞拍。</p>
      <p>【深圳】Tesla 享有免费新能源车牌照，无需摇号，无需竞拍。</p>
      <p>【成都】Tesla 不受汽车尾号限行措施限制，工作日可在实行尾号限行区域内的所有道路上通行（新能源号牌）。</p>
      <p>根据最新公布的《免征车辆购置税的新能源汽车车型目录》，部分 Tesla 在售车型享受购置税减免政策。</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import "animate.css";
import Header from "../components/Header.vue";
const imgModelsPlain = [
  "https://static-assets.tesla.cn/configurator/compositor?context=design_studio_2&options=$MTS14,$PBSB,$WS92,$IBC00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
  "https://static-assets.tesla.cn/configurator/compositor?context=design_studio_2&options=$MTS14,$PBSB,$WS92,$IBC00&view=SIDE&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
  "https://static-assets.tesla.cn/configurator/compositor?context=design_studio_2&options=$MTS14,$PBSB,$WS92,$IBC00&view=REAR34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
  "https://static-assets.tesla.cn/configurator/compositor?context=design_studio_2&options=$MTS14,$PBSB,$WS92,$IBC00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
  "https://static-assets.tesla.cn/configurator/compositor?context=design_studio_2&options=$MTS14,$PBSB,$IBC00,$ST0Y&view=INTERIOR&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&"
];
const imgModels = [
  "https://static-assets.tesla.cn/configurator/compositor?context=design_studio_2&options=$MTS13,$PBSB,$WS90,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
  "https://static-assets.tesla.cn/configurator/compositor?context=design_studio_2&options=$MTS13,$PBSB,$WS90,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
  "https://static-assets.tesla.cn/configurator/compositor?context=design_studio_2&options=$MTS13,$PBSB,$WS90,$IBE00&view=REAR34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
  "https://static-assets.tesla.cn/configurator/compositor?context=design_studio_2&options=$MTS13,$PBSB,$WS90,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
  "https://static-assets.tesla.cn/configurator/compositor?context=design_studio_2&options=$MTS14,$PBSB,$IBC00,$ST0Y&view=INTERIOR&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&"
];

let show = ref(false);
const models = reactive({
  routes: "715公里",
  speed: "250公里/时",
  acc: "3.2 S",
  realPrice: "789,900",
  savePrice: "710,600"
});
const modelsplaid = reactive({
  routes: "767公里",
  speed: "322公里/时",
  acc: "2.1 S",
  realPrice: "1009,900",
  savePrice: "930,600"
});
let isActive = ref(true);

const changeColor = value => {
  if (value === 1) {
    isActive.value = true;
  } else {
    isActive.value = false;
  }
  console.log(isActive);
};
// 展示面板
const showMenu = () => {
  show.value = !show.value;
};

const close = () => {
  show.value = !show.value;
};
</script>

<style lang="less" scoped>
.header {
  width: 100vw;
  height: 10vh;
}
.box {
  width: 100%;
  height: 80vh;
  display: flex;
  // background: #000;
  .left {
    flex: 8;
    position: relative;
    .change {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 55vw;
      height: 70vh;
    }
    .botton {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -8vh;
      margin: auto;
      width: 30vw;
      height: 10vh;
      background: #f4f4f4;
      border-top-left-radius: 15px; /* 左上角 */
      border-top-right-radius: 15px; /* 右上角 */
      display: flex;
      box-sizing: border-box;
      padding: 20px;
      align-items: center;
      justify-content: center;
      .price {
        margin: 0 10px;
        width: 160px;
      }
      .savePrice {
        margin: 0 10px;
        color: #898a8d;
        font-size: 14px;
      }
      .cir {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        .arr {
          width: 10px;
          height: 10px;
          border: 2px solid #585b5f;
          border-left: transparent;
          border-bottom: transparent;
          transform: rotate(-45deg);
          margin-top: 4px;
        }
      }
    }
  }
  .right {
    flex: 3;
    margin-right: 5vw;
    .name {
      margin-top: 5vh;
      font-size: 45px;
    }
    .num {
      margin-top: 3vh;
      display: flex;
      .box1 {
        flex: 1;
        font-size: 20px;
      }
    }
    .data {
      margin-top: 3vh;
    }
    .des {
      margin-top: 3vh;
      display: flex;

      .box2 {
        flex: 1;
      }
    }
    .models {
      // margin-top: 8vh;
      .title {
        margin: 15px 0;
      }
      .money {
        margin: 3vh 0;
        display: flex;
        border: 1px solid #000;
        padding: 20px;
        border-radius: 5px;
      }
      .border {
        border: 4px solid #3e6ae1;
      }
    }
    .more {
      margin: auto;
      width: 200px;
      height: 45px;
      background: #f4f4f4;
      text-align: center;
      // font-size: 16px;
      line-height: 50px;
      border-radius: 10px;
      margin-top: 10vh;
    }
  }
}
.animate__slideInRight {
  background: rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(3px);
  animation-duration: 0.5s; /* don't forget to set a duration! */
}
.menu {
  z-index: 100;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 20vh 25vw;

  .main {
    background: #fff;
    top: 0;
    width: 50vw;
    height: 60vh;
    border-radius: 30px;
    padding: 5vh;
    box-sizing: border-box;
    position: relative;
    h1 {
      font-size: 20px;
      margin: 4vh 0;
    }
    p {
      font-size: 18px;
      line-height: 25px;
      // margin: 10px;
    }
    .del {
      position: absolute;
      right: 20px;
      top: 30px;
    }
  }
}
.el-carousel__item {
  .pics {
    width: 100%;
    height: 100%;
    background-size: 100% 130%;
  }
}
</style>