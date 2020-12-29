<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">考勤查询</span>
        </div>
        <my-el-tree type="4" sub-type="4" @node-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-right-tab">
          <el-row>
            <el-col :span="24">
              <my-search-of-date size="small" :show-week="false" :show-term="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType">
                <span slot="opr" class="layout-inline">
                  <my-select :sel-value="searchAttendType" class="layout-item" :clearable="false" size="small" width-style="150" :options="filterAttendTypes" @change="handleChange"></my-select>
                </span>
                <span slot="other">
                  <el-input size="small" class="width-150" v-model="searchKey" :clearable="true" :placeholder="$t('姓名/工号')"></el-input>
                </span>
              </my-search-of-date>
            </el-col>
          </el-row>
        </div>

        <div class="bg-white border-bottom-1 padding-lr-5 padding-tb-5" :style="divHeight">
          <div v-if="tableData.length <= 0">
            <div class="text-center padding-tb-10">
              <span class="color-disabeld">{{$t("暂无数据")}}</span>
            </div>
          </div>
          <el-row v-else :gutter="32">
            <el-col :span="12" v-for="(item, index) in tableData" :key="index" class="margin-bottom-20">
              <el-tabs type="border-card" v-model="item.attendType">
                <el-tab-pane :label="$t('行政考勤')" name="attend" style="height: 150px">
                  <div>
                    <div class="color-grand font-size-17">
                      <span>{{item.realName}}</span>
                      <span>|</span>
                      <span>{{item.jobNum}}</span>
                    </div>
                    <div class="color-muted font-size-14 margin-top-5">
                      <span>{{item.departName}}</span>
                    </div>
                  </div>

                  <div class="margin-top-20 color-sub-grand">
                    <el-row :gutter="16">
                      <el-col :span="6">
                        <el-tag>
                          <span>{{$t("应出勤")}}</span>
                          <span>{{item.workAttendMap.shouldDays}}{{$t("天")}}</span>
                        </el-tag>
                      </el-col>
                      <el-col :span="6">
                        <el-tag type="success">
                          <span>{{$t("正常")}}</span>
                          <span>{{item.workAttendMap.normal}}{{$t("天")}}</span>
                        </el-tag>
                      </el-col>
                      <el-col :span="6">
                        <el-tag type="warning">
                          <span>{{$t("旷工")}}</span>
                          <span>{{item.workAttendMap.abs}}{{$t("天")}}</span>
                        </el-tag>
                      </el-col>
                    </el-row>
                    <el-row :gutter="16" class="margin-top-10">
                      <el-col :span="6">
                        <el-tag type="warning">
                          <span>{{$t("迟到")}}</span>
                          <span>{{item.workAttendMap.late}}{{$t("次")}}</span>
                        </el-tag>
                      </el-col>
                      <el-col :span="6">
                        <el-tag type="error">
                          <span>{{$t("早退")}}</span>
                          <span>{{item.workAttendMap.early}}{{$t("次")}}</span>
                        </el-tag>
                      </el-col>
                      <el-col :span="6">
                        <el-tag type="warning">
                          <span>{{$t("请假")}}</span>
                          <span>{{item.workAttendMap.leave}}{{$t("天")}}</span>
                        </el-tag>
                      </el-col>
                      <el-col :span="6">
                        <el-tag>
                          <span>{{$t("出差")}}</span>
                          <span>{{item.workAttendMap.travel}}{{$t("天")}}</span>
                        </el-tag>
                      </el-col>
                    </el-row>
                  </div>
                </el-tab-pane>
                <el-tab-pane :label="$t('会议考勤')" name="meeting" style="height: 150px">
                  <div>
                    <div class="color-grand font-size-17">
                      <span>{{item.realName}}</span>
                      <span>|</span>
                      <span>{{item.jobNum}}</span>
                    </div>
                    <div class="color-muted font-size-14 margin-top-5">
                      <span>{{item.departName}}</span>
                    </div>
                  </div>

                  <div class="margin-top-20 color-sub-grand">
                    <el-row :gutter="16">
                      <el-col :span="6">
                        <el-tag>
                          <span>{{$t("应出勤")}}</span>
                          <span>{{item.meetingMap.shouldNum}}{{$t("次")}}</span>
                        </el-tag>
                      </el-col>
                      <el-col :span="6">
                        <el-tag type="success">
                          <span>{{$t("正常")}}</span>
                          <span>{{item.meetingMap.actualNum}}{{$t("次")}}</span>
                        </el-tag>
                      </el-col>
                    </el-row>
                    <el-row :gutter="16" class="margin-top-10">
                      <el-col :span="6">
                        <el-tag type="warning">
                          <span>{{$t("请假")}}</span>
                          <span>{{item.meetingMap.leaveNum}}{{$t("次")}}</span>
                        </el-tag>
                      </el-col>
                      <el-col :span="6">
                        <el-tag type="error">
                          <span>{{$t("缺席")}}</span>
                          <span>{{item.meetingMap.unSignNum}}{{$t("次")}}</span>
                        </el-tag>
                      </el-col>
                    </el-row>
                  </div>
                </el-tab-pane>
                <el-tab-pane :label="$t('日常请假')" name="leave" style="height: 150px">
                  <div>
                    <div class="color-grand font-size-17">
                      <span>{{item.realName}}</span>
                      <span>|</span>
                      <span>{{item.jobNum}}</span>
                    </div>
                    <div class="color-muted font-size-14 margin-top-5">
                      <span>{{item.departName}}</span>
                    </div>
                  </div>

                  <div class="margin-top-20 color-sub-grand">
                    <el-row :gutter="16">
                      <el-col :span="6">
                        <el-tag>
                          <span>{{$t("总次数")}}</span>
                          <span>{{item.leaveMap.totalLeaveCount}}{{$t("次")}}</span>
                        </el-tag>
                      </el-col>
                      <el-col :span="6">
                        <el-tag type="success">
                          <span>{{$t("总天数")}}</span>
                          <span>{{item.leaveMap.count}}{{$t("天")}}</span>
                        </el-tag>
                      </el-col>
                    </el-row>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </el-col>
          </el-row>
        </div>
        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>
  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import LayoutLr from "../../../components/Layout/LayoutLr";
  import MyElTree from "../../../components/tree/MyElTree";
  import MyPagination from "../../../components/MyPagination";
  import MyInputButton from "../../../components/search/MyInputButton";
  import MySex from "../../../components/MySex";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MySelect from "../../../components/MySelect";
  import MyCascader from "../../../components/utils/select/MyCascader";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyNormalDialog from "../../../components/utils/dialog/MyNormalDialog";
  import DrawerRight from "../../../components/utils/dialog/DrawerRight";
  import MySearchOfDate from "../../../components/search/MySearchOfDate";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import {
    clearData, deviceType,
    dormStatus
  } from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,MySearchOfDate,DrawerLayoutRight},
    data(){
      return {
        searchTimeData: {},
        tableData: [],
        tableDetailData: [],
        searchDate: [],
        filtersDeviceType: [],
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        searchBuild: '',
        searchFloor: '',
        searchKey: '',
        searchStaticType: '',
        searchDeviceType: '',
        searchDept: '',
        subTitle: '',
        uploadProcess: '',
        searchType: -1,
        searchDetailType: -1,
        uploadResult: {},
        showType: 1,
        mainType: "1",
        subType: "4",
        uploadFile: common.teacher_file + "?fileName=" + encodeURIComponent(this.$t("学生导入模板20180130_v2.xls")),
        uploadAction: common.student_upload,
        loopTimer: null,
        resultList: [],
        searchTopTime: this.$moment(new Date).format("YYYY-MM-DD"),
        attendType: 'attend',
        searchAttendType: 'attend'
      }
    },
    created() {
      this.init();
      this.deviceTypeGetInfo();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          keyWord: this.searchKey,
          staticType: this.searchStaticType
        };
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          let day = this.searchTimeData.value;
          params['busiTime'] = day;
          params['timeUnit'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeUnit'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          let month = this.searchTimeData.value;
          params['year'] = month.split("-")[0];
          params['month'] = month.split("-")[1];
          params['timeUnit'] = 4;
        }else if (this.searchTimeData.timeUnit == 4){
          params['year'] = this.searchTimeData.value;
          params['timeUnit'] = 6;
        }else {
          let day = this.$moment(new Date()).format("YYYY-MM-DD");
          params['busiTime'] = this.$moment(new Date()).format("YYYY-MM-DD");
          params['timeUnit'] = 3;
        }
        params['departmentPath'] = this.searchDept.value;
        params = this.clearDataInfo(params);
        this.$axios.get(common.attend_teacher_static_list_page, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['attendType'] = this.attendType;
            }
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      nodeClick(data){
        this.searchDept = data;
        this.init();
      },
      sizeChange(event){
        this.page = 1;
        this.num = event;
        this.init();
      },
      currentPage(event){
        this.page = event;
        this.init();
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      handleChangeTime(data, type){
        switch (type) {
          case 1:
            this.form.borthday = data;
            break;
          case 2:
            this.form.innerTime = data;
            break;
          case 3:
            this.form.workTime = data;
            break;
        }
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      closeDrawerDialog(event){
        this.pageDetail = 1;
        this.numDetail = 20;
        this.searchUserId = "";
        this.drawerVisible = event;
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      searchTopDate(data){
        this.searchTimeData = data;
        this.init();
      },
      searchTopType(data){

      },
      dormStatusInfo(val){
        return dormStatus('set', val);
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'deviceType'){
            this.searchDeviceType = value[item][0];
          }
        }
        this.init();
      },
      handleChange(data){
        this.attendType = data;
        this.init();
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      clearDataInfo(data){
        return clearData(data);
      },
      deviceTypeInfo(type, val){
        return deviceType(type, val);
      },
      deviceTypeGetInfo(type, val){
        let arr = [];
        let deviceList = deviceType('get', val);
        for (let i in deviceList){
          arr.push({
            value: i,
            text: deviceList[i]
          });
        }
        this.filtersDeviceType = arr;
      },
      changeTree(mainType, subType, type){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        this.searchBuild = "";
        this.searchFloor = "";
        this.mainType = ''+mainType;
        this.subType = ''+subType;
        this.showType = type;
        this.init();
      }
    }
  }
</script>

<style scoped>
  .container {

  }
</style>
