import rules from './rules'
export default {
  data(){
    return {
      rules: {
        area: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        name: [
          { required: true, message: this.$t("请输入名称"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        weight: [
          { required: true, message: this.$t("请选择信息"), trigger: 'blur' }
        ]
      }
    }
  }
}
