import rules from './rules'
export default {
  data(){
    return {
      rules: {
        type: [
          { required: true, message: this.$t("请选择类型"), trigger: 'change' },
        ],
        socreName: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        socreNameSub: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        qualityScore: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateNf2, trigger: 'blur' }
        ],
        qualityMnfScore: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateMnf2, trigger: 'blur' }
        ]
      }
    }
  }
}
