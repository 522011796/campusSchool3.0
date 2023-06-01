const total = 0;
const page = 1;
const num = 20;
const collegeId = "";
const collegeName = "";
const majorId = "";
const majorName = "";
const classId = "";
const className = "";
const gradeId = "";
const dataCollegeList= [];
const dataSchoolBuildList = [];
const dataDormBuildList = [];
const dataRoleTreeList = [];
const dataDeptList = [];
const dataAppletList = [];
const currentYearList = [];
const currentTermList = [];
const currentWeekList = [];
const currentSeciton = 20;
const currentYear = "";
const currentMonth = "";
const currentDay = "";
const currentYearId = "";
const currentTermId = "";
const currentWeekNum = "";
const loginUserName = "";
const loginUserType = "";
const loginUserPhone = "";
const campusLogo = "";
const campusName = "";
const currentWeekNo = "";
const userJobNum = "";
const organizeName = "";
const realName = "";
const headImage = "";
const userPhone = "";
const auditCount = 0;
const loginUserId = "";
const buildInterest = [
  {
    label: '独立产权',
    value: "1"
  },
  {
    label: '联合产权',
    value: "2"
  },
  {
    label: '租用',
    value: "3"
  }
];
const classroomUsed = [
  {
    label: '普通教室',
    value: "1"
  },
  {
    label: '计算机房',
    value: "2"
  },
  {
    label: '实验室',
    value: "3"
  },
  {
    label: '实训室',
    value: "4"
  },
  {
    label: '阶梯教室',
    value: "5"
  }
];
const dormroomType = [
  {
    label: '男生宿舍',
    value: "0"
  },
  {
    label: '女生宿舍',
    value: "1"
  }
];
const searchTeacherType = [
  {
    label: "姓名",
    value: 'realName'
  },
  {
    label: "手机",
    value: 'phone'
  },
  {
    label: "工号",
    value: 'jobNum'
  },
  {
    label: "身份证",
    value: 'certificateNum'
  }
];
const searchStudentType = [
  {
    label: "姓名",
    value: 'realName'
  },
  {
    label: "手机",
    value: 'phone'
  },
  {
    label: "学号",
    value: 'studentId'
  },
  {
    label: "身份证",
    value: 'certificateNum'
  }
];

const searchStudentType2 = [
  {
    label: "姓名",
    value: 'realName'
  },
  {
    label: "学号",
    value: 'studentId'
  }
];

const g_sex = [
  {
    label: "男",
    value: '1'
  },
  {
    label: "女",
    value: '2'
  },
  {
    label: "未知",
    value: '3'
  }
];

const filterTypes = [
  { text: "处分", value: '处分' ,label: '处分'},
  { text: '奖励', value: '奖励' ,label: '奖励'}
];

const filterNewTypes = [
  { text: "处分", value: '处分' ,label: '处分'},
  { text: '奖励', value: '奖励' ,label: '奖励'},
  { text: '解除申请', value: '解除申请' ,label: '解除申请'}
];

const filterRuTypes = [
  { text: "处分", value: '2' ,label: '处分'},
  { text: '奖励', value: '1' ,label: '奖励'},
  { text: '奖励/处分', value: '3' ,label: '奖励/处分'}
];

const filterStatus = [
  { text: "待审批", value: '0' ,label: '待审批'},
  { text: '已通过', value: '3' ,label: '已通过'},
  { text: '已驳回', value: '4' ,label: '已驳回'}
];

const filterRpStatus = [
  { text: "处分中", value: '0' ,label: '处分中'},
  { text: '奖励中', value: '1' ,label: '奖励中'}
];

const filterJCRpStatus = [
  { text: "审批中", value: '0' ,label: '审批中'},
  { text: '奖励中', value: '2' ,label: '奖励中'},
  { text: '处分中', value: '3' ,label: '处分中'},
  { text: '已驳回', value: '4' ,label: '已驳回'},
  { text: '已逾期', value: '5' ,label: '已逾期'},
  { text: '已解除', value: '8' ,label: '已解除'}
];

const filterDetailStatus = [
  { text: "已撤回", value: '-1' ,label: '已撤回'},
  { text: '已通过', value: '3' ,label: '已通过'},
  { text: '已驳回', value: '4' ,label: '已驳回'}
];

