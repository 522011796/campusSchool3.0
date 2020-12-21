<template>
  <div ref="commTeacherList">
    <div>
      <my-cascader ref="SelectorDept" size="small" :clearable="true" width-style="160" :sel-value="searchCommDeptData" type="4" sub-type="" @change="_handleCascaderChange($event)"></my-cascader>
    </div>
    <el-table ref="commTableRef" :data="tableTeacherCommData"
              :max-height="maxHeight"
              size="mini"
              :loading="commLoading"
              :row-key="_getRowKeys"
              @selection-change="_handleSelectionChange">
      <el-table-column
        v-if="type == 'checkbox'"
        :reserve-selection="true"
        type="selection"
        align="center"
        width="55">
      </el-table-column>
      <el-table-column align="center" v-if="type == 'radio'">
        <template slot-scope="scope">
          <my-radio :sel-value="commSelUserVal" v-bind="_selValue" :label="scope.row.user_id" @change="_handleChange(scope.row)"><span></span></my-radio>
        </template>
      </el-table-column>
      <el-table-column property="real_name" align="center" label="姓名">

      </el-table-column>
      <el-table-column property="job_num" align="center" label="工号">

      </el-table-column>
      <el-table-column property="" align="center" label="部门">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
            <div class="text-center">{{scope.row.department_name ? scope.row.department_name : '--'}}</div>
            <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{scope.row.department_name ? scope.row.department_name : '--'}}
            </div>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <div class="text-right margin-top-10">
      <el-pagination
        @size-change="_handleSizeChange"
        @current-change="_handleCurrentChange"
        :current-page="commPage"
        :page-sizes="[10, 20, 30, 50, 100]"
        :page-size="commNum"
        layout="total, sizes, prev, pager, next"
        :total="commTotalTotal">
      </el-pagination>    </div>
  </div>
</template>

<script>
  import MyCascader from "../select/MyCascader";
  import {common} from "../../../utils/api/url";
  import MyRadio from "../../MyRadio";
  export default {
    name: 'teacherTreeAndList',
    components: {MyRadio, MyCascader,MyRadio},
    props: {
      selValue: {
        default: '',
        type: [String , Array]
      },
      type: {
        default: 'radio',
        type: [String, Number]
      },
      maxHeight: {
        default: '300',
        type: [String, Number]
      }
    },
    computed: {
      _selValue() {
        this.commSelUserVal = this.selValue;
      }
    },
    data() {
      return {
        value: '',
        commPage: 1,
        commNum: 20,
        commTotalTotal: 0,
        tableTeacherCommData: [],
        searchCommDeptData: [],
        commSearchKey: '',
        commSearchDept: '',
        commSelUserVal: '',
        commSelUserValObj: {},
        commSelUserValArr: [],
        commLoading: false
      }
    },
    created() {
      //this._initTeacher();
    },
    methods: {
      _initTeacher(){
        let params = {
          page: this.commPage,
          num: this.commNum,
          departPath: this.commSearchDept,
          deleted: 0
        };
        this.commLoading = true;
        params[this.commSearchKey['select']] = this.commSearchKey['input'];
        this.$axios.get(common.teacher_list, {params: params}).then(res => {
          if (res.data.data){
            this.tableTeacherCommData = res.data.data.page.list;
            this.commTotalTotal= res.data.data.page.totalCount;
            this.commNum = res.data.data.page.num;
            this.commPage = res.data.data.page.currentPage;
          }

          this.commLoading = false;
        });
      },
      _handleOpen(){
        this.commPage = 1;
        this.commNum = 20;
        this._initTeacher();
      },
      _handleChange(data, index){
        this.commSelUserVal = data.user_id;
        this.commSelUserValObj = data;
        this.$emit("change", data);
      },
      _handleCascaderChange(data){
        this.commSearchDept = data[data.length-1];
        this._initTeacher();
      },
      _getRowKeys(row) {
        return row.user_id
      },
      _handleSelectionChange(data){
        this.commSelUserValArr = data;
        this.$emit("select", data);
      },
      _handleSizeChange(data){
        this.commPage = 1;
        this.commNum = data;
        this._initTeacher();
      },
      _handleCurrentChange(data){
        this.commPage = data;
        this._initTeacher();
      },
      _handleResetChange(){
        this.value = '';
        this.commNum = 20;
        this.commPage = 1;
        this.searchCommDeptData =  [];
        this.commSearchKey =  '';
        this.commSearchDept =  '';
        this.commSelUserVal =  '';
        this.commSelUserValObj =  {};
        this.commSelUserValArr =  [];

        if (this.$refs.commTableRef){
          this.$refs.commTableRef.clearSelection();
        }

        if (this.$refs.SelectorDept && this.$refs.SelectorDept.$refs.cascaderSelector) {
          this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths()
        }
      }
    }
  }
</script>
