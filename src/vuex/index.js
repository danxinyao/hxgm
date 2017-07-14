import promisePolyfill from 'es6-promise'
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import * as types from './mutationTypes'
import {cloneDeep} from 'lodash'

promisePolyfill.polyfill()
Vue.use(Vuex)

import sysConfig from './modules/sysConfig' //系统配置（全局配置）
import qrCode from './modules/qrCode'  //缓存扫描的二维码ID QRCodeID和MerchantID
import wechatUser from './modules/wechatUser'  //缓存微信用户信息

export default new Vuex.Store({
    actions,
	getters,
	modules: {
	   sysConfig,
		qrCode,
		wechatUser,
	},
})