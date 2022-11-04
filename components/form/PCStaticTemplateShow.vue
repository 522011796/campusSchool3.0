<template>
  <div v-loading="dialogLoading">
    <div class="form-set-main">
      <div class="margin-bottom-5 layout-inline padding-lr-10 margin-top-5">
          <span class="layout-item">
            <my-cascader v-if="this.fliterType == 2" ref="SelectorCollege" :collapse-tags="true" class="layout-item" size="small" width-style="300" :props="{multiple: true}" :sel-value="fliterOption" type="1" sub-type="4" @change="handleSelectTime($event)"></my-cascader>
            <my-cascader v-if="this.fliterType == 1" ref="SelectorDept" :collapse-tags="true" class="layout-item" size="small" width-style="300" :props="{multiple: true}" :sel-value="fliterOption" type="4" sub-type="" @change="handleSelectTime($event)"></my-cascader>
            <el-date-picker
              v-model="searchData"
              size="small"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width: 240px"
              value-format="yyyy-MM-dd"
              @change="handleTime">
            </el-date-picker>
            <el-button size="small" type="success" @click="search">{{$t("搜索")}}</el-button>
          </span>
      </div>
      <div class="detail-card font-size-12 padding-lr-10 padding-tb-10" style="overflow-y: auto" :style="drawHeight6">
        <div style="height: 140px">
          <el-row :gutter="8">
            <el-col :span="6">
              <el-card :body-style="{padding: '10px'}" style="height: 140px">
                <div slot="header" class="color-muted">
                  <span><i class="fa fa-desktop"></i></span>
                  <span>{{cardLabel1 != '' ? cardLabel1 : '--'}}</span>
                </div>
                <div class="color-muted text-center" style="position: relative">
                  <div class="form-card-content">
                    {{cardValue1 !== '' ? cardValue1 : '--'}}
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{padding: '10px'}" style="height: 140px">
                <div slot="header" class="color-muted">
                  <span><i class="fa fa-desktop"></i></span>
                  <span>{{cardLabel2 != '' ? cardLabel2 : '--'}}</span>
                </div>
                <div class="color-muted text-center" style="position: relative">
                  <div class="form-card-content">
                    {{cardValue2 !== '' ? cardValue2 : '--'}}
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{padding: '10px'}" style="height: 140px">
                <div slot="header" class="color-muted">
                  <span><i class="fa fa-desktop"></i></span>
                  <span>{{cardLabel3 != '' ? cardLabel3 : '--'}}</span>
                </div>
                <div class="color-muted text-center" style="position: relative">
                  <div class="form-card-content">
                    {{cardValue3 !== '' ? cardValue3 : '--'}}
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{padding: '10px'}" style="height: 140px">
                <div slot="header" class="color-muted">
                  <span><i class="fa fa-desktop"></i></span>
                  <span>{{cardLabel4 != '' ? cardLabel4 : '--'}}</span>
                </div>
                <div class="color-muted text-center" style="position: relative">
                  <div class="form-card-content">
                    {{cardValue4 !== '' ? cardValue4 : '--'}}
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
                <el-card :body-style="{padding: '10px'}" style="height: 300px">
                  <div slot="header" class="color-muted">
                    <span><i class="fa fa-bar-chart"></i></span>
                    <span>{{chartParam}}</span>
                  </div>
                  <div class="color-muted text-center" style="position: relative;height: 260px">
                    <bar-chart chart-id="barId" :data-legned="barDataLegned" :data-key="barDataKey" :data="barData"></bar-chart>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card :body-style="{padding: '10px'}" style="height: 300px">
                  <div slot="header" class="color-muted">
                    <span><i class="fa fa-pie-chart"></i></span>
                    <span>{{circleParams}}</span>
                  </div>
                  <div class="color-muted text-center" style="position: relative">
                    <div class="margin-top-20">
                      <div class="text-center">
                        <el-progress type="dashboard" :show-text="false" :width="160" :percentage="circleValue"></el-progress>
                      </div>
                      <div class="text-center font-size-12 font-bold" style="position: relative; top: -90px">
                        <span>{{circleValueText != "" ? circleValueText : '--'}}</span>
                      </div>
                      <div class="text-center color-muted" style="position: relative; top: -10px;">
                        <div>
                          <span>{{circleLabel != "" ? circleLabel : '--'}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>

        <div class="margin-top-20">
          <el-table
            ref="refTable"
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            style="width: 100%">
            <el-table-column
              v-for="(item, index) in tableFData" :key="index"
              align="center"
              :label="item.n">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row[item.f+"DateResult"]}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span>{{scope.row[item.f+"DateResult"]}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>

          </el-table>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
          </div>
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
  import MyCascader from "~/components/utils/select/MyCascader";
  import {inArray} from "~/utils/utils";
  import DialogNormal from "~/components/utils/dialog/DialogNormal";

  export default {
    name: 'pcStaticTemplateShow',
    components: {DialogNormal, MyCascader, BarChart},
    mixins: [mixins],
    props: {
      staticId: String,
      staticPcFormData: Array
    },
    computed: {

    },
    data() {
      return {
        dialogLoading: false,
        searchDataFliter: [],
        searchTime: [],
        searchData: [],
        formList: [],
        formValue: '',
        fliterType: '',
        cardLabel1: '',
        cardValue1: '',
        cardLabel2: '',
        cardValue2: '',
        cardLabel3: '',
        cardValue3: '',
        cardLabel4: '',
        cardValue4: '',
        circleParams: '',
        circleLabel: '',
        circleValue: 0,
        circleValueText: '',
        chartParam: '',
        tableParams: '',
        barLabel: '',
        barValue: '',
        barDataLegned: [],
        barDataKey: [],
        barData: [

        ],
        tableData: [],
        tableTitleColData: [],
        tableFData: [],
        fliterOption: [],
      }
    },
    created() {

      this.getDeptInfo(2);
      this.getCollegeInfo(4);
      //this.initForm();
    },
    methods: {
      initAsync(){
        this.initFormDetail(this.staticId);
      },
      initForm(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.static_appinfo_form_page, {params: params}).then(res => {
          if (res.data.data){
            let array = [];
            for(let i = 0; i < res.data.data.list.length; i++){
              array.push({
                label: res.data.data.list[i].stat_name,
                value: res.data.data.list[i].id+""
              });
            }
            if (array.length > 0){
              this.formValue = res.data.data.list[0].id+"";

              this.initFormDetail(res.data.data.list[0].id)
            }
            this.formList = array;
          }
        });
      },
      initFormDetail(id){
        let params = {
          id: id
        };
        this.dialogLoading = true;
        this.$axios.get(common.static_appinfo_form_detail, {params: params, loading: false}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.unitList.length; i++){
              array.push({
                id: res.data.data.unitList[i].id,
                relaFromField1: res.data.data.unitList[i].relaFromField1,
                relaFromField2: res.data.data.unitList[i].relaFromField2,
                filterType: res.data.data.unitList[i].filterType,
                filterRules: res.data.data.unitList[i].filterRules,
                unitName: res.data.data.unitList[i].unitName,
              });
            }

            this.fliterType = res.data.data.unitList[0].filterType;
            this.initData(array[1].id, 1, array);
            this.initData(array[2].id, 2, array);
            this.initData(array[3].id, 3, array);
            this.initData(array[4].id, 4, array);
            this.initData(array[6].id, 5, array);
            this.initData(array[5].id, 6, array);
            this.initData(array[7].id, 7, array);
            this.dialogLoading = false;
          }
        });
      },
      initData(id, type, array){
        let params = {
          unitId: id
        };
        if (type == 7){
          params['page'] = this.page;
          params['num'] = this.num;
        }
        if (this.searchData && this.searchData.length > 0){
          params['date1'] = this.searchData[0];
          params['date2'] = this.searchData[1];
        }
        if (this.fliterType == 1 && this.fliterOption.length > 0){
          params['deptId'] = this.fliterOption.length > 0 ? JSON.stringify(this.fliterOption) : "";
        }else if (this.fliterType == 2 && this.fliterOption.length > 0){
          params['collegeId'] = this.fliterOption.length > 0 ? JSON.stringify(this.fliterOption) : "";
        }
        this.$axios.get(common.static_appinfo_form_get, {params: params, loading: false}).then(res => {
          if (res.data.data){
            switch (type){
              case 1:
              {
                let obj = JSON.parse(array[1].relaFromField1);
                let filed = array[1].unitName;
                this.cardLabel1 = filed.length > 15 ? filed.substr(0,14)+"..." : filed;
                this.cardValue1 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                break;
              }
              case 2:
              {
                let obj = JSON.parse(array[2].relaFromField1);
                let filed = array[2].unitName;
                this.cardLabel2 = filed.length > 15 ? filed.substr(0,14)+"..." : filed;
                this.cardValue2 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                break;
              }
              case 3:
              {
                let obj = JSON.parse(array[3].relaFromField1);
                let filed = array[3].unitName;
                this.cardLabel3 = filed.length > 15 ? filed.substr(0,14)+"..." : filed;
                this.cardValue3 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                break;
              }
              case 4:
              {
                let obj = JSON.parse(array[4].relaFromField1);
                let filed = array[4].unitName;
                this.cardLabel4 = filed.length > 15 ? filed.substr(0,14)+"..." : filed;
                this.cardValue4 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                break;
              }
              case 5:
              {
                let obj = JSON.parse(array[6].relaFromField1);
                let filed = obj[0].n;
                let rate = res.data.data.rate != null ? parseInt(res.data.data.rate) : 0;
                this.circleLabel = filed.length > 6 ? filed.substr(0,5)+"..." : filed;
                this.circleValue = rate;
                this.circleValueText = res.data.data.rate != null ? res.data.data.rate+"%" : "--";
                this.circleParams = array[6].unitName;
                break;
              }
              case 6:
              {
                let data = res.data.data;
                let legned = array[5].relaFromField2 ? JSON.parse(array[5].relaFromField2) : [];
                let filterType = array[5].filterType;
                let legnedArray = [];
                let key = [];
                let dataF = [];
                let dataValue = [];
                for (let i = 0; i < legned.length; i++){
                  legnedArray.push(legned[i].n);
                  dataF.push({
                    n: legned[i].n,
                    f:legned[i].f
                  });
                }

                for (let i = 0; i < data.length; i++){
                  key.push(data[i]._name);
                  let yData = [];
                  let yDataObj = [];
                  let dataObj = {};
                  for (let item in data[i]){
                    for (let z = 0; z < dataF.length; z++){
                      if (dataF[z].f+"DateResult" == item){
                        let value = data[i][item];
                        let name = dataF[z].n;
                        yData.push(value);
                        dataObj = {
                          name: name,
                          type: 'bar',
                          barWidth:15,
                          data: []
                        };
                        yDataObj.push(dataObj);
                      }
                    }
                  }
                  dataObj['data'] = yData;

                  for (let k = 0; k < yDataObj.length; k++){
                    yDataObj[k]['data'] = yData;
                  }
                  dataValue = yDataObj;
                }

                this.barData = dataValue;
                this.barDataKey = key;
                this.barDataLegned = legnedArray;
                this.chartParam = array[5].unitName;
                break;
              }
              case 7:
              {
                let data = res.data.data.list;
                let relaFromField = array[7].relaFromField1 ? JSON.parse(array[7].relaFromField1) : [];
                let dataF = [];
                let dataArray = [];
                for (let i = 0; i < relaFromField.length; i++){
                  dataF.push({
                    n: relaFromField[i].n,
                    f:relaFromField[i].f
                  });
                }
                this.tableFData = dataF;

                for (let j = 0; j < data.length; j++){
                  for (let item in data[j]){
                    for (let i = 0; i < dataF.length; i++){
                      if (dataF[i]['f']+"DateResult" == item){
                        data[j]['_label'] = dataF[i]['n'];
                        data[j]['value'] = data[j][item];
                        break;
                      }
                    }
                  }
                }

                this.tableParams = array[7].unitName;
                this.tableData = data;
                this.tableTitleColData = data;

                this.total = res.data.data.total;
                this.num = res.data.data.num;
                this.page = res.data.data.currentPage;
                break;
              }
              default:
                break;
            }
          }
        });
      },
      sizeChange(event){
        this.page = 1;
        this.num = event;
        this.initFormDetail(this.staticId);
      },
      currentPage(event){
        this.page = event;
        this.initFormDetail(this.staticId);
      },
      jumpPage(data){
        this.page = data;
        this.initFormDetail(this.staticId);
      },
      dropdownItem(event){
        this.formValue = event;
      },
      handleSelectTime(data){
        this.fliterOption = data;
      },
      handleTime(data){
        this.searchData = data;
      },
      search(){
        this.page = 1;
        this.initFormDetail(this.staticId);
      },
      closeDialog(){
        this.dialogLoading = false;
        this.fliterType =  '';
        this.cardLabel1 =  '';
        this.cardValue1 =  '';
        this.cardLabel2 =  '';
        this.cardValue2 =  '';
        this.cardLabel3 =  '';
        this.cardValue3 =  '';
        this.cardLabel4 =  '';
        this.cardValue4 =  '';
        this.circleParams =  '';
        this.circleLabel =  '';
        this.circleValue =  0;
        this.circleValueText =  '';
        this.chartParam =  '';
        this.tableParams =  '';
        this.barLabel =  '';
        this.barValue =  '';
        this.barDataLegned =  [];
        this.barDataKey =  [];
        this.barData =  [

        ];
        this.page = 1;
        this.num = 20;
        this.total = 0;
        this.tableData =  [];
        this.tableTitleColData =  [];
        this.tableFData =  [];
        this.fliterOption =  [];
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
  margin-top: 12%;
  font-size: 14px;
  font-weight: bold;
}
.sel-card-active{
  box-shadow: 0px 0px 4px #909399;
}
</style>
