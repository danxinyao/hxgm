// 扫描的二维码ID
import * as types from '../mutationTypes'

const state = {
    wechatuser: {},  //缓存微信用户信息
}

const mutations = {
    [types.SET_WECHATUSER] (state, data) {
        state.wechatuser = data
    },
} 

export default{
    state,
    mutations
}