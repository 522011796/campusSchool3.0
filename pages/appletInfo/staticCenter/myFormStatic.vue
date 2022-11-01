<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">我的统计</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <div class="layout-inline">
              <my-cascader :props="{ checkStrictly: true }" class="layout-item" ref="SelectorDeptSearch" size="small" width-style="200" :clearable="true" :sel-value="searchCommDeptData" type="4" sub-type="" @change="handleCascaderChange($event)"></my-cascader>
            </div>
          </el-col>
          <el-col :span="12" class="text-right">
            <MyInputButton size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('名称')" @click="search"></MyInputButton>
          </el-col>
        </el-row>
      </div>

      <div slot="content">
        <el-table
          ref="refTable"
          :data="tableData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          :max-height="tableHeight.height"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="permission_name"
            :label="$t('名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.stat_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.stat_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('创建时间')">
            <template slot-scope="scope">
              <span>{{$moment(scope.row.create_time).format("YYYY-MM-DD HH:mm")}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('部门/院系')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.department_names ? scope.row.department_names : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.department_names ? scope.row.department_names : '--'}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('模版类型')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.form_name ? scope.row.form_name : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.web_type ? $t("PC模版") : $t("H5模版")}}</span>
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
              <i class="fa fa-file margin-right-5 color-grand" @click="settingInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <drawer-layout-right :show-footer="false" @changeDrawer="closeDrawerDialog" @opened="openedForm" @right-close="closeDrawerDialog" :visible="drawerVisible" size="85%" :title="title">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <el-row>
            <el-col :span="24">
              <div class="layout-inline">
                <span class="tab-class font-bold layout-item">
                  {{$t("我的模版数据")}}
                </span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div slot="content">
        <template>
          <pc-static-template-show ref="pcRef" :static-id="staticId" :static-pc-form-data="staticPcFormData"></pc-static-template-show>
        </template>
      </div>
    </drawer-layout-right>

  </div>
</template>

<script>
import mixin from "~/utils/mixins";
import LayoutTb from "~/components/Layout/LayoutTb";
import MyInputButton from "~/components/search/MyInputButton";
import MyPagination from "~/components/MyPagination";
import DialogNormal from "~/components/utils/dialog/DialogNormal";
import MyNormalDialog from "~/components/utils/dialog/MyNormalDialog";
import DrawerRight from "~/components/utils/dialog/DrawerRight";
import {common} from "~/utils/api/url";
import {setChildren, MessageSuccess, MessageError, MessageWarning} from "~/utils/utils";
import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";
import appFormSetValidater from "~/utils/validater/appFormSetValidater";
import MyCascader from "~/components/utils/select/MyCascader";
import PcStaticTemplate from "~/components/form/PCStaticTemplate";
import MySelect from "~/components/MySelect";
import formStaticValidater from "~/utils/validater/formStaticValidater";
import PcStaticTemplateShow from "~/components/form/PCStaticTemplateShow";

export default {
  mixins: [mixin, formStaticValidater],
  components: {
    PcStaticTemplateShow,
    MySelect,
    PcStaticTemplate,
    MyCascader,
    DrawerLayoutRight, LayoutTb,MyInputButton,MyPagination,DialogNormal,MyNormalDialog,DrawerRight},
  data(){
    return {
      drawerAddInfo: false,
      drawerVisible: false,
      drawerLoading: false,
      visibleConfim: false,
      dialogLoading: false,
      btnLoading: false,
      refreshTeacherStatus: false,
      refreshStudentStatus: false,
      tableData: [],
      searchKey: '',
      departmentPath: '',
      teacherArray: [],
      approverUsers: [],
      roleList: [],
      errorTeacher: '',
      roleOptions: [],
      title: '',
      titleType: '',
      searchCommDeptData: [],
      staticFormList: [],
      searchStaticForm: '',
      staticPcFormList: [],
      staticPcFormData: [],
      formId: '',
      staticId: '',
      typeList: [
        {"label": 'PC端模板', value: true},
        // {"label": 'H5端模板', value: false}
      ],
      form: {
        id: '',
        name: '',
        des: '',
        roleType: 0,
        roleOprLook: false,
        roleOprDel: false,
        roleOprSubmit: false,
        roleOprImOrEx: false,
        roleTeachers: false,
        roleStudents: false,
        roleUsers: [],
        roleUserGroup: [],
        enable: true,
        permissionContent: '',
        permissionContentArray: [],
        approverTeacherId: [],
        approverStudentId: [],
        roleList: []
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
        searchKey: this.searchKey,
        departmentPath: this.departmentPath
      };
      this.$axios.get(common.static_appinfo_form_page, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
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
      this.page = 1;
      this.init();
    },
    handleCascaderChange(data){
      this.departmentPath = data[data.length-1];
      this.page = 1;
      this.init();
    },
    openedForm(){
      if(this.$refs['pcRef']){
        this.$refs['pcRef'].initAsync();
      }
    },
    settingInfo(data){
      this.staticId = data.id;
      this.drawerVisible = true;
    },
    closeDrawerDialog(){
      this.drawerVisible = false;
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
.header-block{
  height: 40px;
  line-height: 40px;
}
.title-block-tag{
  display: inline-block;
  height: 20px;
  width: 3px;
  background: #E6A23C;
  font-weight: bold;
  border-radius: 3px;
}
.title-block-text{
  font-weight: bold;
  position: relative;
  top: -5px;
}
.block-item-bg{
  border-radius: 5px;
  background: #FFFFFF;
  padding: 10px;
}
</style>
