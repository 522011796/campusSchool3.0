<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">陌生人记录</template>

      <div slot="tab">
        <el-row>
          <el-col :span="24" class="text-right">
            <div>
              <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
              <el-button type="success" plain size="small" @click="search">{{$t("搜索")}}</el-button>
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
            prop="level_type"
            :label="$t('设备类型')">
            <template slot-scope="scope">
              <span>{{deviceTypeInfo(scope.row.type)}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="sn"
            :label="$t('SN')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="ip"
            :label="$t('IP')">
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('识别时间')">
            <template slot-scope="scope">
              <span>{{$moment(scope.row.time).format("YYYY-MM-DD hh:mm:ss")}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('照片抓拍')">

            <template slot-scope="scope">
              <span>
                <my-head-img :head-img="scope.row"></my-head-img>
              </span>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>
  </div>
</template>

<script>
  import MyPagination from "../../../components/MyPagination";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {deviceType, MessageError, MessageSuccess} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyUserType from "../../../components/utils/MyUserType";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyInputButton from "../../../components/search/MyInputButton";
  import levelValidater from "../../../utils/validater/levelValidater";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  export default {
    mixins: [mixins, levelValidater],
    components: {MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal},
    data(){
      return {
        tableData: [],
        searchDate: [],
        typeList: [],
        searchKey: '',
        visible: false,
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        clearTime: '',
        action: '',
        subTitle: '',
        form: {
          id: '',
          name: '',
          type: ''
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
          beginTime: this.searchDate ? this.searchDate[0] : '',
          endTime: this.searchDate ? this.searchDate[1] : ''
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.stranger_page, params).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      handleChange(data){
        this.searchDate = data;
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
      deviceTypeInfo(val){
        return deviceType('set',val);
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
</style>
