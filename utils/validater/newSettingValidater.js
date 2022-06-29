import rules from './rules'
export default {
  data(){
    return {
      rules: {
        name: [
          { required: true, message: this.$t("请输入名称"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        year: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        type: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        time: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        url: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ]
      }
    }
  }
}
