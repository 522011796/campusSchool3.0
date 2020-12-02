<template>
  <div class="container">
    <div class="container">
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">奖惩申请</span>
          </div>
          <my-el-tree type="1" sub-type="4" @node-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div>
            <div>
              <el-card shadow="never" :body-style="{padding: '5px 10px',height: '120px'}">
                <el-row :gutter="8">
                  <el-col :span="8">
                    <div class="rpStatic-top-item color-muted">
                      <div class="title">
                        {{$t("学生人数")}}:
                        <el-tooltip class="item" effect="dark" :content="$t('同一人建立多次算一次，处罚多次酸1次，既有奖励和处罚各算一次')" placement="top-start">
                          <i class="fa fa-info-circle"></i>
                        </el-tooltip>
                      </div>
                      <div>
                        <div class="margin-top-5 color-grand">
                          <span class="person-item text-right">{{$t("总人数")}}</span>
                          <span>{{personTotal}}</span>
                        </div>
                        <div class="margin-top-5 color-success">
                          <span class="person-item text-right">{{$t("奖励")}}</span>
                          <span>{{reTotal}}</span>
                        </div>
                        <div class="margin-top-5 color-warning">
                          <span class="person-item text-right">{{$t("处分")}}</span>
                          <span>{{puTotal}}</span>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="rpStatic-top-item color-muted">
                      <div class="title">{{$t("类型占比")}}: </div>
                      <div style="height: 100px">
                        <div v-if="typeData.length <= 0" class="color-disabeld text-center" style="position: relative; top: 20%;">{{$t("暂无数据")}}</div>
                        <circle-chart v-else chart-id="typeId" :chart-title='$t("类型占比")' :data-key="typeDataKey" :data="typeData"></circle-chart>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="rpStatic-top-item color-muted">
                      <div class="title">{{$t("级别占比")}}: </div>
                      <div>
                        <div style="height: 100px">
                          <div v-if="typeData.length <= 0" class="color-disabeld text-center" style="position: relative; top: 20%;">{{$t("暂无数据")}}</div>
                          <circle-chart v-else chart-id="levelId" :chart-title='$t("级别占比")' :data-key="levelDataKey" :data="levelData"></circle-chart>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </div>
          </div>

          <div class="layout-right-tab margin-top-10">
            <el-row class="layout-inline">
              <el-col :span="4">
                <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo()">{{$t("导出")}}</el-button>
              </el-col>
              <el-col :span="20" class="text-right">
                <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
                <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('姓名/学号')" @click="search"></my-input-button>
              </el-col>
            </el-row>
          </div>
          <div>
            <el-table
              :data="tableData"
              header-cell-class-name="custom-table-cell-bg"
              size="medium"
              :max-height="tableMiddleHeight.height"
              style="width: 100%"
              @filter-change="fliterTable">
              <el-table-column
                align="center"
                :label="$t('日期')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{$moment(scope.row.apply_time).format("YYYY-MM-DD")}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{$moment(scope.row.apply_time).format("YYYY-MM-DD")}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('姓名')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.real_name}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.real_name}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('学号')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.student_id}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.student_id}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('班级')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.class_name}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.class_name}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :filter-multiple="false"
                column-key="type"
                :filters="filterTypes"
                :label="$t('类型')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.str1}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.str1}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :filter-multiple="false"
                column-key="level"
                :filters="filterLevels"
                :label="$t('级别')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.str2}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.str2}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('说明')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.des}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.des}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :filter-multiple="false"
                column-key="status"
                :filters="filterStatus"
                :label="$t('状态/审核人')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <my-audit-status :status="scope.row.status" :handler="scope.row.handler_name"></my-audit-status>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <my-audit-status :status="scope.row.status" :handler="scope.row.handler_name"></my-audit-status>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                fixed="right"
                :label="$t('操作')"
                width="60">
                <template slot-scope="scope">
                  <i class="fa fa-list-alt margin-right-5 color-grand" @click="handleDetail(scope.row)"></i>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </layout-lr>
    </div>

    <!--审批详细-->
    <drawer-layout-right @changeDrawer="closeDrawerDialog" :hide-footer="true" :visible="drawerVisible" size="550px" :title="$t('申请单')" @right-close="cancelDrawDialog">
      <div slot="content">
        <my-audit-detail type="PunishmentApply" :sel-value="dataAudit"></my-audit-detail>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import MySelect from "../../../components/MySelect";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import MyAuditDetail from "../../../components/utils/auditDetail/MyAuditDetail";
  import MyElTree from "../../../components/tree/MyElTree";
  import MyPagination from "../../../components/MyPagination";
  import MyAuditStatus from "../../../components/utils/MyAuditStatus";
  import CircleChart from "../../../components/charts/CircleChart";
  import {common} from "../../../utils/api/url";
  import {MessageWarning} from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {MyElTree,MySelect,DrawerLayoutRight,MyAuditDetail,MyPagination,MyAuditStatus,CircleChart},
    data(){
      return {
        dataAudit: {},
        drawerVisible: false,
        tableData: [],
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        applyTimeBegin: '',
        applyTimeEnd: '',
        type: '',
        level: '',
        status: '',
        searchKey: '',
        searchDate: [],
        //filterTypes: [{ text: this.$t("处分"), value: '处分' }, { text: '奖励', value: '奖励' }],
        filterLevels: [],
        //filterStatus: [{ text: this.$t("待审批"), value: '0' }, { text: '已通过', value: '3' }, { text: '已驳回', value: '4' }],
        personTotal: 0,
        reTotal: 0,
        puTotal: 0,
        typeData: [],
        typeDataKey: [],
        levelData: [],
        levelDataKey: []
      }
    },
    created() {
      this.init();
      this.initLevels();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          applyTypeCode: 'PunishmentApply',
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          applyTimeBegin: this.searchDate ? this.searchDate[0] : '',
          applyTimeEnd: this.searchDate ? this.searchDate[1] : '',
          str1: this.type,
          str2: this.level,
          status: this.status,
          searchKey: this.searchKey
        };
        this.$axios.get(common.audit_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;

            this.initStatic();
          }
        });
      },
      initStatic(){
        let params = {
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.audit_re_static, params).then(res => {
          if (res.data.data){
            console.log(res);
            this.personTotal = res.data.data.studentCount;
            this.reTotal = res.data.data['奖励'];
            this.puTotal = res.data.data['处分'];

            let typeKey = [];
            let typeList = [];
            for (let i = 0; i < res.data.data.typeCountList.length; i++){
              typeKey.push(res.data.data.typeCountList[i].ptype);
              typeList.push({
                name: res.data.data.typeCountList[i].ptype,
                value: res.data.data.typeCountList[i].count,
                rate: res.data.data.typeCountList[i].rate,
              });
            }

            let levelKey = [];
            let levelList = [];
            for (let i = 0; i < res.data.data.levelCountList.length; i++){
              levelKey.push(res.data.data.levelCountList[i].plevel);
              levelList.push({
                name: res.data.data.levelCountList[i].plevel,
                value: res.data.data.levelCountList[i].count,
                rate: res.data.data.levelCountList[i].rate,
              });
            }

            this.typeData = typeList;
            this.typeDataKey = typeKey;
            this.levelData = levelList;
            this.levelDataKey = levelKey;
          }
        });
      },
      initLevels(){
        let params = {
          page: this.page,
          num: 99999
        };
        this.$axios.post(common.audit_re_level, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['text'] = res.data.data.list[i].level_name;
              res.data.data.list[i]['value'] = res.data.data.list[i].level_name;
            }
            this.filterLevels = res.data.data.list;
          }
        });
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
        this.init();
      },
      handleDetail(row){
        console.log(row);
        let params = {
          id:row.object_id ? row.object_id : row.id
        };
        this.$axios.get(common.msg_detail_center, {params: params}).then(res => {
          if (res.data.code == 200){
            this.dataAudit = res.data.data;
            this.drawerVisible = true;
          }else {
            MessageWarning(res.data.desc);
          }
        });
      },
      closeDrawerDialog(event){
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
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
      handleChange(data){
        this.searchDate = data;
      },
      search(data){
        this.searchKey = data.input;
        this.init();
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'type'){
            this.type = value[item][0];
          }else if (item == 'level'){
            this.level = value[item][0];
          }else if (item == 'status'){
            this.status = value[item][0];
          }
        }
        this.init();
      },
      expandInfo(){
        let url = common.audit_download;
        let params = {
          page:1,
          num:99999,
          applyTypeCode: 'PunishmentApply',
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          applyTimeBegin: this.searchDate ? this.searchDate[0] : '',
          applyTimeEnd: this.searchDate ? this.searchDate[1] : '',
          str1: this.type,
          str2: this.level,
          status: this.status,
          searchKey: this.searchKey
        };
        params = this.$qs.stringify(params);
        window.open(url+"?"+params, "_self");
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .rpStatic-top-item .person-item{
    display: inline-block;
    width: 60px;
  }
  .rpStatic-top-item .title{
    font-weight: bold;
  }
</style>
