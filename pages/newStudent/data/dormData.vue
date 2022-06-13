<template>
  <div class="container">
    <div>
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">选寝数据</span>
          </div>
          <my-el-tree type="4" sub-type="" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div class="layout-top-tab margin-top-5">
            <el-row>
              <el-col :span="12">
                <div class="layout-inline">
                  <el-button class="layout-item" size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
                  <tab-group-button size="small" :options='[
                    {label:$t("总人数"), value: "1", extra: countNum},
                    {label:$t("已入住"), value: "3", extra: signNum},
                    {label:$t("未入住"), value: "0", extra: unSignNum}]' @click="changeStatus">
                  </tab-group-button>
                </div>
              </el-col>
              <el-col :span="12" class="text-right">
                  <my-input-button ref="teacher width-150" size="small" plain width-class="width: 140px" type="success" :clearable="true" :placeholder="$t('姓名/录取号')" @click="search"></my-input-button>
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
              <el-table-column align="center" :label="$t('性别')"
                               width="120"
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
              <el-table-column align="center" :label="$t('专业')">
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
              <el-table-column align="center" :label="$t('入住状态')"
                               width="120"
                               column-key="infoType"
                               :filter-multiple="false"
                               :filters="filtersInfoStatus">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('缴费状态')"
                               width="120"
                               column-key="payStatus"
                               :filter-multiple="false"
                               :filters="filtersPayStatus">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('楼栋')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('楼层')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('房间号')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('床位号')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('宿舍类型')"
                               width="120"
                               column-key="dormType"
                               :filter-multiple="false"
                               :filters="filtersDormType">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('价格')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="260"
                fixed="right"
                :label="$t('操作')">
                <template slot-scope="scope">
                  <el-button size="mini" type="success" @click="detailInfo(scope.row)">{{$t("入住")}}</el-button>
                  <el-button size="mini" type="danger" @click="deleteInfo(scope.row, -1)">{{$t("移除")}}</el-button>
                  <el-button size="mini" type="primary" @click="signInfo(scope.row)">{{$t("详细")}}</el-button>
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

    <drawer-layout-right tabindex="0" :show-close="true" @changeDrawer="closeDialog" :visible="dialogVisible" size="680px">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <span class="tab-class font-bold">
            <i class="fa fa-file"></i>
            {{$t('报道单')}}
          </span>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div>
          <div class="padding-tb-10 padding-lr-10">
            <span class="title-block-tag"></span>
            <span class="title-block-text">{{$t("基本信息")}}</span>
          </div>
          <table class="custom-table">
            <tr>
              <td style="width: 20%" rowspan="2">
                <el-image style="width: 80px; height: 80px;margin-top: 5px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-image>
              </td>
              <td style="width: 20%">{{$t("姓名")}}</td>
              <td style="width: 10%">1</td>
              <td style="width: 10%">{{$t("性别")}}</td>
              <td style="width: 10%">1</td>
              <td style="width: 20%">{{$t("录取号")}}</td>
              <td style="width: 10%">1</td>
            </tr>
            <tr>
              <td>{{$t("学院")}}</td>
              <td>1</td>
              <td>{{$t("专业")}}</td>
              <td>1</td>
              <td>1</td>
              <td>{{$t("班级")}}</td>
            </tr>
            <tr>
              <td>{{$t("宿舍信息")}}</td>
              <td colspan="6">1</td>
            </tr>
          </table>
        </div>
        <div class="margin-top-20">
          <div class="padding-tb-10 padding-lr-10">
            <span class="title-block-tag"></span>
            <span class="title-block-text">{{$t("缴费信息")}}</span>
          </div>
          <el-table
            border
            ref="refTable"
            :data="tableSignData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            style="width: 100%">
            <el-table-column align="center" :label="$t('费用名称')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('缓缴')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('贷缴')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('减免')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('实缴')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('已缴')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('未缴金额')">
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
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" :show-close="false" @changeDrawer="closeDialog" :visible="dialogDetail" @right-close="cancelDrawDialog" size="680px">
      <div slot="content" class="color-muted">
        <div class="layout-inline"  v-if="!commDrawer">
          <my-cascader class="layout-item" :placeholder="$t('请选择宿舍楼')" :clearable="true" ref="SelectorDormDept" size="small" width-style="160" :sel-value="searchCommDeptBedData" type="2" sub-type="2" @change="handleCascaderBedChange($event)"></my-cascader>
        </div>
        <el-table class="margin-top-10"  v-if="!commDrawer" ref="dormTableRef"
                  :data="tableDormData"
                  size="mini"
                  v-loading="tableDormLoading">
          <el-table-column
            label="操作"
            align="center">
            <template slot-scope="scope">
              <a href="javascript:;" class="color-grand" @click="selectDorm(scope.row)">{{$t("分配")}}</a>
            </template>
          </el-table-column>
          <el-table-column property="dormitory_no" align="center" label="宿舍编号">

          </el-table-column>
          <el-table-column align="center" label="宿舍类型">
            <template slot-scope="scope">
              <label>{{dormTypeTextInfo(scope.row.type)}}</label>
            </template>
          </el-table-column>
          <el-table-column property="student_id" align="center" label="容纳人数">
            <template slot-scope="scope">
              <label>{{scope.row.has_people_num}}</label>
              /
              <label>{{scope.row.people_num}}</label>
            </template>
          </el-table-column>
        </el-table>

        <div v-if="commDrawer">
          <div class="layout-inline">
            <el-button size="small" type="success" plain @click="returnDormList">
              <i class="fa fa-arrow-left"></i>
              {{$t("返回")}}
            </el-button>
          </div>
          <div class="margin-top-10">
            <el-table ref="commTableRef"
                      :data="tableDormCommDormData"
                      size="mini">
              <el-table-column
                label="床号"
                align="center">
                <template slot-scope="scope">
                  <span>{{scope.row.bed_no}}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="学生"
                align="center">
                <template slot-scope="scope">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      1
                    </span>
                    </el-popover>
                  </template>
                </template>
              </el-table-column>
              <el-table-column
                label="学号"
                align="center">
                <template slot-scope="scope">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      1
                    </span>
                    </el-popover>
                  </template>
                </template>
              </el-table-column>
              <el-table-column
                label="手机"
                align="center">
                <template slot-scope="scope">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      1
                    </span>
                    </el-popover>
                  </template>
                </template>
              </el-table-column>
              <el-table-column
                label="班级"
                align="center">
                <template slot-scope="scope">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      1
                    </span>
                    </el-popover>
                  </template>
                </template>
              </el-table-column>
              <el-table-column
                label="状态"
                align="center">
                <template slot-scope="scope">
                  <span v-if="scope.row.student_id != null" class="color-warning">{{$t("已分配")}}</span>
                  <span v-else class="color-success">{{$t("未分配")}}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                align="center">
                <template slot-scope="scope">
                  <a href="javascript:;" v-if="scope.row.student_id == null" class="color-grand" @click="selectDormBedno(scope.row)">{{$t("选择")}}</a>
                  <span v-else>--</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <my-pagination v-if="!commDrawer" :total="commTotal" :current-page="commPage" :page-size="commNum" @currentPage="currentDormPage" @sizeChange="sizeDormChange" @jumpChange="jumpDormPage" class="layout-pagination"></my-pagination>
          <span v-if="commDrawer" class="margin-right-10">{{$t("共")}} {{tableDormCommDormData.length}} {{$t("条")}}</span>
        </div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
