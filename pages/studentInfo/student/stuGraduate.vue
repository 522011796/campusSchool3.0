<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">毕业管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="10">
            <div class="custom-button-search">
              <el-select v-model="collegeValue" :clearable="true" size="small" placeholder="院系筛选" style="width: 120px" @change="handleCollegeChange">
                <el-option
                  v-for="item in collegeOptions"
                  :key="item.id"
                  :label="item.collegeName"
                  :value="item.id">
                </el-option>
              </el-select>

              <el-select v-model="majorValue" :clearable="true" size="small" placeholder="专业筛选" style="width: 120px" @change="handleMajorChange">
                <el-option
                  v-for="item in majorOptions"
                  :key="item.id"
                  :label="item.majorName"
                  :value="item.id">
                </el-option>
              </el-select>

              <el-select v-model="classValue" :clearable="true" size="small" placeholder="班级筛选" style="width: 120px" @change="handleClassChange">
                <el-option
                  v-for="item in classOptions"
                  :key="item.value"
                  :label="item.className"
                  :value="item.id">
                </el-option>
              </el-select>

              <el-dropdown trigger="click">
                <el-button type="warning" size="small">
                  {{$t("导入/导出")}}<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="importInfo($event)">
                    <i class="el-icon-upload"></i>
                    {{$t("导入")}}
                  </el-dropdown-item>
                  <el-dropdown-item @click.native="expandInfo($event)">
                    <i class="el-icon-download"></i>
                    {{$t("导出")}}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
          <el-col :span="14" class="text-right">
            <div>
              <my-date-picker :sel-value="searchInnerDate" :clearable="true" type="daterange" size="small" :start-placeholder="$t('入学开始')" :end-placeholder="$t('入学结束')" width-style="215" @change="handleStartChange" style="position: relative; top: 1px;"></my-date-picker>
              <my-date-picker :sel-value="searchOutDate" :clearable="true" type="daterange" size="small" :start-placeholder="$t('毕业开始')" :end-placeholder="$t('毕业结束')" width-style="215" @change="handleEndChange" style="position: relative; top: 1px;"></my-date-picker>
              <my-input-button class="layout-item" :placeholder="$t('姓名/学号/身份证号')" size="small" plain width-class="width: 157px" type="success" :clearable="true" @click="search"></my-input-button>
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
            prop="level_type"
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
            prop="level_type"
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
            prop="level_type"
            :label="$t('身份证')">
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
            prop="level_type"
            :label="$t('系部')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.college_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.college_name}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="level_type"
            :label="$t('专业')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.major_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.major_name}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="level_type"
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
            prop="level_type"
            :label="$t('入学时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <span v-if="scope.row.school_in_time">{{$moment(scope.row.school_in_time).format("YYYY-MM-DD")}}</span>
                  <span v-else></span>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span v-if="scope.row.school_in_time">{{$moment(scope.row.school_in_time).format("YYYY-MM-DD")}}</span>
                  <span v-else>--</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('毕业时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <span v-if="scope.row.school_out_time">{{$moment(scope.row.school_out_time).format("YYYY-MM-DD HH:mm")}}</span>
                  <span v-else></span>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span v-if="scope.row.school_out_time">{{$moment(scope.row.school_out_time).format("YYYY-MM-DD HH:mm")}}</span>
                  <span v-else>--</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('照片')">

            <template slot-scope="scope">
              <span>
                <el-image v-if="form.photo_simple" style="width: 80px; height: 80px; margin-right: 10px" :src="form.photo_simple">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
                <label v-else>--</label>
              </span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :filter-multiple="false">
            <template slot="header">
              <span>{{$t('毕业状态')}}</span>
              <span v-if="filterTypesText != ''" class="font-size-12 color-disabeld">{{filterTypesText}}</span>
            </template>
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{studentTeachStatusInfo(scope.row.status, 'set')}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{studentTeachStatusInfo(scope.row.status, 'set')}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('操作人')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.school_out_handler}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.school_out_handler}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="college_no"
            width="150"
            :label="$t('操作')">
            <template slot-scope="scope">
              <a href="javascript:;" class="margin-right-5 color-danger" @click="deleteInfo(scope.row)">{{$t('删除')}}</a>
              ｜
              <a href="javascript:;" class="color-success" @click="restoreInfo(scope.row)">{{$t('恢复')}}</a>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <drawer-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" accept=".xls,.xlsx" :data="{all: true}" :loading="drawerLoading" :hide-footer="true" size="400px" :title="$t('导入文件')" :action="uploadDropoutAction" :download-file="uploadFile" :result="uploadResult" :process="uploadProcess" @right-close="cancelDrawDialog" @success="uploadSuccess" @error="uploadError">

    </drawer-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" :content="visibleContent" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="cancelDrawDialog"></my-normal-dialog>
  </div>
