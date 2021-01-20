<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">请假审批</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo()">{{$t("添加任务")}}</el-button>
          </el-col>
          <el-col :span="12" class="text-right">
            <my-input-button size="small" :clearable="true" type="success" plain @click="search"></my-input-button>
          </el-col>
        </el-row>
      </div>

      <div slot="content">
        <el-table
          ref="refTable"
          :data="tableData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          :row-key="getRowKeys"
          :max-height="tableHeight.height"
          style="width: 100%">
          <el-table-column
            align="center"
            :label="$t('设备名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="right" popper-class="custom-table-popover">
                <div class="text-center">
                  <div class="margin-right-5 margin-bottom-5" type="success" size="mini" v-for="(item, index) in scope.row.door_name_set.split(',')" :key="index">
                    <el-tag type="success" size="mini">
                      {{item}}
                    </el-tag>
                  </div>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <el-tag class="margin-right-5" type="success" size="mini" v-for="(item, index) in scope.row.door_name_set.split(',')" :key="index">
                    {{item}}
                  </el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('任务名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.name ? scope.row.name : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.name ? scope.row.name : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('执行任务')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <span v-if="scope.row.task_type == 1">{{$t("常开")}}</span>
                  <span v-if="scope.row.task_type == 2">{{$t("常闭")}}</span>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span v-if="scope.row.task_type == 1">{{$t("常开")}}</span>
                  <span v-if="scope.row.task_type == 2">{{$t("常闭")}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('执行日期/周期')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <span v-if="scope.row.time_type == 1">{{$t("每天")}}</span>
                  <span v-if="scope.row.time_type == 2">
                    <label class="margin-right-5" v-for="(item, index) in scope.row.week_no_set.split(',')" :key="index">
                      {{weekNoTextInfo(item)}}
                    </label>
                  </span>
                  <span v-if="scope.row.time_type == 3">{{scope.row.date}}</span>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span v-if="scope.row.time_type == 1">{{$t("每天")}}</span>
                  <span v-if="scope.row.time_type == 2">
                    <el-tag class="margin-right-5" type="success" size="mini" v-for="(item, index) in scope.row.week_no_set.split(',')" :key="index">
                      {{weekNoTextInfo(item)}}
                    </el-tag>
                  </span>
                  <span v-if="scope.row.time_type == 3">{{scope.row.date}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('开始时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.start_time}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.start_time}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('结束时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.end_time}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.end_time}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-ban margin-right-5 color-warning" v-if="scope.row.enable" @click="enableInfo(scope.row, false)"></i>
              <i class="fa fa-check-square-o margin-right-5 color-success" v-if="!scope.row.enable" @click="enableInfo(scope.row, true)"></i>
              <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row)"></i>
              <i class="fa fa-trash margin-right-5 color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal width-style="650px" :visible="modalVisible" :title="$t('任务设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form ref="form" :rules="rules" :model="form" label-width="140px">
          <el-form-item label="任务名称" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item label="选择设备" prop="deviceList">
            <div class="timeout-device-block">
              <ul>
                <li v-for="(item, index) in tableDeviceList" :key="index">
                  <el-checkbox v-model="item._checked" @change="handleDevice($event, item)">{{item.name ? item.name : item.sn}}</el-checkbox>
                </li>
              </ul>
            </div>
          </el-form-item>
          <el-form-item label="日期周期" prop="timeType">
            <my-radio :sel-value="form.timeType" label="1" @change="changeTimeType($event, 1)">{{$t("每天")}}</my-radio>
            <my-radio :sel-value="form.timeType" label="2" @change="changeTimeType($event, 2)">{{$t("指定周期")}}</my-radio>
            <my-radio :sel-value="form.timeType" label="3" @change="changeTimeType($event, 3)">{{$t("固定日期")}}</my-radio>

            <div>
              <div v-if="form.timeType == 2">
                <span>
                  <my-check v-for="(item, index) in tableWeekNoList" :key="index" :sel-value="item._checked" @change="changeCheckBox($event, item.value)">{{item.label}}</my-check>
                </span>
              </div>
              <div v-if="form.timeType == 3">
                <span>
                  <my-date-picker :sel-value="form.date" width-style="260" @change="handleChangeDate($event)"></my-date-picker>
                </span>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="起始时间">
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
          <el-form-item label="执行任务">
            <el-button-group>
              <el-button size="small" :type="form.taskType == 1 ? 'success' : 'default'" @click="changeTask(1)">{{$t("常开")}}</el-button>
              <el-button size="small" :type="form.taskType == 2 ? 'success' : 'default'" @click="changeTask(2)">{{$t("常闭")}}</el-button>
            </el-button-group>
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

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" :content="deleteSetTitle" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import MyPagination from "../../../components/MyPagination";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {inArray, levelText, MessageError, MessageSuccess, MessageWarning, weekNoText2} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyInputButton from "../../../components/search/MyInputButton";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import padWoValidater from "../../../utils/validater/padWoValidater";
  import MyDoorExceptionStatus from "../../../components/utils/status/MyDoorExceptionStatus";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyRadio from "../../../components/MyRadio";
  import MyCheck from "../../../components/MyCheck";
  export default {
    mixins: [mixins, padWoValidater],
    components: {
      MyRadio,
      MyPagination,LayoutTb,MySelect,MyInputButton,DialogNormal,DrawerLayoutRight,MyDoorExceptionStatus,MyDatePicker,MyCheck},
    data(){
      return {
        tableData: [],
        searchDate: [],
        typeList: [],
        searchKey: '',
        visible: false,
        modalVisible: false,
        modalConfVisible: false,
        dialogLoading: false,
        drawerLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        loading: false,
        perLoading: false,
        picLoading: false,
        mutiDeleteLoading: false,
        mutiUnbindLoading: false,
        mutiResetLoading: false,
        searchOnline: '',
        config: {},
        subTitle: '',
        deleteSetTitle: '确认需要删除该信息？',
        status: '',
        deviceList: [],
        tableDeviceList: [],
        tableWeekNoList: [],
        id: '',
        form: {
          id: '',
          name: '',
          deviceList: [],
          startTime: '00:00',
          endTime: '00:00',
          date: '',
          taskType: '1',
          timeType: '1',
          weekNoset: []
        }
      }
    },
    created() {
      this.init();
      this.initDevice();
      this.initWeek();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          searchKey: this.searchKey
        };
        this.$axios.get(common.dormaccess_settimeout, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initDevice(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.dormaccess_settimeout_deviceList, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.length; i++){
              res.data.data[i]['_checked'] = false;
            }
            this.tableDeviceList = res.data.data;
          }
        });
      },
      initWeek(){
        this.tableWeekNoList = [];
        for (let i = 0; i < this.weekNoSelect.length; i++){
          this.tableWeekNoList.push({
            label: this.weekNoSelect[i].label,
            value: this.weekNoSelect[i].value,
            _checked: false
          });
        }
      },
      addInfo(){
        this.initDevice();
        this.initWeek();
        this.modalVisible = true;
      },
      editInfo(row){
        let deviceListSel = row.door_sn_set != null ? row.door_sn_set.split(",") : [];
        let weekListSel = row.week_no_set != null ? row.week_no_set.split(",") : [];
        let deviceArr = [];
        for (let i = 0; i < this.tableDeviceList.length; i++){
          this.tableDeviceList[i]['_checked'] = false;
          let sel = inArray(this.tableDeviceList[i].sn, deviceListSel);
          if (sel != -1){
            this.tableDeviceList[i]['_checked'] = true;
          }
        }
        for (let i = 0; i < this.tableWeekNoList.length; i++){
          this.tableWeekNoList[i]['_checked'] = false;
          let sel = inArray(this.tableWeekNoList[i].value, weekListSel);
          if (sel != -1){
            this.tableWeekNoList[i]['_checked'] = true;
          }
        }

        this.form = {
          id: row.id,
          name: row.name,
          deviceList: deviceListSel,
          startTime: row.start_time,
          endTime: row.end_time,
          date: row.date,
          taskType: ''+row.task_type,
          timeType: ''+row.time_type,
          weekNoset: weekListSel
        };
        this.modalVisible = true;
      },
      deleteInfo(row){
        this.form.id = row.id;
        //this.subTitle = row.name;
        this.visibleConfim = true;
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
      search(data){
        this.page = 1;
        this.searchKey = data.input;
        this.init();
      },
      handleSelectionChange(data){
        this.deviceList = data;
      },
      handleTime(data){
        this.searchDate = data;
      },
      getRowKeys(row) {
        return row.id
      },
      enableInfo(row, type){
        if (type == true){
          this.deleteSetTitle = this.$t("确认需要启用该异常吗？");
        }else if (type == false){
          this.deleteSetTitle = this.$t("确认需要禁用该异常吗？");
        }
        this.form.id =  row.id;
        this.form.enable = type;
        //this.subTitle = row.name;
        this.visibleConfim = true;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.form.id
        };
        if (this.form.enable == true || this.form.enable == false){
          params['enable'] = this.form.enable;
          url = common.dormaccess_settimeout_enable;
        }else {
          url = common.dormaccess_settimeout_del;
        }

        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.init();
            this.form.enable = "";
            this.form.id = "";
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.visibleConfim = false;
          this.dialogLoading = false;
        });
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      closeDialog(event){
        this.form = {
          id: '',
          name: '',
          deviceList: [],
          startTime: '00:00',
          endTime: '00:00',
          date: '',
          taskType: '1',
          timeType: '1',
          weekNoset: []
        };
        this.subTitle = "";
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      weekNoTextInfo(val){
        return weekNoText2(val);
      },
      okDialog(event){
        let url = "";
        this.$refs['form'].validate((valid) => {
          if (valid) {
            if (this.form.deviceList.length == 0){
              MessageWarning(this.$t("请选择设备！"));
              return;
            }
            if (this.form.weekNoset.length == 0){
              MessageWarning(this.$t("请选择星期！"));
              return;
            }
            this.dialogLoading = true;
            let params = {
              name: this.form.name,
              startTime: this.form.startTime,
              endTime: this.form.endTime,
              taskType: this.form.taskType,
              timeType: this.form.timeType,
              doorSnSet: this.form.deviceList.join()
            };

            if (this.form.timeType == 2){
              params['weekNoSet'] = this.form.weekNoset.join();
            }else if (this.form.timeType == 3){
              params['date'] = this.form.date;
            }

            if (this.form.id != ""){
              url = common.dormaccess_settimeout_edit;
              params['id'] = this.form.id;
            }else {
              url = common.dormaccess_settimeout_add;
            }
            params = this.$qs.stringify(params);
            this.$axios.post(url, params, {loading: false}).then(res => {
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
      cancelDialog(){
        this.modalVisible = false;
      },
      changeTask(type){
        this.form.taskType = type;
      },
      changeTimeType(data, type){
        this.form.timeType = ""+type;
      },
      changeCheckBox(event, n){
        let sel = inArray(n, this.form.weekNoset);
        if (event){
          if (sel == -1){
            this.form.weekNoset.push(n);
          }
        }else {
          if (sel != -1){
            this.form.weekNoset.splice(sel,1);
          }
        }
      },
      handleChangeDate(time){
        this.form.date = time;
      },
      handleChangeTime(data, type){
        if (type == 1){
          this.form.startTime = data;
        }else if (type == 2){
          this.form.endTime = data;
        }
      },
      handleDevice(event, item){
        let sel = inArray(item.sn, this.form.deviceList);
        if (event){
          if (sel == -1){
            this.form.deviceList.push(item.sn);
          }
        }else {
          if (sel != -1){
            this.form.deviceList.splice(sel,1);
          }
        }
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
  .timeout-device-block{
    height: 200px;
    overflow-y: auto;
    border: 1px solid #EBEEF5;
    padding: 10px;
    width: 260px;
    border-radius: 5px;
  }
  .timeout-device-block ul{
    list-style: none;
  }
  .timeout-device-block ul li{
    line-height: 25px;
  }
</style>
