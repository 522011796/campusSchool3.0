<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">考勤设置</template>

      <div slot="tab">
        <el-row>
          <el-col :span="18">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加规则")}}</el-button>
            <el-button size="small" type="warning"  icon="el-icon-s-help" @click="syncInfo($event)">{{$t("同步生效")}}</el-button>
            <!--<el-button size="small" type="warning"  icon="el-icon-s-help" @click="otherInfo($event)">{{$t("例外规则")}}</el-button>-->
          </el-col>
          <el-col :span="6" class="text-right">
            <!--<div class="layout-inline text-right">
              <my-select size="small" :clearable="true" :group="true" :options="typeList" class="layout-item" @change="handleSelect"></my-select>
              <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
              <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('登录人')" @click="search"></my-input-button>
            </div>-->
          </el-col>
        </el-row>
      </div>

      <div slot="content">
        <el-table
          ref="refTable"
          :data="tableData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          row-key="id"
          :max-height="tableHeight.height"
          style="width: 100%">
          <el-table-column
            align="center"
            :label="$t('名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span v-if="scope.row.rull_type == 0" class="color-muted">{{scope.row.name}}</span>
                  <span v-if="scope.row.rull_type != 0">{{scope.row.name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('考勤地点')">
            <template slot-scope="scope">
              <span v-if="scope.row.rull_type == 0" class="color-muted">{{$t("全校")}}</span>
              <el-popover v-if="scope.row.rull_type != 0" width="400" trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <el-tag class="margin-right-5 margin-bottom-5" size="mini" type="success" v-for="(item, index) in scope.row.dormitory_no_list.split(',')" :key="index">{{item}}</el-tag>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <el-tag class="margin-right-5" size="mini" type="success" v-for="(item, index) in scope.row.dormitory_no_list.split(',')" :key="index">{{item}}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('考勤时间')">
            <template slot-scope="scope">
              <span v-if="scope.row.rull_type == 0" class="color-muted">{{scope.row.start_time}}-{{scope.row.end_time}}</span>
              <span v-if="scope.row.rull_type != 0">{{scope.row.start_time}}-{{scope.row.end_time}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-edit color-grand margin-right-5" @click="editInfo(scope.row)"></i>
              <i class="fa fa-clock-o color-warning margin-right-5" @click="resetInfo(scope.row)"></i>
              <i v-if="scope.row.rull_type != 0" class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal width-style="750px" :visible="modalVisible" :title="$t('设置分组')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('组名')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('时间设置')">
            <el-time-picker
              :clearable="false"
              value-format="HH:mm"
              format="HH:mm"
              v-model="form.startTime"
              :placeholder="$t('选择时间')"
              class="layout-item"
              style="width: 128px"
              @change="handleChangeTime($event, 1)">
            </el-time-picker>
            -
            <el-time-picker
              :clearable="false"
              value-format="HH:mm"
              format="HH:mm"
              v-model="form.endTime"
              :placeholder="$t('选择时间')"
              class="layout-item"
              style="width: 128px"
              @change="handleChangeTime($event, 2)">
            </el-time-picker>
          </el-form-item>
          <el-form-item :label="$t('状态设置')" prop="name">
            <table class="custom-table">
              <tr>
                <th></th>
                <th>{{$t("周一")}}<my-check @change="handleWeek($event, 1)"></my-check></th>
                <th>{{$t("周二")}}<my-check @change="handleWeek($event, 2)"></my-check></th>
                <th>{{$t("周三")}}<my-check @change="handleWeek($event, 3)"></my-check></th>
                <th>{{$t("周四")}}<my-check @change="handleWeek($event, 4)"></my-check></th>
                <th>{{$t("周五")}}<my-check @change="handleWeek($event, 5)"></my-check></th>
                <th>{{$t("周六")}}<my-check @change="handleWeek($event, 6)"></my-check></th>
                <th>{{$t("周日")}}<my-check @change="handleWeek($event, 7)"></my-check></th>
              </tr>
              <tbody>
                <tr v-for="(item, index) in tableDayInfo" :key="index">
                  <td>
                    <div class="setting-td color-muted">
                      {{$t("第")}}{{item.weekNum}}{{$t("周")}}
                    </div>
                  </td>
                  <td v-for="(itemChild, indexChild) in item.days" :key="indexChild">
                    <div class="setting-td color-muted" @click="changeRollCall(itemChild)">
                      <img v-if="itemChild != null && itemChild.rollCall == true" src="~/static/img/sign-icon.png" class="setting-icon">
                      <label style="font-weight: normal">{{itemChild != null ? itemChild.busiTime : ''}}</label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form-item>
          <el-form-item :label="$t('晚归设置')" prop="delay">
            <span>{{$t("超过考勤时间")}}</span><el-input v-model="form.delay" style="width:80px"></el-input><span>{{$t("分钟标记为晚归")}}</span>
          </el-form-item>
          <el-form-item v-if="form.id != -1" :label="$t('考勤地点')" prop="dormitoryIdList">
            <el-popover
              placement="top"
              width="700"
              trigger="click"
              @show="handleShowTeacher(3)">
              <div>
                <dorm-build-tree-and-list ref="popverPartRef" :sel-arr="form.dormitoryIdList" set-type="check" @select="handleSelUser"></dorm-build-tree-and-list>
              </div>
              <el-button slot="reference" type="success" plain size="small">{{$t("添加")}}</el-button>
            </el-popover>
            <span class="color-warning margin-left-10">
              <i class="fa fa-user"></i>
              {{$t("已选择")}}{{form.dormitoryIdList.length}}{{$t("个宿舍")}}
            </span>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" :content="tips" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import MyPagination from "../../../components/MyPagination";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {MessageError, MessageSuccess} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyUserType from "../../../components/utils/MyUserType";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyInputButton from "../../../components/search/MyInputButton";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import ClassroomTreeAndList from "../../../components/utils/treeAndList/ClassroomTreeAndList";
  import MyCheck from "../../../components/MyCheck";
  import DormBuildTreeAndList from "../../../components/utils/treeAndList/DormBuildTreeAndList";
  import doorAttendSettingValidater from "../../../utils/validater/doorAttendSettingValidater";
  export default {
    mixins: [mixins, doorAttendSettingValidater],
    components: {
      DormBuildTreeAndList,
      MyCheck,
      MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal,ClassroomTreeAndList,MyCheck,MySelect,DormBuildTreeAndList},
    data(){
      return {
        tableData: [],
        tableSettingData: [],
        searchDate: [],
        typeList: [],
        sectionList: [],
        tableDayInfo: [],
        searchKey: '',
        visible: false,
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        modalOtherVisible: false,
        clearTime: '',
        action: '',
        subTitle: '',
        errorTips: '',
        tips: '',
        form: {
          id: '',
          name: '',
          startTime: '',
          endTime: '',
          delay: 60,
          dormitoryIdList: [],
          checkbedRuleDay: [],
          rullType: ''
        }
      }
    },
    created() {
      this.init();
    },
    methods: {
      async init(){
        //await this.getSessionInfo();
        this.initPage();
      },
      initPage(){
        let params = {
          page: this.page,
          num: this.num
        };
        this.$axios.get(common.attend_dorm_setting_page, {params:params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initSetting(row){
        let params = {};
        if (row){
          params = {
            checkbedRuleId: row.id
          };
        }
        this.$axios.get(common.attend_dorm_setting_info, {params:params}).then(res => {
          if (res.data.data){
            this.tableDayInfo = res.data.data;
          }
        });
      },
      addInfo(){
        this.initSetting();
        this.modalVisible = true;
      },
      syncInfo(){
        this.oprType = "sync";
        this.tips = this.$t("当天已考勤数据会被全部删除，是否确认？");
        this.visibleConfim = true;
      },
      otherInfo(){
        this.modalOtherVisible = true;
      },
      editInfo(row){
        console.log(row);
        let roomIds = row.dormitory_id_list ? row.dormitory_id_list.split(",") : [];
        let arr = [];
        this.form = {
          id: row.id,
          name: row.name,
          startTime: row.start_time,
          endTime: row.end_time,
          delay: row.delay,
          checkbedRuleDay: [],
          rullType: row.rull_type
        };

        for (let i = 0; i < roomIds.length; i++){
          arr.push({
            id: roomIds[i]
          });
        }
        this.$set(this.form, 'dormitoryIdList', arr);
        this.initSetting(row);
        this.modalVisible = true;
      },
      resetInfo(row){
        this.oprType = "reset";
        this.form.id = row.id;
        this.subTitle = row.name;
        this.tips = this.$t("确认需要重置时间吗？");
        this.visibleConfim = true;
      },
      search(data){
        this.searchKey = data.input;
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
      handleSelect(data){
        this.form.type = data;
      },
      deleteInfo(row){
        this.oprType = "del";
        this.form.id = row.id;
        this.subTitle = row.name;
        this.tips = "确认需要删除该信息？";
        this.visibleConfim = true;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {};
        if (this.oprType == "del"){
          params = {
            id: this.form.id
          };
          url = common.attend_dorm_setting_delete;
        }else if (this.oprType == "reset"){
          params = {
            id: this.form.id
          };
          url = common.attend_dorm_setting_clear;
        }else if (this.oprType == "sync"){
          url = common.attend_dorm_setting_sync;
        }
        params = this.$qs.stringify(params);
        if (this.oprType == "sync"){
          this.$axios.get(url, params).then(res => {
            if (res.data.code == 200){
              this.init();
              MessageSuccess(res.data.desc);
            }else {
              MessageError(res.data.desc);
            }
            this.visibleConfim = false;
            this.dialogLoading = false;
          });
        }else {
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
        }
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      closeDialog(event){
        this.form = {
          id: '',
          name: '',
          startTime: '',
          endTime: '',
          delay: 60,
          dormitoryIdList: [],
          checkbedRuleDay: [],
          rullType: ''
        };
        this.subTitle = "";
        this.oprType == "";
        if (this.$refs['popverPartRef']){
          this.$refs.popverPartRef._handleResetChange();
        }
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      okDialog(event){
        let url = "";
        let _self = this;
        let regNum = /^\d+$|^\d+[.]?\d+$/;
        let userIds = [];
        let dayInfo = [];
        this.errorTips = "";
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              checkbedRuleDay: this.form.checkbedRuleDay,
              delay: this.form.delay,
              endTime: this.form.endTime,
              name: this.form.name,
              startTime: this.form.startTime,
            };

            this.tableDayInfo.map(function (item,index) {
              if (item){
                item.days.map(function (itemDay,indexDay) {
                  if (itemDay){
                    dayInfo.push({
                      busiTime: itemDay.busiTime,
                      weekNum: itemDay.weekNum,
                      weekNo: itemDay.weekNo,
                      rollCall: itemDay.rollCall,
                      festival: itemDay.festival,
                      checkbedRuleId: _self.form.id
                    });
                  }
                });
              }
            });
            params['checkbedRuleDay'] = dayInfo;

            if (this.form.dormitoryIdList.length > 0){
              for (let i = 0; i < this.form.dormitoryIdList.length; i ++ ){
                userIds.push(this.form.dormitoryIdList[i].id);
              }
              params['dormitoryIdList'] = userIds;
            }
            if (this.form.id != ""){
              params['id'] = this.form.id;
              url = common.attend_dorm_setting_edit;
            }else {
              url = common.attend_dorm_setting_add;
            }

            //params = this.$qs.stringify(params);
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
          }
        });
      },
      handleShowTeacher(type){
        this.$refs.popverPartRef._handleOpen();
      },
      handleSelUser(data){
        let arr = [];
        this.form.dormitoryIdList = data;
      },
      handleChange(data, type){
        if (type == 1){
          this.form.switchContinue = data;
        }else if (type == 2){
          this.form.earlyEnable = data;
        }else if (type == 3){
          this.form.continueSection = data;
        }
      },
      handleChangeTime(data, type){
        if (type == 1){
          this.form.startTime = data;
        }else if (type == 2){
          this.form.endTime = data;
        }
      },
      changeRollCall(item){
        item.rollCall = !item.rollCall;
      },
      handleWeek(data, week){
        let _self = this;
        _self.tableDayInfo.map(function (item,index) {
          item.days.map(function (itemDay,index) {
            if (itemDay && itemDay.weekNo == week){
              itemDay.rollCall = data;
            }
          });
        });
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
  .setting-td{
    height: 100%;
    width: 100%;
    font-size: 12px;
    position: relative;
  }
  .setting-icon{
    height: 25px;
    width: 25px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
