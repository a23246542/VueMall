(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e366"],{d532:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 mx-auto"},[s("div",{staticClass:"mb-4"},[s("div",{staticClass:"cart__box pt-4"},[s("div",{staticClass:"cart__header mb-2"},[s("h2",[t._v("購物清單 有"+t._s(t.cart.carts.length)+"項")])]),s("div",{staticClass:"cart__body p-4 bg-light"},t._l(t.cart.carts,(function(a){return s("div",{key:a.id,staticClass:"cart__item row mb-3"},[s("div",{staticClass:"col-3 col-md-3"},[s("img",{staticClass:"img-fluid",attrs:{src:a.product.imageUrl,alt:""}})]),s("div",{staticClass:"col-9 col-md-9"},[s("div",{staticClass:"row h-100"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"d-flex flex-column h-100"},[s("div",{staticClass:"fz-2 fw-b mb-md-2"},[t._v(t._s(a.product.title))]),s("div",{staticClass:"fz-3"},[t._v(t._s(t._f("dollars")(a.product.price)))])])]),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"d-flex justify-content-between align-items-center h-100"},[s("div",{staticClass:"input-group input-group-sm d-inline-flex w-auto flex-nowrap"},[s("span",{staticClass:"input-group-prepend"},[s("button",{staticClass:"btn btn-primary",on:{click:function(s){return s.preventDefault(),t.updateCartQty("add1",a)}}},[t._v("+")])]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:a.quantity,expression:"item.quantity",modifiers:{number:!0}}],staticClass:"text-center",staticStyle:{width:"30px"},attrs:{type:"text"},domProps:{value:a.quantity},on:{input:[function(s){s.target.composing||t.$set(a,"quantity",t._n(s.target.value))},function(s){return t.updateCartQty("input",a)}],blur:function(a){return t.$forceUpdate()}}}),s("span",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-primary",on:{click:function(s){return s.preventDefault(),t.updateCartQty("subtract1",a)}}},[t._v("-")])])]),s("div",{staticClass:"d-flex align-items-center"},[s("p",{staticClass:"h4 mb-0 px-2"},[t._v(" "+t._s(t._f("dollars")(a.product.price*a.quantity))+" ")]),s("div",{staticClass:"d-flex flex-column px-2"},[s("a",{staticClass:"text-nowrap",attrs:{href:""},on:{click:function(s){return s.preventDefault(),t.removeCart(a)}}},[t._v("移除")]),s("a",{staticClass:"text-nowrap",attrs:{href:""}},[t._v("收藏")])])])])])])])])})),0)])])])])])])},e=[],r={components:{},created:function(){this.getCart()},methods:{getCart:function(){this.$store.dispatch("getCart")},updateCartQty:function(t,a){var s=a.product.id,i=a.quantity;switch(t){case"add1":i+=1;break;case"subtract1":i-=1;break;case"input":break}console.log("更新购物车",s,i);var e={productId:s,newQty:i};this.$store.dispatch("editCart",e)},removeCart:function(t){var a=t.product.id;this.$store.dispatch("delCart",a)}},computed:{cart:function(){return this.$store.state.Cart.cart},cartTotal:function(){return this.$store.getters.cartTotal}},watch:{}},c=r,n=s("2877"),l=Object(n["a"])(c,i,e,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d21e366.75846718.js.map