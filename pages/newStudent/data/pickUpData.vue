<template>
  <div class="container">
    <div>
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">接站数据</span>
          </div>
          <my-el-tree type="1" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div class="layout-top-tab margin-top-5">
            <el-row>
              <el-col :span="6">
                <div class="layout-inline">
                  <el-button class="layout-item" size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
                  <my-select class="layout-item width-150" size="small" :clearable="true" :sel-value="searchProcess" :options="processData" @change="handleChangeSelect($event)"></my-select>
                </div>
              </el-col>
              <el-col :span="18" class="text-right">
                <div class="layout-inline">
                  <el-date-picker
                    size="small"
                    unlink-panels
                    v-model="searchArriveTimeData"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始登记日期"
                    end-placeholder="结束登记日期"
                    @change="handleChangeTime($event, 1)"
                    style="width: 240px">
                  </el-date-picker>
                  <el-date-picker
                    size="small"
                    unlink-panels
                    v-model="searchTimeData"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始接到日期"
                    end-placeholder="结束接到日期"
                    @change="handleChangeTime($event, 2)"
                    style="width: 240px">
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
                      {{scope.row.real_name}}
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
                    <div class="text-center"><my-sex tag="text" :sex="scope.row.sex"></my-sex></div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <my-sex tag="text" :sex="scope.row.sex"></my-sex>
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
              <el-table-column align="center" :label="$t('报道时间')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.check_time">{{$moment(scope.row.check_time).format("YYYY-MM-DD HH:mm:ss")}}</label>
                      <label v-else>--</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.check_time">{{$moment(scope.row.check_time).format("YYYY-MM-DD HH:mm:ss")}}</label>
                      <label v-else>--</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('准时报道')"
                               width="120"
                               column-key="signType"
                               :filter-multiple="false"
                               :filters="filtersSignType">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label class="color-success" v-if="scope.row.check_on_time">{{$t("是")}}</label>
                      <label class="color-danger" v-if="!scope.row.check_on_time">{{$t("否")}}</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label class="color-success" v-if="scope.row.check_on_time">{{$t("是")}}</label>
                      <label class="color-danger" v-if="!scope.row.check_on_time">{{$t("否")}}</label>
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('接站需要')"
                               width="120"
                               column-key="interfaceType"
                               :filter-multiple="false"
                               :filters="filtersSignType">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label class="color-success" v-if="scope.row.need_receive">{{$t("是")}}</label>
                      <label class="color-danger" v-if="!scope.row.need_receive">{{$t("否")}}</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label class="color-success" v-if="scope.row.need_receive">{{$t("是")}}</label>
                      <label class="color-danger" v-if="!scope.row.need_receive">{{$t("否")}}</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center"
                               :label="$t('登记报道时间')"
                               width="140">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.estimate">{{$moment(scope.row.estimate).format("YYYY-MM-DD HH:mm:ss")}}</label>
                      <label v-else>--</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.estimate">{{$moment(scope.row.estimate).format("YYYY-MM-DD HH:mm:ss")}}</label>
                      <label v-else>--</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('陪同人员')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.escorts_num}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.escorts_num}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('到达站')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.arrive_station}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.arrive_station}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('交通工具')"
                               width="120"
                               column-key="vehicleType"
                               :filter-multiple="false"
                               :filters="filtersVehicleType">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.train_type}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.train_type}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('班次号')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.train_no}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.train_no}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('备注')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.des}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.des}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('接站状态')"
                               width="120"
                               column-key="interFaceStatusType"
                               :filter-multiple="false"
                               :filters="filtersInterFaceStatusType">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label class="color-success" v-if="scope.row.arrive_status">{{$t("已接到")}}</label>
                      <label class="color-danger" v-if="!scope.row.arrive_status">{{$t("未接到")}}</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label class="color-success" v-if="scope.row.arrive_status">{{$t("已接到")}}</label>
                      <label class="color-danger" v-if="!scope.row.arrive_status">{{$t("未接到")}}</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('接到时间')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.estimate">{{$moment(scope.row.arrive_time).format("YYYY-MM-DD HH:mm:ss")}}</label>
                      <label v-else>--</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.estimate">{{$moment(scope.row.arrive_time).format("YYYY-MM-DD HH:mm:ss")}}</label>
                      <label v-else>--</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('接站人')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.receive_user_name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.receive_user_name}}
                  </span>
                  </el-popover>
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
  </div>
</template>

<script>
import mixins from "~/utils/mixins";
import {common} from "~/utils/api/url";
import {
  cityInfo,
  educationInfo,
  MessageError,
  MessageSuccess,
  nationalityInfo,
  nationInfo,
  provinceInfo
} from "~/utils/utils";

