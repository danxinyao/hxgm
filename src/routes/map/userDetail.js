const userDetail = resolve => require(['views/userDetail/userDetail.vue'], resolve)

export default [
	{
		path: '/userDetail',
		name: 'userDetail',
		component: userDetail,
		meta: {
			title: '个人中心'
		}
	}
]