const Home = resolve => require(['views/home/index/index.vue'], resolve)
const Product = resolve => require(['views/home/product/product.vue'], resolve)
const Wechat = resolve => require(['views/home/wechat/wechat.vue'], resolve)

export default [
	{
		path: '/home',
		name: 'home',
		component: Home,
		meta: {
			title: 'home'
		}
	},
	{
		path: '/product',
		name: 'product',
		component: Product,
		meta: {
			title: '商品介绍'
		}
	},
	{
		path: '/wechat',
		name: 'wechat',
		component: Wechat,
		meta: {
			title: '查询真伪'
		}
	},

]