const filterScoreTypes = [
  { text: "加分", value: 'true' ,label: '加分'},
  { text: '减分', value: 'false' ,label: '减分'}
];

const filterScoreLevels = [
  { text: "达标", value: true ,label: '达标'},
  { text: '不达标', value: false ,label: '不达标'}
];

const weekNoSelect = [
  { text: "周一", value: '1' ,label: '周一'},
  { text: '周二', value: '2' ,label: '周二'},
  { text: '周三', value: '3' ,label: '周三'},
  { text: '周四', value: '4' ,label: '周四'},
  { text: '周五', value: '5' ,label: '周五'},
  { text: '周六', value: '6' ,label: '周六'},
  { text: '周日', value: '7' ,label: '周日'}
];

const switchStatus = [
  { text: "开", value: '1' ,label: '开'},
  { text: '关', value: '0' ,label: '关'}
];

const levelStatus = [
  { text: "高", value: '高' ,label: '高'},
  { text: '中', value: '中' ,label: '中'},
  { text: '低', value: '低' ,label: '低'}
];

const filterCheckStatus = [
  { text: "已检查", value: true ,label: '已检查'},
  { text: '未检查', value: false ,label: '未检查'}
];

const filterAreaStatus = [
  { text: "个人区域", value: '1' ,label: '个人区域'},
  { text: '公共区域', value: '2' ,label: '公共区域'},
  { text: '空床', value: '3' ,label: '空床'}
];

const filterOtherAreaStatus = [
  { text: "个人区域", value: '1' ,label: '个人区域'},
  { text: '公共区域', value: '2' ,label: '公共区域'}
];

const filterEnableStatus = [
  { text: "启用", value: true ,label: '启用'},
  { text: '停用', value: false ,label: '停用'}
];

const filterPhoneOwner = [
  { text: "移动", value: 1 ,label: '移动'},
  { text: '联通', value: 2 ,label: '联通'},
  { text: '电信', value: 3 ,label: '电信'},
  { text: '其他', value: 4 ,label: '其他'}
];

const filterBillStatus = [
  { text: "待缴费", value: 1 ,label: '待缴费'},
  { text: '已缴费', value: 2 ,label: '已缴费'}
];

const filterDeviceUseType = [
  { text: "归寝签到", value: 1 ,label: '归寝签到'},
  { text: '课堂考勤', value: 2 ,label: '课堂考勤'},
  { text: '门禁直连用', value: 3 ,label: '门禁直连用'},
  { text: '门禁控制器用', value: 4 ,label: '门禁控制器用'},
  { text: '智慧迎新用', value: 5 ,label: '智慧迎新用'}
];

const filterDeviceUseOnlyType = [
  { text: "归寝签到", value: 1 ,label: '归寝签到'},
  { text: '课堂考勤', value: 2 ,label: '课堂考勤'},
  { text: '门禁直连用(单选)', value: 3 ,label: '门禁直连用(单选)'},
  { text: '门禁控制器用(单选)', value: 4 ,label: '门禁控制器用(单选)'},
  { text: '智慧迎新用', value: 5 ,label: '智慧迎新用'}
];

const filterOnlineStatus = [
  { text: "在线", value: true, label: '在线'},
  { text: '离线', value: false, label: '离线'}
];

const filterDormBackStatus = [
  { text: "已归寝", value: "1", label: '已归寝'},
  { text: '晚归', value: "3", label: '晚归'},
  { text: '未归', value: "0", label: '未归'},
  { text: '超长未归', value: "4", label: '超长未归'},
  { text: '请假', value: "2", label: '请假'}
];

const filterClassAttendStatus = [
  { text: "出勤", value: "1", label: '出勤'},
  { text: '迟到', value: "3", label: '迟到'},
  { text: '早退', value: "4", label: '早退'},
  { text: '旷课', value: "5", label: '旷课'},
  { text: '请假', value: "2", label: '请假'}
];

const filterAttendTypes = [
  { text: "行政考勤", value: "attend", label: '行政考勤'},
  { text: '会议考勤', value: "meeting", label: '会议考勤'},
  { text: '日常请假', value: "leave", label: '日常请假'}
];

const filterScoreFlowTypes = [
  { text: "加分", value: "加分", label: '加分'},
  { text: '减分', value: "减分", label: '减分'}
];

const filterTripFlowTypes = [
  { text: "出差", value: "出差", label: '出差'}
];

