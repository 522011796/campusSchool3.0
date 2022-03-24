<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">数据中心</span>
        </div>

      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="8">
              <el-button size="small" type="success" plain  icon="el-icon-notebook-2" @click="uploadData($event)">{{$t("导入")}}</el-button>
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
              width="100"
              :label="$t('申请日期')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.classroom_no }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.classroom_no }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              width="100"
              :label="$t('姓名')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.classroom_no }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.classroom_no }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              width="100"
              :label="$t('学号/工号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.classroom_no }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.classroom_no }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              width="100"
              :label="$t('班级/部门')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.classroom_no }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.classroom_no }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              v-for="n in 10"
              :key="n"
              align="center"
              width="100"
              label="列">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.classroom_no }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    xx
                  </span>
                </el-popover>
              </template>
            </el-table-column>
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

    <drawer-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" accept=".png,.jpg,.jpeg" :data="{all: true}" :loading="drawerLoading" :hide-footer="true" size="400px" :title="$t('导入数据')" :action="uploadAction" :download-file="uploadFile" :result="uploadResult" :process="uploadProcess" @right-close="cancelDrawDialog" @success="uploadSuccess" @error="uploadError"></drawer-right>
    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {MessageError, MessageSuccess} from "~/utils/utils";

  export default {
    mixins: [mixins],
    data(){
      return {
        tableData: [],
        collegeList: [],
        categorys: [],
        types: [],
        subTitle: '',
        collegeData: '',
        searchKey: '',
        searchType: '',
        searchStatus: '',
        listId: '',
        uploadFile: common.doomroom_import_file + "?fileName=" + encodeURIComponent(this.$t("模板.xlsx")),
        uploadAction: common.doomroom_import,
        uploadResult: {},
        uploadProcess: '',
        dialogLoading: false,
        dialogApp: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
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
          collegeData: this.collegeData,
          searchType: this.searchType,
          searchStatus: this.searchStatus,
          searchKey: this.searchKey
        };
        this.$axios.get(common.classroom_page, {params: params}).then(res => {
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
      uploadData(){
        this.drawerVisible = true;
      },
      expandInfo(){

      },
      detailInfo(item){

      },
      deleteInfo(item){
        this.listId = item.id;
        this.visibleConfim = true;
      },
      closeDialog(event){
        this.listId = "";
        this.subTitle = "";
      },
      closeDrawerDialog(event){
        this.drawerVisible = event;
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
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
        url = common.class_delete;
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
      }
    }
  }
</script>

<style scoped>

</style>
