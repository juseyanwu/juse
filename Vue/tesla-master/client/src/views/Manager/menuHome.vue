<template>
  <h1>近7年销售情况</h1>
  <div id="main"></div>
  <h1>各大洲销售情况</h1>

  <div id="rose"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";

onMounted(() => {
  // 折线图
  var chartDom = document.getElementById("main");
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    xAxis: {
      type: "category",
      data: ["2017年", "2018年", "2019年", "2020年", "2021年", "2022年"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [34354, 28658, 29487, 109877, 297704, 370589, 532897],
        type: "line",
        smooth: true
      }
    ]
  };
  option && myChart.setOption(option);

  // 南丁格尔玫瑰图
  var chartDom1 = document.getElementById("rose");
  var myChart1 = echarts.init(chartDom1);
  var option1;

  option1 = {
    title: {
      // text: "Nightingale Chart",
      // subtext: "Fake Data",
      // left: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      left: "center",
      top: "bottom",
      data: [
        "亚洲",
        "北美洲",
        "南美洲",
        "欧洲",
        "非洲",
        "rose6",
        "rose7",
        "rose8"
      ]
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: "Radius Mode",
        type: "pie",
        radius: [20, 140],
        center: ["25%", "50%"],
        roseType: "radius",
        itemStyle: {
          borderRadius: 5
        },
        label: {
          show: false
        },
        emphasis: {
          label: {
            show: true
          }
        },
        data: [
          { value: 40, name: "亚洲" },
          { value: 33, name: "北美" },
          { value: 28, name: "欧洲" },
          { value: 22, name: "南美" },
          { value: 20, name: "非洲" },
          // { value: 15, name: "rose 6" },
          // { value: 12, name: "rose 7" },
          // { value: 10, name: "rose 8" }
        ]
      },
      {
        name: "Area Mode",
        type: "pie",
        radius: [20, 140],
        center: ["75%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 40, name: "亚洲" },
          { value: 33, name: "北美" },
          { value: 28, name: "欧洲" },
          { value: 22, name: "南美" },
          { value: 2, name: "非洲" },
        ]
      }
    ]
  };

  option1 && myChart1.setOption(option1);
});
</script>

<style>
#main {
  width: 50%;
  height: 50%;
  margin-left: 20%;
}
h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}
#rose{
  width: 50%;
  height: 50%;
  display: flex;
  margin-left: 20%;
  justify-content: center;
}
</style>