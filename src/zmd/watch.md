### 忘記非同步行為
 * products.vue想說this.$store.dispatch('getCart');//%%
    為何寫在then之外發不出去，原來有發出去，只是還沒回傳

### 子路由是跟router-view有關 不是只跟路徑有關
    * 寫錯成子路由
    * children:[
                //     {
                //         path: ':id',
                //         name: 'singleProduct',
                //         component:() => import('../views/front/productSingle.vue')

                //     }
                // ]

### v-if可以拿來當等data回傳再渲染!!!不用預先寫預設值
    *  <!-- ## !因沒設data會報錯 -->
    <table class="table mt-4 bg-light" v-if="orders.length">