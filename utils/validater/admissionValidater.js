import rules from './rules'
export default {
  data(){
    return {
      rules: {
        year: [
          { required: true, message: this.$t("请选择年度"), trigger: 'change' }
        ],
        name: [
          { required: true, message: this.$t("请输入姓名"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateRealName1_30Reg, trigger: 'blur' }
        ],
        adNo: [
          { required: true, message: this.$t("请输入录取号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatesn1_10Reg, trigger: 'blur' }
        ],
        sex: [
          { required: true, message: this.$t("请选择性别"), trigger: 'change' }
        ],
        nation: [
          { required: true, message: this.$t("请选择民族"), trigger: 'change' }
        ],
        idCardNo: [
          { required: true, message: this.$t("请输入身份证"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateIdCard, trigger: 'blur' }
        ],
        phone: [
          { required: true, message: this.$t("请输入手机号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ],
        college: [
          { type: 'array', required: true, min: 2, message: this.$t("请选择专业"), trigger: 'change' }
        ],
        fatherPhone: [
          { required: false, validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ],
        motherPhone: [
          { required: false, validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ],
        email: [
          { required: false, validator: rules.FormValidate.Form().validateEmail, trigger: 'blur' }
        ],
        bzrPhone: [
          { required: false, validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ]
      }
    }
  }
}
