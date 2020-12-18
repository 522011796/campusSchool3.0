import rules from './rules'
export default {
  data(){
    return {
      rules: {
        sn: [
          { required: true, message: this.$t("请输入序列号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        name: [
          { required: false, validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ]
      },
      rulesConf: {
        faceCallBack: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ]
      }
    }
  }
}
