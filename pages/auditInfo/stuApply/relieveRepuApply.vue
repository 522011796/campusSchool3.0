<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">解除奖惩审批</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <audit-status-button size="small" @click="handleClick"></audit-status-button>
          </el-col>
          <el-col :span="12" class="text-right">
            <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
            <my-input-button size="small" :clearable="true" type="success" plain @click="search"></my-input-button>
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
          style="width: 100%"
          @filter-change="fliterTable">
          <el-table-column
            align="center"
            :label="$t('日期')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.apply_time ? $moment(scope.row.apply_time).format("YYYY-MM-DD") : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.apply_time ? $moment(scope.row.apply_time).format("YYYY-MM-DD") : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('学生')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.real_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.real_name}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('学号')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.student_id}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.student_id}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('系部')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.college_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.college_name}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('专业')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.major_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.major_name}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('班级')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.class_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.class_name}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('类型')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.str1}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.str1}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('级别')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.str2}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.str2}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :filter-multiple="false"
            column-key="rpStatus"
            :filters="filterJCRpStatus">
            <template slot="header">
              <span>{{$t('奖惩状态')}}</span>
              <span v-if="filterRpStatusText != ''" class="font-size-12 color-disabeld moon-content-text-ellipsis-class">{{filterRpStatusText}}</span>
            </template>
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <my-audit-pu-status :status="scope.row.punishStatus"></my-audit-pu-status>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <my-audit-pu-status :status="scope.row.punishStatus"></my-audit-pu-status>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="level_name"
            :label="$t('状态/审核人')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <my-audit-status :status="scope.row.status" :handler="scope.row.handler_name"></my-audit-status>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <my-audit-status :status="scope.row.status" :handler="scope.row.handler_name"></my-audit-status>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-cog color-danger" @click="detailInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <!--审批详细-->
    <drawer-layout-right @changeDrawer="closeDrawerDialog" :hide-footer="false" :visible="drawerVisible" size="550px" :title="$t('奖惩审批')" @right-close="cancelDrawDialog">
      <div slot="content">
        <my-audit-detail type="PunishmentApply" :sel-value="dataAudit"></my-audit-detail>
      </div>
      <div slot="footer">
        <audit-button :sel-value="dataAudit" @ok="handleOk" @no="handleNo" @cancel="handleCancel"></audit-button>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import MyPagination from "../../../components/MyPagination";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {MessageError, MessageSuccess, MessageWarning} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyUserType from "../../../components/utils/MyUserType";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyInputButton from "../../../components/search/MyInputButton";
  import levelValidater from "../../../utils/validater/levelValidater";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import AuditStatusButton from "../../../components/utils/button/AuditStatusButton";
  import AuditButton from "../../../components/utils/auditDetail/AuditButton";
  import AuditStatusRelieveButton from "~/components/utils/button/AuditStatusRelieveButton";
  export default {
    mixins: [mixins, levelValidater],
    components: {
      AuditStatusRelieveButton,
      MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal,DrawerLayoutRight,AuditStatusButton,AuditButton},
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
        drawerVisible: false,
        clearTime: '',
        action: '',
        subTitle: '',
        dataAudit: {},
        status: '',
        auditObjectItem: {},
        msgType: '',
        rpStatus: '',
        filterRpStatusText: '',
        form: {
          id: '',
          name: '',
          type: ''
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
          applyTypeCode: 'PunishmentCancelApply',
          applyTimeBegin: this.searchDate ? this.searchDate[0] : '',
          applyTimeEnd: this.searchDate ? this.searchDate[1] : '',
          status: this.status,
          searchKey: this.searchKey,
          punishStatus: this.rpStatus,
        };
        this.$axios.get(common.audit_page, {params: params}).then(res => {
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
      detailInfo(row){
        let params = {
          id:row.id ? row.id : row.id
        };
        this.auditObjectItem = row;
        this.$axios.get(common.msg_detail_center, {params: params}).then(res => {
          if (res.data.code == 200){
            this.dataAudit = res.data.data;
            this.drawerVisible = true;
          }else {
            MessageWarning(res.data.desc);
          }
        });
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'rpStatus'){
            this.filterRpStatusText = "";
            this.rpStatus = value[item][0];
            for (let i = 0; i < this.filterJCRpStatus.length; i++){
              if (this.rpStatus == this.filterJCRpStatus[i].value){
                this.filterRpStatusText = this.filterJCRpStatus[i].text;
              }
            }
          }
        }
        this.page = 1;
        this.init();
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
      closeDrawerDialog(event){
        this.auditObjectItem = {};
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      handleClick(data){
        this.page = 1;
        this.status = data;
        this.init();
      },
      handleChange(data){
        this.searchDate = data;
      },
      handleOk(data,textarea){
        let params = {
          applyId: this.auditObjectItem.id ? this.auditObjectItem.id : this.auditObjectItem.id,
          status: 1,
          des2: textarea
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.msg_handle, params).then(res => {
          if (res.data.code == 200){
            this.detailInfo(this.auditObjectItem);
            this.init();
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      },
      handleNo(data,textarea){
        let params = {
          applyId: this.auditObjectItem.id ? this.auditObjectItem.id : this.auditObjectItem.id,
          status: 2,
          des2: textarea
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.msg_handle, params).then(res => {
          if (res.data.code == 200){
            this.detailInfo(this.auditObjectItem);
            this.init();
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      },
      handleCancel(data){
        let params = {
          applyId: this.auditObjectItem.id ? this.auditObjectItem.id : this.auditObjectItem.id,
          status: -1
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.msg_handle, params).then(res => {
          if (res.data.code == 200){
            this.detailInfo(this.auditObjectItem);
            this.init();
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
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
