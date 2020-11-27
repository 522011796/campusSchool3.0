import rules from './rules'
export default {
  data(){
    return {
      rules: {
        classNo: [
          { required: true, message: this.$t("请输入班级编号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatesn1_10Reg, trigger: 'blur' }
        ],
        className: [
          { required: true, message: this.$t("请输入班级名称"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenallOther1_20Reg, trigger: 'blur' }
        ],
        createTime: [
          { required: true, message: this.$t("请选择时间"), trigger: 'blur' }
        ],
        collegeData: [
          { type: 'array', required: true, min: 2, message: this.$t("请选择专业"), trigger: 'change' }
        ],
        buildData: [
          { type: 'array', required: false, min: 3, message: this.$t("请选择教室"), trigger: 'change' }
        ]
      }
    }
  }
}
