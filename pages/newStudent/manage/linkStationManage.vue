<template>
  <div class="container">
    <layout-tb>
      <template slot="tag"></template>

      <div slot="tab">
        <el-row>
          <el-col :span="24">
            <el-button size="small" type="text" @click="returnMain($event)">
              <i class="fa fa-arrow-left"></i>
              {{$t("返回")}}
            </el-button>
            <span class="margin-left-5">{{pageTitle}}</span>
            <el-button class="" size="small" type="warning"  icon="el-icon-plus" @click="addInfo($event)">{{$t("创建规则")}}</el-button>
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
            prop="department_name"
            :label="$t('创建日期')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  {{$moment(scope.row.create_time).format("YYYY-MM-DD HH:mm:ss")}}
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{$moment(scope.row.create_time).format("YYYY-MM-DD HH:mm:ss")}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="department_name"
            :label="$t('名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  {{scope.row.rule_name}}
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.rule_name}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="action_name"
            :label="$t('接站员')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  {{scope.row.teacher_size}}
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.teacher_size}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
<!--          <el-table-column-->
<!--            align="center"-->
<!--            prop="user_name"-->
<!--            :label="$t('状态')">-->
<!--            <template slot-scope="scope">-->
<!--              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">-->
<!--                <div class="text-center">-->
<!--                  <label v-if="scope.row.enable" class="color-success">{{$t("已启用")}}</label>-->
<!--                  <label v-if="!scope.row.enable" class="color-danger">{{$t("已禁用")}}</label>-->
<!--                </div>-->
<!--                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">-->
<!--                  <label v-if="scope.row.enable" class="color-success">{{$t("已启用")}}</label>-->
<!--                  <label v-if="!scope.row.enable" class="color-danger">{{$t("已禁用")}}</label>-->
<!--                </div>-->
<!--              </el-popover>-->
<!--            </template>-->
<!--          </el-table-column>-->
          <el-table-column
            align="center"
            prop="user_name"
            :label="$t('到达站')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  {{scope.row.arrive_station}}
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.arrive_station}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            width="120"
            :label="$t('操作')">
            <template slot-scope="scope">
