<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">专业信息</span>
        </div>
        <my-el-tree type="1" sub-type="1" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="12">
              <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加专业")}}</el-button>
            </el-col>
            <el-col :span="12" class="text-right">
              <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('专业名称')" @click="search"></my-input-button>
            </el-col>
          </el-row>
        </div>

        <div class="margin-top-10">
          <div class="bg-white border-bottom-1 padding-lr-5 padding-tb-5" :style="divHeight2">
            <el-row :gutter="16">
              <el-col :span="6" class="margin-bottom-20" v-for="(item, index) in tableData" :key="index">
                <el-card :body-style="{padding: '0px', height: '110px'}">
                  <div>
                    <div class="color-sub-grand padding-lr-10 padding-tb-10">
                      <div>
                        <i class="fa fa-bookmark"></i>
                        <span>{{item.major_name}}</span>
                      </div>
                      <div class="font-size-12 margin-top-10 padding-left-5">
                        <div>
                          <i class="fa fa-home color-disabeld"></i>
                          <span class="color-muted">
                          <label class="color-disabeld">{{$t("编号")}}:</label>
                          {{item.major_no}}
                        </span>
                        </div>
                        <div class="margin-top-5">
                          <i class="fa fa-home color-disabeld"></i>
                          <span class="color-muted">
                          <label class="color-disabeld">{{$t("学院")}}:</label>
                          {{item.college_name}}
                        </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="text-right padding-lr-10">
                    <span>
                      <i class="fa fa-edit color-grand" @click="editInfo(item)"></i>
                      <i class="fa fa-trash color-danger" @click="deleteInfo(item)"></i>
                    </span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>

          <div class="layout-right-footer text-right">
            <!--<my-pagination :total="total" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>-->
            <span class="margin-right-10">{{$t("共")}} {{tableData.length}} {{$t("条")}}</span>
          </div>
        </div>
      </div>
    </layout-lr>

    <dialog-normal :visible="modalVisible" :title="$t('专业设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('所属学院')" prop="collegeId">
            <!--<el-input :disabled="form.id != ''" v-model="form.no" class="width-260"></el-input>-->
            <my-select :sel-value="form.collegeId" :options="collegeList" width-style="260" @change="handeChange"></my-select>
          </el-form-item>
          <el-form-item :label="$t('专业编号')" prop="majorNo">
            <el-input :disabled="form.id != ''" v-model="form.majorNo" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('专业名称')" prop="majorName">
            <el-input v-model="form.majorName" class="width-260"></el-input>
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
import MyElTree from "../../components/tree/MyElTree";
import DialogNormal from "../../components/utils/dialog/DialogNormal";
import MySelect from "../../components/MySelect";
import MyInputButton from "../../components/search/MyInputButton";
import mixins from "../../utils/mixins";
import {common} from "../../utils/api/url";
import {MessageError, MessageSuccess} from "../../utils/utils";
import majorValidater from "../../utils/validater/majorValidater";
export default {
  mixins: [mixins, majorValidater],
  components: {MyElTree,DialogNormal,MySelect,MyInputButton},
  data(){
    return {
      tableData: [],
      collegeList: [],
      subTitle: '',
      dialogLoading: false,
      modalVisible: false,
      visibleConfim: false,
      collegeData: '',
      form: {
        id: '',
        collegeId: '',
        collegeName: '',
        majorNo: '',
        majorName: ''
      }
    }
  },
  created() {
    this.init();
    this.initCollege();
  },
  methods: {
    init(data){
      let params = {
        collegeId: data ? data.id : '',
        majorName: this.form.searchKey
      };
      this.$axios(common.major_list, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data;
        }
      });
    },
    initCollege(){
      this.$axios(common.college_list).then(res => {
        this.collegeList = [];
        if(res.data.data){
          for (let i = 0; i < res.data.data.length; i++){
            this.collegeList.push({
              value: res.data.data[i].id,
              label: res.data.data[i].college_name
            });
          }
        }
      });
    },
    nodeClick(data){
      this.collegeData = data;
      this.form.collegeId = data.id;
      this.page = 1;
      this.init(data);
    },
    addInfo(){
      this.modalVisible = true;
    },
    editInfo(row){
      this.form = {
        id: row.id,
        collegeName: row.college_name,
        majorName: row.major_name,
        collegeId: row.college_id,
        majorNo: row.major_no
      }
      this.modalVisible = true;
    },
    deleteInfo(row){
      this.form.id = row.id;
      this.subTitle = row.major_name;
      this.visibleConfim = true;
    },
    search(data){
      this.form.searchKey = data.input;
      this.page = 1;
      this.init();
    },
    closeDialog(event){
      this.form = {
        id: '',
        collegeId: '',
        collegeName: '',
        majorNo: '',
        majorName: ''
      };
      this.subTitle = "";
      //this.collegeList = [];
      if (this.$refs['form']){
        this.$refs['form'].resetFields();
      }
    },
    cancelDialog(){
      this.modalVisible = false;
    },
    okDialog(event){
      let url = "";
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.dialogLoading = true;
          let params = {
            collegeId: this.form.collegeId,
            majorNo: this.form.majorNo,
            majorName: this.form.majorName
          };
          if (this.form.id != ""){
            url = common.major_edit;
            params['id'] = this.form.id;
          }else {
            url = common.major_add;
          }
          params = this.$qs.stringify(params);
          this.$axios.post(url, params, {loading: false}).then(res => {
            if (res.data.code == 200){
              this.modalVisible = false;
              this.init(this.collegeData);
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
        id: this.form.id
      }
      url = common.major_delete;
      params = this.$qs.stringify(params);
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200){
          this.init(this.collegeData);
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
    handeChange(data){
      this.form.collegeId = data;
    }
  }
}
</script>

<style scoped>
.container {

}
</style>
