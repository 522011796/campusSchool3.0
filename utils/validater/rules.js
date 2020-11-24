// 电话
let phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
// 必须为数字
let numberReg = /^\d+$|^\d+[.]?\d+$/;
//邮箱
let emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
//1-20位名称，只能是中英文或符号
let s1_20Reg = /^[^0-9]{1,20}$/;
//1-10位整数
let n1_10Reg = /^([1-9]{1,10})$/;

let FormValidate = (function () {
  function FormValidate() {
  }

  // From表单验证规则  可用于公用的校验部分
  FormValidate.Form = function () {
    return {
      // 电话号码验证
      validatePhone (rule, value, callback) {
        if (!value) {
          return callback(new Error('请输入手机号码'))
        }
        if (!phoneReg.test(value)) {
          callback(new Error('手机格式不正确'))
        } else {
          callback()
        }
      },
      // 1-20位中英文或字符名称验证
      validateS1_20Reg (rule, value, callback) {
        if (value && !s1_20Reg.test(value)) {
          callback(new Error('请输入1-20位中英文或符号'))
        } else {
          callback()
        }
      },
      // 1-10位正整数验证
      validaten1_10Reg (rule, value, callback) {
        if (value && !n1_10Reg.test(value)) {
          callback(new Error('请输入1-10位正整数'))
        } else {
          callback()
        }
      },
    }
  }

  return FormValidate
}())

exports.FormValidate = FormValidate