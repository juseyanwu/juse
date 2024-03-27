<template>
  操作成功
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

onMounted(()=>{
  router.go(-1)
})
</script>

<style>

</style>