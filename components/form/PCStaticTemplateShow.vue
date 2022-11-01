<template>
  <div>
    <div class="form-set-main">
      <div class="detail-card font-size-12 padding-lr-10 padding-tb-10" style="overflow-y: auto" :style="drawHeight6">
        <div class="margin-bottom-5 layout-inline">
          <span class="layout-item">
<!--            <el-select class="" style="margin-top: 5px" v-model="formValue" size="small" placeholder="请选择表单" @change="dropdownItem">-->
<!--              <el-option v-for="(item, index) in formList" :key="index" :label="item.label" :value="item.value"></el-option>-->
<!--            </el-select>-->
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
            <el-button size="small" @click="search">{{$t("搜索")}}</el-button>
          </span>
        </div>
        <div style="height: 140px">
          <el-row :gutter="8">
            <el-col :span="6">
              <el-card :body-style="{padding: '10px'}" style="height: 140px">
                <div slot="header" class="color-muted">
                  <span><i class="fa fa-line-chart"></i></span>
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
                  <span><i class="fa fa-line-chart"></i></span>
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
                  <span><i class="fa fa-line-chart"></i></span>
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
                  <span><i class="fa fa-line-chart"></i></span>
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
                    <span><i class="fa fa-line-chart"></i></span>
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
                    <span><i class="fa fa-line-chart"></i></span>
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
        barLabel: '',
        barValue: '',
        barDataLegned: [],
        barDataKey: [],
        barData: [

        ],
        tableData: [],
        tableTitleColData: []
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

        this.$axios.get(common.static_appinfo_form_detail, {params: params}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.unitList.length; i++){
              array.push({
                id: res.data.data.unitList[i].id,
                relaFromField1: res.data.data.unitList[i].relaFromField1,
                relaFromField2: res.data.data.unitList[i].relaFromField2,
                filterType: res.data.data.unitList[i].filterType,
                filterRules: res.data.data.unitList[i].filterRules,
              });
            }

            this.fliterType = res.data.data.unitList[0].filterType;
            this.initData(array[1].id, 1, array);
            this.initData(array[2].id, 2, array);
            this.initData(array[3].id, 3, array);
            this.initData(array[4].id, 4, array);
            this.initData(array[6].id, 5, array);
            this.initData(array[5].id, 6, array);
          }
        });
      },
      initData(id, type, array){
        let params = {
          unitId: id
        };
        console.log(this.searchData);
        if (this.searchData && this.searchData.length > 0){
          params['date1'] = this.startTime;
          params['date2'] = this.endTime;
        }
        if (this.fliterType == 1 && this.searchDataFliter.length > 0){
          params['deptId'] = this.searchData;
        }else if (this.fliterType == 2 && this.searchDataFliter.length > 0){
          params['collegeId'] = this.searchData;
        }
        this.$axios.get(common.static_appinfo_form_get, {params: params}).then(res => {
          if (res.data.data){
            switch (type){
              case 1:
              {
                let obj = JSON.parse(array[1].relaFromField1);
                let filed = obj[0].n;
                this.cardLabel1 = filed.length > 15 ? filed.substr(0,14)+"..." : filed;
                this.cardValue1 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                break;
              }
              case 2:
              {
                let obj = JSON.parse(array[2].relaFromField1);
                let filed = obj[0].n;
                this.cardLabel2 = filed.length > 15 ? filed.substr(0,14)+"..." : filed;
                this.cardValue2 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                break;
              }
              case 3:
              {
                let obj = JSON.parse(array[3].relaFromField1);
                let filed = obj[0].n;
                this.cardLabel3 = filed.length > 15 ? filed.substr(0,14)+"..." : filed;
                this.cardValue3 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                break;
              }
              case 4:
              {
                let obj = JSON.parse(array[4].relaFromField1);
                let filed = obj[0].n;
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
                this.circleParams = res.data.data.unitName;
                break;
              }
              case 6:
              {
                console.log(1,res.data.data);
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
                this.chartParam = res.data.data.unitName;
                break;
              }
              default:
                break;
            }
          }
        });
      },
      dropdownItem(event){
        this.formValue = event;
      },
      handleTime(data){
        this.searchData = data;
      },
      search(){
        this.initFormDetail(this.staticId);
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
