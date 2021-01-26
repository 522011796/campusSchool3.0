<template>
  <div>
    <div v-if="headImg.photo_status">
      <div v-if="headImg.photo_status == 0">
        <i class="fa fa-refresh color-grand" style="font-size: 15px"></i>
      </div>
      <div v-if="headImg.photo_status != 0">
        <img :src="headImg.photourl" style="width: 30px; height: 30px; border-radius: 30px" @click="handleShowHeadImg(headImg.photourl)"/>
      </div>
    </div>

    <div v-else>
      <img v-if="headImg.path" :src="headImg.path" style="width: 30px; height: 30px; border-radius: 30px" @click="handleShowHeadImg(headImg.path)"/>
      <img v-else :src="headImg" style="width: 30px; height: 30px; border-radius: 30px" @click="handleShowHeadImg(headImg)"/>
    </div>

    <!--大图-->
    <el-dialog
      custom-class="custom-head-black-class"
      :visible.sync="headImgCenterDialogVisible"
      width="340px"
      top="10vh"
      :modal="false"
      :show-close="false">
      <div slot="title">
        <div class="text-right">
          <label class="font-size-12 color-grand" @click="handleLoop">{{$t("旋转")}}</label>
        </div>
      </div>
      <div class="head-img-block head-img-block-tag">
        <img :src="headImgCenterDialogContent" class="head-img-class" :style="headImgStatus">
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'myHeadImg',
    props: {
      headImg: {
        default:function () {
          return {};
        },
        type: Object,
      }
    },
    computed: {

    },
    data() {
      return {
        value: '',
        degNum: 0,
        headImgCenterDialogVisible: false,
        headImgCenterDialogContent: '',
        headImgStatus: {
          transform: 'rotate(0deg)'
        }
      }
    },
    methods: {
      handleShowHeadImg(data){
        this.degNum = 0;
        this.headImgStatus.transform = "rotate(0deg)";
        this.headImgCenterDialogContent = data;
        this.headImgCenterDialogVisible = true
      },
      handleLoop(){
        if (this.degNum > 4){
          this.degNum = 0;
        }else {
          this.degNum++;
        }
        let deg = 90 * this.degNum;
        this.headImgStatus.transform = "rotate("+deg+"deg)";
      }
    }
  }
</script>

<style scoped>
  .head-img-block{
    height: 340px;
    width: 340px;
  }
  .head-img-class{
    height: 100%;
    width: 100%;
  }
</style>
