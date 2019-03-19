import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//使用路由配置

//使用webpack路由懒加载 import()
const home = resolve => {
	import('@/pages/home').then(module => {
		resolve(module);
	});
};
const article = resolve => {
	import('@/pages/article').then(module => {
		resolve(module);
	});
};
const category = resolve => {
	import('@/pages/category').then(module => {
		resolve(module);
	});
};
const discover = resolve => {
	import('@/pages/discover').then(module => {
		resolve(module);
	});
};
const productdetail = resolve => {
	import('@/pages/product/productdetail').then(module => {
		resolve(module);
	});
};
const productcart = resolve => {
	import('@/pages/product/productcart').then(module => {
		resolve(module);
	});
};

const register = resolve => {
	import('@/pages/user/register').then(module => {
		resolve(module);
	});
};
const login = resolve => {
	import('@/pages/user/login').then(module => {
		resolve(module);
	});
};
const my = resolve => {
	import('@/pages/user/my').then(module => {
		resolve(module);
	});
};



export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			redirect: '/home'
		},
		{
			path: '/home',
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
			path: '/discover',
			name: 'discover',
			component: discover
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
			path: '/productcart',
			name: 'productcart',
			component: productcart
		}
	]
});
