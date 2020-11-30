import rules from './rules'
export default {
  data(){
    return {
      rules: {
        buildData: [
          { type: 'array', required: true, min: 2, message: this.$t("请选择专业"), trigger: 'change' }
        ],
        roomNo: [
          { required: true, min: 1, max: 32, message: this.$t("请输入1-32位教室编号"), trigger: 'blur' }
        ],
        personTotal: [
          { required: true, message: this.$t("请输入容纳人数"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateNumber, trigger: 'blur' }
        ],
        use: [
          { required: true, min: 1, message: this.$t("请选择用途"), trigger: 'change' }
        ]
      }
    }
  }
}
