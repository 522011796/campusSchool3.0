import rules from './rules'
export default {
  data(){
    return {
      rules: {
        name: [
          { required: true, message: this.$t("请输入组织名称"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateS1_20Reg, trigger: 'blur' }
        ],
        no: [
          { required: true, message: this.$t("请输入组织编号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validaten1_10Reg, trigger: 'blur' }
        ],
        realName: [
          { required: true, message: this.$t("请输入组织简称"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateS1_20Reg, trigger: 'blur' }
        ]
      }
    }
  }
}
