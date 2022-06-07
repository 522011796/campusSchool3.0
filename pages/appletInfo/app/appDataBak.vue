<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">数据中心</span>
        </div>
        <my-el-tree type="110" :extra-type="$route.query.appName" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="8">
<!--              <el-button size="small" type="success" plain  icon="el-icon-notebook-2" @click="uploadData($event)">{{$t("导入")}}</el-button>-->
              <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
            </el-col>
            <el-col :span="16" class="text-right">

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
              :label="$t('申请日期')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ $moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm:ss") }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ $moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm:ss") }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('姓名')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.applyUserName }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.applyUserName }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('学号/工号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.userNo }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.userNo }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班级/部门')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label v-if="scope.row.userType == 4">{{scope.row.departmentName}}</label>
                    <label v-else>{{scope.row.className}}</label>
                  </div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label v-if="scope.row.userType == 4">{{scope.row.departmentName}}</label>
                    <label v-else>{{scope.row.className}}</label>
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
                    <label v-if="scope.row.status === -1" class="color-warning">{{$t("撤销")}}</label>
                    <label v-if="scope.row.status === 0" class="color-warning">{{$t("待审核")}}</label>
                    <label v-if="scope.row.status === 3" class="color-success">{{$t("通过")}}</label>
                    <label v-if="scope.row.status === 4" class="color-danger">{{$t("未通过")}}</label>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label v-if="scope.row.status === -1" class="color-warning">{{$t("撤销")}}</label>
                    <label v-if="scope.row.status === 0" class="color-warning">{{$t("待审核")}}</label>
                    <label v-if="scope.row.status === 3" class="color-success">{{$t("通过")}}</label>
                    <label v-if="scope.row.status === 4" class="color-danger">{{$t("未通过")}}</label>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
<!--            <el-table-column-->
<!--              v-for="(item, index) in applyContentArr"-->
<!--              :key="index"-->
<!--              align="center"-->
<!--              width="100"-->
<!--              :label="item.title">-->
<!--              <template slot-scope="scope">-->
<!--                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">-->
<!--                  <div class="text-center">-->
<!--                    <label v-if="scope.row.applyContentObj[index]">{{scope.row.applyContentObj[index].value}}</label>-->
<!--                    <label v-else>&#45;&#45;</label>-->
<!--                  </div>-->
<!--                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">-->
<!--                    <label v-if="scope.row.applyContentObj[index]">{{scope.row.applyContentObj[index].value}}</label>-->
<!--                    <label v-else>&#45;&#45;</label>-->
<!--                  </span>-->
<!--                </el-popover>-->
<!--              </template>-->
<!--            </el-table-column>-->
            <el-table-column
              align="center"
              width="100"
              fixed="right"
              :label="$t('操作')">
              <template slot-scope="scope">
                <i class="fa fa-file-text margin-right-5 color-grand" @click="detailInfo(scope.row)"></i>
                <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <drawer-layout-right tabindex="0" :hide-footer="(detailData.status == -1 || detailData.status == 3) ? false : true" @changeDrawer="closeDrawerDialog" :visible="dialogServerDetail" size="600px" :title="$t('详情')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <div class="detail-block-title padding-lr-10 padding-tb-10 font-size-12">
          <el-row>
            <el-col :span="12">
              <span>{{$t("申请人")}}:</span>
              <span>{{ detailData.applyUserName }}</span>
            </el-col>
            <el-col :span="12">
              <span>{{$t("学号/工号")}}:</span>
              <span>{{ detailData.userNo }}</span>
            </el-col>
          </el-row>
          <el-row class="margin-top-5">
            <el-col :span="12">
              <span>{{$t("服务名称")}}:</span>
              <span>{{ detailData.formName }}</span>
            </el-col>
            <el-col :span="12">
              <span>{{$t("班级/部门")}}:</span>
              <span>
                <label v-if="detailData.userType == 5">{{ detailData.className }}</label>
                <label v-if="detailData.userType == 4">{{ detailData.departmentName }}</label>
              </span>
            </el-col>
          </el-row>
          <el-row class="margin-top-5">
            <el-col :span="12">
              <span>{{$t("申请日期")}}:</span>
              <span>{{ $moment(detailData.applyTime).format("YYYY-MM-DD HH:mm") }}</span>
            </el-col>
          </el-row>
        </div>
        <div class="margin-top-10">
          <div class="color-muted margin-top-5 font-size-12 border-bottom-1">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("申请内容")}}</label>
              </span>
          </div>
          <div class="block-item-bg font-size-12 margin-top-10 color-sub-title">
