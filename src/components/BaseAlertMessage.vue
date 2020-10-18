<template>
  <div
    id="message-alert"
    class="message-alert"
  >
    <transition-group
      name="list"
      tag="p"
    >
      <div
        v-for="(item,index) in messages"
        :key="item.id"
        class="alert alert-dismissible"
        :class="'alert-' + item.status"
      >
        {{ item.message }}
        <button
          type="button"
          class="close"
          aria-label="Close"
          @click="removeMessage(index)"
        >
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
      messages: [],
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

    //vue列表過度動畫
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to{
        opacity: 0;
        transform: translateY(-30px);
    }
  }

</style>
