<template>
  <div id="delProductModal" class="modal fade" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="exampleModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal"
            @click="cancelUpdateProduct">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delProduct">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {instanceAdmin} from '../api/https';
  export default {
      props:{
        tempProduct:{}
      },
      methods:{
         // @@如果是只傳item.id會有傳參考的問題嗎
        delProduct(){
            let api =`ec/product/${this.tempProduct.id}`;
            if(this.tempProduct.id){
                instanceAdmin.delete(api)
                .then(res => {
                    // this.reStartPage('delProductModal');
                    this.$emit('reLoad','delProductModal');

                    // this.$emit('update');
                    $('#delProductModal').modal('hide');
                })
            }else{
                console.log('err');
            }
        },
        cancelUpdateProduct(){
            //清空tempProduct modal不要留下資料
            // - [] 這樣改道prop了
            this.tempProduct = {
                imgUrl:[]
            };
        },
      }
  }

</script>

<style>

</style>
