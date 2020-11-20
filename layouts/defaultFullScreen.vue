<template>
  <div class="moon-container">

  </div>
</template>

<script>
  import mixins from '../utils/mixins';
  import MyPagination from "../components/MyPagination";
  import DrawerLayoutRight from "../components/utils/dialog/DrawerLayoutRight";
  import MyAuditDetail from "../components/utils/auditDetail/MyAuditDetail";
  import AuditButton from "../components/utils/auditDetail/AuditButton";
  import TimeoutButton from "../components/utils/button/TimeoutButton";
  import UploadSquare from "../components/utils/upload/UploadSquare";
  import QuillBlock from "../components/utils/upload/QuillBlock";
  import {auditStatusColor, weekNoText, MessageSuccess, MessageError, MessageWarning} from "../utils/utils";
  import {common} from "../utils/api/url";
  export default {
    name: 'defaultFullScreen',
    mixins: [mixins],
    components: {MyPagination, DrawerLayoutRight,MyAuditDetail,AuditButton,TimeoutButton,UploadSquare},
    data(){
      return {
        activeTabName: 'all',
        leftHeight: {
          'height': '',
          'width': '200px'
        }
      }
    },
    mounted () {

    },
    created() {
      this.hh();
    },
    methods: {
      hh(){
        if (process.browser) {
          this.leftHeight.height = window.innerHeight - 60 + 'px';
        }
      },
      async init() {
        await this.getSessionInfo();
        await this.getCurrentWeekInfo(this.campusId);
        await this.getNoReadNum();
      }
    },
    watch: {
      '$route': function (to, from) {//监听路由变化,为了浏览器点击后退和前进也能切换菜单选中
        this.$nextTick(() => {

        });
      }
    }
  }
</script>

