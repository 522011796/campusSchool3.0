import rules from './rules'
export default {
  data(){
    return {
      rules: {
        title: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        content: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ]
      }
    }
  }
}