const filterCardFlowTypes = [
  { text: "补卡", value: "补卡", label: '补卡'}
];

const filterUserTypes = [
  { text: "学生", value: "1", label: '学生'},
  { text: '教师', value: "2", label: '教师'},
  { text: '陌生人', value: "3", label: '陌生人'}
];

const filterUserTypes2 = [
  { text: "学生", value: "1", label: '学生'},
  { text: '教师', value: "2", label: '教师'}
];

const filterDoorOpenTypes = [
  { text: "正常", value: "3", label: '正常'},
  { text: '常开', value: "1", label: '常开'},
  { text: '常关', value: "2", label: '常关'}
];

const filterDoorOnlineStatus = [
  { text: "在线", value: 1, label: '在线'},
  { text: '离线', value: 2, label: '离线'}
];

const filterDoorExceptionStatus = [
  { text: "异常", value: "0", label: '异常'},
  { text: '受限', value: "1", label: '受限'},
  { text: '已解除', value: "2", label: '已解除'}
];

const filterDoorInOutStatus = [
  { text: "进入", value: '1' ,label: '进入'},
  { text: '外出', value: '2' ,label: '外出'}
];

const filterDoorSignStatus = [
  { text: '扫码通行', value: '1' ,label: '扫码通行'},
  { text: '刷脸通行', value: '2' ,label: '刷脸通行'},
  { text: '刷卡通行', value: '3' ,label: '刷卡通行'},
  { text: '刷码通行', value: '4' ,label: '刷码通行'},
];

const filterAuthOptions = [
  { text: '全部', value: '' ,label: '全部'},
  { text: '无需授权', value: '-1' ,label: '无需授权'},
  { text: '待授权', value: '0' ,label: '待授权'},
  { text: '已授权', value: '1' ,label: '已授权'},
  { text: '授权失败', value: '2' ,label: '授权失败'}
];

const filterAuthOtherOptions = [
  { text: '待授权', value: '0' ,label: '待授权'},
  { text: '已授权', value: '1' ,label: '已授权'},
  { text: '授权失败', value: '2' ,label: '授权失败'}
];

const filterTimeStatusOptions = [
  { text: '当日', value: '1' ,label: '当日'},
  { text: '本周', value: '2' ,label: '本周'},
  { text: '本月', value: '3' ,label: '本月'},
  { text: '本学期', value: '4' ,label: '本学期'}
];

const filterUserAccountActiveStatusOptions = [
  { text: '已激活', value: true ,label: '已激活'},
  { text: '未激活', value: false ,label: '未激活'}
];

const filterAppManageStatus = [
  { text: "待发布", value: 'false' ,label: '待发布'},
  { text: '已发布', value: 'true' ,label: '已发布'}
];

const filterAppManageType = [
  { text: "学生办事", value: '0' ,label: '学生办事'},
  { text: '老师办事', value: '1' ,label: '老师办事'},
  { text: '单位办事', value: '2' ,label: '单位办事'}
];

const filterAppServerType = [
  { text: "普通服务", value: '0' ,label: '普通服务'},
  { text: '流程服务', value: '1' ,label: '流程服务'},
  { text: '统计服务', value: '2' ,label: '统计服务'}
];

const filterAppServerConditionnalNumType = [
  { text: "等于", value: '0' ,label: '等于'},
  { text: '不等于', value: '1' ,label: '不等于'},
  { text: '大于等于', value: '2' ,label: '大于等于'},
  { text: '小于', value: '2' ,label: '小于'},
  { text: '小于等于', value: '2' ,label: '小于等于'},
  { text: '选择范围', value: '2' ,label: '选择范围'},
  { text: '为空', value: '2' ,label: '为空'},
  { text: '不为空', value: '2' ,label: '不为空'}
];

const filterAppServerConditionnalTextType = [
  { text: "等于", value: '0' ,label: '等于'},
  { text: '不等于', value: '1' ,label: '不等于'},
  { text: '等于任一', value: '2' ,label: '等于任一'},
  { text: '为空', value: '2' ,label: '为空'},
  { text: '不为空', value: '2' ,label: '不为空'}
];

