<template>
    <el-row class="tac">
    <el-col :span="4">
      <h5 class="mb-2 title">特斯拉后台管理系统</h5>
      <el-menu default-active="1" @open="handleOpen" @close="handleClose" router="true">
        <el-menu-item index="1" route="/admin/menuhome">
          <el-icon>
            <House />
          </el-icon>
          <span>首页</span>
        </el-menu-item>

        <el-menu-item index="2" route="/admin/vip">
          <el-icon>
            <User />
          </el-icon>
          <span>会员管理</span>
        </el-menu-item>

        <el-menu-item index="3" route="/admin/car">
          <el-icon>
            <document />
          </el-icon>
          <span>汽车信息管理</span>
        </el-menu-item>
        <el-menu-item index="4" route="/admin/order">
          <el-icon>
            <Grid />
          </el-icon>
          <span>订单管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  
  </el-row>
</template>

<script>
export default {

}
</script>

<style>

</style>