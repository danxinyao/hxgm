import {home as ajax} from 'services'
import {mapGetters, mapActions} from 'vuex'

export default {
	data() {
		return {
            swiperOption: { // banner滚动配置
                autoplay: 4000,
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true
            },
            query: {
                MerchantID: '',
                Code: '',
                //IsUpdateCheck: ''
            },
            pictures: [],
            goodsID: '',
		}
	},
    mounted() {
        console.log(this.$route.query)
        this.query.MerchantID = this.$route.query.m
        this.query.Code = this.$route.query.c
        if(this.$route.query.m && this.$route.query.c) {
            this.getHomeUrl()
            this.queryQRCode()
        }
    },
	methods: {
        ...mapActions([
            'setQrcodeid',//扫描的二维码ID 
            'setWechatuser',//微信信息
        ]),
        //查询图片信息
        queryQRCode() {
            ajax.queryCustomerQRCode(this.query).then((result) => {
                this.pictures = result.Pictures
                this.goodsID = result.GoodsID
                //this.getHomeUrl()
                this.setQrcodeid({
                    QRCodeID :result.QRCodeID,
                    MerchantID: result.MerchantID
                }) //缓存扫描的二维码ID QRCodeID和MerchantID
            })
        },
        //为了获取openid
        getHomeUrl() {
            //console.log(window.location.origin)
            //this.url = window.location.origin
            ajax.getUrl(this.query.MerchantID).then((result) => {
            }).catch((error) => {
                    this.util.msg.error(error)
                })
        },
	}
}