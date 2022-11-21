<template>
  <div class="container">
    <div class="container">
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">奖惩管理</span>
          </div>
          <my-el-tree type="1" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div class="layout-top-tab margin-top-5">
            <el-row class="layout-inline">
              <el-col :span="8">
                <el-button size="small" type="primary" icon="el-icon-download" @click="exportInfo($event)">{{$t("导出")}}</el-button>
              </el-col>
              <el-col :span="16" class="text-right">
<!--                <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>-->
                <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('姓名/学号')" @click="search"></my-input-button>
              </el-col>
            </el-row>
          </div>
          <div class="margin-top-10">
            <el-table
              :data="tableData"
              header-cell-class-name="custom-table-cell-bg"
              size="medium"
              :max-height="tableHeight2.height"
              style="width: 100%"
              @filter-change="fliterTable">
              <el-table-column
                align="center"
                :label="$t('日期')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{$moment(scope.row.apply_time).format("YYYY-MM-DD")}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{$moment(scope.row.apply_time).format("YYYY-MM-DD")}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('姓名')">

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
                :label="$t('学号')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.student_id}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.student_id}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('班级')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.class_name}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.class_name}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :filter-multiple="false"
                column-key="type"
                :filters="filterRuTypes">
                <template slot="header">
                  <span>{{$t('类型')}}</span>
                  <span v-if="filterTypesText != ''" class="font-size-12 color-disabeld">{{filterTypesText}}</span>
                </template>
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.punish == true && scope.row.reward == false" class="color-danger">{{$t("处分")}}</label>
                      <label v-else-if="scope.row.punish == false && scope.row.reward == true" class="color-success">{{$t("奖励")}}</label>
                      <label v-else-if="scope.row.punish == true && scope.row.reward == true" class="color-warning">{{$t("奖励/处分")}}</label>
                      <label v-else>--</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.punish == true && scope.row.reward == false" class="color-danger">{{$t("处分")}}</label>
                      <label v-else-if="scope.row.punish == false && scope.row.reward == true" class="color-success">{{$t("奖励")}}</label>
                      <label v-else-if="scope.row.punish == true && scope.row.reward == true" class="color-warning">{{$t("奖励/处分")}}</label>
                      <label v-else>--</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                fixed="right"
                :label="$t('操作')"
                width="60">
                <template slot-scope="scope">
                  <i class="fa fa-list-alt margin-right-5 color-grand" @click="handleDetail(scope.row)"></i>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </layout-lr>
    </div>

    <drawer-layout-right @changeDrawer="closeDrawerDetailDialog" :hide-footer="false" :visible="drawerDetailVisible" size="800px" :title="$t('学生信息')" @right-close="cancelDrawDetailDialog">
      <div slot="content">
        <div>
          <el-row>
            <el-col :span="12">
              <div style="position: relative;top:5px;">
                <span class="font-bold">{{$t("当前状态")}}</span>
                :
                <span class="font-bold">
                  <label v-if="punish == true && reward == false" class="color-danger">{{$t("处分")}}</label>
                  <label v-else-if="punish == false && reward == true" class="color-success">{{$t("奖励")}}</label>
                  <label v-else-if="punish == true && reward == true" class="color-warning">{{$t("奖励/处分")}}</label>
                  <label v-else>--</label>
                </span>
              </div>
            </el-col>
            <el-col :span="12" class="text-right">
              <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
              <el-button type="success" size="small" @click="searchDetail">{{$t("搜索")}}</el-button>
