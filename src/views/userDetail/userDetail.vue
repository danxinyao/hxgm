<template>
    <div class="juniorBox">
        <div class="juniorBox-info" >
            <!-- 编号 -->
            <div class="num">
                <span style="display:block;text-align:center"><font style="color:red">*</font>手机号  :</span>
                <input type="text" v-model="detail.Mobile">
                <span class="bdShow" v-if="detail.Flag=='1'">绑定</span>
                <span class="bdShow" v-else>未绑定</span>
            </div>
            <div class="num">
                <span style="display:block;text-align:center">姓名  :</span>
                <input type="text" v-model="detail.Name">
            </div>
            <div class="num">
                <span style="display:block;text-align:center">性别  :</span>
                <input type="text" v-model="detail.Sex">
            </div>  
            <div class="num">
                <span style="display:block;text-align:center">证件类型  :</span>
                <div class="dateDiv">
                    <select style="width:80%" v-model="detail.CertType">
                        <option value="1">身份证</option>
                        <option value="2">护照</option>
                        <option value="3">其他</option>
                    </select>
		        </div>
                
            </div>  
            <div class="num">
                <span style="display:block;text-align:center">证件号码  :</span>
                <input type="text" v-model="detail.CertNo">
            </div>  
            <div class="num">
                <span style="display:block;text-align:center">电子邮箱  :</span>
                <input type="text" v-model="detail.Email">
            </div> 
            <div class="nameOder">
                <span style="display:block;text-align:center" @click="save">提交</span>
            </div>         
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';

    .juniorBox {
        .dateDiv{
            background-color: #fff;
            background: url('../../assets/images/arr.png') right center no-repeat; 
        /* the width and the height of your image */
            width: 70%;
            height: 60/@rate;
            overflow: hidden;
            border-radius: 10/@rate;
            margin: 30/@rate 30/@rate 30/@rate 0;
            select{
                -webkit-appearance:none;
                -moz-appearance:none;
                appearance:none;
                background:transparent;
                border:none;
                padding-left:10/@rate;
                width: 100%;
                height:100%;    
            }
        }
        .h1F{
            font-weight: 700
        }
        margin-bottom: 30/@rate;
        .num {
            background: #fff;
            height: 130/@rate;
            display: flex;
            border-bottom: 1px solid #f0f0f0;
            span {
                color: #999;
                .px2px(font-size, 28);
                margin: auto 0 auto 40/@rate;
                
            }
            .bdShow{
                    margin: auto 50/@rate auto 0;
                    color: red;
                    display: block;
                    border: 1px solid #999;
                    padding: 10/@rate 20/@rate;
                    border-radius: 30/@rate;
            }
            i {
                /* color: @themeBlue; */
                .px2px(font-size, 28);
                float: right;
            }
            input{
                flex: 1;
                border:#999;
                height: 70%;
                margin-top: 20/@rate;
                margin-right:20/@rate; 
                
            }

        }
        .nameOder {
            padding: @basePadding;
            span {
                background: #C9C9C9;
                display: block;
                padding: 20/@rate;
                color: #666666;
                .px2px(font-size, 28);
            }                           
        }
        .time {
            background: #fff;
            padding: @basePadding;
            border-bottom: 1px solid #f0f0f0;
            span {
                color: #666666;
                .px2px(font-size, 28);
            }
        }
        .total {
            padding: @basePadding;
            background: #fff;
            border-bottom: 1px solid #efefef;
            .account {
                padding-left: 14/@rate;
            }
            span {
                color: #666;
                .px2px(font-size, 28)

            }
            span:nth-of-type(3) {
                float: right;
                i {
                    color: #000000;
                }
            }
        }
        .option {
            background: #fff;
            padding: @basePadding;
            .check-btn {
                padding: 20/@rate;
                .buttonFlex(@color: #fff);
                .margin-left-right(5);
            }
            .orderButtonState {
                .px2px(font-size, 36);
                text-align: center;
            }
        }
        .selectCtrl {
            width: 100%;
        }
        .deliverySheet {
            width: 100%;
            height: 80/@rate;
            border: none;
            border-bottom: 1px solid #f5f5f5;
        }
    }
</style>

<script type="text/babel">
	import userDetail from './userDetail'

	export default {
		...userDetail
	}
</script>