</template>

<script>
import MyPagination from "../../../components/MyPagination";
import mixins from "../../../utils/mixins";
import {common} from "../../../utils/api/url";
import {deviceType, MessageError, MessageSuccess, studentTeachStatus} from "../../../utils/utils";
import LayoutTb from "../../../components/Layout/LayoutTb";
import MySelect from "../../../components/MySelect";
import MyUserType from "../../../components/utils/MyUserType";
import MyDatePicker from "../../../components/MyDatePicker";
import MyInputButton from "../../../components/search/MyInputButton";
import levelValidater from "../../../utils/validater/levelValidater";
import DialogNormal from "../../../components/utils/dialog/DialogNormal";
import DrawerRight from "~/components/utils/dialog/DrawerRight.vue";
export default {
  mixins: [mixins, levelValidater],
  components: {DrawerRight, MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal},
  data(){
    return {
      tableData: [],
      searchDate: [],
      typeList: [],
      searchKey: '',
      visible: false,
      modalVisible: false,
      dialogLoading: false,
      visibleConfim: false,
      drawerVisible: false,
      drawerLoading: false,
      uploadFile: common.student_change_file + "?fileName=" + encodeURIComponent(this.$t("学生学籍修改模板.xlsx")),
      uploadChangeAction: common.student_change_import,
      uploadDropoutAction: common.student_change_dropout_import,
      visibleContent: '',
      clearTime: '',
      action: '',
      subTitle: '',
      oprType: '',
      collegeOptions: [],
      majorOptions: [],
      classOptions: [],
      collegeValue: '',
      majorValue: '',
      classValue: '',
      searchInnerDate: [],
      searchOutDate: [],
      filterTypesText: '',
      type: '',
      uploadResult: {},
      uploadProcess: '',
      form: {
        id: '',
        name: '',
        type: ''
      }
    }
  },
  created() {
    this.initCollege();
    this.init();
  },
  methods: {
    init(){
      let params = {
        page: this.page,
        num: this.num,
        collegeId: this.collegeValue,
        majorId: this.majorValue,
        clasz: this.classValue,
        intStartTime: this.searchInnerDate && this.searchInnerDate.length > 0 ? this.searchInnerDate[0] : "",
        intEndTime: this.searchInnerDate && this.searchInnerDate.length > 0 ? this.searchInnerDate[1] : "",
        outStartTime: this.searchOutDate && this.searchOutDate.length > 0 ? this.searchOutDate[0] : "",
        outEndTime: this.searchOutDate && this.searchOutDate.length > 0 ? this.searchOutDate[1] : ""
      };
      if (this.searchKey){
        params['searchKey'] = this.searchKey;
      }
      if (this.type){
        params['studentStatus'] = this.type;
      }
      params = this.$qs.stringify(params);
      this.$axios.post(common.student_graduate_page, params).then(res => {
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },
    initCollege(){
      // let params = {};
      // params = this.$qs.stringify(params);
      this.$axios.get(common.college_only_list).then(res => {
        if (res.data.data){
          this.collegeOptions = res.data.data;
        }
      });
    },
    initMajor(collegeId){
      let params = {
        collegeId: collegeId
      };
      // params = this.$qs.stringify(params);
      this.$axios.get(common.major_only_list, {params: params}).then(res => {
        if (res.data.data){
          this.majorOptions = res.data.data;
        }
      });
    },
    initClass(majorId){
      let params = {
        majorId: majorId
      };
      // params = this.$qs.stringify(params);
      this.$axios.get(common.class_only_list, {params: params}).then(res => {
        if (res.data.data){
          this.classOptions = res.data.data;
        }
      });
    },
    search(data){
      this.searchKey = data.input;
      this.page = 1;
      this.init();
    },
    handleStartChange(event){
      this.searchInnerDate = event;
    },
    handleEndChange(event){
      this.searchOutDate = event;
    },
    handleChange(data){
      this.searchDate = data;
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
    deviceTypeInfo(val){
      return deviceType('set',val);
    },
    studentTeachStatusInfo(val, type){
      return studentTeachStatus(type, val);
    },
    deleteInfo(row){
      this.oprType = "delete";
      this.form.id = row.user_id;
      this.visibleContent = this.$t("确定需要删除该数据吗？");
      this.visibleConfim = true;
    },
    restoreInfo(row){
      this.oprType = "restore";
      this.form.id = row.user_id;
      this.visibleContent = this.$t("确定需要恢复该数据吗？");
      this.visibleConfim = true;
    },
    handleOkChange(data) {
      this.dialogLoading = true;
      let url = "";
      let params = {
        userId: this.form.id
      }
      url = '';
      if (this.oprType == "delete"){
        url = common.student_delete_info;
      }else if (this.oprType == "restore"){
        url = common.student_restore_info;
      }
      params = this.$qs.stringify(params);
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200){
          this.init();
          this.oprType = '';
          this.visibleConfim = false;
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.dialogLoading = false;
      });
    },
    handleCancelChange(data) {
      this.oprType = '';
      this.visibleConfim = false;
      this.dialogLoading = false;
    },
    closeDrawerDialog(event){
      this.uploadProcess = '';
      this.uploadResult = {};
      this.drawerVisible = event;
    },
    cancelDrawDialog(){
      this.oprType = '';
      this.visibleConfim = false;
      this.dialogLoading = false;
    },
    handleCollegeChange(event){
      this.page = 1;
      this.collegeValue = event;
      this.majorValue = "";
      this.classValue = "";
      this.initMajor(event);
      this.init();
    },
    handleMajorChange(event){
      this.page = 1;
      this.majorValue = event;
      this.classValue = "";
      this.initClass(event);
      this.init();
    },
    handleClassChange(event){
      this.page = 1;
      this.classValue = event;
      this.init();
    },
    importInfo(event){
      this.drawerVisible = true;
    },
    expandInfo(){
      let url = common.student_export_graduate;
      let params = {
        page: this.page,
        num: this.num,
        collegeId: this.collegeValue,
        majorId: this.majorValue,
        clasz: this.classValue,
        intStartTime: this.searchInnerDate && this.searchInnerDate.length > 0 ? this.searchInnerDate[0] : "",
        intEndTime: this.searchInnerDate && this.searchInnerDate.length > 0 ? this.searchInnerDate[1] : "",
        outStartTime: this.searchOutDate && this.searchOutDate.length > 0 ? this.searchOutDate[0] : "",
        outEndTime: this.searchOutDate && this.searchOutDate.length > 0 ? this.searchOutDate[1] : ""
      };
      if (this.searchKey){
        params['searchKey'] = this.searchKey;
      }
      params = this.$qs.stringify(params);

      window.open(url+"?"+params, "_self");
    },
    fliterTable(value, row, column){
      for (let item in value){
        if (item == 'type'){
          this.filterTypesText = "";
          this.type = value[item][0];
          for (let i = 0; i < this.filterUserTeachTypes.length; i++){
            if (this.type == this.filterUserTeachTypes[i].value){
              this.filterTypesText = this.filterUserTeachTypes[i].text;
            }
          }
        }
      }
      this.page = 1;
      this.init();
    },
    uploadSuccess(res, file){
      this.uploadProcess = res.desc;

      if (res.code == 200){
        this.uploadResult = res.data ? res.data : [res.desc];
      }else {
        if (res.data){
          this.uploadResult = res.data;
        }else {
          this.uploadResult = [res.desc];
        }
      }
    },
    uploadError(res, file){
      this.uploadProcess = res.data.data;
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
</style>
