import rules from './rules'
export default {
  data(){
    return {
      rulesMerchat: {
        accountType: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        company: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        taxNo: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        address: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        contact: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        phone: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ],
        bankMerName: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        bankMerAccount: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate_numberZeroReg, trigger: 'blur' }
        ],
      }
    }
  }
}
