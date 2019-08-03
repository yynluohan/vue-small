
const Index = () => import('./views/index/Index.vue');
const Article = () => import('./views/article/Article.vue');
const Cart = () => import('./views/cart/Cart.vue');
const Person = () => import('./views/person/Person.vue');
const ProductDetail = () => import('./views/product/ProductDetail.vue');

export default [
	{
		path: '/index',
		name: 'index',
		component: Index
	},
	{
		path: '/article',
		name: 'article',
		component: Article
	},
	{
		path: '/cart',
		name: 'cart',
		component: Cart
	},
	{
		path: '/person',
		name: 'person',
		component: Person
	},
	{
		path: '/productDetail',
		name: 'productDetail',
		component: ProductDetail
	},
	{
		path: '*',
		redirect: {name: 'index'},
	}
]
