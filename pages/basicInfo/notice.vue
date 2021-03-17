<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">校园通知</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("发布通知")}}</el-button>
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
            prop="sender_name"
            :label="$t('发布人')">
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('通知范围')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <div>
                    <span>{{$t('已读人数')}}</span>
                    <span>{{scope.row.readed_num}}</span>
                  </div>
                  <div>
                    <span>{{$t('通知人数')}}</span>
                    <span>{{scope.row.total_received_num}}</span>
                  </div>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span class="color-grand">{{scope.row.readed_num}}/{{scope.row.total_received_num}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="sender_name"
            :label="$t('回复消息')">

            <template slot-scope="scope">
              <label class="color-grand" @click="detailMsg(scope.row)">{{$t('共')}}{{scope.row.comment_total}}{{$t('条')}}</label>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="department_no"
            :label="$t('发布时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.push_time ? $moment(scope.row.push_time).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.push_time ? $moment(scope.row.push_time).format("YYYY-MM-DD HH:mm:ss") : '--'}}
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
              <i class="fa fa-edit color-grand" @click="editInfo(scope.row)"></i>
              <i class="fa fa-trash color-danger margin-left-5" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <drawer-layout-right @changeDrawer="closeDrawerDialog" :hide-footer="false" :visible="drawerVisible" size="650px" :title="$t('发布新闻')" @right-close="cancelDrawDialog">
      <div slot="content">
        <el-form ref="form" :rules="rules" :model="form" label-width="120px">
          <el-form-item label="标题" prop="title">
            <el-input v-model="form.title" class="width-300"></el-input>
          </el-form-item>
          <el-form-item label="回执消息" prop="title">
            <my-radio :sel-value="form.receipt" :label="false" @change="changeReceipt($event, false)">{{$t("否")}}</my-radio>
            <my-radio :sel-value="form.receipt" :label="true" @change="changeReceipt($event, true)" class="margin-left-10">{{$t("是")}}</my-radio>
          </el-form-item>
          <el-form-item label="缩略图">
            <span v-if="form.thumnbnail && form.thumnbnail != ''" class="pull-left" style="position: relative">
              <i class="fa fa-close" style="position: absolute;top: -6px;right: -5px;" @click="closeImg"></i>
              <img :src="form.thumnbnail" class="news-img"/>
            </span>
            <upload-square class="pull-left margin-left-10 margin-top-5" :limit="9999" :action="uploadFile" max-size="8" :data="{path: 'news'}" accept=".png,.jpg,.jpeg" @success="uploadFileSuccess">
              <el-button size="small" type="primary">{{$t("点击上传")}}</el-button>
            </upload-square>
          </el-form-item>
          <el-form-item label="APP详情预览">
            <el-input v-model="form.titleDesc" class="width-300"></el-input>
          </el-form-item>
          <el-form-item label="通知范围">
            <my-check :sel-value="checkModelTercher" size="small" @change="handleChangeTerCheck">{{$t("教师")}}</my-check>
            <my-check :sel-value="checkModelStudent" size="small" @change="handleChangeStuCheck">{{$t("学生")}}</my-check>
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

    <!--消息中心使用的右侧层-->
    <drawer-layout-right :hide-footer="true" @changeDrawer="closeDrawerDialog" :visible="drawerViewVisible" size="550px" :title="$t('消息详细')" @right-close="cancelDrawDialog">
      <div slot="content">
        <div class="text-center font-size-18" style="font-weight: bold">
          <span>{{noticeContentDetail ? noticeContentDetail.message.title : ''}}</span>
        </div>
        <div class="line-height"></div>
        <div class="ql-editor" v-html="noticeContentDetail ? noticeContentDetail.message.content : ''">
        </div>
        <div class="font-size-12 color-muted padding-lr-10">
          <span>{{$t("全部")}}</span>
          <span>{{noticeContentDetailData.length}}</span>
          <span>{{$t("条评论")}}</span>
        </div>
        <div class="line-height"></div>
        <div class="reply-detail-list margin-top-10">
          <ul>
            <li v-for="(item, index) in noticeContentDetailData" :key="index">
              <div>
                <div v-if="item.type == 2">
                  <i class="fa fa-user-circle font-size-12 margin-right-5"></i>
                  <span class="color-muted font-size-12">{{item.com_real_name}}</span>
                  <span class="color-disabeld font-size-12">{{$t("回复")}}</span>
                  <span class="color-muted font-size-12">{{item.reply_real_name}}</span>

                  <el-popover
                    placement="top"
                    width="300"
                    @hide="hideReplyModal"
                    v-model="item.replyModal">
                    <div>
                      <el-input type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="replyComment">
                      </el-input>
                    </div>
                    <div style="text-align: right; margin-top: 10px" class="margin-top-10">
                      <el-button type="primary" size="mini" :loading="dialogLoading" @click="replyContent(item, index)">{{$t("确定")}}</el-button>
                    </div>
                    <i class="fa fa-commenting-o" slot="reference" v-if="item.com_user_id != loginUserId"></i>
                  </el-popover>
                  <i class="fa fa-trash" @click="deleteReply(item, index)"></i>
                </div>
                <div v-else>
                  <i class="fa fa-user-circle font-size-12 margin-right-5"></i>
                  <span class="color-muted font-size-12">{{item.com_real_name}}</span>
                  <el-popover
                    placement="top"
                    width="300"
                    @hide="hideReplyModal"
                    v-model="item.replyModal">
                    <div>
                      <el-input type="textarea"
                      :rows="2"
                      placeholder="请输入内容"
                      v-model="replyComment">

                      </el-input>
                    </div>
                    <div style="text-align: right; margin-top: 10px" class="margin-top-10">
                      <el-button type="primary" size="mini" :loading="dialogLoading" @click="replyContent(item, index)">{{$t("确定")}}</el-button>
                    </div>
                    <i class="fa fa-commenting-o" slot="reference" v-if="item.com_user_id != loginUserId"></i>
                  </el-popover>
                  <i class="fa fa-trash" @click="deleteReply(item, index)"></i>
                </div>
                <div class="color-muted margin-top-5">
                  {{decodeUTF8Info(item.comment)}}
                </div>
              </div>
              <div class="line-height"></div>
            </li>
          </ul>
        </div>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" content="确认需要删除该信息？" :detail="subTitle" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
    <my-normal-dialog :visible.sync="visibleReplyConfim" :loading="dialogLoading" title="提示" :content="tips" @ok-click="handleOkReplyChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
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
  import {MessageSuccess, MessageError, MessageWarning, decodeUTF8} from "../../utils/utils";
  import newsValidater from "../../utils/validater/newsValidater";
  import MyRadio from "../../components/MyRadio";
  import MyCheck from "../../components/MyCheck";

  export default {
    mixins: [mixins, newsValidater],
    components: {MyRadio, LayoutTb,MyInputButton,MyPagination,DialogNormal,MyNormalDialog,DrawerRight,DrawerLayoutRight,MyCheck},
    data(){
      return {
        modalVisible: false,
        drawerVisible: false,
        replyModal: false,
        replyOtherModal: false,
        visibleConfim: false,
        dialogLoading: false,
        loading: false,
        drawerLoading: false,
        drawerViewVisible: false,
        subTitle: '',
        noticeContentDetail: '',
        noticeContentDetailData: [],
        uploadFile: common.upload_file,
        uploadResult: {},
        uploadProcess: '',
        g_superId: '',
        tableData: [],
        checkModelTercher: false,
        checkModelStudent: false,
        visibleReplyConfim: false,
        replyId: '',
        replyIndex: '',
        tips: '',
        replyComment: '',
        msgRowData: {},
        addStatus: '',
        form: {
          id: '',
          title: '',
          titleDesc: '',
          content: '',
          type: 0,
          thumnbnail: '',
          getter: {},
          receipt: false
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
          type: 0,
          actionType: 1,
          draft: false
        };
        this.$axios.get(common.circular_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initDetail(row){
        let params = {
          msgId: row.id,
          needComment: true
        };
        this.$axios.get(common.detail_circle_search, {params: params}).then(res => {
          if (res.data.data){
            this.noticeContentDetail = res.data.data;
          }
        });
      },
      addInfo(){
        if (this.addStatus == 'edit'){
          this.clearDrawerDialog();
        }
        this.drawerVisible = true;
      },
      editInfo(row){
        this.addStatus = 'edit'
        let checkModelTercher = false;
        let checkModelStudent = false;
        this.checkModelTercher = false;
        this.checkModelStudent = false;
        if (row.getter && Object.keys(row.getter).length != 0){
          if (JSON.parse(row.getter)['teacher']){
            checkModelTercher = true;
            this.checkModelTercher = true;
          }
          if (JSON.parse(row.getter)['student']){
            checkModelStudent = true;
            this.checkModelStudent = true;
          }
        }
        this.form = {
          id: row.id,
          title: row.title,
          titleDesc: row.title_desc,
          content: row.content,
          type: 0,
          thumnbnail: row.title_img,
          getter: row.getter,
          receipt: false
        };
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
        this.clearDrawerDialog();
        this.drawerVisible = false;
      },
      closeDialog(event){
        this.form = {
          id: '',
          title: '',
          titleDesc: '',
          content: '',
          type: 0,
          thumnbnail: '',
          getter: {},
          receipt: false
        };
        this.checkModelTercher = false;
        this.checkModelStudent = false;
        this.dialogLoading = false;
        this.replyId = '';
        this.replyIndex= '';
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      clearDrawerDialog(){
        this.form = {
          id: '',
          title: '',
          titleDesc: '',
          content: '',
          type: 0,
          thumnbnail: '',
          getter: {},
          receipt: false
        };
        this.checkModelTercher = false;
        this.checkModelStudent = false;
        this.replyComment = '';
        this.msgRowData = {};
        this.replyModal = false;
        this.replyOtherModal = false;
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        this.errorTips = "";
        this.addStatus = '';
      },
      closeDrawerDialog(event){
        this.drawerVisible = event;
        this.drawerViewVisible = event;
      },
      handleCloseDrawer(){
        this.form = {
          id: '',
          title: '',
          titleDesc: '',
          content: '',
          type: 0,
          thumnbnail: '',
          getter: {},
          receipt: false
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
        let getter = {};
        this.$refs['form'].validate((valid) => {
          if (valid) {
            let params = {
              title: this.form.title,
              titleDesc: this.form.titleDesc,
              content: this.form.content,
              actionType: 1,
              titleImg: this.form.thumnbnail,
              receipt: this.form.receipt
            };
            //临时用，需求未确定
            if (this.checkModelTercher  == false && this.checkModelStucher  == false){
              MessageWarning(this.$t("请选择通知范围"));
              return;
            }
            if (this.checkModelTercher  == true){
              getter['teacher'] = {type: 2, range: [], sex: null};
            }
            if (this.checkModelStucher  == true){
              getter['student'] = {type: 2, range: [], sex: null};
            }
            params['getter'] = JSON.stringify(getter);
            if (this.form.id != ""){
              params['id'] = this.form.id;
            }
            url = common.circular_add;
            //params = this.$qs.stringify(params);
            this.drawerLoading = true;
            this.$axios.post(url, params, {dataType: 'stringfy'}).then(res => {
              if (res.data.code == 200){
                this.drawerVisible = false;
                this.init();
                this.clearDrawerDialog();
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
          msgId: this.form.id
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.circular_delete, params).then(res => {
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
        this.visibleReplyConfim = false;
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
      jumpPage(data){
        this.page= data;
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
      decodeUTF8Info(val){
        return decodeUTF8(val);
      },
      changeReceipt(event, data){
        this.form.receipt = data;
      },
      handleChangeTerCheck(data){
        this.checkModelTercher = data;
      },
      handleChangeStuCheck(data){
        this.checkModelStucher = data;
      },
      detailMsg(row){
        let url = common.detail_circle_search_reply;
        let params = {
          page: 1,
          num: 999,
          msgId: row.id,
          userId: this.loginUserId
        };
        this.noticeContentDetailData = [];
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['replyModal'] = false;
              res.data.data.list[i]['reply_visible'] = false;
            }
            this.noticeContentDetailData = res.data.data.list;
          }
        });
        this.msgRowData = row;
        this.initDetail(row);
        this.drawerViewVisible = true;
      },
      deleteReply(data,index){
        this.tips = "确认需要删除该回复吗？";
        this.replyId = data.id;
        this.replyIndex= index;
        this.visibleReplyConfim = true;
      },
      handleOkReplyChange(data) {
        this.dialogLoading = true;
        let url = common.reply_delete;
        let params = {
          commentId: this.replyId
        };
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.detailMsg(this.msgRowData);
            //this.noticeContentDetailData.splice(this.replyIndex,1);
            //this.$set(this.noticeContentDetailData[0], 'replyModal', false);
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.visibleReplyConfim = false;
          this.dialogLoading = false;
        });
      },
      replyContent(data, index){
        this.dialogLoading = true;
        let url = common.reply_add;
        let params = {
          comment: this.replyComment,
          msgId: data.msg_id,
          type: 2,
          commentId: data.id,
        };
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.detailMsg(this.msgRowData);
            this.init();
            data.replyModal = false;
            data.replyOtherModal = false;
            this.$set(data, 'replyModal', false);
            this.replyComment = "";
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.dialogLoading = false;
        });
      },
      hideReplyModal(){
        this.replyComment = "";
      },
      testO(item, index){
        setTimeout(()=>{
          this.$set(item, 'replyModal', true);
        },800);
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
  .reply-detail-list ul{
    list-style: none;
  }
  .reply-detail-list ul li{
    padding: 0px 10px;
    font-size: 12px;
  }
</style>
