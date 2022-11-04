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
              <el-input v-if="settingType == 'search'" size="small" class="width-300" v-model="form.searchStaticTitle" @input="inputCard($event)"></el-input>
              <el-input v-if="settingType == 'bar'" size="small" class="width-300" v-model="form.chartParam" @input="inputCard($event)"></el-input>
              <el-input v-if="settingType == 'circle'" size="small" class="width-300" v-model="form.circleParams" @input="inputCard($event)"></el-input>
            </div>
          </div>
          <div v-if="settingType == 'search'" class="color-sub-grand font-size-12 margin-top-10">
            <div>
              <div>
                <span>{{$t("筛选类型")}}</span>
              </div>
              <div class="margin-top-5">
                <div class="layout-inline">
                  <my-select class="layout-item" :width-style="300" size="small" :placeholder="$t('筛选条件')" :sel-value="searchSetStaticForm" :options="searchStaticFormOptions2" :clearable="false" @change="handleSearchChange($event,1)"></my-select>
                </div>
<!--                <div class="margin-top-10">-->
<!--                  <my-cascader v-if="searchSetStaticForm == 'college'" ref="SelectorSearchCollege" size="small" width-style="300" :props="{multiple: true}" :sel-value="searchSetStaticFormOption" type="1" sub-type="4" @change="handleSearchSelect($event, 1)"></my-cascader>-->
<!--                  <my-cascader v-if="searchSetStaticForm == 'dept'" ref="SelectorSearchDept" size="small" width-style="300" :props="{multiple: true}" :sel-value="searchSetStaticFormOption" type="4" sub-type="" @change="handleSearchSelect($event, 2)"></my-cascader>-->
<!--                </div>-->
              </div>
            </div>
<!--            <div class="margin-top-10">-->
<!--              <div>-->
<!--                <span>{{$t("时间设置")}}</span>-->
<!--              </div>-->
<!--              <div class="margin-top-5">-->
<!--                <div class="layout-inline">-->
<!--                  <el-date-picker-->
<!--                    v-model="searchSetStaticTimeForm"-->
<!--                    size="small"-->
<!--                    type="daterange"-->
<!--                    range-separator="至"-->
<!--                    start-placeholder="开始日期"-->
<!--                    end-placeholder="结束日期"-->
<!--                    style="width: 300px;"-->
<!--                    @change="handleSearchChange($event, 3)">-->
<!--                  </el-date-picker>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
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
                <el-select v-model="form.joinFormParamsValue" size="small" class="width-300" placeholder="请选择">
                  <el-option
                    v-for="(item, index) in joinFormParamsOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    @click.native="handleJoinFormParamsChange(item, index)">
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
          <div v-show="settingType == 'bar' && settingType != 'search'">
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("横轴(单选)")}}</span>
              </div>
              <div class="margin-top-5">
                <el-select v-model="form.joinFormXValue" size="small" class="width-300" placeholder="请选择">
                  <el-option
                    v-for="(item, index) in joinFormParamsOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    @click.native="handleXChange(item, index)">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("纵轴(多选)")}}</span>
              </div>
              <div class="margin-top-5">
                <el-select ref="mutiSelY" v-model="form.joinFormYValue" multiple size="small" class="width-300" placeholder="请选择">
                  <el-option
                    v-for="(item,index) in joinFormParamsOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    @click.native="handleYChange(item, index)">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <template v-if="settingType == 'table' && settingType != 'search'">
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("选择该表单字段(单选)")}}</span>
              </div>
              <div class="margin-top-5">
                <el-row :gutter="4" v-for="(item, index) in tableTitleColData" :key="index" class="margin-bottom-5">
                  <el-col :span="12">
