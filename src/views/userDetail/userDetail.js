import { user as ajax } from 'services'
import {mapGetters, mapActions} from 'vuex'

export default {
	data() {
		return {
            detail:{
                Mobile:'',
                Name:'',
                Sex:'',
                CertType:'',
                CertNo:'',
                Email:''
            },
            openId:'erdfdawegfdfedfe_fee001',//
            MerchantID:'54DBAB93-DCF4-46E9-B066-86E86897188B',
            
		}
	},
    computed: {
        ...mapGetters([
            'qrcodeid',//扫描的二维码ID 
        ])
    },
	methods: {
        // 提示框
        hud(val) {
            if (val == 'loading') {
                this.util.msg.loading()
                setTimeout(() => {
                    this.util.msg.close()
                }, 2000)
            }
            else if (val == 'success') {
                this.util.msg.success('正确')
            }
            else if (val == 'error') {
                this.util.msg.error('错误')
            }
            else {
                this.util.msg.close()
            }
        },
        //查询客户详细信息
        queryUserDetail(){
            if(this.openId == ""){
                return false
            }
            ajax.getUserDetail({OpenID:this.openId,MerchantID:this.MerchantID})
                .then((result)=>{
                    this.detail = result;
                    console.log(result)
                })
        },
        //获取openid
        queryid(){
            console.log("进来了");
            ajax.queryOpenId()
                .then((result)=>{
                    console.info(result);
                    this.openId = result.OpenID
                    
                    if(this.openId !=null &&this.openId !=''){
                        this.queryUserDetail();
                    } 
                })
                      
        },
        //保存信息
        save(){
            let re = /^1\d{10}$/
            this.detail.MerchantID = this.MerchantID
            if(!re.test( this.detail.Mobile)){
                this.util.msg.error('请输入正确的电话号码')
                return false
            }
            ajax.saveUserDetail(this.detail)
                .then((result)=>{
                    console.log(result)
                    this.util.msg.success('保存成功')
                })
        }

	},
    mounted(){
        this.MerchantID = this.qrcodeid.MerchantID
        this.queryid();
    }
}