<template>
  <div class="container">
    <div>
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">应用管理</span>
          </div>
          <my-el-tree v-if="mainMenu == '1'" type="4" sub-type="" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
          <my-el-tree ref="appRef" v-if="mainMenu == '2'" type="140" :extra-type="appName" :currentNodeKey="currentNodeKey" :default-expanded-keys="defaultExpandedKeys" :show-campus="false" @node-click="nodeFDClick" @all-click="nodeFDClick"></my-el-tree>
        </div>

        <div slot="right">
          <div class="layout-top-tab margin-top-5">
            <el-row>
              <el-col :span="8">
                <el-button v-if="mainMenu == '1'" size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("创建应用")}}</el-button>
                <el-button v-else size="small" type="text" @click="returnMain($event)">
                  <i class="fa fa-arrow-left"></i>
                  {{$t("返回")}}
                </el-button>
                <template v-if="mainMenu == '2'">
<!--                  <el-button v-if="formId == '1'" size="small" type="primary"  icon="el-icon-plus" @click="addAccountInfo($event, 1)">{{$t("添加账户")}}</el-button>-->
                  <el-button v-if="formId == '1'" size="small" type="primary"  icon="el-icon-plus" @click="addAccountInfo($event, 1)">{{$t("添加账户")}}</el-button>
                  <el-button v-if="formId == '2'" size="small" type="primary"  icon="el-icon-plus" @click="addAccountInfo($event, 2)">{{$t("添加账户")}}</el-button>
                  <el-button v-if="formId == '3'" size="small" type="primary"  icon="el-icon-plus" @click="addMerchatInfo($event, 3)">{{$t("新增")}}</el-button>
                </template>
              </el-col>
              <el-col :span="16" class="text-right">
                <div v-if="mainMenu == '1'" class="layout-inline">
                  <my-select class="layout-item width-150" size="small" :placeholder="$t('类型')" :options="filterAppManageType" :clearable="true" @change="handleTypeChange($event, 1)"></my-select>
                  <my-select class="layout-item width-150" size="small" :placeholder="$t('状态')" :options="filterAppManageStatus" :clearable="true" @change="handleTypeChange($event, 2)"></my-select>
                  <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('名称/编号')" @click="search"></my-input-button>
                </div>
                <div v-else>
                  <div class="layout-inline">
                    <my-cascader class="layout-item" ref="SelectorDept" :clearable="true" :placeholder="$t('请选择部门')" size="small" width-style="180" :collapse-tags="true" :sel-value="searchDetailDept" type="4" sub-type="" @change="handleSelectDept($event, 'dept')"></my-cascader>
                    <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('请输入信息')" @click="searchMoneyDetail" class="layout-item"></my-input-button>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="margin-top-10">
            <el-table
              v-if="mainMenu == 1"
              ref="refTable"
              :data="tableData"
              header-cell-class-name="custom-table-cell-bg"
              size="medium"
              :max-height="tableHeight2.height"
              style="width: 100%">
              <el-table-column
                align="center"
                :label="$t('名称')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{ scope.row.applet_name }}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{ scope.row.applet_name }}
                      </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('部门')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="right" popper-class="custom-table-right-popover">
                    <div class="text-center" style="max-height: 150px;overflow-y: auto">
                      <div v-for="(item, index) in scope.row.department_names.split(',')">
                        <span>{{item}}</span>
                      </div>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class" style="width: 120px;display: inline-block">
                        {{ scope.row.department_names }}
                      </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('类型')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{ serverTypeInfo(scope.row.applet_type, 'set') }}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{ serverTypeInfo(scope.row.applet_type, 'set') }}
                      </span>
                  </el-popover>
                </template>
              </el-table-column>
