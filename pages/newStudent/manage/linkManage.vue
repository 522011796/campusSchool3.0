<template>
  <div class="container">
    <div v-if="subPageVisible == true">
      <link-dorm-manage v-if="subPageType == 2" :page-title="subPageTitle" :link-id="linkId" :process-id="processid" @returnClick="returnClick"></link-dorm-manage>
      <link-pay-manage v-if="subPageType == 3" :page-title="subPageTitle" :link-id="linkId" :process-id="processid" @returnClick="returnClick"></link-pay-manage>
      <link-station-manage v-if="subPageType == 0" :page-title="subPageTitle" :link-id="linkId" :process-id="processid" @returnClick="returnClick"></link-station-manage>
    </div>
    <div v-if="subPageVisible == false">
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">环节管理</span>
          </div>
          <my-el-tree ref="myElTree" type="120" :show-campus="false" :currentNodeKey="currentNodeKey" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div class="layout-top-tab margin-top-5">
            <el-row>
              <el-col :span="16">
                <div class="layout-inline">
<!--                  <my-cascader class="layout-item" size="small" ref="SelectorCollege" :placeholder="$t('部门选择')" :sel-value="searchCascader" type="4" sub-type="id" width-style="160" @change="handleCascaderChange($event)"></my-cascader>-->
                  <my-select class="layout-item width-150" size="small" :sel-value="searchParam" :placeholder="$t('属性')" :options="filterProcessLinkParamType" :clearable="true" @change="handleTypeChange($event, 1)"></my-select>
                  <my-select class="layout-item width-150" size="small" :sel-value="searchType" :placeholder="$t('类型')" :options="filterFlowParamType" :clearable="true" @change="handleTypeChange($event, 2)"></my-select>
<!--                  <my-select class="layout-item width-150" size="small" :sel-value="searchStatus" :placeholder="$t('状态')" :options="filterAppManageStatus" :clearable="true" @change="handleTypeChange($event, 2)"></my-select>-->
                </div>
              </el-col>
              <el-col :span="8" class="text-right">
                <div class="layout-inline">
                  <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('环节名称')" @click="search"></my-input-button>
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
                :label="$t('环节名称')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.link_name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.link_name}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('环节类型')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.link_type == 1" class="color-warning">{{$t("线上环节")}}</label>
                      <label v-if="scope.row.link_type == 0" class="color-success">{{$t("线下环节")}}</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.link_type == 1" class="color-warning">{{$t("线上环节")}}</label>
                      <label v-if="scope.row.link_type == 0" class="color-success">{{$t("线下环节")}}</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('所属流程')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{ scope.row.process_name }}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{ scope.row.process_name }}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('环节属性')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      {{auditFlowTypeItemInfo(scope.row.link_sub_type, 'set')}}
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{auditFlowTypeItemInfo(scope.row.link_sub_type, 'set')}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('环节图标')">
                <template slot-scope="scope">
                  <el-image v-if="scope.row.link_logo" class="table-cell-image-slot" :src="scope.row.link_logo">
                    <div slot="error" class="table-cell-image-slot">
                      <i class="el-icon-picture-outline" style="font-size: 14px"></i>
                    </div>
                  </el-image>
                  <span v-else>--</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="120"
                :label="$t('操作')">
                <template slot-scope="scope">
<!--                  <i v-if="scope.row.enable == true" class="fa fa-minus-circle margin-right-5 color-warning" @click="statusInfo(scope.row, false)"></i>-->
<!--                  <i v-if="scope.row.enable == false" class="fa fa-check-square margin-right-5 color-success" @click="statusInfo(scope.row, true)"></i>-->
                  <i class="fa fa-edit margin-right-5 color-success" @click="setInfo(scope.row, 1)"></i>
                  <i v-if="scope.row.link_sub_type != 1 && scope.row.link_sub_type != 4 && scope.row.link_sub_type != 5" class="fa fa-cog margin-right-5 color-grand" @click="setInfo(scope.row, 2, scope.row.link_sub_type, scope.$index)"></i>
<!--                  <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>-->
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

    <drawer-layout-right tabindex="0" @changeDrawer="closeDialog" :visible="drawerVisible" size="600px" :title="$t('环节设置')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <div>
          <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("服务设置")}}</label>
          </span>
          </div>
          <div class="block-item-bg font-size-12">
            <el-form :model="form" :rules="rules" ref="form" label-width="120px">
              <el-form-item :label="$t('所属流程')" prop="name">
                <label>{{form.flow}}</label>
              </el-form-item>
              <el-form-item :label="$t('环节属性')" prop="type">
                <label>{{form.params}}</label>
              </el-form-item>
              <el-form-item :label="$t('环节名称')" prop="name">
                <el-input v-model="form.name" size="small" class="width-300"></el-input>
              </el-form-item>
