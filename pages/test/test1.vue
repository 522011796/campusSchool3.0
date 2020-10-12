<template>
  <div class="container">
    <div>test1</div>
    <div>
      <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="handleCurrentChangeExp" @sizeChange="handleSizeChangeExp"></my-pagination>
      <div>
        <my-select class="pull-left" :sel-value="selModel" :options="options" :clearable="true" :disabled="false" :filterable="true" :remote="true" :loading="loading" :group="group" @change="handleChangeExp" :remote-method="remoteMethodExp"></my-select>
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
        selModel: '',
        loading: false,
        group: true
      }
    },
    created() {
      this.init();
      if (this.group){
        console.log(21);
        this.getSelectGroup();
      }

      if (!this.group){
        console.log(12);
        this.getSelect();
      }
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
        console.log(11111,data);
        this.selModel = data;
      },
      remoteMethodExp(query){
        this.loading = true;
        if (query !== '') {
          setTimeout(() => {
            this.loading = false;
            this.options = this.options.filter(item => {
              return item.label.indexOf(query) > -1;
            });
          }, 200);
        }else {
          this.loading = false;
          this.getSelect();
        }
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
          //this.selModel = "2";
        },100);
      },
      getSelectGroup(){
        setTimeout(() => {
          this.options = [];
          for (let i = 0; i < 2; i++){
            this.options.push({
              label: '分组' + i,
              options: []
            });
            for (let j = 0; j < 2; j++){
              this.options[i].options.push({
                label: '项目' + j,
                value: '' + j
              });
            }
          }
          //this.selModel = "1";
        },100);
      }
    }
  }
</script>

<style scoped>
.container {

}
</style>
