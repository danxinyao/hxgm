// home
import ajax from '../fetch' //溯源

export default {
    // 查询二维码内容
    queryCustomerQRCode(data) {
        return ajax({
            url: '/BasQRCode/ErpCustomerQueryQRCode',
            method: 'post',
            body: data,
        })
    },
    //商品介绍接口：Guid GoodsID
    queryGood(data, id) {
        return ajax({
            url: '/BasGoods/ErpQueryGoodInfoByID?GoodsID=' + data +"&MerchantID=" + id,
            method: 'get',
            //body: data,
        })
    },
    //查询商品信息（介绍、质检）
    queryGoodsInfo(data) {
        return ajax({
            url: '/BasGoods/ErpQueryGoodsInfo',
            method: 'post',
            body: data,
        })
    },
    //查询真伪接口：imageTypeId=3 首页调用接口：Wechat/GetOpenid  参数：string url  HttpGet请求
    getImage(data) {
        return ajax({
            url: '/BasResourceConfig/ErpGetImage',
            method: 'get',
            body: data,
        })
    },
    // 首页调用接口：Wechat/GetOpenid  参数：string url  HttpGet请求
    getUrl(data) {
        return ajax({
            url: '/Wechat/Authorization?MerchantID=' + data,
            method: 'get',
            //body: data,
        })
    },
}

