<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">归寝统计</span>
        </div>
        <my-el-tree type="1" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="24">
              <!--<my-search-of-date size="small" :show-year="false" :show-search-btn="true" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType">
                <span slot="other">
                  <el-input size="small" :placeholder="$t('姓名/学号')" :clearable="true" v-model="searchKey" class="layout-item width-150"></el-input>
                </span>
              </my-search-of-date>-->

              <my-search-of-date-group size="small" :show-year="false" :show-search-btn="true" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType">
                <span slot="other">
                  <el-input size="small" :placeholder="$t('姓名/学号')" :clearable="true" v-model="searchKey" class="layout-item width-150"></el-input>
                </span>
              </my-search-of-date-group>
            </el-col>
          </el-row>
        </div>

        <div class="margin-top-10">
          <el-table
            v-show="!searchTimeData.timeUnit || searchTimeData.timeUnit == 1"
            ref="refTable"
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :max-height="tableHeight2.height"
            style="width: 100%"
            @filter-change="fliterTable">
            <el-table-column
              align="center"
              :label="$t('姓名')">

              <template slot-scope="scope">
                <label class="color-grand" v-if="!searchTimeData.timeUnit || searchTimeData.timeUnit == 1" @click="detailInfo(scope.row)">{{scope.row.realName}}</label>
                <label class="color-grand" v-if="searchTimeData.timeUnit && searchTimeData.timeUnit != 1" @click="detailInfo(scope.row)">{{scope.row.studentName}}</label>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="studentNo"
              :label="$t('学号')">
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('性别')">
              <template slot-scope="scope">
                <my-sex :sex="scope.row.sex" tag="text"></my-sex>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班级')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.className ? scope.row.className : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.className ? scope.row.className : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('状态')"
              :filter-multiple="false"
              column-key="status"
              :filters="filterDormBackStatus">
              <template slot="header">
                <span>{{$t('状态')}}</span>
                <span v-if="filterDormBackStatusText != ''" class="font-size-12 color-disabeld moon-content-text-ellipsis-class">{{filterDormBackStatusText}}</span>
              </template>
              <template slot-scope="scope">
                <span v-if="scope.row.signStatus || scope.row.signStatus == 0">{{dormStatusInfo(scope.row.signStatus)}}</span>
                <span v-else>--</span>
              </template>
            </el-table-column>
          </el-table>

          <el-table
            v-show="searchTimeData.timeUnit && searchTimeData.timeUnit != 1"
            ref="refTable"
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :max-height="tableHeight2.height"
            style="width: 100%"
            @filter-change="fliterTable">
            <el-table-column
              align="center"
              :label="$t('姓名')">

              <template slot-scope="scope">
                <label class="color-grand" v-if="!searchTimeData.timeUnit || searchTimeData.timeUnit == 1" @click="detailInfo(scope.row)">{{scope.row.realName}}</label>
                <label class="color-grand" v-if="searchTimeData.timeUnit && searchTimeData.timeUnit != 1" @click="detailInfo(scope.row)">{{scope.row.studentName}}</label>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="studentNo"
              :label="$t('学号')">
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('性别')">
              <template slot-scope="scope">
                <my-sex :sex="scope.row.sex" tag="text"></my-sex>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班级')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.className ? scope.row.className : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.className ? scope.row.className : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('正常归寝')">
              <template slot-scope="scope">
                <span>{{scope.row.actualNum}}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('晚归')">
              <template slot-scope="scope">
                <span>{{scope.row.lateNum}}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('未归')">
              <template slot-scope="scope">
                <span>{{scope.row.unSignNum}}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('请假')">
              <template slot-scope="scope">
                <span>{{scope.row.leaveNum}}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('超长未归')">
              <template slot-scope="scope">
                <span>{{scope.row.lateLongNum}}</span>
              </template>
            </el-table-column>
          </el-table>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </div>
    </layout-lr>

    <drawer-layout-right @changeDrawer="closeDrawerDialog" :hide-footer="false" :visible="drawerVisible" size="650px" :title="$t('详细信息')" @right-close="cancelDrawDialog">
      <div slot="content">
        <div>
          <el-button-group>
            <el-button size="small" :type="searchDetailType == -1 ? 'primary' : 'default'" @click="changeDetailStatus(-1)">{{$t("全部")}}</el-button>
            <el-button size="small" :type="searchDetailType == 1 ? 'primary' : 'default'" @click="changeDetailStatus(1)">{{$t("已归寝")}}</el-button>
            <el-button size="small" :type="searchDetailType == 3 ? 'primary' : 'default'" @click="changeDetailStatus(3)">{{$t("晚归")}}</el-button>
            <el-button size="small" :type="searchDetailType == 0 ? 'primary' : 'default'" @click="changeDetailStatus(0)">{{$t("未归")}}</el-button>
            <el-button size="small" :type="searchDetailType == 4 ? 'primary' : 'default'" @click="changeDetailStatus(4)">{{$t("超长未归")}}</el-button>
            <el-button size="small" :type="searchDetailType == 2 ? 'primary' : 'default'" @click="changeDetailStatus(2)">{{$t("请假")}}</el-button>
          </el-button-group>
        </div>

        <el-table
          ref="refTable"
          :data="tableDetailData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"

          style="width: 100%"
          class="margin-top-20"
          @filter-change="fliterTable">
          <el-table-column
            align="center"
            prop="busiTime"
            :label="$t('日期')">
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('班级')">
            <template slot-scope="scope">
              <span>{{scope.row.className}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('状态')">
            <template slot-scope="scope">
              <span>{{dormStatusInfo(scope.row.signStatus)}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('晚归时间/分钟')">
            <template slot-scope="scope">
              <span v-if="scope.row.signStatus == 3">
                <label>{{scope.row.busiTime}}</label>
                /
                <label>{{scope.row.signLength}}</label>
              </span>
              <span v-if="scope.row.signStatus != 3">
                <label>--</label>
                /
                <label>--</label>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer">
        <div class="layout-right-footer text-right">
          <my-pagination :total="totalDetail" :current-page="pageDetail" :page-size="numDetail" @currentPage="currentDetailPage" @sizeChange="sizeDetailChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import LayoutLr from "../../../components/Layout/LayoutLr";
  import MyElTree from "../../../components/tree/MyElTree";
  import MyPagination from "../../../components/MyPagination";
  import MyInputButton from "../../../components/search/MyInputButton";
  import MySex from "../../../components/MySex";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MySelect from "../../../components/MySelect";
  import MyCascader from "../../../components/utils/select/MyCascader";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyNormalDialog from "../../../components/utils/dialog/MyNormalDialog";
  import DrawerRight from "../../../components/utils/dialog/DrawerRight";
  import MySearchOfDate from "../../../components/search/MySearchOfDate";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import {
    dormStatus,
    MessageError,
    MessageSuccess,
    nationInfo,
    studentTeachStatus, studyType,
    teacherTypeInfo,
    workEnjoy,
    workTitle
  } from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,MySearchOfDate,DrawerLayoutRight},
    data(){
      return {
        pageDetail: 1,
        numDetail: 20,
        totalDetail: 0,
        searchTimeData: {},
        tableData: [],
        tableDetailData: [],
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        searchKey: '',
        searchDept: '',
        subTitle: '',
        uploadProcess: '',
        searchType: -1,
        searchDetailType: -1,
        uploadResult: {},
        uploadFile: common.teacher_file + "?fileName=" + encodeURIComponent(this.$t("学生导入模板20180130_v2.xls")),
        uploadAction: common.student_upload,
        loopTimer: null,
        resultList: [],
        searchTopTime: this.$moment(new Date).format("YYYY-MM-DD"),
        filterDormBackStatusText: '',
        form: {
          id: '',
          name: '',
          sex: '',
          nation: '',
          borthday: '',
          idCard: '',
          phone: '',
          email: '',
          innerTime: '',
          classData: [],
          addAccount: '',
          type: '',
          status: '',
          studnetId: '',
          className: '',
          classId: '',
          collegeId: '',
          majorId: '',
          claszDate: '',
          searchUserId: ''
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
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          keyWord: this.searchKey,
        };
        if (this.searchType != -1){
          params['signStatus'] = this.searchType;
        }
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          let day = this.searchTimeData.value;
          params['busiTime'] = day;
          params['timeUnit'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeUnit'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          params['queryDate'] = this.searchTimeData.value+"-01";
          params['timeUnit'] = 4;
        }else if (this.searchTimeData.timeUnit == 5){
          params['timeUnit'] = 1;
        }else {
          let day = this.$moment(new Date()).format("YYYY-MM-DD");
          params['busiTime'] = this.$moment(new Date()).format("YYYY-MM-DD");
          params['timeUnit'] = 3;
        }
        this.$axios.get(common.attend_dorm_static_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initDetail(){
        let params = {
          page: this.pageDetail,
          num: this.numDetail,
          userId: this.searchUserId
        };
        if (this.searchDetailType != -1){
          params['signStatus'] = this.searchDetailType;
        }
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          let day = this.searchTimeData.value;
          params['busiTime'] = day;
          params['timeUnit'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeUnit'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          params['queryDate'] = this.searchTimeData.value+"-01";
          params['timeUnit'] = 4;
        }else if (this.searchTimeData.timeUnit == 5){
          params['timeUnit'] = 1;
        }else {
          let day = this.$moment(new Date()).format("YYYY-MM-DD");
          params['busiTime'] = this.$moment(new Date()).format("YYYY-MM-DD");
          params['timeUnit'] = 3;
        }
        this.$axios.get(common.attend_dorm_static_record_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableDetailData = res.data.data.list;
            this.totalDetail = res.data.data.totalCount;
            this.numDetail = res.data.data.num;
            this.pageDetail = res.data.data.currentPage;
          }
        });
      },
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
      detailInfo(row){
        this.searchUserId = row.userId;
        this.initDetail();
        this.drawerVisible = true;
      },
      search(data){
        this.searchKey = data;
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
      sizeDetailChange(event){
        this.pageDetail = 1;
        this.numDetail = event;
        this.initDetail();
      },
      currentDetailPage(event){
        this.pageDetail = event;
        this.initDetail();
      },
      jumpPage(data){
        this.pageDetail = data;
        this.initDetail();
      },
      workTitleInfo(val, type){
        return workTitle(type, val);
      },
      studentTeachStatusInfo(val, type){
        return studentTeachStatus(type, val);
      },
      okDialog(){
        let url = "";
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let classData = this.$refs.selectorDept.$refs.cascaderSelector.getCheckedNodes()[0].pathNodes;
            let className = this.$refs.selectorDept.$refs.cascaderSelector.getCheckedNodes()[0].pathLabels;
            /*let deptArr = [];
            for (let i = 0; i < deptData.length; i++){
              deptArr.push(deptData[i].value);
            }*/
            let params = {
              realName: this.form.name,
              studentId: this.form.studentId,
              sex: this.form.sex,
              nation: this.form.nation,
              birthday: this.form.borthday,
              certificateNum: this.form.idCard,
              phone: this.form.phone,
              schoolInTime: this.form.innerTime,
              stuAttendType: this.form.type,
              workEnjoy: this.form.workEnjoy,
              title: this.form.workTitle,
              type: this.form.type,
              addAccount: 'on',
              studentCurrentStatus: this.form.status,
              clasz: classData[3].value,
              collegeId: classData[0].value,
              majorId: classData[1].value,
              attendType: this.form.type,
              status: this.form.status,
              className: className[className.length - 1],
              claszDate: this.form.claszDate
            };
            if (this.form.email){
              params['email']  = this.form.email;
            }
            if (this.form.id != ""){
              url = common.student_edit;
              params['userId'] = this.form.id;
            }else {
              url = common.student_add;
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
          name: '',
          sex: '',
          nation: '',
          borthday: '',
          idCard: '',
          phone: '',
          email: '',
          innerTime: '',
          classData: [],
          addAccount: '',
          type: '',
          status: '',
          studnetId: '',
          className: '',
          classId: '',
          collegeId: '',
          majorId: '',
          claszDate: ''
        };
        this.subTitle = "";
        this.$set(this.form,'deptdata', []);
        this.resetCasadeSelector('selectorDept');
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      handleChangeTime(data, type){
        switch (type) {
          case 1:
            this.form.borthday = data;
            break;
          case 2:
            this.form.innerTime = data;
            break;
          case 3:
            this.form.workTime = data;
            break;
        }
      },
      handleChangeSelect(data, type){
        switch (type) {
          case 1:
            this.form.sex = data;
            break;
          case 2:
            this.form.nation = data;
            break;
          case 3:
            this.form.type = data;
            break;
          case 4:
            this.form.status = data;
            break;
        }
      },
      nationInfoText(){
        let arr = nationInfo();
        for (let i = 0; i < arr.length; i++){
          arr[i]['label'] = arr[i].name;
          arr[i]['value'] = arr[i].code;
        }
        return arr;
      },
      studentTeachStatusOption(){
        let obj = studentTeachStatus('get');
        let arr = [];
        for (let i in obj){
          arr.push({
            label: obj[i],
            value: i
          });
        }
        return arr;
      },
      studyTypeOption(){
        let obj = studyType('get');
        let arr = [];
        for (let i in obj){
          arr.push({
            label: obj[i].name,
            value: obj[i].code
          });
        }
        return arr;
      },
      workTitleOption(){
        let obj = workTitle('get');
        let arr = [];
        for (let i in obj){
          arr.push({
            label: obj[i],
            value: i
          });
        }
        return arr;
      },
      teacherTypeText(){
        let obj = teacherTypeInfo();
        let arr = [];
        for (let i = 0; i < obj.length; i++){
          arr.push({
            label: obj[i].name,
            value: obj[i].code
          });
        }
        return arr;
      },
      handleCascaderChange(data){
        this.form.classData = data;
        if (data.length == 4){
          let createTime = this.$refs.selectorDept.$refs.cascaderSelector.getCheckedNodes()[0].pathNodes[3].data.create_time;
          this.form.claszDate = this.$moment(createTime).format("YYYY-MM-DD");
        }
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          userId: this.form.id
        }
        url = common.student_delete;
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
      closeDrawerDialog(event){
        this.pageDetail = 1;
        this.numDetail = 20;
        this.searchUserId = "";
        this.drawerVisible = event;
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      searchTopDate(data){
        this.searchTimeData = data;
        this.page = 1;
        this.init();
      },
      searchTopType(data){

      },
      changeStatus(type){
        this.searchType = type;
        this.init();
      },
      changeDetailStatus(type){
        this.searchDetailType = type;
        this.pageDetail = 1;
        this.initDetail();
      },
      dormStatusInfo(val){
        return dormStatus('set', val);
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'status'){
            this.filterDormBackStatusText = "";
            this.searchType = value[item][0];
            for (let i = 0; i < this.filterDormBackStatus.length; i++){
              if (this.searchType == this.filterDormBackStatus[i].value){
                this.filterDormBackStatusText = this.filterDormBackStatus[i].text;
              }
            }
          }
        }
        this.page = 1;
        this.init();
      }
    }
  }
</script>

<style scoped>
  .container {

  }
</style>
