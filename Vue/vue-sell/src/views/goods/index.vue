<template>
    <div class="goods">
        <div class="goods-content">
            <div class="menu-warpper" ref="menuWarpper">
                <ul>
                    <li 
                    class="menu-item"
                    :class="{'current':currentIndex === index}"
                    v-for="(item,index) in goods" 
                    :key="index"
                    @click="Selectmenu(index)"
                    >
                    <span class="text">
                        <SupportIcon size="3" :type="item.type" v-if="item.type>=0" />
                        {{ item.name }}
                    </span>
                    </li>
                </ul>
            </div>
            <div class="foods-warpper">
                右侧菜品
            </div>
        </div>

    <div class="cart-wrapper">购物车</div>
    </div>
</template>

<script>
import SupportIcon from '@/components/support-icon/Support-icon.vue'
import {getGoods} from '@/api'
import BScroll from '@better-scroll/core'

    export default {
        components:{
            SupportIcon
        },
        data(){
            return{
                goods:[],
                currentIndex:0
            }
        },
        created(){
            //获取商品数据
            getGoods().then(res => {
                console.log(res);
                this.goods = res

                //写在这里面的回调会在页面加载完毕后才执行
                this.$nextTick(()=>{
                this.betterScroll()
                })
            })
        },
        methods:{
            betterScroll(){
                new BScroll(this.$refs.menuWarpper,{
                    click:true
                })
            },
            Selectmenu(i){
                this.currentIndex = i
            }
        }   
    }
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';
.goods{
    position: absolute;
    width: 100%;
    bottom: 46px;
    top: 177px;
    &-content{
        display: flex;
        height: 100%;
        .menu-warpper{
            flex:0 0 80px;
            background: @color-background-ssss;
            overflow: hidden;
            .menu-item{
                padding: 0 14px;
                font-size: @fontsize-small;
                height: 54px;
                display: flex;
                align-items: center;
                justify-content: center;
                &.current{
                    background: #fff;
                    font-weight: 700;
                }
            }
        }
        .foods-warpper{
            flex:1;
        }
    }
    .cart-wrapper{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 48px;
        background: #aaa;
    }
}
</style>