<!--              <i v-if="scope.row.enable" class="fa fa-stop-circle color-warning margin-right-5" @click="statusInfo(scope.row, false)"></i>-->
<!--              <i v-if="!scope.row.enable" class="fa fa-play-circle color-success margin-right-5" @click="statusInfo(scope.row, true)"></i>-->
              <i class="fa fa-edit margin-right-5 color-success" @click="editInfo(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal top="10vh" :visible="dialogVisible" :title="$t('规则设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('规则名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('到达站点')" prop="address">
            <el-input v-model="form.address" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('老师范围')" prop="dorm">
            <el-button size="mini" type="warning" @click="teacherManage">{{$t('添加老师')}}</el-button>
            <span class="color-muted margin-left-10">{{$t('老师人数')}}</span>
            <span class="color-muted">{{selTeacherDataOk.length}}</span>
            <span class="color-muted">{{$t('人')}}</span>
          </el-form-item>
          <el-form-item :label="$t('学生范围')" prop="student">
            <el-button size="mini" type="warning" @click="studentManage">{{$t('添加学生')}}</el-button>
            <span class="color-muted margin-left-10">{{$t('学生人数')}}</span>
            <span class="color-muted">{{selStudentDataOk.length}}</span>
            <span class="color-muted">{{$t('人')}}</span>
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

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawDialog" :visible="drawerTeacher" size="700px" :title="$t('老师设置')" @right-close="cancelDrawDialog">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <el-row>
            <el-col :span="12">
              <span class="tab-class font-bold">
                <i class="fa fa-user"></i>
                {{$t('管理教师')}}
              </span>
            </el-col>
            <el-col :span="12" class="text-right">
              <span class="tab-class font-bold">
                <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
                <el-button size="small" type="primary" :loading="drawerLoading" @click="okDrawDialog($event, 1)">{{$t("保存")}}</el-button>
              </span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div>
          <div class="layout-inline">
            <my-cascader class="layout-item" size="small" ref="SelectorDept" :placeholder="$t('部门选择')" :sel-value="searchDeptCascader" type="4" sub-type="id" width-style="160" @change="handleCascaderDeptChange($event)"></my-cascader>
          </div>
          <div>
            <el-table class="margin-top-10"
                      ref="tableTeacherRef"
                      :data="tableTeacherData"
                      size="mini"
                      :row-key="getTeacherRowKeys"
                      v-loading="tableDormLoading"
                      @selection-change="handleSelectionTeacherChange">
              <el-table-column
                width="55">
                <template slot="header" slot-scope="scope">
                  <el-checkbox v-model="commAllCheck" @change="_handleSelectionAllSelect"></el-checkbox>
                </template>

                <template slot-scope="scope">
                  <el-checkbox v-model="scope.row._checked" @change="_handleSelectionSelect($event, scope.row)"></el-checkbox>
                </template>
              </el-table-column>
              <el-table-column
                prop="floor_num"
                :label="$t('姓名')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      {{scope.row.real_name}}
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.real_name}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('性别')"
                align="center">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <my-sex :sex="scope.row.sex"></my-sex>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <my-sex :sex="scope.row.sex"></my-sex>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('工号')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <my-sex :sex="scope.row.job_num"></my-sex>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <my-sex :sex="scope.row.job_num"></my-sex>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('部门')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      {{scope.row.department_name}}
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.department_name}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('手机号')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <my-sex :sex="scope.row.phone"></my-sex>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <my-sex :sex="scope.row.phone"></my-sex>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <my-pagination :total="totalTeacher" :current-page="pageTeacher" :page-size="numTeacher" @currentPage="currentTeacherPage" @sizeChange="sizeTeacherChange" @jumpChange="jumpTeacherPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawDialog" :visible="drawerStudent" size="800px" :title="$t('学生设置')" @right-close="cancelDrawDialog">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <el-row>
            <el-col :span="12">
              <span class="tab-class font-bold">
                <i class="fa fa-user"></i>
                {{$t('管理学生')}}
              </span>
            </el-col>
            <el-col :span="12" class="text-right">
              <span class="tab-class font-bold">
                <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
                <el-button size="small" type="primary" :loading="drawerLoading" @click="okDrawDialog($event, 2)">{{$t("保存")}}</el-button>
              </span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div>
          <div class="layout-inline">
            <my-cascader class="layout-item" :placeholder="$t('请选择专业/班级')" ref="SelectorCollege" size="small" width-style="160" :clearable="true" :sel-value="searchCollegeData" type="1" sub-type="4" @change="handleCascaderStudentChange($event)"></my-cascader>
            <my-select class="layout-item " size="small" :placeholder="$t('选择批次')" :clearable="true" :sel-value="searchStudentPC" :options="fliterPCs" width-style="100" @change="handleSearchChange($event, 5)"></my-select>
            <el-date-picker
              size="small"
              unlink-panels
              v-model="searchTimeUserData"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              @change="handleChangeTime($event,1)"
              style="width: 220px">
            </el-date-picker>
            <my-input-button ref="userRef" size="small" plain width-class="width: 130px" type="success" :clearable="true" :placeholder="$t('名称')" @click="searchUser"></my-input-button>
          </div>
          <div>
            <el-table class="margin-top-10"
                      ref="tableStudentRef"
                      :data="tableStudnetData"
                      size="mini"
                      v-loading="tableDormLoading"
                      :row-key="getStudentRowKeys"
                      @selection-change="handleSelectionChange">
              <el-table-column
                width="55">
                <template slot="header" slot-scope="scope">
                  <el-checkbox v-model="commAllCheck" @change="_handleSelectionStudentAllSelect"></el-checkbox>
                </template>

                <template slot-scope="scope">
                  <el-checkbox v-model="scope.row._checked" @change="_handleSelectionStudentSelect($event, scope.row)"></el-checkbox>
                </template>
              </el-table-column>
              <el-table-column
                label="录入时间"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label>{{$moment(scope.row.regist_date).format("YYYY-MM-DD HH:mm:ss")}}</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label>{{$moment(scope.row.regist_date).format("YYYY-MM-DD HH:mm:ss")}}</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                prop="floor_num"
                :label="$t('姓名')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      {{scope.row.real_name}}
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.real_name}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                prop="floor_num"
                :label="$t('录取号')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      {{scope.row.enroll_no}}
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.enroll_no}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('性别')"
                align="center">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <my-sex :sex="scope.row.sex"></my-sex>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <my-sex :sex="scope.row.sex"></my-sex>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('院系')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.college_name">{{scope.row.college_name}}</label>
                      <label v-else>--</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.college_name">{{scope.row.college_name}}</label>
                      <label v-else>--</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('专业')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.major_name">{{scope.row.major_name}}</label>
                      <label v-else>--</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.major_name">{{scope.row.major_name}}</label>
                      <label v-else>--</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('宿舍')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.room_no">
                        {{scope.row.build_name}}{{scope.row.floor_num}}{{$t("层")}}{{scope.row.room_no}}
                      </label>
                      <label v-else>--</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.room_no">
                        {{scope.row.build_name}}{{scope.row.floor_num}}{{$t("层")}}{{scope.row.room_no}}
                      </label>
                      <label v-else>--</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <my-pagination :total="totalStudent" :current-page="pageStudent" :page-size="numStudent" @currentPage="currentStudentPage" @sizeChange="sizeStudentChange" @jumpChange="jumpStudentPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
