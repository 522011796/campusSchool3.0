<template>
  <div class="container">
    <div>
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">报道记录</span>
          </div>
          <my-el-tree type="1" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div class="layout-top-tab margin-top-5">
            <el-row>
              <el-col :span="12">
                <div class="layout-inline">
                  <my-select class="layout-item width-150" size="small" :placeholder="$t('类型')" :sel-value="searchTopType" :options="typeOptions" :clearable="true" @change="handleTypeChange($event, 1)"></my-select>
                  <my-select class="layout-item width-150" size="small" :placeholder="$t('状态')" :sel-value="searchTopStatus" :options="statusOptions" :clearable="true" @change="handleTypeChange($event, 2)"></my-select>
                </div>
              </el-col>
              <el-col :span="12" class="text-right">
                <div class="layout-inline">
                  <el-date-picker
                    size="small"
                    v-model="searchTimeData"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    @change="handleChangeTime"
                    style="width: 220px">
                  </el-date-picker>
                  <my-input-button ref="teacher width-150" size="small" plain width-class="width: 120px" type="success" :clearable="true" :placeholder="$t('姓名/录取号')" @click="search"></my-input-button>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="margin-top-10">
            <el-table
              ref="refTable"
              :data="tableData"
              header-cell-class-name="custom-table-cell-bg"
              size="medium"
              :max-height="tableHeight2.height"
              style="width: 100%">
              <el-table-column align="center" :label="$t('姓名')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.real_name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.real_name}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('录取号')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.student_id}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.student_id}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('性别')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center"><my-sex tag="text" :sex="scope.row.sex"></my-sex></div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <my-sex tag="text" :sex="scope.row.sex"></my-sex>
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
              <el-table-column align="center" :label="$t('报道类型')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label class="color-success" v-if="scope.row.check_type == 0">{{$t("人工")}}</label>
                      <label class="color-danger" v-if="scope.row.check_type == 1">{{$t("二维码")}}</label>
                      <label class="color-danger" v-if="scope.row.check_type == 2">{{$t("人脸识别")}}</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label class="color-success" v-if="scope.row.check_type == 0">{{$t("人工")}}</label>
                      <label class="color-danger" v-if="scope.row.check_type == 1">{{$t("二维码")}}</label>
                      <label class="color-danger" v-if="scope.row.check_type == 2">{{$t("人脸识别")}}</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('报道时间')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.check_time">{{$moment(scope.row.check_time).format("YYYY-MM-DD HH:mm:ss")}}</label>
                      <label v-else>--</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.check_time">{{$moment(scope.row.check_time).format("YYYY-MM-DD HH:mm:ss")}}</label>
                      <label v-else>--</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('照片抓拍')">
                <template slot-scope="scope">
                  <el-image
                    :z-index="9999999"
                    class="custom-el-image-pop head-img-radius-class"
                    :src="scope.row.photourl"
                    :preview-src-list="[scope.row.photourl]">
                  </el-image>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('抓拍状态')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label class="color-danger" v-if="!scope.row.check_status">{{$t("失败")}}</label>
                      <label class="color-success" v-if="scope.row.check_status">{{$t("成功")}}</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label class="color-danger" v-if="!scope.row.check_status">{{$t("失败")}}</label>
                      <label class="color-success" v-if="scope.row.check_status">{{$t("成功")}}</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </layout-lr>
    </div>

    <drawer-layout-right tabindex="0" :show-close="true" @changeDrawer="closeDialog" :visible="dialogVisible" size="680px">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <span class="tab-class font-bold">
            <i class="fa fa-file"></i>
            {{$t('报道单')}}
          </span>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div>
          <div class="padding-tb-10 padding-lr-10">
            <span class="title-block-tag"></span>
            <span class="title-block-text">{{$t("基本信息")}}</span>
          </div>
          <table class="custom-table">
            <tr>
              <td style="width: 20%" rowspan="2">
                <el-image style="width: 80px; height: 80px;margin-top: 5px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-image>
              </td>
              <td style="width: 20%">{{$t("姓名")}}</td>
              <td style="width: 10%">1</td>
              <td style="width: 10%">{{$t("性别")}}</td>
              <td style="width: 10%">1</td>
              <td style="width: 20%">{{$t("录取号")}}</td>
              <td style="width: 10%">1</td>
            </tr>
            <tr>
              <td>{{$t("学院")}}</td>
              <td>1</td>
              <td>{{$t("专业")}}</td>
              <td>1</td>
              <td>1</td>
              <td>{{$t("班级")}}</td>
            </tr>
            <tr>
              <td>{{$t("宿舍信息")}}</td>
              <td colspan="6">1</td>
            </tr>
          </table>
        </div>
        <div class="margin-top-20">
          <div class="padding-tb-10 padding-lr-10">
            <span class="title-block-tag"></span>
            <span class="title-block-text">{{$t("缴费信息")}}</span>
          </div>
          <el-table
            border
            ref="refTable"
            :data="tableSignData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            style="width: 100%">
            <el-table-column align="center" :label="$t('费用名称')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('缓缴')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('贷缴')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('减免')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('实缴')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('已缴')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('未缴金额')">
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
        </div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
