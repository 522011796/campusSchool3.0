<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">学生信息</span>
        </div>
        <my-el-tree type="1" sub-type="4" @node-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="12">
              <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加学生")}}</el-button>
              <el-button size="small" type="warning"  icon="el-icon-notebook-2" @click="uploadInfo($event)">{{$t("导入学生")}}</el-button>
            </el-col>
            <el-col :span="12" class="text-right">
              <my-input-button :show-select="true" :options="searchStudentType" size="small" plain width-class="width: 240px" type="success" :clearable="true" @click="search"></my-input-button>
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
              prop="real_name"
              :label="$t('姓名')">
            </el-table-column>
            <el-table-column
              align="center"
              prop="student_id"
              :label="$t('学号')">
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('性别')">
              <template slot-scope="scope">
                <my-sex :sex="scope.row.sex" tag="text"></my-sex>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('电话')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.phone ? scope.row.phone : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.phone ? scope.row.phone : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('身份证')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.certificate_num ? scope.row.certificate_num : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.certificate_num ? scope.row.certificate_num : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班级')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.class_name ? scope.row.class_name : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.class_name ? scope.row.class_name : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('状态')">
              <template slot-scope="scope">
                <span v-if="scope.row.status">{{studentTeachStatusInfo(scope.row.status, 'set')}}</span>
                <span v-else>--</span>
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
            <my-pagination :total="total" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </div>
    </layout-lr>

    <dialog-normal top="10vh" width-style="650px" :visible="modalVisible" :title="$t('教工设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="80px">
          <el-row :gutter="16">
            <el-col :span="12">
              <el-form-item :label="$t('姓名')" prop="name">
                <el-input v-model="form.name" class="width-220"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('学号')" prop="studentId">
                <el-input v-model="form.studentId" class="width-220"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="16">
            <el-col :span="12">
              <el-form-item :label="$t('性别')" prop="sex">
                <my-select :sel-value="form.sex" :options="g_sex" width-style="220" @change="handleChangeSelect($event, 1)"></my-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('民族')" prop="nation">
                <my-select :sel-value="form.nation" :options="nationInfoText()" width-style="220" @change="handleChangeSelect($event, 2)"></my-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="16">
            <el-col :span="12">
              <el-form-item :label="$t('出生日期')" prop="borthday">
                <my-date-picker :sel-value="form.borthday" width-style="220" @change="handleChangeTime($event,1)"></my-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('身份证')" prop="idCard">
                <el-input v-model="form.idCard" class="width-220"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="16">
            <el-col :span="12">
              <el-form-item :label="$t('手机号')" prop="phone">
                <el-input v-model="form.phone" class="width-220"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('邮箱')" prop="email">
                <el-input v-model="form.email" class="width-220"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="16">
            <el-col :span="12">
              <el-form-item :label="$t('入学时间')" prop="innerTime">
                <my-date-picker :sel-value="form.innerTime" width-style="220" @change="handleChangeTime($event,2)"></my-date-picker type="month">
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('就读方式')" prop="type">
                <my-select :sel-value="form.type" :options="studyTypeOption()" width-style="220" @change="handleChangeSelect($event, 3)"></my-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="16">
            <el-col :span="12">
              <el-form-item :label="$t('所属班级')" prop="classData">
                <!--<my-select width-style="220" @change="handeChangeSelect($event, 5)"></my-select>-->
                <my-cascader ref="selectorDept" :sel-value="form.classData" type="1" sub-type="4" width-style="220" @change="handleCascaderChange($event)"></my-cascader>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('学籍状态')" prop="status">
                <my-select :sel-value="form.status" :options="studentTeachStatusOption()" width-style="220" @change="handleChangeSelect($event, 4)"></my-select>
              </el-form-item>
            </el-col>
          </el-row>
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

    <drawer-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" accept=".xls,.xlsx" :loading="drawerLoading" :hide-footer="true" size="400px" :title="$t('导入学生')" :action="uploadAction" :download-file="uploadFile" :result="uploadResult" :process="uploadProcess" @right-close="cancelDrawDialog" @success="uploadSuccess" @error="uploadError">

    </drawer-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
  import mixins from "../../utils/mixins";
  import {common} from "../../utils/api/url";
  import MyElTree from "../../components/tree/MyElTree";
  import MyPagination from "../../components/MyPagination";
  import MyInputButton from "../../components/search/MyInputButton";
  import MySex from "../../components/MySex";
  import DialogNormal from "../../components/utils/dialog/DialogNormal";
  import MySelect from "../../components/MySelect";
  import MyCascader from "../../components/utils/select/MyCascader";
  import MyDatePicker from "../../components/MyDatePicker";
  import MyNormalDialog from "../../components/utils/dialog/MyNormalDialog";
  import DrawerRight from "../../components/utils/dialog/DrawerRight";
  import {
    MessageError,
    MessageSuccess,
    nationInfo,
    studentTeachStatus, studyType,
    teacherTypeInfo,
    workEnjoy,
    workTitle
  } from "../../utils/utils";
  import studentValidater from "../../utils/validater/studentValidater";
  export default {
    mixins: [mixins, studentValidater],
    components: {MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight},
    data(){
      return {
        tableData: [],
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        searchKey: '',
        searchDept: '',
        subTitle: '',
        uploadProcess: '',
        uploadResult: {},
        uploadFile: common.teacher_file + "?fileName=" + encodeURIComponent(this.$t("学生导入模板20180130_v2.xls")),
        uploadAction: common.student_upload,
        loopTimer: null,
        resultList: [],
        form: {
          id: '',
          name: '',
          sex: '',
          nation: '',
          borthday: '',
          idCard: '',
          phone: '',
          email: '',
          innerTime: '',
          classData: [],
          addAccount: '',
          type: '',
          status: '',
          studnetId: '',
          className: '',
          classId: '',
          collegeId: '',
          majorId: '',
          claszDate: ''
        }
      }
    },
    created() {
      this.init();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          departPath: this.searchDept,
          deleted: 0
        };
        params[this.searchKey['select']] = this.searchKey['input'];
        params = this.$qs.stringify(params);
        this.$axios.post(common.student_list, params).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      addInfo(){
        this.modalVisible = true;
      },
      editInfo(row){
        this.form = {
          id: row.user_id,
          name: row.real_name,
          studentId: row.student_id,
          sex: ''+row.sex,
          nation: row.nation,
          borthday: row.birthday ? this.$moment(row.birthday).format("YYYY-MM-DD") : '',
          idCard: row.certificate_num,
          phone: row.phone,
          email: row.email,
          innerTime:  row.school_in_time ? this.$moment(row.school_in_time).format("YYYY-MM-DD") : '',
          type: row.attend_type,
          status: row.status,
          addAccount: '',
          className: row.class_name,
          classId: row.class_id,
          collegeId: row.college_id,
          majorId: row.major_id,
          claszDate: this.$moment(row.clasz_date).format("YYYY-MM-DD")
        };
        this.$set(this.form, 'classData', [row.college_id, row.major_id, row.grade, row.class_id]);
        this.modalVisible = true;
      },
      deleteInfo(row){
        this.form.id = row.user_id;
        this.subTitle = row.real_name;
        this.visibleConfim = true;
      },
      nodeClick(data){
        this.searchDept = data.department_path;
        this.init();
      },
      search(data){
        this.searchKey = data;
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
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let classData = this.$refs.selectorDept.$refs.cascaderSelector.getCheckedNodes()[0].pathNodes;
            let className = this.$refs.selectorDept.$refs.cascaderSelector.getCheckedNodes()[0].pathLabels;
            /*let deptArr = [];
            for (let i = 0; i < deptData.length; i++){
              deptArr.push(deptData[i].value);
            }*/
            let params = {
              realName: this.form.name,
              studentId: this.form.studentId,
              sex: this.form.sex,
              nation: this.form.nation,
              birthday: this.form.borthday,
              certificateNum: this.form.idCard,
              phone: this.form.phone,
              schoolInTime: this.form.innerTime,
              stuAttendType: this.form.type,
              workEnjoy: this.form.workEnjoy,
              title: this.form.workTitle,
              type: this.form.type,
              addAccount: 'on',
              studentCurrentStatus: this.form.status,
              clasz: classData[3].value,
              collegeId: classData[0].value,
              majorId: classData[1].value,
              attendType: this.form.type,
              status: this.form.status,
              className: className[className.length - 1],
              claszDate: this.form.claszDate
            };
            if (this.form.email){
              params['email']  = this.form.email;
            }
            if (this.form.id != ""){
              url = common.student_edit;
              params['userId'] = this.form.id;
            }else {
              url = common.student_add;
            }
            params = this.$qs.stringify(params);
            this.$axios.post(url, params).then(res => {
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
          name: '',
          sex: '',
          nation: '',
          borthday: '',
          idCard: '',
          phone: '',
          email: '',
          innerTime: '',
          classData: [],
          addAccount: '',
          type: '',
          status: '',
          studnetId: '',
          className: '',
          classId: '',
          collegeId: '',
          majorId: '',
          claszDate: ''
        };
        this.subTitle = "";
        this.$set(this.form,'deptdata', []);
        this.resetCasadeSelector('selectorDept');
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
            this.form.sex = data;
            break;
          case 2:
            this.form.nation = data;
            break;
          case 3:
            this.form.type = data;
            break;
          case 4:
            this.form.status = data;
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
          userId: this.form.id
        }
        url = common.student_delete;
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
        this.uploadResult = {};
        clearTimeout(this.loopTimer);
        this.loopTimer = null;
        this.drawerVisible = event;
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      cancelDrawDialog(){
        this.uploadProcess = '';
        this.uploadResult = {};
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
          action: 2
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
      }
    }
  }
</script>

<style scoped>
  .container {

  }
</style>
