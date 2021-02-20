<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">学分申请</span>
        </div>
        <my-el-tree type="1" sub-type="4" @node-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="8">
              <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo()">{{$t("学分申请")}}</el-button>
              <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo()">{{$t("导出")}}</el-button>
            </el-col>
            <el-col :span="16" class="text-right">
              <my-date-picker type="daterange" :clearable="true" :sel-value="searchDate" size="small" width-style="240" @change="handleTime"></my-date-picker>
              <my-input-button size="small" plain width-class="width: 200px" type="success" :placeholder="$t('请输入姓名')" :clearable="true" @click="search"></my-input-button>
            </el-col>
          </el-row>
        </div>

        <div class="margin-top-10">
          <el-table
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
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{$moment(scope.row.apply_time).format("YYYY-MM-DD")}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{$moment(scope.row.apply_time).format("YYYY-MM-DD")}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('姓名')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.real_name}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.real_name}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('学号')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.student_id}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.student_id}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班级')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.class_name}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.class_name}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('申报人')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.apply_user_name}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.apply_user_name}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('申报项目')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.str2}}({{scope.row.str3}})</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.str2}}({{scope.row.str3}})
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              property="double1"
              :label="$t('分值')">
            </el-table-column>
            <el-table-column
              align="center"
              :filter-multiple="false"
              column-key="status"
              :filters="filterStatus"
              :label="$t('状态/审核人')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <my-audit-status :status="scope.row.status" :handler="scope.row.handler_name"></my-audit-status>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <my-audit-status :status="scope.row.status" :handler="scope.row.handler_name"></my-audit-status>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              fixed="right"
              :label="$t('操作')"
              width="60">
              <template slot-scope="scope">
                <i class="fa fa-list-alt margin-right-5 color-grand" @click="handleDetail(scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <dialog-normal width-style="700px" top="10vh" :visible="modalVisible" :title="$t('学分申请')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('类型')" prop="type">
            <my-select :sel-value="form.type" :options="filterScoreTypes" width-style="350" @change="handleSelect($event, 1)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('一级项目')" prop="object1">
            <my-select :sel-value="form.object1" :options="objectOne" width-style="350" @change="handleSelect($event, 2)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('二级项目')" prop="object2">
            <my-select :sel-value="form.object2" :options="objectTwo" width-style="350" @change="handleSelect($event, 3)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('学生')">
            <div class="margin-bottom-10">
              <my-input-button ref="studentRef" size="small" type="success" :clearable="true" :placeholder="$t('学生名称')" @click="searchStudent"></my-input-button>
            </div>
            <el-table ref="tableRef" v-loading="studentLoading" :row-key="getRowKeys" height="200" :header-cell-style="{'line-height': '20px'}" size="mini" :data="studentData" border style="width: 450px" @selection-change="handleSelectionChange">
              <el-table-column
                :reserve-selection="true"
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column property="real_name" align="center" label="姓名" :show-overflow-tooltip="true">

              </el-table-column>
              <el-table-column property="class_name" align="center" label="班级" :show-overflow-tooltip="true">

              </el-table-column>
              <el-table-column align="center" label="性别" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <my-sex :sex="scope.row.sex" tag="text"></my-sex>
                </template>
              </el-table-column>
            </el-table>
            <div class="credit-fotter-page text-right">
              <el-pagination style="padding: 5px 0px;" small layout="prev, pager, next" :total="totalStudent" :current-page="pageStudnet" :page-size="numStudent" @current-change="currentStudentPage" @size-change="sizeStudentChange"></el-pagination>
            </div>
            <div><span class="color-danger font-size-12">{{errorStudent}}</span></div>
          </el-form-item>
          <el-form-item :label="$t('附件')">
            <div v-if="form.file != ''" class="pull-left" style="position: relative">
              <i class="fa fa-close" style="position: absolute; right: -5px; top: -5px;" @click="deleteImg"></i>
              <img :src="form.file" class="credit-img"/>
            </div>
            <upload-square class="pull-left margin-left-10 margin-top-5" :limit="9999" :action="uploadFileAction" max-size="8" :data="{path: 'creditFile'}" accept=".png,.jpg,.jpeg" @success="uploadSuccess">
              <el-button size="small" type="primary">{{$t("点击上传")}}</el-button>
            </upload-square>
            <span class="pull-left color-danger font-size-12 margin-left-10 margin-top-5">{{$t("文件不超过8M")}}</span>
            <div class="moon-clearfix"></div>
          </el-form-item>
          <el-form-item :label="$t('说明')">
            <el-input type="textarea" :rows="2" v-model="form.des" class="width-350"></el-input>
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

    <!--审批详细-->
    <drawer-layout-right @changeDrawer="closeDrawerDialog" :hide-footer="false" :visible="drawerVisible" size="550px" :title="$t('申请单')" @right-close="cancelDrawDialog">
      <div slot="content">
        <my-audit-detail type="ScoreApply" :sel-value="dataAudit"></my-audit-detail>
      </div>
      <div slot="footer">
        <audit-button :sel-value="dataAudit" @ok="handleOk" @no="handleNo" @cancel="handleCancel"></audit-button>
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
  import MyDatePicker from "../../../components/MyDatePicker";
  import {common} from "../../../utils/api/url";
  import {MessageError, MessageSuccess, MessageWarning} from "../../../utils/utils";
  import scoreApplyValidater from "../../../utils/validater/scoreApplyValidater";
