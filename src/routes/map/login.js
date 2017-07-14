const Login = resolve => require(['views/login/login/login.vue'], resolve) //登录
const Queryfact = resolve => require(['views/login/queryfact/queryfact.vue'], resolve) //正品查询
const Factdetail = resolve => require(['views/login/factdetail/factdetail.vue'], resolve) //红包列表

export default [
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta: {
			title: '登录'
		}
	},
	{
		path: '/queryfact',
		name: 'queryfact',
		component: Queryfact,
		meta: {
			title: '查询正伪'
		}
	},
	{
		path: '/factdetail',
		name: 'factdetail',
		component: Factdetail,
		meta: {
			title: '红包列表'
		}
	},

]