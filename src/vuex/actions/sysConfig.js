import * as types from '../mutationTypes'
import { account as ajax } from 'services'

export default {
	/**
	 * [显示系统提示信息]
	 * @param  {[type]} options.commit [description]
	 * @param  {[type]} options        [description]
	 * @return {[type]}                [description]
	 */
	showHUD: ({commit}, options) => {
		commit(types.SYSTEM_HUD_SHOW, options)
	},
	/**
	 * [关闭系统提示信息]
	 * @param  {[type]} options.commit [description]
	 * @return {[type]}                [description]
	 */
	hideHUD: ({commit}) => {
		commit(types.SYSTEM_HUD_HIDE)
	}
}