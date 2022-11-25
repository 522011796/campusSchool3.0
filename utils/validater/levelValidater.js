import rules from './rules'
export default {
  data(){
    return {
      rules: {
        name: [
          { required: true, message: this.$t("请输入级别名称"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        type: [
          { required: true, message: this.$t("请选择类型"), trigger: 'change' },
        ]
      },
      rulesRemove: {
        des: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
        ]
      }
    }
  }
}
