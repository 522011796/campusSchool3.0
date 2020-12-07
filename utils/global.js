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
const dataDeptList = [];
const currentSeciton = 20;
const currentYear = "";
const currentMonth = "";
const currentDay = "";
const currentTermId = "";
const currentWeekNum = "";
const loginUserName = "";
const loginUserType = "";
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
    value: 'cretificateNum'
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
    value: 'cretificateNum'
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

const filterStatus = [
  { text: "待审批", value: '0' ,label: '待审批'},
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
  dataDeptList: [],
  currentDay,
  currentMonth,
  currentTermId,
  currentWeekNum,
  currentYear,
  loginUserName,
  loginUserType,
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
  filterTypes,
  filterScoreTypes,
  filterScoreLevels,
  weekNoSelect,
  switchStatus,
  levelStatus,
  filterCheckStatus
}
