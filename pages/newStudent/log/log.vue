<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">登录日志</template>

      <div slot="tab">
        <el-row>
<!--          <el-col :span="6">-->
<!--            <el-popover-->
<!--              placement="right"-->
<!--              width="180"-->
<!--              v-model="visible"-->
<!--              @hide="closePopover">-->
<!--              <div>-->
<!--                <my-date-picker :sel-value="clearTime" :clearable="true" size="small" width-style="180" @change="handleClear"></my-date-picker>-->
<!--              </div>-->
<!--              <div class="margin-top-5 text-right">-->
<!--                <el-button size="mini" type="text" @click="visible = false">取消</el-button>-->
<!--                <el-button type="text" class="color-danger" size="mini" @click="clearInfo">确定</el-button>-->
<!--              </div>-->
<!--              <el-button slot="reference" size="small" type="primary"  icon="el-icon-delete">{{$t("清空")}}</el-button>-->
<!--            </el-popover>-->
<!--          </el-col>-->
          <el-col :span="24" class="text-right">
            <div class="layout-inline text-right">
              <my-select size="small" :clearable="true" :options="typeList" class="layout-item" @change="handleSelect"></my-select>
              <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
              <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('登录人')" @click="search"></my-input-button>
            </div>
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
                <div class="text-center">{{$moment(scope.row.time).format("YYYY-MM-DD HH:mm:ss")}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{$moment(scope.row.time).format("YYYY-MM-DD HH:mm:ss")}}
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
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>
  </div>
</template>

<script>
import MyPagination from "~/components/MyPagination";
import mixins from "~/utils/mixins";
import {common} from "~/utils/api/url";
import {MessageError, MessageSuccess} from "~/utils/utils";
import LayoutTb from "~/components/Layout/LayoutTb";
import MySelect from "~/components/MySelect";
import MyUserType from "~/components/utils/MyUserType";
import MyDatePicker from "~/components/MyDatePicker";
import MyInputButton from "~/components/search/MyInputButton";
export default {
  mixins: [mixins],
  components: {MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton},
  data(){
    return {
      tableData: [],
      searchDate: [],
      typeList: [],
      searchKey: '',
      visible: false,
      clearTime: '',
      action: ''
    }
  },
  created() {
    this.init();
    this.initType();
  },
  methods: {
    init(){
      let params = {
        page: this.page,
        num: this.num,
        startTime: this.searchDate && this.searchDate.length > 0 ? (this.searchDate[0] + " 00:00:00") : '',
        endTime: this.searchDate && this.searchDate.length > 0 ? (this.searchDate[1] + " 23:59:59") : '',
        searchKey: this.searchKey,
        queryType: 2,
        action: this.action,
        parentId: 16
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
    initType(){
      let params = {
        parentId: 16
      };
      this.$axios.get(common.enroll_list_by_parent_id, {params: params}).then(res => {
        if (res.data.data){
          let arr = [];
          for (let i = 0; i < res.data.data.length; i++){
            arr.push({
              label: res.data.data[i].name,
              id: res.data.data[i].id,
              value: res.data.data[i].action,
            });
          }
          this.typeList = arr;
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
      this.page = 1;
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
    handleChange(data){
      this.searchDate = data;
    },
    handleClear(data){
      this.clearTime = data;
    },
    closePopover(){
      this.clearTime = "";
    },
    handleSelect(data){
      this.action = data;
      this.init();
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
</style>
