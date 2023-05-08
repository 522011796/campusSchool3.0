<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">考勤查询</span>
        </div>
        <my-el-tree type="1" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="4">
              <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo()">{{$t("导出")}}</el-button>
            </el-col>
            <el-col :span="20" class="text-right">
              <i class="fa fa-file color-warning" @click="detailInfo"></i>
              <my-date-picker :sel-value="searchDate" :clearable="false" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
              <my-course-select ref="courseSelect" :filterable="true" size="small" :clearable="true" :sel-value="searchCourseId" @change="handleCourseChange"></my-course-select>
              <my-input-button size="small" :clearable="true" type="success" plain @click="search"></my-input-button>
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
            style="width: 100%"
            @filter-change="fliterTable">
            <el-table-column
              align="center"
              :label="$t('日期')">

              <template slot-scope="scope">
                <span>{{scope.row.busiTime}}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('姓名')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.realName ? scope.row.realName : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.realName ? scope.row.realName : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('学号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.extra.studentNo}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span>{{scope.row.extra.studentNo}}</span>
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
              :label="$t('课程')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.courseName ? scope.row.courseName : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.courseName ? scope.row.courseName : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('节数')"
              :filter-multiple="false"
              column-key="section"
              :filters="filtersSection">
              <template slot="header">
                <span>{{$t('节数')}}</span>
                <span v-if="filtersSectionText != ''" class="font-size-12 color-disabeld">{{filtersSectionText}}</span>
              </template>
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-left">
                    <div>
                      <span>{{$t("上课考勤时间")}}:</span>
                      <span>{{scope.row.checkclassRull.beginTime}}</span>
                    </div>
                    <div>
                      <span>{{$t("上课时间")}}:</span>
                      <span>{{scope.row.checkclassRull.classTime1}}</span>
                    </div>
                    <div>
                      <span>{{$t("迟到考勤时间")}}:</span>
                      <span>{{scope.row.checkclassRull.lateTime}}</span>
                    </div>
                    <div v-if="scope.row.checkclassRull.switchOverClass == true">
                      <span>{{$t("下课考勤时间")}}:</span>
                      <span>{{scope.row.checkclassRull.overTime}}</span>
                    </div>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{$t('第')}}{{scope.row.section}}{{$t("节")}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <template>
              <el-table-column
                align="center"
                :label="$t('状态')"
                :filter-multiple="false"
                column-key="status"
                :filters="filterClassAttendStatus">
                <template slot="header">
                  <span>{{$t('状态')}}</span>
                  <span v-if="filterClassAttendStatusText != ''" class="font-size-12 color-disabeld">{{filterClassAttendStatusText}}</span>
                </template>
                <template slot-scope="scope">
                  <span>{{classAttendStatusInfo(scope.row.signStatus, 'set')}}</span>
                </template>
              </el-table-column>
            </template>
            <el-table-column
              align="center"
              :label="$t('考勤时间')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <div>
                      <span>{{scope.row.rollCallTime ? $moment(scope.row.rollCallTime).format("YYYY-MM-DD HH:mm:ss") : '--'}}</span>
                    </div>
                    <div>
                      <span>{{scope.row.rollCallTime2 ? $moment(scope.row.rollCallTime2).format("YYYY-MM-DD HH:mm:ss") : '--'}}</span>
                    </div>
                  </div>
                  <div slot="reference">
                    <div class="name-wrapper moon-content-text-ellipsis-class">
                      <span>{{scope.row.rollCallTime ? $moment(scope.row.rollCallTime).format("YYYY-MM-DD HH:mm:ss") : '--'}}</span>
                    </div>
                    <div class="name-wrapper moon-content-text-ellipsis-class">
                      <span>{{scope.row.rollCallTime2 ? $moment(scope.row.rollCallTime2).format("YYYY-MM-DD HH:mm:ss") : '--'}}</span>
                    </div>
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

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="650px" :title="$t('人工修改记录')" @right-close="cancelDrawDialog">
      <div slot="content" v-loading="showDetailLoading">
        <span tabindex="1"></span>
        <div>
          <div>
            <my-date-picker class="layout-item" style="position: relative; top: 1px;" :clearable="true" :sel-value="searchRecordDate" size="small" width-style="150" @change="handleTime"></my-date-picker>
            <my-input-button ref="remoteDetail" class="layout-item" size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('修改人/被修改人')" @click="searchDetail"></my-input-button>
          </div>
          <el-table
            class="margin-top-10"
            ref="refTable"
            :data="tableStudentData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            style="width: 100%">
            <el-table-column
              align="center"
              prop="group_name"
              :label="$t('修改人')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.teacher_name }}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.teacher_name }}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="group_name"
              :label="$t('被修改人')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.real_name }}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.real_name }}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="group_name"
              :label="$t('原状态')">
              <template slot-scope="scope">
                <my-class-attend-options :status="scope.row.original_status"></my-class-attend-options>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="group_name"
              :label="$t('新状态')">
              <template slot-scope="scope">
                <my-class-attend-options :status="scope.row.original_status"></my-class-attend-options>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="group_name"
              :label="$t('修改时间')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.time ? $moment(scope.row.time).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.time ? $moment(scope.row.time).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right">
          <el-pagination
            background
            :page-sizes="[10, 20, 50, 100]"
            layout="total, sizes, prev, pager, next"
            :total="totalStudent"
            :current-page="pageStudent"
            :page-size="numStudent"
            @size-change="sizeStudentChange"
            @current-change="currentStudentPage">
          </el-pagination>
        </div>
      </div>
    </drawer-layout-right>
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
  import MyCourseSelect from "../../../components/utils/MyCourseSelect";
  import MyClassAttendOptions from "../../../components/utils/status/MyClassAttendOptions";
  import {
    classAttendStatus,
    dormStatus,
    MessageError,
    MessageSuccess,
    nationInfo,
    studentTeachStatus, studyType,
    teacherTypeInfo,
    workEnjoy,
    workTitle
  } from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,MySearchOfDate,DrawerLayoutRight,MyCourseSelect,MyClassAttendOptions},
    data(){
      return {
        pageStudent: 1,
        numStudent: 20,
        totalStudent: 0,
        searchDate: [],
        searchRecordDate: '',
        searchRecordKey: '',
        filtersSection: [],
        searchSection: '',
        searchCourseId: '',
        pageDetail: 1,
        numDetail: 20,
        totalDetail: 0,
        searchTimeData: {},
        tableData: [],
        tableStudentData: [],
        tableDetailData: [],
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        showDetailLoading: false,
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        searchKey: '',
        searchDept: '',
        subTitle: '',
        uploadProcess: '',
        searchType: -1,
        searchDetailType: -1,
        uploadResult: {},
        uploadAction: common.student_upload,
        loopTimer: null,
        resultList: [],
        searchTopTime: this.$moment(new Date).format("YYYY-MM-DD"),
        filterClassAttendStatusText: '',
        filtersSectionText: ''
      }
    },
    created() {
      //let startDate = this.$moment().subtract(7, 'days').format("YYYY-MM-DD");
      let startDate = this.$moment().format("YYYY-MM-DD");
      let endDate = this.$moment().format("YYYY-MM-DD");
      this.searchDate = [startDate, endDate];
      this.init();
      this.initSection();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          keyWord: this.searchKey,
          beginTime: this.searchDate && this.searchDate.length > 0 ? this.searchDate[0] : '',
          endTime: this.searchDate && this.searchDate.length > 0 ? this.searchDate[1] : '',
          signStatus: this.searchType == -1 ? "" : this.searchType,
          section: this.searchSection,
          userType: 5,
          realNameAsc: false,
          busiTimeAsc: false,
          courseId: this.searchCourseId,
          realName: this.searchKey
        };

        this.$axios.get(common.attend_class_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initSection(){
        for (let i = 0; i < this.currentSeciton; i++){
          this.filtersSection.push({
            text: this.$t("第")+ (i+1) +this.$t("节"),
            value: i+1
          });
        }
      },
      initRecord(){
        let params = {
          page: this.pageStudent,
          num: this.numStudent,
          type: 1,
          busiTime: this.searchRecordDate,
          searchKey: this.searchRecordKey
        };
        //params = this.$qs.stringify(params);
        this.showDetailLoading = true;
        this.$axios.get(common.attend_class_static_stu_detail_change_record, {params: params, loading: false}).then(res => {
          if (res.data.data){
            this.tableStudentData = res.data.data.list;
            this.totalStudent = res.data.data.totalCount;
            this.numStudent = res.data.data.num;
            this.pageStudent = res.data.data.currentPage;
          }
          this.showDetailLoading = false;
        });
      },
      nodeClick(data){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
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

        this.page = 1;
        this.init();
      },
      search(data){
        this.searchKey = data.input;
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
      changeStatus(type){
        this.searchType = type;
        this.init();
      },
      changeDetailStatus(type){
        this.searchDetailType = type;
        this.pageDetail = 1;
        this.initDetail();
      },
      classAttendStatusInfo(val){
        return classAttendStatus('set', val);
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'status'){
            this.filterClassAttendStatusText = '';
            this.searchType = value[item][0];
            for (let i = 0; i < this.filterClassAttendStatus.length; i++){
              if (this.searchType == this.filterClassAttendStatus[i].value){
                this.filterClassAttendStatusText = this.filterClassAttendStatus[i].text;
              }
            }
          }else if (item == 'section'){
            this.filtersSectionText = '';
            this.searchSection = value[item][0];
            for (let i = 0; i < this.filtersSection.length; i++){
              if (this.searchSection == this.filtersSection[i].value){
                this.filtersSectionText = this.filtersSection[i].text;
              }
            }
          }
        }
        this.page = 1;
        this.init();
      },
      handleChange(data){
        this.searchDate = data;
      },
      handleCourseChange(data){
        this.searchCourseId = data;
      },
      detailInfo(){
        this.initRecord();
        this.drawerVisible = true;
      },
      closeDrawerDialog(event){
        this.searchRecordDate = '';
        this.searchRecordKey = '';
        this.pageStudent = 1;
        if (this.$refs.remoteDetail){
          this.$refs.remoteDetail.inputValue = "";
        }
        this.drawerVisible = event;
      },
      closeDrawDialog(event){
        this.searchRecordDate = '';
        this.searchRecordKey = '';
        this.pageStudent = 1;
        if (this.$refs.remoteDetail){
          this.$refs.remoteDetail.inputValue = "";
        }
        this.drawerVisible = false;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      handleTime(data){
        this.searchRecordDate = data;
      },
      searchDetail(data){
        this.searchRecordKey = data.input;
        this.page = 1;
        this.initRecord();
      },
      sizeStudentChange(event){
        this.pageStudent = 1;
        this.numStudent = event;
        this.initRecord();
      },
      currentStudentPage(event){
        this.pageStudent = event;
        this.initRecord();
      },
      expandInfo(){
        let url = common.class_attend_info_export;
        let params = {
          page: this.page,
          num: this.num,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          keyWord: this.searchKey,
          beginTime: this.searchDate && this.searchDate.length > 0 ? this.searchDate[0] : '',
          endTime: this.searchDate && this.searchDate.length > 0 ? this.searchDate[1] : '',
          signStatus: this.searchType == -1 ? "" : this.searchType,
          section: this.searchSection,
          userType: 5,
          realNameAsc: false,
          busiTimeAsc: false,
          courseId: this.searchCourseId,
          realName: this.searchKey
        };
        params = this.$qs.stringify(params);
        window.open(url+"?"+params, "_self");
      }
    }
  }
</script>

<style scoped>
  .container {

  }
</style>
