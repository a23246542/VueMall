<template>
    <div class="table-responsive">
    <!-- <table class="table mt-4 bg-light" v-if="orders.length"> -->
    <table class="table mt-4 bg-light" v-if="false">
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th width="120">Email</th>
          <th>購買項目</th>
          <th width="100">應付金額</th>
          <th width="100">付款</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in orders"
          :key="item.id"
          :class="{ 'text-secondary': !item.is_paid }"
        >
          <td>{{ item.create_at | date }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total | currency }}</td>
          <td>
            <strong v-if="item.is_paid" class="text-success">已付款</strong>
            <span v-else class="text-muted">未付款</span>
          </td>
        </tr>
      </tbody>
    </table>
    <!--分頁-->
    <Pagination :pages="pagination" @change-page="getOrders" />
  </div>
</template>
<script>
import Pagination from '@/components/BasePagination';
export default {
    components:{
        Pagination
    },
    data(){
        return{
            orders:[],
            pagination:{}
        }
    },
    created() {
        this.getOrders();
    },
    methods:{
        getOrders(){
            this.$store.commit('LOADING',true);
            const api = "ec/orders";
            this.$instanceAdmin.get(api)
            .then(res=>{
                this.orders = res.data.data;
                this.pagination = res.data.meta.pagination;
                this.$store.commit('LOADING',false);
            })
        },
        getSingleOrder(){

        },
        updateOrder(){

        },
        setOrderPaid(){
            
        }
    }
}
</script>

<style>

</style>