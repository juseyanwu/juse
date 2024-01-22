<template>
	<scroll-view class="index">
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
		
		<view class="balls">
			<view class="ball-item" v-for="item in state.balls" :key="item.id">
				<view class="icon">
					<image :src="item.iconUrl" mode="aspectFill"></image>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		
		<!-- 推荐歌单 -->
		<songList :List = "state.recommendList"/>
		
		
		<!-- 推荐歌曲 -->
		<recommendSong />

	</scroll-view>
</template>

<script setup>
import {apiGetBanner,apiGetBall,apiGetRecommendList} from '../../api/index.js'
import {onLoad} from '@dcloudio/uni-app'
import { reactive } from 'vue';


const state = reactive({
	banners:[],
	balls:[],
	recommendList:[]
})

onLoad(()=>{
	getBanner()
	getBall()
	getRecommendList()
})

// 获取banner图
const getBanner = () => {
	apiGetBanner({type:2}).then(res=>{
		// console.log(res.data.banners);
		state.banners = res.data.banners
	})
}

// 获取圆形图标的入口列表
const getBall = () =>{
	apiGetBall().then(res=>{
		console.log(res.data.data);
		state.balls = res.data.data
	})
}

const getRecommendList = async() => {
	const {data : { recommend:recommend }} = await apiGetRecommendList()
	console.log(recommend);
	state.recommendList = recommend
}



</script>

<style lang="scss" scoped>
	.index{
		padding: 0 20rpx;
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
.balls{
	display: flex;
	overflow-x: scroll;
	margin: 30rpx 0;
	.ball-item{
		flex: 0 0 20%;
		font-size: 20rpx;
		text-align: center;
		.icon{
			background-color: #d81e06;
			width: 70rpx;
			height: 70rpx;
			margin: 0 auto;
			margin-bottom: 14rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
