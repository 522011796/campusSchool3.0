import rules from './rules'
export default {
  data(){
    return {
      rulesConf: {
        ruleHour1: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateRNf1, trigger: 'blur' }
        ]
      }
    }
  }
}
