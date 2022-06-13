<template>
  <div class="container">
    <div>
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">接站数据</span>
          </div>
          <my-el-tree type="4" sub-type="" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div class="layout-top-tab margin-top-5">
            <el-row>
              <el-col :span="8">
                <div class="layout-inline">
                  <el-button class="layout-item" size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
                  <my-cascader class="layout-item" size="small" ref="SelectorCollege" :sel-value="searchCascader" type="4" sub-type="id" width-style="160" @change="handleCascaderChange($event)"></my-cascader>
                </div>
              </el-col>
              <el-col :span="16" class="text-right">
                <div class="layout-inline">
                  <el-date-picker
                    size="small"
                    v-model="searchTimeData"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    @change="handleChangeTime"
                    style="width: 220px">
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
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      1
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('录取号')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
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
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('学院')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('院系')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('班级')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('报道时间')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
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
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
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
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center"
                               :label="$t('登记报道时间')"
                               width="140">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('陪同人员')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('到达站')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
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
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('班次号')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('备注')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
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
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('接到时间')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('接站人')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
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
      filtersSexType: [
        {value: 0, text: this.$t("未知")},
        {value: 1, text: this.$t("男")},
        {value: 2, text: this.$t("女")}
      ],
      filtersSignType: [
        {value: 0, text: this.$t("是")},
        {value: 1, text: this.$t("否")}
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
        {value: 0, text: this.$t("已接到")},
        {value: 1, text: this.$t("未接到")},
      ],
      searchAuditType: '',
      searchSexType: '',
      searchSignTimeStatus: '',
      searchInterface: '',
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
    this.init();
  },
  methods: {
    init(){
      let params = {
        page: this.page,
        num: this.num,
        departmentPath: this.collegeData,
        appletType: this.searchType,
        enable: this.searchStatus,
        searchKey: this.searchKey
      };
      this.$axios.get(common.server_applet_list, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
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
      this.collegeData = data.department_path;
      this.page = 1;
      this.init();
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
    },
    expandInfo() {
      let url = common.housework_query_class_record_export;
      let params = {
        page: this.page,
        num: this.num,
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
          this.filtersVehicleType = value[item][0];
        }else if (item == 'interFaceStatusType'){
          this.filtersInterFaceStatusType = value[item][0];
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
