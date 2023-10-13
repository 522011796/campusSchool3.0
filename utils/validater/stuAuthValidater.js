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
        ],
        whiteMobileList: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        timeAuthRange: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        timeStopPhoneOwner: [
          { required: true, type: 'array', min: 1,message: this.$t("请选择信息"), trigger: 'change' }
        ],
        timeStopRange: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ]
      }
    }
  }
}
