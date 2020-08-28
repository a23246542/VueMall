<template>
    <div class="message-alert" id="message-alert">
        <transition-group name="list" tag="p">
            <div class="alert alert-dismissible"
            :class="'alert-' + item.status"
            v-for="(item,index) in messages" :key="index+item.messages">
            {{ item.message }}
                <button type="button" class="close" @click="removeMessage(index)" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
  /**
     * @param message
     * @param
    */
  props: {
    // message:""
  },
  data() {
    return {
      messages: [
        // {
        //     message:"訊息內容",
        //     status:'success',
        //     id:123
        // },
        // {
        //     message:"訊息內容",
        //     status:'danger',
        //     id:4123
        // }
      ],
    };
  },
  created() {
    this.$bus.$on('message:push', (message, status = 'warning') => {
      this.updateMessage(message, status);
    });
  },
  methods: {
    updateMessage(message, status) {
      const timeStamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        id: timeStamp,
      });
      this.removeMessageTiming(timeStamp);
    },
    removeMessage(index) {
      this.messages.splice(index, 1);
    },
    removeMessageTiming(timeStampId) {
      setTimeout(() => {
        this.messages.forEach((item, index) => {
          if (item.id === timeStampId) {
            this.messages.splice(index, 1);
          }
        });
      }, 5000);
    },
  },
};
</script>

<style lang="scss">
    #message-alert{
        position: fixed;
        max-width: 30%;
        top: 40px;
        right: 30px;
        z-index: 100;
        // transition: all .5s;//##沒用

        //vue列表過度動畫
        .list-item {
            display: inline-block;
            margin-right: 10px;
        }
        .list-enter-active, .list-leave-active {
            transition: all 1s;
        }
        .list-enter, .list-leave-to
        /* .list-leave-active for below version 2.1.8 */ {
            opacity: 0;
            transform: translateY(-30px);
        }
    }

</style>
