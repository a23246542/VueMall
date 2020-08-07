<template>
    <div>
        <div class="container mb-5">
            <div class="row">
                <div class="col-lg-8">
                    <CustomerForm/>
                </div>
                <div class="col-lg-4 d-none d-lg-block">
                    <div class="card">
                        訂單摘要
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CustomerForm from '@/components/CustomerForm';
export default {
    components:{
        CustomerForm
    },
    data() {
        return {}
    },
    computed: {
    
    },
    methods: {
    
    },
    created() {
       
    },
};
</script>
<style lang="scss" scoped>

</style>