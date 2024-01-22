<template>
	<view class="recommend-song">
		<swiper>
			<swiper-item>
				<view class="swiper-item">
					<view class="song-desc">
						<view class="pic">
							<image src="../../static/icon/社区.png" mode=""></image>
						</view>
						<view class="desc">
							<view class="name">惊鸿一面</view>
							<view class="name">许嵩</view>
						</view>
						<view class="mv iconfont icon-video"></view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">2</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"recommendSong",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.song-desc{
	.pic{
		image{
			width: 100rpx;
			height: 100rpx;
		}
	}
}
</style>