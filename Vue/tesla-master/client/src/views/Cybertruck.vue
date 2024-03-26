<template>
  <div class="header">
    <Header />
  </div>
  
  <!-- <div class="container" ref="containerRef"></div>
  <div class="content-box">
    <div class="content">
      <div class="content-titel">
        <h1>汽车的展示与选配</h1>
      </div>
      <h2>选择车身颜色</h2>
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
      <h2>选择贴膜材质</h2>
    </div>
  </div> -->
</template>

<script setup>
import Header from "../components/Header.vue";
import * as three from "three";
import { onMounted, ref } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

let colors = [
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

// 渲染器
const renderer = new three.WebGLRenderer({
  antialias: true // 抗锯齿效果
});
renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器的宽高

// 相机
const camera = new three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 6);

// 场景
const scene = new three.Scene();

// const geometry = new three.BoxGeometry(1, 1, 1)
// const material = new three.MeshBasicMaterial({ color: 'green' })
// const cube = new three.Mesh(geometry, material)
// scene.add(cube)

const render = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};

//
const containerRef = ref(null);
let controls = null;

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
  dracoLoader.setDecoderPath("./cyberTruck/parameter/"); // 读取参数
  gltfLoader.setDRACOLoader(dracoLoader); // 将参数读取到模型上
  gltfLoader.load("./cyberTruck/model/tesla_cybertruck.glb", gltf => {
    const cyberTuck = gltf.scene;
    console.log(cyberTuck);
    scene.add(cyberTuck);
  });

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

<style  lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.content-box {
}
.container {
  width: 500px;
  height: 400px;
}
.content {
  position: fixed;
  top: 100px;
  right: 20px;
}
.select {
  display: flex;
}
.select-item {
  margin: 5px;
  cursor: pointer;
}
.select-item-color {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>