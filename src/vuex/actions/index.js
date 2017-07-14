import sysConfig from './sysConfig' // 系统配置
import qrCode from './qrCode' // 扫描的二维码ID
import wechatUser from './wechatUser' // 缓存微信用户信息

export default {
	...sysConfig,
	...qrCode,
	...wechatUser
}