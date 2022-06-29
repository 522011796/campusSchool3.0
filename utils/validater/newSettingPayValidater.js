import rules from './rules'
export default {
  data(){
    return {
      rulesPay: {
        url: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
        ]
      }
    }
  }
}
