<template>
  <div class="container">
    <layout-tb>
      <template slot="tag"></template>

      <div slot="tab">
        <el-row>
          <el-col :span="24">
            <el-button size="small" type="text" @click="returnMain($event)">
              <i class="fa fa-arrow-left"></i>
              {{$t("返回")}}
            </el-button>
            <span class="margin-left-5">{{pageTitle}}</span>
            <el-button class="margin-left-5" size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("创建规则")}}</el-button>
          </el-col>
        </el-row>
      </div>

      <div slot="content">
        <el-table
          ref="refTable"
          :data="tableData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          row-key="id"
          :max-height="tableHeight.height"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="department_name"
            :label="$t('创建时间')">

            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{$moment(scope.row.time).format("YYYY-MM-DD HH:mm:ss")}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{$moment(scope.row.time).format("YYYY-MM-DD HH:mm:ss")}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="action_name"
            :label="$t('规则名称')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="user_name"
            :label="$t('总人数')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="ip"
            :label="$t('状态')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">

                </div>
                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">

                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            width="120"
            :label="$t('操作')">
            <template slot-scope="scope">
              <i class="fa fa-flag margin-right-5 color-grand" @click="setInfo(scope.row)"></i>
              <i class="fa fa-edit margin-right-5 color-success" @click="editInfo(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal top="10vh" :visible="dialogVisible" :title="$t('规则设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('规则名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('宿舍范围')" prop="dorm">
            <el-button size="mini" type="warning" @click="dormManage">{{$t('添加宿舍')}}</el-button>
            <span class="color-muted margin-left-10">{{$t('宿舍数量')}}</span>
            <span class="color-muted">0</span>
          </el-form-item>
          <el-form-item :label="$t('学生范围')" prop="student">
            <el-button size="mini" type="warning" @click="studentManage">{{$t('添加学生')}}</el-button>
            <span class="color-muted margin-left-10">{{$t('学生人数')}}</span>
            <span class="color-muted">0</span>
            <span class="color-muted">{{$t('人')}}</span>
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

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawDialog" :visible="drawerDorm" size="700px" :title="$t('宿舍设置')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <div>
          <div class="layout-inline">
            <my-cascader class="layout-item" :clearable="true" ref="SelectorDormDept" size="small" width-style="160" :sel-value="searchCommDeptBedData" type="2" sub-type="2" @change="handleCascaderBedChange($event)"></my-cascader>
          </div>
          <div>
            <el-table class="margin-top-10"
                      ref="dormTableRef"
                      :data="tableDormData"
                      size="mini"
                      v-loading="tableDormLoading">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="楼栋"
                align="center">
                <template slot-scope="scope">

                </template>
              </el-table-column>
              <el-table-column
                prop="floor_num"
                :label="$t('楼层')"
                align="center">
              </el-table-column>
              <el-table-column
                :label="$t('类型')"
                align="center">

                <template slot-scope="scope">
                  <span>{{dormTypeInfo(scope.row.type)}}</span>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('管理员')"
                align="center">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label>{{scope.row.teacher_name ? scope.row.teacher_name : '--'}}</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label>{{scope.row.teacher_name ? scope.row.teacher_name : '--'}}</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('床位总数')"
                align="center">
                <template slot-scope="scope">
                  <span>{{scope.row.has_people_num}}</span>
                  /
                  <span>{{scope.row.people_num}}</span>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('可用床位')"
                align="center">
                <template slot-scope="scope">
                  <span>{{scope.row.has_people_num}}</span>
                  /
                  <span>{{scope.row.people_num}}</span>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('朝向')"
                align="center">
                <template slot-scope="scope">
                  <span>{{scope.row.has_people_num}}</span>
                  /
                  <span>{{scope.row.people_num}}</span>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('单价')"
                align="center">
                <template slot-scope="scope">
                  <span>{{scope.row.has_people_num}}</span>
                  /
                  <span>{{scope.row.people_num}}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <my-pagination :total="totalDorm" :current-page="pageDorm" :page-size="numDorm" @currentPage="currentDormPage" @sizeChange="sizeDormChange" @jumpChange="jumpDormPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawDialog" :visible="drawerStudent" size="700px" :title="$t('学生设置')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <div>
          <div class="layout-inline">
            <my-cascader class="layout-item" ref="SelectorCollege" size="small" width-style="160" :sel-value="searchCollegeData" type="1" sub-type="4" @change="handleCascaderStudentChange($event)"></my-cascader>
          </div>
          <div>
            <el-table class="margin-top-10"
                      ref="dormTableRef"
                      :data="tableStudnetData"
                      size="mini"
                      v-loading="tableDormLoading">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="录入时间"
                align="center">
                <template slot-scope="scope">

                </template>
              </el-table-column>
              <el-table-column
                prop="floor_num"
                :label="$t('录取号')"
                align="center">
              </el-table-column>
              <el-table-column
                :label="$t('姓名')"
                align="center">

                <template slot-scope="scope">
                  <span>{{dormTypeInfo(scope.row.type)}}</span>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('性别')"
                align="center">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label>{{scope.row.teacher_name ? scope.row.teacher_name : '--'}}</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label>{{scope.row.teacher_name ? scope.row.teacher_name : '--'}}</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('院系')"
                align="center">
                <template slot-scope="scope">
                  <span>{{scope.row.has_people_num}}</span>
                  /
                  <span>{{scope.row.people_num}}</span>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('专业')"
                align="center">
                <template slot-scope="scope">
                  <span>{{scope.row.has_people_num}}</span>
                  /
                  <span>{{scope.row.people_num}}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <my-pagination :total="totalStudent" :current-page="pageStudent" :page-size="numStudent" @currentPage="currentStudentPage" @sizeChange="sizeDormChange" @jumpChange="jumpStudentPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
import MyPagination from "~/components/MyPagination";
import mixins from "~/utils/mixins";
import {common} from "~/utils/api/url";
import {dormTypeText, MessageError, MessageSuccess} from "~/utils/utils";
import LayoutTb from "~/components/Layout/LayoutTb";
import MySelect from "~/components/MySelect";
import MyUserType from "~/components/utils/MyUserType";
import MyDatePicker from "~/components/MyDatePicker";
import MyInputButton from "~/components/search/MyInputButton";
import linkDormValidater from "~/utils/validater/linkDormValidater";
export default {
  mixins: [mixins,linkDormValidater],
  components: {MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton},
  props: {
    pageTitle: ''
  },
  data(){
    return {
      pageDorm: 1,
      numDorm: 20,
      totalDorm: 0,
      pageStudent: 1,
      numStudent: 20,
      totalStudent: 0,
      tableData: [],
      searchDate: [],
      typeList: [],
      searchCommDeptBedData: [],
      searchCollegeData: [],
      tableDormData: [],
      tableStudnetData: [],
      searchKey: '',
      commSearchBuild: '',
      commSearchFloor: '',
      visible: false,
      visibleConfim: false,
      dialogVisible: false,
      drawerVisible: false,
      drawerDorm: false,
      drawerStudent: false,
      tableDormLoading: false,
      dialogLoading: false,
      clearTime: '',
      action: '',
      subTitle: '',
      searchDorm: '',
      searchStudnetCollege: '',
      searchStudnetMajor: '',
      searchStudnetGrade: '',
      searchStudnetClass: '',
      form: {
        id: '',
        name: '',
        students: [],
        dorm: []
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
        startTime: this.searchDate && this.searchDate.length > 0 ? (this.searchDate[0] + " 00:00:00") : '',
        endTime: this.searchDate && this.searchDate.length > 0 ? (this.searchDate[1] + " 23:59:59") : '',
        userName: this.searchKey,
        queryType: 2,
        action: this.action
      };
      this.$axios.get(common.log_list, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },
    initDorm(){
      let params = {
        page: this.pageDorm,
        num: this.numDorm,
        buildId: this.searchBuildId,
        floorNum: this.searchFloorNum
      };
      this.tableDormLoading = true;
      this.$axios.get(common.dormroom_page, {params: params}).then(res => {
        if (res.data.data){
          this.tableDormData = res.data.data.list;
          this.totalDorm = res.data.data.totalCount;
          this.numDorm = res.data.data.num;
          this.pageDorm = res.data.data.currentPage;

          this.tableDormLoading = false;
        }
      });
    },
    initStudent(){
      let params = {
        page: this.pageStudent,
        num: this.numStudent,
        buildId: this.searchBuildId,
        floorNum: this.searchFloorNum
      };
      this.tableDormLoading = true;
      this.$axios.get(common.dormroom_page, {params: params}).then(res => {
        if (res.data.data){
          this.tableStudnetData = res.data.data.list;
          this.totalStudent = res.data.data.totalCount;
          this.numStudent = res.data.data.num;
          this.pageStudent = res.data.data.currentPage;

          this.tableDormLoading = false;
        }
      });
    },
    dormTypeInfo(val){
      return dormTypeText(val);
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
    sizeDormChange(event){
      this.pageDorm = 1;
      this.numDorm = event;
      this.initDorm();
    },
    currentDormPage(event){
      this.pageDorm = event;
      this.initDorm();
    },
    jumpDormPage(data){
      this.pageDorm = data;
      this.initDorm();
    },
    sizeStudentChange(event){
      this.pageStudent = 1;
      this.numStudent = event;
      this.initDorm();
    },
    currentStudentPage(event){
      this.pageStudent = event;
      this.initDorm();
    },
    jumpStudentPage(data){
      this.pageStudent = data;
      this.initDorm();
    },
    returnMain(){
      this.$emit("returnClick");
    },
    addInfo(){
      this.dialogVisible = true;
    },
    editInfo(item){

    },
    setInfo(item){

    },
    deleteInfo(item){
      this.form.id = item.id;
      this.visibleConfim = true;
    },
    dormManage(){
      this.initDorm();
      this.drawerDorm = true;
    },
    studentManage(){
      this.initStudent();
      this.drawerStudent = true;
    },
    handleCancelChange(data) {
      this.visibleConfim = false;
    },
    handleCascaderBedChange(data){
      this.commSearchBuild = "";
      this.commSearchFloor = "";
      if (data.length == 1){
        this.commSearchBuild = data[0];
      }else if (data.length == 2){
        this.commSearchBuild = data[0];
        this.commSearchFloor = data[1];
      }
      this.pageDorm = 1;
      this.initDorm();
    },
    handleCascaderStudentChange(data){
      this.searchStudnetCollege = "";
      this.searchStudnetMajor = "";
      this.searchStudnetGrade = "";
      this.searchStudnetClass = "";
      if (data.length == 1){
        this.searchStudnetCollege = data[0];
      }else if (data.length == 2){
        this.searchStudnetCollege = data[0];
        this.searchStudnetMajor = data[1];
      }else if (data.length == 3){
        this.searchStudnetCollege = data[0];
        this.searchStudnetMajor = data[1];
        this.searchStudnetGrade = data[2];
      }else if (data.length == 4){
        this.searchStudnetCollege = data[0];
        this.searchStudnetMajor = data[1];
        this.searchStudnetGrade = data[2];
        this.searchStudnetClass = data[3];
      }
      this.pageStudent = 1;
      this.initStudent();
    },
    handleOkChange(data) {
      this.dialogLoading = true;
      let url = "";
      let params = {
        id: this.form.id
      }
      url = common.server_list_del;
      params = this.$qs.stringify(params);
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200){
          this.init();
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.visibleConfim = false;
      });
    },
    closeDialog(event){
      this.form = {
        id: '',
      };
      if (this.$refs['form']){
        this.$refs['form'].resetFields();
      }
      this.drawerVisible = false;
    },
    closeDrawDialog(event){
      this.pageDorm = 1;
      this.numDorm = 20;
      this.totalDorm = 0;
      this.pageStudent = 1;
      this.numStudent = 20;
      this.totalStudent = 0;
      this.searchStudnetMajor = "";
      this.searchStudnetCollege = "";
      this.searchStudnetClass = "";
      this.searchStudnetGrade = "";
      this.commSearchBuild = "";
      this.commSearchFloor = "";
      this.searchCollegeData = [];
      this.searchCommDeptBedData = [];
      this.resetCasadeSelector('SelectorDormDept');
      this.resetCasadeSelector('SelectorCollege');
      this.drawerDorm = false;
      this.drawerStudent = false;
    },
    cancelDrawDialog(event){
      this.drawerDorm = false;
      this.drawerStudent = false;
    },
    cancelDialog(){
      if (this.$refs['form']){
        this.$refs['form'].resetFields();
      }
      this.dialogVisible = false;
    },
    okDialog(){
      let url = '';
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.dialogLoading = true;
          let params = {
            categoryName: this.form.name,
          };
          if (this.form.id != ''){
            params['id'] = this.form.id;
          }
          url = common.server_type_save;
          params = this.$qs.stringify(params);
          this.$axios.post(url, params).then(res => {
            if (res.data.code == 200){
              this.dialogVisible = false;
              this.init();
              MessageSuccess(res.data.desc);
            }else {
              MessageError(res.data.desc);
            }
            this.dialogLoading = false;
          });
        }
      });
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
</style>
