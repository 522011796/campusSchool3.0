import rules from './rules'
export default {
  data(){
    return {
      rules: {
        ip: [
          { required: true, message: this.$t("请输入IP地址"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate_ip, trigger: 'blur' }
        ],
        sn: [
          { required: true, message: this.$t("请获取序列号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        name: [
          { required: false, validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ]
      }
    }
  }
}
