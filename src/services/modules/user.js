

import ajax from '../fetch';

export default{
    // 获取用户信息
    getUserDetail(data) {
        return ajax({
            url: '/BasMember/ErpQueryMemberByCondition',
            method: 'post',
            body: data
        });
    },
    //保存客户信息
    saveUserDetail(data){
        return ajax({
            url: '/BasMember/ErpSaveBasMember',
            method: 'post',
            body: data
        });
    },
    
    //获取用户openid
    queryOpenId(){
        return ajax({
                url: '/Wechat/ErpGetWeiXiUserInfo',
                method: 'get',
            });
    }
};

