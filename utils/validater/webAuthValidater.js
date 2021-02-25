import rules from './rules'
export default {
  data(){
    return {
      rules: {
        roleNo: [
          { required: true, message: this.$t("请输入编号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatesn1_10Reg, trigger: 'blur' }
        ],
        roleName: [
          { required: true, message: this.$t("请输入名称"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateS1_20Reg, trigger: 'blur' }
        ]
      }
    }
  }
}
