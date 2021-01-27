<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">请假审批</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加设备")}}</el-button>
            <el-button size="small" type="default" :disabled="deviceList.length <= 0" :loading="mutiDeleteLoading"  icon="el-icon-delete" @click="deleteMutiInfo($event)">{{$t("批量删除")}}</el-button>
            <el-button size="small" type="default" :disabled="deviceList.length <= 0" :loading="mutiResetLoading"  icon="el-icon-refresh" @click="resetMutiInfo($event)">{{$t("批量重启")}}</el-button>
            <el-button size="small" type="default" :disabled="deviceList.length <= 0" :loading="mutiUnbindLoading"  icon="el-icon-circle-close" @click="unbindMutiInfo($event)">{{$t("批量解绑")}}</el-button>
            <el-button size="small" type="warning"  icon="el-icon-setting" @click="confInfo($event)">{{$t("设备配置")}}</el-button>
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
            :label="$t('软件版本')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.version}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.version}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('用途')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <my-device-use-type :type="scope.row.scene_type"></my-device-use-type>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class color-warning">
                  <my-device-use-type :type="scope.row.scene_type"></my-device-use-type>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('设备位置')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.location_name ? scope.row.location_name : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.location_name ? scope.row.location_name : '--'}}
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
              <i class="fa fa-cog margin-right-5 color-success" @click="setInfo(scope.row)"></i>
              <i class="fa fa-trash margin-right-5 color-danger" @click="deleteInfo(scope.row)"></i>
              <i class="fa fa-close margin-right-5 color-grand" @click="unbindInfo(scope.row)"></i>
              <el-popover
                placement="right"
                width="400"
                trigger="click">
                <div>
                  <div>
                    <span>
                      <el-button size="small" type="success" plain :loading="perLoading" @click="syncInfo(scope.row, 1)">
                        {{$t("人员校验")}}
                      </el-button>
                      <label class="color-warning font-size-12">{{$t("校验设备中的人员信息是否正确")}}</label>
                    </span>
                  </div>
                  <div class="margin-top-10">
                    <span>
                      <el-button size="small" type="success" plain :loading="picLoading" @click="syncInfo(scope.row, 2)">{{$t("同步照片")}}</el-button>
                      <label class="color-warning font-size-12">{{$t("重新向该设备同步失败的照片信息")}}</label>
                    </span>
                  </div>
                </div>
                <i slot="reference" class="fa fa-ellipsis-h color-warning"></i>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal top="10vh" :visible="modalVisible" :title="$t('添加设备')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('序列号')" prop="sn">
            <el-input v-model="form.sn" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('备注')" prop="comment">
            <el-input v-model="form.comment" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('设备用途')" prop="uses">
            <my-select :sel-value="form.use" :options="filterDeviceUseType" width-style="260" @change="handleSelect($event,3)"></my-select>
            <div v-if="form.use == 3 || form.use == 4">
              <el-radio-group size="small" v-model="form.sceneSubType">
                <el-radio-button label="1">{{$t('进入')}}</el-radio-button>
                <el-radio-button label="2">{{$t('外出')}}</el-radio-button>
              </el-radio-group>
            </div>
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

    <dialog-normal top="10vh" :visible="modalConfVisible" :title="$t('设备配置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="formConf" :rules="rulesConf" ref="formConf" label-width="140px">
          <el-form-item :label="$t('识别回调地址')" prop="faceCallBack">
            <el-input v-model="formConf.faceCallBack" class="width-260"></el-input>
          </el-form-item>
        </el-form>
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
        <div>
          <el-form :model="form" :rules="rules" ref="form" label-width="110px">
            <template>
              <el-form-item :label="$t('名称')" prop="classNo">
                <el-input v-model="formSet.name" class="width-300"></el-input>
              </el-form-item>
              <el-form-item :label="$t('备注')" prop="comment">
                <el-input v-model="formSet.comment" class="width-300"></el-input>
              </el-form-item>
            </template>

            <template>
              <div class="margin-bottom-10">
                <span class="color-warning">{{$t("输出设置")}}</span>
              </div>
              <el-form-item :label="$t('语音播报模式')">
                <el-radio-group size="small" v-model="formSet.recSucTtsModeType" @change="handleChange('sucTts')">
                  <el-radio-button label="2">{{$t('不需要语音播报')}}</el-radio-button>
                  <el-radio-button label="1">{{$t('播报名字')}}</el-radio-button>
                  <el-radio-button label="100">{{$t('自定义')}}</el-radio-button>
                </el-radio-group>
                <span v-if="formSet.recSucTtsModeType == 100"><el-input size="small" style="width: 80px;" v-model="formSet.recSucTtsModeContent"></el-input></span>
              </el-form-item>
              <el-form-item :label="$t('屏幕显示模式')">
                <el-radio-group size="small" v-model="formSet.recSucDisplayText1Type">
                  <el-radio-button label="1">{{$t('显示名字')}}</el-radio-button>
                  <el-radio-button label="100">{{$t('自定义')}}</el-radio-button>
                </el-radio-group>
                <span v-if="formSet.recSucDisplayText1Type == 100"><el-input size="small" style="width: 80px;" v-model="formSet.recSucDisplayText1Content"></el-input></span>
              </el-form-item>
              <el-form-item :label="$t('串口输出模式')">
                <el-radio-group size="small" v-model="formSet.recSucComModeType">
                  <el-radio-button label="1">{{$t('开门')}}</el-radio-button>
                  <el-radio-button label="2">{{$t('不输出')}}</el-radio-button>
                  <el-radio-button label="3">{{$t('输出phone')}}</el-radio-button>
                  <el-radio-button label="4">{{$t('输出IDNO')}}</el-radio-button>
                  <el-radio-button label="100">{{$t('自定义')}}</el-radio-button>
                </el-radio-group>
                <span v-if="formSet.recSucComModeType == 100"><el-input size="small" style="width: 80px;" v-model="formSet.recSucComModeContent"></el-input></span>
              </el-form-item>
              <el-form-item :label="$t('继电器开关')">
                <el-radio-group size="small" v-model="formSet.recSucRelayType">
                  <el-radio-button label="1">{{$t('输出')}}</el-radio-button>
                  <el-radio-button label="2">{{$t('不输出')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </template>

            <template>
              <div class="margin-bottom-10">
                <span class="color-warning">{{$t("陌生人参数")}}</span>
              </div>
              <el-form-item :label="$t('陌生人开关')">
                <el-radio-group size="small" v-model="formSet.recFailEnable">
                  <el-radio-button label="2">{{$t('不识别陌生人')}}</el-radio-button>
                  <el-radio-button label="1">{{$t('陌生人开关')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item :label="$t('识别失败判定')">
                <el-input v-model="formSet.recFailTimesThreshold" class="width-100"></el-input>
              </el-form-item>
              <el-form-item :label="$t('语音播报')">
                <el-radio-group size="small" v-model="formSet.recFailTtsModeType">
                  <el-radio-button label="1">{{$t('人员未注册请联系管理员')}}</el-radio-button>
                  <el-radio-button label="2">{{$t('不播报')}}</el-radio-button>
                  <el-radio-button label="100">{{$t('自定义')}}</el-radio-button>
                </el-radio-group>
                <span v-if="formSet.recFailTtsModeType == 100"><el-input size="small" style="width: 80px;" v-model="formSet.recFailTtsModeContent"></el-input></span>
              </el-form-item>
              <el-form-item :label="$t('屏幕显示')">
                <el-radio-group size="small" v-model="formSet.recFailDisplayTextType">
                  <el-radio-button label="1">{{$t('显示识别失败')}}</el-radio-button>
                  <el-radio-button label="100">{{$t('自定义')}}</el-radio-button>
                </el-radio-group>
                <span v-if="formSet.recFailDisplayTextType == 100"><el-input size="small" style="width: 80px;" v-model="formSet.recFailDisplayTextContent"></el-input></span>
              </el-form-item>
            </template>

            <template>
              <div class="margin-bottom-10">
                <span class="color-warning">{{$t("识别参数")}}</span>
              </div>
              <el-form-item :label="$t('活体开关')">
                <el-radio-group size="small" v-model="formSet.comRecRank">
                  <el-radio-button label="2">{{$t('开')}}</el-radio-button>
                  <el-radio-button label="1">{{$t('关')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item :label="$t('识别距离')">
                <el-radio-group size="mini" v-model="formSet.comRecDistModeType">
                  <el-radio-button label="2">0.5{{$t('米内')}}</el-radio-button>
                  <el-radio-button label="3">1{{$t('米内')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item :label="$t('时间窗')">
                <el-input size="small" v-model style="width: 80px" v-model="formSet.comRecTimeWindow"></el-input>{{$t('秒')}}
              </el-form-item>
              <el-form-item :label="$t('人脸识别阀值')">
                <el-input size="small" v-model style="width: 80px" v-model="formSet.faceScore"></el-input>{{$t('刷脸模式')}}
              </el-form-item>
              <el-form-item :label="$t('继电器控制时间')">
                <el-input size="small" v-model style="width: 80px" v-model="formSet.comRelayTime"></el-input>{{$t('毫秒')}}
              </el-form-item>
              <el-form-item :label="$t('多人脸检测')">
                <el-radio-group size="mini" v-model="formSet.faceDetectionType">
                  <el-radio-button label="1">{{$t('多人脸识别')}}</el-radio-button>
                  <el-radio-button label="2">{{$t('单人脸识别')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </template>

            <template>
              <div class="margin-bottom-10">
                <span class="color-warning">{{$t("识别模式")}}</span>
              </div>
              <el-form-item :label="$t('人脸识别')">
                <el-radio-group size="small" v-model="formSet.faceEnable">
                  <el-radio-button label="2">{{$t('打开')}}</el-radio-button>
                  <el-radio-button label="1">{{$t('关闭')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </template>
          </el-form>
        </div>
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
  import MyPagination from "../../components/MyPagination";
  import mixins from "../../utils/mixins";
  import {common} from "../../utils/api/url";
  import {levelText, MessageError, MessageSuccess, MessageWarning} from "../../utils/utils";
  import LayoutTb from "../../components/Layout/LayoutTb";
  import MySelect from "../../components/MySelect";
  import MyInputButton from "../../components/search/MyInputButton";
  import DialogNormal from "../../components/utils/dialog/DialogNormal";
  import DrawerLayoutRight from "../../components/utils/dialog/DrawerLayoutRight";
  import MyDeviceUseType from "../../components/utils/status/MyDeviceUseType";
  import padWoValidater from "../../utils/validater/padWoValidater";
  export default {
    mixins: [mixins, padWoValidater],
    components: {MyPagination,LayoutTb,MySelect,MyInputButton,DialogNormal,DrawerLayoutRight,MyDeviceUseType},
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
        form: {
          id: '',
          ip: '',
          sn: '',
          comment: '',
          name: '',
          pwd: '',
          use: 2,
          sceneSubType: 1
        },
        formSet: {
          setType: '',
          id: '',
          sn: '',
          name: '',
          ip: '',
          comment: '',
          recSucTtsModeType: 2,//语音播报模式,
          recSucTtsModeContent: '',
          recSucDisplayText1Type: 2,
          recSucDisplayText1Content: '',
          recSucComModeType: 1,
          recSucComModeContent: '',
          recSucRelayType: 1,
          recFailEnable:2,
          recFailTimesThreshold: '',
          recFailTtsModeType: 1,
          recFailTtsModeContent: '',
          recFailDisplayTextType: 1,
          recFailDisplayTextContent: '',
          comRecRank: 2,
          comRecTimeWindow: 60,
          faceScore: '',
          comRelayTime: 500,
          faceDetectionType: 1,
          faceEnable: 1
        },
        formConf: {
          pwd: '',
          faceCallBack: '',
          hurtCallBack: '',
          padPhotoRegisterCallbackUrl: ''
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
          type: 3,
          online: this.searchOnline
        };
        this.$axios.get(common.wo_pad_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initConfig(row){
        let params = {
          sn: row.sn
        };
        this.$axios.get(common.wo_pad_config_get, {params: params}).then(res => {
          console.log(res.data.data);
          if (res.data.data){
            this.formSet = {
              name: res.data.data.name,
              comment: res.data.data.comment,
              recSucTtsModeType: res.data.data.recSucTtsModeType,
              recSucTtsModeContent: res.data.data.recSucTtsModeContent,
              recSucDisplayText1Type: res.data.data.recSucDisplayText1Type,
              recSucDisplayText1Content: res.data.data.recSucDisplayText1Content,
              recSucComModeType: res.data.data.recSucComModeType,
              recSucComModeContent: res.data.data.recSucComModeContent,
              recSucRelayType: res.data.data.recSucRelayType,
              recFailEnable: res.data.data.recFailEnable,
              recFailTimesThreshold: res.data.data.recFailTimesThreshold,
              recFailTtsModeType: res.data.data.recFailTtsModeType,
              recFailTtsModeContent: res.data.data.recFailTtsModeContent,
              recFailDisplayTextType: res.data.data.recFailDisplayTextType,
              recFailDisplayTextContent: res.data.data.recFailDisplayTextContent,
              comRecRank: res.data.data.comRecRank,
              comRecTimeWindow: res.data.data.comRecTimeWindow ? res.data.data.comRecTimeWindow : 60,
              faceScore: res.data.data.faceScore,
              comRelayTime: res.data.data.comRelayTime ? res.data.data.comRelayTime : 500,
              faceDetectionType: res.data.data.faceDetectionType,
              faceEnable: res.data.data.faceEnable,
              comRecDistModeType: res.data.data.comRecDistModeType ? res.data.data.comRecDistModeType : 2,
            }
            this.formSet['sn'] = row.sn;
          }
        });
      },
      initSetting(row){
        this.$axios.get(common.device_get).then(res => {
          if (res.data.data){
            this.formConf = {
              pwd: '',
              faceCallBack: res.data.data.wopadCallbackUrl,
              hurtCallBack: '',
              padPhotoRegisterCallbackUrl: '',
            };
          }
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
        this.modalVisible = true;
      },
      setInfo(row){
        this.initConfig(row);
        this.drawerVisible = true;
      },
      confInfo(){
        this.initSetting();
        this.modalConfVisible = true;
      },
      syncInfo(row, type){
        let url = "";
        let params = {
          sn: row.sn
        };
        if (type == 2){
          url = common.wo_pad_config_picsync;
          this.picLoading = true;
        }else if (type == 1){
          url = common.wo_pad_config_persync;
          this.perLoading = true;
        }
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.des);
          }else {
            MessageError(res.data.des);
          }
          this.picLoading = false;
          this.perLoading = false;
        });
      },
      unbindInfo(row){
        this.deleteSetTitle = this.$t("确认需要解绑该设备？")
        this.formSet.sn = row.sn;
        this.formSet.setType = 'unbind';
        this.subTitle = row.name;
        this.visibleConfim = true;
      },
      deleteInfo(row){
        this.formSet.sn = row.sn;
        this.formSet.setType = 'delete';
        this.subTitle = row.name;
        this.visibleConfim = true;
      },
      deleteMutiInfo(){
        let arr = [];
        for (let i = 0; i < this.deviceList.length; i++){
          arr.push(this.deviceList[i].sn);
        }
        let params = {
          snList: arr.join(),
          reset: true
        };
        params = this.$qs.stringify(params);
        this.mutiDeleteLoading = true;
        this.$axios.post(common.wo_pad_muti_delete, params).then(res => {
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
      resetMutiInfo(){
        let arr = [];
        for (let i = 0; i < this.deviceList.length; i++){
          arr.push(this.deviceList[i].sn);
        }
        let params = {
          snList: arr.join()
        };
        params = this.$qs.stringify(params);
        this.mutiResetLoading = true;
        this.$axios.post(common.wo_pad_muti_reset, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.mutiResetLoading = false;
        });
      },
      unbindMutiInfo(){
        let arr = [];
        for (let i = 0; i < this.deviceList.length; i++){
          arr.push(this.deviceList[i].sn);
        }
        let params = {
          snList: arr.join(),
          reset: false
        };
        params = this.$qs.stringify(params);
        this.mutiUnbindLoading = true;
        this.$axios.post(common.wo_pad_muti_delete, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.mutiUnbindLoading = false;
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
      jumpPage(data){
        this.page = data;
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
              comment: this.form.comment,
              deviceUse: this.form.use,
              sceneType: this.form.use
            };
            if (this.form.use == 3 || this.form.use == 4){
              params['sceneSubType'] = this.form.sceneSubType;
            }

            params = this.$qs.stringify(params);
            this.$axios.post(common.wo_pad_add, params, {loading: false}).then(res => {
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
      okConfDialog(){
        let url = "";
        this.$refs['formConf'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              wopadCallbackUrl: this.formConf.faceCallBack,
            };

            params = this.$qs.stringify(params);
            this.$axios.post(common.device_set, params).then(res => {
              if (res.data.code == 200){
                this.modalConfVisible = false;
                this.init();
                this.setCallbackUrl();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
            });
          }
        });
      },
      closeDialog(event){
        this.form = {
          id: '',
          ip: '',
          sn: '',
          comment: '',
          name: '',
          pwd: '',
          use: 2,
          sceneSubType: 1
        };
        this.formConf = {
          pwd: '',
          faceCallBack: '',
          hurtCallBack: '',
          padPhotoRegisterCallbackUrl: ''
        };
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        if (this.$refs['formConf']){
          this.$refs['formConf'].resetFields();
        }
      },
      cancelDialog(){
        this.modalConfVisible = false;
        this.modalVisible = false;
      },
      closeDrawerDialog(event){
        this.formSet = {
          setType: '',
          id: '',
          sn: '',
          name: '',
          ip: '',
          comment: '',
          recSucTtsModeType: 2,//语音播报模式,
          recSucTtsModeContent: '',
          recSucDisplayText1Type: 2,
          recSucDisplayText1Content: '',
          recSucComModeType: 1,
          recSucComModeContent: '',
          recSucRelayType: 1,
          recFailEnable:2,
          recFailTimesThreshold: '',
          recFailTtsModeType: 1,
          recFailTtsModeContent: '',
          recFailDisplayTextType: 1,
          recFailDisplayTextContent: '',
          comRecRank: 2,
          comRecTimeWindow: 60,
          faceScore: '',
          comRelayTime: 500,
          faceDetecitonType: 1,
          faceEnable: 1,
          comRecDistModeType: 2
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
      levelInfo(filterVal){
        let arrItem = levelText();
        let arr = [];
        for (let item in arrItem){
          if (filterVal){
            if (item != 3){
              arr.push(
                {
                  label: arrItem[item],
                  value: item
                }
              );
            }
          }else {
            arr.push(
              {
                label: arrItem[item],
                value: item
              }
            );
          }
        }
        return arr;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          sn: this.formSet.sn,
          reset: true
        };
        if (this.formSet.setType == 'unbind'){
          params['reset'] = false;
        }
        url = common.wo_pad_config_delete;
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
        return row.sn
      },
      handleSelectionChange(data){
        this.deviceList = data;
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

      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
</style>
