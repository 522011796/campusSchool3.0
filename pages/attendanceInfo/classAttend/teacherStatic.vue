<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">教师统计</span>
        </div>
        <my-el-tree type="4" sub-type="1" @node-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="18">
              <my-year-term size="small" :show-default-week="true" :clearable-week="true" @changeYear="hangdleChange($event,1)" @changeTerm="hangdleChange($event,2)" @changeWeek="hangdleChange($event,3)"></my-year-term>
              <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
            </el-col>
            <el-col :span="6" class="text-right">
              <my-input-button ref="teacher" size="small" plain width-class="width: 120px" type="success" :clearable="true" @click="search"></my-input-button>
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
              :label="$t('姓名')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.realName ? scope.row.realName : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.realName ? scope.row.realName : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('工号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.jobnNum ? scope.row.jobnNum : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.jobnNum ? scope.row.jobnNum : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('部门')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.departName ? scope.row.departName : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.departName ? scope.row.departName : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('性别')">
              <template slot-scope="scope">
                <my-sex tag="text" :sex="scope.row.sex"></my-sex>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('正常')">
              <template slot-scope="scope">
                <el-popover trigger="click" placement="top" popper-class="custom-table-popover" @show="showDetail(scope.row.userId)">
                  <div class="text-left">
                    <div v-for="(item,index) in detailData" :key="index">
                      <span>{{item.courseName}}:</span>
                      <span>{{item.actualNum}}</span>
                    </div>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-grand">{{scope.row.actualNum}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('缺勤')">
              <template slot-scope="scope">
                <el-popover trigger="click" placement="top" popper-class="custom-table-popover" @show="showDetail(scope.row.userId)">
                  <div class="text-left">
                    <div v-for="(item,index) in detailData" :key="index">
                      <span>{{item.courseName}}:</span>
                      <span>{{scope.row.shouldNum - scope.row.actualNum}}</span>
                    </div>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-grand">{{scope.row.shouldNum - scope.row.actualNum}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('应出勤')">
              <template slot-scope="scope">
                <el-popover trigger="click" placement="top" popper-class="custom-table-popover" @show="showDetail(scope.row.userId)">
                  <div class="text-left">
                    <div v-for="(item,index) in detailData" :key="index">
                      <span>{{item.courseName}}:</span>
                      <span>{{item.shouldNum}}</span>
                    </div>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span class="color-grand">{{scope.row.shouldNum}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </div>
    </layout-lr>
  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import LayoutLr from "../../../components/Layout/LayoutLr";
  import MyElTree from "../../../components/tree/MyElTree";
  import MyPagination from "../../../components/MyPagination";
  import MyInputButton from "../../../components/search/MyInputButton";
  import MySex from "../../../components/MySex";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MySelect from "../../../components/MySelect";
  import MyCascader from "../../../components/utils/select/MyCascader";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyNormalDialog from "../../../components/utils/dialog/MyNormalDialog";
  import DrawerRight from "../../../components/utils/dialog/DrawerRight";
  import MySearchOfDate from "../../../components/search/MySearchOfDate";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import MyYearTerm from "../../../components/search/MyYearTerm";
  import {
    clearData, deviceType,
    dormStatus
  } from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,MySearchOfDate,DrawerLayoutRight,MyYearTerm},
    data(){
      return {
        searchTimeData: {},
        tableData: [],
        tableDetailData: [],
        searchDate: [],
        filtersDeviceType: [],
        detailData: [],
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        searchBuild: '',
        searchFloor: '',
        searchKey: '',
        searchDeviceType: '',
        searchDept: '',
        subTitle: '',
        uploadProcess: '',
        searchType: -1,
        searchDetailType: -1,
        uploadResult: {},
        showType: 1,
        mainType: "1",
        subType: "4",
        uploadFile: common.teacher_file + "?fileName=" + encodeURIComponent(this.$t("学生导入模板20180130_v2.xls")),
        uploadAction: common.student_upload,
        loopTimer: null,
        resultList: [],
        searchTopTime: this.$moment(new Date).format("YYYY-MM-DD"),
        selYear: '',
        selTerm: '',
        selWeek: ''
      }
    },
    created() {
      this.initInfo();
    },
    methods: {
      async initInfo(){
        await this.getSessionInfo();
        this.selYear = this.currentYearId;
        this.selTerm = this.currentTermId;
        this.init();
      },
      init(){
        let params = {
          page: this.page,
          num: this.num,
          yearSelect: this.selYear,
          termId: this.selTerm,
          weekNum: this.selWeek
        };
        params['realName'] = this.searchKey.input;
        params['structure'] = this.searchDept;
        params = this.clearDataInfo(params);
        this.$axios.get(common.attend_class_static_ter_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      showDetail(userId){
        let params = {
          studentId: userId,
          termId: this.selTerm
        };
        this.$axios.get(common.attend_class_static_ter_detail, {params: params}).then(res => {
          if (res.data.data){
            this.detailData = res.data.data;
          }
        });
      },
      nodeClick(data){
        this.searchDept = data;
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
      cancelDialog(){
        this.modalVisible = false;
      },
      handleChangeTime(data, type){
        switch (type) {
          case 1:
            this.form.borthday = data;
            break;
          case 2:
            this.form.innerTime = data;
            break;
          case 3:
            this.form.workTime = data;
            break;
        }
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      closeDrawerDialog(event){
        this.pageDetail = 1;
        this.numDetail = 20;
        this.searchUserId = "";
        this.drawerVisible = event;
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      searchTopDate(data){
        this.searchTimeData = data;
        this.init();
      },
      searchTopType(data){

      },
      dormStatusInfo(val){
        return dormStatus('set', val);
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'deviceType'){
            this.searchDeviceType = value[item][0];
          }
        }
        this.init();
      },
      handleChange(data){
        this.searchDate = data;
      },
      search(data){
        this.searchKey = data;
        this.page = 1;
        this.init();
      },
      clearDataInfo(data){
        return clearData(data);
      },
      deviceTypeInfo(type, val){
        return deviceType(type, val);
      },
      deviceTypeGetInfo(type, val){
        let arr = [];
        let deviceList = deviceType('get', val);
        for (let i in deviceList){
          arr.push({
            value: i,
            text: deviceList[i]
          });
        }
        this.filtersDeviceType = arr;
      },
      changeTree(mainType, subType, type){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        this.searchBuild = "";
        this.searchFloor = "";
        this.mainType = ''+mainType;
        this.subType = ''+subType;
        this.showType = type;
        this.init();
      },
      hangdleChange(data, type){
        switch (type) {
          case 1:
            this.selYear = data.year;
            this.selTerm = data.term;
            this.selWeek = data.week;
            break;
          case 2:
            this.selYear = data.year;
            this.selTerm = data.term;
            this.selWeek = data.week;
            break;
          case 3:
            this.selYear = data.year;
            this.selTerm = data.term;
            this.selWeek = data.week;
            break;
        }
        this.init();
      },
      expandInfo(){
        let url = "";
        let params = {
          page: this.page,
          num: this.num,
          yearSelect: this.selYear,
          termId: this.selTerm,
          weekNum: this.selWeek
        };
        params['realName'] = this.searchKey.input;
        params['structure'] = this.searchDept;
        params = this.clearDataInfo(params);
        params = this.$qs.stringify(params);
        url = common.attend_class_static_ter_detail_change_record_export;
        window.open(url+"?"+params, "_self");
      }
    }
  }
</script>

<style scoped>
  .container {

  }
</style>
