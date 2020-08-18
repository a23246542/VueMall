<template>
    <div class="table-responsive">
    <!-- ## !因沒設data會報錯 -->
    <table class="table mt-4" v-if="orders.length">
    <!-- <table class="table mt-4 bg-light" v-if="false"> -->
    <!-- <table class="table mt-4 bg-light"> -->
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th>購買項目</th>
          <th width="100">應付金額</th>
          <th width="100">付款方式</th>
          <th width="100">付款</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in orders"
          :key="item.id"
          :class="{ 'text-secondary': !item.is_paid }"
        >
          <!-- <td>{{ item.create_at | date }}</td> -->
          <td>{{item.created.timestamp}}</td>
          <!-- <td><span v-text="item.user.email" v-if="item.user"></span></td> -->
        
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.quantity }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">
              {{ item.amount | dollars }}
              (折扣{{item.coupon.percent+'%'}})
        </td>
          <td>{{item.payment}}</td>
          <td>
            <strong v-if="item.paid" class="text-success">已付款</strong>
            <span v-else class="text-muted">未付款</span>
          </td>
        </tr>
      </tbody>
    </table>
    <!--分頁開始-->
    <Pagination :pages="pagination" @change-page="getOrders" />
    <!-- 分頁結束 -->
    <!-- 談窗開始 -->
    <DashModal id="dashOrderModal"
        :title="modalTitle"
        :modalUse="modalUse"
        @submit="updateCoupon"
        @delete="removeCoupon"
    >
        <template v-slot:update>
            
        </template>
    </DashModal>
    <!-- 談窗結束 -->
  </div>
</template>
<script>
import Pagination from '@/components/BasePagination';
import DashModal from '@/components/DashOtherModal';
export default {
    components:{
        Pagination,
        DashModal
    },
    data(){
        return{
            orders:[],
            pagination:{},
            tempOrder:{},
            orderId:''
        }
    },
    created() {
        this.getOrders();
    },
    methods:{
        getOrders(page=1){
            this.$store.commit('LOADING',true);
            // const api = `ec/orders/?page=${page}`;@@mock會壞
            const api = `ec/orders`;
            this.$instanceAdmin.get(api)
            .then(res=>{
                this.orders = res.data.data;
                this.pagination = res.data.meta.pagination;
                this.$store.commit('LOADING',false);
            })
        },
        getSingleOrder(){
            this.$store.commit('LOADING',true);
            const api = `ec/orders/${this.orderId}`;
            this.$instanceAdmin.get(api)
            .then(res=>{
                this.tempOrder = res.data.data;
                this.$store.commit('LOADING',false);
            })
        },
        updateOrder(){
            this.$store.commit('LOADING',true);
            const api = `ec/orders/${this.orderId}`;
            this.$instanceAdmin.patch(api,this.tempOrder)
            .then(res=>{
                this.getOrders();
            })
        },
        setOrderPaid(tempOrderPaid,tempOrderId){
            this.$store.commit('LOADING',true);
            let api = `ec/orders/${tempOrderId}/paid`;
            if(!tempOrderPaid){
                api = `ec/orders/${tempOrderId}/unpaid`
            }
            this.$instanceAdmin.patch(api)
            .then(res=>{
                this.getOrders();
            })
        }
    }
}
</script>

<style>

</style>