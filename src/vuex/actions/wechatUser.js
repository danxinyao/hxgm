import * as types from '../mutationTypes'

export default {
    //缓存微信用户信息
    setWechatuser: ({ commit }, data) => {
        commit(types.SET_WECHATUSER, data)
    }
}