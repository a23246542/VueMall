<template>
  <!-- ##還未使用 -->
  <div>
    <ul>
      <li v-for="item in obj.sort" :key="item">
        {{ item }}
        <ul v-if="obj.map[item].sort[0]">
          <li v-for="item2 in obj.map[item].sort" :key="item2">
            {{ item2 }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: [
        '戶外家具>桌子',
        '戶外家具>椅子',
        '寢具系列>地墊',
        '帳篷系列',
      ],
      obj: {
        sort: ['戶外家具', '寢具', '帳篷'],
        map: {
          戶外家具: {
            sort: ['桌子', '椅子'],
          },
          寢具: {
            sort: ['地墊'],
          },
          帳篷: {
            sort: [''],
          },
        },
      },
    };
  },
  computed: {
  //   typeList() {
  //     const obj = {
  //       sort: [],
  //       map: {},
  //     };
  //     this.category.forEach((item, index) => {
  //       // if(obj.map[item])
  //     });
  //   },
  },
};
</script>

<style>

</style>
