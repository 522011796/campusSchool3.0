<template>
  <drawer-layout-right ref="sysFormRef" tabindex="9999" v-bind="selectModel" @opened="_handleOpen" @close="closeDialog" :visible="dialogVisibleInner" :size="size" :title="title" @right-close="cancelDrawDialog">
    <div slot="title">
      <div class="title-block">
        <el-row>
          <el-col :span="12">
            <div class="padding-lr-10">
              <span class="font-bold font-size-14">{{title}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="text-right padding-lr-10">
              <el-button size="small" type="default" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
              <el-button size="small" type="primary" @click="okDrawDialog">{{$t("确认")}}</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div slot="content" class="color-muted">
      <el-table ref="commTableRef" :data="tableTeacherCommData" size="mini" :height="drawHeight3.height" v-loading="commLoading">
        <el-table-column
            v-if="setType == 'check'"
            align="center"
            width="55">
          <template slot="header" slot-scope="scope">
            <el-checkbox v-model="commAllCheck" @change="_handleSelectionAllSelect"></el-checkbox>
          </template>

          <template slot-scope="scope">
            <el-checkbox v-model="scope.row._checked" @change="_handleSelectionSelect($event, scope.row)"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" v-if="setType == 'radio'">
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
    </div>
    <div slot="footer">
      <div class="text-right padding-lr-5">
        <el-pagination
            background
            @size-change="_handleSizeChange"
            @current-change="_handleCurrentChange"
            :current-page="commPage"
            :page-sizes="[10, 20, 30, 50, 100]"
            :page-size="commNum"
            layout="total, sizes, prev, pager, next"
            :total="commTotalTotal">
        </el-pagination>
      </div>
    </div>
  </drawer-layout-right>
</template>

<script>
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight.vue";
  import MyRadio from "~/components/MyRadio.vue";
  import {inArray} from "~/utils/utils";
  import {common} from "~/utils/api/url";
  import mixins from "~/utils/mixins";

  export default {
    name: 'TeacherDialogTreeList',
    mixins: [mixins],
    components: {MyRadio, DrawerLayoutRight},
    props: {
      dialogVisible: {
        default: false,
        type: Boolean
      },
      selArr: {
        default: function () {
          return [];
        },
        type: Array
      },
      setType: {
        default: 'radio',
        type: [String, Number]
      },
      title: {
        default: '',
        type: String
      },
      size: {
        default: '600px',
        type: String
      }
    },
    computed: {
      _selValue() {
        this.commSelUserVal = this.selValue;
      },
      selectModel(){
        this.dialogVisibleInner = this.dialogVisible;
      }
    },
    data() {
      return {
        commAllCheck: false,
        commAllCheckCount: 0,
        value: '',
        commPage: 1,
        commNum: 20,
        commTotalTotal: 0,
        dialogVisibleInner: false,
        commLoading: false,
        commFlag: false,
        commSearchKey: '',
        commSearchDept: '',
        commSelUserVal: '',
        tableTeacherCommData: [],
      }
    },
    created() {

    },
    methods: {
      _initTeacher(){
        let selTeacherArray = [];
        for (let i = 0; i < this.selArr.length; i++){
          selTeacherArray.push(this.selArr[i].user_id);
        }

        this.checkboxCount = 0;
        let params = {
          page: this.commPage,
          num: this.commNum,
          departPath: this.commSearchDept,
          deleted: 0,
          //topUserId: selTeacherArray
        };
        this.commLoading = true;
        params['realName'] = this.commSearchKey['input'];
        //this.commSelUserArr = [];
        //this.commSelUserNameArr = [];
        this.$axios.get(common.teacher_list, {params: params, loading: false}).then(res => {
          if (res.data.data){
            //this.$refs.commTableRef.clearSelection();
            for (let i = 0; i < res.data.data.page.list.length; i++){
              let sel = inArray(res.data.data.page.list[i], this.commSelUserArr, 'user_id');
              if (sel > -1){
                this.commFlag = true;
                res.data.data.page.list[i]['_checked'] = true;
                this.checkboxCount++;
              }else {
                res.data.data.page.list[i]['_checked'] = false;
              }
            }
            if (this.checkboxCount != 0 && this.checkboxCount == this.tableTeacherCommData.length){
              this.commAllCheck = true;
            }else {
              this.commAllCheck = false;
            }
            this.commFlag = false;
            this.tableTeacherCommData = res.data.data.page.list;
            this.commTotalTotal= res.data.data.page.totalCount;
            this.commNum = res.data.data.page.num;
            this.commPage = res.data.data.page.currentPage;
            //this._handleSelect();
          }
          this.commLoading = false;
        });
      },
      closeDialog(){
        this.$emit('closeParentDialog');
        this.commSelUserVal = '';
        this.commSelUserArr = [];
        this.commAllCheckCount= 0;
        this.dialogVisibleInner = false;
      },
      cancelDrawDialog(){
        this.dialogVisibleInner = false;
      },
      okDrawDialog(){
        if (this.setType == 'radio'){
          this.$emit('okDrawDialog', this.commSelUserVal);
        }else if (this.setType == 'check'){
          this.$emit('okDrawDialog', this.commSelUserArr);
        }
      },
      _handleOpen(){
        this.commPage = 1;
        this.commNum = 20;
        this.commSelUserArr = this.selArr;
        this._initTeacher();
      },
      _handleChange(data, index){
        this.commSelUserVal = data.user_id;
        this.commSelUserValObj = data;
        this.$emit("change", data);
      },
      _handleCascaderChange(data){
        this.commSearchDept = data[data.length-1];
        this.commPage = 1;
        this._initTeacher();
      },
      _handleSelectionSelect(event, row){
        if (event){//选中
          this.commSelUserArr.push(row);
          row._checked = true;
          this.checkboxCount++;
        }else {//取消选中
          let checked = inArray(row, this.commSelUserArr, 'user_id');
          this.commSelUserArr.splice(checked,1);
          row._checked = false;
          this.checkboxCount--;
        }
        if (this.checkboxCount != 0 && this.checkboxCount == this.tableTeacherCommData.length){
          this.commAllCheck = true;
        }else {
          this.commAllCheck = false;
        }
        this.$emit("select", this.commSelUserArr);
      },
      _handleSelectionAllSelect(selection){
        this.commAllCheck = selection;
        for (let i = 0; i < this.tableTeacherCommData.length; i++){
          if (selection == true){
            this.tableTeacherCommData[i]._checked = true;
            let checked = inArray(this.tableTeacherCommData[i], this.commSelUserArr, 'user_id');
            if (checked == -1){
              this.commSelUserArr.push(this.tableTeacherCommData[i]);
            }
            this.checkboxCount++;
          }else {
            this.tableTeacherCommData[i]._checked = false;
            let checked = inArray(this.tableTeacherCommData[i], this.commSelUserArr, 'user_id');
            if (checked > -1){
              this.commSelUserArr.splice(checked, 1);
            }
            this.checkboxCount--;
          }
        }
        this.$emit("select", this.commSelUserArr);
      },
      _handleSelectionChange(data){

      },
      _handleSizeChange(data){
        this.commPage = 1;
        this.commNum = data;
        this._initTeacher();
      },
      _handleCurrentChange(data){
        this.commPage = data;
        this._initTeacher();
      }
    }
  }
</script>

<style scoped>
.title-block{
  height: 40px;
  line-height: 40px;
}
</style>
