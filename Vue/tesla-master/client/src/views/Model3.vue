<template>
  <div class="header">
    <Header />
  </div>
  <div class="imgs">
    <div class="img1">
      <div class="header">
        <div class="name">Model 3</div>
        <div class="des">Plaid 版</div>
      </div>
      <div class="bottom">
        <div class="animate__animated animate__slideInUp box1 box11">
          <div class="bigWords">637公里</div>
          <div class="smallWords">续航里程(预估)</div>
        </div>
        <div class="box1 animate__animated animate__slideInUp box12">
          <div class="bigWords">2.1秒</div>
          <div class="smallWords">百公里加速*</div>
        </div>
        <div class="box1 animate__animated animate__slideInUp box13">
          <div class="bigWords">322km/h</div>
          <div class="smallWords">最高车速</div>
        </div>
        <div class="box1 animate__animated animate__slideInUp box14">
          <div class="bigWords">1,020马力</div>
          <div class="smallWords">赋值功率</div>
        </div>
        <el-button class="pre-buy" color :dark="isDark" plain>立即订购</el-button>
      </div>
      <div class="usa">车辆性能参数均为美国测试标准</div>
    </div>

    <div class="img2"></div>

    <div class="img3">
      <div class="container">
        <el-carousel indicator-position="outside" height="520px">
          <el-carousel-item v-for="item in urlDate" :key="item">
            <img class="pics" :src="item.url" />
            <div class="title">{{item.name}}</div>
            <div class="contain">{{item.contain}}</div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="img4">
      <div class="top">
        <div class="top-left animate__animated animate__slideInUp"></div>
        <div class="top-right animate__animated animate__slideInUp">
          <p>连接电子设备</p>
          <br />车载蓝牙支持多台设备同时连接；无线手机充电器和 36W USB-C 充电接口可为设备快速补充电量。
        </div>
      </div>
      <div class="middle">
        <div class="middle-left animate__animated animate__slideInUp">
          <p>沉浸式音效</p>
          <br />高级音响系统功率高达 960 瓦，包括 22 个扬声器和主动道路降噪功能，为每一位乘客提供堪比录音室音质的沉浸式音效。
        </div>
        <div class="middle-right animate__animated animate__slideInUp"></div>
      </div>
      <div class="botton">
        <div class="botton-left animate__animated animate__slideInUp"></div>
        <div class="botton-right animate__animated animate__slideInUp">
          <p>超大载物空间</p>
          <br />前备箱、后备箱以及可完全折叠放平的座椅带来贯穿式的超大储物空间，轻松容纳您的所有行李，心爱的自行车也无需拆卸便可带上旅途。
        </div>
      </div>
    </div>
    <div class="img5">
      <div class="box1">
        <div class="bigWords">1020马力</div>
        <div class="smallWords">峰值功率</div>
      </div>
      <div class="box1">
        <div class="bigWords">9.23秒</div>
        <div class="smallWords">四分之一英里 @250km/h</div>
      </div>
      <div class="box1">
        <div class="bigWords">2.1秒</div>
        <div class="smallWords">百公里加速*</div>
      </div>
    </div>
    <div class="img6">
      <div class="left">
        <div class="left-top">
          <p>Plaid 版</p>
          <p class="pb">超越“狂暴模式”</p>
        </div>
        <div class="left-botton">
          <el-button class="pre-buy" color="#000" :dark="isDark" plain>立即订购</el-button>
        </div>
      </div>
      <div class="right">Model S Plaid 的加速能力在所有量产车型中表现超凡。Model S 全系车型采用更新的电池架构，在连续赛道驾驶中也能够全程保持高性能。</div>
    </div>
    <div class="img7">
      <div class="top">
        <p class="p1">电动动力总成</p>
        <p
          class="p2"
        >Model S 纯电动平台集成了动力总成和电池技术，可实现更高的效率、性能和续航。得益于全新的电池模块设计和热管理系统架构，Model S 的充电速度更快，在不同的路况和天气条件均可获得更多动力和耐力</p>
      </div>
      <div class="middle"></div>
      <div class="botton">
        <div class="bigbox">
          <div class="line"></div>
          <p class="name">Model S</p>
          <div class="des">双电机全轮驱动板拥有 Tesla 在售全系车型中最佳的续航表现，以及强劲的动力和稳定的控制力。</div>
          <div class="speedbox">
            <div class="boxx">
              <div class="bigwords">3.2 秒</div>
              <div class="smallwords">百公里加速</div>
            </div>
            <div class="boxx">
              <div class="bigwords">652 公里</div>
              <div class="smallwords">续航里程（预估）</div>
            </div>
          </div>
        </div>
        <div class="bigbox">
          <div class="line"></div>
          <p class="name">Model S Plaid 版</p>
          <div
            class="des"
          >三电机全轮驱动系统包含三个独立的、带碳纤维保护套的点击转子，可实现扭矩矢量控制制，并能够持续输出高达1,000+ 马力的功率，直至达到最高车速 322 公里/小时。</div>
          <div class="speedbox">
            <div class="boxx">
              <div class="bigwords">2.1 秒</div>
              <div class="smallwords">百公里加速</div>
            </div>
            <div class="boxx">
              <div class="bigwords">637 公里</div>
              <div class="smallwords">续航里程（预估）</div>
            </div>
          </div>
          <!-- <div class="reduce">
            * 减去起步时间
          </div>-->
        </div>
      </div>
    </div>
    <div class="img8"></div>
    <div class="img9">
      <div class="top">
        <div class="top-left">
          <p class="p1">外观</p>
          <p class="p2">为效率而设计</p>
          <el-button class="pre-buy" color="#000" :dark="isDark" plain>立即订购</el-button>
        </div>
        <div
          class="top-right"
        >Model S 系列车型专为速度、耐力和续航能力而打造，风阻系数极低，仅为 0.208 。改进后的空气动力学设计和更宽的底盘，提升了车辆的响应能力，使您能够更快、更自信地驶过弯道。</div>
      </div>
    </div>
    <div class="img10">
      <div class="top">
        <div class="top-right animate__animated animate__slideInUp">
          <p>追求超凡性能</p>
          <br />高性能交错花纹轮毂和轮胎，增强抓地力并帮助最大程度向路面转移动力。
        </div>
        <div class="top-left animate__animated animate__slideInUp"></div>
      </div>
      <div class="middle">
        <div class="middle-right animate__animated animate__slideInUp"></div>
        <div class="middle-left animate__animated animate__slideInUp">
          <p>优化的空气动力学设计</p>
          <br />车身表面的每个细节均精心考量，旨在使 Model S 拥有超越同级别车型的空气动力学表现。
        </div>
      </div>
      <div class="botton">
        <div class="botton-right animate__animated animate__slideInUp">
          <p>精致的造型风格</p>
          <br />外观设计融合了标志性的轮廓和优雅的车身比例。
        </div>
        <div class="botton-left animate__animated animate__slideInUp"></div>
      </div>
    </div>
    <div class="img11">
      <div class="left">
        <video
          id="videos"
          muted="muted"
          src="https://www.tesla.com/sites/default/files/videos/Plaid-Range-Web-Desktop-8mb.mp4"
          autoplay="autoplay"
          loop
        ></video>
      </div>
      <div class="right">
        <p class="p1">续航里程</p>
        <p class="p2">不断扩展的充电网络</p>
        <p class="p3">得益于 Tesla 强大的快速充电技术，车辆单次充电最高可补充 652 公里预估续航里程，更短的充电时间可行驶更远的距离，行程规划更为随心。</p>
      </div>
    </div>
    <div class="home">
      <div class="content-box">
        <div class="container" ref="containerRef"></div>

        <div class="content">
          <div class="words">选择车身颜色</div>
          <div class="select">
            <div
              class="select-item"
              v-for="(item, index) in colors"
              :key="index"
              @click="selectColor(item)"
            >
              <div class="select-item-color" :style="{background: item}"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import * as three from "three";
