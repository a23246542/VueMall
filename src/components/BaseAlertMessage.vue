<template>
    <div class="message-alert" id="message-alert">
        <div class="alert alert-dismissible"
        :class="'alert-' + item.status"
        v-for="(item, i) in messages" :key="i">
        {{ item.message }}
        <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
    </div>
</template>

<script>
export default {
    /**
     * @param message
     * @param
    */
    props:{
        // message:""
    },
    data() {
        return{
            messages:[{
                message:"訊息內容",
                status:'success',
                timeStamp:123
            }]
        }
    },
    methods: {
        removeMessage(){}
    }
}
</script>

<style lang="scss">

    #message-alert{
        position: fixed;
        z-index: 100;
        top: 40px;
        right: 30px;
    }


</style>