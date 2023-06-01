import rules from './rules'
export default {
  data(){
    return {
      rules: {
        name: [
          { required: true, message: this.$t("请输入名称"), trigger: 'blur' }
        ],
        no: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        type: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        status: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        budget: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        startTime: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        endTime: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        parentObj: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        user: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        dept: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ]
      }
    }
  }
}
