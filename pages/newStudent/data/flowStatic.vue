<template>
  <div class="container" :style="divHeight4">
    <div>
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">应用管理</span>
          </div>
          <my-el-tree type="1" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div>
            <my-select class="layout-item width-150" size="small" :placeholder="$t('选择流程')" :sel-value="searchName" :options="flowOptions" :clearable="true" @change="handleSearchChange($event, 1)"></my-select>
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
                          <my-select class="layout-item width-150" size="mini" :placeholder="$t('选择时间')" :sel-value="searchMonth" :options="monthOptions" :clearable="false" @change="handleSearchChange($event, 2)"></my-select>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  <div style="height: 255px">
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
              <el-row>
                <el-col :span="12">
                  <span class="title-block-tag"></span>
                  <span class="title-block-text">{{$t("完成状态数据表")}}</span>
                </el-col>
                <el-col :span="12">
                  <div class="layout-inline text-right">
                    <el-button class="layout-item" size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
                    <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('名称/录取号')" @click="search"></my-input-button>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div style="min-height: 300px">
              <el-table
                ref="refTable"
                :data="tableData"
                header-cell-class-name="custom-table-cell-bg"
                size="medium"
                style="width: 100%"
                @filter-change="fliterTable">
                <el-table-column align="center" :label="$t('姓名')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.real_name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        <a href="javascript:;" class="color-grand" @click="detailInfo($event, scope.row)">{{scope.row.real_name}}</a>
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('学院')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.college_name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{scope.row.college_name}}
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('专业')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.major_name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{scope.row.major_name}}
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('班级')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.class_name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.class_name}}
                  </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('招生老师')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.enroll_teacher}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{scope.row.enroll_teacher}}
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('环节总数')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.link_size}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{scope.row.link_size}}
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('已完成')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.completed_link_size}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{scope.row.completed_link_size}}
                    </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('完成状态')"
                                 :filter-multiple="false"
                                 column-key="status"
                                 :filters="filterStatus">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        <label v-if="scope.row.status" class="color-success">{{$t("已完成")}}</label>
                        <label v-if="!scope.row.status" class="color-danger">{{$t("未完成")}}</label>
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
            <el-image style="width: 60px; height: 60px; margin-right: 10px" v-for="(item, index) in form.facePhotos" :key="index" :src="item">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
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
                    <div class="text-center">{{scope.row.process_name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.process_name}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('环节数量')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{tableColData.length}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{tableColData.length}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column v-for="(item, index) in tableColData" :key="index" align="center" :label="item.link_name">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="item.status" class="color-success">{{$t("已完成")}}</label>
                      <label v-if="!item.status" class="color-danger">{{$t("未完成")}}</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="item.status" class="color-success">{{$t("已完成")}}</label>
                      <label v-if="!item.status" class="color-danger">{{$t("未完成")}}</label>
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
  import {MessageError, MessageSuccess} from "~/utils/utils";
  import MySelect from "~/components/MySelect";
  export default {
    components: {MySelect, DialogNormal, LineChart, BarChart},
    mixins: [mixins],
    data(){
      return {
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        collegeData: [],
        flowOptions: [],
        monthOptions: [],
        searchName: '',
        processId: '',
        lineChartData: [],
        barChartData: [],
        circleChartData: [],
        tableData: [],
        searchKey: '',
        userId: '',
        searchStatus: '',
        searchMonth: '',
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
        filterStatus: [{
          label: this.$t("已完成"),
          text: this.$t("已完成"),
          value: true
        },{
          label: this.$t("未完成"),
          text: this.$t("未完成"),
          value: false
        }],
        form: {
          imgList: [],
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
          teacher: '',
          facePhotos: []
        }
      }
    },
    created() {
      let year = this.$moment().format("YYYY-MM");
      let college = '';
      this.initMonth();
      this.init();
    },
    methods: {
      nodeClick(data){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        if (data.unit == 1){
          this.searchCollege = data.id;
        }else if (data.unit == 2){
          this.searchCollege = data.college_id;
          this.searchMajor = data.id;
        }else if (data.unit == 3){
          this.searchMajor = data.major_id;
          this.searchGrade = data.grade;
        }else if (data.unit == 4){
          this.searchClass = data.id;
        }
        this.page = 1;
        this.init();
      },
      handleSearchChange(event, type){
        if (type == 1){
          this.searchName = event;
          this.processId = event;
          this.initBar();
          this.initLine(this.searchMonth);
          this.initStudent();
          this.initRate();
        }else if (type == 2){
          this.searchMonth = event;
          this.initLine(this.searchMonth);
        }
      },
      initMonth(){
        let year = this.$moment().format("YYYY");
        let month = [];
        for (let i = 0 ; i < 12; i++){
          month.push({
            label: year + "-" + (i+1),
            value: year + "-" + (i+1),
            text: year + "-" + (i+1)
          });
        }
        this.monthOptions = month;
        this.searchMonth = this.$moment().format("YYYY-MM");
      },
      init(){
        this.initProcess();
        this.initMonth();
        this.initBar();
        this.initLine(this.searchMonth);
        this.initStudent();
        this.initRate();
      },
      initProcess(){
        let params = {
          page: 1,
          num: 99999
        };
        this.$axios.get(common.enroll_process_page, {params: params}).then(res => {
          if (res.data.data){
            let process = [];
            for (let i = 0; i < res.data.data.list.length; i++){
              process.push({
                label: res.data.data.list[i].processName,
                value: res.data.data.list[i].id,
                text: res.data.data.list[i].processName,
              });
            }
            this.flowOptions = process;
          }
        });
      },
      initStudent(){
        let params = {
          page: this.page,
          num: this.num,
          status: this.searchStatus,
          searchKey: this.searchKey,
          processId: this.processId,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass
        };
        this.$axios.get(common.enroll_stat_process_by_user_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initBar(){
        let params = {
          processId: this.processId,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass
        };

        this.$axios.get(common.enroll_stat_link_general, {params: params}).then(res => {
          if (res.data.data){
            let barDataKey = [];
            let barDataDown = [];
            let barDataUnDown = [];
            for (let item in res.data.data){
              barDataKey.push(res.data.data[item].linkName);
              barDataDown.push(res.data.data[item].downCount);
              barDataUnDown.push(res.data.data[item].undownCount);
            }

            this.barDataLegned = [this.$t("已完成"),this.$t("未完成")];
            this.barDataKey = barDataKey;
            this.barData = [
              {
                name:'已完成',
                type:'bar',
                barWidth:10,
                data: barDataDown
              },
              {
                name:'未完成',
                type:'bar',
                barWidth:10,
                data: barDataUnDown
              }
            ];
          }
        });
      },
      initLine(year){
        let params = {
          month: year,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          processId: this.processId,
        };
        this.$axios.get(common.enroll_stat_process_by_time, {params: params}).then(res => {
          if (res.data.data){
            this.lineLegned = [];
            let lineData = [];
            let lineKeyData = [];
            this.lineLegned = [this.$t("已完成")];
            for (let i = 0; i < res.data.data.length; i++){
              lineData.push(res.data.data[i].num);
              lineKeyData.push(res.data.data[i].day);
            }
            this.lineKeyData = lineKeyData;
            this.lineData = [
              {
                name: this.$t("已完成"),
                type: 'line',
                data: lineData
              }
            ];
          }
        });
      },
      initRate(){
        let params = {
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          processId: this.processId,
        };
        this.$axios.get(common.enroll_stat_process_general, {params: params}).then(res => {
          if (res.data.data) {
            this.complateCount = parseInt(res.data.data.downCount) + parseInt(res.data.data.undownCount);
            this.complatedNum = res.data.data.downCount;
            this.unComplateNum = res.data.data.undownCount;
            let rate = parseInt(res.data.data.downCount) / (parseInt(res.data.data.downCount) + parseInt(res.data.data.undownCount)) * 100;
            if (parseInt(res.data.data.downCount) + parseInt(res.data.data.undownCount) == 0){
              rate = 0;
            }
            this.complateRate = parseInt(rate.toFixed(0));
          }
        });
      },
      initDetail(userId){
        let params = {
          processId: this.processId,
          userId: userId
        };
        let array = [];
        let children = '';
        this.$axios.get(common.enroll_stat_link_list_by_user, {params: params}).then(res => {
          if (res.data.data){
            this.tableDetailData = res.data.data;
            for (let i = 0; i < res.data.data.length; i++){
              children = res.data.data[i].linkList;
            }
            this.tableColData = children;
          }
        });
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
          imgList: [],
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
          teacher: '',
          facePhotos: []
        };
      },
      cancelDialog(){
        this.dialogVisible = false;
      },
      async detailInfo(event, item){
        let params = {
          userId: item.user_id
        };
        this.oprType = 'detail';
        await this.$axios.get(common.enroll_checkin_student_detail, {params: params}).then(res => {
          if (res.data.data){
            let photos = res.data.data.face_photos ? res.data.data.face_photos.split("|") : [];
            this.form = {
              id: res.data.data.id,
              user_id: res.data.data.user_id,
              year: res.data.data.enroll_id,
              name: res.data.data.real_name,
              adNo: res.data.data.enroll_no,
              oneCardNo: res.data.data.school_car_no,
              stuNo: res.data.data.student_id,
              examNo: res.data.data.exam_no,
              sex: res.data.data.sex+'',
              idCardNo: res.data.data.certificate_num,
              birthday: res.data.data.birthday ? this.$moment(res.data.data.birthday).format("YYYY-MM-DD") : '',
              nationality: ''+res.data.data.nationality,
              nation: res.data.data.nation,
              phone: res.data.data.phone,
              qq: res.data.data.qq,
              email: res.data.data.email,
              wechat: res.data.data.wechat,
              fatherName: res.data.data.father_name,
              fatherPhone: res.data.data.father_phone,
              motherName: res.data.data.mather_name,
              motherPhone: res.data.data.mather_phone,
              address: res.data.data.native_place,
              education: res.data.data.edu_level,
              college: [res.data.data.college_id, res.data.data.major_id, res.data.data.grade, res.data.data.class_id],
              major: '',
              class: [res.data.data.college_id, res.data.data.major_id, res.data.data.grade, res.data.data.class_id],
              eduSystem: res.data.data.edu_year,
              headmaster: res.data.data.master_teacher_name,
              recruitingTeacher: res.data.data.enroll_teacher,
              adBath: res.data.data.enroll_batch,
              subject: res.data.data.enroll_type,
              adProvince: [res.data.data.enroll_province,res.data.data.enroll_city],
              adCity: res.data.data.enroll_city+'',
              graduationSchool: res.data.data.high_school,
              examScore: res.data.data.gaokao_score,
              otherMsg: res.data.data.des,
              checkStatus: res.data.data.check_status,
              checkinId: res.data.data.checkin_id,
              checkin_id: res.data.data.checkin_id,
              facePhotos: photos
            };
          }
        });
        this.initDetail(item.user_id);
        this.dialogVisible = true;
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.initStudent();
      },
      expandInfo(){
        let url = "";
        let params = {
          status: this.searchStatus,
          searchKey: this.searchKey
        };
        params = this.$qs.stringify(params);
        url = common.enroll_stat_process_student_export;
        window.open(url+"?"+params, "_self");
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'status'){
            this.searchStatus = value[item][0];
          }
        }
        this.page = 1;
        this.initStudent();
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          ids: this.id
        };
        url = common.dormaccess_exception_unbind;
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
