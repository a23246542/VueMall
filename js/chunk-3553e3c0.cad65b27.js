(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3553e3c0"],{1276:function(t,e,r){"use strict";var i=r("d784"),a=r("44e7"),s=r("825a"),n=r("1d80"),c=r("4840"),o=r("8aa5"),u=r("50c4"),l=r("14c3"),d=r("9263"),p=r("d039"),h=[].push,f=Math.min,g=4294967295,v=!p((function(){return!RegExp(g,"y")}));i("split",2,(function(t,e,r){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var i=String(n(this)),s=void 0===r?g:r>>>0;if(0===s)return[];if(void 0===t)return[i];if(!a(t))return e.call(i,t,s);var c,o,u,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=new RegExp(t.source,p+"g");while(c=d.call(v,i)){if(o=v.lastIndex,o>f&&(l.push(i.slice(f,c.index)),c.length>1&&c.index<i.length&&h.apply(l,c.slice(1)),u=c[0].length,f=o,l.length>=s))break;v.lastIndex===c.index&&v.lastIndex++}return f===i.length?!u&&v.test("")||l.push(""):l.push(i.slice(f)),l.length>s?l.slice(0,s):l}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var a=n(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,a,r):i.call(String(a),e,r)},function(t,a){var n=r(i,t,this,a,i!==e);if(n.done)return n.value;var d=s(t),p=String(this),h=c(d,RegExp),m=d.unicode,_=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),C=new h(v?d:"^(?:"+d.source+")",_),b=void 0===a?g:a>>>0;if(0===b)return[];if(0===p.length)return null===l(C,p)?[p]:[];var P=0,y=0,x=[];while(y<p.length){C.lastIndex=v?y:0;var w,k=l(C,v?p:p.slice(y));if(null===k||(w=f(u(C.lastIndex+(v?0:y)),p.length))===P)y=o(p,y,m);else{if(x.push(p.slice(P,y)),x.length===b)return x;for(var $=1;$<=k.length-1;$++)if(x.push(k[$]),x.length===b)return x;y=P=w}}return x.push(p.slice(P)),x}]}),!v)},"678a":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"productList"},[r("div",{staticClass:"row"},t._l(t.filterProducts,(function(t){return r("div",{key:t.id,staticClass:"col-xl-4 col-sm-6 productCardCol mb-5"},[r("ProductCard",{attrs:{"this-product":t,"card-class":"productCard--style2"}})],1)})),0),r("Pagination",{attrs:{pages:t.pagination},on:{"change-page":t.getProducts}})],1)},a=[],s=(r("4de4"),r("caad"),r("2532"),r("96cf"),r("1da1")),n=r("5530"),c=r("e915"),o=r("dd87"),u=r("2f62"),l={components:{ProductCard:c["a"],Pagination:o["a"]},data:function(){return{}},computed:Object(n["a"])(Object(n["a"])({},Object(u["c"])({products:function(t){return t.CusProducts.products},pagination:function(t){return t.CusProducts.pagination},searchText:function(t){return t.CusProducts.searchText}})),{},{filterProducts:function(){var t=this;return"all"===this.searchText?this.products:this.products.filter((function(e){return e.category.toLowerCase().includes(t.searchText.toLowerCase())}))}}),created:function(){var t=[{routerName:"home",title:"首頁"},{routerName:"products",title:"商品一覽"}];this.$store.dispatch("setBreadcrumbList",t)},methods:{getProducts:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=t.length>0&&void 0!==t[0]?t[0]:1,r.next=3,e.$store.dispatch("getProducts",i);case 3:case"end":return r.stop()}}),r)})))()}}},d=l,p=r("2877"),h=Object(p["a"])(d,i,a,!1,null,null,null);e["default"]=h.exports},"7db0":function(t,e,r){"use strict";var i=r("23e7"),a=r("b727").find,s=r("44d2"),n=r("ae40"),c="find",o=!0,u=n(c);c in[]&&Array(1)[c]((function(){o=!1})),i({target:"Array",proto:!0,forced:o||!u},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s(c)},dd87:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{attrs:{"aria-label":"Page navigation"}},[r("ul",{staticClass:"pagination justify-content-center"},[r("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[r("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.emitPage(t.pages.current_page-1)}}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e,i){return r("li",{key:i,staticClass:"page-item",class:{active:e===t.pages.current_page}},[r("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.emitPage(e)}}},[t._v(t._s(e))])])})),r("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[r("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.emitPage(t.pages.current_page+1)}}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},a=[],s={props:{pages:{type:Object,default:function(){}}},data:function(){return{currentPage:"1"}},methods:{emitPage:function(t){this.currentPage=t,this.$emit("change-page",t)}}},n=s,c=r("2877"),o=Object(c["a"])(n,i,a,!1,null,null,null);e["a"]=o.exports},e915:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"productCard card  rounded-0",class:[t.mb,t.cardClass]},[r("div",{staticClass:"p-2"},[r("div",{staticClass:"productCard__imgWrap bg-cover",style:{backgroundImage:"url("+t.thisProduct.imageUrl[0]+")"}},[r("span",{staticClass:"productCard__imgWrap__badge badge badge-primary"},[t._v(t._s(t.productTag))]),r("span",{staticClass:"productCard__favoriteBadge",on:{click:function(e){return t.clickHeart(e)}}},[r("i",{class:t.heartStyle})])])]),r("div",{staticClass:"productCard__body card-body pt-1"},[r("h5",{staticClass:"productCard__title limit-2-line mb-1 card-title font-weight-bold",on:{click:function(e){return t.openSingleProudct()}}},[t._v(" "+t._s(t.thisProduct.title)+" ")]),r("div",[r("p",{staticClass:"productCard__content text-truncate text-nowrap text-muted"},[t._v(" "+t._s(t.thisProduct.content)+" ")]),r("div",{staticClass:"d-flex align-items-end mb-2"},[r("div",{staticClass:"productCard__price h3 mb-0 mr-2 font-weight-bold"},[t._v(" NT"+t._s(t._f("dollars")(t.thisProduct.price))+" ")]),r("div",{staticClass:"text-muted"},[r("del",[t._v(" NT"+t._s(t._f("dollars")(t.thisProduct.origin_price))+" ")])])]),r("div",{staticClass:"d-flex align-items-center"},[r("div",{staticClass:"form-inline mr-2"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.thisProduct.num,expression:"thisProduct.num"}],staticClass:"productCard__num form-control form-control-sm",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.thisProduct,"num",e.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:""},domProps:{value:1}},[t._v(" 1 ")]),t._l(5,(function(e){return r("option",{key:"num"+e,domProps:{value:e+1}},[t._v(" "+t._s(e+1)+" ")])}))],2)]),r("a",{staticClass:"productCard__cart flex-1 btn btn-secondary btn-sm py-1 ml-auto border-0",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addToCart(t.thisProduct,t.thisProduct.num)}}},[t._v("加入購物車")])])])])])},a=[],s=(r("7db0"),r("caad"),r("c975"),r("ac1f"),r("2532"),r("1276"),{props:{thisProduct:{type:Object,required:!0},mb:{type:String,default:""},cardClass:{type:String,default:""}},computed:{carts:function(){return this.$store.state.Cart.cart.carts},productTag:function(){return this.thisProduct.category.includes(">")?this.thisProduct.category.split(">")[1]:this.thisProduct.category},heartStyle:function(){return-1===this.wishItemIdList.indexOf(this.thisProduct.id)?"far fa-heart":"fas fa-heart text-primary"},wishItemIdList:function(){return this.$store.state.WishList.wishItemIdList}},methods:{addToCart:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.commit("LOADING",!0);var i={productId:t.id,qty:r},a=this.carts.find((function(t){return t.product.id===i.id}));if(a){var s={productId:a.product.id,newQty:a.quantity+r};this.$store.dispatch("editCart",s).then((function(){e.$bus.$emit("message:push","".concat(t.title,"已加入購物車"),"success")}))}else this.$store.dispatch("addToCart",i).then((function(){e.$store.commit("LOADING",!1),e.$bus.$emit("message:push","".concat(t.title,"已加入購物車"),"success"),e.$store.dispatch("getCart")}))},clickHeart:function(t){var e,r;(null===(e=t.target)||void 0===e?void 0:e.classList.contains("far"))&&this.$store.commit("ADD_WISH",this.thisProduct.id),(null===(r=t.target)||void 0===r?void 0:r.classList.contains("fas"))&&this.$store.commit("REMOVE_WISH",this.thisProduct.id)},openSingleProudct:function(){this.$router.push({path:"/products/".concat(this.thisProduct.id)}).catch((function(){}))}}}),n=s,c=r("2877"),o=Object(c["a"])(n,i,a,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-3553e3c0.cad65b27.js.map