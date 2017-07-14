import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import AppCom from './components'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import routes from './routes'
import store from './vuex'
import {sync} from 'vuex-router-sync'
import cookie from 'js-cookie'
import '!style!css!less!./assets/css/normalize.css' // normalize重置浏览器样式
import '!style!css!less!./assets/font/iconfont.css'   // 引入字体样式
import '!style!css!less!./assets/css/theme/theme.less' // 加载主题样式
import '!style!css!less!./assets/css/common.less' // 引入公共样式

import './static/flexible'
import './util/common'

Vue.use(VueRouter)
Vue.use(AppCom)
Vue.use(VueAwesomeSwiper)

const router = new VueRouter ({
	mode: 'hash',
	routes: [
		...routes,
	]
})

sync(store,router)

/**
* [路由监控-没有登录的情况下跳转到登录页面]
* @param  {[type]} (to,from,next [description]
* @return {[type]}               [description]
*/
router.beforeEach((to, from, next) => {
    if (to.path == '/') {
        next('/home')
    }
    else {
        next()
    }
})

new Vue({
	store,
	router,
	el: "#app",
	render: h => h(App)
})
