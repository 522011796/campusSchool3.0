<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">奖惩审批</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <audit-status-relieve-button size="small" @click="handleClick"></audit-status-relieve-button>
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
            :label="$t('日期')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.apply_time ? $moment(scope.row.apply_time).format("YYYY-MM-DD") : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.apply_time ? $moment(scope.row.apply_time).format("YYYY-MM-DD") : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('学生')">
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
            :label="$t('级别')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.str2}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.str2}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :filter-multiple="false"
            column-key="rpStatus"
            :filters="filterJCRpStatus">
            <template slot="header">
              <span>{{$t('奖惩状态')}}</span>
              <span v-if="filterRpStatusText != ''" class="font-size-12 color-disabeld moon-content-text-ellipsis-class">{{filterRpStatusText}}</span>
            </template>
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <my-audit-pu-status :status="scope.row.punishStatus"></my-audit-pu-status>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <my-audit-pu-status :status="scope.row.punishStatus"></my-audit-pu-status>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="level_name"
            :label="$t('状态/审核人')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <my-audit-status :status="scope.row.status" :handler="scope.row.handler_name"></my-audit-status>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <my-audit-status :status="scope.row.status" :handler="scope.row.handler_name"></my-audit-status>
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
              <i class="fa fa-cog color-danger" @click="detailInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <!--审批详细-->
    <drawer-layout-right @changeDrawer="closeDrawerDialog" :hide-footer="false" :visible="drawerVisible" size="550px" :title="$t('奖惩审批')" @right-close="cancelDrawDialog">
      <div slot="content">
        <my-audit-detail type="PunishmentApply" :sel-value="dataAudit"></my-audit-detail>
      </div>
      <div slot="footer">
        <audit-button :sel-value="dataAudit" @ok="handleOk" @no="handleNo" @cancel="handleCancel" @remove="removeAudit"></audit-button>
      </div>
    </drawer-layout-right>

    <dialog-normal :visible="dialogRemove" :title="$t('解除申请')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="formRemove" :rules="rulesRemove" ref="formRemove" label-width="140px">
          <el-form-item :label="$t('附件')">
            <div v-if="images.length > 0" v-for="(item, index) in images" :key="index" class="pull-left" style="position: relative;margin-right:10px;top: 10px">
              <i class="fa fa-close" style="position: absolute; right: -5px; top: -5px;font-size: 12px" @click="deleteRemoveImg(index)"></i>
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
  import MyPagination from "../../../components/MyPagination";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {MessageError, MessageSuccess, MessageWarning} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyUserType from "../../../components/utils/MyUserType";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyInputButton from "../../../components/search/MyInputButton";
  import levelValidater from "../../../utils/validater/levelValidater";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import AuditStatusButton from "../../../components/utils/button/AuditStatusButton";
  import AuditButton from "../../../components/utils/auditDetail/AuditButton";
  import AuditStatusRelieveButton from "~/components/utils/button/AuditStatusRelieveButton";
  export default {
    mixins: [mixins, levelValidater],
    components: {
      AuditStatusRelieveButton,
      MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal,DrawerLayoutRight,AuditStatusButton,AuditButton},
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
        dialogRemove: false,
        clearTime: '',
        action: '',
        subTitle: '',
        dataAudit: {},
        status: '',
        auditObjectItem: {},
        msgType: '',
        filterRpStatusText: '',
        errorStudent: '',
        uploadFileUrl: common.upload_file,
        images: [],
        form: {
          id: '',
          name: '',
          type: ''
        },
        formRemove: {
          file: '',
          des: '',
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
          applyTypeCode: 'PunishmentApply',
          applyTimeBegin: this.searchDate ? this.searchDate[0] : '',
          applyTimeEnd: this.searchDate ? this.searchDate[1] : '',
          status: this.status,
          searchKey: this.searchKey,
          punishStatus: this.rpStatus,
        };
        this.$axios.get(common.audit_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      addInfo(){
        this.modalVisible = true;
      },
      detailInfo(row){
        let params = {
          id:row.id ? row.id : row.id
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
      search(data){
        this.searchKey = data.input;
        this.page = 1;
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
      closeDrawerDialog(event){
        this.auditObjectItem = {};
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      deleteRemoveImg(event, index){
        //this.form.file = "";
        this.images.splice(index, 1);
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'rpStatus'){
            this.filterRpStatusText = "";
            this.rpStatus = value[item][0];
            for (let i = 0; i < this.filterJCRpStatus.length; i++){
              if (this.rpStatus == this.filterJCRpStatus[i].value){
                this.filterRpStatusText = this.filterJCRpStatus[i].text;
              }
            }
          }
        }
        this.page = 1;
        this.init();
      },
      uploadFileSuccess(res, file){
        if (res.code == 200){
          this.images.push(res.data.url);
        }else {

        }
      },
      handleClick(data){
        this.page = 1;
        this.status = data;
        this.init();
      },
      handleChange(data){
        this.searchDate = data;
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
      removeAudit(data){
        this.dialogRemove = true;
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      cancelRemoveDialog(){
        this.dialogRemove = false;
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
                this.drawerVisible = false;
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
        this.images = [];
        this.errorStudent = "";
        this.filterAddLevels = [];
        this.subTitle = "";
        this.pageStudent = 1;
        this.numStudent = 20;
        this.searchStudentKey = "";
        this.dialogLoading = false;
        if (this.$refs.studentRef){
          this.$refs.studentRef.inputValue = "";
        }
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
</style>
