<template>
  <div>
    <div class="mt-4 text-right">
      <!-- <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">新增產品</button> -->
        <!-- @click="productModal(true)">新增產品</button> -->
      <button class="btn btn-primary" data-target="#productModal"
        @click="openModal('new')">新增產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in products" :key=item.id>
          <td>{{item.category}}</td>
          <td>{{item.title}}</td>
          <td class="text-right">
            {{item.origin_price}}
          </td>
          <td class="text-right">
            {{item.price}}
          </td>
          <td>
            <span v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
            <!-- {{item.isEnable=1}} -->
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
    <!---------- Modal ---------------------->
    <div id="productModal" class="modal fade" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="imageUrl">輸入圖片網址</label>
                  <!--@@沒辦法寫入麻 <input id="imageUrl" v-model="tempProduct.imageUrl[0]" type="text" -->
                    <input id="imageUrl" v-model="tempImgUrl" type="text"
                    class="form-control" placeholder="請輸入圖片連結">
                </div>
                <!-- <img class="img-fluid" :src="tempProduct.imageUrl" alt> -->
                <img class="img-fluid" :src="tempImgUrl" alt>
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
            @click="cancelUpdateProduct"
            >
              取消
            </button>
            <button type="button" class="btn btn-primary" 
            @click="updateProduct"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>

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
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="delProduct">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
 </div>
</template>
<script>
import $ from "jquery";

export default {
    data() {
        return {
            products: [],
            meta: {},
            tempImgUrl:'',
            tempProduct:{
                // imageUrl:[]
            }
        }
    },
    mounted() {
        this.getProducts();
    },
    watch:{
        // ##物件
        // tempImgUrl:{
        //     deep:true,
        //     handler(val,oldval){
        //         console.log(val);
        //     }
        // }
        // ##函式形式
        tempImgUrl:function(val,oldVal){
            // Vue.$set(this.tempProduct.imageUrl[0])@@
            this.tempProduct.imageUrl=[];
            this.tempProduct.imageUrl.push(this.tempImgUrl);
        }
    },
    methods: {
        getProducts() {
        const vm = this;
        console.log('getData');
        // console.log(process.env.VUE_APP_UUID);
        // vm.$http.get(`api/${vm.uuid}/admin/ec/products`)//@@為何無效
        // vm.$http.get(`api/${process.env.VUE_APP_UUID}/admin/ec/products`)
        vm.$http.get('admin/ec/products')
        .then(res => {
            console.log(res);
            vm.products = res.data.data;
            vm.meta = res.data.meta;
        })
        },
        openModal(action,item){
            console.log(action,item);
            switch(action){
                case 'new':
                    this.tempProduct = {};
                    $('#productModal').modal('show');
                    break;//%%往下執行
                case 'edit':
                    this.tempProduct = JSON.parse(JSON.stringify(item));
                    $('#productModal').modal('show');
                    break;
                case 'delete':
                    this.tempProduct = JSON.parse(JSON.stringify(item));
                    $('#delProductModal').modal('show');
                default:
                    break;
            }
        },
        updateProduct(){
            let api="";
            if(this.tempProduct.id){//編輯
                api = `admin/ec/product/${this.tempProduct.id}`;
                this.$http.patch(api,this.tempProduct)
                .then(res => {
                    console.log(res);
                    this.getProducts(); 
                    //loading關閉
                    this.tempProduct = {};
                    $('#productModal').modal('hide');

                })
            }else{//新增
                api = `admin/ec/product`;
                this.$http.post(api,this.tempProduct)
                .then(res => {
                    console.log(res);
                    this.getProducts();
                    this.tempProduct = {};
                    $('#productModal').modal('hide');
                })
            }

        },
        // @@如果是只傳item.id會有傳參考的問題嗎
        delProduct(){
            let api ='';
            if(this.tempProduct.id){
                api = `admin/ec/product/${this.tempProduct.id}`;
                this.$http.delete(api)
                .then(res => {
                    console.log(res);
                    this.reStartPage('delProductModal');
                })
            }else{
                console.log('err');
            }
        },
        cancelUpdateProduct(){

        },
        reStartPage(modalName){
            this.getProducts();
            // -[ ]拿回資料再關閉 promise
            this.tempProduct = {}
            $(`#${modalName}`).modal('hide');
        }
    }
}

</script>
