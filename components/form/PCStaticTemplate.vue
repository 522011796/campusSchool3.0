<template>
  <div>
    <div class="form-set-main">
      <div class="pull-right form-set-right padding-tb-10 padding-lr-10" style="overflow-y: auto" :style="drawHeight6">
        <template v-if="settingType == ''">
          <div class="text-center" style="margin-top: 20%;">
            <span class="color-muted font-size-15">
              <i class="fa fa-info-circle"></i>
              {{$t("请选择需要设置的模块")}}
            </span>
          </div>
        </template>

        <template v-else>
          <div class="color-sub-grand font-size-12 font-bold">
            <span><i class="fa fa-info-circle color-muted margin-right-5"></i>{{$t("字段名称")}}</span>
          </div>
          <div class="line-height"></div>
          <div class="color-muted font-size-12" v-if="settingType != 'table'">
            <div class="color-sub-grand">
              <span>{{$t("字段别名")}}</span>
            </div>
            <div class="margin-top-5">
              <el-input v-if="settingType == 'card'" size="small" class="width-300" v-model="form.cardTitle" @input="inputCard($event, settingColValue)"></el-input>
              <el-input v-if="settingType == 'search'" size="small" class="width-300" v-model="form.searchStaticTitle"></el-input>
              <el-input v-if="settingType == 'bar'" size="small" class="width-300" v-model="form.chartParam"></el-input>
              <el-input v-if="settingType == 'circle'" size="small" class="width-300" v-model="form.circleParams"></el-input>
            </div>
          </div>
          <div v-if="settingType == 'search'" class="color-sub-grand font-size-12 margin-top-10">
            <div>
              <span>{{$t("筛选类型")}}</span>
            </div>
            <div class="margin-top-5">
              <my-select class="layout-item" :width-style="300" size="small" :placeholder="$t('筛选条件')" :sel-value="searchSetStaticForm" :options="searchStaticFormOptions" :clearable="false" @change="handleSearchChange($event,1)"></my-select>
            </div>
          </div>
          <div v-if="settingType != 'search'" class="color-sub-grand font-size-12 margin-top-10">
            <div>
              <span>{{$t("选择关联表单")}}</span>
            </div>
            <div class="margin-top-5">
              <el-select v-model="form.joinFormValue" @change="handleJoinFormValue" size="small" class="width-300" placeholder="请选择">
                <el-option
                  v-for="item in joinFormOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <template v-if="settingType != 'bar' && settingType != 'table' && settingType != 'search'">
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("选择该表单字段")}}</span>
              </div>
              <div class="margin-top-5">
                <el-select v-model="form.joinFormParamsValue" @change="handleJoinFormParamsChange" size="small" class="width-300" placeholder="请选择">
                  <el-option
                    v-for="item in joinFormParamsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("该字段值的聚合规则")}}</span>
              </div>
              <div class="margin-top-5">
                <el-select v-model="form.joinFormJoinValue" @change="handleJoinFormChange" size="small" class="width-300" placeholder="请选择">
                  <el-option
                    v-for="item in joinFormJoinOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </template>
          <template v-if="settingType == 'bar' && settingType != 'search'">
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("横轴(单选)")}}</span>
              </div>
              <div class="margin-top-5">
                <el-select v-model="form.joinFormXValue" @change="handleXChange" size="small" class="width-300" placeholder="请选择">
                  <el-option
                    v-for="item in joinFormParamsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("纵轴(多选)")}}</span>
              </div>
              <div class="margin-top-5">
                <el-select v-model="form.joinFormYValue" multiple @change="handleYChange" size="small" class="width-300" placeholder="请选择">
                  <el-option
                    v-for="item in joinFormParamsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </template>
          <template v-if="settingType == 'table' && settingType != 'search'">
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("选择该表单字段(单选)")}}</span>
              </div>
              <div class="margin-top-5">
                <el-row :gutter="4" v-for="(item, index) in tableTitleColData" :key="index" class="margin-bottom-5">
                  <el-col :span="12">
                    <my-select :sel-value="item.label" :options="joinFormParamsOptions" :placeholder="$t('表单字段')" size="small" @change="handleSelectLabel($event, item, index)"></my-select>
                  </el-col>
                  <el-col :span="8">
                    <my-select :sel-value="item.value" :options="joinFormJoinOptions" :placeholder="$t('请选择')" size="small" @change="handleSelectValue($event, item, index)"></my-select>
                  </el-col>
                  <el-col :span="4">
                    <div class="margin-top-10">
                      <i class="fa fa-plus-circle color-grand margin-right-5" style="font-size: 14px" @click="addTableCol($event, index)"></i>
                      <i v-if="index > 0" class="fa fa-minus-circle color-danger" style="font-size: 14px" @click="minsTableCol($event, index)"></i>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>
          <div v-if="settingType != 'search'" class="color-sub-grand font-size-12 margin-top-10">
            <div>
              <span>{{$t("过滤条件")}}</span>
            </div>
            <div class="margin-top-5">
              <el-select v-model="form.joinFormFliterValue" @change="handleFliterChange" size="small" class="width-300" filterable placeholder="请选择">
                <el-option
                  v-for="item in searchStaticFormOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
        </template>
      </div>
      <div class="form-set-left detail-card font-size-12 padding-lr-10 padding-tb-10" style="overflow-y: auto" :style="drawHeight6">
        <div class="margin-bottom-5 layout-inline">
          <span class="layout-item">
            <my-select disabled class="layout-item width-150" size="small" :placeholder="form.searchStaticTitle" :sel-value="searchStaticForm" :options="searchStaticFormOptions" :clearable="false" @change="handleSearchChange($event, 2)"></my-select>
          </span>
          <span class="layout-item">
            <i class="fa fa-cog color-grand" style="font-size: 14px" @click="settingSearchDataInfo($event)"></i>
          </span>
        </div>
        <div style="height: 140px">
          <el-row :gutter="8">
            <el-col :span="6">
              <el-card :class="settingType == 'card' && settingColValue == 1 ? 'sel-card-active' : ''" :body-style="{padding: '10px'}" style="height: 140px" @click.native="settingCardDataInfo($event,1)">
                <div slot="header" class="color-muted">
                  <span><i class="fa fa-line-chart"></i></span>
                  <span>{{form.cardParam1}}</span>
                </div>
                <div class="color-muted text-center" style="position: relative">
                  <div class="form-card-content">
                    {{form.cardValue1 == '' ? '显示内容' : form.cardValue1.n}}
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :class="settingType == 'card' && settingColValue == 2 ? 'sel-card-active' : ''" :body-style="{padding: '10px'}" style="height: 140px" @click.native="settingCardDataInfo($event,2)">
                <div slot="header" class="color-muted">
                  <span><i class="fa fa-line-chart"></i></span>
                  <span>{{form.cardParam2}}</span>
                </div>
                <div class="color-muted text-center" style="position: relative">
                  <div class="form-card-content">
                    {{form.cardValue2 == '' ? '显示内容' : form.cardValue2.n}}
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :class="settingType == 'card' && settingColValue == 3 ? 'sel-card-active' : ''" :body-style="{padding: '10px'}" style="height: 140px" @click.native="settingCardDataInfo($event,3)">
                <div slot="header" class="color-muted">
                  <span><i class="fa fa-line-chart"></i></span>
                  <span>{{form.cardParam3}}</span>
                </div>
                <div class="color-muted text-center" style="position: relative">
                  <div class="form-card-content">
                    {{form.cardValue3 == '' ? '显示内容' : form.cardValue3.n}}
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :class="settingType == 'card' && settingColValue == 4 ? 'sel-card-active' : ''" :body-style="{padding: '10px'}" style="height: 140px" @click.native="settingCardDataInfo($event,4)">
                <div slot="header" class="color-muted">
                  <span><i class="fa fa-line-chart"></i></span>
                  <span>{{form.cardParam4}}</span>
                </div>
                <div class="color-muted text-center" style="position: relative">
                  <div class="form-card-content">
                    {{form.cardValue4 == '' ? '显示内容' : form.cardValue4.n}}
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>

        <div class="margin-top-20">
          <div style="height: 300px">
            <el-row :gutter="8">
              <el-col :span="18">
                <el-card :class="settingType == 'bar' ? 'sel-card-active' : ''" :body-style="{padding: '10px'}" style="height: 300px" @click.native="settingBarDataInfo($event)">
                  <div slot="header" class="color-muted">
                    <span><i class="fa fa-line-chart"></i></span>
                    <span>{{form.chartParam}}</span>
                  </div>
                  <div class="color-muted text-center" style="position: relative;height: 260px">
                    <bar-chart chart-id="barId" :data-legned="barDataLegned" :data-key="barDataKey" :data="barData"></bar-chart>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card :class="settingType == 'circle' ? 'sel-card-active' : ''" :body-style="{padding: '10px'}" style="height: 300px" @click.native="settingCircleDataInfo($event)">
                  <div slot="header" class="color-muted">
                    <span><i class="fa fa-line-chart"></i></span>
                    <span>{{form.circleParams}}</span>
                  </div>
                  <div class="color-muted text-center" style="position: relative">
                    <div class="margin-top-20">
                      <el-progress type="dashboard" :width="160" :percentage="percentage"></el-progress>

                      <div class="text-center color-muted" style="position: relative; top: -10px;">