export default {
  mixins: [mixins],
  data(){
    return {
      processData: [],
      tableData: [],
      tableSignData: [],
      countNum: 0,
      signNum: 0,
      unSignNum: 0,
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
      searchCascader: [],
      yearOptions: [],
      bathOptions: [],
      subjectOptions: [],
      filtersAuditType: [],
      searchTimeData: [],
      searchArriveTimeData: [],
      searchProcess: '',
      filtersSexType: [
        {value: 3, text: this.$t("未知")},
        {value: 1, text: this.$t("男")},
        {value: 2, text: this.$t("女")}
      ],
      filtersSignType: [
        {value: true, text: this.$t("是")},
        {value: false, text: this.$t("否")}
      ],
      filtersVehicleType: [
        {value: 0, text: this.$t("火车")},
        {value: 1, text: this.$t("飞机")},
        {value: 2, text: this.$t("客车")},
        {value: 3, text: this.$t("私家车")},
        {value: 4, text: this.$t("其他")},
        {value: 5, text: this.$t("其他")}
      ],
      filtersInterFaceStatusType: [
        {value: true, text: this.$t("已接到")},
        {value: false, text: this.$t("未接到")},
      ],
      searchAuditType: '',
      searchSexType: '',
      searchSignTimeStatus: '',
      searchInterface: '',
      searchInterFaceStatusType: '',
      searchVehicleType: '',
      searchCollege: '',
      searchMajor: '',
      searchGrade: '',
      searchClass: '',
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
        otherMsg: ''
      }
    }
  },
  created() {
    this.initProcess();
    this.init();
  },
  methods: {
    init(){
      let params = {
        page: this.page,
        num: this.num,
        arriveEstimateStartTime: (this.searchArriveTimeData && this.searchArriveTimeData.length > 0) ? this.$moment(this.searchArriveTimeData[0]).format("YYYY-MM-DD") : '',
        arriveEstimateEndTime: (this.searchArriveTimeData && this.searchArriveTimeData.length > 0) ? this.$moment(this.searchArriveTimeData[1]).format("YYYY-MM-DD") : '',
        arriveStartTime: (this.searchTimeData && this.searchTimeData.length > 0) ? this.$moment(this.searchTimeData[0]).format("YYYY-MM-DD") : '',
        arriveEndTime: (this.searchTimeData && this.searchTimeData.length > 0) ? this.$moment(this.searchTimeData[1]).format("YYYY-MM-DD") : '',
        searchKey: this.searchKey,
        collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        classId: this.searchClass,
        sex: this.searchSexType,
        checkinOnTime: this.searchSignTimeStatus,
        arriveStatus: this.searchInterFaceStatusType,
        needReceive: this.searchInterface,
        processId: this.searchProcess
      };
      this.$axios.get(common.enroll_arrive_page, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },
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
          this.processData = process;
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
    },
    handleCascaderChange(data){
      this.searchCascader = data;
    },
    handleChangeSelect(data){
      this.searchProcess = data;
    },
    handleChangeTime(data, type){
      if (type == 1){
        this.searchArriveTimeData = data ? data : [];
      }else if (type == 2){
        this.searchTimeData = data ? data : [];
      }
    },
    search(data){
      this.searchKey = data.input;
      this.page = 1;
      this.init();
    },
    expandInfo() {
      let url = common.enroll_arrive_export;
      let params = {
        page: 1,
        num: 99999,
        arriveStartTime: (this.searchTimeData && this.searchTimeData.length > 0) ? this.$moment(this.searchTimeData[0]).format("YYYY-MM-DD") : '',
        arriveEndTime: (this.searchTimeData && this.searchTimeData.length > 0) ? this.$moment(this.searchTimeData[1]).format("YYYY-MM-DD") : '',
        searchKey: this.searchKey,
        collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        classId: this.searchClass,
        sex: this.searchSexType,
        checkinOnTime: this.searchSignTimeStatus,
        arriveStatus: this.searchInterFaceStatusType,
        needReceive: this.searchInterface,
        processId: this.searchProcess
      };
      params = this.$qs.stringify(params);
      window.open(url + "?" + params, "_self");
    },
    changeStatus(type){
      this.searchType = type.value;
      this.page = 1;
      this.init();
    },
    fliterTable(value, row, column){
      for (let item in value){
        if (item == 'auditType'){
          this.searchAuditType = value[item][0];
        }else if (item == 'sexType'){
          this.searchSexType = value[item][0];
        }else if (item == 'signType'){
          this.searchSignTimeStatus = value[item][0];
        }else if (item == 'interfaceType'){
          this.searchInterface = value[item][0];
        }else if (item == 'vehicleType'){
          this.searchVehicleType = value[item][0];
        }else if (item == 'interFaceStatusType'){
          this.searchInterFaceStatusType = value[item][0];
        }
      }
      this.init();
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
