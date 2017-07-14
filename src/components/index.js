// 系统提示框
import hud from './hud/hud.vue'
// 导航
import navbar from './navbar/navbar.vue'

const install = Vue => {
	Vue.component(hud.name, hud) // 系统提示信息
    Vue.component(navbar.name, navbar) // 导航
}

export default install