<!--                        <div>-->
<!--                          <span>{{percentageText}}</span>-->
<!--                        </div>-->
                        <div>
                          <span>{{percentageValue}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>

        <div class="margin-top-20" :class="settingType == 'table' ? 'sel-card-active' : ''">
          <el-table
            @click.native="settingTableDataInfo($event)"
            ref="refTable"
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            row-key="id"
            style="width: 100%">
            <el-table-column
              v-for="(item, index) in tableTitleColData" :key="index"
              align="center"
              :label="item.title == '' ? '字段' : item.title">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{item.value == '' ? '内容' : item.value}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span>{{item.valueText == '' ? '内容' : item.valueText}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>

          </el-table>
        </div>
      </div>
      <div class="moon-clearfix"></div>
    </div>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import BarChart from "~/components/charts/BarChart";
  import {common} from "~/utils/api/url";

  export default {
    name: 'pcStaticTemplate',
    components: {BarChart},
    mixins: [mixins],
    props: {

    },
    computed: {

    },
    data() {
      return {
        settingType: '',
        settingColValue: '',
        searchStaticTitle: this.$t("筛选条件"),
        searchStaticForm: '',
        searchSetStaticForm: '',
        searchStaticFormOptions: [{
          label: this.$t("年"),
          value: 'year'
        },{
          label: this.$t("月"),
          value: 'month'
        },{
          label: this.$t("日"),
          value: 'day'
        },{
          label: this.$t("部门"),
          value: 'dept'
        },{
          label: this.$t("院系"),
          value: 'college'
        },],
        form: {
          searchStaticTitle: '筛选条件',
          cardParam1: '字段名称',
          cardParam2: '字段名称',
          cardParam3: '字段名称',
          cardParam4: '字段名称',
          cardValue1: '',
          cardValue1Text: '',
          cardValue2: '',
          cardValue2Text: '',
          cardValue3: '',
          cardValue3Text: '',
          cardValue4: '',
          cardValue4Text: '',
          cardForm1: '',
          cardForm2: '',
          cardForm3: '',
          cardForm4: '',
          cardJoin1: '',
          cardJoin2: '',
          cardJoin3: '',
          cardJoin4: '',
          cardFliter1: '',
          cardFliter2: '',
          cardFliter3: '',
          cardFliter4: '',
          chartParam: '字段名称',
          chartValue: '',
          chartValueText: '',
          chartForm: '',
          chartFliter: '',
          chartXdata: '',
          chartYdata: '',
          chartYdataObj: '',
          cardTitle: '',
          cardValue: '',
          circleParams: '字段名称',
          circleValue: 0,
          circleValueText: '',
          circleForm: '',
          circleFliter: '',
          circleJoin: '',
          tableForm: '',
          tableValue: '',
          tableValueText: '',
          tableFliter: '',
          joinFormValue: '',
          joinFormParamsValue: '',
          joinFormParamsValueObj: {},
          joinFormFliterValue: '',
          joinFormJoinValue: '',
          joinFormXValue: '',
          joinFormYValue: '',
        },
        joinFormValueOptions: [],
        joinFormParamsOptions: [],
        joinFormParamsOptionsArray: [],
        joinFormFliterOptions: [],
        joinFormXOptions: [],
        joinFormYOptions: [],
        joinFormOptions: [],
        formTableData: [{
          label: '',
          value: '0'
        }],
        formTableParamsOptions: [],
        joinFormJoinOptions: [{
          value: '0',
          label: this.$t("不聚合")
        },{
          value: '1',
          label: this.$t("求和")
        },{
          value: '2',
          label: this.$t("平均值")
        },{
          value: '3',
          label: this.$t("最大值")
        },{
          value: '4',
          label: this.$t("最小值")
        },{
          value: '5',
          label: this.$t("计数")
        },{
          value: '6',
          label: this.$t("计数(去重复)")
        }],
        tableData: ["1"],
        tableTitleColData: [
          {title: '', label: '', value: '', valueText: ''},
        ],
        percentage: 0,
        percentageText: '内容',
        percentageValue: '0%',
        barDataLegned: ['类型1','类型2','类型3'],
        barDataKey: ['字段1','字段2','字段3'],
        barData: [
          {
            name: '类型1',
            type: 'bar',
            barWidth:15,
            data:[10,10,10]
          },
          {
            name: '类型2',
            type: 'bar',
            barWidth:15,
            data:[10,10,10]
          },
          {
            name: '类型3',
            type: 'bar',
            barWidth:15,
            data:[10,10,10]
          }
        ]
      }
    },
    created() {
      this.init();
    },
    methods: {
      init(){
        //server_list_list2
        let params = {

        };
        this.$axios.get(common.server_list_list2,{params: params}).then(res => {
          if (res.data.code == 200){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                value: res.data.data[i].id,
                label: res.data.data[i].form_name
              });
            }
            this.joinFormOptions = array;
          }
        });
      },
      getFiledInfo(formId){
        //server_list_list2
        let params = {
          formId: formId
        };
        this.$axios.get(common.server_list_field,{params: params}).then(res => {
          if (res.data.code == 200){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                value: i,
                label: res.data.data[i].n
              });
            }
            this.joinFormParamsOptions = array;
            this.joinFormParamsOptionsArray = res.data.data;
          }
        });
      },
      settingCardDataInfo(event, value){
        this.settingType = 'card';
        if (value == 1){
          this.form.cardTitle = this.form.cardParam1;
          this.form.joinFormParamsValue = this.form.cardValue1Text == '' ? '' : this.form.cardValue1Text;
          this.form.joinFormValue = this.form.cardForm1;
          this.form.joinFormJoinValue = this.form.cardJoin1;
          this.form.joinFormFliterValue = this.form.cardFliter1;
        }else if (value == 2){
          this.form.cardTitle = this.form.cardParam2;
          this.form.joinFormParamsValue = this.form.cardValue2Text == '' ? '' : this.form.cardValue2Text;
          this.form.joinFormValue = this.form.cardForm2;
          this.form.joinFormJoinValue = this.form.cardJoin2;
          this.form.joinFormFliterValue = this.form.cardFliter2;
        }else if (value == 3){
          this.form.cardTitle = this.form.cardParam3;
          this.form.joinFormParamsValue = this.form.cardValue3Text == '' ? '' : this.form.cardValue3Text;
          this.form.joinFormValue = this.form.cardForm3;
          this.form.joinFormJoinValue = this.form.cardJoin3;
          this.form.joinFormFliterValue = this.form.cardFliter3;
        }else if (value == 4){
          this.form.cardTitle = this.form.cardParam4;
          this.form.joinFormParamsValue = this.form.cardValue4Text == '' ? '' : this.form.cardValue4Text;
          this.form.joinFormValue = this.form.cardForm4;
          this.form.joinFormJoinValue = this.form.cardJoin4;
          this.form.joinFormFliterValue = this.form.cardFliter4;
        }
        this.settingColValue = value;
      },
      settingBarDataInfo(event){
        this.settingType = 'bar';
        this.settingColValue = '';

        this.form.joinFormValue = this.form.chartForm;
        this.form.joinFormFliterValue = this.form.chartFliter;
        this.form.joinFormXValue = this.form.chartXdata;
        this.form.joinFormYValue = this.form.chartYdata;
      },
      settingCircleDataInfo(event){
        this.settingType = 'circle';
        this.settingColValue = '';
        this.form.circleParams = this.form.circleParams;
        this.form.joinFormParamsValue = this.form.circleValueText == '' ? '' : this.form.circleValueText;
        this.form.joinFormValue = this.form.circleForm;
        this.form.joinFormJoinValue = this.form.circleJoin;
        this.form.joinFormFliterValue = this.form.circleFliter;
        this.percentage = 0;
        this.percentageValue = '0%';
      },
      settingTableDataInfo(event){
        this.settingType = 'table';
        this.settingColValue = '';
        this.form.joinFormValue = this.form.tableForm;
        this.form.joinFormFliterValue = this.form.tableFliter;
      },
      settingSearchDataInfo(event){
        this.settingType = 'search';
        this.settingColValue = '';
      },
      addTableCol(event, index){
        let obj = {
          title: '',
          label: '',
          value: ''
        };
        this.tableTitleColData.splice(index+1,0, obj);
      },
      minsTableCol(event, index){
        this.tableTitleColData.splice(index,1);
      },
      inputCard(event, value){
        if (value == 1){
          this.form.cardParam1 = this.form.cardTitle;
        }else if (value == 2){
          this.form.cardParam2 = this.form.cardTitle;
        }else if (value == 3){
          this.form.cardParam3 = this.form.cardTitle;
        }else if (value == 4){
          this.form.cardParam4 = this.form.cardTitle;
        }
      },
      handleSearchChange(data, type){
        if(type == 1){
          this.searchSetStaticForm = data;
          this.searchStaticForm = data;
        }else if(type == 2){
          this.searchStaticForm = data;
        }
      },
      handleSelect(event, index){

      },
      handleSelectLabel(event, item, index){
        item.label = event;
        this.$set(this.tableTitleColData[index], 'title', this.joinFormParamsOptionsArray[index].n);
      },
      handleJoinFormParamsChange(data){
        let obj = this.joinFormParamsOptionsArray[data];
        this.form.joinFormParamsValue = data;
        this.form.joinFormParamsValueObj = obj;
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardValue1 = obj;
            this.form.cardValue1Text = data;
          }else if (this.settingColValue == 2){
            this.form.cardValue2 = obj;
            this.form.cardValue2Text = data;
          }else if (this.settingColValue == 3){
            this.form.cardValue3 = obj;
            this.form.cardValue3Text = data;
          }else if (this.settingColValue == 4){
            this.form.cardValue4 = obj;
            this.form.cardValue4Text = data;
          }
        }else if (this.settingType == 'circle'){
          this.form.circleValue = obj;
          this.form.circleValueText = data;
          this.percentage = 0;
        }
      },
      handleJoinFormValue(data){
        this.form.joinFormValue = data;
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardForm1 = data;
          }else if (this.settingColValue == 2){
            this.form.cardForm2 = data;
          }else if (this.settingColValue == 3){
            this.form.cardForm3 = data;
          }else if (this.settingColValue == 4){
            this.form.cardForm4 = data;
          }
        }else if (this.settingType == 'circle'){
          this.form.circleForm = data;
        }else if (this.settingType == 'table'){
          this.form.tableForm = data;
        }else if (this.settingType == 'bar'){
          this.form.chartForm = data;
        }
        this.getFiledInfo(data);
      },
      handleXChange(data){
        this.form.chartXdata = data;
      },
      handleYChange(data){
        let array = [];
        let arrayObj = [];
        let yData = [];
        let yDataNum = [];
        for (let i = 0; i < data.length; i++){
          let obj = this.joinFormParamsOptionsArray[data[i]];
          array.push(this.joinFormParamsOptionsArray[data[i]].n);
          arrayObj.push(obj);
          yDataNum.push(10);
        }
        this.form.chartYdata = data;
        this.form.chartYdataObj = arrayObj;
        this.barDataLegned = array;

        for (let i = 0; i < array.length; i++){
          yData.push({
            name: array[i],
            type: 'bar',
            barWidth:15,
            data:yDataNum
          });
        }
        this.barData = yData;
      },
      handleSelectValue(event, item, index){
        item.value = event;
        item.valueText = '';
      },
      handleFliterChange(data){
        this.form.joinFormFliterValue = data;
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardFliter1 = data;
          }else if (this.settingColValue == 2){
            this.form.cardFliter2 = data;
          }else if (this.settingColValue == 3){
            this.form.cardFliter3 = data;
          }else if (this.settingColValue == 4){
            this.form.cardFliter4 = data;
          }
        }else if (this.settingType == 'circle'){
          this.form.circleFliter = data;
        }else if (this.settingType == 'bar'){
          this.form.chartFliter = data;
          if (data == 'year'){
            this.barDataKey = ['年度1','年度2','更多'];
          }else if (data == 'month'){
            this.barDataKey = ['1','2','更多'];
          }else if (data == 'day'){
            this.barDataKey = ['1','2','更多'];
          }else if (data == 'dept'){
            this.barDataKey = ['部门1','部门2','更多'];
          }else if (data == 'college'){
            this.barDataKey = ['学院1','学院2','更多'];
          }

          let barData = [];
          let array = [];
          for (let i = 0; i < this.barDataLegned.length; i++){
            barData.push({
              name: this.barDataLegned[i],
              type: 'bar',
              barWidth:15,
              data:[10,10,10]
            });
          }
          this.barData = barData;
        }else if (this.settingType == 'table'){
          this.form.tableFliter = data;
        }
      },
      handleJoinFormChange(data){
        this.form.joinFormJoinValue = data;
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardJoin1 = data;
          }else if (this.settingColValue == 2){
            this.form.cardJoin2 = data;
          }else if (this.settingColValue == 3){
            this.form.cardJoin3 = data;
          }else if (this.settingColValue == 4){
            this.form.cardJoin4 = data;
          }
        }else if (this.settingType == 'circle'){
          this.form.circleJoin = data;
        }
      },
      closePcDialog(){
        this.settingColValue = '';
        this.settingType = '';
        this.form = {
          searchStaticTitle: '筛选条件',
          cardParam1: '字段名称',
          cardParam2: '字段名称',
          cardParam3: '字段名称',
          cardParam4: '字段名称',
          cardValue1: '显示内容',
          cardValue2: '显示内容',
          cardValue3: '显示内容',
          cardValue4: '显示内容',
          chartParam1: '字段名称',
          chartValue1: '',
          chartParam2: '字段名称',
          chartValue2: '',
          cardTitle: '',
          cardValue: '',
          joinFormValue: '',
          joinFormParamsValue: '',
          joinFormFliterValue: '',
          joinFormJoinValue: '',
          joinFormXValue: '',
          joinFormYValue: '',
        }
      }
    }
  }
</script>

<style scoped>
.form-set-main{
  box-shadow: 0px 0px 4px #DCDFE6;
  border-right: 1px solid #DCDFE6;
}
.form-set-left{
  background: #f8f8f8;
  height: 100%;
  margin-right: 330px;
  box-shadow: 0px 0px 4px #DCDFE6;
}
.form-set-right{
  width: 300px;
  background: #f8f8f8;
  height: 100%;
  box-shadow: 0px 0px 4px #DCDFE6;
}
.form-card-content {
  position:relative;
  margin-top: 15%;
}
.sel-card-active{
  box-shadow: 0px 0px 4px #909399;
}
</style>
