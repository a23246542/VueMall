<template>
    <div>
        <!-- 可以获取到渲染进来的组件的name值 -->
        <p>{{ $route.name }}</p>
        <!-- <p>cart</p>
        <p>customform</p> -->
        <router-view name="Cart"></router-view>
        <router-view name="CustomerForm"></router-view>
    </div>
</template>

<script>

export default {

}
</script>

<style>

</style>