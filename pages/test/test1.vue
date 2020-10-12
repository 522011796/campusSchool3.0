<template>
  <div class="container">
    <div>test1</div>
    <div>
      <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="handleCurrentChangeExp" @sizeChange="handleSizeChangeExp"></my-pagination>
      <div>
        <my-select class="pull-left" :sel-value="selModel" :options="options" :clearable="true" :disabled="false" :filterable="true" @change="handleChangeExp"></my-select>
        <button class="pull-left" type="button" @click="changeSelect">set</button>
        <div class="moon-clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import MyPagination from "../../components/MyPagination";
  import MySelect from "../../components/MySelect";
  import mixins from "../../utils/mixins";
  export default {
    name: 'test1',
    mixins: [mixins],
    components: {MyPagination, MySelect},
    data(){
      return {
        options: [],
        selModel: ''
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
      },
      handleChangeExp(data){
        this.selModel = data;
      },
      changeSelect(){
        this.getSelect("2");
      },
      getSelect(){
        setTimeout(() => {
          this.options = [];
          for (let i = 0; i < 10; i++){
            if (i % 2 == 0){
              console.log(1);
              this.options.push({
                value: ""+i,
                label: '项目' + i
              });
            }else {
              console.log(2);
              this.options.push({
                value: ""+i,
                label: '项目' + i,
                disabled: true
              });
            }
          }
          this.selModel = "2";
        },2000);
      }
    }
  }
</script>

<style scoped>
.container {

}
</style>
