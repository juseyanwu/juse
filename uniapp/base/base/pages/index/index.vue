<template>
	<view class="content">
		<navigator url="/pages/about/about">去关于页面</navigator>
		<!-- 相当于routerlink -->
		<image class="logo" src="/static/logo.png" @click="goAbout"></image>
		<view class="text-area" @click="changeTitle">
			<text class="title">{{title}}</text>
			<text>{{reverseTitle}}</text>
		</view>
		
		<song :data='list.song'/>
	</view>
</template>

<script setup>
import song from '../../components/song/song.vue'
import { reactive, ref ,computed} from 'vue';
const title = ref('你好')
const changeTitle = () => {
	title.value = title.value === '你好' ? 'hello' : '你好'
}

const reverseTitle = computed(()=>{
	return title.value.split('').reverse().join('')
})

const list = reactive({
	song:{
		img:'https://ts1.cn.mm.bing.net/th/id/R-C.c7b0d23ae8fd578ddef45ae943b14501?rik=a74yJget38SuLw&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140305%2f1-140305222319.jpg&ehk=MDp7pExBnr7SIN%2fKEHW7x%2be%2f9HA8YW30Ed3PPEgTJlE%3d&risl=&pid=ImgRaw&r=0',
		title:'卡通头像',
		price:'10',
		marketPrice:'13'
	}
})

const goAbout = () => {
	uni.navigateTo({
		url:'/pages/about/about'
	})
}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