const filterAppServerConditionnalRadioType = [
  { text: "包含任一", value: '0' ,label: '等于'},
  { text: '同时包含', value: '1' ,label: '不等于'},
  { text: '等于', value: '2' ,label: '等于'},
  { text: '为空', value: '2' ,label: '为空'},
  { text: '不为空', value: '2' ,label: '不为空'}
];

const filterAppServerConditionnalAllType = [
  { text: "等于", value: 'is' ,label: '等于'},
  { text: '不等于', value: 'ne' ,label: '不等于'},
  { text: '大于', value: 'gt' ,label: '大于'},
  { text: '大于等于', value: 'gte' ,label: '大于等于'},
  { text: '小于', value: 'lt' ,label: '小于'},
  { text: '小于等于', value: 'lte' ,label: '小于等于'},
  { text: '在范围内', value: 'in' ,label: '在范围内'},
  { text: "不在范围内", value: 'nin' ,label: '不在范围内'},
  { text: '范围内满足全部', value: 'all' ,label: '范围内满足全部'},
  { text: '选择范围', value: 'between' ,label: '选择范围'},
  { text: '为空', value: 'null' ,label: '为空'},
  { text: '不为空', value: 'nnull' ,label: '不为空'}
];

const fiterTeacherRoleType = [
  {
    label: '班主任审批',
    value: 'MasterTeacher',
    text: '班主任审批',
  },
  {
    label: '辅导员审批',
    value: 'CoachTeacher',
    text: '辅导员审批',
  },
  {
    label: '系主任审批',
    value: 'DirectorTeacher',
    text: '系主任审批'
  },
  {
    label: '系副主任审批',
    value: 'DeputyDirectorTeacher',
    text: '系副主任审批',
  },
  {
    label: '学管主任审批',
    value: 'StudentManageTeacher',
    text: '学管主任审批',
  },
  {
    label: '系部干事审批',
    value: 'SecretaryTeacher',
    text: '系部干事审批'
  },
  {
    label: '宿管员审批',
    value: 'DormitoryTeacher',
    text: '宿管员审批'
  },
  {
    label: '部门负责人审批',
    value: 'DeptRoleAdmin',
    text: '部门负责人审批'
  }
];


const fiterTeacherRoleTreeType = [
  {
    label: '班主任',
    value: 'MasterTeacher',
    text: '班主任',
  },
  {
    label: '辅导员',
    value: 'CoachTeacher',
    text: '辅导员',
  },
  {
    label: '系主任',
    value: 'DirectorTeacher',
    text: '系主任'
  },
  {
    label: '系副主任',
    value: 'DeputyDirectorTeacher',
    text: '系副主任',
  },
  {
    label: '学管主任',
    value: 'StudentManageTeacher',
    text: '学管主任',
  },
  {
    label: '系部干事',
    value: 'SecretaryTeacher',
    text: '系部干事'
  },
  {
    label: '宿管员',
    value: 'DormitoryTeacher',
    text: '宿管员'
  }
];

const filterFlowParamType = [
  { text: "线上环节", value: '1' ,label: '线上环节'},
  { text: '线下环节', value: '0' ,label: '线下环节'}
];

const filterProcessLinkParamType = [
  { text: "接站登记(系统)", value: '0' ,label: '接站登记(系统)'},
  { text: '现场缴费(系统)', value: '1' ,label: '现场缴费(系统)'},
  { text: '线上选寝(系统)', value: '2' ,label: '线上选寝(系统)'},
  { text: '现场缴费(系统)', value: '3' ,label: '现场缴费(系统)'},
  { text: '信息采集(系统)', value: '4' ,label: '信息采集(系统)'},
  { text: '自定义环节', value: '9' ,label: '自定义环节'}
];

const filterGraduationType = [
  { text: "初中毕业", value: '初中' ,label: '初中毕业'},
  { text: '高中毕业', value: '高中' ,label: '高中毕业'},
  { text: '职高毕业', value: '职高' ,label: '职高毕业'},
  { text: '技校毕业', value: '技校' ,label: '技校毕业'},
  { text: '中专毕业', value: '中专' ,label: '中专毕业'}
];

const filterPoliticsType = [
  { text: "群众", value: '群众' ,label: '群众'},
  { text: '团员', value: '团员' ,label: '团员'},
  { text: '党员', value: '党员' ,label: '党员'}
];

const filterRetireType = [
  { text: "是", value: true ,label: '是'},
  { text: '否', value: false ,label: '否'}
];

