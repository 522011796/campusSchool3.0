<template>
  <div class="container">
    <el-drawer
      custom-class="drawer-normal-drawer"
      :visible.sync="drawer_"
      :direction="direction"
      :wrapperClosable="true"
      :show-close="false"
      :modal-append-to-body="false"
      :size="size">

      <div slot="title" class="drawer-normal-title">
        <el-row v-if="!header">
          <el-col :span="12">
            <div class="drawer-normal-header">
              <span class="title">{{title}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="drawer-normal-close text-right color-disabeld font-size-14">
              <i class="fa fa-close" @click="handleClose"></i>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="drawer-normal-body" :style="hideFooter == false ? drawHeight : ''">
        <div>
          <el-button type="primary" size="small" plain @click="download">
            <i class="fa fa-download"></i>
            {{$t("下载模版")}}
          </el-button>
          <span class="font-size-12 color-muted">({{$t("支持格式xls")}})</span>
        </div>

        <div class="margin-top-10">
          <div class="padding-tb-5 color-muted">
            <span>{{$t("文件上传")}}</span>
          </div>
          <div>
            <el-upload
              class="custom-upload"
              drag
              :action="action">

              <i class="el-icon-upload"></i>
              <div class="el-upload__text">{{$t("将文件拖到此处，或")}}<em>{{$t("点击上传")}}</em></div>
            </el-upload>
          </div>

          <div class="padding-tb-5 color-muted">
            <span>{{$t("上传结果")}}</span>
          </div>

          <div>
            <el-timeline>
              <el-timeline-item>
                <div class="color-muted font-size-12">
                  <span>{{$t("上传进度")}}</span>
                </div>
                <div class="color-disabeld font-size-12 margin-top-5">
                  <span>{{$t("文件未上传")}}</span>
                </div>
              </el-timeline-item>

              <el-timeline-item>
                <div class="color-muted font-size-12">
                  <span>{{$t("上传结果")}}</span>
                </div>
                <div class="color-disabeld font-size-12 margin-top-5">
                  <span>{{$t("暂无数据")}}</span>
                </div>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </div>

      <div class="drawer-normal-footer" v-if="hideFooter == false" :hide-footer="hideFooter">
        <el-button size="small" @click="handleCancel">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="loading == false ? handleOk() : ''">
          <i class="el-icon-loading" v-if="loading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import mixins from "../../../utils/mixins";
import {oneOf} from "../../../utils/utils";
export default {
  mixins: [mixins],
  props: {
    title: {
      default: '信息',
      type: String
    },
    visible: {
      default: false,
      type: Boolean
    },
    direction: {
      default: 'rtl',
      type: String
    },
    hideFooter: {
      default: false,
      type: Boolean
    },
    loading: {
      default: false,
      type: Boolean
    },
    size: {
      defalult: '30%',
      type: String
    },
    action: {
      default: '',
      type: String
    },
    downloadFile: {
      default: '',
      type: String
    }
  },
  computed: {
    drawer_:{
      get(){
        return this.visible
      },
      set(v){
        this.$emit("changeDrawer",v)
      }
    }
  },
  data(){
    return {
      drawer: false,
      dialogNormalVisible: false,
      footer: false,
      header: false,
      drawerLoading: false
    }
  },
  mounted() {
    this.dialogNormalVisible = this.visible;
    this.footer = this.$slots.footer !== undefined;
    this.header = this.$slots.title !== undefined;
  },
  created() {

  },
  methods: {
    handleClose(data){
      if (this.footer){
        this.$emit("right-close", data);
      }else {
        this.handleCancel();
      }
    },
    handleOk(data){
      this.$emit("ok", data);
    },
    handleCancel(data){
      this.$emit("cancel", data);
    },
    download(event){
      console.log(this.downloadFile);
      //window.open(this.downloadFile);
    }
  }
}
</script>

<style scoped>
.container {

}
</style>
