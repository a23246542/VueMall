<template>
    <div class="my-5 row justify-content-center">
        <ValidationObserver
        tag="div"
        class="col-md-6"
        v-slot="{ invalid,handleSubmit}"
        >
        <form @submit.prevent="handleSubmit(createOrder)">
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
    </div>
</template>

<script>
export default {
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