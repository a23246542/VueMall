<template>
    <div class="table-responsive">
    <!-- ## !因沒設data會報錯 -->
        <table class="table mt-4" v-if="orders.length">
        <!-- <table class="table mt-4 bg-light" v-if="false"> -->
        <!-- <table class="table mt-4 bg-light"> -->
        <thead>
            <tr>
            <th width="120">訂單時間</th>
            <th width="120">訂單編號</th>
            <th>產品品項</th>
            <th width="100">應付金額</th>
            <th width="100">付款方式</th>
            <th width="100">付款狀態</th>
            <th width="120">編輯</th>
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
            <td>{{item.id.slice(-16)}}</td>
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
            <td>
                <!-- <div class="btn-group"> -->
                    <button class="btn btn-outline-primary btn-sm" @click="openEditModal(item)">
                        編輯
                    </button>
                    <!-- <button class="btn btn-outline-danger btn-sm" @click="openModal('delete',item)">
                        刪除
                    </button> -->
                <!-- </div> -->
            </td>
            </tr>
        </tbody>
        </table>
    <!--分頁開始-->
        <Pagination :pages="pagination" @change-page="getOrders" />
    <!-- 分頁結束 -->
    <!-- 談窗開始 -->
    <!-- <DashModal id="dashOrderModal" v-if="tempOrder" -->
        <DashModal id="dashOrderModal" v-if="tempOrder.id"
            :title="modalTitle"
            :modalUse="modalUse"
            @submit="updateOrder"
        >
            <template v-slot:update>
                <div class="row">
                    <!-- 購買時間 購買項目 應付金額 付款方式付款沒
                    user msg 折扣 -->
                    <div class="col-md-7">
                        <div>
                            <span>訂單時間</span><span>{{tempOrder.created.timestamp}}</span>
                        </div>
                        <div class="overflow-y-auto"
                        style="max-height:280px"
                        >
                            <!-- <div class="w-100 p-3"> -->
                                <ul class="list-unstyled">
                                    <li
                                    v-for="(prdData,i) in tempOrder.products" :key="i+prdData.product.title"
                                    >
                                        {{prdData.product.title}} 數量：{{prdData.quantity}}
                                    </li>
                                </ul>
                            <!-- </div> -->
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div>顧客名：{{tempOrder.user.name}}</div>
                        <div>應付款項：{{tempOrder.amount}}</div>
                        <div v-if="tempOrder.coupon.code">折扣：{{tempOrder.coupon.percent+'%'}} 活動：{{tempOrder.coupon.title}}</div>
                        <div v-else >折扣：無</div>
                        <span>付款方式：{{tempOrder.payment}}</span>
                        <!-- @@間隔 -->
                        <div>付款：
                            <span>
                                <input type="checkbox" class="checkbox"
                                    v-model="tempOrder.paid"
                                > 
                            </span>
                            <span v-if="tempOrder.paid" class="text-success">已付款</span>
                            <span v-else class="text-muted">未付款</span>
                        </div>
                        <div>付款：
                            <div class="custom-control custom-checkbox d-inline-block">
                                <!-- <span>付款：</span> %%-->
                                <input type="checkbox" class="custom-control-input" id="paidCheck"
                                v-model="tempOrder.paid"
                                >
                                <label v-if="tempOrder.paid" class="custom-control-label text-success" for="paidCheck">已付款</label>
                                <label v-else class="custom-control-label text-danger" for="paidCheck">未付款</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group form-row">
                            <label for="name" class="col-sm-3 col-form-label">購買人</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="name"
                                v-model="tempOrder.user.name"
                                >
                            </div>
                        </div>
                        <div class="form-group form-row">
                            <label for="email" class="col-sm-3 col-form-label">信箱</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="email"
                                v-model="tempOrder.user.email"
                                >
                            </div>
                        </div>
                        <div class="form-group form-row">
                            <label for="tel" class="col-sm-3 col-form-label">電話</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="tel"
                                v-model="tempOrder.user.tel"
                                >
                            </div>
                        </div>
                        <div class="form-group form-row">
                            <label for="address" class="col-sm-3 col-form-label">地址</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="address"
                                v-model="tempOrder.user.address"
                                >
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <textarea name="" id="" cols="30" rows="8"
                        class="w-100"
                        style=""
                        v-model="tempOrder.message"
                        ></textarea>
                    </div>
                </div>
            </template>
        </DashModal>
    <!-- 談窗結束 -->
    </div>
</template>
<script>
import Pagination from '@/components/BasePagination';
import DashModal from '@/components/admin/DashOtherModal';
export default {
    components:{
        Pagination,
        DashModal
    },
    data(){
        return{
            orders:[],
            pagination:{},
            orderId:'',
            tempOrder:{},
            modalTitle:'編輯訂單',
            modalUse:'update',

        }
    },
    created() {
        this.getOrders();
    },
    methods:{
        openEditModal(orderItem){
            this.orderId = orderItem.id;
            this.getSingleOrder()
            .then(()=>{
                $("#dashOrderModal").modal("show");
                console.dir($("#dashOrderModal"));
                
            });
            // $("#dashOrderModal").modal("show");

        },
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
        async getSingleOrder(){
            this.$store.commit('LOADING',true);
            // const api = `ec/orders/${this.orderId}`;
            const api = `ec/orders/id`;
            // this.$instanceAdmin.get(api)
            await this.$instanceAdmin.get(api)
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