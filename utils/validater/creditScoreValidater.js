import rules from './rules'
export default {
  data(){
    return {
      rules: {
        classData: [
          { required: true, type: 'array', message: this.$t("请选择年级"), trigger: 'change' },
        ],
        score: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateNf2, trigger: 'blur' }
        ]
      }
    }
  }
}
