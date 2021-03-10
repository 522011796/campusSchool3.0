import rules from './rules'
export default {
  data(){
    return {
      rulesConf: {
        ipStart: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate_ip, trigger: 'blur' }
        ],
        ipEnd: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate_ip, trigger: 'blur' }
        ],
        gateway: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate_ip, trigger: 'blur' }
        ],
        netmask: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate_ip, trigger: 'blur' }
        ],
        dns1: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { required: false, validator: rules.FormValidate.Form().validate_ip, trigger: 'blur' }
        ],
        dns2: [
          { required: false, validator: rules.FormValidate.Form().validate_ip, trigger: 'blur' }
        ]
      }
    }
  }
}