<style scoped>
.moon-top-logo-title{
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  top: 15px;
}
.moon-top-middle-menu-title-icon{
  position: relative;
  top: 18px;
  font-size: 20px;
  color: #FFFFFF;
}
.moon-top-middle-menu-title-icon .item{
  margin-left: 20px;
}
.moon-top-middle-menu-info{
  background: #C0C4CC;
  border: 1px solid #dddddd;
  border-radius: 10px;
  padding: 8px 10px;
  position: relative;
  top: 15px;
  margin-left: 20px;
  font-size: 12px;
  color: #FFFFFF;
}
.moon-top-right-item{
  position: relative;
  color: #FFFFFF;
  font-weight: bold;
}
.moon-top-right-item-eliplse{
  display: inline-block;
  max-width: 55px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  position: relative;
  top: 5px;
}
.moon-top-right-item.top-18{
  top: 18px;
}
.moon-top-right-item.top-6{
  top: 6px;
}
.moon-top-right .item{
  font-size: 20px;
  color: #FFFFFF;
  position: relative;
  top: 6px;
  margin-right: 10px;
  margin-left: 10px;
}
.moon-top-middle-menu-item{
  position: relative;
  top: 2px;
  font-size: 15px;
  color: #FFFFFF;
  margin-left: 20px;
}
.moon-top-middle-menu-item-text{
  position: relative;
  font-size: 15px;
  color: #FFFFFF;
  margin-left: 20px;
  opacity: 1;
  height: 60px;
  line-height: 60px;
  display: inline-block;
}
.moon-top-middle-menu-item-text-active:after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0px;
  left: calc(50% - 20px);
  width: 40px;
  height: 3px;
  background: #409eff;
}
.moon-top-middle-menu-item .item{
  padding: 10px 5px;
  position: relative;
  display: inline-block;
  opacity: 1;
  cursor: default;
}
.moon-left-menu-item{
  background: rgba(217, 236, 255, 0.3);
  padding: 12px 10px 10px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.moon-left-menu-item .title{
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  cursor: default;
}
.moon-left-menu-item .icon{
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  position: relative;
  top: 0px;
  cursor: default;
}
.moon-left-menu-sub-item{

}
.moon-left-menu-sub-item ul{
  padding: 0px 0px;
  color: #FFFFFF;
  margin-top: 5px;
}
.moon-left-menu-sub-item ul li{
  padding: 10px 0px;
  color: #FFFFFF;
  cursor: default;
}
.moon-left-menu-sub-item ul li:hover{
  background: rgba(236, 245, 255, 0.2);
}
.moon-left-menu-sub-item-active{
  background: rgba(236, 245, 255, 0.3);
}
.icon-class-down{
  transform: rotate(0deg);
  transition: all .2s ease-in-out;
}
.icon-class-up{
  transform: rotate(180deg);
  transition: all .2s ease-in-out;
}
.icon-class-left{
  transform: rotate(0deg);
}
.icon-class-right{
  transform: rotate(180deg);
}
.drawer-main{
  margin: 0px 300px;
  position: relative;
}
.drawer-main-menu{
  margin: 0px 0px;
  position: relative;
}
.drawer-title, .drawer-audit-title{
  position: relative;
  display: inline-block;
  height: 45px;
  line-height: 45px;
  padding: 0px 15px;
  opacity: 1;
  cursor: default;
}
.drawer-active:after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: calc(50% - 15px);
  width: 30px;
  height: 3px;
  background: #409eff;
}
.drawer-audit-title:after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: calc(50% - 40px);
  width: 80px;
  height: 3px;
}
.drawer-item{
  background: #FFFFFF;
  padding: 10px 0px;
  border-radius: 5px;
  margin-top: 10px;
}
.drawer-close{
  position: absolute;
  right: 0px;
  top: 10px;
  font-size: 20px;
  color: #999999;
}
.drawer-menu-close{
  position: absolute;
  right: 30px;
  top: 10px;
  font-size: 25px;
  color: #999999;
  z-index: 9999;
}
.moon-left-menu-tag{
  position: absolute;
  top: 0;
  bottom: 0;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  left: 220px;
  transition: all .2s ease-in-out;
  z-index: 99;
}
.moon-left-menu-tag .moon-left-menu-tag-container {
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
}
.moon-left-menu-tag .moon-left-menu-tag_indicator {
  margin-top: -44.5px;
  width: 100%;
  height: 30px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #fff;
  border-radius: 0 4px 4px 0;
  border: 1px solid #e5e5e5;
  border-left-color: transparent;
  opacity: 1;
  transition-property: background-color,opacity;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  color: #dddddd;
  padding-right: 2px;
}
.moon-left-menu-tag_indicator:hover{
  background: rgb(160, 207, 255);
  color: #FFFFFF;
}
.moon-menu-tab{
  border-radius: 2px;
  border: 1px solid #DCDFE6;
  font-size: 12px;
  padding: 5px 10px;
}
.moon-menu-tab:hover{
  color: #FFFFFF;
  background: rgb(160, 207, 255);
  border: 1px solid rgb(160, 207, 255);
}
.moon-right-pop-menu{
  overflow-y: auto;
  position: relative;
  background: rgb(140, 197, 255);
  background-image: linear-gradient(to bottom, rgb(179, 216, 255) , rgb(140, 197, 255));
  padding: 10px 10px;
  position: relative;
}
.drawer-main-menu-left{
  width: 220px;
  position: relative;
  float: left;
  background: rgba(198, 226, 255, 0.9);
}
.drawer-main-menu-right{
  margin-left: 220px;
  position: relative;
  padding:0px 50px;
}
.drawer-main-menu-left-container{
  margin-top: 30px;
  /*background: rgba(140, 197, 255, 0.3);
  margin: 30px 15px;
  padding: 10px 0px;
  border-radius: 5px;*/
}
.drawer-main-menu-left-container-item{
  padding: 10px 0px;
  margin-top: 5px;
  cursor: default;
  position: relative;
  background: rgba(140, 197, 255, 0.6);
  margin: 10px 15px;
  border-radius: 5px;
  color: #ffffff;
}
.drawer-main-menu-right-container{
  margin-top: 40px;
}
.drawer-main-menu-right-container-item{
  float: left;
  margin-right: 50px;
}
.drawer-main-menu-right-container-item-title{
  color: #E6A23C;
  font-weight: bold;
}
.drawer-main-menu-right-container-item-list{
  margin-top: 10px;
}
.drawer-main-menu-right-container-item-list-item{
  padding: 5px 0px;
  cursor: default;
}
.drawer-main-menu-left-container-item-active:after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: calc(50% - 40px);
  width: 80px;
  height: 3px;
  background: #409eff;
}
.moon-top-user-info-container{
  padding: 10px 15px;
}
.moon-top-user-info-item{
  padding:5px 0px;
}
.moon-top-user-info-opr{
  border-top: 1px solid #E4E7ED;
  text-align: center;
  padding: 5px 0px;
  color: #E6A23C;
  cursor: default;
}
.campus-info-container{
  background: #FFFFFF;
  padding: 20px 20px;
  margin: 20px 20px;
  border-radius: 4px;
}
.campus-info-logo-avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.campus-info-logo-avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px dashed #dddddd;
}
.avatar {
  width: 60px;
  height: 60px;
}
.pop-more{
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
}
.pop-more li{
  height: 30px;
  line-height: 30px;
  padding: 5px 10px;
  color: #606266;
  font-size: 14px;
  cursor: default;
}
.pop-more li:hover{
  height: 30px;
  line-height: 30px;
  background: rgb(244, 244, 245);
}
.moon-tips{
  line-height: 10px !important;
  font-size: 12px;
}
.setting-btn{
  position: fixed;
  right: 10px;
  top:50%;
  font-size: 12px;
}
</style>
