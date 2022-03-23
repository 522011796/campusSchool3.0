<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">考勤设置</template>

      <div slot="tab">
        <el-row>
          <el-col :span="6">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加分组")}}</el-button>
          </el-col>
          <el-col :span="18" class="text-right">
            <!--<div class="layout-inline text-right">
              <my-select size="small" :clearable="true" :group="true" :options="typeList" class="layout-item" @change="handleSelect"></my-select>
              <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
              <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('登录人')" @click="search"></my-input-button>
            </div>-->
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
            :label="$t('名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.group_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.group_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('教室')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <el-tag size="mini" type="success" v-for="(item, index) in scope.row.room_no_list.split(',')" :key="index">{{item}}</el-tag>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <el-tag size="mini" type="success" v-for="(item, index) in scope.row.room_no_list.split(',')" :key="index">{{item}}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('考勤时间')">
            <template slot-scope="scope">
              <span>{{scope.row.roll_call_time}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
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

    <dialog-normal :visible="modalVisible" :title="$t('设置分组')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('组名')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
            <!--<my-select :sel-value="form.type" :options="filterTypes" width-style="260" @change="handleSelect"></my-select>-->
          </el-form-item>
          <el-form-item :label="$t('时间设置')">
            <div class="margin-bottom-10">
              <el-row>
                <el-col :span="6">
                  <span>{{$t("默认教学时间")}}</span>
                </el-col>
                <el-col :span="18">
                  <div class="text-right layout-inline">
                    <span class="layout-item">
                      <my-check :sel-value="form.switchContinue" @change="handleChange($event, 1)">
                        {{$t("连堂签到")}}
                      </my-check>
                    </span>
                    <span class="layout-item">
                      <my-select size="small" width-style="120" :sel-value="form.continueSection" :options="sectionList" @change="handleChange($event, 3)"></my-select>
                    </span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <el-table
              ref="refTable"
              :data="tableSettingData"
              header-cell-class-name="custom-table-cell-bg"
              size="mini"
              border
              :header-row-style="{lineHeight: '30px'}"
              style="width: 100%">
              <el-table-column
                align="center"
                :label="$t('节数')">
                <template slot-scope="scope">
                  <span>{{scope.row.sect}}</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('上课时间')">
                <template slot-scope="scope">
                  <span>{{scope.row.start_time}}</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('课时')">
                <template slot-scope="scope">
                  <span>{{scope.row.duration}}{{$t("分钟")}}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>
          <el-form-item :label="$t('考勤设置')">
            <div class="color-muted">
              <div>
                <span>{{$t("上课刷脸设置:上课前")}}</span>
                <span><el-input size="mini" v-model="form.upBefore" style="width: 50px"></el-input></span>
                <span>{{$t("分钟")}}</span>
              </div>
              <div>
                <span>{{$t("迟到设置:迟到")}}</span>
                <span><el-input size="mini" v-model="form.late" style="width: 50px"></el-input></span>
                <span>{{$t("分钟记为迟到")}}</span>
              </div>
              <div>
                <div>
                  <span><my-check :sel-value="form.earlyEnable" @change="handleChange($event, 2)"></my-check></span>
                  <span>{{$t("早退刷脸设置:")}}</span>
                </div>
                <div>
                  <span>{{$t("下课前")}}</span>
                  <span><el-input size="mini" :disabled="!form.earlyEnable" v-model="form.downBefore" style="width: 50px"></el-input></span>
                  <span>{{$t("分钟(适用于AI摄像机)")}}</span>
                </div>
                <div>
                  <span>{{$t("下课后")}}</span>
                  <span><el-input size="mini" :disabled="!form.earlyEnable" v-model="form.downAfter" style="width: 50px"></el-input></span>
                  <span>{{$t("分钟(适用于AI一体机)")}}</span>
                </div>
              </div>
            </div>
            <div>
              <span class="color-danger">{{errorTips}}</span>
            </div>
          </el-form-item>
          <el-form-item :label="$t('考勤地点')" prop="classList">
            <el-popover
              placement="top"
              width="700"
              trigger="click"
              @show="handleShowTeacher(3)">
              <div>
                <classroom-tree-and-list ref="popverPartRef" :sel-arr="form.classList" set-type="check" @select="handleSelUser"></classroom-tree-and-list>
              </div>
              <el-button slot="reference" type="success" plain size="small">{{$t("添加")}}</el-button>
            </el-popover>
            <span class="color-warning margin-left-10">
              <i class="fa fa-user"></i>
              {{$t("已选择")}}{{form.classList.length}}{{$t("个教室")}}
            </span>
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
  import {MessageError, MessageSuccess} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyUserType from "../../../components/utils/MyUserType";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyInputButton from "../../../components/search/MyInputButton";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import ClassroomTreeAndList from "../../../components/utils/treeAndList/ClassroomTreeAndList";
  import classAttendSettingValidater from "../../../utils/validater/classAttendSettingValidater";
  import MyCheck from "../../../components/MyCheck";
  export default {
    mixins: [mixins, classAttendSettingValidater],
    components: {
      MyCheck,
      MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal,ClassroomTreeAndList},
    data(){
      return {
        tableData: [],
        tableSettingData: [],
        searchDate: [],
        typeList: [],
        sectionList: [],
        searchKey: '',
        visible: false,
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        clearTime: '',
        action: '',
        subTitle: '',
        errorTips: '',
        form: {
          id: '',
          name: '',
          upBefore: '',
          late: '',
          downBefore: '',
          downAfter: '',
          classList: [],
          earlyEnable: false,
          switchContinue: false,
          continueSection: ''
        }
      }
    },
    created() {
      this.init();
    },
    methods: {
      async init(){
        await this.getSessionInfo();
        this.initPage();
        this.initSetting();
      },
      initPage(){
        let params = {
          page: this.page,
          num: this.num
        };
        this.$axios.get(common.attend_class_setting_page, {params:params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initSetting(){
        let params = {
          page: 1,
          num: 9999,
          termId: this.currentTermId,
          syearId: this.currentYearId
        };
        this.sectionList = [];
        this.$axios.get(common.week_list, {params:params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.period.length; i++){
              if (i != 0){
                this.sectionList.push({
                  label: res.data.data.period[i].sect + this.$t("节连堂"),
                  value: res.data.data.period[i].sect
                });
              }
            }
            this.tableSettingData = res.data.data.period;
          }
        });
      },
      addInfo(){
        this.modalVisible = true;
      },
      editInfo(row){
        let roomIds = row.room_id_list ? row.room_id_list.split(",") : [];
        let arr = [];
        this.form = {
          id: row.id,
          name: row.group_name,
          upBefore: row.begin_class_minute,
          late: row.late_class_minute,
          downBefore: row.leave_class_minute,
          downAfter: row.over_class_minute,
          earlyEnable: row.switch_over_class,
          switchContinue: row.switch_continue,
          continueSection: row.continue_section
        };

        for (let i = 0; i < roomIds.length; i++){
          arr.push({
            id: roomIds[i]
          });
        }
        this.$set(this.form, 'classList', arr);
        this.modalVisible = true;
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
      handleSelect(data){
        this.form.type = data;
      },
      deleteInfo(row){
        this.form.id = row.id;
        this.subTitle = row.group_name;
        this.visibleConfim = true;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.form.id
        };
        url = common.attend_class_setting_del;
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
      cancelDialog(){
        this.modalVisible = false;
      },
      closeDialog(event){
        this.form = {
          id: '',
          name: '',
          upBefore: '',
          late: '',
          downBefore: '',
          downAfter: '',
          classList: [],
          earlyEnable: false,
          switchContinue: false,
          continueSection: ''
        };
        this.subTitle = "";
        if (this.$refs['popverPartRef']){
          this.$refs.popverPartRef._handleResetChange();
        }
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      okDialog(event){
        let url = "";
        let regNum = /^\d+$|^\d+[.]?\d+$/;
        let userIds = [];
        this.errorTips = "";
        this.$refs['form'].validate((valid) => {
          if (valid) {
            if (!regNum.test(this.form.upBefore) || !regNum.test(this.form.late)){
              this.errorTips = this.$t("请设置考勤相关的信息，并只能为整数");
              return;
            }
            if (this.form.earlyEnable){
              if (!regNum.test(this.form.downBefore) || !regNum.test(this.form.downAfter)){
                this.errorTips = this.$t("请设置考勤相关的信息，并只能为整数");
                return;
              }
            }
            this.dialogLoading = true;
            let params = {
              groupName: this.form.name,
              beginClassMinute: this.form.upBefore,
              overClassMinute: this.form.downAfter,
              leaveClassMinute: this.form.downBefore,
              lateClassMinute: this.form.late,
              switchOverClass: this.form.earlyEnable,
              continueSection: this.form.continueSection,
              switchContinue: this.form.switchContinue,
            };
            if (this.form.classList.length > 0){
              for (let i = 0; i < this.form.classList.length; i ++ ){
                userIds.push(this.form.classList[i].id);
              }
              params['roomIds'] = userIds.join();
            }
            if (this.form.id != ""){
              params['id'] = this.form.id;
            }

            url = common.attend_class_setting;
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
      handleShowTeacher(type){
        this.$refs.popverPartRef._handleOpen();
      },
      handleSelUser(data){
        let arr = [];
        this.form.classList = data;
      },
      handleChange(data, type){
        if (type == 1){
          this.form.switchContinue = data;
        }else if (type == 2){
          this.form.earlyEnable = data;
        }else if (type == 3){
          this.form.continueSection = data;
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
