<template>
  <div class="container">
    <div>
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">应用设计</span>
          </div>
          <my-el-tree ref="myElTree" type="100" :extra-type="$route.query.appName" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div class="layout-top-tab margin-top-5">
            <el-row>
              <el-col :span="8">
                <div>
                  <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("创建服务")}}</el-button>
                  <template v-if="$route.query.id">
                    <span>{{$route.query.appName}}</span>
                  </template>
                </div>
              </el-col>
              <el-col :span="16" class="text-right">
                <div class="layout-inline">
                  <my-select class="layout-item width-150" size="small" :placeholder="$t('类型')" :options="filterAppServerType" :clearable="true" @change="handleTypeChange($event, 1)"></my-select>
                  <my-select class="layout-item width-150" size="small" :placeholder="$t('状态')" :options="filterAppManageStatus" :clearable="true" @change="handleTypeChange($event, 2)"></my-select>
                  <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('名称')" @click="search"></my-input-button>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="margin-top-10">
            <el-table
              ref="refTable"
              :data="tableData"
              header-cell-class-name="custom-table-cell-bg"
              size="medium"
              :max-height="tableHeight2.height"
              style="width: 100%">
              <el-table-column
                align="center"
                :label="$t('创建日期')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{$moment(scope.row.create_time).format("YYYY-MM-DD")}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{$moment(scope.row.create_time).format("YYYY-MM-DD")}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('所属应用')">
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
                prop="form_name"
                :label="$t('名称')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{ scope.row.form_name }}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{ scope.row.form_name }}
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
                    <div class="text-center">{{ serverFormTypeInfo(scope.row.form_type, 'set') }}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{ serverFormTypeInfo(scope.row.form_type, 'set') }}
                      </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('图标')">
                <template slot-scope="scope">
                  <el-image class="table-cell-image-slot" :src="scope.row.form_logo">
                    <div slot="error" class="table-cell-image-slot">
                      <i class="el-icon-picture-outline" style="font-size: 14px"></i>
                    </div>
                  </el-image>
                </template>
              </el-table-column>
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
                  <i v-if="scope.row.enable == true" class="fa fa-stop-circle margin-right-5 color-warning" @click="statusInfo(scope.row, false)"></i>
                  <i v-if="scope.row.enable == false" class="fa fa-play-circle margin-right-5 color-success" @click="statusInfo(scope.row, true)"></i>
                  <i class="fa fa-edit margin-right-5 color-grand" @click="setInfo(scope.row)"></i>
                  <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="60"
                :label="$t('表单')">
                <template slot-scope="scope">
                  <i class="fa fa-cogs margin-right-5 color-grand" @click="formInfo(scope.row, scope.$index)"></i>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </layout-lr>
    </div>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDialog" :visible="drawerVisible" size="600px" :title="$t('服务设置')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <div>
          <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("服务设置")}}</label>
          </span>
          </div>
          <div class="block-item-bg font-size-12">
            <el-form :model="form" :rules="rules" ref="form" label-width="60px">
              <el-form-item :label="$t('名称')" prop="name">
                <el-input v-model="form.name" size="small" class="width-300"></el-input>
              </el-form-item>
              <el-form-item :label="$t('类型')" prop="type">
                <my-select class="layout-item" size="small" :placeholder="$t('类型')" :sel-value="form.type" :options="filterAppServerType" width-style="300" :clearable="true" @change="handleTypeChange($event, 3)"></my-select>
              </el-form-item>
              <el-form-item :label="$t('应用')" prop="app">
                <my-select class="layout-item width-300" size="small" :placeholder="$t('应用')" :sel-value="form.app" :options="apps" width-style="300" :clearable="true" @change="handleTypeChange($event, 4)"></my-select>
              </el-form-item>
              <el-form-item :label="$t('简介')" prop="dept">
                <el-input v-model="form.remarks" type="textarea" :autosize="{ minRows: 5}" maxlength="150" show-word-limit  class="custom-textarea-inner" style="width: 500px; resize: vertical;resize: none;"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <div class="margin-top-20">
          <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("服务图标")}}</label>
          </span>
          </div>
          <div class="block-item-bg font-size-12" style="position: relative">
            <div>
              <el-image :src="form.icon" class="item-img-set-class">
                <div slot="error" class="margin-top-10 text-center">
                  <i class="el-icon-picture-outline" style="font-size: 60px"></i>
                </div>
              </el-image>
            </div>
            <div style="position: absolute;left: 10px;bottom: 12px">
              <upload-square :action="uploadFileUrl" max-size="8" :data="{path: 'applet'}" accept=".png,.jpg,.jpeg" @success="uploadFileSuccess">
                <div class="upload-block-class">
                  <span>{{$t("更换图标")}}</span>
                </div>
              </upload-square>
            </div>
            <div class="moon-clearfix"></div>
          </div>
        </div>

