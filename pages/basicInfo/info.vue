<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">校园资讯</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("发布资讯")}}</el-button>
          </el-col>
          <!--<el-col :span="12" class="text-right">
            <MyInputButton size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('名称/编号')" @click="search"></MyInputButton>
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
            :label="$t('标题')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.title ? scope.row.title : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.title ? scope.row.title : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('类型')">
            <template slot-scope="scope">
              <span v-if="scope.row.type == 1">{{$t('前沿科技')}}</span>
              <span v-if="scope.row.type == 2">{{$t('校园招聘')}}</span>
              <span v-if="scope.row.type == 3">{{$t('就业指导')}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="sender_name"
            :label="$t('发布人')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="department_no"
            :label="$t('发布时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.release_time ? $moment(scope.row.release_time).format("YYYY-MM-DD hh:mm:ss") : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.release_time ? $moment(scope.row.release_time).format("YYYY-MM-DD hh:mm:ss") : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <drawer-layout-right @changeDrawer="closeDrawerDialog" :hide-footer="false" :visible="drawerVisible" size="650px" :title="$t('发布新闻')" @right-close="cancelDrawDialog" @close="handleCloseDrawer">
      <div slot="content">
        <el-form ref="form" :rules="rules" :model="form" label-width="120px">
          <el-form-item label="标题" prop="title">
            <el-input v-model="form.title" class="width-300"></el-input>
          </el-form-item>
          <el-form-item label="缩略图">
            <span v-if="form.thumnbnail != ''" class="pull-left" style="position: relative">
              <i class="fa fa-close" style="position: absolute;top: -6px;right: -5px;" @click="closeImg"></i>
              <img :src="form.thumnbnail" class="news-img"/>
            </span>
            <upload-square class="pull-left margin-left-10 margin-top-5" :action="uploadFile" max-size="8" :data="{path: 'news'}" accept=".png,.jpg,.jpeg" @success="uploadFileSuccess">
              <el-button size="small" type="primary">{{$t("点击上传")}}</el-button>
            </upload-square>
          </el-form-item>
          <el-form-item label="类型">
            <my-select :sel-value="form.type" :options="typeOptions" @change="handleChangeSelect"></my-select>
          </el-form-item>
          <el-form-item label="内容" prop="content">
            <quill-block :sel-value="form.content" :action="uploadFile" accept=".png,.jpg,.jpeg" max-size="8" :data="{path: 'newsContent'}" @change="quillChange"></quill-block>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="small" type="primary" :loading="drawerLoading" @click="okDrawDialog">{{$t("发布")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" content="确认需要删除该信息？" :detail="subTitle" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import mixins from "../../utils/mixins";
  import LayoutTb from "../../components/Layout/LayoutTb";
  import MyInputButton from "../../components/search/MyInputButton";
  import MyPagination from "../../components/MyPagination";
  import DialogNormal from "../../components/utils/dialog/DialogNormal";
  import MyNormalDialog from "../../components/utils/dialog/MyNormalDialog";
  import DrawerRight from "../../components/utils/dialog/DrawerRight";
  import DrawerLayoutRight from "../../components/utils/dialog/DrawerLayoutRight";
  import {common} from "../../utils/api/url";
  import {MessageSuccess, MessageError} from "../../utils/utils";
  import newsValidater from "../../utils/validater/newsValidater";
  import MySelect from "../../components/MySelect";

  export default {
    mixins: [mixins, newsValidater],
    components: {MySelect, LayoutTb,MyInputButton,MyPagination,DialogNormal,MyNormalDialog,DrawerRight,DrawerLayoutRight},
    data(){
      return {
        modalVisible: false,
        drawerVisible: false,
        visibleConfim: false,
        dialogLoading: false,
        loading: false,
        drawerLoading: false,
        subTitle: '',
        uploadFile: common.upload_file,
        uploadResult: {},
        uploadProcess: '',
        g_superId: '',
        tableData: [],
        typeOptions: [
          {
            label: this.$t("前沿科技"),
            value: "1"
          },
          {
            label: this.$t("校园招聘"),
            value: "2"
          },
          {
            label: this.$t("就业指导"),
            value: "3"
          }
        ],
        form: {
          id: '',
          title: '',
          titleDesc: '',
          content: '',
          type: '1',
          thumnbnail: ''
        },
      }
    },
    created() {
      this.initInfo();
    },
    methods: {
      async initInfo(){
        await this.getSessionInfo();
        this.init();
      },
      init(){
        let params = {
          page: this.page,
          num: this.num,
          status: 0,
          publisherId: this.loginUserId
        };
        this.$axios.get(common.info_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      addInfo(){
        this.drawerVisible = true;
      },
      deleteInfo(row){
        this.form.id = row.id;
        this.subTitle = row.title;
        this.visibleConfim = true;
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      closeDialog(event){
        this.form = {
          id: '',
          title: '',
          titleDesc: '',
          content: '',
          type: '1',
          thumnbnail: ''
        };
        this.dialogLoading = false;
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      closeDrawerDialog(event){
        this.form = {
          id: '',
          title: '',
          titleDesc: '',
          content: '',
          type: '1',
          thumnbnail: ''
        };
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        this.drawerVisible = event;
      },
      handleCloseDrawer(){
        this.form = {
          id: '',
          title: '',
          titleDesc: '',
          content: '',
          type: '1',
          thumnbnail: ''
        };
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      okDrawDialog(event){
        let url = "";
        this.$refs['form'].validate((valid) => {
          if (valid) {
            let params = {
              title: this.form.title,
              type: this.form.type,
              content: this.form.content,
              status: 0,
              thumnbnail: this.form.thumnbnail,
            };
            url = common.info_add;
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
          }
        });
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let params = {
          informationId: this.form.id
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.info_delete, params).then(res => {
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
      search(event){

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
      quillChange(data){
        this.form.content = data.html;
      },
      uploadFileSuccess(res, file){
        if (res.code == 200){
          this.form.thumnbnail = res.data.url;
        }else {

        }
      },
      closeImg(){
        this.form.thumnbnail = "";
      },
      handleChangeSelect(data){
        this.form.type = data;
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
  .news-img{
    height: 50px;
    width: 50px;
  }
</style>
