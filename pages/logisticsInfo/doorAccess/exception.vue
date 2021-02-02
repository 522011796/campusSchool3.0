<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">请假审批</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="default" :disabled="deviceList.length <= 0" :loading="mutiUnbindLoading"  icon="el-icon-circle-close" @click="unbindMutiInfo($event)">{{$t("批量解绑")}}</el-button>
            <el-button size="small" type="warning" icon="el-icon-download" @click="exportInfo($event)">{{$t("导出")}}</el-button>
          </el-col>
          <el-col :span="12" class="text-right">
            <my-date-picker class="layout-item" style="position: relative; top: 1px;" type="daterange" :clearable="true" :sel-value="searchDate" size="small" width-style="240" @change="handleTime"></my-date-picker>
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
          :row-key="getRowKeys"
          :max-height="tableHeight.height"
          @selection-change="handleSelectionChange"
          style="width: 100%"
          @filter-change="fliterTable">
          <el-table-column
            :reserve-selection="true"
            type="selection"
            align="center"
            width="55">
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('姓名')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.real_name ? scope.row.real_name : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.real_name ? scope.row.real_name : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('学号/工号')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.user_no ? scope.row.user_no : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.user_no ? scope.row.user_no : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('班级/部门')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.user_dept ? scope.row.user_dept : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.user_dept ? scope.row.user_dept : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('通行位置')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.last_sn_location ? scope.row.last_sn_location : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.last_sn_location ? scope.row.last_sn_location : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('通行时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.last_time ? $moment(scope.row.last_time).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.last_time ? $moment(scope.row.last_time).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('通行方向')">
            <template slot-scope="scope">
              <span v-if="scope.row.in_out == 1">{{$t("进")}}</span>
              <span v-if="scope.row.in_out == 2">{{$t("出")}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('连续次数')">
            <template slot-scope="scope">
              <span>{{scope.row.times}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :filter-multiple="false"
            column-key="status"
            :filters="filterDoorExceptionStatus"
            :label="$t('状态')">
            <template slot-scope="scope">
              <my-door-exception-status :status="scope.row.status"></my-door-exception-status>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('解除人')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.handle_real_name ? scope.row.handle_real_name : '--' }}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.handle_real_name ? scope.row.handle_real_name : '--' }}
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
              <i class="fa fa-window-close-o margin-right-5 color-grand" @click="unbindInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" :content="deleteSetTitle" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import MyPagination from "../../../components/MyPagination";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {levelText, MessageError, MessageSuccess, MessageWarning} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyInputButton from "../../../components/search/MyInputButton";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import padWoValidater from "../../../utils/validater/padWoValidater";
  import MyDoorExceptionStatus from "../../../components/utils/status/MyDoorExceptionStatus";
  import MyDatePicker from "../../../components/MyDatePicker";
  export default {
    mixins: [mixins, padWoValidater],
    components: {MyPagination,LayoutTb,MySelect,MyInputButton,DialogNormal,DrawerLayoutRight,MyDoorExceptionStatus,MyDatePicker},
    data(){
      return {
        tableData: [],
        searchDate: [],
        typeList: [],
        searchKey: '',
        visible: false,
        modalVisible: false,
        modalConfVisible: false,
        dialogLoading: false,
        drawerLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        loading: false,
        perLoading: false,
        picLoading: false,
        mutiDeleteLoading: false,
        mutiUnbindLoading: false,
        mutiResetLoading: false,
        searchOnline: '',
        config: {},
        subTitle: '',
        deleteSetTitle: '确认需要解除该信息？',
        status: '',
        deviceList: [],
        id: ''
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
          searchKey: this.searchKey,
          status: this.status,
          beginTime: this.searchDate && this.searchDate.length > 0 ? this.searchDate[0] : '',
          endTime: this.searchDate && this.searchDate.length > 0 ? this.searchDate[1] : '',
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.dormaccess_exception_page, params).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      unbindMutiInfo(){
        let arr = [];
        for (let i = 0; i < this.deviceList.length; i++){
          arr.push(this.deviceList[i].id);
        }
        let params = {
          ids: arr.join()
        };
        params = this.$qs.stringify(params);
        this.mutiUnbindLoading = true;
        this.$axios.post(common.dormaccess_exception_unbind, params).then(res => {
          if (res.data.code == 200){
            this.init();
            this.deviceList = [];
            this.$refs.refTable.clearSelection();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.mutiUnbindLoading = false;
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
      search(data){
        this.page = 1;
        this.searchKey = data.input;
        this.init();
      },
      handleSelectionChange(data){
        this.deviceList = data;
      },
      handleTime(data){
        this.searchDate = data;
      },
      getRowKeys(row) {
        return row.id
      },
      unbindInfo(row){
        this.deleteSetTitle = this.$t("确认需要解除该异常吗？");
        this.id =  row.id;
        this.subTitle = row.name;
        this.visibleConfim = true;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          ids: this.id
        };
        url = common.dormaccess_exception_unbind;
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
      closeDialog(event){
        this.id = "";
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'status'){
            this.status = value[item][0];
          }
        }
        this.init();
      },
      exportInfo(){
        let url = "";
        let params = {
          page: 1,
          num: 99999,
          searchKey: this.searchKey,
          status: this.status,
          beginTime: this.searchDate && this.searchDate.length > 0 ? this.searchDate[0] : '',
          endTime: this.searchDate && this.searchDate.length > 0 ? this.searchDate[1] : '',
        };
        params = this.$qs.stringify(params);
        url = common.dormaccess_exception_export;
        window.open(url+"?"+params, "_self");
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
</style>
