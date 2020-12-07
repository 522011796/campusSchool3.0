<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">检查设置</template>

      <div slot="content">
        <el-card :body-style="{padding: '10px 10px'}">
          <div>
            <div class="margin-bottom-10">
              <span class="leave-level-tag"></span>
              <span class="leave-level-title color-warning">{{$t("周期设置")}}</span>

              <span class="margin-left-10">
                <el-button type="success" size="small" @click="setConfig">
                  <i class="fa fa-cog"></i>
                  {{$t("设置周期")}}
                </el-button>
              </span>
            </div>
            <div>
              <el-form :model="form" ref="form" label-width="140px">
                <el-form-item :label="$t('公共区域')" prop="area">
                  <my-radio :sel-value="form.share" label="1" @change="changeType($event, 1)">{{$t("开启")}}</my-radio>
                  <my-radio :sel-value="form.share" label="0" @change="changeType($event, 1)" class="margin-left-10">{{$t("关闭")}}</my-radio>
                </el-form-item>
                <el-form-item :label="$t('个人区域')" prop="area">
                  <my-radio :sel-value="form.private" label="1" @change="changeType($event, 2)">{{$t("开启")}}</my-radio>
                  <my-radio :sel-value="form.private" label="0" @change="changeType($event, 2)" class="margin-left-10">{{$t("关闭")}}</my-radio>
                </el-form-item>
                <el-form-item :label="$t('选择周期')" prop="area">
                  <el-button-group>
                    <el-button size="small" :type="form.type == 3 ? 'primary' : 'default'" @click="selTime(3)">{{$t("日")}}</el-button>
                    <el-button size="small" :type="form.type == 2 ? 'primary' : 'default'" @click="selTime(2)">{{$t("周")}}</el-button>
                    <el-button size="small" :type="form.type == 4 ? 'primary' : 'default'" @click="selTime(4)">{{$t("月")}}</el-button>
                    <el-button size="small" :type="form.type == 1 ? 'primary' : 'default'" @click="selTime(1)">{{$t("学期")}}</el-button>
                  </el-button-group>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-card>

        <div class="layout-right-tab margin-top-10">
          <el-row>
            <el-col :span="6">
              <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo('setType')">{{$t("检查人设置")}}</el-button>
            </el-col>
            <el-col :span="18" class="text-right">

            </el-col>
          </el-row>
        </div>

        <el-table
          ref="refTable"
          :data="tableData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          row-key="id"
          :max-height="tableHeight4.height"
          style="width: 100%">
          <el-table-column
            align="center"
            :label="$t('院系/宿舍楼')">

            <template slot-scope="scope">
              <span v-if="scope.row.scope == 3">{{$t("全校")}}</span>
              <span v-if="scope.row.scope == 1">{{scope.row.build_name}}</span>
              <span v-if="scope.row.scope == 2">{{scope.row.college_name}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('检查人')">

            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.real_names}}
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.real_names}}
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
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal tabindex="0" :visible="modalVisible" :title="$t('项目设置')" @close="closeDialog" @right-close="cancelDialog">
      <span tabindex="1"></span>
      <div class="margin-top-10">
        <el-form :model="formPer" :rules="rules" ref="formPer" label-width="100px">
          <el-form-item :label="$t('院系/宿舍楼')" prop="typeId">
            <my-select :sel-value="formPer.typeId" :options="tableCBData" width-style="420" @change="handleSelect"></my-select>
          </el-form-item>
          <el-form-item :label="$t('老师')">
            <el-table ref="tableRef" v-loading="studentLoading" :row-key="getRowKeys" height="200" :header-cell-style="{'line-height': '20px'}" size="mini" :data="tableTeacherData" border style="width: 450px" @selection-change="handleSelectionChange">
              <el-table-column
                :reserve-selection="true"
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column property="real_name" align="center" label="姓名" :show-overflow-tooltip="true">

              </el-table-column>
              <el-table-column align="center" label="性别" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <my-sex :sex="scope.row.sex" tag="text"></my-sex>
                </template>
              </el-table-column>
            </el-table>
            <div><span class="color-danger font-size-12">{{errorStudent}}</span></div>
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

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import MyPagination from "../../../components/MyPagination";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {inArray, MessageError, MessageSuccess, MessageWarning, weekNoText2} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyUserType from "../../../components/utils/MyUserType";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyInputButton from "../../../components/search/MyInputButton";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MyNormalDialog from "../../../components/utils/dialog/MyNormalDialog";
  import MyRadio from "../../../components/MyRadio";
  import homeworkSettingValidater from "../../../utils/validater/homeworkSettingValidater";
  export default {
    mixins: [mixins, homeworkSettingValidater],
    components: {MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal,MyNormalDialog,MyRadio},
    data(){
      return {
        tableData: [],
        tableCBData: [],
        tableTeacherData: [],
        searchDate: [],
        typeList: [],
        searchKey: '',
        visible: false,
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        studentLoading: false,
        clearTime: '',
        action: '',
        subTitle: '',
        levelId: '',
        grade1: '',
        grade2: '',
        type: '',
        errorStudent: '',
        form: {
          id: '',
          type: '3',
          share: '0',
          private: '0'
        },
        formPer: {
          id: '',
          typeId: '',
          typeName: '',
          teacherStr: '',
          teacherList: [],
          scope: ''
        }
      }
    },
    created() {
      this.init();
    },
    methods: {
      init(){
        this.initConfig();
        this.initUserList();
        this.initCollegeAndDorm();
      },
      initConfig(){
        let params = {
          checkType: 1
        };
        this.$axios.get(common.housework_query_check_conf_query, {params: params}).then(res => {
          if (res.data.data){
            this.form = {
              id: '',
              type: res.data.data.checkconfInfo.checkIntervalType,
              share: res.data.data.checkconfInfo.itemPubEnable == true ? '1' : '0',
              private: res.data.data.checkconfInfo.itemPrivEnable == true ? '1' : '0',
            };
          }
        });
      },
      initUserList(){
        let params = {
          page: this.page,
          num: this.num,
          checkType: 1
        };
        this.$axios.get(common.housework_query_check_person_list, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initCollegeAndDorm(){
        let arr = [];
        this.$axios.get(common.housework_query_check_college).then(res => {
          if (res.data.data){
            arr.push({
              label: this.$t("全校"),
              value: '-1',
              type: 3
            });
            for (let i = 0; i < res.data.data.length; i++ ){
              arr.push({
                label: res.data.data[i].name,
                value: res.data.data[i].id,
                type: 2
              });
            }

            this.$axios.get(common.housework_query_check_dorm).then(res => {
              if (res.data.data){
                for (let i = 0; i < res.data.data.length; i++ ){
                  arr.push({
                    label: res.data.data[i].buildingName,
                    value: res.data.data[i].id,
                    type: 1
                  });
                }
                this.tableCBData = arr;
              }
            });
          }
        });
      },
      initTeacher(){
        let arr = [].concat(this.formPer.teacherList);
        let params = {
          page: 1,
          num: 10000
        };
        this.studentLoading = true;
        this.$axios.get(common.teacher_list,{params: params}).then(res => {
          if (res.data.data){
            this.tableTeacherData = res.data.data.page.list;

            for (let i = 0; i < this.tableTeacherData.length; i++){
              let sel = inArray(this.tableTeacherData[i].user_id, arr);
              if (sel > -1){
                this.$refs.tableRef.toggleRowSelection(this.tableTeacherData[i], true);
              }
            }
          }
          this.studentLoading = false;
        });
      },
      addInfo(type){
        setTimeout(() => {
          this.initTeacher();
        },800);
        this.modalVisible = true;
      },
      editInfo(row){
        this.formPer = {
          id: row.id,
          typeName: '',
          scope: row.scope,
          teacherStr: row.user_ids,
          teacherList: row.user_ids ? row.user_ids.split(",") : []
        };
        if (row.scope == 1){
          this.formPer['typeId'] = row.build_id;
        }else if (row.scope == 2){
          this.formPer['typeId'] = row.college_id;
        }else if (row.scope == 3){
          this.formPer['typeId'] = '-1';
        }
        this.initTeacher();
        this.modalVisible = true;
      },
      deleteInfo(row){
        this.formPer.id = row.id;
        //this.subTitle = row.typeName;
        this.visibleConfim = true;
      },
      setLevel(row){
        let nf2_Reg = /^([\+ \-]?(([1-9]\d*)|(0)))([.]\d{0,2})?$/;
        if (!nf2_Reg.test(row.grade1) || !nf2_Reg.test(row.grade2)){
          MessageWarning(this.$t("范围请输入整数或者2位小数"));
          return;
        }
        let params = {
          id: row.id,
          grade1: row.grade1,
          grade2: row.grade2,
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.leave_query_level_save, params).then(res => {
          if (res.data.code == 200){
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
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
      weekNoInfo(val){
        return weekNoText2(val);
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      closeDialog(event){
        this.formPer = {
          id: '',
          typeId: '',
          typeName: '',
          teacherStr: '',
          teacherList: [],
          scope: ''
        };
        this.subTitle = "";
        if (this.$refs.tableRef){
          this.$refs.tableRef.clearSelection();
        }
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        if (this.$refs['formPer']){
          this.$refs['formPer'].resetFields();
        }
      },
      okDialog(event){
        let url = "";
        let arr = [];
        this.$refs['formPer'].validate((valid) => {
          if (valid) {
            this.errorStudent = "";
            if (this.formPer.teacherList.length <= 0){
              this.errorStudent = this.$t("请选择老师");
              return;
            }
            for (let i = 0; i < this.formPer.teacherList.length; i++){
              arr.push(this.formPer.teacherList[i].user_id);
            }

            this.dialogLoading = true;
            let params = {
              checkType: 1,
              scope: this.formPer.scope,
              userIds: arr.join()
            };
            if (this.formPer.scope == 2){
              params['collegeId'] = this.formPer.typeId;
            }else if (this.formPer.scope == 1){
              params['buildId'] = this.formPer.typeId;
            }else if (this.formPer.scope == 3){

            }

            if (this.formPer.id != ''){
              params['id'] = this.formPer.id;
              url = common.housework_query_check_person_edit;
            }else {
              url = common.housework_query_check_person_save;
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
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.formPer.id
        };
        url = common.housework_query_check_person_del;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.initUserList();
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
      handleChangeTime(data, type){
        switch (type) {
          case 1:
            this.form.freeData1 = data;
            this.form.freeHour1 = data.split(":")[0];
            this.form.freeMinuts1 = data.split(":")[1];
            break;
          case 2:
            this.form.freeData2 = data;
            this.form.freeHour2 = data.split(":")[0];
            this.form.freeMinuts2 = data.split(":")[1];
            break;
        }
      },
      handleSelect(data, type){
        for (let i = 0; i < this.tableCBData.length; i++){
          if (this.tableCBData[i].value == data){
            this.formPer.scope = this.tableCBData[i].type;
          }
        }
        this.formPer.typeId = data;
      },
      changeType(data, type){
        switch (type) {
          case 1:
            this.form.share = data;
            break;
          case 2:
            this.form.private = data;
            break;
        }
      },
      selTime(data){
        this.form.type = data;
      },
      setConfig(){
        let params = {
          checkType: 1,
          itemPubEnable: this.form.share == 1 ? true : false,
          itemPrivEnable: this.form.private == 1 ? true : false,
          checkIntervalType: this.form.type,
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.housework_query_check_conf_save, params).then(res => {
          if (res.data.code == 200){
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      getRowKeys(row) {
        return row.user_id
      },
      handleSelectionChange(data){
        this.formPer.teacherList = data;
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
  .leave-level-tag{
    display: inline-block;
    height: 20px;
    width: 3px;
    background: #E6A23C;
    font-weight: bold;
    border-radius: 3px;
  }
  .leave-level-title{
    font-weight: bold;
    position: relative;
    top: -5px;
  }
</style>
