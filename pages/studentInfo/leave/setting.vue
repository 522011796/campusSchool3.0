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
                  <i class="fa fa-check-square-o color-grand" @click="setLevel(scope.row)"></i>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>

        <div class="layout-right-tab margin-top-10">
          <el-row>
            <el-col :span="6">
              <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo('setType')">{{$t("类型管理")}}</el-button>
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
            prop="typeName"
            :label="$t('类型')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="socre_name_sub"
            :label="$t('公休日')">

            <template slot-scope="scope">
              <span class="color-danger" v-if="scope.row.freeSwich == 0">{{$t("关")}}</span>
              <span class="color-success" v-if="scope.row.freeSwich == 1">{{$t("开")}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="socre_name"
            :label="$t('时间范围')">

            <template slot-scope="scope">
              <div v-if="scope.row.freeSwich == 0">--</div>
              <div v-if="scope.row.freeSwich == 1">
                <span>
                  <label>{{weekNoInfo(scope.row.freeWeekNo1)}}</label>
                  <label>{{scope.row.freeHour1}}:{{scope.row.freeMinuts1}}</label>
                </span>
                -
                <span>
                  <label>{{weekNoInfo(scope.row.freeWeekNo2)}}</label>
                  <label>{{scope.row.freeHour2}}:{{scope.row.freeMinuts2}}</label>
                </span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-cog margin-right-5 color-warning" @click="editInfo(scope.row, 'setTime')"></i>
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
  export default {
    mixins: [mixins, leaveTypeValidater],
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
        clearTime: '',
        action: '',
        subTitle: '',
        levelId: '',
        grade1: '',
        grade2: '',
        type: '',
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
        this.$axios.get(common.leave_query_type_list, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
          }
        });
      },
      initLevel(){
        this.$axios.get(common.leave_query_level_list).then(res => {
          if (res.data.data){
            this.tableLevelData = res.data.data.list;
          }
        });
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
          freeSwich: ''+row.freeSwich,
          freeWeekNo1: row.freeWeekNo1 ? ''+row.freeWeekNo1 : '1',
          freeHour1: row.freeHour1 ? ''+row.freeHour1 : '00',
          freeMinuts1: row.freeMinuts1 ? ''+row.freeMinuts1 : '00',
          freeWeekNo2: row.freeWeekNo2 ? ''+row.freeWeekNo2 : '1',
          freeHour2: row.freeHour2 ? ''+row.freeHour2 : '00',
          freeMinuts2: row.freeMinuts2 ? ''+row.freeMinuts2 : '00',
          freeData1: row.freeHour1 ? (row.freeHour1+":"+row.freeMinuts1 + '') : '00:00',
          freeData2: row.freeHour2 ? (row.freeHour2+":"+row.freeMinuts2 + '') : '00:00',
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
      jumpPage(data){
        this.page = data;
        this.init();
      },
      weekNoInfo(val){
        return weekNoText2(val);
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      closeDialog(event){
        this.form = {
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
        };
        this.subTitle = "";
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
              params['freeSwich'] = this.form.freeSwich == "" ? 0 : this.form.freeSwich;
              params['freeWeekNo1'] = this.form.freeWeekNo1;
              params['freeHour1'] = this.form.freeHour1;
              params['freeMinuts1'] = this.form.freeMinuts1;
              params['freeWeekNo2'] = this.form.freeWeekNo2;
              params['freeHour2'] = this.form.freeHour2;
              params['freeMinuts2'] = this.form.freeMinuts2;
            }else if (this.type == 'setTime'){
              params['typeName'] = this.form.typeName;
              params['freeSwich'] = this.form.freeSwich;
              params['freeWeekNo1'] = this.form.freeWeekNo1;
              params['freeHour1'] = this.form.freeHour1;
              params['freeMinuts1'] = this.form.freeMinuts1;
              params['freeWeekNo2'] = this.form.freeWeekNo2;
              params['freeHour2'] = this.form.freeHour2;
              params['freeMinuts2'] = this.form.freeMinuts2;
            }
            if (this.form.id != ''){
              params['id'] = this.form.id;
            }

            url = common.leave_query_level_add;
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
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.form.id
        };
        url = common.leave_query_level_del;
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
