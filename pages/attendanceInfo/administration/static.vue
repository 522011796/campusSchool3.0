<template>
  <div class="container">
    <div class="container">
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">考勤统计</span>
          </div>
          <my-el-tree type="4" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div>
            <!--<my-search-of-date size="small" :show-year="true" :show-term="false" :show-week="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType">

            </my-search-of-date>-->
            <my-search-of-date-group size="small" :show-year="true" :show-term="false" :show-week="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType"></my-search-of-date-group>
          </div>
          <div class="margin-top-10">
            <div v-if="toggleTopShow == false" style="position: relative;">
              <el-card shadow="never" :body-style="{padding: '5px 10px',height: '60px'}">
                <div>
                  <el-row>
                    <el-col :span="8">
                      <div class="rpStatic-top-item-mini color-muted">
                        <i class="fa fa-user"></i>
                        {{$t("总人数")}}:
                      </div>
                      <div class="color-grand margin-top-5 font-size-25 margin-left-15" style="font-weight: bold">
                        <span>{{personTotal}}</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="rpStatic-top-item-mini color-muted">
                        <i class="fa fa-cubes"></i>
                        <label>{{$t("出勤率")}}:</label>
                      </div>
                      <div class="font-size-25 margin-top-5 color-muted margin-left-20">
                        <label>{{attendData}}%</label>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="rpStatic-top-item-mini color-muted">
                        <i class="fa fa-cube"></i>
                        <label>{{$t("异常状态占比")}}:</label>
                      </div>
                      <div v-if="typeData.length <= 0" class="color-disabeld margin-left-18" style="position: relative; top: 20%;">{{$t("暂无数据")}}</div>
                      <div v-else class="font-size-12 color-muted margin-left-18">
                        <div class="font-size-12 color-muted" v-for="(item, index) in typeData" :key="index">
                          <div v-if="index < 2">
                            <label>{{item.name}}:</label>
                            <label>{{item.rate}}%</label>
                          </div>
                        </div>
                        <div class="font-size-12 color-muted" v-if="typeData.length > 2">
                          ...
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
              <div class="text-center toggle-show-icon" @click="toggleTopShow = !toggleTopShow">
                <div class="font-size-12 toggle-show-icon-block">
                  <i class="fa fa-angle-double-down"></i>
                  <label>{{$t("展开")}}</label>
                </div>
              </div>
            </div>
            <div v-if="toggleTopShow == true" style="position: relative;">
              <el-card shadow="never" :body-style="{padding: '5px 10px',height: '150px'}">
                <el-row :gutter="8">
                  <el-col :span="8">
                    <div class="rpStatic-top-item color-muted">
                      <div class="pull-left">
                        <div class="margin-top-20 color-grand text-center" style="font-weight: bold">
                          <div>
                            <i class="fa fa-id-card color-disabeld" style="font-size: 20px"></i>
                          </div>
                          <div class="margin-top-5">
                            <span class="font-size-25">{{personTotal}}</span>
                          </div>
                        </div>
                        <div class="margin-top-10 color-muted">
                          <span class="person-item text-right">{{$t("总人数")}}</span>
                        </div>
                      </div>
                      <div class="pull-left margin-left-10">
                        <div class="line-ver-height" style="height: 150px"></div>
                      </div>
                      <div class="pull-left margin-left-10" style="overflow-y: auto; height: 150px">
                        <div class="margin-top-5 color-muted" v-for="(item, index) in typeData" :key="index">
                          <span class="text-right">{{item.name}}</span>
                          <el-tag size="mini" type="success">{{item.value}}</el-tag>
                        </div>
                      </div>
                      <div class="moon-clearfix"></div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="rpStatic-top-item color-muted">
                      <div class="title">{{$t("出勤率")}}: </div>
                      <div style="height: 140px">
                        <table-bar-chart chart-id="typeId" :chart-title='$t("出勤率")' :data="attendData"></table-bar-chart>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="rpStatic-top-item color-muted">
                      <div class="title">{{$t("异常状态占比")}}: </div>
                      <div>
                        <div style="height: 140px">
                          <div v-if="typeData.length <= 0" class="color-disabeld text-center" style="position: relative; top: 20%;">{{$t("暂无数据")}}</div>
                          <circle-chart v-else chart-id="levelId" :chart-title='$t("等级占比")' :data-key="typeDataKey" :data="typeData"></circle-chart>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-card>
              <div class="text-center toggle-show-icon" @click="toggleTopShow = !toggleTopShow">
                <div class="font-size-12 toggle-show-icon-block">
                  <i class="fa fa-angle-double-up"></i>
                  <label>{{$t("收起")}}</label>
                </div>
              </div>
            </div>
          </div>

          <div class="layout-right-tab margin-top-10">
            <el-row class="layout-inline">
              <el-col :span="12">
                <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
              </el-col>
              <el-col :span="12" class="text-right">
                <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('姓名/工号')" @click="search"></my-input-button>
              </el-col>
            </el-row>
          </div>
          <div>
            <el-table
              :data="tableData"
              header-cell-class-name="custom-table-cell-bg"
              size="medium"
              :max-height="toggleTopShow == false ? tableHeight11.height : tableHeight6.height"
              style="width: 100%">
              <el-table-column
                fixed
                align="center"
                :label="$t('姓名')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.realName}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <span>{{scope.row.realName}}</span>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                fixed
                align="center"
                :label="$t('部门')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.departName ? scope.row.departName : '--'}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.departName ? scope.row.departName : '--'}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                fixed
                align="center"
                :label="$t('工号')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.jobNum}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.jobNum}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="150"
                :label="$t('出勤天数')">

                <template slot-scope="scope">
                  <span>{{scope.row.workAttendMap.normal}}</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="150"
                :label="$t('累计旷工天数')">

                <template slot-scope="scope">
                  <span>{{scope.row.workAttendMap.abs}}</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="150"
                :label="$t('连续旷工天数')">

                <template slot-scope="scope">
                  <span class="color-grand" @click="showDetail(scope.row)">{{scope.row.workAttendMap.lxabs}}</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="150"
                :label="$t('迟到次数')">

                <template slot-scope="scope">
                  <span>{{scope.row.workAttendMap.late}}</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="150"
                :label="$t('早退次数')">

                <template slot-scope="scope">
                  <span>{{scope.row.workAttendMap.early}}</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="150"
                :label="$t('累计考勤天数')">

                <template slot-scope="scope">
                  <span>{{scope.row.workAttendMap.shouldDays}}</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="150"
                :label="$t('累计出差天数')">

                <template slot-scope="scope">
                  <span>{{scope.row.workAttendMap.travel}}</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="150"
                :label="$t('连续请假次数')">

                <template slot-scope="scope">
                  <span>{{scope.row.leaveMap.totalContinueLeaveCount}}</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="150"
                :label="$t('会议缺勤次数')">

                <template slot-scope="scope">
                  <span>{{scope.row.meetingMap.unSignNum}}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </layout-lr>
    </div>

    <drawer-layout-right @changeDrawer="closeDrawerDialog" :hide-footer="false" :visible="drawerVisible" size="550px" :title="$t('连续旷工天数详情')" @right-close="cancelDrawDialog">
      <div slot="content">
        <el-table
          :data="tableDetailData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          style="width: 100%">
          <el-table-column
            label="次数"
            align="center">
            <template slot-scope="scopeItem">
              <span>{{scopeItem.row.time1}} - {{scopeItem.row.time2}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="days"
            label="天数"
            align="center">
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer" class="text-right padding-lr-10">
        {{$t("共")}}{{tableDetailData.length}}{{$t("条")}}
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import LayoutLr from "../../../components/Layout/LayoutLr";
  import MySelect from "../../../components/MySelect";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import MyAuditDetail from "../../../components/utils/auditDetail/MyAuditDetail";
  import MyElTree from "../../../components/tree/MyElTree";
  import MyPagination from "../../../components/MyPagination";
  import MyAuditStatus from "../../../components/utils/MyAuditStatus";
  import CircleChart from "../../../components/charts/CircleChart";
  import MyRadio from "../../../components/MyRadio";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MyInputButton from "../../../components/search/MyInputButton";
  import UploadSquare from "../../../components/utils/upload/UploadSquare";
  import MySearchOfDate from "../../../components/search/MySearchOfDate";
  import {common} from "../../../utils/api/url";
  import {MessageError, MessageSuccess, MessageWarning} from "../../../utils/utils";
  import stuQuantiValidater from "../../../utils/validater/stuQuantiValidater";
  export default {
    mixins: [mixins, stuQuantiValidater],
    components: {LayoutLr,MyElTree,MySelect,DrawerLayoutRight,MyAuditDetail,MyPagination,MyAuditStatus,CircleChart,MyRadio,DialogNormal,MyInputButton,UploadSquare,MySearchOfDate},
    data(){
      return {
        toggleTopShow: false,
        filterStatusTypes: [],
        searchTimeData: {},
        searchTopTime: this.$moment(new Date()).format("YYYY-MM-DD"),
        centerTop: ['40%', '50%'],
        pageStudent: 1,
        numStudent: 20,
        totalStudent: 0,
        dataAudit: {},
        configData: {},
        drawerVisible: false,
        drawerClassVisible: false,
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        studentLoading: false,
        popverVisible: false,
        subTitle: '',
        tableData: [],
        studentData: [],
        tableStatusData: [],
        searchDept: '',
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        searchLocalClass: '',
        applyTimeBegin: '',
        applyTimeEnd: '',
        type: '',
        level: '',
        status: '',
        searchKey: '',
        searchDate: [],
        //filterTypes: [{ text: this.$t("处分"), value: '处分' }, { text: '奖励', value: '奖励' }],
        filterLevels: [],
        filterAddLevels: [],
        //filterStatus: [{ text: this.$t("待审批"), value: '0' }, { text: '已通过', value: '3' }, { text: '已驳回', value: '4' }],
        personTotal: 0,
        reTotal: 0,
        puTotal: 0,
        uploadFileAction: common.upload_file,
        attendData: 0,
        typeData: [],
        typeDataKey: [],
        levelData: [],
        levelDataKey: [],
        searchStudentKey: '',
        errorStudent: '',
        staticData: {},
        qtztRate: 0,
        allStatus: [],
        allStatusKey: [],
        rightStatus: [],
        rightStatusKey: [],
        leftStatus: [],
        leftStatusKey: [],
        shareData: {},
        tableDetailData: [],
        form: {
          leaveRateType: 3,
          unSignRateType: 3,
          acturalRateType: 3,
          punishRateType: 3,
          homeworkRateType: 3,
          classRateType: 3,
          leaveRate: '',
          unSignRate: '',
          acturalRate: '',
          punishRate: '',
          homeworkRate: '',
          classRate: '',
          rateRange: []
        },
        formConf:{
          id: '',
          name: '',
          min: '',
          max: ''
        }
      }
    },
    created() {
      this.init();
    },
    methods: {
      async init(){
        let params = {
          page: this.page,
          num: this.num,
          departmentPath: this.searchDept.value,
          keyWord: this.searchKey,
          staticType: 1
        };
        await this.getCurrentGDateInfo();
        await this.getSessionInfo();
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          let day = this.searchTimeData.value;
          params['busiTime'] = day;
          params['timeUnit'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeUnit'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          let day = this.searchTimeData.value;
          params['year'] = day.split("-")[0];
          params['month'] = day.split("-")[1];
          params['timeUnit'] = 4;
        }else if (this.searchTimeData.timeUnit == 4){
          params['year'] = this.searchTimeData.value;
          params['timeUnit'] = 6;
        }else {
          let day = this.$moment(new Date()).format("YYYY-MM-DD");
          params['busiTime'] = this.$moment(new Date()).format("YYYY-MM-DD");
          params['timeUnit'] = 3;
        }
        params['termId'] = this.currentTermId;
        this.initStatic(params);
        this.initInfo(params);
      },
      initInfo(params){
        this.$axios.get(common.attend_teacher_static_list_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initStatic(params){
        this.$axios.get(common.attend_teacher_static_count, {params: params}).then(res => {
          if (res.data.data){
            this.personTotal = res.data.data.userSize;

            let typeKey = [];
            let typeList = [];
            typeList.push({
              name: this.$t("迟到"),
              value: res.data.data.late == null ? 0 : res.data.data.late,
              rate: res.data.data.lateRate == null ? 0 : res.data.data.lateRate,
            },{
              name: this.$t("早退"),
              value: res.data.data.early == null ? 0 : res.data.data.early,
              rate: res.data.data.earlyRate == null ? 0 : res.data.data.earlyRate,
            },{
              name: this.$t("旷工"),
              value: res.data.data.abs == null ? 0 : res.data.data.abs,
              rate: res.data.data.absRate == null ? 0 : res.data.data.absRate,
            },{
              name: this.$t("请假"),
              value: res.data.data.leave == null ? 0 : res.data.data.leave,
              rate: res.data.data.leaveRate == null ? 0 : res.data.data.leaveRate,
            },{
              name: this.$t("出差"),
              value: res.data.data.travel == null ? 0 : res.data.data.travel,
              rate: res.data.data.travelRate == null ? 0 : res.data.data.travelRate,
            });
            typeKey = [this.$t("迟到"), this.$t("早退"), this.$t("旷工"), this.$t("请假"), this.$t("出差")];

            this.attendData = res.data.data.chuqinRate;
            this.typeData = typeList;
            this.typeDataKey = typeKey;
          }
        });
      },
      nodeClick(data){
        this.searchDept = data;
        this.page = 1;
        this.init();
      },
      searchStudent(data){
        this.searchStudentKey = data;
        this.initStudent();
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
      jumpPage(data){
        this.page = data;
        this.init();
      },
      search(data){
        this.searchKey = data.input;
        this.init();
      },
      expandInfo(){
        let url = common.attend_teacher_static_page_export;
        let params = {
          page: this.page,
          num: this.num,
          departmentPath: this.searchDept.value,
          keyWord: this.searchKey,
          staticType: 1
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
          let day = this.searchTimeData.value;
          params['year'] = day.split("-")[0];
          params['month'] = day.split("-")[1];
          params['timeUnit'] = 4;
        }else if (this.searchTimeData.timeUnit == 4){
          params['year'] = this.searchTimeData.value;
          params['timeUnit'] = 6;
        }else {
          let day = this.$moment(new Date()).format("YYYY-MM-DD");
          params['busiTime'] = this.$moment(new Date()).format("YYYY-MM-DD");
          params['timeUnit'] = 3;
        }
        params['termId'] = this.currentTermId;
        params = this.$qs.stringify(params);
        window.open(url+"?"+params, "_self");
      },
      searchTopDate(data){
        this.searchTimeData = data;
        this.page = 1;
        this.init();
      },
      searchTopType(data){

      },
      search(data){
        this.page = 1;
        this.searchKey = data.input;
        this.init();
      },
      showDetail(data){
        if (data && data.workAttendMap && data.workAttendMap.lxabsList){
          this.tableDetailData = data.workAttendMap.lxabsList;
        }
        this.drawerVisible = true;
      },
      closeDrawerDialog(event){
        this.auditObjectItem = {};
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .rpStatic-top-item .person-item{
    display: inline-block;
    width: 60px;
  }
  .rpStatic-top-item .title{
    font-weight: bold;
  }
  .rp-img{
    height: 50px;
    width: 50px;
    border: 1px solid #dddddd;
  }
  .rp-fotter-page{
    border: 1px solid #EBEEF5;
    border-top: 0px;
    height: 30px;
    line-height: 30px;
    width: 348px;
  }
  .ellipsis-text{
    display: inline-block;
    max-width: 50px;
  }
  .title-tag{
    display: inline-block;
    height: 20px;
    width: 5px;
    border-radius: 5px;
    background: #E6A23C;
  }
  .title-text{
    position: relative;
    top: -5px;
  }
</style>
