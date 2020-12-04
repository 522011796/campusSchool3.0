import rules from './rules'
export default {
  data(){
    return {
      rules: {
        typeName: [
          { required: true, message: this.$t("请输入类型名称"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ]
      }
    }
  }
}
