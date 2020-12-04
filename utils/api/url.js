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
  teacher_list: '/proxy/user/employee/page',//教师列表

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

  college_list: '/proxy/school/hierarchical/get-college-list-by-campus-id',//学院列表
  college_delete: '/proxy/edu/edu/college/delete',//删除学院
  college_upate: '/proxy/edu/edu/college/edit',//编辑学院
  college_add: '/proxy/edu/edu/college/add',//编辑学院

  major_list: '/proxy/school/hierarchical/get-major-list-by-college-id',//专业列表
  major_add: '/proxy/edu/edu/major/add',//添加专业
  major_edit: '/proxy/edu/edu/major/edit',//编辑专业
  major_delete: '/proxy/edu/edu/major/delete',//删除专业

  class_list: '/proxy/edu/edu/class/page',//班级列表
  class_add: '/proxy/edu/edu/class/add',//添加班级
  class_edit: '/proxy/edu/edu/class/edit',//编辑班级
  class_delete: '/proxy/edu/edu/class/delete',//删除班级

  build_list: '/proxy/school/hierarchical/get-building-list-by-campus-id-and-type',//建筑楼、宿舍楼列表
  build_add: '/proxy/building/building/add',//添加建筑楼
  build_update: '/proxy/building/building/update',//编辑建筑楼
  build_delete: '/proxy/building/building/delete',//删除建筑楼

  classroom_page: '/proxy/building/classroom/page',//教室列表--分页
  classroom_add: '/proxy/building/classroom/add',//教室添加
  classroom_edit: '/proxy/building/classroom/update',//教室编辑
  classroom_delete: '/proxy/building/classroom/delete',//教室删除
  classroom_list: '/proxy/school/hierarchical/get-room-list-by-floor-num',//教室列表--树形无分页

  dormroom_page: '/proxy/building/dormitory/page',//宿舍列表--分页
  dormroom_add: '/proxy/building/dormitory/add',//宿舍添加
  dormroom_update: '/proxy/building/dormitory/update',//宿舍编辑
  dormroom_delete: '/proxy/building/dormitory/delete',//宿舍删除

  teacher_edit: '/proxy/user/employee/edit',//教师编辑
  teacher_add: '/proxy/user/employee/add',//教师添加
  teacher_delete: '/proxy/user/employee/del',//教师删除
  teacher_upload: '/proxy/user/employee/import2',//教师导入
  teacher_file: '/proxy/user/file/download',//教师导入文件模版
  upload_loop_result: '/proxy/user/import/loop/messages',//导入信息返回

  student_list: '/proxy/user/student/page',//学生列表
  student_edit: '/proxy/user/student/update',//学生编辑
  student_add: '/proxy/user/student/add',//学生添加
  student_delete: '/proxy/user/student/del',//学生删除
  student_upload: '/proxy/user/student/import2',//学生导入
  student_file: '/proxy/user/file/download',//学生导入文件模版

  log_list: '/proxy/log/log/page',//日志
  log_type: '/proxy/log/logtype/get/select/list/exclude/login',//日志类型
  log_clear: '/proxy/log/log/clear',//清空日志

  audit_page: '/proxy/user/unionapply/apply/page',//审批列表统一
  audit_download: '/proxy/user/unionapply/apply/download',//审批列表导出

  audit_re_level: '/proxy/user/unionapply/punishment/level/list',//奖惩级别列表
  audit_re_add: '/proxy/user/unionapply/apply/add',//奖惩申请添加
  audit_re_static: '/proxy/user/unionapply/punishment/apply/count',//奖惩统计
  audit_re_static_add: '/proxy/user/unionapply/punishment/level/add',//奖惩级别添加
  audit_re_static_del: '/proxy/user/unionapply/punishment/level/del',//奖惩级别删除

  audit_credit_type_page: '/proxy/user/quality/type/page',//学分项目列表
  audit_credit_type_fliter: '/proxy/user/quality/type/name',//学分项目筛选
  audit_credit_type_fliter_add: '/proxy/user/quality/type/save',//学分项目添加
  audit_credit_type_fliter_del: '/proxy/user/quality/type/del',//学分项目删除

  audit_credit_score_fliter_page: '/proxy/user/quality/standard/page',//学分分值列表
  audit_credit_score_fliter_save: '/proxy/user/quality/standard/save',//学分分值添加
  audit_credit_score_fliter_del: '/proxy/user/quality/standard/del',//学分分值删除

  audit_credit_static_page: '/proxy/user/quality/student/page',//学分分析列表
  audit_credit_export: '/proxy/user/quality/student/export',//学分导出列表
  audit_credit_static_count: '/proxy/user/quality/student/count',//学分分析统计

  leave_query_page: '/proxy/user/student/leave/apply/page',//请假查询分页
  leave_query_level_list: '/proxy/user/student/leave/apply/grade/list',//请假等级列表
  leave_query_type_list: '/proxy/user/student/leave/apply/type/list',//请假类型列表
  leave_query_level_save: '/proxy/user/student/leave/apply/grade/save',//请假等级修改
  leave_query_level_add: '/proxy/user/student/leave/apply/type/add',//请假类型添加/修改
  leave_query_level_del: '/proxy/user/student/leave/apply/type/del',//请假类型删除
};
