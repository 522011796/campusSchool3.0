<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">课程管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo()">{{$t("添加课程")}}</el-button>
            <el-button size="small" type="warning" plain  icon="el-icon-notebook-2" @click="uploadOrganization($event)">{{$t("导入课程")}}</el-button>
          </el-col>
          <el-col :span="12" class="text-right">
            <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('名称')" @click="search"></my-input-button>
          </el-col>
        </el-row>
      </div>

      <div slot="content">
        <div class="bg-white border-bottom-1 padding-lr-5 padding-tb-5 custom-card-layout" :style="divHeight7">
          <div v-if="tableData.length <= 0">
            <div class="text-center padding-tb-10">
              <span class="color-disabeld">{{$t("暂无数据")}}</span>
            </div>
          </div>

          <el-row v-else :gutter="16">
            <el-col :span="6" v-for="(item, index) in tableData" :key="index" class="margin-bottom-20">
              <el-card :body-style="{padding: '0px'}" style="position: relative;height: 210px">
                <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
                  <span class="color-grand" style="font-weight: bold">
                    <i class="fa fa-television"></i>
                    {{item.course_name}}
                  </span>

                  <span class="pull-right">
                    <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(item)"></i>
                    <i class="fa fa-trash color-danger" @click="deleteInfo(item)"></i>
                  </span>
                  <div class="moon-clearfix"></div>
                </div>
                <div class="color-muted padding-tb-10 padding-lr-10">
                  <el-row>
                    <el-col :span="24">
                      <div>
                        <span class="color-disabeld">{{$t("课程号")}}:</span>
                        <span>{{item.course_no}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span class="color-disabeld">{{$t("课程类型")}}:</span>
                        <span>{{coursePropertiesInfo('set', item.course_property)}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span class="color-disabeld">{{$t("授课形式")}}:</span>
                        <span>{{teachMethodInfo('set', item.teach_type)}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span class="color-disabeld">{{$t("考试形式")}}:</span>
                        <span>{{examMethodInfo('set', item.exam_type)}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span class="color-disabeld">{{$t("学分")}}:</span>
                        <span>{{item.credit}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span class="color-disabeld">{{$t("状态")}}:</span>
                        <span><my-enable :status="item.enabled"></my-enable></span>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal :visible="modalVisible" :title="$t('课程设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('课程编号')" prop="courseNo">
            <el-input v-model="form.courseNo" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('课程名称')" prop="courseName">
            <el-input v-model="form.courseName" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('授课形式')" prop="teachType">
            <my-select :sel-value="form.teachType" :options="teachMethodInfo('get')" width-style="260" @change="handleChange($event, 1)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('课程类型')" prop="courseProperty">
            <my-select :sel-value="form.courseProperty" :options="coursePropertiesInfo('get')" width-style="260" @change="handleChange($event, 2)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('考试形式')" prop="examType">
            <my-select :sel-value="form.examType" :options="examMethodInfo('get')" width-style="260" @change="handleChange($event, 3)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('学分')" prop="credit">
            <el-input v-model="form.credit" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('状态')" prop="realName">
            <my-radio :sel-value="form.enabled" :label="true" @change="changeStatus($event, true)">{{$t("启用")}}</my-radio>
            <my-radio :sel-value="form.enabled" :label="false" @change="changeStatus($event, false)">{{$t("禁用")}}</my-radio>
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

    <drawer-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" accept=".xls,.xlsx" :loading="drawerLoading" :hide-footer="true" size="400px" :title="$t('导入课程')" :action="uploadAction" :download-file="uploadFile" :result="uploadResult" :process="uploadProcess" @right-close="cancelDrawDialog" @success="uploadSuccess" @error="uploadError">

    </drawer-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" content="确认需要删除该信息？" :detail="subDetail" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

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
    components: {MyRadio, MySelect, LayoutTb,MyInputButton,MyPagination,DialogNormal,MyNormalDialog,DrawerRight,MyEnable},
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
          courseName: this.searchKey
        };
        this.$axios.get(common.course_mamage_page, {params: params}).then(res => {
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
          id: row.id,
          courseName: row.course_name,
          courseNo: row.course_no,
          name: row.name,
          teachType: ''+row.teach_type,
          courseProperty: ''+row.course_property,
          examType: ''+row.exam_type,
          credit: row.credit,
          enabled: row.enabled
        };
        this.modalVisible = true;
      },
      deleteInfo(row){
        this.form.id = row.id;
        this.subDetail = row.course_name;
        this.visibleConfim = true;
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
      uploadOrganization(event){
        this.drawerVisible = true;
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      cancelDrawDialog(){
        this.uploadProcess = '';
        this.uploadResult = {};
        this.drawerVisible = false;
      },
      closeDialog(event){
        this.form = {
          id: '',
          courseName: '',
          courseNo: '',
          name: '',
          teachType: '',
          courseProperty: '',
          examType: '',
          credit: '',
          enabled: true
        };
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      closeDrawerDialog(event){
        this.uploadProcess = '';
        this.uploadResult = {};
        this.drawerVisible = event;
      },
      okDialog(event){
        let url = "";
        let params = {
          courseNo: this.form.courseNo,
          courseName: this.form.courseName,
          teachType: this.form.teachType,
          courseProperty: this.form.courseProperty,
          examType: this.form.examType,
          credit: this.form.credit,
          enabled: this.form.enabled
        };
        if (this.form.id && this.form.id != ""){
          url = common.course_mamage_edit;
          params['id'] = this.form.id;
        }else {
          url = common.course_mamage_add;
        }
        params = this.$qs.stringify(params);

        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            this.$axios.post(url, params, {loading: false}).then(res=>{
              if (res.data.code == 200){
                this.init();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
              this.modalVisible = false;
            });
          }
        });
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      okDrawDialog(event){
        this.drawerLoading = true;
        setTimeout(() => {
          this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          });
          this.drawerLoading = false;
          this.drawerVisible = false;
        },2000)
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let params = {
          courseId: this.form.id
        };
        //params = this.$qs.stringify(params);
        this.$axios.get(common.course_mamage_del, {params:params}).then(res => {
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
      uploadSuccess(res, file){
        this.uploadProcess = res.desc;


        if (res.code == 200){
          this.uploadResult = res.data ? res.data : [res.desc];
        }else {
          if (res.data){
            this.uploadResult = res.data;
          }else {
            this.uploadResult = [res.desc];
          }
        }
      },
      uploadError(res, file){
        this.uploadProcess = res.data.data;
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
</style>
