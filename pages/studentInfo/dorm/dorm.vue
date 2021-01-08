<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">宿舍信息</span>
        </div>
        <my-el-tree :type="mainType" :sub-type="subType" @node-click="nodeClick">
          <div slot="top" class="text-center">
            <el-button :type="showType == 2 ? 'primary' : 'default'" size="mini" @click="changeTree(2,3, 2)">{{$t("宿舍楼")}}</el-button>
            <el-button :type="showType == 1 ? 'primary' : 'default'" size="mini" @click="changeTree(1,4, 1)">{{$t("班级")}}</el-button>
          </div>
        </my-el-tree>
      </div>

      <div slot="right">
        <div class="margin-top-10">
          <el-card shadow="never" :body-style="{padding: '5px 10px',height: '120px'}">
            <el-row>
              <el-col :span="8">
                <div class="layout-inline padding-lr-10">
                  <div class="layout-item margin-top-30">
                    <div>
                      <i class="fa fa-bed color-warning" style="font-size: 35px"></i>
                    </div>
                    <div>
                      <span class="color-warning font-size-12">{{$t("总床位")}}</span>
                    </div>
                  </div>

                  <div class="layout-item font-size-12 color-warning margin-left-10">
                    <div>
                      <span>{{$t("总床位")}}</span>
                      <span>{{Object.keys(dormData).length > 0 ? dormData[0].people_num + dormData[1].people_num : 0}}</span>
                    </div>
                    <div class="margin-top-5">
                      <span>{{$t("男生")}}</span>
                      <span>{{Object.keys(dormData).length  > 0 ? dormData[0].people_num : 0}}</span>
                    </div>
                    <div class="margin-top-5">
                      <span>{{$t("女生")}}</span>
                      <span>{{Object.keys(dormData).length  > 0 ? dormData[1].people_num : 0}}</span>
                    </div>
                  </div>
                </div>
              </el-col>

              <el-col :span="8">
                <div class="layout-inline padding-lr-10">
                  <div class="layout-item margin-top-30">
                    <div>
                      <i class="fa fa-bed color-success" style="font-size: 35px"></i>
                    </div>
                    <div>
                      <span class="color-warning font-size-12">{{$t("已分配")}}</span>
                    </div>
                  </div>

                  <div class="layout-item font-size-12 color-success margin-left-10">
                    <div>
                      <span>{{$t("已分配")}}</span>
                      <span>{{Object.keys(dormData).length  > 0 ? dormData[0].has_people_num + dormData[1].has_people_num : 0}}</span>
                    </div>
                    <div class="margin-top-5">
                      <span>{{$t("男生")}}</span>
                      <span>{{Object.keys(dormData).length  > 0 ? dormData[0].has_people_num : 0}}</span>
                    </div>
                    <div class="margin-top-5">
                      <span>{{$t("女生")}}</span>
                      <span>{{Object.keys(dormData).length  > 0 ? dormData[1].has_people_num : 0}}</span>
                    </div>
                  </div>
                </div>
              </el-col>

              <el-col :span="8">
                <div class="layout-inline padding-lr-10">
                  <div class="layout-item margin-top-30">
                    <div>
                      <i class="fa fa-bed color-danger" style="font-size: 35px"></i>
                    </div>
                    <div>
                      <span class="color-danger font-size-12">{{$t("未分配")}}</span>
                    </div>
                  </div>

                  <div class="layout-item font-size-12 color-danger margin-left-10">
                    <div>
                      <span>{{$t("未分配")}}</span>
                      <span>{{Object.keys(dormData).length  > 0 ? dormData[0].not_people_num + dormData[1].not_people_num : 0}}</span>
                    </div>
                    <div class="margin-top-5">
                      <span>{{$t("男生")}}</span>
                      <span>{{Object.keys(dormData).length  > 0 ? dormData[0].not_people_num : 0}}</span>
                    </div>
                    <div class="margin-top-5">
                      <span>{{$t("女生")}}</span>
                      <span>{{Object.keys(dormData).length  > 0 ? dormData[1].not_people_num : 0}}</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>

          <div class="layout-right-tab margin-top-10">
            <el-row class="layout-inline">
              <el-col :span="12">
                <el-button size="small" type="primary"  icon="el-icon-upload" @click="addInfo()">{{$t("导入")}}</el-button>
                <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo()">{{$t("导出")}}</el-button>

                <my-select :placeholder="$t('状态')" :sel-value="searchStatusType" class="layout-item" :clearable="true" size="small" width-style="120" :options="searchStatusTypeInfo()" @change="handleChange($event, 1)"></my-select>
                <my-select v-if="showType == 2" :placeholder="$t('类型')" :sel-value="searchDormType" class="layout-item" :clearable="true" size="small" width-style="120" :options="dormroomType" @change="handleChange($event, 2)"></my-select>
              </el-col>
              <el-col :span="12" class="text-right">
                <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('姓名/学号')" @click="search"></my-input-button>
              </el-col>
            </el-row>
          </div>

          <div class="bg-f5f5f5 border-bottom-1 padding-lr-5 padding-tb-5" :style="divHeight6">
            <div v-for="(item, index) in tableData" :key="index">
              <div class="dorm-block">
                <span class="dorm-blick-tag"></span>
                <label v-if="showType == 2">
                  <span class="color-success margin-left-5 font-size-14" style="position: relative; top: -12px;">{{item.dormitory_no}}</span>
                  <span class="color-muted margin-left-5 font-size-12" style="position: relative; top: -12px;">
                    <i v-if="item.type == 0" class="fa fa-male"></i>
                    <i v-if="item.type == 1" class="fa fa-famale"></i>
                    <label>{{dormTypeTextInfo(item.type)}}</label>
                    <label class="color-warning">
                      ({{item.has_people_num}}/{{item.people_num}})
                    </label>
                  </span>
                </label>
                <label v-if="showType == 1">
                  <span class="color-success margin-left-5 font-size-14" style="position: relative; top: -12px;">{{item.class_name}}</span>
                  <!--<span class="color-muted margin-left-5 font-size-12" style="position: relative; top: -12px;">
                    <label class="color-warning">
                      ({{item.people_num}})
                    </label>
                  </span>-->
                </label>
              </div>
              <el-row :gutter="16" class="margin-top-10">
                <el-col :span="6" v-for="(itemChild, indexChild) in item.list" :key="indexChild" class="margin-bottom-20">
                  <el-card :body-style="{padding: '5px 10px',height: '110px'}">
                    <el-row>
                      <el-col :span="8">
                        <div class="color-warning font-size-12">
                          <i class="fa fa-id-card"></i>
                          <span v-if="!itemChild.student_id && showType == 2">
                            {{$t("空床位")}}
                          </span>
                          <el-tooltip v-if="itemChild.student_id" class="item" effect="dark" :content="itemChild.student_id" placement="top-start">
                            <span class="moon-content-text-ellipsis-class dorm-card-title">{{itemChild.student_id}}</span>
                          </el-tooltip>
                        </div>
                        <div class="color-warning font-size-12 margin-top-10">
                          <el-avatar v-if="!itemChild.photo_simple" shape="square" :size="50">
                            <i class="el-icon-user" style="font-size: 20px"></i>
                          </el-avatar>
                          <img v-if="itemChild.photo_simple" src="" style="height:50px;width: 50px"/>
                        </div>
                        <div class="margin-top-5">
                          <el-tooltip class="item" effect="dark" :content="searchStatusTypeSet(itemChild.status)" placement="top-start">
                            <span class="color-success font-size-12 moon-content-text-ellipsis-class dorm-card-status margin-left-10">{{searchStatusTypeSet(itemChild.status)}}</span>
                          </el-tooltip>
                        </div>
                      </el-col>
                      <el-col :span="16" class="text-right">
                        <div class="color-warning font-size-12">
                          <span v-if="showType == 2" class="moon-content-text-ellipsis-class dorm-card-title">{{itemChild.bed_no}}号床</span>
                          <span v-if="showType == 1" class="moon-content-text-ellipsis-class dorm-card-title">
                            <my-sex tag="text" :sex="itemChild.sex"></my-sex>
                          </span>
                        </div>
                        <div v-if="!itemChild.student_id" class="margin-top-10">
                          <div>
                            <i class="fa fa-bed color-warning margin-right-5" style="font-size: 30px;"></i>
                          </div>
                          <div class="font-size-12">
                            <span class="color-muted">{{$t("分配学生")}}</span>
                          </div>
                        </div>
                        <div v-if="itemChild.student_id">
                          <div class="font-size-12 margin-top-5">
                            <el-tooltip class="item" effect="dark" :content="itemChild.real_name" placement="top-start">
                              <span class="moon-content-text-ellipsis-class dorm-card-name">{{itemChild.real_name}}</span>
                            </el-tooltip>
                          </div>
                          <div class="font-size-12 margin-top-5">
                            <span class="color-muted" v-if="showType == 2">{{itemChild.build_name}}</span>
                            <span class="color-muted" v-if="showType == 1">{{itemChild.major_name}}</span>
                          </div>
                          <div class="font-size-12 margin-top-5">
                            <span class="color-muted">{{itemChild.class_name}}</span>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </div>
    </layout-lr>

    <drawer-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" accept=".xls,.xlsx" :loading="drawerLoading" :hide-footer="true" size="400px" :title="$t('导入信息')" :action="uploadAction" :download-file="uploadFile" :result="uploadResult" :process="uploadProcess" @right-close="cancelDrawDialog" @success="uploadSuccess" @error="uploadError">

    </drawer-right>
  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {dormTypeText, studentTeachStatus} from "../../../utils/utils";
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
        filterStatusTypes: [],
        dormData: {},
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
        searchDorm: '',
        searchKey: '',
        searchDeviceType: '',
        searchDept: '',
        searchStatusType: '',
        searchDormType: '',
        subTitle: '',
        searchType: -1,
        searchDetailType: -1,
        showType: 2,
        mainType: "2",
        subType: "3",
        uploadFile: common.teacher_file + "?fileName=" + encodeURIComponent(this.$t("宿舍分配模板.xls")),
        uploadAction: common.dorm_user_class_import,
        searchTopTime: this.$moment(new Date).format("YYYY-MM-DD"),
        uploadProcess: '',
        uploadResult: [],
        loopTimer: null,
        resultList: [],
      }
    },
    created() {
      this.initInfo();
    },
    methods: {
      initInfo(){
        this.init();
        this.initDormInfo();
      },
      init(){
        let url = "";
        let params = {
          page: this.page,
          num: this.num,
          searchKey: this.searchKey,
          status: this.searchStatusType
        };
        if (this.showType == 1){
          params['collegeId'] = this.searchCollege;
          params['majorId'] = this.searchMajor;
          params['grade'] = this.searchGrade;
          params['classId'] = this.searchClass;
          url = common.dorm_user_class_list;
        }else if (this.showType == 2){
          params['buildingId'] = this.searchBuild;
          params['floorNum'] = this.searchFloor;
          params['dormId'] = this.searchDorm;
          params['type'] = this.searchDormType;
          url = common.dorm_user_dorm_list;
        }
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
      initDormInfo(){
        this.$axios.post(common.dorm_bed_info).then(res => {
          if (res.data.data){
            this.dormData = res.data.data;
          }
        });
      },
      addInfo(){
        this.drawerVisible = true;
      },
      expandInfo(){
        let url = common.dorm_user_class_export;
        let params = {
          page: this.page,
          num: this.num,
          searchKey: this.searchKey,
          status: this.searchStatusType
        };
        if (this.showType == 1){
          params['collegeId'] = this.searchCollege;
          params['majorId'] = this.searchMajor;
          params['grade'] = this.searchGrade;
          params['classId'] = this.searchClass;
        }else if (this.showType == 2){
          params['buildingId'] = this.searchBuild;
          params['floorNum'] = this.searchFloor;
          params['dormId'] = this.searchDorm;
          params['type'] = this.searchDormType;
        }
        params = this.clearDataInfo(params);
        params = this.$qs.stringify(params);
        window.open(url+"?"+params, "_self");
      },
      nodeClick(data){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        this.searchBuild = "";
        this.searchFloor = "";
        this.searchDorm = "";

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
          }else if (data.unit == 8){
            this.searchBuild = data.buildId;
            this.searchFloor = data.floorNum;
            this.searchDorm = data.id;
          }
        }
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
        this.uploadProcess = '';
        this.uploadResult = [];
        clearTimeout(this.loopTimer);
        this.loopTimer = null;
        this.drawerVisible = event;
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      cancelDrawDialog(){
        this.uploadProcess = '';
        this.uploadResult = [];
        this.drawerVisible = false;
      },
      uploadInfo(){
        this.drawerVisible = true;
      },
      uploadSuccess(res, file){
        if (res.code == 200){
          this.uploadProcess = res.desc;
          this.loopUploadResult(res.data);
        }else {
          this.uploadProcess = this.$t("文件上传成功,正在导入文件...");
          this.resultList = [];
          if (res.data){
            for (let i in res.data){
              this.uploadResult.push(res.data[i]);
            }
          }else {
            this.uploadResult = [res.desc];
          }
        }
      },
      uploadError(res, file){
        this.uploadProcess = res.data.data;
      },
      loopUploadResult(uuid){
        this.getUploadResult(uuid);
      },
      getUploadResult(uuid) {
        let _self = this;
        clearTimeout(this.loopTimer);
        let params = {
          uuid: uuid,
          action: 2
        };
        this.$axios.get(common.upload_loop_result, {params: params}).then(res => {
          let result = "";
          if (res.data.code == 200) {
            let arrResult = [];
            if (res.data.data) {
              for (let i = 0; i < res.data.data.length; i++) {
                //设置结果列表
                if (res.data.data[i].line) {
                  arrResult.push(this.$t("第") + res.data.data[i].line + this.$t("行") + JSON.parse(res.data.data[i].mess).join());
                } else {
                  arrResult.push(JSON.parse(res.data.data[i].mess).join());
                }
                if (res.data.data[i].status == 1) {
                  //this.loopStatus = true;
                  this.uploadResult = arrResult;
                  clearTimeout(this.loopTimer);
                  break;
                } else {
                  this.loopTimer = setTimeout(function () {
                    _self.getUploadResult(uuid)
                  }, 10000);
                }
              }
            } else {
              this.uploadResult = [this.$t("上传停止！")];
              clearTimeout(this.loopTimer);
            }
          }
        });
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
      searchStatusTypeInfo(){
        let arr = [];
        let arrJson = studentTeachStatus('get');
        for (let i in arrJson){
          arr.push({
            label: arrJson[i],
            value: i
          });
        }

        return arr;
      },
      searchStatusTypeSet(val){
        return studentTeachStatus('set', val);
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
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
        this.page = 1;
        this.num = 20;
        this.init();
      },
      clearDataInfo(data){
        return clearData(data);
      },
      handleChange(data, type){
        switch (type) {
          case 1:
            this.searchStatusType = data;
            break;
          case 2:
            this.searchDormType = data;
            break;
        }
        this.init();
      },
      dormTypeTextInfo(val){
        return dormTypeText(val);
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .dorm-block{
    background: #f3f3f3;
    height: 35px;
    line-height: 35px;
    position: relative;
  }
  .dorm-blick-tag{
    width: 5px;
    height: 35px;
    background: #E6A23C;
    display: inline-block;
  }
  .dorm-card-title{
    max-width: 50px;
    display: inline-block;
    position: relative;
    top:2px;
  }
  .dorm-card-name{
    max-width: 100px;
    display: inline-block;
    position: relative;
    top:2px;
  }
  .dorm-card-status{
    max-width: 30px;
    display: inline-block;
    position: relative;
    top:2px;
  }
</style>
