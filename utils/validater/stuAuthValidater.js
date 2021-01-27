import rules from './rules'
export default {
  data(){
    return {
      rules: {
        phone: [
          { required: true, message: this.$t("请输入手机号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ]
      },
      rulesAuth: {
        content: [
          { required: true, message: this.$t("请输入提示信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenallOther1_20Reg, trigger: 'blur' }
        ]
      }
    }
  }
}
