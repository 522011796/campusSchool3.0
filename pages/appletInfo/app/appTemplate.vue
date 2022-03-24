<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">模版管理</span>
        </div>
        <my-el-tree type="4" sub-type="" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-right-tab">
          <el-row>
            <el-col :span="24" class="text-right">
              <div class="layout-inline">
                <my-select class="layout-item width-150" size="small" :placeholder="$t('应用')" :options="appDataList" :clearable="true" @change="handleTypeChange($event, 1)"></my-select>
                <my-select class="layout-item width-150" size="small" :placeholder="$t('状态')" :options="filterAppManageStatus" :clearable="true" @change="handleTypeChange($event, 2)"></my-select>
                <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('名称/编号')" @click="search"></my-input-button>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="bg-white border-bottom-1 padding-lr-5 padding-tb-5" :style="divHeight">
          <div v-if="tableData.length <= 0">
            <div class="text-center padding-tb-10">
              <span class="color-disabeld">{{$t("暂无数据")}}</span>
            </div>
          </div>
          <el-row v-else :gutter="16">
            <el-col :span="6" v-for="(item, index) in tableData" :key="index" class="margin-bottom-20" @click.native="detailItem($event, item)">
              <el-card :body-style="{padding: '10px'}" style="position: relative;height: 125px">
                <div>
                  <div class="color-muted">
                    <span><i class="fa fa-newspaper-o"></i></span>
                    <span>000000001</span>
                  </div>
                  <span class="title-tag bg-success">
                    学生事物
                  </span>
                </div>
                <div class="text-center color-muted margin-top-10">
                  <el-row>
                    <el-col :span="8">
                      <div>
                        <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" class="item-img-class">
                          <div slot="error" class="margin-top-10">
                            <i class="el-icon-picture-outline" style="font-size: 30px"></i>
                          </div>
                        </el-image>
                      </div>
                      <div>
                        xxxxx
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="text-right color-muted margin-top-10">
                        <div class="font-bold moon-content-text-ellipsis-class">
                          <span>考试考试考试</span>
                        </div>
                        <div class="font-size-12 margin-top-5">
                          <span>2022-11-11 00:00:00</span>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="500px" :title="$t('模版设置')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <div>
          <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("模版信息")}}</label>
          </span>
          </div>
          <div class="block-item-bg font-size-12">
            <div>
              <span>{{$t("类别")}}: </span>
              <span>xxxx</span>
            </div>
            <div class="margin-top-5">
              <span>{{$t("部门")}}: </span>
              <span>xxxx</span>
            </div>
            <div class="margin-top-5">
              <span>{{$t("名称")}}: </span>
              <span>xxxx</span>
            </div>
          </div>
        </div>

        <div class="margin-top-20">
          <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("模版简介")}}</label>
          </span>
          </div>
          <div class="block-item-bg font-size-12" style="max-height: 80px;overflow-y: auto">
            <div>
              <span>
                模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介
                模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介
                模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介
                模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介
                模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介
                模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介模版简介
              </span>
            </div>
          </div>
        </div>
        <div class="margin-top-20">
          <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("服务图标")}}</label>
          </span>
          </div>
          <div class="block-item-bg font-size-12" style="position: relative">
            <div>
              <el-image :src="serverImg" class="item-img-set-class">
                <div slot="error" class="margin-top-10 text-center">
                  <i class="el-icon-picture-outline" style="font-size: 60px"></i>
                </div>
              </el-image>
            </div>
            <div style="position: absolute;left: 10px;bottom: 12px">
              <upload-square :action="uploadFileUrl" max-size="1" :data="{path: 'logo'}" accept=".png,.jpg,.jpeg" @success="uploadFileSuccess">
                <div class="upload-block-class">
                  <span>{{$t("更换图标")}}</span>
                </div>
              </upload-square>
            </div>
            <div class="moon-clearfix"></div>
          </div>
        </div>
        <div class="margin-top-20">
          <div class="color-muted margin-top-5">
            <span>
              <label class="title-block-tag"></label>
              <label class="title-block-text color-warning">{{$t("应用设置")}}</label>
            </span>
          </div>
          <div>
            <el-form :model="form" :rules="rules" ref="form" label-width="60px">
              <el-form-item :label="$t('名称')" prop="name">
                <el-input v-model="form.name" size="small" class="width-300"></el-input>
              </el-form-item>
              <el-form-item :label="$t('类型')" prop="type">
                <my-select class="layout-item" size="small" :placeholder="$t('类型')" :options="filterAppManageType" width-style="300" :clearable="true" @change="handleTypeChange($event, 3)"></my-select>
              </el-form-item>
              <el-form-item :label="$t('类别')" prop="category">
                <my-select class="layout-item width-300" size="small" :placeholder="$t('类别')" :options="categorys" width-style="300" :clearable="true" @change="handleTypeChange($event, 4)"></my-select>
              </el-form-item>
              <el-form-item :label="$t('部门')" prop="dept">
                <my-cascader ref="SelectorCollege" size="small" :sel-value="form.dept" type="4" sub-type="id" width-style="300" @change="handleCascaderChange($event)"></my-cascader>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="mini" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="mini" type="success" @click="okAppDrawDialog">{{$t("应用")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import {common} from "~/utils/api/url";
  import mixins from "~/utils/mixins";
  import appTemplateValidater from "~/utils/validater/appTemplateValidater";
  import MySelect from "~/components/MySelect";
  import {MessageError, MessageSuccess} from "~/utils/utils";

  export default {
    components: {MySelect},
    mixins: [mixins,appTemplateValidater],
    data(){
      return {
        tableData: [],
        collegeList: [],
        appDataList: [],
        types: [],
        categorys: [],
        subTitle: '',
        collegeData: '',
        searchKey: '',
        searchApp: '',
        searchStatus: '',
        detailData: '',
        drawerVisible: false,
        dialogLoading: false,
        dialogApp: false,
        serverImg: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        uploadFileUrl: '',
        form: {
          id: '',
          name: '',
          type: '',
          category: '',
          dept: []
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
          collegeData: this.collegeData,
          searchType: this.searchType,
          searchStatus: this.searchStatus,
          searchKey: this.searchKey
        };
        this.$axios.get(common.classroom_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
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
        this.collegeData = data.department_path;
        this.page = 1;
        this.init();
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      handleTypeChange(event, type){
        if (type == 1){
          this.searchApp = event;
        }else if (type == 2){
          this.searchStatus = event;
        }else if (type == 3){
          this.form.type = event;
        }else if (type == 4){
          this.form.category = event;
        }
      },
      handleCascaderChange(data){
        this.form.dept = data;
      },
      detailItem(event, item){
        this.detailData = item;
        this.drawerVisible = true;
      },
      uploadFileSuccess(res, file){
        if (res.code == 200){
          this.serverImg = res.data.url;
        }else {

        }
      },
      closeDrawerDialog(event){
        this.detailData = '';
        this.serverImg = '';
        this.form = {
          id: '',
          appName: '',
          type: '',
          category: '',
          dept: []
        };
        this.subTitle = "";
        this.resetCasadeSelector('SelectorCollege');
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.detailData = '';
        this.drawerVisible = false;
      },
      okAppDrawDialog(){
        let url = '';
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              id: this.form.id,
              appName: this.form.appName,
              type: this.form.type,
              category: this.form.category,
              dept: this.form.dept,
            };
            url = common.class_edit;
            params = this.$qs.stringify(params);
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.drawerVisible = false;
                this.init();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
            });
          }
        });
      }
    }
  }
</script>

<style scoped>
.title-tag{
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 12px;
  color: #FFFFFF;
  padding: 2px 5px;
  border-bottom-left-radius: 5px;
}
.value-tag{
  position: absolute;
  right: 10px;
  top: 35%;
  font-size: 20px;
  font-weight: bold;
  color: #67C23A
}
.item-img-class{
  height: 50px;
  width: 50px
}
.item-img-set-class{
  height: 100px;
  width: 100px
}
.title-block-tag{
  display: inline-block;
  height: 20px;
  width: 3px;
  background: #E6A23C;
  font-weight: bold;
  border-radius: 3px;
}
.title-block-text{
  font-weight: bold;
  position: relative;
  top: -5px;
}
.block-item-bg{
  border-radius: 5px;
  background: #FFFFFF;
  padding: 10px;
}
.upload-block-class{
  text-align: center;
  font-size: 12px;
  background: #000000;
  width: 100px;
  padding:5px 0px;
  color: #FFFFFF;
}
</style>