<!--              <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('姓名/学号')" @click="searchDetail"></my-input-button>-->
            </el-col>
          </el-row>
        </div>

        <div class="margin-top-20">
          <el-table
            :data="tableDetailData"
            :loading="tableDetailLoading"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :max-height="drawHeight5.height"
            style="width: 100%"
            @filter-change="fliterTable">
            <el-table-column
              align="center"
              :label="$t('日期')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{$moment(scope.row.apply_time).format("YYYY-MM-DD")}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{$moment(scope.row.apply_time).format("YYYY-MM-DD")}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('编号')">

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
              :label="$t('姓名')">

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
              :label="$t('学号')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.student_id}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.student_id}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('类型')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.str1}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.str1}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('状态')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center"><my-audit-status :status="scope.row.status" :handler="scope.row.handler_name"></my-audit-status></div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <my-audit-status :status="scope.row.status" :handler="scope.row.handler_name"></my-audit-status>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              fixed="right"
              :label="$t('操作')"
              width="60">
              <template slot-scope="scope">
                <i class="fa fa-list-alt margin-right-5 color-grand" @click="handleDetailInfo(scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div slot="footer" class="text-right">
        <my-pagination :total="totalDetail" :current-page="pageDetail" :page-size="numDetail" @currentPage="currentDetailPage" @sizeChange="sizeDetailChange" @jumpChange="jumpDetailPage" class="layout-pagination"></my-pagination>
      </div>
    </drawer-layout-right>

    <!--审批详细-->
    <drawer-layout-right @changeDrawer="closeDrawerDialog" :hide-footer="false" :visible="drawerVisible" size="550px" :title="$t('申请单')" @right-close="cancelDrawDialog">
      <div slot="content">
        <my-audit-detail type="PunishmentApply" :sel-value="dataAudit"></my-audit-detail>
      </div>
      <div slot="footer">
        <audit-button ref="auditButton" :sel-value="dataAudit" @ok="handleOk" @no="handleNo" @cancel="handleCancel" @remove="removeAudit"></audit-button>
      </div>
    </drawer-layout-right>

    <dialog-normal :visible="dialogRemove" :title="$t('解除申请')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="formRemove" :rules="rulesRemove" ref="formRemove" label-width="140px">
          <el-form-item :label="$t('附件')">
            <div v-if="images.length > 0" v-for="(item, index) in images" :key="index" class="pull-left" style="position: relative;margin-right:10px;top: 10px">
              <i class="fa fa-close" style="position: absolute; right: -5px; top: -5px;font-size: 12px" @click="deleteImg(index)"></i>
              <i v-if="item.indexOf('.pdf') > -1" class="fa fa-file-pdf-o" style="height: 25px;width: 25px;font-size: 25px;position: relative;top: -2px;"></i>
              <i v-else-if="item.indexOf('.doc') > -1 || item.indexOf('.docx') > -1" class="fa fa-wordpress" style="height: 25px;width: 25px;font-size: 25px;position: relative;top: -2px;"></i>
              <img v-else :src="item" class="rp-img"/>
            </div>
            <upload-square :action="uploadFileUrl" max-size="20" :data="{path: 'PunishmentCancelApply'}" accept=".png,.jpg,.jpeg,.pdf,.doc,.docx" @success="uploadFileSuccess">
              <div class="upload-block-class">
                <el-button type="warning" size="small"><span>{{$t("上传文件")}}</span></el-button>
              </div>
            </upload-square>
            <div><span class="color-danger font-size-12">{{errorStudent}}</span></div>
          </el-form-item>
          <el-form-item :label="$t('说明')" prop="des">
            <el-input v-model="formRemove.des" type="textarea" class="width-260"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelRemoveDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okRemoveDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>
  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import LayoutLr from "../../../components/Layout/LayoutLr";
  import MySelect from "../../../components/MySelect";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import MyAuditDetail from "../../../components/utils/auditDetail/MyAuditDetail";
  import MyElTree from "../../../components/tree/MyElTree";
  import MyPagination from "../../../components/MyPagination";
  import MyAuditStatus from "../../../components/utils/MyAuditStatus";
  import CircleChart from "../../../components/charts/CircleChart";
  import MyRadio from "../../../components/MyRadio";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MyInputButton from "../../../components/search/MyInputButton";
  import UploadSquare from "../../../components/utils/upload/UploadSquare";
  import AuditButton from "../../../components/utils/auditDetail/AuditButton";
  import {common} from "../../../utils/api/url";
  import {MessageError, MessageSuccess, MessageWarning} from "../../../utils/utils";
  import rpApplyValidater from "../../../utils/validater/rpApplyValidater";
  import StudentTreeAndList from "../../../components/utils/treeAndList/StudentTreeAndList";
  export default {
    mixins: [mixins, rpApplyValidater],
    components: {LayoutLr,MyElTree,MySelect,DrawerLayoutRight,MyAuditDetail,MyPagination,MyAuditStatus,CircleChart,MyRadio,DialogNormal,MyInputButton,UploadSquare,AuditButton,StudentTreeAndList},
    data(){
      return {
        toggleTopShow: false,
        pageStudnet: 1,
        numStudent: 20,
        totalStudent: 0,
        dataAudit: {},
        drawerDetailVisible: false,
        drawerVisible: false,
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        dialogRemove: false,
        studentLoading: false,
        tableDetailLoading: false,
        detailStatusInfo: '',
        pageDetail: 1,
        numDetail: 20,
        totalDetail: 0,
        subTitle: '',
        tableData: [],
        tableDetailData: [],
        studentData: [],
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        applyTimeBegin: '',
        applyTimeEnd: '',
        type: '',
        level: '',
        status: '',
        searchKey: '',
        searchDetailKey: '',
        searchDate: [],
        //filterTypes: [{ text: this.$t("处分"), value: '处分' }, { text: '奖励', value: '奖励' }],
        filterLevels: [],
        filterAddLevels: [],
        //filterStatus: [{ text: this.$t("待审批"), value: '0' }, { text: '已通过', value: '3' }, { text: '已驳回', value: '4' }],
        personTotal: 0,
        reTotal: 0,
        puTotal: 0,
        uploadFileAction: common.upload_file,
        typeData: [],
        typeDataKey: [],
        levelData: [],
        levelDataKey: [],
        searchStudentKey: '',
        errorStudent: '',
        auditObjectItem: {},
        filterLevelsText: '',
        filterTypesText: '',
        filterStatusText: '',
        userId: '',
        images: [],
        uploadFileUrl: common.upload_file,
        punish: '',
        reward: '',
        form: {
          id: '',
          type: '',
          level: '',
          file: '',
          files: [],
          des: '',
          userId:[],
          time: ''
        },
        formRemove: {
          file: '',
          des: ''
        }
      }
    },
    created() {
      this.init();
      this.initLevels();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          stype: this.type,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          searchKey: this.searchKey
        };
        this.$axios.get(common.audit_re_manage_level_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;

            this.initStatic();
          }
        });
      },
      initStatic(){
        let params = {
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.audit_re_static, params).then(res => {
          if (res.data.data){
            this.personTotal = res.data.data.studentCount;
            this.reTotal = res.data.data['奖励'];
            this.puTotal = res.data.data['处分'];

            let typeKey = [];
            let typeList = [];
            for (let i = 0; i < res.data.data.typeCountList.length; i++){
              typeKey.push(res.data.data.typeCountList[i].ptype);
              typeList.push({
                name: res.data.data.typeCountList[i].ptype,
                value: res.data.data.typeCountList[i].count,
                rate: res.data.data.typeCountList[i].rate,
              });
            }

            let levelKey = [];
            let levelList = [];
            for (let i = 0; i < res.data.data.levelCountList.length; i++){
              levelKey.push(res.data.data.levelCountList[i].plevel);
              levelList.push({
                name: res.data.data.levelCountList[i].plevel,
                value: res.data.data.levelCountList[i].count,
                rate: res.data.data.levelCountList[i].rate,
              });
            }

            this.typeData = typeList;
            this.typeDataKey = typeKey;
            this.levelData = levelList;
            this.levelDataKey = levelKey;
          }
        });
      },
      initLevels(type){
        let params = {
          page: this.page,
          num: 99999,
          levelType: type
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.audit_re_level, params).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['text'] = res.data.data.list[i].level_name;
              res.data.data.list[i]['value'] = res.data.data.list[i].level_name;
            }
            if (type){
              this.filterAddLevels = res.data.data.list;
            }
            if (!type){
              this.filterLevels = res.data.data.list;
            }
          }
        });
      },
      initStudent(){
        let params = {
          page: this.pageStudent,
          num: this.numStudent,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          clasz: this.searchClass,
          deleted: 0
        };
        params['realName'] = this.searchStudentKey['input'];
        params = this.$qs.stringify(params);
        this.studentLoading = true;
        this.$axios.post(common.student_list, params).then(res => {
          if (res.data.data){
            this.studentData = res.data.data.list;
            this.totalStudent = res.data.data.totalCount;
            this.numStudnet = res.data.data.num;
            this.pageStudnet = res.data.data.currentPage;
          }
          this.studentLoading = false;
        });
      },
      initDetail(userId){
        let params = {
          page: this.pageDetail,
          num: this.numDetail,
          userId: this.userId,
          applyTypeCode: 'PunishmentApply',
          applyTimeBegin: this.searchDate ? this.searchDate[0] : '',
          applyTimeEnd: this.searchDate ? this.searchDate[1] : '',
          //searchKey: this.searchDetailKey
        };
        this.tableDetailLoading = true;
        this.$axios.get(common.audit_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableDetailData = res.data.data.list;
            this.totalDetail = res.data.data.totalCount;
            this.numDetail = res.data.data.num;
            this.pageDetail = res.data.data.currentPage;
          }
          this.tableDetailLoading = false;
        });
      },
      nodeClick(data){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
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
        this.page = 1;
        this.init();
      },
      addInfo(){
        this.initStudent();
        this.modalVisible = true;
      },
      exportInfo(){
        let url = "";
        let params = {
          page: 1,
          num: 99999,
          stype: 3,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          status: this.status,
          type: this.type,
          searchKey: this.searchKey
        };
        params = this.$qs.stringify(params);
        url = common.audit_re_manage_level_export;
        window.open(url+"?"+params, "_self");
      },
      searchStudent(data){
        this.searchStudentKey = data;
        this.initStudent();
      },
      handleDetail(row){
        this.detailStatusInfo = "";
        this.punish = "";
        this.reward = "";
        this.userId = "";
        this.reward = row.reward;
        this.punish = row.punish;
        this.userId = row.user_id;
        this.initDetail();
        this.drawerDetailVisible = true;
      },
      handleDetailInfo(row){
        let params = {
          id:row.object_id ? row.object_id : row.id
        };
        this.auditObjectItem = row;
        this.$axios.get(common.msg_detail_center, {params: params}).then(res => {
          if (res.data.code == 200){
            this.dataAudit = res.data.data;
            this.drawerVisible = true;
          }else {
            MessageWarning(res.data.desc);
          }
        });
      },
      closeDrawerDialog(event){
        this.auditObjectItem = {};
        this.drawerVisible = event;
      },
      closeDrawerDetailDialog(event){
        this.tableDetailData = [];
        this.pageDetail = 1;
        this.totalDetail = 0;
        this.numDetail = 20;
        this.detailStatusInfo = '';
        this.drawerDetailVisible = event;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      cancelDrawDetailDialog(){
        this.drawerDetailVisible = false;
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
      sizeDetailChange(event){
        this.pageDetail = 1;
        this.numDetail = event;
        this.initDetail();
      },
      currentDetailPage(event){
        this.pageDetail = event;
        this.initDetail();
      },
      jumpDetailPage(data){
        this.pageDetail = data;
        this.initDetail();
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
      handleChange(data){
        this.searchDate = data;
      },
      handleRadioChange(data){
        this.form.userId = data;
      },
      handleSelect(data, type){
        if (type == 1){
          this.form.type = ''+data;
          this.form.level = "";
          this.initLevels(data);
        }else if(type == 2){
          this.form.level = ''+data;
        }
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      searchDetail(data){
        this.searchDetailKey = data.input;
        this.pageDetail = 1;
        this.initDetail();
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'type'){
            this.filterTypesText = "";
            this.type = value[item][0];
            for (let i = 0; i < this.filterTypes.length; i++){
              if (this.type == this.filterTypes[i].value){
                this.filterTypesText = this.filterTypes[i].text;
              }
            }
          }else if (item == 'status'){
            this.filterStatusText = "";
            this.status = value[item][0];
            for (let i = 0; i < this.filterRpStatus.length; i++){
              if (this.status == this.filterRpStatus[i].value){
                this.filterStatusText = this.filterRpStatus[i].text;
              }
            }
          }
        }
        this.page = 1;
        this.init();
      },
      expandInfo(){
        let url = common.audit_download;
        let params = {
          page:1,
          num:99999,
          applyTypeCode: 'PunishmentApply',
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          applyTimeBegin: this.searchDate ? this.searchDate[0] : '',
          applyTimeEnd: this.searchDate ? this.searchDate[1] : '',
          str1: this.type,
          str2: this.level,
          status: this.status,
          searchKey: this.searchKey
        };
        params = this.$qs.stringify(params);
        window.open(url+"?"+params, "_self");
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      cancelRemoveDialog(){
        this.dialogRemove = false;
      },
      closeDialog(event){
        this.form = {
          id: '',
          type: '',
          level: '',
          file: '',
          files: [],
          des: '',
          userId:[]
        };
        this.formRemove = {
          file: '',
          des: '',
        };
        this.filterAddLevels = [];
        this.subTitle = "";
        this.pageStudent = 1;
        this.numStudent = 20;
        this.searchStudentKey = "";
        this.images = [];
        this.errorStudent = "";
        if (this.$refs.studentRef){
          this.$refs.studentRef.inputValue = "";
        }
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      okDialog(event){
        let url = "";
        let arr = [];
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.errorStudent = "";
            if (this.form.userId.length <= 0){
              this.errorStudent = this.$t("请选择学生");
              return;
            }
            for (let i = 0; i < this.form.userId.length; i++){
              arr.push(this.form.userId[i].user_id);
            }
            this.dialogLoading = true;
            let params = {
              applyFile: this.form.files.join(),
              applyTypeCode: "PunishmentApply",
              des: this.form.des,
              str1: this.form.type,
              str2: this.form.level,
              userId: arr.join(),
              time: this.form.time,
              userType: "5"
            };
            url = common.audit_re_add;
            params = JSON.stringify(params);
            this.$axios.post(url, params, {dataType: 'stringfy', loading: false}).then(res => {
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
      okRemoveDialog(event) {
        let url = "";
        let arr = [];
        this.$refs['formRemove'].validate((valid) => {
          if (valid) {
            if (this.images.length <= 0){
              this.errorStudent = this.$t("请上传文件");
              return;
            }
            this.dialogLoading = true;
            let params = {
              parentApplyId: this.auditObjectItem.id,
              applyFile: this.images.join(),
              applyTypeCode: "PunishmentCancelApply",
              des: this.formRemove.des,
            };
            url = common.audit_re_add;
            params = JSON.stringify(params);
            this.$axios.post(url, params, {dataType: 'stringfy', loading: false}).then(res => {
              if (res.data.code == 200){
                this.dialogRemove = false;
                this.initDetail();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
            });
          }
        });
      },
      uploadSuccess(res, file){
        if (res.code == 200){
          //this.form.file = res.data.url;
          this.form.files.push(res.data.url);
        }else {

        }
      },
      uploadError(res, file){
        MessageError(res.data.desc);
      },
      deleteImg(event, index){
        //this.form.file = "";
        this.images.splice(index, 1);
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
            //this.handleDetail(this.auditObjectItem);
            this.init();
            this.drawerVisible = false;
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
            this.handleDetail(this.auditObjectItem);
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
            this.handleDetail(this.auditObjectItem);
            this.init();
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      },
      removeAudit(data){
        this.dialogRemove = true;
      },
      handleShowTeacher(type){
        if (type == 3){
          this.$refs.popverPartRef._handleOpen();
        }
      },
      handleHideeacher(){
        if (this.$refs['popverPartRef']){
          this.$refs.popverPartRef._handleResetChange();
        }
      },
      handleSelUser(data, type){
        this.$set(this.form, 'userId', data);
      },
      uploadFileSuccess(res, file){
        if (res.code == 200){
          this.images.push(res.data.url);
        }else {

        }
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .rpStatic-top-item .person-item{
    display: inline-block;
    width: 60px;
  }
  .rpStatic-top-item .title{
    font-weight: bold;
  }
  .rp-img{
    height: 25px;
    width: 25px;
    border: 1px solid #dddddd;
  }
  .rp-fotter-page{
    border: 1px solid #EBEEF5;
    border-top: 0px;
    height: 30px;
    line-height: 30px;
    width: 348px;
  }
  .rp-img{
    height: 30px;
    width: 30px;
    border: 1px solid #dddddd;
  }
</style>
