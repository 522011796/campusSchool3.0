<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">学年学期</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addYear($event)">{{$t("添加学年")}}</el-button>
          </el-col>
        </el-row>
      </div>
      <div slot="content">
        <el-table
          ref="refTable"
          lazy
          :load="load"
          :data="tableData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          row-key="id"
          :max-height="tableHeight.height"
          style="width: 100%"
          @cell-click="cellClick"
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
          <el-table-column
            align="left"
            prop="name"
            :label="$t('学年/学期')">
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('开始时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{ $moment(scope.row.start_time).format("YYYY-MM-DD") }}</div>
                <span slot="reference" class="name-wrapper">
                  {{ $moment(scope.row.start_time).format("YYYY-MM-DD") }}
                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('结束时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{ $moment(scope.row.end_time).format("YYYY-MM-DD") }}</div>
                <span slot="reference" class="name-wrapper">
                  {{ $moment(scope.row.end_time).format("YYYY-MM-DD") }}
                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="状态">
            <template slot-scope="scope">
              <div v-if="!scope.row.sch_year_id">
                <!--<el-tag type="warning" size="small" v-if="!scope.row.current" @click="setCurrentYear(scope.row)"><i class="fa fa-cog"></i>{{$t("设为当前学年")}}</el-tag>-->
                <el-tag type="warning" size="small" v-if="!scope.row.current">{{$t("非当前学年")}}</el-tag>
                <el-tag type="success" size="small" v-else><i class="fa fa-bookmark margin-right-5"></i>{{$t("当前学年")}}</el-tag>
              </div>
              <div v-if="scope.row.sch_year_id && scope.row.sch_year_id != ''">
                <el-tag type="info" size="small" v-if="!scope.row.current" @click="setCurrentTerm(scope.row)"><i class="fa fa-cog"></i>{{$t("设为当前学期")}}</el-tag>
                <el-tag type="success" size="small" v-else><i class="fa fa-flag margin-right-5"></i>{{$t("当前学期")}}</el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <span v-if="!scope.row.sch_year_id">
                <i class="fa fa-plus-circle margin-right-5 color-success" @click="addTerm(scope.row)"></i>
                <i class="fa fa-edit margin-right-5 color-grand" @click="editYear(scope.row)"></i>
                <i class="fa fa-trash color-danger" @click="deleteYear(scope.row)"></i>
              </span>
              <span v-if="scope.row.sch_year_id && scope.row.sch_year_id != ''">
                <i class="fa fa-cogs margin-right-5 color-warning" @click="setTerm(scope.row)"></i>
                <i class="fa fa-edit margin-right-5 color-grand" @click="editTerm(scope.row, scope.$index)"></i>
                <i class="fa fa-trash color-danger" @click="deleteTerm(scope.row)"></i>
              </span>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal :visible="modalVisible" :title="$t('学年设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('学年名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('开始时间')" prop="startTime">
            <my-date-picker :sel-value="form.startTime" width-style="260" @change="handleChangeTime($event, 1)"></my-date-picker>
          </el-form-item>
          <el-form-item :label="$t('结束时间')" prop="endTime">
            <my-date-picker :sel-value="form.endTime" width-style="260" @change="handleChangeTime($event, 2)"></my-date-picker>
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

    <dialog-normal :visible="modalTermVisible" :title="$t('学期设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form ref="formTerm" :rules="rulesTerm" :model="formTerm" label-width="140px">
          <el-form-item :label="$t('学期编码')" prop="no">
            <el-input v-model="formTerm.no" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('学期名称')" prop="name">
            <el-input v-model="formTerm.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('开始时间')" prop="startTime">
            <my-date-picker :sel-value="formTerm.startTime" width-style="260" @change="handleChangeTime($event, 3)"></my-date-picker>
          </el-form-item>
          <el-form-item :label="$t('结束时间')" prop="endTime">
            <my-date-picker :sel-value="formTerm.endTime" width-style="260" @change="handleChangeTime($event, 4)"></my-date-picker>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okTermDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" content="确认需要删除该信息？" :detail="subDetail" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

    <my-normal-dialog :visible.sync="visibleSetConfim" :loading="dialogLoading" title="提示" :content="setContent" :detail="subDetail" @ok-click="handleOkSetChange" @cancel-click="handleCancelSetChange" @close="closeDialog"></my-normal-dialog>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerVisible" :loading="drawerLoading" size="550px" :title="$t('教学设置')" @right-close="cancelDrawDialog">
      <div slot="content">
        <span tabindex="1"></span>
        <el-form ref="formSetTerm" :model="formSetTerm" label-width="100px">
          <el-form-item :label="$t('学期时间')">
            <el-tag type="warning"><i class="fa fa-calendar"></i> {{$moment(formSetTerm.termStart).format("YYYY-MM-DD")}}</el-tag>
            -
            <el-tag type="warning"><i class="fa fa-calendar"></i> {{$moment(formSetTerm.termEnd).format("YYYY-MM-DD")}}</el-tag>
          </el-form-item>
          <el-form-item :label="$t('开始时间')">
            <my-date-picker :disabled="!formSetTerm.current" v-if="formSetTerm.startTime" :sel-value="formSetTerm.startTime" width-style="300" @change="handleChangeTime($event, 5)"></my-date-picker>
          </el-form-item>
          <el-form-item :label="$t('教学周数')">
            <my-select :disabled="!formSetTerm.current" :sel-value="formSetTerm.weekTotal" :options="getWeekTotal()" width-style="300" @change="handeChangeSelect($event,1)"></my-select>
            <div>
              <my-radio :disabled="!formSetTerm.current" :sel-value="formSetTerm.weekType" label="1" @change="handleChangeRadio">{{$t("统一教学周(每周的教学日和教学时间相同)")}}</my-radio>
              <my-radio :disabled="!formSetTerm.current" :sel-value="formSetTerm.weekType" label="2" @change="handleChangeRadio">{{$t("单双周(每月单双周教学周的教学日和教学时间不同)")}}</my-radio>
            </div>
          </el-form-item>
          <el-form-item :label="$t('教学日')">
            <div v-if="formSetTerm.weekType == 1">
              <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day ? formSetTerm.day['one'] : false" @change="changeCheckBox($event, 'day', 'one')">{{$t("周一")}}</my-check>
              <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day ? formSetTerm.day['two'] : false" @change="changeCheckBox($event, 'day', 'two')">{{$t("周二")}}</my-check>
              <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day ? formSetTerm.day['three'] : false" @change="changeCheckBox($event, 'day', 'three')">{{$t("周三")}}</my-check>
              <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day ? formSetTerm.day['four'] : false" @change="changeCheckBox($event, 'day', 'four')">{{$t("周四")}}</my-check>
              <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day ? formSetTerm.day['five'] : false" @change="changeCheckBox($event, 'day', 'five')">{{$t("周五")}}</my-check>
              <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day ? formSetTerm.day['six'] : false" @change="changeCheckBox($event, 'day', 'six')">{{$t("周六")}}</my-check>
              <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day ? formSetTerm.day['seven'] : false" @change="changeCheckBox($event, 'day', 'seven')">{{$t("周日")}}</my-check>
            </div>
            <div v-if="formSetTerm.weekType == 2">
              <div>
                <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day1 ? formSetTerm.day1['one'] : false" @change="changeCheckBox($event, 'day1', 'one')">{{$t("周一")}}</my-check>
                <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day1 ? formSetTerm.day1['two'] : false" @change="changeCheckBox($event, 'day1', 'tow')">{{$t("周二")}}</my-check>
                <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day1 ? formSetTerm.day1['three'] : false" @change="changeCheckBox($event, 'day1', 'three')">{{$t("周三")}}</my-check>
                <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day1 ? formSetTerm.day1['four'] : false" @change="changeCheckBox($event, 'day1', 'four')">{{$t("周四")}}</my-check>
                <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day1 ? formSetTerm.day1['five'] : false" @change="changeCheckBox($event, 'day1', 'five')">{{$t("周五")}}</my-check>
                <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day1 ? formSetTerm.day1['six'] : false" @change="changeCheckBox($event, 'day1', 'six')">{{$t("周六")}}</my-check>
                <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day1 ? formSetTerm.day1['seven'] : false" @change="changeCheckBox($event, 'day1', 'seven')">{{$t("周日")}}</my-check>
              </div>
              <div>
                <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day2 ? formSetTerm.day2['one'] : false" @change="changeCheckBox($event, 'day2', 'one')">{{$t("周一")}}</my-check>
                <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day2 ? formSetTerm.day2['two'] : false" @change="changeCheckBox($event, 'day2', 'two')">{{$t("周二")}}</my-check>
                <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day2 ? formSetTerm.day2['three'] : false" @change="changeCheckBox($event, 'day2', 'three')">{{$t("周三")}}</my-check>
                <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day2 ? formSetTerm.day2['four'] : false" @change="changeCheckBox($event, 'day2', 'four')">{{$t("周四")}}</my-check>
                <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day2 ? formSetTerm.day2['five'] : false" @change="changeCheckBox($event, 'day2', 'five')">{{$t("周五")}}</my-check>
                <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day2 ? formSetTerm.day2['six'] : false" @change="changeCheckBox($event, 'day2', 'six')">{{$t("周六")}}</my-check>
                <my-check :disabled="!formSetTerm.current" :sel-value="formSetTerm.day2 ? formSetTerm.day2['seven'] : false" @change="changeCheckBox($event, 'day2', 'seven')">{{$t("周日")}}</my-check>
              </div>
            </div>
          </el-form-item>
          <el-form-item :label="$t('每日课时')">
            <my-select :disabled="!formSetTerm.current" :sel-value="formSetTerm.courseTime" :options="setOptions(this.currentSeciton)" width-style="300" @change="handeChangeSelect($event,2)"></my-select>
            <div class="margin-top-5">
              <table class="custom-table">
                <tr>
                  <th width="10%">{{$t("节数")}}</th>
                  <th width="55%">{{$t("上课时间")}}</th>
                  <th width="35%">{{$t("课时")}}</th>
                </tr>
                <tbody>
                  <tr v-for="(item, index) in formSetTerm.courseTimeArr" :key="item.id">
                    <td>{{item.sect}}</td>
                    <td>
                      <a href="javascript:;" class="color-grand" v-if="item.editStartTime == false" @click="formSetTerm.current ? changeStartTime(item, index) : ''">{{item.start_time}}</a>
                      <span v-if="item.editStartTime == true">
                        <el-time-picker :clearable="false" size="mini" value-format="HH:mm" format="HH:mm" v-model="item.start_time" style="width: 100px"></el-time-picker>
                        <el-button size="mini" type="primary" plain @click="setItemStartTime(item, index)">{{$t("确定")}}</el-button>
                      </span>
                    </td>
                    <td>
                      <a href="javascript:;" class="color-grand" v-if="item.editCourseTime == false" @click="formSetTerm.current ? changeCourseTime(item, index) : ''">{{item.duration}}{{$t("分钟")}}</a>
                      <span v-if="item.editCourseTime == true">
                        <el-input size="mini" style="width: 50px" v-model="item.duration"></el-input>
                        <el-button size="mini" type="primary" plain @click="setItemCourseTime(item, index)">{{$t("确定")}}</el-button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <span class="color-danger">{{errorTips}}</span>
          <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
          <el-button :disabled="!formSetTerm.current" size="small" type="primary" :loading="drawerLoading" @click="okDrawDialog">{{$t("设置")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import mixins from "../../utils/mixins";
  import LayoutTb from "../../components/Layout/LayoutTb";
  import MyInputButton from "../../components/search/MyInputButton";
  import MyPagination from "../../components/MyPagination";
  import DialogNormal from "../../components/utils/dialog/DialogNormal";
  import MyNormalDialog from "../../components/utils/dialog/MyNormalDialog";
  import DrawerLayoutRight from "../../components/utils/dialog/DrawerLayoutRight";
  import MyDatePicker from "../../components/MyDatePicker";
  import MySelect from "../../components/MySelect";
  import MyRadio from "../../components/MyRadio";
  import MyCheck from "../../components/MyCheck";
  import {common} from "../../utils/api/url";
  import {
    MessageSuccess,
    MessageError,
    setChildren,
    auditStatusColor,
    getWeekTotalSelect,
    setSelectOptions, MessageWarning
  } from "../../utils/utils";
  import yearAndTermValidater from "../../utils/validater/yearAndTermValidater";
  export default {
    mixins: [mixins, yearAndTermValidater],
    components: {LayoutTb,MyInputButton,MyPagination,DialogNormal,MyNormalDialog,MyDatePicker,DrawerLayoutRight,MySelect,MyRadio,MyCheck},
    data(){
      return {
        expands: [],
        setContent: '',
        modalVisible: false,
        modalTermVisible: false,
        drawerVisible: false,
        visibleConfim: false,
        visibleSetConfim: false,
        dialogLoading: false,
        loading: false,
        drawerLoading: false,
        subDetail: '',
        g_row: '',
        g_sub_index: '',
        g_year_id: '',
        g_term_id: '',
        g_status: '',
        weekTotal: [],
        errorTips: '',
        form: {
          oprType: '',
          id: '',
          name: '',
          startTime: '',
          endTime: ''
        },
        formTerm: {
          id: '',
          no: '',
          name: '',
          startTime: '',
          endTime: '',
          schYearId: ''
        },
        formSetTerm: {
          id: '',
          schYearId: '',
          termId: '',
          current: '',
          year: '',
          termStart: '',
          termEnd: '',
          startTime: '',
          weekTotal: '',
          weekType: '',
          day: {
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false
          },
          day1: {
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false
          },
          day2: {
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false
          },
          courseTime: '',
          courseTimeArr: [],
          courseTimeBakArr: []
        },
        tableData: [],
        maps:new Map(),
        dataMaps: new Map()
      }
    },
    created() {
      this.init();
    },
    methods: {
      init(){
        let groupArr = [];
        let params = {
          page: this.page,
          num: this.num
        };
        this.$axios.get(common.year_list, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['hasChildren'] = true;
            }
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initTerm(year,resolve){
        let groupArr = [];
        let params = {
          page: 1,
          num: 999,
          schYearId: year
        };
        this.$axios.get(common.term_list, {params: params, loading: false}).then(res => {
          if (res.data.data){
            resolve(res.data.data.list);
          }
        });
      },
      load(tree, treeNode, resolve) {
        const pid = tree.id;
        this.g_row = tree.id;
        this.maps.set(pid,{tree,treeNode,resolve});
        this.initTerm(tree.id, resolve);
      },
      addYear(){
        this.modalVisible = true;
      },
      addTerm(row){
        this.formTerm.schYearId = row.id;
        this.modalTermVisible = true;
      },
      editYear(row){
        this.form = {
          oprType: '',
          id: row.id,
          name: row.name,
          startTime: this.$moment(row.start_time).format("YYYY-MM-DD"),
          endTime:  this.$moment(row.end_time).format("YYYY-MM-DD")
        };
        this.modalVisible = true;
      },
      deleteYear(row){
        this.form.id = row.id;
        this.visibleConfim = true;
      },
      async setTerm(row){
        await this.getSessionInfo();
        await this.getCurrentWeekInfo(this.campusId);
        let params = {
          termId: row.id,
          syearId: row.sch_year_id,
          num: 10000
        };
        this.$axios.get(common.get_term, {params: params}).then(res => {
          if (!row.current && JSON.stringify(res.data.data) == "{}"){
            MessageWarning(this.$t("没有教学设置"));
            return;
          }else if (row.current && JSON.stringify(res.data.data) == "{}"){
            let arr = [];
            this.formSetTerm = {
              id: '',
              year: '',
              current: row.current,
              schYearId: row.sch_year_id,
              termId: row.id,
              termStart: row.start_time,
              termEnd: row.end_time,
              startTime: this.$moment(row.start_time).format('YYYY-MM-DD'),
              weekTotal: 1,
              weekType: "1",
              courseTime: this.currentSeciton,
              day: {
                one: false,
                two: false,
                three: false,
                four: false,
                five: false,
                six: false,
                seven: false
              },
              day1: {
                one: false,
                two: false,
                three: false,
                four: false,
                five: false,
                six: false,
                seven: false
              },
              day2: {
                one: false,
                two: false,
                three: false,
                four: false,
                five: false,
                six: false,
                seven: false
              }
            };
            for (let i = 0; i < this.currentSeciton; i++){
              arr.push({
                duration: "0",
                editCourseTime: false,
                editStartTime: false,
                sect: i+1,
                start_time: '00:00',
                teach_set_id: '00:00'
              });
            }
            this.$set(this.formSetTerm,'courseTimeArr', arr);
            this.modalTermVisible = true;
          }else {
            if (res.data.code == 200){
              let data = res.data.data;
              this.formSetTerm = {
                id: '',
                year: '',
                current: row.current,
                schYearId: row.sch_year_id,
                termId: row.id,
                termStart: row.start_time,
                termEnd: row.end_time,
                startTime: this.$moment(data.teachSetting.teachStartTime).format('YYYY-MM-DD'),
                weekTotal: data.teachSetting.weekNum,
                weekType: data.unitys ? '1' : '2',
                courseTime: data.teachSetting.section,
                day: {
                  one: false,
                  two: false,
                  three: false,
                  four: false,
                  five: false,
                  six: false,
                  seven: false
                },
                day1: {
                  one: false,
                  two: false,
                  three: false,
                  four: false,
                  five: false,
                  six: false,
                  seven: false
                },
                day2: {
                  one: false,
                  two: false,
                  three: false,
                  four: false,
                  five: false,
                  six: false,
                  seven: false
                }
              };

              if (data.teachSetting.unityId){
                this.formSetTerm.day.one = data.unitys.one;
                this.formSetTerm.day.two = data.unitys.two;
                this.formSetTerm.day.three = data.unitys.three;
                this.formSetTerm.day.four = data.unitys.four;
                this.formSetTerm.day.five = data.unitys.five;
                this.formSetTerm.day.six = data.unitys.six;
                this.formSetTerm.day.seven = data.unitys.seven;
              }else {
                this.formSetTerm.day1.one = data.singles.one;
                this.formSetTerm.day1.two = data.singles.two;
                this.formSetTerm.day1.three = data.singles.three;
                this.formSetTerm.day1.four = data.singles.four;
                this.formSetTerm.day1.five = data.singles.five;
                this.formSetTerm.day1.six = data.singles.six;
                this.formSetTerm.day1.seven = data.singles.seven;

                this.formSetTerm.day2.one = data.doubles.one;
                this.formSetTerm.day2.two = data.doubles.two;
                this.formSetTerm.day2.three = data.doubles.three;
                this.formSetTerm.day2.four = data.doubles.four;
                this.formSetTerm.day2.five = data.doubles.five;
                this.formSetTerm.day2.six = data.doubles.six;
                this.formSetTerm.day2.seven = data.doubles.seven;
              }

              for (let i = 0; i < data.period.length; i++){
                this.$set(data.period[i],'editCourseTime', false);
                this.$set(data.period[i],'editStartTime', false);
              }
              //this.formSetTerm['courseTimeArr'] = data.period;
              this.formSetTerm.courseTimeBakArr = [].concat(data.period);
              this.$set(this.formSetTerm,'courseTimeArr', data.period);
            }
          }
          this.drawerVisible = true;
        });
      },
      editTerm(row, index){
        this.g_sub_index = index;
        this.formTerm = {
          id: row.id,
          no: row.term_code,
          name: row.name,
          startTime: this.$moment(row.start_time).format("YYYY-MM-DD"),
          endTime:  this.$moment(row.end_time).format("YYYY-MM-DD"),
          schYearId: row.sch_year_id
        };
        this.modalTermVisible = true;
      },
      deleteTerm(row){
        this.formTerm.id = row.id;
        this.visibleConfim = true;
      },
      cancelDialog(){
        this.modalVisible = false;
        this.modalTermVisible = false;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      closeDialog(event){
        this.form = {
          oprType: '',
          id: '',
          name: '',
          startTime: '',
          endTime: ''
        };
        this.formTerm = {
          id: '',
          no: '',
          name: '',
          startTime: '',
          endTime: '',
          schYearId: ''
        };
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        if (this.$refs['formTerm']){
          this.$refs['formTerm'].resetFields();
        }
      },
      okDialog(event){
        let url = "";
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              name: this.form.name,
              startTime: this.form.startTime + " 00:00:00",
              endTime: this.form.endTime + " 00:00:00"
            };
            if (this.form.id != ""){
              url = common.update_year;
              params['syearId'] = this.form.id;
            }else {
              url = common.add_year;
            }
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
      okTermDialog(event){
        let url = "";
        this.$refs['formTerm'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              termCode: this.formTerm.no,
              name: this.formTerm.name,
              startTime: this.formTerm.startTime + " 00:00:00",
              endTime: this.formTerm.endTime + " 00:00:00",
              schYearId: this.formTerm.schYearId
            };
            if (this.formTerm.id != ""){
              url = common.update_term;
              params['termId'] = this.formTerm.id;
            }else {
              url = common.add_term;
            }
            params = this.$qs.stringify(params);
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.modalTermVisible = false;
                const {tree,treeNode,resolve} = this.maps.get(this.g_row);
                this.$set(this.$refs.refTable.store.states.lazyTreeNodeMap,this.g_row,[]);
                this.load(tree,treeNode,resolve);
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
            });
          }
        });
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      okDrawDialog(event){
        let weekObj = {};
        let sectObj = {};

        this.errorTips = "";
        if (this.formSetTerm.startTime == ""){
          this.errorTips = this.$t("请设置开始时间");
          return;
        }

        if (this.formSetTerm.weekType ==1){//统一周
          weekObj['0'] = [this.formSetTerm.day.one,this.formSetTerm.day.two,this.formSetTerm.day.three,this.formSetTerm.day.four,this.formSetTerm.day.five,this.formSetTerm.day.six,this.formSetTerm.day.seven];
        }else {//单双周
          weekObj['1'] = [this.formSetTerm.day1.one,this.formSetTerm.day1.two,this.formSetTerm.day1.three,this.formSetTerm.day1.four,this.formSetTerm.day1.five,this.formSetTerm.day1.six,this.formSetTerm.day1.seven];
          weekObj['2'] = [this.formSetTerm.day2.one,this.formSetTerm.day2.two,this.formSetTerm.day2.three,this.formSetTerm.day2.four,this.formSetTerm.day2.five,this.formSetTerm.day2.six,this.formSetTerm.day2.seven];
        }

        for (let i = 0; i < this.formSetTerm.courseTimeArr.length; i++){
          let sect = this.formSetTerm.courseTimeArr[i].sect;
          let time = this.formSetTerm.courseTimeArr[i].start_time;
          let min = this.formSetTerm.courseTimeArr[i].duration;
          sectObj[sect] = [time, min];
        }

        let params = {
          schYearId: this.formSetTerm.schYearId,
          termId: this.formSetTerm.termId,
          weekNum: this.formSetTerm.weekTotal,
          section: this.formSetTerm.courseTime,
          baseSetting: JSON.stringify(weekObj),
          period: JSON.stringify(sectObj),
          teachStartTime: this.formSetTerm.startTime
        };

        params = this.$qs.stringify(params);
        this.$refs['formSetTerm'].validate((valid) => {
          if (valid) {
            this.drawerLoading = true;
            this.$axios.post(common.save_term_info,params).then(res=>{
              if (res.data.code == 200){
                this.drawerLoading = false;
                this.drawerVisible = false;
              }else {
                MessageError(res.data.desc);
              }
              this.drawerLoading = false;
            });
          }
        });
      },
      handleEdit(row){
        this.modalVisible = true;
      },
      handleDelete(row){
        this.subDetail = row.name;
        this.visibleConfim = true;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {};
        if (this.form.id != ""){
          params = {
            syearId: this.form.id,
            confirm: false
          }
          url = common.delete_year;
        }else if(this.formTerm.id != ""){
          params = {
            termId: this.formTerm.id
          }
          url = common.delete_term;
        }
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            if (this.form.id != ""){
              this.init();
            }else if(this.formTerm.id != ""){
              const {tree,treeNode,resolve} = this.maps.get(this.g_row);
              this.$set(this.$refs.refTable.store.states.lazyTreeNodeMap,this.g_row,[]);
              this.load(tree,treeNode,resolve);
            }
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
      handleOkSetChange(){
        this.dialogLoading = true;
        let url = "";
        let params = {};
        if (this.g_year_id != ""){
          params = {
            syearId: this.g_year_id
          }
          if (this.g_status == 'in'){
            url = common.set_current_in;
          }else if (this.g_status == 'out'){
            url = common.set_current_out;
          }
        }else if(this.g_term_id != ""){
          params = {
            termId: this.g_term_id
          }
          if (this.g_status == 'in'){
            url = common.set_current_term_in;
          }else if (this.g_status == 'out'){
            url = common.set_current_term_out;
          }
        }
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            if (this.g_year_id != ""){
              this.init();
              this.updateTableData(this.g_row);
            }else if(this.g_term_id != ""){
              this.init();
              const {tree,treeNode,resolve} = this.maps.get(this.g_row);
              this.$set(this.$refs.refTable.store.states.lazyTreeNodeMap,this.g_row,[]);
              this.load(tree,treeNode,resolve);
            }
            //this.updateTableData(this.g_row);
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.visibleSetConfim = false;
          this.dialogLoading = false;
        });
      },
      handleCancelSetChange(){
        this.visibleSetConfim = false;
      },
      search(event){
        let params = {
          keys:'campusId,userType,campusType,userId,username,campusName,campusLogo,realName,externalSystemName,externalSystem,termId,externalSystemName,externalSystem'
        };
        this.$axios.get(common.session_url, {params: params}).then(res => {
          console.log(1);
        });
      },
      cellClick(row, column, cell, event){
        if (column.property == 'name'){
          this.g_row = row.id;
          this.$refs.refTable.store.loadOrToggle(row);
          this.updateTableData();
        }
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
      handleChangeTime(event, type){
        if (type == 1){
          this.form.startTime = event;
        }else if (type == 2){
          this.form.endTime = event;
        }else if (type == 3){
          this.formTerm.startTime = event;
        }else if (type == 4){
          this.formTerm.endTime = event;
        }else if (type == 5){
          this.formSetTerm.startTime = event;
        }
      },
      setCurrentYear(row){
        this.g_year_id = row.id;
        this.g_term_id = "";
        let params = {
          syearId: row.id
        };
        this.$axios.get(common.check_current_year, {params: params}).then(res => {
          if (res.data.code == 200){
            this.g_status = "in";
            this.setContent = res.data.desc + this.$t("是否继续设置？");
            this.visibleSetConfim = true;
          }else if (res.data.code == 454){
            this.g_status = "out";
            this.setContent = res.data.desc + this.$t("是否继续设置？");
            this.visibleSetConfim = true;
          }else{
            MessageError(res.data.desc);
          }
        });
      },
      setCurrentTerm(row){
        this.g_year_id = "";
        this.g_term_id = row.id;
        let params = {
          termId: row.id
        };
        this.$axios.get(common.check_current_term, {params: params}).then(res => {
          if (res.data.code == 200 || res.data.code == 464){
            this.g_status = "in";
            this.setContent = res.data.desc + this.$t("是否继续设置？");
            this.visibleSetConfim = true;
          }else if (res.data.code == 461 || res.data.code == 462){
            this.g_status = "out";
            this.setContent = res.data.desc + this.$t("是否继续设置？");
            this.visibleSetConfim = true;
          }else{
            MessageError(res.data.desc);
          }
        });
      },
      updateTableData(rowId){
        for (let i = 0; i < this.tableData.length; i++ ){
          if (rowId == this.tableData[i].id){
            this.$refs.refTable.toggleRowExpansion(this.tableData[i], true);
          }else {
            this.$refs.refTable.toggleRowExpansion(this.tableData[i], false);
            this.$refs.refTable['store'].states.treeData[this.tableData[i].id].loaded = false;
            this.$refs.refTable['store'].states.treeData[this.tableData[i].id].expanded = false;
          }
        }
      },
      closeDrawerDialog(event){
        this.formSetTerm = {
          id: '',
          current: '',
          schYearId: '',
          termId: '',
          year: '',
          termStart: '',
          termEnd: '',
          startTime: '',
          weekTotal: '',
          weekType: '',
          day: {
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false
          },
          day1: {
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false
          },
          day2: {
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false
          },
          courseTime: '',
          courseTimeArr: [],
          courseTimeBakArr: []
        };
        this.drawerVisible = event;
      },
      getWeekTotal(){
        return getWeekTotalSelect();
      },
      setOptions(val){
        return setSelectOptions(val);
      },
      handeChangeSelect(data, type){
        if (type == 1){
          this.formSetTerm.weekTotal = data;
        }else if (type == 2){
          this.formSetTerm.courseTime = data;

          let arr = [];
          let dataTerm = this.formSetTerm.courseTimeBakArr;
          console.log(data,dataTerm.length);
          for (let i = 0; i < data; i++){
            /*this.$set(data[i],'editCourseTime', false);
            this.$set(data[i],'editStartTime', false);*/
            if (dataTerm[i]){
              arr.push(dataTerm[i]);
            }else {
              arr.push({
                duration: "0",
                editCourseTime: false,
                editStartTime: false,
                sect: i+1,
                start_time: '00:00',
                teach_set_id: '00:00'
              });
            }
          }

          this.$set(this.formSetTerm,'courseTimeArr', arr);
        }
      },
      handleChangeRadio(data){
        this.formSetTerm.weekType = data;
      },
      changeStartTime(item, index){
        //this.formSetTerm.courseTimeArr[index].editStartTime = true;
        //item.editStartTime = true;
        this.$set(item,'editStartTime', true);
      },
      changeCourseTime(item, index){
        this.$set(item,'editCourseTime', true);
        //this.formSetTerm.courseTimeArr[index].editCourseTime = true;
      },
      setItemStartTime(item, index){
        this.$set(item,'start_time', item.start_time);
        this.$set(item,'editStartTime', false);
      },
      setItemCourseTime(item, index){
        let reg = /^\d+$|^\d+[.]?\d+$/;
        if (!reg.test(item.duration)){
          MessageWarning(this.$t("课时只能为正整数"));
          return;
        }
        this.$set(item,'duration', item.duration);
        this.$set(item,'editCourseTime', false);
      },
      changeCheckBox(event, type, item){
        this.formSetTerm[type][item] = event;
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
</style>
