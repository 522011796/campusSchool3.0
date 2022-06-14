<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">数据中心</span>
        </div>
        <my-el-tree ref="appRef" type="110" :show-campus="false" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab">
          <el-row>
            <el-col :span="12">
              <div class="text-left layout-inline">
                <div class="layout-inline">
                  <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
                  <my-cascader class="layout-item" size="small" ref="SelectorCollege" :sel-value="searchCascader" type="4" sub-type="id" width-style="160" @change="handleCascaderChange($event)"></my-cascader>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="text-right layout-inline">
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
            style="width: 100%">
            <el-table-column
              align="center"
              :label="$t('完成状态')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.formName }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.formName }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('完成时间')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ $moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm:ss") }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ $moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm:ss") }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('环境类型')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ $moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm:ss") }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ $moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm:ss") }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('姓名')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">1</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    1
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('录取号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.userNo }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.userNo }}
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
                    <label v-if="scope.row.userType == 4">{{scope.row.departmentName}}</label>
                    <label v-else>{{scope.row.className}}</label>
                  </div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label v-if="scope.row.userType == 4">{{scope.row.departmentName}}</label>
                    <label v-else>{{scope.row.className}}</label>
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
                    <label v-if="scope.row.userType == 4">{{scope.row.departmentName}}</label>
                    <label v-else>{{scope.row.className}}</label>
                  </div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label v-if="scope.row.userType == 4">{{scope.row.departmentName}}</label>
                    <label v-else>{{scope.row.className}}</label>
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
                    <label v-if="scope.row.userType == 4">{{scope.row.departmentName}}</label>
                    <label v-else>{{scope.row.className}}</label>
                  </div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label v-if="scope.row.userType == 4">{{scope.row.departmentName}}</label>
                    <label v-else>{{scope.row.className}}</label>
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
                <i class="fa fa-check-circle color-danger" @click="deleteInfo(scope.row)"></i>
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
              <span>{{$t("学号/工号")}}:</span>
              <span>{{ detailData.userNo }}</span>
            </el-col>
          </el-row>
          <el-row class="margin-top-5">
            <el-col :span="12">
              <span>{{$t("服务名称")}}:</span>
              <span>{{ detailData.formName }}</span>
            </el-col>
            <el-col :span="12">
              <span>{{$t("班级/部门")}}:</span>
              <span>
                <label v-if="detailData.userType == 5">{{ detailData.className }}</label>
                <label v-if="detailData.userType == 4">{{ detailData.departmentName }}</label>
              </span>
            </el-col>
          </el-row>
          <el-row class="margin-top-5">
            <el-col :span="12">
              <span>{{$t("申请日期")}}:</span>
              <span>{{ $moment(detailData.applyTime).format("YYYY-MM-DD HH:mm") }}</span>
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
  export default {
    mixins: [mixins],
    data(){
      return {
        tableData: [],
        tableDataTitles: [],
        searchKey: '',
        appName: '',
        dialogServerDetail: false,
        formId: '',
        detailData: {},
        detailApplyContentData: [],
        searchAuditStatus: '',
        queryApplyListType: 0,
        appletId: '',
        searchTimeData: [],
        searchCascader: []
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
          queryApplyListType: this.queryApplyListType,
          formId: this.formId,
          appletId: this.appletId,
          status: this.searchAuditStatus
        };
        let applyContentArr = [];
        let applyContent = [];
        this.$axios.get(common.server_form_template_form_apply_page, {params: params}).then(res => {
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
          this.appletId = data.id;
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
          queryApplyListType: this.queryApplyListType,
          status: this.searchStatus
        };
        params['formId'] = this.formId;
        params['appletId'] = this.appletId;
        params = this.$qs.stringify(params);
        url = common.server_form_audit_export;
        window.open(url+"?"+params, "_self");
      },
      detailInfo(item){
        this.detailData = item;
        if (item.applyContent  && item.applyContent != "[]"){
          let ruleList = [];
          //this.detailApplyContentData = JSON.parse(item.applyContent);
          this.detailApplyContentData = this.setRuleChild(JSON.parse(item.applyContent), ruleList);
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
        this.searchCascader = data;
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