import mixins from "~/utils/mixins";
import {common} from "~/utils/api/url";
import {
  cityInfo, dormTypeText,
  educationInfo,
  MessageError,
  MessageSuccess, MessageWarning,
  nationalityInfo,
  nationInfo,
  provinceInfo
} from "~/utils/utils";
import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";

export default {
  components: {DrawerLayoutRight},
  mixins: [mixins],
  data(){
    return {
      tableData: [],
      tableSignData: [],
      tableDormData: [],
      countNum: 0,
      signNum: 0,
      unSignNum: 0,
      collegeList: [],
      categorys: [],
      types: [],
      studentTotal: 0,
      studentNum: 20,
      studentPage: 1,
      commPage: 1,
      commNum: 20,
      commTotal: 0,
      tableDormCommDormData: [],
      tableStudentData: [],
      searchCommDeptData: [],
      searchCommDeptBedData: [],
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
      commSearchBuild: '',
      commSearchFloor: '',
      filtersSexType: [
        {value: 0, text: this.$t("未知")},
        {value: 1, text: this.$t("男")},
        {value: 2, text: this.$t("女")}
      ],
      filtersInfoStatus: [
        {value: 0, text: this.$t("已入住")},
        {value: 1, text: this.$t("未入住")}
      ],
      filtersPayStatus: [
        {value: 0, text: this.$t("已缴费")},
        {value: 1, text: this.$t("未缴费")}
      ],
      filtersDormType: [
        {text: '男生宿舍',value: "0"},
        {text: '女生宿舍',value: "1"}
      ],
      searchAuditType: '',
      searchSexType: '',
      searchSignTimeStatus: '',
      searchInterface: '',
      searchInfoStatus: '',
      searchPayStatus: '',
      searchDormType: '',
      tableStudentLoading: false,
      tableDormLoading: false,
      commDrawer: false,
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
    initDorm(){
      let params = {
        page: this.commPage,
        num: this.commNum,
        deleted: 0,
        type: this.commSex.sex == 1 ? 0 : 1,
        buildId: this.commSearchBuild,
        floorNum: this.commSearchFloor,
      };
      this.tableDormLoading = true;
      this.$axios.get(common.dormroom_page, {params: params}).then(res => {
        if (res.data.data){
          this.tableDormData = res.data.data.list;
          this.commTotal= res.data.data.totalCount;
          this.commNum = res.data.data.num;
          this.commPage = res.data.data.currentPage;
        }
        this.tableDormLoading = false;
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
    jumpDormPage(data){
      this.commPage = data;
      this.studentPage();
    },
    sizeDormChange(event){
      this.commPage = 1;
      this.commNum = event;
      this.initDorm();
    },
    currentDormPage(event){
      this.commPage = event;
      this.initDorm();
    },
    nodeClick(data){
      this.collegeData = data.department_path;
      this.page = 1;
      this.init();
    },
    handleSearch(data){
      this.commSearchKey = data;
      this.studentPage = 1;
      this.initStudent();
    },
    handleCascaderChange(data){
      this.searchCascader = data;
    },
    handleChangeTime(data){
      this.searchTimeData = data;
    },
    handleCascaderBedChange(data){
      //this.commSearchDept = data[data.length-1];
      this.commSearchBuild = "";
      this.commSearchFloor = "";
      if (data.length == 1){
        this.commSearchBuild = data[0];
      }else if (data.length == 2){
        this.commSearchBuild = data[0];
        this.commSearchFloor = data[1];
      }
      this.commPage = 1;
      this.initDorm();
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
    statusInfo(item, type){

    },
    deleteInfo(item, type){

    },
    detailInfo(item, type){
      this.studentPage = 1;
      this.studentNum = 20;
      this.commSex = item;
      setTimeout(() => {
        this.initDorm();
      }, 800);
      this.dialogDetail = true;
    },
    signInfo($event, item){
      this.dialogVisible = true;
    },
    dormTypeTextInfo(val){
      return dormTypeText(val);
    },
    fliterTable(value, row, column){
      for (let item in value){
        if (item == 'sexType'){
          this.searchSexType = value[item][0];
        }else if (item == 'infoStatus'){
          this.searchInfoStatus = value[item][0];
        }else if (item == 'payStatus'){
          this.searchPayStatus = value[item][0];
        }else if (item == 'dormType'){
          this.searchDormType = value[item][0];
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
    selectDormBedno(row){
      let params = {
        bedNo: row.bed_no,
        dromId: row.drom_id,
        studentId: this.commSex.user_id,
        majorClassId: this.commSex.major_id
      };
      params = this.$qs.stringify(params);
      this.$axios.post(common.dorm_user_class_bed_distribute, params, {loading: false}).then(res => {
        if (res.data.data){
          this.initDorm();
          this.init();
          this.drawerDormVisible = false;
          this.commDrawer = false;
          MessageSuccess(res.data.desc);
          this.$emit("distribute", res.data.data);
        }else{
          MessageWarning(res.data.desc);
        }
      });
    },
    selectDorm(row){
      let params = {
        page: 1,
        num: 9999,
        dormitoryId: row.id
      };
      this.$axios.get(common.dorm_user_class_bed_list, {params: params}).then(res=>{
        if (res.data.data){
          this.tableDormCommDormData = res.data.data;
        }
      });
      this.commDrawer = true;
    },
    returnDormList(){
      this.commDrawer = false;
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
        otherMsg: ''
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
      this.commDrawer = false;
    },
    cancelFormDrawDialog(){
      this.closeDialog();
      this.drawerForm = false;
    },
    okFormDrawDialog(event, type){
      let params = {

      };

      let url = common.circular_add;
      //params = this.$qs.stringify(params);
      this.btnLoading = true;
      this.$axios.post(url, params, {loading: false}).then(res => {
        if (res.data.code == 200){
          this.drawerManage = false;
          this.init();
          this.closeDialog();
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.btnLoading = false;
      });
    },
    cancelDrawDialog(){
      this.dialogDetail = false;
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
