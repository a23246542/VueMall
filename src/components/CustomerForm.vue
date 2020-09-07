<template>
  <!-- 購物清單 開始 -->
  <!-- @@這樣排版是可以的嗎 -->
  <!-- <Cart
        class="col-md-8"
        ></Cart> -->
  <!-- 購物清單 結束 -->

  <!-- 收件表單 開始     -->
  <ValidationObserver
    v-slot="{ invalid,handleSubmit}"
    tag="div"
    class="customerForm p-4"
  >
    <div class="shoppingBlock__header">
      <h4 class="mb-0">
        訂購資料
      </h4>
    </div>
    <form class="shoppingBlock__body"
          @submit.prevent="handleSubmit(createOrder)"
    >
      <div class="form-group">
        <!-- <ValidationProvider rule="required" v-slot="{ errors, classes, passed }" >%%s -->
        <ValidationProvider v-slot="{ errors, classes, passed }" rules="required" name="收件人">
          <label for="name" class="customerForm__label">
            收件人姓名
          </label>
          <input id="name" v-model="form.name" type="text" class="customerForm__input form-control"
                 placeholder="輸入姓名"
                 :class="classes"
          >
          <!-- <span v-if="errors[0]" class="text-danger">{{errors[0]}}</span> -->
          <span v-if="errors[0]" class="invalid-feedback">{{ errors[0] }}</span>
          <span v-if="passed" class="valid-feedback">已填</span>
        </ValidationProvider>
      </div>

      <div class="form-group">
        <ValidationProvider v-slot="{errors, classes, passed}" rules="required|email">
          <label for="email" class="customerForm__label">
            Email
          </label>
          <input id="email" v-model="form.email" type="email" class="customerForm__input form-control"
                 placeholder="請輸入 Email"
                 :class="classes"
          >
          <span v-if="errors[0]" class="invalid-feedback">{{ errors[0] }}</span>
          <span v-if="passed" class="invalid-feedback">已填</span>
        </ValidationProvider>
      </div>

      <div class="form-group">
        <ValidationProvider v-slot="{ errors, classes, passed }" rules="required|min:8" name="收件人電話">
          <label for="usertel" class="customerForm__label">
            收件人電話
          </label>
          <input id="usertel" v-model="form.tel" type="tel" class="customerForm__input form-control"
                 placeholder="請輸入電話"
                 :class="classes"
          >
          <span v-if="errors[0]" class="invalid-feedback">{{ errors[0] }}</span>
          <span v-if="passed" class="invalid-feedback">已填</span>
        </ValidationProvider>
      </div>

      <div class="form-group">
        <ValidationProvider v-slot="{ errors, classes, passed }" rules="required" name="收件人地址">
          <label for="useraddress" class="customerForm__label">
            收件人地址
          </label>
          <input id="useraddress" v-model="form.address" type="text" class="customerForm__input form-control"
                 placeholder="請輸入地址"
                 :class="classes"
          >
          <span v-if="errors[0]" class="invalid-feedback">{{ errors[0] }}</span>
          <span v-if="passed" class="invalid-feedback">已填</span>
        </ValidationProvider>
      </div>
      <div class="form-group">
        <label for="message" class="customerForm__label">
          購買方式
        </label>
        <select v-model="form.payment" class="customerForm__input  form-control" required>
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
        <label for="message" class="customerForm__label">
          留言
        </label>
        <textarea id="message" v-model="form.message" class="form-control" cols="30"
                  rows="3"
        ></textarea>
      </div>
      <div class="text-right">
        <button type="submit" class="btn btn-block btn-lg py-3 btn-danger"
                :disabled="invalid"
                @click.prevent="createOrder"
        >
          送出訂單
        </button>
      </div>
    </form>
  </ValidationObserver>
  <!-- 收件表單 結束 -->
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
    };
  },
  methods: {
    createOrder() {
      console.log('送出訂單');
      this.$router.push({ name: '訂單完成' });
    },
  },
};
</script>

<style>

</style>
