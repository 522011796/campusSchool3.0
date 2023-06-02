import rules from './rules'
export default {
  data(){
    return {
      rules: {
        name: [
          { required: true, message: this.$t("请输入名称"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateS1_20Reg, trigger: 'blur' }
        ],
        no: [
          { required: true, message: this.$t("请输入编号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validaten1_10Reg, trigger: 'blur' }
        ]
      }
    }
  }
}
