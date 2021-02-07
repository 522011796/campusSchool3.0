<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">权限设置</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加权限组")}}</el-button>
            <el-button size="small" type="warning" :loading="mutiDeleteLoading"  icon="el-icon-refresh" @click="syncInfo($event)">{{$t("同步生效")}}</el-button>
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
          :max-height="tableHeight.height"
          style="width: 100%">
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
            :label="$t('人数')">
            <template slot-scope="scope">
              <div>
                <span>{{$t("学生")}}</span>
                <span>{{scope.row.student_size}}</span>
              </div>
              <div>
                <span>{{$t("老师")}}</span>
                <span>{{scope.row.teacher_size}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <span v-if="scope.row.time_str">
                    <div v-for="(item, index) in JSON.parse(scope.row.time_str)" :key="index">{{item.t1}}-{{item.t2}}</div>
                  </span>
                  <span v-else>
                    {{$t("全天")}}
                  </span>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span v-if="scope.row.time_str">
                    <div v-for="(item, index) in JSON.parse(scope.row.time_str)" :key="index">{{item.t1}}-{{item.t2}}</div>
                  </span>
                  <span v-else>
                    {{$t("全天")}}
                  </span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('周期')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-left">
                  <el-tag size="mini" type="success" v-if="scope.row.monday == true">{{$t("周一")}}</el-tag>
                  <el-tag size="mini" type="success" v-if="scope.row.tuesday == true">{{$t("周二")}}</el-tag>
                  <el-tag size="mini" type="success" v-if="scope.row.wednesday == true">{{$t("周三")}}</el-tag>
                  <el-tag size="mini" type="success" v-if="scope.row.thursday == true">{{$t("周四")}}</el-tag>
                  <el-tag size="mini" type="success" v-if="scope.row.friday == true">{{$t("周五")}}</el-tag>
                  <el-tag size="mini" type="success" v-if="scope.row.saturday == true">{{$t("周六")}}</el-tag>
                  <el-tag size="mini" type="success" v-if="scope.row.sunday == true">{{$t("周日")}}</el-tag>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class color-warning">
                  <el-tag size="mini" type="success" v-if="scope.row.monday == true">{{$t("周一")}}</el-tag>
                  <el-tag size="mini" type="success" v-if="scope.row.tuesday == true">{{$t("周二")}}</el-tag>
                  <el-tag size="mini" type="success" v-if="scope.row.wednesday == true">{{$t("周三")}}</el-tag>
                  <el-tag size="mini" type="success" v-if="scope.row.thursday == true">{{$t("周四")}}</el-tag>
                  <el-tag size="mini" type="success" v-if="scope.row.friday == true">{{$t("周五")}}</el-tag>
                  <el-tag size="mini" type="success" v-if="scope.row.saturday == true">{{$t("周六")}}</el-tag>
                  <el-tag size="mini" type="success" v-if="scope.row.sunday == true">{{$t("周日")}}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('设备数')">
            <template slot-scope="scope">
              <span>{{scope.row.device_size}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('有效期')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <span v-if="scope.row.date_str">
                    <label v-for="(item, index) in JSON.parse(scope.row.date_str)" :key="index">{{item.d1}}/{{item.d2}}</label>
                  </span>
                  <span v-else>
                    {{$t("永久")}}
                  </span>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span v-if="scope.row.date_str">
                    <label v-for="(item, index) in JSON.parse(scope.row.date_str)" :key="index">{{item.d1}}/{{item.d2}}</label>
                  </span>
                  <span v-else>
                    {{$t("永久")}}
                  </span>
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
              <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row)"></i>
              <i class="fa fa-trash margin-right-5 color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal top="5vh" width-style="800px" :visible="modalVisible" :title="$t('设置权限组')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('权限名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('APP管理')" prop="ip">
            <el-popover
              placement="top"
              width="700"
              trigger="click"
              @show="handleShowTeacher(1)">
              <div>
                <teacher-tree-and-list-no-page ref="popverAppRef" user-type="admin" :group-id="form.groupId" :sel-arr="form.approverUserId" set-type="check" @select="handleSelUser($event, 1)"></teacher-tree-and-list-no-page>
              </div>
              <el-button slot="reference" type="success" plain size="small" @click="loadingShow(1)">
                <i v-if="refreshAppStatus == true" class="fa fa-refresh fa-spin"></i>
                {{$t("添加")}}
              </el-button>
            </el-popover>
            <span class="color-warning margin-left-10">
              <i class="fa fa-user"></i>
              {{$t("已选择")}}{{form.approverUserId.length}}{{$t("人员")}}
            </span>
          </el-form-item>
          <el-form-item :label="$t('授权范围')" prop="comment">
            <div>
              <el-popover
                placement="top"
                width="700"
                trigger="click"
                @show="handleShowTeacher(2)">
                <div>
                  <teacher-tree-and-list-no-page ref="popverTeacherRef" user-type="user" :group-id="form.groupId" :sel-arr="form.approverTeacherId" set-type="check" @select="handleSelUser($event, 2)"></teacher-tree-and-list-no-page>
                </div>
                <el-button slot="reference" type="success" plain size="small" @click="loadingShow(2)">
                  <i v-if="refreshTeacherStatus == true" class="fa fa-refresh fa-spin"></i>
                  {{$t("教师")}}
                </el-button>
              </el-popover>
              <span class="color-warning margin-left-10">
                <i class="fa fa-user"></i>
                {{$t("已选择")}}{{form.approverTeacherId.length}}{{$t("人员")}}
              </span>
            </div>
            <div>
              <el-popover
                placement="top"
                width="700"
                trigger="click"
                @show="handleShowTeacher(3)">
                <div>
                  <student-tree-and-list-no-page ref="popverStudentRef" :group-id="form.groupId" :sel-arr="form.approverStudentId" set-type="check" @select="handleSelUser($event, 3)"></student-tree-and-list-no-page>
                </div>
                <el-button slot="reference" type="success" plain size="small" @click="loadingShow(3)">
                  <i v-if="refreshStudentStatus == true" class="fa fa-refresh fa-spin"></i>
                  {{$t("学生")}}
                </el-button>
              </el-popover>
              <span class="color-warning margin-left-10">
                <i class="fa fa-user"></i>
                {{$t("已选择")}}{{form.approverStudentId.length}}{{$t("人员")}}
              </span>
            </div>
          </el-form-item>
          <el-form-item :label="$t('启用周期')" prop="comment">
            <div>
              <my-check :sel-value="form.monday" @change="handleWeekChange($event, 1)">{{$t("周一")}}</my-check>
              <my-check :sel-value="form.tuesday" @change="handleWeekChange($event, 2)">{{$t("周二")}}</my-check>
              <my-check :sel-value="form.wednesday" @change="handleWeekChange($event, 3)">{{$t("周三")}}</my-check>
              <my-check :sel-value="form.thursday" @change="handleWeekChange($event, 4)">{{$t("周四")}}</my-check>
              <my-check :sel-value="form.friday" @change="handleWeekChange($event, 5)">{{$t("周五")}}</my-check>
              <my-check :sel-value="form.saturday" @change="handleWeekChange($event, 6)">{{$t("周六")}}</my-check>
              <my-check :sel-value="form.sunday" @change="handleWeekChange($event, 7)">{{$t("周日")}}</my-check>
            </div>
          </el-form-item>
          <el-form-item :label="$t('启用时间')" prop="comment">
            <el-row>
              <el-col :span="7">
                <el-button-group>
                  <el-button :type="form.timeType == 1 ? 'primary' : 'default'" size="small" @click="handleTimeType(1)">{{$t("全天")}}</el-button>
                  <el-button :type="form.timeType == 2 ? 'primary' : 'default'" size="small" @click="handleTimeType(2)">{{$t("固定时间")}}</el-button>
                </el-button-group>
              </el-col>
              <el-col :span="17" v-if="form.timeType == 2">
                <div v-for="(item, index) in form.timeStr" :key="index">
                  <el-time-picker
                    :clearable="false"
                    value-format="HH:mm"
                    format="HH:mm"
                    v-model="item.t1"
                    :placeholder="$t('选择时间')"
                    class="layout-item"
                    style="width: 113px"
                    size="small"
                    @change="handleChangeTime($event, 1, item, index)">
                  </el-time-picker>
                  -
                  <el-time-picker
                    :clearable="false"
                    value-format="HH:mm"
                    format="HH:mm"
                    v-model="item.t2"
                    :placeholder="$t('选择时间')"
                    class="layout-item"
                    style="width: 113px"
                    size="small"
                    @change="handleChangeTime($event, 2, item, index)">
                  </el-time-picker>

                  <span>
                    <i class="fa fa-plus-circle color-grand" @click="addTime(item, index)"></i>
                    <i v-if="index != 0 || (index == 0 && form.timeStr.length > 1)" class="fa fa-minus-circle color-danger" @click="minusTime(index)"></i>
                  </span>
                </div>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item :label="$t('授权期限')" prop="comment">
            <el-row>
              <el-col :span="7">
                <el-button-group>
                  <el-button :type="form.dateType == 1 ? 'primary' : 'default'" size="small" @click="handleDateType(1)">{{$t("永久")}}</el-button>
                  <el-button :type="form.dateType == 2 ? 'primary' : 'default'" size="small" @click="handleDateType(2)">{{$t("固定时间")}}</el-button>
                </el-button-group>
              </el-col>
              <el-col :span="17" v-if="form.dateType == 2">
                <my-date-picker :sel-value="form.searchData" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item :label="$t('授权设备')" prop="comment">
            <el-col :span="11">
              <div>
                <span class="color-grand">{{$t("门禁控制器")}}</span>
                <span class="font-size-12 color-danger">({{$t("请设置异常惩罚")}})</span>
              </div>
              <div class="margin-top-5">
                <el-card :body-style="{padding: '10px'}" style="height: 200px;overflow: auto;">
                  <ul class="door-ul">
                    <el-checkbox-group v-model="form.controlDeviceList">
                      <li v-for="(item, index) in tableControlData" :key="index">
                        <el-checkbox :label="item.sn" style="margin-right:-10px;">{{item.sn}}({{item.name}})</el-checkbox>
                      </li>
                    </el-checkbox-group>
                  </ul>
                </el-card>
              </div>
            </el-col>
            <el-col :span="11" :offset="1">
              <div>
                <span class="color-grand">{{$t("AI一体机")}}</span>
                <span class="font-size-12 color-danger">({{$t("直连")}})</span>
              </div>
              <div class="margin-top-5">
                <el-card :body-style="{padding: '10px'}" style="height: 200px;overflow: auto;">
                  <ul class="door-ul">
                    <el-checkbox-group v-model="form.lineDeviceList">
                      <li v-for="(item, index) in tableLineData" :key="index">
                        <el-checkbox :label="item.sn" style="margin-right:-10px;">{{item.sn}}({{item.name}})</el-checkbox>
                      </li>
                    </el-checkbox-group>
                  </ul>
                </el-card>
              </div>
            </el-col>
          </el-form-item>
          <el-form-item :label="$t('异常惩罚')" prop="comment">
            <div>
              <div>
                <span class="color-muted">{{$t("标记异常")}}</span>
                <span>
                  <my-radio :sel-value="form.errorType" :label="false" @change="changeStatus($event, false, 1)">{{$t("禁用")}}</my-radio>
                  <my-radio :sel-value="form.errorType" :label="true" @change="changeStatus($event, true, 1)">{{$t("启用")}}</my-radio>
                </span>
              </div>
              <div>
                <span>{{$t("在")}}</span>
                <span>
                  <el-input size="small" style="width: 80px" :disabled="form.errorType == false" v-model="form.errorMin"></el-input>
                </span>
                <span>{{$t("分钟内,单向单门连续刷脸/卡/二维码")}}</span>
                <span>
                  <el-input size="small" style="width: 80px" :disabled="form.errorType == false" v-model="form.errorTimes"></el-input>
                </span>
                <span>{{$t("次将标记为异常状态")}}</span>
              </div>

              <div>
                <span class="color-muted">{{$t("通行受限")}}</span>
                <span>
                  <my-radio :sel-value="form.errorPassType" :label="false" @change="changeStatus($event, false, 2)">{{$t("禁用")}}</my-radio>
                  <my-radio :sel-value="form.errorPassType" :label="true" @change="changeStatus($event, true, 2)">{{$t("启用")}}</my-radio>
                  <label class="color-danger">{{$t("(仅适用于门禁控制器设备)")}}</label>
                </span>
              </div>
              <div>
                <span>{{$t("在")}}</span>
                <span>
                  <el-input size="small" style="width: 80px" :disabled="form.errorPassType == false" v-model="form.errorPassMin1"></el-input>
                </span>
                <span>{{$t("分钟内,单向单门连续刷脸/卡/二维码")}}</span>
                <span>
                  <el-input size="small" style="width: 80px" :disabled="form.errorPassType == false" v-model="form.errorPassTimes"></el-input>
                </span>
                <span>{{$t("次将限制通行")}}</span>
                <span>
                  <el-input size="small" style="width: 80px" :disabled="form.errorPassType == false" v-model="form.errorPassMin2"></el-input>
                </span>
                <span>{{$t("分钟")}}</span>
              </div>
            </div>

          </el-form-item>
          <el-form-item :label="$t('请假联动')" prop="comment">
            <my-radio :sel-value="form.leaveType" :label="false" @change="changeStatus($event, false, 3)">{{$t("禁用")}}</my-radio>
            <my-radio :sel-value="form.leaveType" :label="true" @change="changeStatus($event, true, 3)">{{$t("启用")}}</my-radio>
          </el-form-item>
          <el-form-item :label="$t('课堂联动')" prop="comment">
            <my-radio :sel-value="form.classType" :label="false" @change="changeStatus($event, false, 4)">{{$t("禁用")}}</my-radio>
            <my-radio :sel-value="form.classType" :label="true" @change="changeStatus($event, true,4)">{{$t("启用")}}</my-radio>
          </el-form-item>
          <el-form-item :label="$t('学籍联动')" prop="comment">
            <div style="line-height: 5px;margin-top: 15px">
              <span class="color-muted">({{$t('满足选择的条件的学生才可加入对应授权范围')}})</span>
            </div>
            <span>
              <my-radio :sel-value="form.teachType" :label="false" @change="changeStatus($event, false, 5)">{{$t("禁用")}}</my-radio>
              <my-radio :sel-value="form.teachType" :label="true" @change="changeStatus($event, true,5)">{{$t("启用")}}</my-radio>
            </span>
            <span>
              <el-popover trigger="hover" placement="bottom" :disabled="form.teachType == false">
                <div class="text-left">
                  <ul class="door-ul">
                    <el-checkbox-group v-model="form.teachTypeList">
                      <li v-for="(item, index) in tableTeachData" :key="index">
                        <el-checkbox :label="index" style="margin-right:-10px;">{{item}}</el-checkbox>
                      </li>
                    </el-checkbox-group>
                  </ul>
                </div>
                <el-button slot="reference" type="info" plain size="small">{{$t("已选择")}}{{form.teachTypeList.length}}{{$t("项")}}</el-button>
              </el-popover>
            </span>
          </el-form-item>
          <el-form-item :label="$t('在职联动')" prop="comment">
            <div style="line-height: 5px;margin-top: 15px">
              <span class="color-muted">({{$t('满足选择的条件的老师才可加入对应授权范围')}})</span>
            </div>
            <span>
              <my-radio :sel-value="form.workType" :label="false" @change="changeStatus($event, false,6)">{{$t("禁用")}}</my-radio>
              <my-radio :sel-value="form.workType" :label="true" @change="changeStatus($event, true,6)">{{$t("启用")}}</my-radio>
            </span>
            <span>
              <el-popover trigger="hover" placement="bottom" :disabled="form.workType == false">
                <div class="text-left">
                  <ul class="door-ul">
                    <el-checkbox-group v-model="form.workTypeList">
                      <li v-for="(item, index) in tableWorkData" :key="index">
                        <el-checkbox :label="index" style="margin-right:-10px;">{{item}}</el-checkbox>
                      </li>
                    </el-checkbox-group>
                  </ul>
                </div>
                <el-button slot="reference" type="info" plain size="small">{{$t("已选择")}}{{form.workTypeList.length}}{{$t("项")}}</el-button>
              </el-popover>
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

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" :content="deleteSetTitle" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
    <my-normal-dialog :visible.sync="visibleEnableConfim" :loading="dialogLoading" title="提示" detail="仅适用于门禁控制器设备,是否启用？" @ok-click="handleEnableOkChange" @cancel-click="handleCancelChange" @close="closeVisibleDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import MyPagination from "../../../components/MyPagination";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import TeacherTreeAndListNoPage from "../../../components/utils/treeAndList/TeacherTreeAndListNoPage";
  import StudentTreeAndListNoPage from "../../../components/utils/treeAndList/StudentTreeAndListNoPage";
  import {
    levelText,
    MessageError,
    MessageSuccess,
    MessageWarning,
    inArray,
    studentTeachStatus, workEnjoy
  } from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyInputButton from "../../../components/search/MyInputButton";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import MyDeviceUseType from "../../../components/utils/status/MyDeviceUseType";
  import doorManageValidater from "../../../utils/validater/doorManageValidater";
  import MyCheck from "../../../components/MyCheck";
  import MyRadio from "../../../components/MyRadio";
  import permissionValidater from "../../../utils/validater/permissionValidater";
  export default {
    mixins: [mixins, permissionValidater],
    components: {MyPagination,LayoutTb,MySelect,MyInputButton,DialogNormal,DrawerLayoutRight,MyDeviceUseType,MyCheck,MyRadio,TeacherTreeAndListNoPage,StudentTreeAndListNoPage},
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
        visibleEnableConfim: false,
        drawerVisible: false,
        loading: false,
        perLoading: false,
        picLoading: false,
        mutiDeleteLoading: false,
        mutiUnbindLoading: false,
        mutiResetLoading: false,
        modalAddVisible: false,
        deviceLoading: false,
        refreshAppStatus: false,
        refreshStudentStatus: false,
        refreshTeacherStatus: false,
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
        tableControlData: [],
        tableLineData: [],
        tableTeachData: [],
        tableWorkData: [],
        showAppPopover: false,
        id: '',
        form: {
          id: '',
          name: '',
          appUserList: [],
          studentList: [],
          teacherList: [],
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: true,
          timeType: '1',
          startTime: '',
          endTime: '',
          timeList: [],
          dateType: '1',
          searchData: [],
          deviceList: [],
          errorType: false,
          errorMin: '',
          errorTimes: '',
          errorPassType: false,
          errorPassMin1: '',
          errorPassTimes: '',
          errorPassMin2: '',
          leaveType: false,
          classType: false,
          teachType: false,
          teachTypeList: [],
          workType: false,
          workTypeList: [],
          typeList: [],
          statusList: [],
          controlDeviceList: [],
          lineDeviceList: [],
          timeStr: [
            {t1: '00:00', t2: '00:00'}
          ],
          approverUserId: [],
          approverTeacherId: [],
          approverStudentId: [],
          groupId: ''
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
          searchKey: this.searchKey
        };
        this.$axios.get(common.dormaccess_role_group_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initControlDevice(){
        let params = {
          page: 1,
          num: 999,
          sceneType: 3
        };
        this.$axios.get(common.dormaccess_role_group_device_control, {params: params}).then(res => {
          if (res.data.data){
            this.tableControlData = res.data.data;
          }
        });
      },
      initLineDevice(){
        let params = {
          page: this.page,
          num: this.num,
          sceneType: 3
        };
        this.$axios.get(common.dormaccess_role_group_device_line, {params: params}).then(res => {
          if (res.data.data){
            this.tableLineData = res.data.data;
          }
        });
      },
      addInfo(){
        this.initControlDevice();
        this.initLineDevice();
        this.studentTeachStatusInfo();
        this.workEnjoyInfo();
        this.modalVisible = true;
      },
      editInfo(row){
        let userIds = [];
        let teacherUserIds = [];
        let studentUserIds = [];
        let params = {
          id: row.id
        };
        this.$axios.get(common.dormaccess_role_group_edit, {params: params}).then(res => {
          if (res.data.code == 200){
            let data = res.data.data;
            this.form = {
              id: data.id,
              name: data.name,
              appUserList: [],
              studentList: [],
              teacherList: [],
              monday: data.monday,
              tuesday: data.tuesday,
              wednesday: data.wednesday,
              thursday: data.thursday,
              friday: data.friday,
              saturday: data.saturday,
              sunday: data.sunday,
              timeType: data.timeType == true ? '2' : '1',
              startTime: '',
              endTime: '',
              timeList: [],
              dateType: data.dateType == true ? '2' : '1',
              searchData: data.dateStr != null ? [JSON.parse(data.dateStr)[0].d1, JSON.parse(data.dateStr)[0].d2] : [],
              deviceList: data.deviceList,
              errorType: data.warningLimit,
              errorMin: data.warningMap != null ? JSON.parse(data.warningMap).min1 : '',
              errorTimes: data.warningMap != null ? JSON.parse(data.warningMap).times : '',
              errorPassType: data.unNormalLimit,
              errorPassMin1: data.unNormalMap != null ? JSON.parse(data.unNormalMap).min1 : '',
              errorPassTimes: data.unNormalMap != null ? JSON.parse(data.unNormalMap).times : '',
              errorPassMin2: data.unNormalMap != null ? JSON.parse(data.unNormalMap).min2 : '',
              leaveType: data.leaveApplyLink,
              classType: data.classTimeLink,
              teachType: data.studentStatusLink,
              teachTypeList: data.studentStatusSet != null ? JSON.parse(data.studentStatusSet) : [],
              workType: data.teacherStatusLink,
              workTypeList: data.teacherStatusSet != null ? JSON.parse(data.teacherStatusSet) : [],
              typeList: [],
              statusList: [],
              controlDeviceList: data.deviceList,
              lineDeviceList: data.deviceList,
              timeStr: data.timeStr != null ? JSON.parse(data.timeStr) : [{t1: '00:00', t2: '00:00'}],
              groupId: row.id
            };
            for (let i = 0; i < res.data.data.adminList.length; i++){
              userIds.push({
                user_id: res.data.data.adminList[i]
              });
            }
            this.$set(this.form, 'approverUserId', userIds);

            for (let i = 0; i < res.data.data.studentList.length; i++){
              studentUserIds.push({
                user_id: res.data.data.studentList[i]
              });
            }
            this.$set(this.form, 'approverStudentId', studentUserIds);

            for (let i = 0; i < res.data.data.teacherList.length; i++){
              teacherUserIds.push({
                user_id: res.data.data.teacherList[i]
              });
            }
            this.$set(this.form, 'approverTeacherId', teacherUserIds);
          }else {
            MessageError(res.data.desc);
          }
        });
        this.initControlDevice();
        this.initLineDevice();
        this.studentTeachStatusInfo();
        this.workEnjoyInfo();
        this.modalVisible = true;
      },
      syncInfo(){
        this.mutiDeleteLoading = true;
        this.$axios.post(common.dormaccess_role_group_sync).then(res => {
          if (res.data.code == 200){
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.mutiDeleteLoading = false;
        });
      },
      deleteInfo(row){
        this.id = row.id;
        this.subTitle = row.name ? row.name : row.sn;
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
        let userIds = [];
        let studentIds = [];
        let teacherIds = [];
        let timeStr = [];
        let dateStr = [] ;
        let unNormalMap = {};
        let warningMap = {};
        let deviceList = [];
        this.$refs['form'].validate((valid) => {
          if (valid) {
            let params = {
              id: this.form.groupId,
              name: this.form.name,
              timeType: this.form.timeType == 1 ? false : true,
              dateType: this.form.dateType == 1 ? false : true,
              authTimeStart: this.form.searchData.length > 0 ? this.form.searchData[0] : '',
              authTimeEnd: this.form.searchData.length > 0 ? this.form.searchData[1] : '',
              deviceList: [],
              studentList: [],
              teacherList: [],
              studentType: true,
              teacherType: false,
              teacherAppType: true,
              monday: this.form.monday,
              tuesday: this.form.tuesday,
              wednesday: this.form.wednesday,
              thursday: this.form.thursday,
              friday: this.form.friday,
              saturday: this.form.saturday,
              sunday: this.form.sunday,
              leaveApplyLink: this.form.leaveType,
              studentStatusSet: this.form.teachTypeList.join(),
              teacherStatusSet: this.form.workTypeList.join(),
              studentStatusLink: this.form.teachType,
              teacherStatusLink: this.form.workType,
              classTimeLink: this.form.classType,
              adminList: [],
              timeStr: [],
              dateStr: [],
              unNormalLimit: this.form.errorPassType,
              warningLimit: this.form.errorType,
              rangeMin: this.form.errorPassMin1,
              rangeThe: this.form.errorPassTimes,
              rangeLimitMin: this.form.errorPassMin2,
              warningMin: this.form.errorMin,
              warningThe: this.form.errorTimes,
              recModes: '',
            };

            if (this.form.dateType == 2){
              params['timeStr'] = timeStr.length > 0 ? JSON.stringify(timeStr) : [];
              params['timeStr'] = timeStr.length > 0 ? JSON.stringify(timeStr) : [];
            }else {
              params['timeStr'] = [];
            }

            if (this.form.approverStudentId.length <= 0 && this.form.approverTeacherId.length <= 0){
              MessageWarning("请选择授权老师或者学生！");
              return;
            }

            deviceList = this.form.controlDeviceList.concat(this.form.lineDeviceList);
            if (deviceList.length == 0){
              MessageWarning("请选择设备！");
              return;
            }
            params['deviceList'] = deviceList.join();

            if (this.form.errorPassType == true){
              unNormalMap = {"min1":this.form.errorPassMin1,"times":this.form.errorPassTimes,"min2":this.form.errorPassMin2};
              params['unNormalMap'] = JSON.stringify(unNormalMap);
            }

            if (this.form.errorType == true){
              unNormalMap = {"min1":this.form.errorMin,"times":this.form.errorTimes};
              params['warningMap'] = JSON.stringify(unNormalMap);
            }

            if (this.form.approverUserId.length > 0){
              for (let i = 0; i < this.form.approverUserId.length; i ++ ){
                userIds.push(this.form.approverUserId[i].user_id);
              }
              params['adminList'] = userIds.join();
            }

            if (this.form.approverStudentId.length > 0){
              for (let i = 0; i < this.form.approverStudentId.length; i ++ ){
                studentIds.push(this.form.approverStudentId[i].user_id);
              }
              params['studentList'] = studentIds.join();
            }

            if (this.form.approverTeacherId.length > 0){
              for (let i = 0; i < this.form.approverTeacherId.length; i ++ ){
                teacherIds.push(this.form.approverTeacherId[i].user_id);
              }
              params['teacherList'] = teacherIds.join();
            }

            for (let i = 0 ; i < this.form.timeStr.length; i++){
              timeStr.push({
                t1: this.form.timeStr[i].t1,
                t2: this.form.timeStr[i].t2
              });
            }

            if (this.form.timeType == 2){
              params['timeStr'] = timeStr.length > 0 ? JSON.stringify(timeStr) : [];
            }else {
              params['timeStr'] = [];
            }

            if (this.form.dateType == 2){
              if (this.form.searchData.length > 0){
                dateStr = [{
                  d1: this.form.searchData[0],
                  d2: this.form.searchData[1]
                }]
              }
            }else {
              dateStr = [];
            }
            params['dateStr'] = dateStr.length > 0 ? JSON.stringify(dateStr) : [];

            params = this.$qs.stringify(params);
            this.dialogLoading = true;
            this.$axios.post(common.dormaccess_role_group_save, params, {loading: false}).then(res => {
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
      closeVisibleDialog(event){

      },
      closeDialog(event){
        this.form = {
          id: '',
          name: '',
          appUserList: [],
          studentList: [],
          teacherList: [],
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: true,
          timeType: '1',
          startTime: '',
          endTime: '',
          timeList: [],
          dateType: '1',
          searchData: [],
          deviceList: [],
          errorType: false,
          errorMin: '',
          errorTimes: '',
          errorPassType: false,
          errorPassMin1: '',
          errorPassTimes: '',
          errorPassMin2: '',
          leaveType: false,
          classType: false,
          teachType: false,
          teachTypeList: [],
          workType: false,
          workTypeList: [],
          typeList: [],
          statusList: [],
          controlDeviceList: [],
          lineDeviceList: [],
          timeStr: [
            {t1: '00:00', t2: '00:00'}
          ],
          approverUserId: [],
          approverTeacherId: [],
          approverStudentId: []
        };
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        if (this.$refs['popverAppRef']){
          this.$refs.popverAppRef._handleResetChange();
        }
        if (this.$refs['popverStudentRef']){
          this.$refs.popverStudentRef._handleResetChange();
        }
        if (this.$refs['popverTeacherRef']){
          this.$refs.popverTeacherRef._handleResetChange();
        }
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
        this.visibleEnableConfim = false;
        this.$set(this.form, 'errorPassType', false);
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.id
        };
        url = common.dormaccess_role_group_del;
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
      handleEnableOkChange(data){
        this.$set(this.form, 'errorPassType', true);
        this.visibleEnableConfim = false;
      },
      handleChange(data){
        this.form.searchData = data;
      },
      changeStatus(event, data, type){
        if (type == 1){
          this.form.errorType = data;
        }else if (type == 2){
          if(data) {
            this.visibleEnableConfim = true;
          }
          this.form.errorPassType = data;
        }else if (type == 3){
          this.form.leaveType = data;
        }else if (type == 4){
          this.form.classType = data;
        }else if (type == 5){
          this.form.teachType = data;
        }else if (type == 6){
          this.form.workType = data;
        }
      },
      handleTimeType(type){
        this.form.timeType = type;
      },
      handleDateType(type){
        this.form.dateType = type;
      },
      handleChangeTime(data, type, item, index){
        if (type == 1){
          this.form.timeStr[index].t1 = data;
        }else if (type == 2){
          this.form.timeStr[index].t2 = data;
        }
      },
      handleWeekChange(data, type){
        if (type == 1){
          this.form.monday = data;
        }else if (type == 2){
          this.form.tuesday = data;
        }else if (type == 3){
          this.form.wednesday = data;
        }else if (type == 4){
          this.form.thursday = data;
        }else if (type == 5){
          this.form.friday = data;
        }else if (type == 6){
          this.form.saturday = data;
        }else if (type == 7){
          this.form.sunday = data;
        }
      },
      studentTeachStatusInfo(){
        this.tableTeachData = studentTeachStatus('get');
      },
      workEnjoyInfo(){
        this.tableWorkData = workEnjoy('get');
      },
      addTime(item, index){
        let obj = {t1: '00:00', t2: '00:00'};
        this.form.timeStr.splice(index+1, 0, obj);
      },
      minusTime(index){
        this.form.timeStr.splice(index, 1);
      },
      handleShowTeacher(type){
        setTimeout(()=>{
          if (type == 1){
            this.$refs.popverAppRef._handleOpen();
          }else if (type == 2){
            this.$refs.popverTeacherRef._handleOpen();
          }else if (type == 3){
            this.$refs.popverStudentRef._handleOpen();
          }
        },800);
      },
      handleSelUser(data, type){
        if (type == 1){
          this.form.partUserIds = data;
        }else if (type == 2){
          this.form.approverTeacherId = data;
        }else if (type == 3){
          this.form.approverStudentId = data;
        }
      },
      loadingShow(type){
        let timer = null;
        clearTimeout(timer);
        switch (type) {
          case 1:
            this.refreshAppStatus = true;
            timer = setTimeout(() => {
              this.refreshAppStatus = false;
              clearTimeout(timer);
            },1000);
            break;
          case 2:
            this.refreshTeacherStatus = true;
            timer = setTimeout(() => {
              this.refreshTeacherStatus = false;
              clearTimeout(timer);
            },1000);
            break;
          case 3:
            this.refreshStudentStatus = true;
            timer = setTimeout(() => {
              this.refreshStudentStatus = false;
              clearTimeout(timer);
            },1000);
            break;
        }
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
