<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">录取管理</span>
        </div>
        <my-el-tree type="1" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="24">
              <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加")}}</el-button>
              <el-button size="small" type="info"  icon="el-icon-upload" @click="importInfo($event)">{{$t("导入")}}</el-button>
              <el-button size="small" type="info"  icon="el-icon-download" @click="exoprtInfo($event)">{{$t("导出")}}</el-button>
              <el-button size="small" type="warning"  icon="el-icon-s-custom" @click="manageInfo($event)">{{$t("管理员")}}</el-button>
            </el-col>
<!--            <el-col :span="16" class="text-right">-->
<!--              <div class="layout-inline">-->
<!--                <my-select class="layout-item width-150" size="small" :placeholder="$t('类型')" :options="filterAppManageType" :clearable="true" @change="handleTypeChange($event, 1)"></my-select>-->
<!--                <my-select class="layout-item width-150" size="small" :placeholder="$t('状态')" :options="filterAppManageStatus" :clearable="true" @change="handleTypeChange($event, 2)"></my-select>-->
<!--                <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('名称/编号')" @click="search"></my-input-button>-->
<!--              </div>-->
<!--            </el-col>-->
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
            <el-table-column
              v-for="(item, index) in tableColData" :key="index"
              align="center"
              :label=item.label>
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.values[index].value}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.values[index].value}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              width="120"
              fixed="right"
              :label="$t('操作')">
              <template slot-scope="scope">
                <i class="fa fa-eye color-warning margin-right-5" @click="detailInfo(scope.row)"></i>
                <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row)"></i>
                <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <drawer-layout-right tabindex="0" :show-close="true" @changeDrawer="closeDialog" :visible="drawerForm" size="680px">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <span class="tab-class font-bold">
            {{$t('学生信息')}}
          </span>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <el-form :model="form" ref="form" :rules="rules" label-width="90px">
          <template>
            <div class="color-muted margin-top-5">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("基础信息")}}</label>
              </span>
            </div>
            <div class="block-item-bg font-size-12">
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('迎新年度')" prop="year">
                    <my-select class="layout-item" size="small" :placeholder="$t('请选择')" :sel-value="form.year" :options="yearOptions" width-style="220" :clearable="true" @change="handleSelectChange($event, 1)"></my-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('姓名')" prop="name">
                    <el-input v-model="form.name" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('录取号')" prop="adNo">
                    <el-input v-model="form.adNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('一卡通号')" prop="oneCardNo">
                    <el-input v-model="form.oneCardNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('学号')" prop="stuNo">
                    <el-input v-model="form.stuNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('考号')" prop="examNo">
                    <el-input v-model="form.examNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('性别')" prop="sex">
                    <my-select :sel-value="form.sex" :options="g_sex" width-style="220" @change="handleSelectChange($event, 2)"></my-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('身份证')" prop="idCardNo">
                    <el-input v-model="form.idCardNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('出生日期')" prop="birthday">
                    <my-date-picker :sel-value="form.birthday" width-style="220" @change="handleChangeTime($event,1)"></my-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('国籍')" prop="nationality">
                    <my-select :sel-value="form.nationality" :options="nationalityInfoText()" width-style="220" @change="handleSelectChange($event, 3)"></my-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="24">
                  <el-form-item :label="$t('民族')" prop="nation">
                    <my-select :sel-value="form.nation" :options="nationInfoText()" width-style="220" @change="handleSelectChange($event, 4)"></my-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </template>

          <template>
            <div class="margin-top-20">
              <div class="color-muted margin-top-5">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("联系方式")}}</label>
              </span>
              </div>
              <div class="block-item-bg font-size-12">
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('手机号')" prop="phone">
                      <el-input v-model="form.phone" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('QQ')" prop="qq">
                      <el-input v-model="form.qq" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('邮箱')" prop="email">
                      <el-input v-model="form.email" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('微信号')" prop="wechat">
                      <el-input v-model="form.wechat" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('父亲姓名')" prop="fatherName">
                      <el-input v-model="form.fatherName" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('父亲电话')" prop="fatherPhone">
                      <el-input v-model="form.fatherPhone" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('母亲姓名')" prop="motherName">
                      <el-input v-model="form.motherName" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('母亲电话')" prop="motherPhone">
                      <el-input v-model="form.motherPhone" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="24">
                    <el-form-item :label="$t('详细地址')" prop="address">
                      <el-input v-model="form.address" size="small"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>

          <template>
            <div class="margin-top-20">
              <div class="color-muted margin-top-5">
                <span>
                  <label class="title-block-tag"></label>
                  <label class="title-block-text color-warning">{{$t("入学信息")}}</label>
                </span>
              </div>
              <div class="block-item-bg font-size-12">
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('学历')" prop="education">
                      <my-select :sel-value="form.education" :options="educationInfoText()" width-style="220" @change="handleSelectChange($event, 5)"></my-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('学院/专业')" prop="college">
                      <my-cascader ref="SelectorCollege" width-style="220" :sel-value="form.college" type="1" sub-type="2" @change="handleCascaderChange($event, 1)"></my-cascader>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('班级')" prop="class">
                      <my-cascader ref="selectorDept" :sel-value="form.class" type="1" sub-type="4" width-style="220" @change="handleCascaderChange($event, 2)"></my-cascader>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('班主任')" prop="headmaster">
                      <el-input v-model="form.headmaster" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('学制')" prop="eduSystem">
                      <el-input v-model="form.eduSystem" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('招生老师')" prop="recruitingTeacher">
                      <el-input v-model="form.recruitingTeacher" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>

          <template>
            <div class="margin-top-20">
              <div class="color-muted margin-top-5">
                <span>
                  <label class="title-block-tag"></label>
                  <label class="title-block-text color-warning">{{$t("学历信息")}}</label>
                </span>
              </div>
              <div class="block-item-bg font-size-12">
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('录取批次')" prop="adBath">
                      <my-select :sel-value="form.adBath" :options="bathOptions" width-style="220" @change="handleSelectChange($event, 7)"></my-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('科目')" prop="type">
                      <my-select :sel-value="form.subject" :options="subjectOptions" width-style="220" @change="handleSelectChange($event, 8)"></my-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('录取省份')" prop="adProvince">
                      <my-select :sel-value="form.adProvince" :options="provinceInfoText()" width-style="220" @change="handleSelectChange($event, 9)"></my-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('录取城市')" prop="adCity">
                      <my-select :sel-value="form.adCity" :options="cityInfoText()" width-style="220" @change="handleSelectChange($event, 10)"></my-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('毕业学校')" prop="graduationSchool">
                      <el-input v-model="form.graduationSchool" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('高考成绩')" prop="examScore">
                      <el-input v-model="form.examScore" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>

          <template>
            <div class="margin-top-20">
              <div class="color-muted margin-top-5">
                <span>
                  <label class="title-block-tag"></label>
                  <label class="title-block-text color-warning">{{$t("其他信息")}}</label>
                </span>
              </div>
              <div class="block-item-bg font-size-12 custom-textarea-inner">
                <el-row>
                  <el-col :span="24">
                    <el-form-item :label="$t('其他信息')" prop="otherMsg">
                      <el-input v-model="form.otherMsg" type="textarea" :rows="5" size="small"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>
        </el-form>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="mini" @click="cancelFormDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="mini" type="success" :loading="btnLoading" @click="okFormDrawDialog()">{{$t("保存")}}</el-button>
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
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";
  import admissionValidater from "~/utils/validater/admissionValidater";

  export default {
    components: {DrawerLayoutRight},
    mixins: [mixins, admissionValidater],
    data(){
      return {
        tableData: [],
        tableColData: [],
        tableColValueData: [],
        collegeList: [],
        categorys: [],
        types: [],
        tableCBData: [],
        subTitle: '',
        collegeData: '',
        searchKey: '',
        searchType: '',
        searchStatus: '',
        dialogLoading: false,
        dialogVisible: false,
        visibleConfim: false,
        dialogAd: false,
        dialogDetail: false,
        drawerForm: false,
        btnLoading: false,
        yearOptions: [],
        bathOptions: [],
        subjectOptions: [],
        form: {
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
        }
      }
    },
    created() {
      this.init();
      this.initCollegeAndDorm();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num
        };
        let contentArr = [];
        let contentValArr = [];
        this.$axios.get(common.server_applet_list, {params: params}).then(res => {
          if (res.data.data){
            let valuesArr = [];
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['values'] = [
                {label: i+'', value: i},
                {label: i+'', value: i},
                {label: i+'', value: i},
                {label: i+'', value: i},
                {label: i+'', value: i},
                {label: i+'', value: i},
                {label: i+'', value: i},
                {label: i+'', value: i},
                {label: i+'', value: i},
                {label: i+'', value: i},
                {label: i+'', value: i},
                {label: i+'', value: i},
                {label: i+'', value: i},
                {label: i+'', value: i},
                {label: i+'', value: i}
              ];
            }

            for (let i = 0; i < 15; i++){
              valuesArr.push({label: 'test'});
            }

            this.tableData = res.data.data.list;
            this.tableColData = valuesArr;
            this.total = res.data.data.total;
            this.num = res.data.data.num;
            this.page = res.data.data.page;
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
        this.init(data);
      },
      initCollegeAndDorm(){
        let arr = [];
        this.$axios.get(common.housework_query_check_college).then(res => {
          if (res.data.data){
            arr.push({
              label: this.$t("全校"),
              value: '-1',
              type: 3
            });
            for (let i = 0; i < res.data.data.length; i++ ){
              arr.push({
                label: res.data.data[i].name,
                value: res.data.data[i].id + "-" + res.data.data[i].college_no + "-" + "1",
                type: 2
              });
            }

            this.$axios.get(common.housework_query_check_dorm, {params: {type: 1}}).then(res => {
              if (res.data.data){
                for (let i = 0; i < res.data.data.length; i++ ){
                  arr.push({
                    label: res.data.data[i].buildingName,
                    value: res.data.data[i].id + "-" + res.data.data[i].buildingNo + "-" + "2",
                    type: 1
                  });
                }
                this.tableCBData = arr;
              }
            });
          }
        });
      },
      addInfo(){
        this.drawerForm = true;
      },
      importInfo(){
        this.dialogAd = true;
      },
      exportInfo(){
        this.dialogAd = true;
      },
      manageInfo(){
        this.dialogAd = true;
      },
      editInfo(item){
        this.dialogDetail = true;
      },
      detailInfo(){
        this.dialogDetail = true;
      },
      deleteInfo(item){
        this.form.id = item.id;
        this.visibleConfim = true;
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
        this.btnLoading = false;
        this.drawerForm = false;
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
      handleSelectChange(event, type){
        if (type == 1){
          this.form.year = event;
        }else if (type == 2){
          this.form.sex = event;
        }else if (type == 3){
          this.form.nationality = event;
        }else if (type == 4){
          this.form.nation = event;
        }else if (type == 5){
          this.form.education = event;
        }else if (type == 6){
          this.form.college = event;
        }else if (type == 7){
          this.form.adBath = event;
        }else if (type == 8){
          this.form.subjectOptions = event;
        }else if (type == 9){

        }
      },
      handleChangeTime(event, type){
        if (type == 1){
          this.form.birthday = event;
        }
      },
      handleCascaderChange(data, type){
        switch (type) {
          case 1:
            this.form.college = data;
            break;
          case 2:
            this.form.class = data;
            break;
        }
      },
      cancelFormDrawDialog(){
        this.closeDialog();
        this.drawerForm = false;
      },
      okFormDrawDialog(event){
        let url = "";
        this.$refs['form'].validate((valid) => {
          if (valid) {
            let params = {
              title: this.form.title,
              titleDesc: this.form.titleDesc,
              content: this.form.content,
              actionType: 2,
              titleImg: this.form.thumnbnail,
            };

            if (this.form.id != ""){
              params['id'] = this.form.id;
            }

            url = common.circular_add;
            //params = this.$qs.stringify(params);
            this.btnLoading = true;
            this.$axios.post(url, params, {dataType: 'stringfy'}).then(res => {
              if (res.data.code == 200){
                this.drawerForm = false;
                this.init();
                this.clearDrawerDialog();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.btnLoading = false;
            });
          }
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
.tab-class{
  cursor: default;
  padding: 10px;
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
</style>
