<template>
<!-- 登录 -->
    <div class="login" v-if="!showBox">
        <form class="pg-form border big white-color">
            <div class="item line-border-color">
                <i class=" iconfont icon-icon_xingming text-color"></i>
                <input type="text" class="text-color"v-model="form.Mobile" placeholder="手机号" >
            </div>
            <div class="item line-border-color sendcode">
                <i class=" iconfont icon-icon_sousuo text-color"></i>
                <input type="text" class="text-color" v-model="form.SMSValidateCode" placeholder="动态验证码" >
                <a href="javascript:void(0)" v-if="!timeShow" class="line-border-color white-color font_28" @click="sendCode">获取验证码</a>
                <a href="javascript:void(0)" v-if="timeShow" class="line-border-color white-color ">还有 <span >{{time}}</span> 秒</a>
            </div>
            <div class="item loginBtn ">
                <a class="white-color font_38" @click="login">登录</a>
            </div>
        </form>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .login {
        .item {
            position: relative;
            border-bottom-width: 1/@rate;
            border-bottom-style: solid;
            text-align: center;
            i {
                position: absolute;
                top:0;
                left: 0;
            }
            &.loginBtn {
                a {
                    padding: 25/@rate 200/@rate;
                    //width: 100%;
                    line-height: 100/@rate;
                    border-radius: 5/@rate;
                    text-align: center;
                    background-color: #d7b791;
                }
            }
        }
        .sendcode {
            input {
                width: 50%;
            }
            a {
                padding: 15/@rate 20/@rate;
                text-align: center;
                border-width: 1/@rate;
                border-style: solid;
                border-radius: 5/@rate;
                background-color: #d7b791;
            }
        }
    }
</style>

<script type="text/babel">
	import login from './login'

	export default {
		...login
	}
</script>