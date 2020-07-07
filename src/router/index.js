//官方元件
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routers = [
    {
        path: '/',
        // name: 'default',
        component:() => import('../views/front/home.vue'),
        // redirect:'/index',
        children:[
            {
                path:'',
                // name:'index',
                component:() => import('../views/front/index.vue')
            }
        ]
    },
    {
        path:'/admin',
        component:() => import('../views/back/dashboard.vue'),
        children:[
            {
                path:'',
                name:'Dashboard',
                component:() => import('../views/back/dashProducts.vue')
            }
        ]
    }
]


const router = new VueRouter({
    base: process.env.BASE_URL,//@@忘記是什麼變數
    routers
})

export default router;