<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">流程管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="6">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("创建流程")}}</el-button>
          </el-col>
          <el-col :span="18" class="text-right">
            <div class="layout-inline">
              <my-select class="layout-item width-150" size="small" :placeholder="$t('状态')" :options="filterAppManageStatus" :clearable="true" @change="handleSearchChange($event, 1)"></my-select>
              <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('名称/编号')" @click="search"></my-input-button>
            </div>
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
            :label="$t('创建时间')">
            <template slot-scope="scope">
              <span>{{$moment(scope.row.createTime).format("YYYY-MM-DD HH:mm")}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('流程名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.processName}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.processName}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('环节数量')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.linkSize}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.linkSize}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('学生数量')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.studentSize}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.studentSize}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('状态')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <label v-if="scope.row.enable" class="color-success">{{$t("已发布")}}</label>
                  <label v-if="!scope.row.enable" class="color-warning">{{$t("待发布")}}</label>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <div class="text-center">
                    <label v-if="scope.row.enable" class="color-success">{{$t("已发布")}}</label>
                    <label v-if="!scope.row.enable" class="color-warning">{{$t("待发布")}}</label>
                  </div>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="140">
            <template slot-scope="scope">
              <i v-if="scope.row.enable" class="fa fa-stop-circle color-warning margin-right-5" @click="statusInfo(scope.row, false)"></i>
              <i v-if="!scope.row.enable" class="fa fa-play-circle color-success margin-right-5" @click="statusInfo(scope.row, true)"></i>

              <i class="fa fa-edit color-grand margin-right-5" @click="editInfo(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="流程设计"
            width="140">
            <template slot-scope="scope">
              <i class="fa fa-cog color-success" @click="settingInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal top="10vh" :visible="dialogSetting" :title="$t('流程设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('流程名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('学生范围')">
            <el-button size="mini" type="warning" @click="studentManage">{{$t('添加学生')}}</el-button>
            <span class="color-muted margin-left-10">{{$t('学生人数')}}</span>
            <span class="color-muted">{{selDataOk.length}}</span>
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

    <drawer-layout-right tabindex="1" :append-to-body="true" @close="closeDrawDialog" @right-close="cancelDrawDialog" :visible="drawerVisible" size="850px">
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
                <el-button size="small" type="primary" :loading="drawerLoading" @click="okDrawDialog">{{$t("保存")}}</el-button>
              </span>
              </el-col>
          </el-row>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div class="text-left layout-inline">
          <el-col :span="18">
<!--            <my-select class="layout-item width-100" size="small" :placeholder="$t('选择年度')" :sel-value="searchYear" :options="yearOptions" :clearable="true" @change="handleSearchChange($event, 2)"></my-select>-->
            <my-cascader class="layout-item" ref="SelectorDept" size="small" :clearable="true" width-style="140" :sel-value="searchCommDeptData" type="1" sub-type="4" @change="handleCascaderChange($event)"></my-cascader>
            <my-select class="layout-item " size="small" :placeholder="$t('选择性别')" :clearable="true" :sel-value="searchSex" :options="g_sex" width-style="100" @change="handleSearchChange($event, 3)"></my-select>
<!--            <my-select class="layout-item " size="small" :placeholder="$t('选择时间')" :clearable="true" :sel-value="searchStudentTime" :options="fliterTimes" width-style="100" @change="handleSearchChange($event, 4)"></my-select>-->
            <my-select class="layout-item " size="small" :placeholder="$t('选择批次')" :clearable="true" :sel-value="searchStudentPC" :options="fliterPCs" width-style="100" @change="handleSearchChange($event, 5)"></my-select>
            <el-date-picker
              size="small"
              unlink-panels
              v-model="searchStudentTime"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              @change="handleChangeTime"
              style="width: 215px">
            </el-date-picker>
          </el-col>
          <el-col :span="6" class="text-right">
            <my-input-button ref="teacher width-100" size="small" plain width-class="width: 120px" type="success" :clearable="true" :placeholder="$t('名称')" @click="searchStudent"></my-input-button>
          </el-col>
        </div>
        <div class="moon-clearfix"></div>
        <div class="padding-tb-10">
          <el-table
            ref="tableStudentRef"
            :row-key="getRowKeys"
            :data="tableStudentData"
            header-cell-class-name="custom-table-cell-bg"
            :max-height="tableHeight16.height"
            style="width: 100%;"
            :loading="tableStudentLoading"
            @selection-change="handleSelectionChange">
            <el-table-column
              :reserve-selection="true"
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column align="center" :label="$t('录取日期')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{$moment(scope.row.regist_date).format("YYYY-MM-DD")}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{$moment(scope.row.regist_date).format("YYYY-MM-DD")}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('录取号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.enroll_no}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.enroll_no}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('姓名')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.real_name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.real_name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('性别')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center"><my-sex :sex="scope.row.sex" tag="text"></my-sex></div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <my-sex :sex="scope.row.sex" tag="text"></my-sex>
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('专业')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.major_name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.major_name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('班级')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.class_name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.class_name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('招生老师')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label>{{scope.row.enroll_teacher ? scope.row.enroll_teacher : '--'}}</label>
                  </div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label>{{scope.row.enroll_teacher ? scope.row.enroll_teacher : '--'}}</label>
                  </span>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div slot="footer">
        <el-row>
          <el-col :span="24">
            <div class="text-right padding-lr-10">
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
          </el-col>
<!--          <el-col :span="4">-->
<!--            <div class="text-right padding-lr-10">-->
<!--              <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>-->
<!--              <el-button size="small" type="primary" :loading="drawerLoading" @click="okDrawDialog">{{$t("保存")}}</el-button>-->
<!--            </div>-->
<!--          </el-col>-->
        </el-row>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="1" :append-to-body="true" @close="closeDialog"  @changeDrawer="closeDialog" :visible="dialogFlowSetting" size="80%">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <span class="tab-class font-bold">
            <i class="fa fa-user"></i>
            {{$t('流程设计')}}
          </span>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div>
          <my-new-student-flow ref="flow" :formId="serverDataItem" :flow-data="flowListData" :form="flowFormData"></my-new-student-flow>
        </div>
      </div>
      <div slot="footer">
        <el-row>
          <el-col :span="24">
            <div class="text-right padding-lr-10">
              <el-button size="small" @click="cancelFlowDrawDialog">{{$t("取消")}}</el-button>
              <el-button size="small" type="primary" :loading="btnLoading" @click="okFlowDrawDialog">{{$t("保存")}}</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {inArray, MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import flowManageValidater from "~/utils/validater/flowManageValidater";
  import MyNormalDialog from "~/components/utils/dialog/MyNormalDialog";
  import MySelect from "~/components/MySelect";
  import MyNewStudentFlow from "~/components/flow/MyNewStudentFlow";
  import MySex from "~/components/MySex";
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";
  export default {
    components: {DrawerLayoutRight, MySex, MyNewStudentFlow, MySelect, MyNormalDialog},
    mixins: [mixins,flowManageValidater],
    data(){
      return {
        pageStudent: 1,
        totalStudent: 0,
        numStudent: 20,
        subTitle: '',
        visibleConfim: false,
        tableData: [],
        tableStudentData: [],
        dialogSetting: false,
        drawerVisible: false,
        dialogLoading: false,
        drawerLoading: false,
        dialogFlowSetting: false,
        tableStudentLoading: false,
        btnLoading: false,
        listId: '',
        yearOptions: [],
        searchKey: '',
        searchEnable: '',
        searchStatus: '',
        statusOptions: [],
        typeOptions: [],
        studentSelArray: [],
        searchYear: '',
        searchSex: '',
        searchStudnetKey: '',
        searchStudentCollege: '',
        searchStudentMajor: '',
        searchStudentGrade: '',
        searchStudentClass: '',
        searchCommDeptData: [],
        versionStatus: '',
        serverDataItem: {},
        serverDataIndex: '',
        flowListData: [],
        formFieldList: [],
        flowFormData: {},
        fliterTimes: [],
        fliterPCs: [],
        searchStudnetCollege: '',
        searchStudnetMajor: '',
        searchStudnetGrade: '',
        searchStudnetClass: '',
        searchStudentKey: '',
        searchStudentTime: [],
        searchStudentPC: '',
        selData: [],
        selDataOk: [],
        selDataBakOk: [],
        form: {
          id: '',
          year: '',
          name: '',
          type: '',
          time: ''
        }
      }
    },
    created() {
      this.init();
      this.initBatchList();
      this.getYearInfo();
    },
    methods: {
      getYearInfo(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.enroll_page, {params: params}).then(res => {
          if (res.data.data){
            let years = [];
            for (let i = 0; i < res.data.data.list.length; i++){
              years.push({
                label: res.data.data.list[i].enrollName,
                text: res.data.data.list[i].enrollName,
                value: res.data.data.list[i].id
              });
            }
            this.yearOptions = years;
          }
        });
      },
      getRowKeys(row) {
        return row.user_id
      },
      handleSelectionChange(data){
        this.selData = data;
      },
      init(){
        let params = {
          page: this.page,
          num: this.num,
          enable: this.searchStatus,
          searchKey: this.searchKey
        };
        this.$axios.get(common.enroll_process_page, {params: params}).then(res => {
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
          page: this.page,
          num: this.num,
          sex: this.searchSex,
          collegeId: this.searchStudnetCollege,
          majorId: this.searchStudnetMajor,
          grade: this.searchStudnetGrade,
          classId: this.searchStudnetClass,
          searchKey: this.searchStudnetKey,
          enrollBatch: this.searchStudentPC
        };
        if (this.searchStudentTime && this.searchStudentTime.length > 0){
          params['beginTime'] = this.$moment(this.searchStudentTime[0]).format("YYYY-MM-DD");
          params['beginTime'] = this.$moment(this.searchStudentTime[1]).format("YYYY-MM-DD");
        }
        this.tableStudentLoading = true;
        this.$axios.get(common.enroll_student_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableStudentData = res.data.data.list;
            this.totalStudent = res.data.data.totalCount;
            this.numStudent = res.data.data.num;
            this.pageStudent = res.data.data.currentPage;

            let selArr = [];
            let arr = [].concat(res.data.data.list);
            let arrTempUser = [].concat(this.selDataOk);

            for (let i = 0; i < arr.length; i++){
              let sel = inArray(arr[i], arrTempUser, 'user_id');
              if (sel > -1){
                this.$refs.tableStudentRef.toggleRowSelection(arr[i], true);
              }
            }
            this.tableStudentLoading = false;
          }
        });
      },
      initBatchList(){
        let params = {};
        this.tableStudentLoading = true;
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
      sizeStudentChange(event){
        this.pageStudent = 1;
        this.numStudent = event;
        this.initStudent();
      },
      currentStudentPage(event){
        this.pageStudent = event;
        this.initStudent();
      },
      closeDialog(event){
        this.form = {
          id: '',
          name: '',
          enable: true
        };
        this.subTitle = "";
        this.studentSelArray = [];
        this.searchSex = '';
        this.searchClass = '';
        this.searchYear = '';
        this.searchStudnetKey = '';
        this.searchStudnetCollege = '';
        this.searchStudnetMajor = '';
        this.searchStudnetGrade = '';
        this.searchStudnetClass = '';
        this.searchStudentKey = '';
        this.listId = '';
        this.flowListData = [];
        this.serverDataIndex = '';
        this.flowFormData = {
          auditType: '',
          name: '',
          allowRepeat: false,
          allowBack: false,
          reportSuccess: false,
          face: false,
          qrcode: false,
          custom: false,
          report: '',
          datetimerange: [],
          items: [],
          hType: '',
          hName: '',
          subType: ''
        };
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        if (this.$refs.tableStudentRef){
          this.$refs.tableStudentRef.clearSelection();
        }
        if (this.$refs.flow){
          this.$refs.flow.flowDetailData = '';
          this.$refs.flow.approverUsers = [];
        }

        this.selDataOk = [];
        this.selDataBakOk = [];
        this.selData = [];
        this.flowListData = [];
        this.drawerVisible = false;
        this.dialogFlowSetting = false;
        this.resetCasadeSelector('selectorDept');
      },
      closeDrawDialog(event){
        if (this.$refs.tableStudentRef){
          this.$refs.tableStudentRef.clearSelection();
        }
        this.selDataOk = this.selDataBakOk;
        this.selData = [];
        this.drawerVisible = false;
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.form.id
        }
        url = common.enroll_process_del;
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
      studentManage(){
        if (this.$refs.tableStudentRef){
          this.$refs.tableStudentRef.clearSelection();
        }
        this.initStudent();
        this.drawerVisible = true;
      },
      addInfo(){
        this.dialogSetting = true;
      },
      editInfo(item){
        this.form = {
          id: item.id,
          name: item.processName,
          enable: item.enable
        };
        let params = {
          id: item.id
        };
        this.$axios.get(common.enroll_process_user_ids, {params: params, loading: false}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                user_id: res.data.data[i]
              });
            }
            this.selData = array;
            this.selDataOk = array;
            this.selDataBakOk = array;
          }
        });

        this.dialogSetting = true;
      },
      settingInfo(item){
        this.listId = item.id;
        //this.serverDataIndex = index;
        let flowFormData = [];
        let params = {
          processId: item.id,
        };
        this.$axios.get(common.enroll_process_link_list, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.length; i++){
              let users = [];
              let hname = [];
              let formObj = {
                id: res.data.data[i].id,
                auditType: '',
                name: res.data.data[i].linkName,
                allowRepeat: res.data.data[i].checkRepeat,
                allowBack: res.data.data[i].checkCancel,
                datetimerange: [this.$moment(res.data.data[i].beginTime).format("YYYY-MM-DD HH:mm"),this.$moment(res.data.data[i].endTime).format("YYYY-MM-DD HH:mm")],
                items: res.data.data[i].dependLinkId ? JSON.parse(res.data.data[i].dependLinkId) : [],
                hType: '',
                type: res.data.data[i].linkType,
                subType: res.data.data[i].linkSubType,
              };
              if (res.data.data[i].linkSubType == 1){
                let otherObj = JSON.parse(res.data.data[i].otherSetting);
                formObj['face'] = otherObj.face;
                formObj['qrcode'] = otherObj.qrcode;
                formObj['custom'] = otherObj.custom;
                formObj['report'] = true;
              }else {
                let otherObj = JSON.parse(res.data.data[i].otherSetting);
                formObj['reportSuccess'] = otherObj.linkReport;
                formObj['report'] = false;
              }

              for (let k = 0; k < res.data.data[i].adminList.length; k++){
                users.push(res.data.data[i].adminList[k]);
                hname.push(res.data.data[i].adminList[k].real_name);
              }
              formObj['users'] = users;
              formObj['hName'] = hname;

              flowFormData.push(formObj);
            }

            this.flowListData = flowFormData;
            this.serverDataItem = item;
          }
        });


        this.dialogFlowSetting = true;
      },
      deleteInfo(item){
        this.form.id = item.id;
        this.visibleConfim = true;
      },
      statusInfo(item, status){
        let params = {
          id: item.id,
          enable: status
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.enroll_process_publish, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      handleChangeTime(data){
        this.searchStudentTime = data;
      },
      handleSearchChange(event, type){
        if (type == 1){
          this.searchStatus = event;
        }else if (type == 2){
          this.searchYear = event;
        }else if (type == 3){
          this.searchSex = event;
        }else if (type == 4){
          this.searchStudentTime = event;
        }else if (type == 5){
          this.searchStudentPC = event;
        }
      },
      handleCascaderChange(data){
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
        //this.pageStudent = 1;
        //this.initStudent();
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init(data);
      },
      searchStudent(data){
        this.searchStudnetKey = data.input;
        this.pageStudent = 1;
        this.initStudent();
      },
      cancelDrawDialog(){
        this.selData = [];
        this.selDataOk = [];
        this.drawerVisible = false;
      },
      okDrawDialog(event){
        let url = "";
        let studnetArray = [];
        if (this.selData.length == 0){
          MessageWarning(this.$t("请选择学生"));
          return;
        }
        this.selDataOk = JSON.parse(JSON.stringify(this.selData));
        this.selDataBakOk = JSON.parse(JSON.stringify(this.selData));
        this.drawerVisible = false;
      },
      cancelFlowDrawDialog(){
        this.dialogFlowSetting = false;
      },
      okFlowDrawDialog(event){
        let flowData = this.$refs.flow.flowData;
        let flowForm = this.$refs.flow.form;
        let hid = [];
        let hname = [];
        let flowDataArray = [];
        let flowDataOjb = {};
        let errorNum = 0;
        if (flowData.length == 0){
          MessageWarning(this.$t("请设置环节数据！"));
          return;
        }
        for (let i = 0; i < flowData.length; i++){
          hid = [];
          hname = [];
          let flowDataUsers = flowData[i].users;
          if (flowData[i].subType != 5 && flowDataUsers.length == 0){
            errorNum++;
          }
          for (let j = 0; j < flowDataUsers.length; j++){
            hid.push(flowDataUsers[j].user_id);
            hname.push(flowDataUsers[j].real_name);
          }

          let flowDataDatetimerange = flowData[i].datetimerange;
          if (flowData[i].subType != 5 && flowDataDatetimerange.length == 0){
            errorNum++;
          }

          if (errorNum > 0){
            MessageWarning(this.$t("请检查管理员或者时间是否设置！"));
            return;
          }
          let obj = {
            adminUserId: hid,
            //hname: hname,
            //andor: flowData[i].andor,
            beginTime: flowData[i].datetimerange[0],
            endTime: flowData[i].datetimerange[1],
            checkCancel: flowData[i].allowBack,
            checkRepeat: flowData[i].allowRepeat,
            dependLinkId: flowData[i].items,
            linkName: flowData[i].name,
            linkType: flowData[i].type,
            linkSubType: flowData[i].subType
          }
          if (flowData[i].type == 1){
            obj['otherSetting'] = {
              linkReport: flowData[i].reportSuccess
            }
          }else {
            obj['otherSetting'] = {
              face: flowData[i].face,
              qrcode: flowData[i].qrcode,
              custom: flowData[i].custom,
            }
          }

          if (flowData[i].id){
            obj['id'] = flowData[i].id;
          }

          flowDataArray.push(obj);
        }
        flowDataOjb = {
          list: flowDataArray,
          processId: this.listId
        };
        if (flowForm.id != ''){
          flowDataOjb['id'] = flowForm.id;
        }
        //flowDataOjb = this.$qs.stringify(flowDataOjb);
        this.btnLoading = true;
        this.$axios.post(common.enroll_process_link_save, JSON.stringify(flowDataOjb), {dataType: 'stringfy', loading: false}).then(res => {
          if (res.data.code == 200){
            this.dialogFlowSetting = false;
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.btnLoading = false;
        });
      },
      cancelDialog(){
        this.dialogSetting = false;
      },
      okDialog(){
        let url = common.enroll_process_add;
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let userIds = [];
            for (let i = 0;i < this.selDataOk.length; i++){
              userIds.push(this.selDataOk[i].user_id);
            }
            let params = {
              processName: this.form.name,
              userIds: userIds.join()
            };
            if (this.form.id != ''){
              params['id'] = this.form.id;
              url = common.enroll_process_edit;
            }
            params = this.$qs.stringify(params);
            this.$axios.post(url, params, {loading: false}).then(res => {
              if (res.data.code == 200){
                this.dialogSetting = false;
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
