import rules from './rules'
export default {
  data(){
    return {
      rules: {
        appName: [
          { required: true, message: this.$t("请输入应用名称"), trigger: 'blur' }
        ],
        category: [
          { required: true, message: this.$t("请选择类别"), trigger: 'change' }
        ],
        type: [
          { required: true, message: this.$t("请选择类型"), trigger: 'change' }
        ],
        dept: [
          { type: 'array', required: true, min: 1, message: this.$t("请选择部门"), trigger: 'change' }
        ]
      },
      rulesTeacher: {
        name: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        dept: [
          { type: 'array', required: true, min: 1,  message: this.$t("请选择信息"), trigger: 'change' }
        ],
        bankName: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        bankAccountName: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        bankAccount: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate_numberZeroReg, trigger: 'blur' }
        ],
      }
    }
  }
}
