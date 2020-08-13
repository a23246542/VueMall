<template>
    <div>
        <h2>
            產品內頁
            {{product.title}}
        </h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id:'',
            product:{
                imageUrl:[]
            }
        }
    },
    created() {
        this.getSingleProduct();
    },
    methods:{
        getSingleProduct(){
            this.id = this.$route.params.productId;

            this.$store.commit('LOADING',true);
            const api = `ec/product/${this.id}`;
            this.$instanceCus.get(api)
            .then((res)=>{
                this.$store.commit('LOADING',false);
                this.product = res.data.data;
            })
        }
    }
}
</script>

<style>

</style>