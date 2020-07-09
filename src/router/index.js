//官方元件
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// const routers = [ %%
const routes = [
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
            }
        ]
    },
    // 後台
    {
        path:'/admin',
        component:() => import('../views/back/dashboard.vue'),
        name:'Dashboard',
        redirect:'/admin/products',
        children:[
            {
                path:'products',
                name:'dashProducts',
                component:() => import('../views/back/dashProducts.vue')
            }
        ]
    }
]


const router = new VueRouter({
    base: process.env.BASE_URL,//@@忘記是什麼變數
    routes
})

export default router;