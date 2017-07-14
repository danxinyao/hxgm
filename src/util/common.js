import Vue from 'vue'
import actions from '../vuex/actions'
import store from '../vuex'
import {wechat} from '../services'
import wx from 'weixin-js-sdk'
import {rootPath} from '../services/fetch/config'

Vue.prototype.util = {

    /**
     * 获取当前服务器域名端口
     */
    hostUrl: () => {
        return rootPath.substring(0, rootPath.length - 4)
    },
    /**
     * [是否为微信浏览器]
     * @return {[type]} [description]
     */
	isWechat: () => {
        const ua = navigator.userAgent.toLowerCase();
        const micromessenger = ua.match(/MicroMessenger/i);
        if (micromessenger && micromessenger[0] === 'micromessenger') {
            return true;
        } 
        else {
            return false;
        }
    },

    /**
     * [秒数转换为时间]
     * @param  {[type]} time [时间戳]
     * @return {[type]}      [description]
     */
    makeTimeString: (time) => {
        const timeShowString = []
        timeShowString[0] = parseInt(time / 60, 10)
        if (timeShowString[0] < 10) {
            timeShowString[0] = `0${timeShowString[0]}`
        }
        timeShowString[1] = time % 60
        if (timeShowString[1] < 10) {
            timeShowString[1] = `0${timeShowString[1]}`
        }
        return timeShowString.join(':')
    },

    /**
     * [将从服务器拿到的时间格式(yyyy-mm-ddThh:mm:ss:mmm)转换为yy-mm-dd hh:mm:ss格式]
     * @param  {[type]} time [description]
     * @return {[type]}      [description]
     */
    serverTimeToString: (time) => {
        if (time) {
            const reg =  /\.\d{0,3}$/i
            return time.replace(reg, '').replace('T', ' ').split('.')[0]
        } else {
            return ''
        }
    },

    /**
     * [timeToString 将时间戳转换为yyyy.mm.dd hh:mm格式]
     * @param  {[type]} time [description]
     * @return {[type]}      [description]
     */
    timeToString: (time) => {
        if (time) {
            const date = new Date(time)
            const year = date.getFullYear()
            const month = stringToFixed(date.getMonth() + 1)
            const day = stringToFixed(date.getDate())
            const hour = stringToFixed(date.getHours())
            const minute = stringToFixed(date.getMinutes())
            return year + '-' + month + '-' + day + ' ' + hour + ':' + minute
        } else {
            return ''
        }
    },
    // 是否为空
    isEmpty: (str) => {
        if (str && str != '' && str != null  && str != undefined) {
            return false
        }
        else {
            return true
        }
    },
    //手机号验证
    checkMobile: (number) => {
        var reg = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/
        if (reg.test(number)) {
            return true
        }
        else {
            return false
        }
    }
}

/**
 * [提示信息]
**/
Vue.prototype.util.msg = {
    loading: (content = '') => {
        actions.showHUD(store,{ type: 'loading', content: content })
    },
    success: (content = '') => {
        actions.showHUD(store,{ type: 'success', content: content })
    },
    error: (content = '') => {
        actions.showHUD(store,{ type: 'error', content: content })
    },
    close: () => {
        actions.hideHUD(store)
    }
}
