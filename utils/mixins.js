import global from "~/utils/global";
export default {
  data (){
    return {
      value: '',
      testDefault: '',
      //公共属性
      total: global.total,
      page: global.page,
      num: global.num
    }
  },
  created() {

  },
  methods: {
    test() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.testDefault = 1111;
          resolve(this.testDefault);
        }, 3000)
      })
    },
    /**
     * 获取session
     * 采用同步执行，为了在需要使用的时候，可以先执行完成后再执行下一步操作
     * @returns {Promise<void>}
     */
    async getSessionInfo(){
      let params = {
        keys:'campusId,userType,campusType,userId,username,campusName,campusLogo,realName,externalSystemName,externalSystem,termId,externalSystemName,externalSystem'
      };
      await this.$axios.get('/proxy/user/user/getSess', {params: params}).then(res => {
        console.log(1);
        this.testDefault = 1234;
      });
    }
  }
}
