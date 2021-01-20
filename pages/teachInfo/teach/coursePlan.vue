<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">任课安排</span>
        </div>
        <my-el-tree type="1" sub-type="2" @node-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="8">
              <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("任课安排")}}</el-button>
              <el-button size="small" type="warning"  icon="el-icon-notebook-2" @click="uploadInfo($event)">{{$t("导入任课")}}</el-button>
            </el-col>
            <el-col :span="16" class="text-right">
              <my-year-term ref="yearRef" size="small" :show-week="false" :clearable-week="false" @changeYear="hangdleChange($event,1)" @changeTerm="hangdleChange($event,2)" @changeWeek="hangdleChange($event,3)"></my-year-term>
              <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" @click="search"></my-input-button>
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
              :label="$t('专业')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.major_name ? scope.row.major_name : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.major_name ? scope.row.major_name : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="student_id"
              :label="$t('课程')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.course_name ? scope.row.course_name : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.course_name ? scope.row.course_name : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('学分')">
              <template slot-scope="scope">
                <span>{{scope.row.credit}}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('教师')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <el-tag size="mini" type="success" v-for="(item, index) in scope.row.teacherList" :key="index" class="margin-right-5">
                      {{item.teacher_name}}
                    </el-tag>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <el-tag size="mini" type="success" v-for="(item, index) in scope.row.teacherList" :key="index" class="margin-right-5">
                      {{item.teacher_name}}
                    </el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              fixed="right"
              label="操作"
              width="120">
              <template slot-scope="scope">
                <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row)"></i>
                <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </div>
    </layout-lr>

    <dialog-normal top="10vh" :visible="modalVisible" :title="$t('任课安排')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <template v-if="form.id == ''">
            <el-form-item :label="$t('学年')">
              <span>{{form.yearName}}</span>
            </el-form-item>
            <el-form-item :label="$t('学期')">
              <span>{{form.termName}}</span>
            </el-form-item>
            <el-form-item :label="$t('专业')" prop="majorName">
              <my-select :sel-value="form.majorName" :options="majorNameList" width-style="260" @change="handleChangeSelect($event, 1)"></my-select>
            </el-form-item>
            <el-form-item :label="$t('课程')" prop="courseName">
              <my-select :sel-value="form.courseName" :options="courseNameList" width-style="260" @change="handleChangeSelect($event, 2)"></my-select>
            </el-form-item>
            <el-form-item :label="$t('学分')" prop="credit">
              <el-input v-model="form.credit" class="width-260"></el-input>
            </el-form-item>
          </template>
          <el-form-item :label="$t('教师')" prop="name">
            <el-popover
              placement="top"
              width="700"
              trigger="click"
              @show="handleShowTeacher()">
              <div>
                <teacher-tree-and-list ref="popverPartRef" :sel-arr="form.teacherId" set-type="check" @select="handleSelUser"></teacher-tree-and-list>
              </div>
              <el-button slot="reference" type="success" plain size="small">{{$t("添加")}}</el-button>
            </el-popover>
            <span class="color-warning margin-left-10">
              <i class="fa fa-user"></i>
              {{$t("已选择")}}{{form.teacherId.length}}{{$t("人员")}}
            </span>
          </el-form-item>
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

    <drawer-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" accept=".xls,.xlsx" :data="{termId: selTerm, yearId: selYear}" :loading="drawerLoading" :hide-footer="true" size="400px" :title="$t('导入任课安排')" :action="uploadAction" :download-file="uploadFile" :result="uploadResult" :process="uploadProcess" @right-close="cancelDrawDialog" @success="uploadSuccess" @error="uploadError">

    </drawer-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
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
  import MyYearTerm from "../../../components/search/MyYearTerm";
  import TeacherTreeAndList from "../../../components/utils/treeAndList/TeacherTreeAndList";
  import {
    MessageError,
    MessageSuccess, MessageWarning,
    nationInfo,
    studentTeachStatus, studyType,
    teacherTypeInfo,
    workEnjoy,
    workTitle
  } from "../../../utils/utils";
  import coursePlanManageValidater from "../../../utils/validater/coursePlanManageValidater";
  export default {
    mixins: [mixins, coursePlanManageValidater],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,MyYearTerm,TeacherTreeAndList},
    data(){
      return {
        tableData: [],
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        searchKey: '',
        searchDept: '',
        subTitle: '',
        uploadProcess: '',
        uploadResult: [],
        uploadFile: common.course_plan_change_export_file,
        uploadAction: common.course_plan_import,
        loopTimer: null,
        resultList: [],
        selYear: '',
        selTerm: '',
        form: {
          id: '',
          yearName: '',
          termName: '',
          courseName: '',
          majorName: '',
          teacherId: [],
          credit: ''
        },
        majorNameList: [],
        courseNameList: []
      }
    },
    created() {
      this.initInfo();
      this.initCourse();
      this.initMajor();
    },
    methods: {
      async initInfo(){
        await this.getSessionInfo();
        this.selYear = this.currentYearId;
        this.selTerm = this.currentTermId;
        this.init();
      },
      init(){
        let params = {
          page: this.page,
          num: this.num,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          schYearid: this.selYear,
          termId: this.selTerm,
          searchKey: this.searchKey
        };
        this.$axios.get(common.course_plan_list, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initCourse(){
        let params = {
          page: 1,
          num: 9999,
        };
        this.$axios.get(common.course_mamage_page, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['label'] = res.data.data.list[i].course_name;
              res.data.data.list[i]['value'] = res.data.data.list[i].id + "-" + res.data.data.list[i].course_name +  "-" + res.data.data.list[i].credit;
            }
            this.courseNameList = res.data.data.list;
          }
        });
      },
      initMajor(){
        let params = {
          page: 1,
          num: 9999,
        };
        this.$axios.get(common.major_all_list, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.length; i++){
              res.data.data[i]['label'] = res.data.data[i].majorName;
              res.data.data[i]['value'] = res.data.data[i].majorName + "-" +res.data.data[i].id + "-" + res.data.data[i].collegeId;
            }
            this.majorNameList = res.data.data;
          }
        });
      },
      addInfo(){
        this.form.yearName = this.$refs.yearRef.$refs.commSelYear.selectedLabel;
        this.form.termName = this.$refs.yearRef.$refs.commSelTerm.selectedLabel;
        this.modalVisible = true;
      },
      editInfo(row){
        let userIds = [];
        this.form.id = row.id;
        for (let i = 0; i < row.teacherList.length; i++){
          userIds.push({
            user_id: row.teacherList[i].teacher_id,
            real_name: row.teacherList[i].teacher_name,
          });
        }
        this.$set(this.form, 'teacherId', userIds);
        this.modalVisible = true;
      },
      deleteInfo(row){
        this.form.id = row.id;
        this.subTitle = row.course_name;
        this.visibleConfim = true;
      },
      nodeClick(data){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        if (data.unit == 1){
          this.searchCollege = data.id;
        }else if (data.unit == 2){
          this.searchCollege = data.college_id;
          this.searchMajor = data.id;
        }else if (data.unit == 3){
          this.searchMajor = data.major_id;
          this.searchGrade = data.grade;
        }else if (data.unit == 4){
          this.searchClass = data.id;
        }
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
      workTitleInfo(val, type){
        return workTitle(type, val);
      },
      studentTeachStatusInfo(val, type){
        return studentTeachStatus(type, val);
      },
      okDialog(){
        let url = "";
        let userIds = {};
        this.$refs['form'].validate((valid) => {
          if (valid) {
            let params = {};
            if (this.form.teacherId.length == 0){
              MessageWarning(this.$t("请选择教师"));
              return;
            }
            if (this.form.teacherId.length > 0){
              for (let i = 0; i < this.form.teacherId.length; i ++ ){
                userIds[this.form.teacherId[i].user_id] = this.form.teacherId[i].real_name;
              }
              params['teacher'] = JSON.stringify(userIds);
            }
            if (this.form.id != ""){
              url = common.course_plan_change_teacher;
              params['id'] = this.form.id;
            }else {
              params = {
                major: this.form.majorName.split("-")[0],
                credit: this.form.credit,
                collegeId: this.form.majorName.split("-")[2],
                majorId: this.form.majorName.split("-")[1],
                courseId: this.form.courseName.split("-")[0],
                courseName: this.form.courseName.split("-")[1],
                schYearId: this.selYear,
                termId: this.selTerm
              };
              url = common.course_plan_add;
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
      closeDialog(event){
        this.form = {
          id: '',
          yearName: '',
          termName: '',
          courseName: '',
          majorName: '',
          teacherId: [],
          credit: ''
        };
        this.subTitle = "";
        if (this.$refs['popverPartRef']){
          this.$refs.popverPartRef._handleResetChange();
        }
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
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
      nationInfoText(){
        let arr = nationInfo();
        for (let i = 0; i < arr.length; i++){
          arr[i]['label'] = arr[i].name;
          arr[i]['value'] = arr[i].code;
        }
        return arr;
      },
      studentTeachStatusOption(){
        let obj = studentTeachStatus('get');
        let arr = [];
        for (let i in obj){
          arr.push({
            label: obj[i],
            value: i
          });
        }
        return arr;
      },
      studyTypeOption(){
        let obj = studyType('get');
        let arr = [];
        for (let i in obj){
          arr.push({
            label: obj[i].name,
            value: obj[i].code
          });
        }
        return arr;
      },
      workTitleOption(){
        let obj = workTitle('get');
        let arr = [];
        for (let i in obj){
          arr.push({
            label: obj[i],
            value: i
          });
        }
        return arr;
      },
      teacherTypeText(){
        let obj = teacherTypeInfo();
        let arr = [];
        for (let i = 0; i < obj.length; i++){
          arr.push({
            label: obj[i].name,
            value: obj[i].code
          });
        }
        return arr;
      },
      handleCascaderChange(data){
        this.form.classData = data;
        if (data.length == 4){
          let createTime = this.$refs.selectorDept.$refs.cascaderSelector.getCheckedNodes()[0].pathNodes[3].data.create_time;
          this.form.claszDate = this.$moment(createTime).format("YYYY-MM-DD");
        }
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          offerId: this.form.id
        };
        url = common.course_plan_list_delete;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
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
      closeDrawerDialog(event){
        this.uploadProcess = '';
        this.uploadResult = [];
        clearTimeout(this.loopTimer);
        this.loopTimer = null;
        this.drawerVisible = event;
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      cancelDrawDialog(){
        this.uploadProcess = '';
        this.uploadResult = [];
        this.drawerVisible = false;
      },
      uploadInfo(){
        this.drawerVisible = true;
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
      getUploadResult(uuid){
        let _self = this;
        clearTimeout(this.loopTimer);
        let params = {
          uuid: uuid,
          action: 5
        };
        this.$axios.get(common.upload_loop_result, {params: params}).then(res => {
          let result = "";
          if (res.data.code == 200){
            let arrResult = [];
            if (res.data.data){
              for (let i = 0; i < res.data.data.length; i++){
                //设置结果列表
                if (res.data.data[i].line){
                  arrResult.push(this.$t("第") + res.data.data[i].line + this.$t("行") + JSON.parse(res.data.data[i].mess).join());
                }else {
                  arrResult.push(JSON.parse(res.data.data[i].mess).join());
                }
                if (res.data.data[i].status == 1){
                  //this.loopStatus = true;
                  this.uploadResult = arrResult;
                  clearTimeout(this.loopTimer);
                  break;
                }else {
                  this.loopTimer = setTimeout(function () {
                    _self.getUploadResult(uuid)
                  }, 10000);
                }
              }
            }else {
              this.uploadResult = [this.$t("上传停止！")];
              clearTimeout(this.loopTimer);
            }
          }
        });
      },
      hangdleChange(data, type){
        switch (type) {
          case 1:
            this.selYear = data.year;
            this.selTerm = data.term;
            break;
          case 2:
            this.selYear = data.year;
            this.selTerm = data.term;
            break;
        }
        this.init();
      },
      handleSelUser(data){
        this.form.teacherId = data;
      },
      handleShowTeacher(type){
        this.$refs.popverPartRef._handleOpen();
      }
    }
  }
</script>

<style scoped>
  .container {

  }
</style>
