<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">建筑楼</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加建筑楼")}}</el-button>
          </el-col>
          <!--<el-col :span="12" class="text-right">
            <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('学院名称')" @click="search"></my-input-button>
          </el-col>-->
        </el-row>
      </div>
      <div slot="content">
        <el-table
          ref="refTable"
          :data="tableData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          :max-height="tableHeight.height"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="building_no"
            :label="$t('编号')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="building_name"
            :label="$t('名称')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="storey"
            :label="$t('总楼层数')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="start_storey"
            :label="$t('起始楼层')">
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('负责人')">
            <template slot-scope="scope">
              <span>{{scope.row.person ? scope.row.person : '--'}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('联系电话')">
            <template slot-scope="scope">
              <span>{{scope.row.phone ? scope.row.phone : '--'}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <!--<my-pagination :total="total" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>-->
          <span class="margin-right-10">{{$t("共")}} {{tableData.length}} {{$t("条")}}</span>
        </div>
      </div>
    </layout-tb>

    <dialog-normal :visible="modalVisible" :title="$t('建筑楼设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('建筑楼编号')" prop="no">
            <el-input v-model="form.no" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('建筑楼名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('总楼层数')" prop="floorTotal">
            <el-input v-model="form.floorTotal" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('起始楼层')" prop="startFloor">
            <el-input v-model="form.startFloor" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('负责人')">
            <el-input v-model="form.person" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('联系电话')" prop="phone">
            <el-input v-model="form.phone" class="width-260"></el-input>
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
import {common} from "../../utils/api/url";
import mixins from "../../utils/mixins";
import MyNormalDialog from "../../components/utils/dialog/MyNormalDialog";
import DialogNormal from "../../components/utils/dialog/DialogNormal";
import {insterestText, MessageError, MessageSuccess} from "../../utils/utils";
import buildValidater from "../../utils/validater/buildValidater";
export default {
  mixins: [mixins, buildValidater],
  components: {MyNormalDialog,DialogNormal},
  data(){
    return {
      tableData: [],
      modalVisible: false,
      dialogLoading: false,
      visibleConfim: false,
      subTitle: '',
      form: {
        id: '',
        no: '',
        name: '',
        areaTotal: '0',
        insterest: '1',
        createTime: '',
        person: '',
        floorTotal: '',
        startFloor: '',
        phone: ''
      }
    }
  },
  created() {
    this.init();
  },
  methods: {
    init(){
      let params = {
        buildingType: 0
      };
      this.$axios(common.build_list, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data;
        }
      });
    },
    addInfo(){
      this.modalVisible = true;
    },
    editInfo(row){
      this.form = {
        id: row.id,
        no: row.building_no,
        name: row.building_name,
        areaTotal: '0',
        insterest: '1',
        createTime: this.$moment().format("YYYY-MM"),
        person: row.person,
        floorTotal: row.storey,
        startFloor: row.start_storey,
        phone: row.phone,
      };
      this.modalVisible = true;
    },
    deleteInfo(row){
      this.form.id = row.id;
      this.subTitle = row.building_name;
      this.visibleConfim = true;
    },
    insterestInfo(val){
      return insterestText(val);
    },
    okDialog(event){
      let url = "";
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.dialogLoading = true;
          let params = {
            buildingNo: this.form.no,
            buildingName: this.form.name,
            area: this.form.areaTotal,
            propertyRight: this.form.insterest,
            createTime: this.$moment().format("YYYY-MM"),
            storey: this.form.floorTotal,
            person: this.form.person,
            phone: this.form.phone,
            status: 1,
            startStorey: this.form.startFloor,
            type: 0
          };
          if (this.form.id != ""){
            url = common.build_update;
            params['buildingId'] = this.form.id;
          }else {
            url = common.build_add;
          }
          params = this.$qs.stringify(params);
          this.$axios.post(url, params, {loading: false}).then(res => {
            if (res.data.code == 200){
              this.modalVisible = false;
              this.init();
              MessageSuccess(res.data.desc);
            }else {
              MessageError(res.data.desc);
            }
            this.dialogLoading = false;
          });
        }
      });
    },
    closeDialog(event){
      this.form = {
        id: '',
        no: '',
        name: '',
        areaTotal: 0,
        insterest: '1',
        createTime: '',
        person: '',
        floorTotal: '',
        startFloor: '',
        phone: ''
      };
      this.subTitle = "";
      if (this.$refs['form']){
        this.$refs['form'].resetFields();
      }
    },
    cancelDialog(){
      this.modalVisible = false;
    },
    handleOkChange(data) {
      this.dialogLoading = true;
      let url = "";
      let params = {
        buildingId: this.form.id
      };
      url = common.build_delete;
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
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
</style>
