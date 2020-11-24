<template>
  <div class="container">
    <div>
      <el-input class="width-260" v-model="form.username"></el-input>
    </div>
    <div class="margin-top-10">
      <el-input class="width-260" v-model="form.password"></el-input>
    </div>
    <div class="margin-top-10">
      <el-button @click="login">{{$t("登录")}}</el-button>
    </div>
  </div>
</template>

<script>
import {common} from "../utils/api/url";
import {MessageSuccess, MessageError, getmd5} from "../utils/utils";

export default {
  layout: 'defaultFullScreen',
  data(){
    return {
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
      let params = {
        accountType: 0,
        account: this.form.username,
        password: getmd5(this.form.password),
        userType: 2
      };
      params = this.$qs.stringify(params);
      this.$axios.post(common.login_url, params).then(res => {
        console.log(res.data.code);
        if (res.data.code == 200){
          this.$router.push("/");
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
      });
    }
  }
}
</script>

<style scoped>
.container {

}
</style>
