<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">查询课表</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <my-year-term size="small" :show-default-week="true" :clearable-week="false" @changeYear="hangdleChange($event,1)" @changeTerm="hangdleChange($event,2)" @changeWeek="hangdleChange($event,3)"></my-year-term>
          </el-col>
          <el-col :span="12" class="text-right">
            <my-cascader ref="SelectorSchool" size="small" width-style="260" :sel-value="searchSchoolData" type="1" sub-type="4" @change="handleCascaderChange($event)"></my-cascader>
          </el-col>
        </el-row>
      </div>

      <div slot="content">
        <el-table
          ref="refTable"
          :data="sectionTotal"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          row-key="id"
          :max-height="tableHeight.height"
          border
          style="width: 100%">
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
            <template slot-scope="scope">
              <div class="font-size-12">
                <div>
                  <span class="color-grand">{{scope.row[1].courseName}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[1].teacherName}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[1].className}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[1].buildName}}</span>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="level_type"
            :label="$t('周二')">
            <template slot-scope="scope">
              <div class="font-size-12">
                <div>
                  <span class="color-grand">{{scope.row[2].courseName}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[2].teacherName}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[2].className}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[2].buildName}}</span>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="level_type"
            :label="$t('周三')">
            <template slot-scope="scope">
              <div class="font-size-12">
                <div>
                  <span class="color-grand">{{scope.row[3].courseName}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[3].teacherName}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[3].className}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[3].buildName}}</span>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="level_type"
            :label="$t('周四')">
            <template slot-scope="scope">
              <div class="font-size-12">
                <div>
                  <span class="color-grand">{{scope.row[4].courseName}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[4].teacherName}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[4].className}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[4].buildName}}</span>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="level_type"
            :label="$t('周五')">
            <template slot-scope="scope">
              <div class="font-size-12">
                <div>
                  <span class="color-grand">{{scope.row[5].courseName}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[5].teacherName}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[5].className}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[5].buildName}}</span>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="level_type"
            :label="$t('周六')">
            <template slot-scope="scope">
              <div class="font-size-12">
                <div>
                  <span class="color-grand">{{scope.row[6].courseName}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[6].teacherName}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[6].className}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[6].buildName}}</span>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="level_type"
            :label="$t('周日')">
            <template slot-scope="scope">
              <div class="font-size-12">
                <div>
                  <span class="color-grand">{{scope.row[7].courseName}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[7].teacherName}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[7].className}}</span>
                </div>
                <div>
                  <span class="color-muted">{{scope.row[7].buildName}}</span>
                </div>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </layout-tb>
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
    examMethod
  } from "../../../utils/utils";
  import MySelect from "../../../components/MySelect";
  import MyRadio from "../../../components/MyRadio";
  import courseManageValidater from "../../../utils/validater/courseManageValidater";

  export default {
    mixins: [mixins, courseManageValidater],
    components: {MyRadio, MySelect, LayoutTb,MyInputButton,MyPagination,DialogNormal,MyNormalDialog,DrawerRight,MyEnable,MyYearTerm,MyCascader},
    data(){
      return {
        modalVisible: false,
        drawerVisible: false,
        visibleConfim: false,
        dialogLoading: false,
        loading: false,
        drawerLoading: false,
        subDetail: '',
        uploadFile: common.course_mamage_file,
        uploadAction: common.course_mamage_import,
        uploadResult: {},
        uploadProcess: '',
        g_superId: '',
        tableData: [],
        searchSchoolData: [],
        searchKey: '',
        form: {
          id: '',
          courseName: '',
          courseNo: '',
          name: '',
          teachType: '',
          courseProperty: '',
          examType: '',
          credit: '',
          enabled: true
        },
        selYear: '',
        selTerm: '',
        selWeek: '',
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        sectionTotal: [],
      }
    },
    created() {
      this.initInfo();
    },
    methods: {
      async initInfo() {
        await this.getSessionInfo();
        await this.getCollegeInfo(4);
        await this.initCurrentYearList();
        await this.initCurrentTermList(this.currentYearData);
        this.selYear = this.currentYearData ? this.currentYearData : this.currentYearId;
        this.selTerm = this.currentTermData ? this.currentTermData : this.currentTermId;
        this.selWeek = 1;
        this.initSchoolSelect();
      },
      async initTeachSetting(){
        let arr = [];
        this.sectionTotal = [];
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
        await this.initTeachSetting();
        this.initCourse();
      },
      initSchoolSelect(){
        if (this.dataCollege.length > 0){
          let college = this.dataCollege[0].id;
          let major = this.dataCollege[0].children ? this.dataCollege[0].children[0].id : '';
          let grade = this.dataCollege[0].children[0].children ? this.dataCollege[0].children[0].children[0].grade : '';
          let classId = this.dataCollege[0].children[0].children[0].children > 0 ? this.dataCollege[0].children[0].children[0].children[0].id : '';
          this.searchSchoolData = [college, major, grade];
          this.searchCollege = college;
          this.searchMajor = major;
          this.searchGrade = grade;
          if (classId){
            this.searchSchoolData[3] = classId;
            this.searchClass = classId;
          }
        }

        this.init();
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
        this.$axios.get(common.course_search_list, {params: params}).then(res => {
          if (res.data.data){
            for (let itemSection in this.sectionTotal){
              for (let itemSectionChild in this.sectionTotal[itemSection]){
                for (let item in res.data.data){
                  if (res.data.data[item].week_no == itemSectionChild && res.data.data[item].section == this.sectionTotal[itemSection].section){
                    this.sectionTotal[itemSection][itemSectionChild] = {
                      courseName: res.data.data[item].course_name,
                      buildName: res.data.data[item].building_name + '('+res.data.data[item].classroom_no+')',
                      className: res.data.data[item].class_name,
                      teacherName: res.data.data[item].teacher_name
                    };
                  }
                }
              }
            }
          }
        });
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
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
            break;
          case 3:
            this.selYear = data.year;
            this.selTerm = data.term;
            this.selWeek = data.week;
            break;
        }
        this.init();
      },
      handleCascaderChange(data){
        this.searchCollege = '';
        this.searchMajor = '';
        this.searchGrade = '';
        this.searchClass = '';
        if (data.length == 1){
          this.searchCollege = data[0];
        }else if (data.length == 2){
          this.searchCollege = data[0];
          this.searchMajor = data[1];
        }else if (data.length == 3){
          this.searchCollege = data[0];
          this.searchMajor = data[1];
          // this.searchGrade = data[2];
          this.searchClass = data[2];
        }else if (data.length == 4){
          this.searchCollege = data[0];
          this.searchMajor = data[1];
          this.searchGrade = data[2];
          this.searchClass = data[3];
        }
        this.init();
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
</style>
