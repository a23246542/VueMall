<template>
    <!-- <div> -->
        <div class="col-4 mb-5">
            <div class="card">
                <img :src="thisProduct.imageUrl[0]" class="card-img-top" alt="..."
                    @click="openSingleProudct(thisProduct.id)"
                >
                <div class="card-body">
                    <h5 class="card-title font-weight-bold"
                        @click="openSingleProudct"
                    >
                        {{thisProduct.title}}
                        <span class="badge badgeColor">{{productTag}}</span>
                    </h5>
                    <p class="card-text text-truncate lineCamp--4 text-wrap">
                        {{thisProduct.content}}
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
                            v-model="thisProduct.num"
                            >
                                <option :value="1" selected >1</option>
                                <option v-for="i in 5" :key="'num'+i"
                                :value="i+1"
                                >{{i+1}}</option>
                            </select>
                        </div>
                        <div class="h3 ml-2">
                            {{thisProduct.price}}
                        </div>
                        <a href="#" class="btn bg-green ml-auto"
                        @click.prevent="addToCart(thisProduct,thisProduct.num)"
                        >加入購物車</a>
                    </div>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import { mapState } from 'vuex'
export default {

    props: {
        // item:Object,//@@奇怪的right-hand-side報錯後來又正常
        // item:{},
        thisProduct:{
            type:Object,
            required:true
        }
    },
    computed:{
        carts(){
            return this.$store.state.Cart.cart.carts;
        },
        productTag(){//如果有子分類，回傳子分類名稱
            if(this.thisProduct.category.includes(">")){
              return this.thisProduct.category.split(">")[1]
            }else{
              return this.thisProduct.category;
            }
        }
    },
    methods: {
        addToCart(item,qty=1){
            this.$store.commit('LOADING',true);
            const api ="ec/shopping";
            const cartItem = {product:item.id,quantity:qty};
            
            // const ifInCart = this.carts.some((cartItem)=>{
            //         return cartItem.product.id === item.id;
            // })
            
            //會是undefine 或{...}
            const hasInCartItem = this.carts.find((cartItem)=>{
                    return cartItem.product.id === item.id;
            })
            // console.log(hasInCartItem,!hasInCartItem);
            
            if(!hasInCartItem){
                this.$instanceCus.post(api,cartItem)
                .then((res) => {
                    this.$store.commit('LOADING',false);
                    this.$bus.$emit('message:push',`${item.title}已加入購物車`,'success')
                    // this.$refs.cartModal.getCart();
                    this.$store.dispatch('getCart');
                })
            }else{
                // console.log('已經有了');
                // console.log(hasInCartItem);
                const data = {
                    productId:hasInCartItem.product.id,
                    newQty:hasInCartItem.quantity + qty
                }
                // console.dir(data);
                this.$store.dispatch('editCart',data)
                .then(()=>{
                    this.$bus.$emit('message:push',`${item.title}已加入購物車`,'success')
                });
            }

            // this.$instanceCus.post(api,cartItem)
            // .then((res) => {
            //     this.$store.commit('LOADING',false);
            //     this.$bus.$emit('message:push',`${item.title}已加入購物車`,'success')
            //     // this.$refs.cartModal.getCart();
            //     this.$store.dispatch('getCart');
            // })
            // // ###這邊判斷post patch缺點會跑兩次api
            // .catch((err) => {
            //     this.$store.commit('LOADING',false);
            //     console.dir(err.response.data);
            //     if(err.response.data.errors[0]==="該商品已放入購物車當中。"){          
            //         this.$bus.$emit('message:push',`${item.title}已存在購物車`)
            //     }
            // })
            // this.$store.dispatch('addToCart',{productId,qty})
            // this.$store.dispatch('getCart');//%%
        },
        openSingleProudct(id){
            // console.log(id);
            this.$router.push({
                path:`/products/${id}`
            })
        }
    }
}
</script>

<style>

</style>