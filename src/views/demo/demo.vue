<template>
    <div>
        <div class="title">提示</div>
        <div>
            <a href="javascript:void(0)" @click="hud('loading')">加载中</a>
            <a href="javascript:void(0)" @click="hud('success')">成功</a>
            <a href="javascript:void(0)" @click="hud('error')">错误</a>
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    div {
        &.title {
            .px2px(font-size, 40);
            margin: 40/@rate 0;
        }
        text-align: left;
    }
</style>

<script type="text/babel">
	import demo from './demo'

	export default {
		...demo
	}
</script>