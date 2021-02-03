<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">班级信息</span>
        </div>
        <my-el-tree type="1" sub-type="3" @node-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="12">
              <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加班级")}}</el-button>
            </el-col>
            <el-col :span="12" class="text-right">
              <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('班级名称')" @click="search"></my-input-button>
            </el-col>
          </el-row>
        </div>

        <div class="margin-top-10">
          <el-table
            ref="refTable"
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :max-height="tableHeight2.height"
            style="width: 100%">
            <el-table-column
              align="center"
              prop="class_no"
              :label="$t('班级编号')">
            </el-table-column>
            <el-table-column
              align="center"
              prop="college_no"
              :label="$t('班级名称')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.class_name }}</div>
                  <span slot="reference" class="name-wrapper">
                  {{ scope.row.class_name }}
                </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="class_no"
              :label="$t('建班时间')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ $moment(scope.row.create_time).format("YYYY-MM-DD") }}</div>
                  <span slot="reference" class="name-wrapper">
                  {{ $moment(scope.row.create_time).format("YYYY-MM-DD") }}
                </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="class_no"
              :label="$t('所属专业')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.major_name }}</div>
                  <span slot="reference" class="name-wrapper">
                  {{ scope.row.major_name }}
                </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="class_no"
              :label="$t('班主任')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.master_teacher_name ? scope.row.master_teacher_name : '--' }}</div>
                  <span slot="reference" class="name-wrapper">
                  {{ scope.row.master_teacher_name ? scope.row.master_teacher_name : '--' }}
                </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="class_no"
              :label="$t('辅导员')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.coach_teacher_name ? scope.row.coach_teacher_name : '--' }}</div>
                  <span slot="reference" class="name-wrapper">
                  {{ scope.row.coach_teacher_name ? scope.row.coach_teacher_name : '--' }}
                </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              fixed="right"
              label="操作"
              width="120">
              <template slot-scope="scope">
                <i class="fa fa-cog margin-right-5 color-success" @click="setInfo(scope.row)"></i>
                <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row)"></i>
                <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </div>
    </layout-lr>

    <dialog-normal top="10vh" :visible="modalVisible" :title="$t('班级设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('班级编号')" prop="classNo">
            <el-input :disabled="form.id != ''" v-model="form.classNo" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('班级名称')" prop="className">
            <el-input v-model="form.className" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('建班时间')" prop="createTime">
            <my-date-picker :disabled="form.id != ''" :sel-value="form.createTime" width-style="260" @change="handleChangeTime($event)"></my-date-picker>
          </el-form-item>
          <el-form-item :label="$t('学院/专业')" prop="collegeData">
            <my-cascader ref="SelectorCollege" :disabled="form.id != ''" width-style="260" :sel-value="form.collegeData" type="1" sub-type="2" @change="handleCascaderChange($event, 1)"></my-cascader>
          </el-form-item>
          <el-form-item :label="$t('教学楼/教室')" prop="buildData">
            <my-cascader ref="SelectorBuild" width-style="260" :sel-value="form.buildData" type="3" sub-type="3" @change="handleCascaderChange($event, 2)"></my-cascader>
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

    <dialog-normal top="10vh" :visible="modalManageVisible" :title="$t('管理设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-row :gutter="16">
          <el-col :span="12">
            <div>
              <div class="text-right">
                <my-input-button ref="master" size="small" plain width-class="width: 120px" type="success" :clearable="true" :placeholder="$t('老师名称')" @click="searchMaster"></my-input-button>
              </div>
              <div style="position: relative; top: -10px;">
                <span class="class-tab font-size-12 color-grand">{{$t("班主任")}}</span>
                <el-card shadow="never" v-loading="loadingMaster" :element-loading-text="$t('加载中...')" element-loading-spinner="el-icon-loading" :body-style="{padding: '10px', height: '300px', overflowY: 'auto', overflowX: 'auto'}">
                  <el-radio-group v-model="form.masterId">
                    <div v-for="(item, index) in tableMasterTeacherData" :key="index" class="padding-tb-5">
                      <el-radio :label="item.user_id">{{item.real_name}}</el-radio>
                    </div>
                  </el-radio-group>
                </el-card>
              </div>
            </div>
          </el-col>

          <el-col :span="12">
            <div>
              <div class="text-right">
                <my-input-button ref="cocah" size="small" plain width-class="width: 120px" type="success" :clearable="true" :placeholder="$t('老师名称')" @click="searchCoach"></my-input-button>
              </div>
              <div style="position: relative; top: -10px;">
                <span class="class-tab font-size-12 color-grand">{{$t("辅导员")}}</span>
                <el-card shadow="never" v-loading="loadingCoach" :element-loading-text="$t('加载中...')" element-loading-spinner="el-icon-loading" :body-style="{padding: '10px', height: '300px', overflowY: 'auto', overflowX: 'auto'}">
                  <ul>
                    <li v-for="(item, index) in tableCoachTeacherData" :key="index" class="padding-tb-5">
                      <div>
                        <el-radio-group v-model="form.coachId">
                          <el-radio :label="item.user_id">{{item.real_name}}</el-radio>
                        </el-radio-group>
                      </div>
                    </li>
                  </ul>
                </el-card>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okManageDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
