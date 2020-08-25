<template>
  <nav aria-label="Page navigation"
  >
    <ul class="pagination justify-content-center">
      <li class="page-item"
      :class="{'disabled':pages.current_page===1}"
      >
        <a class="page-link" href="#" aria-label="Previous"
        @click.prevent="emitPage(pages.current_page-1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" 
      v-for="(item,index) in pages.total_pages" :key="index"
      :class="{'active':item === pages.current_page}"
      >
          <a class="page-link" href="#"
          @click.prevent="emitPage(item)"
          >{{item}}</a>
      </li>
      <li class="page-item"
      :class="{'disabled':pages.current_page === pages.total_pages}">
        <a class="page-link" href="#" aria-label="Next"
        @click.prevent="emitPage(pages.current_page+1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
</nav>
</template>

<script>
export default {
    props:{
        pages:{
            type:Object,
            // default:"1"
        },
    },
    data() {
        return {
            //%%不能跟prop重複
        }
    },
    methods:{
        // changPage(){//%%
        emitPage(page){
            this.$emit("change-page",page);
        }
    }
}
</script>

<style>

</style>