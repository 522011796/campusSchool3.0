import rules from './rules'
export default {
  data(){
    return {
      rules: {
        courseNo: [
          { required: true, message: this.$t("请输入编号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatesn1_10Reg, trigger: 'blur' }
        ],
        courseName: [
          { required: true, message: this.$t("请输入名称"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        credit: [
          { required: false, validator: rules.FormValidate.Form().validate0_100Number, trigger: 'blur' }
        ],
        teachType: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        courseProperty: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        examType: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ]
      }
    }
  }
}
