<template>
  <div
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog"
      role="document"
      :class="{
        'modal-lg':modalUse==='update',
        'modal-md':(modalUse==='delete'||modalUse==='read')
      }"
    >
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5
            id="exampleModalLabel"
            class="modal-title"
          >
            <span>{{ title }}</span>
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <template v-if="modalUse==='update'">
            <slot name="update" />
          </template>
          <template v-if="modalUse==='delete'">
            <slot name="delete" />
          </template>
          <template v-if="modalUse==='read'">
            <slot name="read" />
          </template>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-dismiss="modal"
          >
            {{ modalUse==='read'?'關閉':'取消' }}
          </button>
          <button
            v-if="modalUse!=='read'"
            type="button"
            class="btn"
            :class="{
              'btn-primary':modalUse==='update',
              'btn-danger':modalUse==='delete'
            }"
            @click="sureBtn"
          >
            {{ modalUse==='update'? '確認':'確認刪除' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    // 看是新增還編輯決定出現哪一個
    modalUse: {
      type: String,
      required: true,
    },
    // 暫時的單一項目可能是空的或是編輯舊的
  },
  methods: {
    sureBtn() {
      if (this.modalUse === 'update') {
        this.$emit('submit');
      } else if (this.modalUse === 'delete') {
        this.$emit('delete');
      }
    },
  },
};
</script>

<style>

</style>
