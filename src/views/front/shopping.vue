<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link :to="{name:'home'}" tag="a" class="navbar-brand">首頁</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link :to="{name:'購物清單'}" tag="a" class="nav-link">購物清單</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'收件資訊'}" class="nav-link">收件資訊</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'最後確認'}" class="nav-link">最後確認</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'訂單完成'}" class="nav-link">訂單完成</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
        <p>shopping-footer</p>
    </div>
</template>
<script>
export default {

};
</script>
