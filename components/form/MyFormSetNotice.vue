<template>
  <div>
    <div class="padding-lr-10 padding-tb-10">
      <el-button size="mini" type="primary"  icon="el-icon-plus" @click="addRole">
        {{$t("创建消息")}}
      </el-button>
    </div>
    <el-table
      ref="refTable"
      :data="data"
      header-cell-class-name="custom-table-cell-bg"
      size="medium"
      :max-height="tableHeight15.height"
      style="width: 100%">
      <el-table-column
        align="center"
        :label="$t('创建日期')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
            <div class="text-center">{{ $moment(scope.row.create_time).format("YYYY-MM-DD HH:mm") }}</div>
            <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{ $moment(scope.row.create_time).format("YYYY-MM-DD HH:mm") }}
            </span>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        :label="$t('触发条件')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
            <div class="text-center">{{ scope.row.des }}</div>
            <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              <el-tag size="mini" v-if="scope.row.notice_condition1">{{$t("提交")}}</el-tag>
              <el-tag size="mini" v-if="scope.row.notice_condition2">{{$t("通过")}}</el-tag>
              <el-tag size="mini" v-if="scope.row.notice_condition3">{{$t("驳回")}}</el-tag>
            </span>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        :label="$t('推送人数')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
            <div class="text-center">
              <span v-if="scope.row.notice_user_id != ''">{{scope.row.notice_user_id.split(",").length}}</span>
            </div>
            <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              <span v-if="scope.row.notice_user_id != ''">{{scope.row.notice_user_id.split(",").length}}</span>
            </span>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        width="120"
        :label="$t('操作')">
        <template slot-scope="scope">
          <i class="fa fa-edit color-success margin-right-5" @click="editForm($event, scope.row)"></i>
          <i class="fa fa-trash color-danger" @click="deleteForm($event, scope.row)"></i>
        </template>
      </el-table-column>
    </el-table>

    <drawer-layout-right tabindex="1" :append-to-body="true" @close="closeDialog"  @changeDrawer="closeDialog" :visible="drawerRole" size="500px">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <span class="tab-class font-bold">
            <i class="fa fa-file"></i>
            {{$t('创建推送')}}
          </span>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("触发条件")}}</label>
          </span>
        </div>
        <div class="block-item-bg">
          <div>
            <span>{{$t('表单')}}: </span>
            <label class="color-muted font-size-12">{{$t('当前表单')}}</label>
          </div>
          <div class="margin-top-10">
            <span>{{$t('条件')}}: </span>
            <span>
              <el-checkbox v-model="form.noticeCondition1"><span class="color-muted font-size-12">{{$t("提交")}}</span></el-checkbox>
              <el-checkbox v-model="form.noticeCondition2"><span class="color-muted font-size-12">{{$t("通过")}}</span></el-checkbox>
              <el-checkbox v-model="form.noticeCondition3"><span class="color-muted font-size-12">{{$t("驳回")}}</span></el-checkbox>
            </span>
          </div>
        </div>
        <div class="margin-top-20">
          <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("推送人")}}</label>
          </span>
          </div>
          <div class="block-item-bg font-size-12" style="position: relative">
            <div>
              <span class="color-muted">{{$t("选择范围")}}: </span>
              <span>
                <el-popover
                  popper-class="custom-popper-class-form"
                  placement="left"
                  width="700"
                  trigger="click"
                  @show="handleShowTeacher(1)">
                  <div>
                    <teacher-tree-and-list-no-page ref="popverTeacherRef" user-type="user" :group-id="form.id" :sel-arr="form.noticeUserIdArr" set-type="check" @select="handleSelUser($event, 1)"></teacher-tree-and-list-no-page>
                  </div>
                  <el-button slot="reference" type="success" plain size="small" @click="loadingShow(1)">
                    <i v-if="refreshTeacherStatus == true" class="fa fa-refresh fa-spin"></i>
                    {{$t("选择")}}
                    <span class="color-muted">({{$t("人数")}}: {{approverUsers.length}})</span>
                  </el-button>
                </el-popover>
              </span>
            </div>
          </div>
        </div>
        <div class="margin-top-20">
          <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("内容设置")}}</label>
          </span>
          </div>
          <div class="block-item-bg font-size-12" style="position: relative">
            <div>
              <div class="font-size-12">
                <div class="color-muted">{{$t("消息标题")}}</div>
                <div class="margin-top-5">
                  <el-input v-model="form.noticeTitle"></el-input>
                </div>
              </div>
              <div class="font-size-12 margin-top-20">
                <div class="color-muted">{{$t("消息内容")}}</div>
                <div class="margin-top-5">
                  <el-input v-model="form.noticeContent" type="textarea" :rows="10"></el-input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer">
        <el-row>
          <el-col :span="24">
            <div class="text-right padding-lr-10">
              <el-button size="mini" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
              <el-button size="mini" type="success" :loading="btnLoading" @click="okFormDrawDialog">{{$t("保存")}}</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";
  import appFormSetValidater from "~/utils/validater/appFormSetValidater";
  import {common} from "~/utils/api/url";
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import MyEnable from "~/components/utils/status/MyEnable";

  export default {
    name: 'myFormSetNotice',
    components: {MyEnable, DrawerLayoutRight},
    mixins: [mixins,appFormSetValidater],
    props: {
      data: {
        type: Array,
        default: function () {
          return [];
        },
      },
      formId: Object
    },
    computed: {

    },
    data() {
      return {
        drawerRole: false,
        subTitle: '',
        btnLoading: false,
        refreshTeacherStatus: false,
        refreshStudentStatus: false,
        approverUsers: [],
        form: {
          id: '',
          formId: '',
          noticeCondition1: false,
          noticeCondition2: false,
          noticeCondition3: false,
          noticeUserId: '',
          noticeUserIdArr: [],
          noticeTitle: '',
          noticeContent: ''
        }
      }
    },
    methods: {
      addRole(){
        this.drawerRole = true;
      },
      changeFormType(data){
        this.form.roleType = data;
      },
      changeFormOprLook(data){
        this.form.roleOprLook = data;
      },
      changeFormOprDel(data){
        this.form.roleOprDel = data;
      },
      changeFormOprSubmit(data){
        this.form.roleOprSubmit = data;
      },
      changeFormTeacher(data){
        this.form.roleTeachers = data;
      },
      changeFormStudent(data){
        this.form.roleStudents = data;
      },
      closeDialog(){
        this.form = {
          id: '',
          formId: '',
          noticeCondition1: false,
          noticeCondition2: false,
          noticeCondition3: false,
          noticeUserId: '',
          noticeUserIdArr: [],
          noticeTitle: '',
          noticeContent: ''
        };
        this.subTitle = "";
        this.approverUsers = [];
        this.drawerRole = false;
      },
      cancelDrawDialog(){
        this.drawerRole = false;
      },
      okFormDrawDialog(){
        let url = '';

        if (!this.form.noticeCondition1 && !this.form.noticeCondition1 && !this.form.noticeCondition1){
          MessageWarning(this.$t("请设置触发条件"));
          return;
        }else if (this.form.noticeTitle == "" && this.form.noticeContent == ""){
          MessageWarning(this.$t("请设置内容信息"));
          return;
        }else if (this.form.noticeUserIdArr.length == 0){
          MessageWarning(this.$t("请设置推送人"));
          return;
        }
        let params = {
          formId: this.formId.id,
          noticeCondition1: this.form.noticeCondition1,
          noticeCondition2: this.form.noticeCondition2,
          noticeCondition3: this.form.noticeCondition3,
          noticeTitle: this.form.noticeTitle,
          noticeContent: this.form.noticeContent
        };

        let contentArray = [];
        for (let i = 0 ; i < this.form.noticeUserIdArr.length; i++){
          contentArray.push(this.form.noticeUserIdArr[i].user_id);
        }
        params['noticeUserId'] = contentArray.join();
        if (this.form.id != ""){
          params['id'] = this.form.id;
        }
        url = common.server_form_template_notice_save;
        params = this.$qs.stringify(params);
        this.btnLoading = true;
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200) {
            this.drawerRole = false;
            this.initParent();
            MessageSuccess(res.data.desc);
          } else {
            MessageError(res.data.desc);
          }
          this.btnLoading = false;
        });
      },
      initParent(){
        this.$emit('init');
      },
      editForm($event, data){
        this.form = {
          id: data.id,
          formId: '',
          noticeCondition1: data.notice_condition1,
          noticeCondition2: data.notice_condition2,
          noticeCondition3: data.notice_condition3,
          noticeTitle: data.notice_title,
          noticeContent: data.notice_content
        };

        let permissionUserIds = [];
        if (data.notice_user_id != ""){
          let tempIds = JSON.parse(data.notice_user_id);
          for (let i = 0; i < tempIds.length; i++){
            permissionUserIds.push({
              user_id: tempIds[i]
            });
          }
          this.form.noticeUserIdArr = permissionUserIds;
          this.approverUsers = permissionUserIds;
        }
        this.drawerRole = true;
      },
      deleteForm($event, data){
        let params = {
          id: data.id
        };
        params = this.$qs.stringify(params);
        this.btnLoading = true;
        this.$axios.post(common.server_form_template_notice_del, params).then(res => {
          if (res.data.code == 200) {
            this.drawerRole = false;
            this.initParent();
            MessageSuccess(res.data.desc);
          } else {
            MessageError(res.data.desc);
          }
          this.btnLoading = false;
        });
      },
      copyForm($event, data){

      },
      enableForm($event, data, type){
        let params = {
          id: data.id,
          enable: type
        };
        params = this.$qs.stringify(params);
        this.btnLoading = true;
        this.$axios.post(common.server_form_template_permission_enable, params).then(res => {
          if (res.data.code == 200) {
            this.drawerRole = false;
            this.initParent();
            MessageSuccess(res.data.desc);
          } else {
            MessageError(res.data.desc);
          }
          this.btnLoading = false;
        });
      },
      loadingShow(type){
        let timer = null;
        clearTimeout(timer);
        switch (type) {
          case 1:
            this.refreshTeacherStatus = true;
            timer = setTimeout(() => {
              this.refreshTeacherStatus = false;
              clearTimeout(timer);
            },1000);
            break;
          case 2:
            this.refreshStudentStatus = true;
            timer = setTimeout(() => {
              this.refreshStudentStatus = false;
              clearTimeout(timer);
            },1000);
            break;
        }
      },
      handleShowTeacher(type){
        setTimeout(()=>{
          if (type == 1){
            this.$refs.popverTeacherRef._handleOpen();
          }
        },800);
      },
      handleSelUser(data, type){
        this.$set(this.form, 'noticeUserIdArr', data);
        this.approverUsers = data;
      }
    }
  }
</script>

<style scoped>
.form-set-main{
  box-shadow: 0px 0px 4px #DCDFE6;
  border-right: 1px solid #DCDFE6;
  padding: 0px;
}
.form-set-left{
  width: 200px;
  height: 100%;
  background: #f8f8f8;
  border-right: 1px solid #DCDFE6;
}
.form-set-right{
  margin-left: 200px;
  height: 100%;
}
.form-set-menu-item{
  font-size: 12px;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.form-set-menu-item-active{
  background: #3E8DB8;
  color: #FFFFFF;
}
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
