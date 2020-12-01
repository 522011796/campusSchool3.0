<template>
  <div class="container">
    <div class="container">
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">奖惩申请</span>
          </div>
          <my-el-tree type="1" sub-type="3" @node-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div>
            <div>
              <el-card shadow="never" :body-style="{padding: '5px 10px',height: '120px'}">
                <el-row :gutter="8">
                  <el-col :span="8">
                    <div class="rpStatic-top-item color-muted">
                      <div>{{$t("学生人数")}}: </div>
                      <div>

                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="rpStatic-top-item color-muted">
                      <div>{{$t("类型占比")}}: </div>
                      <div>

                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="rpStatic-top-item color-muted">
                      <div>{{$t("级别占比")}}: </div>
                      <div>

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
                <el-button size="small" type="warning"  icon="el-icon-download">{{$t("导出")}}</el-button>
              </el-col>
              <el-col :span="20" class="text-right">
                <my-select size="small" :placeholder="$t('全部类型')" class="layout-item width-150"></my-select>
                <my-select size="small" :placeholder="$t('全部级别')" class="layout-item width-150"></my-select>
                <my-select size="small" :placeholder="$t('全部状态')" class="layout-item width-150"></my-select>
                <MyInputButton size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('姓名/学号')"></MyInputButton>
              </el-col>
            </el-row>
          </div>
          <div>
            <el-table
              :data="tableData"
              header-cell-class-name="custom-table-cell-bg"
              size="medium"
              :max-height="tableMiddleHeight.height"
              style="width: 100%">
              <el-table-column
                prop="date"
                :label="$t('日期')"
                :show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column
                prop="name"
                :label="$t('姓名')"
                :show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column
                prop="address"
                :label="$t('学号')"
                :show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column
                prop="address"
                :label="$t('班级')"
                :show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column
                prop="address"
                :label="$t('类型')"
                :show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column
                prop="address"
                :label="$t('级别')"
                :show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column
                prop="address"
                :label="$t('说明')"
                :show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column
                prop="address"
                :label="$t('状态/审核人')"
                :show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column
                fixed="right"
                :label="$t('操作')"
                width="60">
                <template slot-scope="scope">
                  <i class="fa fa-eye margin-right-5 color-grand" @click="handleDetail(scope.row)"></i>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div class="layout-right-footer text-right">
            <MyPagination class="layout-pagination"></MyPagination>
          </div>
        </div>
      </layout-lr>
    </div>

    <!--审批详细-->
    <drawer-layout-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="550px" :title="$t('申请单')" @right-close="cancelDrawDialog">
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
  export default {
    mixins: [mixins, MySelect, DrawerLayoutRight,MyAuditDetail],
    components: {MyElTree},
    data(){
      return {
        dataAudit: {},
        drawerVisible: false,
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
      nodeClick(data){
        console.log(data);
      },
      handleDetail(row){
        this.drawerVisible = true;
      },
      closeDrawerDialog(event){
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      }
    }
  }
</script>

<style>
  .container {

  }
</style>
