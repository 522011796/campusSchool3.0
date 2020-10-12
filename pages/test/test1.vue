<template>
  <div class="container">
    <div>test1</div>
    <div>
      <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="handleCurrentChangeExp" @sizeChange="handleSizeChangeExp"></my-pagination>
    </div>
  </div>
</template>

<script>
  import MyPagination from "../../components/MyPagination";
  import mixins from "../../utils/mixins";
  export default {
    name: 'test1',
    mixins: [mixins],
    components: {MyPagination},
    data(){
      return {

      }
    },
    created() {
      this.init();
    },
    methods: {
      init(){
        this.total = 500;
      },
      handleCurrentChangeExp(data){
        this.page = data;
      },
      handleSizeChangeExp(data){
        this.num = data;
      }
    }
  }
</script>

<style scoped>
.container {

}
</style>
