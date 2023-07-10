<template>
  <div class="container">
    <div>test11</div>
    <div>
      <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="handleCurrentChangeExp" @sizeChange="handleSizeChangeExp"></my-pagination>
      <div>
        <my-select class="pull-left" :sel-value="selModel" :options="options" :clearable="true" :disabled="false" :filterable="true" :remote="true" :loading="loading" :group="group" @change="handleChangeExp" :remote-method="remoteMethodExp"></my-select>
        <button class="pull-left" type="button" @click="changeSelect">set</button>
        <div class="moon-clearfix"></div>
      </div>
      <div>
        <div>
          <my-radio :sel-value="radioModel" label="1" :border="true" :size="size" @change="handleChangeRadio">选项一</my-radio>
          <my-radio :sel-value="radioModel" label="2" :disabled="true" @change="handleChangeRadio">选项一</my-radio>
        </div>
        <div>
          <my-radio :sel-value="radioModel" :group="true" :options="options" :disabled="false" :size="size" :border="true" :button="true" text-color="#fff" fill="#f00" @change="handleChangeRadio"></my-radio>
        </div>
      </div>
      <div>
        <my-check :sel-value="checkModelOnly" :disabled="false" :border="true" size="small" @change="handleChangeCheckExp">备选项</my-check>
        <my-check :sel-value="checkModelCustom" :true-label="1" :false-label="0" :disabled="false" :border="true" size="small" @change="handleChangeCheckCustomExp">备选项</my-check>
        <div>
          <my-check :sel-value="checkModel" :group="true" :options="options" :button="false" text-color="#fff" fill="#f00" size="mini" @change="handleChangeCheckArrExp"></my-check>
        </div>
      </div>
      <div>
        <div class="pull-left" style="width: 150px">
          <my-tree :sel-value="dataCollege" :show-type="1" :show-checkbox="false" :show-child-type="1" @node-click="handleNodeClickExp" @check-change="handleCheckChangeExp"></my-tree>
        </div>
        <div class="pull-left" style="width: 150px">
          <my-tree :sel-value="dataSchoolBuild" :show-type="2" :show-checkbox="true" :show-child-type="2" @node-click="handleNodeClickExp" @check-change="handleCheckChangeExp"></my-tree>
        </div>
        <div class="pull-left" style="width: 150px">
          <my-tree :sel-value="dataDormBuild" :show-type="3" :show-checkbox="true" :show-child-type="3" @node-click="handleNodeClickExp" @check-change="handleCheckChangeExp"></my-tree>
        </div>
        <div class="pull-left" style="width: 150px">
          <my-tree :sel-value="dataDept" :show-type="3" :show-checkbox="true" @node-click="handleNodeClickExp" @check-change="handleCheckChangeExp"></my-tree>
        </div>
        <div class="moon-clearfix"></div>
      </div>
      <div>
        <my-sex sex="1" size="small" effect="plain" type="success"></my-sex>
        <my-sex sex="1" size="small" type="success"></my-sex>
        <my-sex sex="0" size="mini" type="info"></my-sex>
        <my-sex sex="2" type="warning"></my-sex>
        <my-sex sex="2" tag="text" class="color-danger"></my-sex>
        <my-sex sex="2" type="danger" effect="dark" size="small"></my-sex>
      </div>
      <div>
        <my-select class="width-100 pull-left margin-right-5" :sel-value="selModel" :options="options" :clearable="true" size="small" :group="group" @change="handleChangeExp" :remote-method="remoteMethodExp"></my-select>
        <my-input-button :options="options" class="pull-left" size="small" type="success" :plain="true" icon-style="fa fa-search" :show-select="true" :clearable="true" width-class="width: 240px;" @click="handleClick"></my-input-button>
        <div class="moon-clearfix"></div>
      </div>
      <div>
        <my-date-picker :sel-value="dateTime" size="small" :disabled="false" type="daterange" format="yyyy-MM-dd" :pickerOptions="pickerOptions" @change="handleChangeDate"></my-date-picker>
      </div>
      <div>
        <a href="javascript:;" @click="changeDialog">删除</a>
        <my-normal-dialog  :visible.sync="visible" :loading="dialogLoading" title="提示" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
      </div>
      <div>
        <div class="pull-left">
          <div class="width-200">
            <my-block-tree :width="200" :sel-value="dataCollege" title-color="#909399" align="center" size="small" title-icon="fa fa-home" item-icon="fa fa-search" @click="handleItemClick"></my-block-tree>
          </div>
          <div class="width-200 margin-top-10">
            <my-block-list-tree :data="dataCollege" :width="200" :opr="true" icon-prefix="el-icon-caret-bottom" @click="handleTreeClick" @edit-click="handleTreeClick"></my-block-list-tree>
          </div>
          <div>
            <my-sex-select sel-value="1" size="small" @change="handleTreeClick" class="width-100"></my-sex-select>
          </div>
        </div>
        <div style="margin-left: 10px; border: 1px solid; margin-left: 200px;height: 300px;overflow-y: auto">
          <my-audit-detail :sel-value="dataAudit"></my-audit-detail>
        </div>
        <div class="moon-clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import MyPagination from "../../components/MyPagination";
  import MySelect from "../../components/MySelect";
  import MyRadio from "../../components/MyRadio";
  import MyCheck from "../../components/MyCheck";
  import MyTree from "../../components/MyTree";
  import MySex from "../../components/MySex";
  import MyInputButton from "../../components/search/MyInputButton";
  import MyDatePicker from "../../components/MyDatePicker";
  import MyBlockTree from "../../components/MyBlockTree";
  import MyBlockListTree from "../../components/tree/MyBlockListTree";
  import MySexSelect from "../../components/utils/MySexSelect";
  import MyAuditDetail from "../../components/utils/auditDetail/MyAuditDetail";
  import MyNormalDialog from "../../components/utils/dialog/MyNormalDialog";
  import mixins from "../../utils/mixins";
  export default {
    name: 'test1',
    mixins: [mixins],
    components: {MyPagination, MySelect, MyRadio, MyCheck, MyTree, MySex, MyInputButton, MyDatePicker, MyBlockTree, MyBlockListTree, MySexSelect, MyAuditDetail, MyNormalDialog},
    data(){
      return {
        options: [],
        selModel: '',
        loading: false,
        dialogLoading: false,
        group: false,
        radioModel: '',
        radioLabel: '1',
        size: 'mini',
        checkModel: ["0", "2"],
        checkModelOnly: true,
        checkModelCustom: '',
        dateTime: '',
        visible: false,
        pickerOptions: {
          disabledDate(time) {
            //return time.getTime() > Date.now();
            //return time.getFullYear() < '2019' || time.getFullYear() > new Date().getFullYear()
            return time.getTime() < new Date(2020, 9, 1) || time.getTime() > new Date(2020, 10, 10);
          }
        },
        dataAudit: {
          "cancel": true,
          "handle_time": null,
          "noticeUserList": [],
          "college_name": "研发学院",
          "class_id": 52,
          "handler_name": "张俊皓,IOS审核账号,李鑫",
          "real_name": "罗奇",
          "des2": null,
          "informUserList": [],
          "user_type": 5,
          "des": "是的",
          "str3": "加分二级1",
          "handleList": [{
            "handleTypeName": "系副主任",
            "handleName": "张俊皓,IOS审核账号,李鑫",
            "des2": null,
            "noticeId": null,
            "andor": "or",
            "applyId": 1053,
            "userSize": 3,
            "handleType": "DeputyDirectorTeacher",
            "noticeName": null,
            "handleUsers": [{
              "id": 1432,
              "applyId": 1053,
              "applyHandleId": 1097,
              "handleId": "00293057-b31e-446b-89b9-38d00f3cfc12",
              "handleName": "张俊皓",
              "status": 0,
              "time": null,
              "des3": null
            }, {
              "id": 1433,
              "applyId": 1053,
              "applyHandleId": 1097,
              "handleId": "01897305-474a-460d-97a2-5b898d6b8e59",
              "handleName": "IOS审核账号",
              "status": 0,
              "time": null,
              "des3": null
            }, {
              "id": 1434,
              "applyId": 1053,
              "applyHandleId": 1097,
              "handleId": "020c8b30-c8c0-471a-9f0b-c9db01336cbb",
              "handleName": "李鑫",
              "status": 0,
              "time": null,
              "des3": null
            }],
            "orderIndex": 1,
            "id": 1097,
            "time": null,
            "handleId": "00293057-b31e-446b-89b9-38d00f3cfc12,01897305-474a-460d-97a2-5b898d6b8e59,020c8b30-c8c0-471a-9f0b-c9db01336cbb",
            "handleSize": 0,
            "status": 0
          }, {
            "handleTypeName": "学管主任",
            "handleName": "张俊皓,郑佳佳,黄炯锋",
            "des2": null,
            "noticeId": null,
            "andor": "or",
            "applyId": 1053,
            "userSize": 3,
            "handleType": "StudentManageTeacher",
            "noticeName": null,
            "handleUsers": [{
              "id": 1435,
              "applyId": 1053,
              "applyHandleId": 1098,
              "handleId": "00293057-b31e-446b-89b9-38d00f3cfc12",
              "handleName": "张俊皓",
              "status": 0,
              "time": null,
              "des3": null
            }, {
              "id": 1436,
              "applyId": 1053,
              "applyHandleId": 1098,
              "handleId": "0261c861-5ac9-4e09-b985-257f2e051d24",
              "handleName": "郑佳佳",
              "status": 0,
              "time": null,
              "des3": null
            }, {
              "id": 1437,
              "applyId": 1053,
              "applyHandleId": 1098,
              "handleId": "02894200-c046-4226-8ec7-d2114181aec4",
              "handleName": "黄炯锋",
              "status": 0,
              "time": null,
              "des3": null
            }],
            "orderIndex": 2,
            "id": 1098,
            "time": null,
            "handleId": "00293057-b31e-446b-89b9-38d00f3cfc12,0261c861-5ac9-4e09-b985-257f2e051d24,02894200-c046-4226-8ec7-d2114181aec4",
            "handleSize": 0,
            "status": 0
          }, {
            "handleTypeName": "系部干事",
            "handleName": "张俊皓,陈盛章,茆政吉",
            "des2": null,
            "noticeId": null,
            "andor": "or",
            "applyId": 1053,
            "userSize": 3,
            "handleType": "SecretaryTeacher",
            "noticeName": null,
            "handleUsers": [{
              "id": 1438,
              "applyId": 1053,
              "applyHandleId": 1099,
              "handleId": "00293057-b31e-446b-89b9-38d00f3cfc12",
              "handleName": "张俊皓",
              "status": 0,
              "time": null,
              "des3": null
            }, {
              "id": 1439,
              "applyId": 1053,
              "applyHandleId": 1099,
              "handleId": "02b42cd2-4c71-4175-bd71-6f1a03cf9224",
              "handleName": "陈盛章",
              "status": 0,
              "time": null,
              "des3": null
            }, {
              "id": 1440,
              "applyId": 1053,
              "applyHandleId": 1099,
              "handleId": "04cf51c4-6cdc-4fe7-9157-678aafd9025d",
              "handleName": "茆政吉",
              "status": 0,
              "time": null,
              "des3": null
            }],
            "orderIndex": 3,
            "id": 1099,
            "time": null,
            "handleId": "00293057-b31e-446b-89b9-38d00f3cfc12,02b42cd2-4c71-4175-bd71-6f1a03cf9224,04cf51c4-6cdc-4fe7-9157-678aafd9025d",
            "handleSize": 0,
            "status": 0
          }],
          "str1": "加分",
          "str2": "加分一级1",
          "quality_level": 23,
          "num1": null,
          "clasz": 52,
          "id": 1053,
          "class_name": "通信1805班",
          "num2": null,
          "time_length": 66.8,
          "inform_user_id": null,
          "handler_name_all": "",
          "apply_file": "",
          "college_id": 22,
          "department_id": null,
          "apply_type_sub_code": null,
          "quality_score": 21,
          "student_id": "1910016992",
          "photo": "//campustest.9451.org:8081/files/faceface/ff524a4e-b35e-4fc4-a831-58a8ff50c6a3.jpg",
          "apply_time": 1602317228000,
          "handle": false,
          "date2": null,
          "major_name": "通信工程",
          "order_index": 1,
          "date1": null,
          "apply_user_name": "管理员",
          "campus_id": 57,
          "major_id": 34,
          "department_path": null,
          "handler_id": "00293057-b31e-446b-89b9-38d00f3cfc12,01897305-474a-460d-97a2-5b898d6b8e59,020c8b30-c8c0-471a-9f0b-c9db01336cbb",
          "apply_user_id": "93",
          "user_id": "22bf7db1-930d-41fe-866a-1d401bf4ead5",
          "double2": null,
          "apply_type_code": "ScoreApply",
          "double1": 1,
          "status": 0
        },
        dataTerLeaveAudit: {
          "cancel": false,
          "handle_time": null,
          "noticeUserList": [],
          "class_id": null,
          "handler_name": "教师070000",
          "real_name": "教师070000",
          "des2": null,
          "depart_name": "六月是你的高考",
          "informUserList": [{
            "realName": "方周泉",
            "userId": "fec7a330-e873-43bc-8695-aa9328bcc0b3"
          }],
          "user_type": 4,
          "des": "Hbb",
          "str3": "[{\"section\":6,\"courseName\":\"网络互连技术\",\"id\":95447},{\"section\":1,\"courseName\":\"网络互连技术\",\"id\":95453}]",
          "job_num": "2018032601",
          "handleList": [{
            "handleTypeName": "固定教师",
            "handleName": "教师070000",
            "des2": null,
            "noticeId": null,
            "andor": "and",
            "applyId": 1061,
            "userSize": 1,
            "handleType": "AnyUser",
            "noticeName": null,
            "handleUsers": [{
              "id": 1448,
              "applyId": 1061,
              "applyHandleId": 1105,
              "handleId": "d37b9a18-734e-4cf0-805d-b8b72dbfb68c",
              "handleName": "教师070000",
              "status": 0,
              "time": null,
              "des3": null
            }],
            "orderIndex": 1,
            "id": 1105,
            "time": null,
            "handleId": "d37b9a18-734e-4cf0-805d-b8b72dbfb68c",
            "handleSize": 0,
            "status": 0
          }],
          "str1": "婚假",
          "str2": "95453,95447",
          "num1": 2,
          "id": 1061,
          "num2": null,
          "inform_user_id": "[\"fec7a330-e873-43bc-8695-aa9328bcc0b3\"]",
          "handler_name_all": "",
          "apply_file": "//campustest.9451.org:8081/files/apply/eff78ded-a368-4c2c-b9c9-79781f7226d8.jpeg",
          "college_id": null,
          "department_id": 211,
          "apply_type_sub_code": "TeacherLeaveApplyClass",
          "photo": "//campustest.9451.org:8081/files/campus/7e99a744-c464-4ef6-b60b-0151f954a1f0.jpeg",
          "apply_time": 1602842111000,
          "handle": false,
          "date2": 1602921300000,
          "order_index": 1,
          "date1": 1602892800000,
          "apply_user_name": "教师070000",
          "campus_id": 57,
          "major_id": null,
          "department_path": "201706271055390062017082317303097220170926104640499",
          "handler_id": "d37b9a18-734e-4cf0-805d-b8b72dbfb68c",
          "apply_user_id": "d37b9a18-734e-4cf0-805d-b8b72dbfb68c",
          "user_id": "d37b9a18-734e-4cf0-805d-b8b72dbfb68c",
          "double2": 1,
          "apply_type_code": "TeacherLeaveApply",
          "double1": 1,
          "status": 0
        }
      }
    },
    created() {
      this.init();
      this.initInfo();
      if (this.group){
        this.getSelectGroup();
      }

      if (!this.group){
        this.getSelect();
      }
    },
    methods: {
      init(){
        this.total = 500;
      },
      async initInfo(){
        await this.getCollegeInfo();
        await this.getSchoolBuildInfo();
        await this.getDormBuildInfo();
        await this.getDeptInfo();
        await this.getCurrentDateInfo();
      },
      handleCurrentChangeExp(data){
        this.page = data;
      },
      handleSizeChangeExp(data){
        this.num = data;
      },
      handleChangeExp(data){
        this.selModel = data;
      },
      handleNodeClickExp(data){
        console.log(data);
      },
      handleCheckChangeExp(data, checked, indeterminate){
        console.log(data, checked, indeterminate);
      },
      remoteMethodExp(query){
        this.loading = true;
        if (query !== '') {
          setTimeout(() => {
            this.loading = false;
            this.options = this.options.filter(item => {
              return item.label.indexOf(query) > -1;
            });
          }, 200);
        }else {
          this.loading = false;
          this.getSelect();
        }
      },
      changeSelect(){
        this.getSelect("2");
      },
      handleChangeRadio(data){
        console.log(data);
        this.radioModel = data;
      },
      handleChangeCheckExp(data){
        console.log(data);
        this.checkModelOnly = data;
      },
      handleChangeCheckCustomExp(data){
        console.log(data);
        this.checkModelCustom = data;
      },
      handleChangeCheckArrExp(data){
        console.log(data);
        this.checkModel = data;
      },
      handleClick(data){
        console.log(1,data,this.selModel, this.dateTime);
      },
      handleChangeDate(data){
        console.log(2,data);
        this.dateTime = data;
      },
      handleItemClick(data){
        console.log(3,data);
      },
      handleTreeClick(data){
        console.log(5,data);
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        setTimeout(() => {
          this.visible = false;
          this.dialogLoading = false;
        },2000)
      },
      handleCancelChange(data) {
        this.visible = false;
      },
      closeDialog(data){
        console.log(333);
        this.dialogLoading = false;
      },
      changeDialog(){
        this.visible = true;
      },
      getSelect(){
        setTimeout(() => {
          this.options = [];
          for (let i = 0; i < 10; i++){
            if (i % 2 == 0){
              this.options.push({
                value: ""+i,
                label: '项目' + i
              });
            }else {
              this.options.push({
                value: ""+i,
                label: '项目' + i,
                disabled: true
              });
            }
          }
          //this.selModel = "2";
        },100);
      },
      getSelectGroup(){
        setTimeout(() => {
          this.options = [];
          for (let i = 0; i < 2; i++){
            this.options.push({
              label: '分组' + i,
              options: []
            });
            for (let j = 0; j < 2; j++){
              this.options[i].options.push({
                label: '项目' + j,
                value: '' + j
              });
            }
          }
          //this.selModel = "1";
        },100);
      }
    }
  }
</script>

<style scoped>
.container {

}
</style>
