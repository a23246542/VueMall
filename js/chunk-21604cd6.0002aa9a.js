(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21604cd6"],{"408b":function(t,a,s){},"70c1":function(t,a,s){"use strict";var n=s("408b"),e=s.n(n);e.a},f67e:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"dropdown"},[t._m(0),s("div",{staticClass:"dropdown-menu",staticStyle:{"min-width":"300px"},attrs:{"aria-labelledby":"dropdownMenuButton"}},[s("div",{staticClass:"px-4 py-3"},[s("table",{staticClass:"table table-sm mb-0"},[t._m(1),s("tbody",[t.carts.length>0?s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"4"}},[s("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:t.delAllCart}},[t._v("刪除全部品項")])])]):t._e(),t._l(t.carts,(function(a){return s("tr",{key:a.product.id},[s("td",{staticClass:"align-middle text-center"},[s("button",{staticClass:"btn",on:{click:function(s){return s.preventDefault(),t.delCart(a)}}},[s("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])]),s("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.title)+" ")]),s("td",{staticClass:"align-middle text-right"},[t._v("x"+t._s(a.quantity))]),s("td",{staticClass:"align-middle text-center"},[t._v(" "+t._s(t._f("dollars")(a.quantity*a.product.price))+" ")])])}))],2),s("tfoot",[s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),s("td",{staticClass:"text-center"},[t._v(t._s(t._f("dollars")(t.cartTotal)))])]),s("tr",[s("td",{attrs:{colspan:"4"}},[s("router-link",{staticClass:"btn btn-block btn-success btn-sm",attrs:{to:{name:"購物車"},tag:"a"}},[t._v(" 結帳去 ")])],1)])])])])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"btn dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-shopping-cart"}),s("span",{staticClass:"badge badge-pill badge-danger"},[t._v("3")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("th",{staticClass:"h6 text-center",attrs:{colspan:"4"}},[t._v("已選購商品")])])}],r={data:function(){return{}},computed:{carts:function(){return this.$store.state.Cart.cart.carts},cartPagination:function(){return this.$store.state.Cart.cart.pagination},cartTotal:function(){return this.$store.getters.cartTotal}},created:function(){this.getCart()},methods:{getCart:function(){this.$store.dispatch("getCart")},editCart:function(t,a){this.$store.dispatch("editCart",{id:t,qty:a})},delCart:function(t){var a=t.product.id;this.$store.dispatch("delCart",a)},delAllCart:function(){this.$store.dispatch("delAllCart")}}},l=r,i=(s("70c1"),s("2877")),c=Object(i["a"])(l,n,e,!1,null,"5cbb86f2",null);a["a"]=c.exports},fced:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("NavHeader"),s("router-view"),s("NavFooter")],1)},e=[],r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Logo")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"},tag:"a"}},[t._v("首頁"),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"products"},tag:"a"}},[t._v("產品"),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"關於我們"},tag:"a"}},[t._v("關於我們"),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"優惠券"},tag:"a"}},[t._v("優惠券"),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),s("li",{staticClass:"nav-item"},[s("CartModal",{ref:"cartModal"})],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"我的訂單"},tag:"a"}},[t._v("我的訂單")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Dashboard"},tag:"a"}},[t._v("後台管理")])],1)])])])},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],i=s("f67e"),c={name:"nav-header",components:{CartModal:i["a"]}},o=c,d=s("2877"),u=Object(d["a"])(o,r,l,!1,null,null,null),v=u.exports,p=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._v(" NavFooter ")])},C=[],b={},f=b,g=Object(d["a"])(f,p,C,!1,null,null,null),_=g.exports,m={name:"home",components:{NavHeader:v,NavFooter:_}},h=m,k=Object(d["a"])(h,n,e,!1,null,null,null);a["default"]=k.exports}}]);
//# sourceMappingURL=chunk-21604cd6.0002aa9a.js.map