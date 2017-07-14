<template>
<!-- 登录 -->
    <div class="factdetail bg-color-base font_28 text-color">
        <div class="bg-color mains clearfix">
            <div class="title font_36 title-color">你收到一个红包</div>
            <div class="time disable-color">今天09：45</div>
            <div class="content">
                <p>你参与<span class="disable-color">*****活动</span>，成功获得<span class="disable-color">公众号名称</span>赠送的红包，点击消息打开，一起抢红包、拼手气吧！</p>
                <p>点击消息拆开红包即可获得现金</p>
            </div>
            <a href="javascript:void(0)" class="seedetail font_32">详情</a>
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .factdetail {
        padding: 200/@rate 30/@rate;
        text-align: left;
        .mains {
            padding: 30/@rate;
            padding-bottom: 100/@rate;
            p {
                padding: 20/@rate 0;
            }
            .title {
                margin-top: 20/@rate;
            }
            .time {
                margin-bottom: 20/@rate;
                margin-top: 10/@rate;
            }
            .seedetail {
                line-height: 80/@rate;
            }
        }
    }
</style>

<script type="text/babel">
	import factdetail from './factdetail'

	export default {
		...factdetail
	}
</script>