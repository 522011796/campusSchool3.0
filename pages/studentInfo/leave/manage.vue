<template>
  <div class="container">
    <div class="container">
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">请假管理</span>
          </div>
          <my-el-tree type="1" sub-type="4" @node-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <el-card :body-style="{padding: '10px'}">
            <my-search-of-date size="small" :show-year="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType"></my-search-of-date>
          </el-card>
          <div class="margin-top-10">
            <div>
              <el-card shadow="never" :body-style="{padding: '5px 10px',height: '150px'}">
                <el-row :gutter="8">
                  <el-col :span="8">
                    <div class="rpStatic-top-item color-muted">
                      <div class="pull-left">
                        <div class="margin-top-20 color-grand text-center" style="font-weight: bold">
                          <div>
                            <i class="fa fa-id-card color-disabeld" style="font-size: 20px"></i>
                          </div>
                          <div class="margin-top-5">
                            <span class="font-size-25">{{personTotal}}</span>
                          </div>
                        </div>
                        <div class="margin-top-10 color-muted">
                          <span class="person-item text-right">{{$t("请假人次")}}</span>
                        </div>
                      </div>
                      <div class="pull-left margin-left-10">
                        <div class="line-ver-height" style="height: 150px"></div>
                      </div>
                      <div class="pull-left margin-left-10" style="overflow-y: auto; height: 150px">
                        <div class="margin-top-5 color-muted" v-for="(item, index) in levelData" :key="index">
                          <span class="text-right">{{item.name}}</span>
                          <el-tag size="mini" type="success">{{item.value}}</el-tag>
                        </div>
                      </div>
                      <div class="moon-clearfix"></div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="rpStatic-top-item color-muted">
                      <div class="title">{{$t("达标率")}}: </div>
                      <div style="height: 140px">
                        <table-bar-chart chart-id="typeId" :chart-title='$t("达标率")' :data="typeData"></table-bar-chart>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="rpStatic-top-item color-muted">
                      <div class="title">{{$t("级别占比")}}: </div>
                      <div>
                        <div style="height: 140px">
                          <div v-if="levelData.length <= 0" class="color-disabeld text-center" style="position: relative; top: 20%;">{{$t("暂无数据")}}</div>
                          <circle-chart v-else chart-id="levelId" :chart-title='$t("等级占比")' :data-key="levelDataKey" :data="levelData"></circle-chart>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </div>
          </div>

          <div class="layout-right-tab margin-top-10">
            <el-row class="layout-inline">
              <el-col :span="12">
                <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo()">{{$t("导出")}}</el-button>
              </el-col>
              <el-col :span="12" class="text-right">
                <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('姓名/学号')" @click="search"></my-input-button>
              </el-col>
            </el-row>
          </div>
          <div>
            <el-table
              :data="tableData"
              header-cell-class-name="custom-table-cell-bg"
              size="medium"
              :max-height="tableHeight3.height"
              style="width: 100%"
              @filter-change="fliterTable">
              <el-table-column
                align="center"
                :label="$t('姓名')">

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
                :label="$t('院系')">

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
                prop="apply_days"
                :label="$t('总天数')">
              </el-table-column>
              <el-table-column
                align="center"
                prop="apply_times"
                :label="$t('总次数')">
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('请假率')">

                <template slot-scope="scope">
                  <span>{{scope.row.apply_rate}}</span>%
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="apply_grade"
                :filter-multiple="false"
                column-key="level"
                :filters="levelStatus"
                :label="$t('等级')">
              </el-table-column>
              <el-table-column
                align="center"
                fixed="right"
                :label="$t('操作')"
                width="60">
                <template slot-scope="scope">
                  <i class="fa fa-list-alt margin-right-5 color-grand" @click="handleDetail(scope.row)"></i>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </layout-lr>
    </div>

    <!--审批详细-->
    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="750px" :title="$t('个人信息')" @right-close="cancelDrawDialog">
      <div slot="content">
        <span tabindex="1"></span>
        <div>
          <el-row>
            <el-col :span="8">
              <div class="padding-top-5">
                <span>
                  <label>{{$t("总次数")}}</label>
                  <label>{{currentTotal}}</label>
                </span>
                <span class="color-success margin-left-20">
                  <label>{{$t("总时长(天)")}}</label>
                  <label>{{successTotal}}</label>
                </span>
              </div>
            </el-col>
            <el-col :span="16">
              <div class="text-right">
                <my-date-picker :sel-value="searchTimeDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleTime"></my-date-picker>
                <el-button size="small" type="success" plain @click="searchStudent()">{{$t("搜索")}}</el-button>
                <el-button size="small" type="warning" icon="el-icon-download" @click="expandStudentInfo()">{{$t("导出")}}</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="margin-top-10">
          <el-table
            :data="studentData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            style="width: 100%"
            @filter-change="fliterTable">
            <el-table-column
              align="center"
              :label="$t('姓名')">

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
              :filter-multiple="false"
              column-key="status"
              :filters="tableTypeData"
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
              prop="type"
              :label="$t('时长')">
              <template slot-scope="scope">
                <span>{{scope.row.double1}}{{$t("天")}}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('事由')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.des ? scope.row.des : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.des ? scope.row.des : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="type"
              :label="$t('审核人')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.handler_name ? scope.row.handler_name : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.handler_name ? scope.row.handler_name : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('状态')">

              <template slot-scope="scope">
                <span class="color-success">{{auditStatusInfo(scope.row.status)}}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="type"
              :label="$t('附件')">

              <template slot-scope="scope">
                <span v-if="!scope.row.apply_file">--</span>
                <img v-else :src="scope.row.apply_file" style="height: 25px;width: 25px">
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right">
          <el-pagination
            background
            :page-sizes="[10, 20, 50, 100]"
            layout="total, sizes, prev, pager, next"
            :total="totalStudent"
            :current-page="pageStudent"
            :page-size="numStudent"
            @size-change="sizeStudentChange"
            @current-change="currentStudentPage">
          </el-pagination>
        </div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import LayoutLr from "../../../components/Layout/LayoutLr";
  import MySelect from "../../../components/MySelect";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import MyElTree from "../../../components/tree/MyElTree";
  import MyPagination from "../../../components/MyPagination";
  import CircleChart from "../../../components/charts/CircleChart";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MyInputButton from "../../../components/search/MyInputButton";
  import TableBarChart from "../../../components/charts/TableBarChart";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MySearchOfDate from "../../../components/search/MySearchOfDate";
  import {common} from "../../../utils/api/url";
  import {auditStatusText, MessageError, MessageSuccess, MessageWarning} from "../../../utils/utils";
  import rpApplyValidater from "../../../utils/validater/rpApplyValidater";
  export default {
    mixins: [mixins, rpApplyValidater],
    components: {LayoutLr,MyElTree,MySelect,DrawerLayoutRight,MyPagination,CircleChart,DialogNormal,MyInputButton,TableBarChart,MyDatePicker,MySearchOfDate},
    data(){
      return {
        pageStudent: 1,
        numStudent: 20,
        totalStudent: 0,
        dataAudit: {},
        drawerVisible: false,
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        studentLoading: false,
        currentTotal: 0,
        successTotal: 0,
        subTitle: '',
        tableData: [],
        studentData: [],
        dataAuditList: [],
        typeStatus: [],
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        searchTermId: '',
        searchTimeUnit: '',
        applyTimeBegin: '',
        applyTimeEnd: '',
        searchTime: '',
        searchTopTime: this.$moment().subtract(1, 'days').format("YYYY-MM-DD"),
        searchData: {},
        searchTimeDate: [],
        tableTypeData: [],
        type: '',
        level: '',
        status: '',
        searchKey: '',
        searchDate: [],
        //filterTypes: [{ text: this.$t("处分"), value: '处分' }, { text: '奖励', value: '奖励' }],
        filterLevels: [],
        filterAddLevels: [],
        //filterStatus: [{ text: this.$t("待审批"), value: '0' }, { text: '已通过', value: '3' }, { text: '已驳回', value: '4' }],
        personTotal: 0,
        reTotal: 0,
        puTotal: 0,
        uploadFileAction: common.upload_file,
        typeData: 0,
        typeListData: [],
        typeDataKey: [],
        levelData: [],
        levelDataKey: [],
        searchStudentKey: '',
        errorStudent: '',
        userId: '',
        typeName: ''
      }
    },
    created() {
      this.init();
      this.initTypeList();
    },
    methods: {
      async init(){
        await this.getSessionInfo();
        this.initLeaveInfo();
      },
      initLeaveInfo(){
        let params = {
          page: this.page,
          num: this.num,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          gradeName: this.status,
          searchKey: this.searchKey,
          termId: this.currentTermId,
        };
        //时间类型
        if (this.searchData.timeUnit == 1){
          params['busiTime'] = this.searchData.value;
          params['timeUnit'] = 3;
        }else if (this.searchData.timeUnit == 2){
          params['weekNum'] = this.searchData.value;
          params['timeUnit'] = 2;
        }else if (this.searchData.timeUnit == 3){
          params['year'] = this.searchData.value.split("-")[0];
          params['month'] = this.searchData.value.split("-")[1];
          params['timeUnit'] = 4;
        }else if (this.searchData.timeUnit == 5){
          params['timeUnit'] = 1;
        }else {
          params['busiTime'] = this.$moment().subtract(1, 'days').format("YYYY-MM-DD");
          params['timeUnit'] = 3;
        }
        this.$axios.get(common.leave_query_level_manage_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;

            this.initStatic(params);
          }
        });
      },
      initStatic(params){
        this.$axios.get(common.leave_query_level_count, {params: params}).then(res => {
          if (res.data.data){
            let levelKey = [];
            let levelList = [];
            for (let i = 0; i < res.data.data.list.length; i++){
              levelKey.push(res.data.data.list[i].apply_type);
              levelList.push({
                name: res.data.data.list[i].apply_type,
                value: res.data.data.list[i].times,
                rate: res.data.data.list[i].timesRate,
              });
            }
            this.typeData = res.data.data.rate;
            this.personTotal = res.data.data.allTimes;
            this.levelData = levelList;
            this.levelDataKey = levelKey;
          }
        });
      },
      initScore(){
        let params = {
          page: this.pageStudent,
          num: this.numStudent,
          applyUserId: this.userId,
          applyTimeBegin: (this.searchTimeDate && this.searchTimeDate.length >= 2) ? this.searchTimeDate[0] : '',
          applyTimeEnd: (this.searchTimeDate && this.searchTimeDate.length >= 2) ? this.searchTimeDate[1] : '',
          termId: this.currentTermId,
          typeName: this.typeName
        };
        //时间类型
        if (this.searchData.timeUnit == 1){
          params['busiTime'] = this.searchData.value;
          params['timeUnit'] = 3;
        }else if (this.searchData.timeUnit == 2){
          params['weekNum'] = this.searchData.value;
          params['timeUnit'] = 2;
        }else if (this.searchData.timeUnit == 3){
          params['year'] = this.searchData.value.split("-")[0];
          params['month'] = this.searchData.value.split("-")[1];
          params['timeUnit'] = 4;
        }else if (this.searchData.timeUnit == 5){
          params['timeUnit'] = 1;
        }else {
          params['busiTime'] = this.$moment().subtract(1, 'days').format("YYYY-MM-DD");
          params['timeUnit'] = 3;
        }
        this.$axios.get(common.leave_query_level_manage_unit_page, {params: params}).then(res => {
          if (res.data.code == 200){
            this.studentData = res.data.data.list;
            this.totalStudent = res.data.data.totalCount;
            this.numStudent = res.data.data.num;
            this.pageStudent = res.data.data.currentPage;
          }else {
            MessageWarning(res.data.desc);
          }
        });
      },
      initTypeList(){
        let params = {
          page :1,
          num: 999
        };
        this.$axios.get(common.leave_query_type_list, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i <res.data.data.list.length; i++){
              res.data.data.list[i]['text'] = res.data.data.list[i].typeName;
              res.data.data.list[i]['value'] = res.data.data.list[i].typeName;
            }
            this.tableTypeData = res.data.data.list;
          }
        });
      },
      nodeClick(data){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        if (data.unit == 1){
          this.searchCollege = data.id;
        }else if (data.unit == 2){
          this.searchCollege = data.college_id;
          this.searchMajor = data.id;
        }else if (data.unit == 3){
          this.searchMajor = data.major_id;
          this.searchGrade = data.grade;
        }else if (data.unit == 4){
          this.searchClass = data.id;
        }
        this.initLeaveInfo();
      },
      handleDetail(row){
        this.userId = row.user_id;
        this.currentTotal = row.apply_times;
        this.successTotal = row.apply_days;
        this.initScore();
        this.drawerVisible = true;
      },
      closeDrawerDialog(event){
        this.searchTimeDate = [];
        this.typeName = "";
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      sizeChange(event){
        this.page = 1;
        this.num = event;
        this.initLeaveInfo();
      },
      currentPage(event){
        this.page = event;
        this.initLeaveInfo();
      },
      sizeStudentChange(event){
        this.pageStudent = 1;
        this.numStudent = event;
        this.initScore();
      },
      currentStudentPage(event){
        this.pageStudent = event;
        this.initScore();
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.initLeaveInfo();
      },
      expandInfo(){
        let url = common.leave_query_level_manage_export;
        let params = {
          page: 1,
          num: 99999,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          gradeName: this.status,
          searchKey: this.searchKey,
          termId: this.currentTermId,
        };
        //时间类型
        if (this.searchData.timeUnit == 1){
          params['busiTime'] = this.searchData.value;
          params['timeUnit'] = 3;
        }else if (this.searchData.timeUnit == 2){
          params['weekNum'] = this.searchData.value;
          params['timeUnit'] = 2;
        }else if (this.searchData.timeUnit == 3){
          params['year'] = this.searchData.value.split("-")[0];
          params['month'] = this.searchData.value.split("-")[1];
          params['timeUnit'] = 4;
        }else if (this.searchData.timeUnit == 5){
          params['timeUnit'] = 1;
        }else {
          params['busiTime'] = this.$moment().subtract(1, 'days').format("YYYY-MM-DD");
          params['timeUnit'] = 3;
        }
        params = this.$qs.stringify(params);
        window.open(url+"?"+params, "_self");
      },
      expandStudentInfo(){
        let url = common.leave_query_level_manage_unit_export;
        let params = {
          page: 1,
          num: 99999,
          applyUserId: this.userId,
          applyTimeBegin: (this.searchTimeDate && this.searchTimeDate.length >= 2) ? this.searchTimeDate[0] : '',
          applyTimeEnd: (this.searchTimeDate && this.searchTimeDate.length >= 2) ? this.searchTimeDate[1] : '',
          termId: this.currentTermId,
          typeName: this.typeName
        };
        if (this.searchData.timeUnit == 1){
          params['busiTime'] = this.searchData.value;
          params['timeUnit'] = 3;
        }else if (this.searchData.timeUnit == 2){
          params['weekNum'] = this.searchData.value;
          params['timeUnit'] = 2;
        }else if (this.searchData.timeUnit == 3){
          params['year'] = this.searchData.value.split("-")[0];
          params['month'] = this.searchData.value.split("-")[1];
          params['timeUnit'] = 4;
        }else if (this.searchData.timeUnit == 5){
          params['timeUnit'] = 1;
        }else {
          params['busiTime'] = this.$moment().subtract(1, 'days').format("YYYY-MM-DD");
          params['timeUnit'] = 3;
        }
        params = this.$qs.stringify(params);
        window.open(url+"?"+params, "_self");
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      closeDialog(event){
        this.pageStudent = 1;
        this.numStudent = 20;
        this.searchStudentKey = "";
        if (this.$refs.studentRef){
          this.$refs.studentRef.inputValue = "";
        }
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'level'){
            this.status = value[item][0];
            this.initLeaveInfo();
          }else if (item == 'status'){
            this.typeName = value[item][0];
            this.initScore();
          }
        }
      },
      handleTime(data){
        this.searchTimeDate = data;
      },
      searchStudent(){
        this.pageStudent = 1;
        this.initScore();
      },
      searchTopDate(data){
        this.searchData = data;
        this.initLeaveInfo();
      },
      searchTopType(data){
        //this.initLeaveInfo();
      },
      auditStatusInfo(val){
        return auditStatusText(val);
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .rpStatic-top-item .person-item{
    display: inline-block;
    width: 60px;
  }
  .rpStatic-top-item .title{
    font-weight: bold;
  }
  .rp-img{
    height: 50px;
    width: 50px;
    border: 1px solid #dddddd;
  }
  .rp-fotter-page{
    border: 1px solid #EBEEF5;
    border-top: 0px;
    height: 30px;
    line-height: 30px;
    width: 348px;
  }
  .item-span-layout{
    display: inline-block;
    width: 50px;
  }
  .item-span-tag-layout{
    display: inline-block;
    background: #67C23A;
    border-radius: 100%;
    color: #FFFFFF;
  }
</style>
