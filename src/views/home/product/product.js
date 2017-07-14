import { home as ajax } from 'services'
import {mapGetters, mapActions} from 'vuex'

export default {
	data() {
      	return {
      		content: '',
            GoodsID: "7863f435-12dd-4167-9cba-364c9a23fb66",
            MerchantID: "0a92375d-c9ab-4b07-98f4-c0aaa4c14102",
      	}
  	},
  	mounted() {
  		console.log(this.$route.query.GoodsID)
        if(this.$route.query.GoodsID && this.qrcodeid.MerchantID) {
  		    this.queryContent()
        }
        //this.getGoodsInfo()
  	},
    computed: {
        ...mapGetters([
            'qrcodeid',//扫描的二维码ID 
            'wechatuser',//微信用户信息
            'isShowHUD', // 提示信息是否显示的开关
            'optionsHUD', // 提示信息的参数内容
        ])
    },
  	methods: {
        //查询商品介绍-何伟
  		queryContent() {
  			console.log('dan')
  			ajax.queryGood(this.$route.query.GoodsID, this.qrcodeid.MerchantID).then((result) => {
  				console.log(result)
                this.content = result.Content
  			})
  		},
        getGoodsInfo() {
            var query = {GoodsId: this.$route.query.GoodsID , InfoType:1 }
            ajax.queryGoodsInfo(query).then((result) => {
                console.log(result)
                if(result.Content.length != 0) {
                    this.content = result.Content
                } 
            })
        },
  	}
}