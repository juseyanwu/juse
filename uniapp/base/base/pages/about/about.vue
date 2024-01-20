<template>
	<view>
		about page
	</view>
	<view class="btn">
		<button type="default">按钮</button>
		<view class="iconfont">&#xe79a;</view>
		<view class="iconfont icon-yinle"></view>
	</view>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
	// uni.request({
	// 	url:'https://mock.mengxuegu.com/mock/65abace8c4cd67421b34c9f1/movie/movieList',
	// 	method:'GET'
	// }).then(res => {
	// 	console.log(res);
	// })
	
	const reqTask = uni.request({
		url:'https://mock.mengxuegu.com/mock/65abace8c4cd67421b34c9f1/movie/movieList',
		method:'GET',
		success:(res) => {
			console.log(res);
			uni.setStorage({
				key:'movieName',
				data:res.data.movieList[0].nm,
				success: () => {
					uni.showToast({
						title:'保存成功',
						duration:2000,
						icon:'success'
					})
				}
			})
		}
	})
	// reqTask.abort()
})
</script>

<style lang="scss">
.btn{
	button{
		width: 750rpx; // rpx是根据屏幕宽度制定的响应式单位
	}
}
</style>
