// 扫描的二维码ID
import * as types from '../mutationTypes'

const state = {
    qrcodeid: {},  //缓存扫描的二维码ID QRCodeID和MerchantID
}

const mutations = {
    [types.SET_QRCODEID] (state, data) {
        state.qrcodeid = data
    },
} 

export default{
    state,
    mutations
}