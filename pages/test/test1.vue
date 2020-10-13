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
      <div>
        <div>
          <my-radio :sel-value="radioModel" label="1" :border="true" :size="size" @change="handleChangeRadio">选项一</my-radio>
          <my-radio :sel-value="radioModel" label="2" :disabled="true" @change="handleChangeRadio">选项一</my-radio>
        </div>
        <div>
          <my-radio :sel-value="radioModel" :group="true" :options="options" :disabled="false" :size="size" :border="true" :button="true" text-color="#fff" fill="#f00" @change="handleChangeRadio"></my-radio>
        </div>
      </div>
      <div>
        <my-check :sel-value="checkModelOnly" :disabled="false" :border="true" size="small" @change="handleChangeCheckExp">备选项</my-check>
        <my-check :sel-value="checkModelCustom" :true-label="1" :false-label="0" :disabled="false" :border="true" size="small" @change="handleChangeCheckCustomExp">备选项</my-check>
        <div>
          <my-check :sel-value="checkModel" :group="true" :options="options" :button="false" text-color="#fff" fill="#f00" size="mini" @change="handleChangeCheckArrExp"></my-check>
        </div>
      </div>
      <div>
        <div class="pull-left" style="width: 200px">
          <my-tree :show-type="1" :show-checkbox="false" :show-child-type="4" @node-click="handleNodeClickExp" @check-change="handleCheckChangeExp"></my-tree>
          </div>
        <div class="pull-left" style="width: 200px">
          <my-tree :show-type="2" :show-checkbox="true" :show-child-type="1" @node-click="handleNodeClickExp" @check-change="handleCheckChangeExp"></my-tree>
        </div>
        <div class="pull-left" style="width: 200px">
          <my-tree :show-type="3" :show-checkbox="true" :show-child-type="4" @node-click="handleNodeClickExp" @check-change="handleCheckChangeExp"></my-tree>
        </div>
        <div class="moon-clearfix"></div>
      </div>
      <div>
        <my-sex sex="1" size="small" effect="plain" type="success"></my-sex>
        <my-sex sex="1" size="small" type="success"></my-sex>
        <my-sex sex="0" size="mini" type="info"></my-sex>
        <my-sex sex="2" type="warning"></my-sex>
        <my-sex sex="2" tag="text" class="color-danger"></my-sex>
        <my-sex sex="2" type="danger" effect="dark" size="small"></my-sex>
      </div>
    </div>
  </div>
</template>

<script>
  import MyPagination from "../../components/MyPagination";
  import MySelect from "../../components/MySelect";
  import MyRadio from "../../components/MyRadio";
  import MyCheck from "../../components/MyCheck";
  import MyTree from "../../components/MyTree";
  import MySex from "../../components/MySex";
  import mixins from "../../utils/mixins";
  export default {
    name: 'test1',
    mixins: [mixins],
    components: {MyPagination, MySelect, MyRadio, MyCheck, MyTree, MySex},
    data(){
      return {
        options: [],
        selModel: '',
        loading: false,
        group: false,
        radioModel: '',
        radioLabel: '1',
        size: 'mini',
        checkModel: ["0", "2"],
        checkModelOnly: true,
        checkModelCustom: ''
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
        this.selModel = data;
      },
      handleNodeClickExp(data){
        console.log(data);
      },
      handleCheckChangeExp(data, checked, indeterminate){
        console.log(data, checked, indeterminate);
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
      handleChangeRadio(data){
        console.log(data);
        this.radioModel = data;
      },
      handleChangeCheckExp(data){
        console.log(data);
        this.checkModelOnly = data;
      },
      handleChangeCheckCustomExp(data){
        console.log(data);
        this.checkModelCustom = data;
      },
      handleChangeCheckArrExp(data){
        console.log(data);
        this.checkModel = data;
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
