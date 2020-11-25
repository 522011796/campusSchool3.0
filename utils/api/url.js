/**
 * 公共接口地址
 * @type {{session_url: string}}
 */
export const common = {
  login_url: 'proxy/user/login', //登录

  session_url: '/proxy/user/user/getSess',
  organization_week: '/proxy/edu/edu/term/current/week',//当前学期学周
  noread_num: '/proxy/user/message/notRead/num',//未读消息数
  msg_list: '/proxy//user/message/userMsg/Page',//消息列表
  msgRead_list: '/proxy/user/message/userMsg/Page',//消息列表
  msg_detail: '/proxy/user/message/info',//消息详细，老版本
  msg_detail_center: '/proxy/user/unionapply/apply/info',//统一消息详细，新版本
  msg_readed: '/proxy/user/message/app/msg/read', //设置已读
  msg_handle: '/proxy/user/unionapply/apply/handel',//消息审批操作
  msg_audit_list: '/proxy/user/unionapply/apply/teacher/handle/page',//审批消息列表
  noread_count: '/proxy/user/message/notRead/count',//审批未读消息数
  updatephone_mms: '/proxy/uup/captcha/updPhone/send',//获取修改手机验证码
  updatephone_save: '/proxy/uup/ssoUser/phone',//更新手机
  updatepwd_mms: '/proxy/uup/captcha/send',//获取修改密码验证码
  updatepwd_save: '/proxy/uup/ssoUser/reset/pass',//更新密码
  school_info: '/proxy/school/school/getSchInfo',//学校信息
  update_school_info: '/proxy/school/school/info/update',//更新学校信息

  upload_file: '/proxy/school/multipartFile/upload',//上传文件
  upload_imglist_file: '/proxy/school/school/uploadImg',//上传迎新文件

  organization_url:  '/proxy/school/hierarchical/get-organize-tree',//组织机构列表
  organization_add:  '/proxy/school/school/dept/add',//组织机构添加
  organization_update:  '/proxy/school/school/dept/update',//组织机构编辑
  organization_delete: '/proxy/school/school/dept/delete',//组织机构删除
  organization_file: '/proxy/school/school/organize/download',//组织机构导入文件模版
  organization_upload: '/proxy/school/school/organize/multyImport',//组织机构导入地址

  hierarchical_build: '/proxy/school/hierarchical/get-building-tree',//0教学楼 1宿舍楼
  hierarchical_college: '/proxy/edu/edu/major/year/class/tree',//学院
  hierarchical_dept: '/proxy/school/hierarchical/get-organize-tree',//部门

  year_list: '/proxy/edu/edu/year/page',//学年列表
  term_list: '/proxy/edu/edu/term/page',//学期列表
  add_year: '/proxy/edu/edu/year/add',//添加学年
  update_year: '/proxy/edu/edu/year/update',//修改学年
  delete_year: '/proxy/edu/edu/year/delete',//删除学年
  add_term: '/proxy/edu/edu/term/add',//添加学期
  update_term: '/proxy/edu/edu/term/update',//编辑学期
  delete_term: '/proxy/edu/edu/term/delete',//删除学期
  check_current_year: '/proxy/edu/edu/year/judge',//检查学年是否是当前
  check_current_term: '/proxy/edu/edu/term/judge',//检查学期是否是当前
  set_current_out: '/proxy/edu/edu/year/currentOut',//设置非当前学年
  set_current_in: '/proxy/edu/edu/year/currentIn',//设置当前学年
  set_current_term_out: '/proxy/edu/edu/term/currentOut',//设置非当前学期
  set_current_term_in: '/proxy/edu/edu/term/currentIn',//设置当前学期
  get_term: '/proxy/edu/edu/teach/getSetting',//获取学期详细,
  save_term_info: '/proxy/edu/edu/teach/setting',//保存学期设置
};
