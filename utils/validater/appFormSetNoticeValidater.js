import rules from './rules'
export default {
  data(){
    return {
      rules: {
        noticeTitle: [
          { required: true, message: this.$t("请输入内容"), trigger: 'blur' }
        ],
        noticeContent: [
          { required: true, message: this.$t("请输入内容"), trigger: 'blur' }
        ]
      }
    }
  }
}
