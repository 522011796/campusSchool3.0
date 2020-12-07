import rules from './rules'
export default {
  data(){
    return {
      rules: {
        typeId: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ]
      }
    }
  }
}