<!--                    <my-select :sel-value="item.label" :options="joinFormParamsOptions" :placeholder="$t('表单字段')" size="small" @change="handleSelectLabel($event, item, index)"></my-select>-->
                    <el-select ref="mutiSelY" v-model="item.label" size="small" placeholder="表单字段">
                      <el-option
                        v-for="(item,indexItem) in joinFormParamsOptions"
                        :key="indexItem"
                        :label="item.label"
                        :value="item.value"
                        @click.native="handleSelectLabel(item, indexItem, index)">
                      </el-option>
                    </el-select>
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
          <div v-if="settingType != 'search' && settingType != 'table'" class="color-sub-grand font-size-12 margin-top-10">
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
            <div class="margin-top-10">
              <el-date-picker
                v-if="form.joinFormFliterValue == 'time'"
                v-model="form.fliterOption"
                size="small"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 300px"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                @change="handleSelectTime">
              </el-date-picker>

              <my-cascader v-if="form.joinFormFliterValue == 'college'" ref="SelectorCollege" size="small" width-style="300" :props="{multiple: true}" :sel-value="form.fliterOption" type="1" sub-type="4" @change="handleSelectTime($event)"></my-cascader>
              <my-cascader v-if="form.joinFormFliterValue == 'dept'" ref="SelectorDept" size="small" width-style="300" :props="{multiple: true}" :sel-value="form.fliterOption" type="4" sub-type="" @change="handleSelectTime($event)"></my-cascader>

              <el-select v-if="form.joinFormFliterValue == 'status'" v-model="form.fliterOption" @change="handleSelectTime($event)" size="small" class="width-300" filterable placeholder="请选择">
                <el-option
                  v-for="item in searchStatusFormOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>

          <template v-if="settingType == 'table'">
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("聚合规则")}}</span>
              </div>
              <div class="margin-top-5">
                <el-select v-model="form.tableJoin" @change="handleJoinTableChange" size="small" class="width-300" placeholder="请选择">
                  <el-option
                    v-for="item in joinTableJoinOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </template>
        </template>
      </div>
      <div class="form-set-left detail-card font-size-12 padding-lr-10 padding-tb-10" style="overflow-y: auto" :style="drawHeight6">
        <div class="margin-bottom-5 layout-inline">
          <span class="layout-item">
            <my-select disabled class="layout-item width-120" size="small" :placeholder="form.searchStaticTitle" :sel-value="searchStaticForm" :options="searchStaticFormOptions" :clearable="false" @change="handleSearchChange($event, 2)"></my-select>
            <span class="layout-item">
              <i class="fa fa-cog color-grand" style="font-size: 14px" @click="settingSearchDataInfo($event)"></i>
            </span>
            <el-date-picker
              disabled
              v-model="searchSetStaticTimeForm"
              size="small"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width: 240px">
              </el-date-picker>
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
                      <div class="text-center">
                        <el-progress type="dashboard" :show-text="false" :width="160" :percentage="percentage"></el-progress>
                      </div>
                      <div class="text-center font-size-12 font-bold" style="position: relative; top: -90px">
                        <span>显示数据</span>
                      </div>
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

    <dialog-normal top="5vh" :visible="h5Dialog" :show-footer="false" :append-to-body="true" width-style="450px" :title="$t('移动端模版预览(仅展示)')" @close="closeDialog" @right-close="closeDialog">
      <div>
        <div>
          <div style="height: 35px">
            <el-row>
              <el-col :span="8">
                <el-button class="layout-item" style="margin-top: 5px" size="small" type="warning" plain native-type="button">{{$t('选择表单')}}</el-button>
              </el-col>
              <el-col :span="16" class="text-right">
                <el-button class="layout-item" style="margin-top: 5px" size="small" type="warning" plain native-type="button">{{$t('选择部门/院系')}}</el-button>
                <el-button class="layout-item" style="margin-top: 5px" size="small" type="default" plain native-type="button">{{$t('选择时间')}}</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
        <el-card :body-style="{padding: '10px'}" style="height: 150px" class="margin-top-5">
          <div style="height: 75px;width: 100%">
            <el-row>
              <el-col :span="12">
                <div class="text-left padding-lr-5">
                  <div>
                    <span class="font-size-12 font-bold">{{form.cardValue1 == '' ? '字段内容' : form.cardValue1.n}}</span>
                  </div>
                  <div class="margin-top-5">
                    <span class="font-size-12 color-muted">显示内容</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="text-right padding-lr-5">
                  <div>
                    <span class="font-size-12 font-bold">{{form.cardValue2 == '' ? '字段内容' : form.cardValue2.n}}</span>
                  </div>
                  <div class="margin-top-5">
                    <span class="font-size-12 color-muted">显示内容</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div style="height: 75px;width: 100%">
            <el-row>
              <el-col :span="12">
                <div class="text-left padding-lr-5">
                  <div>
                    <span class="font-size-12 font-bold">{{form.cardValue3 == '' ? '字段内容' : form.cardValue3.n}}</span>
                  </div>
                  <div class="margin-top-5">
                    <span class="font-size-12 color-muted">显示内容</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="text-right padding-lr-5">
                  <div>
                    <span class="font-size-12 font-bold">{{form.cardValue4 == '' ? '字段内容' : form.cardValue4.n}}</span>
                  </div>
                  <div class="margin-top-5">
                    <span class="font-size-12 color-muted">显示内容</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>

        <el-card :body-style="{padding: '10px'}" class="margin-top-10" style="height: 180px">
          <div class="color-muted text-center" style="position: relative">
            <div>
              <div class="text-center">
                <el-progress type="dashboard" :show-text="false" :width="160" :percentage="percentage"></el-progress>
              </div>
              <div class="text-center font-size-12 font-bold" style="position: relative; top: -90px">
                <span>显示数据</span>
              </div>
              <div class="text-center color-muted font-size-12" style="position: relative; top: -30px;">
                <div>
                  <span>{{percentageValue}}</span>
                </div>
              </div>
            </div>
          </div>
        </el-card>

        <el-card :body-style="{padding: '10px'}" class="margin-top-10" style="height: 350px">
          <div style="height: 350px;width: 100%" class="text-center;">
            <h-bar-chart chart-id="hbarId" :data-legned="barDataLegned" :data-key="barDataKey" :data="barData"></h-bar-chart>
          </div>
        </el-card>
      </div>
    </dialog-normal>
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
    name: 'pcStaticTemplate',
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
        h5Dialog: false,
        staticPcFormList: [
          {
            filterType: '',
            unitName: '',
            statId: '',
            unitType: '4'
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {

            },
            relaFormId: '',
            relaFromField1: {
              collegeId: [],
              deptId: [],
              date1: [],
              date2: []
            },
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {

            },
            relaFormId: '',
            relaFromField1: [],
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {

            },
            relaFormId: '',
            relaFromField1: [],
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {

            },
            relaFormId: '',
            relaFromField1: [],
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {

            },
            relaFormId: '',
            relaFromField1: [],
            relaFromField2: [],
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {

            },
            relaFormId: '',
            relaFromField1: [],
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {

            },
            relaFormId: '',
            relaFromField1: [],
            groupRule: '-1',
            unitType: '0',
            statId: '',
            groupType: '0'
          }
        ],
        settingType: '',
        settingColValue: '',
        searchStaticTitle: this.$t("筛选条件"),
        searchStaticForm: '',
        searchSetStaticForm: '',
        searchSetStaticFormOption: '',
        searchSetStaticTimeForm: [],
        searchStaticFormOptions: [{
          label: this.$t("时间"),
          value: 'time'
        },{
          label: this.$t("部门"),
          value: 'dept'
        },{
          label: this.$t("院系"),
          value: 'college'
        },{
          label: this.$t("表单状态"),
          value: 'status'
        }],
        searchStatusFormOptions: [{
          label: this.$t("撤销"),
          value: '-1'
        },{
          label: this.$t("待审核"),
          value: '0'
        },{
          label: this.$t("通过"),
          value: '3'
        },{
          label: this.$t("未通过"),
          value: '4'
        }],
        searchStaticFormOptions2: [{
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
          cardJoin1: '-1',
          cardJoin2: '-1',
          cardJoin3: '-1',
          cardJoin4: '-1',
          cardFliter1: '',
          cardFliter2: '',
          cardFliter3: '',
          cardFliter4: '',
          cardFliterOption1: '',
          cardFliterOption2: '',
          cardFliterOption3: '',
          cardFliterOption4: '',
          cardFliterStartTime1: '',
          cardFliterEndTime1: '',
          cardFliterStartTime2: '',
          cardFliterEndTime2: '',
          cardFliterStartTime3: '',
          cardFliterEndTime3: '',
          cardFliterStartTime4: '',
          cardFliterEndTime4: '',
          chartParam: '字段名称',
          chartValue: '',
          chartValueText: '',
          chartJoin: '',
          chartForm: '',
          chartFliter: '',
          chartFliterOption: '',
          chartXdata: '',
          chartXdataObj: '',
          chartYdata: '',
          chartYdataObj: '',
          chartYdataArray: [],
          cardTitle: '',
          cardValue: '',
          circleParams: '字段名称',
          circleValue: 0,
          circleValueText: '',
          circleForm: '',
          circleFliter: '',
          circleFliterOption: '',
          circleFliterStartTime: '',
          circleFliterEndTime: '',
          circleJoin: '-1',
          tableForm: '',
          tableValue: '',
          tableValueText: '',
          tableFliter: '',
          tableFliterOption: '',
          tableFliterStartTime: '',
          tableFliterEndTime: '',
          tableJoin: '',
          joinFormValue: '',
          joinFormParamsValue: '',
          joinFormParamsValueObj: {},
          joinFormFliterValue: '',
          joinFormJoinValue: '',
          joinFormXValue: '',
          joinFormYValue: [],
          fliterOption: [],
          fliterOptionStartTime: '',
          fliterOptionEndTime: '',
          joinTableJoinValue: []
        },
        joinFormValueOptions: [],
        joinFormParamsOptions: [],
        joinFormParamsMutiOptions: [],
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
          value: '-1',
          label: this.$t("不聚合")
        },{
          value: '0',
          label: this.$t("求和")
        },{
          value: '1',
          label: this.$t("平均值")
        },{
          value: '2',
          label: this.$t("最大值")
        },{
          value: '3',
          label: this.$t("最小值")
        },{
          value: '4',
          label: this.$t("计数")
        },{
          value: '5',
          label: this.$t("计数(去重复)")
        }],
        joinTableJoinOptions: [{
          value: '0',
          label: this.$t("按人员聚合")
        },{
          value: '1',
          label: this.$t("按部门聚合")
        },{
          value: '2',
          label: this.$t("按院系聚合")
        }],
        tableData: ["1"],
        tableTitleColData: [
          {title: '', label: '', value: '-1', valueText: '', obj: {d:'',f:'',n:'',g:'-1'}},
        ],
        percentage: 0,
        percentageText: '内容',
        percentageValue: '表单字段',
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
      this.initAsync();
    },
    methods: {
      async initAsync(){
        await this.init();
        await this.initData();
      },
      initData(){
        if (this.staticPcFormData.length > 0){
          this.staticPcFormList = this.staticPcFormData;
          this.searchStaticTitle = this.staticPcFormData[0].unitName;
          this.searchSetStaticForm = this.getTitleFliterText(this.staticPcFormData[0].filterType);

          this.form.cardParam1 = this.staticPcFormData[1].unitName;
          this.form.cardValue1Text = this.staticPcFormData[1].relaFromField1[0]['f'];
          this.form.cardForm1 = this.staticPcFormData[1].relaFormId;
          this.form.cardValue1 = this.staticPcFormData[1].relaFromField1[0];
          this.form.cardFliter1 = this.getTitleFliterText(this.staticPcFormData[1].filterType);
          this.form.cardJoin1 = this.staticPcFormData[1].groupRule+"";

          if (this.getTitleFliterText(this.staticPcFormData[1].filterType) == 'time'){
            let time = this.staticPcFormData[1].filterRules != "" ? this.staticPcFormData[1].filterRules : "";
            let start = time != "" ? time.date1 : "";
            let end = time != "" > 0 ? time.date2 : "";
            this.form.cardFliterOption1 = [start, end];
          }else if (this.getTitleFliterText(this.staticPcFormData[1].filterType) == 'dept'){
            this.staticPcFormData[1].filterRules = this.staticPcFormData[1].filterRules != "" ? this.staticPcFormData[1].filterRules : "";
            let deptId = this.staticPcFormData[1].filterRules != "" ? this.staticPcFormData[1].filterRules : "";
            this.form.cardFliterOption1 = deptId.length == 0 ? [] : JSON.parse(deptId.deptId);
          }else if (this.getTitleFliterText(this.staticPcFormData[1].filterType) == 'college'){
            this.staticPcFormData[1].filterRules = this.staticPcFormData[1].filterRules != "" ? this.staticPcFormData[1].filterRules : "";
            let deptId = this.staticPcFormData[1].filterRules != "" ? this.staticPcFormData[1].filterRules : "";
            this.form.cardFliterOption1 = deptId.length == 0 ? [] : JSON.parse(deptId.collegeId);
          }else if (this.getTitleFliterText(this.staticPcFormData[1].filterType) == 'status'){
            this.staticPcFormData[1].filterRules = this.staticPcFormData[1].filterRules != "" ? this.staticPcFormData[1].filterRules : "";
            let deptId = this.staticPcFormData[1].filterRules != "" ? this.staticPcFormData[1].filterRules : "";
            this.form.cardFliterOption1 = deptId == "" ? "" : deptId.applyStatus+"";
          }

          this.form.cardParam2 = this.staticPcFormData[1].unitName;
          this.form.cardValue2Text = this.staticPcFormData[2].relaFromField1[0]['f'];
          this.form.cardForm2 = this.staticPcFormData[2].relaFormId;
          this.form.cardValue2 = this.staticPcFormData[2].relaFromField1[0];
          this.form.cardFliter2 = this.getTitleFliterText(this.staticPcFormData[2].filterType);
          this.form.cardJoin2 = this.staticPcFormData[2].groupRule+"";
          if (this.getTitleFliterText(this.staticPcFormData[2].filterType) == 'time'){
            let time = this.staticPcFormData[2].filterRules != "" ? this.staticPcFormData[2].filterRules : "";
            let start = time != "" ? time.date1 : "";
            let end = time != "" > 0 ? time.date2 : "";
            this.form.cardFliterOption2 = [start, end];
          }else if (this.getTitleFliterText(this.staticPcFormData[2].filterType) == 'dept'){
            this.staticPcFormData[2].filterRules = this.staticPcFormData[2].filterRules != "" ? this.staticPcFormData[2].filterRules : "";
            let deptId = this.staticPcFormData[2].filterRules != "" ? this.staticPcFormData[2].filterRules : "";
            this.form.cardFliterOption2 = deptId.length == 0 ? [] : JSON.parse(deptId.deptId);
          }else if (this.getTitleFliterText(this.staticPcFormData[2].filterType) == 'college'){
            this.staticPcFormData[2].filterRules = this.staticPcFormData[1].filterRules != "" ? this.staticPcFormData[2].filterRules : "";
            let deptId = this.staticPcFormData[2].filterRules != "" ? this.staticPcFormData[2].filterRules : "";
            this.form.cardFliterOption2 = deptId.length == 0 ? [] : JSON.parse(deptId.collegeId);
          }else if (this.getTitleFliterText(this.staticPcFormData[2].filterType) == 'status'){
            this.staticPcFormData[2].filterRules = this.staticPcFormData[2].filterRules != "" ? this.staticPcFormData[2].filterRules : "";
            let deptId = this.staticPcFormData[2].filterRules != "" ? this.staticPcFormData[2].filterRules : "";
            this.form.cardFliterOption2 = deptId == "" ? "" : deptId.applyStatus+"";
          }

          this.staticPcFormData[3].relaFromField1 = this.staticPcFormData[3].relaFromField1;
          this.form.cardParam3 = this.staticPcFormData[3].unitName;
          this.form.cardValue3Text = this.staticPcFormData[3].relaFromField1[0]['f'];
          this.form.cardForm3 = this.staticPcFormData[3].relaFormId;
          this.form.cardValue3 = this.staticPcFormData[3].relaFromField1[0];
          this.form.cardFliter3 = this.getTitleFliterText(this.staticPcFormData[3].filterType);
          this.form.cardJoin3 = this.staticPcFormData[3].groupRule+"";
          if (this.getTitleFliterText(this.staticPcFormData[3].filterType) == 'time'){
            let time = this.staticPcFormData[3].filterRules != "" ? this.staticPcFormData[3].filterRules : "";
            let start = time != "" ? time.date1 : "";
            let end = time != "" > 0 ? time.date2 : "";
            this.form.cardFliterOption3 = [start, end];
          }else if (this.getTitleFliterText(this.staticPcFormData[3].filterType) == 'dept'){
            this.staticPcFormData[3].filterRules = this.staticPcFormData[3].filterRules != "" ? this.staticPcFormData[3].filterRules : "";
            let deptId = this.staticPcFormData[3].filterRules != "" ? this.staticPcFormData[3].filterRules : "";
            this.form.cardFliterOption3 = deptId.length == 0 ? [] : JSON.parse(deptId.deptId);
          }else if (this.getTitleFliterText(this.staticPcFormData[3].filterType) == 'college'){
            this.staticPcFormData[3].filterRules = this.staticPcFormData[3].filterRules != "" ? this.staticPcFormData[3].filterRules : "";
            let deptId = this.staticPcFormData[3].filterRules != "" ? this.staticPcFormData[3].filterRules : "";
            this.form.cardFliterOption3 = deptId.length == 0 ? [] : JSON.parse(deptId.collegeId);
          }else if (this.getTitleFliterText(this.staticPcFormData[3].filterType) == 'status'){
            this.staticPcFormData[2].filterRules = this.staticPcFormData[3].filterRules != "" ? this.staticPcFormData[3].filterRules : "";
            let deptId = this.staticPcFormData[3].filterRules != "" ? this.staticPcFormData[3].filterRules : "";
            this.form.cardFliterOption3 = deptId == "" ? "" : deptId.applyStatus+"";
          }

          this.staticPcFormData[4].relaFromField1 = this.staticPcFormData[4].relaFromField1;
          this.form.cardParam4 = this.staticPcFormData[4].unitName;
          this.form.cardValue4Text = this.staticPcFormData[4].relaFromField1[0]['f'];
          this.form.cardForm4 = this.staticPcFormData[4].relaFormId;
          this.form.cardValue4 = this.staticPcFormData[4].relaFromField1[0];
          this.form.cardFliter4 = this.getTitleFliterText(this.staticPcFormData[4].filterType);
          this.form.cardJoin4 = this.staticPcFormData[4].groupRule+"";
          if (this.getTitleFliterText(this.staticPcFormData[4].filterType) == 'time'){
            let time = this.staticPcFormData[4].filterRules != "" ? this.staticPcFormData[4].filterRules : "";
            let start = time != "" ? time.date1 : "";
            let end = time != "" > 0 ? time.date2 : "";
            this.form.cardFliterOption4 = [start, end];
          }else if (this.getTitleFliterText(this.staticPcFormData[4].filterType) == 'dept'){
            this.staticPcFormData[4].filterRules = this.staticPcFormData[4].filterRules != "" ? this.staticPcFormData[4].filterRules : "";
            let deptId = this.staticPcFormData[4].filterRules != "" ? this.staticPcFormData[4].filterRules : "";
            this.form.cardFliterOption4 = deptId.length == 0 ? [] : JSON.parse(deptId.deptId);
          }else if (this.getTitleFliterText(this.staticPcFormData[4].filterType) == 'college'){
            this.staticPcFormData[4].filterRules = this.staticPcFormData[4].filterRules != "" ? this.staticPcFormData[4].filterRules : "";
            let deptId = this.staticPcFormData[4].filterRules != "" ? this.staticPcFormData[4].filterRules : "";
            this.form.cardFliterOption4 = deptId.length == 0 ? [] : JSON.parse(deptId.collegeId);
          }else if (this.getTitleFliterText(this.staticPcFormData[4].filterType) == 'status'){
            this.staticPcFormData[4].filterRules = this.staticPcFormData[4].filterRules != "" ? this.staticPcFormData[4].filterRules : "";
            let deptId = this.staticPcFormData[4].filterRules != "" ? this.staticPcFormData[4].filterRules : "";
            this.form.cardFliterOption4 = deptId == "" ? "" : deptId.applyStatus+"";
          }

          this.form.chartParam = this.staticPcFormData[5].unitName;
          this.form.chartForm = this.staticPcFormData[5].relaFormId;
          this.form.chartXdata = this.staticPcFormData[5].relaFromField1[0]['f'];
          this.form.chartXdataObj = this.staticPcFormData[5].relaFromField1[0];
          this.form.chartFliter = this.getTitleFliterText(this.staticPcFormData[5].filterType);
          //this.form.chartFliterOption = [];
          let yData = this.staticPcFormData[5].relaFromField2 != undefined ? this.staticPcFormData[5].relaFromField2 : []
          let yDataArray = [];
          for (let i = 0; i < yData.length; i++){
            yDataArray.push(yData[i].f);
          }
          this.form.chartYdata = yDataArray;
          this.form.chartYdataObj = this.staticPcFormData[5].relaFromField2;
          this.form.chartYdataArray = this.staticPcFormData[5].relaFromField2 != undefined ? this.staticPcFormData[5].relaFromField2 : [];

          if (this.getTitleFliterText(this.staticPcFormData[5].filterType) == 'time'){
            let time = this.staticPcFormData[5].filterRules != "" ? this.staticPcFormData[5].filterRules : "";
            let start = time != "" ? time.date1 : "";
            let end = time != "" > 0 ? time.date2 : "";
            this.form.chartFliterOption = [start, end];
          }else if (this.getTitleFliterText(this.staticPcFormData[5].filterType) == 'dept'){
            this.staticPcFormData[5].filterRules = this.staticPcFormData[5].filterRules != "" ? this.staticPcFormData[5].filterRules : "";
            let deptId = this.staticPcFormData[5].filterRules != "" ? this.staticPcFormData[5].filterRules : [];
            this.form.chartFliterOption = deptId.length == 0 ? [] : JSON.parse(deptId.deptId);
          }else if (this.getTitleFliterText(this.staticPcFormData[5].filterType) == 'college'){
            this.staticPcFormData[5].filterRules = this.staticPcFormData[5].filterRules != "" ? this.staticPcFormData[5].filterRules : "";
            let deptId = this.staticPcFormData[5].filterRules != "" ? this.staticPcFormData[5].filterRules : [];
            this.form.chartFliterOption = deptId.length == 0 ? [] : JSON.parse(deptId.collegeId);
          }else if (this.getTitleFliterText(this.staticPcFormData[5].filterType) == 'status'){
            this.staticPcFormData[5].filterRules = this.staticPcFormData[5].filterRules != "" ? this.staticPcFormData[5].filterRules : "";
            let deptId = this.staticPcFormData[5].filterRules != "" ? this.staticPcFormData[5].filterRules : "";
            this.form.chartFliterOption = deptId == "" ? "" : deptId.applyStatus+"";
          }

          this.staticPcFormData[6].relaFromField1 = this.staticPcFormData[6].relaFromField1;
          this.form.circleParams = this.staticPcFormData[6].unitName;
          this.form.circleValueText = this.staticPcFormData[6].relaFromField1[0]['f'];
          this.form.circleForm = this.staticPcFormData[6].relaFormId;
          this.form.circleValue = this.staticPcFormData[6].relaFromField1[0];
          this.form.circleFliter = this.getTitleFliterText(this.staticPcFormData[6].filterType);
          this.form.circleJoin = this.staticPcFormData[6].groupRule+"";
          this.percentageValue = this.staticPcFormData[6].relaFromField1[0]['n'];
          if (this.getTitleFliterText(this.staticPcFormData[6].filterType) == 'time'){
            let time = this.staticPcFormData[6].filterRules != "" ? this.staticPcFormData[6].filterRules : "";
            let start = time != "" ? time.date1 : "";
            let end = time != "" > 0 ? time.date2 : "";
            this.form.circleFliterOption = [start, end];
          }else if (this.getTitleFliterText(this.staticPcFormData[6].filterType) == 'dept'){
            this.staticPcFormData[6].filterRules = this.staticPcFormData[6].filterRules != "" ? this.staticPcFormData[6].filterRules : "";
            let deptId = this.staticPcFormData[6].filterRules != "" ? this.staticPcFormData[6].filterRules : [];
            this.form.circleFliterOption = deptId.length == 0 ? [] : JSON.parse(deptId.deptId);
          }else if (this.getTitleFliterText(this.staticPcFormData[6].filterType) == 'college'){
            this.staticPcFormData[6].filterRules = this.staticPcFormData[6].filterRules != "" ? this.staticPcFormData[6].filterRules : "";
            let deptId = this.staticPcFormData[6].filterRules != "" ? this.staticPcFormData[6].filterRules : [];
            this.form.circleFliterOption = deptId.length == 0 ? [] : JSON.parse(deptId.collegeId);
          }else if (this.getTitleFliterText(this.staticPcFormData[6].filterType) == 'status'){
            this.staticPcFormData[6].filterRules = this.staticPcFormData[6].filterRules != "" ? this.staticPcFormData[6].filterRules : "";
            let deptId = this.staticPcFormData[6].filterRules != "" ? this.staticPcFormData[6].filterRules : "";
            this.form.circleFliterOption = deptId == "" ? "" : deptId.applyStatus+"";
          }

          this.form.tableForm = this.staticPcFormData[7].relaFormId;
          let tabletTitleData = this.staticPcFormData[7].relaFromField1 != "" ? this.staticPcFormData[7].relaFromField1 : [];
          let tableColArray = [];
          for (let i = 0; i < tabletTitleData.length; i++){
            tableColArray.push(
              {
                title: tabletTitleData[i].n,
                label: tabletTitleData[i].n,
                value: tabletTitleData[i].g+"",
                valueText: "",
                obj: {
                  d:tabletTitleData[i].d,
                  f:tabletTitleData[i].f,
                  n:tabletTitleData[i].n,
                  g:tabletTitleData[i].g+""
                }
              },
            );
          }
          this.tableTitleColData = tableColArray;
          this.form.tableJoin = this.staticPcFormData[7].groupType+"";
          this.staticPcFormData[7].relaFromField1 = this.staticPcFormData[7].relaFromField1;
        }
      },
      async init(){
        //server_list_list2
        let params = {

        };
        await this.$axios.get(common.server_list_list2,{params: params}).then(res => {
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
      async getFiledInfo(formId){
        //server_list_list2
        let params = {
          formId: formId
        };
        await this.$axios.get(common.server_list_field,{params: params}).then(res => {
          if (res.data.code == 200){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                id: i,
                value: res.data.data[i].f,
                label: res.data.data[i].n,
                extra: res.data.data[i].d
              });
            }
            this.joinFormParamsOptions = array;
            this.joinFormParamsOptionsArray = res.data.data;
          }
        });
      },
      async settingCardDataInfo(event, value){
        this.settingType = 'card';
        this.form.fliterOption = [];
        this.resetCasadeSelector('SelectorCollege');
        this.resetCasadeSelector('SelectorDept');

        if (value == 1){
          await this.getFiledInfo(this.form.cardForm1);
          this.form.cardTitle = this.form.cardParam1;
          this.form.joinFormParamsValue = this.form.cardValue1Text == '' ? '' : this.form.cardValue1Text;
          this.form.joinFormValue = this.form.cardForm1;
          this.form.joinFormJoinValue = this.form.cardJoin1;
          this.form.joinFormFliterValue = this.form.cardFliter1;
          this.form.fliterOption = this.form.cardFliterOption1 == "" ? [] : this.form.cardFliterOption1;

          this.staticPcFormList[1] = this.setStatucFormListObj(this.form.cardFliter1,this.form.cardParam1,this.form.cardForm1,this.form.cardValue1,this.form.cardJoin1,this.staticId,0);
          this.staticPcFormList[1]['groupRule'] = this.form.cardJoin1;
          this.staticPcFormList[1]['filterRules'] = this.setFliterOptionValue(this.form.cardFliter1, this.staticPcFormList[1]['filterRules'], this.form.cardFliterOption1);

        }else if (value == 2){
          await this.getFiledInfo(this.form.cardForm2);
          this.form.cardTitle = this.form.cardParam2;
          this.form.joinFormParamsValue = this.form.cardValue2Text == '' ? '' : this.form.cardValue2Text;
          this.form.joinFormValue = this.form.cardForm2;
          this.form.joinFormJoinValue = this.form.cardJoin2;
          this.form.joinFormFliterValue = this.form.cardFliter2;
          this.form.fliterOption = this.form.cardFliterOption2 == "" ? [] : this.form.cardFliterOption2;

          this.staticPcFormList[2] = this.setStatucFormListObj(this.form.cardFliter2,this.form.cardParam2,this.form.cardForm2,this.form.cardValue2,this.form.cardJoin2,this.staticId,0);
          this.staticPcFormList[2]['groupRule'] = this.form.cardJoin2;
          this.staticPcFormList[2]['filterRules'] = this.setFliterOptionValue(this.form.cardFliter2, this.staticPcFormList[2]['filterRules'], this.form.cardFliterOption2);
        }else if (value == 3){
          await this.getFiledInfo(this.form.cardForm3);
          this.form.cardTitle = this.form.cardParam3;
          this.form.joinFormParamsValue = this.form.cardValue3Text == '' ? '' : this.form.cardValue3Text;
          this.form.joinFormValue = this.form.cardForm3;
          this.form.joinFormJoinValue = this.form.cardJoin3;
          this.form.joinFormFliterValue = this.form.cardFliter3;
          this.form.fliterOption = this.form.cardFliterOption3 == "" ? [] : this.form.cardFliterOption3;

          this.staticPcFormList[3] = this.setStatucFormListObj(this.form.cardFliter3,this.form.cardParam3,this.form.cardForm3,this.form.cardValue3,this.form.cardJoin3,this.staticId,0);
          this.staticPcFormList[3]['groupRule'] = this.form.cardJoin3;
          this.staticPcFormList[3]['filterRules'] = this.setFliterOptionValue(this.form.cardFliter3, this.staticPcFormList[3]['filterRules'], this.form.cardFliterOption3);
        }else if (value == 4){
          await this.getFiledInfo(this.form.cardForm4);
          this.form.cardTitle = this.form.cardParam4;
          this.form.joinFormParamsValue = this.form.cardValue4Text == '' ? '' : this.form.cardValue4Text;
          this.form.joinFormValue = this.form.cardForm4;
          this.form.joinFormJoinValue = this.form.cardJoin4;
          this.form.joinFormFliterValue = this.form.cardFliter4;
          this.form.fliterOption = this.form.cardFliterOption4 == "" ? [] : this.form.cardFliterOption4;

          this.staticPcFormList[4] = this.setStatucFormListObj(this.form.cardFliter4,this.form.cardParam4,this.form.cardForm4,this.form.cardValue4,this.form.cardJoin4,this.staticId,0);
          this.staticPcFormList[4]['groupRule'] = this.form.cardJoin4;
          this.staticPcFormList[4]['filterRules'] = this.setFliterOptionValue(this.form.cardFliter4, this.staticPcFormList[4]['filterRules'], this.form.cardFliterOption4);
        }
        this.settingColValue = value;
      },
      async settingBarDataInfo(event){
        this.settingType = 'bar';
        this.settingColValue = '';

        await this.getFiledInfo(this.form.chartForm);
        this.form.joinFormXValue = "";
        this.form.joinFormYValue = [];
        this.form.joinFormValue = this.form.chartForm;
        this.form.joinFormFliterValue = this.form.chartFliter;
        this.form.joinFormXValue = this.form.chartXdata;
        this.form.joinFormYValue = this.form.chartYdata;
        this.form.fliterOption = this.form.chartFliterOption;

        //console.log(this.form.chartFliter,this.form.chartFliterOption);
        this.staticPcFormList[5] = this.setStatucFormListObj2(this.form.chartFliter,this.form.chartParam,this.form.chartForm,this.form.chartXdataObj,this.form.chartYdataObj,this.form.chartJoin,this.staticId,1);
        this.staticPcFormList[5]['filterRules'] = this.setFliterOptionValue(this.form.chartFliter, this.staticPcFormList[5]['filterRules'], this.form.chartFliterOption);
      },
      async settingCircleDataInfo(event){
        this.settingType = 'circle';
        this.settingColValue = '';

        await this.getFiledInfo(this.form.circleForm);
        this.form.circleParams = this.form.circleParams;
        this.form.joinFormParamsValue = this.form.circleValueText == '' ? '' : this.form.circleValueText;
        this.form.joinFormValue = this.form.circleForm;
        this.form.joinFormJoinValue = this.form.circleJoin;
        this.form.joinFormFliterValue = this.form.circleFliter;
        this.percentage = 0;
        this.percentageValue = this.percentageValue == '表单字段' ? '表单字段' : this.percentageValue;
        this.form.fliterOption = this.form.circleFliterOption;

        this.staticPcFormList[6] = this.setStatucFormListObj(this.form.circleFliter,this.form.circleParams,this.form.circleForm,this.form.circleValue,this.form.circleJoin,this.staticId,5);
        this.staticPcFormList[6]['filterRules'] = this.setFliterOptionValue(this.form.circleFliter, this.staticPcFormList[6]['filterRules'], this.form.circleFliterOption);
      },
      async settingTableDataInfo(event){
        this.settingType = 'table';
        this.settingColValue = '';

        await this.getFiledInfo(this.form.circleForm);
        this.form.joinFormValue = this.form.tableForm;
        this.form.joinFormFliterValue = this.form.tableFliter;

        let tableCol = this.tableTitleColData;
        let array = [];
        for (let i = 0; i < tableCol.length; i++){
          array.push(tableCol[i].obj);
        }
        this.staticPcFormList[7] = this.setStatucTableListObj(this.form.tableJoin,'',this.form.tableForm,array,this.form.tableJoin,this.staticId,3);
        //this.staticPcFormList[7]['groupType'] = this.setFliterOptionValue(this.form.circleFliter, this.staticPcFormList[6]['filterRules'], this.form.circleFliterOption);
      },
      settingSearchDataInfo(event){
        this.settingType = 'search';
        this.settingColValue = '';
        //console.log(this.searchSetStaticForm, this.form.searchStaticTitle);
        let filterType = this.getTilterType(this.searchSetStaticForm);
        this.staticPcFormList[0] = {
          filterType: filterType,
          unitName: this.form.searchStaticTitle,
          statId: this.staticId,
          unitType: 4
        };
      },
      getTitleFliterText(data){
        let filterType = "";
        if (data == 0){
          filterType = "time";
        }else if (data == 1){
          filterType = "dept";
        }else if (data == 2){
          filterType = "college";
        }else if (data == 3){
          filterType = "status";
        }
        return filterType;
      },
      getTilterType(type){
        let filterType = "";
        if (type == "time"){
          filterType = 0;
        }else if (type == "college"){
          filterType = 2;
        }else if (type == "dept"){
          filterType = 1;
        }else if (type == "status"){
          filterType = 3;
        }
        return filterType;
      },
      setFliterOptionValue(type,staticPcForm1,data){
        let staticPcForm = {};
        if (type == 'time'){
          staticPcForm['date1'] = data.length > 0 ? data[0] : '';
          staticPcForm['date2'] = data.length > 0 ? data[1] : '';
        }else if (type == 'dept'){
          staticPcForm['deptId'] = JSON.stringify(data);
        }else if (type == 'college'){
          staticPcForm['collegeId'] = JSON.stringify(data);
        }else if (type == 'status'){
          staticPcForm['applyStatus'] = parseInt(data);
        }
        return staticPcForm;
      },
      setStatucFormListObj(cardFliter,cardParam,cardForm,relaFromField,cardJoin,staticId,unitType){
        let obj = {
          filterType: this.getTilterType(cardFliter),
          unitName: cardParam,
          filterRules: {},
          relaFormId: cardForm,
          relaFromField1: [
            relaFromField
          ],
          groupRule: cardJoin,
          unitType: unitType,
          statId: staticId
        }
        return obj;
      },
      setStatucFormListObj2(cardFliter,cardParam,cardForm,relaFromField1,relaFromField2,cardJoin,staticId,unitType){
        let obj = {
          filterType: this.getTilterType(cardFliter),
          unitName: cardParam,
          filterRules: {},
          relaFormId: cardForm,
          relaFromField1: [
            relaFromField1
          ],
          relaFromField2: relaFromField2,
          groupRule: cardJoin,
          unitType: unitType,
          statId: staticId
        }
        return obj;
      },
      setStatucTableListObj(cardFliter,cardParam,cardForm,relaFromField,cardJoin,staticId,unitType){
        let obj = {
          //filterType: cardFliter,
          unitName: cardParam,
          filterRules: {},
          relaFormId: cardForm,
          relaFromField1: relaFromField,
          groupRule: cardJoin,
          unitType: unitType,
          statId: staticId,
          groupType: cardFliter
        }
        return obj;
      },
      addTableCol(event, index){
        let obj = {
          title: '',
          label: '',
          value: '-1',
          obj: {
            d:'',
            f:'',
            n:'',
            g:'-1'
          }
        };
        this.tableTitleColData.splice(index+1,0, obj);
      },
      minsTableCol(event, index){
        this.tableTitleColData.splice(index,1);
      },
      inputCard(event, value){
        if (value){
          if (value == 1){
            this.form.cardParam1 = this.form.cardTitle;
            this.staticPcFormList[1]['unitName'] = this.form.cardTitle;
          }else if (value == 2){
            this.form.cardParam2 = this.form.cardTitle;
            this.staticPcFormList[2]['unitName'] = this.form.cardTitle;
          }else if (value == 3){
            this.form.cardParam3 = this.form.cardTitle;
            this.staticPcFormList[3]['unitName'] = this.form.cardTitle;
          }else if (value == 4){
            this.form.cardParam4 = this.form.cardTitle;
            this.staticPcFormList[4]['unitName'] = this.form.cardTitle;
          }
        }else {
          if (this.settingType == 'search'){
            this.staticPcFormList[0]['unitName'] = this.form.searchStaticTitle;
          }else if (this.settingType == 'bar'){
            this.staticPcFormList[5]['unitName'] = this.form.chartParam;
          }else if (this.settingType == 'circle'){
            this.staticPcFormList[6]['unitName'] = this.form.circleParams;
          }else if (this.settingType == 'table'){
            this.staticPcFormList[7]['unitName'] = "";
          }
        }

      },
      handleSearchChange(data, type){
        if(type == 1){
          this.searchSetStaticFormOption = [];
          this.searchSetStaticForm = data;
          this.searchStaticForm = data;
          let filterType = "";
          if (data == "time"){
            filterType = 0;
          }else if (data == "college"){
            filterType = 2;
          }else if (data == "dept"){
            filterType = 1;
          }
          this.staticPcFormList[0]['filterType'] = filterType;
        }else if(type == 2){
          this.searchStaticForm = data;
        }else if(type == 2){
          this.searchSetStaticTimeForm = data;
        }
      },
      handleSelect(event, index){

      },
      handleSearchSelect(data, type){
        if (type == 1){
          this.searchSetStaticFormOption = data;
        }else if (type == 2){
          this.searchSetStaticFormOption = data;
        }
      },
      handleSelectLabel(item, indexItem, index){
        item.label = item.label;
        //console.log(indexItem);
        let obj = this.joinFormParamsOptionsArray[indexItem];
        this.tableTitleColData[index]['obj']['n'] = obj.n;
        this.tableTitleColData[index]['obj']['f'] = obj.f;
        this.tableTitleColData[index]['obj']['d'] = obj.d;
        this.$set(this.tableTitleColData[index], 'title', obj.n);

        let tableCol = this.tableTitleColData;
        let array = [];
        for (let i = 0; i < tableCol.length; i++){
          array.push(tableCol[i].obj);
        }
        this.staticPcFormList[7]['relaFromField1'] = array;
      },
      handleJoinFormParamsChange(item, data){
        let obj = {};
        obj['d'] = this.joinFormParamsOptionsArray[parseInt(data)]['d'];
        obj['f'] = this.joinFormParamsOptionsArray[parseInt(data)]['f'];
        obj['n'] = this.joinFormParamsOptionsArray[parseInt(data)]['n'];
        this.form.joinFormParamsValue = item.value;
        this.form.joinFormParamsValueObj = obj;
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardValue1 = obj;
            this.form.cardValue1Text = item.value;
            this.staticPcFormList[1]['relaFromField1'] = [obj];
          }else if (this.settingColValue == 2){
            this.form.cardValue2 = obj;
            this.form.cardValue2Text = item.value;
            this.staticPcFormList[2]['relaFromField1'] = [obj];
          }else if (this.settingColValue == 3){
            this.form.cardValue3 = obj;
            this.form.cardValue3Text = item.value;
            this.staticPcFormList[3]['relaFromField1'] = [obj];
          }else if (this.settingColValue == 4){
            this.form.cardValue4 = obj;
            this.form.cardValue4Text = item.value;
            this.staticPcFormList[4]['relaFromField1'] = [obj];
          }
        }else if (this.settingType == 'circle'){
          this.form.circleValue = obj;
          this.form.circleValueText = item.value;
          this.percentage = 0;
          this.percentageValue = obj.n;
          this.staticPcFormList[6]['relaFromField1'] = [obj];
        }
      },
      handleJoinFormValue(data){
        this.form.joinFormValue = data;
        this.form.joinFormParamsValue = "";
        this.form.joinFormParamsValueObj = {};
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardForm1 = data;
            this.staticPcFormList[1]['relaFormId'] = data;
            this.form.cardValue1 = "";
            this.form.cardValue1Text = "";
          }else if (this.settingColValue == 2){
            this.form.cardForm2 = data;
            this.staticPcFormList[2]['relaFormId'] = data;
            this.form.cardValue2 = "";
            this.form.cardValue2Text = "";
          }else if (this.settingColValue == 3){
            this.form.cardForm3 = data;
            this.staticPcFormList[3]['relaFormId'] = data;
            this.form.cardValue3 = "";
            this.form.cardValue3Text = "";
          }else if (this.settingColValue == 4){
            this.form.cardForm4 = data;
            this.staticPcFormList[4]['relaFormId'] = data;
            this.form.cardValue4 = "";
            this.form.cardValue4Text = "";
          }
        }else if (this.settingType == 'circle'){
          this.form.circleForm = data;
          this.staticPcFormList[6]['relaFormId'] = data;
          this.form.circleValue = "";
          this.form.circleValueText = "";
        }else if (this.settingType == 'table'){
          this.form.tableForm = data;
          this.staticPcFormList[7]['relaFormId'] = data;
          this.form.tableValue = "";
          this.form.tableValueText = "";
        }else if (this.settingType == 'bar'){
          this.form.chartForm = data;
          this.staticPcFormList[5]['relaFormId'] = data;
          this.form.chartValue = "";
          this.form.chartValueText = "";
        }
        this.getFiledInfo(data);
      },
      handleXChange(item,data){
        let obj = {};
        obj['d'] = this.joinFormParamsOptionsArray[data]['d'];
        obj['f'] = this.joinFormParamsOptionsArray[data]['f'];
        obj['n'] = this.joinFormParamsOptionsArray[data]['n'];
        this.form.chartXdata = item.value;
        this.form.chartXdataObj = obj;
        this.staticPcFormList[5]['relaFromField1'] = [obj];
      },
      handleYChange(item, index){
        let array = [];
        let arrayObj = [];
        let yData = [];
        let yDataNum = [];
        let arrayF = [];
        let tempData = {
          d: item['extra'],
          n: item['label'],
          f: item['value'],
        }
        let sel = inArray(tempData, this.form.chartYdataArray, 'f');
        if (sel > -1){
          this.form.chartYdataArray.splice(sel,1);
        }else {
          this.form.chartYdataArray.push(tempData);
        }
        let data = this.form.chartYdataArray;
        for (let i = 0; i < data.length; i++){
          //let obj = this.joinFormParamsOptionsArray[data[i]];
          let obj = {};
          obj['d'] = data[i].d;
          obj['f'] = data[i].f;
          obj['n'] = data[i].n;
          array.push(data[i].n);
          arrayObj.push(obj);
          yDataNum.push(10);
          arrayF.push(data[i].f);
        }
        this.form.chartYdata = arrayF;
        this.form.chartYdataObj = arrayObj;
        this.barDataLegned = array;
        this.staticPcFormList[5]['relaFromField2'] = arrayObj;

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
        this.tableTitleColData[index]['obj']['g'] = event;
        item.value = event;
        item.valueText = '';
      },
      handleFliterChange(data){
        this.form.joinFormFliterValue = data;
        this.form.fliterOption = [];
        this.resetCasadeSelector('SelectorCollege');
        this.resetCasadeSelector('SelectorDept');
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardFliter1 = data;
            this.staticPcFormList[1]['filterRules'] = {};
            this.staticPcFormList[1]['filterType'] = this.getTilterType(data);
          }else if (this.settingColValue == 2){
            this.form.cardFliter2 = data;
            this.staticPcFormList[2]['filterRules'] = {};
            this.staticPcFormList[2]['filterType'] = this.getTilterType(data);
          }else if (this.settingColValue == 3){
            this.form.cardFliter3 = data;
            this.staticPcFormList[3]['filterRules'] = {};
            this.staticPcFormList[3]['filterType'] = this.getTilterType(data);
          }else if (this.settingColValue == 4){
            this.form.cardFliter4 = data;
            this.staticPcFormList[4]['filterRules'] = {};
            this.staticPcFormList[4]['filterType'] = this.getTilterType(data);
          }
        }else if (this.settingType == 'circle'){
          this.form.circleFliter = data;
          this.staticPcFormList[6]['filterType'] = this.getTilterType(data);
        }else if (this.settingType == 'bar'){
          this.form.chartFliter = data;
          this.staticPcFormList[5]['filterType'] = this.getTilterType(data);
          if (data == 'time'){
            this.barDataKey = ['时间1','时间2','更多'];
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
            this.staticPcFormList[1]['groupRule'] = data;
          }else if (this.settingColValue == 2){
            this.form.cardJoin2 = data;
            this.staticPcFormList[2]['groupRule'] = data;
          }else if (this.settingColValue == 3){
            this.form.cardJoin3 = data;
            this.staticPcFormList[3]['groupRule'] = data;
          }else if (this.settingColValue == 4){
            this.form.cardJoin4 = data;
            this.staticPcFormList[4]['groupRule'] = data;
          }
        }else if (this.settingType == 'circle'){
          this.form.circleJoin = data;
          this.staticPcFormList[6]['groupRule'] = data;
        }else if (this.settingType == 'table'){
          this.form.tableJoin = data;
          this.staticPcFormList[7]['groupRule'] = data;
        }else if (this.settingType == 'bar'){
          this.form.chartJoin = data;
          this.staticPcFormList[5]['groupRule'] = data;
        }
      },
      handleJoinTableChange(data){
        this.form.tableJoin = data;
        this.staticPcFormList[7]['groupType'] = data;
      },
      handleSelectTime(data){
        this.form.fliterOption = data;
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardFliterOption1 = data;
            this.staticPcFormList[1]['filterRules'] = {};
            this.staticPcFormList[1]['filterRules'] = this.setFliterOptionValue(this.form.cardFliter1, this.staticPcFormList[1],data);
          }else if (this.settingColValue == 2){
            this.form.cardFliterOption2 = data;
            this.staticPcFormList[2]['filterRules'] = {};
            this.staticPcFormList[2]['filterRules'] = this.setFliterOptionValue(this.form.cardFliter2, this.staticPcFormList[2],data);
          }else if (this.settingColValue == 3){
            this.form.cardFliterOption3 = data;
            this.staticPcFormList[3]['filterRules'] = {};
            this.staticPcFormList[3]['filterRules'] = this.setFliterOptionValue(this.form.cardFliter3, this.staticPcFormList[3],data);
          }else if (this.settingColValue == 4){
            this.form.cardFliterOption4 = data;
            this.staticPcFormList[4]['filterRules'] = {};
            this.staticPcFormList[4]['filterRules'] = this.setFliterOptionValue(this.form.cardFliter4, this.staticPcFormList[4],data);
          }
        }else if (this.settingType == 'circle'){
          this.form.circleFliterOption = data;
          this.staticPcFormList[6]['filterRules'] = {};
          this.staticPcFormList[6]['filterRules'] = this.setFliterOptionValue(this.form.circleFliter, this.staticPcFormList[6],data);
        }else if (this.settingType == 'bar'){
          this.form.chartFliterOption = data;
          this.staticPcFormList[5]['filterRules'] = {};
          this.staticPcFormList[5]['filterRules'] = this.setFliterOptionValue(this.form.chartFliter, this.staticPcFormList[5],data);
        }else if (this.settingType == 'table'){
          this.form.tableFliterOption = data;
          this.staticPcFormList[7]['filterRules'] = {};
          this.staticPcFormList[7]['filterRules'] = this.setFliterOptionValue(this.form.tableFliter, this.staticPcFormList[7],data);
        }
      },
      closeDialog(){
        this.h5Dialog = false;
      },
      closePcDialog(){
        this.settingColValue = '';
        this.settingType = '';
        this.searchSetStaticForm = "";
        this.percentage = 0;
        this.percentageText = '内容';
        this.percentageValue = '表单字段';
        this.barDataLegned = ['类型1','类型2','类型3'], this.barDataKey = ['字段1','字段2','字段3'];
        this.tableTitleColData = [{title: '', label: '', value: '-1', valueText: '', obj: {d:'',f:'',n:'',g:'-1'}},];

        this.barData = [
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
        ];
        this.staticPcFormList = [
          {
            filterType: '',
            unitName: '',
            statId: '',
            unitType: '4'
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {

            },
            relaFormId: '',
            relaFromField1: {
              collegeId: [],
              deptId: [],
              date1: [],
              date2: []
            },
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {

            },
            relaFormId: '',
            relaFromField1: [],
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {

            },
            relaFormId: '',
            relaFromField1: [],
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {

            },
            relaFormId: '',
            relaFromField1: [],
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {

            },
            relaFormId: '',
            relaFromField1: [],
            relaFromField2: [],
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {

            },
            relaFormId: '',
            relaFromField1: [],
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {

            },
            relaFormId: '',
            relaFromField1: [],
            groupRule: '-1',
            unitType: '0',
            statId: '',
            groupType: '0'
          }
        ];
        this.form = {
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
          cardJoin1: '-1',
          cardJoin2: '-1',
          cardJoin3: '-1',
          cardJoin4: '-1',
          cardFliter1: '',
          cardFliter2: '',
          cardFliter3: '',
          cardFliter4: '',
          cardFliterOption1: '',
          cardFliterOption2: '',
          cardFliterOption3: '',
          cardFliterOption4: '',
          cardFliterStartTime1: '',
          cardFliterEndTime1: '',
          cardFliterStartTime2: '',
          cardFliterEndTime2: '',
          cardFliterStartTime3: '',
          cardFliterEndTime3: '',
          cardFliterStartTime4: '',
          cardFliterEndTime4: '',
          chartParam: '字段名称',
          chartValue: '',
          chartValueText: '',
          chartJoin: '',
          chartForm: '',
          chartFliter: '',
          chartFliterOption: '',
          chartXdata: '',
          chartXdataObj: '',
          chartYdata: '',
          chartYdataObj: '',
          chartYdataArray: [],
          cardTitle: '',
          cardValue: '',
          circleParams: '字段名称',
          circleValue: 0,
          circleValueText: '',
          circleForm: '',
          circleFliter: '',
          circleFliterOption: '',
          circleFliterStartTime: '',
          circleFliterEndTime: '',
          circleJoin: '-1',
          tableForm: '',
          tableValue: '',
          tableValueText: '',
          tableFliter: '',
          tableFliterOption: '',
          tableFliterStartTime: '',
          tableFliterEndTime: '',
          tableJoin: '',
          joinFormValue: '',
          joinFormParamsValue: '',
          joinFormParamsValueObj: {},
          joinFormFliterValue: '',
          joinFormJoinValue: '',
          joinFormXValue: '',
          joinFormYValue: [],
          fliterOption: [],
          fliterOptionStartTime: '',
          fliterOptionEndTime: '',
          joinTableJoinValue: []
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