<!--            <div class="block-item-row padding-lr-10 font-bold" v-for="(item, index) in detailApplyContentData">-->
<!--              <span class="color-muted" style="position: relative;top: -13px">{{item.title}}: </span>-->
<!--              <el-tooltip class="item" effect="dark" :content="item.value" placement="top">-->
<!--                  <span class="moon-content-text-ellipsis-class" style="max-width: 400px;display: inline-block">-->
<!--                    {{ item.value }}-->
<!--                  </span>-->
<!--              </el-tooltip>-->
<!--            </div>-->
            <template v-for="(item, index) in detailApplyContentData">
              <div v-if="item.type != 'fc-editor' && item.type != 'upload'" class="block-item-row padding-lr-10 font-bold">
                <span class="color-muted" style="position: relative;top: -13px">{{item.title}}: </span>
                <el-tooltip class="item" effect="dark" :content="item.value" placement="top">
                    <span class="moon-content-text-ellipsis-class" style="max-width: 400px;display: inline-block">
                      {{ item.value }}
                    </span>
                </el-tooltip>
              </div>
              <div v-else-if="item.type != 'fc-editor' && item.type == 'upload'" class="padding-lr-10 font-bold">
                <span v-if="!item.value || item.value.length <= 0" class="color-muted" style="position: relative;top: 10px">{{item.title}}: </span>
                <span v-else class="color-muted" style="position: relative;top: -13px">{{item.title}}: </span>
                <span v-if="!item.value || item.value.length <= 0">
                    <div style="height: 20px;line-height: 20px"></div>
                  </span>
                <span v-else class="custom-avatar" style="display: inline-block;margin-right: 5px;" v-for="(itemImg, indexImg) in item.value" :key="indexImg">
