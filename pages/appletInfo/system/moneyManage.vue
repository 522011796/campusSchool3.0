<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">费控管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="6">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("新增规则")}}</el-button>
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
            :label="$t('规则名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.control_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.control_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('费用名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.cost_name_list}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.cost_name_list}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('已占用')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.control_used}}/{{scope.row.control_total}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('超标限制')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{excessLimitTypeInfo(scope.row.excess_limit, 'set')}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{excessLimitTypeInfo(scope.row.excess_limit, 'set')}}</span>
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
                  <label v-if="scope.row.enable" class="color-success">{{$t("启用")}}</label>
                  <label v-if="!scope.row.enable" class="color-warning">{{$t("禁用")}}</label>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <label v-if="scope.row.enable" class="color-success">{{$t("启用")}}</label>
                  <label v-if="!scope.row.enable" class="color-warning">{{$t("禁用")}}</label>
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
              <el-select multiple v-model="form.order" style="width: 350px" @change="handleChange($event, 1)" placeholder="请选择">
                <el-option
                  v-for="item in orderOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
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
                  <template v-if="item.range == 1">
                    <a href="javascript:;" class="font-size-12 color-grand" @click="handleEdit($event, index)">{{$t("编辑")}}</a>
                    <span v-if="item.range2.length > 0" class="color-success font-size-12">({{$t("已设置")}})</span>
                    <span v-if="item.range2.length == 0" class="color-muted font-size-12">({{$t("未设置")}})</span>
                  </template>
                  <span v-else-if="item.range == 3">{{$t("提交人")}}</span>
                  <span v-else>--</span>
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

      <div slot="footer" class="padding-lr-10">
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
          <my-el-tree-block ref="deptRefSel" type="4" sub-type="" node-key="department_path" :show-filter="false" :show-campus="false" :show-checkbox="true" :defaultCheckedKeys="defaultCheckedKeys"></my-el-tree-block>
        </div>
      </div>
      <div slot="footer" class="padding-lr-10">
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
  import {excessLimitType, MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import appTypeValidater from "~/utils/validater/appTypeValidater";
  import moneyManageValidater from "~/utils/validater/moneyManageValidater";
  import MySelect from "~/components/MySelect";

  export default {
    components: {MySelect},
    mixins: [mixins, moneyManageValidater],
    data(){
      return {
        subTitle: '',
        tableData: [],
        tableCostData: [],
        defaultCheckedKeys: [],
        defaultCheckedKeysBak: [],
        dialogType: false,
        visibleConfim: false,
        dialogLoading: false,
        dialogEdit: false,
        dialogIndex: '',
        searchKey: '',
        typeOptions: [
          {label: this.$t("年"), text: this.$t("年"), value: 1},
          {label: this.$t("季度"), text: this.$t("季度"), value: 3},
          {label: this.$t("月"), text: this.$t("月"), value: 4},
          {label: this.$t("天"), text: this.$t("天"), value: 5}
        ],
        rangeOptions: [
          {label: this.$t("提交人"), text: this.$t("提交人"), value: 3},
          {label: this.$t("部门"), text: this.$t("部门"), value: 1}
        ],
        orderOptions: [],
        processOptions: [],
        form: {
          id: '',
          name: '',
          order: [],
          maxLimit: '1',
          maxLimitExtra: '',
          rule: [
            {
              type: '',
              range: '',
              range2: [],
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
        this.$axios.get(common.monery_controller_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initCost(){
        let params = {};
        this.$axios.get(common.cost_list, {params: params}).then(res => {
          if (res.data.data){
            let orderOptions = [];
            for (let i = 0; i < res.data.data.length; i++){
              orderOptions.push({
                label: res.data.data[i].cost_name,
                text: res.data.data[i].cost_name,
                value: res.data.data[i].cost_id,
              });
            }
            this.orderOptions = orderOptions;
          }
        });
      },
      initFlow(formId){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.server_form_template_form_process_page, {params: params}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.list.length; i++){
              array.push({
                label: res.data.data.list[i].process_name,
                value: res.data.data.list[i].id+"",
              });
            }
            this.processOptions = array;
          }
        });
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      addInfo(){
        this.initCost();
        this.initFlow();
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
        let params = {
          controlId: item.id
        };
        this.$axios.get(common.monery_controller_info, {params: params}).then(res => {
          if (res.data.data){
            let costIdList = [];
            if (res.data.data.cost_id_list && res.data.data.cost_id_list != ''){
              let costIdTempList = res.data.data.cost_id_list.split(",");
              for (let i = 0; i < costIdTempList.length; i++){
                costIdList.push(parseInt(costIdTempList[i]));
              }
            }

            let ruleList = [];
            let ruleTempList = res.data.data.controlRuleList;
            for (let i = 0; i < ruleTempList.length; i++){
              let ruleRangeList = [];
              if (ruleTempList[i].rule_range_list && ruleTempList[i].rule_range_list != ''){
                ruleRangeList = ruleTempList[i].rule_range_list.split(",");
              }
              ruleList.push({
                id: ruleTempList[i].id,
                type: ruleTempList[i].time_type,
                range: ruleTempList[i].rule_type,
                range2: ruleTempList[i].rule_type == 3 ? [] : ruleRangeList,
                budgetMoney: ruleTempList[i].control_total
              });
            }

            this.form = {
              id: res.data.data.id,
              name: res.data.data.control_name,
              maxLimit: res.data.data.excess_limit+'',
              maxLimitExtra: res.data.data.excess_process_id != null && res.data.data.excess_process_id != '' ? res.data.data.excess_process_id+'' : '',
              order: costIdList,
              rule: ruleList
            };
          }
        });
        this.initCost();
        this.initFlow();
        this.dialogType = true;
      },
      deleteInfo(item){
        this.form.id = item.id;
        this.visibleConfim = true;
      },
      excessLimitTypeInfo(str, type){
        return excessLimitType(str, type);
      },
      statusInfo(item, status){
        let params = {
          controlId: item.id,
          enable: status
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.monery_controller_enable, params).then(res => {
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
          this.form.maxLimitExtra = event;
        }
      },
      handleTableChange(event, index, type){
        if (type == 1){
          this.$set(this.form.rule[index], 'type', event);
        }else if (type == 2){
          this.$set(this.form.rule[index], 'range', event);
        }
      },
      handleEdit(event, index){
        this.dialogIndex = index;
        this.defaultCheckedKeys = this.form.rule[index].range2;
        this.defaultCheckedKeysBak = this.form.rule[index].range2;

        if(this.$refs['deptRefSel']){
          console.log(1,this.defaultCheckedKeys);
          this.$refs.deptRefSel.$refs.tree.setCheckedKeys(this.form.rule[index].range2);
        }

        this.dialogEdit = true;
      },
      addTableItem(index){
        let obj = {
          type: '',
          range: '',
          range2: [],
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
          order: [],
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
        this.defaultCheckedKeys = [];
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
        this.defaultCheckedKeys = this.form.rule[this.dialogIndex].range2;
        this.defaultCheckedKeysBak = [];
        this.dialogIndex = '';
        if(this.$refs['deptRefSel']){
          console.log(this.defaultCheckedKeys);
          this.$refs.deptRefSel.$refs.tree.setCheckedKeys([]);
        }
        this.dialogEdit = false;
      },
      okEditDialog(){
        let deptArr  = this.setAreaChildren(this.$refs.deptRefSel.$refs.tree.getCheckedNodes(), 'dept');
        this.$set(this.form.rule[this.dialogIndex], 'range2', deptArr);
        console.log(this.form.rule);
        this.dialogEdit = false;
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
              }else if (this.form.rule[i]['range'] != ''){
                if (this.form.rule[i]['range'] == 1){
                  if (this.form.rule[i]['range2'].length == 0){
                    error++;
                  }
                }
              }else if (!req.test(this.form.rule[i]['budgetMoney'])){
                error++;
              }
            }

            if (error > 0){
              MessageWarning(this.$t("规则数据存在未设置或者异常，请检查！"));
              return;
            }

            let ruleArray = [];
            for (let i = 0; i < this.form.rule.length; i++){
              ruleArray.push({
                timeType: this.form.rule[i].type,
                ruleType: this.form.rule[i].range,
                appletControlRuleRanges: this.form.rule[i].range2 == "提交人" ? [] : this.form.rule[i].range2,
                controlTotal: this.form.rule[i].budgetMoney
              });
            }

            let params = {
              controlName: this.form.name,
              excessLimit: this.form.maxLimit,
              appletCostIds: this.form.order
            };
            if (this.form.maxLimit == 3){
              if (this.form.maxLimitExtra != null && this.form.maxLimitExtra == ""){
                MessageWarning(this.$t("请设置流程！"));
                return;
              }
              params['excessProcessId'] = this.form.maxLimitExtra;
            }
            if (ruleArray.length > 0){
              params['appletControlRuleValList'] = ruleArray;
            }
            if (this.form.id != ''){
              params['id'] = this.form.id;
            }
            this.dialogLoading = true;
            url = common.monery_controller_save;
            //params = this.$qs.stringify(params);
            this.$axios.post(url, JSON.stringify(params), {dataType: 'stringfy'}).then(res => {
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
          controlId: this.form.id
        }
        url = common.monery_controller_del;
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
      setAreaChildren(tree, type){//迭代方法
        let _self = this;
        let obj = [];
        if (tree && tree.length > 0){
          tree.map(function (item,index) {
            if (type == 'dept'){
              obj.push(item.department_path);
            }else {
              obj.push(item.id);
            }

            if(item['children'] != undefined && item['children'].length > 0){
              _self.setAreaChildren(item['children']);
            }
          });
        }
        return obj;
      }
    }
  }
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
</style>
