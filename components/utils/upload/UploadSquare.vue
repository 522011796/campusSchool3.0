<template>
  <div>
    <el-upload
      ref="uploadRef"
      class="avatar-uploader"
      :action="action"
      :accept="accept"
      :data="data"
      :auto-upload="true"
      :show-file-list="false"
      :limit="limit"
      :multiple = "multiple"
      :on-success="handleAvatarSuccess"
      :on-error="handleAvatarError"
      :before-upload="beforeAvatarUpload">

      <slot></slot>
    </el-upload>
  </div>
</template>

<script>
  import {MessageWarning} from "../../../utils/utils";

  export default {
    name: 'uploadSquare',
    props: {
      selValue: {
        default: '',
        type: String
      },
      action: {
        default: '',
        type: String
      },
      accept: {
        default: '',
        type: String
      },
      multiple: {
        default: false,
        type: Boolean
      },
      data: {
        default: function () {
          return {};
        },
        type: Object
      },
      maxSize: {
        default: 2,
        type: [Number,String]
      },
      limit: {
        default: 1,
        type: Number
      }
    },
    computed: {
      selectModel(){
        this.value = this.selValue;
      }
    },
    data() {
      return {
        value: ''
      }
    },
    methods: {
      handleAvatarSuccess(res, file, index){
        if (this.multiple == false) {
          this.$refs.uploadRef.clearFiles();
        }else if (this.multiple == true) {
          this.$refs.uploadRef.clearFiles();
        }
        this.$emit('success', res, file, index);
      },
      handleAvatarError(res, file){
        if (this.multiple == false) {
          this.$refs.uploadRef.clearFiles();
        }
        this.$emit('error', res, file);
      },
      beforeAvatarUpload(file){
        const isLt2M = file.size / 1024 / 1024 > this.maxSize;

        if (isLt2M) {
          MessageWarning('图片大小不能超过' + this.maxSize + "MB");
          return false;
        }
        return !isLt2M;
      }
    }
  }
</script>

<style scoped>

</style>
