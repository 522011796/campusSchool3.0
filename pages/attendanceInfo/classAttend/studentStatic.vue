<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">学生统计</span>
        </div>
        <my-el-tree type="1" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="14">
              <my-year-term ref="yearRef" size="small" :show-default-week="true" :clearable-week="true" @changeYear="hangdleChange($event,1)" @changeTerm="hangdleChange($event,2)" @changeWeek="hangdleChange($event,3)"></my-year-term>
              <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
            </el-col>
            <el-col :span="10" class="text-right">
              <my-course-select ref="courseSelect" :filterable="true" size="small" :clearable="true" :sel-value="searchCourseId" @change="handleCourseChange"></my-course-select>
              <my-input-button ref="teacher" size="small" plain width-class="width: 120px" type="success" :clearable="true" @click="search"></my-input-button>
            </el-col>
          </el-row>
        </div>

        <div class="margin-top-10">
          <el-table
            ref="refTable"
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :max-height="tableHeight2.height"
            style="width: 100%">
            <el-table-column
              align="center"
              :label="$t('姓名')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.studentName ? scope.row.studentName : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.studentName ? scope.row.studentName : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('学号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.studentNo ? scope.row.studentNo : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.studentNo ? scope.row.studentNo : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班级')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.className ? scope.row.className : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.className ? scope.row.className : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('性别')">
              <template slot-scope="scope">
                <my-sex tag="text" :sex="scope.row.sex"></my-sex>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('正常')">
              <template slot-scope="scope">
                <el-popover trigger="click" placement="top" popper-class="custom-table-popover" @show="showDetail(scope.row.userId)">
                  <div class="text-left pop-height">
                    <div v-for="(item,index) in detailData" :key="index" class="pop-block">
                      <span class="pop-item">{{item.courseName}}:</span>
                      <span class="pop-item">{{item.actualNum}}</span>
                    </div>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-grand">{{scope.row.actualNum}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('旷课')">
              <template slot-scope="scope">
                <el-popover trigger="click" placement="top" popper-class="custom-table-popover" @show="showDetail(scope.row.userId)">
                  <div class="text-left pop-height">
                    <div v-for="(item,index) in detailData" :key="index" class="pop-block">
                      <span class="pop-item">{{item.courseName}}:</span>
                      <span class="pop-item">{{item.notSignNum}}</span>
                    </div>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-grand">{{scope.row.notSignNum}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('请假')">
              <template slot-scope="scope">
                <el-popover trigger="click" placement="top" popper-class="custom-table-popover" @show="showDetail(scope.row.userId)">
                  <div class="text-left pop-height">
                    <div v-for="(item,index) in detailData" :key="index" class="pop-block">
                      <span class="pop-item">{{item.courseName}}:</span>
                      <span class="pop-item">{{item.leaveNum}}</span>
                    </div>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-grand">{{scope.row.leaveNum}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('应出勤')">
              <template slot-scope="scope">
                <el-popover trigger="click" placement="top" popper-class="custom-table-popover" @show="showDetail(scope.row.userId)">
                  <div class="text-left pop-height">
                    <div v-for="(item,index) in detailData" :key="index" class="pop-block">
                      <span class="pop-item">{{item.courseName}}:</span>
                      <span class="pop-item">{{item.shouldNum}}</span>
                    </div>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-grand">{{scope.row.shouldNum}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('迟到')">
              <template slot-scope="scope">
                <el-popover trigger="click" placement="top" popper-class="custom-table-popover" @show="showDetail(scope.row.userId)">
                  <div class="text-left">
                    <div v-for="(item,index) in detailData" :key="index" class="pop-block">
                      <span class="pop-item">{{item.courseName}}:</span>
                      <span class="pop-item">{{item.lateNum}}</span>
                    </div>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-grand">{{scope.row.lateNum}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('早退')">
              <template slot-scope="scope">
                <el-popover trigger="click" placement="top" popper-class="custom-table-popover" @show="showDetail(scope.row.userId)">
                  <div class="text-left">
                    <div v-for="(item,index) in detailData" :key="index">
                      <span class="pop-item">{{item.courseName}}:</span>
                      <span class="pop-item">{{item.leaveEarlyNum}}</span>
                    </div>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-grand">{{scope.row.leaveEarlyNum}}</span>
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
  import MyYearTerm from "../../../components/search/MyYearTerm";
  import {
    clearData, deviceType,
    dormStatus
  } from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,MySearchOfDate,DrawerLayoutRight,MyYearTerm},
    data(){
      return {
        searchTimeData: {},
        tableData: [],
        tableDetailData: [],
        searchDate: [],
        filtersDeviceType: [],
        detailData: [],
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
        searchCourseId: '',
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
        selYear: '',
        selTerm: '',
        selWeek: ''
      }
    },
    created() {
      this.initInfo();
    },
    methods: {
      async initInfo(){
        await this.getSessionInfo();
        await this.initCurrentYearList();
        await this.initCurrentTermList(this.currentYearData);
        this.selYear = this.currentYearData ? this.currentYearData : this.currentYearId;
        this.selTerm = this.currentTermData ? this.currentTermData : this.currentTermId;
        this.init();
      },
      init(){
        let params = {
          page: this.page,
          num: this.num,
          yearSelect: this.selYear,
          termId: this.selTerm,
          weekNum: this.selWeek,
          courseId: this.searchCourseId,
        };
        params['studentName'] = this.searchKey.input;
        params['collegeId'] = this.searchCollege;
        params['majorId'] = this.searchMajor;
        params['grade'] = this.searchGrade;
        params['classId'] = this.searchClass;
        params = this.clearDataInfo(params);
        this.$axios.get(common.attend_class_static_stu_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      showDetail(userId){
        let params = {
          studentId: userId,
          termId: this.selTerm,
          courseId: this.searchCourseId
        };
        this.$axios.get(common.attend_class_static_stu_detail, {params: params, loading: false}).then(res => {
          if (res.data.data){
            this.detailData = res.data.data;
          }
        });
      },
      nodeClick(data){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        this.searchBuild = "";
        this.searchFloor = "";

        if (this.mainType == 1){
          if (data.unit == 1){
            this.searchCollege = data.id;
            this.$refs.courseSelect.initSelect(this.searchCollege, this.searchMajor, this.searchClass);
          }else if (data.unit == 2){
            this.searchCollege = data.college_id;
            this.searchMajor = data.id;
            this.$refs.courseSelect.initSelect(this.searchCollege, this.searchMajor, this.searchClass);
          }else if (data.unit == 3){
            this.searchMajor = data.major_id;
            this.searchGrade = data.grade;
          }else if (data.unit == 4){
            this.searchClass = data.id;
            this.$refs.courseSelect.initSelect(this.searchCollege, this.searchMajor, this.searchClass);
          }

          if (!data.unit){
            this.$refs.courseSelect.initSelect();
          }
        }else if (this.mainType == 2){
          if (data.unit == 6){
            this.searchBuild = data.id;
          }else if (data.unit == 7){
            this.searchBuild = data.buildId;
            this.searchFloor = data.id;
          }
        }
        this.page = 1;
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
      jumpPage(data){
        this.page = data;
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
        this.page = 1;
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
        this.searchDate = data;
      },
      search(data){
        this.searchKey = data;
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
      },
      handleCourseChange(data){
        this.searchCourseId = data;
        this.init();
      },
      hangdleChange(data, type){
        switch (type) {
          case 1:
            this.selYear = data.year;
            this.selTerm = data.term;
            this.selWeek = data.week;
            this.init();
            break;
          case 2:
            this.selYear = data.year;
            this.selTerm = data.term;
            this.selWeek = data.week;
            this.init();
            break;
          case 3:
            this.selYear = data.year;
            this.selTerm = data.term;
            this.selWeek = data.week;
            this.init();
            break;
        }
      },
      expandInfo(){
        let url = "";
        let params = {
          page: this.page,
          num: this.num,
          yearSelect: this.selYear,
          termId: this.selTerm,
          weekNum: this.selWeek,
          courseId: this.searchCourseId
        };
        params['studentName'] = this.searchKey.input;
        params['collegeId'] = this.searchCollege;
        params['majorId'] = this.searchMajor;
        params['grade'] = this.searchGrade;
        params['classId'] = this.searchClass;
        params = this.clearDataInfo(params);
        params = this.$qs.stringify(params);
        url = common.attend_class_static_stu_detail_change_record_export;
        window.open(url+"?"+params, "_self");
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .pop-height{
    min-height: 50px;
    max-height: 150px;
    overflow-y: auto;
  }
  .pop-block{
    border-bottom: 1px dashed #dddddd;
  }
  .pop-item{
    display: inline-block;
    padding: 5px 0px;
  }
</style>
