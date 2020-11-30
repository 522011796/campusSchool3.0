import rules from './rules'
export default {
  data(){
    return {
      rules: {
        no: [
          { required: true, message: this.$t("请输入建筑楼编号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatesn1_10Reg, trigger: 'blur' }
        ],
        name: [
          { required: true, message: this.$t("请输入建筑楼名称"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        floorTotal: [
          { required: true, message: this.$t("请输入总楼层"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateNumber, trigger: 'blur' }
        ],
        startFloor: [
          { required: true, message: this.$t("请输入起始楼层"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateNumber, trigger: 'blur' }
        ],
        phone: [
          { required: false, validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ]
      }
    }
  }
}
