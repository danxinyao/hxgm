import * as types from '../mutationTypes'

export default {
    //缓存扫描的二维码ID QRCodeID和MerchantID
    setQrcodeid: ({ commit }, data) => {
        commit(types.SET_QRCODEID, data)
    }
}