import { onMounted, ref } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

// import { isDark } from '@/composables/dark'
const urlDate = [
  {
    url:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/82d678c3-1d60-4827-887b-eb44bbac528f/bvlatuR/std/2442x1124/MS-Interior-Carousel-A-Desktop",
    name: "影院级视觉体验",
    contain:
      "17 英寸触摸屏可左右调节倾斜角度，具备高达 2200 x 1300 的分辨率及高色彩保真度、响应灵敏度，观看游戏和电影画面时体验更佳。"
  },
  {
    url:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/82d678c3-1d60-4827-887b-eb44bbac528f/bvlatuR/std/2442x1124/MS-Interior-Carousel-A-Desktop",
    name: "Yoke 方向盘",
    contain:
      "突破传统的转向操控方式，驾驶体验更纯粹；仪表盘没有遮挡，驾驶视野更开阔。"
  },
  {
    url:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/82d678c3-1d60-4827-887b-eb44bbac528f/bvlatuR/std/2442x1124/MS-Interior-Carousel-A-Desktop",
    name: "舒适座舱环境",
    contain:
      "隐藏式空调通风口，智能调节气流循环方式，洁净而自然。标配三区温度控制、前排座椅通风和 HEPA 高效空气过滤器。"
  },
  {
    url:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/82d678c3-1d60-4827-887b-eb44bbac528f/bvlatuR/std/2442x1124/MS-Interior-Carousel-A-Desktop",
    name: "重新设计的后排座椅",
    contain:
      "后排座椅可容纳三名乘客，腿部和头部空间更宽松，可折叠的中央扶手集成了内置储物空间及无线手机充电功能。"
  },
  {
    url:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/82d678c3-1d60-4827-887b-eb44bbac528f/bvlatuR/std/2442x1124/MS-Interior-Carousel-A-Desktop",
    name: "主机级别的游戏体验",
    contain:
      "车载游戏系统配有高达每秒 10 万亿次浮点运算能力的处理器，媲美目前市面上最新款游戏主机；兼容无线控制手柄和耳机，在任意座椅位置都可畅享游戏乐趣。"
  }
];
let colors = [
  "black",
  "red",
  "blue",
  "green",
  "gray",
  "orange",
  "purple",
  "yellow",
  "pink",
  "white"
];
const containerRef = ref(null);
let controls = null;
// 渲染器
const renderer = new three.WebGLRenderer({
  antialias: true // 抗锯齿效果
});
renderer.setSize(window.innerWidth*0.8, window.innerHeight*0.8); // 设置渲染器的宽高

