import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _65df4c4b = () => interopDefault(import('../pages/basicInfo/appAuth.vue' /* webpackChunkName: "pages/basicInfo/appAuth" */))
const _dfad4160 = () => interopDefault(import('../pages/basicInfo/build.vue' /* webpackChunkName: "pages/basicInfo/build" */))
const _72ad03bc = () => interopDefault(import('../pages/basicInfo/buildSet.vue' /* webpackChunkName: "pages/basicInfo/buildSet" */))
const _3d50082d = () => interopDefault(import('../pages/basicInfo/circular.vue' /* webpackChunkName: "pages/basicInfo/circular" */))
const _39d2a54c = () => interopDefault(import('../pages/basicInfo/class.vue' /* webpackChunkName: "pages/basicInfo/class" */))
const _12957bd5 = () => interopDefault(import('../pages/basicInfo/classRoom.vue' /* webpackChunkName: "pages/basicInfo/classRoom" */))
const _c1cf9bb2 = () => interopDefault(import('../pages/basicInfo/classRoomBak.vue' /* webpackChunkName: "pages/basicInfo/classRoomBak" */))
const _58631379 = () => interopDefault(import('../pages/basicInfo/college.vue' /* webpackChunkName: "pages/basicInfo/college" */))
const _12c73211 = () => interopDefault(import('../pages/basicInfo/deviceArea.vue' /* webpackChunkName: "pages/basicInfo/deviceArea" */))
const _86a65174 = () => interopDefault(import('../pages/basicInfo/deviceConfig.vue' /* webpackChunkName: "pages/basicInfo/deviceConfig" */))
const _32b8c514 = () => interopDefault(import('../pages/basicInfo/dorm.vue' /* webpackChunkName: "pages/basicInfo/dorm" */))
const _0f91268f = () => interopDefault(import('../pages/basicInfo/dormRoom.vue' /* webpackChunkName: "pages/basicInfo/dormRoom" */))
const _74b2d808 = () => interopDefault(import('../pages/basicInfo/identification.vue' /* webpackChunkName: "pages/basicInfo/identification" */))
const _1e4b1c88 = () => interopDefault(import('../pages/basicInfo/info.vue' /* webpackChunkName: "pages/basicInfo/info" */))
const _0c4cb11b = () => interopDefault(import('../pages/basicInfo/major.vue' /* webpackChunkName: "pages/basicInfo/major" */))
const _3962fd61 = () => interopDefault(import('../pages/basicInfo/news.vue' /* webpackChunkName: "pages/basicInfo/news" */))
const _4804f966 = () => interopDefault(import('../pages/basicInfo/notice.vue' /* webpackChunkName: "pages/basicInfo/notice" */))
const _6ed659c1 = () => interopDefault(import('../pages/basicInfo/organization.vue' /* webpackChunkName: "pages/basicInfo/organization" */))
const _2ec18970 = () => interopDefault(import('../pages/basicInfo/padCloud.vue' /* webpackChunkName: "pages/basicInfo/padCloud" */))
const _0051ffa6 = () => interopDefault(import('../pages/basicInfo/padLocal.vue' /* webpackChunkName: "pages/basicInfo/padLocal" */))
const _87bf113a = () => interopDefault(import('../pages/basicInfo/person.vue' /* webpackChunkName: "pages/basicInfo/person" */))
const _3ae17516 = () => interopDefault(import('../pages/basicInfo/strangerRecord.vue' /* webpackChunkName: "pages/basicInfo/strangerRecord" */))
const _d7206544 = () => interopDefault(import('../pages/basicInfo/stuAuth.vue' /* webpackChunkName: "pages/basicInfo/stuAuth" */))
const _43c28aa2 = () => interopDefault(import('../pages/basicInfo/stuCredit.vue' /* webpackChunkName: "pages/basicInfo/stuCredit" */))
const _7041421d = () => interopDefault(import('../pages/basicInfo/student.vue' /* webpackChunkName: "pages/basicInfo/student" */))
const _655c56e8 = () => interopDefault(import('../pages/basicInfo/stuDoorAccess.vue' /* webpackChunkName: "pages/basicInfo/stuDoorAccess" */))
const _5cac6393 = () => interopDefault(import('../pages/basicInfo/stuFace.vue' /* webpackChunkName: "pages/basicInfo/stuFace" */))
const _081ba071 = () => interopDefault(import('../pages/basicInfo/stuLeave.vue' /* webpackChunkName: "pages/basicInfo/stuLeave" */))
const _25e3e32e = () => interopDefault(import('../pages/basicInfo/stuRepu.vue' /* webpackChunkName: "pages/basicInfo/stuRepu" */))
const _46d96044 = () => interopDefault(import('../pages/basicInfo/teacher.vue' /* webpackChunkName: "pages/basicInfo/teacher" */))
const _de100904 = () => interopDefault(import('../pages/basicInfo/terAddCard.vue' /* webpackChunkName: "pages/basicInfo/terAddCard" */))
const _1c39924b = () => interopDefault(import('../pages/basicInfo/terAuth.vue' /* webpackChunkName: "pages/basicInfo/terAuth" */))
const _70e7f615 = () => interopDefault(import('../pages/basicInfo/terDoorAccess.vue' /* webpackChunkName: "pages/basicInfo/terDoorAccess" */))
const _798a7924 = () => interopDefault(import('../pages/basicInfo/terLeave.vue' /* webpackChunkName: "pages/basicInfo/terLeave" */))
const _7bc144ec = () => interopDefault(import('../pages/basicInfo/terminal.vue' /* webpackChunkName: "pages/basicInfo/terminal" */))
const _365a5806 = () => interopDefault(import('../pages/basicInfo/terTravel.vue' /* webpackChunkName: "pages/basicInfo/terTravel" */))
const _331ddedd = () => interopDefault(import('../pages/basicInfo/video.vue' /* webpackChunkName: "pages/basicInfo/video" */))
const _d2be8b04 = () => interopDefault(import('../pages/basicInfo/webAuth.vue' /* webpackChunkName: "pages/basicInfo/webAuth" */))
const _6324ad48 = () => interopDefault(import('../pages/basicInfo/yearAndTerm.vue' /* webpackChunkName: "pages/basicInfo/yearAndTerm" */))
const _cbf69006 = () => interopDefault(import('../pages/test/test1.vue' /* webpackChunkName: "pages/test/test1" */))
const _cbda6104 = () => interopDefault(import('../pages/test/test2.vue' /* webpackChunkName: "pages/test/test2" */))
const _cbbe3202 = () => interopDefault(import('../pages/test/test3.vue' /* webpackChunkName: "pages/test/test3" */))
const _cba20300 = () => interopDefault(import('../pages/test/test4.vue' /* webpackChunkName: "pages/test/test4" */))
const _5018bea2 = () => interopDefault(import('../pages/attendanceInfo/administration/faceRecord.vue' /* webpackChunkName: "pages/attendanceInfo/administration/faceRecord" */))
const _45b80b36 = () => interopDefault(import('../pages/attendanceInfo/administration/record.vue' /* webpackChunkName: "pages/attendanceInfo/administration/record" */))
const _f2051f88 = () => interopDefault(import('../pages/attendanceInfo/administration/search.vue' /* webpackChunkName: "pages/attendanceInfo/administration/search" */))
const _742c2c6c = () => interopDefault(import('../pages/attendanceInfo/administration/setting.vue' /* webpackChunkName: "pages/attendanceInfo/administration/setting" */))
const _aa79f3fc = () => interopDefault(import('../pages/attendanceInfo/administration/static.vue' /* webpackChunkName: "pages/attendanceInfo/administration/static" */))
const _19c08d26 = () => interopDefault(import('../pages/attendanceInfo/classAttend/analysis.vue' /* webpackChunkName: "pages/attendanceInfo/classAttend/analysis" */))
const _5a80fc50 = () => interopDefault(import('../pages/attendanceInfo/classAttend/faceRecord.vue' /* webpackChunkName: "pages/attendanceInfo/classAttend/faceRecord" */))
const _06ea457c = () => interopDefault(import('../pages/attendanceInfo/classAttend/now.vue' /* webpackChunkName: "pages/attendanceInfo/classAttend/now" */))
const _9c7b831c = () => interopDefault(import('../pages/attendanceInfo/classAttend/search.vue' /* webpackChunkName: "pages/attendanceInfo/classAttend/search" */))
const _bbfdb614 = () => interopDefault(import('../pages/attendanceInfo/classAttend/setting.vue' /* webpackChunkName: "pages/attendanceInfo/classAttend/setting" */))
const _92c017a2 = () => interopDefault(import('../pages/attendanceInfo/classAttend/studentStatic.vue' /* webpackChunkName: "pages/attendanceInfo/classAttend/studentStatic" */))
const _453c9916 = () => interopDefault(import('../pages/attendanceInfo/classAttend/teacherStatic.vue' /* webpackChunkName: "pages/attendanceInfo/classAttend/teacherStatic" */))
const _4e7d6164 = () => interopDefault(import('../pages/attendanceInfo/dormAttend/analysis.vue' /* webpackChunkName: "pages/attendanceInfo/dormAttend/analysis" */))
const _56cf4c00 = () => interopDefault(import('../pages/attendanceInfo/dormAttend/faceRecord.vue' /* webpackChunkName: "pages/attendanceInfo/dormAttend/faceRecord" */))
const _b59a6b58 = () => interopDefault(import('../pages/attendanceInfo/dormAttend/now.vue' /* webpackChunkName: "pages/attendanceInfo/dormAttend/now" */))
const _4add6a9a = () => interopDefault(import('../pages/attendanceInfo/dormAttend/search.vue' /* webpackChunkName: "pages/attendanceInfo/dormAttend/search" */))
const _2c4b7dce = () => interopDefault(import('../pages/attendanceInfo/dormAttend/setting.vue' /* webpackChunkName: "pages/attendanceInfo/dormAttend/setting" */))
const _6ea30060 = () => interopDefault(import('../pages/attendanceInfo/dormAttend/static.vue' /* webpackChunkName: "pages/attendanceInfo/dormAttend/static" */))
const _52805ec0 = () => interopDefault(import('../pages/attendanceInfo/leaveManage/setting.vue' /* webpackChunkName: "pages/attendanceInfo/leaveManage/setting" */))
const _6a958da4 = () => interopDefault(import('../pages/attendanceInfo/leaveManage/static.vue' /* webpackChunkName: "pages/attendanceInfo/leaveManage/static" */))
const _67fc71c6 = () => interopDefault(import('../pages/attendanceInfo/meetAttend/meetting.vue' /* webpackChunkName: "pages/attendanceInfo/meetAttend/meetting" */))
const _b0297b28 = () => interopDefault(import('../pages/auditInfo/stuApply/doorApply.vue' /* webpackChunkName: "pages/auditInfo/stuApply/doorApply" */))
const _43530dca = () => interopDefault(import('../pages/auditInfo/stuApply/leaveApply.vue' /* webpackChunkName: "pages/auditInfo/stuApply/leaveApply" */))
const _5033a43c = () => interopDefault(import('../pages/auditInfo/stuApply/repuApply.vue' /* webpackChunkName: "pages/auditInfo/stuApply/repuApply" */))
const _0ade1ddd = () => interopDefault(import('../pages/auditInfo/stuApply/resultApply.vue' /* webpackChunkName: "pages/auditInfo/stuApply/resultApply" */))
const _46852fa0 = () => interopDefault(import('../pages/auditInfo/stuApply/scoreApply.vue' /* webpackChunkName: "pages/auditInfo/stuApply/scoreApply" */))
const _8ad5d142 = () => interopDefault(import('../pages/auditInfo/terApply/doorApply.vue' /* webpackChunkName: "pages/auditInfo/terApply/doorApply" */))
const _20e74288 = () => interopDefault(import('../pages/auditInfo/terApply/leaveApply.vue' /* webpackChunkName: "pages/auditInfo/terApply/leaveApply" */))
const _35eaac32 = () => interopDefault(import('../pages/studentInfo/class/classChecked.vue' /* webpackChunkName: "pages/studentInfo/class/classChecked" */))
const _429c43d2 = () => interopDefault(import('../pages/studentInfo/class/object.vue' /* webpackChunkName: "pages/studentInfo/class/object" */))
const _6a2e63ae = () => interopDefault(import('../pages/studentInfo/class/record.vue' /* webpackChunkName: "pages/studentInfo/class/record" */))
const _3f01d128 = () => interopDefault(import('../pages/studentInfo/class/setting.vue' /* webpackChunkName: "pages/studentInfo/class/setting" */))
const _68de1900 = () => interopDefault(import('../pages/studentInfo/credit/creditApply.vue' /* webpackChunkName: "pages/studentInfo/credit/creditApply" */))
const _acc4e168 = () => interopDefault(import('../pages/studentInfo/credit/creditStatic.vue' /* webpackChunkName: "pages/studentInfo/credit/creditStatic" */))
const _127b8584 = () => interopDefault(import('../pages/studentInfo/credit/object.vue' /* webpackChunkName: "pages/studentInfo/credit/object" */))
const _71b4a61f = () => interopDefault(import('../pages/studentInfo/credit/scope.vue' /* webpackChunkName: "pages/studentInfo/credit/scope" */))
const _1de767f0 = () => interopDefault(import('../pages/studentInfo/dorm/change.vue' /* webpackChunkName: "pages/studentInfo/dorm/change" */))
const _33abe4a5 = () => interopDefault(import('../pages/studentInfo/dorm/clear.vue' /* webpackChunkName: "pages/studentInfo/dorm/clear" */))
const _0e74b15e = () => interopDefault(import('../pages/studentInfo/dorm/dorm.vue' /* webpackChunkName: "pages/studentInfo/dorm/dorm" */))
const _5837e52b = () => interopDefault(import('../pages/studentInfo/dorm/online.vue' /* webpackChunkName: "pages/studentInfo/dorm/online" */))
const _e31c19b0 = () => interopDefault(import('../pages/studentInfo/dorm/setting.vue' /* webpackChunkName: "pages/studentInfo/dorm/setting" */))
const _a147f5c4 = () => interopDefault(import('../pages/studentInfo/homework/homework.vue' /* webpackChunkName: "pages/studentInfo/homework/homework" */))
const _775ffc26 = () => interopDefault(import('../pages/studentInfo/homework/object.vue' /* webpackChunkName: "pages/studentInfo/homework/object" */))
const _9ef21c02 = () => interopDefault(import('../pages/studentInfo/homework/record.vue' /* webpackChunkName: "pages/studentInfo/homework/record" */))
const _0d282812 = () => interopDefault(import('../pages/studentInfo/homework/setting.vue' /* webpackChunkName: "pages/studentInfo/homework/setting" */))
const _7f99f88e = () => interopDefault(import('../pages/studentInfo/leave/leave.vue' /* webpackChunkName: "pages/studentInfo/leave/leave" */))
const _0cb9429e = () => interopDefault(import('../pages/studentInfo/leave/manage.vue' /* webpackChunkName: "pages/studentInfo/leave/manage" */))
const _f726e032 = () => interopDefault(import('../pages/studentInfo/leave/setting.vue' /* webpackChunkName: "pages/studentInfo/leave/setting" */))
const _791aee58 = () => interopDefault(import('../pages/studentInfo/rp/level.vue' /* webpackChunkName: "pages/studentInfo/rp/level" */))
const _a12d55c0 = () => interopDefault(import('../pages/studentInfo/rp/rpApply.vue' /* webpackChunkName: "pages/studentInfo/rp/rpApply" */))
const _3479d72c = () => interopDefault(import('../pages/studentInfo/rp/rpStatic.vue' /* webpackChunkName: "pages/studentInfo/rp/rpStatic" */))
const _e144adf0 = () => interopDefault(import('../pages/studentInfo/student/account.vue' /* webpackChunkName: "pages/studentInfo/student/account" */))
const _50b2ff93 = () => interopDefault(import('../pages/studentInfo/student/class.vue' /* webpackChunkName: "pages/studentInfo/student/class" */))
const _bcc6708a = () => interopDefault(import('../pages/studentInfo/student/dorm.vue' /* webpackChunkName: "pages/studentInfo/student/dorm" */))
const _4f9d2c38 = () => interopDefault(import('../pages/studentInfo/student/empower.vue' /* webpackChunkName: "pages/studentInfo/student/empower" */))
const _715f2179 = () => interopDefault(import('../pages/studentInfo/student/form.vue' /* webpackChunkName: "pages/studentInfo/student/form" */))
const _4cb91ea9 = () => interopDefault(import('../pages/studentInfo/student/report.vue' /* webpackChunkName: "pages/studentInfo/student/report" */))
const _2f39eb32 = () => interopDefault(import('../pages/studentInfo/student/status.vue' /* webpackChunkName: "pages/studentInfo/student/status" */))
const _3f117ef7 = () => interopDefault(import('../pages/studentInfo/student/warning.vue' /* webpackChunkName: "pages/studentInfo/student/warning" */))
const _8eb28206 = () => interopDefault(import('../pages/teachInfo/exam/examManage.vue' /* webpackChunkName: "pages/teachInfo/exam/examManage" */))
const _79788ac1 = () => interopDefault(import('../pages/teachInfo/exam/examPlan.vue' /* webpackChunkName: "pages/teachInfo/exam/examPlan" */))
const _1a768a32 = () => interopDefault(import('../pages/teachInfo/exam/performance.vue' /* webpackChunkName: "pages/teachInfo/exam/performance" */))
const _f5c09ebe = () => interopDefault(import('../pages/teachInfo/teach/courseManage.vue' /* webpackChunkName: "pages/teachInfo/teach/courseManage" */))
const _26099565 = () => interopDefault(import('../pages/teachInfo/teach/coursePlan.vue' /* webpackChunkName: "pages/teachInfo/teach/coursePlan" */))
const _0c3f00d1 = () => interopDefault(import('../pages/teachInfo/teach/myTable.vue' /* webpackChunkName: "pages/teachInfo/teach/myTable" */))
const _615230d5 = () => interopDefault(import('../pages/teachInfo/teach/searchTable.vue' /* webpackChunkName: "pages/teachInfo/teach/searchTable" */))
const _42220ccd = () => interopDefault(import('../pages/teachInfo/teach/teachPlan.vue' /* webpackChunkName: "pages/teachInfo/teach/teachPlan" */))
const _41b58047 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/basicInfo/appAuth",
    component: _65df4c4b,
    name: "basicInfo-appAuth"
  }, {
    path: "/basicInfo/build",
    component: _dfad4160,
    name: "basicInfo-build"
  }, {
    path: "/basicInfo/buildSet",
    component: _72ad03bc,
    name: "basicInfo-buildSet"
  }, {
    path: "/basicInfo/circular",
    component: _3d50082d,
    name: "basicInfo-circular"
  }, {
    path: "/basicInfo/class",
    component: _39d2a54c,
    name: "basicInfo-class"
  }, {
    path: "/basicInfo/classRoom",
    component: _12957bd5,
    name: "basicInfo-classRoom"
  }, {
    path: "/basicInfo/classRoomBak",
    component: _c1cf9bb2,
    name: "basicInfo-classRoomBak"
  }, {
    path: "/basicInfo/college",
    component: _58631379,
    name: "basicInfo-college"
  }, {
    path: "/basicInfo/deviceArea",
    component: _12c73211,
    name: "basicInfo-deviceArea"
  }, {
    path: "/basicInfo/deviceConfig",
    component: _86a65174,
    name: "basicInfo-deviceConfig"
  }, {
    path: "/basicInfo/dorm",
    component: _32b8c514,
    name: "basicInfo-dorm"
  }, {
    path: "/basicInfo/dormRoom",
    component: _0f91268f,
    name: "basicInfo-dormRoom"
  }, {
    path: "/basicInfo/identification",
    component: _74b2d808,
    name: "basicInfo-identification"
  }, {
    path: "/basicInfo/info",
    component: _1e4b1c88,
    name: "basicInfo-info"
  }, {
    path: "/basicInfo/major",
    component: _0c4cb11b,
    name: "basicInfo-major"
  }, {
    path: "/basicInfo/news",
    component: _3962fd61,
    name: "basicInfo-news"
  }, {
    path: "/basicInfo/notice",
    component: _4804f966,
    name: "basicInfo-notice"
  }, {
    path: "/basicInfo/organization",
    component: _6ed659c1,
    name: "basicInfo-organization"
  }, {
    path: "/basicInfo/padCloud",
    component: _2ec18970,
    name: "basicInfo-padCloud"
  }, {
    path: "/basicInfo/padLocal",
    component: _0051ffa6,
    name: "basicInfo-padLocal"
  }, {
    path: "/basicInfo/person",
    component: _87bf113a,
    name: "basicInfo-person"
  }, {
    path: "/basicInfo/strangerRecord",
    component: _3ae17516,
    name: "basicInfo-strangerRecord"
  }, {
    path: "/basicInfo/stuAuth",
    component: _d7206544,
    name: "basicInfo-stuAuth"
  }, {
    path: "/basicInfo/stuCredit",
    component: _43c28aa2,
    name: "basicInfo-stuCredit"
  }, {
    path: "/basicInfo/student",
    component: _7041421d,
    name: "basicInfo-student"
  }, {
    path: "/basicInfo/stuDoorAccess",
    component: _655c56e8,
    name: "basicInfo-stuDoorAccess"
  }, {
    path: "/basicInfo/stuFace",
    component: _5cac6393,
    name: "basicInfo-stuFace"
  }, {
    path: "/basicInfo/stuLeave",
    component: _081ba071,
    name: "basicInfo-stuLeave"
  }, {
    path: "/basicInfo/stuRepu",
    component: _25e3e32e,
    name: "basicInfo-stuRepu"
  }, {
    path: "/basicInfo/teacher",
    component: _46d96044,
    name: "basicInfo-teacher"
  }, {
    path: "/basicInfo/terAddCard",
    component: _de100904,
    name: "basicInfo-terAddCard"
  }, {
    path: "/basicInfo/terAuth",
    component: _1c39924b,
    name: "basicInfo-terAuth"
  }, {
    path: "/basicInfo/terDoorAccess",
    component: _70e7f615,
    name: "basicInfo-terDoorAccess"
  }, {
    path: "/basicInfo/terLeave",
    component: _798a7924,
    name: "basicInfo-terLeave"
  }, {
    path: "/basicInfo/terminal",
    component: _7bc144ec,
    name: "basicInfo-terminal"
  }, {
    path: "/basicInfo/terTravel",
    component: _365a5806,
    name: "basicInfo-terTravel"
  }, {
    path: "/basicInfo/video",
    component: _331ddedd,
    name: "basicInfo-video"
  }, {
    path: "/basicInfo/webAuth",
    component: _d2be8b04,
    name: "basicInfo-webAuth"
  }, {
    path: "/basicInfo/yearAndTerm",
    component: _6324ad48,
    name: "basicInfo-yearAndTerm"
  }, {
    path: "/test/test1",
    component: _cbf69006,
    name: "test-test1"
  }, {
    path: "/test/test2",
    component: _cbda6104,
    name: "test-test2"
  }, {
    path: "/test/test3",
    component: _cbbe3202,
    name: "test-test3"
  }, {
    path: "/test/test4",
    component: _cba20300,
    name: "test-test4"
  }, {
    path: "/attendanceInfo/administration/faceRecord",
    component: _5018bea2,
    name: "attendanceInfo-administration-faceRecord"
  }, {
    path: "/attendanceInfo/administration/record",
    component: _45b80b36,
    name: "attendanceInfo-administration-record"
  }, {
    path: "/attendanceInfo/administration/search",
    component: _f2051f88,
    name: "attendanceInfo-administration-search"
  }, {
    path: "/attendanceInfo/administration/setting",
    component: _742c2c6c,
    name: "attendanceInfo-administration-setting"
  }, {
    path: "/attendanceInfo/administration/static",
    component: _aa79f3fc,
    name: "attendanceInfo-administration-static"
  }, {
    path: "/attendanceInfo/classAttend/analysis",
    component: _19c08d26,
    name: "attendanceInfo-classAttend-analysis"
  }, {
    path: "/attendanceInfo/classAttend/faceRecord",
    component: _5a80fc50,
    name: "attendanceInfo-classAttend-faceRecord"
  }, {
    path: "/attendanceInfo/classAttend/now",
    component: _06ea457c,
    name: "attendanceInfo-classAttend-now"
  }, {
    path: "/attendanceInfo/classAttend/search",
    component: _9c7b831c,
    name: "attendanceInfo-classAttend-search"
  }, {
    path: "/attendanceInfo/classAttend/setting",
    component: _bbfdb614,
    name: "attendanceInfo-classAttend-setting"
  }, {
    path: "/attendanceInfo/classAttend/studentStatic",
    component: _92c017a2,
    name: "attendanceInfo-classAttend-studentStatic"
  }, {
    path: "/attendanceInfo/classAttend/teacherStatic",
    component: _453c9916,
    name: "attendanceInfo-classAttend-teacherStatic"
  }, {
    path: "/attendanceInfo/dormAttend/analysis",
    component: _4e7d6164,
    name: "attendanceInfo-dormAttend-analysis"
  }, {
    path: "/attendanceInfo/dormAttend/faceRecord",
    component: _56cf4c00,
    name: "attendanceInfo-dormAttend-faceRecord"
  }, {
    path: "/attendanceInfo/dormAttend/now",
    component: _b59a6b58,
    name: "attendanceInfo-dormAttend-now"
  }, {
    path: "/attendanceInfo/dormAttend/search",
    component: _4add6a9a,
    name: "attendanceInfo-dormAttend-search"
  }, {
    path: "/attendanceInfo/dormAttend/setting",
    component: _2c4b7dce,
    name: "attendanceInfo-dormAttend-setting"
  }, {
    path: "/attendanceInfo/dormAttend/static",
    component: _6ea30060,
    name: "attendanceInfo-dormAttend-static"
  }, {
    path: "/attendanceInfo/leaveManage/setting",
    component: _52805ec0,
    name: "attendanceInfo-leaveManage-setting"
  }, {
    path: "/attendanceInfo/leaveManage/static",
    component: _6a958da4,
    name: "attendanceInfo-leaveManage-static"
  }, {
    path: "/attendanceInfo/meetAttend/meetting",
    component: _67fc71c6,
    name: "attendanceInfo-meetAttend-meetting"
  }, {
    path: "/auditInfo/stuApply/doorApply",
    component: _b0297b28,
    name: "auditInfo-stuApply-doorApply"
  }, {
    path: "/auditInfo/stuApply/leaveApply",
    component: _43530dca,
    name: "auditInfo-stuApply-leaveApply"
  }, {
    path: "/auditInfo/stuApply/repuApply",
    component: _5033a43c,
    name: "auditInfo-stuApply-repuApply"
  }, {
    path: "/auditInfo/stuApply/resultApply",
    component: _0ade1ddd,
    name: "auditInfo-stuApply-resultApply"
  }, {
    path: "/auditInfo/stuApply/scoreApply",
    component: _46852fa0,
    name: "auditInfo-stuApply-scoreApply"
  }, {
    path: "/auditInfo/terApply/doorApply",
    component: _8ad5d142,
    name: "auditInfo-terApply-doorApply"
  }, {
    path: "/auditInfo/terApply/leaveApply",
    component: _20e74288,
    name: "auditInfo-terApply-leaveApply"
  }, {
    path: "/studentInfo/class/classChecked",
    component: _35eaac32,
    name: "studentInfo-class-classChecked"
  }, {
    path: "/studentInfo/class/object",
    component: _429c43d2,
    name: "studentInfo-class-object"
  }, {
    path: "/studentInfo/class/record",
    component: _6a2e63ae,
    name: "studentInfo-class-record"
  }, {
    path: "/studentInfo/class/setting",
    component: _3f01d128,
    name: "studentInfo-class-setting"
  }, {
    path: "/studentInfo/credit/creditApply",
    component: _68de1900,
    name: "studentInfo-credit-creditApply"
  }, {
    path: "/studentInfo/credit/creditStatic",
    component: _acc4e168,
    name: "studentInfo-credit-creditStatic"
  }, {
    path: "/studentInfo/credit/object",
    component: _127b8584,
    name: "studentInfo-credit-object"
  }, {
    path: "/studentInfo/credit/scope",
    component: _71b4a61f,
    name: "studentInfo-credit-scope"
  }, {
    path: "/studentInfo/dorm/change",
    component: _1de767f0,
    name: "studentInfo-dorm-change"
  }, {
    path: "/studentInfo/dorm/clear",
    component: _33abe4a5,
    name: "studentInfo-dorm-clear"
  }, {
    path: "/studentInfo/dorm/dorm",
    component: _0e74b15e,
    name: "studentInfo-dorm-dorm"
  }, {
    path: "/studentInfo/dorm/online",
    component: _5837e52b,
    name: "studentInfo-dorm-online"
  }, {
    path: "/studentInfo/dorm/setting",
    component: _e31c19b0,
    name: "studentInfo-dorm-setting"
  }, {
    path: "/studentInfo/homework/homework",
    component: _a147f5c4,
    name: "studentInfo-homework-homework"
  }, {
    path: "/studentInfo/homework/object",
    component: _775ffc26,
    name: "studentInfo-homework-object"
  }, {
    path: "/studentInfo/homework/record",
    component: _9ef21c02,
    name: "studentInfo-homework-record"
  }, {
    path: "/studentInfo/homework/setting",
    component: _0d282812,
    name: "studentInfo-homework-setting"
  }, {
    path: "/studentInfo/leave/leave",
    component: _7f99f88e,
    name: "studentInfo-leave-leave"
  }, {
    path: "/studentInfo/leave/manage",
    component: _0cb9429e,
    name: "studentInfo-leave-manage"
  }, {
    path: "/studentInfo/leave/setting",
    component: _f726e032,
    name: "studentInfo-leave-setting"
  }, {
    path: "/studentInfo/rp/level",
    component: _791aee58,
    name: "studentInfo-rp-level"
  }, {
    path: "/studentInfo/rp/rpApply",
    component: _a12d55c0,
    name: "studentInfo-rp-rpApply"
  }, {
    path: "/studentInfo/rp/rpStatic",
    component: _3479d72c,
    name: "studentInfo-rp-rpStatic"
  }, {
    path: "/studentInfo/student/account",
    component: _e144adf0,
    name: "studentInfo-student-account"
  }, {
    path: "/studentInfo/student/class",
    component: _50b2ff93,
    name: "studentInfo-student-class"
  }, {
    path: "/studentInfo/student/dorm",
    component: _bcc6708a,
    name: "studentInfo-student-dorm"
  }, {
    path: "/studentInfo/student/empower",
    component: _4f9d2c38,
    name: "studentInfo-student-empower"
  }, {
    path: "/studentInfo/student/form",
    component: _715f2179,
    name: "studentInfo-student-form"
  }, {
    path: "/studentInfo/student/report",
    component: _4cb91ea9,
    name: "studentInfo-student-report"
  }, {
    path: "/studentInfo/student/status",
    component: _2f39eb32,
    name: "studentInfo-student-status"
  }, {
    path: "/studentInfo/student/warning",
    component: _3f117ef7,
    name: "studentInfo-student-warning"
  }, {
    path: "/teachInfo/exam/examManage",
    component: _8eb28206,
    name: "teachInfo-exam-examManage"
  }, {
    path: "/teachInfo/exam/examPlan",
    component: _79788ac1,
    name: "teachInfo-exam-examPlan"
  }, {
    path: "/teachInfo/exam/performance",
    component: _1a768a32,
    name: "teachInfo-exam-performance"
  }, {
    path: "/teachInfo/teach/courseManage",
    component: _f5c09ebe,
    name: "teachInfo-teach-courseManage"
  }, {
    path: "/teachInfo/teach/coursePlan",
    component: _26099565,
    name: "teachInfo-teach-coursePlan"
  }, {
    path: "/teachInfo/teach/myTable",
    component: _0c3f00d1,
    name: "teachInfo-teach-myTable"
  }, {
    path: "/teachInfo/teach/searchTable",
    component: _615230d5,
    name: "teachInfo-teach-searchTable"
  }, {
    path: "/teachInfo/teach/teachPlan",
    component: _42220ccd,
    name: "teachInfo-teach-teachPlan"
  }, {
    path: "/",
    component: _41b58047,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
