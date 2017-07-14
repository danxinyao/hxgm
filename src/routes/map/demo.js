const Demo = resolve => require(['views/demo/demo.vue'], resolve)

export default [
	{
		path: '/demo',
		name: 'demo',
		component: Demo,
		meta: {
			title: 'demo'
		}
	}
]