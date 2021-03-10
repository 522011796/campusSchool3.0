import rules from './rules'
export default {
  data(){
    return {
      rulesPhone: {
        phoneCode: [
          { required: true, message: this.$t("请输入验证码"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateNumber, trigger: 'blur' }
        ],
        oldPhone: [
          { required: true, message: this.$t("请输入手机号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ],
        newPhone: [
          { required: true, message: this.$t("请输入手机号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ]
      },
      rulesPwd: {
        phoneCode: [
          { required: true, message: this.$t("请输入验证码"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateNumber, trigger: 'blur' }
        ],
        phone: [
          { required: true, message: this.$t("请输入手机号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: this.$t("请输入密码"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().all1_20Reg, trigger: 'blur' }
        ]
      }
    }
  }
}
