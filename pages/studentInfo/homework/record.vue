<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">检查记录</template>

      <div slot="tab">
        <!--<my-search-of-date size="small" :show-year="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType">
          <span slot="other" class="layout-inline">
            <my-select size="small" :sel-value="checkStatus" :options="filterCheckStatus" :clearable="true" class="layout-item width-150" @change="handleSelect"></my-select>
            <el-input size="small" :placeholder="$t('宿舍号')" :clearable="true" v-model="searchKey" class="layout-item width-150"></el-input>
          </span>
        </my-search-of-date>-->
        <my-search-of-date-group size="small" :show-year="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType">
          <span slot="opr">
            <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
          </span>
          <span slot="other" class="layout-inline">
            <my-select size="small" :sel-value="checkStatus" :options="filterCheckStatus" :clearable="true" class="layout-item width-150" @change="handleSelect"></my-select>
            <el-input size="small" :placeholder="$t('宿舍号')" :clearable="true" v-model="searchKey" class="layout-item width-150"></el-input>
          </span>
        </my-search-of-date-group>
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
            prop="busiTime"
            :label="$t('时间')">
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('宿舍楼')">

            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.buildName ? scope.row.buildName : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.buildName ? scope.row.buildName : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="floorNum"
            :label="$t('楼层')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="roomNo"
            :label="$t('房间')">
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('类型')">

            <template slot-scope="scope">
              <span>{{dormTypeInfo(scope.row.roomType)}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="userCount"
            :label="$t('人数')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="checkItemCount"
            :label="$t('项目数')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="socre_name"
            :label="$t('检查人')">

            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center name-wrapper moon-content-text-ellipsis-class">
                  <span v-if="scope.row.permUserList.length <= 0">--</span>
                  <span v-else v-for="(item,index) in scope.row.permUserList">
                    {{item.realName}}
                  </span>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span v-if="scope.row.permUserList.length <= 0">--</span>
                  <span v-else v-for="(item,index) in scope.row.permUserList">
                    {{item.realName}}
                  </span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="socre_name"
            :label="$t('合格率')">

            <template slot-scope="scope">
              <span>{{scope.row.allScopeRate}}</span>%
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="socre_name"
            :label="$t('状态')">

            <template slot-scope="scope">
              <span v-if="scope.row.checkStatus" class="color-success">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center name-wrapper moon-content-text-ellipsis-class">
                    <span v-if="scope.row.permUserList <= 0">
                      --
                    </span>
                    <div v-else v-for="(item,index) in scope.row.permUserList">
                      <span>{{item.realName}}</span>
                      <span>
                        <label v-if="item.checkStatus == false" class="color-danger">{{$t("未检查")}}</label>
                        <label v-if="item.checkStatus == true" class="color-success">{{$t("已检查")}}</label>
                      </span>
                    </div>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{$t("已检查")}}
                  </div>
                </el-popover>
              </span>
              <span v-else class="title-tag color-warning">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-left name-wrapper moon-content-text-ellipsis-class">
                    <span v-if="scope.row.permUserList <= 0">
                      --
                    </span>
                    <div v-else v-for="(item,index) in scope.row.permUserList">
                      <span>{{item.realName}}</span>
                      <span>
                        <label v-if="item.checkStatus == false" class="color-danger">{{$t("未检查")}}</label>
                        <label v-if="item.checkStatus == true" class="color-success">{{$t("已检查")}}</label>
                      </span>
                    </div>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{$t("未检查")}}
                  </div>
                </el-popover>
              </span>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>
  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MyInputButton from "../../../components/search/MyInputButton";
  import MyDatePicker from "../../../components/MyDatePicker";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import MySearchOfDate from "../../../components/search/MySearchOfDate";
  import {common} from "../../../utils/api/url";
  import {dormTypeText, MessageError} from "../../../utils/utils";
  import MySelect from "../../../components/MySelect";
  export default {
    mixins: [mixins],
    components: {MySelect, LayoutTb,MyInputButton,MyDatePicker,DrawerLayoutRight,MySearchOfDate},
    data(){
      return {
        tableData: [],
        searchTermId: '',
        searchTimeUnit: '',
        applyTimeBegin: '',
        applyTimeEnd: '',
        searchTime: '',
        searchTopTime: this.$moment(new Date()).format("YYYY-MM-DD"),
        searchData: {},
        searchTimeDate: [],
        tableTypeData: [],
        checkStatus: '',
        searchKey: ''
      }
    },
    created() {
      this.init();
    },
    methods: {
      async init(){
        await this.getSessionInfo();
        this.initRecordInfo();
      },
      initRecordInfo(){
        let params = {
          page: this.page,
          num: this.num,
          buildId: this.searchCollege,
          floorNum: this.searchMajor,
          roomNo: this.searchKey,
          termId: this.currentTermId,
          isRecord: true,
          checkType: 1,
          checkStatus: this.checkStatus
        };
        //时间类型
        if (this.searchData.timeUnit == 1){
          params['busiTime'] = this.searchData.value;
          params['checkIntervalType'] = 3;
        }else if (this.searchData.timeUnit == 2){
          params['weekNum'] = this.searchData.value;
          params['checkIntervalType'] = 2;
        }else if (this.searchData.timeUnit == 3){
          params['year'] = this.searchData.value.split("-")[0];
          params['month'] = this.searchData.value.split("-")[1];
          params['checkIntervalType'] = 4;
        }else if (this.searchData.timeUnit == 5){
          params['checkIntervalType'] = 1;
        }else {
          params['busiTime'] = this.$moment(new Date()).format("YYYY-MM-DD");
          params['checkIntervalType'] = 3;
        }
        this.$axios.get(common.housework_query_page, {params: params}).then(res => {
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
      dormTypeInfo(val){
        return dormTypeText(val);
      },
      searchTopDate(data){
        this.searchData = data;
        this.page = 1;
        this.initRecordInfo();
      },
      searchTopType(data){
        this.page = 1;
        //this.initLeaveInfo();
      },
      handleSelect(data){
        this.checkStatus = data;
      },
      expandInfo(){
        let url = common.housework_query_record_export;
        let params = {
          page: this.page,
          num: this.num,
          buildId: this.searchCollege,
          floorNum: this.searchMajor,
          roomNo: this.searchKey,
          termId: this.currentTermId,
          isRecord: true,
          checkType: 1,
          checkStatus: this.checkStatus
        };
        //时间类型
        if (this.searchData.timeUnit == 1){
          params['busiTime'] = this.searchData.value;
          params['checkIntervalType'] = 3;
        }else if (this.searchData.timeUnit == 2){
          params['weekNum'] = this.searchData.value;
          params['checkIntervalType'] = 2;
        }else if (this.searchData.timeUnit == 3){
          params['year'] = this.searchData.value.split("-")[0];
          params['month'] = this.searchData.value.split("-")[1];
          params['checkIntervalType'] = 4;
        }else if (this.searchData.timeUnit == 5){
          params['checkIntervalType'] = 1;
        }else {
          params['busiTime'] = this.$moment(new Date()).format("YYYY-MM-DD");
          params['checkIntervalType'] = 3;
        }
        params = this.$qs.stringify(params);
        window.open(url+"?"+params, "_self");
      }
    }
  }
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
</style>
