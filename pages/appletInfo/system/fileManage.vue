<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">附件管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="24" class="text-right">
<!--            <my-date-picker size="small" :sel-value="searchTime" @change="handleChangeTime($event,1)"></my-date-picker>-->
            <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('请输入信息')" @click="search"></my-input-button>
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
            :label="$t('上传时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{$moment(scope.row.create_time).format("YYYY-MM-DD HH:mm")}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{$moment(scope.row.create_time).format("YYYY-MM-DD HH:mm")}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('附件名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('大小')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('所属人')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('所属部门')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('来源服务')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('关联单据号')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('关联费用')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="140">
            <template slot-scope="scope">
              <a href="javascript:;" class="color-success" @click="downInfo(scope.row, false)">{{$t("下载")}}</a>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal top="10vh" :visible="dialogType" :title="$t('类别设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('类别名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
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
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {MessageError, MessageSuccess} from "~/utils/utils";
  import appTypeValidater from "~/utils/validater/appTypeValidater";

  export default {
    mixins: [mixins, appTypeValidater],
    data(){
      return {
        subTitle: '',
        tableData: [],
        dialogType: false,
        visibleConfim: false,
        dialogLoading: false,
        searchKey: '',
        searchTime: this.$moment(new Date()).format("YYYY-MM-DD"),
        form: {
          id: '',
          name: '',
          enable: true
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
          searchKey: this.searchKey,
          busiTime: this.searchTime,
        };
        this.$axios.get(common.server_type_list, {params: params}).then(res => {
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
      addInfo(){
        this.dialogType = true;
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
      editInfo(item){
        this.form = {
          id: item.id,
          name: item.category_name,
          enable: item.enable
        };
        this.dialogType = true;
      },
      downInfo(){

      },
      closeDialog(event){
        this.form = {
          id: '',
          name: '',
          enable: true
        };
        this.subTitle = "";
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      cancelDialog(){
        this.dialogType = false;
      },
      okDialog(){
        let url = '';
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              categoryName: this.form.name,
            };
            if (this.form.id != ''){
              params['id'] = this.form.id;
            }
            url = common.server_type_save;
            params = this.$qs.stringify(params);
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.dialogType = false;
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
      handleChangeTime(data){
        this.searchTime = data;
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.form.id
        }
        url = common.server_type_delete;
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
      }
    }
  }
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
</style>
