<template>
  <div
    id="dashStorage"
    class="dashStorage pt-4"
  >
    <div class="form-inline justify-content-end mb-4">
      <div class="custom-file">
        <input
          id="customFile"
          ref="storage"
          type="file"
          class="custom-file-input"
          @change="postStorage"
        >
        <label
          class="custom-file-label"
          for="customFile"
        >選擇圖片檔案</label>
      </div>
    </div>
    <div class="row">
      <div
        v-for="(item,index) in storages"
        :key="item.id"
        class="col-md-6 col-lg-4 mb-4"
      >
        <div class="card">
          <div class="card-body">
            <img
              class="img-fluid"
              :src="item.path"
            >
          </div>
          <div class="card-footer text-right">
            <button
              type="button"
              class="btn btn-outline-info btn-sm mr-3"
              @click="openModal('read',item,index)"
            >
              查看
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="openModal('delete',item,index)"
            >
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>
    <pagination
      :pages="pagination"
      @change-page="getStorages"
    />
    <DashModal
      id="dashStorageModal"
      ref="dashStorageModal"
      :title="title"
      :modal-use="modalUse"
      @delete="destoryStorage"
    >
      <template v-slot:delete>
        <div class="p-3">
          確定要刪除圖片嗎?
        </div>
      </template>
      <template v-slot:read>
        <div class="p-3">
          <p class="mb-1">
            圖片編號:
          </p>
          <p class="pl-3">
            {{ checkedItem.id }}
          </p>
          <p class="mb-1">
            圖片地址:
          </p>
          <p class="pl-3">
            {{ checkedItem.path }}
          </p>
        </div>
      </template>
    </DashModal>
  </div>
</template>
<script>
import pagination from '@/components/BasePagination.vue';
import DashModal from '@/components/admin/DashOtherModal.vue';

export default {
  components: {
    pagination,
    DashModal,
  },
  data() {
    return {
      storages: [],
      pagination: {},
      title: '',
      modalUse: '',
      // ##道理一樣
      checkedItem: {}, // 選中的對象,
      checkedindex: 0,

    };
  },
  created() {
    this.getStorages();
  },
  methods: {
    openModal(modalUse, item, index) {
      this.modalUse = modalUse;
      if (modalUse === 'read') {
        this.title = '檢視檔案';
      } else if (modalUse === 'delete') {
        this.title = '刪除檔案';
      }
      this.checkedItem = { ...item };
      this.checkedindex = index;

      // console.dir(this.$refs.dashStorageModal);
      // this.$refs.dashStorageModal.modal('show');
      $('#dashStorageModal').modal('show');
    },
    getStorages(page = 1, paged = 25, orderBy = 'created_at', sort = 'desc') {
      this.$store.commit('LOADING', true);
      // const api ="storage?page=${page}&paged=${paged}&orderBy=${orderBy}&sort=${sort}";//%%500報錯 符號錯誤
      const api = `storage?page=${page}&paged=${paged}&orderBy=${orderBy}&sort=${sort}`;
      this.$instanceAdmin.get(api)
        .then((res) => {
          this.storages = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.$store.commit('LOADING', false);
        });
    },
    postStorage() {
      this.$store.commit('LOADING', true);
      const api = 'storage';

      const uploadedFile = this.$refs.storage.files[0];
      const formData = new FormData();
      formData.append('file', uploadedFile);

      this.$instanceAdmin.post(api, formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
        .then((res) => {
          // this.getStorages();//較慢
          this.storages.unshift(res.data.data);
          this.$store.commit('LOADING', false);
        });
    },
    // destoryStorage(item,index){
    destoryStorage() {
      const { checkedItem, checkedindex } = this;// ##
      this.$store.commit('LOADING', true);
      const api = `storage/${checkedItem.id}`;
      this.$instanceAdmin.delete(api)
        .then(() => {
          this.storages.splice(checkedindex, 1);
          // this.$refs.dashStorageModal.modal('hide');//##jquery無效
          $('#dashStorageModal').modal('hide');
          this.$store.commit('LOADING', false);
        });
    },

  },
};
</script>

<style lang="scss">
#dashStorage{

    .card-body{
        // height: 300px;
        display: flex;
        // align-items: center;
        justify-content: center;
        img{
            height: 300px;
            object-fit: contain;
            // width: 100%;@#也可
        }
    }

    .custom-file{
        width:auto;

    }
    .custom-file-input{ //隱藏且覆蓋在上面
        cursor: pointer;
    }
    .custom-file-input:lang(en) ~ .custom-file-label::after{
        content:'上傳';
        right: auto;
        left: 0;
        border-left:0;//
        border-right:inherit;//##
        border-top-right-radius:0;
        border-bottom-right-radius:0;
    }
}

</style>
<style lang="scss" scoped>
    // .card-body{
    //     height: 300px;
    //     display: flex;
    //     align-items: center;

    //     img{
    //         // vertical-align: middle;
    //         // width: 300px;
    //         // height: 400px;
    //         width: 100%;
    //         object-fit: contain;
    //     }
    // }
</style>
