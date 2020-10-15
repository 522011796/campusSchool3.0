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
      <div>
        <my-select class="width-100 pull-left margin-right-5" :sel-value="selModel" :options="options" :clearable="true" size="small" :group="group" @change="handleChangeExp" :remote-method="remoteMethodExp"></my-select>
        <my-input-button :options="options" class="pull-left" size="small" type="success" :plain="true" icon-style="fa fa-search" :show-select="true" :clearable="true" width-class="width: 240px;" @click="handleClick"></my-input-button>
        <div class="moon-clearfix"></div>
      </div>
      <div>
        <my-date-picker :sel-value="dateTime" size="small" :disabled="false" type="daterange" format="yyyy-MM-dd" :pickerOptions="pickerOptions" @change="handleChangeDate"></my-date-picker>
      </div>
      <div class="width-200">
        <my-block-tree :width="200" :sel-value="dataCollege" title-color="#909399" align="center" size="small" title-icon="fa fa-home" item-icon="fa fa-search" @click="handleItemClick"></my-block-tree>
      </div>
      <div class="width-200 margin-top-10">
        <my-block-list-tree :data="dataCollege" :width="200" :opr="true" icon-prefix="el-icon-caret-bottom" @click="handleTreeClick" @edit-click="handleTreeClick"></my-block-list-tree>
      </div>
      <div>
        <my-sex-select sel-value="1" size="small" @change="handleTreeClick" class="width-100"></my-sex-select>
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
  import MyInputButton from "../../components/search/MyInputButton";
  import MyDatePicker from "../../components/MyDatePicker";
  import MyBlockTree from "../../components/MyBlockTree";
  import MyBlockListTree from "../../components/tree/MyBlockListTree";
  import MySexSelect from "../../components/utils/MySexSelect";
  import mixins from "../../utils/mixins";
  export default {
    name: 'test1',
    mixins: [mixins],
    components: {MyPagination, MySelect, MyRadio, MyCheck, MyTree, MySex, MyInputButton, MyDatePicker, MyBlockTree, MyBlockListTree, MySexSelect},
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
        checkModelCustom: '',
        dateTime: '',
        pickerOptions: {
          disabledDate(time) {
            //return time.getTime() > Date.now();
            //return time.getFullYear() < '2019' || time.getFullYear() > new Date().getFullYear()
            return time.getTime() < new Date(2020, 9, 1) || time.getTime() > new Date(2020, 10, 10);
          }
        },
        dataCollege: [{
          label: '学院11234124124',
          id: '1',
          show: false,
          children: [{
            label: '专业',
            id: '11',
            unit: 1,
            show: false,
            children: [{
              label: '一年级',
              id: '12',
              unit: 2,
              show: false,
              children: [{
                label: '班级1',
                id: '13',
                unit: 3,
                show: false,
              },{
                label: '班级2',
                id: '14',
                unit: 3,
                show: false,
                disabled: true,
                children: [{
                  label: '1001',
                  id: '15',
                  unit: 3,
                },{
                  label: '1002',
                  id: '16',
                  unit: 3,
                  disabled: true
                }]
              }]
            },{
              label: '二年级',
              id: '15',
              unit: 2,
              show: false,
            }]
          }]
        },{
          label: '学院2',
          id: '2',
          show: false,
          children: [{
            label: '专业2',
            id: '21',
            unit: 1,
            show: false,
            children: [{
              label: '一年级',
              id: '22',
              unit: 2,
              show: false,
              children: [{
                label: '班级1',
                id: '23',
                unit: 3,
                show: false,
              },{
                label: '班级2',
                id: '24',
                unit: 3,
                disabled: true,
                show: false,
              }]
            },{
              label: '二年级',
              id: '25',
              unit: 2,
              show: false,
            }]
          }]
        }]
      }
    },
    created() {
      this.init();
      if (this.group){
        this.getSelectGroup();
      }

      if (!this.group){
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
      handleClick(data){
        console.log(1,data,this.selModel, this.dateTime);
      },
      handleChangeDate(data){
        console.log(2,data);
        this.dateTime = data;
      },
      handleItemClick(data){
        console.log(3,data);
      },
      handleTreeClick(data){
        console.log(5,data);
      },
      getSelect(){
        setTimeout(() => {
          this.options = [];
          for (let i = 0; i < 10; i++){
            if (i % 2 == 0){
              this.options.push({
                value: ""+i,
                label: '项目' + i
              });
            }else {
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
