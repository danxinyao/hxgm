import ajax from '../fetch' //登录

export default {
    // 登录 BasMember 
    goLogin(data) {
        return ajax({
            url: '/BasMember/BasMemberLogin',
            method: 'post',
            body: data,
        });
    },
    // 发送验证码
    sendSMSCode(data) {
        return ajax({
            url: '/BasMember/ErpSendSMSCode',
            method: 'post',
            body: data
        });
    },
    //查询真伪接口  参数：BasQRCodeScan entity
    queryFact(data) {
        return ajax({
            url: '/BasQRCode/ErpQueryAuthentiCityQrCodeScan',
            method: 'post',
            body: data,
        });
    },
    //查询真伪接口再次请求  参数：BasQRCodeScan entity
    queryFactMore(data) {
        return ajax({
            url: '/BasQRCode/ErpQrCodeScanRecord',
            method: 'post',
            body: data,
        });
    },
    //红包发送接口 openID  获取OpenID接口：Wechat/GetOpenID
    sendRedPack(data, id) {
        return ajax({
            url: '/Wechat/WeiXinSendRedPack?id=' + data +"&merchantid=" + id,
            method: 'get',
            //body: data,
        });
    },
    //获取OpenID接口： 参数：string  redict_url  页面地址
    getOpenID(data) {
        return ajax({
            url: '/Wechat/ErpGetWeiXiUserInfo',
            method: 'get',
            body: data,
        });
    },
    //判断是否第一次登录
    checkLogin(data) {
        return ajax({
            url: '/BasMember/BasMemberCheckLogin',
            method: 'post',
            body: data,
        });
    },

}

