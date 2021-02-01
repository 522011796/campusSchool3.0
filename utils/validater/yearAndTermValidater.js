import rules from './rules'
export default {
  data(){
    return {
      rules: {
        name: [
          { required: true, message: this.$t("请输入学年名称"), trigger: 'blur' }
        ],
        startTime: [
          { required: true, message: this.$t("请选择时间"), trigger: 'blur' }
        ],
        endTime: [
          { required: true, message: this.$t("请选择时间"), trigger: 'blur' }
        ]
      },
      rulesTerm: {
        no: [
          { required: true, message: this.$t("请输入学期编码"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatesn1_10Reg, trigger: 'blur' }
        ],
        name: [
          { required: true, message: this.$t("请输入学期名称"), trigger: 'blur' }
        ],
        startTime: [
          { required: true, message: this.$t("请选择时间"), trigger: 'blur' }
        ],
        endTime: [
          { required: true, message: this.$t("请选择时间"), trigger: 'blur' }
        ]
      }
    }
  }
}
