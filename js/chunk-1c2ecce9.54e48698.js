(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c2ecce9","chunk-0297e3fa"],{"09ec":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard",attrs:{id:"dashboard"}},[a("DashNavbar"),a("DashSidebar"),a("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[a("keep-alive",[a("router-view")],1)],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[a("a",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{href:"#/admin/products"}},[t._v("後台管理系統")]),a("input",{staticClass:"form-control form-control-dark w-100 flex-shrink-1",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),a("ul",{staticClass:"navbar-nav flex-row px-3"},[a("li",{staticClass:"nav-item mx-2 text-nowrap"},[a("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:{name:"home"}}},[t._v("回首頁")])],1),a("li",{staticClass:"nav-item text-nowrap mx-2"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.signOut(e)}}},[t._v("登出")])])])])},i=[],n=(a("ac1f"),a("5319"),{data:function(){return{}},methods:{signOut:function(){var t=this,e="auth/logout",a=document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,"$1");this.$instanceLogin.post(e,{api_token:a}).then((function(e){t.$router.push("/"),document.cookie="token='';expires='';path=/"}))}}}),l=n,c=(a("6490"),a("2877")),d=Object(c["a"])(l,o,i,!1,null,"46ccfbba",null),u=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[a("div",{staticClass:"sidebar-sticky"},[a("ul",{staticClass:"nav flex-column"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"dashProducts"},tag:"a",href:"#"}},[a("span",{attrs:{"data-feather":"home"}}),t._v(" 產品列表 "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"訂單列表"},tag:"a",href:"#"}},[a("span",{attrs:{"data-feather":"layers"}}),t._v(" 訂單列表 ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"優惠券列表"},tag:"a",href:"#"}},[a("span",{attrs:{"data-feather":"bar-chart-2"}}),t._v(" 優惠券列表 ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"圖片儲存列表"},tag:"a",href:"#"}},[a("span",{attrs:{"data-feather":"file"}}),t._v(" 圖片儲存列表 ")])],1)])])])},m=[],f={data:function(){return{}}},v=f,g=Object(c["a"])(v,p,m,!1,null,"0f22836d",null),h=g.exports,b=a("2e28"),P={components:{DashNavbar:u,DashSidebar:h,dashProducts:b["default"]}},_=P,C=(a("8533"),a("1646"),Object(c["a"])(_,r,s,!1,null,"3d2264d8",null));e["default"]=C.exports},1625:function(t,e,a){},1646:function(t,e,a){"use strict";var r=a("1625"),s=a.n(r);s.a},"2e28":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mt-4 text-right"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal("new")}}},[t._v("新增產品 ")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(e.origin_price)+" ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(e.price)+" ")]),a("td",[e.enabled?a("span",[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal("edit",e)}}},[t._v(" 編輯 ")]),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.openModal("delete",e)}}},[t._v(" 刪除 ")])])])])})),0)]),a("BasePagination",{attrs:{pages:t.pagination},on:{"change-page":t.getProducts}}),a("DashProductModal",{ref:"dashProductModal",attrs:{"is-new":t.isNew},on:{update:t.getProducts,cancel:t.clearModal}}),a("DashDelProductModal",{ref:"dashDelProductModal",attrs:{"temp-product":t.tempProduct},on:{"update:tempProduct":function(e){t.tempProduct=e},"update:temp-product":function(e){t.tempProduct=e},update:t.getProducts}})],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120"}},[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"120"}},[t._v("原價")]),a("th",{attrs:{width:"120"}},[t._v("售價")]),a("th",{attrs:{width:"100"}},[t._v("是否啟用")]),a("th",{attrs:{width:"120"}},[t._v("編輯")])])])}],o=a("1157"),i=a.n(o),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-dark text-white"},[t._m(0),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.cancelUpdateProduct}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"imageUrl"}},[t._v("輸入圖片網址(enter)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempImgUrl,expression:"tempImgUrl"}],staticClass:"form-control",attrs:{id:"imageUrl",type:"text",placeholder:"請輸入圖片連結"},domProps:{value:t.tempImgUrl},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addImg(e)},input:function(e){e.target.composing||(t.tempImgUrl=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"fileImg"}},[t._v("或上傳圖片")]),a("input",{ref:"file",staticClass:"form-control",attrs:{type:"file",id:"fileImg"},on:{change:t.uploadImg}})]),a("hr"),a("div",{staticClass:"w-100",staticStyle:{"overflow-x":"auto",display:"flex"}},t._l(t.tempProduct.imageUrl,(function(e,r){return a("div",{key:"img"+r,staticClass:"w-100 flex-shrink-0 px-2 text-center"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"img"+r}},[t._v("圖片網址"+t._s(t.isReadonly(e)?"(不可編輯)":"(可編輯)"))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl[r],expression:"tempProduct.imageUrl[index]"}],staticClass:"form-control",attrs:{id:"img"+r,type:"text",placeholder:"請輸入圖片連結",readonly:t.isReadonly(e)},domProps:{value:t.tempProduct.imageUrl[r]},on:{input:function(e){e.target.composing||t.$set(t.tempProduct.imageUrl,r,e.target.value)}}})]),a("img",{staticClass:"img-fluid",attrs:{alt:"",src:t.tempProduct.imageUrl[r]}})])})),0)]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{id:"title",type:"text",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{id:"category",type:"text",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{id:"unit",type:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{id:"origin_price",type:"number",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{id:"price",type:"number",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.enabled,expression:"tempProduct.enabled"}],staticClass:"form-check-input",attrs:{id:"is_enabled",type:"checkbox"},domProps:{checked:Array.isArray(t.tempProduct.enabled)?t._i(t.tempProduct.enabled,null)>-1:t.tempProduct.enabled},on:{change:function(e){var a=t.tempProduct.enabled,r=e.target,s=!!r.checked;if(Array.isArray(a)){var o=null,i=t._i(a,o);r.checked?i<0&&t.$set(t.tempProduct,"enabled",a.concat([o])):i>-1&&t.$set(t.tempProduct,"enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.tempProduct,"enabled",s)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.cancelUpdateProduct}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v(" 確認 ")])])])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增產品")])])}],c=(a("c975"),a("9f30")),d={props:{isNew:!0},data:function(){return{tempProduct:{imageUrl:[]},tempImgUrl:"",filePath:""}},computed:{isReadonly:function(){return function(t){if(-1!==t.indexOf("hexschool"))return!0}}},methods:{openNewModal:function(){this.$store.commit("LOADING",!0),this.tempProduct={imageUrl:[]},this.$store.commit("LOADING",!1),i()("#productModal").modal("show")},openEditModal:function(t){var e=this;this.$store.commit("LOADING",!0);var a="ec/product/".concat(t);c["a"].get(a).then((function(t){e.tempProduct=t.data.data,e.$store.commit("LOADING",!1),i()("#productModal").modal("show")}))},addImg:function(){this.tempProduct.imageUrl.push(this.tempImgUrl),this.tempImgUrl=""},uploadImg:function(){var t=this,e="storage",a=this.$refs.file.files[0],r=new FormData;r.append("file",a),c["a"].post(e,r,{headers:{"content-type":"multipart/form-data"}}).then((function(e){t.filePath=e.data.data.path,t.tempProduct.imageUrl.push(t.filePath)}))},updateProduct:function(){var t=this,e="ec/product",a="post";this.isNew||(e="ec/product/".concat(this.tempProduct.id),a="patch"),c["a"][a](e,this.tempProduct).then((function(e){t.$emit("update"),i()("#productModal").modal("hide")}))},cancelUpdateProduct:function(){this.tempProduct={imageUrl:[]},this.$emit("cancel")}}},u=d,p=a("2877"),m=Object(p["a"])(u,n,l,!1,null,null,null),f=m.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-danger text-white"},[t._m(0),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.cancelDelProduct}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.cancelDelProduct}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.delProduct}},[t._v(" 確認刪除 ")])])])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])])}],h={props:{tempProduct:{}},methods:{openDelModal:function(){i()("#delProductModal").modal("show")},delProduct:function(){var t=this;this.$store.commit("LOADING",!0);var e="ec/product/".concat(this.tempProduct.id);this.tempProduct.id?c["a"].delete(e).then((function(e){t.$emit("update"),i()("#delProductModal").modal("hide")})):console.log("取不到tempProduct.id")},cancelDelProduct:function(){this.$emit("update:tempProduct",{imageUrl:[]})}}},b=h,P=Object(p["a"])(b,v,g,!1,null,null,null),_=P.exports,C=a("dd87"),x={components:{DashProductModal:f,DashDelProductModal:_,BasePagination:C["a"]},data:function(){return{products:[],pagination:{},isNew:!0,tempProduct:{imageUrl:[]}}},created:function(){this.getProducts()},computed:{},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;e.$store.commit("LOADING",!0),console.log("執行getProducts"),this.tempProduct={imageUrl:[]},c["a"].get("ec/products?page=".concat(t)).then((function(t){e.products=t.data.data,e.pagination=t.data.meta.pagination,e.$store.commit("LOADING",!1)}))},openModal:function(t,e){switch(console.log(t,e),t){case"new":this.isNew=!0,this.$refs.dashProductModal.openNewModal();break;case"edit":this.tempProduct=JSON.parse(JSON.stringify(e)),this.isNew=!1,this.$refs.dashProductModal.openEditModal(this.tempProduct.id);break;case"delete":this.tempProduct=JSON.parse(JSON.stringify(e)),this.$refs.dashDelProductModal.openDelModal();break;default:break}},clearModal:function(){this.tempProduct={imageUrl:[]}}}},k=x,y=Object(p["a"])(k,r,s,!1,null,null,null);e["default"]=y.exports},4601:function(t,e,a){},6490:function(t,e,a){"use strict";var r=a("e339"),s=a.n(r);s.a},8533:function(t,e,a){"use strict";var r=a("4601"),s=a.n(r);s.a},c975:function(t,e,a){"use strict";var r=a("23e7"),s=a("4d64").indexOf,o=a("a640"),i=a("ae40"),n=[].indexOf,l=!!n&&1/[1].indexOf(1,-0)<0,c=o("indexOf"),d=i("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:l||!c||!d},{indexOf:function(t){return l?n.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},dd87:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.emitPage(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e,r){return a("li",{key:r,staticClass:"page-item",class:{active:e===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.emitPage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.emitPage(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},s=[],o={props:{pages:{type:Object,default:"1"}},data:function(){return{}},methods:{emitPage:function(t){this.$emit("change-page",t)}}},i=o,n=a("2877"),l=Object(n["a"])(i,r,s,!1,null,null,null);e["a"]=l.exports},e339:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1c2ecce9.54e48698.js.map