const filterHardType = [
  { text: "无", value: '无' ,label: '无'},
  { text: '低保', value: '低保' ,label: '低保'},
  { text: '孤儿', value: '孤儿' ,label: '孤儿'},
  { text: '烈士子女', value: '烈士子女' ,label: '烈士子女'},
  { text: '低收入', value: '低收入' ,label: '低收入'},
  { text: '建档立卡', value: '建档立卡' ,label: '建档立卡'},
  { text: '其他', value: '其他' ,label: '其他'}
];

const filterUserTeachTypes = [
  { text: "休学", value: '02' ,label: '休学'},
  { text: '退学', value: '03' ,label: '退学'},
  { text: '停学', value: '04' ,label: '停学'},
  { text: '复学', value: '05' ,label: '复学'},
  { text: '流失', value: '06' ,label: '流失'},
  { text: '结业', value: '08' ,label: '结业'},
  { text: '肆业', value: '09' ,label: '肆业'},
  { text: '转学', value: '10' ,label: '转学'},
  { text: '死亡', value: '11' ,label: '死亡'},
  { text: '保留入学', value: '12' ,label: '保留入学'},
  { text: '公派出国', value: '13' ,label: '公派出国'},
  { text: '开除', value: '14' ,label: '开除'},
  { text: '下落不明', value: '15' ,label: '下落不明'}
];

const filterSystemAppletTypes = [
  { text: "财务报销报销管理", value: '1', type: '2', id: '1' ,label: '财务报销报销管理', icon: ''}
];

export default {
  total,
  page,
  num,
  collegeId,
  collegeName,
  majorId,
  majorName,
  classId,
  className,
  gradeId,
  dataCollegeList: [],
  dataSchoolBuildList: [],
  dataDormBuildList: [],
  dataRoleTreeList: [],
  dataDeptList: [],
  dataAppletList: [],
  dataAppletServer: [],
  dataAppletSystemServer: [],
  dataAppletFDServer: [],
  dataProcessServer: [],
  dataProcessLinkServer: [],
  currentDay,
  currentMonth,
  currentTermId,
  currentWeekNum,
  currentYear,
  loginUserName,
  loginUserType,
  loginUserPhone,
  campusLogo,
  campusName,
  currentWeekNo,
  userJobNum,
  organizeName,
  realName,
  headImage,
  userPhone,
  auditCount,
  loginUserId,
  currentSeciton,
  buildInterest,
  classroomUsed,
  dormroomType,
  searchTeacherType,
  g_sex,
  searchStudentType,
  filterStatus,
  filterDetailStatus,
  filterTypes,
  filterNewTypes,
  filterScoreTypes,
  filterScoreLevels,
  weekNoSelect,
  switchStatus,
  levelStatus,
  filterCheckStatus,
  filterAreaStatus,
  filterOtherAreaStatus,
  filterEnableStatus,
  filterPhoneOwner,
  filterBillStatus,
  filterDeviceUseType,
  filterDeviceUseOnlyType,
  filterOnlineStatus,
  filterDormBackStatus,
  filterClassAttendStatus,
  currentYearList,
  currentTermList,
  currentWeekList,
  currentYearId,
  filterAttendTypes,
  filterScoreFlowTypes,
  filterTripFlowTypes,
  filterCardFlowTypes,
  filterUserTypes,
  filterUserTypes2,
  filterDoorOpenTypes,
  filterDoorOnlineStatus,
  filterDoorExceptionStatus,
  filterDoorInOutStatus,
  filterDoorSignStatus,
  searchStudentType2,
  filterAuthOptions,
  filterAuthOtherOptions,
  filterTimeStatusOptions,
  filterUserAccountActiveStatusOptions,
  filterAppManageStatus,
  filterAppManageType,
  filterAppServerType,
  filterAppServerConditionnalNumType,
  filterAppServerConditionnalTextType,
  filterAppServerConditionnalRadioType,
  filterAppServerConditionnalAllType,
  fiterTeacherRoleType,
  fiterTeacherRoleTreeType,
  filterFlowParamType,
  filterProcessLinkParamType,
  filterGraduationType,
  filterPoliticsType,
  filterRetireType,
  filterHardType,
  filterRpStatus,
  filterJCRpStatus,
  filterRuTypes,
  filterUserTeachTypes,
  filterSystemAppletTypes
}
