<template>
    <div id="products">
        <div class="container pt-5">
            <Alert></Alert>
            <!-- <div class="row flex-row-reverse"> -->
            <div class="row">
                <div class="col-2">
                    <!-- <table class="table table-sm" v-if="cart.carts.length"> -->
                    <h3>產品分類</h3>
                    <div class="list-group">
                        <!-- <a href="#" class="list-group-item list-group-item-action"
                        @click.prevent="searchText='all'"
                        > -->
                        <a href="#" class="list-group-item list-group-item-action"
                        @click.prevent="setSearchText('all')"
                        >
                            全部
                        </a>
                        <!-- <a href="#" class="list-group-item list-group-item-action"
                        v-for="item in categories" :key="item"
                        @click.prevent="searchText=item"
                        > -->
                        <a href="#" class="list-group-item list-group-item-action"
                        v-for="item in categories" :key="item"
                        @click.prevent="setSearchText(item)"
                        >
                            {{item}}
                        </a>
                    </div>
                </div>
                
                <!-- <div class="col-10 mx-auto"> -->
                <div class="col-10">
                    <div class="row">
                        <div class="col-4 mb-5" v-for="(item) in filterProducts" :key="item.id">
                            <div class="card">
                                <img :src="item.imageUrl[0]" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">
                                        {{item.title}}
                                        <span class="badge badgeColor">{{item.category}}</span>
                                    </h5>
                                    <p class="card-text text-truncate lineCamp--4 text-wrap">
                                        {{item.content}}
                                    </p>
                                    <div class="d-flex">
                                        <div class="form-inline">
                                            <!-- ###寫入只能用v-model了 -->
                                            
                                            <!-- <select class="form-control"
                                            v-model="product.num"
                                            >
                                                <option v-for="i in 5" :key="'num'+i"
                                                :value="i"
                                                >{{i}}</option>
                                            </select> -->
                                            <!-- ##v-model沒有值的話 option預設不會顯示 雙向綁定變空白 -->
                                            <select class="form-control"
                                            v-model="item.num"
                                            >
                                                <option :value="1" selected >1</option>
                                                <option v-for="i in 5" :key="'num'+i"
                                                :value="i+1"
                                                >{{i+1}}</option>
                                            </select>
                                        </div>
                                        <div class="h3 ml-2">
                                            {{item.price}}
                                        </div>
                                        <a href="#" class="btn bg-green ml-auto"
                                        @click.prevent="addToCart(item,item.num)"
                                        >加入購物車</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 分頁 開始 -->
                    <pagination
                    :pages="pagination"
                    @change-page="getProducts"
                    />
                    <!-- 分頁 結束 -->
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import {instanceCus} from '../../api/https';
import CartModal from '@/components/CartModal';
import pagination from '@/components/BasePagination'
import Alert from '@/components/BaseAlertMessage';

export default {
    components:{
        CartModal,
        Alert,
        pagination
    },
    data() {
        return { 
            // product:{//點擊那個modal再出現
            //     num:1,//要雙向綁定預設值%%%
            // },
            products:[],
            pagination:{},
            categories:[],
            searchText:"all",
            // carts:[]//子組件購物車的
        }
    },
    computed:{
        filterProducts(){
                
                if (this.searchText === 'all'){
                    return this.products;
                }else {
                    return this.products.filter( (item) => {
                        // return item.category == this.searchText;
                        return item.category.toLowerCase()
                        .includes(this.searchText.toLowerCase());//%%includes判斷陣列或"字串"是否包含特定的元素，並以此來回傳 true 或 false
                    })
                }
        }
    },
    created() {
        this.getProducts();
    },
    methods:{
        getProducts(page=1,paged=25,orderBy="created_at",sort="desc"){
            this.$store.commit('LOADING',true);
            // const api =`ec/products/page=${page}`;%%
            const api =`ec/products?page=${page}&paged=${paged}&orderBy=${orderBy}&sort=${sort}`;
            instanceCus.get(api)
            .then((res) => {
                this.products = res.data.data;
                this.pagination = res.data.meta.pagination;
                this.getCategories();
                //###%% 可先暫時寫入api外的，幫助渲染
                this.products.forEach((item) => {
                    // item.num = 1;
                    this.$set(item,'num',1);
                })
                this.$store.commit('LOADING',false);
            })
        },
        getCategories(){
            const categories = new Set();
            this.products.forEach((item) => {
                // categories.push(item.category)//%%@@
                categories.add(item.category)
            })
            this.categories = Array.from(categories);
        },
        //接收資料 子傳父元件
        // getEmitCart(carts){
        //     this.carts = carts;
        // },
        addToCart(item,qty=1){
            this.$store.commit('LOADING',true);
            const api ="ec/shopping";
            const cartItem = {product:item.id,quantity:qty};
            
            this.$instanceCus.post(api,cartItem)
            .then((res) => {
                this.$store.commit('LOADING',false);
                this.$bus.$emit('message:push',`${item.title}已加入購物車`,'success')
                // this.$refs.cartModal.getCart();
                this.$store.dispatch('getCart');
            })
            // ###這邊判斷post patch缺點會跑兩次api
            .catch((err) => {
                this.$store.commit('LOADING',false);
                console.dir(err.response.data);
                if(err.response.data.errors[0]==="該商品已放入購物車當中。"){          
                    this.$bus.$emit('message:push',`${item.title}已存在購物車`)
                }
            })
            // this.$store.dispatch('addToCart',{productId,qty})
            // this.$store.dispatch('getCart');//%%
        },
        openSingleProduct(id) {
            this.$router.push(`/products/${id}`);
        },
        setSearchText(text){
            this.searchText = text;
            // console.log(text,this.searchText);

        }

    }
}
</script>

<style lang="scss">
    #products{
        background-color: #FFFCE5;
        font-family:'Microsoft JhengHei',-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

        .bg-green{
            background-color: #6BB82D !important;
            color: #fff;
        }
        .lineCamp--4{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            line-clamp:3;
            -webkit-line-clamp: 3;
        }
        .badgeColor{
            /* background-color: #F2A594; */
            background-color: #F29E38;
        }
    }
</style>