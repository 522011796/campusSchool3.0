<template>
  <div class="container" :style="divHeight4">
    <div>
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">应用管理</span>
          </div>
          <my-el-tree type="4" sub-type="" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div>
            <my-select class="layout-item width-150" size="small" :placeholder="$t('选择流程')" :sel-value="searchName" :options="flowOptions" :clearable="false" @change="handleSearchChange($event, 1)"></my-select>
          </div>
          <div class="margin-top-10 top-block">
            <div class="padding-tb-10 padding-lr-10">
              <span class="title-block-tag"></span>
              <span class="title-block-text">{{$t("完成情况对比")}}</span>
            </div>
            <div style="height: 220px">
              <bar-chart chart-id="barId" chart-title='' :data-legned="barDataLegned" :data-key="barDataKey" :data="barData"></bar-chart>
            </div>
          </div>
          <div class="margin-top-10">
            <el-row :gutter="8">
              <el-col :span="16">
                <div class="content-block">
                  <div class="padding-tb-10 padding-lr-10">
                    <el-row>
                      <el-col :span="12" class="text-left">
                        <span class="title-block-tag"></span>
                        <span class="title-block-text">{{$t("整体完成率趋势")}}</span>
                      </el-col>
                      <el-col :span="12">
                        <div class="layout-inline text-right">
                          <my-select class="layout-item width-150" size="mini" :placeholder="$t('选择时间')" :sel-value="searchTime" :options="timeOptions" :clearable="false" @change="handleSearchChange($event, 2)"></my-select>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  <div style="height: 260px">
                    <line-chart chart-id="lineId" :data-key="lineKeyData" :data="lineData" :data-legned="lineLegned"></line-chart>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="content-block text-center">
                  <div style="position: relative">
                    <span class="font-size-12 color-muted" style="position: absolute;bottom: 10px;left: 45%">{{$t("完成率")}}</span>
                    <el-progress class="margin-top-30" type="dashboard" :stroke-width="5" :percentage="complateRate"></el-progress>
                  </div>
                  <div>
                    <div>
                      <span>{{$t("总人数")}}: {{complateCount}}</span>
                    </div>
                    <div>
                      <span>{{$t("已完成")}}: {{complatedNum}}</span>
                    </div>
                    <div>
                      <span>{{$t("未完成")}}: {{unComplateNum}}</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="margin-top-10 top-block">
            <div class="padding-tb-10 padding-lr-10">
              <span class="title-block-tag"></span>
              <span class="title-block-text">{{$t("完成状态数据表")}}</span>
            </div>
            <div style="min-height: 300px">
              <el-table
                ref="refTable"
                :data="tableData"
                header-cell-class-name="custom-table-cell-bg"
                size="medium"
                style="width: 100%">
                <el-table-column align="center" :label="$t('姓名')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        <a href="javascript:;" class="color-grand" @click="detailInfo($event, scope.row)">1</a>
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('学院')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('院系')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('班级')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('招生老师')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('环节总数')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('已完成')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('完成状态')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                    </el-popover>
                  </template>
                </el-table-column>
              </el-table>
              <div class="layout-right-footer text-right">
                <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
              </div>
            </div>
          </div>
        </div>
      </layout-lr>
    </div>

    <dialog-normal top="10vh" width-style="750px" :visible="dialogVisible" :title="$t('详细信息')" :show-footer="false" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <div>
          <div>
            <div class="padding-tb-10 padding-lr-10">
              <span class="title-block-tag"></span>
              <span class="title-block-text">{{$t("照片信息")}}</span>
            </div>
          </div>
          <div>
            <el-image v-for="(item, index) in form.imgList" :key="index" style="width: 80px; height: 80px; margin-right: 10px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="fill"></el-image>
          </div>
        </div>
        <div class="margin-top-10">
          <div>
            <div class="padding-tb-10 padding-lr-10">
              <span class="title-block-tag"></span>
              <span class="title-block-text">{{$t("基础信息")}}</span>
            </div>
          </div>
          <div>
            <el-form :model="form" ref="form" label-width="90px">
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('迎新年度')" prop="year">
                    <my-select :disabled="form.id != ''" class="layout-item" size="small" :placeholder="$t('请选择')" :sel-value="form.year" :options="yearOptions" width-style="220" :clearable="true" @change="handleSelectChange($event, 1)"></my-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('姓名')" prop="name">
                    <el-input :disabled="form.id != ''" v-model="form.name" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('录取号')" prop="year">
                    <my-cascader :disabled="form.id != ''" ref="SelectorCollege" width-style="220" :sel-value="form.college" type="1" sub-type="2"></my-cascader>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('性别')" prop="name">
                    <my-select :disabled="form.id != ''" :sel-value="form.sex" :options="g_sex" width-style="220"></my-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('学院/专业')" prop="college">
                    <my-cascader :disabled="form.id != ''" ref="SelectorCollege" width-style="220" :sel-value="form.college" type="1" sub-type="2"></my-cascader>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('班级')" prop="class">
                    <my-cascader :disabled="form.id != ''" ref="selectorDept" :sel-value="form.class" type="1" sub-type="4" width-style="220"></my-cascader>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('迎新老师')" prop="year">
                    <el-input :disabled="form.id != ''" v-model="form.teacher" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
        <div class="margin-top-10">
          <div>
            <div class="padding-tb-10 padding-lr-10">
              <span class="title-block-tag"></span>
              <span class="title-block-text">{{$t("流程完成情况")}}</span>
            </div>
          </div>
          <div>
            <el-table
              ref="refDetailTable"
              :data="tableDetailData"
              header-cell-class-name="custom-table-cell-bg"
              size="medium"
              style="width: 100%">
              <el-table-column align="center" :label="$t('流程名称')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      1
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('环节数量')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      1
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column v-for="(item, index) in tableColData" :key="index" align="center" :label="$t('环节x')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      1
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </dialog-normal>
  </div>
