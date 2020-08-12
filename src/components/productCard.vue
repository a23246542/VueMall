<template>
    <div>
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
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: {
        item:'Object'
    },
    // computed:mapState({
    //     products:'products',
    //     pagination:'pagination',
    //     categories:'categories'
    // })
}
</script>

<style>

</style>