<!--              <el-form-item :label="$t('数据管理')" prop="app">-->
<!--                <el-radio-group v-model="form.data" @change="handleDataChange">-->
<!--                  <el-radio label="0">{{$t('部门')}}</el-radio>-->
<!--                  <el-radio label="1">{{$t('院系')}}</el-radio>-->
<!--                </el-radio-group>-->
<!--                <div>-->
<!--                  <my-cascader v-if="form.data == 0" ref="SelectorCollege" :sel-value="form.dataItem" :props="{multiple: true}" type="4" sub-type="id" width-style="300" @change="handleCascaderChange($event, 2)"></my-cascader>-->
<!--                  <my-cascader v-if="form.data == 1" ref="SelectorCollege" :sel-value="form.dataItem" :props="{multiple: true}" type="1" sub-type="2" width-style="300" @change="handleCascaderChange($event, 2)"></my-cascader>-->
<!--                </div>-->
<!--              </el-form-item>-->
              <el-form-item :label="$t('简介')" prop="dept">
                <el-input v-model="form.remarks" type="textarea" :autosize="{ minRows: 5}" maxlength="150" show-word-limit  class="custom-textarea-inner" style="width: 100%; resize: vertical;resize: none;"></el-input>
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
              <upload-square :action="uploadFileUrl" max-size="8" :data="{path: 'link'}" accept=".png,.jpg,.jpeg" @success="uploadFileSuccess">
                <div class="upload-block-class">
                  <span>{{$t("更换图标")}}</span>
                </div>
              </upload-square>
            </div>
            <div class="moon-clearfix"></div>
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

    <drawer-layout-right tabindex="0" :show-close="true" @changeDrawer="closeDialog" @opened="openedForm" :visible="drawerForm" size="85%">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <span class="tab-class font-bold">
            <i class="fa fa-file"></i>
            {{$t('环节设计')}}
          </span>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div v-loading="formLoading"
             element-loading-text="拼命加载中"
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.01)">
          <fc-designer ref="designer" :style="drawHeight4"/>
        </div>
      </div>
      <div slot="footer">
        <el-row>
          <el-col :span="24">
            <div class="text-right padding-lr-10">
              <el-button size="mini" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
              <el-button size="mini" type="success" :loading="btnLoading" @click="okFormDrawDialog()">{{$t("保存")}}</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
  import {common} from "~/utils/api/url";
  import mixins from "~/utils/mixins";
  import {MessageError, MessageSuccess, MessageWarning, newStudentFlowAuditItemType} from "~/utils/utils";
  import MyCascader from "~/components/utils/select/MyCascader";
  import newStudentParamsValidater from "~/utils/validater/newStudentParamsValidater";
  import LinkDormManage from "~/pages/newStudent/manage/linkDormManage";
  import LinkPayManage from "~/pages/newStudent/manage/linkPayManage";
  import LinkStationManage from "~/pages/newStudent/manage/linkStationManage";
  import MyElTree from "~/components/tree/MyElTree";
  export default {
    components: {MyElTree, LinkStationManage, LinkPayManage, LinkDormManage, MyCascader},
    mixins: [mixins, newStudentParamsValidater],
    data(){
      return {
        tableData: [],
        searchFlowId: '',
        searchKey: '',
        flowFormData: {},
        searchType: '',
        searchStatus: '',
        searchParam: '',
        searchCascader: [],
        paramTypes: [],
        dataItems: [],
        detailData: '',
        currentNodeKey: '',
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
        drawerSubVisible: false,
        subPageVisible: false,
        serverDataItem: {},
        serverDataIndex: '',
        subPageType: '',
        subTitle: '',
        subPageTitle: '',
        serverImg: '',
        uploadFileUrl: common.upload_file,
        processId: '',
        linkId: '',
        form: {
          id: '',
          name: '',
          params: '',
          flow: '',
          remarks: '',
          data: 1,
          dataItem: [],
          icon: ''
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
      this.initProcess();
    },
    methods: {
      async initProcess(){
        await this.getLinkProcessInfo();
        let data = this.dataProcessServer;
        if (data){
          this.defaultExpandedKeys = [data[0].id];
          this.currentNodeKey = data[0].id;
          this.processid = data[0].id;
        }
        if (this.dataProcessServer.length > 0){
          this.init();
        }
      },
      init(){
        let params = {
          page: this.page,
          num: this.num,
          processId: this.processid,
          linkType: this.searchType,
          linkSubType: this.searchParam,
          linkName: this.searchKey
        };
        this.$axios.get(common.enroll_process_link_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
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
        this.processid = data.id;
        this.currentNodeKey = data.id;
        this.page = 1;
        this.init();
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init(data);
      },
      deleteInfo(item){
        this.form.id = item.id;
        this.visibleConfim = true;
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
      closeDialog(event){
        this.form = {
          id: '',
          name: '',
          params: '',
          flow: '',
          remarks: '',
          data: 1,
          dataItem: [],
          icon: ''
        };
        this.flowListData = [];
        this.flowFormData = {

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
        this.serverDataItem = {};
        this.serverDataIndex = '';
        //this.init();
        this.btnLoading = false;
        this.drawerForm = false;
        this.drawerSubVisible = false;
        this.subPageVisible = false;
        this.subPageType = '';
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
      handleDataChange(event){
        this.form.data = event;
        this.form.dataItem = [];
        this.resetCasadeSelector('SelectorCollege');
      },
      handleTypeChange(event, type){
        if (type == 1){
          this.searchParam = event;
        }else if (type == 2){
          this.searchType = event;
        }
      },
      handleCascaderChange(data, type){
        if (type == 2){
          this.form.dataItem = data;
        }
      },
      setInfo(item, type, subType, index){
        if (type == 1){
          this.form = {
            id: item.id,
            name: item.link_name,
            params: this.auditFlowTypeItemInfo(item.link_sub_type, 'set'),
            flow: item.process_name,
            remarks: item.des,
            data: ''+item.data_belong_type,
            icon: item.link_logo
          };
          console.log(item);
          // let deptArr = [[]];
          // let belongRange = item.data_belong_range != '' ? item.data_belong_range.split("|") : [];
          // for (let i = 0; i < belongRange.length; i++){
          //   let dept = [];
          //   let array = belongRange[i].split(",");
          //   for (let j = 0; j < array.length; j++){
          //     dept.push(parseInt(array[j]));
          //   }
          //   deptArr.push(dept);
          // }
          // this.form.dataItem = deptArr;

          this.drawerVisible = true;
        }else if (type == 2){
          this.linkId = item.id;
          if (subType == 0){
            this.subPageTitle = this.$t("接站登记-规则设置");
            this.subPageType = 0;
            this.subPageVisible = true;
          }else if (subType == 2){
            this.subPageTitle = this.$t("线上选寝-规则设置");
            this.subPageType = 2;
            this.subPageVisible = true;
          }else if (subType == 3){
            this.subPageTitle = this.$t("财务缴费-规则设置");
            this.subPageType = 3;
            this.subPageVisible = true;
          }else if (subType == 9){
            this.subPageType = 9;
            let itemData = {};
            let params = {
              linkId: item.id
            };
            this.$axios.get(common.enroll_process_link_info, {params: params}).then(res => {
              if (res.data.data) {
                //form_content
                item['form_content'] = res.data.data.linkContent;
                this.formInfo(item, index);
              }
            });
          }
        }
      },
      returnClick(){
        this.subPageType = '';
        this.subPageVisible = false;
      },
      uploadFileSuccess(res, file){
        if (res.code == 200){
          this.form.icon = res.data.url;
        }else {

        }
      },
      cancelDrawDialog(){
        this.detailData = '';
        this.drawerVisible = false;
        this.drawerForm = false;
      },
      okAppDrawDialog() {
        let url = '';
        let deptArrStr = '';
        this.$refs['form'].validate((valid) => {
          if (valid) {
            // if (this.form.dataItem.length == 0){
            //   MessageWarning(this.$t("请设置数据范围！"));
            //   return;
            // }
            if (this.form.icon == ""){
              MessageWarning(this.$t("请设置图标"));
              return;
            }
            // for (let i = 0; i < this.form.dataItem.length; i++){
            //   deptArrStr += this.form.dataItem[i].join();
            //   if (this.form.dataItem.length - 1 != i){
            //     deptArrStr += '|';
            //   }
            // }

            let params = {
              linkName:  this.form.name,
              linkLogo: this.form.icon,
              // dataBelongType: this.form.data,
              //dataBelongRange: deptArrStr,
              des: this.form.remarks,
            };
            if (this.form.id != ""){
              params['id'] = this.form.id;
            }
            this.dialogLoading = true;
            url = common.enroll_process_link_update;
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
      formInfo(item, index){
        this.serverDataItem = item;
        this.serverDataIndex = index;
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
      okFormDrawDialog(type) {
        let url = '';
        let rules = {};
        rules = {
          rule: this.$refs.designer.getRule(),
          option: this.$refs.designer.getOption()
        };
        let params = {
          linkId: this.linkId,
          linkContent: JSON.stringify(rules)
        };
        url = common.enroll_link_form_save;
        params = this.$qs.stringify(params);
        this.btnLoading = true;
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200) {
            this.init();
            this.$set(this.serverDataItem, 'form_content' , JSON.stringify(rules));
            this.drawerForm = false;
            this.subPageVisible = false;
            MessageSuccess(res.data.desc);
          } else {
            MessageError(res.data.desc);
          }
          this.btnLoading = false;
        });
      },
      auditFlowTypeItemInfo(value, type){
        return newStudentFlowAuditItemType(value, type);
      }
    }
  }
</script>

<style scoped>
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
