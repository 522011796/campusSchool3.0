<template>
  <div>
    <div class="form-set-main">
      <div class="pull-left form-set-left" :style="drawHeight7" style="overflow-y: auto">
        <div class="form-set-menu-item" :class="activeSetMenu == 1 ? 'form-set-menu-item-active' : ''" @click="selSetMenu(1)">
          <span>{{$t("基础设置")}}</span>
        </div>
        <div class="form-set-menu-item" :class="activeSetMenu == 2 ? 'form-set-menu-item-active' : ''" @click="selSetMenu(2)">
          <span>{{$t("消息推送")}}</span>
        </div>
<!--        <div class="form-set-menu-item" :class="activeSetMenu == 3 ? 'form-set-menu-item-active' : ''" @click="selSetMenu(3)">-->
<!--          <span>{{$t("打印模版")}}</span>-->
<!--        </div>-->
<!--        <div class="form-set-menu-item" :class="activeSetMenu == 4 ? 'form-set-menu-item-active' : ''" @click="selSetMenu(4)">-->
<!--          <span>{{$t("权限设置")}}</span>-->
<!--        </div>-->
<!--        <div class="form-set-menu-item" :class="activeSetMenu == 5 ? 'form-set-menu-item-active' : ''" @click="selSetMenu(5)">-->
<!--          <span>{{$t("跨应用取数")}}</span>-->
<!--        </div>-->
      </div>
      <div class="form-set-right" :style="drawHeight7" style="overflow-y: auto">
        <div v-if="activeSetMenu == 1">
          <div class="padding-lr-10 padding-tb-10">
            <div class="color-muted">
                <span>
                  <label class="title-block-tag"></label>
                  <label class="title-block-text color-warning">{{$t("基础设置")}}</label>
                </span>
            </div>
            <div class="font-size-12" style="position: relative">
              <el-form :model="formBasic" :rules="rules" ref="formBasic" label-width="100px" style="display: inline-block">
                <el-form-item :label="$t('表单名称')" prop="name">
                  <el-input v-model="formBasic.name" size="small" class="width-300"></el-input>
                </el-form-item>
                <el-form-item :label="$t('数据标题')" prop="title">
                  <el-checkbox v-model="formBasic.title" disabled>
                    <span class="color-muted font-size-12">[{{$t('发起人')}}]</span>
                    <span class="color-muted font-size-12">{{$t('提交的')}}</span>
                    <span class="color-muted font-size-12">[{{$t('表单名称')}}]</span>
                  </el-checkbox>
                </el-form-item>
                <el-form-item :label="$t('提交按钮')" prop="subBtn">
                  <el-radio-group v-model="formBasic.subBtn">
                    <el-radio :label="true">{{$t('显示')}}</el-radio>
                    <el-radio :label="false">{{$t('隐藏')}}</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item :label="$t('提交规则')" prop="subRule">
                  <div>
                    <el-checkbox v-model="formBasic.subRule">
                      <span class="color-muted font-size-12">[{{$t('同账号只允许提交一次')}}]</span>
                    </el-checkbox>
                  </div>
                  <div>
                    <el-checkbox v-model="formBasic.checkForm">
                      <span class="color-muted font-size-12">{{$t('表单数据核查')}}</span>
                    </el-checkbox>
                  </div>
                  <div>
                    <span>
                      <label class="font-size-12">{{$t('选择表单字段')}}</label>
                      <el-select :disabled="!formBasic.checkForm" v-model="formBasic.checkFormParams" multiple @change="handleFormChange($event,'params')" size="small" class="width-200" :placeholder="$t('请选择本表单字段')">
                        <el-option
                          v-for="item in formParamsList"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </span>
                  </div>
                  <div>
                    <span>
                      <label class="font-size-12">{{$t('选择核查条件')}}</label>
                      <el-select :disabled="!formBasic.checkForm" v-model="formBasic.checkFormCondition" @change="handleFormChange($event,'condition')" size="small" class="width-130" :placeholder="$t('选择核查条件')">
                        <el-option
                          v-for="item in formCheckConditionList"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                      <el-input :disabled="!formBasic.checkForm" v-model="formBasic.checkFormConditionNum" :placeholder="$t('请填写条件数')" size="small" class="width-120"></el-input>
                      <el-select :disabled="!formBasic.checkForm" v-model="formBasic.checkFormConditionOnly" @change="handleFormChange($event,'formOnly')" size="small" class="width-100" :placeholder="$t('请选择')">
                        <el-option
                          v-for="item in formCheckConditionOnlyList"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </span>
                  </div>
                  <div>
                    <span>
                      <label class="font-size-12">{{$t('选择执行策略')}}</label>
                      <el-select :disabled="!formBasic.checkForm" v-model="formBasic.checkFormOpr" @change="handleFormChange($event,'formOpr')" size="small" class="width-200" :placeholder="$t('请选择执行策略')">
                        <el-option
                          v-for="item in formCheckOprList"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </span>
                  </div>
                  <div>
                    <el-checkbox v-model="formBasic.checkFormStatus">
                      <span class="color-muted font-size-12">{{$t('审核状态核查')}}</span>
                    </el-checkbox>
                  </div>
                  <div>
                    <el-select :disabled="!formBasic.checkFormStatus" v-model="formBasic.checkFormStatusJoinForm" multiple @change="handleFormChange($event,'formJoin')" size="small" class="width-200" :placeholder="$t('请选择需要关联的表单')">
                      <el-option
                        v-for="item in formCheckStatusJoinFormList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    <el-select :disabled="!formBasic.checkFormStatus" v-model="formBasic.checkFormStatusLimitCondition" @change="handleFormChange($event,'formLimit')" size="small" class="width-150" :placeholder="$t('请选择限制条件')">
                      <el-option
                        v-for="item in formCheckStatuslimitConditionList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    <el-select :disabled="!formBasic.checkFormStatus" v-model="formBasic.checkFormStatusLimitOpr" @change="handleFormChange($event,'formStatusOpr')" size="small" class="width-150" :placeholder="$t('请选择执行策略')">
                      <el-option
                        v-for="item in formCheckStatusOprList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item :label="$t('按钮文字')" prop="subBtnText">
                  <el-input v-model="formBasic.subBtnText" size="small" class="width-300"></el-input>
                </el-form-item>
                <el-form-item :label="$t('选择流程')" prop="flow"  v-if="formId.form_type != 0 && formId.form_type != 2">
                  <my-select size="small" :width-style="300" :clearable="true" :sel-value="formBasic.flow" :options="flowList" @change="handleFlowChange"></my-select>
                </el-form-item>
                <el-form-item :label="$t('选择权限')" prop="role">
