import rules from './rules'
export default {
  data(){
    return {
      rules: {
        meetingNo: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatesn1_10Reg, trigger: 'blur' }
        ],
        meetingName: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        meetingTitle: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatenall1_20Reg, trigger: 'blur' }
        ],
        beginDate: [
          { required: true, message: this.$t("请选择信息"), trigger: 'blur' }
        ],
        endDate: [
          { required: true, message: this.$t("请选择信息"), trigger: 'blur' }
        ],
        buildData: [
          { required: true, type: 'array', min: 3, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        catererUserId: [
          { required: true, message: this.$t("请选择信息"), trigger: 'blur' }
        ],
        approverUserId: [
          { required: true, message: this.$t("请选择信息"), trigger: 'blur' }
        ],
        partUserIds: [
          { required: true, type: 'array', message: this.$t("请选择信息"), trigger: 'change' }
        ],
        signBefore: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateNumber, trigger: 'blur' }
        ],
        signDeviceSn: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ]
      }
    }
  }
}
