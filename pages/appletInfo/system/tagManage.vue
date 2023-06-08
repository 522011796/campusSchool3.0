<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">标签管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInitData($event, 'main')">{{$t("添加标签")}}</el-button>
          </el-col>
          <!--<el-col :span="12" class="text-right">
            <MyInputButton size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('名称/编号')" @click="search"></MyInputButton>
          </el-col>-->
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
          style="width: 100%"
          @cell-click="cellClick">
          <el-table-column
            align="left"
            prop="label_name"
            :label="$t('标签名称')">

            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.label_name}}</div>
                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.label_name}}
                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="left"
            prop="dept_short_name"
            :label="$t('可见范围')">

            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <label v-if="scope.row.range_type == 0">{{$t("全部可见")}}</label>
                  <label v-if="scope.row.range_type == 1">{{$t("部分可见")}}</label>
                </div>
                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <label v-if="scope.row.range_type == 0">{{$t("全部可见")}}</label>
                  <label v-if="scope.row.range_type == 1">{{$t("部分可见")}}</label>
                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-plus-circle margin-right-5 color-success" @click="addInitData(scope.row, 'sub')"></i>
              <i class="fa fa-edit margin-right-5 color-grand" @click="addInitData(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="handleDelete(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <!--<MyPagination class="layout-pagination"></MyPagination>-->
          <span class="margin-right-10">{{$t("共")}} {{tableData.length}} {{$t("条")}}</span>
        </div>
      </div>
    </layout-tb>

    <dialog-normal :visible="modalVisible" width-style="850px" :title="$t('标签设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('上级名称')" v-if="form.oprType != 'main' && form.deptSuperId != undefined && form.deptSuperId != ''">
            <span>{{form.superName}}</span>
          </el-form-item>
          <el-form-item :label="$t('标签名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('可见范围')">
            <div>
              <el-radio-group v-model="form.rangeType" @change="handleSeeChange">
                <el-radio label="0">{{ $t('全部可见') }}</el-radio>
                <el-radio label="1">{{ $t('部分可见') }}</el-radio>
              </el-radio-group>
            </div>
            <div class="margin-top-5" v-if="form.rangeType == 1">
              <div>
                <el-button :type="selRangeType == 1 ? 'success' : ''" size="mini" @click="handleSelRangeType($event,1)">{{ $t('组织架构') }}</el-button>
                <el-button :type="selRangeType == 2 ? 'success' : ''" size="mini" @click="handleSelRangeType($event,2)">{{ $t('部门') }}</el-button>
                <el-button :type="selRangeType == 3 ? 'success' : ''" size="mini" @click="handleSelRangeType($event,3)">{{ $t('角色') }}</el-button>
              </div>
              <div class="margint-top-5 block-div-class">
                <div v-show="selRangeType == 1">
                  <div class="range-left">
                    <my-el-tree-block type="4" sub-type="" :show-filter="false" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree-block>
                  </div>
                  <div class="range-right padding-lr-5">
                    <div>
                      <el-row>
                        <el-col :span="24" class="text-right">
                          <my-input-button ref="teacher" size="mini" plain width-class="width: 120px" type="success" :clearable="true" :placeholder="$t('请输入信息')" @click="searchSel"></my-input-button>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="custom-table-el">
                      <el-table
                        ref="tableRefSel"
                        v-loading="teacherLoading"
                        :data="tableSelData"
                        header-cell-class-name="custom-table-cell-bg"
                        size="small"
                        :row-key="getRowKeys"
                        max-height="370px"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                          :reserve-selection="true"
                          type="selection"
                          align="center"
                          width="55">
                        </el-table-column>
                        <el-table-column
                          align="center"
                          :label="$t('名称')">
                          <template slot-scope="scope">
                            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                              <div class="text-center">{{scope.row.real_name}}</div>
                              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                                {{scope.row.real_name}}
                              </span>
                            </el-popover>
                          </template>
                        </el-table-column>
                        <el-table-column
                          align="center"
                          :label="$t('部门')">
                          <template slot-scope="scope">
                            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                              <div class="text-center">{{scope.row.department_name}}</div>
                              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                                {{scope.row.department_name}}
                              </span>
                            </el-popover>
                          </template>
                        </el-table-column>
                        <el-table-column align="center" label="性别" :show-overflow-tooltip="true">
                          <template slot-scope="scope">
                            <my-sex :sex="scope.row.sex" tag="text"></my-sex>
                          </template>
                        </el-table-column>
                      </el-table>
                      <div class="text-right" style="height: 35px;line-height: 35px">
                        <el-pagination
                          background
                          :pager-count="pageCount"
                          :page-sizes="[10, 20, 50, 100]"
                          layout="sizes, prev, pager, next"
                          :total="totalTeacher"
                          :current-page="pageTeacher"
                          :page-size="numTeacher"
                          @size-change="sizeTeacherChange"
                          @current-change="currentTeacherPage">
                        </el-pagination>
                      </div>
                    </div>
                  </div>
                  <div class="moon-clearfix"></div>
                </div>
                <div v-show="selRangeType == 2">
                  <div class="rang-block">
                    <my-el-tree-block ref="deptRefSel" type="4" sub-type="" node-key="department_path" :show-filter="false" :show-campus="false" :show-checkbox="true" :defaultCheckedKeys="defaultCheckedKeys"></my-el-tree-block>
                  </div>
                </div>
                <div v-show="selRangeType == 3">
                  <div class="rang-block">
                    <my-el-tree ref="roleRefSel" type="150" sub-type="" :show-filter="false" :show-campus="false" :show-checkbox="true" :defaultCheckedKeys="defaultCheckedRoleKeys"></my-el-tree>
                  </div>
                </div>
              </div>
            </div>
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

    <drawer-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" accept=".xls,.xlsx" :data="{all: true}" :loading="drawerLoading" :hide-footer="true" size="400px" :title="$t('导入教室')" :action="uploadAction" :download-file="uploadFile" :result="uploadResult" :process="uploadProcess" @right-close="cancelDrawDialog" @success="uploadSuccess" @error="uploadError">

    </drawer-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" content="确认需要删除该信息？" :detail="subDetail" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
import LayoutTb from "~/components/Layout/LayoutTb";
import MyNormalDialog from "~/components/utils/dialog/MyNormalDialog";
import DrawerRight from "~/components/utils/dialog/DrawerRight";
import DialogNormal from "~/components/utils/dialog/DialogNormal";
import tagValidater from "~/utils/validater/tagValidater";
import mixins from "~/utils/mixins";
import {inArray, MessageError, MessageSuccess, MessageWarning, setChildren} from "~/utils/utils";
import {common} from "~/utils/api/url";

export default {
  mixins: [mixins,tagValidater],
  components: {DialogNormal, DrawerRight, MyNormalDialog, LayoutTb},
  data(){
    return {
      pageCount: 5,
      pageTeacher: 1,
      numTeacher: 20,
      totalTeacher: 0,
      modalVisible: false,
      drawerVisible: false,
      visibleConfim: false,
      dialogLoading: false,
      loading: false,
      drawerLoading: false,
      teacherLoading: false,
      subDetail: '',
      selTreeId: '',
      uploadFile: common.organization_file,
      uploadAction: common.organization_upload,
      uploadResult: {},
      uploadProcess: '',
      g_superId: '',
      tableData: [],
      tableSelData: [],
      rowSelectFlag: false,
      defaultCheckedKeys: [],
      defaultCheckedRoleKeys: [],
      selRangeType: 1,
      searchKey: '',
      form: {
        oprType: '',
        rangeType: '0',
        id: '',
        deptSuperId: '',
        superName: '',
        name: '',
        no: '',
        realName: '',
        process: '',
        userRange: [],
        deptRange: [],
        roleRange: [],
        userEditRange: []
      },
    }
  },
  created() {
    this.init();
  },
  methods: {
    init(){
      let groupArr = [];
      let params = {
        superLabelId: 0
      };
      this.$axios.get(common.tag_tree, {params: params}).then(res => {
        if (res.data.data){
          this.g_superId = res.data.data[0].id;;
          this.form.deptSuperId = res.data.data[0].id;
          this.tableData = setChildren(res.data.data, groupArr, 'child_list', 'children');
        }
      });
    },
    initTeacher(){
      let params = {
        page: this.pageTeacher,
        num: this.numTeacher,
        deleted: 0,
        departPath: this.selTreeId,
      };
      params['realName'] = this.searchKey['input'];
      this.$axios.get(common.teacher_list, {params: params}).then(res => {
        if (res.data.data){
          this.tableSelData = res.data.data.page.list;
          this.totalTeacher = res.data.data.page.totalCount;
          this.numTeacher = res.data.data.page.num;
          this.pageTeacher = res.data.data.page.currentPage;

          setTimeout(() => {
            this.rowSelectFlag = true;
            let arr = this.form.userRange.length > 0 ? JSON.parse(JSON.stringify(this.form.userRange)) : [];
            for (let i = 0; i < this.tableSelData.length; i++){
              let sel = inArray(this.tableSelData[i], arr, 'user_id');
              if (sel > -1){
                if (this.$refs['tableRefSel']){
                  this.$refs.tableRefSel.toggleRowSelection(this.tableSelData[i], true);
                }
              }
            }
            this.rowSelectFlag = false;
          },0);

          this.teacherLoading = false;
        }
      });
    },
    sizeTeacherChange(event){
      this.pageTeacher = 1;
      this.numTeacher = event;
      this.initTeacher();
    },
    currentTeacherPage(event){
      this.pageTeacher = event;
      this.initTeacher();
    },
    searchSel(event){
      this.searchKey = event;
      this.initTeacher();
    },
    async addInitData(event, type){
      this.form.oprType = '';
      if (type && type == "main"){
        this.form.deptSuperId = 0;
        this.form.oprType = 'main';
      }else if(type && type == "sub"){
        this.form.deptSuperId = event.label_id;
        this.form.superName = event.label_name;
        this.form.rangeType = event.range_type+"";
        this.form.process = "";
        this.form.oprType = 'sub';

        await this.initSelTeacher(event.id);
      }else {
        console.log(event);
        this.form = {
          oprType: '',
          id: event.id,
          deptSuperId: event.super_label_id,
          superName: event.super_label_name,
          name: event.label_name,
          rangeType: event.range_type+"",
          process: event.form_process_id+"",
          deptRange: [],
          userRange: [],
          roleRange: []
        };
        await this.initSelTeacher(event.id);
      }
      this.pageTeacher = 1;
      this.teacherLoading = true;
      setTimeout(() => {
        this.initTeacher();
      },800);
      this.modalVisible = true;
    },
    async initSelTeacher(id){
      let params = {
        id: id
      };
      await this.$axios.get(common.tag_info, {params: params}).then(res => {
        if (res.data.data){
          console.log(res.data.data);
          let roleRange = res.data.data.roleRange;
          let userRange = res.data.data.userRange;
          let deptRange = res.data.data.deptRange;
          let roleArr = [];
          let userArr = [];
          let deptArr = [];
          for (let i = 0; i < roleRange.length; i++){
            roleArr.push(roleRange[i].ranges);
          }
          for (let i = 0; i < deptRange.length; i++){
            deptArr.push(deptRange[i].ranges);
          }
          for (let i = 0; i < userRange.length; i++){
            userArr.push({
              user_id: userRange[i].ranges
            });
          }

          console.log(deptArr);
          this.form.userRange = userArr;
          this.defaultCheckedRoleKeys = roleArr;
          this.defaultCheckedKeys = deptArr;
        }
      });
    },
    nodeClick(data){
      this.selTreeId = data.id ? data.id : '';
      this.initTeacher();
    },
    nodeChange(data, checked, indeterminate){
      console.log(data, checked, indeterminate);
    },
    getRowKeys(row) {
      return row.user_id;
    },
    handleSeeChange(event){
      if (event == 1){
        this.pageTeacher = 1;
        this.teacherLoading = true;
        setTimeout(() => {
          this.initTeacher();
        },800);
      }
    },
    handleSelectionChange(data){
      if (this.rowSelectFlag) return;
      this.form.userRange = data;
      console.log(this.form.userRange);
    },
    handleSelRangeType(event, type){
      if (type == 1){
        this.pageTeacher = 1;
        this.teacherLoading = true;
        setTimeout(() => {
          this.initTeacher();
        },800);
      }
      this.selRangeType = type;
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
        oprType: '',
        rangeType: '0',
        id: '',
        deptSuperId: '',
        superName: '',
        name: '',
        no: '',
        realName: '',
        process: '',
        userRange: [],
        deptRange: [],
        roleRange: [],
        userEditRange: []
      };
      this.processOptions = [];
      this.selRangeType = 1;
      this.selTreeId = '';
      this.searchKey = '';
      this.rowSelectFlag = false;
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
      this.$refs['form'].validate((valid) => {
        if (valid) {
          let deptArr  = [];
          let roleArr  = [];
          let userArray  = [];

          this.dialogLoading = true;
          let url = "";
          let params = {
            labelName: this.form.name,
            rangeType: this.form.rangeType
          };
          url = common.tag_save;
          if (this.form.id && this.form.id != ""){
            params['id'] = this.form.id;
          }

          if (this.form.rangeType == 1){
            deptArr  = this.setAreaChildren(this.$refs.deptRefSel.$refs.tree.getCheckedNodes(), 'dept');
            roleArr  = this.setAreaChildren(this.$refs.roleRefSel.$refs.tree.getCheckedNodes());
            if (deptArr.length > 0){
              params['deptRange'] = deptArr.join();
            }
            if (roleArr.length > 0){
              params['roleRange'] = roleArr.join();
            }
            if (this.form.userRange.length > 0){
              for (let i = 0; i < this.form.userRange.length; i++){
                userArray.push(this.form.userRange[i].user_id);
              }
              params['userRange'] = userArray.join();
            }

            if (deptArr.length == 0 && roleArr.length == 0 && this.form.userRange.length == 0){
              MessageWarning(this.$t("请选择范围"));
              this.dialogLoading = false;
              return;
            }
          }
          if (this.form.deptSuperId != undefined && this.form.deptSuperId != ''){
            params['superLabelId'] = this.form.deptSuperId;
          }else {
            params['superLabelId'] = 0;
          }
          console.log(3,params);
          params = this.$qs.stringify(params);

          this.$axios.post(url, params, {loading: false}).then(res=>{
            if (res.data.code == 200){
              this.init();
              this.modalVisible = false;
              MessageSuccess(res.data.desc);
            }else {
              MessageError(res.data.desc);
            }
            this.dialogLoading = false;
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
    handleEdit(row){
      this.modalVisible = true;
    },
    handleDelete(row){
      this.subDetail = row.label_name;
      this.form.id = row.id;
      this.visibleConfim = true;
    },
    handleOkChange(data) {
      this.dialogLoading = true;
      let params = {
        id: this.form.id
      };
      params = this.$qs.stringify(params);
      this.$axios.post(common.tag_del, params).then(res => {
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
    search(event){
      let params = {
        keys:'campusId,userType,campusType,userId,username,campusName,campusLogo,realName,externalSystemName,externalSystem,termId,externalSystemName,externalSystem'
      };
      this.$axios.get(common.session_url, {params: params}).then(res => {
        console.log(1);
      });
    },
    cellClick(row, column, cell, event){
      if (column.property == 'label_name'){
        this.$refs.refTable.toggleRowExpansion(row);
      }
    },
    uploadSuccess(res, file){
      this.uploadProcess = res.desc;

      if (res.code == 200){
        this.uploadResult = res.data ? res.data : [res.desc];;
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
    },
    setAreaChildren(tree, type){//迭代方法
      let _self = this;
      let obj = [];
      if (tree && tree.length > 0){
        tree.map(function (item,index) {
          if (type == 'dept'){
            obj.push(item.department_path);
          }else {
            obj.push(item.id);
          }

          if(item['children'] != undefined && item['children'].length > 0){
            _self.setAreaChildren(item['children']);
          }
        });
      }
      return obj;
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
.block-div-class{
  width: 690px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  height: 450px;
}
.range-left{
  float: left;
  height: 450px;
  width: 200px;
  border-right: 1px solid #dddddd;
  overflow-y: auto;
}
.range-right{
  margin-left: 201px;
  height: 450px;
  overflow-y: auto;
}
.rang-block{
  height: 350px;
  overflow-y: auto;
}
</style>
