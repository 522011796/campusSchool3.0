<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">认证管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加号码")}}</el-button>
            <el-button size="small" type="success"  icon="el-icon-circle-check" @click="mutiOprInfo(1)">{{$t("批量启用")}}</el-button>
            <el-button size="small" type="warning"  icon="el-icon-remove-outline" @click="mutiOprInfo(2)">{{$t("批量停用")}}</el-button>
            <el-button size="small" type="danger"  icon="el-icon-delete" @click="mutiOprInfo(3)">{{$t("批量删除")}}</el-button>
            <el-button size="small" type="text"  icon="el-icon-setting" @click="settingInfo($event)">{{$t("认证设置")}}</el-button>
          </el-col>
          <el-col :span="12" class="text-right">
            <div class="layout-inline text-right">
              <el-button size="small" type="success"  icon="el-icon-upload" @click="importInfo($event)">{{$t("导入")}}</el-button>
              <my-input-button size="small" plain width-class="width: 200px" type="success" :clearable="true" :placeholder="$t('编号/手机/姓名/号段/备注')" @click="search"></my-input-button>
            </div>
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
          :row-key="getRowKeys"
          :max-height="tableHeight.height"
          style="width: 100%"
          @filter-change="fliterTable"
          @selection-change="handleSelectionChange">
          <el-table-column
            :reserve-selection="true"
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            align="center"
            prop="phone_no"
            :label="$t('编号')">
            <template slot-scope="scope">
              <span v-if="scope.row.phone_no != ''">{{scope.row.phone_no}}</span>
              <span v-else>--</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="section_no"
            :label="$t('号段')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="phone"
            :label="$t('手机号')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="phone_owner"
            :filter-multiple="false"
            column-key="owner"
            :filters="filterPhoneOwner"
            :label="$t('运营商')">
            <template slot-scope="scope">
              <span v-if="scope.row.phone_owner == 1">{{$t("移动")}}</span>
              <span v-if="scope.row.phone_owner == 2">{{$t("联通")}}</span>
              <span v-if="scope.row.phone_owner == 3">{{$t("电信")}}</span>
              <span v-if="scope.row.phone_owner == 4">{{$t("其他")}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('姓名')">
            <template slot-scope="scope">
              <span v-if="scope.row.name != ''">{{scope.row.name}}</span>
              <span v-else>--</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('备注')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <span v-if="scope.row.des != ''">{{scope.row.des}}</span>
                  <span v-else>--</span>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span v-if="scope.row.des != ''">{{scope.row.des}}</span>
                  <span v-else>--</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('录入日期')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <span>{{$moment(scope.row.add_time).format("YYYY-MM-DD HH:mm:ss")}}</span>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{$moment(scope.row.add_time).format("YYYY-MM-DD HH:mm:ss")}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :filter-multiple="false"
            column-key="status"
            :filters="filterEnableStatus"
            :label="$t('状态')">
            <template slot-scope="scope">
              <span class="color-success" v-if="scope.row.status == true">{{$t("启用")}}</span>
              <span class="color-warning" v-if="scope.row.status == false">{{$t("停用")}}</span>
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

    <dialog-normal :visible="modalVisible" :title="$t('号码设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('手机号')" prop="phone">
            <el-input v-model="form.phone" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('姓名')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('备注')" prop="des">
            <el-input v-model="form.des" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('编号')" prop="no">
            <el-input v-model="form.no" class="width-260">
              <el-button slot="append" @click="autoNo">
                <i class="el-icon-loading" v-if="autoLoading"></i>
                {{$t('自动')}}
              </el-button>
            </el-input>
          </el-form-item>
          <el-form-item :label="$t('运营商')">
            <el-button-group>
              <el-button size="small" :type="form.phoneOwner == 1 ? 'primary' : 'default'" @click="selOwner(1)">{{$t("移动")}}</el-button>
              <el-button size="small" :type="form.phoneOwner == 2 ? 'primary' : 'default'" @click="selOwner(2)">{{$t("联通")}}</el-button>
              <el-button size="small" :type="form.phoneOwner == 3 ? 'primary' : 'default'" @click="selOwner(3)">{{$t("电信")}}</el-button>
              <el-button size="small" :type="form.phoneOwner == 4 ? 'primary' : 'default'" @click="selOwner(4)">{{$t("其他")}}</el-button>
            </el-button-group>
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

    <dialog-normal :visible="modalAuthVisible" :title="tipsText" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="formAuth" :rules="rulesAuth" ref="formAuth" label-width="140px">
          <el-form-item :label="$t('功能启用')">
            <el-switch v-model="formAuth.switch" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item :label="$t('提示信息')" prop="content">
            <el-input type="textarea" :rows="4" v-model="formAuth.content" class="width-260"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okAuthDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <drawer-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" accept=".xls,.xlsx" :data="{all: true}" :loading="drawerLoading" :hide-footer="true" size="400px" :title="$t('导入手机号')" :action="uploadAction" :download-file="uploadFile" :result="uploadResult" :process="uploadProcess" @right-close="cancelDrawDialog" @success="uploadSuccess" @error="uploadError">

    </drawer-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import MyPagination from "../../components/MyPagination";
  import mixins from "../../utils/mixins";
  import {common} from "../../utils/api/url";
  import {MessageError, MessageSuccess, MessageWarning} from "../../utils/utils";
  import LayoutTb from "../../components/Layout/LayoutTb";
  import MySelect from "../../components/MySelect";
  import MyUserType from "../../components/utils/MyUserType";
  import MyDatePicker from "../../components/MyDatePicker";
  import MyInputButton from "../../components/search/MyInputButton";
  import DialogNormal from "../../components/utils/dialog/DialogNormal";
  import DrawerRight from "../../components/utils/dialog/DrawerRight";
  import stuAuthValidater from "../../utils/validater/stuAuthValidater";
  export default {
    mixins: [mixins, stuAuthValidater],
    components: {MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal,DrawerRight},
    data(){
      return {
        tableData: [],
        searchDate: [],
        typeList: [],
        selData: [],
        visible: false,
        modalVisible: false,
        modalAuthVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        autoLoading: false,
        drawerVisible: false,
        drawerLoading: false,
        tipsText: this.$t('APP手机号认证失败提示信息'),
        clearTime: '',
        action: '',
        subTitle: '',
        phoneOwner: '',
        status: '',
        searchKey: '',
        uploadFile: common.file_import_modal + "?fileName=" + encodeURIComponent(this.$t("手机号录入模版.xls")),
        uploadAction: common.phone_limit_import,
        uploadResult: {},
        uploadProcess: '',
        form: {
          id: '',
          phone: '',
          name: '',
          no: '',
          des: '',
          phoneOwner: '1'
        },
        formAuth: {
          switch: false,
          content: ''
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
          num: this.num,
          phoneOwner: this.phoneOwner,
          status: this.status,
          searchKey: this.searchKey
        };

        this.$axios.get(common.phone_limit_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initConfig(){
        this.$axios.get(common.phone_limit_tips_get).then(res => {
          if (res.data.data){
            this.formAuth = {
              switch: res.data.data.status,
              content: res.data.data.des
            };
          }
        });
      },
      addInfo(){
        this.modalVisible = true;
      },
      settingInfo(){
        this.initConfig();
        this.modalAuthVisible = true;
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
      handleSelect(data){
        this.form.type = data;
      },
      editInfo(row){
        this.form = {
          id: row.id,
          phone: row.phone,
          name: row.name,
          no: row.phone_no,
          des: row.des,
          phoneOwner: row.phone_owner
        };
        this.modalVisible = true;
      },
      deleteInfo(row){
        this.form.id = row.id;
        this.subTitle = row.phone;
        this.visibleConfim = true;
      },
      importInfo(event){
        this.drawerVisible = true;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.form.id
        };
        url = common.phone_limit_del;
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
        this.modalAuthVisible = false;
      },
      closeDialog(event){
        this.form = {
          id: '',
          phone: '',
          name: '',
          no: '',
          des: '',
          phoneOwner: '1'
        };
        this.formAuth = {
          switch: false,
          content: ''
        };
        this.subTitle = "";
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        if (this.$refs['formAuth']){
          this.$refs['formAuth'].resetFields();
        }
      },
      okDialog(event){
        let url = "";
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              phone: this.form.phone,
              name: this.form.name,
              phoneNo: this.form.no,
              des: this.form.des,
              phoneOwner: this.form.phoneOwner
            };

            if (this.form.id != ""){
              params["id"] = this.form.id;
            }
            url = common.phone_limit_save;
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
      },
      okAuthDialog(event){
        let url = "";
        this.$refs['formAuth'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              status: this.formAuth.switch,
              des: this.formAuth.content
            };

            url = common.phone_limit_tips_set;
            params = this.$qs.stringify(params);
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.modalAuthVisible = false;
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
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'status'){
            this.status = value[item][0];
          }else if (item == 'owner'){
            this.phoneOwner = value[item][0];
          }
        }
        this.init();
      },
      selOwner(type){
        this.form.phoneOwner = type;
      },
      autoNo(){
        this.autoLoading = true;
        this.$axios.get(common.phone_limit_no).then(res => {
          if (res.data.code == 200){
            this.form.no = res.data.data;
          }else {
            MessageError(res.data.desc);
          }
          this.autoLoading = false;
        });
      },
      getRowKeys(row) {
        return row.id
      },
      handleSelectionChange(data){
        this.selData = data;
      },
      mutiOprInfo(type){
        let arr = [];
        let params = {};
        let url = "";
        if (this.selData.length == 0){
          MessageWarning(this.$t("请选择需要操作的数据"));
          return;
        }
        for (let i = 0; i < this.selData.length; i++){
          arr.push(this.selData[i].id);
        }
        if (type == 1){
          params = {
            id: arr.join(),
            statsu: true
          };
          url = common.phone_limit_status;
          this.$axios.get(url, {params: params}).then(res => {
            if (res.data.code == 200){
              MessageSuccess(res.data.desc);
              this.init();
              this.selData = [];
              this.$refs.refTable.clearSelection();
            }else {
              MessageError(res.data.desc);
            }
          });
        }else if (type == 2){
          params = {
            id: arr.join(),
            statsu: false
          };
          url = common.phone_limit_status;
          this.$axios.get(url, {params:params}).then(res => {
            if (res.data.code == 200){
              MessageSuccess(res.data.desc);
              this.init();
              this.selData = [];
              this.$refs.refTable.clearSelection();
            }else {
              MessageError(res.data.desc);
            }
          });
        }else if (type == 3){
          params = {
            id: arr.join()
          };
          url = common.phone_limit_del;
          params = this.$qs.stringify(params);
          this.$axios.post(url, params).then(res => {
            if (res.data.code == 200){
              MessageSuccess(res.data.desc);
              this.init();
              this.selData = [];
              this.$refs.refTable.clearSelection();
            }else {
              MessageError(res.data.desc);
            }
          });
        }
      },
      closeDrawerDialog(event){
        this.uploadProcess = '';
        this.uploadResult = {};
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.uploadProcess = '';
        this.uploadResult = {};
        this.drawerVisible = false;
      },
      uploadSuccess(res, file){
        this.uploadProcess = res.desc;

        if (res.code == 200){
          this.uploadResult = res.data ? res.data : [res.desc];
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
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
</style>
