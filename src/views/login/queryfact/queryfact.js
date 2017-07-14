import {login as ajax} from 'services'
import {mapGetters, mapActions} from 'vuex'

export default {
	data() {
		return {
			show: false, //弹出遮罩层
            showContent: true,//遮罩层内容状态
            content: '0',//遮罩层内容
            form: {
                DetectCode: '',//防伪码
                QRCodeID: '',//扫描的二维码ID 
                OpenID: '',//微信ID
                ScanZone: '',//所在区域     
                MerchantID: '',   
                RedPackAmount: ''      
            },
		}
  	},
    computed: {
        ...mapGetters([
            'qrcodeid',//扫描的二维码ID 
            'wechatuser',//微信用户信息
        ])
    },
    mounted() {
      //console.log(this.qrcodeid)
    },
  	methods: {
        //查询真伪
  		login() {
            alert('查询真伪开始')
            this.form.QRCodeID = this.qrcodeid.QRCodeID
            this.form.MerchantID = this.qrcodeid.MerchantID
            this.form.OpenID = this.wechatuser.OpenID
            this.form.ScanZone = this.wechatuser.Country + this.wechatuser.Province + this.wechatuser.City 
            console.log(this.form)
            alert(this.form.OpenID)
            ajax.queryFact(this.form).then((result) => {
                this.content = result.DetectCodeCheck
                alert(this.content.DetectCodeCheck)
                if(result.DetectCodeCheck == 1) {
                    //正品第一次查询
                    this.showContent = true
                     this.sendRed()
                    //     setTimeout(() => {
                    //         this.sendRed()
                    //     }, 2000);
                }else {
                    //别人已经查过了
                    this.showContent = false
                }
                this.addQueryFact()
            }).catch((error) => {
                    this.util.msg.error(error)
                })
  			this.show = true
            alert('查询真伪结束')
  		},
        //添加查询记录 
        addQueryFact() {
            alert('添加查询记录k')
            ajax.queryFactMore(this.form).then((result) => {

            })
            alert('添加查询记录end')
        },
  		know() {
            // if(this.content.DetectCodeCheck = 0 || this.content.DetectCodeCheck = "") {
                //this.sendRed()
            // }
            this.show = false

            //this.$router.push('/factdetail')
  		},
        //发红包
        sendRed() {
            alert('发红包开始')
            ajax.sendRedPack(this.form.OpenID, this.form.MerchantID).then((result) => {
                this.form.RedPackAmount = result.TotalAmount
            })
            alert('发红包结束')
        }
  	}
}