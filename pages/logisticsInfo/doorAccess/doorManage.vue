<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">门禁控制器</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加设备")}}</el-button>
            <el-button size="small" type="default" :disabled="deviceList.length <= 0" :loading="mutiDeleteLoading"  icon="el-icon-delete" @click="deleteMutiInfo($event)">{{$t("批量删除")}}</el-button>
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
          @selection-change="handleSelectionChange"
          style="width: 100%"
          @filter-change="fliterTable">
          <el-table-column
            :reserve-selection="true"
            type="selection"
            align="center"
            width="55">
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('名称')">
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
            :label="$t('SN')">
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
            :label="$t('IP')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.ip ? scope.row.ip : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.ip ? scope.row.ip : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('设备位置')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-left">
                  <div v-for="(item, index) in scope.row.locationNameSet" :key="index">
                    <span>{{item}}</span>
                  </div>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class color-warning">
                  <span>{{scope.row.location_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('设备类型')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-left">
                  <div>
                    <el-tag size="mini" type="success" class="margin-right-5" v-for="(item, index) in scope.row.recModeNameSet" :key="index">{{item}}</el-tag>
                  </div>
                  <div class="line-height"></div>
                  <div v-for="(item, index) in scope.row.doorList" :key="index">
                    <span>{{item.doorNo}}{{$t("号接口")}}:</span>
                    <span>{{item.recModeName}}</span>
                  </div>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class color-warning">
                  <el-tag size="mini" type="success" class="margin-right-5" v-for="(item, index) in scope.row.recModeNameSet" :key="index">{{item}}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('备注')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.comment ? scope.row.comment : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.comment ? scope.row.comment : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :filter-multiple="false"
            column-key="status"
            :filters="filterOnlineStatus"
            :label="$t('状态')">
            <template slot-scope="scope">
              <div v-if="scope.row.online == false" class="color-warning">{{$t("离线")}}</div>
              <div v-if="scope.row.online == true" class="color-success">
                {{$t("在线")}}
                <span v-if="scope.row.user_sync_count > 0">
                  <el-tooltip class="item" effect="dark" :content="$t('同步剩余') + ':' + scope.row.user_sync_count" placement="right">
                    <i class="el-icon-loading"></i>
                  </el-tooltip>
                </span>
                <span v-if="scope.row.user_sync_count < 0">
                  <el-tooltip class="item" effect="dark" :content="$t('同步完成')" placement="right">
                    <i class="el-icon-warning"></i>
                  </el-tooltip>
                </span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row)"></i>
              <i class="fa fa-cog margin-right-5 color-success" @click="setInfo(scope.row)"></i>
              <i class="fa fa-trash margin-right-5 color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal top="10vh" :visible="modalAddVisible" :title="addTitle" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-table
          ref="refDeviceTable"
          :data="tableDeviceData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          :row-key="getRowDeviceKeys"
          :max-height="450"
          @selection-change="handleSelectionDeviceChange"
          v-loading="deviceLoading"
          style="width: 100%">
          <el-table-column
            :reserve-selection="true"
            type="selection"
            align="center"
            width="55">
          </el-table-column>
          <el-table-column
            :label="$t('SN')"
            align="center">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.sn ? scope.row.sn : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.sn ? scope.row.sn : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('IP')"
            align="center">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.ip ? scope.row.ip : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.ip ? scope.row.ip : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('接口')"
            align="center">
            <template slot-scope="scope">
              <el-checkbox-group v-model="deviceControlList" @change="handleChangeBox($event, scope.row, scope.$index)">
                <el-checkbox label="1" style="margin-right:-10px;">&nbsp;</el-checkbox>
                <el-checkbox label="2" style="margin-right:-10px;">&nbsp;</el-checkbox>
                <el-checkbox label="3" style="margin-right:-10px;">&nbsp;</el-checkbox>
                <el-checkbox label="4" style="margin-right:-10px;">&nbsp;</el-checkbox>
              </el-checkbox-group>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('状态')"
            align="center">
            <template slot-scope="scope">
              <span class="color-warning">{{$t("未添加")}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button :disabled="deviceAddList.length == 0" size="small" type="primary" @click="dialogLoading == false ? okDeviceDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <dialog-normal top="10vh" :visible="modalVisible" :title="$t('编辑设备')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('IP')" prop="ip">
            <el-input v-model="form.ip" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('备注')" prop="comment">
            <el-input v-model="form.comment" class="width-260"></el-input>
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

    <dialog-normal top="10vh" width-style="650px" :visible="modalConfVisible" :title="$t('接口配置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-table
          ref="refDeviceTable"
          :data="tableDeviceControlData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          :max-height="480"
          v-loading="deviceLoading"
          style="width: 100%">
          <el-table-column
            :label="$t('接口')"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.door_no}}</span>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('断电常开')"
            align="center">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.auto_open" active-color="#13ce66" inactive-color="#ff4949" @change="handleChangeEnable($event, scope.row, scope.$index)"></el-switch>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('关门延时')"
            align="center">
            <template slot-scope="scope">
              <el-input size="mini" style="width: 80px" v-model="scope.row.delay_time"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('接口')"
            align="left">
            <template slot-scope="scope">
              <el-checkbox-group v-model="scope.row.recModesArr" @change="handleChangeTypeBox($event, scope.row, scope.$index)">
                <div v-for="(item, index) in scope.row.typeList" :key="index">
                  <el-checkbox :label="''+item.key" style="margin-right:-10px;">{{item.value}}</el-checkbox>
                </div>
              </el-checkbox-group>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('选择设备(人脸识别)')"
            align="center"
            width="150">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="bottom" @show="initDeviceExtra(scope.row.deviceListArr)">
                <div class="text-left">
                  <ul class="door-ul">
                    <el-checkbox-group v-model="scope.row.deviceListArr" @change="handleChangeDeviceBox($event, scope.row, scope.$index)">
                      <li v-for="(item, index) in deviceExtraList" :key="index">
                        <el-checkbox :label="item.sn" style="margin-right:-10px;" @change="handleChangeOnlyDeviceBox($event, item)">{{item.name ? item.name : item.sn}}</el-checkbox>
                      </li>
                    </el-checkbox-group>
                  </ul>
                </div>
                <el-button slot="reference" type="success" plain size="small">{{scope.row.deviceListArr.length}}{{$t("台设备")}}</el-button>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okConfDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <!--设置平板-->
    <drawer-layout-right @changeDrawer="closeDrawerDialog" :hide-footer="false" :visible="drawerVisible" size="600px" :title="$t('设备设置')" @right-close="cancelDrawDialog">
      <div slot="content">

      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="small" type="primary" :loading="drawerLoading" @click="okDrawDialog">{{$t("设置")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" :content="deleteSetTitle" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import MyPagination from "../../../components/MyPagination";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {levelText, MessageError, MessageSuccess, MessageWarning, inArray} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyInputButton from "../../../components/search/MyInputButton";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import MyDeviceUseType from "../../../components/utils/status/MyDeviceUseType";
  import doorManageValidater from "../../../utils/validater/doorManageValidater";
  export default {
    mixins: [mixins, doorManageValidater],
    components: {MyPagination,LayoutTb,MySelect,MyInputButton,DialogNormal,DrawerLayoutRight,MyDeviceUseType},
    data(){
      return {
        tableData: [],
        tableDeviceData: [],
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
        modalAddVisible: false,
        deviceLoading: false,
        searchOnline: '',
        config: {},
        subTitle: '',
        deleteSetTitle: '确认需要删除该信息？',
        addTitle: '添加设备',
        status: '',
        deviceList: [],
        deviceAddList: [],
        deviceControlList: [],
        deviceControlOprList: [],
        tableDeviceControlData: [],
        deviceSelData: [],
        deviceExtraList: [],
        searchIndex: '',
        id: '',
        form: {
          id: '',
          sn: '',
          ip: '',
          comment: '',
          name: ''
        },
        formSet: {

        },
        formConf: {

        },
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
          type: 5,
          online: this.searchOnline
        };
        this.$axios.get(common.dormaccess_control_device_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      async initConfig(row){
        let params = {
          accessControlSn: row.sn
        };
        let typeList = [];
        let deviceList = [];
        await this.$axios.get(common.dormaccess_control_device_control_type).then(res => {
          if (res.data.data){
            typeList = res.data.data;
          }
        });
        await this.$axios.get(common.dormaccess_control_device_control_device).then(res => {
          if (res.data.data){
            deviceList = res.data.data;
          }
        });
        await this.$axios.get(common.dormaccess_control_device_control_list, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.length; i++){
              res.data.data[i]['typeList'] = typeList;
              res.data.data[i]['deviceFaceList'] = deviceList;
              res.data.data[i]['recModesArr'] = res.data.data[i].rec_modes != null ? res.data.data[i].rec_modes.split(",") : [];
              res.data.data[i]['deviceListArr'] = res.data.data[i].deviceList != null ? res.data.data[i].deviceList : [];

              if (res.data.data[i].deviceList != null && res.data.data[i].deviceList.length > 0){
                this.deviceSelData = this.deviceSelData.concat(res.data.data[i].deviceList);
                this.deviceSelData = [...new Set(this.deviceSelData)];
                this.deviceSelData = this.deviceSelData;
              }
            }
            this.tableDeviceControlData = res.data.data;
          }
        });
      },
      initDeviceExtra(deviceArr){
        let arr = [];
        this.$axios.get(common.dormaccess_control_device_control_device).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.length; i++){
              let sel = inArray(res.data.data[i].sn, this.deviceSelData);
              let selExist = inArray(res.data.data[i].sn, deviceArr);
              if (sel == -1){
                arr.push(res.data.data[i]);
              }else if (selExist != -1){
                arr.push(res.data.data[i]);
              }
            }
            this.deviceExtraList = arr;
          }
        });
      },
      initDevice(){
        let params = {
          page: 1,
          num: 9999,
          time: 5
        };
        this.deviceLoading = true;
        this.$axios.get(common.dormaccess_control_device_search, {params: params}).then(res => {
          if (res.data.data && res.data.data.length > 0){
            for (let i = 0; i < res.data.data.length; i++){
              res.data.data[i]['doorNoSet'] = [];
            }
            this.tableDeviceData = res.data.data;
          }
          this.deviceLoading = false;
        });
      },
      setCallbackUrl(){
        let params = {
          wopadCallbackUrl: this.formConf.faceCallBack
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.device_pad_local_check_down, params).then(res => {
          if (res.data.code == 200){

          }else {
            MessageWarning(res.data.desc);
          }
        });
      },
      addInfo(){
        this.initDevice();
        this.modalAddVisible = true;
      },
      editInfo(row){
        this.form = {
          id: '',
          sn: row.sn,
          ip: row.ip,
          comment: row.comment,
          name: row.name
        };
        this.modalVisible = true;
      },
      setInfo(row){
        this.initConfig(row);
        this.modalConfVisible = true;
      },
      confInfo(){
        this.initSetting();
        this.modalConfVisible = true;
      },
      deleteInfo(row){
        this.id = row.id;
        this.subTitle = row.name ? row.name : row.sn;
        this.visibleConfim = true;
      },
      deleteMutiInfo(){
        let arr = [];
        for (let i = 0; i < this.deviceList.length; i++){
          arr.push(this.deviceList[i].id);
        }
        let params = {
          ids: arr.join()
        };
        params = this.$qs.stringify(params);
        this.mutiDeleteLoading = true;
        this.$axios.post(common.dormaccess_exception_unbind, params).then(res => {
          if (res.data.code == 200){
            this.init();
            this.deviceList = [];
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.mutiDeleteLoading = false;
        });
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
      okDialog(){
        let url = "";
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              ip: this.form.ip,
              sn: this.form.sn,
              name: this.form.name,
              comment: this.form.comment
            };

            params = this.$qs.stringify(params);
            this.$axios.post(common.dormaccess_control_device_edit, params).then(res => {
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
      okDeviceDialog(){
        let url = "";
        let arr = [];
        let errNum = 0;
        for (let i = 0; i < this.deviceAddList.length; i++){
          arr.push({
            ip: this.deviceAddList[i].ip,
            manufacturer: this.deviceAddList[i].manufacturer,
            port: this.deviceAddList[i].port,
            sn: this.deviceAddList[i].sn,
            type: this.deviceAddList[i].type,
          });
          if (this.deviceAddList[i].doorNoSet.length == 0){
            errNum++;
          }
          arr[i]['doorNoSet'] = this.deviceAddList[i].doorNoSet
        }
        if (errNum > 0){
          MessageWarning(this.$t("选中的设备请至少选择一个接口"));
          return;
        }
        let params = {
          deviceList: arr
        };

        this.dialogLoading = true;
        this.$axios.post(common.dormaccess_control_device_add, JSON.stringify(params), {dataType: 'stringfy'}).then(res => {
          if (res.data.code == 200){
            this.modalAddVisible = false;
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.dialogLoading = false;
        });
      },
      okConfDialog(){
        let url = "";
        let errNum = 0;
        let arr = [];
        for (let i = 0; i < this.tableDeviceControlData.length; i++){
          arr.push({
            sn: this.tableDeviceControlData[i].sn,
            autoOpen: this.tableDeviceControlData[i].auto_open,
            delayTime: this.tableDeviceControlData[i].delay_time,
            recModes: this.tableDeviceControlData[i].recModesArr.join(),
            snList: this.tableDeviceControlData[i].deviceListArr,
          });
        }
        let params = {
          deviceList: arr
        };
        this.dialogLoading = true;
        this.$axios.post(common.dormaccess_control_device_control_edit, JSON.stringify(params), {dataType: 'stringfy'}).then(res => {
          if (res.data.code == 200){
            this.modalConfVisible = false;
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.dialogLoading = false;
        });
      },
      closeDialog(event){
        this.form = {
          id: '',
          sn: '',
          ip: '',
          comment: '',
          name: ''
        };
        this.deviceAddList = [];
        this.deviceSelData = [];
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        if (this.$refs.refDeviceTable){
          this.$refs.refDeviceTable.clearSelection();
        }
      },
      cancelDialog(){
        this.modalAddVisible = false;
        this.modalVisible = false;
        this.modalConfVisible = false;
      },
      closeDrawerDialog(event){
        this.formSet = {

        };
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      okDrawDialog(event){
        this.drawerLoading = true;
        let params = {};
        params = this.formSet;
        params = this.$qs.stringify(params);
        this.$axios.post(common.wo_pad_config_set, params).then(res => {
          if (res.data.code == 200){
            this.drawerVisible = false;
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.drawerLoading = false;
        });
      },
      handleSelect(data, type){
        switch (type) {
          case 1:
            this.formSet.recRank = data;
            break;
          case 2:
            this.formSet.mutiplayerDetetion = data;
            break;
          case 3:
            this.form.use = data;
            break
        }
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          ids: this.id
        };
        url = common.dormaccess_exception_unbind;
        params = this.$qs.stringify(params);
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
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      getRowKeys(row) {
        return row.sn;
      },
      getRowDeviceKeys(row){
        return row.sn;
      },
      handleSelectionChange(data){
        this.deviceList = data;
      },
      handleSelectionDeviceChange(data){
        this.deviceAddList = data;
      },
      handleChangeBox(data, row, index){
        this.tableDeviceData[index]['doorNoSet'] = data;
      },
      handleChangeTypeBox(data, row, index){
        this.tableDeviceControlData[index]['recModesArr'] = data;
      },
      handleChangeDeviceBox(data, row, index){
        this.deviceSelData = this.deviceSelData.concat(data);
        this.deviceSelData = [...new Set(this.deviceSelData)];
        this.deviceSelData = this.deviceSelData;
        this.tableDeviceControlData[index]['deviceListArr'] = data;
      },
      handleChangeOnlyDeviceBox(event, item){
        if (event == false){
          let sel = inArray(item.sn, this.deviceSelData);
          if (sel != -1){
            this.deviceSelData.splice(sel, 1);
          }
        }
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'status'){
            this.searchOnline = value[item][0];
          }
        }
        this.init();
      },
      handleChange(type){

      },
      handleChangeEnable(data, row, index){
        this.tableDeviceControlData[index]['auto_open'] = data;
      },
      inArrayInfo(search, arr){
        return inArray(search, arr);
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
  .door-ul{

  }
  .door-ul li{
    height: 30px;
    line-height: 30px;
  }
</style>
