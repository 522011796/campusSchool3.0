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
        order: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        orderMoney: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateRNf2, trigger: 'blur' }
        ],
        dept: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        startTime: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        merchat: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        object: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        havePerson: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ]
      }
    }
  }
}
