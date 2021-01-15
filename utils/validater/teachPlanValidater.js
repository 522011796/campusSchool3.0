import rules from './rules'
export default {
  data(){
    return {
      rules: {
        courseName: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' },
        ],
        buildData: [
          { required: true, type: 'array', min: 3, message: this.$t("请选择教室"), trigger: 'change' }
        ],
        teacherId: [
          { required: true, message: this.$t("请选择信息"), trigger: 'blur' },
        ]
      }
    }
  }
}