</template>

<script>
  import {common} from "~/utils/api/url";
  import mixins from "~/utils/mixins";
  import BarChart from "~/components/charts/BarChart";
  import LineChart from "~/components/charts/LineChart";
  import DialogNormal from "~/components/utils/dialog/DialogNormal";
  export default {
    components: {DialogNormal, LineChart, BarChart},
    mixins: [mixins],
    data(){
      return {
        collegeData: [],
        flowOptions: [],
        searchName: '',
        lineChartData: [],
        barChartData: [],
        circleChartData: [],
        tableData: [],
        searchKey: '',
        barDataKey: [],
        barData: [],
        barDataLegned: [],
        lineData: [],
        lineKeyData: [],
        lineLegned: [],
        complateRate: 0,
        complateCount: 0,
        complatedNum: 0,
        unComplateNum: 0,
        searchTime: '',
        timeOptions: [],
        tableColData: [],
        tableDetailData: [],
        dialogVisible: false,
        yearOptions: [],
        form: {
          imgList: [1,2,3],
          id: '',
          year: '',
          name: '',
          adNo: '',
          oneCardNo: '',
          stuNo: '',
          examNo: '',
          sex: '',
          idCardNo: '',
          birthday: '',
          nationality: '',
          nation: '',
          phone: '',
          qq: '',
          college: [],
          major: '',
          class: [],
          teacher: ''
        }
      }
    },
    created() {
      this.init();
    },
    methods: {
      nodeClick(data){
        this.collegeData = data.department_path;
        this.init();
      },
      handleSearchChange(event, type){
        if (type == 1){
          this.searchName = event;
        }else if (type == 2){
          this.searchTime = event;
        }
      },
      init(){
        this.initBar();
        this.initLine();
        this.initStudent();
      },
      initStudent(){
        let params = {
          page: this.page,
          num: this.num
        };
        this.$axios.get(common.server_applet_list, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.total;
            this.num = res.data.data.num;
            this.page = res.data.data.page;
          }
        });
      },
      initBar(){
        let params = {

        };
        this.barDataLegned = [this.$t("总人数"),this.$t("已完成"),this.$t("未完成")];
        this.barDataKey = ["环节1","环节2","环节3"];
        this.barData = [
          {
            name:'总人数',
            type:'bar',
            barWidth:25,
            data: [1,2,3]
          },
          {
            name:'已完成',
            type:'bar',
            barWidth:25,
            data: [4,5,6]
          },
          {
            name:'未完成',
            type:'bar',
            barWidth:25,
            data: [7,8,9]
          }
        ];

        // this.$axios.get(common.school_static_pic, {params: params}).then(res => {
        //   if (res.data.data){
        //     this.barDataLegned = [this.$t("总人数"),this.$t("已完成"),this.$t("未完成")];
        //     this.barDataKey = res.data.data.key;
        //     this.barData = [
        //       {
        //         name:'总人数',
        //         type:'bar',
        //         barWidth:25,
        //         data: []
        //       },
        //       {
        //         name:'已完成',
        //         type:'bar',
        //         barWidth:25,
        //         data: []
        //       },
        //       {
        //         name:'未完成',
        //         type:'bar',
        //         stack: '迟到',
        //         data: []
        //       }
        //     ];
        //   }
        // });
      },
      initLine(){
        let params = {};
        this.lineLegned = [];
        this.lineData = [];
        this.lineKeyData = [1,2,3,4];
        this.lineLegned = [this.$t("已完成"),this.$t("未完成")];
        this.lineData = [
          {
            name: this.$t("已完成"),
            type: 'line',
            data: [1,2,3,4]
          },
          {
            name: this.$t("未完成"),
            type: 'line',
            data: [4,5,6,7]
          }
        ];
        // this.$axios.get(common.school_static_line, {params: params}).then(res => {
        //   if (res.data.data){
        //     this.lineKeyData = res.data.data.key;
        //     this.lineLegned = [this.$t("已报道"),this.$t("未报道"),this.$t("总人数")];
        //     this.lineData = [
        //       {
        //         name: this.$t("已报道"),
        //         type: 'line',
        //         data: []
        //       },
        //       {
        //         name: this.$t("未报道"),
        //         type: 'line',
        //         data: []
        //       },
        //       {
        //         name: this.$t("总人数"),
        //         type: 'line',
        //         data: []
        //       }
        //     ];
        //   }
        // });
      },
      sizeChange(event){
        this.page = 1;
        this.num = event;
        this.initStudent();
      },
      currentPage(event){
        this.page = event;
        this.initStudent();
      },
      jumpPage(data){
        this.page = data;
        this.initStudent();
      },
      closeDialog(event){
        this.form = {

        };
      },
      cancelDialog(){
        this.dialogVisible = false;
      },
      detailInfo(event, item){
        console.log(1111);
        this.dialogVisible = true;
      }
    }
  }
</script>

<style scoped>
.top-block{
  height: 290px;
  background: #FFFFFF;
}
.content-block{
  height: 300px;
  background: #FFFFFF;
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
.top-text-block{
  position: relative;
  top: -10px
}
</style>
