<template>
<!-- 溯源首页 -->
    <div class="home">
    <i class="icon iconfont icon-close font_36"></i>
        <div class="log">
            <swiper v-if="pictures.length" :options="swiperOption">
                <swiper-slide v-for="item in pictures">
                    <img :src="item">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <img v-else src="../../../assets/images/log.png" alt="">
        </div>
        <div class="btns">
            <router-link class="white-color font_38" :to="{path : '/wechat'}">查询真伪</router-link>
            <router-link class="white-color font_38" :to="{path : '/product?GoodsID='+ goodsID}">商品介绍</router-link>
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .home {
        padding: 30/@rate;
        .log {
            min-height: 350/@rate;
            img {
                display: block;
                width: 100%;
                margin: 10/@rate auto;
            }
        }
        .btns {
            margin-top: 100/@rate;
            a {
                display: block;
                width: 80%;
                height: 80/@rate;
                line-height: 80/@rate;
                background-color: #d7b791;
                text-align: center;
                margin: 50/@rate auto;
                border-radius: 10/@rate;
            }
        }
    }
</style>

<script type="text/babel">
	import index from './index'

	export default {
		...index
	}
</script>