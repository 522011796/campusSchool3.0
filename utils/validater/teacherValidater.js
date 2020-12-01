import rules from './rules'
export default {
  data(){
    return {
      rules: {
        name: [
          { required: true, message: this.$t("请输入姓名"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateRealName1_30Reg, trigger: 'blur' }
        ],
        jobNum: [
          { required: true, message: this.$t("请输入工号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatesn1_10Reg, trigger: 'blur' }
        ],
        sex: [
          { required: true, message: this.$t("请选择性别"), trigger: 'change' }
        ],
        nation: [
          { required: true, message: this.$t("请选择民族"), trigger: 'change' }
        ],
        borthday: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        innerTime: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        workTime: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        idCard: [
          { required: true, message: this.$t("请输入身份证"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateIdCard, trigger: 'blur' }
        ],
        phone: [
          { required: true, message: this.$t("请输入手机号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ],
        email: [
          { required: false, validator: rules.FormValidate.Form().validateEmail, trigger: 'blur' }
        ],
        workEnjoy: [
          { required: true, message: this.$t("请选择状态"), trigger: 'change' }
        ],
        workTitle: [
          { required: true, message: this.$t("请选择等级"), trigger: 'change' }
        ],
        type: [
          { required: true, message: this.$t("请选择类型"), trigger: 'change' }
        ],
        deptData: [
          { type: 'array', required: true, min: 1, message: this.$t("请选择部门"), trigger: 'change' }
        ]
      }
    }
  }
}
