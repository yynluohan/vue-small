import homeRouter from './views/index/home.vue'

import index from './views/index/index.vue'

export default [
	{
		path: '/index',
		name: 'index',
		component: index,
	},
	{
		path: '*',
		redirect: {name: 'index'},
	}
]
