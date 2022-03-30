<template>
  <div>
    <div class="padding-lr-10 padding-tb-10">
      <el-button size="mini" type="primary"  icon="el-icon-plus" @click="addRole">
        {{$t("创建权限组")}}
      </el-button>
    </div>
    <el-table
      ref="refTable"
      :data="data"
      header-cell-class-name="custom-table-cell-bg"
      size="medium"
      :max-height="tableHeight15.height"
      style="width: 100%">
      <el-table-column
        align="center"
        :label="$t('名称')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
            <div class="text-center">{{ scope.row.permission_name }}</div>
            <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{ scope.row.permission_name }}
            </span>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        :label="$t('描述')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
            <div class="text-center">{{ scope.row.des }}</div>
            <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{ scope.row.des }}
            </span>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        :label="$t('类型')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
            <div class="text-center">
              <label v-if="scope.row.permission_type === 0">{{$t("表单使用")}}</label>
              <label v-if="scope.row.permission_type === 1">{{$t("数据统计")}}</label>
            </div>
            <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              <label v-if="scope.row.permission_type === 0">{{$t("表单使用")}}</label>
              <label v-if="scope.row.permission_type === 1">{{$t("数据统计")}}</label>
            </span>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        :label="$t('权限')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
            <div class="text-center">
              <div v-if="scope.row.permission_type === 0">
                <el-tag size="mini">
                  {{ $t("查看") }}
                </el-tag>
                <el-tag size="mini">
                  {{ $t("删除") }}
                </el-tag>
              </div>
              <div v-else>
                <el-tag size="mini" v-if="scope.row.permission_condition1">
                  {{ $t("查看") }}
                </el-tag>
                <el-tag size="mini" v-if="scope.row.permission_condition2">
                  {{ $t("删除") }}
                </el-tag>
                <el-tag size="mini" v-if="scope.row.permission_condition3">
                  {{ $t("导入导出") }}
                </el-tag>
              </div>
            </div>
            <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              <div v-if="scope.row.permission_type === 0">
                <el-tag size="mini">
                  {{ $t("查看") }}
                </el-tag>
                <el-tag size="mini">
                  {{ $t("删除") }}
                </el-tag>
              </div>
              <div v-else>
                <el-tag size="mini" v-if="scope.row.permission_condition1">
                {{ $t("查看") }}
                </el-tag>
                <el-tag size="mini" v-if="scope.row.permission_condition2">
                  {{ $t("删除") }}
                </el-tag>
                <el-tag size="mini" v-if="scope.row.permission_condition3">
                  {{ $t("导入导出") }}
                </el-tag>
              </div>
            </span>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        :label="$t('范围')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
            <div class="text-center">
              <el-tag size="mini" v-if="scope.row.permission_student_switch">
                {{ $t("所有学生") }}
              </el-tag>
              <el-tag size="mini" v-else-if="scope.row.permission_teacher_switch">
                {{ $t("所有老师") }}
              </el-tag>
              <el-tag size="mini" v-else-if="scope.row.permission_content != ''">
                {{ $t("老师") }}: 0
                {{ $t("学生") }}: 0
              </el-tag>
              <span v-else>--</span>
            </div>
            <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              <el-tag size="mini" v-if="scope.row.permission_student_switch">
                {{ $t("所有学生") }}
              </el-tag>
              <el-tag size="mini" v-else-if="scope.row.permission_teacher_switch">
                {{ $t("所有老师") }}
              </el-tag>
              <el-tag size="mini" v-else-if="scope.row.permission_content != ''">
                {{ $t("老师") }}: 0
                {{ $t("学生") }}: 0
              </el-tag>
              <span v-else>--</span>
            </span>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        :label="$t('状态')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
            <div class="text-center">1</div>
            <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              1
            </span>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        width="120"
        :label="$t('操作')">
        <template slot-scope="scope">
          <i class="fa fa-edit color-success margin-right-5"></i>
          <i class="fa fa-copy color-warning margin-right-5"></i>
          <i class="fa fa-stop-circle color-grand margin-right-5"></i>
          <i class="fa fa-trash color-danger"></i>
        </template>
      </el-table-column>
    </el-table>

    <drawer-layout-right tabindex="1" :append-to-body="true"  @changeDrawer="closeDialog" :visible="drawerRole" size="500px">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <span class="tab-class font-bold">
            <i class="fa fa-file"></i>
            {{$t('创建权限组')}}
          </span>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("基础信息")}}</label>
          </span>
        </div>
        <div class="block-item-bg">
          <el-form :model="form" :rules="rules" ref="formRole" label-width="60px">
            <el-form-item :label="$t('名称')" prop="name">
              <el-input v-model="form.name" size="small" class="width-300"></el-input>
            </el-form-item>
            <el-form-item :label="$t('描述')">
              <el-input v-model="form.des" type="textarea" row="3" size="small" class="width-300"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="margin-top-20">
          <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("权限类型")}}</label>
          </span>
          </div>
          <div class="block-item-bg font-size-12" style="position: relative">
            <div>
              <el-radio-group v-model="form.roleType" @change="changeFormType">
                <el-radio :label="0">{{$t("表单使用")}}</el-radio>
                <el-radio :label="1">{{$t("数据统计")}}</el-radio>
              </el-radio-group>
            </div>
          </div>
        </div>
        <div class="margin-top-20" v-if="form.roleType === 1">
          <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("操作权限")}}</label>
          </span>
          </div>
          <div class="block-item-bg font-size-12" style="position: relative">
            <div>
              <el-checkbox :label="form.roleOprLook" @change="changeFormOprLook"><span class="font-size-12">{{$t("查看")}}</span></el-checkbox>
              <el-checkbox :label="form.roleOprDel" @change="changeFormOprDel"><span class="font-size-12">{{$t("删除")}}</span></el-checkbox>
              <el-checkbox :label="form.roleOprImOrEx" @change="changeFormOprSubmit"><span class="font-size-12">{{$t("导入导出")}}</span></el-checkbox>
            </div>
          </div>
        </div>
        <div class="margin-top-20">
          <div class="color-muted margin-top-5">
            <span>
              <label class="title-block-tag"></label>
              <label class="title-block-text color-warning">{{$t("权限成员")}}</label>
            </span>
          </div>
          <div class="block-item-bg font-size-12" style="position: relative">
            <div>
              <div>
                <span>{{$t("成员范围")}}: </span>
              </div>
              <div>
                <el-checkbox :label="form.roleTeachers" @change="changeFormTeacher"><span class="font-size-12">{{$t("所有学生")}}</span></el-checkbox>
                <el-checkbox :label="form.roleStudents" @change="changeFormStudent"><span class="font-size-12">{{$t("所有老师")}}</span></el-checkbox>
              </div>
            </div>
            <div class="margin-top-10">
              <div>
                <span>{{$t("组织范围")}}: </span>
              </div>
              <div class="margin-top-10">
                <el-button size="mini"><span class="font-size-12">{{$t("组织部门")}}(0)</span></el-button>
                <el-button size="mini"><span class="font-size-12">{{$t("班级")}}(0)</span></el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer">
        <el-row>
          <el-col :span="24">
            <div class="text-right padding-lr-10">
              <el-button size="mini" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
              <el-button size="mini" type="success" :loading="btnLoading" @click="okFormDrawDialog">{{$t("保存")}}</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";
  import appFormSetValidater from "~/utils/validater/appFormSetValidater";
  import {common} from "~/utils/api/url";
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";

  export default {
    name: 'myFormSetRole',
    components: {DrawerLayoutRight},
    mixins: [mixins,appFormSetValidater],
    props: {
      data: {
        type: Array,
        default: function () {
          return [];
        },
      },
      formId: Object
    },
    computed: {

    },
    data() {
      return {
        drawerRole: false,
        subTitle: '',
        btnLoading: false,
        form: {
          name: '',
          des: '',
          roleType: '0',
          roleOprLook: false,
          roleOprDel: false,
          roleOprSubmit: false,
          roleOprImOrEx: false,
          roleTeachers: false,
          roleStudents: false,
          roleUsers: [],
          roleUserGroup: [],
          enable: true,
          permissionContent: ''
        }
      }
    },
    methods: {
      addRole(){
        this.drawerRole = true;
      },
      changeFormType(data){
        this.form.roleType = data;
      },
      changeFormOprLook(data){
        this.form.roleOprLook = data;
      },
      changeFormOprDel(data){
        this.form.roleOprDel = data;
      },
      changeFormOprSubmit(data){
        this.form.roleOprSubmit = data;
      },
      changeFormTeacher(data){
        this.form.roleTeachers = data;
      },
      changeFormStudent(data){
        this.form.roleStudents = data;
      },
      closeDialog(){
        this.form = {
          name: '',
          des: '',
          roleType: '0',
          roleOprLook: false,
          roleOprDel: false,
          roleOprSubmit: false,
          roleOprImOrEx: false,
          roleUsers: [],
          roleUserGroup: [],
          enable: true
        };
        this.subTitle = "";
        if (this.$refs['formRole']){
          this.$refs['formRole'].resetFields();
        }
        this.drawerRole = false;
      },
      cancelDrawDialog(){
        this.drawerRole = false;
      },
      okFormDrawDialog(){
        let url = '';
        this.$refs['formRole'].validate((valid) => {
          if (valid) {
            let params = {
              formId: this.formId.id,
              permissionType: this.form.roleType,
              permissionCondition1: this.form.roleOprLook,
              permissionCondition2: this.form.roleOprDel,
              permissionCondition3: this.form.roleOprImOrEx,
              permissionStudentSwitch: this.form.roleStudents,
              permissionTeacherSwitch: this.form.roleTeachers,
              permissionContent: this.form.permissionContent,
              permissionName: this.form.name,
              enable: this.form.enable,
              des: this.form.des,
            };
            url = common.server_form_template_permission_save;
            params = this.$qs.stringify(params);
            this.btnLoading = true;
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200) {
                this.drawerRole = false;
                this.initParent();
                MessageSuccess(res.data.desc);
              } else {
                MessageError(res.data.desc);
              }
              this.btnLoading = false;
            });
          }
        });
      },
      initParent(){
        this.$emit('init');
      }
    }
  }
</script>

<style scoped>
.form-set-main{
  box-shadow: 0px 0px 4px #DCDFE6;
  border-right: 1px solid #DCDFE6;
  padding: 0px;
}
.form-set-left{
  width: 200px;
  height: 100%;
  background: #f8f8f8;
  border-right: 1px solid #DCDFE6;
}
.form-set-right{
  margin-left: 200px;
  height: 100%;
}
.form-set-menu-item{
  font-size: 12px;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.form-set-menu-item-active{
  background: #3E8DB8;
  color: #FFFFFF;
}
.header-block{
  height: 40px;
  line-height: 40px;
}
.tab-class{
  cursor: default;
  padding: 10px;
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
