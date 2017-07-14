<template>
    <div class="navigation" 
        v-show="isShow">
        <a class="back" href="javascript:void(0)" v-if="upNav !== '/'" @click="back">
            <i class="white-color font_38 iconfont icon-icon_fanhui"></i>
        </a>
        <span class="title white-color font_38">{{title}}</span>
        <!-- <pg-icon :name="navButton.icon" class="btn white-color font_42" @click="goPath" v-if="navButton.icon"></pg-icon> -->
        <!-- <router-link class="btn white-color font_36" :to="{path: navButton.path}" v-if="navButton.label && !navButton.icon">{{navButton.label}}</router-link> -->
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .navigation {
        position: relative;
        left: 0;
        top: 0;
        right: 0;
        height: 88/@rate;
        line-height: 88/@rate;
        background-color: rgba(102,102,102,1);
        .back {
            position: absolute;
            left: 25/@rate;
            top: 0;
            width: 88/@rate;
            height: 88/@rate;
            text-align: left;
        }
        .home {
            position: absolute;
            right: 30/@rate;
        }
        .btn {
            position: absolute;
            right: 30/@rate;
        }
    }
</style>

 <script type="text/babel">
    export default {
        name: 'PgNav',
        data() {
            return {
                title: '',
                upNav: '',
                showHomeButton: false,
                navButton: {},
                backPath: '',
                isShow: true
            }
        },
        watch: {
            '$route'(to, from) {
                this.title = to.meta.title || ''
                this.upNav = from.path
                this.navButton = to.meta.navButton || {}
                this.backPath = to.meta.back || ''
                if (to.path == '/home' || to.path == '') {
                    this.isShow = false
                }
                else {
                    this.isShow = true
                }
            }
        },
        methods: {
            back() {
                if (this.backPath != '') {
                    this.$router.push(this.backPath)
                }
                else {
                    this.$router.go(-1)
                }
            },
            goPath() {
                this.$router.push(this.navButton.path)
            }
        }
    }
 </script>