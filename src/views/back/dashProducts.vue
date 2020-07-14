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
                <!-- <template v-if="isNewImg == 'edit'"> -->
                <template v-if="false">
                    <!-- <div class="form-group"> -->
                    <!-- <label for="imageUrl">輸入圖片網址</label> -->
                    <!--@@沒辦法寫入麻 <input id="imageUrl" v-model="tempProduct.imageUrl[0]" type="text" -->
                        <!-- <input id="imageUrl" v-model="tempImgUrl" type="text"
                        class="form-control" placeholder="請輸入圖片連結"> -->
                        <!-- <input id="imageUrl" v-model="tempImgUrl" type="text"
                        class="form-control" placeholder="請輸入圖片連結"> -->
                    <!-- </div> -->
                    <div v-for="(url,index) in tempProduct.imageUrl" :key="url">
                        <div class="form-group" >
                            <label for="imageUrl">輸入圖片網址</label>
                            <!-- <input id="imageUrl" v-model="url" type="text"
                            class="form-control" placeholder="請輸入圖片連結">%%會報錯 -->
                            <input id="imageUrl" v-model="tempProduct.imageUrl[index]" type="text"
                            class="form-control" placeholder="請輸入圖片連結">
                        </div>
                        <!-- <img class="img-fluid" :src="tempProduct.imageUrl" alt> -->
                        <!-- <img class="img-fluid" :src="tempImgUrl" alt> -->
                        <!-- <img class="img-fluid" :src="tempProduct.imageUrl[0]" alt> -->
                        <!-- ##陣列就是v-for -->
                        <!-- @@不知道為什麼輸入會卡卡的 -->
                        <!-- @@tempProduct裡面的陣列沒有預先定義或set進去 卻可以響應畫面 -->
                        <img class="img-fluid" :src=url alt>
                    </div>
                    
                </template>
                
                <!-- <template v-if="isNewImg == 'new'"> -->
                <template v-if="true">
                    <!-- <div v-for="(url,index) in tempProduct.imageUrl" :key="url">
                        <div class="form-group">
                        <label for="imageUrl">輸入圖片網址</label>
                        <input id="imageUrl" v-model="tempProduct.imageUrl[index]" type="text"
                        class="form-control" placeholder="請輸入圖片連結">
                        </div>
                        <img class="img-fluid" :src="tempProduct.imageUrl[index]" alt>
                    </div> -->
                    <!-- -
                    <div v-for="(item) in tempArrImgUrl" :key="item">
                        <div class="form-group">
                        <label for="imageUrl">輸入圖片網址</label>
                        <input id="imageUrl" v-model="item.imgUrl" type="text"
                        class="form-control" placeholder="請輸入圖片連結">
                        </div>
                        <img class="img-fluid" :src="item.imgUrl" alt>
                    </div>
                    - -->
                    <!-- @@index當作key有雷? -->
                    <button class="btn btn-primary" @click="addImg">新增照片</button>
                    <div v-for="(url,index) in tempProduct.imageUrl" :key="index">
                        <div class="form-group">
                        <label for="imageUrl">輸入圖片網址</label>
                        <input id="imageUrl" v-model="tempProduct.imageUrl[index]" type="text"
                        class="form-control" placeholder="請輸入圖片連結">
                        </div>
                        <!-- <img class="img-fluid" :src="url" alt> -->
                        <!-- <img class="img-fluid" :src="tempProduct.imageUrl[index]" alt> -->
                        <!-- ##不用用像v-model那個方式 -->
                        <img class="img-fluid" :src="url" alt>
                    </div>
                    
                </template>
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
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal"
            @click="cancelUpdateProduct"
            >
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
import {instanceAdmin} from '../../api/https';

export default {
    data() {
        return {
            token: "",
            products: [],
            meta: {},
            isNewImg:'',
            tempImgUrl:'',
            tempArrImgUrl:[
                {//##物件不按照順序
                    imgUrl:''
                }
            ],
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
            this.tempProduct.imageUrl=[];//移去新增產品
            this.tempProduct.imageUrl.push(this.tempImgUrl);
            this.tempProduct.imageUrl.forEach((item,index) => {
                Vue.$set(this.tempProduct.imageUrl,index,item);
            })
        }
    },
    methods: {
        getProducts() {
        const vm = this;
        console.log('getData');
        this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        // console.log(process.env.VUE_APP_UUID);
        // vm.$http.get(`api/${vm.uuid}/admin/ec/products`)//@@為何無效
        // vm.$http.get(`api/${process.env.VUE_APP_UUID}/admin/ec/products`)
        // vm.$http.get('admin/ec/products')
        instanceAdmin.defaults.headers['Authorization'] = `Bearer ${this.token}`
        instanceAdmin.get('admin/ec/products')
        .then(res => {
            console.log(res);
            vm.products = res.data.data;
            vm.meta = res.data.meta;
        })
        .catch(err =>{
            console.log(err);
        })
        },
        openModal(action,item){
            console.log(action,item);
            switch(action){
                case 'new':
                    this.tempProduct = {};
                    // this.tempProduct.imageUrl=[];
                    // this.tempProduct.imageUrl.push('');//陣列隨便放個內容
                    // Vue.$set(this.tempProduct,imageUrl,['']);//@@憶起寫可以set到裡面的值嗎?
                    // Vue.$set(this.tempProduct,imageUrl,[]);
                    // this.$set(this.tempProduct,imageUrl,[]);%%字串
                    // @@為什麼沒辦法用全局Vue了 會出現Vue is not defined
                    this.$set(this.tempProduct,'imageUrl',['']);//##可以合併!! @@是因為陣列的關係嗎??
                    // this.$set(this.tempProduct,'imageUrl',[]);
                    // this.$set(this.tempProduct.imageUrl,0,'');
                    // this.$set(this.tempProduct.imageUrl,1,'');//依序增加
                    // this.tempProduct.imageUrl.push('')//@@[]哪種方式可以依序增加 不知到索引號

                    this.isNewImg = 'new';//最後再開啟
                    //[]改成編輯圖片網址 rel取同一個dom是否好
                    $('#productModal').modal('show');
                    break;//%%往下執行
                case 'edit':
                    this.tempProduct = JSON.parse(JSON.stringify(item));
                    // @@為什麼我只是放進去沒有綁定的問題 喔喔我知道了是沒有辦法偵測到物件裡面的物件變動 但整個物件換掉是可以偵測到的
                    this.isNewImg = 'edit';
                    $('#productModal').modal('show');
                    break;
                case 'delete':
                    this.tempProduct = JSON.parse(JSON.stringify(item));
                    $('#delProductModal').modal('show');
                default:
                    break;
            }
        },
        addImg(){
            let arrLen = this.tempProduct.imageUrl.length;
            console.log('arrLen',arrLen);
            // this.$set(this.tempProduct.imageUrl,arrLen+1,'');%%不用加1
            this.$set(this.tempProduct.imageUrl,arrLen,'');
            
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
            //清空tempProduct modal不要留下資料
            this.tempProduct = {};
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
