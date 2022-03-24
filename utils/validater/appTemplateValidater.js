import rules from './rules'
export default {
  data(){
    return {
      rules: {
        name: [
          { required: true, message: this.$t("请输入名称"), trigger: 'blur' }
        ],
        category: [
          { required: true, message: this.$t("请选择类别"), trigger: 'change' }
        ],
        type: [
          { required: true, message: this.$t("请选择时间"), trigger: 'change' }
        ],
        dept: [
          { type: 'array', required: true, min: 1, message: this.$t("请选择部门"), trigger: 'change' }
        ]
      }
    }
  }
}