import mixins from "~/utils/mixins";
import {common} from "~/utils/api/url";
import {
  cityInfo,
  educationInfo,
  MessageError,
  MessageSuccess,
  nationalityInfo,
  nationInfo,
  provinceInfo
} from "~/utils/utils";
import MyHeadImg from "~/components/utils/common/MyHeadImg";

  export default {
    components: {MyHeadImg},
    mixins: [mixins],
    data(){
      return {
        tableData: [],
        tableSignData: [],
        countNum: 0,
        signNum: 0,
        unSignNum: 0,
        collegeList: [],
        categorys: [],
        types: [],
        subTitle: '',
        collegeData: '',
        searchKey: '',
        searchType: '',
        searchStatus: '',
        searchTopType: '',
        searchTopStatus : '',
        searchCascader: [],
        typeOptions: [
          {value: 0, text: this.$t("人工"), label: this.$t("人工")},
          {value: 1, text: this.$t("二维码"), label: this.$t("二维码")},
          {value: 2, text: this.$t("人脸识别"), label: this.$t("人脸识别")}
        ],
        statusOptions: [
          {value: true, text: this.$t("成功"), label: this.$t("成功")},
          {value: false, text: this.$t("失败"), label: this.$t("失败")}
        ],
        searchTimeData: [],
        searchAuditType: '',
        searchSexType: '',
        searchSignTimeStatus: '',
        searchInterface: '',
        dialogVisible: false
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
          searchKey: this.searchKey,
          checkType: this.searchTopType,
          checkStatus: this.searchTopStatus,
          startTime: (this.searchTimeData && this.searchTimeData.length > 0) ? this.$moment(this.searchTimeData[0]).format("YYYY-MM-DD") : '',
          endTime: (this.searchTimeData && this.searchTimeData.length > 0) ? this.$moment(this.searchTimeData[1]).format("YYYY-MM-DD") : '',
        };
        this.$axios.get(common.enroll_checkin_record_page, {params: params}).then(res => {
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
      handleCascaderChange(data){
        this.searchCascader = data;
      },
      handleChangeTime(data){
        this.searchTimeData = data ? data : [];
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      expandInfo() {
        let url = common.housework_query_class_record_export;
        let params = {
          page: this.page,
          num: this.num,
        };
        params = this.$qs.stringify(params);
        window.open(url + "?" + params, "_self");
      },
      changeStatus(type){
        this.searchType = type.value;
        this.page = 1;
        this.init();
      },
      statusInfo(item, type){

      },
      detailInfo(item, type){
        this.form.id = 1;
        this.dialogDetail = true;
      },
      signInfo($event, item){
        this.dialogVisible = true;
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'auditType'){
            this.searchAuditType = value[item][0];
          }else if (item == 'sexType'){
            this.searchSexType = value[item][0];
          }else if (item == 'signType'){
            this.searchSignTimeStatus = value[item][0];
          }else if (item == 'interfaceType'){
            this.searchInterface = value[item][0];
          }
        }
        this.init();
      },
      nationInfoText(){
        let arr = nationInfo();
        for (let i = 0; i < arr.length; i++){
          arr[i]['label'] = arr[i].name;
          arr[i]['value'] = arr[i].code;
        }
        return arr;
      },
      nationalityInfoText(){
        let arr = nationalityInfo();
        for (let i = 0; i < arr.length; i++){
          arr[i]['label'] = arr[i].country_name_cn;
          arr[i]['value'] = arr[i].country_code;
        }
        return arr;
      },
      educationInfoText(){
        let arr = educationInfo();
        for (let i = 0; i < arr.length; i++){
          arr[i]['label'] = arr[i].name;
          arr[i]['value'] = arr[i].value;
        }
        return arr;
      },
      provinceInfoText(){
        let arr = provinceInfo();
        for (let i = 0; i < arr.length; i++){
          arr[i]['label'] = arr[i].name;
          arr[i]['value'] = arr[i].ProID;
        }
        return arr;
      },
      cityInfoText(){
        let arr = cityInfo();
        for (let i = 0; i < arr.length; i++){
          arr[i]['label'] = arr[i].name;
          arr[i]['value'] = arr[i].CityID;
        }
        return arr;
      },
      handleTypeChange(event, type){
        if (type == 1){
          this.searchTopType = event;
        }else if (type == 2){
          this.searchTopStatus = event;
        }
      },
      closeDialog(event){
        this.form = {
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
          wechat: '',
          fatherName: '',
          fatherPhone: '',
          motherName: '',
          motherPhone: '',
          address: '',
          education: '',
          college: [],
          major: '',
          class: [],
          eduSystem: '',
          headmaster: '',
          recruitingTeacher: '',
          adBath: '',
          subject: '',
          adProvince: '',
          adCity: '',
          graduationSchool: '',
          examScore: '',
          otherMsg: ''
        };
        this.subTitle = "";
        this.versionStatus = '';
        this.resetCasadeSelector('SelectorCollege');
        this.resetCasadeSelector('selectorDept');
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        this.uploadProcess = '';
        this.uploadResult = [];
        clearTimeout(this.loopTimer);
        this.loopTimer = null;
        this.teacherArray = [];
        this.approverUsers = [];
        this.btnLoading = false;
        this.dialogVisible = false;
        this.dialogDetail = false;
      },
      cancelFormDrawDialog(){
        this.closeDialog();
        this.drawerForm = false;
      },
      okFormDrawDialog(event, type){
        let params = {

        };

        let url = common.circular_add;
        //params = this.$qs.stringify(params);
        this.btnLoading = true;
        this.$axios.post(url, params, {loading: false}).then(res => {
          if (res.data.code == 200){
            this.drawerManage = false;
            this.init();
            this.closeDialog();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.btnLoading = false;
        });
      }
    }
  }
</script>

<style scoped>
.header-block{
  height: 40px;
  line-height: 40px;
}
.block-table-main{
  border: 1px solid #DCDFE6;
}
.block-table-main .item{
  height: 40px;
  line-height: 40px;
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
.head-img-radius-class{
  width: 30px;
  height: 30px;
  border-radius: 30px
}
</style>
