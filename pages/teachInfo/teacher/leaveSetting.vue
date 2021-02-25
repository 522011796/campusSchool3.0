<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">请假设置</template>

      <div slot="content">
        <el-card :body-style="{padding: '10px 10px'}">
          <div>
            <div class="margin-bottom-10">
              <span class="leave-level-tag"></span>
              <span class="leave-level-title color-warning">{{$t("等级设置")}}</span>
            </div>
            <el-table
              ref="refLevelTable"
              :data="tableLevelData"
              border
              header-cell-class-name="custom-table-cell-bg"
              size="mini"
              style="width: 100%">
              <el-table-column
                align="center"
                prop="gradeName"
                :label="$t('等级名称')">
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('请假率范围')">

                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.grade1" style="width: 70px"></el-input>
                  -
                  <el-input size="mini" v-model="scope.row.grade2" style="width: 70px"></el-input>
                  <span>%</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="socre_type"
                width="80"
                :label="$t('操作')">
                <template slot-scope="scope">
                  <i class="fa fa-cog color-grand" @click="setLevel(scope.row)"></i>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>

        <div class="layout-right-tab margin-top-10">
          <el-row>
            <el-col :span="6">
              <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo('setType')">{{$t("类型管理")}}</el-button>
              <el-button size="small" type="warning"  icon="el-icon-time" @click="timeInfo()">{{$t("课时规则")}}</el-button>
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
            :label="$t('序号')">
            <template slot-scope="scope">
              {{scope.$index+1}}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="typeName"
            :label="$t('类型')">
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row, 'setType')"></i>
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <!--<my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>-->
          <span class="margin-right-10">{{$t("共")}} {{tableData.length}} {{$t("条")}}</span>
        </div>
      </div>
    </layout-tb>

    <dialog-normal :visible="modalVisible" :title="$t('类型管理')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('类型')" prop="typeName" v-if="type == 'setType'">
            <el-input v-model="form.typeName" class="width-260"></el-input>
          </el-form-item>

          <template v-if="type == 'setTime'">
            <el-form-item :label="$t('公休日')">
              <my-radio :sel-value="form.freeSwich" border :group="true" button :options="switchStatus" @change="handleChange"></my-radio>
            </el-form-item>
            <el-form-item :label="$t('开始时间')" prop="freeData1" class="layout-inline">
              <my-select class="layout-item" width-style="128" :sel-value="form.freeWeekNo1" :options="weekNoSelect" @change="handleSelect($event, 1)"></my-select>
              <el-time-picker
                :clearable="false"
                value-format="HH:mm"
                format="HH:mm"
                v-model="form.freeData1"
                :placeholder="$t('选择时间')"
                class="layout-item"
                style="width: 128px"
                @change="handleChangeTime($event, 1)">
              </el-time-picker>
            </el-form-item>
            <el-form-item :label="$t('结束时间')" prop="freeData2" class="layout-inline">
              <my-select class="layout-item" width-style="128" :sel-value="form.freeWeekNo2" :options="weekNoSelect" @change="handleSelect($event, 2)"></my-select>
              <el-time-picker
                :clearable="false"
                value-format="HH:mm"
                format="HH:mm"
                v-model="form.freeData2"
                :placeholder="$t('选择时间')"
                class="layout-item"
                style="width: 128px"
                @change="handleChangeTime($event, 2)">
              </el-time-picker>
            </el-form-item>
          </template>
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

    <dialog-normal :visible="modalTimeVisible" :title="$t('课时规划')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="formConf" :rules="rulesConf" ref="formConf" label-width="100px">
          <el-form-item :label="$t('小时规则:')">
            <div>
              <span>{{$t("请假 <= ")}}</span>
              <el-input v-model="formConf.ruleHour1" size="small" style="width: 80px"></el-input>
              <span>{{$t(" 小时,统计为0.5天")}}</span>
            </div>
            <div class="margin-top-5">
              <span>{{$t("请假 > ")}}</span>
              <el-input v-model="formConf.ruleHour2" size="small" style="width: 80px"></el-input>
              <span>{{$t(" <= ")}}</span>
              <el-input v-model="formConf.ruleHour3" size="small" style="width: 80px"></el-input>
              <span>{{$t(" 小时,统计为1天")}}</span>
            </div>
          </el-form-item>

          <el-form-item :label="$t('课时规则:')">
            <div>
              <div>
                <el-switch v-model="formConf.ruleClassSwich" active-color="#13ce66" inactive-color="#ff4949" @change="handleChangeEnable($event)"></el-switch>
              </div>
              <span>{{$t("请假 <= ")}}</span>
              <el-input v-model="formConf.ruleClass1" size="small" style="width: 80px"></el-input>
              <span>{{$t(" 节,统计为0.5天")}}</span>
            </div>
            <div class="margin-top-5">
              <span>{{$t("请假 > ")}}</span>
              <el-input v-model="formConf.ruleClass2" size="small" style="width: 80px"></el-input>
              <span>{{$t(" <= ")}}</span>
              <el-input v-model="formConf.ruleClass3" size="small" style="width: 80px"></el-input>
              <span>{{$t(" 节,统计为1天")}}</span>
            </div>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer">
        <span class="color-danger">{{errorTips}}</span>
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okTimeDialog() : ''">
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
  import {MessageError, MessageSuccess, MessageWarning, weekNoText2} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyUserType from "../../../components/utils/MyUserType";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyInputButton from "../../../components/search/MyInputButton";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MyNormalDialog from "../../../components/utils/dialog/MyNormalDialog";
  import MyRadio from "../../../components/MyRadio";
  import leaveTypeValidater from "../../../utils/validater/leaveTypeValidater";
  import leaveSettingValidater from "../../../utils/validater/leaveSettingValidater";
  export default {
    mixins: [mixins, leaveTypeValidater, leaveSettingValidater],
    components: {MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal,MyNormalDialog,MyRadio},
    data(){
      return {
        tableData: [],
        tableLevelData: [],
        searchDate: [],
        typeList: [],
        searchKey: '',
        visible: false,
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        modalTimeVisible: false,
        clearTime: '',
        action: '',
        subTitle: '',
        levelId: '',
        grade1: '',
        grade2: '',
        type: '',
        errorTips: '',
        form: {
          id: '',
          typeName: '',
          freeSwich: '',
          freeWeekNo1: '1',
          freeHour1: '00',
          freeMinuts1: '00',
          freeWeekNo2: '1',
          freeHour2: '00',
          freeMinuts2: '00',
          freeData1: '00:00',
          freeData2: '00:00'
        },
        formConf: {
          ruleHour1: '',
          ruleHour2: '',
          ruleHour3: '',
          ruleClass1: '',
          ruleClass2: '',
          ruleClass3: '',
          ruleClassSwich: false,
        }
      }
    },
    created() {
      this.init();
      this.initLevel();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num
        };
        this.$axios.get(common.leave_ter_setting_config_type_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            /*this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;*/
          }
        });
      },
      initLevel(){
        this.$axios.get(common.leave_ter_setting_config_data).then(res => {
          if (res.data.data){
            this.tableLevelData = res.data.data.list;
          }
        });
      },
      initTimeConf(){
        this.$axios.get(common.leave_ter_setting_config_time_list).then(res => {
          if (res.data.data){
            this.formConf = {
              ruleHour1: res.data.data.ruleHour1,
              ruleHour2: res.data.data.ruleHour2,
              ruleHour3: res.data.data.ruleHour3,
              ruleClass1: res.data.data.ruleClass1,
              ruleClass2: res.data.data.ruleClass2,
              ruleClass3: res.data.data.ruleClass3,
              ruleClassSwich: res.data.data.ruleClassSwich == 0 ? false : true
            };
          }
        });
      },
      timeInfo(){
        this.initTimeConf();
        this.modalTimeVisible = true;
      },
      addInfo(type){
        this.type = type;
        this.modalVisible = true;
      },
      editInfo(row, type){
        this.type = type;
        this.form = {
          id: row.id,
          typeName: row.typeName,
        };
        this.modalVisible = true;
      },
      deleteInfo(row){
        this.form.id = row.id;
        this.subTitle = row.typeName;
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
        this.$axios.post(common.leave_ter_setting_config_save, params).then(res => {
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
      jumpPage(data){
        this.page = data;
        this.init();
      },
      weekNoInfo(val){
        return weekNoText2(val);
      },
      cancelDialog(){
        this.modalVisible = false;
        this.modalTimeVisible = false;
      },
      closeDialog(event){
        this.form = {
          id: '',
          typeName: ''
        };
        this.formConf = {
          ruleHour1: '',
          ruleHour2: '',
          ruleHour3: '',
          ruleClass1: '',
          ruleClass2: '',
          ruleClass3: '',
          ruleClassSwich: false,
        };
        this.subTitle = "";
        this.modalTimeVisible = false;
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      okDialog(event){
        let url = "";
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {};
            if (this.type == 'setType'){
              params['typeName'] = this.form.typeName;
            }else if (this.type == 'setTime'){
              params['typeName'] = this.form.typeName;
            }
            if (this.form.id != ''){
              params['id'] = this.form.id;
            }

            url = common.leave_ter_setting_config_type_add;
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
      okTimeDialog(){
        let url = common.leave_ter_setting_config_time_save;
        let reg = /^(?!0+(\.0*)?$)\d+(\.\d{1})?$/;
        this.errorTips = "";
        if (!reg.test(this.formConf.ruleHour1) || !reg.test(this.formConf.ruleHour2) || !reg.test(this.formConf.ruleHour3)){
          this.errorTips = this.$t("小时规则时间必须为非0整数或者一位小数");
          return;
        }
        if (!reg.test(this.formConf.ruleClass1) || !reg.test(this.formConf.ruleClass2) || !reg.test(this.formConf.ruleClass3)){
          this.errorTips = this.$t("小时规则时间必须为非0整数或者一位小数");
          return;
        }

        let params = {
          ruleHour1: this.formConf.ruleHour1,
          ruleHour2: this.formConf.ruleHour2,
          ruleHour3: this.formConf.ruleHour3,
          ruleClass1: this.formConf.ruleClass1,
          ruleClass2: this.formConf.ruleClass2,
          ruleClass3: this.formConf.ruleClass3,
          ruleClassSwich: this.formConf.ruleClassSwich == false ? 0 : 1
        };
        params = this.$qs.stringify(params);
        this.$axios.post(url, params, {loading: false}).then(res => {
          if (res.data.code == 200){
            this.modalTimeVisible = false;
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.dialogLoading = false;
        });
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.form.id
        };
        url = common.leave_ter_setting_config_type_del;
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
        switch (type) {
          case 1:
            this.form.freeWeekNo1 = data;
            break;
          case 2:
            this.form.freeWeekNo2 = data;
            break;
        }
      },
      handleChange(data){
        this.form.freeSwich = data;
      },
      handleChangeEnable(data){
        this.formConf.ruleClassSwich = data;
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
