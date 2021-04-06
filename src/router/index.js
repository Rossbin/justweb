import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import FreeCourse from '../views/FreeCourse.vue'
import ActualCourse from '../views/ActualCourse.vue'
import FreeCourseDetail from '../views/FreeCourseDetail.vue'
import Search from '../views/Search.vue'
import PaySuccess from '../views/PaySuccess.vue'
import Play from '../views/Play.vue'


import Account from '@/views/Account.vue'
import MyOrder from '../views/order/MyOrder.vue'

import MyDetail from '@/views/order/MyDetail.vue'
import ShopCart from '@/views/order/ShopCart'



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/base-course',
        name: 'FreeCourse',
        component: FreeCourse
    }, {
        path: '/about-us',
        name: 'about-us',
        component: AboutUs
    }, {
        path: '/actual-course',
        name: 'ActualCourse',
        component: ActualCourse
    },{
        path: '/base-course/detail/:pk',
        name: 'FreeCourseDetail',
        component: FreeCourseDetail
    },{
        path: '/search',
        name: 'Search',
        component: Search
    },{
        path: '/pay/success',
        name: 'PaySuccess',
        component: PaySuccess
    },
    {
        path: '/plays/:pk',
        name: 'Play',
        component: Play
    },

    {
        path: '/myorder',
        name: 'my_order',
        component: MyOrder
    },
    {
        path: '/order',
        
        component: Account,

        // 设置二级路由
        children: [
            {
                path: 'myorder',
                component: MyOrder
            },

            {
                path: 'mydetail',
                component: MyDetail
            },
            {
                path: 'shopcart',
                component: ShopCart
            },

            // 默认二级路由
            {
                path: '',
                redirect: '/order/myorder'
            }


        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            console.log(savePosition);
            return savedPosition;
        }else{
            const position = {};
            position.selector = to.hash;
            position.behavior = 'smooth';
            if(to.hash){
                position.offset = {y:110}
            }
            return position;
        }
    }
})

export default router
