import rules from './rules'
export default {
  data(){
    return {
      rules: {
        leaveRate: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate0_100Number, trigger: 'blur' }
        ],
        unSignRate: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate0_100Number, trigger: 'blur' }
        ],
        acturalRate: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate0_100Number, trigger: 'blur' }
        ],
        punishRate: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate0_100Number, trigger: 'blur' }
        ],
        homeworkRate: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate0_100Number, trigger: 'blur' }
        ],
        classRate: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate0_100Number, trigger: 'blur' }
        ],
      },
      confRules: {
        name: [
          { required: true, message: this.$t("请输入名称"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        min1: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate0_100FloatNumber, trigger: 'blur' }
        ],
        min2: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate0_100FloatNumber, trigger: 'blur' }
        ],
      }
    }
  }
}
