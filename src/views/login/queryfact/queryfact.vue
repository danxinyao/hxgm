<template>
<!-- 正品查询 -->
    <div class="queryfact login">
   		 <div class="title disable-bg-color font_28">
			<p class="title_p title-color font_36">正品查询</p>
			<p >天降红包</p>
   		 </div>
   		 <form class="pg-form border big white-color">
   		 	<div class="item line-border-color">
   		 		<input type="text" class="text-color" v-model="DetectCode" placeholder="输入防伪码" >
   		 	</div>
              <div class="item loginBtn ">
                <a class="login-border-color white-color disable-bg-color font_38" @click="login">立即查询</a>
            </div>
   		 </form>
         <!-- 遮罩层 -->
         <div class="hub" v-if="show">
            <!-- 正品 -->
             <div class="hub_main font_28 " v-if="showContent">
                 <div class="hub_top">
                     <p class="font_36 title-color">您购买的是正品</p>
                     <p class="title-color">已查询次数：{{content}}</p>
                 </div>
                 <div class="hub_bottom text-color">
                     <p >恭喜您获得微信现金奖励！</p>
                     <p>将下发至个人微信-钱包。</p>
                 </div>
                 <a href="javascript:void(0)" class="success-color" @click="know">我知道了</a>
             </div>
            <!-- 已查过 -->
             <div class="hub_main font_28" v-if="!showContent">
                 <div class="hub_top">
                     <p class="font_36 title-color">该商品已被查询过</p>
                     <p class="title-color">已查询次数：{{content}}</p>
                 </div>
                 <div class="hub_bottom text-color">
                     <p >如有疑问请拨打电话</p>
                     <p>110-119-120</p>
                 </div>
                 <a href="javascript:void(0)" class="success-color" @click="know">我知道了</a>
             </div>
            <!--  未查到  -->
<!--              <div class="hub_main font_28" v-if="showContent == 3">
                 <div class="hub_top">
                     <p class="font_36 title-color">查询不到该商品</p>
                     <p class="title-color">已查询次数：1</p>
                 </div>
                 <a href="javascript:void(0)" class="success-color" @click="know">我知道了</a>
             </div> -->
         </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .queryfact {
		.title {
    		padding: 100/@rate;
			.title_p {
				margin: 20/@rate;
			}
		}
        .hub {
            position: absolute;
            top:0;
            bottom: 0;
            left: 0;
            right:0;
            background-color: rgba(0,0,0,0.7);
            .hub_main {
                background-color: #fff;
                position: absolute;
                top:50%;
                left: 50%;
                width: 500/@rate;
                height: 400/@rate;
                margin-left: -250/@rate;
                margin-top: -200/@rate;
                a {
                    margin: 100/@rate;
                }
                p {
                    margin-bottom: 20/@rate;
                }
                .hub_top {
                    padding: 50/@rate;
                }
                .hub_bottom {
                    margin-bottom: 50/@rate;
                }
            }
        }
    }
    .login {
        .item {
            position: relative;
            border-bottom-width: 1/@rate;
            border-bottom-style: solid;
            text-align: center;
            &.loginBtn {
                a {
                    padding: 25/@rate 200/@rate;
                    line-height: 100/@rate;
                    //border-width: 1/@rate;
                    //border-style: solid;
                    border-radius: 5/@rate;
                    text-align: center;
                    background-color: #d7b791;
                }
            }
        }
    }
</style>

<script type="text/babel">
	import queryfact from './queryfact'

	export default {
		...queryfact
	}
</script>