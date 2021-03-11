import rules from './rules'
export default {
  data(){
    return {
      rulesCredit: {
        type: [
          { required: true, message: this.$t("请选择类型"), trigger: 'change' },
        ],
        object1: [
          { required: true, message: this.$t("请选择一级项目"), trigger: 'change' },
        ],
        object2: [
          { required: true, message: this.$t("请选择二级项目"), trigger: 'change' },
        ]
      },
      rulesRp: {
        level: [
          { required: true, message: this.$t("请选择级别"), trigger: 'change' },
        ],
        type: [
          { required: true, message: this.$t("请选择类型"), trigger: 'change' },
        ],
        userId: [
          { required: true, message: this.$t("请选择学生"), trigger: 'change' },
        ]
      },
      rulesParent: {
        phone: [
          { required: true, message: this.$t("请输入手机号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ]
      }
    }
  }
}
