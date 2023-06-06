<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">费控管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="6">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("新增费用")}}</el-button>
          </el-col>
          <el-col :span="18" class="text-right">
            <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('名称')" @click="search"></my-input-button>
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
            :label="$t('费用名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('费用类别')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('费用类型')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('控制方式')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('范围类型')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('额度标准<=')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('超标限制')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('状态')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="140">
            <template slot-scope="scope">
              <i v-if="scope.row.enable" class="fa fa-stop-circle color-warning margin-right-5" @click="statusInfo(scope.row, false)"></i>
              <i v-if="!scope.row.enable" class="fa fa-play-circle color-success margin-right-5" @click="statusInfo(scope.row, true)"></i>

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

    <drawer-layout-right tabindex="0" :wrapper-closable="false" @close="closeDialog" @changeDrawer="closeDialog" :visible="dialogType" size="700px" :title="$t('规则设置')" @right-close="cancelDialog">
      <div slot="content">
        <div class="margin-top-10">
          <el-form :model="form" :rules="rules" ref="form" label-width="100px">
            <el-form-item :label="$t('规则名称')" prop="name">
              <el-input v-model="form.name" class="width-350"></el-input>
            </el-form-item>
            <el-form-item :label="$t('选择费用')" prop="order">
              <my-select :sel-value="form.order" :options="orderOptions" :width-style="350" @change="handleChange($event, 1)"></my-select>
            </el-form-item>
            <el-form-item :label="$t('超标限制')">
              <div>
                <el-radio-group v-model="form.maxLimit">
                  <el-radio label="1">{{ $t('仅提醒') }}</el-radio>
                  <el-radio label="2">{{ $t('禁止提交') }}</el-radio>
                  <el-radio label="3">{{ $t('审批加签') }}</el-radio>
                </el-radio-group>
                <my-select v-if="form.maxLimit == 3" :placeholder="$t('请选择审批流程')" :sel-value="form.maxLimitExtra" :options="processOptions" :width-style="350" @change="handleChange($event, 2)"></my-select>
              </div>
            </el-form-item>
          </el-form>

          <div>
            <div style="margin-left: 32px;">
              <span>{{$t('规则设置')}}</span>
            </div>
            <table class="custom-table" style="width: 650px;margin-left: 32px;margin-top: 10px;font-size: 12px">
              <tr>
                <th width="20%">{{$t("控制方式")}}</th>
                <th width="20%">{{$t("范围类型")}}</th>
                <th width="25%">{{$t("具体范围")}}</th>
                <th width="20%">{{$t("额度标准<=")}}({{$t("元")}})</th>
                <th width="15%">{{$t("操作")}}</th>
              </tr>
              <tbody>
              <tr v-for="(item, index) in form.rule" :key="item.id">
                <td>
                  <my-select size="mini" :placeholder="$t('请选择')" :sel-value="item.type" :options="typeOptions" :width-style="90" @change="handleTableChange($event, index, 1)"></my-select>
                </td>
                <td>
                  <my-select size="mini" :placeholder="$t('请选择')" :sel-value="item.range" :options="rangeOptions" :width-style="90" @change="handleTableChange($event, index, 2)"></my-select>
                </td>
                <td>
                  <a href="javascript:;" class="font-size-12 color-grand" @click="handleEdit($event, index)">{{$t("编辑")}}</a>
                </td>
                <td>
                  <el-input size="mini" style="width: 80px" v-model="item.budgetMoney"></el-input>
                </td>
                <td>
                  <i class="fa fa-plus color-success" @click="addTableItem(index)"></i>
                  <i v-if="index != 0" class="fa fa-minus color-danger margin-left-5" @click="minTableItem(index)"></i>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" :wrapper-closable="false" @close="closeEditDialog" @changeDrawer="closeEditDialog" :visible="dialogEdit" size="650px" :title="$t('范围设置')" @right-close="cancelEditDialog">
      <div slot="content">
        <div class="margin-top-10">

        </div>
        <div>

        </div>
      </div>
      <div slot="footer">
        <el-button size="small" @click="cancelEditDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okEditDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {MessageError, MessageSuccess} from "~/utils/utils";
  import appTypeValidater from "~/utils/validater/appTypeValidater";
  import moneyManageValidater from "~/utils/validater/moneyManageValidater";

  export default {
    mixins: [mixins, moneyManageValidater],
    data(){
      return {
        subTitle: '',
        tableData: [],
        dialogType: false,
        visibleConfim: false,
        dialogLoading: false,
        dialogEdit: false,
        dialogIndex: '',
        searchKey: '',
        typeOptions: [
          {label: this.$t("年"), text: this.$t("年"), value: 1},
          {label: this.$t("季度"), text: this.$t("季度"), value: 2},
          {label: this.$t("月"), text: this.$t("月"), value: 3},
          {label: this.$t("天"), text: this.$t("天"), value: 4}
        ],
        rangeOptions: [
          {label: this.$t("提交人"), text: this.$t("提交人"), value: 1},
          {label: this.$t("部门"), text: this.$t("部门"), value: 2}
        ],
        orderOptions: [],
        form: {
          id: '',
          name: '',
          order: '',
          maxLimit: '1',
          maxLimitExtra: '',
          rule: [
            {
              type: '',
              range: '',
              range2: '',
              budgetMoney: '0'
            }
          ]
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
          searchKey: this.searchKey
        };
        this.$axios.get(common.server_type_list, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
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
      editInfo(item){
        this.form = {
          id: item.id,
          name: item.category_name,
          enable: item.enable
        };
        this.dialogType = true;
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
        this.$axios.post(common.server_type_enable, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      handleChange(event, type){
        if (type == 1){
          this.form.order = event;
        }else if (type == 2){
          this.form.warningLimitExtra = event;
        }
      },
      handleTableChange(event, index, type){

      },
      handleEdit(event, index){
        this.dialogIndex = index;
        this.dialogEdit = true;
      },
      addTableItem(index){
        let obj = {
          type: '',
          range: '',
          range2: '',
          budgetMoney: '0'
        };
        this.form.rule.splice(index+1, 0, obj);
      },
      minTableItem(index){
        this.form.rule.splice(index, 1);
      },
      closeDialog(event){
        this.form = {
          id: '',
          name: '',
          order: '',
          maxLimit: '1',
          maxLimitExtra: '',
          rule: [
            {
              type: '',
              range: '',
              range2: '',
              budgetMoney: '0'
            }
          ]
        };
        this.subTitle = "";
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      cancelDialog(){
        this.dialogType = false;
      },
      closeEditDialog(event){
        this.dialogIndex = '';
        this.dialogEdit = false;
      },
      cancelEditDialog(){
        this.dialogIndex = '';
        this.dialogEdit = false;
      },
      okEditDialog(){

      },
      okDialog(){
        let url = '';
        let error = 0;
        let req = /^([\+]?(([1-9]\d*)|(0)))([.]\d{0,2})?$/;
        this.$refs['form'].validate((valid) => {
          if (valid) {
            for (let i = 0; i < this.form.rule.length; i++){
              if (this.form.rule[i]['type'] == ''){
                error++;
              }else if (this.form.rule[i]['range'] == ''){
                error++;
              }else if (this.form.rule[i]['range2'].length == 0){
                error++;
              }else if (!req.test(this.form.rule[i]['budgetMoney'])){
                error++;
              }
            }

            if (error > 0){
              MessageWarning(this.$t("规则数据存在未设置或者异常，请检查！"));
              return;
            }

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
      }
    }
  }
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
</style>
