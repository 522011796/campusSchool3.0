<template>
  <div class="container">
    <div class="layout-left-menu">
      <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
        <!--<span class="layout-left-menu-tag"></span>-->
        <span class="layout-left-menu-title">教室管理</span>
      </div>
      <MyElTree></MyElTree>
    </div>

    <div class="layout-right-menu">
      <div>
        <el-card :body-style="{padding: '15px 10px'}" shadow="never">

        </el-card>
      </div>

      <div class="layout-right-tab margin-top-10">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary" plain  icon="el-icon-plus">{{$t("添加教室")}}</el-button>
          </el-col>
          <el-col :span="12" class="text-right">
            <MyInputButton size="small" plain width-class="width: 150px" type="success" :clearable="true"></MyInputButton>
          </el-col>
        </el-row>
      </div>

      <div>
        <el-table
          :data="tableData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          :max-height="tableHeight.height"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>

      <div class="layout-right-footer text-right">
        <MyPagination class="layout-pagination"></MyPagination>
      </div>
    </div>
  </div>
</template>

<script>
import MyElTree from "../../components/tree/MyElTree";
import MyInputButton from "../../components/search/MyInputButton";
import MyPagination from "../../components/MyPagination";
import mixins from "../../utils/mixins";
export default {
  mixins: [mixins],
  components: {MyElTree,MyInputButton,MyPagination},
  data(){
    return {
      searchInputStyle: "width: 200px",
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped>
.container {

}
</style>
