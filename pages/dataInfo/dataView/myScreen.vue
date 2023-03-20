<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">大屏管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="24">
            <div class="text-right">
              <!--<el-button-group>
                <el-button size="small" :type="expire == '' ? 'primary' : 'default'" @click="handleChange('')">{{$t("全部")}}</el-button>
                <el-button size="small" :type="expire == true ? 'primary' : 'default'" @click="handleChange(true)">{{$t("到期大屏")}}</el-button>
              </el-button-group>-->
              <tab-group-button size="small" :options='[{label:$t("全部"), value:""},{label:$t("到期大屏"), value: true}]' @click="handleChange"></tab-group-button>
              <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('大屏名称')" @click="search"></my-input-button>
            </div>
          </el-col>
        </el-row>
      </div>

      <div slot="content">
        <div class="bg-white border-bottom-1 padding-lr-5 padding-tb-5 custom-card-layout" :style="divHeight3">
          <div v-for="(item, index) in tableData" :key="index">
            <div class="screen-title">
              <span class="screen-title-tag"></span>
              <span style="position: relative; top: -5px;" class="color-warning">{{item.name}}</span>
            </div>
            <el-row :gutter="16" class="margin-top-5">
              <el-col :span="8" v-for="(itemChild, indexChild) in item.list" :key="indexChild" class="margin-bottom-20">
                <el-card :body-style="{padding: '0px'}" style="position: relative;height: 280px">
                  <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
                    <span class="color-grand" style="font-weight: bold">
                      <i class="fa fa-television"></i>
                      {{itemChild.screen_name}}
                    </span>
                    <div class="pull-right">
                      <i class="fa fa-qrcode color-grand margin-right-5" style="font-size: 16px" @click="addInfo($event, itemChild, 2)"></i>

                      <i class="fa fa-cog color-grand margin-right-5" style="font-size: 16px" @click="addInfo($event, itemChild, 1)"></i>

                      <span>
                        <el-popover
                          placement="top"
                          width="400"
                          trigger="click">
                            <div>
                              <span>{{screenUrl}}{{itemChild.screen_url}}</span>
                            </div>
                            <i slot="reference" class="fa fa-eye color-warning margin-right-5" style="font-size: 16px"></i>
                          </el-popover>
                      </span>

                      <i class="fa fa-trash color-danger" style="font-size: 16px" @click="deleteInfo($event, itemChild)"></i>
                    </div>
                  </div>
                  <div class="padding-tb-5 padding-lr-5">
                    <div class="screen-item">
                      <img v-if="itemChild.template_id == 5" src="~static/img/screen-all-dorm.png" class="img-class">
                      <img v-if="itemChild.template_id == 6" src="~static/img/screen-build-bg.png" class="img-class">
                      <img v-if="itemChild.template_id == 7" src="~static/img/screen-all-class.png" class="img-class">
                      <img v-if="itemChild.template_id == 8" src="~static/img/screen-student-bg.jpeg" class="img-class">
                      <img v-if="itemChild.template_id == 9" src="~static/img/screen_server_bg.png" class="img-class">
                    </div>
                  </div>
                  <div class="padding-tb-10 padding-lr-10 color-muted" style="border-top: 1px solid #EBEEF5">
                    <el-row>
                      <el-col :span="12">
                        <div class="color-warning">
                          <span>{{$moment(itemChild.expire_time).format("YYYY-MM-DD HH:mm:ss")}}</span>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="text-right">
                          <el-switch v-model="itemChild.enable" active-color="#13ce66" inactive-color="#ff4949" @change="handleChangeEnable($event, itemChild)"></el-switch>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </layout-tb>

    <dialog-normal top="10vh" :visible="modalVisible" :title="$t('大屏设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="formModal" :rules="rules" ref="formModal" label-width="140px">
          <template v-if="formModal.type == 1">
            <el-form-item :label="$t('大屏名称')" prop="name">
              <el-input v-model="formModal.name" class="width-260"></el-input>
            </el-form-item>
            <el-form-item :label="$t('数据集')" prop="dataSet">
              <my-select :sel-value="formModal.dataSet" :options="dataSetOptions" width-style="260" @change="handleSelect($event, 1)"></my-select>
            </el-form-item>
            <el-form-item :label="$t('分组')" prop="group">
              <my-select :sel-value="formModal.group" :options="groupOptions" width-style="260" @change="handleSelect($event, 2)"></my-select>
            </el-form-item>
            <el-form-item :label="$t('备注')">
              <el-input v-model="formModal.content" class="width-260"></el-input>
            </el-form-item>
          </template>

          <template v-if="formModal.type == 2">
            <el-form-item :label="$t('验证码')">
              <span>{{formModal.code}}</span>
              <span>
                <el-button type="success" plain size="mini" @click="resetCode">
                  <i class="el-icon-loading" v-if="loading"></i>
                  {{$t('重新生成')}}
                </el-button>
              </span>
            </el-form-item>
            <el-form-item :label="$t('时效')" >
              <span>{{formModal.codeTime}}</span>
            </el-form-item>
            <el-form-item :label="$t('延长时效')" prop="longTime">
              <el-input v-model="formModal.longTime" class="width-260">
                <template slot="append">{{$t("小时")}}</template>
              </el-input>
            </el-form-item>
          </template>
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

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange"></my-normal-dialog>

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
  import MyNormalDialog from "../../../components/utils/dialog/MyNormalDialog";
  import TabGroupButton from "../../../components/utils/button/TabGroupButton";
  export default {
    mixins: [mixins, screenManageValidater],
    components: {MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal,DrawerLayoutRight,MyNormalDialog,TabGroupButton},
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
        loading: false,
        visibleConfim: false,
        expire: '',
        clearTime: '',
        action: '',
        subTitle: '',
        screenUrl: '',
        screenId: '',
        dataSetOptions: [],
        groupOptions: [],
        formModal: {
          id: '',
          name: '',
          templateId: '',
          dataSet: '',
          group: '',
          time: '',
          content: '',
          userUnit: '',
          code: '',
          codeTime: '',
          longTime: 0,
          type: ""
        }
      }
    },
    created() {
      this.init();
      if (process.client){
        this.screenUrl = window.location.protocol + "//" + window.location.hostname + ":" + 2000;
      }
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: 1000,
          screenName: this.searchKey,
          expire: this.expire
        };
        this.$axios.get(common.screen_my_page, {params: params}).then(res => {
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
              value: '0',
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
            //this.formModal.dataSet = arr[0].value;
            this.dataSetOptions = arr;
          }
        });
      },
      initYear(){
        let year = [];
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.enroll_page, {params: params}).then(res => {
          if (res.data.data){
            let year = [];
            for (let i = 0; i < res.data.data.list.length; i++){
              year.push({
                label: res.data.data.list[i].year,
                text: res.data.data.list[i].year,
                value: res.data.data.list[i].year,
              });
            }
            this.dataSetOptions = year;
          }
        });
      },
      async initProcess(){
        await this.getLinkProcessInfo();
        let data = this.dataProcessServer;
        let array = [];
        if (data && data.length > 0){
          array = data;
        }
        this.dataSetOptions = array;
      },
      addInfo($event, row, type){
        this.formModal = {
          id: row.id,
          name: row.screen_name,
          templateId: row.template_id,
          dataSet: '',
          group: row.screen_group_id ? row.screen_group_id : '0',
          time: '',
          content: ''+row.comment,
          userUnit: row.user_unit,
          code: row.code,
          codeTime: this.$moment(row.expire_time).format("YYYY-MM-DD HH:mm:ss"),
          longTime: 0,
          type: type
        };
        if (row.template_id == 5){
          this.dataSetOptions = [{
            label: this.$t("全校课堂数据"),
            value: ''
          }];
        }else if (row.template_id == 7){
          this.dataSetOptions = [{
            label: this.$t("全校归寝数据"),
            value: ''
          }];
        }else if (row.template_id == 6){
          this.dataSetOptions = [{
            label: this.$t("全校归寝数据"),
            value: ''
          }];
          this.formModal.dataSet = row.bulid_id;
          this.initBuild();
        }else if (row.template_id == 8){
          this.formModal.dataSet = row.enroll_process_id;
          this.initProcess();
        }else if (row.template_id == 9){
          this.dataSetOptions = [{
            label: this.$t("一站式服务大厅数据"),
            value: ''
          }];
        }
        this.initStudent();
        this.modalVisible = true;
      },
      deleteInfo(event, row){
        this.screenId = row.id;
        this.subTitle = row.screen_name;
        this.visibleConfim = true;
      },
      search(data){
        this.page = 1;
        this.searchKey = data.input;
        this.init();
      },
      handleChange(type){
        this.page = 1;
        this.expire = type.value;
        this.init();
      },
      handleChangeEnable(data, row){
        let params = {
          id: row.id,
          enable: row.enable
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.screen_my_edit, params).then(res => {
          if (res.data.data){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.screenId
        }
        url = common.screen_my_del;
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
      resetCode(){
        this.loading = true;
        let params = {
          id: this.formModal.id,
          resetCode: true
        };

        params = this.$qs.stringify(params);
        this.$axios.post(common.screen_my_edit, params).then(res => {
          if (res.data.code == 200){
            this.formModal.code = res.data.data.code;
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.loading = false;
        });
      },
      okDialog(event){
        let url = "";
        this.$refs['formModal'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {};
            if (this.formModal. type == 1){
              params = {
                id: this.formModal.id,
                screenName: this.formModal.name,
                templateId: this.formModal.templateId,
                data: this.formModal.dataSet,
                screenRemarks: this.formModal.content,
                userUnit: this.formModal.userUnit,
                comment: this.formModal.content,
                screenGroupId: this.formModal.group
              };
              if (this.formModal.templateId == 6){
                params['buildId'] = this.formModal.dataSet;
                params['data'] = this.formModal.dataSet;
              }
              if (this.formModal.templateId == 8){
                params['enrollProcessId'] = this.formModal.dataSet;
                params['data'] = this.formModal.dataSet;
              }
            }else if (this.formModal. type == 2){
              params = {
                id: this.formModal.id,
                duration: this.formModal.longTime,
              };
            }
            params = this.$qs.stringify(params);
            this.$axios.post(common.screen_my_edit, params, {loading: false}).then(res => {
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
        this.formModal = {
          id: '',
          name: '',
          templateId: '',
          dataSet: '',
          group: '',
          time: '',
          content: '',
          userUnit: '',
          code: '',
          codeTime: '',
          longTime: 0,
          type: ""
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
      },
      handleSelect(data, type){
        if (type == 1){
          this.formModal.dataSet = data;
        }else if (type == 2){
          this.formModal.group = data;
        }
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
  .screen-title-tag{
    height: 20px;
    width: 5px;
    border-radius: 5px;
    display: inline-block;
    background: #409EFF;
  }
  .screen-item{
    height: 180px;
  }
  .screen-title{
    background: #eeeeee;
    padding: 5px 5px;
  }
</style>
