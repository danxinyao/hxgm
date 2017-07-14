export default {
	// 系统配置部分
	isShowHUD : state => state.sysConfig.hud_options.show, // 是否显示系统提示信息
	optionsHUD : state => state.sysConfig.hud_options.options, // 系统提示信息的参数
	qrcodeid: state => state.qrCode.qrcodeid,  //缓存扫描的二维码ID QRCodeID和MerchantID
	wechatuser: state => state.wechatUser.wechatuser,  //缓存微信用户信息
}
