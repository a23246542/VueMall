<template>
    <div class="form-page text-center">
        <form class="form-signin"
        @submit.prevent ="signIn"
        >
            <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
            <label for="inputEmail" class="sr-only">電子信箱</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required
            autofocus
            v-model="user.username"
            >
            <label for="inputPassword" class="sr-only">密碼</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required
            v-model="user.password"
            >
            <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"> Remember me
            </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
        </form>
    </div>
    
</template>

<script>
// import instanceLogin from "@api/https";//失败
import {instanceLogin} from "../../api/https";
export default {
    name:'login',
    data() {
        return {
            user:{
                // username:'a23246542@gmail.com',
                email:'a23246542@gmail.com',
                password:'no512seed851',
            },
            expired:'',
            token:'',
            uuid:''
        }
    },
    methods:{
        signIn(){
            const vm = this;
            // let api = 'api/auth/login'
            instanceLogin.post('auth/login',vm.user)
            .then(res =>{
                // if(res.data.success){}//有响应的
                // @@catch是请求失败的
                console.log(res);
                // vm.expired = res.data.expired;//改存跨页面cookeies
                // vm.token = res.data.token;//改存跨页面cookies
                // vm.uuid = res.data.uuid;//原本process.env
                const token = res.data.token;
                const expired = res.data.expired;
                const uuid = res.data.uuid;

                document.cookie = `token=${token}; uuid=${uuid}; expires=${new Date(expired * 1000)}; path=/`;
                document.cookie = `uuid=${uuid}; path=/`;
                
            })
            .catch(err => {
                console.log(err);
            })
        }
        
    }
}
</script>

<style lang="scss" scoped>
    .form-page{
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
    }
    // @@加這個改這個 為什麼每次都要重整
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
    }
</style>


