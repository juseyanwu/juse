<template>
	<view class="index">
		<wyheader>
			将内容填充到名为content的插槽中
			<template v-slot:content>
				<view class="search">
					<uni-easyinput style="{height: 60rpx;}" prefixIcon="search" v-model="value" placeholder="请输入内容" @iconClick="iconClick"></uni-easyinput>
				</view>
			</template>
		</wyheader>
		
		<menuLeft />
		
		
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true" indicator-color="#eee" indicator-active-color="#d81e06">
				<swiper-item v-for="item in state.banners" :key="item.encodeId">
					<view class="swiper-item">
						<image :src="item.pic" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script setup>
import {apiGetBanner} from '../../api/index.js'
import {onLoad} from '@dcloudio/uni-app'
import { reactive } from 'vue';


const state = reactive({
	banners:[]
})

onLoad(()=>{
	getBanner()
})

const getBanner = () => {
	apiGetBanner({type:2}).then(res=>{
		console.log(res.data.banners);
		state.banners = res.data.banners
	})
}
</script>

<style lang="scss" scoped>
	.index{
		padding: 0 15rpx;
	}
.banner{
	.swiper-item{
		border-radius: 10px;
		height: 100%;
		overflow: hidden;
		image{
			width: 100%;
			height: 100%;
		}
	}
}
</style>
