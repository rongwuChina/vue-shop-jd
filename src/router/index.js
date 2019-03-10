import Vue from 'vue'
import Router from 'vue-router'
import article from '@/components/article'
import category from '@/pages/category'

import productdetail from '@/pages/product/productdetail'
import my from '@/pages/user/my'
import login from '@/pages/user/login'
import register from '@/pages/user/register'
import discover from '@/pages/discover'
import productcart from '@/pages/productcart'

Vue.use(Router)
//使用路由配置

const home = resolve => {
	import('@/components/home').then(module => {
		resolve(module);
	});
};
export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: home
		}, {
			path: '/article',
			name: 'article',
			component: article
		}, {
			path: '/category',
			name: 'category',
			component: category
		}, {
			path: '/product/productdetail',
			name: 'productdetail',
			component: productdetail
		}, {
			path: '/user/:id',
			component: my,
			children: [{
				path: 'register',
				component: register
			}, {
				path: 'login',
				component: login
			}]
		}, {
			path: '/discover',
			name: 'discover',
			component: discover
		}, {
			path: '/productcart',
			name: 'productcart',
			component: productcart
		}
	]
});
