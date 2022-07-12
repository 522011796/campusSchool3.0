<template>
  <div ref="commTeacherList">
    <div class="layout-inline">
      <my-cascader class="layout-item" ref="SelectorDept" size="small" width-style="160" :sel-value="searchCommDeptData" type="4" sub-type="" @change="_handleCascaderChange($event)"></my-cascader>
      <my-input-button class="layout-item" size="small" :clearable="true" type="success" plain @click="_handleSearch"></my-input-button>
    </div>
    <el-table ref="commTableRef" :data="tableTeacherCommData"
              :max-height="maxHeight"
              size="mini"
              v-loading="commLoading">
      <el-table-column
        v-if="setType == 'check'"
        align="center"
        v-loading="commTalbeLoading"
        width="55">
        <template slot="header" slot-scope="scope">
          <el-checkbox v-model="commAllCheck" @change="_handleSelectionAllSelect"></el-checkbox>
        </template>

        <template slot-scope="scope">
          <el-checkbox v-model="scope.row._checked" @change="_handleSelectionSelect($event, scope.row)"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column align="center" v-if="setType == 'radio'">
        <template slot-scope="scope">
          <my-radio :sel-value="commSelUserVal" v-bind="_selValue" :label="scope.row.user_id" @change="_handleChange(scope.row)"><span></span></my-radio>
        </template>
      </el-table-column>
      <el-table-column property="real_name" align="center" label="姓名">

      </el-table-column>
      <el-table-column property="job_num" align="center" label="工号">

      </el-table-column>
      <el-table-column property="" align="center" label="部门" width="100">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
            <div class="text-center">{{scope.row.department_name ? scope.row.department_name : '--'}}</div>
            <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{scope.row.department_name ? scope.row.department_name : '--'}}
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column align="center" label="权限类型" width="100">
        <template slot-scope="scope">
          <my-select style="width: 80px" size="mini" :placeholder="$t('请选择')" :sel-value="scope.row.right_type" :options="filterRoleType" @change="_handleSearchChange($event, 1, scope.$index, scope.row)"></my-select>
        </template>
      </el-table-column>
      <el-table-column align="center custom-select-tag" label="院系范围" width="160">
        <template slot-scope="scope">
          <el-select style="width: 150px" size="mini" v-model="scope.row.right_range" multiple collapse-tags placeholder="请选择"
                     @change="_handleSearchChange($event, 2, scope.$index, scope.row)">
            <el-option
              v-for="(item, index) in filterCollType"
              :key="index"
              :label="item.label"
              :value="''+item.value">
            </el-option>
          </el-select>
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
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import MyCascader from "../select/MyCascader";
  import {common} from "../../../utils/api/url";
  import MyRadio from "../../MyRadio";
  import MyInputButton from "../../search/MyInputButton";
  import {inArray, setCollegeChildren} from "../../../utils/utils";
  export default {
    name: 'teacherTreeAndListRoleNoPage',
    components: {MyRadio, MyCascader,MyInputButton},
    props: {
      selValue: {
        default: '',
        type: [String , Array]
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
      userType: {
        default: '',
        type: String
      },
      groupId: {
        default: '',
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
      },
      _selArr() {
        /*let arr = [];
        for (let i = 0; i < this.selArr.length; i++){
          arr.push(this.selArr[i].user_id);
        }*/
        //this.commSelUserArr = this.selArr;
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
        tableTeacherCommData: [],
        searchCommDeptData: [],
        commSearchKey: '',
        commSearchDept: '',
        commSelUserVal: '',
        commSelUserArr: [],
        commSelUserNameArr: [],
        commSelUserTempArr: [],
        commSelUserValObj: {},
        commSelUserValArr: [],
        filterRoleType: [{label: this.$t("查看"), value: 0, text: this.$t("查看")},{label: this.$t("操作"), value: 1, text: this.$t("操作")}],
        filterCollType: [],
        searchRoleType: '',
        searchCollType: '',
        commLoading: false,
        commTalbeLoading: false,
        commFlag: false,
        commMultipleSelection: [],
        commRow: '',
        commGetRowKeys(row) {
          return row.user_id
        }
      }
    },
    created() {
      //this._initTeacher();
      this._initAsync();
    },
    methods: {
      async _initAsync(){
        await this._getCollegeInfo(1);
        this.filterCollType = this._collegeData;
      },
      async _getCollegeInfo(type) {
        let arr = [];
        await this.$axios.get(common.hierarchical_college).then(res => {
          if (res.data.data){
            //this.dataCollege = setCollegeChildren(res.data.data.tree, type);
            for (let i = 0; i < res.data.data.tree.length; i++) {
              arr.push({
                value: res.data.data.tree[i].id,
                id: res.data.data.tree[i].id,
                label: res.data.data.tree[i].name,
                text: res.data.data.tree[i].name,
                unit: res.data.data.tree[i].unit
              });
            }

            this._collegeData = arr;
          }
        });
      },
      _initTeacher(){
        this.checkboxCount = 0;
        let params = {
          page: this.commPage,
          num: this.commNum,
          departPath: this.commSearchDept,
          userType: 'checkDepart',
          type: this.userType,
          groupId: this.groupId
        };
        this.commTalbeLoading = true;
        params['realName'] = this.commSearchKey['input'];
        //this.commSelUserArr = [];
        //this.commSelUserNameArr = [];
        this.commLoading = true;
        this.$axios.get(common.dormaccess_teacher_select_status_page, {params: params}).then(res => {
          if (res.data.data){
            //this.$refs.commTableRef.clearSelection();
            for (let i = 0; i < res.data.data.page.list.length; i++){
              res.data.data.page.list[i]['right_range'] = [];
              res.data.data.page.list[i]['right_type'] = 0;
              let sel = inArray(res.data.data.page.list[i], this.commSelUserArr, 'user_id');
              if (sel > -1){
                this.commFlag = true;
                res.data.data.page.list[i]['_checked'] = true;

                for (let j = 0; j < this.commSelUserArr.length; j++){
                  if (this.commSelUserArr[j].user_id == res.data.data.page.list[i].user_id){
                    let range = this.commSelUserArr[j].right_range;
                    res.data.data.page.list[i]['right_range'] = range;
                    res.data.data.page.list[i]['right_type'] = this.commSelUserArr[j].right_type;
                  }
                }

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
          this.commTalbeLoading = false;
          this.commLoading = false;
        });
      },
      _handleOpen(){
        this.commPage = 1;
        this.commNum = 20;
        this.commSelUserArr = this.selArr;
        setTimeout(()=>{
          this._initTeacher();
        },800);
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
            let checked = inArray(this.tableTeacherCommData[i], this.commSelUserArr, 'user_id');
            this.commSelUserArr.splice(checked,1);
            this.tableTeacherCommData[i]._checked = false;
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
        this.commSelUserArr = [];

        if (this.$refs.SelectorDept && this.$refs.SelectorDept.$refs.cascaderSelector) {
          this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths()
        }
        if (this.$refs.SelectorDept && this.$refs.SelectorDept.$refs.cascaderSelector) {
          this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths()
        }

        //this.$refs.commTableRef.clearSelection();
      },
      _handleSelect(){
        this.commFlag = true;
        let selArr = [];
        let arr = [].concat(this.tableTeacherCommData);
        let arrTempUser = [].concat(this.selArr);

        for (let i = 0; i < arr.length; i++){
          let sel = inArray(arr[i], arrTempUser, 'user_id');
          if (sel > -1){
            selArr.push(arr[i]);
            this.$refs.commTableRef.toggleRowSelection(arr[i], true);
          }
        }
        this.commSelUserTempArr = selArr;
        this.commFlag = false;
      },
      _handleSearch(data){
        this.commSearchKey = data;
        this.commPage = 1;
        this._initTeacher();
      },
      _getSelectData(){
        this.$emit("select", this.commSelUserArr);
      },
      _handleSearchChange(event, type, index, row){
        if (type == 1){
          this.tableTeacherCommData[index]['right_type'] = event;
          this.$emit("selectType", event, row.user_id);
        }else if (type == 2){
          this.tableTeacherCommData[index]['right_range'] = event;
          this.$emit("selectRange", event, row.user_id);
        }
      }
    }
  }
</script>
