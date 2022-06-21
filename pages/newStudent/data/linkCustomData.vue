<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">数据中心</span>
        </div>
        <my-el-tree ref="appRef" type="110" :show-campus="false" :extra-type="appName" :currentNodeKey="currentNodeKey" :default-expanded-keys="defaultExpandedKeys" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab">
          <el-row>
            <el-col :span="12">
              <div class="text-left layout-inline">
                <div class="layout-inline">
                  <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
                  <my-cascader class="layout-item" size="small" ref="SelectorCollege" :clearable="true" :sel-value="searchCascader" type="1" sub-type="4" width-style="160" @change="handleCascaderChange($event)"></my-cascader>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="text-right layout-inline">
                <el-date-picker
                  size="small"
                  unlink-panels
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
            <el-table-column
              align="center"
              width="120"
              column-key="commitInfo"
              :filter-multiple="false"
              :filters="filtersCommitType"
              :label="$t('完成状态')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label v-if="scope.row.status" class="color-success">{{$t("已完成")}}</label>
                    <label v-if="!scope.row.status" class="color-danger">{{$t("未完成")}}</label>
                  </div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label v-if="scope.row.status" class="color-success">{{$t("已完成")}}</label>
                    <label v-if="!scope.row.status" class="color-danger">{{$t("未完成")}}</label>
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('完成时间')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label v-if="detailData.completeTime">{{ $moment(scope.row.completeTime).format("YYYY-MM-DD HH:mm:ss") }}</label>
                  </div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label v-if="detailData.completeTime">{{ $moment(scope.row.completeTime).format("YYYY-MM-DD HH:mm:ss") }}</label>
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('环节类型')"
              width="120"
              column-key="typeInfo"
              :filter-multiple="false"
              :filters="filtersStatusType">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label v-if="scope.row.link.linkType == 1" class="color-success">{{$t("线上环节")}}</label>
                    <label v-if="scope.row.link.linkType == 0" class="color-danger">{{$t("线下环节")}}</label>
                  </div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label v-if="scope.row.link.linkType == 1" class="color-success">{{$t("线上环节")}}</label>
                    <label v-if="scope.row.link.linkType == 0" class="color-danger">{{$t("线下环节")}}</label>
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('姓名')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.realName}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.realName}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('录取号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.studentId }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.studentId }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('院系')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label>{{scope.row.collegeName}}</label>
                  </div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label>{{scope.row.collegeName}}</label>
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('专业')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label>{{scope.row.majorName}}</label>
                  </div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label>{{scope.row.majorName}}</label>
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班级')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label>{{scope.row.className}}</label>
                  </div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label>{{scope.row.className}}</label>
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              v-for="(item, index) in tableDataTitles"
              :key="index"
              align="center"
              width="100"
              :label="item">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label v-if="scope.row[item]" class="moon-content-text-ellipsis-class" style="max-width: 200px !important;display: inline-block">{{scope.row[item]}}</label>
                    <label v-else>--</label>
                  </div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label v-if="scope.row[item]" class="moon-content-text-ellipsis-class" style="max-width: 90px !important;display: inline-block">{{scope.row[item]}}</label>
                    <label v-else>--</label>
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              width="100"
              fixed="right"
              :label="$t('操作')">
              <template slot-scope="scope">
                <i class="fa fa-file-text margin-right-5 color-grand" @click="detailInfo(scope.row)"></i>
                <i v-if="scope.row.status == true" class="fa fa-check-circle color-success" @click="statusInfo(scope.row, true)"></i>
                <i v-if="scope.row.status == false" class="fa fa-times-circle color-danger" @click="statusInfo(scope.row, false)"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="dialogServerDetail" size="600px" :title="$t('详情')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <div class="detail-block-title padding-lr-10 padding-tb-10 font-size-12">
          <el-row>
            <el-col :span="12">
              <span>{{$t("申请人")}}:</span>
              <span>{{ detailData.applyUserName }}</span>
            </el-col>
            <el-col :span="12">
              <span>{{$t("学号")}}:</span>
              <span>{{ detailData.userNo }}</span>
            </el-col>
          </el-row>
          <el-row class="margin-top-5">
            <el-col :span="12">
              <span>{{$t("服务名称")}}:</span>
              <span>{{ detailData.formName }}</span>
            </el-col>
            <el-col :span="12">
              <span>{{$t("班级")}}:</span>
              <span>
                <label>{{ detailData.className }}</label>
              </span>
            </el-col>
          </el-row>
          <el-row class="margin-top-5">
            <el-col :span="12">
              <span>{{$t("完成日期")}}:</span>
              <span v-if="detailData.completeTime">{{ $moment(detailData.completeTime).format("YYYY-MM-DD HH:mm") }}</span>
            </el-col>
          </el-row>
        </div>
        <div class="margin-top-10">
          <div class="color-muted margin-top-5 font-size-12 border-bottom-1">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("申请内容")}}</label>
              </span>
          </div>
          <div class="block-item-bg font-size-12 margin-top-10 color-sub-title">
            <template v-for="(item, index) in detailApplyContentData">
              <div v-if="item.type != 'fc-editor' && item.type != 'upload'" class="block-item-row padding-lr-10 font-bold">
                <span class="color-muted" style="position: relative;top: -13px">{{item.title}}: </span>
                <el-tooltip class="item" effect="dark" :content="item.value" placement="top">
                    <span class="moon-content-text-ellipsis-class" style="max-width: 400px;display: inline-block">
                      {{ item.value }}
                    </span>
                </el-tooltip>
              </div>
              <div v-else-if="item.type != 'fc-editor' && item.type == 'upload'" class="padding-lr-10 font-bold">
                <span v-if="!item.value || item.value.length <= 0" class="color-muted" style="position: relative;top: 10px">{{item.title}}: </span>
                <span v-else class="color-muted" style="position: relative;top: -13px">{{item.title}}: </span>
                <span v-if="!item.value || item.value.length <= 0">
                    <div style="height: 20px;line-height: 20px"></div>
                  </span>
                <span v-else class="custom-avatar" style="display: inline-block;margin-right: 5px;" v-for="(itemImg, indexImg) in item.value" :key="indexImg">
                  <el-image style="width: 30px; height: 30px"
                            :src="itemImg"
                            :preview-src-list="item.value">
                  </el-image>
                </span>
              </div>
              <div v-else class="padding-lr-10">
                <span class="color-muted font-bold" style="position: relative;top: -150px">{{item.title}}: </span>
                <div v-if="item.type == 'fc-editor'"  v-html="item.value" style="max-width: 400px;height: 150px;overflow-y:auto;display: inline-block;border: 1px solid #dddddd;border-radius: 5px;width: 100%;padding: 10px">
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div v-if="detailData.status === 3" class="color-white text-center bg-success">{{$t("已确认")}}</div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {MessageError, MessageSuccess} from "~/utils/utils";
  import MyElTree from "~/components/tree/MyElTree";
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";
  import MyInputButton from "~/components/search/MyInputButton";
  import MyCascader from "~/components/utils/select/MyCascader";
  export default {
    components: {MyCascader},
    mixins: [mixins],
    data(){
      return {
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        tableData: [],
        tableDataTitles: [],
        searchKey: '',
        appName: '',
        dialogServerDetail: false,
        formId: '',
        linkId: '',
        detailData: {},
        detailApplyContentData: [],
        searchAuditStatus: '',
        queryApplyListType: 0,
        appletId: '',
        searchStatusInfo: '',
        searchCommitInfo: '',
        searchTimeData: [],
        searchCascader: [],
        defaultExpandedKeys: [],
        currentNodeKey: '',
        filtersStatusType: [
          {text: '线下环节',value: "0"},
          {text: '线上环节',value: "1"}
        ],
        filtersCommitType: [
          {text: '已完成',value: 1},
          {text: '未完成',value: 0}
        ]
      }
    },
    created() {
      this.initLink();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          linkType: this.searchStatusInfo,
          status: this.searchCommitInfo,
          searchKey: this.searchKey,
          linkId: 9
        };

        if (this.searchTimeData && this.searchTimeData.length > 0){
          params['startTime'] = this.$moment(this.searchTimeData[0]).format("YYYY-MM-DD");
          params['endTime'] = this.$moment(this.searchTimeData[1]).format("YYYY-MM-DD");
        }

        let applyContentArr = [];
        let applyContent = [];
        this.$axios.get(common.enroll_form_data_page, {params: params}).then(res => {
          if (res.data.data){
            if (res.data.data.list && res.data.data.list.length > 0 && res.data.data.list[0].applyContent){
              applyContentArr = JSON.parse(res.data.data.list[0].applyContent);
            }

            for (let i = 0; i < res.data.data.list.length; i++){
              if (res.data.data.list[i].applyContent){
                let applyContent = JSON.parse(res.data.data.list[i].applyContent);
                res.data.data.list[i]['applyContentObj'] = JSON.parse(res.data.data.list[i].applyContent);
              }
            }

            this.applyContentArr = applyContentArr;
            this.tableDataTitles = res.data.data.title;
            this.tableData = res.data.data.list;
            this.total = res.data.data.total;
            this.num = res.data.data.num;
            this.page = res.data.data.page;
          }
        });
      },
      async initLink(){
        this.mainMenu = 2;
        this.pageDetail = 1;
        this.appName = '';
        this.appletId = '';
        this.formId = '';

        await this.getAppletServerInfo(this.appName);
        let data = this.dataAppletServer;
        if (data && data[0]['children']){
          this.linkId = data[0]['children'][0].id;
          this.defaultExpandedKeys = [data[0].id, data[0]['children'][0].id];
          this.currentNodeKey = data[0]['children'][0].id;
        }
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
      closeDrawerDialog(event){
        this.dialogServerDetail = event;
      },
      cancelDrawDialog(){
        this.dialogServerDetail = false;
      },
      nodeClick(data){
        this.formId = "";
        this.page = 1;

        if (data.unit == 2){
          this.linkId = data.id;
          this.init();
        }
        // if (data.unit != 1){
        //   this.init();
        // }
      },
      handleChangeTime(data){
        this.searchTimeData = data;
      },
      expandInfo(){
        let url = "";
        let params = {
          page: 1,
          num: 86400,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          linkType: this.searchStatusInfo,
          status: this.searchCommitInfo,
          searchKey: this.searchKey,
          linkId: this.linkId
        };
        params = this.$qs.stringify(params);
        url = common.enroll_form_data_export;
        window.open(url+"?"+params, "_self");
      },
      statusInfo(item, type){
        let params = {
          id: item.id,
          status: type,
        };
        let url = common.enroll_form_data_set_status;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      detailInfo(item){
        this.detailData = item;
        if (item.dataContent  && item.dataContent != "[]"){
          let ruleList = [];
          //this.detailApplyContentData = JSON.parse(item.applyContent);
          this.detailApplyContentData = this.setRuleChild(item.dataContent, ruleList);
        }
        this.dialogServerDetail = true;
      },
      setRuleChild(rule, ruleList){
        let obj = {};
        for (let i = 0; i < rule.length; i++){
          if (rule[i]['children'] && rule[i]['children'].length > 0){
            this.setRuleChild(rule[i]['children'], ruleList);
            continue;
          }else {
            if (rule[i].field){
              obj = {
                field: rule[i].field,
                title: rule[i].title,
                type: rule[i].type,
                value: rule[i].value
              }
              ruleList.push(obj);
            }
          }
        }
        return ruleList;
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      handleCascaderChange(data){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        if (data.length == 1){
          this.searchCollege = data[0];
        }else if (data.length == 2){
          this.searchCollege = data[0];
          this.searchMajor = data[1];
        }else if (data.length == 3){
          this.searchCollege = data[0];
          this.searchMajor = data[1];
          this.searchGrade = data[2];
        }else if (data.length == 4){
          this.searchCollege = data[0];
          this.searchMajor = data[1];
          this.searchGrade = data[2];
          this.searchClass = data[3];
        }
        this.page = 1;
        this.init();
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'typeInfo'){
            this.searchStatusInfo = value[item][0];
          }else if (item == 'commitInfo'){
            this.searchCommitInfo = value[item][0];
          }
        }
        this.init();
      }
    }
  }
</script>

<style scoped>
.block-item-row{
  height: 35px;
  line-height: 35px;
}
</style>
