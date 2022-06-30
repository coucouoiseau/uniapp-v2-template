<template>
	<view class="content">
		<status-bar-holder></status-bar-holder>
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
	</view>
</template>

<script>
import {selectMenuByKeyword} from "../../api/intelligentQA";

export default {
	data() {
		return {
			title: 'Hello'
		}
	},
	onShow() {
		selectMenuByKeyword({
			keyword:'',
			labelName:'',
			sbName:'',
		}).then(res=>{
			this.title = 111
		}).catch(err=>{
			this.title = 111
		})
	},
	methods: {}
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
