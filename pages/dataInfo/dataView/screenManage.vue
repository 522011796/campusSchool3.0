<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">大屏管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="24">
            <div>
              <el-button type="primary" size="small" icon="el-icon-plus" @click="setInfo">{{$t("分组设置")}}</el-button>
            </div>
          </el-col>
        </el-row>
      </div>

      <div slot="content">
        <div class="bg-white border-bottom-1 padding-lr-5 padding-tb-5 custom-card-layout" :style="divHeight3">
          <el-row :gutter="16">
            <el-col :span="8">
              <el-card :body-style="{padding: '0px'}" style="position: relative">
                <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
                  <span class="color-grand" style="font-weight: bold">
                    <i class="fa fa-television"></i>
                    {{$t("全校课堂考勤专用")}}
                  </span>
                  <div class="pull-right">
                    <i class="fa fa-plus-circle color-grand margin-right-5" style="font-size: 16px" @click="addInfo(1)"></i>
                    <i class="fa fa-eye color-warning" style="font-size: 16px"></i>
                  </div>
                </div>
                <div class="padding-tb-5 padding-lr-5">
                  <div class="screen-item">
                    <img src="~static/img/screen-all-class.png" class="img-class">
                  </div>
                </div>
              </el-card>
              <div class="text-center margin-top-5">
                <div class="color-danger font-size-12">
                  <span>{{$t("3840*1080")}}</span>
                </div>
                <div class="color-muted">
                  <span>{{$t("全校课堂考勤模版")}}</span>
                </div>
              </div>
            </el-col>

            <el-col :span="8">
              <el-card :body-style="{padding: '0px'}" style="position: relative">
                <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
                  <span class="color-grand" style="font-weight: bold">
                    <i class="fa fa-television"></i>
                    {{$t("全校归寝考勤专用")}}
                  </span>
                  <div class="pull-right">
                    <i class="fa fa-plus-circle color-grand margin-right-5" style="font-size: 16px" @click="addInfo(2)"></i>
                    <i class="fa fa-eye color-warning" style="font-size: 16px"></i>
                  </div>
                </div>
                <div class="padding-tb-5 padding-lr-5">
                  <div class="screen-item">
                    <img src="~static/img/screen-all-dorm.png" class="img-class">
                  </div>
                </div>
              </el-card>
              <div class="text-center margin-top-5">
                <div class="color-danger font-size-12">
                  <span>{{$t("3840*1080")}}</span>
                </div>
                <div class="color-muted">
                  <span>{{$t("全校归寝考勤模版")}}</span>
                </div>
              </div>
            </el-col>

            <el-col :span="8">
              <el-card :body-style="{padding: '0px'}" style="position: relative">
                <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
                  <span class="color-grand" style="font-weight: bold">
                    <i class="fa fa-television"></i>
                    {{$t("宿舍楼专用")}}
                  </span>
                  <div class="pull-right">
                    <i class="fa fa-plus-circle color-grand margin-right-5" style="font-size: 16px" @click="addInfo(3)"></i>
                    <i class="fa fa-eye color-warning" style="font-size: 16px"></i>
                  </div>
                </div>
                <div class="padding-tb-5 padding-lr-5">
                  <div class="screen-item">
                    <img src="~static/img/screen-build-bg.png" class="img-class">
                  </div>
                </div>
              </el-card>
              <div class="text-center margin-top-5">
                <div class="color-danger font-size-12">
                  <span>{{$t("1920*1080")}}</span>
                </div>
                <div class="color-muted">
                  <span>{{$t("宿舍楼归寝模版")}}</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </layout-tb>

    <dialog-normal top="10vh" :visible="modalVisible" :title="$t('班级设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="formModal" :rules="rules" ref="formModal" label-width="140px">
          <el-form-item :label="$t('大屏名称')" prop="name">
            <el-input v-model="formModal.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('数据集')" prop="dataSet">
            <my-select :sel-value="formModal.dataSet" :options="dataSetOptions" width-style="260" @change="handleSelect($event, 1)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('分组')" prop="group">
            <my-select :sel-value="formModal.group" :options="groupOptions" width-style="260" @change="handleSelect($event, 2)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('验证码时效')" prop="time">
            <el-input v-model="formModal.time" class="width-260">
              <template slot="append">{{$t("小时")}}</template>
            </el-input>
          </el-form-item>
          <el-form-item :label="$t('备注')">
            <el-input v-model="formModal.content" class="width-260"></el-input>
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

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="450px" :title="$t('分组设置')" @right-close="cancelDrawDialog">
      <div slot="content">
        <span tabindex="1"></span>
        <div>
          <div>
            <el-form :model="form" :rules="rulesForm" ref="form" label-width="50px">
              <el-form-item :label="$t('组名')" prop="groupName">
                <el-input v-model="form.groupName" class="width-260"></el-input>
                <el-button size="medium" type="primary" @click="dialogLoading == false ? saveGroup() : ''">
                  <i class="el-icon-loading" v-if="dialogLoading"></i>
                  {{$t("保存")}}
                </el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-table
            ref="refTable"
            :data="tableStudentData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            style="width: 100%">
            <el-table-column
              align="center"
              prop="group_name"
              :label="$t('组名')">
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('操作')">

              <template slot-scope="scope">
                <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right">
          <el-pagination
            background
            :page-sizes="[10, 20, 50, 100]"
            layout="total, sizes, prev, pager, next"
            :total="totalStudent"
            :current-page="pageStudent"
            :page-size="numStudent"
            @size-change="sizeStudentChange"
            @current-change="currentStudentPage">
          </el-pagination>
        </div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import MyPagination from "../../../components/MyPagination";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {deviceType, MessageError, MessageSuccess, setDormBuildChildren} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyUserType from "../../../components/utils/MyUserType";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyInputButton from "../../../components/search/MyInputButton";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import screenManageValidater from "../../../utils/validater/screenManageValidater";
  export default {
    mixins: [mixins, screenManageValidater],
    components: {MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal,DrawerLayoutRight},
    data(){
      return {
        pageStudent: 1,
        numStudent: 20,
        totalStudent: 0,
        tableData: [],
        tableStudentData: [],
        searchDate: [],
        typeList: [],
        searchKey: '',
        visible: false,
        modalVisible: false,
        drawerVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        clearTime: '',
        action: '',
        subTitle: '',
        dataSetOptions: [],
        groupOptions: [],
        form: {
          id: '',
          groupName: ''
        },
        formModal: {
          id: '',
          name: '',
          templateId: '',
          dataSet: '',
          group: '',
          time: '',
          content: '',
          userUnit: ''
        }
      }
    },
    created() {
      this.init();
      this.initStudent();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          beginTime: this.searchDate ? this.searchDate[0] : '',
          endTime: this.searchDate ? this.searchDate[1] : ''
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.stranger_page, params).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initStudent(id){
        let params = {
          page: this.pageStudent,
          num: this.numStudent
        };
        let arr = [];
        this.$axios.get(common.screen_group_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableStudentData = res.data.data.list;
            this.totalStudent = res.data.data.totalCount;
            this.numStudent = res.data.data.num;
            this.pageStudent = res.data.data.currentPage;

            arr.push({
              label: this.$t("默认组"),
              value: '',
            });
            for (let i = 0; i < res.data.data.list.length; i++){
              arr.push({
                label: res.data.data.list[i].group_name,
                value: res.data.data.list[i].id,
              });
            }
            this.groupOptions = arr;
          }
        });
      },
      initBuild(){
        let params = {
          buildingType: 1
        };
        let arr = [];
        this.$axios.get(common.hierarchical_build, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.length; i++){
              arr.push({
                label: res.data.data[i].building_name,
                value: res.data.data[i].id,
              });
            }
            this.formModal.dataSet = arr[0].value;
            this.dataSetOptions = arr;
          }
        });
      },
      setInfo(){
        this.drawerVisible = true;
      },
      addInfo(type){
        if (type == 1){
          this.formModal.userUnit = 1;
          this.formModal.templateId = 7;
          this.dataSetOptions = [{
            label: this.$t("全校课堂数据"),
            value: ''
          }];
        }else if (type == 2){
          this.formModal.userUnit = 1;
          this.formModal.templateId = 5;
          this.dataSetOptions = [{
            label: this.$t("全校归寝数据"),
            value: ''
          }];
        }else if (type == 3){
          this.formModal.userUnit = 6;
          this.formModal.templateId = 6;
          this.initBuild();
        }
        this.numStudent = 999;
        this.initStudent();
        this.modalVisible = true;
      },
      deleteInfo(row){
        let params = {
          id: row.id
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.screen_group_page_del, params).then(res => {
          if (res.data.code == 200){
            this.initStudent();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.dialogLoading = false;
        });
      },
      okDialog(event){
        let url = "";
        this.$refs['formModal'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              screenName: this.formModal.name,
              templateId: this.formModal.templateId,
              data: this.formModal.dataSet,
              duration: this.formModal.time,
              screenRemarks: this.formModal.content,
              userUnit: this.formModal.userUnit,
              comment: this.formModal.content,
              screenGroupId: this.formModal.group
            };
            if (this.formModal.templateId == 6){
              params['buildId'] = this.formModal.dataSet;
              params['data'] = this.formModal.dataSet;
            }
            params = this.$qs.stringify(params);
            this.$axios.post(common.screen_add, params).then(res => {
              if (res.data.code == 200){
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
      saveGroup(){
        let url = "";
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              groupName: this.form.groupName
            };
            url = common.screen_group_page_add;
            params = this.$qs.stringify(params);
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.initStudent();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
            });
          }
        });
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      handleChange(data){

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
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      closeDrawerDialog(event){
        this.form.groupName = "";
        this.form = {
          id: '',
          groupName: ''
        };
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        this.drawerVisible = event;
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
      handleSelect(data, type){
        if (type == 1){
          this.formModal.dataSet = data;
        }else if (type == 2){
          this.formModal.group = data;
        }
      },
      closeDialog(event){
        this.form = {
          id: '',
          groupName: ''
        };
        this.formModal = {
          id: '',
          name: '',
          templateId: '',
          dataSet: '',
          group: '',
          time: '',
          content: '',
          userUnit: ''
        };
        this.numStudent = 20;
        this.dataSetOptions = [];
        if (this.$refs['formModal']){
          this.$refs['formModal'].resetFields();
        }
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      cancelDialog(){
        this.modalVisible = false;
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
  .screen-item{
    height: 180px;
  }
</style>
