<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">识别记录</span>
        </div>
        <my-el-tree type="1" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="24" class="text-right">
              <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
              <my-input-button ref="teacher" size="small" plain width-class="width: 120px" type="success" :clearable="true" :placeholder="$t('姓名/学号')" @click="search"></my-input-button>
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
            style="width: 100%"
            @filter-change="fliterTable">
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
              align="center"
              :label="$t('位置')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.build_name}}-{{scope.row.dormitory_no}}-{{scope.row.bed_no}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.build_name}}-{{scope.row.dormitory_no}}-{{scope.row.bed_no}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('设备类型')"
              :filter-multiple="false"
              column-key="deviceType"
              width="100"
              :filters="filtersDeviceType">
              <template slot="header">
                <span>{{$t('设备类型')}}</span>
                <span v-if="filtersDeviceTypeText != ''" class="font-size-12 color-disabeld moon-content-text-ellipsis-class">{{filtersDeviceTypeText}}</span>
              </template>
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{deviceTypeInfo('set', scope.row.device_type)}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{deviceTypeInfo('set', scope.row.device_type)}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
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
                  <div class="text-center">{{scope.row.add_time ? $moment(scope.row.add_time).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.add_time? $moment(scope.row.add_time).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('识别时间')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.time ? $moment(scope.row.time).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.time ? $moment(scope.row.time).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('照片抓拍')">
              <template slot-scope="scope">
                <photo-head-img :head-img="scope.row" @click="refreshPhoto"></photo-head-img>
                <!--<div v-if="scope.row.photo_status == 0">
                  <i class="fa fa-refresh color-grand" style="font-size: 15px"></i>
                </div>
                <div v-if="scope.row.photo_status != 0">
                  <img :src="scope.row.photourl" style="width: 30px; height: 30px; border-radius: 30px" />
                </div>-->
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('状态')">
              <template slot-scope="scope">
                <span class="color-success">{{$t('通过')}}</span>
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
  import {
    clearData, deviceType,
    dormStatus
  } from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,MySearchOfDate,DrawerLayoutRight},
    data(){
      return {
        searchTimeData: {},
        tableData: [],
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
        searchTopTime: this.$moment(new Date).format("YYYY-MM-DD"),
        filtersDeviceTypeText: ''
      }
    },
    created() {
      let startTime = this.$moment().subtract(6, 'days').format("YYYY-MM-DD");
      let endTime = this.$moment(new Date()).format("YYYY-MM-DD");
      this.searchDate = [startTime, endTime];
      this.init();
      this.deviceTypeGetInfo();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          searchKey: this.searchKey,
          beginTime: this.searchDate && this.searchDate.length > 0 ? this.searchDate[0] : '',
          endTime: this.searchDate && this.searchDate.length > 0 ? this.searchDate[1] : '',
          sceneType: 2,
          type: this.searchDeviceType
        };
        params['collegeId'] = this.searchCollege;
        params['majorId'] = this.searchMajor;
        params['grade'] = this.searchGrade;
        params['classId'] = this.searchClass;
        params = this.clearDataInfo(params);
        params = this.$qs.stringify(params);
        this.$axios.post(common.attend_class_static_face_class_record_page, params).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      nodeClick(data){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        this.searchBuild = "";
        this.searchFloor = "";

        if (this.mainType == 1){
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
        }else if (this.mainType == 2){
          if (data.unit == 6){
            this.searchBuild = data.id;
          }else if (data.unit == 7){
            this.searchBuild = data.buildId;
            this.searchFloor = data.id;
          }
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
            this.filtersDeviceTypeText = "";
            this.searchDeviceType = value[item][0];
            for (let i = 0; i < this.filtersDeviceType.length; i++){
              if (this.searchDeviceType == this.filtersDeviceType[i].value){
                this.filtersDeviceTypeText = this.filtersDeviceType[i].text;
              }
            }
          }
        }
        this.page = 1;
        this.init();
      },
      handleChange(data){
        this.searchDate = data;
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
      }
    }
  }
</script>

<style scoped>
  .container {

  }
</style>