// 场景
const scene = new three.Scene();

// 相机
const camera = new three.PerspectiveCamera(
  40,  //
  window.innerWidth / window.innerHeight, // 宽高比
  0.1,  // 离物体最近的距离
  1000  // 离物体最远的距离
);
camera.position.set(0, 2, 6);

// 材质
const material1=new three.MeshBasicMaterial({color:'black'})
const material2=new three.MeshBasicMaterial({color:'red'})
const material3=new three.MeshBasicMaterial({color:'blue'})
const material4=new three.MeshBasicMaterial({color:'black'})
const material5=new three.MeshBasicMaterial({color:'gray'})
const material6=new three.MeshBasicMaterial({color:'orange'})
const material7=new three.MeshBasicMaterial({color:'purple'})
const material8=new three.MeshBasicMaterial({color:'yellow'})
const material9=new three.MeshBasicMaterial({color:'pink'})
const material10=new three.MeshBasicMaterial({color:'white'})


const render = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};

onMounted(() => {
  // 渲染器会自动生成一个dom结构，就叫canvas标签
  containerRef.value.appendChild(renderer.domElement);
  renderer.setClearColor("#000");
  scene.background = new three.Color("#fff"); // 设置场景的背景颜色
  scene.environment = new three.Color("#fff");
  render();

  // 控制器
  controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  // 网格地面
  const gridHelper = new three.GridHelper(16, 10);
  gridHelper.material.opacity = 0.2; // 网格透明度
  gridHelper.material.transparent = true; // 网格
  scene.add(gridHelper); // 写了网格要加进去

  // 添加汽车模型
  const gltfLoader = new GLTFLoader(); // 添加两种加载器,读取模型
  const dracoLoader = new DRACOLoader(); // 读取参数的加载器
  dracoLoader.setDecoderPath("./modelS/parameter/"); // 读取参数
  gltfLoader.setDRACOLoader(dracoLoader); // 将参数读取到模型上
  gltfLoader.load("./modelS/model/tesla_model_3_not_finished.glb", gltf => {
    const models = gltf.scene;
    // console.log(Array.isArray(models.parent));
    console.log(models);
    scene.add(models);
  });

  //创建网格
  // const cube1=new three.Mesh(models,material2)
  // scene.add(cube1)
  // 灯光
  const light1 = new three.DirectionalLight(0xffffff, 1);
  light1.position.set(0, 0, 10);
  scene.add(light1);
  const light2 = new three.DirectionalLight(0xffffff, 1);
  light2.position.set(0, 0, -10);
  scene.add(light2);
  const light3 = new three.DirectionalLight(0xffffff, 1);
  light3.position.set(10, 0, 0);
  scene.add(light3);
  const light4 = new three.DirectionalLight(0xffffff, 1);
  light4.position.set(-10, 0, 0);
  scene.add(light4);
  const light5 = new three.DirectionalLight(0xffffff, 1);
  light5.position.set(0, 10, 0);
  scene.add(light5);
  const light6 = new three.DirectionalLight(0xffffff, 1);
  light6.position.set(5, 10, 0);
  scene.add(light6);
  const light7 = new three.DirectionalLight(0xffffff, 1);
  light7.position.set(0, 10, 5);
  scene.add(light7);
  const light8 = new three.DirectionalLight(0xffffff, 1);
  light8.position.set(0, 10, -5);
  scene.add(light8);
  const light9 = new three.DirectionalLight(0xffffff, 1);
  light9.position.set(-5, 10, 0);
  scene.add(light9);
});


