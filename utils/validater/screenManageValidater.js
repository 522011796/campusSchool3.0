import rules from './rules'
export default {
  data(){
    return {
      rulesForm: {
        groupName: [
          { required: true, message: this.$t("请输入名称"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ]
      },
      rules: {
        name: [
          { required: true, message: this.$t("请输入名称"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        time: [
          { required: true, message: this.$t("请输入时间"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateRNf2, trigger: 'blur' }
        ]
      }
    }
  }
}
