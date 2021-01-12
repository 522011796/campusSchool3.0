import rules from './rules'
export default {
  data(){
    return {
      rules: {
        name: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        ip: [
          { required: true, message: this.$t("请输入IP地址"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate_ip, trigger: 'blur' }
        ]
      }
    }
  }
}
