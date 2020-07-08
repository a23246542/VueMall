<template>
    <div>
         <div class="mt-4 text-right">
            <!-- <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">新增產品</button> -->
            <button class="btn btn-primary" data-target="#productModal" @click="productModal(true)">新增產品</button>
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
                            <button class="btn btn-outline-primary btn-sm">
                                編輯
                            </button>
                            <button class="btn btn-outline-danger btn-sm">
                                刪除
                            </button>
                        </div>
                    </td>
                    
                </tr>
            </tbody>

        </table>
    </div>
</template>
<script>
import $ from "jquery";

// @@ todotree 文檔置放
// - [ ] 建立資料結構（關注點分離的概念，先確定資料）
//     - [ ] mock资料返回
//     - [ ] data资料结构跟储存资料
// - [ ] 將資料呈現在畫面上（如果有多個行為，可以再細分）
// 	- [ ] 制作产品列表畫面
// 	- [ ] 將資料套用
// - [ ] 新增產品資料
// 	- [ ] 設計產品建立畫面
// 	- [ ] 建立產品的暫存空間
// 	- [ ] 確認資料後新增至產品列表


export default {
    data(){
        return{
            products:[],
            meta:{}
        }
    },
    mounted(){
        this.getData();
    },
    methods:{
        getData(){
            const vm = this;
            console.log('getData');
            // vm.$http.get(`api/${vm.uuid}/admin/ec/products`)//@@為何無效
            vm.$http.get(`api/${process.env.VUE_APP_UUID}/admin/ec/products`)
            .then(res => {
                console.log(res);
                vm.products = res.data.data;
                vm.meta = res.data.meta;
            })
        }
    }
}
</script>
