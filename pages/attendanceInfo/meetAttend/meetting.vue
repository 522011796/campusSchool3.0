<template>
  <div class="container">
    <layout-tb v-if="showDetail == false">
      <template slot="tag">签到管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加会议")}}</el-button>
            <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
          </el-col>
          <el-col :span="12" class="text-right">
            <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
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
          row-key="id"
          :max-height="tableHeight.height"
          style="width: 100%"
          @filter-change="fliterTable">
          <el-table-column
            align="center"
            :label="$t('创建日期')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{$moment(scope.row.create_time).format("YYYY-MM-DD hh:mm:ss")}}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{$moment(scope.row.create_time).format("YYYY-MM-DD hh:mm:ss")}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('编号')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.meeting_no}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.meeting_no}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.meeting_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.meeting_name}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('议题')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.meeting_title}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.meeting_title}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('筹备人')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.caterer_user_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.caterer_user_name}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('开始时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <div>
                    {{$moment(scope.row.begin_time).format("YYYY-MM-DD hh:mm:ss")}}
                  </div>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{$moment(scope.row.begin_time).format("YYYY-MM-DD hh:mm:ss")}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('结束时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <div>
                    {{$moment(scope.row.end_time).format("YYYY-MM-DD hh:mm:ss")}}
                  </div>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{$moment(scope.row.end_time).format("YYYY-MM-DD hh:mm:ss")}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="level_name"
            :label="$t('参会人数')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <div>
                    {{scope.row.part_user_count}}
                  </div>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <div>
                    {{scope.row.part_user_count}}
                  </div>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="level_name"
            :label="$t('参会地点')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <div>
                    {{scope.row.classroom_name}}
                  </div>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <div>
                    {{scope.row.classroom_name}}
                  </div>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :filter-multiple="false"
            column-key="status"
            :filters="mettingStatusFilter"
            prop="level_name"
            :label="$t('会议状态')">
            <template slot-scope="scope">
              <span>{{meetingStatusInfo('set', scope.row.meeting_status)}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i v-if="scope.row.meeting_status == 1" class="fa fa-edit color-grand margin-right-5" @click="editInfo(scope.row)"></i>
              <i class="fa fa-line-chart color-warning margin-right-5" @click="detailInfo(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <div v-if="showDetail == true">
      <div>
        <div>
          <el-button type="default" size="small" icon="el-icon-arrow-left" @click="returnBack">{{$t("返回")}}</el-button>
        </div>
        <el-card class="margin-top-5" shadow="never" :body-style="{padding: '5px 10px',height: '150px'}">
          <el-row :gutter="8">
            <el-col :span="8">
              <div class="rpStatic-top-item color-muted">
                <div class="title color-grand">
                  {{$t("应出勤人数")}}:
                  <span>{{staticData.totalCount}}</span>
                </div>
                <div class="margin-top-20">
                  <div class="margin-top-5 color-muted font-size-12" v-for="(item, index) in staticData.allStatList" :key="index">
                    <span class="person-item text-right">{{item.name}}</span>
                    <span>{{item.count}}</span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="rpStatic-top-item color-muted">
                <div class="title">{{$t("出席率")}}: </div>
                <div style="height: 140px">
                  <table-bar-chart chart-id="typeId" :chart-title='$t("出席率")' :data="staticData.signRate"></table-bar-chart>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="rpStatic-top-item color-muted">
                <div class="title">{{$t("级别占比")}}: </div>
                <div>
                  <div style="height: 140px">
                    <div v-if="statusChartData.length <= 0" class="color-disabeld text-center" style="position: relative; top: 20%;">{{$t("暂无数据")}}</div>
                    <circle-chart v-else chart-id="statusId" :chart-title='$t("状态占比")' :data-key="statusChartDataKey" :data="statusChartData"></circle-chart>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>

      <div class="layout-right-tab margin-top-10">
        <el-row class="layout-inline">
          <el-col :span="12" class="color-warning">
            <span>
              <label>{{$t("开始时间")}}:</label>
              <label>{{$moment(this.detailData.begin_time).format("YYYY-MM-DD hh:mm:ss")}}</label>
            </span>
            <span>
              <label>{{$t("到")}}</label>
            </span>
            <span>
              <label>{{$moment(this.detailData.end_time).format("YYYY-MM-DD hh:mm:ss")}}</label>
            </span>
            <span class="margin-left-10">
              <label>{{$t("时长")}}:</label>
              <label>{{this.detailData.timeLength}}</label>
            </span>
          </el-col>
          <el-col :span="12" class="text-right">
            <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('姓名/工号')" @click="searchStatic"></my-input-button>
          </el-col>
        </el-row>
      </div>

      <div>
        <el-table
          :data="tableStaticData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          :max-height="tableHeight6.height"
          style="width: 100%"
          @filter-change="fliterTable">
          <el-table-column
            align="center"
            :label="$t('名称')">

            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.meeting_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.meeting_name}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('议题')">

            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.meeting_title}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.meeting_title}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('参会人')">

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
            :label="$t('签到时间')">

            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.sign_time ? $moment(scope.row.sign_time).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.sign_time ? $moment(scope.row.sign_time).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :filter-multiple="false"
            column-key="signStatus"
            :filters="mettingJoinStatusFilter"
            :label="$t('出席状态')">

            <template slot-scope="scope">
              <span>{{meetingJoinStatusInfo(scope.row.sign_status)}}</span>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="totalStatic" :current-page="pageStatic" :page-size="numStatic" @currentPage="currentStaticPage" @sizeChange="sizeStaticChange" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </div>

    <dialog-normal top="5vh" width-style="550px" :visible="modalVisible" :title="$t('会议设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('会议编号')" prop="meetingNo">
            <el-input v-model="form.meetingNo" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('会议名称')" prop="meetingName">
            <el-input v-model="form.meetingName" class="width-260"></el-input>
            <span>

            </span>
          </el-form-item>
          <el-form-item :label="$t('会议议题')" prop="meetingTitle">
            <el-input v-model="form.meetingTitle" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('开始时间')" prop="beginDate">
            <my-date-picker :sel-value="form.beginDate" width-style="128" @change="handleChangeDate($event, 1)"></my-date-picker>
            <el-time-picker
              :clearable="false"
              value-format="HH:mm"
              format="HH:mm"
              v-model="form.beginDateTime"
              :placeholder="$t('选择时间')"
              class="layout-item"
              style="width: 128px"
              @change="handleChangeTime($event, 1)">
            </el-time-picker>
          </el-form-item>
          <el-form-item :label="$t('结束时间')" prop="endDate">
            <my-date-picker :sel-value="form.endDate" width-style="128" @change="handleChangeDate($event, 2)"></my-date-picker>
            <el-time-picker
              :clearable="false"
              value-format="HH:mm"
              format="HH:mm"
              v-model="form.endDateTime"
              :placeholder="$t('选择时间')"
              class="layout-item"
              style="width: 128px"
              @change="handleChangeTime($event, 2)">
            </el-time-picker>
          </el-form-item>
          <el-form-item :label="$t('会议地点')" prop="buildData">
            <my-cascader ref="SelectorBuild" width-style="260" :sel-value="form.buildData" type="3" sub-type="3" @change="handleCascaderChange($event, 1)"></my-cascader>
          </el-form-item>
          <el-form-item :label="$t('筹备人')" prop="catererUserId">
            <el-popover
              placement="top"
              width="700"
              trigger="click"
              @show="handleShowTeacher(1)">
              <div>
                <teacher-tree-and-list ref="popverCreateRef" :sel-value="form.catererUserId" @change="handleSelCreateUser($event, 1)"></teacher-tree-and-list>
              </div>
              <el-button slot="reference" type="success" plain size="small">{{$t("添加")}}</el-button>
            </el-popover>
            <span v-if="form.createUser != ''" class="color-warning margin-left-10">
              <i class="fa fa-user"></i>
              {{form.createUser}}
            </span>
          </el-form-item>
          <el-form-item :label="$t('审批人')" prop="approverUserId">
            <el-popover
              placement="top"
              width="700"
              trigger="click"
              @show="handleShowTeacher(2)">
              <div>
                <teacher-tree-and-list ref="popverAppRef" :sel-value="form.approverUserId" @change="handleSelCreateUser($event, 2)"></teacher-tree-and-list>
              </div>
              <el-button slot="reference" type="success" plain size="small">{{$t("添加")}}</el-button>
            </el-popover>
            <span v-if="form.approverUser != ''" class="color-warning margin-left-10">
              <i class="fa fa-user"></i>
              {{form.approverUser}}
            </span>
          </el-form-item>
          <el-form-item :label="$t('参会人员')" prop="partUserIds">
            <el-popover
              placement="top"
              width="700"
              trigger="click"
              @show="handleShowTeacher(3)">
              <div>
                <teacher-tree-and-list ref="popverPartRef" :sel-arr="form.partUserIds" set-type="check" @select="handleSelUser"></teacher-tree-and-list>
              </div>
              <el-button slot="reference" type="success" plain size="small">{{$t("添加")}}</el-button>
            </el-popover>
            <span class="color-warning margin-left-10">
              <i class="fa fa-user"></i>
              {{$t("已选择")}}{{form.partUserIds.length}}{{$t("人员")}}
            </span>
          </el-form-item>
          <el-form-item :label="$t('上传附件')" prop="classNo">
            <div class="pull-left" v-if="form.filePaths.length > 0">
              <div class="pull-left margin-left-5" style="position: relative;" v-for="(item, index) in form.filePaths" :key="index">
                <i class="fa fa-close" style="position: absolute; right: -5px; top: -5px;"></i>
                <img :src="item" class="rp-img"/>
              </div>
            </div>
            <upload-square class="pull-left margin-left-10 margin-top-5" :limit="3" :action="uploadFileAction" max-size="8" :data="{path: 'meetingFile'}" accept=".png,.jpg,.jpeg" @success="uploadSuccess" @error="uploadError">
              <el-button size="small" type="primary">{{$t("点击上传")}}</el-button>
            </upload-square>
            <span class="pull-left color-danger font-size-12 margin-left-10 margin-top-5">{{$t("文件不超过8M,3张")}}</span>
            <div class="moon-clearfix"></div>
          </el-form-item>
          <el-form-item ref='signDeviceSnRef' :label="$t('签到方式')" :prop='form.signType == 3 ? "signDeviceSn" : "a"'>
            <el-radio-group v-model="form.signType" @change="hangleChange">
              <div>
                <el-radio :label="1">{{$t("蓝牙签到")}}</el-radio>
              </div>
              <div class="margin-top-5">
                <el-radio :label="2">{{$t("蓝牙+APP人脸识别签到")}}</el-radio>
              </div>
              <div class="margin-top-5">
                <div>
                  <el-radio :label="3">{{$t("人脸识别考勤机签到")}}</el-radio>
                </div>
                <div class="margin-top-5">
                  <my-select :sel-value="form.signDeviceSn" width-style="260" :options="tableDeviceData" @change="handleSelect($event)"></my-select>
                </div>
              </div>
            </el-radio-group>
          </el-form-item>
          <el-form-item :label="$t('提前签到时间')" prop="signBefore">
            <el-input v-model="form.signBefore" class="width-260">
              <template slot="append">{{$t('分钟')}}</template>
            </el-input>
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

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :hide-footer="true" :visible="drawerVisible" size="450px" :title="$t('会议信息')" @right-close="cancelDrawDialog">
      <div slot="content">
        <span tabindex="1"></span>
        <div>

        </div>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import MyPagination from "../../../components/MyPagination";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {inArray, meetingStatusText, MessageError, MessageSuccess, MessageWarning} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyUserType from "../../../components/utils/MyUserType";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyInputButton from "../../../components/search/MyInputButton";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import MyCascader from "../../../components/utils/select/MyCascader";
  import TeacherTreeAndList from "../../../components/utils/treeAndList/TeacherTreeAndList";
  import UploadSquare from "../../../components/utils/upload/UploadSquare";
  import meetingValidater from "../../../utils/validater/meetingValidater";

  export default {
    mixins: [mixins, meetingValidater],
    components: {MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal,DrawerLayoutRight,MyCascader,TeacherTreeAndList,UploadSquare},
    data(){
      return {
        uploadFileAction: common.upload_file,
        pageStatic: 1,
        totalStatic: 0,
        numStatic: 20,
        tableData: [],
        tableStaticData: [],
        tableDeviceData: [],
        teacherData: [],
        searchDate: [],
        typeList: [],
        taticData: {},
        searchKey: '',
        visible: false,
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        showDetail: false,
        clearTime: '',
        action: '',
        subTitle: '',
        dataAudit: {},
        status: '',
        auditObjectItem: {},
        detailData: {},
        staticData: {},
        msgType: '',
        mettingStatusFilter: [],
        mettingStatusOptions: [],
        mettingJoinStatusFilter: [],
        searchStatusKey: '',
        signStatus: '',
        statusChartDataKey: [],
        statusChartData: [],
        deviceList: [],
        searchDeviceKey: '',
        form: {
          id: '',
          meetingNo: '',
          meetingName: '',
          meetingTitle: '',
          classroomId: '',
          catererUserId: '',
          approverUserId: '',
          filePaths: [],
          signType: 2,
          signDeviceSn: '',
          buildData: [],
          deptData: [],
          beginDateTime: '00:00',
          endDateTime: '00:00',
          beginDate: '',
          endDate: '',
          signBefore: '',
          partUserIds: [],
          createUser: '',
          approverUser: ''
        }
      }
    },
    created() {
      this.init();
      this.meetingStatusGetInfo();
      this.initDevice();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          startTime: this.searchDate && this.searchDate.length > 0 ? (this.searchDate[0] + ' 00:00:00') : '',
          endTime: this.searchDate && this.searchDate.length > 0 ? (this.searchDate[1] + ' 23:59:59') : '',
          meetingStatus: this.status,
          keyWord: this.searchKey
        };
        this.$axios.get(common.attend_meeting_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initStatic(row){
        let chartArr = [];
        let chartKey = [];
        let params = {
          id: row.id
        };
        this.$axios.get(common.attend_meeting_static, {params: params}).then(res => {
          if (res.data.data){
            this.staticData = res.data.data;
            for (let i = 0; i < res.data.data.allStatList.length; i++){
              res.data.data.allStatList[i]['value'] = res.data.data.allStatList[i].count;
              chartKey.push(res.data.data.allStatList[i].name);
            }
            this.detailData['timeLength'] = res.data.data.timeLength;
            this.statusChartData = res.data.data.allStatList;
            this.statusChartDataKey = chartKey;
          }
        });
      },
      initStaticPage(row){
        let params = {
          page: this.pageStatic,
          num: this.numStatic,
          id: row.id,
          keyWord: this.searchStatusKey,
          signStatus: this.signStatus
        };
        this.$axios.get(common.attend_meeting_static_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableStaticData = res.data.data.list;
            this.totalStatic = res.data.data.totalCount;
            this.numStatic = res.data.data.num;
            this.pageStatic = res.data.data.currentPage;
          }
        });
      },
      initDevice(){
        let params = {
          page: 1,
          num: 999,
          keyWOrd: this.searchDeviceKey,
          sceneType: 3
        };
        this.$axios.get(common.attend_meeting_device_page, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['label'] = res.data.data.list[i].sn+"("+res.data.data.list[i].name+")";
              res.data.data.list[i]['value'] = res.data.data.list[i].sn;
            }
            this.tableDeviceData = res.data.data.list;
          }
        });
      },
      addInfo(){
        this.modalVisible = true;
      },
      expandInfo(){
        let url = "";
        let params = {
          page: this.page,
          num: 99999,
          startTime: this.searchDate && this.searchDate.length > 0 ? (this.searchDate[0] + ' 00:00:00') : '',
          endTime: this.searchDate && this.searchDate.length > 0 ? (this.searchDate[1] + ' 23:59:59') : '',
          meetingStatus: this.status,
          keyWord: this.searchKey
        };
        params = this.$qs.stringify(params);
        url = common.attend_meeting_expand;
        window.open(url+"?"+params, "_self");
      },
      returnBack(){
        this.showDetail = false;
      },
      editInfo(row){
        let userIds = [];
        let params = {
          id: row.id
        };
        this.$axios.get(common.attend_meeting_info, {params: params}).then(res => {
          if (res.data.data){
            this.form = {
              id: row.id,
              meetingNo: res.data.data.meeting_no,
              meetingName: res.data.data.meeting_name,
              meetingTitle: res.data.data.meeting_title,
              classroomId: res.data.data.classroom_id,
              catererUserId: res.data.data.caterer_user_id,
              approverUserId: res.data.data.approver_user_id,
              filePaths: res.data.data.file_path,
              signType: res.data.data.sign_type,
              signDeviceSn: res.data.data.sign_device_sn,
              buildData: [res.data.data.build_id, res.data.data.floor_num, res.data.data.classroom_id],
              deptData: res.data.data.sign_type,
              beginDateTime: this.$moment(res.data.data.begin_time).format("HH:mm"),
              endDateTime: this.$moment(res.data.data.end_time).format("HH:mm"),
              beginDate: this.$moment(res.data.data.begin_time).format("YYYY-MM-DD"),
              endDate: this.$moment(res.data.data.end_time).format("YYYY-MM-DD"),
              signBefore: res.data.data.sign_before,
              createUser: res.data.data.caterer_user_name,
              approverUser: res.data.data.approver_user_name,
              partUserIds: []
            };
            for (let i = 0; i < res.data.data.partUserIds.length; i++){
              userIds.push({
                user_id: res.data.data.partUserIds[i]
              });
            }
            //this.form['partUserIds'] = userIds;
            this.$set(this.form, 'partUserIds', userIds);
          }
        });
        this.modalVisible = true;
      },
      detailInfo(row){
        this.showDetail = true;
        this.detailData = row;
        this.meetingJoinStatusGetInfo();
        this.initStatic(row);
        this.initStaticPage(row);
      },
      deleteInfo(row){
        this.form.id = row.id;
        this.visibleConfim = true;
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      searchStatic(data){
        this.searchStatusKey = data.input;
        this.page = 1;
        this.initStaticPage(this.detailData);
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
      sizeStaticChange(event){
        this.pageStatic = 1;
        this.numStatic = event;
        this.initStaticPage(this.detailData);
      },
      currentStaticPage(event){
        this.pageStatic = event;
        this.initStaticPage(this.detailData);
      },
      closeDrawerDialog(event){
        this.auditObjectItem = {};
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      handleClick(data){
        this.page = 1;
        this.status = data;
        this.init();
      },
      handleChange(data){
        this.searchDate = data;
      },
      handleSelect(data){
        this.form.signDeviceSn = data;
      },
      handleOk(data,textarea){
        let params = {
          applyId: this.auditObjectItem.id ? this.auditObjectItem.id : this.auditObjectItem.id,
          status: 1,
          des2: textarea
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.msg_handle, params).then(res => {
          if (res.data.code == 200){
            this.detailInfo(this.auditObjectItem);
            this.init();
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      },
      handleNo(data,textarea){
        let params = {
          applyId: this.auditObjectItem.id ? this.auditObjectItem.id : this.auditObjectItem.id,
          status: 2,
          des2: textarea
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.msg_handle, params).then(res => {
          if (res.data.code == 200){
            this.detailInfo(this.auditObjectItem);
            this.init();
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      },
      handleCancel(data){
        let params = {
          applyId: this.auditObjectItem.id ? this.auditObjectItem.id : this.auditObjectItem.id,
          status: -1
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.msg_handle, params).then(res => {
          if (res.data.code == 200){
            this.detailInfo(this.auditObjectItem);
            this.init();
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      },
      meetingStatusInfo(type, val){
        return meetingStatusText(type, val);
      },
      meetingStatusGetInfo(type, val){
        let arrStatus = meetingStatusText('get', null);
        let arr = [];
        for (let item in arrStatus){
          arr.push({
            text: arrStatus[item],
            value: item
          });
        }
        this.mettingStatusFilter = arr;
      },
      meetingJoinStatusInfo(val){
        return meetingStatusText('set', val);
      },
      meetingJoinStatusGetInfo(){
        let arrStatus = meetingStatusText('get', null);
        let arr = [];
        for (let item in arrStatus){
          arr.push({
            text: arrStatus[item],
            value: item
          });
        }
        this.mettingJoinStatusFilter = arr;
      },
      handleChangeDate(data, type){
        if (type == 1){
          this.form.beginDate = data;
        }else if (type == 2){
          this.form.endDate = data;
        }
      },
      handleChangeTime(data, type){
        if (type == 1){
          this.form.beginDateTime = data;
        }else if (type == 1){
          this.form.endDateTime = data;
        }
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'status'){
            this.status = value[item][0];
            this.init();
          }else if (item == 'signStatus'){
            this.signStatus = value[item][0];
            this.initStaticPage(this.detailData);
          }
        }
      },
      closeDialog(event){
        this.form = {
          id: '',
          meetingNo: '',
          meetingName: '',
          meetingTitle: '',
          classroomId: '',
          catererUserId: '',
          approverUserId: '',
          filePaths: [],
          signType: 2,
          signDeviceSn: '',
          buildData: [],
          deptData: [],
          beginDateTime: '00:00',
          endDateTime: '00:00',
          beginDate: '',
          endDate: '',
          signBefore: '',
          partUserIds: [],
          createUser: '',
          approverUser: ''
        };
        if (this.$refs['popverCreateRef']){
          this.$refs.popverCreateRef._handleResetChange();
        }

        if (this.$refs['popverAppRef']){
          this.$refs.popverAppRef._handleResetChange();
        }

        if (this.$refs['popverPartRef']){
          this.$refs.popverPartRef._handleResetChange();
        }

        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }

        this.resetCasadeSelector('SelectorBuild');
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      okDialog(){
        let url = "";
        let userIds = [];
        this.$refs['form'].clearValidate();
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              meetingNo: this.form.meetingNo,
              meetingName: this.form.meetingName,
              meetingTitle: this.form.meetingTitle,
              classroomId: this.form.classroomId,
              catererUserId: this.form.catererUserId,
              approverUserId: this.form.approverUserId,
              filePaths: this.form.filePaths.join(),
              signType: this.form.signType,
              signDeviceSn: this.form.signDeviceSn,
              beginTime: this.form.beginDate + " " + this.form.beginDateTime,
              endTime: this.form.endDate + " " + this.form.endDateTime,
              signBefore: this.form.signBefore
            };
            if (this.form.partUserIds.length > 0){
              for (let i = 0; i < this.form.partUserIds.length; i ++ ){
                userIds.push(this.form.partUserIds[i].user_id);
              }
              params['partUserIds'] = userIds.join();
            }

            if (this.form.id != ''){
              params['id'] = this.form.id;
              url = common.attend_meeting_edit;
            }else {
              url = common.attend_meeting_add;
            }
            params = this.$qs.stringify(params);
            this.$axios.post(url, params).then(res => {
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
      handleCascaderChange(data, type){
        if (type == 1){
          if (data.length == 3){
            this.form.classroomId = data[data.length-1];
          }
          this.form.buildData = data;
        }else if (type == 2){
          this.form.deptData = data;
        }
      },
      hangleChange(data){
        this.form.signType = data;
      },
      uploadSuccess(res, file){
        if (res.code == 200){
          this.form.filePaths.push(res.data.url);
        }else {

        }
      },
      uploadError(res, file){
        //MessageError(res.data.desc);
      },
      handleSelCreateUser(data, type){
        if (type == 1){
          this.form.createUser = data.real_name;
          this.form.catererUserId = data.user_id;
        }else if (type == 2){
          this.form.approverUser = data.real_name;
          this.form.approverUserId = data.user_id;
        }
      },
      handleSelUser(data){
        let arr = [];
        for (let i = 0; i < data.length; i++){
          arr.push({
            user_id: data[i]
          });
        }
        this.form.partUserIds = arr;
      },
      handleShowTeacher(type){
        if (type == 1){
          this.$refs.popverCreateRef._handleOpen();
        }else if (type == 2){
          this.$refs.popverAppRef._handleOpen();
        }if (type == 3){
          this.$refs.popverPartRef._handleOpen();
        }
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.form.id
        }
        url = common.attend_meeting_delete;
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
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
  .rp-img{
    height: 50px;
    width: 50px;
    border: 1px solid #dddddd;
  }
</style>
