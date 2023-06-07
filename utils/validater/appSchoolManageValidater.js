import rules from './rules'
export default {
  data(){
    return {
      rulesSchool: {
        accountSchoolType: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        accountName: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        bankSchoolName: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        bankSchoolAccount: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate_numberZeroReg, trigger: 'blur' }
        ],
      }
    }
  }
}
