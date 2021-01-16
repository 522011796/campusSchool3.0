<template>
  <div class="container">
    <!--<img src="~static/img/screen-all-class.png" class="login-bg-class">-->
    <div class="login-block">
      <!--<img src="~static/img/screen-all-class.png" class="login-bg-class">-->
      <div class="login-title">
        <span>
          <img src="" class="login-logo">
        </span>
        <span class="color-sub-grand login-tag-info">
          <label>{{$t("官网")}}</label>
          <label>{{$t("帮助中心")}}</label>
          <label>{{$t("关于我们")}}</label>
        </span>
      </div>

      <div class="login-user-opr">
        <div>
          <span class="login-user-title">{{$t("用户登录")}}</span>
        </div>
        <div class="line-height"></div>
        <div class="margin-top-20">
          <div>
            <div>
              <span class="login-title-label">{{$t("用户名")}}</span>
            </div>
            <div class="margin-top-5">
              <el-input v-model="form.username"></el-input>
            </div>
          </div>
          <div class="margin-top-20">
            <div>
              <span class="login-title-label">{{$t("密码")}}</span>
            </div>
            <div class="margin-top-5">
              <el-input v-model="form.password"></el-input>
            </div>
          </div>
          <div class="margin-top-20">
            <div>
              <el-button type="primary" :loading="dialogLoading" class="login-btn" @click="login">
                {{$t("登录")}}
              </el-button>
            </div>
          </div>
          <div class="margin-top-40">
            <div class="line-height"></div>
            <div class="text-center login-bottom-other margin-top-10">
              <label class="color-muted"><i class="fa fa-user-circle-o"></i>{{$t("账号/手机号")}}</label>
              <label class="color-muted"><i class="fa fa-id-card-o"></i>{{$t("身份证")}}</label>
              <label class="color-muted"><i class="fa fa-credit-card"></i>{{$t("工号")}}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <div class="color-muted text-center">
        <span>xxxxxxxxxxxxxxxxxxx</span>
      </div>
    </div>
  </div>
</template>

<script>
import {common} from "../utils/api/url";
import {MessageSuccess, MessageError, getmd5, MessageWarning} from "../utils/utils";

export default {
  layout: 'defaultFullScreen',
  data(){
    return {
      dialogLoading: false,
      form: {
        username: '',
        password: ''
      }
    }
  },
  created() {

  },
  methods: {
    login(){
      if (this.form.username == "" || this.form.password == ""){
        MessageWarning(this.$t("请输入正确的信息！"));
        return;
      }
      let params = {
        accountType: 0,
        account: this.form.username,
        password: getmd5(this.form.password),
        userType: 2
      };
      params = this.$qs.stringify(params);
      this.dialogLoading = true;
      this.$axios.post(common.login_url, params, {loading: false}).then(res => {
        if (res.data.code == 200){
          this.$router.push("/");
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.dialogLoading = false;
      });
    }
  }
}
</script>

<style scoped>
.container {

}
.login-bg-class{
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
}
.login-block{
  height: 350px;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #00CDFF;
  background-image: linear-gradient(to bottom, #00CDFF , #0089D4);
}
.login-title{
  height: 80px;
  line-height: 80px;
  width: 100%;
  position: relative;
  top:-85px;
  left: 0px;
  padding: 0px 80px;
}
.login-footer{
  height: 80px;
  line-height: 80px;
  width: 100%;
  position: absolute;
  bottom:5%;
  left: 0px;
  z-index: 9;
}
.login-logo{
  width: 200px;
  height: 100%;
  border: 1px solid #dddddd;
}
.login-tag-info{
  position: relative;
  bottom: 10px;
}
.login-tag-info label{
  padding: 0px 10px;
  font-size: 14px;
}
.login-user-opr{
  position: absolute;
  top: -10%;
  right: 8%;
  width: 320px;
  height: 370px;
  background: #FAFAFA;
  padding: 25px 20px;
  box-shadow: 0px 2px 5px rgba(0,0,0,.5);
}
.login-user-title{
  color: #0089D4;
  font-weight: bold;
  font-size: 18px;
}
.login-title-label{
  color: #515151;
}
.login-btn{
  width: 100%;
}
.login-bottom-other label{
  padding: 0px 20px;
}
</style>
