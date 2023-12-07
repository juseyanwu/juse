<template>
    <div>
        <div class="common-layout">
            <el-container>
                <el-header>选课系统</el-header>
                <el-container>
                    <el-aside width="200px">Aside</el-aside>
                    <el-main>Main</el-main>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.common-layout{
    height: 100vh;
    .el-container{
        height: 100%;
        .el-header{
            background-color: rgba(179, 245, 203, 0.544);
            line-height: 80px;
            height: 80px;
            font-size: 30px;
        }
    }
}
</style>