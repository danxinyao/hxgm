<template>
	<div id="app" class="bg-color-base">
		<!-- 头部导航 -->
		<pg-nav></pg-nav>
		<!-- 视图页面 -->
		<router-view></router-view>
		<!-- 提示信息 -->
		<pg-hud :show="isShowHUD" :type="optionsHUD.type" :content="optionsHUD.content"></pg-hud>
	</div>
</template>

<script type="text/babel">
	import { mapGetters, mapActions } from 'vuex'

	export default {
		computed: {
			...mapGetters([
				'isShowHUD', // 提示信息是否显示的开关
				'optionsHUD', // 提示信息的参数内容
			])
		}
	}
</script>