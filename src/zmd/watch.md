### 忘記非同步行為
 * products.vue想說this.$store.dispatch('getCart');//%%
    為何寫在then之外發不出去，原來有發出去，只是還沒回傳