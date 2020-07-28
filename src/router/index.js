//官方元件
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// const routers = [ %%
const routes = [
    {
        path: '*',
        redirect:'/'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/back/login')
    },
    //前台
    {
        path: '/',
        // name: 'home',
        component:() => import('../views/front/home.vue'),
        children:[
            {
                path:'',
                name:'home',//-[]首頁改index
                // component:() => import('../views/front/index.vue')
                component:() => import('../views/front/products.vue')
            },
            {
                path: 'orderform',
                component: () => import('../views/front/orderForm1.vue')
                
            }
        ]
    },
    // 後台
    {
        path:'/admin',
        name:'Dashboard',
        component:() => import('../views/back/dashboard.vue'),
        redirect:'/admin/products',
        // meta:{ requireAuth: true },//##有redirect沒用
        children:[
            {
                path:'products',
                name:'dashProducts',
                component:() => import('../views/back/dashProducts.vue'),
                meta:{ requireAuth:true}
            }
        ]
    }
]


const router = new VueRouter({
    base: process.env.BASE_URL,//@@忘記是什麼變數
    routes
})

export default router;