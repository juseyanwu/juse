<template>
<div class='xxx' :class="abc ? 'abc' : ''" @mouseenter="handleHover">
  xxx
</div>
</template>

<script setup>
import { ref } from 'vue';

const abc = ref(false)
const handleHover = () => {
  abc.value = true
}
</script>

<style scoped>
.xxx {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 20%;
  border: 1px solid red;
  margin: 20px;
  padding: 20px;
}
.abc {
  transform: rotateZ(360deg);  
  transition: 5s;
}
</style>