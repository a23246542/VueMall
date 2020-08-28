<template>
    <div>
        <div class="container mb-5">
            <div class="row">
                <div class="col-lg-8">
                    <CustomerForm/>
                </div>
                <div class="col-lg-4 d-none d-lg-block">
                    <div class="card mb-4 mt-5">
                        <div class="card-header">購物清單</div>
                        <div class="card-body">
                            <tr v-for="(item,index) in carts" :key="item.product.id" class="d-flex"
                            :class="{'mb-2':index!==carts.length-1}"
                            >
                                <!-- <td class="flex-1 align-middle">@@div垂直置中無用 -->
                                <td class="flex-1 d-flex align-items-center">
                                    <div class="bg-cover w-100"
                                    :style="{
                                        backgroundImage:`url(${item.product.imageUrl[0]})`,
                                        minWidth:'80px',
                                        height:'80px',
                                    }"
                                    ></div>
                                </td>
                                <!-- <td class="flex-1 align-middle text-right">x{{ item.quantity }}</td> -->
                                <!-- <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td> -->
                                <td class="flex-1 p-2">
                                    <div>
                                        {{ item.product.title }}
                                    </div>
                                    <small>
                                        {{item.quantity}} {{item.product.unit}}
                                    </small>
                                    <!-- ## -->
                                    <div>
                                        {{ (item.quantity*item.product.price) | dollars }}
                                    </div>
                                </td>
                            </tr>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">訂單摘要</div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <span>小計</span>
                                <span>{{cartTotal}}</span>
                            </div>
                            <div class="d-flex justify-content-between">
                                <span>運費</span>
                                <span>0</span>
                            </div>
                            <div class="d-flex justify-content-between" style="font-size:18px">
                                <span>總計</span>
                                <span>{{cartTotal}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CustomerForm from '@/components/CustomerForm';
import { mapGetters, mapState } from 'vuex';

export default {
  components: {
    CustomerForm,
  },
  data() {
    return {};
  },
  computed: {
    // ...mapState(['cart.carts'])
    ...mapState({
      carts: (state) => state.Cart.cart.carts,
      pagination: (state) => state.Cart.cart.pagination,
    }),
    ...mapGetters(['cartTotal']),
  },
  methods: {

  },
  created() {
    this.$store.dispatch('getCart');// %%
  },
};
</script>
<style lang="scss" scoped>

</style>
