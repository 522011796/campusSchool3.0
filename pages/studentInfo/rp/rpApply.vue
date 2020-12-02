<template>
  <div class="container">
    <div class="container">
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">奖惩申请</span>
          </div>
          <my-el-tree type="1" sub-type="4" @node-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div>
            <div>
              <el-card shadow="never" :body-style="{padding: '5px 10px',height: '120px'}">
                <el-row :gutter="8">
                  <el-col :span="8">
                    <div class="rpStatic-top-item color-muted">
                      <div class="title">
                        {{$t("学生人数")}}:
                        <el-tooltip class="item" effect="dark" :content="$t('同一人建立多次算一次，处罚多次酸1次，既有奖励和处罚各算一次')" placement="top-start">
                          <i class="fa fa-info-circle"></i>
                        </el-tooltip>
                      </div>
                      <div>
                        <div class="margin-top-5 color-grand">
                          <span class="person-item text-right">{{$t("总人数")}}</span>
                          <span>{{personTotal}}</span>
                        </div>
                        <div class="margin-top-5 color-success">
                          <span class="person-item text-right">{{$t("奖励")}}</span>
                          <span>{{reTotal}}</span>
                        </div>
                        <div class="margin-top-5 color-warning">
                          <span class="person-item text-right">{{$t("处分")}}</span>
                          <span>{{puTotal}}</span>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="rpStatic-top-item color-muted">
                      <div class="title">{{$t("类型占比")}}: </div>
                      <div style="height: 100px">
                        <div v-if="typeData.length <= 0" class="color-disabeld text-center" style="position: relative; top: 20%;">{{$t("暂无数据")}}</div>
                        <circle-chart v-else chart-id="typeId" :chart-title='$t("类型占比")' :data-key="typeDataKey" :data="typeData"></circle-chart>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="rpStatic-top-item color-muted">
                      <div class="title">{{$t("级别占比")}}: </div>
                      <div>
                        <div style="height: 100px">
                          <div v-if="typeData.length <= 0" class="color-disabeld text-center" style="position: relative; top: 20%;">{{$t("暂无数据")}}</div>
                          <circle-chart v-else chart-id="levelId" :chart-title='$t("级别占比")' :data-key="levelDataKey" :data="levelData"></circle-chart>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </div>
          </div>

          <div class="layout-right-tab margin-top-10">
            <el-row class="layout-inline">
              <el-col :span="12">
                <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo()">{{$t("奖惩申请")}}</el-button>
                <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo()">{{$t("导出")}}</el-button>
              </el-col>
              <el-col :span="12" class="text-right">
                <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
                <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('姓名/学号')" @click="search"></my-input-button>
              </el-col>
            </el-row>
          </div>
          <div>
            <el-table
              :data="tableData"
              header-cell-class-name="custom-table-cell-bg"
              size="medium"
              :max-height="tableMiddleHeight.height"
              style="width: 100%"
              @filter-change="fliterTable">
              <el-table-column
                align="center"
                :label="$t('日期')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{$moment(scope.row.apply_time).format("YYYY-MM-DD")}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{$moment(scope.row.apply_time).format("YYYY-MM-DD")}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('姓名')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.real_name}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.real_name}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('学号')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.student_id}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.student_id}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('班级')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.class_name}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.class_name}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :filter-multiple="false"
                column-key="type"
                :filters="filterTypes"
                :label="$t('类型')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.str1}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.str1}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :filter-multiple="false"
                column-key="level"
                :filters="filterLevels"
                :label="$t('级别')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.str2}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.str2}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('说明')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.des}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.des}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :filter-multiple="false"
                column-key="status"
                :filters="filterStatus"
                :label="$t('状态/审核人')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <my-audit-status :status="scope.row.status" :handler="scope.row.handler_name"></my-audit-status>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <my-audit-status :status="scope.row.status" :handler="scope.row.handler_name"></my-audit-status>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                fixed="right"
                :label="$t('操作')"
                width="60">
                <template slot-scope="scope">
                  <i class="fa fa-list-alt margin-right-5 color-grand" @click="handleDetail(scope.row)"></i>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </layout-lr>
    </div>

    <dialog-normal width-style="600px" top="10vh" :visible="modalVisible" :title="$t('奖惩申请')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('类型')" prop="type">
            <my-select :sel-value="form.type" :options="filterTypes" width-style="350" @change="handleSelect($event, 1)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('级别')" prop="level">
            <my-select :sel-value="form.level" :options="filterAddLevels" width-style="350" @change="handleSelect($event, 2)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('学生')">
            <div class="margin-bottom-10">
              <my-input-button ref="studentRef" size="small" type="success" :clearable="true" :placeholder="$t('学生名称')" @click="searchStudent"></my-input-button>
            </div>
            <el-table height="200" :header-cell-style="{'line-height': '20px'}" size="mini" :data="studentData" border style="width: 350px">
              <el-table-column align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <my-radio :sel-value="form.userId" :label="scope.row.user_id" @change="handleRadioChange"><span></span></my-radio>
                </template>
              </el-table-column>
              <el-table-column property="real_name" align="center" label="姓名" :show-overflow-tooltip="true">

              </el-table-column>
              <el-table-column property="class_name" align="center" label="班级" :show-overflow-tooltip="true">

              </el-table-column>
            </el-table>
            <div class="rp-fotter-page text-right">
              <el-pagination style="padding: 5px 0px;" small layout="prev, pager, next" :total="totalStudent" :page-size="numStudent" @current-change="currentStudentPage" @size-change="sizeStudentChange"></el-pagination>
            </div>
          </el-form-item>
          <el-form-item :label="$t('附件')">
            <img v-if="form.file != ''" :src="form.file" class="rp-img pull-left"/>
            <upload-square class="pull-left margin-left-10 margin-top-5" :action="uploadFileAction" max-size="8" :data="{path: 'reFile'}" accept=".png,.jpg,.jpeg" @success="uploadSuccess">
              <el-button size="small" type="primary">{{$t("点击上传")}}</el-button>
            </upload-square>
            <span class="pull-left color-danger font-size-12 margin-left-10 margin-top-5">{{$t("文件不超过8M")}}</span>
            <div class="moon-clearfix"></div>
          </el-form-item>
          <el-form-item :label="$t('说明')">
            <el-input type="textarea" :rows="2" v-model="form.des" class="width-350"></el-input>
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

    <!--审批详细-->
    <drawer-layout-right @changeDrawer="closeDrawerDialog" :hide-footer="true" :visible="drawerVisible" size="550px" :title="$t('申请单')" @right-close="cancelDrawDialog">
      <div slot="content">
        <my-audit-detail type="PunishmentApply" :sel-value="dataAudit"></my-audit-detail>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import MySelect from "../../../components/MySelect";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import MyAuditDetail from "../../../components/utils/auditDetail/MyAuditDetail";
  import MyElTree from "../../../components/tree/MyElTree";
  import MyPagination from "../../../components/MyPagination";
  import MyAuditStatus from "../../../components/utils/MyAuditStatus";
  import CircleChart from "../../../components/charts/CircleChart";
  import MyRadio from "../../../components/MyRadio";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MyInputButton from "../../../components/search/MyInputButton";
  import UploadSquare from "../../../components/utils/upload/UploadSquare";
  import {common} from "../../../utils/api/url";
  import {MessageError, MessageSuccess, MessageWarning} from "../../../utils/utils";
  import rpApplyValidater from "../../../utils/validater/rpApplyValidater";
  export default {
    mixins: [mixins, rpApplyValidater],
    components: {MyElTree,MySelect,DrawerLayoutRight,MyAuditDetail,MyPagination,MyAuditStatus,CircleChart,MyRadio,DialogNormal,MyInputButton,UploadSquare},
    data(){
      return {
        pageStudnet: 1,
        numStudent: 20,
        totalStudent: 0,
        dataAudit: {},
        drawerVisible: false,
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        subTitle: '',
        tableData: [],
        studentData: [],
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        applyTimeBegin: '',
        applyTimeEnd: '',
        type: '',
        level: '',
        status: '',
        searchKey: '',
        searchDate: [],
        //filterTypes: [{ text: this.$t("处分"), value: '处分' }, { text: '奖励', value: '奖励' }],
        filterLevels: [],
        filterAddLevels: [],
        //filterStatus: [{ text: this.$t("待审批"), value: '0' }, { text: '已通过', value: '3' }, { text: '已驳回', value: '4' }],
        personTotal: 0,
        reTotal: 0,
        puTotal: 0,
        uploadFileAction: common.upload_file,
        typeData: [],
        typeDataKey: [],
        levelData: [],
        levelDataKey: [],
        searchStudentKey: '',
        form: {
          id: '',
          type: '',
          level: '',
          file: '',
          des: '',
          userId:''
        }
      }
    },
    created() {
      this.init();
      this.initLevels();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          applyTypeCode: 'PunishmentApply',
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          applyTimeBegin: this.searchDate ? this.searchDate[0] : '',
          applyTimeEnd: this.searchDate ? this.searchDate[1] : '',
          str1: this.type,
          str2: this.level,
          status: this.status,
          searchKey: this.searchKey
        };
        this.$axios.get(common.audit_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;

            this.initStatic();
          }
        });
      },
      initStatic(){
        let params = {
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.audit_re_static, params).then(res => {
          if (res.data.data){
            this.personTotal = res.data.data.studentCount;
            this.reTotal = res.data.data['奖励'];
            this.puTotal = res.data.data['处分'];

            let typeKey = [];
            let typeList = [];
            for (let i = 0; i < res.data.data.typeCountList.length; i++){
              typeKey.push(res.data.data.typeCountList[i].ptype);
              typeList.push({
                name: res.data.data.typeCountList[i].ptype,
                value: res.data.data.typeCountList[i].count,
                rate: res.data.data.typeCountList[i].rate,
              });
            }

            let levelKey = [];
            let levelList = [];
            for (let i = 0; i < res.data.data.levelCountList.length; i++){
              levelKey.push(res.data.data.levelCountList[i].plevel);
              levelList.push({
                name: res.data.data.levelCountList[i].plevel,
                value: res.data.data.levelCountList[i].count,
                rate: res.data.data.levelCountList[i].rate,
              });
            }

            this.typeData = typeList;
            this.typeDataKey = typeKey;
            this.levelData = levelList;
            this.levelDataKey = levelKey;
          }
        });
      },
      initLevels(type){
        let params = {
          page: this.page,
          num: 99999,
          levelType: type
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.audit_re_level, params).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['text'] = res.data.data.list[i].level_name;
              res.data.data.list[i]['value'] = res.data.data.list[i].level_name;
            }
            if (type){
              this.filterAddLevels = res.data.data.list;
            }
            if (!type){
              this.filterLevels = res.data.data.list;
            }
          }
        });
      },
      initStudent(){
        let params = {
          page: this.pageStudent,
          num: this.numStudent,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          clasz: this.searchClass,
          deleted: 0
        };
        params['realName'] = this.searchStudentKey['input'];
        params = this.$qs.stringify(params);
        this.$axios.post(common.student_list, params).then(res => {
          if (res.data.data){
            this.studentData = res.data.data.list;
            this.totalStudent = res.data.data.totalCount;
            this.numStudnet = res.data.data.num;
            this.pageStudnet = res.data.data.currentPage;
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
        this.init();
      },
      addInfo(){
        this.initStudent();
        this.modalVisible = true;
      },
      searchStudent(data){
        this.searchStudentKey = data;
        this.initStudent();
      },
      handleDetail(row){
        let params = {
          id:row.object_id ? row.object_id : row.id
        };
        this.$axios.get(common.msg_detail_center, {params: params}).then(res => {
          if (res.data.code == 200){
            this.dataAudit = res.data.data;
            this.drawerVisible = true;
          }else {
            MessageWarning(res.data.desc);
          }
        });
      },
      closeDrawerDialog(event){
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
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
      sizeStudentChange(event){
        this.pageStudent = 1;
        this.numStudent = event;
        this.initStudent();
      },
      currentStudentPage(event){
        this.pageStudent = event;
        this.initStudent();
      },
      handleChange(data){
        this.searchDate = data;
      },
      handleRadioChange(data){
        this.form.userId = data;
      },
      handleSelect(data, type){
        if (type == 1){
          this.form.type = data;
          this.initLevels(data);
        }else if(type == 2){
          this.form.level = data;
        }
      },
      search(data){
        this.searchKey = data.input;
        this.init();
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'type'){
            this.type = value[item][0];
          }else if (item == 'level'){
            this.level = value[item][0];
          }else if (item == 'status'){
            this.status = value[item][0];
          }
        }
        this.init();
      },
      expandInfo(){
        let url = common.audit_download;
        let params = {
          page:1,
          num:99999,
          applyTypeCode: 'PunishmentApply',
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          applyTimeBegin: this.searchDate ? this.searchDate[0] : '',
          applyTimeEnd: this.searchDate ? this.searchDate[1] : '',
          str1: this.type,
          str2: this.level,
          status: this.status,
          searchKey: this.searchKey
        };
        params = this.$qs.stringify(params);
        window.open(url+"?"+params, "_self");
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      closeDialog(event){
        this.form = {
          id: '',
          type: '',
          level: '',
          file: '',
          des: '',
          userId: ''
        };
        this.subTitle = "";
        this.pageStudent = 1;
        this.numStudent = 20;
        this.searchStudentKey = "";
        if (this.$refs.studentRef){
          this.$refs.studentRef.inputValue = "";
        }
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      okDialog(event){
        let url = "";
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              applyFile: this.form.file,
              applyTypeCode: "PunishmentApply",
              des: this.form.des,
              str1: this.form.type,
              str2: this.form.level,
              userId: this.form.userId,
              userType: "5"
            };
            url = common.audit_re_add;
            params = JSON.stringify(params);
            this.$axios.post(url, params, {dataType: 'stringfy'}).then(res => {
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
      uploadSuccess(res, file){
        if (res.code == 200){
          this.form.file = res.data.url;
        }else {

        }
      },
      uploadError(res, file){
        MessageError(res.data.desc);
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .rpStatic-top-item .person-item{
    display: inline-block;
    width: 60px;
  }
  .rpStatic-top-item .title{
    font-weight: bold;
  }
  .rp-img{
    height: 50px;
    width: 50px;
    border: 1px solid #dddddd;
  }
  .rp-fotter-page{
    border: 1px solid #EBEEF5;
    border-top: 0px;
    height: 30px;
    line-height: 30px;
    width: 348px;
  }
</style>