<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="appName"-->
<!--                :label="$t('类别')">-->
<!--                <template slot-scope="scope">-->
<!--                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">-->
<!--                    <div class="text-center">{{ scope.row.category_name }}</div>-->
<!--                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">-->
<!--                        {{ scope.row.category_name }}-->
<!--                      </span>-->
<!--                  </el-popover>-->
<!--                </template>-->
<!--              </el-table-column>-->
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('状态')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.enable" class="color-success">{{$t("已发布")}}</label>
                      <label v-if="!scope.row.enable" class="color-warning">{{$t("待发布")}}</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.enable" class="color-success">{{$t("已发布")}}</label>
                      <label v-if="!scope.row.enable" class="color-warning">{{$t("待发布")}}</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="120"
                :label="$t('操作')">
                <template slot-scope="scope">
                  <i v-if="scope.row.enable" title="启用" class="fa fa-stop-circle color-warning margin-right-5" @click="statusInfo(scope.row, false)"></i>
                  <i v-if="!scope.row.enable" title="禁用" class="fa fa-play-circle color-success margin-right-5" @click="statusInfo(scope.row, true)"></i>
                  <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row)"></i>
                  <i v-if="scope.row.is_default == false" class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
                  <i v-if="scope.row.is_default == true" class="fa fa-cog color-success" @click="settingInfo(scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="60"
                :label="$t('服务')">
                <template slot-scope="scope">
                  <i class="fa fa-chevron-circle-right margin-right-5 color-grand" @click="formInfo(scope.row)"></i>
                </template>
              </el-table-column>
            </el-table>

            <template v-else-if="mainMenu == 2">
              <user-bank-account-table v-if="formId == 1" :table-data="tableDetailData" :table-height="tableHeight2.height" @editInfo="editDetailInfo($event, formId)"  @deleteInfo="deleteDetailInfo($event, formId)"></user-bank-account-table>
              <comp-bank-account-table v-if="formId == 2" :table-data="tableDetailData" :table-height="tableHeight2.height" @editInfo="editDetailInfo($event, formId)"  @deleteInfo="deleteDetailInfo($event, formId)"></comp-bank-account-table>
              <merchat-client-table v-if="formId == 3" :table-data="tableDetailData" :table-height="tableHeight2.height" @editInfo="editDetailInfo($event, formId)"  @deleteInfo="deleteDetailInfo($event, formId)"></merchat-client-table>
            </template>
          </div>
          <div class="layout-right-footer text-right">
            <my-pagination v-if="mainMenu == 1" :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
            <my-pagination v-if="mainMenu == 2" :total="totalDetail" :current-page="pageDetail" :page-size="numDetail" @currentPage="currentDetailPage" @sizeChange="sizeDetailChange" @jumpChange="jumpDetailPage" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </layout-lr>
    </div>

    <dialog-normal top="10vh" :visible="dialogApp" :title="$t('应用设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('应用名称')" prop="appName">
            <el-input v-model="form.appName" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('应用类型')" prop="type">
            <my-select :sel-value="form.type" :options="filterAppManageType" width-style="260" @change="handleFormChange($event, 1)"></my-select>
          </el-form-item>
