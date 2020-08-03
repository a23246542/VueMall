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
    //前台
    {
        path: '/',
        // name: 'home',
        component:() => import('../views/front/home.vue'),
        children:[
            {
                path:'',
                name:'home',//-[]首頁改index
                component:() => import('../views/front/index.vue')
                // component:() => import('../views/front/products.vue')
            },
            {
                path: 'products',
                name: 'products',
                component:() => import('../views/front/products'),
                children:[
                    {
                        path: ':id',
                        name: 'singleProduct',
                        component:() => import('../views/front/product')

                    }
                ]
            },
            {
                path: 'aboutUs',
                name: '關於我們',
                component:() => import('../views/front/aboutUs'),
            },
            {
                path: 'order_list',
                name: '我的訂單',
                component:() => import('../views/front/orderList')
            },
            {
                path: 'coupon',
                name: '優惠券',
                component:() => import('../views/front/coupon')
            },
            // {
            //     path: 'orderform',
            //     component: () => import('../views/front/orderForm1.vue')
                
            // },
        ]
    },
    {
        
        path: '/shopping',//專注購物頁
        name: '購物車',
        component: () => import('../views/front/shopping'),
        redirect:'/shopping/order_preview',
        children: [
            {
                path:'order_preview',
                name:'購物明細',//+付款方式
                component:() => import('../views/front/orderPreview'),
                // -[]cart
                // -[]CustomerForm
                // components:{
                //     Cart: () => import('../components/Cart'),
                //     CustomerForm: () => import('../views/front/orderForm1')
                // }
                // children:[
                //     {
                //         path: '1111',
                //         name: '1111',
                //         components:{
                //             Cart: () => import('../components/Cart'),
                //             CustomerForm: () => import('../views/front/orderForm1')
                //         }
                //     }
                // ]
            },
            {
                path:'order_confirm',
                name:'最後確認',
                component:() => import('../views/front/orderConfirm')
                // -[]Cart
                // -[]CustomerInfo
            },
            {
                path:'order_success',
                name:'訂單完成',
                component:() => import('../views/front/orderSuccess')
            },
            // {
            //     path:'payment/:orderId',
            //     name:'付款頁',
            //     component:() => import('../views/'),
            // },
            // {
            //     path:'payment_success/:orderId',
            //     name:'付款完成',
            //     component:() => import('../views/front/')
            // }
        ]
        
    },
    // 後台
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/back/login')
    },
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
            },
            {
                path:'orders',
                name:'訂單列表',
                component:() => import('../views/back/dashOrders')
            },
            {
                path:'coupons',
                name:'優惠券列表',
                component:() => import('../views/back/dashCoupons')
            },
            {
                path:'images',
                name:'圖片儲存列表',
                component:() => import('../views/back/dashImages')
            }
        ]
    }
]


const router = new VueRouter({
    base: process.env.BASE_URL,//@@忘記是什麼變數
    routes
})

export default router;