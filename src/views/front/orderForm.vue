<template>
      <div>
    <div class="container mb-5">
      <div class="row">
        <div class="col-lg-8">
          <!-- <ValidationObserver
            class="form bg-light p-5"
            v-slot="{ invalid }"
            tag="form"
            @submit.prevent="createOrder"
          > -->
            <!--第一排: 標題 & 步驟-->
            <div class="form-row my-4">
              <div class="col-6">
                <h2 class="checkout-title">收件資訊</h2>
              </div>
              <!-- process-steps -->
              <div class="col-6 d-flex align-items-center">
                <!-- 步驟軸用 w-100 把 block 佔滿，並用 flex 排列 -->
                <div class="process-steps d-flex justify-content-between w-100">
                  <div class="process-circle completed">
                    <i class="fas fa-check"></i>
                  </div>
                  <div class="process-circle active"></div>
                  <div class="process-circle"></div>
                </div>
              </div>
            </div>
            <!--第二排: 姓名-->
            <div class="form-row mt-3">
              <div class="col">
                <ValidationProvider
                  name="姓名"
                  rules="required"
                  class="form-group"
                  v-slot="{ failed, errors }"
                  tag="div"
                >
                  <label for="username" class="checkout-label">姓名</label>
                  <abbr title="必填" class="text-danger abbr-style">*</abbr>
                  <input
                    type="text"
                    :class="{ 'is-invalid': failed }"
                    class="form-control rounded-0"
                    name="name"
                    id="username"
                    v-model="form.user.name"
                    placeholder="陳金發"
                  />
                  <div class="text-danger">
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!--第三排: email-->
            <div class="form-row">
              <div class="col">
                <ValidationProvider
                  name="Email"
                  rules="required|email"
                  class="form-group"
                  v-slot="{ failed, errors }"
                  tag="div"
                >
                  <label for="useremail" class="checkout-label">Email</label>
                  <abbr title="必填" class="text-danger abbr-style">*</abbr>
                  <input
                    type="email"
                    :class="{ 'is-invalid': failed }"
                    class="form-control rounded-0"
                    placeholder="example@gmail.com"
                    id="useremail"
                    name="email"
                    v-model="form.user.email"
                  />
                  <div class="text-danger">
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!--第四排: 電話-->
            <div class="form-row">
              <div class="col">
                <ValidationProvider
                  class="form-group"
                  name="電話"
                  rules="required"
                  v-slot="{ failed, errors }"
                  tag="div"
                >
                  <label for="usertel" class="checkout-label">電話</label>
                  <abbr title="必填" class="text-danger abbr-style">*</abbr>
                  <input
                    type="tel"
                    class="form-control rounded-0"
                    placeholder="0912-345-678"
                    :class="{ 'is-invalid': failed }"
                    id="usertel"
                    v-model="form.user.tel"
                  />
                  <div class="text-danger">
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <!--第五排: 地址-->
            <div class="form-row">
              <div class="col">
                <ValidationProvider
                  class="form-group"
                  name="地址"
                  rules="required"
                  v-slot="{ failed, errors }"
                  tag="div"
                >
                  <label for="useraddress" class="checkout-label">地址</label>
                  <abbr title="必填" class="text-danger abbr-style">*</abbr>
                  <input
                    type="text"
                    class="form-control rounded-0"
                    placeholder="請輸入地址"
                    :class="{ 'is-invalid': failed }"
                    name="address"
                    id="useraddress"
                    v-model="form.user.address"
                  />
                  <div class="text-danger">
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
            </div>

            <!--第六台: 留言-->
            <div class="form-row">
              <div class="col">
                <label for="comment" class="checkout-label">留言</label>
                <textarea
                  name="message"
                  id="comment"
                  class="form-control"
                  placeholder="想說的話..."
                  cols="10"
                  rows="5"
                  v-model="form.message">
                </textarea>
              </div>
            </div>
            <!--第七排: 上一步 & 下一步-->
            <div class="form-row mt-5">
              <div class="col">
                <button
                  id="submit-link"
                  :disabled="invalid"
                  class="btn btn-block btn-primary btn-lg rounded-0 text-white py-3"
                >
                  送出訂單
                </button>
              </div>
            </div>
          </ValidationObserver>
        </div>
        <div class="col-lg-4 d-none d-lg-block">
          <!-- 訂單摘要 -->
          <div class="card mb-4 border-accent">
            <h2 class="card-header text-center text-light bg-accent">
              訂單摘要
            </h2>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <span>小計</span>
                <span>{{ cart.total | currency }}</span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <span>運費</span>
                <span>{{ 0 | currency }}</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="h5">總計</span>
                <span class="h5">{{ cart.final_total | currency }}</span>
              </div>
            </div>
          </div>
          <!--購物清單-->
          <div class="card border-accent">
            <h2 class="card-header text-center text-light bg-accent">
              購物清單
            </h2>
            <div class="card-body p-2">
              <table class="table table-sm table-borderless">
                <tbody>
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td class="align-middle">
                      <div
                        class="bg-cover"
                        :style="[
                          { backgroundImage: `url(${item.product.imageUrl})` },
                          { height: '80px' },
                          { minWidth: '80px' }
                        ]"
                      ></div>
                    </td>
                    <td class="align-middle pl-2">
                      <span class="h5">{{ item.product.title }}</span>
                      <br />
                      <small>{{ item.qty }} {{ item.product.unit }}</small>
                      <br />
                      <span>{{ item.total | currency }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    createOrder() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const vm = this;
      // 開啟 loading
      vm.$store.commit('LOADING', true);
      const order = vm.form;
      vm.$http.post(api, { data: order }).then((response) => {
        // 關閉 loading
        vm.$store.commit('LOADING', false);
        if (response.data.success) {
          const { message } = response.data;
          const status = 'success';
          vm.$store.dispatch('updateMessage', { message, status });
          vm.$router.push(`/cart/payment/${response.data.orderId}`);
        } else {
          const { message } = response.data;
          const status = 'danger';
          vm.$store.dispatch('updateMessage', { message, status });
        }
      });
    },
    getCart() {
      this.$store.dispatch('getCart');
    },
  },
  created() {
    this.getCart();
  },
};
</script>
<style lang="scss" scoped>
.abbr-style {
  text-decoration: none;
}
</style>