<template>
  <div ref="areaTreeListRef" v-bind="selData">
    <div>
      <el-radio-group v-model="form.rangeType" @change="handleSeeChange">
        <el-radio label="0">{{ $t('全部可见') }}</el-radio>
        <el-radio label="1">{{ $t('部分可见') }}</el-radio>
      </el-radio-group>
    </div>
    <div>
      <div class="margin-top-10" v-if="form.rangeType == 1">
        <div>
          <el-button :type="selRangeType == 1 ? 'success' : ''" size="mini" @click="handleSelRangeType($event,1)">{{ $t('组织架构') }}</el-button>
          <el-button :type="selRangeType == 2 ? 'success' : ''" size="mini" @click="handleSelRangeType($event,2)">{{ $t('部门') }}</el-button>
          <el-button :type="selRangeType == 3 ? 'success' : ''" size="mini" @click="handleSelRangeType($event,3)">{{ $t('角色') }}</el-button>
        </div>
        <div class="margin-top-10 block-div-class" :style="{height: height+'px'}">
          <div v-show="selRangeType == 1">
            <div class="range-left" :style="{height: height+'px'}">
              <my-el-tree-block type="4" sub-type="" :show-filter="false" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree-block>
            </div>
            <div class="range-right padding-lr-5" :style="{height: height+'px'}">
              <div class="rang-right-search-block">
                <el-row>
                  <el-col :span="24" class="text-right">
                    <my-input-button ref="teacher" size="mini" plain width-class="width: 120px" type="success" :clearable="true" :placeholder="$t('请输入信息')" @click="searchSel"></my-input-button>
                  </el-col>
                </el-row>
              </div>
              <div class="custom-table-el8px">
                <el-table
                    ref="tableRefSel"
                    v-loading="teacherLoading"
                    :data="tableSelData"
                    header-row-class-name="custom-table-header-bg"
                    header-cell-class-name="custom-table-cell-bg"
                    size="small"
                    :row-key="getRowKeys"
                    :max-height="height-70+'px'"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                  <el-table-column
                      :reserve-selection="true"
                      type="selection"
                      align="center"
                      width="55">
                  </el-table-column>
                  <el-table-column
                      align="center"
                      :label="$t('名称')">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.real_name}}</div>
                        <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                                {{scope.row.real_name}}
                              </span>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                      align="center"
                      :label="$t('部门')">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.department_name}}</div>
                        <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                                {{scope.row.department_name}}
                              </span>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="性别" :show-overflow-tooltip="true">
                    <template slot-scope="scope">
                      <my-sex :sex="scope.row.sex" tag="text"></my-sex>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="text-right" style="height: 35px;line-height: 35px">
                  <el-pagination
                      background
                      :pager-count="pageCount"
                      :page-sizes="[10, 20, 50, 100]"
                      layout="sizes, prev, pager, next"
                      :total="totalTeacher"
                      :current-page="pageTeacher"
                      :page-size="numTeacher"
                      @size-change="sizeTeacherChange"
                      @current-change="currentTeacherPage">
                  </el-pagination>
                </div>
              </div>
            </div>
          </div>
          <div v-show="selRangeType == 2">
            <div class="rang-block">
              <my-el-tree-block ref="deptRefSel" type="4" sub-type="" node-key="department_path" :show-filter="false" :show-campus="false" :show-checkbox="true" :defaultCheckedKeys="defaultCheckedKeys"></my-el-tree-block>
            </div>
          </div>
          <div v-show="selRangeType == 3">
            <div class="rang-block">
              <my-el-tree-block ref="roleRefSel" type="150" sub-type="" :show-filter="false" :show-campus="false" :show-checkbox="true" :defaultCheckedKeys="defaultCheckedRoleKeys"></my-el-tree-block>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {common} from "~/utils/api/url";
  import {inArray} from "~/utils/utils";
  import MyElTreeBlock from "~/components/tree/MyElTreeBlock.vue";

  export default {
    name: 'AreaAndSelTreeList',
    components: {MyElTreeBlock},
    props: {
      height: {
        default: '',
        type: Number
      },
      userRange: {
        default: function (){
          return [];
        },
        type: Array
      },
      deptRange: {
        default: function (){
          return [];
        },
        type: Array
      },
      roleRange: {
        default: function (){
          return [];
        },
        type: Array
      }
    },
    computed: {
      selData(){
        console.log(111);
        this.form['userRange'] = this.userRange;
        this.defaultCheckedRoleKeys = this.roleRange;
        this.defaultCheckedKeys = this.deptRange;
      }
    },
    data() {
      return {
        pageCount: 5,
        pageTeacher: 1,
        numTeacher: 20,
        totalTeacher: 0,
        tableSelData: [],
        defaultCheckedKeys: [],
        defaultCheckedRoleKeys: [],
        selRangeType: 1,
        searchKey: '',
        selTreeId: '',
        rowSelectFlag: false,
        teacherLoading: false,
        form: {
          userRange: [],
          deptRange: [],
          roleRange: []
        },
      }
    },
    created() {

    },
    methods: {
      handleSeeChange(event){
        if (event == 1){
          this.pageTeacher = 1;
          this.teacherLoading = true;
          setTimeout(() => {
            this.initTeacher();
          },800);
        }
      },
      initTeacher(){
        let params = {
          page: this.pageTeacher,
          num: this.numTeacher,
          deleted: 0,
          departPath: this.selTreeId,
        };
        params['realName'] = this.searchKey['input'];
        this.$axios.get(common.teacher_list, {params: params, loading: false}).then(res => {
          if (res.data.data){
            this.tableSelData = res.data.data.page.list;
            this.totalTeacher = res.data.data.page.totalCount;
            this.numTeacher = res.data.data.page.num;
            this.pageTeacher = res.data.data.page.currentPage;

            setTimeout(() => {
              this.rowSelectFlag = true;
              let arr = this.form['userRange'] && this.form.userRange.length > 0 ? JSON.parse(JSON.stringify(this.form.userRange)) : [];
              for (let i = 0; i < this.tableSelData.length; i++){
                let sel = inArray(this.tableSelData[i], arr, 'user_id');
                if (sel > -1){
                  if (this.$refs['tableRefSel']){
                    this.$refs.tableRefSel.toggleRowSelection(this.tableSelData[i], true);
                  }
                }
              }
              this.rowSelectFlag = false;
            },0);

            this.teacherLoading = false;
          }
        });
      },
      getRowKeys(row) {
        return row.user_id;
      },
      sizeTeacherChange(event){
        this.pageTeacher = 1;
        this.numTeacher = event;
        this.initTeacher();
      },
      currentTeacherPage(event){
        this.pageTeacher = event;
        this.initTeacher();
      },
      handleSelRangeType(event, type){
        if (type == 1){
          this.pageTeacher = 1;
          this.teacherLoading = true;
          setTimeout(() => {
            this.initTeacher();
          },800);
        }
        this.selRangeType = type;
      },
      nodeClick(data){
        this.selTreeId = data.id ? data.id : '';
        this.initTeacher();
      },
      searchSel(event){
        this.searchKey = event;
        this.initTeacher();
      },
      handleSelectionChange(data){
        if (this.rowSelectFlag) return;
        this.form.userRange = data;
        console.log(this.form.userRange);
      },
      setAreaChildren(tree, type){//迭代方法
        let _self = this;
        let obj = [];
        if (tree && tree.length > 0){
          tree.map(function (item,index) {
            if (type == 'dept'){
              obj.push(item.department_path);
            }else {
              obj.push(item.id);
            }

            if(item['children'] != undefined && item['children'].length > 0){
              _self.setAreaChildren(item['children']);
            }
          });
        }
        return obj;
      },
      getCurrentSettingData(){
        let obj = {};
        let userArray  = [];
        let deptArr = [];
        let roleArr = [];

        if (this.$refs['deptRefSel']){
          deptArr  = this.setAreaChildren(this.$refs.deptRefSel.$refs.tree.getCheckedNodes(), 'dept');
        }
        if (this.$refs['roleRefSel']){
          roleArr  = this.setAreaChildren(this.$refs.roleRefSel.$refs.tree.getCheckedNodes());
        }

        if (deptArr.length > 0){
          obj['deptRange'] = deptArr.join();
        }else {
          obj['deptRange'] = '';
        }

        if (roleArr.length > 0){
          obj['roleRange'] = roleArr.join();
        }else {
          obj['roleRange'] = '';
        }

        obj['userRange'] = '';
        if (this.form.userRange.length > 0){
          for (let i = 0; i < this.form.userRange.length; i++){
            userArray.push(this.form.userRange[i].user_id);
          }
          obj['userRange'] = userArray.join();
        }
        return obj;
      }
    }
  }
</script>

<style scoped>
.block-div-class{
  width: 100%;
  border: 1px solid #dddddd;
  border-radius: 5px;
}
.range-left{
  float: left;
  width: 200px;
  border-right: 1px solid #dddddd;
  overflow-y: auto;
}
.range-right{
  margin-left: 201px;
  overflow-y: auto;
}
.rang-right-search-block{
  height: 35px;
  line-height: 35px;
}
.rang-block{
  height: 350px;
  overflow-y: auto;
}
</style>
