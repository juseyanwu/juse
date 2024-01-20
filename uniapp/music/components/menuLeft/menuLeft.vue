<template>
	<view class="menu-left" :class="isShow ? 'show' : 'hide'">
		<view class="menu-hd">
			<view class="user-info">
				<view class="avatar">
					<img src="../../static/icon/wangyiyun.png" mode="aspectFill" class="pic" />
				</view>
				<view class="username">
					<text>陈子进</text>
					<uni-icons type="right" size="16"></uni-icons>
				</view>
			</view> 
			<view class="qricon">
				<uni-icons type="scan" size="25"></uni-icons>
			</view>
		</view>
		
		<view class="menu-bd">
			hello
		</view>
	</view>
	
	<view class="menu-mask" @click="hideMenu" v-show="isShow"></view>
</template>

<script setup>
import { computed } from 'vue';
import {useStore} from 'vuex'

const store = useStore()


const isShow = computed(()=>{
	return store.state.isShowMenu
})
const hideMenu = () => {
	store.commit('changeisShowMenu',false)
}
</script>

<style lang="scss" scoped>
.menu-left{
	position: fixed;
	top: 0;
	z-index: 9999;
	width: 620rpx;
	padding: 30rpx;
	box-sizing: border-box;
	background-color: #fff;
	height: 100%;
	transition: all 0.5s ease-in-out;
	&.show{
		left: 0;
	}
	&.hide{
		left: -620rpx;
	}
	.menu-hd{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.user-info{
			display: flex;
			align-items: center;
			.avatar{
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				overflow: hidden;
				.pic{
					height: 100%;
					width: 100%;
				}
			}
			.username{
				margin-left: 20rpx;
			}
		}
	}
}
.menu-mask{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1000;
}
</style>