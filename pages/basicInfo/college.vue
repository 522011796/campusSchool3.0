<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">学院信息</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addCollege($event)">{{$t("添加学院")}}</el-button>
          </el-col>
          <el-col :span="12" class="text-right">
            <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('学院名称')" @click="search"></my-input-button>
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
            prop="college_no"
            :label="$t('学院编号')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="college_name"
            :label="$t('学院名称')">
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('系主任')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.director_name ? scope.row.director_name : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.director_name ? scope.row.director_name : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('系副主任')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.deputy_director_name ? scope.row.deputy_director_name : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.deputy_director_name ? scope.row.deputy_director_name : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('学管主任')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.student_manage_name ? scope.row.student_manage_name : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.student_manage_name ? scope.row.student_manage_name : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('系部干事')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.secretary_name ? scope.row.secretary_name : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.secretary_name ? scope.row.secretary_name : '--'}}
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
              <i class="fa fa-cog margin-right-5 color-warning" @click="setInfo(scope.row)"></i>
              <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <!--<my-pagination :total="total" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>-->
          <span class="margin-right-10">{{$t("共")}} {{tableData.length}} {{$t("条")}}</span>
        </div>
      </div>
    </layout-tb>

    <dialog-normal :visible="modalVisible" :title="$t('学院设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('学院编号')" prop="no">
            <el-input :disabled="form.id != ''" v-model="form.no" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('学院名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <!--<el-form-item :label="$t('院系管理')" prop="endTime">
            <el-input v-model="form.searchKey" class="width-260"></el-input>
          </el-form-item>-->
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

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerVisible" :loading="drawerLoading" size="550px" :title="$t('管理员设置')" @right-close="cancelDrawDialog">
      <div slot="content">
        <div>
          <my-input-button ref="teacher" size="small" plain width-class="width: 120px" type="success" :clearable="true" :placeholder="$t('老师名称')" @click="searchTeacher"></my-input-button>
        </div>
        <table class="custom-table margin-top-10">
          <tr>
            <th width="15%">{{$t("系主任")}}</th>
            <th width="15%">{{$t("系副主任")}}</th>
            <th width="15%">{{$t("学管主任")}}</th>
            <th width="15%">{{$t("系部主任")}}</th>
            <th width="40%">{{$t("姓名")}}</th>
          </tr>
          <tbody v-loading="loadingList" :element-loading-text="$t('加载中...')" element-loading-spinner="el-icon-loading">
          <tr v-for="(item, index) in tableTeacherData" :key="item.id">
            <td>
              <my-check :sel-value="item._director" @change="handleBoxChange($event, item, 1)"></my-check>
            </td>
            <td>
              <my-check :sel-value="item._deputyDirectior" @change="handleBoxChange($event, item, 2)"></my-check>
            </td>
            <td>
              <my-check :sel-value="item._studentManage" @change="handleBoxChange($event, item, 3)"></my-check>
            </td>
            <td>
              <my-check :sel-value="item._secretary" @change="handleBoxChange($event, item, 4)"></my-check>
            </td>
            <td>{{item.real_name}}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <span class="color-danger">{{errorTips}}</span>
          <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="small" type="primary" :loading="drawerLoading" @click="okDrawDialog">{{$t("设置")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
import mixins from "../../utils/mixins";
import {common} from "../../utils/api/url";
import {MessageError, MessageSuccess} from "../../utils/utils";
import MyInputButton from "../../components/search/MyInputButton";
import DialogNormal from "../../components/utils/dialog/DialogNormal";
import MyNormalDialog from "../../components/utils/dialog/MyNormalDialog";
import collegeValidater from "../../utils/validater/collegeValidater";
import MyCheck from "../../components/MyCheck";
import DrawerLayoutRight from "../../components/utils/dialog/DrawerLayoutRight";
import {inArray, paddingChecked} from "../../utils/utils";

export default {
  mixins: [mixins, collegeValidater],
  components: {MyInputButton, DialogNormal, MyNormalDialog, MyCheck, DrawerLayoutRight},
  data(){
    return {
      tableData: [],
      tableTeacherData: [],
      modalVisible: false,
      modalUserVisible: false,
      dialogLoading: false,
      visibleConfim: false,
      drawerVisible: false,
      drawerLoading: false,
      loadingList: false,
      subTitle: '',
      errorTips: '',
      searchTeacherName: '',
      form: {
        id: '',
        no: '',
        name: '',
        directorId: [],
        deputyDirectorId: [],
        studentManageId: [],
        secretaryId: [],
        searchKey: ''
      }
    }
  },
  created() {
    this.init();
  },
  methods: {
    init(){
      let params = {
        collegeName: this.form.searchKey
      };
      this.$axios(common.college_list, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data;
        }
      });
    },
    initTeacher(){
      let params = {
        page: 1,
        num: 9999
      };
      params['realName'] = this.searchTeacherName;
      this.loadingList = true;
      this.$axios(common.teacher_list, {params: params, loading: false}).then(res => {
        if (res.data.data){
          for (let i = 0; i < res.data.data.page.list.length; i++){
            res.data.data.page.list[i]['_director'] = false;
            res.data.data.page.list[i]['_deputyDirectior'] = false;
            res.data.data.page.list[i]['_studentManage'] = false;
            res.data.data.page.list[i]['_secretary'] = false;

            paddingChecked(this.form.directorId, res.data.data.page.list[i], 'user_id', '_director');
            paddingChecked(this.form.deputyDirectorId, res.data.data.page.list[i], 'user_id', '_deputyDirectior');
            paddingChecked(this.form.studentManageId, res.data.data.page.list[i], 'user_id', '_studentManage');
            paddingChecked(this.form.secretaryId, res.data.data.page.list[i], 'user_id', '_secretary');
          }
          this.tableTeacherData = res.data.data.page.list;
          this.loadingList = false;
        }
      });
    },
    addCollege(){
      this.modalVisible = true;
    },
    setInfo(row){
      this.form.id = row.id;
      let director_id = !row.director_id ? [] : row.director_id.split(",");
      let deputy_director_id = !row.deputy_director_id ? [] : row.deputy_director_id.split(",");
      let student_manage_id = !row.student_manage_id ? [] : row.student_manage_id.split(",");
      let secretary_id = !row.secretary_id ? [] : row.secretary_id.split(",");
      this.form = {
        id: row.id,
        no: row.college_no,
        name: row.college_name,
        directorId: director_id,
        deputyDirectorId: deputy_director_id,
        studentManageId: student_manage_id,
        secretaryId: secretary_id,
        searchKey: []
      };
      this.tableTeacherData = [];
      setTimeout(() => {
        this.initTeacher();
      },800);
      this.drawerVisible = true;
    },
    editInfo(row){
      let director_id = !row.director_id ? [] : row.director_id.split(",");
      let deputy_director_id = !row.deputy_director_id ? [] : row.deputy_director_id.split(",");
      let student_manage_id = !row.student_manage_id ? [] : row.student_manage_id.split(",");
      let secretary_id = !row.secretary_id ? [] : row.secretary_id.split(",");
      this.form = {
        id: row.id,
        no: row.college_no,
        name: row.college_name,
        directorId: director_id,
        deputyDirectorId: deputy_director_id,
        studentManageId: student_manage_id,
        secretaryId: secretary_id,
        searchKey: []
      };
      this.modalVisible = true;
    },
    deleteInfo(row){
      this.form.id = row.id;
      this.subTitle = row.college_name;
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
    okDialog(event){
      let url = "";
      this.$refs['form'].validate((valid) => {
        if (valid) {
          let params = {
            collegeNo: this.form.no,
            collegeName: this.form.name,
            directorId: this.form.directorId.join(),
            deputyDirectorId: this.form.deputyDirectorId.join(),
            studentManageId: this.form.studentManageId.join(),
            secretaryId: this.form.secretaryId.join(),
          };
          if (this.form.id != ""){
            url = common.college_upate;
            params['id'] = this.form.id;
          }else {
            url = common.college_add;
          }
          params = this.$qs.stringify(params);
          this.dialogLoading = true;
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
        no: '',
        name: '',
        directorId: [],
        deputyDirectorId: [],
        studentManageId: [],
        secretaryId: [],
        searchKey: []
      };
      this.subTitle = "";
      if (this.$refs['form']){
        this.$refs['form'].resetFields();
      }
    },
    cancelDialog(){
      this.modalVisible = false;
    },
    handleOkChange(data) {
      this.dialogLoading = true;
      let url = "";
      let params = {
        id: this.form.id
      }
      url = common.college_delete;
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
        id: '',
        no: '',
        name: '',
        directorId: [],
        deputyDirectorId: [],
        studentManageId: [],
        secretaryId: [],
        searchKey: []
      };
      if (this.$refs.teacher){
        this.$refs.teacher.inputValue = "";
      }
      this.drawerVisible = event;
    },
    handleBoxChange(event, item, type){
      switch (type) {
        case 1:
          if (event){//选中
            this.form.directorId.push(item.user_id);
          }else {//取消选中
            let checked = inArray(item.user_id, this.form.directorId);
            this.form.directorId.splice(checked,1);
          }
          break;
        case 2:
          if (event){//选中
            this.form.deputyDirectorId.push(item.user_id);
          }else {//取消选中
            let checked = inArray(item.user_id, this.form.deputyDirectorId);
            this.form.deputyDirectorId.splice(checked,1);
          }
          break;
        case 3:
          if (event){//选中
            this.form.studentManageId.push(item.user_id);
          }else {//取消选中
            let checked = inArray(item.user_id, this.form.studentManageId);
            this.form.studentManageId.splice(checked,1);
          }
          break;
        case 4:
          if (event){//选中
            this.form.secretaryId.push(item.user_id);
          }else {//取消选中
            let checked = inArray(item.user_id, this.form.secretaryId);
            this.form.secretaryId.splice(checked,1);
          }
          break;
      }
    },
    cancelDrawDialog(){
      this.drawerVisible = false;
    },
    okDrawDialog(event){
      let url = "";
      let params = {
        id: this.form.id,
        collegeName: this.form.name,
        collegeNo: this.form.no,
        directorId: this.form.directorId.join(),
        deputyDirectorId: this.form.deputyDirectorId.join(),
        studentManageId: this.form.studentManageId.join(),
        secretaryId: this.form.secretaryId.join(),
      };
      url = common.college_upate;
      params = this.$qs.stringify(params);
      this.drawerLoading = true;
      this.$axios.post(url, params).then(res => {
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
    search(data){
      this.form.searchKey = data.input;
      this.page = 1;
      this.init();
    },
    searchTeacher(data){
      this.searchTeacherName = data.input;
      this.initTeacher();
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
</style>
