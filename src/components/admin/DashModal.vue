<template>
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增優惠券</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
                <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="sureBtn">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        // modalType:{
        //     type: String,
        //     default:'new'
        // }
    },
    data() {
        return {
            tempCoupon:{
                title:'',
                code:'',
                percent:'',
                enabled:true,
                ['deadline_at']:""
            },
        }
    },
    methods:{
        sureBtn(){
            this.$emit('updateCoupon');
        }
    }
}
</script>

<style>

</style>