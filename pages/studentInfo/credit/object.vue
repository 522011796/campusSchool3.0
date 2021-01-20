<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">项目管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="6">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加项目")}}</el-button>
          </el-col>
          <el-col :span="18" class="text-right">
            <!--<div class="layout-inline text-right">
              <my-select size="small" :clearable="true" :group="true" :options="typeList" class="layout-item" @change="handleSelect"></my-select>
              <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
              <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('登录人')" @click="search"></my-input-button>
            </div>-->
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
            prop="socre_type"
            :label="$t('类型')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="socre_name_sub"
            :label="$t('一级项目')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="socre_name"
            :label="$t('二级项目')">
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal :visible="modalVisible" :title="$t('项目设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('类型')" prop="type">
            <my-select :sel-value="form.type" :options="filterScoreTypes" width-style="260" @change="handleSelect"></my-select>
          </el-form-item>
          <el-form-item :label="$t('一级项目')" prop="socreName">
            <el-input v-model="form.socreName" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('二级项目')" prop="socreNameSub">
            <el-input v-model="form.socreNameSub" class="width-260"></el-input>
          </el-form-item>
          <el-form-item  :label="$t('分值')" prop="qualityScore">
            <el-input v-model="form.qualityScore" class="width-260"></el-input>
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

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import MyPagination from "../../../components/MyPagination";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {MessageError, MessageSuccess} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyUserType from "../../../components/utils/MyUserType";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyInputButton from "../../../components/search/MyInputButton";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MyNormalDialog from "../../../components/utils/dialog/MyNormalDialog";
  import creditObjectValidater from "../../../utils/validater/creditObjectValidater";
  export default {
    mixins: [mixins, creditObjectValidater],
    components: {MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal,MyNormalDialog},
    data(){
      return {
        tableData: [],
        searchDate: [],
        typeList: [],
        searchKey: '',
        visible: false,
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        clearTime: '',
        action: '',
        subTitle: '',
        form: {
          id: '',
          type: '',
          socreName: '',
          socreNameSub: '',
          qualityScore: '',
          qualityNfScore: '',
          qualityMnfScore: ''
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
          num: this.num
        };
        this.$axios.get(common.audit_credit_type_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      addInfo(){
        this.modalVisible = true;
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
      handleSelect(data){
        this.form.type = data;
      },
      deleteInfo(row){
        this.form.id = row.id;
        this.subTitle = row.socre_name;
        this.visibleConfim = true;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.form.id
        };
        url = common.audit_credit_type_fliter_del;
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
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      closeDialog(event){
        this.form = {
          id: '',
          type: '',
          socreName: '',
          socreNameSub: '',
          qualityScore: '',
          qualityNfScore: '',
          qualityMnfScore: ''
        };
        this.subTitle = "";
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      okDialog(event){
        let url = "";
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              socreType: this.form.type == 'true' ? '加分' : "减分",
              socreName: this.form.socreName,
              socreNameSub: this.form.socreNameSub,
              qualityScore: this.form.qualityScore,
            };
            url = common.audit_credit_type_fliter_add;
            params = this.$qs.stringify(params);
            this.$axios.post(url, params, {loading: false}).then(res => {
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
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
</style>
