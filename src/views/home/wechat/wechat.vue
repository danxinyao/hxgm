<template>
	<div>
		<div class="wechat">
			<div class="title title-color font_36">扫码查询真伪，还有红包领</div>
			<div class="erwei">
				<img src="../../../assets/images/erweima.jpg" alt="">
			</div>
			<div class="tishi text-color font_36">长按二维码，进入查询</div>
		</div>
	</div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
	.wechat {
		padding: 0 30/@rate;
		.title {
			padding:200/@rate 0 50/@rate 0;
		}
		.erwei {
			width: 600/@rate;
			height: 600/@rate;
			margin: 0 auto;
			img{
				width: 100%;
			}
		}
		.tishi {
			padding-top: 20/@rate;
		}
	}
</style>
<script type="text/babel">
    import wechat from './wechat'
    export default {
        ...wechat
    }
</script>