<template>
  <div>
    <BaseLoading :active.sync="isLoading"/>
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
    <BasePagination
    :pages="pagination"
    @change-page="getProducts(page)"
    />
    <!---------- Modal ---------------------->
    <DashProductModal 
    ref="dashProductModal" 
    :is-new="isNew"
    @update="getProducts"
    @cancel="cancelModal"
    />
    <DashDelProductModal
    :temp-product="tempProduct"
    @update="getProducts"
    @cancel="cancelModal"
    />
    
 </div>
</template>
<script>
import $ from "jquery";
import DashProductModal from '../../components/DashProductModal.vue';
import DashDelProductModal from '../../components/DashDelProductModal.vue';
import BasePagination from '../../components/BasePagination.vue';

import {instanceAdmin} from '../../api/https';

export default {
    components:{
        DashProductModal,
        DashDelProductModal,
        BasePagination
    },
    data() {
        return {
            token: "",
            products: [],
            isNew:true,
            pagination: {},
            // isLoading:false,
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
    // mounted() {//太慢
    created() {
        this.getProducts();
    },
    computed:{
        isLoading(){
            return this.$store.state.isLoading;
        }
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
        // changPage(){
            
        // },
        // getProducts() {
        getProducts(page=1){
        const vm = this;
        // vm.isLoading = true;
        // vm.$store.state.isLoading = true;
        // vm.$store.dispatch('updateLoading',true);
        vm.$store.commit('LOADING',true);
        console.log('執行getProducts');
        // this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        // console.log(process.env.VUE_APP_UUID);
        // vm.$http.get(`api/${vm.uuid}/admin/ec/products`)//@@為何無效
        // vm.$http.get(`api/${process.env.VUE_APP_UUID}/admin/ec/products`)
        // vm.$http.get('admin/ec/products')
        // instanceAdmin.defaults.headers['Authorization'] = `Bearer ${this.token}`

        this.tempProduct = {
            imageUrl:[]
        }

        instanceAdmin.get(`ec/products?page=${page}`)
        .then(res => {
            vm.products = res.data.data;
            vm.pagination = res.data.meta.pagination;
            // vm.isLoading = false;
            // vm.$store.state.isLoading = false;
            // vm.$store.dispatch('updateLoading',false)
            vm.$store.commit('LOADING',false);
        })
        // .catch(err =>{
        //     console.log(err);
        // })
        },
        openModal(action,item){
            console.log(action,item);
            const vm = this
            switch(action){
                case 'new':
                    // this.tempProduct = {};
                    // this.tempProduct.imageUrl=[];
                    // this.tempProduct.imageUrl.push('');//陣列隨便放個內容
                    // Vue.$set(this.tempProduct,imageUrl,['']);//@@憶起寫可以set到裡面的值嗎?
                    // Vue.$set(this.tempProduct,imageUrl,[]);
                    // this.$set(this.tempProduct,imageUrl,[]);%%字串
                    // @@為什麼沒辦法用全局Vue了 會出現Vue is not defined
                    // ##this.$set(this.tempProduct,'imageUrl',['']);//##可以合併!! @@是因為陣列的關係嗎??
                    // this.$set(this.tempProduct,'imageUrl',[]);
                    // this.$set(this.tempProduct.imageUrl,0,'');
                    // this.$set(this.tempProduct.imageUrl,1,'');//依序增加
                    // this.tempProduct.imageUrl.push('')//@@[]哪種方式可以依序增加 不知到索引號
                    this.isNew = true;
                    // this.isNewImg = 'new';//最後再開啟
                    //[]改成編輯圖片網址 rel取同一個dom是否好
                    // $('#productModal').modal('show');
                    this.$refs.dashProductModal.newProductModal();
                    break;//%%往下執行
                case 'edit':
                    this.tempProduct = JSON.parse(JSON.stringify(item));
                    // @@為什麼我只是放進去沒有綁定的問題 喔喔我知道了是沒有辦法偵測到物件裡面的物件變動 但整個物件換掉是可以偵測到的
                    this.isNew = false;
                    // this.isNewImg = 'edit';
                    // @@如何變成同步執行取得資料後開啟 Ray助教有洗臉
                    // async this.$ref.DashProductModal.getProduct(this.tempProduct.id);
                    this.$refs.dashProductModal.editProductModal(this.tempProduct.id);
                    // $('#productModal').modal('show');
                    break;
                case 'delete':
                    this.tempProduct = JSON.parse(JSON.stringify(item));
                    $('#delProductModal').modal('show');
                    
                    break;
                default:
                    break;
            }
        },
        // updateProduct(){ //##舊版
        //     let api="";
        //     if(this.tempProduct.id){//編輯
        //         api = `ec/product/${this.tempProduct.id}`;
        //         // this.$http.patch(api,this.tempProduct)
        //         instanceAdmin.patch(api,this.tempProduct)
        //         .then(res => {
        //             console.log(res);
        //             this.getProducts(); 
        //             //loading關閉
        //             this.tempProduct = {};
        //             $('#productModal').modal('hide');

        //         })
        //     }else{//新增
        //         api = 'ec/product';
        //         // this.$http.post(api,this.tempProduct)
        //         instanceAdmin.post(api,this.tempProduct)
        //         .then(res => {
        //             console.log(res);
        //             this.getProducts();
        //             this.tempProduct = {};
        //             $('#productModal').modal('hide');
        //         })
        //     }

        // },
        // @@如果是只傳item.id會有傳參考的問題嗎
        // delProduct(){
        //     let api ='';
        //     if(this.tempProduct.id){
        //         api = `ec/product/${this.tempProduct.id}`;
        //         // this.$http.delete(api)
        //         instanceAdmin.delete(api)
        //         .then(res => {
        //             console.log(res);
        //             this.reStartPage('delProductModal');
        //         })
        //     }else{
        //         console.log('err');
        //     }
        // },
        cancelModal(){
            //清空tempProduct modal不要留下資料
            this.tempProduct = {
                imageUrl:[]
            };
        },
        // reStartPage(modalName){
        //     this.getProducts();
        //     // -[ ]拿回資料再關閉 或是跑loading
        //     this.tempProduct = {
        //       imageUrl:['']
        //     }
        //     console.log(modalName);
        //     // @變成元件也取得到
        //     $(`#${modalName}`).modal('hide');
        // }
    }
}

</script>
