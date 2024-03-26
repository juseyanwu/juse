<template>
  <div class="header">
    <Header />
  </div>
  <div class="imgs">
    <div class="img1">
      <div class="header">Powerwall</div>
      <div class="botton">
        <div class="box1 animate__animated animate__slideInUp">储能</div>
        <div class="box2 animate__animated animate__slideInUp">备用储能</div>
        <div class="box3 animate__animated animate__slideInUp">为家庭省电</div>
        <el-button class="pre-buy animate__animated animate__slideInUp" color :dark="isDark" plain>立即订购</el-button>
      </div>
    </div>
    <div class="img2">
        <div class="left">
            <div class="safe">独立</div>
            <div class="defend">全方位能源供应</div>
            <el-button class="pre-buy animate__animated animate__slideInUp" color :dark="isDark" plain>立即订购</el-button>
        </div>
        <div class="right">
            Powerwall 通过存储太阳能增强系统用电的独立性，在夜晚您也可以享用自己家发电的清洁能源。单独使用 Powerwall ，或将其与其他 Tesla 产品结合使用，可节省开支、减少碳排放并让您从容应对断电情况。
        </div>
    </div>
  </div>
  <!-- <div class="video">
        <video
          id="videos"
          muted="muted"
          src="https://www.tesla.com/sites/default/files/powerwall/independence/_Desktop_1.mp4"
          autoplay="autoplay"
          loop
        ></video>
    </div> -->

    <div class="home">
    <div class="container" ref="containerRef"></div>

  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import * as THREE from 'three'
import { onMounted, ref } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

const containerRef = ref(null)
let controls = null
const renderer = new THREE.WebGLRenderer({
  antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)


const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.set(20, 60,50)

const scene = new THREE.Scene()
const render = () => {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}


onMounted(() => {
  containerRef.value.appendChild(renderer.domElement)
  renderer.setClearColor('#000')
  scene.background = new THREE.Color('#ccc')
  scene.environment = new THREE.Color('#ccc')
  render()

  controls = new OrbitControls(camera, renderer.domElement)
  controls.update()

  const gridHelper = new THREE.GridHelper(1000, 1000)
  gridHelper.material.opacity = 0.2
  gridHelper.material.transparent = true
  scene.add(gridHelper)


  const loader = new GLTFLoader()
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('../../public/powerWall/parameter/scene.gltf')
  loader.setDRACOLoader(dracoLoader)
  loader.load('../../public/powerWall/model/tesla_powerwall_2.glb', (gltf) => {
    const bmw = gltf.scene
    console.log(gltf);
    bmw.traverse((child) => {
      if (child.isMesh) {
        // console.log(child);
      }
      // 轮毂
      if (child.isMesh && child.name.includes('轮毂')) {
        child.material = wheelsMaterial
        wheels.push(child)
      }
      // 车身
      if (child.isMesh && child.name.includes('Mesh002')) {
        carBody = child
        carBody.material = bodyMaterial
      }
      // 前脸
      if (child.isMesh && child.name.includes('前脸')) {
        frontCar = child
        frontCar.material = frontMaterial
      }
      // 引擎盖
      if (child.isMesh && child.name.includes('引擎盖_1')) {
        hoodCar = child
        hoodCar.material = hoodMaterial
      }
      // 挡风玻璃
      if (child.isMesh && child.name.includes('挡风玻璃')) {
        glassCar = child
        glassCar.material = glassMaterial
      }
    })

    scene.add(bmw)
  })

  // 灯光
  const light1 = new THREE.DirectionalLight(0xffffff, 1)
  light1.position.set(0, 0, 10)
  scene.add(light1)
  const light2 = new THREE.DirectionalLight(0xffffff, 1)
  light2.position.set(0, 0, -10)
  scene.add(light2)
  const light3 = new THREE.DirectionalLight(0xffffff, 1)
  light3.position.set(10, 0, 0)
  scene.add(light3)
  const light4 = new THREE.DirectionalLight(0xffffff, 1)
  light4.position.set(-10, 0, 0)
  scene.add(light4)
  const light5 = new THREE.DirectionalLight(0xffffff, 1)
  light5.position.set(0, 10, 0)
  scene.add(light5)
  const light6 = new THREE.DirectionalLight(0xffffff, 1)
  light6.position.set(5, 10, 0)
  scene.add(light6)
  const light7 = new THREE.DirectionalLight(0xffffff, 1)
  light7.position.set(0, 10, 5)
  scene.add(light7)
  const light8 = new THREE.DirectionalLight(0xffffff, 1)
  light8.position.set(0, 10, -5)
  scene.add(light8)
  const light9 = new THREE.DirectionalLight(0xffffff, 1)
  light9.position.set(-5, 10, 0)
  scene.add(light9)
})

</script>

<style lang="less" scoped>
.imgs {
  width: 100%;
//   height: 100%;
  .img1 {
    width: 100%;
    height: 100%;
    background: url("https://tesla-cdn.thron.cn/delivery/public/image/tesla/dede7688-4a2a-49ff-9696-5052e8f6cf6e/bvlatuR/std/2880x1800/PW-Hero-Desktop-EMEA?quality=auto-medium&format=auto");
    background-size: 100% 135%;
    background-position: 0px -130px;
    .header {
      text-align: center;
      padding-top: 130px;
      font-size: 30px;
      color: #fff;
    }
    .botton{
        margin: 27% 25% 0 25%;
      color: #fff;
      display: flex;
      text-align: center;
      justify-content: space-between;
      font-weight: 700;
      font-size: 20px;
     
      .box1{
        animation-duration: 0.5s; 
      }
      .box2{
        animation-duration: 0.5s; 
        animation-delay: 0.2s;
      }
      .box3{
        animation-duration: 0.5s; 
        animation-delay: 0.4s;
      }
      .pre-buy {
        width: 20%;
        height: 6%;
        border: 2px solid #fff;
        animation-duration: 0.5s; 
        animation-delay: 0.6s;
      }
    }
  }
  .img2{
    width: 100%;
    height: 100%;
    background: url("https://www.tesla.com/sites/default/files/powerwall/security/D_Powerwall_Security_2880x1800.jpg");
    background-size: 100% 135%;
    background-position: 0px -130px;
    display: flex;
    .left{
        flex:3;
        color: #fff;
        margin-left: 10%;
        padding-top: 30%;
        .safe{
            font-size: 16px;
            margin-bottom: 10px;
        }
        .defend{
            font-size: 20px;
            margin-bottom: 30px;
        }
        .pre-buy {
        width: 60%;
        height: 30%;
        border: 2px solid #fff;
        animation-duration: 0.5s; 
        animation-delay: 0.6s;
      }
    }
    .right{
        box-sizing: border-box;
        flex:5;
        color: #fff;
        padding-top: 27%;
        font-size: 18px;
        line-height: 22px;
        padding-right: 12%;
    }
  }

 
}
</style>