<!--          <el-form-item :label="$t('应用类别')" prop="category">-->
<!--&lt;!&ndash;            <my-select :sel-value="form.category" :options="categorys" width-style="260" @change="handleFormChange($event, 2)"></my-select>&ndash;&gt;-->
<!--            <el-select v-model="form.category" :placeholder="$t('请选择')" @change="handleFormChange($event, 2)" style="width: 260px">-->
<!--              <el-option v-for="item in categorys" :key="item.value" :label="item.label" :value="item.value" :disabled="item.enable == false"></el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->
          <el-form-item>
            <span slot="label" class="custon-form-start-tag">{{$t('归属部门')}}</span>
            <my-cascader ref="SelectorCollege" :sel-value="form.dept" :props="{multiple: true}" type="4" sub-type="id" width-style="260" @change="handleCascaderChange($event)"></my-cascader>
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

    <dialog-normal top="10vh" :visible="dialogDetail" :title="$t('账号设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <template v-if="formId == 1">
          <el-form :model="formTeacherAccount" :rules="rulesTeacher" ref="formTeacherAccount" label-width="140px">
            <el-form-item :label="$t('姓名')">
              <el-popover
                popper-class="custom-popper-class-form"
                placement="top"
                width="700"
                trigger="click"
                @show="handleShowTeacher(1)">
                <div>
                  <teacher-tree-and-list ref="popverCreateRef" :sel-value="formTeacherAccount.userId" @change="handleSelCreateUser($event, 1)"></teacher-tree-and-list>
                </div>
                <el-button slot="reference" type="success" plain size="small">{{$t("添加")}}</el-button>
              </el-popover>
              <span v-if="formTeacherAccount.name != ''" class="color-warning margin-left-10">
              <i class="fa fa-user"></i>
              {{formTeacherAccount.name}}
            </span>
            </el-form-item>
            <el-form-item :label="$t('开户行')" prop="bankName">
              <el-input v-model="formTeacherAccount.bankName" class="width-260"></el-input>
            </el-form-item>
            <el-form-item :label="$t('户名')" prop="bankAccountName">
              <el-input v-model="formTeacherAccount.bankAccountName" class="width-260"></el-input>
            </el-form-item>
            <el-form-item :label="$t('账号')" prop="bankAccount">
              <el-input v-model="formTeacherAccount.bankAccount" class="width-260"></el-input>
            </el-form-item>
          </el-form>
        </template>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okAccountDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import MyInputButton from "~/components/search/MyInputButton";
  import MySelect from "~/components/MySelect";
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import appManageValidater from "~/utils/validater/appManageValidater";
  import MyCascader from "~/components/utils/select/MyCascader";
  import MyElTree from "~/components/tree/MyElTree";
  import UserBankAccountTable from "~/components/utils/table/UserBankAccountTable";
  import CompBankAccountTable from "~/components/utils/table/CompBankAccountTable";
  import MerchatClientTable from "~/components/utils/table/MerchatClientTable";
  export default {
    mixins: [mixins,appManageValidater],
    components: {
      MerchatClientTable,
      CompBankAccountTable, UserBankAccountTable, MyElTree, MyCascader, MySelect, MyInputButton},
    data(){
      return {
        pageDetail: 1,
        numDetail: 20,
        totalDetail: 0,
        mainMenuType: 1,
        subMenuType: 4,
        mainMenu: 1,
        tableData: [],
        tableDetailData: [],
        collegeList: [],
        categorys: [],
        types: [],
        subTitle: '',
        collegeData: '',
        searchKey: '',
        searchMoneyKey: '',
        searchType: '',
        searchDetailKey: '',
        searchDetailDept: [],
        searchStatus: '',
        appName: '',
        currentNodeKey: '',
        defaultExpandedKeys: [],
        formId: '',
        formName: '',
        detailId: '',
        dialogLoading: false,
        dialogApp: false,
        visibleConfim: false,
        dialogDetail: false,
        dialogAccount: false,
        dialogType: '',
        form: {
          id: '',
          appName: '',
          type: '',
          category: '',
          dept: []
        },
        formTeacherAccount: {
          id: '',
          name: '',
          dept: '',
          bankName: '',
          bankAccountName: '',
          bankAccount: '',
          userId: ''
        }
      }
    },
    created() {
      this.init();
      //this.initCategory();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          departmentPath: this.collegeData,
          appletType: this.searchType,
          enable: this.searchStatus,
          searchKey: this.searchKey
        };
        this.$axios.get(common.server_applet_list, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initFD(){
        let url = "";
        let params = {
          page: this.pageDetail,
          num: this.numDetail,
          formId: this.formId,
          searchKey: this.searchDetailKey,
          departmentPath: this.searchDetailDept.length > 0 ? this.searchDetailDept[this.searchDetailDept.length-1] : ''
        };
        if (this.formId == 1){
          url = common.teacher_account_page;
        }
        console.log(params);
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            this.tableDetailData = res.data.data.list;
            this.totalDetail = res.data.data.totalCount;
            this.numDetail = res.data.data.num;
            this.pageDetail = res.data.data.currentPage;
          }
        });
      },
      initType(){

      },
      initCategory(){
        let params = {};
        this.$axios.get(common.server_type_all_list, {params: params}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                text: res.data.data[i].categoryName,
                value: res.data.data[i].id+'',
                label: res.data.data[i].categoryName,
                enable: res.data.data[i].enable
              });
            }
            this.categorys = array;
          }
        });
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
      sizeDetailChange(event){
        this.pageDetail = 1;
        this.numDetail = event;
        this.initFD();
      },
      currentDetailPage(event){
        this.pageDetail = event;
        this.initFD();
      },
      jumpDetailPage(data){
        this.pageDetail = data;
        this.initFD();
      },
      nodeClick(data){
        this.collegeData = data.department_path;
        this.page = 1;
        this.init();
      },
      nodeFDClick(data){
        this.formId = "";
        this.pageDetail = 1;

        if (data.unit == 2){
          this.formId = data.id;
          this.formName = data.label;
          this.initFD();
        }
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init(data);
      },
      searchMoneyDetail(data){
        this.searchDetailKey = data.input;
        this.pageDetail = 1;
        this.initFD();
      },
      setTeacherName(){
        this.dialogAccount = true;
      },
      handleShowTeacher(type){
        if (type == 1){
          this.$refs.popverCreateRef._handleOpen();
        }
      },
      handleSelCreateUser(data, type){
        if (type == 1){
          this.formTeacherAccount.name = data.real_name;
          this.formTeacherAccount.userId = data.user_id;
        }
      },
      addInfo(){
        this.dialogApp = true;
      },
      addAccountInfo(event, type){
        this.dialogType = type;
        this.dialogDetail = true;
      },
      addMerchatInfo(){
        this.dialogDetail = true;
      },
      editDetailInfo(item, type){
        if (type == 1){
          this.formTeacherAccount = {
            id: item.id,
            name: item.real_name,
            dept: '',
            bankName: item.bank_name,
            bankAccountName: item.account_name,
            bankAccount: item.account_num,
            userId: item.user_id
          }
        }
        this.dialogDetail = true;
      },
      myInfo(){

      },
      editInfo(item){
        let deptArr = [];
        let params = {
          id: item.id
        };
        this.form = {
          id: item.id,
          appName: item.applet_name,
          type: item.applet_type + '',
          category: item.category_id + ''
        }
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_applet_deptinfo, params).then(res => {
          if (res.data.code == 200){
            for (let i = 0; i < res.data.data.length; i++){
              let dept = [];
              let array = res.data.data[i].departmentIds.split(",");
              for (let j = 0; j < array.length; j++){
                dept.push(parseInt(array[j]));
              }
              deptArr.push(dept);
            }
            this.form.dept = deptArr;
          }
          this.dialogApp = true;
        });
      },
      deleteInfo(item){
        this.form.id = item.id;
        this.visibleConfim = true;
      },
      deleteDetailInfo(item, type){
        this.detailId = item.id;
        this.visibleConfim = true;
      },
      async settingInfo(item){
        this.mainMenu = 2;
        this.pageDetail = 1;
        this.appName = ''+item.id;
        this.appletId = item.id;
        this.formId = item.id;
        this.formName = item.formName;
        this.searchDetailType = item.applet_type;
        await this.getAppletFDServerInfo();
        let data = this.dataAppletFDServer;
        if (data && data.length > 0 && data[0]['children']){
          this.formId = data[0]['children'][0].id;
          this.formName = data[0]['children'][0].label;
          this.defaultExpandedKeys = [data[0].id, data[0]['children'][0].id];
          this.currentNodeKey = data[0]['children'][0].id;
        }
        this.initFD();
      },
      statusInfo(item, type){
        let params = {
          id: item.id,
          enable: type
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_applet_enable, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      formInfo(item){
        this.$router.push({
          path: '/appletInfo/app/appCreate',
          query: {
            id: item.id,
            appName: item.applet_name,
            top: 'appletInfo',
            key: 'appCreate',
            sub: 'appCenter'
          }
        });
      },
      returnMain(){
        this.mainMenu = 1;
        this.page = 1;
        this.departmentPath = '';
        this.appletType = '';
        this.enable = '';
        this.searchKey = '';
        this.formId = '';
        this.searchDetailKey = '';
        this.searchDetailDept = [];
        this.resetCasadeSelector('SelectorDept');
        this.init();
      },
      handleSelectDept(data, type, type2){
        if (type == 'dept'){
          this.searchDetailDept = data;
        }else if (type == 'dept2'){
          this.form.dept = data[data.length - 1];
        }
      },
      handleCascaderChange(data){
        this.form.dept = data;
      },
      handleTypeChange(event, type){
        if (type == 1){
          this.searchType = event;
        }else if (type == 2){
          this.searchStatus = event;
        }
      },
      handleFormChange(event, type){
        if (type == 1){
          this.form.type = event;
        }else if (type == 2){
          this.form.category = event;
        }
      },
      cancelDialog(){
        this.dialogApp = false;
        this.dialogDetail = false;
      },
      okDialog(){
        let url = '';
        this.$refs['form'].validate((valid) => {
          if (valid) {
            let deptArrStr = '';
            let deptArr = [];
            if (this.form.dept.length == 0){
              MessageWarning(this.$t("请选择部门"));
              return;
            }
            for (let i = 0; i < this.form.dept.length; i++){
              deptArrStr += this.form.dept[i].join();
              if (this.form.dept.length - 1 != i){
                deptArrStr += '|';
              }
            }
            let params = {
              appletName: this.form.appName,
              appletType: this.form.type,
              //categoryId: this.form.category,
              departmentIds: deptArrStr,
            };
            if (this.form.id != ''){
              params['id'] = this.form.id;
            }
            url = common.server_applet_save;
            params = this.$qs.stringify(params);
            this.dialogLoading = true;
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.dialogApp = false;
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
      okAccountDialog(){
        let url = '';
        this.$refs['formTeacherAccount'].validate((valid) => {
          if (valid) {
            if (this.formTeacherAccount.userId == ""){
              MessageWarning(this.$t("请设置姓名！"));
              return;
            }

            let params = {
              bankName: this.formTeacherAccount.bankName,
              accountName: this.formTeacherAccount.bankAccountName,
              accountNum: this.formTeacherAccount.bankAccount,
              userId: this.formTeacherAccount.userId
            };
            if (this.formTeacherAccount.id != ''){
              params['id'] = this.formTeacherAccount.id;
            }
            url = common.teacher_account_save;
            params = this.$qs.stringify(params);
            this.dialogLoading = true;
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.dialogDetail = false;
                this.initFD();
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
        this.form = {
          id: '',
          appName: '',
          type: '',
          category: '',
          dept: []
        };
        this.formTeacherAccount = {
          id: '',
          name: '',
          dept: '',
          bankName: '',
          bankAccountName: '',
          bankAccount: '',
          userId: ''
        };
        this.subTitle = "";
        this.detailId = "";
        this.$set(this.form,'dept', []);
        this.resetCasadeSelector('SelectorCollege');
        //this.resetCasadeSelector('SelectorDept2');
        this.dialogDetail = false;
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.form.id
        }
        url = common.server_applet_delete;
        if (this.mainMenu == 2){
          params = {
            id: this.detailId
          }
          console.log(this.detailId);
          if (this.formId == 1){
            url = common.teacher_account_del;
          }
        }
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            if (this.mainMenu == 2){
              if (this.formId == 1){
                this.initFD();
              }
            }else {
              this.init();
            }
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.visibleConfim = false;
          this.dialogLoading = false;
        });
      }
    }
  }
</script>

<style scoped>
.custon-form-start-tag:before {
  content: '*';
  color: #F56C6C;
  margin-right: 4px;
}
</style>
