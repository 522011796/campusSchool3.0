import rules from './rules'
export default {
  data(){
    return {
      rules: {
        collegeId: [
          { required: true, message: this.$t("请输选择学院"), trigger: 'change'}
        ],
        majorName: [
          { required: true, message: this.$t("请输入专业名称"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        majorNo: [
          { required: true, message: this.$t("请输入专业编号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatesn1_10Reg, trigger: 'blur' }
        ]
      }
    }
  }
}