</script>

<style lang="less" scoped>
.imgs {
  width: 100%;
  height: 100%;
  .img1 {
    width: 100%;
    height: 100%;
    background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/f4c8d0eb-c843-48c6-bc08-cf6cd321f9b1/bvlatuR/std/2560x1708/Model-3-Main-Hero-Desktop-ZeroG-CN");
    background-size: 100% 135%;
    background-position: 0px -130px;
    .header {
      text-align: center;
      padding-top: 7%;
      .name {
        font-size: 28px;
        margin-bottom: 10px;
        font-weight: 500;
      }
    }
    .bottom {
      margin: 25% 20% 0 20%;
      color: #fff;
      display: flex;
      text-align: center;
      justify-content: space-between;

      .box1 {
        margin-right: 30px;
        .bigWords {
          font-size: 20px;
          margin-bottom: 8%;
        }
        .smallWords {
          font-size: 10px;
        }
      }
      .box11 {
        animation-duration: 0.5s;
      }
      .box12 {
        animation-duration: 0.5s;
        animation-delay: 0.05s;
      }
      .box13 {
        animation-duration: 0.5s;
        animation-delay: 0.1s;
      }
      .box14 {
        animation-duration: 0.5s;
        animation-delay: 0.15s;
      }
      .pre-buy {
        width: 20%;
        height: 6%;
        border: 2px solid #fff;
      }
    }
    .usa {
      font-size: 8px;
      color: #fff;
      text-align: center;
      margin-top: 4%;
    }
  }

  .img2 {
    width: 100%;
    height: 100%;
    background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/8bf5a908-80d4-4bf7-8397-3966cfc7fe1a/bvlatuR/std/2880x1800/Model-S-Interior-Hero-Desktop-LHD?quality=auto-medium&format=auto");
    background-size: 100% 135%;
    background-position: 0px -130px;
  }

  .img3 {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 50px 100px 150px 100px;
    background: #000;
    .container {
      .el-carousel__item {
        width: 100%;
        height: 100%;
        border-radius: 30px;
        .pics {
          width: 100%;
          height: 100%;
        }
        .title {
          position: fixed;
          bottom: 10px;
          left: 20px;
          margin-top: 100px;
          color: #fff;
        }
      }
    }
  }

  .img4 {
    width: 100%;
    height: 140%;
    background: #000;
    padding: 0 200px;
    box-sizing: border-box;
    .top {
      width: 100%;
      height: 30%;
      display: flex;
      padding: 20px 0 0 0;
      .top-left {
        width: 50%;
        height: 100%;
        background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/180e927c-0542-4428-beb7-1411502fe3bb/bvlatuR/std/1040x584/MS-Interior-Grid-A-Desktop");
        background-size: 100% 100%;
      }
      .top-right {
        width: 50%;
        color: #fff;
        box-sizing: border-box;
        padding: 50px 73px;
        font-size: 16px;
        line-height: 20px;
      }
    }
    .middle {
      width: 100%;
      height: 30%;
      display: flex;
      .middle-right {
        width: 50%;
        height: 100%;
        background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/180e927c-0542-4428-beb7-1411502fe3bb/bvlatuR/std/1040x584/MS-Interior-Grid-A-Desktop");
        background-size: 100% 100%;
      }
      .middle-left {
        width: 50%;
        color: #fff;
        box-sizing: border-box;
        padding: 50px 73px;
        font-size: 16px;
        line-height: 20px;
      }
    }
    .botton {
      width: 100%;
      height: 30%;
      display: flex;
      .botton-left {
        width: 50%;
        height: 100%;
        background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop");
        background-size: 100% 100%;
      }
      .botton-right {
        width: 50%;
        color: #fff;
        box-sizing: border-box;
        padding: 50px 73px;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  .img5 {
    width: 100%;
    height: 70%;
    background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/08585f00-c0b7-4bda-80e4-2b78406b5582/bvlatuR/std/4096x2560/Model-S-Performance-Hero-Desktop-LHD");
    background-size: 105% 190%;
    background-repeat: no-repeat;
    background-position: -70px -220px;

    color: #fff;
    display: flex;
    text-align: center;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 26% 28% 0 28%;
    .box1 {
      .bigWords {
        font-size: 25px;
        margin-bottom: 13px;
      }
      .smallWords {
        font-size: 10px;
      }
    }
  }
  .img6 {
    width: 100%;
    height: 32%;
    display: flex;
    .left {
      width: 35%;
      box-sizing: border-box;
      padding: 3%;
      padding-left: 14%;
      p {
        font-weight: 100;
      }
      .pb {
        font-size: 28px;
        font-weight: normal;
      }
      .left-botton {
        margin-top: 7%;
        .pre-buy {
          width: 70%;
          height: 6%;
          border: 2px solid #000;
        }
      }
    }
    .right {
      font-size: 14px;
      width: 55%;
      font-weight: 100;
      box-sizing: border-box;
      padding: 3%;
      padding-left: 9%;
    }
  }
  .img7 {
    width: 100%;
    height: 180%;
    background: #f4f4f4;
    .top {
      width: 100%;
      // height: 31%;
      box-sizing: border-box;
      padding: 10% 35% 10% 14%;
      .p1 {
        font-size: 28px;
        margin-bottom: 30px;
      }
      .p2 {
        font-weight: 100;
        font-size: 14px;
        line-height: 20px;
      }
    }
    .middle {
      width: 88%;
      height: 50%;
      background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/0f44fadf-7d40-43b6-b94d-de289b38840c/bvlatuR/std/1920x900/model-s-performance-dual-motor-desktop_carousel-new");
      margin: 0 auto;
      border-radius: 20px;
      background-size: 116% 99%;
      background-position: -120px 5px;
    }
    .botton {
      height: 35%;
      width: 100%;
      background: #f4f4f4;
      padding: 0 10%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      .bigbox {
        width: 45%;
        margin: 10px;
        .line {
          width: 100%;
          border-top: 3.5px solid #000;
          margin-bottom: 12px;
          margin-top: 70px;
        }
        .name {
          font-weight: 500;
          margin-bottom: 22px;
        }
        .des {
          width: 98%;
          font-size: 14px;
          line-height: 20px;
        }
        .speedbox {
          display: flex;
          margin-top: 28px;
          .boxx {
            margin-right: 40px;
            .bigwords {
              font-size: 22px;
              margin-bottom: 5px;
            }
            .smallwords {
              font-size: 10px;
              font-weight: 100;
            }
          }
        }
        // .reduce{
        //   font-weight: 100;
        //   font-size: 14px;
        //   margin-top: 30px;
        // }
      }
    }
  }
  .img8 {
    margin-top: 200px;
    width: 100%;
    height: 70%;
    background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/1981e29b-2ce8-4620-9c6a-fe1eaf005656/bvlatuR/std/3456x2160/Model-S-Exterior-Hero-Desktop-Global");
    background-size: 100% 190%;
    background-position: 0 -200px;
  }
  .img9 {
    background: #000;
    color: #fff;
    padding: 40px 14%;
    box-sizing: border-box;
    .top {
      display: flex;
      margin-bottom: 100px;
      .top-left {
        width: 30%;
        .p1 {
          font-size: 18px;
          font-weight: 100;
        }
        .p2 {
          font-size: 28px;
          margin-bottom: 20px;
          line-height: 44px;
        }
        .pre-buy {
          width: 70%;
          height: 35%;
          border: 2px solid #fff;
        }
      }
      .top-right {
        width: 60%;
        margin-left: 14%;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
  .img10 {
    width: 100%;
    height: 140%;
    background: #000;
    padding: 0 200px;
    box-sizing: border-box;
    .top {
      width: 100%;
      height: 30%;
      display: flex;
      .top-left {
        width: 50%;
        height: 100%;
        background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/fe86a447-03fe-43ce-bf53-daff2a81210d/bvlatuR/std/3949x2217/Model-S-Exterior-Grid-A-Desktop-Global");
        background-size: 100% 100%;
      }
      .top-right {
        width: 50%;
        color: #fff;
        box-sizing: border-box;
        padding: 50px 73px;
        font-size: 16px;
        line-height: 20px;
      }
    }
    .middle {
      width: 100%;
      height: 30%;
      display: flex;
      .middle-right {
        width: 50%;
        height: 100%;
        background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/1020d97e-9a6f-4932-9914-0ce889ecfaa6/bvlatuR/std/3840x2156/Model-S-Exterior-Grid-B-Desktop-Global");
        background-size: 100% 100%;
      }
      .middle-left {
        width: 50%;
        color: #fff;
        box-sizing: border-box;
        padding: 50px 73px;
        font-size: 16px;
        line-height: 20px;
      }
    }
    .botton {
      width: 100%;
      height: 30%;
      display: flex;
      .botton-left {
        width: 50%;
        height: 100%;
        background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/b592fbac-9ccd-4951-94b8-f5c5157dfe5b/bvlatuR/std/3657x2039/Model-S-Exterior-Grid-C-Desktop-Global");
        background-size: 100% 100%;
      }
      .botton-right {
        width: 50%;
        color: #fff;
        box-sizing: border-box;
        padding: 50px 73px;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  .img11 {
    width: 100%;
    height: 100%;
    display: flex;
    .left {
      width: 80%;
      height: 100%;
      video {
        width: 101%;
        height: 96.4%;
      }
    }
    .right {
      width: 30%;
      padding-left: 20px;
      .p1 {
        font-size: 16px;
        font-weight: 100;
        margin-top: 8%;
        margin-left: 10%;
        margin-bottom: 20px;
      }
      .p2 {
        margin-left: 10%;
        font-size: 28px;
      }
      .p3 {
        margin-left: 10%;
        line-height: 20px;
      }
    }
  }
}
.home{
  border: 1px solid #000;

  .content-box {
  position: relative;
  .content {
    position: absolute;
    top: 40px;
    right: 20px;
    .words{
      font-size: 15px;
      margin: 10px;
    }
  }
  .select {
    display: flex;
  }
  .select-item {
    margin: 5px;
    cursor: pointer;
  }
  .select-item-color {
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
}
}

</style>