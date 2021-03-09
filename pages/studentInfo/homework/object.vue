<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">项目管理</span>
        </div>
        <my-el-tree type="2" sub-type="3" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="24">
              <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加项目")}}</el-button>
              <el-button size="small" type="default" :disabled="deviceList.length <= 0" :loading="mutiDeleteLoading"  icon="el-icon-delete" @click="deleteMutiInfo($event)">{{$t("批量删除")}}</el-button>
              <el-button size="small" type="default" :disabled="deviceList.length <= 0"  icon="el-icon-delete" @click="editMutiInfo($event)">{{$t("批量修改")}}</el-button>
            </el-col>
          </el-row>
        </div>

        <div class="margin-top-10">
          <el-table
            ref="refTable"
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :row-key="getRowKeys"
            @selection-change="handleSelectionChange"
            :max-height="tableHeight2.height"
            style="width: 100%">
            <el-table-column
              :reserve-selection="true"
              type="selection"
              align="center"
              width="55">
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('范围')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    {{scope.row.build_name}}-{{scope.row.floor_num}}{{$t("楼")}}-{{scope.row.dormitory_no}}
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.build_name}}-{{scope.row.floor_num}}{{$t("楼")}}-{{scope.row.dormitory_no}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('区域')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    {{areaTypeInfo(scope.row.scope_type)}}
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{areaTypeInfo(scope.row.scope_type)}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('项目')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    {{scope.row.check_item}}
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.check_item}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="weight"
              :label="$t('权重')">
            </el-table-column>
            <el-table-column
              align="center"
              fixed="right"
              label="操作"
              width="120">
              <template slot-scope="scope">
                <i class="fa fa-edit color-grand margin-right-5" @click="editInfo(scope.row)"></i>
                <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </div>
    </layout-lr>

    <dialog-normal :visible="modalVisible" :title="$t('项目设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('区域')" prop="area">
            <my-select :sel-value="form.area" :options="filterAreaStatus" width-style="260" @change="handleSelect($event, 1)"></my-select>
          </el-form-item>
          <el-form-item v-if="form.area != '3'" :label="$t('名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item  :label="$t('权重')" prop="weight">
            <my-select :sel-value="form.weight" :options="weightStatus" width-style="260" @change="handleSelect($event, 2)"></my-select>
          </el-form-item>
          <el-form-item v-if="form.id == '' && editMutiStatus == false" :label="$t('范围')" prop="areaData">
            <el-card shadow="naver" :body-style="{padding: '10px'}" class="width-260" style="height: 200px;overflow-y: auto">
              <my-el-tree ref="areeTree" :defaultCheckedKeys="defaultCheckedKeys" type="2" sub-type="3" :show-checkbox="true"></my-el-tree>
            </el-card>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import MyPagination from "../../../components/MyPagination";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {areaTypeText, MessageError, MessageSuccess, MessageWarning, setChildren} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyUserType from "../../../components/utils/MyUserType";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyInputButton from "../../../components/search/MyInputButton";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MyNormalDialog from "../../../components/utils/dialog/MyNormalDialog";
  import MyElTree from "../../../components/tree/MyElTree";
  import homeworkObjectValidater from "../../../utils/validater/homeworkObjectValidater";
  export default {
    mixins: [mixins, homeworkObjectValidater],
    components: {MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal,MyNormalDialog,MyElTree},
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
        mutiDeleteLoading: false,
        editMutiStatus: false,
        clearTime: '',
        action: '',
        subTitle: '',
        weightStatus: [],
        defaultCheckedKeys: [],
        searchBuild: "",
        searchFloor: "",
        searchRoom: "",
        searchUnit: 1,
        deviceList: [],
        form: {
          id: '',
          type: '',
          name: '',
          weight: '',
          area: '',
          areaData: []
        }
      }
    },
    created() {
      this.init();
      this.initWeight();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          checkType: 1,
          orderAttr: 'check_item',
          orderAsc: false,
          buildId: this.searchBuild,
          floorNum: this.searchFloor,
          dormId: this.searchRoom
        };
        this.$axios.get(common.housework_query_check_item_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      getRowKeys(row) {
        return row.id
      },
      initWeight(){
        this.weightStatus = [];
        for (let i = 0; i < 9; i++){
          this.weightStatus.push({
            label: i+1,
            value: i+1
          });
        }
      },
      addInfo(){
        this.modalVisible = true;
      },
      editMutiInfo(){
        this.editMutiStatus = true;
        this.modalVisible = true;
      },
      deleteMutiInfo(){
        let arr = [];
        for (let i = 0; i < this.deviceList.length; i++){
          arr.push(this.deviceList[i].id);
        }
        let params = {
          idSet: arr.join(),
          reset: true
        };
        params = this.$qs.stringify(params);
        this.mutiDeleteLoading = true;
        this.$axios.post(common.delete_batch_object, params).then(res => {
          if (res.data.code == 200){
            this.init();
            this.deviceList = [];
            this.$refs.refTable.clearSelection();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.mutiDeleteLoading = false;
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
      nodeClick(data){
        this.searchBuild = "";
        this.searchFloor = "";
        this.searchRoom = "";
        this.searchUnit = 1;

        if (data.unit == 6){
          this.searchUnit = 7;
          this.searchBuild = data.id;
        }else if (data.unit == 7){
          this.searchUnit = 7;
          this.searchBuild = data.buildId;
          this.searchFloor = data.id;
        }else if (data.unit == 8){
          this.searchUnit = 8;
          this.searchBuild = data.buildId;
          this.searchFloor = data.floorNum;
          this.searchRoom = data.id;
        }
        this.page = 1;
        this.init();
      },
      handleSelect(data, type){
        switch (type) {
          case 1:
            this.form.area = data;
            break
          case 2:
            this.form.weight = data;
            break
        }
      },
      areaTypeInfo(val){
        return areaTypeText(val);
      },
      editInfo(row){
        this.form = {
          id: row.id,
          type: '',
          name: row.check_item,
          weight: row.weight,
          area: ''+row.scope_type
        };
        this.modalVisible = true;
      },
      deleteInfo(row){
        this.form.id = row.id;
        this.subTitle = row.check_item;
        this.visibleConfim = true;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.form.id
        };
        url = common.housework_query_check_item_del;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.visibleConfim = false;
          this.dialogLoading = false;
        });
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      closeDialog(event){
        let _self = this;
        this.form = {
          id: '',
          type: '',
          name: '',
          weight: '',
          area: '',
          areaData: []
        };
        this.subTitle = "";
        this.editMutiStatus = false;
        if (_self.$refs['areeTree']){
          var node = this.$refs.areeTree.$refs.tree.getCheckedNodes();
          node.forEach((item) => {
            this.$nextTick(() => {
              this.$refs.areeTree.$refs.tree.setChecked(item.id, false,true);
            });
          });
        }
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      okDialog(event){
        let url = "";
        let objArr = [];
        this.$refs['form'].validate((valid) => {
          if (valid) {
            if (this.form.id == '' && this.editMutiStatus == false){
              objArr  = this.setAreaChildren(this.$refs.areeTree.$refs.tree.getCheckedNodes());
              if (objArr.length == 0){
                MessageWarning(this.$t("请选择范围"));
                return;
              }
            }

            this.dialogLoading = true;
            let params = {
              checkType: 1,
              checkItem: this.form.area == 3 ? this.$t("空床") : this.form.name,
              scopeType: this.form.area,
              weight: this.form.weight
            };

            if (this.form.id != ''){
              url = common.housework_query_check_item_edit;
              params['id'] = this.form.id;
            }else if (this.editMutiStatus == true){
              url = common.edit_batch_object;
              let arr = [];
              for (let i = 0; i < this.deviceList.length; i++){
                arr.push(this.deviceList[i].id);
              }
              params['idSet'] = arr.join();
            }else {
              url = common.housework_query_check_item_save;
              params['dormIdSet'] = objArr.join();
            }

            params = this.$qs.stringify(params);
            this.$axios.post(url, params, {loading: false}).then(res => {
              if (res.data.code == 200){
                this.modalVisible = false;
                this.init();
                this.deviceList = [];
                this.$refs.refTable.clearSelection();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
            });
          }
        });
      },
      setAreaChildren(tree){//迭代方法
        let _self = this;
        let obj = [];
        if (tree && tree.length > 0){
          tree.map(function (item,index) {
            if (item.unit == 8){
               obj.push(item.id);
            }

            if(item['children'] != undefined && item['children'].length > 0){
              _self.setAreaChildren(item['children']);
            }
          });
        }
        return obj;
      },
      handleSelectionChange(data){
        this.deviceList = data;
      }
    }
  }
</script>

<style scoped>
  .container {

  }
</style>
