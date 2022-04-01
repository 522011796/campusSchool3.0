<template>
  <div>
    <div class="form-set-main" :style="drawHeight3">
      <div class="pull-left form-set-left">
        <div class="form-set-menu-item" :class="activeSetMenu == 1 ? 'form-set-menu-item-active' : ''" @click="selSetMenu(1)">
          <span>{{$t("基础设置")}}</span>
        </div>
        <div class="form-set-menu-item" :class="activeSetMenu == 2 ? 'form-set-menu-item-active' : ''" @click="selSetMenu(2)">
          <span>{{$t("消息推送")}}</span>
        </div>
        <div class="form-set-menu-item" :class="activeSetMenu == 3 ? 'form-set-menu-item-active' : ''" @click="selSetMenu(3)">
          <span>{{$t("打印模版")}}</span>
        </div>
        <div class="form-set-menu-item" :class="activeSetMenu == 4 ? 'form-set-menu-item-active' : ''" @click="selSetMenu(4)">
          <span>{{$t("权限设置")}}</span>
        </div>
        <div class="form-set-menu-item" :class="activeSetMenu == 5 ? 'form-set-menu-item-active' : ''" @click="selSetMenu(5)">
          <span>{{$t("跨应用取数")}}</span>
        </div>
      </div>
      <div class="form-set-right">
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
                <el-form-item :label="$t('提交规则')" prop="subRule">
                  <el-checkbox v-model="formBasic.subRule">
                    <span class="color-muted font-size-12">[{{$t('同账号只允许提交一次')}}]</span>
                  </el-checkbox>
                </el-form-item>
                <el-form-item :label="$t('提交按钮')" prop="subBtn">
                  <el-radio-group v-model="formBasic.subBtn">
                    <el-radio :label="true">{{$t('开启')}}</el-radio>
                    <el-radio :label="false">{{$t('关闭')}}</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item :label="$t('按钮文字')" prop="subBtnText">
                  <el-input v-model="formBasic.subBtnText" size="small" class="width-300"></el-input>
                </el-form-item>
                <el-form-item :label="$t('显隐规则')">
                  <div style="width: 300px;max-height: 180px;overflow-y: auto;border: 1px solid #dddddd; border-radius: 5px;padding:5px;">
                    <el-row>
                      <el-col :span="6">
                        <el-tag closable type="success" v-for="(item, index) in rules" :key="index">
                          xxxx
                        </el-tag>
                      </el-col>
                    </el-row>
                  </div>
                </el-form-item>
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
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import MyFormSetRole from "~/components/form/MyFormSetRole";
  import {common} from "~/utils/api/url";
  import appCreateBasicValidater from "~/utils/validater/appCreateBasicValidater";
  import {MessageError, MessageSuccess} from "~/utils/utils";
  import MyFormSetNotice from "~/components/form/MyFormSetNotice";

  export default {
    name: 'myFormSet',
    components: {MyFormSetNotice, MyFormSetRole},
    mixins: [mixins, appCreateBasicValidater],
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
        btnLoading: false,
        formBasic: {
          name: '',
          title: true,
          subRule: false,
          subBtn: true,
          subBtnText: '提交',
          rules: []
        }
      }
    },
    created() {
      this.initBasicInfo();
    },
    methods: {
      initBasicInfo(){
        this.formBasic = {
          name: this.formId.form_name,
          title: true,
          subRule: this.formId.submit_only,
          subBtn: this.formId.submit_button,
          subBtnText: this.formId.button_name,
          rules: []
        };
      },
      initNoticeGroup(){
        let params = {
          page: this.page,
          num:9999,
          searchKey: this.searchKey
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
      onSubmitBasic(){
        this.$refs['formBasic'].validate((valid) => {
          if (valid) {
            let params = {
              "表单id": this.formId.id,
              "表单名称": this.formBasic.name,
              "仅提交一次": this.formBasic.subRule,
              "显示提交按钮": this.formBasic.subBtn,
              "按钮名称": this.formBasic.subBtnText,
              "规则id": this.formBasic.rules.join()
            };
            params = this.$qs.stringify(params);
            this.btnLoading = true;
            this.$axios.post(common.server_form_template_basic_set, params, {loading: false}).then(res => {
              if (res.data.code == 200) {
                MessageSuccess(res.data.desc);
                this.initParent();
              } else {
                MessageError(res.data.desc);
              }
              this.btnLoading = false;
            });
          }
        });
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
</style>