import MyPagination from "~/components/MyPagination";
import mixins from "~/utils/mixins";
import {common} from "~/utils/api/url";
import {dormTypeText, inArray, MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
import LayoutTb from "~/components/Layout/LayoutTb";
import MySelect from "~/components/MySelect";
import MyUserType from "~/components/utils/MyUserType";
import MyDatePicker from "~/components/MyDatePicker";
import MyInputButton from "~/components/search/MyInputButton";
import DialogNormal from "~/components/utils/dialog/DialogNormal";
import linkStationValidater from "~/utils/validater/linkStationValidater";
import MySex from "~/components/MySex";
export default {
  mixins: [mixins,linkStationValidater],
  components: {MySex, DialogNormal, MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton},
  props: {
    pageTitle: '',
    linkId: ''
  },
  data(){
    return {
      commAllCheck: false,
      commAllCheckCount: 0,
      checkboxCount: 0,
      pageTeacher: 1,
      numTeacher: 20,
      totalTeacher: 0,
      pageStudent: 1,
      numStudent: 20,
      totalStudent: 0,
      tableData: [],
      searchDate: [],
      typeList: [],
      searchCommDeptBedData: [],
      searchCommDormData: [],
      searchCollegeData: [],
      searchDeptCascader: [],
      tableTeacherData: [],
      tableStudnetData: [],
      tablePayData: [],
      tablePayObjData: [],
      selTeacherData: [],
      selTeacherDataOk: [],
      selTeacherDataBakOk: [],
      selStudentData: [],
      selStudentDataOk: [],
      selStudentDataBakOk: [],
      searchKey: '',
      commSearchBuild: '',
      commSearchFloor: '',
      searchDormBuild: '',
      searchDormFloor: '',
      departmentId: '',
      searchStudentPC: '',
      fliterPCs: [],
      searchTimeUserData: [],
      searchUserKey: '',
      visible: false,
      visibleConfim: false,
      dialogVisible: false,
      drawerVisible: false,
      drawerDorm: false,
      drawerStudent: false,
      drawerPay: false,
      drawerTeacher: false,
      tableDormLoading: false,
      dialogLoading: false,
      dialogMutiVisible: false,
      drawerLoading: false,
      clearTime: '',
      action: '',
      subTitle: '',
      searchDorm: '',
      serverDataItem: {},
      searchStudnetCollege: '',
      searchStudnetMajor: '',
      searchStudnetGrade: '',
      searchStudnetClass: '',
      detailData: {},
      form: {
        id: '',
        name: '',
        address: '',
        students: [],
        dorm: []
      }
    }
  },
  created() {
    this.init();
    this.initBatchList();
  },
  methods: {
    init(){
      let params = {
        page: this.page,
        num: this.num,
        linkId: this.linkId
      };
      this.$axios.get(common.enroll_link_arrive_page, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },
    initStudent(){
      let params = {
        page: this.pageStudent,
        num: this.numStudent,
        collegeId: this.searchStudnetCollege,
        majorId: this.searchStudnetMajor,
        grade: this.searchStudnetGrade,
        classId: this.searchStudnetClass,
        enrollBatch: this.searchStudentPC,
        beginTime: (this.searchTimeUserData && this.searchTimeUserData.length > 0) ? this.$moment(this.searchTimeUserData[0]).format("YYYY-MM-DD") : '',
        endTime: (this.searchTimeUserData && this.searchTimeUserData.length > 0) ? this.$moment(this.searchTimeUserData[1]).format("YYYY-MM-DD") : '',
        searchKey: this.searchUserKey
      };
      this.checkboxCount = 0;
      this.tableDormLoading = true;
      this.$axios.get(common.enroll_student_page, {params: params}).then(res => {
        if (res.data.data){
          let intersection=[];

          if (this.selStudentData.length == 0){
            intersection = [].concat(this.selStudentDataOk);
            this.selStudentData = [].concat(this.selStudentDataOk);
          }else {
            this.selStudentDataOk.forEach(x=>{
              this.selStudentData.forEach(y=>{
                if(x.user_id == y.user_id){//找到相同的就push进新的数组
                  intersection.push(x);
                }
              });
            });
          }

          for (let i = 0; i < res.data.data.list.length; i++){
            let sel = inArray(res.data.data.list[i], intersection, 'user_id');
            if (sel > -1){
              this.commFlag = true;
              res.data.data.list[i]['_checked'] = true;
              this.checkboxCount++;
            }else {
              res.data.data.list[i]['_checked'] = false;
            }
          }
          if (this.checkboxCount != 0 && this.checkboxCount == this.tableStudnetData.length){
            this.commAllCheck = true;
          }else {
            this.commAllCheck = false;
          }
          this.commFlag = false;

          this.tableStudnetData = res.data.data.list;
          this.totalStudent = res.data.data.totalCount;
          this.numStudent = res.data.data.num;
          this.pageStudent = res.data.data.currentPage;

          // let selArr = [];
          // let arr = [].concat(res.data.data.list);
          // let arrTempUser = [].concat(this.selStudentDataOk);
          //
          // for (let i = 0; i < arr.length; i++){
          //   let sel = inArray(arr[i], arrTempUser, 'user_id');
          //   if (sel > -1){
          //     this.$refs.tableStudentRef.toggleRowSelection(arr[i], true);
          //   }
          // }
          this.tableDormLoading = false;
        }
      });
    },
    initTeacher(){
      let params = {
        page: this.pageTeacher,
        num: this.numTeacher,
        departPath: this.departmentId,
      };
      this.tableDormLoading = true;
      this.$axios.get(common.teacher_list, {params: params}).then(res => {
        if (res.data.data){
          let intersection=[];

          if (this.selTeacherData.length == 0){
            intersection = [].concat(this.selTeacherDataOk);
            this.selTeacherData = [].concat(this.selTeacherDataOk);
          }else {
            this.selTeacherDataOk.forEach(x=>{
              this.selTeacherData.forEach(y=>{
                if(x.user_id == y.user_id){//找到相同的就push进新的数组
                  intersection.push(x);
                }
              });
            });
          }

          for (let i = 0; i < res.data.data.page.list.length; i++){
            let sel = inArray(res.data.data.page.list[i], intersection, 'user_id');
            if (sel > -1){
              this.commFlag = true;
              res.data.data.page.list[i]['_checked'] = true;
              this.checkboxCount++;
            }else {
              res.data.data.page.list[i]['_checked'] = false;
            }
          }
          if (this.checkboxCount != 0 && this.checkboxCount == this.tableTeacherData.length){
            this.commAllCheck = true;
          }else {
            this.commAllCheck = false;
          }
          this.commFlag = false;

          this.tableTeacherData = res.data.data.page.list;
          this.totalTeacher = res.data.data.page.totalCount;
          this.numTeacher = res.data.data.page.num;
          this.pageTeacher = res.data.data.page.currentPage;

          // let selArr = [];
          // let arr = [].concat(res.data.data.page.list);
          // let arrTempUser = [].concat(this.selTeacherDataOk);
          // for (let i = 0; i < arr.length; i++){
          //   let sel = inArray(arr[i], arrTempUser, 'user_id');
          //   if (sel > -1){
          //     this.$refs.tableTeacherRef.toggleRowSelection(arr[i], true);
          //   }
          // }
          this.tableDormLoading = false;
        }
      });
    },
    initBatchList(){
      let params = {};
      this.$axios.get(common.enroll_batch_list, {params: params, loading: false}).then(res => {
        if (res.data.data){
          let arr = [];
          for (let i = 0; i < res.data.data.length; i++){
            arr.push({
              label: res.data.data[i].enroll_batch,
              value: res.data.data[i].enroll_batch,
              text: res.data.data[i].enroll_batch
            });
          }
          this.fliterPCs = arr;
        }
      });
    },
    getStudentRowKeys(row) {
      return row.user_id
    },
    getTeacherRowKeys(row) {
      return row.user_id
    },
    handleSelectionChange(data){
      //this.selStudentData = data;
    },
    handleSelectionTeacherChange(data){
      //this.selTeacherData = data;
    },
    _handleSelectionSelect(event, row){
      if (event){//选中
        this.selTeacherData.push(row);
        row._checked = true;
        this.checkboxCount++;
      }else {//取消选中
        let checked = inArray(row, this.selTeacherData, 'user_id');
        this.selTeacherData.splice(checked,1);
        row._checked = false;
        this.checkboxCount--;
      }
      if (this.checkboxCount != 0 && this.checkboxCount == this.tableTeacherData.length){
        this.commAllCheck = true;
      }else {
        this.commAllCheck = false;
      }
    },
    _handleSelectionAllSelect(selection){
      this.commAllCheck = selection;
      for (let i = 0; i < this.tableTeacherData.length; i++){
        if (selection == true){
          this.tableTeacherData[i]._checked = true;
          let checked = inArray(this.tableTeacherData[i], this.selTeacherData, 'user_id');
          if (checked == -1){
            this.selTeacherData.push(this.tableTeacherData[i]);
          }
          this.checkboxCount++;
        }else {
          this.tableTeacherData[i]._checked = false;
          let checked = inArray(this.tableTeacherData[i], this.selTeacherData, 'user_id');
          if (checked > -1){
            this.selTeacherData.splice(checked, 1);
            i = i - 1;
          }
          this.checkboxCount--;
        }
      }
    },
    _handleSelectionStudentSelect(event, row){
      if (event){//选中
        this.selStudentData.push(row);
        row._checked = true;
        this.checkboxCount++;
      }else {//取消选中
        let checked = inArray(row, this.selStudentData, 'user_id');
        this.selStudentData.splice(checked,1);
        row._checked = false;
        this.checkboxCount--;
      }
      if (this.checkboxCount != 0 && this.checkboxCount == this.tableStudnetData.length){
        this.commAllCheck = true;
      }else {
        this.commAllCheck = false;
      }
    },
    _handleSelectionStudentAllSelect(selection){
      this.commAllCheck = selection;
      for (let i = 0; i < this.tableStudnetData.length; i++){
        if (selection == true){
          this.tableStudnetData[i]._checked = true;
          let checked = inArray(this.tableStudnetData[i], this.selStudentData, 'user_id');
          if (checked == -1){
            this.selStudentData.push(this.tableStudnetData[i]);
          }
          this.checkboxCount++;
        }else {
          this.tableStudnetData[i]._checked = false;
          let checked = inArray(this.tableStudnetData[i], this.selStudentData, 'user_id');
          if (checked > -1){
            this.selStudentData.splice(checked, 1);
            i = i - 1;
          }
          this.checkboxCount--;
        }
      }
    },
    handleSearchChange(event, type){
      if (type == 5){
        this.searchStudentPC = event;
      }
    },
    handleChangeTime(event, type){
      if (type == 1){
        this.searchTimeUserData = event ? event : [];
      }
    },
    searchUser(data){
      this.pageStudent = 1;
      this.searchUserKey = data.input;
      this.initStudent();
    },
    search(data){
      this.page = 1;
      this.searchKey = data.input;
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
    sizeTeacherChange(event){
      this.pageTeacher = 1;
      this.numTeacher = event;
      this.initTeacher();
    },
    currentTeacherPage(event){
      this.pageTeacher = event;
      this.initTeacher();
    },
    jumpTeacherPage(data){
      this.pageTeacher = data;
      this.initTeacher();
    },
    sizeStudentChange(event){
      this.pageStudent = 1;
      this.numStudent = event;
      this.initStudent();
    },
    currentStudentPage(event){
      this.pageStudent = event;
      this.initStudent();
    },
    jumpStudentPage(data){
      this.pageStudent = data;
      this.initStudent();
    },
    returnMain(){
      this.$emit("returnClick");
    },
    addInfo(){
      this.dialogVisible = true;
    },
    editInfo(item){
      let params = {
        id: item.id
      };
      this.$axios.get(common.enroll_link_arrive_info, {params: params}).then(res => {
        if (res.data.data){
          this.detailData = res.data.data;
          this.form = {
            id: res.data.data.arrive.id,
            name: res.data.data.arrive.ruleName,
            address: res.data.data.arrive.arriveStation,
            students: [],
            dorm: []
          };
          let arrayStudent = [];
          let arrayTeacher = [];
          for (let i = 0; i < res.data.data.studentList.length; i++){
            arrayStudent.push({
              user_id: res.data.data.studentList[i].userId
            });
          }
          for (let i = 0; i < res.data.data.teacherList.length; i++){
            arrayTeacher.push({
              user_id: res.data.data.teacherList[i].userId
            });
          }

          this.selStudentData = [].concat(arrayStudent);
          this.selStudentDataOk = [].concat(arrayStudent);
          this.selStudentDataBakOk = [].concat(arrayStudent);

          this.selTeacherData = [].concat(arrayTeacher);
          this.selTeacherDataOk = [].concat(arrayTeacher);
          this.selTeacherDataBakOk = [].concat(arrayTeacher);
        }
      });
      this.dialogVisible = true;
    },
    statusInfo(item, type){
      let params = {
        id: item.id,
        enable: type
      };
      params = this.$qs.stringify(params);
      this.$axios.post(common.enroll_link_arrive_enable, params).then(res => {
        if (res.data.code == 200){
          this.init();
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
      });
    },
    deleteInfo(item){
      this.form.id = item.id;
      this.visibleConfim = true;
    },
    mutiDeleteInfo(){

    },
    addPayObj(item, index){
      let obj = {};
      if (index == -1){
        this.tablePayObjData.push(obj);
      }else{
        this.tablePayObjData.splice(index+1, 0, obj);
      }
    },
    deletePayObj(item, index){
      this.tablePayData.splice(index, 1);
    },
    teacherManage(){
      if (this.$refs.tableTeacherRef){
        this.$refs.tableTeacherRef.clearSelection();
      }
      this.pageTeacher = 1;
      this.initTeacher();
      this.drawerTeacher = true;
    },
    studentManage(){
      if (this.$refs.tableStudentRef){
        this.$refs.tableStudentRef.clearSelection();
      }
      this.pageStudent = 1;
      this.initStudent();
      this.drawerStudent = true;
    },
    handleCancelChange(data) {
      this.visibleConfim = false;
    },
    handleCascaderDeptChange(data){
      this.searchDeptCascader = data;
      this.departmentId = data[data.length-1];
      this.initTeacher();
    },
    handleCascaderBedChange(data){
      this.commSearchBuild = "";
      this.commSearchFloor = "";
      if (data.length == 1){
        this.commSearchBuild = data[0];
      }else if (data.length == 2){
        this.commSearchBuild = data[0];
        this.commSearchFloor = data[1];
      }
      this.pageTeacher = 1;
      this.initDorm();
    },
    handleCascaderDormChange(data){
      this.searchDormBuild = "";
      this.searchDormFloor = "";
      if (data.length == 1){
        this.searchDormBuild = data[0];
      }else if (data.length == 2){
        this.searchDormBuild = data[0];
        this.searchDormFloor = data[1];
      }
      this.pageStudent = 1;
      this.initStudent();
    },
    handleCascaderStudentChange(data){
      this.searchStudnetCollege = "";
      this.searchStudnetMajor = "";
      this.searchStudnetGrade = "";
      this.searchStudnetClass = "";
      if (data.length == 1){
        this.searchStudnetCollege = data[0];
      }else if (data.length == 2){
        this.searchStudnetCollege = data[0];
        this.searchStudnetMajor = data[1];
      }else if (data.length == 3){
        this.searchStudnetCollege = data[0];
        this.searchStudnetMajor = data[1];
        this.searchStudnetGrade = data[2];
      }else if (data.length == 4){
        this.searchStudnetCollege = data[0];
        this.searchStudnetMajor = data[1];
        this.searchStudnetGrade = data[2];
        this.searchStudnetClass = data[3];
      }
      this.pageStudent = 1;
      this.initStudent();
    },
    handleOkChange(data) {
      this.dialogLoading = true;
      let url = "";
      let params = {
        id: this.form.id
      }
      url = common.enroll_link_arrive_del;
      params = this.$qs.stringify(params);
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200){
          this.init();
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.visibleConfim = false;
      });
    },
    closeDialog(event){
      this.form = {
        id: '',
      };
      if (this.$refs['form']){
        this.$refs['form'].resetFields();
      }
      if (this.$refs.designer){
        this.$refs.designer.setRule([]);
        this.$refs.designer.setOption(this.formOption);
      }
      this.serverDataItem = {};
      this.serverDataIndex = '';
      this.selStudentDataOk = [];
      this.selStudentDataBakOk = [];
      this.selStudentData = [];
      this.selTeacherDataOk = [];
      this.selTeacherDataBakOk = [];
      this.selTeacherData = [];
      this.detailData = {};
      this.btnLoading = false;
      this.formLoading = false;
      this.dialogVisible = false;
    },
    closeDrawDialog(event){
      this.pageTeacher = 1;
      this.numTeacher = 20;
      this.totalTeacher = 0;
      this.pageStudent = 1;
      this.numStudent = 20;
      this.totalStudent = 0;
      this.searchStudnetMajor = "";
      this.searchStudnetCollege = "";
      this.searchStudnetClass = "";
      this.searchStudnetGrade = "";
      this.commSearchBuild = "";
      this.commSearchFloor = "";
      this.searchDormBuild = '';
      this.searchDormFloor = '';
      this.searchCollegeData = [];
      this.searchCommDeptBedData = [];
      this.searchCommDormData = [];
      this.tablePayObjData = [];
      this.searchStudentPC = "";
      this.searchTimeUserData = [];

      this.selStudentDataOk = this.selStudentDataBakOk;
      this.selStudentData = [];

      this.selTeacherDataOk = this.selTeacherDataBakOk;
      this.selTeacherData = [];
      if (this.$refs.tableStudentRef){
        this.$refs.tableStudentRef.clearSelection();
      }
      if (this.$refs.tableTeacherRef){
        this.$refs.tableTeacherRef.clearSelection();
      }
      if (this.$refs.userRef){
        this.$refs.userRef.inputValue = "";
      }
      this.resetCasadeSelector('SelectorCollege');
      this.resetCasadeSelector('SelectorDept');
      this.drawerTeacher = false;
      this.drawerStudent = false;
      this.drawerPay = false;
    },
    cancelDrawDialog(event){
      this.closeDrawDialog();
      this.drawerTeacher = false;
      this.drawerStudent = false;
    },
    okDrawDialog(event, type){
      let url = "";
      if (type == 1){
        if (this.selTeacherData.length == 0){
          MessageWarning(this.$t("请选择教师"));
          return;
        }
        this.selTeacherDataOk = JSON.parse(JSON.stringify(this.selTeacherData));
        this.selTeacherDataBakOk = JSON.parse(JSON.stringify(this.selTeacherData));
      }else if (type == 2){
        if (this.selStudentData.length == 0){
          MessageWarning(this.$t("请选择学生"));
          return;
        }
        this.selStudentDataOk = JSON.parse(JSON.stringify(this.selStudentData));
        this.selStudentDataBakOk = JSON.parse(JSON.stringify(this.selStudentData));
      }
      this.drawerStudent = false;
      this.drawerTeacher = false;
    },
    cancelDialog(){
      if (this.$refs['form']){
        this.$refs['form'].resetFields();
      }
      this.dialogVisible = false;
    },
    okDialog(){
      let url = '';
      this.$refs['form'].validate((valid) => {
        if (valid) {
          let studentIds = [];
          let teacherIds = [];
          if (this.selStudentDataOk.length == 0){
            MessageWarning(this.$t("请选择学生！"));
            return;
          }
          if (this.selTeacherDataOk.length == 0){
            MessageWarning(this.$t("请选择教师！"));
            return;
          }
          for (let i = 0;i < this.selStudentDataOk.length; i++){
            studentIds.push(this.selStudentDataOk[i].user_id);
          }
          for (let i = 0;i < this.selTeacherDataOk.length; i++){
            teacherIds.push(this.selTeacherDataOk[i].user_id);
          }
          let params = {
            linkId: this.linkId,
            ruleName: this.form.name,
            arriveStation: this.form.address,
            teacherUserIds: teacherIds.join(),
            studentUserIds: studentIds.join(),
          };
          if (this.form.id != ''){
            params['id'] = this.form.id;
          }
          url = common.enroll_link_arrive_save;
          params = this.$qs.stringify(params);
          this.dialogLoading = true;
          this.$axios.post(url, params).then(res => {
            if (res.data.code == 200){
              this.dialogVisible = false;
              this.init();
              MessageSuccess(res.data.desc);
            }else {
              MessageError(res.data.desc);
            }
            this.dialogLoading = false;
          });
        }
      });
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
.header-block{
  height: 40px;
  line-height: 40px;
}
</style>
