<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">流程管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="6">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加流程")}}</el-button>
          </el-col>
          <el-col :span="18" class="text-right">
            <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('名称')" @click="search"></my-input-button>
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
            :label="$t('编号')">
            <template slot-scope="scope">
              <span>{{scope.row.id}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <span v-if="scope.row.process_type == 5">{{$t("学生流程")}}</span>
                  <span v-if="scope.row.process_type == 4">{{$t("老师流程")}}</span>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span v-if="scope.row.process_type == 5">{{$t("学生流程")}}</span>
                  <span v-if="scope.row.process_type == 4">{{$t("老师流程")}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.process_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.process_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('创建时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center"><span>{{$moment(scope.row.create_time).format("YYYY-MM-DD HH:mm")}}</span></div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{$moment(scope.row.create_time).format("YYYY-MM-DD HH:mm")}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('描述')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.des ? scope.row.des : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.des ? scope.row.des : '--'}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('被引用表单')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.form_name ? scope.row.form_name : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.form_name ? scope.row.form_name : '--'}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <template v-if="g_showMoneyItem == true">
            <el-table-column
                align="center"
                :label="$t('被引用费用')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.cost_name ? scope.row.cost_name : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span>{{scope.row.cost_name ? scope.row.cost_name : '--'}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
                align="center"
                :label="$t('被引用预算')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.budget_name ? scope.row.budget_name : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span>{{scope.row.budget_name ? scope.row.budget_name : '--'}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
                align="center"
                :label="$t('被引用费控')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.control_name ? scope.row.control_name : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span>{{scope.row.control_name ? scope.row.control_name : '--'}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
          </template>
          <el-table-column
            align="center"
            label="操作"
            width="140">
            <template slot-scope="scope">
              <i class="fa fa-cog color-success margin-right-5" @click="settingInfo(scope.row, scope.$index)"></i>
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

    <dialog-normal top="10vh" :visible="dialogVisible" :title="$t('流程设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('流程名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('流程类型')" prop="processType">
            <my-select :placeholder="$t('请选择')" :sel-value="form.processType" :options="processTypeOptins" width-style="260" :clearable="true" @change="handleChange($event)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('描述')">
            <el-input v-model="form.desc" class="width-260"></el-input>
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

    <drawer-layout-right tabindex="0" :title="$t('流程设计')" :show-close="true" @close="closeDialog" @opened="openForm" @changeDrawer="closeDialog" :visible="drawerForm" size="85%">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <span class="tab-class font-bold">
            <i class="fa fa-line-chart"></i>
            {{$t('流程设计')}}
          </span>
        </div>
      </div>

      <div slot="content">
        <div style="position: relative">
          <my-process-flow ref="flow" :formId="serverDataItem" :flow-data="flowListData" :form="flowFormData"></my-process-flow>
        </div>
      </div>

      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="mini" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="mini" type="success" :loading="btnLoading" @click="okFormDrawDialog()">{{$t("保存")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import flowSettingValidater from "~/utils/validater/flowSettingValidater";
  import MyProcessFlow from "~/components/form/MyProcessFlow";

  export default {
    components: {MyProcessFlow},
    mixins: [mixins,flowSettingValidater],
    data(){
      return {
        subTitle: '',
        tableData: [],
        visibleConfim: false,
        dialogLoading: false,
        dialogVisible: false,
        drawerForm: false,
        btnLoading: false,
        searchKey: '',
        flowListData: [],
        formFieldList: [],
        flowFormData: {},
        serverDataItem: '',
        processTypeOptins: [{
          label: '学生',
          text: '学生',
          value: '5',
        },{
          label: '教师',
          text: '教师',
          value: '4',
        }],
        form: {
          id: '',
          name: '',
          desc: '',
          processType: ''
        },
        formOption: {
          "form": {
            "inline": false,
            "labelPosition": "right",
            "size": "mini",
            "labelWidth": "125px",
            "hideRequiredAsterisk": false,
            "showMessage": true,
            "inlineMessage": false
          }
        }
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
          searchKey: this.searchKey
        };
        this.$axios.get(common.server_form_template_form_process_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initProcess(item){
        let formProcess = item.form_process ? JSON.parse(item.form_process) : [];
        let ntype = '';
        this.flowListData = [];
        for (let j = 0; j < formProcess.length; j++){
          let users = [];
          let trangeUsers = [];
          let jrangeUsers = [];
          if (formProcess[j].ntype == 'handle'){
            ntype = 'audit';
          }else if (formProcess[j].ntype == 'cc'){
            ntype = 'send';
          }else if (formProcess[j].ntype == 'sub'){
            ntype = 'sub';
          }

          let obj = {
            type: formProcess[j].nChildType,
            extra: ntype,
            name: formProcess[j].nname,
            hType: formProcess[j].htype,
            hrole: formProcess[j].hrole,
            hName: formProcess[j].hname,
            andor: formProcess[j].andor,
            waitName: formProcess[j].sign,
            allowShow: formProcess[j].agreed1,
            allowMuti: formProcess[j].agreed2,
            rejectShow: formProcess[j].notagreed1,
            rejectMuti: formProcess[j].notagreed2,
            transferShow: formProcess[j].trans1,
            transferMuti: formProcess[j].trans2,
            right1: formProcess[j].right1 ? formProcess[j].right1 : [],
            right2: formProcess[j].right2 ? formProcess[j].right2 : [],
            urge: formProcess[j].urge,
            pId: formProcess[j].pId,
            pName: formProcess[j].pName,
            cType: formProcess[j].cType,
            atype: formProcess[j].atype,
            sign: formProcess[j].sign ? formProcess[j].sign : false,
            aname: formProcess[j].aname,
            notaname: formProcess[j].notaname,
            uname: formProcess[j].uname,
            jname: formProcess[j].jname,
            tname: formProcess[j].tname,
            join: formProcess[j].join ? formProcess[j].join : false,
            trans: formProcess[j].trans ? formProcess[j].trans : false,
            trange: formProcess[j].trange,
            jtype: formProcess[j].jtype != undefined ? formProcess[j].jtype : true,
            jrange: formProcess[j].jrange,
          };

          for (let k = 0; k < formProcess[j].hid.length; k++){
            users.push({
              user_id: formProcess[j].hid[k],
              real_name: formProcess[j].hname[k],
            });
          }
          obj['users'] = users;

          if (formProcess[j].trange && formProcess[j].trange.length > 0){
            for (let k = 0; k < formProcess[j].trange.length; k++){
              trangeUsers.push({
                user_id: formProcess[j].trange[k]['userId'],
                real_name: formProcess[j].trange[k]['realName'],
                userId: formProcess[j].trange[k]['userId'],
                realName: formProcess[j].trange[k]['realName'],
              });
            }
          }
          obj['trange'] = trangeUsers;

          if (formProcess[j].jrange && formProcess[j].jrange.length > 0){
            for (let k = 0; k < formProcess[j].jrange.length; k++){
              jrangeUsers.push({
                user_id: formProcess[j].jrange[k]['userId'],
                real_name: formProcess[j].jrange[k]['realName'],
                userId: formProcess[j].jrange[k]['userId'],
                realName: formProcess[j].jrange[k]['realName'],
              });
            }
          }
          obj['jrange'] = jrangeUsers;

          this.flowListData.push(obj);
        }
        let formObj = {
          id: item.id,
          auditType: '',
          name: item.version_name,
          allowBack: item.allow_revoke ? item.allow_revoke : false,
          urge: item.allow_urge ? item.allow_urge : false,
          autoAudit: item.allow_auto ? item.allow_auto : false,
          merge: item.allow_merge ? item.allow_merge : false,
          needConfirm: item.need_confirm ? item.need_confirm : false
        };
        this.flowFormData = formObj;
      },
      addInfo(){
        this.dialogVisible = true;
      },
      editInfo(item){
        this.form = {
          id: item.id,
          name: item.process_name,
          desc: item.des,
          processType: item.process_type+''
        }
        this.dialogVisible = true;
      },
      deleteInfo(item){
        this.form.id = item.id;
        this.visibleConfim = true;
      },
      settingInfo(item, index){
        this.serverDataItem = item;
        this.serverDataIndex = index;
        this.initProcess(item);
        this.drawerForm = true;
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
      handleChange(event){
        this.form.processType = event;
      },
      openedForm(){
        this.formLoading = true;
        setTimeout(()=>{
          if (this.serverDataItem.form_content){
            let form_content = JSON.parse(this.serverDataItem.form_content);
            this.$refs.designer.setRule(form_content.rule);
            this.$refs.designer.setOption(form_content.option);
          }else {
            this.$refs.designer.setRule([]);
            this.$refs.designer.setOption(this.formOption);
          }
          this.$refs.designer.removeMenuItem('span');
          this.formLoading = false;
        },800);
      },
      openForm(){
        if (this.$refs['flow']){
          this.$refs['flow'].initAsync();
        }
      },
      closeDialog(event){
        this.form = {
          id: '',
          name: '',
          desc: '',
          processType: ''
        };
        this.flowListData = [];
        this.flowFormData = {
          auditType: '',
          name: '',
          allowBack: false,
          urge: false,
          autoAudit: false,
          merge: false
        };
        this.subTitle = "";
        this.versionStatus = '';
        this.serverDataItem = {};
        this.serverDataIndex = '';

        if (this.$refs['flow']){
          this.$refs.flow.flowDetailData = {
            allowShow: false,
            allowMuti: false,
            rejectShow: false,
            rejectMuti: false,
            urge: false,
            join: false,
            trans: false,
          };
          this.$refs.flow.approverUsers = [];
          this.$refs.flow.formFieldList = [];
          this.$refs.flow.flowDetailIndex = '';
          this.$refs.flow.anameStatus = false;
          this.$refs.flow.notnameStatus = false;
          this.$refs.flow.unameStatus = false;
          this.$refs.flow.jnameStatus = false;
          this.$refs.flow.tnameStatus = false;
        }
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        this.btnLoading = false;
        this.drawerForm = false;
        this.dialogVisible = false;
      },
      cancelDialog(){
        this.dialogVisible = false;
      },
      okDialog(){
        let url = '';
        this.$refs['form'].validate((valid) => {
          if (valid) {
            let params = {
              processName: this.form.name,
              processType: this.form.processType,
              des: this.form.desc,
            };
            if (this.form.id != ''){
              params['id'] = this.form.id;
            }
            url = common.server_form_template_form_process_save;
            params = this.$qs.stringify(params);
            this.dialogLoading = true;
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
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      handleOkChange(data) {
        let url = "";
        let params = {
          id: this.form.id
        }
        url = common.server_form_template_form_process_del;
        params = this.$qs.stringify(params);
        this.dialogLoading = true;
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
      cancelDrawDialog(){
        this.closeDialog();
        this.detailData = '';
        this.drawerVisible = false;
        this.drawerForm = false;
      },
      okFormDrawDialog(type) {
        let url = '';
        let rules = {};
        let flowData = this.$refs.flow.flowData;
        let flowForm = this.$refs.flow.form;
        let ntype = '';
        let htype = '';
        let atype = '';
        let jtype = '';
        let pay = '';
        let hrole= [];
        let hid = [];
        let hname = [];
        let trange = [];
        let jrange = [];
        let flowDataArray = [];
        let flowDataOjb = {};
        if (flowData.length == 0){
          MessageWarning(this.$t("请设置流程信息！"));
          return;
        }
        if (flowForm.name == ''){
          MessageWarning(this.$t("流程属性中未设置流程名称！"));
          return;
        }
        for (let i = 0; i < flowData.length; i++){
          hid = [];
          hname = [];
          trange = [];
          jrange = [];
          if (flowData[i].extra == 'audit'){
            ntype = 'handle';
          }else if (flowData[i].extra == 'send'){
            ntype = 'cc';
          }else if (flowData[i].extra == 'sub'){
            ntype = 'sub';

            if (flowData[i].extra == 'sub'){
              if (flowData[i].pId == ''){
                MessageWarning(this.$t("子流程未设置流程！"));
                return;
              }
            }
          }
          if (flowData[i].type == 1 || flowData[i].type == 4){
            htype = 'AnyUser';
            let flowDataUsers = flowData[i].users;
            for (let j = 0; j < flowDataUsers.length; j++){
              hid.push(flowDataUsers[j].user_id);
              hname.push(flowDataUsers[j].real_name);
            }
          }else if (flowData[i].type == 2 || flowData[i].type == 5){
            htype = flowData[i].hType;
          }else if (flowData[i].type == 3 || flowData[i].type == 6){
            htype = 'CustomUser';
            let flowDataUsers = flowData[i].users;
            for (let j = 0; j < flowDataUsers.length; j++){
              hid.push(flowDataUsers[j].user_id);
              hname.push(flowDataUsers[j].real_name);
            }
          }

          if (flowData[i].join == true && flowData[i].jrange.length == 0){
            MessageWarning(this.$t("请选择转签人员范围！"));
            return;
          }

          if (flowData[i].trans == true && flowData[i].trange.length == 0){
            MessageWarning(this.$t("请选择加签人员范围！"));
            return;
          }

          if (flowData[i].trange && flowData[i].trange.length > 0){
            for (let j = 0; j < flowData[i].trange.length; j++){
              trange .push({
                userId: flowData[i].trange[j].user_id,
                realName: flowData[i].trange[j].real_name,
              });
            }
          }

          if (flowData[i].jrange && flowData[i].jrange.length > 0){
            for (let j = 0; j < flowData[i].jrange.length; j++){
              jrange .push({
                userId: flowData[i].jrange[j].user_id,
                realName: flowData[i].jrange[j].real_name,
              });
            }
          }

          let obj = {
            ntype: ntype,
            nChildType: flowData[i].type,
            nname: flowData[i].name,
            horder: i + 1,
            htype: htype,
            hrole: flowData[i].hrole,
            hid: hid,
            hname: hname,
            andor: flowData[i].andor,
            //sign: flowData[i].waitName,
            agreed1: flowData[i].allowShow,
            agreed2: flowData[i].allowMuti,
            notagreed1: flowData[i].rejectShow,
            notagreed2: flowData[i].rejectMuti,
            trans1: flowData[i].transferShow,
            trans2: flowData[i].transferMuti,
            right1: flowData[i].right1,
            right2: flowData[i].right2,
            urge: flowData[i].urge,
            cType: flowData[i].cType,
            atype: flowData[i].atype,
            sign: flowData[i].sign,
            aname: flowData[i].aname,
            notaname: flowData[i].notaname,
            uname: flowData[i].uname,
            jname: flowData[i].jname,
            tname: flowData[i].tname,
            join: flowData[i].join,
            trans: flowData[i].trans,
            trange: trange,
            jtype: flowData[i].jtype,
            jrange: jrange
          }
          if (flowData[i].extra == 'sub'){
            obj['pId'] = flowData[i].pId;
            obj['pName'] = flowData[i].pName;
          }
          flowDataArray.push(obj);
        }
        flowDataOjb = {
          versionName: flowForm.name,
          id: this.serverDataItem.id,
          formProcess: JSON.stringify(flowDataArray),
          allowRevoke: flowForm.allowBack,
          allowUrge: flowForm.urge,
          allowAuto: flowForm.autoAudit,
          allowMerge: flowForm.merge,
          needConfirm: flowForm.needConfirm
        };
        if (flowForm.id != '' && type != 'new'){
          flowDataOjb['id'] = flowForm.id;
        }

        flowDataOjb = this.$qs.stringify(flowDataOjb);
        this.btnLoading = true;
        this.$axios.post(common.server_form_template_form_process_set, flowDataOjb, {loading: false}).then(res => {
          if (res.data.code == 200){
            this.drawerForm = false;
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.btnLoading = false;
        });
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
.tab-class{
  cursor: default;
  padding: 10px;
}
</style>
