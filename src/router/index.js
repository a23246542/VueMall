//官方元件
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// const routers = [ %%
const routes = [
    // {
    //     path: 'login',@@會失敗 不知道為什麼 難道說這樣不行
    //     component: () => import('../views/front/login')

    // },
    {
        path: '*',
        redirect:'/'
    },
    //前台
    {
        path: '/',
        // name: 'home',
        component:() => import('../views/front/home.vue'),
        children:[
            {
                path:'',
                name:'home ',
                component:() => import('../views/front/index.vue')
            },
            {
                path: 'login',
                name:'login',
                component: () => import('../views/front/login')
            },
        ]
    },
    // 後台
    {
        path:'/admin',
        component:() => import('../views/back/dashboard.vue'),
        name:'Dashboard',
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