<!--                  <my-select size="small" :width-style="300" :sel-value="formBasic.role" :options="roleList" @change="handleRoleChange"></my-select>-->
                  <el-select v-model="formBasic.role" multiple @change="handleRoleChange" size="small" class="width-300" placeholder="请选择">
                    <el-option
                        v-for="item in roleList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
<!--                <el-form-item :label="$t('显隐规则')">-->
<!--                  <div style="width: 300px;height: 180px;overflow-y: auto;border: 1px solid #dddddd; border-radius: 5px;padding:5px;display: inline-block">-->
<!--                    <el-row :gutter="16">-->
<!--                      <el-col :span="12" v-for="(item, index) in ruleList" :key="index" @click.native="editRuleList(item)">-->
<!--                        <div class="item-tag-block margin-bottom-10" style="position: relative">-->
<!--                          <div class="moon-content-text-ellipsis-class color-white">{{ item.hideName }}</div>-->
<!--                          <span style="position: absolute;right: -5px;top: -10px"><i class="fa fa-close" @click.stop="delRuleList(item)"></i></span>-->
<!--                        </div>-->
<!--                      </el-col>-->
<!--                    </el-row>-->
<!--                  </div>-->
<!--                  <i class="fa fa-plus-circle color-success" style="position: relative; top: -100px;font-size: 30px" @click="addRule"></i>-->
<!--                </el-form-item>-->
                <el-form-item class="text-center">
                  <el-button type="primary" size="mini" :loading="btnLoading" @click="onSubmitBasic">{{ $t('保存') }}</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
        <div v-if="activeSetMenu == 2">
          <my-form-set-notice :formId="formId" :data="noticeTableData" @init="initNoticeGroup"></my-form-set-notice>
        </div>
        <div v-if="activeSetMenu == 4">
          <my-form-set-role :formId="formId" :data="roleTableData" @init="initRoleGroup"></my-form-set-role>
        </div>
      </div>
      <div class="moon-clearfix"></div>
    </div>

    <dialog-normal top="10vh" width-style="800px" :append-to-body="true" :visible="dialogRule" :title="$t('规则设置')" @close="closeDialog" @right-close="cancelDialog">
      <div>
        <el-form :model="formRule" :rules="rulesRule" ref="formRule" label-width="100px" style="display: inline-block">
          <el-form-item :label="$t('名称')" prop="name">
            <el-input v-model="formRule.name" size="small" class="width-300"></el-input>
          </el-form-item>
          <el-form-item :label="$t('满足')">
            <div class="layout-inline">
              <my-select size="mini" class="width-100 layout-item margin-left-5 margin-right-5" :sel-value="formRule.conditional" :options="conditionalList" @change="handleConditionChange"></my-select>
              <span class="layout-item">{{$t('条件时')}}</span>
              <span class="fa fa-plus-circle color-success" @click="addRuleItem"></span>
            </div>
            <div>
              <div class="layout-inline" v-for="(item, index) in conditionalChildList" :key="item.id">
                <el-select class="width-150 layout-item" size="mini" v-model="conditionalChildList[index].conditional1" :placeholder="$t('本表单字段')">
                  <el-option
                    v-for="(itemChild, indexChild) in conditionalItemList1"
                    :key="indexChild"
                    :label="itemChild.label"
                    :value="itemChild.value"
                    @click.native="handleCondition1Change($event, itemChild, indexChild, index)">
                  </el-option>
                </el-select>

                <el-select class="width-100 layout-item" size="mini" v-model="conditionalChildList[index].conditional2">
                  <el-option
                    v-for="(itemChild, indexChild) in filterAppServerConditionnalAllType"
                    :key="indexChild"
                    :label="itemChild.label"
                    :value="itemChild.value"
                    @click.native="handleCondition2Change($event, itemChild, indexChild, index)">
                  </el-option>
                </el-select>

                <template v-if="conditionalChildList[index].conditional2 == 'between'">
                  <div class="layout-item" v-if="conditionalChildList[index].conditional1Type == 'datePicker'">
                    <el-date-picker
                      size="mini"
                      v-model="conditionalChildList[index].conditional3"
                      :type="conditionalChildList[index].conditional1Props.type"
                      :value-format="conditionalChildList[index].conditional1Props.format"
                      placeholder="选择日期"
                      style="width:140px">
                    </el-date-picker>
                    -
                    <el-date-picker
                      size="mini"
                      v-model="conditionalChildList[index].conditional4"
                      :type="conditionalChildList[index].conditional1Props.type"
                      :value-format="conditionalChildList[index].conditional1Props.format"
                      placeholder="选择日期"
                      style="width:140px">
                    </el-date-picker>
                  </div>
                  <div class="layout-item" v-else-if="conditionalChildList[index].conditional1Type == 'timePicker'">
                    <el-time-picker
                      size="mini"
                      v-model="conditionalChildList[index].conditional3"
                      :picker-options="{
                        format:'HH:mm'
                      }"
                      value-format="HH:mm:ss"
                      placeholder="选择时间"
                      style="width:140px">
                    </el-time-picker>
                    -
                    <el-time-picker
                      size="mini"
                      v-model="conditionalChildList[index].conditional4"
                      :picker-options="{
                        format:'HH:mm'
                      }"
                      value-format="HH:mm:ss"
                      placeholder="选择时间"
                      style="width:140px">
                    </el-time-picker>
                  </div>
                  <div class="layout-item" v-else>
                    <el-input size="mini" style="width: 50px" v-model="conditionalChildList[index].conditional3"></el-input>
                    -
                    <el-input size="mini" style="width: 50px" v-model="conditionalChildList[index].conditional4"></el-input>
                  </div>
                </template>
                <template v-else>
                  <template v-if="conditionalChildList[index].conditional1Type == 'datePicker'">
                    <el-date-picker
                      size="mini"
                      v-model="conditionalChildList[index].conditional3"
                      :type="conditionalChildList[index].conditional1Props.type"
                      :value-format="conditionalChildList[index].conditional1Props.format"
                      placeholder="选择日期"
                      style="width:150px">
                    </el-date-picker>
                  </template>
                  <template v-else-if="conditionalChildList[index].conditional1Type == 'timePicker'">
                    <el-time-picker
                      size="mini"
                      v-model="conditionalChildList[index].conditional3"
                      :picker-options="{
                        format:'HH:mm'
                      }"
                      value-format="HH:mm:ss"
                      placeholder="选择时间"
                      style="width:150px">
                    </el-time-picker>
                  </template>
                  <template v-else>
                    <el-input size="mini" class="width-150" v-model="conditionalChildList[index].conditional3"></el-input>
                  </template>
                </template>

                <span class="fa fa-plus-circle color-success" @click="insertRuleItem($event, index)"></span>
                <span class="fa fa-minus-circle color-danger" @click="minxRuleItem($event, index)"></span>
              </div>
            </div>
          </el-form-item>
          <el-form-item :label="$t('显示字段')" prop="result">
            <my-select size="mini" class="width-150 layout-item" :sel-value="formRule.result" :options="resultList" @change="handleResultChange"></my-select>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" :loading="btnDialogLoading" @click="okDialog()">
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import MyFormSetRole from "~/components/form/MyFormSetRole";
  import {common} from "~/utils/api/url";
  import appCreateBasicValidater from "~/utils/validater/appCreateBasicValidater";
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import MyFormSetNotice from "~/components/form/MyFormSetNotice";
  import appFormBasicRuleValidater from "~/utils/validater/appFormBasicRuleValidater";
  import MySelect from "~/components/MySelect";
  import DialogNormal from "~/components/utils/dialog/DialogNormal";

  export default {
    name: 'myFormSet',
    components: {DialogNormal, MySelect, MyFormSetNotice, MyFormSetRole},
    mixins: [mixins, appCreateBasicValidater, appFormBasicRuleValidater],
    props: {
      formId: Object
    },
    computed: {

    },
    data() {
      return {
        activeSetMenu: 1,
        roleTableData: [],
        noticeTableData: [],
        ruleList: [],
        conditionalList: [
          {label: this.$t("所有"), value: true, text: this.$t("所有")},
          {label: this.$t("任一"), value: false, text: this.$t("任一")}
        ],
        conditionalItemList1: [],
        conditionalItemList2: [],
        conditionalItemList3: [],
        resultList: [],
        conditionalChildList: [],
        flowList: [],
        roleList: [],
        btnLoading: false,
        btnDialogLoading: false,
        dialogRule: false,
        formContent: "",
        formParamsList: [],
        formCheckConditionList: [
          {label: this.$t("大于"), value: '>'},
          {label: this.$t("小于"), value: '<'},
          {label: this.$t("等于"), value: '='},
          {label: this.$t("大于等于"), value: '>='},
          {label: this.$t("小于等于"), value: '<='}
        ],
        formCheckConditionNumList: [],
        formCheckConditionOnlyList: [
          {label: this.$t("年"), value: '年'},
          {label: this.$t("月"), value: '月'},
          {label: this.$t("日"), value: '日'},
          {label: this.$t("无"), value: '无'}
        ],
        formCheckOprList: [
          {label: this.$t("满足条件禁止提交"), value: '0'},
          {label: this.$t("满足条件允许提交"), value: '1'},
        ],
        formCheckStatusJoinFormList: [],
        formCheckStatuslimitConditionList: [
          {label: this.$t("审批状态未通过"), value: '0'},
          {label: this.$t("审批状态通过"), value: '1'},
        ],
        formCheckStatusOprList: [
          {label: this.$t("满足条件禁止提交"), value: '0'},
          {label: this.$t("满足条件允许提交"), value: '1'},
        ],
        formBasic: {
          name: '',
          title: true,
          subRule: false,
          subBtn: true,
          subBtnText: '提交',
          rules: [],
          flow: '',
          role: [],
          checkForm: false,
          checkFormParams: false,
          checkFormCondition: '',
          checkFormConditionNum: '',
          checkFormConditionOnly: '',
          checkFormOpr: '',
          checkFormStatus: false,
          checkFormStatusJoinForm: '',
          checkFormStatusLimitCondition: '',
          checkFormStatusLimitOpr: '',
        },
        formRule: {
          id: '',
          name: '',
          conditional: true,
          conditional1: '',
          conditional2: '',
          conditional3: '',
          conditionalList: [],
          result: ''
        }
      }
    },
    created() {
      this.initBasicInfo();
      this.initFlow();
      this.initRole();
      this.initForm();
      this.initFormParams();
    },
    methods: {
      initBasicInfo(){
        this.formBasic = {
          name: this.formId.form_name,
          title: true,
          subRule: this.formId.submit_only,
          subBtn: this.formId.submit_button,
          subBtnText: this.formId.button_name,
          rules: [],
          flow: this.formId.form_process_id ? this.formId.form_process_id+'' : '',
          role: this.formId.form_permission_id != null && this.formId.form_permission_id != '' ? this.formId.form_permission_id.split(",") : [],
        };
        this.initRuleList();
      },
      initNoticeGroup(){
        let params = {
          page: this.page,
          num:9999,
          searchKey: this.searchKey,
          formId: this.formId.id,
        };
        this.$axios.get(common.server_form_template_notice_page, {params: params}).then(res => {
          if (res.data.data){
            this.noticeTableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initRoleGroup(){
        let params = {
          page: this.page,
          num:9999,
          formId: this.formId.id,
          searchKey: this.searchKey
        };
        this.$axios.get(common.server_form_template_permission_list, {params: params}).then(res => {
          if (res.data.data){
            this.roleTableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initRuleList(){
        let params = {
          formId: this.formId.id
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_form_template_form_rule_search, params).then(res => {
          if (res.data.data){
            this.ruleList = res.data.data;
          }
        });
      },
      initForm(){
        //server_list_list2
        let params = {

        };
        this.$axios.get(common.server_list_list2,{params: params}).then(res => {
          if (res.data.code == 200){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                value: res.data.data[i].id,
                label: res.data.data[i].form_name
              });
            }
            this.formCheckStatusJoinFormList = array;
          }
        });
      },
      initFormParams(){
        //server_list_list2
        let params = {
          formId: this.formId.id
        };
        this.$axios.get(common.server_list_field2,{params: params}).then(res => {
          if (res.data.code == 200){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                id: i,
                value: res.data.data[i].f,
                label: res.data.data[i].n,
                extra: res.data.data[i].d
              });
            }
            this.formParamsList = array;
          }
        });
      },
      initFlow(){
        let params = {

        };
        this.$axios.get(common.server_form_template_form_process_list, {params: params}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i].processName,
                value: res.data.data[i].id+"",
              });
            }
            this.flowList = array;
          }
        });
      },
      initRole(){
        let params = {

        };
        this.$axios.get(common.server_form_template_permission_list_list, {params: params}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i].permissionName,
                value: res.data.data[i].id+"",
              });
            }
            this.roleList = array;
          }
        });
      },
      selSetMenu(index){
        this.activeSetMenu = index;
        if (index == 1){
          this.initBasicInfo();
        }else if (index == 2){
          this.initNoticeGroup();
        }else if (index == 4){
          this.initRoleGroup();
        }
      },
      initParent(){
        this.$emit('init');
      },
      delRuleList(item){
        let params = {
          "id": item.id
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_form_template_form_rule_del, params, {loading: false}).then(res => {
          if (res.data.code == 200) {
            MessageSuccess(res.data.desc);
            this.initRuleList();
          } else {
            MessageError(res.data.desc);
          }
        });
      },
      onSubmitBasic(){
        this.$refs['formBasic'].validate((valid) => {
          if (valid) {
            let numberZeroReg = /^[0-9][0-9]*$/;
            if (this.formBasic.checkForm == true){
              if (this.formBasic.checkFormParams == undefined || this.formBasic.checkFormParams == ""){
                MessageWarning(this.$t("请选择表单字段"));
                return;
              }else if ((this.formBasic.checkFormCondition == undefined || this.formBasic.checkFormCondition == "")
                || (this.formBasic.checkFormConditionNum == undefined || this.formBasic.checkFormConditionNum == "")
                || (this.formBasic.checkFormConditionOnly == undefined || this.formBasic.checkFormConditionOnly == "")){
                MessageWarning(this.$t("请设置核查条件相关"));
                return;
              }else if (!numberZeroReg.test(this.formBasic.checkFormConditionNum)){
                MessageWarning(this.$t("条件数必须为正整数"));
                return;
              }else if (this.formBasic.checkFormOpr == undefined || this.formBasic.checkFormOpr == ""){
                MessageWarning(this.$t("请选择执行策略"));
                return;
              }
            }
            if (this.formBasic.checkFormStatus == true) {
              if (this.formBasic.checkFormStatusJoinForm == undefined || this.formBasic.checkFormStatusJoinForm == "") {
                MessageWarning(this.$t("请选择需要关联的表单"));
                return;
              } else if (this.formBasic.checkFormStatusLimitCondition == undefined || this.formBasic.checkFormStatusLimitCondition == "") {
                MessageWarning(this.$t("请选择限制条件"));
                return;
              } else if (this.formBasic.checkFormStatusLimitOpr == undefined || this.formBasic.checkFormStatusLimitOpr == "") {
                MessageWarning(this.$t("请选择执行策略"));
                return;
              }
            }

            let checkFieldValue = {
              "ckfield": this.formBasic.checkFormParams.join(),
              "ckcon": this.formBasic.checkFormCondition,
              "ckvalue": this.formBasic.checkFormConditionNum,
              "ckrange": this.formBasic.checkFormConditionOnly,
              "ckresult": this.formBasic.checkFormOpr
            };

            let checkApplyValue = {
              "ckid": this.formBasic.checkFormStatusJoinForm.join(),
              "ckcon": this.formBasic.checkFormStatusLimitCondition,
              "ckresult": this.formBasic.checkFormStatusLimitOpr
            };

            let params = {
              "formId": this.formId.id,
              "formName": this.formBasic.name,
              "submitOnly": this.formBasic.subRule,
              "submitButton": this.formBasic.subBtn,
              "buttonName": this.formBasic.subBtnText,
              "hideIds": this.formBasic.rules.join(),
              "checkField": this.formBasic.checkForm,
              "checkApply": this.formBasic.checkFormStatus,
              "checkFieldValue": checkFieldValue,
              "checkApplyValue": checkApplyValue
            };
            if (this.formBasic.role.length > 0){
              params['formPermissionId'] = this.formBasic.role.join();
            }
            if (this.formBasic.flow != ""){
              params['formProcessId'] = this.formBasic.flow;
            }
            params = this.$qs.stringify(params);
            this.btnLoading = true;
            this.$axios.post(common.server_form_template_basic_set, params, {loading: false}).then(res => {
              if (res.data.code == 200) {
                MessageSuccess(res.data.desc);
                this.initParent();
                this.formId.form_name = this.formBasic.name;
                this.formId.submit_only = this.formBasic.subRule;
                this.formId.submit_button = this.formBasic.subBtn;
                this.formId.button_name = this.formBasic.subBtnText;
                this.formId.hideIds = this.formBasic.rules.join();
                this.formId.form_permission_id = this.formBasic.role.length > 0 ? this.formBasic.role.join() : '';
                this.formId.form_process_id = this.formBasic.flow + '';
              } else {
                MessageError(res.data.desc);
              }
              this.btnLoading = false;
            });
          }
        });
      },
      editRuleList(item){
        this.addRule();
        this.initRuleList();
        let conditionalChildList = JSON.parse(item.conditions);
        let conditionalChildArr = [];
        this.formRule = {
          id: item.id,
          name: item.hideName,
          conditional: item.andor,
          conditional1: '',
          conditional2: '',
          conditional3: '',
          conditionalList: [],
          result: JSON.parse(item.hideKey)[0]
        };

        for (let i = 0; i < conditionalChildList.length; i++){
          conditionalChildArr.push({
            id: i + 1,
            conditional1: conditionalChildList[i].k,
            conditional1Type: conditionalChildList[i].t1,
            conditional1Props: '',
            conditional2: conditionalChildList[i].c,
            conditional3: '',
            conditional4: ''
          });

          if(conditionalChildList[i].t2 != ''){
            conditionalChildArr[i]['conditional1Props'] = conditionalChildList[i].t2;
          }

          if (conditionalChildList[i].v.indexOf("~") > -1){
            conditionalChildArr[i]['conditional3'] = conditionalChildList[i].v.split("~")[0];
            conditionalChildArr[i]['conditional4'] = conditionalChildList[i].v.split("~")[1]
          }else{
            conditionalChildArr[i]['conditional3'] = conditionalChildList[i].v;
          }
        }

        this.conditionalChildList = conditionalChildArr;
      },
      addRule(){
        this.formContent = "";
        let rule = "";
        let ruleList = [];
        let ruleCodList = [];
        if (this.formId.form_content != ""){
          rule = JSON.parse(this.formId.form_content);
          this.conditionalItemList1 = [];
          this.resultList = [];

          this.resultList = this.setRuleChild(rule.rule, ruleList);
          this.conditionalItemList1 = this.setRuleChild(rule.rule, ruleCodList);

          // for (let i = 0; i < rule.rule.length; i++){
          //   this.conditionalItemList1.push({
          //     label: rule.rule[i].title,
          //     value: rule.rule[i].field,
          //     text: rule.rule[i].title,
          //     type: rule.rule[i].type,
          //     props: rule.rule[i].props,
          //   });
          // }
        }
        this.formContent = rule;
        this.dialogRule = true;
      },
      addRuleItem(){
        this.conditionalChildList.push({
          id: this.conditionalChildList.length + 1,
          conditional1: '',
          conditional1Type: '',
          conditional1Props: '',
          conditional2: '',
          conditional3: '',
          conditional4: ''
        });
      },
      insertRuleItem(event, index){
        let conditional = {
          conditional1: '',
          conditional1Type: '',
          conditional1Props: '',
          conditional2: '',
          conditional3: '',
          conditional4: ''
        };
        this.conditionalChildList.splice(index+1, 0, conditional);
        this.conditionalChildList[index+1]['id'] = this.conditionalChildList.length + 1;
      },
      minxRuleItem(event, index){
        this.conditionalChildList.splice(index, 1);
      },
      closeDialog(){
        this.formRule = {
          id: '',
          name: '',
          conditional: true,
          conditional1: '',
          conditional2: '',
          conditional3: '',
          conditionalList: [],
          result: ''
        };
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        };
        if (this.$refs['formRule']){
          this.$refs['formRule'].resetFields();
        };
        this.conditionalChildList = [];
        this.dialogRule = false;
      },
      cancelDialog(){
        this.dialogRule = false;
      },
      okDialog(){
        this.$refs['formRule'].validate((valid) => {
          if (valid) {
            if (this.conditionalChildList.length == 0){
              MessageWarning(this.$t("请设置规则！"));
              return;
            }

            let params = {
              "formId": this.formId.id,
              "hideName": this.formRule.name,
              "andor": this.formRule.conditional,
              "hideKeys": this.formRule.result
            };
            if (this.formRule.id != ''){
              params['id'] = this.formRule.id;
            }

            let conditionalChildList = [];
            for (let i = 0; i < this.conditionalChildList.length; i++){
              conditionalChildList.push({
                k: this.conditionalChildList[i].conditional1,
                c: this.conditionalChildList[i].conditional2,
                v: this.conditionalChildList[i].conditional3,
                t1: this.conditionalChildList[i].conditional1Type,
                t2: ''
              });
              if (this.conditionalChildList[i].conditional2 == 'between'){
                conditionalChildList[i]['v'] = this.conditionalChildList[i].conditional3 + '~' + this.conditionalChildList[i].conditional4;
              }
              if (this.conditionalChildList[i].conditional1Props){
                conditionalChildList[i]['t2'] = this.conditionalChildList[i].conditional1Props;
              }
            }
            params['conditions'] = JSON.stringify(conditionalChildList);

            params = this.$qs.stringify(params);
            this.btnLoading = true;
            this.$axios.post(common.server_form_template_form_set_rule_save, params, {loading: false}).then(res => {
              if (res.data.code == 200) {
                MessageSuccess(res.data.desc);
                this.initRuleList();
                this.dialogRule = false;
              } else {
                MessageError(res.data.desc);
              }
              this.btnLoading = false;
            });
          }
        });
      },
      handleConditionChange(data){
        this.formRule.conditional = data;
      },
      handleCondition1Change(event, item, index, pIndex){
        this.conditionalChildList[pIndex].conditional1 = item.value;
        this.conditionalChildList[pIndex].conditional1Type = item.type;
        if (item.props){
          this.conditionalChildList[pIndex].conditional1Props = item.props;
        }
        this.conditionalChildList[pIndex].conditional3 = '';
        this.conditionalChildList[pIndex].conditional4 = '';
      },
      handleCondition2Change(event, item, index, pIndex){
        this.conditionalChildList[pIndex].conditional2 = item.value;
      },
      handleCondition3Change(event, item){
        this.conditionalChildList[item.index-1].conditional3 = item.field;
      },
      handleResultChange(data){
        this.formRule.result = data;
      },
      handleFlowChange(data){
        this.formBasic.flow = data;
      },
      handleRoleChange(data){
        this.formBasic.role = data;
      },
      handleFormChange(event, type){
        if (type == "params"){
          this.formBasic.checkFormParams = event;
        }else if (type == "condtion"){
          this.formBasic.checkFormCondition = event;
        }else if (type == "formOnly"){
          this.formBasic.checkFormConditionOnly = event;
        }else if (type == "formOpr"){
          this.formBasic.checkFormOpr = event;
        }else if (type == "formJoin"){
          this.formBasic.checkFormStatusJoinForm = event;
        }else if (type == "formLimit"){
          this.formBasic.checkFormStatusLimitCondition = event;
        }else if (type == "formStatusOpr"){
          this.formBasic.checkFormStatusLimitOpr = event;
        }
      },
      setRuleChild(rule, ruleList){
        let obj = {};
        for (let i = 0; i < rule.length; i++){
          if (rule[i]['children'] && rule[i]['children'].length > 0){
            this.setRuleChild(rule[i]['children'], ruleList);
            continue;
          }else {
            if (rule[i].field){
              obj = {
                label: rule[i].title,
                field: rule[i].field,
                title: rule[i].title,
                type: rule[i].type,
                value: rule[i].field,
                text: rule[i].title,
                props: rule[i].props
              }
              ruleList.push(obj);
            }
          }
        }
        return ruleList;
      }
    }
  }
</script>

<style scoped>
.form-set-main{
  box-shadow: 0px 0px 4px #DCDFE6;
  border-right: 1px solid #DCDFE6;
}
.form-set-left{
  width: 200px;
  height: 100%;
  background: #f8f8f8;
  border-right: 1px solid #DCDFE6;
}
.form-set-right{
  margin-left: 201px;
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
.item-tag-block{
  height: 25px;
  line-height: 25px;
  background: rgb(140, 197, 255);
  border-radius: 5px;
  padding: 0px 10px;
  color: #909399;
}
</style>
