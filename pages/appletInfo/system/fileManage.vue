<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">附件管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="24" class="text-right">
            <my-date-picker size="small" :clearable="true" type="daterange" :sel-value="searchTime" @change="handleChangeTime($event,1)"></my-date-picker>
            <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('请输入信息')" @click="search"></my-input-button>
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
            :label="$t('上传时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{$moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm")}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{$moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm")}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('附件名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.fileDataList.name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.fileDataList.name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('大小')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.fileDataList.size}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.fileDataList.size}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('所属人')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.realName}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.realName}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('所属部门')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.departmentName ? scope.row.departmentName : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.departmentName ? scope.row.departmentName : '--'}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('来源服务')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.fileDataList.source}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.fileDataList.source}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('关联单据号')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.formApplyNo}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <a href="javascript:;" class="color-grand" @click="detailOrderInfo(scope.row)">{{scope.row.formApplyNo}}</a>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('关联费用')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row['applyData'] ? scope.row['applyData']['cost_allName20230501'] : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row['applyData'] ? scope.row['applyData']['cost_allName20230501'] : '--'}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="140">
            <template slot-scope="scope">
              <a href="javascript:;" class="color-success" @click="downInfo(scope.row, false)">{{$t("下载")}}</a>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal top="10vh" :visible="dialogType" :title="$t('类别设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('类别名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
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

    <drawer-layout-right tabindex="0" @close="closeDrawerDialog" :visible="dialogVisible" size="600px" :title="$t('详细查看')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <form-system-tags-detail
          :detail-type="detailType"
          :data-detail-obj="dataDetailObj"
          :data-main-detail-obj = "dataMainDetailObj"
          :extra-data-list="tableOrderDetailData"
          :detail-apply-audit-list="detailApplyAuditList"
          :draw-height="drawHeight8.height"
          @changeDetailType="changeDetailType">

        </form-system-tags-detail>
      </div>
      <div slot="footer" class="padding-lr-10">
<!--        <audit-button v-if="detailType == 2" :sel-value="dataMainDetailObj" @ok="handleOk" @no="handleNo" @cancel="handleCancel"></audit-button>-->
        <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDetailDialog" :visible="dialogOrderDetailVisible" size="550px" :title="$t('详细信息')" @right-close="cancelDrawDetailDialog">

    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {
    auditStatusBgColor, auditStatusColor,
    auditStatusText, formXmText,
    MessageError,
    MessageSuccess,
    MessageWarning,
    objectStatus,
    objectType
  } from "~/utils/utils";
  import FormSystemTagsDetail from "~/components/utils/formDetail/FormSystemTagsDetail.vue";
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight.vue";
  import appTypeValidater from "~/utils/validater/appTypeValidater";

  export default {
    components: {DrawerLayoutRight, FormSystemTagsDetail},
    mixins: [mixins, appTypeValidater],
    data(){
      return {
        subTitle: '',
        tableData: [],
        detailType: 1,
        dataDetailObj: {},
        dataMainDetailObj: {},
        detailApplyAuditList: [],
        tableOrderDetailData: [],
        dialogType: false,
        visibleConfim: false,
        dialogLoading: false,
        dialogVisible: false,
        dialogOrderDetailVisible: false,
        searchKey: '',
        searchTime: [],
        form: {
          id: '',
          name: '',
          enable: true
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
          searchKey: this.searchKey,
          beginTime: this.searchTime && this.searchTime.length > 0 ? this.searchTime[0] : '',
          endTime: this.searchTime && this.searchTime.length > 0 ? this.searchTime[1] : ''
        };
        this.$axios.get(common.file_manage_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.total;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initReal(id){
        let params = {
          id: id,
          page: 1,
          num: 9999
        };
        this.$axios.get(common.object_xm_real_page, {params: params}).then(res=> {
          if (res.data.code == 200) {
            this.tableOrderDetailData = res.data.data.list;
          }
        });
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      addInfo(){
        this.dialogType = true;
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
      objectTypeInfo(str, type){
        return objectType(type, str);
      },
      objectStatusInfo(str, type){
        return objectStatus(type, str);
      },
      auditStatusTextInfo(str){
        return auditStatusText(str);
      },
      auditColorInfo(val){
        return auditStatusBgColor(val);
      },
      auditTextColorInfo(val){
        return auditStatusColor(val);
      },
      formXmTextInfo(value){
        return formXmText(value);
      },
      editInfo(item){
        this.form = {
          id: item.id,
          name: item.category_name,
          enable: item.enable
        };
        this.dialogType = true;
      },
      downInfo(item){
        let url = common.file_manage_download + "?url=" + item.fileDataList.url + "&fileName="  + item.fileDataList.name;
        window.open(url, "_blank");
      },
      detailOrderListInfo(){
        this.dialogOrderDetailVisible = true;
      },
      changeDetailType(event, type){
        this.detailType = type;
      },
      closeDialog(event){
        this.form = {
          id: '',
          name: '',
          enable: true
        };
        this.subTitle = "";
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      closeDrawerDialog(event){
        this.dataDetailObj = {};
        this.dataMainDetailObj = {};
        this.detailApplyAuditList = [];
        this.detailType = 1;
        this.dialogVisible = false;
      },
      closeDrawerDetailDialog(){
        this.dialogOrderDetailVisible = false;
      },
      cancelDrawDetailDialog(){
        this.dialogOrderDetailVisible = false;
      },
      cancelDialog(){
        this.dialogType = false;
      },
      cancelDrawDialog(){
        this.dataDetailObj = {};
        this.dialogVisible = false;
      },
      okDialog(){
        let url = '';
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              categoryName: this.form.name,
            };
            if (this.form.id != ''){
              params['id'] = this.form.id;
            }
            url = common.server_type_save;
            params = this.$qs.stringify(params);
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.dialogType = false;
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
      handleChangeTime(data){
        this.searchTime = data;
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
        url = common.server_type_delete;
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
      detailOrderInfo(item){
        let params = {
          id: item.formApplyNo
        };
        this.$axios.get(common.server_form_audit_query, {params: params}).then(res=>{
          if (res.data.data){
            this.dataDetailObj = res.data.data['applyData'] ? res.data.data['applyData'] : {};
            this.dataMainDetailObj = res.data.data;
            this.detailApplyAuditList = res.data.data.handleList;
            if (res.data.data.formCode == 'XMGL'){
              this.initReal(item._id);
            }else if (res.data.data.formCode == 'XSHT' || res.data.data.formCode == 'CGHT' || res.data.data.formCode == 'TYHT'){
              let ruleList = [];
              //let count = res.data.data.applyData['ht_stage20230501'] ? res.data.data.applyData['ht_stage20230501'].value : 0;
              for (let i = 0; i < res.data.data.payableDataList.length; i++){
                ruleList.push({
                  stage: res.data.data.payableDataList[i].stage,
                  rate: res.data.data.payableDataList[i].rate,
                  amount: res.data.data.payableDataList[i].shouldAmount,
                  time: res.data.data.payableDataList[i].time,
                  des: res.data.data.payableDataList[i].des,
                });
              }
              this.tableOrderDetailData = ruleList;
            }
          }
        });

        this.dialogVisible = true;
      },
      handleOk(data,textarea){
        let params = {
          id: this.dataMainDetailObj.id ? this.dataMainDetailObj.id : this.dataMainDetailObj.id,
          status: 1,
          des: textarea
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_form_audit_handle, params).then(res => {
          if (res.data.code == 200){
            this.detailOrderInfo(this.dataMainDetailObj, this.detailInfoType);
            this.init();
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      },
      handleNo(data,textarea){
        let params = {
          id: this.dataMainDetailObj.id ? this.dataMainDetailObj.id : this.dataMainDetailObj.id,
          status: 2,
          des: textarea
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_form_audit_handle, params).then(res => {
          if (res.data.code == 200){
            this.detailOrderInfo(this.dataMainDetailObj, this.detailInfoType);
            this.init();
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      },
      handleCancel(data){
        let params = {
          id: this.dataMainDetailObj.id ? this.dataMainDetailObj.id : this.dataMainDetailObj.id,
          status: -1
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_form_audit_handle, params).then(res => {
          if (res.data.code == 200){
            this.detailOrderInfo(this.dataMainDetailObj, this.detailInfoType);
            this.init();
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
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
.block-item-row{
  height: 35px;
  line-height: 35px;
}
.header-block{
  height: 40px;
  line-height: 40px;
}
.detail-top-block{
  border-radius: 5px;
  background: #ffffff;
  height: 100px;
}
.detail-block{
  border-radius: 5px;
  background: #ffffff;
  padding: 10px 10px;
}
.detail-top-item-green-block{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #67C23A;
  position: relative;
  margin: 0 auto;
}
.detail-top-item-warning-block{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
//background: #67C23A;
  position: relative;
  margin: 0 auto;
}
.detail-top-item-error-block{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #F56C6C;
  position: relative;
  margin: 0 auto;
}
.detail-top-item-default-block{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #C0C4CC;
  position: relative;
  margin: 0 auto;
}
.rp-img{
  height: 50px;
  width: 50px;
  border: 1px solid #dddddd;
}
</style>
