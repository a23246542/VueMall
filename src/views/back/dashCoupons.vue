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
                        <!-- {{item.deadline.datetime.split('').slice(0,10).join('')}} -->
                        {{showOnlyDate(item.deadline.datetime)}}
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
            :title="modalTitle"
            :modalUse="modalUse"
            @submit="updateCoupon"
            @delete="removeCoupon"
        >
            <template v-slot:update>
                <div class="row">
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
                                    type="date"
                                    class="form-control"
                                    v-model="dueDate"
                                    id="dueDate"
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
                                    <!-- <input
                                    class="form-check-input"
                                    v-model="tempCoupon.enabled"
                                    :true-value="1"
                                    :false-value="0"
                                    type="checkbox"
                                    id="is_enabled"
                                    /> -->
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
                <!-- <div v-else>
                    編輯
                </div> -->
            </template>
            <template v-slot:delete>
                <p>
                    是否刪除<strong class="text-danger">{{ tempCoupon.title }}</strong>優惠券(刪除後將無法恢復)。
                </p>
            </template>
        </DashModal>
    </div>
</template>
<script>
import BasePagination from '@/components/BasePagination';
import DashModal from '@/components/admin/DashOtherModal';
export default {
    components:{
        BasePagination,
        DashModal
    },
    data(){
        return {
            coupons:[],
            tempCoupon:{
                title:'',
                code:'',
                percent:'',
                enabled:true,
                // ['deadline_at']:""
                deadline:{datetime:""}
            },
            pagination:{},
            isNew:true,//決定新增還是編輯的api方法
            modalUse:'',
            modalTitle:'',
        }
    },
    created() {
        this.getCoupons();
    },
    computed:{
        // simpleDate(item){
        //     return item.split('').slice(0,10).join('')
        // }
        dueDate:{
            get(){
                // return this.tempCoupon['deadline_at'].split('').slice(0,10).join('');
                return this.tempCoupon.deadline.datetime.split('').slice(0,10).join('');
            },
            set(value){
                // this.tempCoupon['deadline_at'] = `${value} 23:59:59`;
                this.tempCoupon.deadline.datetime = `${value} 23:59:59`;
            }
        }
    },
    methods:{
        // due(){
        //     var dateControl = document.querySelector('input[type="datetime-local"]');
        //         console.log(dateControl.value);
        // },
        showOnlyDate(item){
            return item.split('').slice(0,10).join('')
        },
        openModal(action,CouponItem){
            if(action==='new'){
                this.isNew = true;
                this.modalUse = 'update';
                this.modalTitle = '新增優惠券';
                // this.tempCoupon = {};//@@
                this.tempCoupon = {
                    title:'',
                    code:'',
                    percent:'',
                    enabled:true,
                    deadline:{datetime:""}
                };
            }else if (action==='edit'){
                this.isNew = false;
                this.modalUse = 'update';
                this.modalTitle = '編輯優惠券';

                this.tempCoupon = {...CouponItem};
            }else if (action==='delete'){
                this.modalUse = 'delete';
                this.modalTitle = '刪除優惠券';
                this.tempCoupon = CouponItem;
            }
            $("#couponModal").modal("show");
            // alert("aa");
        },
        getCoupons(callback){
            // return new Promise((resolve, reject) =>{

                this.$store.commit('LOADING',true);
                const api = "ec/coupons";
                this.$instanceAdmin.get(api)
                .then((res)=>{
                    this.coupons = res.data.data;
                    this.pagination = res.data.meta.pagination;
                    this.$store.commit('LOADING',false);
                    if(callback){
                        callback();
                    }
                    // resolve();
                })
            // })
        },
        updateCoupon(){
            this.$store.commit('LOADING',true);
            let api = "ec/coupon";
            let apiMethod = "post";
            if(!this.isNew){
                api = `ec/coupon/${this.tempCoupon.id}`
                apiMethod = "patch";
            }
            const data = {...this.tempCoupon};
            data['deadline_at'] = data.deadline.datetime;
            delete data.deadline;
            this.$instanceAdmin[apiMethod](api,data)
            .then(() => {
                this.getCoupons(()=>{
                    $("#couponModal").modal("hide");
                });
                
            })
            
            
        },
        removeCoupon(){
            this.$store.commit('LOADING',true);
            const api = `ec/coupon/${this.tempCoupon.id}`;
            this.$instanceAdmin.delete(api)
            .then(() => {
                // this.getCoupons();
                this.getCoupons(()=>{
                    $("#couponModal").modal("hide");
                })
            })
            // .then(() =>{
            //     $("#couponModal").modal("hide");
            // })
        }

    }
}
</script>