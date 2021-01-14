import rules from './rules'
export default {
  data(){
    return {
      rules: {
        credit: [
          { required: false, validator: rules.FormValidate.Form().validate0_999Number, trigger: 'blur' }
        ],
        majorName: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        courseName: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
      }
    }
  }
}
