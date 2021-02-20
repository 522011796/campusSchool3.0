<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">考勤记录</span>
        </div>
        <my-el-tree type="4" sub-type="4" @node-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="10">
              <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
            </el-col>
            <el-col :span="14" class="text-right">
              <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
              <my-input-button ref="teacher" size="small" plain width-class="width: 120px" type="success" :clearable="true" :placeholder="$t('姓名/工号')" @click="search"></my-input-button>
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
              fixed
              :label="$t('日期')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.busiTime ? scope.row.busiTime : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.busiTime ? scope.row.busiTime : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              fixed
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
                  <div class="text-center">{{scope.row.jobNum ? scope.row.jobNum : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.jobNum ? scope.row.jobNum : '--'}}
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
              :label="$t('班次1时间')"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.work1Time ? $moment(scope.row.work1Time).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.work1Time ? $moment(scope.row.work1Time).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班次1上班打卡时间')"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.work1UpperTime ? $moment(scope.row.work1UpperTime).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.work1UpperTime ? $moment(scope.row.work1UpperTime).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班次1上班打卡结果')"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center"><my-admin-atten :status="scope.row.work1UpperStatus"></my-admin-atten></div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <my-admin-atten :status="scope.row.work1UpperStatus"></my-admin-atten>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班次1下班打卡时间')"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.work1lowerTime ? $moment(scope.row.work1lowerTime).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.work1lowerTime ? $moment(scope.row.work1lowerTime).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班次1下班打卡结果')"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center"><my-admin-atten :status="scope.row.work1LowerStatus"></my-admin-atten></div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <my-admin-atten :status="scope.row.work1LowerStatus"></my-admin-atten>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班次2时间')"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.work2Time ? $moment(scope.row.work2Time).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.work2Time ? $moment(scope.row.work2Time).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班次2上班打卡时间')"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.work2UpperTime ? $moment(scope.row.work2UpperTime).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.work2UpperTime ? $moment(scope.row.work2UpperTime).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班次2上班打卡结果')"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center"><my-admin-atten :status="scope.row.work2UpperStatus"></my-admin-atten></div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <my-admin-atten :status="scope.row.work2UpperStatus"></my-admin-atten>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班次2下班打卡时间')"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.work2lowerTime ? $moment(scope.row.work2lowerTime).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.work2lowerTime ? $moment(scope.row.work2lowerTime).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班次2下班打卡结果')"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center"><my-admin-atten :status="scope.row.work2LowerStatus"></my-admin-atten></div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <my-admin-atten :status="scope.row.work2LowerStatus"></my-admin-atten>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班次3时间')"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.work3Time ? $moment(scope.row.work3Time).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.work3Time ? $moment(scope.row.work3Time).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班次3上班打卡时间')"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.work3UpperTime ? $moment(scope.row.work3UpperTime).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.work3UpperTime ? $moment(scope.row.work3UpperTime).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班次3上班打卡结果')"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center"><my-admin-atten :status="scope.row.work3UpperStatus"></my-admin-atten></div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <my-admin-atten :status="scope.row.work3UpperStatus"></my-admin-atten>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班次3下班打卡时间')"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.work3lowerTime ? $moment(scope.row.work3lowerTime).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.work3lowerTime ? $moment(scope.row.work3lowerTime).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班次3下班打卡结果')"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center"><my-admin-atten :status="scope.row.work3LowerStatus"></my-admin-atten></div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <my-admin-atten :status="scope.row.work3LowerStatus"></my-admin-atten>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('事假')"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center"></div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span>{{scope.row.leave}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('出差')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center"></div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span>{{scope.row.travel}}</span>
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
  import MyAdminAtten from "../../../components/utils/status/MyAdminAtten";
  import {
    clearData, deviceType,
    dormStatus
  } from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,MySearchOfDate,DrawerLayoutRight,MyAdminAtten},
    data(){
      return {
        searchTimeData: {},
        tableData: [],
        tableExtralData: [],
        tableDetailData: [],
        searchDate: [],
        filtersDeviceType: [],
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
        searchTopTime: this.$moment(new Date).format("YYYY-MM-DD")
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
          keyWord: this.searchKey,
          time1: this.searchDate && this.searchDate.length > 0 ? this.searchDate[0] : '',
          time2: this.searchDate && this.searchDate.length > 0 ? this.searchDate[1] : '',
          checkType: 2
        };
        params['departmentPath'] = this.searchDept.value;
        params = this.clearDataInfo(params);
        this.$axios.get(common.attend_teacher_static_record_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.tableExtralData = res.data.data.leaveTypes;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
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
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      clearDataInfo(data){
        return clearData(data);
      },
      expandInfo(){
        let url = "";
        let params = {
          page: 1,
          keyWord: this.searchKey,
          time1: this.searchDate && this.searchDate.length > 0 ? this.searchDate[0] : '',
          time2: this.searchDate && this.searchDate.length > 0 ? this.searchDate[1] : '',
          checkType: 2
        };
        params['departmentPath'] = this.searchDept.value;
        params = this.$qs.stringify(params);
        url = common.attend_teacher_static_record_export;
        window.open(url+"?"+params, "_self");
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
      handleChange(data){
        this.searchDate = data;
      }
    }
  }
</script>

<style scoped>
  .container {

  }
</style>
