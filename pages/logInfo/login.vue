<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">登录日志</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-popover
              placement="right"
              width="180"
              v-model="visible"
              @hide="closePopover">
              <div>
                <my-date-picker :sel-value="clearTime" :clearable="true" size="small" width-style="180" @change="handleClear"></my-date-picker>
              </div>
              <div class="margin-top-5 text-right">
                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                <el-button type="text" class="color-danger" size="mini" @click="clearInfo">确定</el-button>
              </div>
              <el-button slot="reference" size="small" type="primary"  icon="el-icon-delete">{{$t("清空")}}</el-button>
            </el-popover>
          </el-col>
          <el-col :span="12" class="text-right">
            <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
            <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('登录人')" @click="search"></my-input-button>
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
            prop="department_name"
            :label="$t('时间')">

            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{$moment(scope.row.time).format("YYYY-MM-DD hh:mm:ss")}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{$moment(scope.row.time).format("YYYY-MM-DD hh:mm:ss")}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="action_name"
            :label="$t('类型')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="user_name"
            :label="$t('操作人')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="ip"
            :label="$t('IP')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="user_type"
            :label="$t('操作人类型')">

            <template slot-scope="scope">
              <my-user-type :type="scope.row.user_type"></my-user-type>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('内容')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.content}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.content}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>
  </div>
</template>

<script>
  import MyPagination from "../../components/MyPagination";
  import mixins from "../../utils/mixins";
  import {common} from "../../utils/api/url";
  import {MessageError, MessageSuccess} from "../../utils/utils";
  import LayoutTb from "../../components/Layout/LayoutTb";
  import MySelect from "../../components/MySelect";
  import MyUserType from "../../components/utils/MyUserType";
  import MyDatePicker from "../../components/MyDatePicker";
  import MyInputButton from "../../components/search/MyInputButton";
export default {
  mixins: [mixins],
  components: {MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton},
  data(){
    return {
      tableData: [],
      searchDate: [],
      searchKey: '',
      visible: false,
      clearTime: ''
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
        startTime: this.searchDate ? this.searchDate[0] : '',
        endTime: this.searchDate ? this.searchDate[1] : '',
        userName: this.searchKey,
        queryType: 1
      };
      this.$axios.get(common.log_list, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },
    clearInfo(){
      if (this.clearTime == ""){
        MessageSuccess(this.$t("请选择需要清空的日期"));
        return;
      }
      let params = {
        time: this.clearTime ? this.clearTime + " 23:59:59" : ''
      };
      params = this.$qs.stringify(params);
      this.$axios.post(common.log_clear, params).then(res => {
        if (res.data.code ==200){
          this.visible = false;
          this.init();
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
      });
    },
    search(data){
      this.searchKey = data.input;
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
    handleChange(data){
      this.searchDate = data;
    },
    handleClear(data){
      this.clearTime = data;
    },
    closePopover(){
      this.clearTime = "";
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
</style>
