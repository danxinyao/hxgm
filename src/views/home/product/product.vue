<template>
    <div>
        <div class="product" v-if="content">
            <div class="content-detail clearfix">
                <div class="content-text" v-html="content">
                </div>
            </div>
        </div>
        <div v-else class="contents font_36 text-color">
            暂无数据！
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .product {
        width: 100%;
        height: 100%;
        .content-detail {
            width: 100%;
            height: 100%;
            padding: 30/@rate;
            border: 1px solid #cccccc;
            color: #666666;
            margin-top: 30/@rate;
            .px2px(font-size,28);
            img {
                width: 100%;
                margin: 0 auto;
                display: block;
            }
        }
    }
    .contents {
        padding: 200/@rate 30/@rate;
    }
</style>

<script type="text/babel">
    import product from './product'
    export default {
        ...product
    }
</script>