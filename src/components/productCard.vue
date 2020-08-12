<template>
    <!-- <div> -->
        <div class="col-4 mb-5">
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
    <!-- </div> -->
</template>

<script>
import { mapState } from 'vuex'
export default {

    props: {
        // item:Object,//@@奇怪的right-hand-side報錯後來又正常
        // item:{},
        item:{
            type:Object,
            required:true
        }
    },
    // computed:mapState({
    //     products:'products',
    //     pagination:'pagination',
    //     categories:'categories'
    // })
    methods: {
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
    }
}
</script>

<style>

</style>