<!--                    <el-avatar shape="square" size="small" :src="itemImg"></el-avatar>-->
                  <el-image style="width: 30px; height: 30px"
                    :src="itemImg"
                    :preview-src-list="item.value">
                  </el-image>
                </span>
              </div>
              <div v-else class="padding-lr-10">
                <span class="color-muted font-bold" style="position: relative;top: -150px">{{item.title}}: </span>
                <div v-if="item.type == 'fc-editor'"  v-html="item.value" style="max-width: 400px;height: 150px;overflow-y:auto;display: inline-block;border: 1px solid #dddddd;border-radius: 5px;width: 100%;padding: 10px">
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="margin-top-10" v-if="detailData.formType != 0">
          <div class="color-muted margin-top-5 font-size-12 border-bottom-1">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("审批进度")}}</label>
              </span>
          </div>
          <div class="block-item-bg font-size-12 margin-top-10 color-sub-title">
            <el-steps direction="vertical" space="60px">
              <el-step v-for="(item, index) in detailApplyAuditList" :key="index">
                <div slot="icon">
                  <i class="fa fa-flag" style="font-size: 12px"></i>
                </div>
                <div slot="title" class="font-size-12">
                  <span v-if="item.nodeType == 'handle'" class="color-success">
                    {{ $t("审批") }}
                    <label v-if="item.andor == 'and'"> ({{ $t("与签") }}) </label>
                    <label v-if="item.andor == 'or'"> ({{ $t("或签") }}) </label>
                  </span>
                  <span v-if="item.nodeType == 'cc'" class="color-warning">{{ $t("抄送") }}</span>
                </div>
                <div slot="description" class="font-size-12 color-sub-title">
                  <div>
                    <template v-if="item.nodeType == 'handle'">
                      <div v-for="(itemUser, indexUser) in item.handleUserList" :key="indexUser">
                        <span class="color-grand"> <i class="fa fa-user"></i> {{ itemUser.userName }} </span>
                        <span class="margin-left-10">
                          <label v-if="itemUser.status === -1" class="color-warning">{{$t("撤销")}}</label>
                          <label v-if="itemUser.status === 0" class="color-warning">{{$t("待审核")}}</label>
                          <label v-if="itemUser.status === 3" class="color-success">{{$t("通过")}}</label>
                          <label v-if="itemUser.status === 4" class="color-danger">{{$t("未通过")}}</label>
                          <label v-if="itemUser.status === 1" class="color-warning">{{$t("已通过")}}</label>
                          <label v-if="itemUser.status === 2" class="color-warning">{{$t("已驳回")}}</label>
                          <label v-if="itemUser.status === 5" class="color-warning">{{$t("无需审批")}}</label>
                          <label v-if="itemUser.status === 8" class="color-warning">{{$t("审批中")}}</label>
                        </span>
                        <span class="margin-left-10" v-if="itemUser.handleTime">
                          <label class="color-muted">{{$moment(itemUser.handleTime).format("YYYY-MM-DD HH:mm:ss")}}</label>
                        </span>
                      </div>
                    </template>
                    <template v-if="item.nodeType == 'cc'">
                      <el-tag size="mini" v-for="(itemUser, indexUser) in item.handleUserNameList" :key="indexUser" v-if="indexUser <= 5">
                        <div class="moon-content-text-ellipsis-class" style="width: 50px">
                          <el-tooltip class="item" effect="dark" :content="itemUser" placement="top-start">
                            <span>{{ itemUser }}</span>
                          </el-tooltip>
                        </div>
                      </el-tag>

                      <el-popover
                        placement="left"
                        width="200"
                        trigger="hover"
                        v-if="item.handleUserNameList.length > 5">
                        <div style="height: 100px;overflow-y: auto">
                          <div v-for="(itemUser, indexUser) in item.handleUserNameList" :key="indexUser">
                            <div class="font-size-12 padding-tb-5">
                              <span>{{itemUser}}</span>
                            </div>
                          </div>
                        </div>
                        <el-tag slot="reference" size="mini" type="success">
                          <div class="moon-content-text-ellipsis-class padding-lr-5">
                            <i class="fa fa-user"></i>
                            <label class="margin-left-5">{{item.handleUserNameList.length}}</label>
                          </div>
                        </el-tag>
                      </el-popover>
                    </template>
                  </div>
                </div>
              </el-step>
            </el-steps>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div v-if="detailData.status === -1" class="color-white text-center bg-warning">{{$t("撤销")}}</div>
        <div v-if="detailData.status === 3" class="color-white text-center bg-success">{{$t("已通过")}}</div>
      </div>
    </drawer-layout-right>

    <drawer-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" accept=".png,.jpg,.jpeg" :data="{all: true}" :loading="drawerLoading" :hide-footer="true" size="400px" :title="$t('导入数据')" :action="uploadAction" :download-file="uploadFile" :result="uploadResult" :process="uploadProcess" @right-close="cancelDrawDialog" @success="uploadSuccess" @error="uploadError"></drawer-right>
    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {MessageError, MessageSuccess} from "~/utils/utils";
  import MyElTree from "~/components/tree/MyElTree";
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";

  export default {
    components: {DrawerLayoutRight, MyElTree},
    mixins: [mixins],
    data(){
      return {
        tableData: [],
        collegeList: [],
        categorys: [],
        applyContentArr: [],
        types: [],
        subTitle: '',
        collegeData: '',
        searchKey: '',
        searchType: '',
        searchStatus: '',
        searchAuditStatus: '',
        queryApplyListType: 0,
        formId: '',
        listId: '',
        uploadFile: common.doomroom_import_file + "?fileName=" + encodeURIComponent(this.$t("模板.xlsx")),
        uploadAction: common.doomroom_import,
        uploadResult: {},
        detailData: '',
        uploadProcess: '',
        detailApplyContentData: [],
        detailApplyAuditList: [],
        dialogLoading: false,
        dialogApp: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        dialogServer: false,
        dialogServerDetail: false,
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
          queryApplyListType: this.queryApplyListType,
          formId: this.formId,
          status: this.searchAuditStatus
        };
        let applyContentArr = [];
        let applyContent = [];
        this.$axios.get(common.server_form_template_form_apply_page, {params: params}).then(res => {
          if (res.data.data){
            if (res.data.data.list && res.data.data.list.length > 0 && res.data.data.list[0].applyContent){
              applyContentArr = JSON.parse(res.data.data.list[0].applyContent);
            }

            for (let i = 0; i < res.data.data.list.length; i++){
              if (res.data.data.list[i].applyContent){
                let applyContent = JSON.parse(res.data.data.list[i].applyContent);
                res.data.data.list[i]['applyContentObj'] = JSON.parse(res.data.data.list[i].applyContent);
              }
            }

            this.applyContentArr = applyContentArr;
            this.tableData = res.data.data.list;
            this.total = res.data.data.total;
            this.num = res.data.data.num;
            this.page = res.data.data.page;
          }
        });
      },
      initAuditDetailList(id){
        let params = {
          id: id
        };
        this.$axios.get(common.server_form_audit_query, {params: params}).then(res=>{
          if (res.data.code == 200){
            if (res.data.data){
              this.detailApplyAuditList = res.data.data.handleList;
            }
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
      uploadData(){
        this.drawerVisible = true;
      },
      expandInfo(){
        let url = "";
        let params = {
          queryApplyListType: this.queryApplyListType,
          status: this.searchStatus
        };
        params['formId'] = this.formId;
        params = this.$qs.stringify(params);
        url = common.server_form_audit_export;
        window.open(url+"?"+params, "_self");
      },
      detailInfo(item){
        this.detailData = item;
        if (item.applyContent  && item.applyContent != "[]"){
          let ruleList = [];
          //this.detailApplyContentData = JSON.parse(item.applyContent);
          this.detailApplyContentData = this.setRuleChild(JSON.parse(item.applyContent), ruleList);
        }
        this.initAuditDetailList(item._id);
        this.dialogServerDetail = true;
      },
      deleteInfo(item){
        this.listId = item._id;
        this.visibleConfim = true;
      },
      closeDialog(event){
        this.listId = "";
        this.subTitle = "";
        this.detailData = '';
        this.detailApplyContentData = [];
        this.detailApplyAuditList = [];
      },
      closeDrawerDialog(event){
        this.drawerVisible = event;
        this.dialogServerDetail = event;
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
        this.dialogServerDetail = false;
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.listId
        }
        url = common.server_form_audit_delete;
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
      okDrawDialog(event){
        this.drawerLoading = true;
        setTimeouts(() => {
          this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          });
          this.drawerLoading = false;
          this.drawerVisible = false;
        },2000)
      },
      uploadSuccess(res, file){
        this.uploadProcess = res.desc;

        if (res.code == 200){
          this.uploadResult = res.data ? res.data : [res.desc];;
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
      },
      nodeClick(data){
        this.formId = "";
        this.page = 1;
        if (data.unit == 2){
          this.formId = data.id;
        }
        if (data.unit != 1){
          this.init();
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
                field: rule[i].field,
                title: rule[i].title,
                type: rule[i].type,
                value: rule[i].value
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
.block-item-row{
  height: 35px;
  line-height: 35px;
}
</style>
