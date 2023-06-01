import rules from './rules'
export default {
  data(){
    return {
      rules: {
        name: [
          { required: true, message: this.$t("请输入名称"), trigger: 'blur' }
        ],
        order: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ]
      }
    }
  }
}
