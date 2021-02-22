<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">通行分析</span>
        </div>
        <my-el-tree :type="mainType" :sub-type="subType" @node-click="nodeClick">
          <div slot="top" class="text-center">
            <el-button :type="showType == 1 ? 'primary' : 'default'" size="mini" @click="changeTree(3,3, 1)">{{$t("建筑楼")}}</el-button>
            <el-button :type="showType == 2 ? 'primary' : 'default'" size="mini" @click="changeTree(2,3, 2)">{{$t("宿舍楼")}}</el-button>
          </div>
        </my-el-tree>
      </div>

      <div slot="right">
        <div>
          <!--<my-search-of-date size="small" :show-year="true" :show-term="false" :show-week="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType">
            <span slot="other">
              <my-select class="layout-item" size="small" width-style="100" :sel-value="searchUserType" :options="filterUserTypes" @change="handleChangeUserType"></my-select>
              <my-cascader class="layout-item" ref="SelectorDoorAccess" size="small" width-style="160" :clearable="true" :sel-value="searchCommDeptData" :type="selType" :sub-type="selSubType" @change="_handleCascaderChange($event)"></my-cascader>
            </span>
          </my-search-of-date>-->
          <my-search-of-date-group size="small" :show-year="true" :show-term="false" :show-week="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType">
            <span slot="other">
              <my-select class="layout-item" size="small" width-style="100" :sel-value="searchUserType" :options="filterUserTypes2" @change="handleChangeUserType"></my-select>
              <my-cascader class="layout-item" ref="SelectorDoorAccess" size="small" width-style="160" :clearable="true" :sel-value="searchCommDeptData" :type="selType" :sub-type="selSubType" @change="_handleCascaderChange($event)"></my-cascader>
            </span>
          </my-search-of-date-group>
        </div>
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
                        <span class="person-item text-right">{{$t("总通行人数")}}</span>
                      </div>
                    </div>
                    <div class="pull-left margin-left-10">
                      <div class="line-ver-height" style="height: 150px"></div>
                    </div>
                    <div class="pull-left margin-left-10" style="overflow-y: auto; height: 150px">
                      <div class="margin-top-5 color-muted" v-for="(item, index) in typeData" :key="index">
                        <span class="text-right">{{item.name}}</span>
                        <el-tag size="mini" type="success">{{item.value}}</el-tag>
                      </div>
                    </div>
                    <div class="moon-clearfix"></div>
                  </div>
                </el-col>
                <el-col :span="16">
                  <div class="rpStatic-top-item color-muted">
                    <div style="height: 140px">
                      <line-chart chart-id="lineBaseId" :data-key="lineBaseKeyData" :data="lineBaseData" :data-legned="lineBaseLegned"></line-chart>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </div>
        </div>

        <div class="layout-right-tab margin-top-10">
          <el-row class="layout-inline">
            <el-col :span="6">
              <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("通行频率")}}</el-button>
              <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
            </el-col>
            <el-col :span="18" class="text-right">
              <my-select class="layout-item" size="small" :sel-value="searchLevel" :options="levelList" @change="handleSearchChange($event,1)"></my-select>
              <my-select class="layout-item" size="small" :sel-value="searchType" :options="filterDoorInOutStatus" @change="handleSearchChange($event,2)"></my-select>

              <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('姓名/编号')" @click="search"></my-input-button>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-table
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :max-height="tableHeight6.height"
            style="width: 100%">
            <el-table-column
              align="center"
              :label="$t('类型')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <span v-if="searchUserType == 1">{{$t("学生")}}</span>
                    <span v-if="searchUserType == 2">{{$t("教师")}}</span>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span v-if="searchUserType == 1">{{$t("学生")}}</span>
                    <span v-if="searchUserType == 2">{{$t("教师")}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('姓名')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.real_name}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span>{{scope.row.real_name}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('学号/工号')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <span v-if="searchUserType == 1">{{scope.row.student_id}}</span>
                    <span v-if="searchUserType == 2">{{scope.row.job_num}}</span>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span v-if="searchUserType == 1">{{scope.row.student_id}}</span>
                    <span v-if="searchUserType == 2">{{scope.row.job_num}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班级/部门')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <span v-if="searchUserType == 1">{{scope.row.class_name}}</span>
                    <span v-if="searchUserType == 2">{{scope.row.department_name}}</span>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span v-if="searchUserType == 1">{{scope.row.class_name}}</span>
                    <span v-if="searchUserType == 2">{{scope.row.department_name}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('进出总次数')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <span>{{scope.row.total}}</span>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span>{{scope.row.total}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('进入次数')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <span>{{scope.row.inDoorSum}}</span>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span>{{scope.row.inDoorSum}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('外出次数')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <span>{{scope.row.outDoorSum}}</span>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span>{{scope.row.outDoorSum}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('通行位置')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <span>{{scope.row.lastLocationName}}</span>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span>{{scope.row.lastLocationName}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('通行状态')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <span v-if="scope.row.lastInDoor == 1">{{$t("进入")}}</span>
                    <span v-if="scope.row.lastOutDoor == 1">{{$t("外出")}}</span>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span v-if="scope.row.lastInDoor == 1">{{$t("进入")}}</span>
                    <span v-if="scope.row.lastOutDoor == 1">{{$t("外出")}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('通行频率')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <span>{{scope.row.levelName}}</span>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span>{{scope.row.levelName}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('操作')">

              <template slot-scope="scope">
                <i class="fa fa-eye color-grand" @click="detailInfo(scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <dialog-normal width-style="650px" :visible="modalVisible" :title="$t('通行频率')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-table
          class="margin-top-10"
          ref="refTable"
          :data="tableLevelData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="group_name"
            :label="$t('等级名称')">
            <template slot-scope="scope">
              <span>{{scope.row.levelName}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="group_name"
            :label="$t('通行次数')">
            <template slot-scope="scope">
              <span v-if="scope.row.levelType == 1" class="color-success">
                <=
                <el-input size="mini" style="width: 80px" v-model="scope.row.maxTimes" @input="handleChangeInpur(scope.row.maxTimes, 1)"></el-input>
              </span>
              <span v-if="scope.row.levelType == 2" class="color-success">
                <=
                <el-input size="mini" style="width: 80px" v-model="scope.row.maxTimes" @input="handleChangeInpur(scope.row.maxTimes, 2)"></el-input>
              </span>
              <span v-if="scope.row.levelType == 3" class="color-success">
                >
                <el-input size="mini" style="width: 80px" v-model="scope.row.minTimes"></el-input>
              </span>
            </template>
          </el-table-column>
        </el-table>
        <div class="margin-top-5 font-size-12 color-danger">
          <div>
            {{$t("提示")}}：
          </div>
          <div>
            1、{{$t("当前设定的次数为日数据，月和年的数据自动乘以对应天数；")}}
          </div>
          <div>
            2、{{$t("频率等级“高”的通行次数阈值自动计算，无需手动输入。")}}
          </div>
        </div>
      </div>
      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="650px" :title="$t('开门记录')" @right-close="cancelDrawDialog">
      <div slot="content">
        <span tabindex="1"></span>
        <div>
          <div class="layout-inline">
            <my-select class="layout-item" size="small" :clearable="true" :sel-value="searchDetailType" :options="filterDoorInOutStatus" @change="handleSearchChangeDetailType($event)"></my-select>

            <my-date-picker class="layout-item" style="position: relative; top: 1px;" type="daterange" :clearable="true" :sel-value="searchDate" size="small" width-style="240" @change="handleTime"></my-date-picker>
            <el-button size="small" type="success" plain @click="searchDetail">{{$t("搜索")}}</el-button>
            <el-button size="small" type="warning" plain @click="exportDetail">{{$t("导出")}}</el-button>
          </div>
          <el-table
            class="margin-top-10"
            ref="refTable"
            v-loading="showDetailLoading"
            :data="tableStudentData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            style="width: 100%">
            <el-table-column
              align="center"
              prop="group_name"
              :label="$t('时间')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.add_time ? $moment(scope.row.add_time).format("YYYY-MM-DD HH:mm") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.add_time ? $moment(scope.row.add_time).format("YYYY-MM-DD HH:mm") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="group_name"
              :label="$t('位置')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.device_location_name }}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.device_location_name }}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="group_name"
              :label="$t('设备类型')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ deviceTypeInfo(scope.row.device_type) }}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ deviceTypeInfo(scope.row.device_type) }}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="group_name"
              :label="$t('进入类型')">
              <template slot-scope="scope">
                <span class="color-success" v-if="scope.row.in_door == 1">{{$t("进入")}}</span>
                <span class="color-warning" v-if="scope.row.out_door == 1">{{$t("外出")}}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="group_name"
              :label="$t('通过状态')">
              <template slot-scope="scope">
                <span class="color-success" v-if="scope.row.alive_type == 1">{{$t("通过")}}</span>
                <span class="color-warning" v-if="scope.row.alive_type != 1">{{$t("无权限")}}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="group_name"
              :label="$t('人脸/卡号')">
              <template slot-scope="scope">
                <div v-if="scope.row.rec_mode == 1">
                  <div v-if="scope.row.photo_status == 0">
                    <i class="fa fa-refresh color-grand" style="font-size: 15px"></i>
                  </div>
                  <div v-if="scope.row.photo_status != 0">
                    <!--<img :src="scope.row.photourl" style="width: 30px; height: 30px; border-radius: 30px" />-->
                    <my-head-img :head-img="scope.row.photourl" style="display: inline-block"></my-head-img>
                  </div>
                </div>
                <div v-if="scope.row.rec_mode != 1">
                  <span>{{scope.row.photourl}}</span>
                </div>
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
  import MyHeadImg from "../../../components/utils/common/MyHeadImg";
  import {
    clearData, deviceType,
    dormStatus, MessageError, MessageSuccess, MessageWarning
  } from "../../../utils/utils";
  import LineChart from "../../../components/charts/LineChart";
  export default {
    mixins: [mixins],
    components: {
      LineChart,
      LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,MySearchOfDate,DrawerLayoutRight,MyHeadImg},
    data(){
      return {
        pageStudent: 1,
        numStudent: 20,
        totalStudent: 0,
        searchTimeData: {},
        tableData: [],
        tableDetailData: [],
        searchDate: [],
        filtersDeviceType: [],
        searchCommDeptData: [],
        typeData: [],
        personTotal: 0,
        searchLevel: '',
        levelList: [],
        lineBaseKeyData: [],
        lineBaseData: [],
        lineBaseLegned: [],
        tableLevelData: [],
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        showDetailLoading: false,
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        searchBuild: '',
        searchFloor: '',
        searchRoom: '',
        searchKey: '',
        searchDeviceType: '',
        searchDept: '',
        subTitle: '',
        uploadProcess: '',
        searchType: '',
        searchDetailType: '',
        uploadResult: {},
        showType: 1,
        mainType: "3",
        subType: "3",
        searchUserType: '1',
        uploadFile: common.teacher_file + "?fileName=" + encodeURIComponent(this.$t("学生导入模板20180130_v2.xls")),
        uploadAction: common.student_upload,
        loopTimer: null,
        resultList: [],
        tableStudentData: [],
        searchTopTime: this.$moment(new Date).format("YYYY-MM-DD"),
        detailUserId: '',
        selType: '1',
        selSubType: "4"
      }
    },
    created() {
      this.init();
      this.initLevel();
      this.initLevelPage();
    },
    methods: {
      init(){
        let url = "";
        let userType = "";
        let params = {
          page: this.page,
          num: this.num,
          userType: userType,
          departmentPath: ''
        };
        if (this.searchUserType == 1){
          userType = 5;
          params['userType'] = userType;
          params['buildId'] = this.searchBuild;
          params['floorNum'] = this.searchFloor;
          params['roomId'] = this.searchRoom;
          params['collegeId'] = this.searchCollege;
          params['majorId'] = this.searchMajor;
          params['grade'] = this.searchGrade;
          params['classId'] = this.searchClass;
        }else if (this.searchUserType == 2){
          userType = 4;
          params['buildId'] = this.searchBuild;
          params['floorNum'] = this.searchFloor;
          params['roomId'] = this.searchRoom;
          params['userType'] = userType;
          params['departmentPath'] = this.searchDept;
        }
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          let day = this.searchTimeData.value;
          params['year'] = day.split("-")[0];
          params['month'] = day.split("-")[1];
          params['day'] = day.split("-")[2];
          params['timeUnit'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeUnit'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          let day = this.searchTimeData.value;
          params['year'] = day.split("-")[0];
          params['month'] = day.split("-")[1];
          params['timeUnit'] = 4;
        }else if (this.searchTimeData.timeUnit == 4){
          params['year'] = this.searchTimeData.value;
          params['timeUnit'] = 6;
        }else {
          let day = this.$moment(new Date()).format("YYYY-MM-DD");
          params['year'] = day.split("-")[0];
          params['month'] = day.split("-")[1];
          params['day'] = day.split("-")[2];
          params['timeUnit'] = 3;
        }
        this.initPage(params);
        this.initStatic(params);
        this.initLine(params);
      },
      initPage(params){
        let url = common.dormaccess_pass_static_page;
        params['keyword'] = this.searchKey;
        params['minSum'] = this.searchLevel != "" ? this.searchLevel.split("-")[0] : "";
        params['maxSum'] = this.searchLevel != "" ? this.searchLevel.split("-")[1] : "";
        params['deviceSceneSubType'] = this.searchType;
        params['keyword'] = this.searchKey;
        params = this.clearDataInfo(params);
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initLevel(){
        let url = common.dormaccess_pass_static_level;
        this.$axios.get(url).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.length; i++ ){
              res.data.data[i]['value'] = res.data.data[i].minTimes + "-" + res.data.data[i].maxTimes;
              res.data.data[i]['label'] = res.data.data[i].levelName
            }
            this.levelList = res.data.data;
          }
        });
      },
      initStatic(params){
        let url = common.dormaccess_pass_static_total;
        let arr = [];
        params = this.clearDataInfo(params);
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            arr.push(
              {
                name: this.$t("进入"),
                value: res.data.data.inDoorSum
              },
              {
                name: this.$t("外出"),
                value: res.data.data.outDoorSum
              }
            );
            this.typeData = arr;
            this.personTotal = res.data.data.totalSum;
          }
        });
      },
      initLevelPage(){
        let url = common.dormaccess_pass_static_level_page;
        let params = {
          page: 1,
          num: 10
        };
        params = this.clearDataInfo(params);
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            this.tableLevelData = res.data.data;
          }
        });
      },
      initLine(params){
        let url = common.dormaccess_pass_static_line;
        params = this.clearDataInfo(params);
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            this.lineBaseKeyData = res.data.data.title;
            this.lineBaseLegned = [this.$t("进入"),this.$t("外出")];
            this.lineBaseData = [
              {
                name: '进入',
                type: 'line',
                data: res.data.data.inDoorList
              },{
                name: '外出',
                type: 'line',
                data: res.data.data.outDoorList
              }
            ];
          }
        });
      },
      initDetail(row){
        if (row){
          this.detailUserId = row.user_id;
        }else {
          this.detailUserId = this.detailUserId;
        }
        let url = common.dormaccess_pass_static_detail;
        let userType = "";
        if (this.searchUserType == 1){
          userType = 5
        }else if (this.searchUserType == 2){
          userType = 4
        }
        let params = {};
        params['page'] = this.pageStudent;
        params['num'] = this.numStudent;
        params['userType'] = userType;
        params['userId'] = this.detailUserId;
        params['startTime'] = this.searchDate && this.searchDate.length > 0 ? (this.searchDate[0] + ' 00:00') : '';
        params['endTime'] = this.searchDate && this.searchDate.length > 0 ? (this.searchDate[1] + ' 23:59') : '';
        params['deviceSceneSubType'] = this.searchDetailType;
        if (this.searchUserType == 1){
          userType = 5;
          params['userType'] = userType;
          params['buildId'] = this.searchBuild;
          params['floorNum'] = this.searchFloor;
          params['roomId'] = this.searchRoom;
          params['collegeId'] = this.searchCollege;
          params['majorId'] = this.searchMajor;
          params['grade'] = this.searchGrade;
          params['classId'] = this.searchClass;
        }else if (this.searchUserType == 2){
          userType = 4;
          params['buildId'] = this.searchBuild;
          params['floorNum'] = this.searchFloor;
          params['roomId'] = this.searchRoom;
          params['userType'] = userType;
          params['departmentPath'] = this.searchDept;
        }
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          let day = this.searchTimeData.value;
          params['year'] = day.split("-")[0];
          params['month'] = day.split("-")[1];
          params['day'] = day.split("-")[2];
          params['timeUnit'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeUnit'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          let day = this.searchTimeData.value;
          params['year'] = day.split("-")[0];
          params['month'] = day.split("-")[1];
          params['timeUnit'] = 4;
        }else if (this.searchTimeData.timeUnit == 4){
          params['year'] = this.searchTimeData.value;
          params['timeUnit'] = 6;
        }else {
          let day = this.$moment(new Date()).format("YYYY-MM-DD");
          params['year'] = day.split("-")[0];
          params['month'] = day.split("-")[1];
          params['day'] = day.split("-")[2];
          params['timeUnit'] = 3;
        }
        params = this.clearDataInfo(params);
        this.showDetailLoading = true;
        this.$axios.get(url, {params: params,loading: false}).then(res => {
          if (res.data.data){
            this.tableStudentData = res.data.data.list;
            this.totalStudent = res.data.data.totalCount;
            this.numStudent = res.data.data.num;
            this.pageStudent = res.data.data.currentPage;
          }
          this.showDetailLoading = false;
        });
      },
      addInfo(){
        this.initLevelPage();
        this.modalVisible = true;
      },
      detailInfo(row){
        this.initDetail(row);
        this.drawerVisible = true;
      },
      expandInfo(){
        let url = common.dormaccess_pass_static_export;
        let userType = "";
        let params = {
          page: 1,
          num: 99999,
          userType: userType,
          departmentPath: ''
        };
        if (this.searchUserType == 1){
          userType = 5;
          params['userType'] = userType;
          params['buildId'] = this.searchBuild;
          params['floorNum'] = this.searchFloor;
          params['roomId'] = this.searchRoom;
          params['collegeId'] = this.searchCollege;
          params['majorId'] = this.searchMajor;
          params['grade'] = this.searchGrade;
          params['classId'] = this.searchClass;
        }else if (this.searchUserType == 2){
          userType = 4;
          params['buildId'] = this.searchBuild;
          params['floorNum'] = this.searchFloor;
          params['roomId'] = this.searchRoom;
          params['userType'] = userType;
          params['departmentPath'] = this.searchDept;
        }
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          let day = this.searchTimeData.value;
          params['year'] = day.split("-")[0];
          params['month'] = day.split("-")[1];
          params['day'] = day.split("-")[2];
          params['timeUnit'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeUnit'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          let day = this.searchTimeData.value;
          params['year'] = day.split("-")[0];
          params['month'] = day.split("-")[1];
          params['timeUnit'] = 4;
        }else if (this.searchTimeData.timeUnit == 4){
          params['year'] = this.searchTimeData.value;
          params['timeUnit'] = 6;
        }else {
          let day = this.$moment(new Date()).format("YYYY-MM-DD");
          params['year'] = day.split("-")[0];
          params['month'] = day.split("-")[1];
          params['day'] = day.split("-")[2];
          params['timeUnit'] = 3;
        }
        params = this.$qs.stringify(params);
        window.open(url+"?"+params, "_self");
      },
      exportDetail(){
        let url = common.dormaccess_pass_static_detail_export;
        let userType = "";
        let params = {};
        params['page'] = this.pageStudent;
        params['num'] = this.numStudent;
        params['userId'] = this.detailUserId;
        params['startTime'] = this.searchDate.length > 0 ? (this.searchDate[0] + ' 00:00') : '';
        params['endTime'] = this.searchDate.length > 0 ? (this.searchDate[1] + ' 23:59') : '';
        params['deviceSceneSubType'] = this.searchDetailType;
        if (this.searchUserType == 1){
          userType = 5;
          params['userType'] = userType;
          params['buildId'] = this.searchBuild;
          params['floorNum'] = this.searchFloor;
          params['roomId'] = this.searchRoom;
          params['collegeId'] = this.searchCollege;
          params['majorId'] = this.searchMajor;
          params['grade'] = this.searchGrade;
          params['classId'] = this.searchClass;
        }else if (this.searchUserType == 2){
          userType = 4;
          params['userType'] = userType;
          params['departmentPath'] = this.searchDept;
        }
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          let day = this.searchTimeData.value;
          params['year'] = day.split("-")[0];
          params['month'] = day.split("-")[1];
          params['day'] = day.split("-")[2];
          params['timeUnit'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeUnit'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          let day = this.searchTimeData.value;
          params['year'] = day.split("-")[0];
          params['month'] = day.split("-")[1];
          params['timeUnit'] = 4;
        }else if (this.searchTimeData.timeUnit == 4){
          params['year'] = this.searchTimeData.value;
          params['timeUnit'] = 6;
        }else {
          let day = this.$moment(new Date()).format("YYYY-MM-DD");
          params['year'] = day.split("-")[0];
          params['month'] = day.split("-")[1];
          params['day'] = day.split("-")[2];
          params['timeUnit'] = 3;
        }
        params = this.clearDataInfo(params);
        params = this.$qs.stringify(params);
        window.open(url+"?"+params, "_self");
      },
      nodeClick(data){
        this.searchBuild = "";
        this.searchFloor = "";
        this.searchRoom = "";
        if(data.unit == 6){
          this.searchBuild = data.id;
        }else if(data.unit == 7){
          this.searchBuild = data.buildId;
          this.searchFloor = data.floorNum;
        }else if(data.unit == 8){
          this.searchBuild = data.buildId;
          this.searchFloor = data.floorNum;
          this.searchRoom = data.id;
        }else if(data.unit == 9){
          this.searchBuild = data.buildId;
          this.searchFloor = data.floorNum;
          this.searchRoom = data.id;
        }
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
        this.pageStudent = 1;
        this.numStudent = 20;
        this.searchDate = [];
        this.searchDetailType = "";
        this.drawerVisible = event;
      },
      closeDrawDialog(event){
        this.pageStudent = 1;
        this.numStudent = 20;
        this.searchDate = [];
        this.searchDetailType = "";
        this.drawerVisible = false;
      },
      cancelDrawDialog(){
        this.pageStudent = 1;
        this.numStudent = 20;
        this.searchDate = [];
        this.searchDetailType = "";
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
      handleChangeUserType(data){
        this.searchUserType = data;
        this.resetCasadeSelector('SelectorDoorAccess');
        if (data == 1){
          this.selType = "1";
          this.selSubType = "4";
        }else if (data == 2){
          this.selType = "4";
          this.selSubType = "";
        }
        this.page = 1;
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
      _handleCascaderChange(data){
        //this.commSearchDept = data[data.length-1];
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        this.searchDept = "";
        if (this.searchUserType == 1){
          if (data.length == 1){
            this.searchCollege = data[0];
          }else if (data.length == 2){
            this.searchCollege = data[0];
            this.searchMajor = data[1];
          }else if (data.length == 3){
            this.searchCollege = data[0];
            this.searchMajor = data[1];
            this.searchGrade = data[2];
          }else if (data.length == 4){
            this.searchCollege = data[0];
            this.searchMajor = data[1];
            this.searchGrade = data[2];
            this.searchClass = data[3];
          }
        }else if (this.searchUserType == 2){
          this.searchDept = data[data.length - 1] ;
        }
        this.init(this.searchDept);
      },
      handleSearchChange(data,type){
        if (type == 1){
          this.searchLevel = data;
        }else if (type == 2){
          this.searchType = data;
        }
      },
      sizeStudentChange(event){
        this.pageStudent = 1;
        this.numStudent = event;
        this.initDetail();
      },
      currentStudentPage(event){
        this.pageStudent = event;
        this.initDetail();
      },
      handleTime(data){
        this.searchDate = data;
      },
      handleSearchChangeDetailType(type){
        this.searchDetailType = type;
      },
      deviceTypeInfo(val){
        return deviceType('set',val);
      },
      searchDetail(data){
        this.pageStudent = 1;
        this.initDetail();
      },
      okDialog(event){
        let url = "";
        let params = {};
        let arr = [];
        let req = /^[1-9]\d*$/;
        if (this.tableLevelData[0].levelType == 1){
          if (!req.test(this.tableLevelData[0].maxTimes)){
            MessageWarning(this.$t("频率只能为非0整数"));
            return;
          }
          arr[0] = {
            levelName: this.tableLevelData[0].levelName,
            levelType: this.tableLevelData[0].levelType,
            minTimes: '',
            maxTimes: this.tableLevelData[0].maxTimes
          };
        }
        if (this.tableLevelData[1].levelType == 2){
          if (!req.test(this.tableLevelData[1].maxTimes)){
            MessageWarning(this.$t("频率只能为非0整数"));
            return;
          }
          arr[1] = {
            levelName: this.tableLevelData[1].levelName,
            levelType: this.tableLevelData[1].levelType,
            minTimes: this.tableLevelData[0].maxTimes,
            maxTimes: this.tableLevelData[1].maxTimes
          };
        }
        if (this.tableLevelData[2].levelType == 3){
          if (!req.test(this.tableLevelData[2].minTimes)){
            MessageWarning(this.$t("频率只能为非0整数"));
            return;
          }
          arr[2] = {
            levelName: this.tableLevelData[2].levelName,
            levelType: this.tableLevelData[2].levelType,
            minTimes: '',
            maxTimes: ''
          };
          if (this.tableLevelData[1].maxTimes != ""){
            arr[2]['minTimes'] = this.tableLevelData[1].maxTimes;
          }else {
            arr[2]['minTimes'] = this.tableLevelData[0].maxTimes;
          }
        }
        params = {
          accessControlLevelValidList: arr,
        };
        url = common.dormaccess_pass_static_level_save;
        this.dialogLoading = true;
        this.$axios.post(url, JSON.stringify(params), {dataType: 'stringfy', loading: false}).then(res => {
          if (res.data.code == 200){
            this.modalVisible = false;
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.dialogLoading = false;
        });
      },
      closeDialog(event){

      },
      handleChangeInpur(data, type){
        if (type == 1){
          if (this.tableLevelData[1].maxTimes != ""){
            this.tableLevelData[2].maxTimes = this.tableLevelData[1].maxTimes;
          }else {
            this.tableLevelData[2].minTimes = data;
          }
        }else if (type == 2){
          if (data != ""){
            this.tableLevelData[2].minTimes = data;
          }else {
            this.tableLevelData[2].minTimes = this.tableLevelData[0].maxTimes;
          }
        }
      }
    }
  }
</script>

<style scoped>
  .container {

  }
</style>
