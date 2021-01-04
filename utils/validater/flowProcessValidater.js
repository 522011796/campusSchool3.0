import rules from './rules'
export default {
  data(){
    return {
      rules: {
        name: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        conditionDay1: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validaten1_10Reg, trigger: 'blur' }
        ],
        conditionDay2: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validaten1_10Reg, trigger: 'blur' }
        ]
      }
    }
  }
}
