<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">教学排课</span>
        </div>
        <my-el-tree type="1" sub-type="4" @node-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="18">
              <my-year-term size="small" :show-default-week="true" :clearable-week="false" @changeYear="hangdleChange($event,1)" @changeTerm="hangdleChange($event,2)" @changeWeek="hangdleChange($event,3)"></my-year-term>
            </el-col>
            <el-col :span="6" class="text-right">

            </el-col>
          </el-row>
        </div>

        <div class="margin-top-10">
          <div class="layout-right-tab">
            <el-row>
              <el-col :span="24">
                <el-button :disabled="this.week_schedule_id == null || this.week_schedule_id == ''" size="small" type="primary" icon="el-icon-document-copy" @click="copyCourseTable">{{$t("复制当前课表")}}</el-button>
                <el-button :disabled="this.week_schedule_id == null || this.week_schedule_id == ''" size="small" type="danger" icon="el-icon-document-copy" @click="deleteInfo()">{{$t("删除当前课表")}}</el-button>
                <el-button size="small" type="warning" icon="el-icon-upload" @click="importInfo($event)">{{$t("导入")}}</el-button>
              </el-col>
            </el-row>
          </div>
          <el-table
            ref="refTable"
            :data="sectionTotal"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            row-key="id"
            :max-height="tableHeight.height"
            border
            :empty-text="emptyText"
            style="width: 100%"
            cell-class-name="opr-block-td">
            <el-table-column
              align="center"
              prop="level_type"
              :label="$t('节数')"
              width="50">
              <template slot-scope="scope">
                <span>{{scope.row.section}}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="level_type"
              :label="$t('周一')">
              <template slot-scope="scope" style="position: relative">
                <div class="opr-block">
                  <div class="opr-block-opr">
                    <i class="fa fa-cog margin-right-5" @click="settingInfo(scope.row[1], scope.row, 1)"></i>
                    <i v-if="Object.keys(scope.row[1]).length != 0" class="fa fa-copy margin-right-5" @click="copy(scope.row[1])"></i>
                    <i v-if="Object.keys(scope.row[1]).length == 0" class="fa fa-paste margin-right-5" @click="paste(scope.row, 1)"></i>
                    <i class="fa fa-trash" @click="deleteCourse(scope.row, 1)"></i>
                  </div>
                </div>
                <div class="font-size-12">
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-grand">{{scope.row[1].courseName}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[1].teacherName}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[1].className}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[1].buildName}}</span>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="level_type"
              :label="$t('周二')">
              <template slot-scope="scope" style="position: relative">
                <div class="opr-block">
                  <div class="opr-block-opr">
                    <i class="fa fa-cog margin-right-5" @click="settingInfo(scope.row[2], scope.row, 2)"></i>
                    <i v-if="Object.keys(scope.row[2]).length != 0" class="fa fa-copy margin-right-5" @click="copy(scope.row[2])"></i>
                    <i v-if="Object.keys(scope.row[2]).length == 0" class="fa fa-paste margin-right-5" @click="paste(scope.row, 2)"></i>
                    <i class="fa fa-trash" @click="deleteCourse(scope.row, 2)"></i>
                  </div>
                </div>
                <div class="font-size-12">
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-grand">{{scope.row[2].courseName}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[2].teacherName}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[2].className}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[2].buildName}}</span>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="level_type"
              :label="$t('周三')">
              <template slot-scope="scope" style="position: relative">
                <div class="opr-block">
                  <div class="opr-block-opr">
                    <i class="fa fa-cog margin-right-5" @click="settingInfo(scope.row[3], scope.row, 3)"></i>
                    <i v-if="Object.keys(scope.row[3]).length != 0" class="fa fa-copy margin-right-5" @click="copy(scope.row[3])"></i>
                    <i v-if="Object.keys(scope.row[3]).length == 0" class="fa fa-paste margin-right-5" @click="paste(scope.row, 3)"></i>
                    <i class="fa fa-trash" @click="deleteCourse(scope.row, 3)"></i>
                  </div>
                </div>
                <div class="font-size-12">
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-grand">{{scope.row[3].courseName}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[3].teacherName}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[3].className}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[3].buildName}}</span>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="level_type"
              :label="$t('周四')">
              <template slot-scope="scope" style="position: relative">
                <div class="opr-block">
                  <div class="opr-block-opr">
                    <i class="fa fa-cog margin-right-5" @click="settingInfo(scope.row[4], scope.row, 4)"></i>
                    <i v-if="Object.keys(scope.row[4]).length != 0" class="fa fa-copy margin-right-5" @click="copy(scope.row[4])"></i>
                    <i v-if="Object.keys(scope.row[4]).length == 0" class="fa fa-paste margin-right-5" @click="paste(scope.row, 4)"></i>
                    <i class="fa fa-trash" @click="deleteCourse(scope.row, 4)"></i>
                  </div>
                </div>
                <div class="font-size-12">
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-grand">{{scope.row[4].courseName}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[4].teacherName}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[4].className}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[4].buildName}}</span>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="level_type"
              :label="$t('周五')">
              <template slot-scope="scope" style="position: relative">
                <div class="opr-block">
                  <div class="opr-block-opr">
                    <i class="fa fa-cog margin-right-5" @click="settingInfo(scope.row[5], scope.row, 5)"></i>
                    <i v-if="Object.keys(scope.row[5]).length != 0" class="fa fa-copy margin-right-5" @click="copy(scope.row[5])"></i>
                    <i v-if="Object.keys(scope.row[5]).length == 0" class="fa fa-paste margin-right-5" @click="paste(scope.row, 5)"></i>
                    <i class="fa fa-trash" @click="deleteCourse(scope.row, 5)"></i>
                  </div>
                </div>
                <div class="font-size-12">
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-grand">{{scope.row[5].courseName}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[5].teacherName}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[5].className}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[5].buildName}}</span>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="level_type"
              :label="$t('周六')">
              <template slot-scope="scope" style="position: relative">
                <div class="opr-block">
                  <div class="opr-block-opr">
                    <i class="fa fa-cog margin-right-5" @click="settingInfo(scope.row[6], scope.row, 6)"></i>
                    <i v-if="Object.keys(scope.row[6]).length != 0" class="fa fa-copy margin-right-5" @click="copy(scope.row[6])"></i>
                    <i v-if="Object.keys(scope.row[6]).length == 0" class="fa fa-paste margin-right-5" @click="paste(scope.row, 6)"></i>
                    <i class="fa fa-trash" @click="deleteCourse(scope.row, 6)"></i>
                  </div>
                </div>
                <div class="font-size-12">
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-grand">{{scope.row[6].courseName}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[6].teacherName}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[6].className}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[6].buildName}}</span>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="level_type"
              :label="$t('周日')">
              <template slot-scope="scope" style="position: relative">
                <div class="opr-block">
                  <div class="opr-block-opr">
                    <i class="fa fa-cog margin-right-5" @click="settingInfo(scope.row[7], scope.row, 7)"></i>
                    <i v-if="Object.keys(scope.row[7]).length != 0" class="fa fa-copy margin-right-5" @click="copy(scope.row[7])"></i>
                    <i v-if="Object.keys(scope.row[7]).length == 0" class="fa fa-paste margin-right-5" @click="paste(scope, 7)"></i>
                    <i class="fa fa-trash" @click="deleteCourse(scope.row, 7)"></i>
                  </div>
                </div>
                <div class="font-size-12">
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-grand">{{scope.row[7].courseName}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[7].teacherName}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[7].className}}</span>
                  </div>
                  <div class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-muted">{{scope.row[7].buildName}}</span>
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </layout-lr>

    <dialog-normal top="10vh" :visible="modalWeekVisible" :title="$t('复制课表')" @close="closeDialog" @right-close="cancelDialog">
      <div class="padding-lr-10 padding-tb-10">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">{{$t("全选")}}</el-checkbox>
        <el-checkbox-group class="margin-top-10" v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city" :disabled="inArrayInfo(city, searchWeekSelList) > -1">{{$t('第')}}{{city}}{{$t('周')}}</el-checkbox>
        </el-checkbox-group>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okCopyDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <dialog-normal top="10vh" :visible="modalVisible" :title="$t('任课安排')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <template>
            <el-form-item :label="$t('课程')" prop="courseName">
              <my-select :sel-value="form.courseName" :options="courseNameList" width-style="260" @change="handleChangeSelect($event, 2)"></my-select>
            </el-form-item>
            <el-form-item :label="$t('教学楼/教室')" prop="buildData">
              <my-cascader ref="SelectorBuild" width-style="260" :sel-value="form.buildData" type="3" sub-type="3" @change="handleCascaderChange($event)"></my-cascader>
            </el-form-item>
            <el-form-item :label="$t('教师')" prop="teacherId">
              <el-popover
                placement="top"
                width="700"
                trigger="click"
                @show="handleShowTeacher()">
                <div>
                  <teacher-tree-and-list ref="popverPartRef" :sel-value="form.approverUserId" @change="handleUserSel"></teacher-tree-and-list>
                </div>
                <el-button slot="reference" type="success" plain size="small">{{$t("添加")}}</el-button>
              </el-popover>
              <span class="color-warning margin-left-10">
                <i class="fa fa-user"></i>
                <span>{{form.teacherName}}</span>
              </span>
            </el-form-item>
          </template>
        </el-form>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <drawer-right @changeDrawer="closeDrawerDialog" :set-before="true" :visible="drawerVisible" accept=".xls,.xlsx" :data="{schYearId: this.selYear, termId: this.selTerm,weekNum: this.selWeek, fileName: this.fileName}" :loading="drawerLoading" :hide-footer="true" size="400px" :title="$t('导入排课')" :action="uploadAction" :download-file="uploadFile" :result="uploadResult" :process="uploadProcess" @right-close="cancelDrawDialog" @success="uploadSuccess" @error="uploadError">

    </drawer-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" content="确认需要删除当前课表？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
    <my-normal-dialog :visible.sync="visibleCourseConfim" :loading="dialogLoading" title="提示" content="确认需要删除当前课表？" @ok-click="deleteCourseInfo" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MyInputButton from "../../../components/search/MyInputButton";
  import MyPagination from "../../../components/MyPagination";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MyNormalDialog from "../../../components/utils/dialog/MyNormalDialog";
  import DrawerRight from "../../../components/utils/dialog/DrawerRight";
  import MyEnable from "../../../components/utils/status/MyEnable";
  import MyYearTerm from "../../../components/search/MyYearTerm";
  import MyCascader from "../../../components/utils/select/MyCascader";
  import {common} from "../../../utils/api/url";
  import {
    setChildren,
    MessageSuccess,
    MessageError,
    courseProperties,
    teachMethod,
    examMethod, MessageWarning, inArray
  } from "../../../utils/utils";
  import MySelect from "../../../components/MySelect";
  import MyRadio from "../../../components/MyRadio";
  import teachPlanValidater from "../../../utils/validater/teachPlanValidater";

  export default {
    mixins: [mixins, teachPlanValidater],
    components: {MyRadio, MySelect, LayoutTb,MyInputButton,MyPagination,DialogNormal,MyNormalDialog,DrawerRight,MyEnable,MyYearTerm,MyCascader},
    data(){
      return {
        modalVisible: false,
        drawerVisible: false,
        visibleConfim: false,
        visibleCourseConfim: false,
        dialogLoading: false,
        loading: false,
        drawerLoading: false,
        modalWeekVisible: false,
        subDetail: '',
        g_superId: '',
        tableData: [],
        searchSchoolData: [],
        searchKey: '',
        courseNameList: [],
        searchClassName: '',
        form: {
          id: '',
          courseName: '',
          courseNo: '',
          teacherName: '',
          teacherId: '',
          buildId: '',
          roomId: '',
          buildData: [],
          weekNo: '',
          section: '',
          className: '',
          floorNum: ''
        },
        courseId: '',
        selYear: '',
        selTerm: '',
        selWeek: '',
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        sectionTotal: [],
        emptyText: '',
        copyData: {},
        id: '',
        week_schedule_id: '',
        checkAll: false,
        checkedCities: [],
        cities: [],
        isIndeterminate: false,
        searchWeekSelList: [],
        uploadFile: common.teach_course_plan_inport_file,
        uploadAction: common.teach_course_plan_inport,
        uploadResult: {},
        uploadProcess: '',
        fileName: ''
      }
    },
    created() {
      this.initInfo();
    },
    methods: {
      async initInfo() {
        await this.getSessionInfo();
        await this.getCollegeInfo(4);
        await this.initCurrentWeekList(this.currentYearId,this.currentTermId);
        this.selYear = this.currentYearId;
        this.selTerm = this.currentTermId;
        this.selWeek = 1;
        this.cities = this.currentSetWeekNum;
        this.initSchoolSelect();
        this.init();
      },
      async initTeachSetting(){
        let arr = [];
        let params = {
          syearId: this.selYear,
          termId: this.selTerm
        };
        await this.$axios.get(common.week_list, {params: params}).then(res => {
          if (res.data.data && res.data.data.teachSetting){
            for (let i = 0; i < res.data.data.teachSetting.section; i++){
              arr.push({
                section: i+1,
                1: {},
                2: {},
                3: {},
                4: {},
                5: {},
                6: {},
                7: {},
              });
            }
            this.sectionTotal = arr;
          }
        });
      },
      async init(){
        this.sectionTotal = [];
        if (this.searchClass == ""){
          this.emptyText = this.$t("请选择需要查看的班级");
          return;
        }
        await this.initTeachSetting();
        this.initCourse();
      },
      initSchoolSelect(){
        if (this.dataCollege.length > 0){
          let college = this.dataCollege[0].id;
          let major = this.dataCollege[0].children ? this.dataCollege[0].children[0].id : '';
          let grade = this.dataCollege[0].children[0].children ? this.dataCollege[0].children[0].children[0].grade : '';
          let classId = this.dataCollege[0].children[0].children[0].children > 0 ? this.dataCollege[0].children[0].children[0].children[0].id : '';
          this.searchSchoolData = [college, major, grade, classId];
        }
      },
      initCourse(){
        let arr = [];
        let params = {
          schYearId: this.selYear,
          termId: this.selTerm,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          majorClassId: this.searchClass,
          weekNum: this.selWeek,
          deleted: 0,
        };
        this.$axios.get(common.course_tach_plan_list, {params: params}).then(res => {
          if (res.data.data){
            for (let itemSection in this.sectionTotal){
              for (let itemSectionChild in this.sectionTotal[itemSection]){
                for (let item in res.data.data){
                  if (res.data.data[item].week_no == itemSectionChild && res.data.data[item].section == this.sectionTotal[itemSection].section){
                    this.sectionTotal[itemSection][itemSectionChild] = {
                      id: res.data.data[item].id,
                      courseName: res.data.data[item].course_name,
                      buildName: res.data.data[item].building_name + '('+res.data.data[item].classroom_no+')',
                      className: res.data.data[item].class_name,
                      teacherName: res.data.data[item].teacher_name,
                      courseId: res.data.data[item].course_id,
                      weekNum: res.data.data[item].week_num,
                      weekNo: res.data.data[item].week_no,
                      section: res.data.data[item].section,
                      teacherId: res.data.data[item].teacher_id,
                      buildingId: res.data.data[item].building_id,
                      classroomId: res.data.data[item].classroom_id,
                      floorNum: res.data.data[item].floor_num,
                    };
                    if (res.data.data[item].week_schedule_id != null && res.data.data[item].week_schedule_id != ''){
                      this.week_schedule_id = res.data.data[item].week_schedule_id;
                    }
                  }
                }
              }
            }
          }
        });
      },
      initCourseList(){
        let params = {
          page: 1,
          num: 9999,
          schYearId: this.selYear,
          termId: this.selTerm,
          majorId: this.searchMajor
        };
        this.$axios.get(common.course_mamage_offer_page, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.length; i++){
              res.data.data[i]['label'] = res.data.data[i].courseName;
              res.data.data[i]['value'] = res.data.data[i].courseId + "-" + res.data.data[i].courseName;
            }
            this.courseNameList = res.data.data;
          }
        });
      },
      searchWeek(){
        let params = {
          schYearId: this.selYear,
          termId: this.selTerm,
          majorClassId: this.searchClass
        };
        this.$axios.get(common.course_tach_plan_search_week, {params: params}).then(res => {
          if (res.data.data){
            this.searchWeekSelList = res.data.data;
          }
        });
      },
      settingInfo(row, item, week){
        if (Object.keys(row).length != 0){
          this.form = {
            id: row.id,
            courseName: row.courseId+"-"+row.courseName,
            courseNo: row.courseId,
            teacherName: row.teacherName,
            teacherId: row.teacherId,
            buildId: row.buildingId,
            roomId: row.classroomId,
            buildData: [row.buildingId, row.floorNum, row.classroomId],
            weekNo: row.weekNo,
            section: row.section,
            className: row.className,
            floorNum: row.floorNum
          };
        }else {
          this.form.section = item.section;
          this.form.weekNo = week;
          this.form.weekNum = this.selWeek;
          this.form.className = this.searchClassName;
        }

        this.initCourseList();
        this.modalVisible = true;
      },
      copyCourseTable(){
        this.form.id = this.week_schedule_id;
        this.searchWeek();
        this.modalWeekVisible = true;
      },
      deleteInfo(row){
        this.visibleConfim = true;
      },
      deleteCourse(row, index){
        this.courseId = row[index].id;
        this.visibleCourseConfim = true;
      },
      deleteCourseInfo(row){
        let params = {
          scheduleId: this.courseId
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.teach_course_plan_delete, params).then(res => {
          if (res.data.code == 200){
            this.init();
            this.courseId = "";
            this.visibleCourseConfim = false;
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
        this.visibleCourseConfim = false;
      },
      search(data){
        this.page = 1;
        this.searchKey = data.input;
        this.init();
      },
      changeStatus(event, data){
        this.form.enabled = data;
      },
      handleChange(data, type){
        switch (type) {
          case 1:
            this.form.teachType = ''+data;
            break;
          case 2:
            this.form.courseProperty = ''+data;
            break;
          case 3:
            this.form.examType = ''+data;
            break;
        }
      },
      coursePropertiesInfo(type, value){
        if (type == 'get'){
          let arr = courseProperties(type);
          let arrObj = [];
          for (let item in arr){
            arrObj.push({
              value: item,
              label: arr[item]
            });
          }
          return arrObj;
        }else {
          return courseProperties(type, value);
        }
      },
      teachMethodInfo(type, value){
        if (type == 'get'){
          let arr = teachMethod(type);
          let arrObj = [];
          for (let item in arr){
            arrObj.push({
              value: item,
              label: arr[item]
            });
          }
          return arrObj;
        }else {
          return teachMethod(type, value);
        }
      },
      examMethodInfo(type, value){
        if (type == 'get'){
          let arr = examMethod(type);
          let arrObj = [];
          for (let item in arr){
            arrObj.push({
              value: item,
              label: arr[item]
            });
          }
          return arrObj;
        }else {
          return examMethod(type, value);
        }
      },
      async hangdleChange(data, type){
        switch (type) {
          case 1:
            this.selYear = data.year;
            this.selTerm = data.term;
            this.selWeek = data.week;
            break;
          case 2:
            this.selYear = data.year;
            this.selTerm = data.term;
            this.selWeek = data.week;
            this.cities = data.setWeek;
            break;
          case 3:
            this.selYear = data.year;
            this.selTerm = data.term;
            this.selWeek = data.week;
            break;
        }
        this.week_schedule_id = "";
        this.init();
      },
      handleCascaderChange(data){
        //this.form.buildName = this.$refs.SelectorBuild.$refs.cascaderSelector.getCheckedNodes()[0].pathLabels[0];
        this.form.buildData = data;
      },
      nodeClick(data){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        this.week_schedule_id = "";
        if (data.unit == 1){
          this.searchCollege = data.id;
        }else if (data.unit == 2){
          this.searchCollege = data.college_id;
          this.searchMajor = data.id;
        }else if (data.unit == 3){
          this.searchMajor = data.major_id;
          this.searchGrade = data.grade;
        }else if (data.unit == 4){
          this.form.className = data.label;
          this.searchClassName = data.label;
          this.searchClass = data.id;
          this.searchMajor = data.major_id;
        }
        this.init();
      },
      copy(item){
        this.copyData = item;
        MessageSuccess(this.$t("复制成功"));
      },
      paste(item, week){
        let params = this.copyData;
        if(Object.keys(params).length == 0){
          MessageSuccess(this.$t("请先复制数据"));
          return;
        }
        params['schYearId'] = this.selYear;
        params['termId'] = this.selTerm;
        params['majorClassId'] = this.searchClass;
        params['weekNo'] = week;
        params['section'] = item.section;
        params = this.$qs.stringify(params);
        this.$axios.post(common.course_tach_plan_paste, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          weekScheduleId: this.week_schedule_id
        };
        url = common.course_tach_plan_delete;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.week_schedule_id = "";
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.visibleConfim = false;
          this.dialogLoading = false;
        });
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      closeDialog(event){
        this.form = {
          id: '',
          courseName: '',
          courseNo: '',
          teacherName: '',
          teacherId: '',
          buildId: '',
          roomId: '',
          buildData: [],
          weekNo: '',
          section: '',
          floorNum: ''
        };
        this.id = "";
        //this.week_schedule_id = "";
        this.checkedCities = [];
        this.checkAll = false;
        this.resetCasadeSelector('SelectorBuild');
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        this.visibleCourseConfim = false;
      },
      okDialog(){
        let url = "";
        let userIds = {};
        this.$refs['form'].validate((valid) => {
          if (valid) {
            let params = {
              schYearId: this.selYear,
              termId: this.selTerm,
              majorClassId: this.searchClass,
              className: this.form.className,
              courseId: this.form.courseName.split("-")[0],
              weekNum: this.form.weekNum,
              weekNo: this.form.weekNo,
              section: this.form.section,
              teacherId: this.form.teacherId,
              teacherName: this.form.teacherName,
              classroomId: this.form.buildData[2],
              buildingId: this.form.buildData[0],
            };
            if (this.form.id != ''){
              params['scheduleId'] = this.form.id;
              url = common.course_tach_plan_edit;
            }else {
              url = common.course_tach_plan_add;
            }
            params = this.$qs.stringify(params);
            this.dialogLoading = true;
            this.$axios.post(url, params, {loading: false}).then(res => {
              if (res.data.code == 200){
                this.modalVisible = false;
                this.init();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
            });
          }
        });
      },
      okCopyDialog(){
        let url = "";
        let params = {
          weekNo: this.checkedCities.join(),
          weekScheduleId: this.form.id
        };
        url = common.course_tech_plan_copy;
        params = this.$qs.stringify(params);
        this.dialogLoading = true;
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.modalWeekVisible = false;
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.dialogLoading = false;
        });
      },
      cancelDialog(){
        this.modalWeekVisible = false;
        this.modalVisible = false;
      },
      handleUserSel(data){
        this.form.teacherId = data.user_id;
        this.form.teacherName = data.real_name;
      },
      handleShowTeacher(){
        this.$refs.popverPartRef._handleOpen();
      },
      handleChangeSelect(data, type){
        switch (type) {
          case 1:
            this.form.majorName = data;
            break;
          case 2:
            this.form.courseName = data;
            this.form.credit = data.split("-")[2];
            break;
        }
      },
      handleCheckAllChange(val) {
        let checkedArr = [];
        for (let i = 0; i < this.cities; i++){
          let sel = inArray((i+1), this.searchWeekSelList);
          if (sel == -1){
            checkedArr.push(i+1);
          }
        }
        this.checkedCities = val ? checkedArr : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities;
      },
      inArrayInfo(search, arr){
        return inArray(search, arr);
      },
      importInfo(event){
        this.drawerVisible = true;
      },
      closeDrawerDialog(event){
        this.uploadProcess = '';
        this.uploadResult = {};
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.uploadProcess = '';
        this.uploadResult = {};
        this.drawerVisible = false;
      },
      uploadSuccess(res, file){
        if (res.code == 200){
          this.uploadProcess = res.desc;
          this.loopUploadResult(res.data);
        }else {
          this.uploadProcess = this.$t("文件上传成功,正在导入文件...");
          this.resultList = [];
          if (res.data){
            for (let i in res.data){
              this.uploadResult.push(res.data[i]);
            }
          }else {
            this.uploadResult = [res.desc];
          }
        }
      },
      uploadError(res, file){
        this.uploadProcess = res.data.data;
      },
      loopUploadResult(uuid){
        this.getUploadResult(uuid);
      },
      getUploadResult(uuid) {
        let _self = this;
        clearTimeout(this.loopTimer);
        let params = {
          uuid: uuid,
          action: 6
        };
        this.$axios.get(common.upload_loop_result, {params: params}).then(res => {
          let result = "";
          if (res.data.code == 200) {
            let arrResult = [];
            if (res.data.data) {
              for (let i = 0; i < res.data.data.length; i++) {
                //设置结果列表
                if (res.data.data[i].line) {
                  arrResult.push(this.$t("第") + res.data.data[i].line + this.$t("行") + JSON.parse(res.data.data[i].mess).join());
                } else {
                  arrResult.push(JSON.parse(res.data.data[i].mess).join());
                }
                if (res.data.data[i].status == 1) {
                  //this.loopStatus = true;
                  this.uploadResult = arrResult;
                  clearTimeout(this.loopTimer);
                  break;
                } else {
                  this.loopTimer = setTimeout(function () {
                    _self.getUploadResult(uuid)
                  }, 10000);
                }
              }
            } else {
              this.uploadResult = [this.$t("上传停止！")];
              clearTimeout(this.loopTimer);
            }
          }
        });
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .opr-block-td:hover .opr-block{
    display: block;
  }
  .opr-block{
    position: absolute;
    top:0;
    left: 0;
    background: #dddddd;
    width: 100%;
    height: 100%;
    filter:alpha(opacity=75);
    -moz-opacity:0.75;
    -khtml-opacity: 0.75;
    opacity: 0.75;
    display: none;
  }
  .opr-block-opr{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .opr-block:hover{
    display: block;
  }
</style>
