import rules from './rules'
export default {
  data(){
    return {
      rules: {
        level: [
          { required: true, message: this.$t("请选择级别"), trigger: 'change' },
        ],
        type: [
          { required: true, message: this.$t("请选择类型"), trigger: 'change' },
        ],
        userId: [
          { required: true, message: this.$t("请选择学生"), trigger: 'change' },
        ]
      }
    }
  }
}
