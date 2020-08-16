<template>
    <div>
        <!-- <BaseLoading :active.sync="isLoading"/> -->
        <div class="mt-4 text-right">
            <button class="btn btn-primary"
                @click="openModal('new')">新增產品
            </button>
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th width="100">產品名稱</th>
                    <th width="120">折扣碼</th>
                    <th width="120">折扣百分比</th>
                    <th width="100">是否開放</th>
                    <th width="120">到期日</th>
                    <th width="120">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item) in coupons" :key=item.id>
                    <td>{{item.title}}</td>
                    <td>{{item.code}}</td>
                    <td class="text-right">
                        {{item.percent}}
                    </td>
                    <td>
                        <span v-if="item.enabled">啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                    <!-- <td class="text-right">
                        {{item['deadline_at']}}
                    </td> -->
                    <td class="text-right">
                        {{item['deadline_at']}}
                    </td>
                    <td>
                        <div class="btn-group">
                        <button class="btn btn-outline-primary btn-sm" @click="openModal('edit',item)">
                            編輯
                        </button>
                        <button class="btn btn-outline-danger btn-sm" @click="openModal('delete',item)">
                            刪除
                        </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <BasePagination
        :pages="pagination"
        @change-page="getCoupons"
        />
        <!---------- Modal ---------------------->
        <!-- <DashProductModal 
        ref="dashProductModal" 
        :is-new="isNew"
        @update="getProducts"
        @cancel="clearModal"
        />
        <DashDelProductModal
        ref="dashDelProductModal"
        :temp-product.sync="tempProduct"
        @update="getProducts"
        /> -->
    </div>
</template>
<script>
import BasePagination from '@/components/BasePagination';
export default {
    components:{
        BasePagination
    },
    data(){
        return {
            coupons:[],
            tempCoupon:{
                title:'1000元免運費',
                code:'no-shippment',
                percent:'90',
                enabled:true,
                ['deadline_at']:"2020-12-31 23:59:59"
            },
            pagination:{},
            isNew:true,
        }
    },
    created() {
        this.getCoupons();
    },
    methods:{
        openModal(){

        },
        getCoupons(){
            const api = "ec/coupons";
            this.$instanceAdmin.get(api)
            .then((res)=>{
                this.coupons = res.data.data;
            })
        },
        createCoupon(){
            const api = "ec/coupon";
            this.$instanceAdmin.post(api,this.tempCoupon)
            .then(()=>{
                this.getCoupons;
            })
        }

    }
}
</script>