<template>
    
        <!-- 購物清單 開始 -->
        <!-- @@這樣排版是可以的嗎 -->
        <!-- <Cart
        class="col-md-8"
        ></Cart> -->
        <!-- 購物清單 結束 -->

        <!-- 收件表單 開始     -->
        <ValidationObserver
        tag="div"
        class="p-4"
        v-slot="{ invalid,handleSubmit}"
        >
        <form class="form"
        @submit.prevent="handleSubmit(createOrder)"
        >
            <div class="form-group">
                <!-- <ValidationProvider rule="required" v-slot="{ errors, classes, passed }" >%%s -->
                <ValidationProvider rules="required" v-slot="{ errors, classes, passed }" name="收件人" >
                    <label for="name">收件人姓名</label>
                    <input type="text" class="form-control" id="name" placeholder="輸入姓名"
                        v-model="form.name"
                        :class="classes"
                        >
                    <!-- <span v-if="errors[0]" class="text-danger">{{errors[0]}}</span> -->
                    <span v-if="errors[0]" class="invalid-feedback">{{errors[0]}}</span>
                    <span v-if="passed" class="valid-feedback">已填</span>
                </ValidationProvider>
            </div>

            <div class="form-group">
                <ValidationProvider rules="required|email" v-slot="{errors, classes, passed}">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="請輸入 Email"
                        v-model="form.email"
                        :class="classes"
                        >
                    <span v-if="errors[0]" class="invalid-feedback">{{errors[0]}}</span>
                    <span v-if="passed" class="invalid-feedback">已填</span>
                </ValidationProvider>
                
            </div>
        
            <div class="form-group">
                <ValidationProvider rules="required|min:8" v-slot="{ errors, classes, passed }" name="收件人電話">
                    <label for="usertel">收件人電話</label>
                    <input type="tel" class="form-control" id="usertel" placeholder="請輸入電話"
                    v-model="form.tel"
                    :class="classes"
                    >
                    <span v-if="errors[0]" class="invalid-feedback">{{errors[0]}}</span>
                    <span v-if="passed" class="invalid-feedback">已填</span>
                </ValidationProvider>
                
            </div>
        
            <div class="form-group">
                <ValidationProvider rules="required" v-slot="{ errors, classes, passed }" name="收件人地址">
                    <label for="useraddress">收件人地址</label>
                    <input type="text" class="form-control" id="useraddress" placeholder="請輸入地址"
                    v-model="form.address"
                    :class="classes"
                    >
                    <span v-if="errors[0]" class="invalid-feedback">{{errors[0]}}</span>
                    <span v-if="passed" class="invalid-feedback">已填</span>
                </ValidationProvider>
                
            </div>
            <div class="form-group">
                <label for="message">購買方式</label>
                <select v-model="form.payment" class="form-control" required>
                    <option value="" disabled>
                    請選擇付款方式
                    </option>
                    <option value="WebATM">
                    WebATM
                    </option>
                    <option value="ATM">
                    ATM
                    </option>
                    <option value="CVS">
                    CVS
                    </option>
                    <option value="Barcode">
                    Barcode
                    </option>
                    <option value="Credit">
                    Credit
                    </option>
                    <option value="ApplePay">
                    ApplePay
                    </option>
                    <option value="GooglePay">
                    GooglePay
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="message">留言</label>
                <textarea id="message" class="form-control" cols="30" rows="3"
                    v-model="form.message"
                ></textarea>
            </div>
            <div class="text-right">
                <button type="submit" class="btn btn-danger"
                :disabled="invalid"
                >送出訂單</button>
            </div>
        </form>
        </ValidationObserver>
        <!-- 收件表單 結束 -->
</template>

<script>
import Cart from "@/components/Cart";

export default {
    components:{
        Cart
    },
    data() {
        return{
            form:{
                name: '',
                email: '',
                tel: '',
                address: '',
                payment: '',
                message: '',          
            }
        }
    },
    methods: {
        createOrder(){

        }
    }
}
</script>

<style>

</style>