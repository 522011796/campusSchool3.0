<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">解除奖惩申请</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加流程")}}</el-button>
          </el-col>
          <el-col :span="12" class="text-right">
            <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('名称')" @click="search"></my-input-button>
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
            :label="$t('日期')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{$moment(scope.row.add_time).format("YYYY-MM-DD HH:mm")}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{$moment(scope.row.add_time).format("YYYY-MM-DD HH:mm")}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('流程名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.name ? scope.row.name : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.name ? scope.row.name : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="department_no"
            :label="$t('申请类型')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <my-flow-type :status="scope.row.apply_type_code"></my-flow-type>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <my-flow-type :status="scope.row.apply_type_code"></my-flow-type>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="department_no"
            :label="$t('条件')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <my-flow-condition :condition="scope.row.handle_condition" :condition-type-code="scope.row.apply_type_code"></my-flow-condition>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <my-flow-condition :condition="scope.row.handle_condition" :condition-type-code="scope.row.apply_type_code"></my-flow-condition>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="department_no"
            :label="$t('流程')"
            width="200">
            <template slot-scope="scope">
              <my-flow-process :process="scope.row.handle_process"></my-flow-process>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="department_no"
            :label="$t('备注')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <span>{{scope.row.des ? scope.row.des : '--'}}</span>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.des ? scope.row.des : '--'}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="department_no"
            :label="$t('状态')">
            <template slot-scope="scope">
              <span class="color-success" v-if="scope.row.enable">{{$t("启用")}}</span>
              <span class="color-warning" v-else>{{$t("禁用")}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-edit color-grand margin-right-5" @click="editInfo(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :hide-footer="false" :visible="drawerVisible" size="650px" :title="$t('流程设置')" @right-close="cancelDrawDialog">
      <div slot="content">
        <span tabindex="1"></span>
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
          <el-form-item label="申请类型">
            <label class="color-success">{{$t("解除奖惩流程")}}</label>
          </el-form-item>
          <el-form-item label="名称" prop="name">
            <el-input v-model="form.name" class="width-300"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="form.content" class="width-300"></el-input>
          </el-form-item>
          <el-form-item label="条件" prop="conditionType">
            <my-select width-style="300" :sel-value="form.conditionType" :options="listData" @change="handleChangeSelect($event)"></my-select>
          </el-form-item>
          <el-form-item label="状态">
            <my-radio :sel-value="form.status" :label="true" @change="changeStatus($event, true)">{{$t("启用")}}</my-radio>
            <my-radio :sel-value="form.status" :label="false" @change="changeStatus($event, false)">{{$t("禁用")}}</my-radio>
          </el-form-item>
          <el-form-item label="流程">
            <my-flow-process-list ref="flowProcessRef" :process-data="form.handleProcess" width-style="200"></my-flow-process-list>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="small" type="primary" :loading="drawerLoading" @click="okDrawDialog">{{$t("发布")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" content="确认需要删除该信息？" :detail="subTitle" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import mixins from "../../utils/mixins";
  import LayoutTb from "../../components/Layout/LayoutTb";
  import MyInputButton from "../../components/search/MyInputButton";
  import MyPagination from "../../components/MyPagination";
  import DialogNormal from "../../components/utils/dialog/DialogNormal";
  import MyNormalDialog from "../../components/utils/dialog/MyNormalDialog";
  import DrawerRight from "../../components/utils/dialog/DrawerRight";
  import DrawerLayoutRight from "../../components/utils/dialog/DrawerLayoutRight";
  import {common} from "../../utils/api/url";
  import {MessageSuccess, MessageError, MessageWarning} from "../../utils/utils";
  import MyFlowType from "../../components/utils/status/MyFlowType";
  import MyFlowCondition from "../../components/utils/status/MyFlowCondition";
  import MyFlowProcess from "../../components/utils/status/MyFlowProcess";
  import MyRadio from "../../components/MyRadio";
  import MyFlowProcessList from "../../components/utils/status/MyFlowProcessList";
  import flowProcessValidater from "../../utils/validater/flowProcessValidater";
  import MySelect from "../../components/MySelect";

  export default {
    mixins: [mixins, flowProcessValidater],
    components: {
      MySelect,
      MyRadio,
      LayoutTb,MyInputButton,MyPagination,DialogNormal,MyNormalDialog,DrawerRight,DrawerLayoutRight,MyFlowType,MyFlowCondition,MyFlowProcess,MyFlowProcessList},
    data(){
      return {
        modalVisible: false,
        drawerVisible: false,
        visibleConfim: false,
        dialogLoading: false,
        loading: false,
        drawerLoading: false,
        subTitle: '',
        uploadFile: common.upload_file,
        uploadResult: {},
        uploadProcess: '',
        g_superId: '',
        searchKey: '',
        tableData: [],
        errorTips: '',
        listData: [],
        addStatus: '',
        form: {
          id: '',
          name: '',
          content: '',
          conditionType: '',
          conditionDay1: '',
          conditionDay2: '',
          status: true,
          handleProcess: []
        },
      }
    },
    created() {
      this.initInfo();
    },
    methods: {
      async initInfo(){
        await this.getSessionInfo();
        this.init();
      },
      init(){
        let params = {
          page: this.page,
          num: this.num,
          applyTypeCode: 'PunishmentCancelApply',
          name: this.searchKey
        };
        this.$axios.get(common.flow_center_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initPunishment(){
        let params = {
          page: 1,
          num: 9999
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.audit_re_level, params).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.list.length; i++){
              if(res.data.data.list[i].level_type == "解除申请"){
                array.push({
                  label: res.data.data.list[i].level_name,
                  value: res.data.data.list[i].level_name
                });
              }
            }
            this.listData = array;
          }
        });
      },
      addInfo(){
        this.initPunishment();
        if (this.addStatus == 'edit'){
          this.clearDrawerDialog();
        }
        this.drawerVisible = true;
      },
      editInfo(row){
        this.addStatus = 'edit'
        this.form = {
          id: row.id,
          name: row.name,
          content: row.des,
          conditionType: '',
          conditionDay1: '',
          conditionDay2: '',
          status: row.enable,
          handleProcess: []
        };
        let handleCondition = row.handle_condition;
        for (let i = 0; i < handleCondition.length; i++){
          if (handleCondition[i].type == 'proLevel'){
            this.form.conditionType = handleCondition[i].value1;
          }
        }
        let handleProcess = row.handle_process;
        for (let i = 0; i < handleProcess.length; i++){
          let auditNameArr = handleProcess[i].hname ? handleProcess[i].hname.split(",") : [];
          let shareArr = handleProcess[i].nid ? handleProcess[i].nid.split(",") : [];
          let auditArr = [];
          let auditNameSplit = [];
          for (let j = 0; j < auditNameArr.length; j++){
            //auditNameSplit = auditNameArr[j].split("@*@")[1];
            auditArr.push({
              user_id: auditNameArr[j].split("@*@")[0],
              real_name: auditNameArr[j].split("@*@")[1]
            })
          }
          this.form.handleProcess.push({
            type: handleProcess[i].htype,
            audit: auditArr,
            auditName: auditNameArr,
            share: shareArr,
            notice: handleProcess[i].andor
          });
        }
        this.initPunishment();
        this.drawerVisible = true;
      },
      deleteInfo(row){
        this.form.id = row.id;
        this.subTitle = row.name;
        this.visibleConfim = true;
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      cancelDrawDialog(){
        this.clearDrawerDialog();
        this.drawerVisible = false;
      },
      closeDialog(event){

      },
      clearDrawerDialog(){
        this.form = {
          id: '',
          name: '',
          content: '',
          conditionType: '',
          conditionDay1: '',
          conditionDay2: '',
          status: true,
          handleProcess: []
        };
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        if (this.$refs['flowProcessRef']){
          this.$refs.flowProcessRef._handleResetChange();
        }
        this.errorTips = "";
        this.addStatus = '';
      },
      closeDrawerDialog(event){
        this.drawerVisible = event;
      },
      handleCloseDrawer(){
        this.form = {
          id: '',
          name: '',
          content: '',
          conditionType: '',
          conditionDay1: '',
          conditionDay2: '',
          status: true,
          handleProcess: []
        };
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        if (this.$refs['flowProcessRef']){
          this.$refs.flowProcessRef._handleResetChange();
        }
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      okDrawDialog(event){
        let url = "";
        this.errorTips = "";
        let errNum = 0;
        this.$refs['form'].validate((valid) => {
          if (valid) {
            let params = {
              applyTypeCode: 'PunishmentCancelApply',
              des: this.form.content,
              enable: this.form.status,
              name: this.form.name,
            };
            params['handleConditions'] = [{
              type: 'proLevel',
              value1: this.form.conditionType
            }];
            let processList = this.$refs.flowProcessRef._getFlowProcessData();
            let processData = [];
            for (let i = 0; i < processList.length; i++){
              let auditArr = [];
              let shareArr = [];
              let auditNameArr = [];
              for (let j = 0; j < processList[i].audit.length; j++){
                auditArr.push(processList[i].audit[j].user_id);
              }
              for (let j = 0; j < processList[i].auditName.length; j++){
                auditNameArr.push(processList[i].auditName[j]);
              }
              for (let j = 0; j < processList[i].share.length; j++){
                shareArr.push(processList[i].share[j].user_id);
              }
              processData.push({
                horder: i,
                htype: processList[i].type,
                hid: auditArr.join(),
                hname: auditNameArr.join(),
                nid: shareArr.join(),
                andor: processList[i].notice
              });
              if (processList[i].type == 'AnyUser' && auditArr.length == 0){
                errNum++;
              }
            }
            if (errNum > 0){
              MessageWarning("请设置固定教师中的审批教师");
              return;
            }

            params['handleProcess'] = processData;
            if (this.form.id != ''){
              params['id'] = this.form.id;
            }
            url = common.flow_center_update;
            //params = this.$qs.stringify(params);
            this.drawerLoading = true;
            this.$axios.post(url, params, {dataType: 'stringfy'}).then(res => {
              if (res.data.code == 200){
                this.drawerVisible = false;
                this.init();
                this.clearDrawerDialog();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.drawerLoading = false;
            });
          }
        });
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let params = {
          id: this.form.id
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.flow_center_del, params).then(res => {
          if (res.data.code == 200){
            this.init();
            this.form.id = "";
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
        this.page = 1;
        this.searchKey = event.input;
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
      handleChange(type){
        this.form.conditionType = type;
      },
      changeStatus(event, data){
        this.form.status = data;
      },
      handleChangeSelect(data){
        this.form.conditionType = data;
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
  .news-img{
    height: 50px;
    width: 50px;
  }
</style>
