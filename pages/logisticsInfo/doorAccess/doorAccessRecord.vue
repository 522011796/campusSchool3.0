<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">识别记录</span>
        </div>
        <my-el-tree :type="mainType" :sub-type="subType" @node-click="nodeClick" @all-click="nodeClick">
          <div slot="top" class="text-center">
            <el-button :type="showType == 1 ? 'primary' : 'default'" size="mini" @click="changeTree(3,3, 1)">{{$t("建筑楼")}}</el-button>
            <el-button :type="showType == 2 ? 'primary' : 'default'" size="mini" @click="changeTree(2,3, 2)">{{$t("宿舍楼")}}</el-button>
          </div>
        </my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="8">
              <div class="layout-inline">
                <my-select width-style="100" class="layout-item" size="small" :sel-value="searchUserType" :options="filterUserTypes" @change="handleChangeUserType"></my-select>
                <my-cascader v-if="searchUserType != 3" class="layout-item" ref="SelectorDoorAccess" size="small" width-style="140" :clearable="true" :sel-value="searchCommDeptData" :type="selType" :sub-type="selSubType" @change="_handleCascaderChange($event)"></my-cascader>
                <el-button class="layout-item" style="padding: 9px 5px !important;" size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
              </div>
            </el-col>
            <el-col :span="16">
              <div class="layout-inline text-right">
                <my-select :clearable="true" class="layout-item" width-style="120" size="small" :sel-value="searchUserSignType" :options="filterDoorSignStatus" @change="handleChangeUserSignType"></my-select>
                <my-date-picker class="layout-item" :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
                <my-input-button class="layout-item" ref="teacher" size="small" plain width-class="width: 120px" type="success" :clearable="true" :placeholder="$t('姓名/工号')" @click="search"></my-input-button>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="margin-top-10">
          <el-table
            v-show="searchUserType != 3"
            ref="refTable"
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :max-height="tableHeight2.height"
            style="width: 100%"
            @filter-change="fliterTable">
            <el-table-column
              v-if="searchUserType != 3"
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
              v-if="searchUserType == 1"
              align="center"
              :label="$t('学号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.student_id ? scope.row.student_id : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.student_id ? scope.row.student_id : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              v-if="searchUserType == 2"
              align="center"
              :label="$t('工号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.job_num ? scope.row.job_num : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.job_num ? scope.row.job_num : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              v-if="searchUserType == 1"
              align="center"
              :label="$t('班级')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.class_name ? scope.row.class_name : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.class_name ? scope.row.class_name : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              v-if="searchUserType == 2"
              align="center"
              :label="$t('部门')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.department_name ? scope.row.department_name : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.department_name ? scope.row.department_name : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('设备类型')">
              <template slot-scope="scope">
                <el-popover v-if="searchUserType == 1 || searchUserType == 2" trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{deviceTypeInfo('set', scope.row.device_type)}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{deviceTypeInfo('set', scope.row.device_type)}}
                  </div>
                </el-popover>
                <el-popover v-if="searchUserType == 3" trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{deviceTypeInfo('set', scope.row.type)}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{deviceTypeInfo('set', scope.row.type)}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              v-if="searchUserType != 3"
              align="center"
              :label="$t('设备名称')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('位置')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.device_location_name}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.device_location_name}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('设备SN')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.sn}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.sn}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('上报时间')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{$moment(scope.row.add_time).format("YYYY-MM-DD HH:mm:ss")}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{$moment(scope.row.add_time).format("YYYY-MM-DD HH:mm:ss")}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('识别时间')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{$moment(scope.row.time).format("YYYY-MM-DD HH:mm:ss")}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{$moment(scope.row.time).format("YYYY-MM-DD HH:mm:ss")}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="group_name"
              :label="$t('进/出')"
              :filter-multiple="false"
              column-key="inout"
              :filters="inoutTypes">
              <template slot="header">
                <span v-if="filterInoutText == ''">{{$t('进/出')}}</span>
                <span v-if="filterInoutText != ''">{{filterInoutText}}</span>
              </template>
              <template slot-scope="scope">
                <span class="color-success" v-if="scope.row.in_door == 1">{{$t("进入")}}</span>
                <span class="color-warning" v-if="scope.row.out_door == 1">{{$t("外出")}}</span>
                <span class="color-warning" v-if="!scope.row.in_door && !scope.row.out_door">--</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('人脸/卡号')">
              <template slot-scope="scope">
                <div v-if="scope.row.rec_mode == 1">
                  <my-head-img :head-img="scope.row"></my-head-img>
                  <!--<div v-if="scope.row.photo_status == 0">
                    <i class="fa fa-refresh color-grand" style="font-size: 15px"></i>
                  </div>
                  <div v-if="scope.row.photo_status != 0">
                    <img :src="scope.row.photourl" style="width: 30px; height: 30px; border-radius: 30px" />
                  </div>-->
                </div>
                <div v-if="scope.row.rec_mode != 1">
                  <span>{{scope.row.photourl}}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('状态')">
              <template slot-scope="scope">
                <span v-if="scope.row.alive_type == 1" class="color-success">{{$t("通过")}}</span>
                <span v-if="scope.row.alive_type == 2" class="color-danger">{{$t("失败")}}</span>
                <span v-if="scope.row.alive_type == 3" class="color-warning">{{$t("无权限")}}</span>
              </template>
            </el-table-column>
          </el-table>

          <el-table
            v-show="searchUserType == 3"
            ref="refStaTable"
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :max-height="tableHeight2.height"
            style="width: 100%"
            @filter-change="fliterTable">
            <el-table-column
              v-if="searchUserType != 3"
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
              v-if="searchUserType == 1"
              align="center"
              :label="$t('学号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.student_id ? scope.row.student_id : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.student_id ? scope.row.student_id : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              v-if="searchUserType == 2"
              align="center"
              :label="$t('工号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.job_num ? scope.row.job_num : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.job_num ? scope.row.job_num : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              v-if="searchUserType == 1"
              align="center"
              :label="$t('班级')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.class_name ? scope.row.class_name : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.class_name ? scope.row.class_name : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              v-if="searchUserType == 2"
              align="center"
              :label="$t('部门')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.department_name ? scope.row.department_name : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.department_name ? scope.row.department_name : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('设备类型')">
              <template slot-scope="scope">
                <el-popover v-if="searchUserType == 1 || deviceTypeInfo == 2" trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{deviceTypeInfo('set', scope.row.device_type)}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{deviceTypeInfo('set', scope.row.device_type)}}
                  </div>
                </el-popover>
                <el-popover v-if="searchUserType == 3" trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{deviceTypeInfo('set', scope.row.type)}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{deviceTypeInfo('set', scope.row.type)}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              v-if="searchUserType != 3"
              align="center"
              :label="$t('设备名称')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('位置')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.device_location_name}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.device_location_name}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('设备SN')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.sn}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.sn}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('上报时间')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{$moment(scope.row.add_time).format("YYYY-MM-DD HH:mm:ss")}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{$moment(scope.row.add_time).format("YYYY-MM-DD HH:mm:ss")}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('识别时间')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{$moment(scope.row.time).format("YYYY-MM-DD HH:mm:ss")}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{$moment(scope.row.time).format("YYYY-MM-DD HH:mm:ss")}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('进/出')"
              :filter-multiple="false"
              column-key="inout"
              :filters="inoutTypes">
              <template slot="header">
                <span v-if="filterInoutText == ''">{{$t('进/出')}}</span>
                <span v-if="filterInoutText != ''">{{filterInoutText}}</span>
              </template>
              <template slot-scope="scope">
                <span class="color-success" v-if="scope.row.in_door == 1">{{$t("进入")}}</span>
                <span class="color-warning" v-if="scope.row.out_door == 1">{{$t("外出")}}</span>
                <span class="color-warning" v-if="!scope.row.in_door && !scope.row.out_door">--</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('照片抓怕')">
              <template slot-scope="scope">
                <my-head-img :head-img="scope.row"></my-head-img>
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
  import MyHeadImg from "../../../components/utils/common/MyHeadImg";
  import {
    clearData, deviceType,
    dormStatus
  } from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,MySearchOfDate,DrawerLayoutRight,MyHeadImg},
    data(){
      return {
        searchTimeData: {},
        tableData: [],
        tableDetailData: [],
        searchDate: [],
        filtersDeviceType: [],
        searchCommDeptData: [],
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
        searchRoom: '',
        searchKey: '',
        searchDeviceType: '',
        searchInoutType: '',
        filterInoutText: '',
        searchDept: '',
        subTitle: '',
        uploadProcess: '',
        searchType: -1,
        searchDetailType: -1,
        uploadResult: {},
        showType: 1,
        mainType: "3",
        subType: "3",
        searchUserType: '1',
        uploadFile: common.teacher_file + "?fileName=" + encodeURIComponent(this.$t("学生导入模板20180130_v2.xls")),
        uploadAction: common.student_upload,
        loopTimer: null,
        resultList: [],
        searchTopTime: this.$moment(new Date).format("YYYY-MM-DD"),
        selType: '1',
        selSubType: "4",
        searchUserSignType: '',
        inoutTypes: [{ text: this.$t("进入"), value: '1' }, { text: '外出', value: '2' }]
      }
    },
    created() {
      let startTime = this.$moment().subtract(7, 'days').format("YYYY-MM-DD");
      let endTime = this.$moment().format("YYYY-MM-DD");
      this.searchDate = [startTime, endTime];
      this.init();
      this.deviceTypeGetInfo();
    },
    methods: {
      init(){
        let url = "";
        let params = {
          page: this.page,
          num: this.num,
          searchKey: this.searchKey,
          beginTime: this.searchDate && this.searchDate.length > 0 ? this.searchDate[0] : '',
          endTime: this.searchDate && this.searchDate.length > 0 ? this.searchDate[1] : '',
          type: this.searchDeviceType,
          sceneType: "3,4",
          searchTopType: this.searchUserType,
          deviceLocationType: this.showType == 1 ? 0 : 1,
          departmentPath: '',
          aliveType: this.searchUserSignType
        };
        if (this.searchInoutType == 1){
          params['in_door'] = 1;
        }else if (this.searchInoutType == 2){
          params['out_door'] = 1;
        }

        if (this.searchUserType == 1){
          params['deviceBuildId'] = this.searchBuild;
          params['deviceFloorNum'] = this.searchFloor;
          params['deviceRoomId'] = this.searchRoom;
          params['collegeId'] = this.searchCollege;
          params['majorId'] = this.searchMajor;
          params['grade'] = this.searchGrade;
          params['classId'] = this.searchClass;
        }else if (this.searchUserType == 2){
          params['departmentPath'] = this.searchDept;
        }

        if (this.searchUserType == 1){
          url = common.dormaccess_record_stu;
        }else if (this.searchUserType == 2){
          url = common.dormaccess_record_ter;
        }else if (this.searchUserType == 3){
          url = common.dormaccess_record_sta;
        }
        params = this.clearDataInfo(params);
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
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
        this.page = 1;
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
          }else if (item == 'inout'){
            this.filterInoutText = "";
            this.searchInoutType = value[item][0];
            for (let i = 0; i < this.inoutTypes.length; i++){
              if (this.searchInoutType == this.inoutTypes[i].value){
                this.filterInoutText = this.inoutTypes[i].text;
              }
            }
          }
        }
        this.init();
      },
      handleChange(data){
        this.searchDate = data;
      },
      handleChangeUserType(data){
        this.searchUserType = data;
        this.filterInoutText = "";
        this.searchInoutType = "";
        this.$refs.refTable.clearFilter();
        this.$refs.refStaTable.clearFilter();
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
      handleChangeUserSignType(data){
        this.searchUserSignType = data;
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
      expandInfo(){
        let url = "";
        let params = {
          page: this.page,
          num: this.num,
          searchKey: this.searchKey,
          beginTime: this.searchDate && this.searchDate.length > 0 ? this.searchDate[0] : '',
          endTime: this.searchDate && this.searchDate.length > 0 ? this.searchDate[1] : '',
          type: this.searchDeviceType,
          sceneType: "3,4",
          searchTopType: this.searchUserType,
          deviceLocationType: this.showType == 1 ? 0 : 1,
          departmentPath: '',
          aliveType: this.searchUserSignType
        };

        if (this.searchUserType == 1){
          params['deviceBuildId'] = this.searchBuild;
          params['deviceFloorNum'] = this.searchFloor;
          params['deviceRoomId'] = this.searchRoom;
          params['collegeId'] = this.searchCollege;
          params['majorId'] = this.searchMajor;
          params['grade'] = this.searchGrade;
          params['classId'] = this.searchClass;
        }else if (this.searchUserType == 2){
          params['departmentPath'] = this.searchDept;
        }

        if (this.searchUserType == 1){
          url = common.dormaccess_record_stu_export;
        }else if (this.searchUserType == 2){
          url = common.dormaccess_record_ter_export;
        }else if (this.searchUserType == 3){
          url = common.dormaccess_record_sta_export;
        }
        params = this.clearDataInfo(params);
        params = this.$qs.stringify(params);
        window.open(url+"?"+params, "_self");
      }
    }
  }
</script>

<style scoped>
  .container {

  }
</style>