import {common} from "../../utils/api/url";
import DialogNormal from "../../components/utils/dialog/DialogNormal";
import MyNormalDialog from "../../components/utils/dialog/MyNormalDialog";
import MyCascader from "../../components/utils/select/MyCascader";
import MyDatePicker from "../../components/MyDatePicker";
import MyInputButton from "../../components/search/MyInputButton";
import MyRadio from "../../components/MyRadio";
import mixins from "../../utils/mixins";
import {MessageError, MessageSuccess, paddingChecked} from "../../utils/utils";
import classValidater from "../../utils/validater/classValidater";
import MyElTree from "../../components/tree/MyElTree";

export default {
  mixins: [mixins, classValidater],
  components: {MyElTree, DialogNormal,MyNormalDialog,MyCascader,MyDatePicker,MyInputButton,MyRadio},
  data(){
    return {
      tableData: [],
      tableMasterTeacherData: [],
      tableCoachTeacherData: [],
      modalVisible: false,
      dialogLoading: false,
      visibleConfim: false,
      drawerVisible: false,
      drawerLoading: false,
      modalManageVisible: false,
      loadingCoach: false,
      loadingMaster: false,
      subTitle: '',
      errorTips: '',
      searchCollegeId: '',
      searchMajorId: '',
      searchGrade: '',
      searchMasterId: '',
      searchCoachId: '',
      form: {
        id: '',
        classNo: '',
        className: '',
        createTime: '',
        collegeId: '',
        collegeData: [],
        majorId: '',
        masterId: '',
        coachId: '',
        buildData: [],
        buildId: '',
        classId: '',
        searchName: '',
        searchNo: ''
      }
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
        collegeId: this.searchCollegeId,
        majorId: this.searchMajorId,
        grade: this.searchGrade,
        className: this.form.searchName,
        classNo: this.form.searchNo
      };
      this.$axios.get(common.class_list, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },
    initTeacher(type){
      let params = {
        page: 1,
        num: 9999,
      };
      if (type == 1){
        params['realName'] = this.searchMasterId;
        this.loadingMaster = true;
      }else if (type == 2){
        params['realName'] = this.searchCoachId;
        this.loadingCoach = true;
      }
      this.$axios(common.teacher_list, {params: params}).then(res => {
        if (res.data.data){
          if (type == 1){
            this.tableMasterTeacherData = res.data.data.page.list;
            this.loadingMaster = false;
          }else if (type == 2){
            this.tableCoachTeacherData = res.data.data.page.list;
            this.loadingCoach = false;
          }else {
            this.tableMasterTeacherData = res.data.data.page.list;
            this.tableCoachTeacherData = res.data.data.page.list;
            this.loadingMaster = false;
            this.loadingCoach = false;
          }
        }
      });
    },
    addInfo(){
      this.modalVisible = true;
    },
    setInfo(row){
      this.form = {
        id: row.id,
        classNo: row.class_no,
        className: row.class_name,
        createTime: row.create_time ? this.$moment(row.create_time).format("YYYY-MM-DD") : '',
        collegeId: row.collegeId,
        majorId: row.majorId,
        masterId: row.master_teacher,
        coachId: row.coach_teacher,
        buildId: '',
        classId: '',
        searchName: '',
        searchNo: ''
      };
      this.$set(this.form,'buildData', [row.build_id,row.floor_num,row.classroom_id]);
      this.$set(this.form,'collegeData', [row.college_id, row.major_id]);

      this.loadingMaster = true;
      this.loadingCoach = true;
      setTimeout(() => {
        this.initTeacher();
      },800);

      this.modalManageVisible = true;
    },
    editInfo(row){
      this.form = {
        id: row.id,
        classNo: row.class_no,
        className: row.class_name,
        createTime: row.create_time ? this.$moment(row.create_time).format("YYYY-MM-DD") : '',
        collegeId: row.collegeId,
        majorId: row.majorId,
        masterId: row.master_teacher,
        coachId: row.coach_teacher,
        buildId: '',
        classId: '',
        searchName: '',
        searchNo: ''
      };
      this.$set(this.form,'buildData', [row.build_id,row.floor_num,row.classroom_id]);
      this.$set(this.form,'collegeData', [row.college_id, row.major_id]);
      this.modalVisible = true;
    },
    deleteInfo(row){
      this.form.id = row.id;
      this.visibleConfim = true;
    },
    nodeClick(data){
      this.searchCollegeId = "";
      this.searchMajorId = "";
      this.searchGrade = "";
      if (data.unit == 1){
        this.searchCollegeId = data.id;
      }else if (data.unit == 2){
        this.searchCollegeId = data.college_id;
        this.searchMajorId = data.id;
      }else if (data.unit == 3){
        this.searchMajorId = data.major_id;
        this.searchGrade = data.grade;
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
    jumpPage(data){
      this.page = data;
      this.init();
    },
    search(data){
      this.form.searchName = data.input;
      this.page = 1;
      this.init();
    },
    searchMaster(data){
      this.searchMasterId = data.input;
      this.initTeacher(1);
    },
    searchCoach(data){
      this.searchCoachId = data.input;
      this.initTeacher(2);
    },
    okDialog(event){
      let url = "";
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.dialogLoading = true;
          let params = {
            className: this.form.className,
            classroomId: this.form.buildData[2],
            buildingId: this.form.buildData[0],
            classNo: this.form.buildData[1],
            majorId: this.form.collegeData[1],
            createTime: this.form.createTime,
            masterTeacher: this.form.masterId,
            coachTeacher: this.form.coachId,
            enabled: true
          };
          if (this.form.id != ""){
            url = common.class_edit;
            params['id'] = this.form.id;
          }else {
            url = common.class_add;
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
    closeDialog(event){
      this.form = {
        id: '',
        classNo: '',
        className: '',
        createTime: '',
        collegeId: '',
        majorId: '',
        masterId: '',
        coachId: '',
        buildId: '',
        classId: '',
        searchName: '',
        searchNo: ''
      };
      this.$set(this.form,'buildData', []);
      this.$set(this.form,'collegeData', []);
      this.resetCasadeSelector('SelectorCollege');
      this.resetCasadeSelector('SelectorBuild');
      this.subTitle = "";
      this.tableMasterTeacherData = [];
      this.tableCoachTeacherData = [];
      this.loadingMaster = false;
      this.loadingCoach = false;
      this.searchMasterId = '';
      this.searchCoachId = '';
      if (this.$refs.cocah){
        this.$refs.cocah.inputValue = "";
      }
      if (this.$refs.master){
        this.$refs.master.inputValue = "";
      }
      if (this.$refs['form']){
        this.$refs['form'].resetFields();
      }
    },
    cancelDialog(){
      this.modalVisible = false;
      this.modalManageVisible = false;
    },
    handleOkChange(data) {
      this.dialogLoading = true;
      let url = "";
      let params = {
        id: this.form.id
      }
      url = common.class_delete;
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
    closeDrawerDialog(event){
      this.form = {

      };
      this.drawerVisible = event;
    },
    handleChangeTime(data){
      this.form.createTime = data;
    },
    handleCascaderChange(data, type){
      switch (type) {
        case 1:
          this.form.collegeData = data;
          break;
        case 2:
          this.form.buildData = data;
          break;
      }
    },
    okManageDialog(){
      let url = "";
      this.dialogLoading = true;
      let params = {
        id: this.form.id,
        className: this.form.className,
        classroomId: this.form.buildData[2],
        buildingId: this.form.buildData[0],
        classNo: this.form.buildData[1],
        majorId: this.form.collegeData[1],
        createTime: this.form.createTime,
        masterTeacher: this.form.masterId,
        coachTeacher: this.form.coachId,
        enabled: true
      };
      url = common.class_edit;
      params = this.$qs.stringify(params);
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200){
          this.modalManageVisible = false;
          this.init();
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.dialogLoading = false;
      });
    }
  }
}
</script>

<style scoped>
.container {

}
.class-tab{
  position: relative;
  left: 0px;
  top: -3px;
  border: 1px solid #EBEEF5;
  border-bottom: none;
  padding: 5px 4px;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  font-weight: bold;
}
</style>
