<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">宿舍楼</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加宿舍楼")}}</el-button>
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
            :label="$t('楼号')">
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
            :label="$t('宿舍管理')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.teacher_name ? scope.row.teacher_name : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.teacher_name ? scope.row.teacher_name : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('线上选房')">
            <template slot-scope="scope">
              <span>{{scope.row.chose_limit == 1 ? $t('是') : $t('否')}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-cog margin-right-5 color-grand" @click="setInfo(scope.row)"></i>
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

    <dialog-normal :visible="modalVisible" :title="$t('宿舍楼设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('宿舍楼号')" prop="no">
            <el-input v-model="form.no" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('宿舍楼名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('总楼层数')" prop="floorTotal">
            <el-input v-model="form.floorTotal" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('负责人')">
            <el-input v-model="form.person" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('联系电话')" prop="phone">
            <el-input v-model="form.phone" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('线上选房')" prop="phone">
            <el-input v-model="form.choseName" class="width-260"></el-input>
            <my-check :sel-value="form.choseLimit" @change="handleBoxChange($event, null, 2)"></my-check>
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

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerVisible" :loading="drawerLoading" size="550px" :title="$t('管理员设置')" @right-close="cancelDrawDialog">
      <div slot="content">
        <div>
          <my-input-button ref="teacher" size="small" plain width-class="width: 120px" type="success" :clearable="true" :placeholder="$t('老师名称')" @click="searchTeacher"></my-input-button>
        </div>
        <table class="custom-table margin-top-10">
          <tr>
            <th width="15%"></th>
            <th width="40%">{{$t("姓名")}}</th>
            <th width="10%">{{$t("工号")}}</th>
            <th width="20%">{{$t("手机")}}</th>
            <th width="15%">{{$t("性别")}}</th>
          </tr>
          <tbody v-loading="loadingList" :element-loading-text="$t('加载中...')" element-loading-spinner="el-icon-loading">
          <tr v-for="(item, index) in tableTeacherData" :key="item.id">
            <td>
              <my-check :sel-value="item._teacherId" @change="handleBoxChange($event, item, 1)"></my-check>
            </td>
            <td>{{item.real_name}}</td>
            <td>{{item.job_num}}</td>
            <td>{{item.phone}}</td>
            <td>
              <my-sex :sex="item.sex" tag="text"></my-sex>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <span class="color-danger">{{errorTips}}</span>
          <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="small" type="primary" :loading="drawerLoading" @click="okDrawDialog">{{$t("设置")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import {common} from "../../utils/api/url";
  import mixins from "../../utils/mixins";
  import MyCheck from "../../components/MyCheck";
  import MyNormalDialog from "../../components/utils/dialog/MyNormalDialog";
  import DrawerLayoutRight from "../../components/utils/dialog/DrawerLayoutRight";
  import MySex from "../../components/MySex";
  import {inArray, insterestText, MessageError, MessageSuccess, paddingChecked} from "../../utils/utils";
  import buildValidater from "../../utils/validater/buildValidater";
  import DialogNormal from "../../components/utils/dialog/DialogNormal";
  export default {
    mixins: [mixins, buildValidater],
    components: {MyNormalDialog,DialogNormal,DrawerLayoutRight,MyCheck,MySex},
    data(){
      return {
        tableData: [],
        tableTeacherData: [],
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        loadingList: false,
        subTitle: '',
        errorTips: '',
        searchTeacherName: '',
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
          status: 1,
          phone: '',
          teacherId: [],
          choseName: '',
          choseLimit: false
        }
      }
    },
    created() {
      this.init();
    },
    methods: {
      init(){
        let params = {
          buildingType: 1
        };
        this.$axios(common.build_list, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data;
          }
        });
      },
      initTeacher(){
        let params = {
          page: 1,
          num: 9999
        };
        params['realName'] = this.searchTeacherName;
        this.loadingList = true;
        this.$axios(common.teacher_list, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.page.list.length; i++){
              res.data.data.page.list[i]['_teacherId'] = false;
              paddingChecked(this.form.teacherId, res.data.data.page.list[i], 'user_id', '_teacherId');
            }
            this.tableTeacherData = res.data.data.page.list;
          }
          this.loadingList = false;
        });
      },
      addInfo(){
        this.modalVisible = true;
      },
      setInfo(row){
        this.form.id = row.id;
        let teacher_id = !row.teacher_id ? [] : row.teacher_id.split(",");
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
          teacherId: teacher_id,
          choseName: row.chose_name,
          choseLimit: row.chose_limit
        };
        this.tableTeacherData = [];
        setTimeout(() => {
          this.initTeacher();
        },800);
        this.drawerVisible = true;
      },
      editInfo(row){
        let teacher_id = !row.teacher_id ? [] : row.teacher_id.split(",");
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
          teacherId: teacher_id,
          choseName: row.chose_name,
          choseLimit: row.chose_limit
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
              startStorey: 1,
              type: 1,
              choseName: this.form.choseName,
              choseLimit: this.form.choseLimit == true ? 1 : 0,
              teacherId: this.form.teacherId.join()
            };
            if (this.form.id != ""){
              url = common.build_update;
              params['buildingId'] = this.form.id;
            }else {
              url = common.build_add;
            }
            params = this.$qs.stringify(params);
            this.$axios.post(url, params).then(res => {
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
          phone: '',
          teacherId: [],
          choseName: '',
          choseLimit: false
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
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      closeDrawerDialog(event){
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
          phone: '',
          teacherId: [],
          choseName: '',
          choseLimit: false
        };
        if (this.$refs.teacher){
          this.$refs.teacher.inputValue = "";
        }
        this.drawerVisible = event;
      },
      handleBoxChange(event, item, type) {
        switch (type) {
          case 1:
            if (event) {//选中
              this.form.teacherId.push(item.user_id);
            } else {//取消选中
              let checked = inArray(item.user_id, this.form.teacherId);
              this.form.teacherId.splice(checked, 1);
            }
            break;
          case 2:
            this.form.choseLimit = event;
            break;
        }
      },
      okDrawDialog(event){
        let url = "";
        this.dialogLoading = true;
        let params = {
          buildingId: this.form.id,
          buildingNo: this.form.no,
          buildingName: this.form.name,
          area: this.form.areaTotal,
          propertyRight: this.form.insterest,
          createTime: this.$moment().format("YYYY-MM"),
          storey: this.form.floorTotal,
          person: this.form.person,
          phone: this.form.phone,
          status: 1,
          startStorey: 1,
          type: 1,
          choseName: this.form.choseName,
          choseLimit: this.form.choseLimit == true ? 1 : 0,
          teacherId: this.form.teacherId.join()
        };
        url = common.build_update;
        params = this.$qs.stringify(params);
        this.drawerLoading = true;
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.drawerVisible = false;
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.drawerLoading = false;
        });
      },
      searchTeacher(data){
        this.searchTeacherName = data.input;
        this.initTeacher();
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
</style>
