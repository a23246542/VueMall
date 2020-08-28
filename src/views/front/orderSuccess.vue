<template>
    <div class="container-fluid">
        <div class="row no-gutters">
            <div class="col-6 d-flex justify-content-center align-items-center">
                <div class="content">
                    <h2>訂單已建立</h2>
                    <a>去付款</a>
                    <router-link :to="{name:'products'}">繼續選購</router-link>
                </div>
            </div>
            <div class="col-6">
                <div class="bg-cover"
                    style="min-height:calc(100vh - 72px);background-image: url(https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
