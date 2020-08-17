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
                <tr v-for="(item,index) in coupons" :key=item.id>
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
                        <!-- {{item.deadline.datetime.split('').slice(0,10).join('')}} -->
                        {{simpleDate(item.deadline.datetime)}}
                        <!-- {{compons[index].deadline.datetime}} -->
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
        <DashModal id="couponModal"
            @updateCoupon="updateCoupon"
        >
            <template v-slot:body
            >
                <div v-if="isNew" class="row">
                    <!-- <div class="row"> -->
                        <div class="col-sm-4">
                            <div class="form-group">
                            <label for="title">優惠券名稱</label>
                            <input type="text" class="form-control" id="title"
                                v-model="tempCoupon.title"
                                placeholder="請輸入優惠券名稱"
                            />
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="form-group">
                                <label for="code">優惠碼</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="tempCoupon.code"
                                    id="code"
                                    placeholder="請輸入優惠碼"
                                />
                                </div>
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                    <label for="dueDate">到期日</label>
                                    <input
                                    type="datetime-local"
                                    class="form-control"
                                    v-model="tempCoupon['deadline_at']"
                                    id="dueDate"
                                    @input="due"
                                    />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="percent">折扣百分比</label>
                                    <input
                                    type="text"
                                    class="form-control"
                                    v-model="tempCoupon.percent"
                                    id="percent"
                                    placeholder="請輸入折扣率"
                                    />
                                </div>
                            </div>

                            <div class="form-group">
                            <div class="form-check">
                                <input
                                class="form-check-input"
                                v-model="tempCoupon.enabled"
                                :true-value="1"
                                :false-value="0"
                                type="checkbox"
                                id="is_enabled"
                                />
                                <input
                                class="form-check-input"
                                v-model="tempCoupon.enabled"
                                type="checkbox"
                                id="is_enabled"
                                />
                                <label class="form-check-label" for="is_enabled"
                                >是否啟用</label
                                >
                            </div>
                            </div>
                        </div>
                    <!-- </div> -->
                </div>
                <div v-else>
                    編輯
                </div>
            </template>
        </DashModal>
    </div>
</template>
<script>
import BasePagination from '@/components/BasePagination';
import DashModal from '@/components/admin/DashModal';
export default {
    components:{
        BasePagination,
        DashModal
    },
    data(){
        return {
            coupons:[],
            dueDate:"2020-12-31",
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
    computed:{
        // simpleDate(item){
        //     return item.split('').slice(0,10).join('')
        // }
    },
    methods:{
        due(){
            var dateControl = document.querySelector('input[type="datetime-local"]');
                console.log(dateControl.value);
        },
        simpleDate(item){
            return item.split('').slice(0,10).join('')
        },
        openModal(action,tempCoupon){
            if(action==='new'){
                this.isNew = true;
            }else if (action==='edit'){
                this.isNew = false;
            }
            $("#couponModal").modal("show");
            // alert("aa");
        },
        updateCoupon(){
            
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