<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">迎新设置</template>

      <div slot="tab">
        <el-row>
          <el-col :span="6">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("创建年度")}}</el-button>
            <el-button size="small" type="warning"  icon="el-icon-plus" @click="payInfo($event)">{{$t("缴费链接")}}</el-button>
          </el-col>
          <el-col :span="18" class="text-right">
            <div class="layout-inline">
              <my-select class="layout-item width-150" size="small" :placeholder="$t('选择年度')" :options="yearOptions" :clearable="true" @change="handleSearchChange($event, 1)"></my-select>
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
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center"><span>{{$moment(scope.row.createTime).format("YYYY-MM-DD HH:mm:ss")}}</span></div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{$moment(scope.row.createTime).format("YYYY-MM-DD HH:mm:ss")}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('年度')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.year}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.year}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.enrollName}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.enrollName}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
<!--          <el-table-column-->
<!--            align="center"-->
<!--            :label="$t('登录方式')">-->
<!--            <template slot-scope="scope">-->
<!--              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">-->
<!--                <div class="text-center">{{scope.row.category_name}}</div>-->
<!--                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">-->
<!--                  <span>{{scope.row.category_name}}</span>-->
<!--                </div>-->
<!--              </el-popover>-->
<!--            </template>-->
<!--          </el-table-column>-->
          <el-table-column
            align="center"
            :label="$t('开放周期')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <span>{{$moment(scope.row.beginTime).format("YYYY-MM-DD")}}</span>
                  /
                  <span>{{$moment(scope.row.endTime).format("YYYY-MM-DD")}}</span>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{$moment(scope.row.beginTime).format("YYYY-MM-DD")}}</span>
                  /
                  <span>{{$moment(scope.row.endTime).format("YYYY-MM-DD")}}</span>
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
                  <span v-if="scope.row.current == true">{{$t("当前使用")}}</span>
                  <span v-else>--</span>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span v-if="scope.row.current == true" class="color-success">{{$t("当前使用")}}</span>
                  <span v-else>--</span>
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
              <el-tooltip v-if="!scope.row.current" class="item" effect="dark" :content="$t('设为当前')" placement="top">
                <i class="fa fa-cog color-warning margin-right-5" @click="statusInfo(scope.row, true)"></i>
              </el-tooltip>

              <i class="fa fa-edit color-grand margin-right-5" @click="editInfo(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal top="10vh" width-style="650px" :visible="dialogSetting" :title="$t('年度设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('选择年度')" prop="year">
            <el-date-picker
              v-model="form.year"
              type="year"
              :placeholder="$t('选择年度')"
              style="width: 350px"
              value-format="yyyy"
              @change="handleFormChange($event, 1)">
            </el-date-picker>
          </el-form-item>
          <el-form-item :label="$t('年度名称')" prop="name">
            <el-input v-model="form.name" class="width-350"></el-input>
          </el-form-item>
<!--          <el-form-item :label="$t('默认登录')" prop="ty[e">-->
<!--            <my-select :sel-value="form.type" :options="typeOptions" width-style="260" @change="handleFormChange($event, 2)"></my-select>-->
<!--          </el-form-item>-->
          <el-form-item :label="$t('开放周期')" prop="time">
            <el-date-picker
              unlink-panels
              v-model="form.time"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width: 350px"
              format="yyyy-MM-dd HH:mm"
              @change="handleFormChange($event, 3)">
            </el-date-picker>
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


    <dialog-normal top="10vh" width-style="650px" :visible="dialogPay" :title="$t('链接设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="formPay" :rules="rulesPay" ref="formPay" label-width="140px">
          <el-form-item :label="$t('缴费链接')" prop="url">
            <el-input v-model="formPay.url" class="width-350"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okPayDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {MessageError, MessageSuccess} from "~/utils/utils";
  import newSettingValidater from "~/utils/validater/newSettingValidater";
  import MyNormalDialog from "~/components/utils/dialog/MyNormalDialog";
  import newSettingPayValidater from "~/utils/validater/newSettingPayValidater";
  export default {
    components: {MyNormalDialog},
    mixins: [mixins,newSettingValidater,newSettingPayValidater],
    data(){
      return {
        subTitle: '',
        visibleConfim: false,
        tableData: [],
        dialogSetting: false,
        dialogLoading: false,
        dialogPay: false,
        searchKey: '',
        yearOptions: [],
        typeOptions: [],
        form: {
          id: '',
          year: '',
          name: '',
          type: '',
          time: [],
          url: ''
        },
        formPay: {
          url: ''
        }
      }
    },
    created() {
      this.initYear();
      this.init();
    },
    methods: {
      initYear(){
        let year = [];
        for (let i = 0; i < 10; i++){
          year.push({
            label: 2020+(i+1),
            text: 2020+(i+1),
            value: 2020+(i+1),
          });
        }
        this.yearOptions = year;
      },
      init(){
        let params = {
          page: this.page,
          num: this.num,
          year: this.searchKey
        };
        this.$axios.get(common.enroll_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      getPayInfo(){
        let params = {};
        this.$axios.get(common.enroll_pay_link_get, {params: params}).then(res => {
          if (res.data.data){
            this.formPay = {
              url: res.data.data.enrollPayUrl
            };
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
      handleSearchChange(event){
        this.searchKey = event;
        this.page = 1;
        this.init();
      },
      handleFormChange(event, type){
        if (type == 1){
          this.form.year = event;
        }else if (type == 2){
          this.form.type = event;
        }else if (type == 3){
          this.form.time = [this.$moment(event[0]).format("YYYY-MM-DD HH:mm"), this.$moment(event[1]).format("YYYY-MM-DD HH:mm")];
        }
      },
      payInfo(){
        this.getPayInfo();
        this.dialogPay = true;
      },
      addInfo(){
        this.dialogSetting = true;
      },
      editInfo(item){
        this.form = {
          id: item.id,
          name: item.enrollName,
          year: item.year,
          type: '',
          time: [this.$moment(item.beginTime).format("YYYY-MM-DD HH:mm"), this.$moment(item.endTime).format("YYYY-MM-DD HH:mm")],
        };
        this.dialogSetting = true;
      },
      deleteInfo(item){
        this.form.id = item.id;
        this.visibleConfim = true;
      },
      statusInfo(item, status){
        let params = {
          id: item.id
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.enroll_set_current, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      closeDialog(event){
        this.form = {
          id: '',
          year: '',
          name: '',
          type: '',
          time: [],
          url: ''
        };
        this.formPay = {
          url: ''
        };
        this.subTitle = "";
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
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
        url = common.enroll_del;
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
      cancelDialog(){
        this.dialogSetting = false;
        this.dialogPay = false;
      },
      okDialog(){
        let url = common.enroll_add;
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              year: this.form.year,
              enrollName: this.form.name,
              beginTime: this.form.time[0],
              endTime: this.form.time[1],
              url: this.form.url
            };
            if (this.form.id != ''){
              params['id'] = this.form.id;
              url = common.enroll_edit;
            }
            params = this.$qs.stringify(params);
            this.$axios.post(url, params).then(res => {
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
      },
      okPayDialog(){
        let url = common.enroll_pay_link_add;
        this.$refs['formPay'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              enrollPayUrl: this.formPay.url
            };
            params = this.$qs.stringify(params);
            this.$axios.post(url, params, {loading: false}).then(res => {
              if (res.data.code == 200){
                this.dialogPay = false;
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
</style>
