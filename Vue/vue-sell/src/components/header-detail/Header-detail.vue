<template>
    <transition name="fade">
        <div class="header-detail">
            <div class="detail-wrapper">
                <div class="detail-main">
                    <h1 class="name">店铺名称</h1>
                </div>
            </div>
            <div class="detail-close" @click.stop="hideDetail">
                X
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        methods:{
            hideDetail(){
                this.$emit('hide',false)
            }
        }
    }
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';
.header-detail{
    position: fixed; //相对于整个屏幕定位
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: @color-background-s;
    color: @color-white;
    backdrop-filter: blur(10px);
    z-index: 999;
    &.fade-enter-from,&fade-leave-to{
        opacity: 0;
        background: @color-background;
    }
    &.fade-enter-active,&fade-leave-active{
        transition: all 0.5s ease;
    }
    .detail-wrapper{

    }
    .detail-close{
        position: fixed;
        width: 30px;
        height: 30px;
        bottom: 30px;
        left: 50%;
        margin-left: -15px;
        text-align: center;
        line-height: 30px;
    }
}
</style>