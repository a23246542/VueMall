(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53929c71"],{2712:function(t,s,a){},"6a6f":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"container mb-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8"},[t._m(0),a("div",{staticClass:"form-row mt-3"},[a("div",{staticClass:"col"},[a("ValidationProvider",{staticClass:"form-group",attrs:{name:"姓名",rules:"required",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.failed,r=s.errors;return[a("label",{staticClass:"checkout-label",attrs:{for:"username"}},[t._v("姓名")]),a("abbr",{staticClass:"text-danger abbr-style",attrs:{title:"必填"}},[t._v("*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control rounded-0",class:{"is-invalid":e},attrs:{type:"text",name:"name",id:"username",placeholder:"陳金發"},domProps:{value:t.form.user.name},on:{input:function(s){s.target.composing||t.$set(t.form.user,"name",s.target.value)}}}),a("div",{staticClass:"text-danger"},[t._v(" "+t._s(r[0])+" ")])]}}])})],1)]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col"},[a("ValidationProvider",{staticClass:"form-group",attrs:{name:"Email",rules:"required|email",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.failed,r=s.errors;return[a("label",{staticClass:"checkout-label",attrs:{for:"useremail"}},[t._v("Email")]),a("abbr",{staticClass:"text-danger abbr-style",attrs:{title:"必填"}},[t._v("*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control rounded-0",class:{"is-invalid":e},attrs:{type:"email",placeholder:"example@gmail.com",id:"useremail",name:"email"},domProps:{value:t.form.user.email},on:{input:function(s){s.target.composing||t.$set(t.form.user,"email",s.target.value)}}}),a("div",{staticClass:"text-danger"},[t._v(" "+t._s(r[0])+" ")])]}}])})],1)]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col"},[a("ValidationProvider",{staticClass:"form-group",attrs:{name:"電話",rules:"required",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.failed,r=s.errors;return[a("label",{staticClass:"checkout-label",attrs:{for:"usertel"}},[t._v("電話")]),a("abbr",{staticClass:"text-danger abbr-style",attrs:{title:"必填"}},[t._v("*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control rounded-0",class:{"is-invalid":e},attrs:{type:"tel",placeholder:"0912-345-678",id:"usertel"},domProps:{value:t.form.user.tel},on:{input:function(s){s.target.composing||t.$set(t.form.user,"tel",s.target.value)}}}),a("div",{staticClass:"text-danger"},[t._v(" "+t._s(r[0])+" ")])]}}])})],1)]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col"},[a("ValidationProvider",{staticClass:"form-group",attrs:{name:"地址",rules:"required",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.failed,r=s.errors;return[a("label",{staticClass:"checkout-label",attrs:{for:"useraddress"}},[t._v("地址")]),a("abbr",{staticClass:"text-danger abbr-style",attrs:{title:"必填"}},[t._v("*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control rounded-0",class:{"is-invalid":e},attrs:{type:"text",placeholder:"請輸入地址",name:"address",id:"useraddress"},domProps:{value:t.form.user.address},on:{input:function(s){s.target.composing||t.$set(t.form.user,"address",s.target.value)}}}),a("div",{staticClass:"text-danger"},[t._v(" "+t._s(r[0])+" ")])]}}])})],1)]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col"},[a("label",{staticClass:"checkout-label",attrs:{for:"comment"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"message",id:"comment",placeholder:"想說的話...",cols:"10",rows:"5"},domProps:{value:t.form.message},on:{input:function(s){s.target.composing||t.$set(t.form,"message",s.target.value)}}})])]),a("div",{staticClass:"form-row mt-5"},[a("div",{staticClass:"col"},[a("button",{staticClass:"btn btn-block btn-primary btn-lg rounded-0 text-white py-3",attrs:{id:"submit-link",disabled:t.invalid}},[t._v(" 送出訂單 ")])])])]),a("div",{staticClass:"col-lg-4 d-none d-lg-block"},[a("div",{staticClass:"card mb-4 border-accent"},[a("h2",{staticClass:"card-header text-center text-light bg-accent"},[t._v(" 訂單摘要 ")]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex justify-content-between mb-2"},[a("span",[t._v("小計")]),a("span",[t._v(t._s(t._f("currency")(t.cart.total)))])]),a("div",{staticClass:"d-flex justify-content-between mb-3"},[a("span",[t._v("運費")]),a("span",[t._v(t._s(t._f("currency")(0)))])]),a("div",{staticClass:"d-flex justify-content-between"},[a("span",{staticClass:"h5"},[t._v("總計")]),a("span",{staticClass:"h5"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])])])]),a("div",{staticClass:"card border-accent"},[a("h2",{staticClass:"card-header text-center text-light bg-accent"},[t._v(" 購物清單 ")]),a("div",{staticClass:"card-body p-2"},[a("table",{staticClass:"table table-sm table-borderless"},[a("tbody",t._l(t.cart.carts,(function(s){return a("tr",{key:s.id},[a("td",{staticClass:"align-middle"},[a("div",{staticClass:"bg-cover",style:[{backgroundImage:"url("+s.product.imageUrl+")"},{height:"80px"},{minWidth:"80px"}]})]),a("td",{staticClass:"align-middle pl-2"},[a("span",{staticClass:"h5"},[t._v(t._s(s.product.title))]),a("br"),a("small",[t._v(t._s(s.qty)+" "+t._s(s.product.unit))]),a("br"),a("span",[t._v(t._s(t._f("currency")(s.total)))])])])})),0)])])])])])])])},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-row my-4"},[a("div",{staticClass:"col-6"},[a("h2",{staticClass:"checkout-title"},[t._v("收件資訊")])]),a("div",{staticClass:"col-6 d-flex align-items-center"},[a("div",{staticClass:"process-steps d-flex justify-content-between w-100"},[a("div",{staticClass:"process-circle completed"},[a("i",{staticClass:"fas fa-check"})]),a("div",{staticClass:"process-circle active"}),a("div",{staticClass:"process-circle"})])])])}],i=(a("99af"),{data:function(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},computed:{cart:function(){return this.$store.state.cart}},methods:{createOrder:function(){var t="".concat("https://course-ec-api.hexschool.io/","/api/").concat(Object({NODE_ENV:"production",VUE_APP_APIPATH:"https://course-ec-api.hexschool.io/",VUE_APP_CLI_UI_URL:"",VUE_APP_UUID:"82a32758-aadc-4405-b535-2f6a678989d8",BASE_URL:""}).VUE_APP_CUSTOMPATH,"/order"),s=this;s.$store.commit("LOADING",!0);var a=s.form;s.$http.post(t,{data:a}).then((function(t){if(s.$store.commit("LOADING",!1),t.data.success){var a=t.data.message,e="success";s.$store.dispatch("updateMessage",{message:a,status:e}),s.$router.push("/cart/payment/".concat(t.data.orderId))}else{var r=t.data.message,i="danger";s.$store.dispatch("updateMessage",{message:r,status:i})}}))},getCart:function(){this.$store.dispatch("getCart")}},created:function(){this.getCart()}}),l=i,o=(a("b9f2"),a("2877")),c=Object(o["a"])(l,e,r,!1,null,"838aae9a",null);s["default"]=c.exports},b9f2:function(t,s,a){"use strict";var e=a("2712"),r=a.n(e);r.a}}]);
//# sourceMappingURL=chunk-53929c71.88bb3b6d.js.map