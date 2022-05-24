import rules from './rules'
export default {
  data(){
    return {
      rules: {
        name: [
          { required: true, message: this.$t("请输入名称"), trigger: 'blur' }
        ],
        app: [
          { required: true, message: this.$t("请选择应用"), trigger: 'change' }
        ],
        type: [
          { required: true, message: this.$t("请选择类型"), trigger: 'change' }
        ]
      }
    }
  }
}