<!--        <div class="margin-top-20">-->
<!--          <div class="color-muted margin-top-5">-->
<!--          <span>-->
<!--            <label class="title-block-tag"></label>-->
<!--            <label class="title-block-text color-warning">{{$t("复制服务(表单)到本应用")}}</label>-->
<!--          </span>-->
<!--          </div>-->
<!--          <div class="block-item-bg font-size-12" style="position: relative">-->
<!--            <el-button type="success" size="mini">{{$t("复制")}}</el-button>-->
<!--          </div>-->
<!--        </div>-->

        <div class="margin-top-20">
          <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("其他操作")}}</label>
          </span>
          </div>
          <div class="block-item-bg font-size-12" style="position: relative">
            <span>
              <label>{{$t("允许评价")}}:</label>
              <el-switch v-model="form.evaluate" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            </span>
            <span class="margin-left-10">
              <label>{{$t("允许评分")}}:</label>
              <el-switch v-model="form.scope" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            </span>
            <span class="margin-left-10">
              <label>{{$t("首页推荐")}}:</label>
              <el-switch v-model="form.recommend" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            </span>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="mini" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="mini" type="success" @click="okAppDrawDialog">{{$t("应用")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" :show-close="true" :hide-footer="!showFooter" @changeDrawer="closeDialog" @opened="openedForm" :visible="drawerForm" size="85%">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <span class="tab-class font-bold" :class="activeName == 'form' ? 'color-grand' : ''" @click="handleClick('form')">
            <i class="fa fa-file"></i>
            {{$t('表单设计')}}
          </span>
<!--          <span class="tab-class font-bold margin-left-5" v-if="serverDataItem.form_type != 0 && serverDataItem.form_type != 2" :class="activeName == 'flow' ? 'color-grand' : ''" @click="handleClick('flow')">-->
<!--            <i class="fa fa-line-chart"></i>-->
<!--            {{$t('流程设计')}}-->
<!--          </span>-->
<!--          <span class="tab-class font-bold margin-left-5" :class="activeName == 'set' ? 'color-grand' : ''" @click="handleClick('set')">-->
<!--            <i class="fa fa-cog"></i>-->
<!--            {{$t('表单设置')}}-->
<!--          </span>-->
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div v-if="activeName == 'form'"
             v-loading="formLoading"
             element-loading-text="拼命加载中"
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.01)">
          <fc-designer ref="designer" :style="drawHeight4"/>
        </div>
        <div v-if="activeName == 'flow'" style="position: relative">
          <my-form-flow ref="flow" :formId="serverDataItem" :flow-data="flowListData" :form="flowFormData" @versionClick="versionClick"></my-form-flow>
        </div>
        <div v-if="activeName == 'set'">
          <my-form-set :formId="serverDataItem"></my-form-set>
        </div>
      </div>
      <div slot="footer">
        <el-row>
          <el-col :span="12" class="text-left padding-lr-10">
            <el-button v-if="activeName == 'form'" size="mini" type="warning" :loading="btnLoading" @click="sendTempShop">
              <i class="fa fa-send"></i>
              {{$t("发布到模版中心")}}
            </el-button>
            <span v-else>&nbsp;</span>
          </el-col>
          <el-col :span="12">
            <div class="text-right padding-lr-10">
              <el-button size="mini" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
              <el-button size="mini" type="success" :loading="btnLoading" @click="okFormDrawDialog()">{{$t("保存")}}</el-button>
              <el-button v-if="activeName == 'flow'" size="mini" type="warning" :loading="btnNewLoading" @click="okFormDrawDialog('new')">{{$t("保存为新版本")}}</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" :hideFooter="true" @changeDrawer="closeVersionDialog" :visible="drawerVersion" size="600px" :title="$t('版本管理')" @right-close="cancelVersionDrawDialog">
      <div slot="content" class="color-muted">
        <el-table
          ref="refTable"
          :data="flowVersionData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          style="width: 100%">
          <el-table-column
            align="center"
            :label="$t('版本名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.version_name}}</div>
                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.version_name}}
                    </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('状态')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <label v-if="serverDataItem.form_process_id == scope.row.id && versionStatus == ''" class="color-success">{{$t("当前版本")}}</label>
                  <label v-if="serverDataItem.form_process_id != scope.row.id && versionStatus == ''" class="color-danger">{{$t("未启用")}}</label>
                  <label v-if="serverDataItem.form_process_id != scope.row.id && versionStatus == 'edit'" class="color-danger">--</label>
                  <label v-if="serverDataItem.form_process_id == scope.row.id && versionStatus == 'edit'" class="color-warning">{{$t("编辑中")}}</label>
                </div>
                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <label v-if="serverDataItem.form_process_id == scope.row.id && versionStatus == ''" class="color-success">{{$t("当前版本")}}</label>
                  <label v-if="serverDataItem.form_process_id != scope.row.id && versionStatus == ''" class="color-danger">{{$t("未启用")}}</label>
                  <label v-if="serverDataItem.form_process_id != scope.row.id && versionStatus == 'edit'" class="color-danger">--</label>
                  <label v-if="serverDataItem.form_process_id == scope.row.id && versionStatus == 'edit'" class="color-warning">{{$t("编辑中")}}</label>
                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            width="100"
            align="center"
            :label="$t('操作')">
            <template slot-scope="scope">
              <i class="fa fa-edit margin-right-5 color-success" @click="editFlowInfo(scope.row)"></i>
              <i class="fa fa-trash margin-right-5 color-danger" @click="delFlowInfo(scope.row)"></i>
              <i v-if="serverDataItem.form_process_id != scope.row.id" class="fa fa-cog margin-right-5 color-grand" @click="currentFlowInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </drawer-layout-right>
    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import appCreateValidater from "~/utils/validater/appCreateValidater";
  import MySelect from "~/components/MySelect";
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";
  import UploadSquare from "~/components/utils/upload/UploadSquare";
  import MyElTree from "~/components/tree/MyElTree";
  import TestForm from "~/formJs/form/TestForm";
  import MyFormSet from "~/components/form/MyFormSet";
  import MyFormFlow from "~/components/form/MyFormFlow";

  export default {
    components: {MyFormFlow, MyFormSet, MyElTree, UploadSquare, DrawerLayoutRight, MySelect},
    mixins: [mixins,appCreateValidater],
    data(){
      return {
        tableData: [],
        collegeList: [],
        flowVersionData: [],
        apps: [],
        types: [],
        flowListData: [],
        formFieldList: [],
        flowFormData: {},
        subTitle: '',
        collegeData: '',
        searchAppId: '',
        searchKey: '',
        searchType: '',
        searchStatus: '',
        detailData: '',
        serverImg: '',
        uploadFileUrl: common.upload_file,
        activeName: 'form',
        dialogLoading: false,
        formLoading: false,
        dialogApp: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerForm: false,
        btnLoading: false,
        btnNewLoading: false,
        showFooter: true,
        drawerVersion: false,
        versionStatus: '',
        serverDataItem: '',
        serverDataIndex: '',
        form: {
          id: '',
          name: '',
          type: '',
          app: '',
          icon: '',
          remarks: '',
          scope: true,
          evaluate: true,
          recommend: false
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
      this.init();
      this.initApp();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          appletId: this.$route.query.id ? this.$route.query.id : this.searchAppId,
          formType: this.searchType,
          enable: this.searchStatus,
          searchKey: this.searchKey
        };
        this.$axios.get(common.server_list_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initApp(){
        let params = {};
        this.$axios.get(common.server_applet_all_list, {params: params}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                text: res.data.data[i].appletName,
                value: res.data.data[i].id+'',
                label: res.data.data[i].appletName,
                enable: res.data.data[i].enable
              });
            }
            this.apps = array;
          }
        });
      },
      initVersion(type){
        let params = {
          page: 1,
          num: 9999,
          formId: this.serverDataItem.id,
        };
        this.$axios.get(common.server_form_template_form_process_page, {params: params}).then(res => {
          if (res.data.data){
            if (type == 'current'){
              for (let i = 0 ; i < res.data.data.list.length; i++){
                let processId = res.data.data.list[i].id;
                if (processId == this.serverDataItem.form_process_id){
                  let formProcess = JSON.parse(res.data.data.list[i].form_process);
                  let ntype = '';
                  this.flowListData = [];
                  for (let j = 0; j < formProcess.length; j++){
                    let users = [];
                    if (formProcess[j].ntype == 'handle'){
                      ntype = 'audit';
                    }else if (formProcess[j].ntype == 'cc'){
                      ntype = 'send';
                    }
                    let obj = {
                      type: formProcess[j].nChildType,
                      extra: ntype,
                      name: formProcess[j].nname,
                      hType: formProcess[j].htype,
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
                    };

                    for (let k = 0; k < formProcess[j].hid.length; k++){
                      users.push({
                        user_id: formProcess[j].hid[k],
                        real_name: formProcess[j].hname[k],
                      });
                    }
                    obj['users'] = users;

                    this.flowListData.push(obj);
                  }
                  let formObj = {
                    id: res.data.data.list[i].id,
                    auditType: '',
                    name: res.data.data.list[i].version_name,
                    allowBack: res.data.data.list[i].allow_revoke,
                    urge: res.data.data.list[i].allow_urge,
                    autoAudit: res.data.data.list[i].allow_auto,
                    merge: res.data.data.list[i].allow_merge
                  };
                  this.flowFormData = formObj;
                }
              }
            }
            this.flowVersionData = res.data.data.list;
            // this.total = res.data.data.totalCount;
            // this.num = res.data.data.num;
            // this.page = res.data.data.currentPage;
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
      nodeClick(data){
        this.searchAppId = data.id;
        this.page = 1;
        this.init();
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init(data);
      },
      addInfo(){
        this.activeName = 'form';
        this.drawerVisible = true;
      },
      handleTypeChange(event, type){
        if (type == 1){
          this.searchType = event;
        }else if (type == 2){
          this.searchStatus = event;
        }else if (type == 3){
          this.form.type = event;
        }else if (type == 4){
          this.form.app = event;
        }
      },
      handleClick(tab){
        this.activeName = tab;
        if (tab == 'set'){
          this.showFooter = false;
        }else if (tab == 'form'){
          this.openedForm();
          this.showFooter = true;
        }else {
          this.showFooter = true;
        }
      },
      deleteInfo(item){
        this.form.id = item.id;
        this.visibleConfim = true;
      },
      setInfo(item){
        this.detailData = item;
        this.form = {
          id: item.id,
          name: item.form_name,
          type: item.form_type +'',
          app: item.applet_id +'',
          icon: item.form_logo,
          remarks: item.des,
          scope: item.allow_score,
          evaluate:item.allow_appraise,
          recommend: item.recommend
        };
        this.drawerVisible = true;
      },
      statusInfo(item, type){
        let params = {
          id: item.id,
          enable: type
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_list_enable, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      formInfo(item, index){
        this.serverDataItem = item;
        this.serverDataIndex = index;
        this.initVersion('current');
        this.drawerForm = true;
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
      closeVersionDialog(event){
        this.flowVersionData = [];
        this.drawerVersion = event;
      },
      closeDialog(event){
        this.form = {
          id: '',
          name: '',
          type: '',
          app: '',
          icon: '',
          remarks: '',
          scope: true,
          evaluate:true,
          recommend: false
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
        this.resetCasadeSelector('SelectorCollege');
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        if (this.$refs.designer){
          this.$refs.designer.setRule([]);
          this.$refs.designer.setOption(this.formOption);
        }
        this.drawerVisible = event;
        this.serverDataItem = '';
        this.serverDataIndex = '';
        this.activeName = 'form';
        this.showFooter = true;
        this.init();
        this.btnLoading = false;
        this.drawerForm = false;
      },
      cancelVersionDrawDialog(){
        this.drawerVersion = false;
      },
      cancelDrawDialog(){
        this.detailData = '';
        this.drawerVisible = false;
        this.drawerForm = false;
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
        url = common.server_list_del;
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
      uploadFileSuccess(res, file){
        if (res.code == 200){
          this.form.icon = res.data.url;
        }else {

        }
      },
      versionClick(){
        this.initVersion();
        //this.versionStatus = '';
        this.drawerVersion = true;
      },
      okAppDrawDialog() {
        let url = '';
        this.$refs['form'].validate((valid) => {
          if (valid) {
            if (this.form.icon == ""){
              MessageWarning(this.$t("请设置图标"));
              return;
            }
            this.dialogLoading = true;
            let params = {
              formName:  this.form.name,
              appletId: this.form.app,
              formType: this.form.type,
              formLogo: this.form.icon,
              allowAppraise: this.form.evaluate,
              allowScore: this.form.scope,
              recommend: this.form.recommend,
              des: this.form.remarks,
            };
            if (this.form.id != ""){
              params['id'] = this.form.id;
            }
            url = common.server_list_save;
            params = this.$qs.stringify(params);
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200) {
                this.drawerVisible = false;
                this.init();
                MessageSuccess(res.data.desc);
              } else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
            });
          }
        });
      },
      sendTempShop(){
        let url = '';
        let params = {
          id: this.serverDataItem.id,
          content: JSON.stringify(this.$refs.designer.getRule())
        };
        url = common.server_form_template_shop;
        params = this.$qs.stringify(params);
        this.btnLoading = true;
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200) {
            this.init();
            MessageSuccess(res.data.desc);
          } else {
            MessageError(res.data.desc);
          }
          this.btnLoading = false;
        });
      },
      okFormDrawDialog(type) {
        let url = '';
        let rules = {};
        if (this.activeName == 'form'){
          rules = {
            rule: this.$refs.designer.getRule(),
            option: this.$refs.designer.getOption()
          };
          let params = {
            id: this.serverDataItem.id,
            content: JSON.stringify(rules)
          };
          url = common.server_form_template_update;
          params = this.$qs.stringify(params);
          this.btnLoading = true;
          this.$axios.post(url, params).then(res => {
            if (res.data.code == 200) {
              this.init();
              this.$set(this.serverDataItem, 'form_content' , JSON.stringify(rules));
              MessageSuccess(res.data.desc);
            } else {
              MessageError(res.data.desc);
            }
            this.btnLoading = false;
          });
        }else if (this.activeName == 'flow'){
          let flowData = this.$refs.flow.flowData;
          let flowForm = this.$refs.flow.form;
          let ntype = '';
          let htype = '';
          let hid = [];
          let hname = [];
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
            if (flowData[i].extra == 'audit'){
              ntype = 'handle';
            }else if (flowData[i].extra == 'send'){
              ntype = 'cc';
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
            let obj = {
              ntype: ntype,
              nChildType: flowData[i].type,
              nname: flowData[i].name,
              horder: i + 1,
              htype: htype,
              hid: hid,
              hname: hname,
              andor: flowData[i].andor,
              sign: flowData[i].waitName,
              agreed1: flowData[i].allowShow,
              agreed2: flowData[i].allowMuti,
              notagreed1: flowData[i].rejectShow,
              notagreed2: flowData[i].rejectMuti,
              trans1: flowData[i].transferShow,
              trans2: flowData[i].transferMuti,
              right1: flowData[i].right1,
              right2: flowData[i].right2,
            }
            flowDataArray.push(obj);
          }
          flowDataOjb = {
            versionName: flowForm.name,
            formId: this.serverDataItem.id,
            formProcess: JSON.stringify(flowDataArray),
            allowRevoke: flowForm.allowBack,
            allowUrge: flowForm.urge,
            allowAuto: flowForm.autoAudit,
            allowMerge: flowForm.merge
          };
          if (flowForm.id != '' && type != 'new'){
            flowDataOjb['id'] = flowForm.id;
          }
          if (type == 'new' || this.versionStatus == "edit"){
            flowDataOjb['current'] = false;
          }else {
            flowDataOjb['current'] = true;
          }

          flowDataOjb = this.$qs.stringify(flowDataOjb);
          this.btnLoading = true;
          this.$axios.post(common.server_form_template_form_process_save, flowDataOjb, {loading: false}).then(res => {
            if (res.data.code == 200){
              MessageSuccess(res.data.desc);
            }else {
              MessageError(res.data.desc);
            }
            this.btnLoading = false;
          });

        }if (this.activeName == 'set'){

        }
      },
      editFlowInfo(data){
        this.drawerVersion = false;
        this.versionStatus = 'edit';
        this.serverDataItem.form_process_id = data.id;
        this.initVersion('current');
      },
      delFlowInfo(data){
        let params = {
          id: data.id
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_form_template_form_process_del, params).then(res => {
          if (res.data.code == 200){
            this.initVersion();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      currentFlowInfo(data){
        let params = {
          id: this.serverDataItem.id,
          processId: data.id
        };
        this.versionStatus = '';
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_form_template_form_process_current, params).then(res => {
          if (res.data.code == 200){
            this.tableData[this.serverDataIndex].form_process_id = data.id;
            this.serverDataItem.form_process_id = data.id;
            this.initVersion('current');
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      }
    },
    watch: {
      '$route': function (to, from) {//监听路由变化
        this.$nextTick(() => {
          this.searchKey = '';
          this.searchAppId = '';
          this.page = 1;
          this.$refs.myElTree.initInfo();
          this.init();
        });
      }
    }
  }
</script>

<style scoped>
.container {

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
.upload-block-class{
  text-align: center;
  font-size: 12px;
  background: #000000;
  width: 100px;
  padding:5px 0px;
  color: #FFFFFF;
}
.item-img-class{
  height: 50px;
  width: 50px
}
.item-img-set-class{
  height: 100px;
  width: 100px
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