export default {
  mixins: [mixins,scoreApplyValidater],
  components: {LayoutLr,MyElTree,MySelect,DrawerLayoutRight,MyAuditDetail,MyPagination,MyAuditStatus,CircleChart,MyRadio,DialogNormal,MyInputButton,UploadSquare,MyDatePicker},
  data(){
    return {
      pageStudnet: 1,
      numStudent: 20,
      totalStudent: 0,
      dataAudit: {},
      drawerVisible: false,
      modalVisible: false,
      dialogLoading: false,
      visibleConfim: false,
      studentLoading: false,
      subTitle: '',
      tableData: [],
      studentData: [],
      searchCollege: '',
      searchMajor: '',
      searchGrade: '',
      searchClass: '',
      applyTimeBegin: '',
      applyTimeEnd: '',
      status: '',
      searchKey: '',
      searchStudentKey: '',
      searchDate: [],
      objectOne: [],
      objectTwo: [],
      errorStudent: '',
      uploadFileAction: common.upload_file,
      auditObjectItem: {},
      form: {
        id: '',
        type: '',
        object1: '',
        object2: '',
        des: '',
        userId: [],
        file: ''
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
        applyTypeCode: 'ScoreApply',
        collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        classId: this.searchClass,
        applyTimeBegin: this.searchDate && this.searchDate.length > 0 ? this.searchDate[0] : '',
        applyTimeEnd: this.searchDate && this.searchDate.length > 0 ? this.searchDate[1] : '',
        status: this.status,
        searchKey: this.searchKey
      };
      this.$axios.get(common.audit_page, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },
    initObject(type, typeName){
      let params = {
        scoreType: type
      };
      if (typeName){
        params['socreName'] = typeName;
      }
      params = this.$qs.stringify(params);
      this.$axios.post(common.audit_credit_type_fliter, params).then(res => {
        if (res.data.data){
          if (typeName){
            for (let i = 0; i < res.data.data.length; i++){
              res.data.data[i]['label'] = res.data.data[i].socre_name_sub;
              res.data.data[i]['value'] = res.data.data[i].socre_name_sub;
            }
            //this.objectOne = res.data.data;
            this.objectTwo = res.data.data;
            this.form.object2 = "";
          }else {
            for (let i = 0; i < res.data.data.length; i++){
              res.data.data[i]['label'] = res.data.data[i].socre_name;
              res.data.data[i]['value'] = res.data.data[i].socre_name;
            }
            this.objectOne = res.data.data;
          }
        }
      });
    },
    initStudent(){
      let params = {
        page: this.pageStudent,
        num: this.numStudent,
        /*collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        clasz: this.searchClass,*/
        deleted: 0
      };
      params['realName'] = this.searchStudentKey['input'];
      params = this.$qs.stringify(params);
      this.studentLoading = true;
      this.$axios.post(common.student_list, params).then(res => {
        if (res.data.data){
          this.studentData = res.data.data.list;
          this.totalStudent = res.data.data.totalCount;
          this.numStudent = res.data.data.num;
          this.pageStudnet = res.data.data.currentPage;
        }
        this.studentLoading = false;
      });
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
      this.page = 1;
      this.init();
    },
    addInfo(){
      this.initStudent();
      this.modalVisible = true;
    },
    expandInfo(){
      let url = common.audit_download;
      let params = {
        page:1,
        num:99999,
        applyTypeCode: 'ScoreApply',
        collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        classId: this.searchClass,
        applyTimeBegin: this.searchDate ? this.searchDate[0] : '',
        applyTimeEnd: this.searchDate ? this.searchDate[1] : '',
        status: this.status,
        searchKey: this.searchKey
      };
      params = this.$qs.stringify(params);
      window.open(url+"?"+params, "_self");
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
    fliterTable(value, row, column){
      for (let item in value){
        if (item == 'status'){
          this.status = value[item][0];
        }
      }
      this.init();
    },
    handleDetail(row){
      let params = {
        id:row.object_id ? row.object_id : row.id
      };
      this.auditObjectItem = row;
      this.$axios.get(common.msg_detail_center, {params: params}).then(res => {
        if (res.data.code == 200){
          this.dataAudit = res.data.data;
          this.drawerVisible = true;
        }else {
          MessageWarning(res.data.desc);
        }
      });
    },
    closeDrawerDialog(event){
      this.auditObjectItem = {};
      this.dataAudit = {};
      this.drawerVisible = event;
    },
    cancelDrawDialog(){
      this.auditObjectItem = {};
      this.dataAudit = {};
      this.drawerVisible = false;
    },
    okDialog(event){
      let url = "";
      let arr = [];
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.errorStudent = "";
          if (this.form.userId.length <= 0){
            this.errorStudent = this.$t("请选择学生");
            return;
          }
          for (let i = 0; i < this.form.userId.length; i++){
            arr.push(this.form.userId[i].user_id);
          }
          this.dialogLoading = true;
          let params = {
            applyFile: this.form.file,
            applyTypeCode: "ScoreApply",
            des: this.form.des,
            str1: this.form.type == "false" ? "减分" : "加分",
            str2: this.form.object1,
            str3: this.form.object2,
            userId: arr.join(),
            userType: "5"
          };
          url = common.audit_re_add;
          params = JSON.stringify(params);
          this.$axios.post(url, params, {dataType: 'stringfy', loading: false}).then(res => {
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
    uploadSuccess(res, file){
      if (res.code == 200){
        this.form.file = res.data.url;
      }else {

      }
    },
    uploadError(res, file){
      MessageError(res.data.desc);
    },
    cancelDialog(){
      this.modalVisible = false;
    },
    closeDialog(event){
      this.form = {
        id: '',
        type: '',
        object1: '',
        object2: '',
        des: '',
        userId: [],
        file: ''
      };
      this.subTitle = "";
      this.pageStudent = 1;
      this.numStudent = 20;
      this.searchStudentKey = "";
      this.objectOne = [];
      this.objectTwo = [];
      if (this.$refs.studentRef){
        this.$refs.studentRef.inputValue = "";
      }
      if (this.$refs.tableRef){
        this.$refs.tableRef.clearSelection();
      }
      if (this.$refs['form']){
        this.$refs['form'].resetFields();
      }
    },
    handleSelect(data, type){
      switch (type) {
        case 1:
          this.form.type = data;
          this.form.object1 = '';
          this.form.object2 = '';
          this.objectOne = [];
          this.objectTwo = [];
          this.initObject(data);
          break;
        case 2:
          this.form.object1 = data;
          this.initObject(this.form.type, data)
          break;
        case 3:
          this.form.object2 = data;
          break;
      }
    },
    sizeStudentChange(event){
      this.pageStudent = 1;
      this.numStudent = event;
      this.initStudent();
    },
    currentStudentPage(event){
      this.pageStudent = event;
      this.initStudent();
    },
    handleSelectionChange(data){
      this.form.userId = data;
    },
    getRowKeys(row) {
      return row.user_id
    },
    searchStudent(data){
      this.searchStudentKey = data;
      this.initStudent();
    },
    deleteImg(){
      this.form.file = "";
    },
    handleOk(data,textarea){
      let params = {
        applyId: this.auditObjectItem.id ? this.auditObjectItem.id : this.auditObjectItem.id,
        status: 1,
        des2: textarea
      };
      params = this.$qs.stringify(params);
      this.$axios.post(common.msg_handle, params).then(res => {
        if (res.data.code == 200){
          this.handleDetail(this.auditObjectItem);
          this.init();
          MessageSuccess(res.data.desc);
        }else{
          MessageWarning(res.data.desc);
        }
      });
    },
    handleNo(data,textarea){
      let params = {
        applyId: this.auditObjectItem.id ? this.auditObjectItem.id : this.auditObjectItem.id,
        status: 2,
        des2: textarea
      };
      params = this.$qs.stringify(params);
      this.$axios.post(common.msg_handle, params).then(res => {
        if (res.data.code == 200){
          this.handleDetail(this.auditObjectItem);
          this.init();
          MessageSuccess(res.data.desc);
        }else{
          MessageWarning(res.data.desc);
        }
      });
    },
    handleCancel(data){
      let params = {
        applyId: this.auditObjectItem.id ? this.auditObjectItem.id : this.auditObjectItem.id,
        status: -1
      };
      params = this.$qs.stringify(params);
      this.$axios.post(common.msg_handle, params).then(res => {
        if (res.data.code == 200){
          this.handleDetail(this.auditObjectItem);
          this.init();
          MessageSuccess(res.data.desc);
        }else{
          MessageWarning(res.data.desc);
        }
      });
    },
    handleTime(data){
      this.searchDate = data;
    }
  }
}
</script>

<style scoped>
.container {

}
.credit-img{
  height: 50px;
  width: 50px;
  border: 1px solid #dddddd;
}
.credit-fotter-page{
  border: 1px solid #EBEEF5;
  border-top: 0px;
  height: 30px;
  line-height: 30px;
  width: 448px;
}
</style>
