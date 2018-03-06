import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import article from '@/components/article'
import headerbar from '@/components/header'
import category from '@/pages/category'

import productdetail from '@/pages/product/productdetail'
import my from '@/pages/user/my'
import login from '@/pages/user/login'
import register from '@/pages/user/register'
import discover from '@/pages/discover'
import productcart from '@/pages/productcart'





//@  =>  ../
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
    	path:'/article',
    	name:'article',
    	component: article
    },{
    	path:'/category',
    	name:'category',
    	component: category
    }
    ,{
        	path:'/product/productdetail',
        	name:'productdetail',
        	component: productdetail
        }
        ,{
            	path:'/user/my',
            	name:'my',
            	component: my
            }
            ,{
                	path:'/user/login',
                	name:'login',
                	component: login
                }
                ,{
                    	path:'/user/register',
                    	name:'register',
                    	component: register
                    }
                    ,{
                        	path:'/discover',
                        	name:'discover',
                        	component: discover
                        }
                        ,{
                            	path:'/productcart',
                            	name:'productcart',
                            	component: productcart
                            }
  ]
})

