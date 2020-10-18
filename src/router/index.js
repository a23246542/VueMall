// 官方元件
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// const routers = [ %%
const routes = [
  {
    path: '*',
    redirect: '/',
  },
  // 前台
  {
    path: '/',
    // name: 'home',
    component: () => import('@/views/front/Home.vue'),
    children: [
      {
        path: '',
        name: 'home', // -[]首頁改index
        component: () => import('@/views/front/HomePage.vue'),
        // component:() => import('../views/front/products.vue')
      },
      {
        path: 'products',
        // name: 'products',
        component: () => import('@/views/front/Products'),
        children: [
          {
            path: '',
            name: 'products',
            component: () => import('@/views/front/ProductList'),
            // children: [
            //   {
            //   path: ':productId',
            //   name: 'productSingle',
            //   component: () => import('../views/front/productSingle'),
            //   },
            // ]
          },
          {
            path: ':productId',
            name: 'productSingle',
            component: () => import('@/views/front/ProductSingle'),
            // component: () => import('../views/front/productSingle/index'),
          },

        ],
      },
      // {
      //   path: 'products/:productId',
      //   name: 'productSingle',
      //   component: () => import('../views/front/productSingle'),
      // },
      {
        path: 'about',
        name: '關於我們',
        component: () => import('@/views/front/AboutUs'),
      },
      {
        path: 'order_list',
        name: 'orderList',
        component: () => import('@/views/front/CusOrders'),
      },
      {
        path: 'coupon',
        name: '優惠券',
        component: () => import('@/views/front/CusCoupon'),
      },
    ],
  },
  {

    path: '/shopping', // 專注購物頁
    name: '購物車',
    component: () => import('@/views/front/Shopping'),
    redirect: '/shopping/order_preview',
    children: [
      {
        path: 'order_preview',
        name: '購物清單',
        component: () => import('@/views/front/OrderPreview'),
        // -[]cart
        // -[]CustomerForm
        // components:{
        //     Cart: () => import('@/components/Cart'),
        //     CustomerForm: () => import('@/views/front/orderForm1')
        // }
      },
      {
        path: 'order_info',
        name: '收件資訊',
        component: () => import('@/views/front/OrderInfo'),
      },
      {
        path: 'order_confirm',
        name: '最後確認',
        component: () => import('@/views/front/OrderConfirm'),
        // -[]Cart購物明細
        // -[]orderInfo寄送資訊與付款方式
      },
      {
        path: 'order_success', // query ?orderId:orderId
        name: '訂單完成',
        component: () => import('@/views/front/OrderSuccess'),
      },
      // {
      //   // path:'payment/:orderId',
      //   path: 'payment',
      //   name: '付款頁',
      //   component: () => import('@/views/front/payment.vue'),
      // },
      // {
      //     path:'pay_success/:orderId',
      //     name:'付款完成',
      //     component:() => import('@/views/front/')
      // }
    ],

  },
  // 後台
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/back/Login'),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('@/views/back/Dashboard.vue'),
    redirect: '/admin/products', // ##前台右鍵後台開新分頁會直接略過router.beforeEach
    // meta:{ requireAuth: true },//##有redirect沒用
    children: [
      {
        path: 'products',
        name: 'dashProducts',
        component: () => import('@/views/back/DashProducts.vue'),
        meta: { requireAuth: true },
      },
      {
        path: 'orders',
        name: '訂單列表',
        component: () => import('@/views/back/DashOrders'),
        meta: { requireAuth: true },
      },
      {
        path: 'coupons',
        name: '優惠券列表',
        component: () => import('@/views/back/DashCoupons'),
        meta: { requireAuth: true },
      },
      {
        path: 'images',
        name: '圖片儲存列表',
        component: () => import('@/views/back/DashImages'),
        meta: { requireAuth: true },
      },
    ],
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL, // @@忘記是什麼變數
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };// no-else-return
  },
});

export default router;
