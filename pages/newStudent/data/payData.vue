<template>
  <div class="container">
    <div>
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">缴费数据</span>
          </div>
          <my-el-tree type="1" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div class="layout-top-tab margin-top-5 custom-button-search">
            <el-row>
              <el-col :span="14">
                <div class="layout-inline">
                  <el-button class="layout-item" size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
                  <el-button-group class="layout-item" style="position: relative;top: -1px">
                    <el-button size="small" type="text">
                      <label class="color-muted">{{$t("总人数")}} {{countNum}} | </label>
                    </el-button>
                    <el-button size="small" type="text">
                      <label class="color-muted">{{$t("已缴清")}} {{payedNum}} | </label>
                    </el-button>
                    <el-button size="small" type="text">
                      <label class="color-muted">{{$t("部分缴清")}} {{diffPayedNum}} | </label>
                    </el-button>
                    <el-button size="small" type="text">
                      <label class="color-muted">{{$t("未缴清")}} {{unPayedNum}}</label>
                    </el-button>
                  </el-button-group>
                  <my-select class="layout-item width-100" size="small" :placeholder="$t('流程名称')" :sel-value="processId" :options="flowOptions" :clearable="true" @change="handleSearchChange($event, 2)"></my-select>
                </div>
              </el-col>
              <el-col :span="10" class="text-right">
                <div class="layout-inline">
                  <el-date-picker
                    size="small"
                    unlink-panels
                    v-model="searchTimeData"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    @change="handleChangeTime"
                    style="width: 215px">
                  </el-date-picker>
                  <my-input-button ref="teacher width-150" size="small" plain width-class="width: 120px" type="success" :clearable="true" :placeholder="$t('姓名/录取号')" @click="search"></my-input-button>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="margin-top-10">
            <el-table
              ref="refTable"
              :data="tableData"
              header-cell-class-name="custom-table-cell-bg"
              size="medium"
              :max-height="tableHeight2.height"
              @filter-change="fliterTable"
              style="width: 100%">
              <el-table-column align="center" :label="$t('姓名')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.real_name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <a href="javascript:;" class="color-grand" @click="detailInfo(scope.row)">{{scope.row.real_name}}</a>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('录取号')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.student_id}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.student_id}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('性别')"
                               column-key="sexType"
                               :filter-multiple="false"
                               :filters="filtersSexType">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <my-sex :sex="scope.row.sex" tag="text"></my-sex>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <my-sex :sex="scope.row.sex" tag="text"></my-sex>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('学院')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.college_name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.college_name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('专业')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.major_name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.major_name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('班级')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.class_name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.class_name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('状态')"
                               column-key="statusType"
                               :filter-multiple="false"
                               :filters="filtersStatusType">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.payment_status == 3" class="color-success">{{$t("已缴费")}}</label>
                      <label v-else-if="scope.row.payment_status == 2" class="color-danger">{{$t("部分缴费")}}</label>
                      <label v-else-if="scope.row.payment_status == 1" class="color-danger">{{$t("未缴费")}}</label>
                      <label v-else-if="scope.row.payment_status == 4" class="color-danger">{{$t("待核实")}}</label>
                      <label v-else>--</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.payment_status == 3" class="color-success">{{$t("已缴费")}}</label>
                      <label v-else-if="scope.row.payment_status == 2" class="color-danger">{{$t("部分缴费")}}</label>
                      <label v-else-if="scope.row.payment_status == 1" class="color-danger">{{$t("未缴费")}}</label>
                      <label v-else-if="scope.row.payment_status == 4" class="color-danger">{{$t("待核实")}}</label>
                      <label v-else>--</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('缴费时间')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.payment_time">{{scope.row.payment_time ? $moment(scope.row.payment_time).format("YYYY-MM-DD HH:mm:ss") : ''}}</label>
                      <label v-else>--</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.payment_time">{{scope.row.payment_time ? $moment(scope.row.payment_time).format("YYYY-MM-DD HH:mm:ss") : ''}}</label>
                      <label v-else>--</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('缴费方式')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.payment_type == 1" class="color-success">{{$t("线下缴费")}}</label>
                      <label v-else-if="scope.row.payment_type == 2" class="color-success">{{$t("二维码")}}</label>
                      <label class="color-muted" v-else-if="scope.row.payment_user_real_name">({{scope.row.payment_user_real_name}})</label>
                      <label v-else>--</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.payment_type == 1" class="color-success">{{$t("线下缴费")}}</label>
                      <label v-else-if="scope.row.payment_type == 2" class="color-success">{{$t("二维码")}}</label>
                      <label class="color-muted" v-else-if="scope.row.payment_user_real_name">({{scope.row.payment_user_real_name}})</label>
                      <label v-else>--</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('学费')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.amount}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.amount}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="150"
                fixed="right"
                :label="$t('操作')">
                <template slot-scope="scope">
                  <el-button size="mini" type="success" v-if="scope.row.payment_status != 3" @click="statusInfo(scope.row, 3)">{{$t("缴清")}}</el-button>
                  <el-button size="mini" type="danger" @click="statusInfo(scope.row, 1)">{{$t("撤销")}}</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </layout-lr>
    </div>

    <drawer-layout-right tabindex="0" :show-close="true" @changeDrawer="closeDialog" :visible="dialogDetail" size="680px">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <span class="tab-class font-bold">
            <i class="fa fa-user"></i>
            {{$t('学生信息')}}
          </span>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <el-form :model="form" ref="form" label-width="90px">
          <template v-if="form.id != ''">
            <div class="color-muted margin-top-5">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("照片信息")}}</label>
              </span>
            </div>
            <div class="block-item-bg font-size-12">
              <el-image v-if="form.photo_simple" style="width: 80px; height: 80px; margin-right: 10px" :src="form.photo_simple">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
          </template>
          <template>
            <div :class="form.id != '' ? 'margin-top-20' : 'margin-top-5'">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("基础信息")}}</label>
              </span>
            </div>
            <div class="block-item-bg font-size-12">
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('迎新年度')" prop="year">
                    <my-select :disabled="form.id != ''" class="layout-item" size="small" :placeholder="$t('请选择')" :sel-value="form.year" :options="yearOptions" width-style="220" :clearable="true" @change="handleSelectChange($event, 1)"></my-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('姓名')" prop="name">
                    <el-input :disabled="form.id != ''" v-model="form.name" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('录取号')" prop="adNo">
                    <el-input :disabled="form.id != ''" v-model="form.adNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('一卡通号')" prop="oneCardNo">
                    <el-input :disabled="form.id != ''" v-model="form.oneCardNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('学号')" prop="stuNo">
                    <el-input :disabled="form.id != ''" v-model="form.stuNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('考号')" prop="examNo">
                    <el-input :disabled="form.id != ''" v-model="form.examNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('性别')" prop="sex">
                    <my-select :disabled="form.id != ''" :sel-value="form.sex" :options="g_sex" width-style="220" @change="handleSelectChange($event, 2)"></my-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('身份证')" prop="idCardNo">
                    <el-input :disabled="form.id != ''" v-model="form.idCardNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </template>

          <template>
            <div class="margin-top-5">
              <div class="padding-tb-10 padding-lr-10">
                <span class="title-block-tag"></span>
                <span class="title-block-text">{{$t("缴费信息")}}</span>
              </div>
              <el-table
                border
                ref="refTable"
                :data="tablePayData"
                header-cell-class-name="custom-table-cell-bg"
                size="medium"
                style="width: 100%">
                <el-table-column align="center" :label="$t('费用名称')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.item_name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{scope.row.item_name}}
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('缓缴')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.delay_amount}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{scope.row.delay_amount}}
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('贷款')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.loan_amount}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.loan_amount}}
                  </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('减免')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.deduction_amount}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.deduction_amount}}
                  </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('实缴')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.should_amount}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.should_amount}}
                  </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('已缴')">
                  <template slot-scope="scope">
                    <el-input size="mini" style="width: 70px" v-model="scope.row.paid_amount" @input="changeInputValue(scope.row.paid_amount, scope.$index)"></el-input>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('待缴金额')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.wait_amount}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{scope.row.wait_amount}}
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </template>

          <template>
            <div class="margin-top-5">
              <div class="padding-tb-10 padding-lr-10">
                <span class="title-block-tag"></span>
                <span class="title-block-text">{{$t("缴费情况")}}</span>
              </div>
              <div class="padding-lr-30">
                <el-radio-group v-model="payType">
                  <el-radio :label="3">{{$t("全部已缴清")}}</el-radio>
                  <el-radio :label="2">{{$t("部分缴清")}}</el-radio>
                  <el-radio :label="1">{{$t("未缴清")}}</el-radio>
                </el-radio-group>
              </div>
            </div>
          </template>
        </el-form>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="mini" @click="cancelFormDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="mini" type="success" :loading="btnLoading" @click="okFormDrawDialog($event, 3)">{{$t("确定")}}</el-button>
