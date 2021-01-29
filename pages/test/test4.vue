<template>
  <div class="container test-layout">
    <div class="margin-top-5">
      <tab-group-button size="small" :options="options" @click="handleClickTab"></tab-group-button>
    </div>
    <div class="margin-top-5">
      <my-search-of-date-group size="medium"></my-search-of-date-group>
    </div>
  </div>
</template>

<script>
  import TabGroupButton from "../../components/utils/button/TabGroupButton";
  import MySearchOfDateGroup from "../../components/search/MySearchOfDateGroup";
  export default {
    layout: 'defaultFullScreen',
    name: 'test4',
    components: {TabGroupButton,MySearchOfDateGroup},
    data(){
      return {
        options: [
          {
            label: '全部',
            value: ''
          },
          {
            label: '待审核',
            value: '1'
          },
          {
            label: '未审核',
            value: '2'
          },
          {
            label: '全部通过',
            value: '3'
          }
        ]
      }
    },
    methods: {
      handleClickTab(data){
        console.log(data);
      }
    }
  }
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
</style>
