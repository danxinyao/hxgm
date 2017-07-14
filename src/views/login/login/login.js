import {login as ajax} from 'services'
import {mapGetters, mapActions} from 'vuex'

export default {
	data() {
		return {
            showBox: false, //是否显示登录页的内容s
            timeShow: false,//显示倒计时
            time: 60,//倒计时总时间
            subvalidateCode: '',//手机收到的短信验证码
            form: {
                Mobile: '',
                Nick: '',
                OpenID: '',//0WCbQwQcM-rBxpDol-P5u-8tojCQ
                SMSValidateCode: '',//手机收到的短信验证码
                ValidateCode: '',//页面返回的短信验证码
                MerchantID: ''
            },
            //判断第几次进入
            checkForm: {
               OpenID: '' ,
               MerchantID: ''
            },
		}
	},
    mounted() {
        this.queryOpenID()
        //this.isFirst()
    },
	methods: {
        ...mapActions([
            'qrcodeid',//扫描的二维码ID 
            'setWechatuser',//微信信息
        ]),
        //获取openID
        queryOpenID() {
            ajax.getOpenID().then((result) => {
                console.log(result)
                this.form.Nick = result.NickName
                this.form.OpenID = result.OpenID
                this.setWechatuser(result)
                this.isFirst()
            })
        },
        //判断第几次进入
        isFirst() {
            this.checkForm.MerchantID = this.qrcodeid.MerchantID
            this.checkForm.OpenID = this.form.OpenID
            ajax.checkLogin(this.checkForm).then((result) => {
                console.log(result)
                //false第一次true多次0
                this.showBox = result
                if(this.showBox) {
                    this.$router.push('/queryfact')
                } 
            })
        },
        //登录
        login() {
            this.form.MerchantID = this.qrcodeid.MerchantID
             if ((/^1[0-9]{10}$/.test(this.form.Mobile))) {
            } else {
                this.util.msg.error('手机号格式不对或为空')
            }
            ajax.goLogin(this.form).then((result) => {
                this.util.msg.success('登录成功！')
                this.$router.push('/queryfact')
            }).catch((error) => {
                this.util.msg.error(error)
            })
            //this.$router.push('/queryfact')          
        },
        //发送验证码
        sendCode() {
            if ((/^1[0-9]{10}$/.test(this.form.Mobile))) {
                this.count();
            } else {
                this.util.msg.error('手机号格式不对或为空')
            }
            if (this.timeShow) {
                ajax.sendSMSCode({Mobile: this.form.Mobile}).then((result) => {
                    this.util.msg.success('验证码发送成功！')
                    console.log(result)
                    this.form.ValidateCode = result
                }).catch((error) => {
                    this.util.msg.error(error)
                })
            }
        },
        //倒计时发验证码
        count() {
            this.timeShow = true;
            let time = setInterval(() => {
                if (this.time > 0) {
                    this.time --;
                } else {
                    clearInterval(time);
                    this.timeShow = false;
                    this.time = 60;
                }
            }, 1000);
        },
	}
}