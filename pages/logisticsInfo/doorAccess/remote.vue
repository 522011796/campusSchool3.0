<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-disabeld font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">远程控制</span>
        </div>
        <my-el-tree :type="mainType" :sub-type="subType" @node-click="nodeClick">
          <div slot="top" class="text-center">
            <el-button :type="showType == 1 ? 'primary' : 'default'" size="mini" @click="changeTree(3,3, 1)">{{$t("建筑楼")}}</el-button>
            <el-button :type="showType == 2 ? 'primary' : 'default'" size="mini" @click="changeTree(2,3, 2)">{{$t("宿舍楼")}}</el-button>
          </div>
        </my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-right-tab">
          <el-row>
            <el-col :span="12">
              <div class="layout-inline">
                <my-select class="layout-item" size="small" :clearable="true" :sel-value="searchOpenType" :options="filterDoorOpenTypes" @change="handleSearchChange($event, 1)"></my-select>
                <my-select class="layout-item" size="small" :clearable="true" :sel-value="searchOnlineType" :options="filterDoorOnlineStatus" @change="handleSearchChange($event, 2)"></my-select>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="text-right">
                <i class="fa fa-file color-warning" @click="detailInfo"></i>
                <my-input-button ref="teacher" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('名称/SN')" @click="search"></my-input-button>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="bg-white border-bottom-1 padding-lr-5 padding-tb-5 custom-card-layout" :style="divHeight">
          <div v-if="tableData.length <= 0">
            <div class="text-center padding-tb-10">
              <span class="color-disabeld">{{$t("暂无数据")}}</span>
            </div>
          </div>
          <el-row v-else :gutter="16">
            <el-col :span="6" v-for="(item, index) in tableData" :key="index" class="margin-bottom-20">
              <el-card :body-style="{padding: '0px'}" style="position: relative;height: 200px">
                <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
                  <div class="color-success">
                    <i class="fa fa-cube"></i>
                    <span>{{item.name ? item.name : item.sn}}</span>
                    <span>
                      <label v-if="item.online">({{$t("在线")}})</label>
                      <label v-if="!item.online" class="color-danger">({{$t("离线")}})</label>
                    </span>
                  </div>
                </div>
                <div class="padding-tb-10 padding-lr-10 border-bottom-1">
                  <div>
                    <span class="color-disabeld">{{$t("设备用途")}}</span>
                    <span>{{$t("门禁控制")}}</span>
                  </div>
                  <div>
                    <span class="color-disabeld">{{$t("设备位置")}}</span>
                    <span style="display: inline-block; max-width: 150px;position: relative; top: 5px">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover" width="400">
                        <div class="text-left">
                          {{item.location_name}}
                        </div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          {{item.location_name}}
                        </div>
                      </el-popover>
                    </span>
                  </div>
                  <div>
                    <span class="color-disabeld">{{$t("授权人数")}}</span>
                    <span>{{item.user_count}}</span>
                  </div>
                  <div>
                    <span class="color-disabeld">{{$t("开关状态")}}</span>
                    <span v-if="item.control_type == 1" class="color-success">{{$t("常开")}}</span>
                    <span v-if="item.control_type == 2" class="color-danger">{{$t("常关")}}</span>
                    <span v-if="item.control_type == 3">{{$t("正常")}}</span>
                  </div>
                </div>
                <div class="padding-lr-10 padding-tb-10">
                  <el-row>
                    <el-col :span="18">
                      <el-button size="mini" plain type="success" v-if="item.control_type == 3" @click="open(item, true)">
                        {{$t("常开")}}
                      </el-button>
                      <el-button size="mini" plain type="danger" v-if="item.control_type == 3" style="margin-left: 0px" @click="open(item, false)">
                        {{$t("常关")}}
                      </el-button>
                      <el-button size="mini" plain type="grade" v-if="item.control_type == 1" @click="open(item, 'cancelOpen')">
                        {{$t("取消常开")}}
                      </el-button>
                      <el-button size="mini" plain type="grade" v-if="item.control_type == 2" @click="open(item, 'cancelClose')">
                        {{$t("取消常关")}}
                      </el-button>
                    </el-col>
                    <el-col :span="6" class="text-right">
                      <el-button size="mini" plain type="success" @click="open(item, 'only')">
                        {{$t("开")}}
                      </el-button>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="650px" :title="$t('开门记录')" @right-close="cancelDrawDialog">
      <div slot="content" v-loading="showDetailLoading">
        <span tabindex="1"></span>
        <div>
          <div>
            <my-date-picker class="layout-item" style="position: relative; top: 1px;" type="daterange" :sel-value="searchDate" size="small" width-style="240" @change="handleTime"></my-date-picker>
            <my-input-button ref="remoteDetail" class="layout-item" size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('姓名/设备')" @click="searchDetail"></my-input-button>
          </div>
          <el-table
            class="margin-top-10"
            ref="refTable"
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
                  <div class="text-center">{{scope.row.time ? $moment(scope.row.time).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.time ? $moment(scope.row.time).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="group_name"
              :label="$t('操作人')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.real_name }}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.real_name }}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="group_name"
              :label="$t('设备')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.name ? scope.row.name : scope.row.sn }}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.name ? scope.row.name : scope.row.sn }}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="group_name"
              :label="$t('执行')">
              <template slot-scope="scope">
                <span class="color-warning">{{$t("远程开门")}}</span>
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
  import {
    clearData, deviceType,
    dormStatus, MessageError, MessageSuccess
  } from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,MySearchOfDate,DrawerLayoutRight},
    data(){
      return {
        pageStudent: 1,
        numStudent: 20,
        totalStudent: 0,
        searchTimeData: {},
        tableData: [],
        tableDetailData: [],
        tableStudentData: [],
        searchDate: [],
        filtersDeviceType: [],
        searchCommDeptData: [],
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        showDetailLoading: false,
        searchOpenType: '',
        searchOnlineType: '',
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
        searchRecordKey: ''
      }
    },
    created() {
      this.init();
      this.deviceTypeGetInfo();
    },
    methods: {
      init(){
        let url = "";
        let online = "";
        let open = "";
        if (this.searchOnlineType == 1){
          online = true;
        }else if (this.searchOnlineType == 2){
          online = false;
        }
        let params = {
          page: this.page,
          num: this.num,
          keyword: this.searchKey,
          beginTime: this.searchDate && this.searchDate.length > 0 ? this.searchDate[0] : '',
          endTime: this.searchDate && this.searchDate.length > 0 ? this.searchDate[1] : '',
          type: this.searchDeviceType,
          sceneType: "3",
          aliveType: "",
          online: online,
          open: this.searchOpenType,
          controlType: this.searchOpenType,
        };
        params['buildingId'] = this.searchBuild;
        params['floorNum'] = this.searchFloor;
        params['classroomId'] = this.searchRoom;
        params['collegeId'] = this.searchCollege;
        params['majorId'] = this.searchMajor;
        params['grade'] = this.searchGrade;
        params['classId'] = this.searchClass;

        params = this.clearDataInfo(params);
        this.$axios.get(common.dormaccess_remote, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initRecord(){
        let params = {
          page: this.pageStudent,
          num: this.numStudent,
          beginTime: this.searchDate ? this.searchDate[0] : '',
          endTime: this.searchDate ? this.searchDate[1] : '',
          searchKey: this.searchRecordKey
        };
        params = this.$qs.stringify(params);
        this.showDetailLoading = true;
        this.$axios.post(common.dormaccess_remote_record, params, {loading: false}).then(res => {
          if (res.data.data){
            this.tableStudentData = res.data.data.list;
            this.totalStudent = res.data.data.totalCount;
            this.numStudent = res.data.data.num;
            this.pageStudent = res.data.data.currentPage;
          }
          this.showDetailLoading = false;
        });
      },
      detailInfo(){
        this.initRecord();
        this.drawerVisible = true;
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
        this.searchDate = [];
        this.searchRecordKey = '';
        this.pageStudent = 1;
        if (this.$refs.remoteDetail){
          this.$refs.remoteDetail.inputValue = "";
        }
        this.drawerVisible = event;
      },
      closeDrawDialog(event){
        this.searchDate = [];
        this.searchRecordKey = '';
        this.pageStudent = 1;
        if (this.$refs.remoteDetail){
          this.$refs.remoteDetail.inputValue = "";
        }
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
      handleSearchChange(data, type){
        if (type == 1){
          this.searchOpenType = data;
        }else if (type == 2){
          this.searchOnlineType = data;
        }
        this.page = 1;
        this.init();
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      searchDetail(data){
        this.searchRecordKey = data.input;
        this.page = 1;
        this.initRecord();
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
      open(item, type){
        let url = "";
        let params = {
          sn: item.sn
        };
        if (type == true){
          url = common.dormaccess_remote_open;
        }else if (type == false){
          url = common.dormaccess_remote_close;
        }else if (type == 'only'){
          url = common.dormaccess_remote_only_open;
        }else if (type == 'cancelOpen'){
          url = common.dormaccess_remote_cancel_open;
        }else if (type == 'cancelClose'){
          url = common.dormaccess_remote_cancel_close;
        }
        params = this.$qs.stringify(params);
        this.dialogLoading = true;
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.dialogLoading = false;
        });
      },
      cancelOpen(item, type){

      },
      sizeStudentChange(event){
        this.pageStudent = 1;
        this.numStudent = event;
        this.initRecord();
      },
      currentStudentPage(event){
        this.pageStudent = event;
        this.initRecord();
      },
      handleTime(data){
        this.searchDate = data;
      }
    }
  }
</script>

<style scoped>
  .container {

  }
</style>