<!--          <el-button size="mini" type="danger" :loading="btnLoading" @click="okFormDrawDialog($event, -1)">{{$t("撤销")}}</el-button>-->
        </div>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" :content="messageTips" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
import mixins from "~/utils/mixins";
import {common} from "~/utils/api/url";
import {
  cityInfo,
  educationInfo,
  MessageError,
  MessageSuccess, MessageWarning,
  nationalityInfo,
  nationInfo,
  provinceInfo
} from "~/utils/utils";

export default {
  mixins: [mixins],
  data(){
    return {
      searchCollege: '',
      searchMajor: '',
      searchGrade: '',
      searchClass: '',
      tableData: [],
      tablePayData: [],
      tableSignData: [],
      flowOptions: [],
      countNum: 0,
      payedNum: 0,
      diffPayedNum: 0,
      unPayedNum: 0,
      partialPaid: 0,
      collegeList: [],
      categorys: [],
      types: [],
      subTitle: '',
      collegeData: '',
      searchKey: '',
      searchType: '',
      searchStatus: '',
      dialogLoading: false,
      dialogVisible: false,
      dialogDetail: false,
      visibleConfim: false,
      footerHidden: false,
      btnLoading: false,
      oprStatus: '',
      searchCascader: [],
      yearOptions: [],
      bathOptions: [],
      subjectOptions: [],
      filtersAuditType: [],
      searchTimeData: [],
      listId: '',
      messageTips: '',
      processId: '',
      filtersSexType: [
        {value: 3, text: this.$t("未知")},
        {value: 1, text: this.$t("男")},
        {value: 2, text: this.$t("女")}
      ],
      filtersStatusType: [
        {value: 3, text: this.$t("已缴清")},
        {value: 1, text: this.$t("未缴清")},
        {value: 4, text: this.$t("待核实")}
      ],
      searchAuditType: '',
      searchSexType: '',
      searchSignTimeStatus: '',
      searchInterface: '',
      payType: 3,
      form: {
        id: '',
        year: '',
        name: '',
        adNo: '',
        oneCardNo: '',
        stuNo: '',
        examNo: '',
        sex: '',
        idCardNo: '',
        birthday: '',
        nationality: '',
        nation: '',
        phone: '',
        qq: '',
        wechat: '',
        fatherName: '',
        fatherPhone: '',
        motherName: '',
        motherPhone: '',
        address: '',
        education: '',
        college: [],
        major: '',
        class: [],
        eduSystem: '',
        headmaster: '',
        recruitingTeacher: '',
        adBath: '',
        subject: '',
        adProvince: '',
        adCity: '',
        graduationSchool: '',
        examScore: '',
        otherMsg: '',
        photo_simple: ''
      }
    }
  },
  created() {
    this.initProcess();
    this.init();
    this.initPayStatic();
  },
  methods: {
    initProcess(){
      let params = {
        page: 1,
        num: 99999
      };
      this.$axios.get(common.enroll_process_page, {params: params}).then(res => {
        if (res.data.data){
          let process = [];
          for (let i = 0; i < res.data.data.list.length; i++){
            process.push({
              label: res.data.data.list[i].processName,
              value: res.data.data.list[i].id,
              text: res.data.data.list[i].processName,
            });
          }
          this.flowOptions = process;
        }
      });
    },
    init(){
      let params = {
        page: this.page,
        num: this.num,
        collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        classId: this.searchClass,
        processId: this.processId,
        searchKey: this.searchKey,
        sex: this.searchSexType,
        paymentStatus: this.searchInterface
      };
      if (this.searchTimeData && this.searchTimeData.length > 0){
        params['startTime'] = this.$moment(this.searchTimeData[0]).format("YYYY-MM-DD");
        params['endTime'] = this.$moment(this.searchTimeData[1]).format("YYYY-MM-DD");
      }
      this.$axios.get(common.enroll_payment_page, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },
    initPay(item){
      let params = {
        userId: item.user_id
      };
      this.$axios.get(common.enroll_checkin_pay_list_by_user, {params: params}).then(res => {
        if (res.data.data){
          for (let i = 0; i < res.data.data.length; i++){
            res.data.data[i]['wait_amount'] = res.data.data[i].should_amount - res.data.data[i].paid_amount;
          }
          this.tablePayData = res.data.data;
        }
      });
    },
    initPayStatic(){
      let params = {
        collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        classId: this.searchClass,
        processId: this.processId,
        searchKey: this.searchKey,
      };
      if (this.searchTimeData && this.searchTimeData.length > 0){
        params['startTime'] = this.$moment(this.searchTimeData[0]).format("YYYY-MM-DD");
        params['endTime'] = this.$moment(this.searchTimeData[1]).format("YYYY-MM-DD");
      }
      this.$axios.get(common.enroll_payment_statistics_by_payment_status, {params: params, loading: false}).then(res => {
        if (res.data.data){
          this.countNum = res.data.data.totalCount;
          this.payedNum = res.data.data.paid;
          this.unPayedNum = res.data.data.unPaid;
          this.diffPayedNum = res.data.data.partialPaid;
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
    nodeClick(data){
      this.searchCollege = "";
      this.searchMajor = "";
      this.searchGrade = "";
      this.searchClass = "";
      if (data.unit == 1){
        this.searchCollege = data.id;
      }else if (data.unit == 2){
        this.searchCollege = data.college_id;
        this.searchMajor = data.id;
      }else if (data.unit == 3){
        this.searchMajor = data.major_id;
        this.searchGrade = data.grade;
      }else if (data.unit == 4){
        this.searchClass = data.id;
      }
      this.page = 1;
      this.init();
      this.initPayStatic();
    },
    changeInputValue(data, index){
      let reg = /^([0-9]+[0-9]*(\.[0-9]{1,2})?|0\.[1-9][0-9]?|0\.0[1-9])$/;
      if (data > this.tablePayData[index].should_amount){
        //MessageWarning(this.$t("输入金额不能大于实际缴费金额！"));
        return;
      }
      if(!reg.test(data)){
        //MessageWarning(this.$t("正整数或者两位小数！"));
        return;
      }
      this.tablePayData[index]['wait_amount'] = this.tablePayData[index].should_amount - data;
    },
    handleCascaderChange(data){
      this.searchCascader = data;
    },
    handleChangeTime(data){
      this.searchTimeData = data;
    },
    search(data){
      this.searchKey = data.input;
      this.page = 1;
      this.init();
      this.initPayStatic();
    },
    expandInfo() {
      let url = common.enroll_payment_export;
      let params = {
        page: 1,
        num: 86400,
        collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        classId: this.searchClass,
        processId: this.processId,
        searchKey: this.searchKey,
        sex: this.searchSexType,
        status: this.searchInterface
      };
      if (this.searchTimeData && this.searchTimeData.length > 0){
        params['startTime'] = this.$moment(this.searchTimeData[0]).format("YYYY-MM-DD");
        params['endTime'] = this.$moment(this.searchTimeData[1]).format("YYYY-MM-DD");
      }
      params = this.$qs.stringify(params);
      window.open(url + "?" + params, "_self");
    },
    changeStatus(type){
      this.searchType = type.value;
      this.page = 1;
      this.init();
    },
    statusInfo(item, type){
      this.listId = item.user_id;
      this.oprStatus = type;
      if (type == 3){
        this.messageTips = "确定该数据已缴清？";
      }else if (type == 1){
        this.messageTips = "确定要撤销该数据？";
      }
      this.visibleConfim = true;
    },
    async detailInfo(item, type){
      let params = {
        userId: item.user_id
      };
      this.listId = item.user_id;
      this.oprType = 'detail';
      await this.$axios.get(common.enroll_checkin_student_detail, {params: params}).then(res => {
        if (res.data.data){
          this.form = {
            id: res.data.data.id,
            user_id: res.data.data.user_id,
            year: res.data.data.enroll_id,
            name: res.data.data.real_name,
            adNo: res.data.data.enroll_no,
            oneCardNo: res.data.data.school_car_no,
            stuNo: res.data.data.student_id,
            examNo: res.data.data.exam_no,
            sex: res.data.data.sex+'',
            idCardNo: res.data.data.certificate_num,
            birthday: res.data.data.birthday ? this.$moment(res.data.data.birthday).format("YYYY-MM-DD") : '',
            nationality: ''+res.data.data.nationality,
            nation: res.data.data.nation,
            phone: res.data.data.phone,
            qq: res.data.data.qq,
            email: res.data.data.email,
            wechat: res.data.data.wechat,
            fatherName: res.data.data.father_name,
            fatherPhone: res.data.data.father_phone,
            motherName: res.data.data.mather_name,
            motherPhone: res.data.data.mather_phone,
            address: res.data.data.native_place,
            education: res.data.data.edu_level,
            college: [res.data.data.college_id, res.data.data.major_id, res.data.data.grade, res.data.data.class_id],
            major: '',
            class: [res.data.data.college_id, res.data.data.major_id, res.data.data.grade, res.data.data.class_id],
            eduSystem: res.data.data.edu_year,
            headmaster: res.data.data.master_teacher_name,
            recruitingTeacher: res.data.data.enroll_teacher,
            adBath: res.data.data.enroll_batch,
            subject: res.data.data.enroll_type,
            adProvince: [res.data.data.enroll_province,res.data.data.enroll_city],
            adCity: res.data.data.enroll_city+'',
            graduationSchool: res.data.data.high_school,
            examScore: res.data.data.gaokao_score,
            otherMsg: res.data.data.des,
            checkStatus: res.data.data.check_status,
            checkinId: res.data.data.checkin_id,
            checkin_id: res.data.data.checkin_id,
            photo_simple: res.data.data.photo_simple,
          };
        }
      });
      this.initPay(item);
      this.dialogDetail = true;
    },
    signInfo($event, item){
      this.dialogVisible = true;
    },
    fliterTable(value, row, column){
      for (let item in value){
        if (item == 'auditType'){
          this.searchAuditType = value[item][0];
        }else if (item == 'sexType'){
          this.searchSexType = value[item][0];
        }else if (item == 'signType'){
          this.searchSignTimeStatus = value[item][0];
        }else if (item == 'statusType'){
          this.searchInterface = value[item][0];
        }
      }
      this.init();
    },
    nationInfoText(){
      let arr = nationInfo();
      for (let i = 0; i < arr.length; i++){
        arr[i]['label'] = arr[i].name;
        arr[i]['value'] = arr[i].code;
      }
      return arr;
    },
    nationalityInfoText(){
      let arr = nationalityInfo();
      for (let i = 0; i < arr.length; i++){
        arr[i]['label'] = arr[i].country_name_cn;
        arr[i]['value'] = arr[i].country_code;
      }
      return arr;
    },
    educationInfoText(){
      let arr = educationInfo();
      for (let i = 0; i < arr.length; i++){
        arr[i]['label'] = arr[i].name;
        arr[i]['value'] = arr[i].value;
      }
      return arr;
    },
    provinceInfoText(){
      let arr = provinceInfo();
      for (let i = 0; i < arr.length; i++){
        arr[i]['label'] = arr[i].name;
        arr[i]['value'] = arr[i].ProID;
      }
      return arr;
    },
    cityInfoText(){
      let arr = cityInfo();
      for (let i = 0; i < arr.length; i++){
        arr[i]['label'] = arr[i].name;
        arr[i]['value'] = arr[i].CityID;
      }
      return arr;
    },
    closeDialog(event){
      this.form = {
        id: '',
        year: '',
        name: '',
        adNo: '',
        oneCardNo: '',
        stuNo: '',
        examNo: '',
        sex: '',
        idCardNo: '',
        birthday: '',
        nationality: '',
        nation: '',
        phone: '',
        qq: '',
        wechat: '',
        fatherName: '',
        fatherPhone: '',
        motherName: '',
        motherPhone: '',
        address: '',
        education: '',
        college: [],
        major: '',
        class: [],
        eduSystem: '',
        headmaster: '',
        recruitingTeacher: '',
        adBath: '',
        subject: '',
        adProvince: '',
        adCity: '',
        graduationSchool: '',
        examScore: '',
        otherMsg: '',
        photo_simple: '',
      };
      this.subTitle = "";
      this.versionStatus = '';
      this.resetCasadeSelector('SelectorCollege');
      this.resetCasadeSelector('selectorDept');
      if (this.$refs['form']){
        this.$refs['form'].resetFields();
      }
      this.uploadProcess = '';
      this.uploadResult = [];
      clearTimeout(this.loopTimer);
      this.loopTimer = null;
      this.teacherArray = [];
      this.approverUsers = [];
      this.btnLoading = false;
      this.dialogVisible = false;
      this.dialogDetail = false;
    },
    handleSearchChange(event, type){
      if (type == 2){
        this.processId = event;
      }
    },
    cancelFormDrawDialog(){
      this.closeDialog();
      this.drawerForm = false;
    },
    okFormDrawDialog(event, type){
      let url = "";
      let array = [];
      let error1 = 0;
      let error2 = 0;
      for (let i = 0; i < this.tablePayData.length; i++){
        let reg = /^([0-9]+[0-9]*(\.[0-9]{1,2})?|0\.[1-9][0-9]?|0\.0[1-9])$/;
        if (this.tablePayData[i].should_amount > this.tablePayData[i].total_amount){
          error1++;
          break;
        }
        if(!reg.test(this.tablePayData[i].should_amount)){
          error2++;
          break;
        }

        array.push({
          id: this.tablePayData[i].id,
          paidAmount: this.tablePayData[i].paid_amount
        });
      }

      if (error1 > 1 && type != -1){
        MessageWarning(this.$t("输入金额不能大于实际缴费金额！"));
        return;
      }
      if (error2 > 1 && type != -1){
        MessageWarning(this.$t("正整数或者两位小数！"));
        return;
      }

      let valObj = {
        paidAmountValList: type != -1 ? array : [],
        paymentStatus: type == -1 ? 1 : this.payType,
        paymentType: 1,
        userId: this.listId
      };
      let params = {
        val: valObj
      }
      url = common.enroll_payment_set_student_payment;
      //params = this.$qs.stringify(params);
      this.btnLoading = true;
      this.$axios.post(url, JSON.stringify(valObj), {dataType: 'stringfy', loading: false}).then(res => {
        if (res.data.code == 200){
          this.init();
          this.initPayStatic();
          this.dialogDetail = false;
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.btnLoading = false;
      });
    },
    handleCancelChange(data) {
      this.visibleConfim = false;
    },
    handleOkChange(data) {
      if (this.oprStatus == 1){
        this.cancelOpr();
      }else {
        this.okOpr();
      }
    },
    okOpr(){
      this.dialogLoading = true;
      let url = common.enroll_payment_set_student_payment;
      let valObj = {
        paidAmountValList: [],
        paymentStatus: this.oprStatus,
        paymentType: 1,
        userId: this.listId
      };
      let params = {
        val: valObj
      }
      //params = this.$qs.stringify(params);
      this.$axios.post(url, JSON.stringify(valObj), {dataType: 'stringfy', loading: false}).then(res => {
        if (res.data.code == 200){
          this.init();
          this.initPayStatic();
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.visibleConfim = false;
        this.dialogLoading = false;
      });
    },
    cancelOpr(){
      this.dialogLoading = true;
      let url = common.enroll_payment_set_student_revoke;
      let params = {
        userId: this.listId
      }
      params = this.$qs.stringify(params);
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200){
          this.init();
          this.initPayStatic();
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
.header-block{
  height: 40px;
  line-height: 40px;
}
.block-table-main{
  border: 1px solid #DCDFE6;
}
.block-table-main .item{
  height: 40px;
  line-height: 40px;
}
.title-block-tag{
  display: inline-block;
  height: 20px;
  width: 3px;
  background: #E6A23C;
  font-weight: bold;
  border-radius: 3px;
}
.title-block-text{
  font-weight: bold;
  position: relative;
  top: -5px;
}
</style>
