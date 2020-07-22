<template>
  <div id="productModal" class="modal fade" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="exampleModalLabel" class="modal-title">
            <span>新增產品</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"
            @click="cancelUpdateProduct"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="imageUrl">輸入圖片網址</label>
                    <input id="imageUrl" type="text" class="form-control" placeholder="請輸入圖片連結"
                        v-model="tempImgUrl"
                        @keyup.enter="addImg"
                    >
                </div>
                <div class="form-group">
                    <label for="fileImg">或上傳圖片</label>
                    <input type="file" class="form-control"
                        id="fileImg"
                        ref="file"
                        @change="uploadImg"
                    >
                </div>
                <hr>
                <div style="overflow-x:auto;display:flex" class="w-100">
                    <div v-for="(url,index) in tempProduct.imageUrl" :key="'img'+index" class="w-100 flex-shrink-0 px-2 text-center">
                        <div class="form-group">
                            <!-- <label for="imageUrl">編輯圖片網址</label>要有id對應%% -->
                            <label :for="'img'+index">圖片網址{{isReadonly(url)?"(不可編輯)":"(可編輯)"}}</label>
                            <input :id="'img'+index" type="text" class="form-control" placeholder="請輸入圖片連結"
                            :readonly="isReadonly(url)"
                            v-model="tempProduct.imageUrl[index]"
                            >
                        </div>
                        <img class="img-fluid" alt=""
                        :src="tempProduct.imageUrl[index]"
                        >
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">標題</label>
                <input id="title" v-model="tempProduct.title" type="text" class="form-control"
                  placeholder="請輸入標題">
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input id="category" v-model="tempProduct.category" type="text"
                    class="form-control" placeholder="請輸入分類">
                </div>
                <div class="form-group col-md-6">
                  <label for="price">單位</label>
                  <input id="unit" v-model="tempProduct.unit" type="unit" class="form-control"
                    placeholder="請輸入單位">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input id="origin_price" v-model="tempProduct.origin_price" type="number"
                    class="form-control" placeholder="請輸入原價">
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input id="price" v-model="tempProduct.price" type="number" class="form-control"
                    placeholder="請輸入售價">
                </div>
              </div>
              <hr>

              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea id="description" v-model="tempProduct.description" type="text"
                  class="form-control" placeholder="請輸入產品描述">
                      </textarea>
              </div>
              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea id="description" v-model="tempProduct.content" type="text"
                  class="form-control" placeholder="請輸入說明內容">
                      </textarea>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input id="is_enabled" v-model="tempProduct.is_enabled" class="form-check-input"
                    type="checkbox" :true-value="1" :false-value="0">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal"
            @click="cancelUpdateProduct">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateProduct">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import $ from "jquery";
    import {instanceAdmin} from '../api/https';
  export default {
    // @@props的型別檢查用法
    props:{
    //   @@已經透過ref傳參還需要productId傳props嗎
        // productId:'',
        isNew:true,
    },
    data() {
      return {
        // ##預先定義
        //@@一開始v-model綁定的是空的物件屬性不會報錯
        tempProduct:{
            imageUrl:[]
        },
        filePath:'',//剛上傳圖檔後的圖片網址
        tempImgUrl:'',//剛輸入的圖片網址
      }
    },
    computed:{
        isReadonly(){
            return function(url){
                if(url.indexOf("hexschool")!==-1){
                    return true;
                }
            }
        }
    },
    methods:{
        newProductModal(){
            //保險
            this.tempProduct={
                imageUrl:[]
            }
            // ------等於下面-----------------
            // this.tempProduct = {};
            // this.$set(this.tempProduct,'imageUrl',[]);
            // ---------------------------------
            $('#productModal').modal('show');
        },
        editProductModal(id){//編輯時
            const api = `ec/product/${id}`
            instanceAdmin.get(api)
            .then(res => {
                this.tempProduct = res.data.data;//##重新賦值
                $('#productModal').modal('show');
            })
        },
        addImg(){
             this.tempProduct.imageUrl.push(this.tempImgUrl);
             this.tempImgUrl = "";
        },
        uploadImg(){
            const api = 'storage';

            const uploadedFile = this.$refs.file.files[0];
            const formData = new FormData();
            formData.append('file',uploadedFile);
            
            instanceAdmin.post(api,formData,{
                headers:{
                    'content-type':'multipart/form-data'
                }
            })
            .then(res => {
                this.filePath = res.data.data.path;
                this.tempProduct.imageUrl.push(this.filePath);
            })
        },
        updateProduct(){
            let api = 'ec/product';
            let httpMethod = 'post';
            // 1 依資料狀態變化更新方法
            if(!this.isNew){
                api =`ec/product/${this.tempProduct.id}`;
                httpMethod ='patch';
            }
            //2 發送api
                instanceAdmin[httpMethod](api,this.tempProduct)
                .then(res =>{
                    // 3 emit更新產品列表
                    this.$emit('update');
                    //4 關閉modal
                    $('#productModal').modal('hide')
                })

        },
         // @@如果是只傳item.id會有傳參考的問題嗎
        cancelUpdateProduct(){
            //清空tempProduct modal不要留下資料
            this.$emit('cancel');
        },
        // clearTemp(){
        //     this.tempProduct={
        //         imageUrl:[]
        //     }
        // }
    }
}

</script>

<style lang="scss">

</style>
