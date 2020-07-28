<template>
    <div class="my-5 row justify-content-center">
        <!-- <table class="table">
            <thead>
                <th></th>
                <th>品名</th>
                <th>數量</th>
                <th>單價</th>
            </thead>
            <tbody>
                <tr v-for="item in cart.carts">
                <td class="align-middle">
                    <button type="button" class="btn btn-outline-danger btn-sm">
                    <i class="far fa-trash-alt"></i>
                    </button>
                </td>
                <td class="align-middle">
                    {{ item.product.title }}
                </td>
                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ item.final_total }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <td colspan="3" class="text-right">總計</td>
                <td class="text-right">{{ cart.total }}</td>
                </tr>
                <tr>
                <td colspan="3" class="text-right text-success">折扣價</td>
                <td class="text-right text-success">{{ cart.final_total }}</td>
                </tr>
            </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm">
        <input type="text" class="form-control" placeholder="請輸入優惠碼">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
            套用優惠碼
            </button>
        </div>
        </div> -->

        
        <form class="col-md-6">
            <div class="form-group">
            <label for="useremail">Email</label>
            <input type="email" class="form-control" name="email" id="useremail"
                v-model="form.user.email" placeholder="請輸入 Email" required>
            <span class="text-danger"></span>
            </div>
        
            <div class="form-group">
            <label for="username">收件人姓名</label>
            <input type="text" class="form-control" name="name" id="username"
                v-model="form.user.name" placeholder="輸入姓名">
            <span class="text-danger"></span>
            </div>
        
            <div class="form-group">
            <label for="usertel">收件人電話</label>
            <input type="tel" class="form-control" id="usertel" v-model="form.user.tel" placeholder="請輸入電話">
            </div>
        
            <div class="form-group">
            <label for="useraddress">收件人地址</label>
            <input type="text" class="form-control" name="address" id="useraddress" v-model="form.user.address"
                placeholder="請輸入地址">
            <span class="text-danger">地址欄位不得留空</span>
            </div>
        
            <div class="form-group">
            <label for="comment">留言</label>
            <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
            </div>
            <div class="text-right">
            <button class="btn btn-danger">送出訂單</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return{
            form:{
                user:{
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                }
            }
        }
    }
}
</script>

<style>

</style>