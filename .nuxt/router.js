import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2459f70a = () => interopDefault(import('../pages/indexBak.vue' /* webpackChunkName: "pages/indexBak" */))
const _71578d18 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _a49221f6 = () => interopDefault(import('../pages/basicInfo/appAuth.vue' /* webpackChunkName: "pages/basicInfo/appAuth" */))
const _411e688a = () => interopDefault(import('../pages/basicInfo/build.vue' /* webpackChunkName: "pages/basicInfo/build" */))
const _79c632a8 = () => interopDefault(import('../pages/basicInfo/buildSet.vue' /* webpackChunkName: "pages/basicInfo/buildSet" */))
const _1f26869a = () => interopDefault(import('../pages/basicInfo/circular.vue' /* webpackChunkName: "pages/basicInfo/circular" */))
const _d7e892d8 = () => interopDefault(import('../pages/basicInfo/class.vue' /* webpackChunkName: "pages/basicInfo/class" */))
const _79e14fe2 = () => interopDefault(import('../pages/basicInfo/classRoom.vue' /* webpackChunkName: "pages/basicInfo/classRoom" */))
const _541b33ad = () => interopDefault(import('../pages/basicInfo/classRoomBak.vue' /* webpackChunkName: "pages/basicInfo/classRoomBak" */))
const _bf8a939a = () => interopDefault(import('../pages/basicInfo/college.vue' /* webpackChunkName: "pages/basicInfo/college" */))
const _2bfac8a7 = () => interopDefault(import('../pages/basicInfo/deptInfo.vue' /* webpackChunkName: "pages/basicInfo/deptInfo" */))
const _7188dd17 = () => interopDefault(import('../pages/basicInfo/deviceArea.vue' /* webpackChunkName: "pages/basicInfo/deviceArea" */))
const _71afd8cc = () => interopDefault(import('../pages/basicInfo/deviceConfig.vue' /* webpackChunkName: "pages/basicInfo/deviceConfig" */))
const _5234b014 = () => interopDefault(import('../pages/basicInfo/deviceNetwork.vue' /* webpackChunkName: "pages/basicInfo/deviceNetwork" */))
const _fa7ea6cc = () => interopDefault(import('../pages/basicInfo/dorm.vue' /* webpackChunkName: "pages/basicInfo/dorm" */))
const _7aa449d6 = () => interopDefault(import('../pages/basicInfo/dormRoom.vue' /* webpackChunkName: "pages/basicInfo/dormRoom" */))
const _45ef4c02 = () => interopDefault(import('../pages/basicInfo/identification.vue' /* webpackChunkName: "pages/basicInfo/identification" */))
const _40e25942 = () => interopDefault(import('../pages/basicInfo/info.vue' /* webpackChunkName: "pages/basicInfo/info" */))
const _857c8b56 = () => interopDefault(import('../pages/basicInfo/major.vue' /* webpackChunkName: "pages/basicInfo/major" */))
const _ed2a3632 = () => interopDefault(import('../pages/basicInfo/news.vue' /* webpackChunkName: "pages/basicInfo/news" */))
const _949dd128 = () => interopDefault(import('../pages/basicInfo/notice.vue' /* webpackChunkName: "pages/basicInfo/notice" */))
const _23d95b47 = () => interopDefault(import('../pages/basicInfo/organization.vue' /* webpackChunkName: "pages/basicInfo/organization" */))
const _3c438414 = () => interopDefault(import('../pages/basicInfo/padCloud.vue' /* webpackChunkName: "pages/basicInfo/padCloud" */))
const _992297a8 = () => interopDefault(import('../pages/basicInfo/padLocal.vue' /* webpackChunkName: "pages/basicInfo/padLocal" */))
const _29cc9569 = () => interopDefault(import('../pages/basicInfo/person.vue' /* webpackChunkName: "pages/basicInfo/person" */))
const _62d7fd7b = () => interopDefault(import('../pages/basicInfo/strangerRecord.vue' /* webpackChunkName: "pages/basicInfo/strangerRecord" */))
const _47711fd0 = () => interopDefault(import('../pages/basicInfo/stuAuth.vue' /* webpackChunkName: "pages/basicInfo/stuAuth" */))
const _e2ced22e = () => interopDefault(import('../pages/basicInfo/stuCredit.vue' /* webpackChunkName: "pages/basicInfo/stuCredit" */))
const _8fce3652 = () => interopDefault(import('../pages/basicInfo/student.vue' /* webpackChunkName: "pages/basicInfo/student" */))
const _50b98622 = () => interopDefault(import('../pages/basicInfo/stuDoorAccess.vue' /* webpackChunkName: "pages/basicInfo/stuDoorAccess" */))
const _b6f7f366 = () => interopDefault(import('../pages/basicInfo/stuFace.vue' /* webpackChunkName: "pages/basicInfo/stuFace" */))
const _898f5612 = () => interopDefault(import('../pages/basicInfo/stuLeave.vue' /* webpackChunkName: "pages/basicInfo/stuLeave" */))
const _6b86643c = () => interopDefault(import('../pages/basicInfo/stuRelieveRepu.vue' /* webpackChunkName: "pages/basicInfo/stuRelieveRepu" */))
const _6dbb85e8 = () => interopDefault(import('../pages/basicInfo/stuRepu.vue' /* webpackChunkName: "pages/basicInfo/stuRepu" */))
const _e29dfa04 = () => interopDefault(import('../pages/basicInfo/teacher.vue' /* webpackChunkName: "pages/basicInfo/teacher" */))
const _208cb2f8 = () => interopDefault(import('../pages/basicInfo/terAddCard.vue' /* webpackChunkName: "pages/basicInfo/terAddCard" */))
const _64113505 = () => interopDefault(import('../pages/basicInfo/terAuth.vue' /* webpackChunkName: "pages/basicInfo/terAuth" */))
const _5c45254f = () => interopDefault(import('../pages/basicInfo/terDoorAccess.vue' /* webpackChunkName: "pages/basicInfo/terDoorAccess" */))
const _2ca72daa = () => interopDefault(import('../pages/basicInfo/terLeave.vue' /* webpackChunkName: "pages/basicInfo/terLeave" */))
const _753c1210 = () => interopDefault(import('../pages/basicInfo/terminal.vue' /* webpackChunkName: "pages/basicInfo/terminal" */))
const _d5669f92 = () => interopDefault(import('../pages/basicInfo/terTravel.vue' /* webpackChunkName: "pages/basicInfo/terTravel" */))
const _37da2fd2 = () => interopDefault(import('../pages/basicInfo/video.vue' /* webpackChunkName: "pages/basicInfo/video" */))
const _430f4590 = () => interopDefault(import('../pages/basicInfo/webAuth.vue' /* webpackChunkName: "pages/basicInfo/webAuth" */))
const _46cf39fc = () => interopDefault(import('../pages/basicInfo/yearAndTerm.vue' /* webpackChunkName: "pages/basicInfo/yearAndTerm" */))
const _7127165b = () => interopDefault(import('../pages/logInfo/login.vue' /* webpackChunkName: "pages/logInfo/login" */))
const _73346023 = () => interopDefault(import('../pages/logInfo/opr.vue' /* webpackChunkName: "pages/logInfo/opr" */))
const _4a895283 = () => interopDefault(import('../pages/test/test1.vue' /* webpackChunkName: "pages/test/test1" */))
const _4a976a04 = () => interopDefault(import('../pages/test/test2.vue' /* webpackChunkName: "pages/test/test2" */))
const _4aa58185 = () => interopDefault(import('../pages/test/test3.vue' /* webpackChunkName: "pages/test/test3" */))
const _4ab39906 = () => interopDefault(import('../pages/test/test4.vue' /* webpackChunkName: "pages/test/test4" */))
const _6ddc2009 = () => interopDefault(import('../pages/appletInfo/app/appCreate.vue' /* webpackChunkName: "pages/appletInfo/app/appCreate" */))
const _388480f7 = () => interopDefault(import('../pages/appletInfo/app/appData.vue' /* webpackChunkName: "pages/appletInfo/app/appData" */))
const _011e81c5 = () => interopDefault(import('../pages/appletInfo/app/appDataBak.vue' /* webpackChunkName: "pages/appletInfo/app/appDataBak" */))
const _9e2a801c = () => interopDefault(import('../pages/appletInfo/app/appManage.vue' /* webpackChunkName: "pages/appletInfo/app/appManage" */))
const _10929347 = () => interopDefault(import('../pages/appletInfo/app/appTemplate.vue' /* webpackChunkName: "pages/appletInfo/app/appTemplate" */))
const _b4dc4ef2 = () => interopDefault(import('../pages/appletInfo/app/appType.vue' /* webpackChunkName: "pages/appletInfo/app/appType" */))
const _7fb03fd5 = () => interopDefault(import('../pages/appletInfo/app/formPrint.vue' /* webpackChunkName: "pages/appletInfo/app/formPrint" */))
const _5cc30ea4 = () => interopDefault(import('../pages/appletInfo/flow/flowManage.vue' /* webpackChunkName: "pages/appletInfo/flow/flowManage" */))
const _b7390414 = () => interopDefault(import('../pages/appletInfo/flow/roleManage.vue' /* webpackChunkName: "pages/appletInfo/flow/roleManage" */))
const _30b24cb3 = () => interopDefault(import('../pages/appletInfo/noti/business.vue' /* webpackChunkName: "pages/appletInfo/noti/business" */))
const _1c23e410 = () => interopDefault(import('../pages/appletInfo/noti/feedback.vue' /* webpackChunkName: "pages/appletInfo/noti/feedback" */))
const _2ceee2de = () => interopDefault(import('../pages/appletInfo/noti/notification.vue' /* webpackChunkName: "pages/appletInfo/noti/notification" */))
const _25e4ae7d = () => interopDefault(import('../pages/appletInfo/staticCenter/formStaticManage.vue' /* webpackChunkName: "pages/appletInfo/staticCenter/formStaticManage" */))
const _16742e78 = () => interopDefault(import('../pages/appletInfo/staticCenter/myFormStatic.vue' /* webpackChunkName: "pages/appletInfo/staticCenter/myFormStatic" */))
const _3becaaa8 = () => interopDefault(import('../pages/attendanceInfo/administration/faceRecord.vue' /* webpackChunkName: "pages/attendanceInfo/administration/faceRecord" */))
const _0933525b = () => interopDefault(import('../pages/attendanceInfo/administration/leaveStatic.vue' /* webpackChunkName: "pages/attendanceInfo/administration/leaveStatic" */))
const _15aa4d2a = () => interopDefault(import('../pages/attendanceInfo/administration/record.vue' /* webpackChunkName: "pages/attendanceInfo/administration/record" */))
const _c1f7617c = () => interopDefault(import('../pages/attendanceInfo/administration/search.vue' /* webpackChunkName: "pages/attendanceInfo/administration/search" */))
const _5d012e26 = () => interopDefault(import('../pages/attendanceInfo/administration/setting.vue' /* webpackChunkName: "pages/attendanceInfo/administration/setting" */))
const _7a6c35f0 = () => interopDefault(import('../pages/attendanceInfo/administration/static.vue' /* webpackChunkName: "pages/attendanceInfo/administration/static" */))
const _0d029540 = () => interopDefault(import('../pages/attendanceInfo/classAttend/analysis.vue' /* webpackChunkName: "pages/attendanceInfo/classAttend/analysis" */))
const _88d6f8dc = () => interopDefault(import('../pages/attendanceInfo/classAttend/faceRecord.vue' /* webpackChunkName: "pages/attendanceInfo/classAttend/faceRecord" */))
const _2da33dfc = () => interopDefault(import('../pages/attendanceInfo/classAttend/now.vue' /* webpackChunkName: "pages/attendanceInfo/classAttend/now" */))
const _f4fda5a8 = () => interopDefault(import('../pages/attendanceInfo/classAttend/search.vue' /* webpackChunkName: "pages/attendanceInfo/classAttend/search" */))
const _46200d7c = () => interopDefault(import('../pages/attendanceInfo/classAttend/setting.vue' /* webpackChunkName: "pages/attendanceInfo/classAttend/setting" */))
const _bb183f96 = () => interopDefault(import('../pages/attendanceInfo/classAttend/studentStatic.vue' /* webpackChunkName: "pages/attendanceInfo/classAttend/studentStatic" */))
const _3110851c = () => interopDefault(import('../pages/attendanceInfo/classAttend/teacherStatic.vue' /* webpackChunkName: "pages/attendanceInfo/classAttend/teacherStatic" */))
const _7ce037d4 = () => interopDefault(import('../pages/attendanceInfo/dormAttend/analysis.vue' /* webpackChunkName: "pages/attendanceInfo/dormAttend/analysis" */))
const _26c18df4 = () => interopDefault(import('../pages/attendanceInfo/dormAttend/faceRecord.vue' /* webpackChunkName: "pages/attendanceInfo/dormAttend/faceRecord" */))
const _17da260e = () => interopDefault(import('../pages/attendanceInfo/dormAttend/now.vue' /* webpackChunkName: "pages/attendanceInfo/dormAttend/now" */))
const _55fdafd0 = () => interopDefault(import('../pages/attendanceInfo/dormAttend/otherSetting.vue' /* webpackChunkName: "pages/attendanceInfo/dormAttend/otherSetting" */))
const _a6ee86c0 = () => interopDefault(import('../pages/attendanceInfo/dormAttend/search.vue' /* webpackChunkName: "pages/attendanceInfo/dormAttend/search" */))
const _000a6c88 = () => interopDefault(import('../pages/attendanceInfo/dormAttend/setting.vue' /* webpackChunkName: "pages/attendanceInfo/dormAttend/setting" */))
const _5f635b34 = () => interopDefault(import('../pages/attendanceInfo/dormAttend/static.vue' /* webpackChunkName: "pages/attendanceInfo/dormAttend/static" */))
const _12c17174 = () => interopDefault(import('../pages/attendanceInfo/leaveManage/setting.vue' /* webpackChunkName: "pages/attendanceInfo/leaveManage/setting" */))
const _c317b030 = () => interopDefault(import('../pages/attendanceInfo/leaveManage/static.vue' /* webpackChunkName: "pages/attendanceInfo/leaveManage/static" */))
const _0c1b5a4c = () => interopDefault(import('../pages/attendanceInfo/meetAttend/meetting.vue' /* webpackChunkName: "pages/attendanceInfo/meetAttend/meetting" */))
const _3526f11c = () => interopDefault(import('../pages/auditInfo/stuApply/doorApply.vue' /* webpackChunkName: "pages/auditInfo/stuApply/doorApply" */))
const _176f2cba = () => interopDefault(import('../pages/auditInfo/stuApply/faceApply.vue' /* webpackChunkName: "pages/auditInfo/stuApply/faceApply" */))
const _50fdd4d5 = () => interopDefault(import('../pages/auditInfo/stuApply/leaveApply.vue' /* webpackChunkName: "pages/auditInfo/stuApply/leaveApply" */))
const _40a0c3a0 = () => interopDefault(import('../pages/auditInfo/stuApply/relieveRepuApply.vue' /* webpackChunkName: "pages/auditInfo/stuApply/relieveRepuApply" */))
const _156772e8 = () => interopDefault(import('../pages/auditInfo/stuApply/repuApply.vue' /* webpackChunkName: "pages/auditInfo/stuApply/repuApply" */))
const _25bb8d3a = () => interopDefault(import('../pages/auditInfo/stuApply/resultApply.vue' /* webpackChunkName: "pages/auditInfo/stuApply/resultApply" */))
const _8da6e94c = () => interopDefault(import('../pages/auditInfo/stuApply/scoreApply.vue' /* webpackChunkName: "pages/auditInfo/stuApply/scoreApply" */))
const _0fd34736 = () => interopDefault(import('../pages/auditInfo/terApply/doorApply.vue' /* webpackChunkName: "pages/auditInfo/terApply/doorApply" */))
const _d8e2c37c = () => interopDefault(import('../pages/auditInfo/terApply/leaveApply.vue' /* webpackChunkName: "pages/auditInfo/terApply/leaveApply" */))
const _2ca50de2 = () => interopDefault(import('../pages/dataInfo/dataView/myScreen.vue' /* webpackChunkName: "pages/dataInfo/dataView/myScreen" */))
const _5f069fca = () => interopDefault(import('../pages/dataInfo/dataView/screenManage.vue' /* webpackChunkName: "pages/dataInfo/dataView/screenManage" */))
const _46938eae = () => interopDefault(import('../pages/dataInfo/stuData/stuAnalysis.vue' /* webpackChunkName: "pages/dataInfo/stuData/stuAnalysis" */))
const _2a17c0cd = () => interopDefault(import('../pages/dataInfo/stuData/stuPic.vue' /* webpackChunkName: "pages/dataInfo/stuData/stuPic" */))
const _a162ecda = () => interopDefault(import('../pages/dataInfo/stuData/stuQuanti.vue' /* webpackChunkName: "pages/dataInfo/stuData/stuQuanti" */))
const _434423ff = () => interopDefault(import('../pages/dataInfo/stuData/stuStatus.vue' /* webpackChunkName: "pages/dataInfo/stuData/stuStatus" */))
const _97868d3e = () => interopDefault(import('../pages/logisticsInfo/doorAccess/doorAccessRecord.vue' /* webpackChunkName: "pages/logisticsInfo/doorAccess/doorAccessRecord" */))
const _23bc02f1 = () => interopDefault(import('../pages/logisticsInfo/doorAccess/doorManage.vue' /* webpackChunkName: "pages/logisticsInfo/doorAccess/doorManage" */))
const _0ec31781 = () => interopDefault(import('../pages/logisticsInfo/doorAccess/exception.vue' /* webpackChunkName: "pages/logisticsInfo/doorAccess/exception" */))
const _71382fc6 = () => interopDefault(import('../pages/logisticsInfo/doorAccess/passStatic.vue' /* webpackChunkName: "pages/logisticsInfo/doorAccess/passStatic" */))
const _7936280d = () => interopDefault(import('../pages/logisticsInfo/doorAccess/permission.vue' /* webpackChunkName: "pages/logisticsInfo/doorAccess/permission" */))
const _0690ca04 = () => interopDefault(import('../pages/logisticsInfo/doorAccess/remote.vue' /* webpackChunkName: "pages/logisticsInfo/doorAccess/remote" */))
const _607fa8fd = () => interopDefault(import('../pages/logisticsInfo/doorAccess/settimeout.vue' /* webpackChunkName: "pages/logisticsInfo/doorAccess/settimeout" */))
const _24b3e88d = () => interopDefault(import('../pages/logisticsInfo/onecard/billList.vue' /* webpackChunkName: "pages/logisticsInfo/onecard/billList" */))
const _32344966 = () => interopDefault(import('../pages/logisticsInfo/onecard/collection.vue' /* webpackChunkName: "pages/logisticsInfo/onecard/collection" */))
const _2876942a = () => interopDefault(import('../pages/logisticsInfo/onecard/collectionManage.vue' /* webpackChunkName: "pages/logisticsInfo/onecard/collectionManage" */))
const _55facb90 = () => interopDefault(import('../pages/logisticsInfo/onecard/merchant.vue' /* webpackChunkName: "pages/logisticsInfo/onecard/merchant" */))
const _f19391cc = () => interopDefault(import('../pages/logisticsInfo/onecard/onecardPay.vue' /* webpackChunkName: "pages/logisticsInfo/onecard/onecardPay" */))
const _d2ff932c = () => interopDefault(import('../pages/logisticsInfo/onecard/stuOnecard.vue' /* webpackChunkName: "pages/logisticsInfo/onecard/stuOnecard" */))
const _679bae5d = () => interopDefault(import('../pages/logisticsInfo/onecard/terOnecard.vue' /* webpackChunkName: "pages/logisticsInfo/onecard/terOnecard" */))
const _a636efbc = () => interopDefault(import('../pages/newStudent/data/dormData.vue' /* webpackChunkName: "pages/newStudent/data/dormData" */))
const _b7988fe4 = () => interopDefault(import('../pages/newStudent/data/flowStatic.vue' /* webpackChunkName: "pages/newStudent/data/flowStatic" */))
const _7a195fa7 = () => interopDefault(import('../pages/newStudent/data/linkCustomData.vue' /* webpackChunkName: "pages/newStudent/data/linkCustomData" */))
const _5cc1fbe0 = () => interopDefault(import('../pages/newStudent/data/payData.vue' /* webpackChunkName: "pages/newStudent/data/payData" */))
const _4cda2e38 = () => interopDefault(import('../pages/newStudent/data/pickUpData.vue' /* webpackChunkName: "pages/newStudent/data/pickUpData" */))
const _1188b8bf = () => interopDefault(import('../pages/newStudent/data/registerData.vue' /* webpackChunkName: "pages/newStudent/data/registerData" */))
const _8fe4ca4e = () => interopDefault(import('../pages/newStudent/data/signData.vue' /* webpackChunkName: "pages/newStudent/data/signData" */))
const _51532446 = () => interopDefault(import('../pages/newStudent/data/signStatic.vue' /* webpackChunkName: "pages/newStudent/data/signStatic" */))
const _43786374 = () => interopDefault(import('../pages/newStudent/log/log.vue' /* webpackChunkName: "pages/newStudent/log/log" */))
const _0c0b77e7 = () => interopDefault(import('../pages/newStudent/manage/admissionManage.vue' /* webpackChunkName: "pages/newStudent/manage/admissionManage" */))
const _a6fb01ac = () => interopDefault(import('../pages/newStudent/manage/flowManage.vue' /* webpackChunkName: "pages/newStudent/manage/flowManage" */))
const _6c0229c8 = () => interopDefault(import('../pages/newStudent/manage/linkDormManage.vue' /* webpackChunkName: "pages/newStudent/manage/linkDormManage" */))
const _29c21ef6 = () => interopDefault(import('../pages/newStudent/manage/linkManage.vue' /* webpackChunkName: "pages/newStudent/manage/linkManage" */))
const _2d4d482c = () => interopDefault(import('../pages/newStudent/manage/linkPayManage.vue' /* webpackChunkName: "pages/newStudent/manage/linkPayManage" */))
const _4f4de390 = () => interopDefault(import('../pages/newStudent/manage/linkStationManage.vue' /* webpackChunkName: "pages/newStudent/manage/linkStationManage" */))
const _e484fdf2 = () => interopDefault(import('../pages/newStudent/manage/newSetting.vue' /* webpackChunkName: "pages/newStudent/manage/newSetting" */))
const _71627526 = () => interopDefault(import('../pages/studentInfo/class/classChecked.vue' /* webpackChunkName: "pages/studentInfo/class/classChecked" */))
const _5efa961d = () => interopDefault(import('../pages/studentInfo/class/object.vue' /* webpackChunkName: "pages/studentInfo/class/object" */))
const _4b31862f = () => interopDefault(import('../pages/studentInfo/class/record.vue' /* webpackChunkName: "pages/studentInfo/class/record" */))
const _705fcc3c = () => interopDefault(import('../pages/studentInfo/class/setting.vue' /* webpackChunkName: "pages/studentInfo/class/setting" */))
const _4b223486 = () => interopDefault(import('../pages/studentInfo/credit/creditApply.vue' /* webpackChunkName: "pages/studentInfo/credit/creditApply" */))
const _0fdce486 = () => interopDefault(import('../pages/studentInfo/credit/creditStatic.vue' /* webpackChunkName: "pages/studentInfo/credit/creditStatic" */))
const _c96c6384 = () => interopDefault(import('../pages/studentInfo/credit/object.vue' /* webpackChunkName: "pages/studentInfo/credit/object" */))
const _1c0543b6 = () => interopDefault(import('../pages/studentInfo/credit/scope.vue' /* webpackChunkName: "pages/studentInfo/credit/scope" */))
const _472d097c = () => interopDefault(import('../pages/studentInfo/dorm/change.vue' /* webpackChunkName: "pages/studentInfo/dorm/change" */))
const _2ea233aa = () => interopDefault(import('../pages/studentInfo/dorm/clear.vue' /* webpackChunkName: "pages/studentInfo/dorm/clear" */))
const _f02f31d0 = () => interopDefault(import('../pages/studentInfo/dorm/dorm.vue' /* webpackChunkName: "pages/studentInfo/dorm/dorm" */))
const _43951465 = () => interopDefault(import('../pages/studentInfo/dorm/online.vue' /* webpackChunkName: "pages/studentInfo/dorm/online" */))
const _0ebaab2e = () => interopDefault(import('../pages/studentInfo/dorm/setting.vue' /* webpackChunkName: "pages/studentInfo/dorm/setting" */))
const _220360d8 = () => interopDefault(import('../pages/studentInfo/homework/homework.vue' /* webpackChunkName: "pages/studentInfo/homework/homework" */))
const _52af0427 = () => interopDefault(import('../pages/studentInfo/homework/object.vue' /* webpackChunkName: "pages/studentInfo/homework/object" */))
const _3ee5f439 = () => interopDefault(import('../pages/studentInfo/homework/record.vue' /* webpackChunkName: "pages/studentInfo/homework/record" */))
const _4aa96d18 = () => interopDefault(import('../pages/studentInfo/homework/setting.vue' /* webpackChunkName: "pages/studentInfo/homework/setting" */))
const _6af727c8 = () => interopDefault(import('../pages/studentInfo/leave/leave.vue' /* webpackChunkName: "pages/studentInfo/leave/leave" */))
const _e5fc0ab8 = () => interopDefault(import('../pages/studentInfo/leave/manage.vue' /* webpackChunkName: "pages/studentInfo/leave/manage" */))
const _0d3ad8a1 = () => interopDefault(import('../pages/studentInfo/leave/setting.vue' /* webpackChunkName: "pages/studentInfo/leave/setting" */))
const _223433da = () => interopDefault(import('../pages/studentInfo/rp/level.vue' /* webpackChunkName: "pages/studentInfo/rp/level" */))
const _646c56a6 = () => interopDefault(import('../pages/studentInfo/rp/rpApply.vue' /* webpackChunkName: "pages/studentInfo/rp/rpApply" */))
const _89d4fc46 = () => interopDefault(import('../pages/studentInfo/rp/rpManage.vue' /* webpackChunkName: "pages/studentInfo/rp/rpManage" */))
const _1fd70666 = () => interopDefault(import('../pages/studentInfo/rp/rpStatic.vue' /* webpackChunkName: "pages/studentInfo/rp/rpStatic" */))
const _1dbcab42 = () => interopDefault(import('../pages/studentInfo/student/account.vue' /* webpackChunkName: "pages/studentInfo/student/account" */))
const _4cfd6f66 = () => interopDefault(import('../pages/studentInfo/student/class.vue' /* webpackChunkName: "pages/studentInfo/student/class" */))
const _21e57fc1 = () => interopDefault(import('../pages/studentInfo/student/dorm.vue' /* webpackChunkName: "pages/studentInfo/student/dorm" */))
const _4407a31c = () => interopDefault(import('../pages/studentInfo/student/empower.vue' /* webpackChunkName: "pages/studentInfo/student/empower" */))
const _1cb04d02 = () => interopDefault(import('../pages/studentInfo/student/form.vue' /* webpackChunkName: "pages/studentInfo/student/form" */))
const _017e9640 = () => interopDefault(import('../pages/studentInfo/student/manage.vue' /* webpackChunkName: "pages/studentInfo/student/manage" */))
const _449825a2 = () => interopDefault(import('../pages/studentInfo/student/report.vue' /* webpackChunkName: "pages/studentInfo/student/report" */))
const _795dd8ed = () => interopDefault(import('../pages/studentInfo/student/status.vue' /* webpackChunkName: "pages/studentInfo/student/status" */))
const _cac110de = () => interopDefault(import('../pages/studentInfo/student/stuAuth.vue' /* webpackChunkName: "pages/studentInfo/student/stuAuth" */))
const _3facdc12 = () => interopDefault(import('../pages/studentInfo/student/stuStarngerRecord.vue' /* webpackChunkName: "pages/studentInfo/student/stuStarngerRecord" */))
const _651efd9e = () => interopDefault(import('../pages/studentInfo/student/warning.vue' /* webpackChunkName: "pages/studentInfo/student/warning" */))
const _417507b7 = () => interopDefault(import('../pages/teachInfo/exam/examManage.vue' /* webpackChunkName: "pages/teachInfo/exam/examManage" */))
const _64d5b9fb = () => interopDefault(import('../pages/teachInfo/exam/examPlan.vue' /* webpackChunkName: "pages/teachInfo/exam/examPlan" */))
const _f880ed26 = () => interopDefault(import('../pages/teachInfo/exam/performance.vue' /* webpackChunkName: "pages/teachInfo/exam/performance" */))
const _7abe14b2 = () => interopDefault(import('../pages/teachInfo/teach/courseManage.vue' /* webpackChunkName: "pages/teachInfo/teach/courseManage" */))
const _91f7382a = () => interopDefault(import('../pages/teachInfo/teach/coursePlan.vue' /* webpackChunkName: "pages/teachInfo/teach/coursePlan" */))
const _10c79fea = () => interopDefault(import('../pages/teachInfo/teach/myTable.vue' /* webpackChunkName: "pages/teachInfo/teach/myTable" */))
const _209d99e2 = () => interopDefault(import('../pages/teachInfo/teach/searchTable.vue' /* webpackChunkName: "pages/teachInfo/teach/searchTable" */))
const _6a1f54f2 = () => interopDefault(import('../pages/teachInfo/teach/teachPlan.vue' /* webpackChunkName: "pages/teachInfo/teach/teachPlan" */))
const _d678573a = () => interopDefault(import('../pages/teachInfo/teacher/account.vue' /* webpackChunkName: "pages/teachInfo/teacher/account" */))
const _c2b82a3c = () => interopDefault(import('../pages/teachInfo/teacher/auth.vue' /* webpackChunkName: "pages/teachInfo/teacher/auth" */))
const _55035793 = () => interopDefault(import('../pages/teachInfo/teacher/empower.vue' /* webpackChunkName: "pages/teachInfo/teacher/empower" */))
const _56059653 = () => interopDefault(import('../pages/teachInfo/teacher/leaveSetting.vue' /* webpackChunkName: "pages/teachInfo/teacher/leaveSetting" */))
const _6d6a8f46 = () => interopDefault(import('../pages/teachInfo/teacher/other.vue' /* webpackChunkName: "pages/teachInfo/teacher/other" */))
const _4684c5b0 = () => interopDefault(import('../pages/teachInfo/teacher/stranger.vue' /* webpackChunkName: "pages/teachInfo/teacher/stranger" */))
const _b0a02bfe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/indexBak",
    component: _2459f70a,
    name: "indexBak"
  }, {
    path: "/login",
    component: _71578d18,
    name: "login"
  }, {
    path: "/basicInfo/appAuth",
    component: _a49221f6,
    name: "basicInfo-appAuth"
  }, {
    path: "/basicInfo/build",
    component: _411e688a,
    name: "basicInfo-build"
  }, {
    path: "/basicInfo/buildSet",
    component: _79c632a8,
    name: "basicInfo-buildSet"
  }, {
    path: "/basicInfo/circular",
    component: _1f26869a,
    name: "basicInfo-circular"
  }, {
    path: "/basicInfo/class",
    component: _d7e892d8,
    name: "basicInfo-class"
  }, {
    path: "/basicInfo/classRoom",
    component: _79e14fe2,
    name: "basicInfo-classRoom"
  }, {
    path: "/basicInfo/classRoomBak",
    component: _541b33ad,
    name: "basicInfo-classRoomBak"
  }, {
    path: "/basicInfo/college",
    component: _bf8a939a,
    name: "basicInfo-college"
  }, {
    path: "/basicInfo/deptInfo",
    component: _2bfac8a7,
    name: "basicInfo-deptInfo"
  }, {
    path: "/basicInfo/deviceArea",
    component: _7188dd17,
    name: "basicInfo-deviceArea"
  }, {
    path: "/basicInfo/deviceConfig",
    component: _71afd8cc,
    name: "basicInfo-deviceConfig"
  }, {
    path: "/basicInfo/deviceNetwork",
    component: _5234b014,
    name: "basicInfo-deviceNetwork"
  }, {
    path: "/basicInfo/dorm",
    component: _fa7ea6cc,
    name: "basicInfo-dorm"
  }, {
    path: "/basicInfo/dormRoom",
    component: _7aa449d6,
    name: "basicInfo-dormRoom"
  }, {
    path: "/basicInfo/identification",
    component: _45ef4c02,
    name: "basicInfo-identification"
  }, {
    path: "/basicInfo/info",
    component: _40e25942,
    name: "basicInfo-info"
  }, {
    path: "/basicInfo/major",
    component: _857c8b56,
    name: "basicInfo-major"
  }, {
    path: "/basicInfo/news",
    component: _ed2a3632,
    name: "basicInfo-news"
  }, {
    path: "/basicInfo/notice",
    component: _949dd128,
    name: "basicInfo-notice"
  }, {
    path: "/basicInfo/organization",
    component: _23d95b47,
    name: "basicInfo-organization"
  }, {
    path: "/basicInfo/padCloud",
    component: _3c438414,
    name: "basicInfo-padCloud"
  }, {
    path: "/basicInfo/padLocal",
    component: _992297a8,
    name: "basicInfo-padLocal"
  }, {
    path: "/basicInfo/person",
    component: _29cc9569,
    name: "basicInfo-person"
  }, {
    path: "/basicInfo/strangerRecord",
    component: _62d7fd7b,
    name: "basicInfo-strangerRecord"
  }, {
    path: "/basicInfo/stuAuth",
    component: _47711fd0,
    name: "basicInfo-stuAuth"
  }, {
    path: "/basicInfo/stuCredit",
    component: _e2ced22e,
    name: "basicInfo-stuCredit"
  }, {
    path: "/basicInfo/student",
    component: _8fce3652,
    name: "basicInfo-student"
  }, {
    path: "/basicInfo/stuDoorAccess",
    component: _50b98622,
    name: "basicInfo-stuDoorAccess"
  }, {
    path: "/basicInfo/stuFace",
    component: _b6f7f366,
    name: "basicInfo-stuFace"
  }, {
    path: "/basicInfo/stuLeave",
    component: _898f5612,
    name: "basicInfo-stuLeave"
  }, {
    path: "/basicInfo/stuRelieveRepu",
    component: _6b86643c,
    name: "basicInfo-stuRelieveRepu"
  }, {
    path: "/basicInfo/stuRepu",
    component: _6dbb85e8,
    name: "basicInfo-stuRepu"
  }, {
    path: "/basicInfo/teacher",
    component: _e29dfa04,
    name: "basicInfo-teacher"
  }, {
    path: "/basicInfo/terAddCard",
    component: _208cb2f8,
    name: "basicInfo-terAddCard"
  }, {
    path: "/basicInfo/terAuth",
    component: _64113505,
    name: "basicInfo-terAuth"
  }, {
    path: "/basicInfo/terDoorAccess",
    component: _5c45254f,
    name: "basicInfo-terDoorAccess"
  }, {
    path: "/basicInfo/terLeave",
    component: _2ca72daa,
    name: "basicInfo-terLeave"
  }, {
    path: "/basicInfo/terminal",
    component: _753c1210,
    name: "basicInfo-terminal"
  }, {
    path: "/basicInfo/terTravel",
    component: _d5669f92,
    name: "basicInfo-terTravel"
  }, {
    path: "/basicInfo/video",
    component: _37da2fd2,
    name: "basicInfo-video"
  }, {
    path: "/basicInfo/webAuth",
    component: _430f4590,
    name: "basicInfo-webAuth"
  }, {
    path: "/basicInfo/yearAndTerm",
    component: _46cf39fc,
    name: "basicInfo-yearAndTerm"
  }, {
    path: "/logInfo/login",
    component: _7127165b,
    name: "logInfo-login"
  }, {
    path: "/logInfo/opr",
    component: _73346023,
    name: "logInfo-opr"
  }, {
    path: "/test/test1",
    component: _4a895283,
    name: "test-test1"
  }, {
    path: "/test/test2",
    component: _4a976a04,
    name: "test-test2"
  }, {
    path: "/test/test3",
    component: _4aa58185,
    name: "test-test3"
  }, {
    path: "/test/test4",
    component: _4ab39906,
    name: "test-test4"
  }, {
    path: "/appletInfo/app/appCreate",
    component: _6ddc2009,
    name: "appletInfo-app-appCreate"
  }, {
    path: "/appletInfo/app/appData",
    component: _388480f7,
    name: "appletInfo-app-appData"
  }, {
    path: "/appletInfo/app/appDataBak",
    component: _011e81c5,
    name: "appletInfo-app-appDataBak"
  }, {
    path: "/appletInfo/app/appManage",
    component: _9e2a801c,
    name: "appletInfo-app-appManage"
  }, {
    path: "/appletInfo/app/appTemplate",
    component: _10929347,
    name: "appletInfo-app-appTemplate"
  }, {
    path: "/appletInfo/app/appType",
    component: _b4dc4ef2,
    name: "appletInfo-app-appType"
  }, {
    path: "/appletInfo/app/formPrint",
    component: _7fb03fd5,
    name: "appletInfo-app-formPrint"
  }, {
    path: "/appletInfo/flow/flowManage",
    component: _5cc30ea4,
    name: "appletInfo-flow-flowManage"
  }, {
    path: "/appletInfo/flow/roleManage",
    component: _b7390414,
    name: "appletInfo-flow-roleManage"
  }, {
    path: "/appletInfo/noti/business",
    component: _30b24cb3,
    name: "appletInfo-noti-business"
  }, {
    path: "/appletInfo/noti/feedback",
    component: _1c23e410,
    name: "appletInfo-noti-feedback"
  }, {
    path: "/appletInfo/noti/notification",
    component: _2ceee2de,
    name: "appletInfo-noti-notification"
  }, {
    path: "/appletInfo/staticCenter/formStaticManage",
    component: _25e4ae7d,
    name: "appletInfo-staticCenter-formStaticManage"
  }, {
    path: "/appletInfo/staticCenter/myFormStatic",
    component: _16742e78,
    name: "appletInfo-staticCenter-myFormStatic"
  }, {
    path: "/attendanceInfo/administration/faceRecord",
    component: _3becaaa8,
    name: "attendanceInfo-administration-faceRecord"
  }, {
    path: "/attendanceInfo/administration/leaveStatic",
    component: _0933525b,
    name: "attendanceInfo-administration-leaveStatic"
  }, {
    path: "/attendanceInfo/administration/record",
    component: _15aa4d2a,
    name: "attendanceInfo-administration-record"
  }, {
    path: "/attendanceInfo/administration/search",
    component: _c1f7617c,
    name: "attendanceInfo-administration-search"
  }, {
    path: "/attendanceInfo/administration/setting",
    component: _5d012e26,
    name: "attendanceInfo-administration-setting"
  }, {
    path: "/attendanceInfo/administration/static",
    component: _7a6c35f0,
    name: "attendanceInfo-administration-static"
  }, {
    path: "/attendanceInfo/classAttend/analysis",
    component: _0d029540,
    name: "attendanceInfo-classAttend-analysis"
  }, {
    path: "/attendanceInfo/classAttend/faceRecord",
    component: _88d6f8dc,
    name: "attendanceInfo-classAttend-faceRecord"
  }, {
    path: "/attendanceInfo/classAttend/now",
    component: _2da33dfc,
    name: "attendanceInfo-classAttend-now"
  }, {
    path: "/attendanceInfo/classAttend/search",
    component: _f4fda5a8,
    name: "attendanceInfo-classAttend-search"
  }, {
    path: "/attendanceInfo/classAttend/setting",
    component: _46200d7c,
    name: "attendanceInfo-classAttend-setting"
  }, {
    path: "/attendanceInfo/classAttend/studentStatic",
    component: _bb183f96,
    name: "attendanceInfo-classAttend-studentStatic"
  }, {
    path: "/attendanceInfo/classAttend/teacherStatic",
    component: _3110851c,
    name: "attendanceInfo-classAttend-teacherStatic"
  }, {
    path: "/attendanceInfo/dormAttend/analysis",
    component: _7ce037d4,
    name: "attendanceInfo-dormAttend-analysis"
  }, {
    path: "/attendanceInfo/dormAttend/faceRecord",
    component: _26c18df4,
    name: "attendanceInfo-dormAttend-faceRecord"
  }, {
    path: "/attendanceInfo/dormAttend/now",
    component: _17da260e,
    name: "attendanceInfo-dormAttend-now"
  }, {
    path: "/attendanceInfo/dormAttend/otherSetting",
    component: _55fdafd0,
    name: "attendanceInfo-dormAttend-otherSetting"
  }, {
    path: "/attendanceInfo/dormAttend/search",
    component: _a6ee86c0,
    name: "attendanceInfo-dormAttend-search"
  }, {
    path: "/attendanceInfo/dormAttend/setting",
    component: _000a6c88,
    name: "attendanceInfo-dormAttend-setting"
  }, {
    path: "/attendanceInfo/dormAttend/static",
    component: _5f635b34,
    name: "attendanceInfo-dormAttend-static"
  }, {
    path: "/attendanceInfo/leaveManage/setting",
    component: _12c17174,
    name: "attendanceInfo-leaveManage-setting"
  }, {
    path: "/attendanceInfo/leaveManage/static",
    component: _c317b030,
    name: "attendanceInfo-leaveManage-static"
  }, {
    path: "/attendanceInfo/meetAttend/meetting",
    component: _0c1b5a4c,
    name: "attendanceInfo-meetAttend-meetting"
  }, {
    path: "/auditInfo/stuApply/doorApply",
    component: _3526f11c,
    name: "auditInfo-stuApply-doorApply"
  }, {
    path: "/auditInfo/stuApply/faceApply",
    component: _176f2cba,
    name: "auditInfo-stuApply-faceApply"
  }, {
    path: "/auditInfo/stuApply/leaveApply",
    component: _50fdd4d5,
    name: "auditInfo-stuApply-leaveApply"
  }, {
    path: "/auditInfo/stuApply/relieveRepuApply",
    component: _40a0c3a0,
    name: "auditInfo-stuApply-relieveRepuApply"
  }, {
    path: "/auditInfo/stuApply/repuApply",
    component: _156772e8,
    name: "auditInfo-stuApply-repuApply"
  }, {
    path: "/auditInfo/stuApply/resultApply",
    component: _25bb8d3a,
    name: "auditInfo-stuApply-resultApply"
  }, {
    path: "/auditInfo/stuApply/scoreApply",
    component: _8da6e94c,
    name: "auditInfo-stuApply-scoreApply"
  }, {
    path: "/auditInfo/terApply/doorApply",
    component: _0fd34736,
    name: "auditInfo-terApply-doorApply"
  }, {
    path: "/auditInfo/terApply/leaveApply",
    component: _d8e2c37c,
    name: "auditInfo-terApply-leaveApply"
  }, {
    path: "/dataInfo/dataView/myScreen",
    component: _2ca50de2,
    name: "dataInfo-dataView-myScreen"
  }, {
    path: "/dataInfo/dataView/screenManage",
    component: _5f069fca,
    name: "dataInfo-dataView-screenManage"
  }, {
    path: "/dataInfo/stuData/stuAnalysis",
    component: _46938eae,
    name: "dataInfo-stuData-stuAnalysis"
  }, {
    path: "/dataInfo/stuData/stuPic",
    component: _2a17c0cd,
    name: "dataInfo-stuData-stuPic"
  }, {
    path: "/dataInfo/stuData/stuQuanti",
    component: _a162ecda,
    name: "dataInfo-stuData-stuQuanti"
  }, {
    path: "/dataInfo/stuData/stuStatus",
    component: _434423ff,
    name: "dataInfo-stuData-stuStatus"
  }, {
    path: "/logisticsInfo/doorAccess/doorAccessRecord",
    component: _97868d3e,
    name: "logisticsInfo-doorAccess-doorAccessRecord"
  }, {
    path: "/logisticsInfo/doorAccess/doorManage",
    component: _23bc02f1,
    name: "logisticsInfo-doorAccess-doorManage"
  }, {
    path: "/logisticsInfo/doorAccess/exception",
    component: _0ec31781,
    name: "logisticsInfo-doorAccess-exception"
  }, {
    path: "/logisticsInfo/doorAccess/passStatic",
    component: _71382fc6,
    name: "logisticsInfo-doorAccess-passStatic"
  }, {
    path: "/logisticsInfo/doorAccess/permission",
    component: _7936280d,
    name: "logisticsInfo-doorAccess-permission"
  }, {
    path: "/logisticsInfo/doorAccess/remote",
    component: _0690ca04,
    name: "logisticsInfo-doorAccess-remote"
  }, {
    path: "/logisticsInfo/doorAccess/settimeout",
    component: _607fa8fd,
    name: "logisticsInfo-doorAccess-settimeout"
  }, {
    path: "/logisticsInfo/onecard/billList",
    component: _24b3e88d,
    name: "logisticsInfo-onecard-billList"
  }, {
    path: "/logisticsInfo/onecard/collection",
    component: _32344966,
    name: "logisticsInfo-onecard-collection"
  }, {
    path: "/logisticsInfo/onecard/collectionManage",
    component: _2876942a,
    name: "logisticsInfo-onecard-collectionManage"
  }, {
    path: "/logisticsInfo/onecard/merchant",
    component: _55facb90,
    name: "logisticsInfo-onecard-merchant"
  }, {
    path: "/logisticsInfo/onecard/onecardPay",
    component: _f19391cc,
    name: "logisticsInfo-onecard-onecardPay"
  }, {
    path: "/logisticsInfo/onecard/stuOnecard",
    component: _d2ff932c,
    name: "logisticsInfo-onecard-stuOnecard"
  }, {
    path: "/logisticsInfo/onecard/terOnecard",
    component: _679bae5d,
    name: "logisticsInfo-onecard-terOnecard"
  }, {
    path: "/newStudent/data/dormData",
    component: _a636efbc,
    name: "newStudent-data-dormData"
  }, {
    path: "/newStudent/data/flowStatic",
    component: _b7988fe4,
    name: "newStudent-data-flowStatic"
  }, {
    path: "/newStudent/data/linkCustomData",
    component: _7a195fa7,
    name: "newStudent-data-linkCustomData"
  }, {
    path: "/newStudent/data/payData",
    component: _5cc1fbe0,
    name: "newStudent-data-payData"
  }, {
    path: "/newStudent/data/pickUpData",
    component: _4cda2e38,
    name: "newStudent-data-pickUpData"
  }, {
    path: "/newStudent/data/registerData",
    component: _1188b8bf,
    name: "newStudent-data-registerData"
  }, {
    path: "/newStudent/data/signData",
    component: _8fe4ca4e,
    name: "newStudent-data-signData"
  }, {
    path: "/newStudent/data/signStatic",
    component: _51532446,
    name: "newStudent-data-signStatic"
  }, {
    path: "/newStudent/log/log",
    component: _43786374,
    name: "newStudent-log-log"
  }, {
    path: "/newStudent/manage/admissionManage",
    component: _0c0b77e7,
    name: "newStudent-manage-admissionManage"
  }, {
    path: "/newStudent/manage/flowManage",
    component: _a6fb01ac,
    name: "newStudent-manage-flowManage"
  }, {
    path: "/newStudent/manage/linkDormManage",
    component: _6c0229c8,
    name: "newStudent-manage-linkDormManage"
  }, {
    path: "/newStudent/manage/linkManage",
    component: _29c21ef6,
    name: "newStudent-manage-linkManage"
  }, {
    path: "/newStudent/manage/linkPayManage",
    component: _2d4d482c,
    name: "newStudent-manage-linkPayManage"
  }, {
    path: "/newStudent/manage/linkStationManage",
    component: _4f4de390,
    name: "newStudent-manage-linkStationManage"
  }, {
    path: "/newStudent/manage/newSetting",
    component: _e484fdf2,
    name: "newStudent-manage-newSetting"
  }, {
    path: "/studentInfo/class/classChecked",
    component: _71627526,
    name: "studentInfo-class-classChecked"
  }, {
    path: "/studentInfo/class/object",
    component: _5efa961d,
    name: "studentInfo-class-object"
  }, {
    path: "/studentInfo/class/record",
    component: _4b31862f,
    name: "studentInfo-class-record"
  }, {
    path: "/studentInfo/class/setting",
    component: _705fcc3c,
    name: "studentInfo-class-setting"
  }, {
    path: "/studentInfo/credit/creditApply",
    component: _4b223486,
    name: "studentInfo-credit-creditApply"
  }, {
    path: "/studentInfo/credit/creditStatic",
    component: _0fdce486,
    name: "studentInfo-credit-creditStatic"
  }, {
    path: "/studentInfo/credit/object",
    component: _c96c6384,
    name: "studentInfo-credit-object"
  }, {
    path: "/studentInfo/credit/scope",
    component: _1c0543b6,
    name: "studentInfo-credit-scope"
  }, {
    path: "/studentInfo/dorm/change",
    component: _472d097c,
    name: "studentInfo-dorm-change"
  }, {
    path: "/studentInfo/dorm/clear",
    component: _2ea233aa,
    name: "studentInfo-dorm-clear"
  }, {
    path: "/studentInfo/dorm/dorm",
    component: _f02f31d0,
    name: "studentInfo-dorm-dorm"
  }, {
    path: "/studentInfo/dorm/online",
    component: _43951465,
    name: "studentInfo-dorm-online"
  }, {
    path: "/studentInfo/dorm/setting",
    component: _0ebaab2e,
    name: "studentInfo-dorm-setting"
  }, {
    path: "/studentInfo/homework/homework",
    component: _220360d8,
    name: "studentInfo-homework-homework"
  }, {
    path: "/studentInfo/homework/object",
    component: _52af0427,
    name: "studentInfo-homework-object"
  }, {
    path: "/studentInfo/homework/record",
    component: _3ee5f439,
    name: "studentInfo-homework-record"
  }, {
    path: "/studentInfo/homework/setting",
    component: _4aa96d18,
    name: "studentInfo-homework-setting"
  }, {
    path: "/studentInfo/leave/leave",
    component: _6af727c8,
    name: "studentInfo-leave-leave"
  }, {
    path: "/studentInfo/leave/manage",
    component: _e5fc0ab8,
    name: "studentInfo-leave-manage"
  }, {
    path: "/studentInfo/leave/setting",
    component: _0d3ad8a1,
    name: "studentInfo-leave-setting"
  }, {
    path: "/studentInfo/rp/level",
    component: _223433da,
    name: "studentInfo-rp-level"
  }, {
    path: "/studentInfo/rp/rpApply",
    component: _646c56a6,
    name: "studentInfo-rp-rpApply"
  }, {
    path: "/studentInfo/rp/rpManage",
    component: _89d4fc46,
    name: "studentInfo-rp-rpManage"
  }, {
    path: "/studentInfo/rp/rpStatic",
    component: _1fd70666,
    name: "studentInfo-rp-rpStatic"
  }, {
    path: "/studentInfo/student/account",
    component: _1dbcab42,
    name: "studentInfo-student-account"
  }, {
    path: "/studentInfo/student/class",
    component: _4cfd6f66,
    name: "studentInfo-student-class"
  }, {
    path: "/studentInfo/student/dorm",
    component: _21e57fc1,
    name: "studentInfo-student-dorm"
  }, {
    path: "/studentInfo/student/empower",
    component: _4407a31c,
    name: "studentInfo-student-empower"
  }, {
    path: "/studentInfo/student/form",
    component: _1cb04d02,
    name: "studentInfo-student-form"
  }, {
    path: "/studentInfo/student/manage",
    component: _017e9640,
    name: "studentInfo-student-manage"
  }, {
    path: "/studentInfo/student/report",
    component: _449825a2,
    name: "studentInfo-student-report"
  }, {
    path: "/studentInfo/student/status",
    component: _795dd8ed,
    name: "studentInfo-student-status"
  }, {
    path: "/studentInfo/student/stuAuth",
    component: _cac110de,
    name: "studentInfo-student-stuAuth"
  }, {
    path: "/studentInfo/student/stuStarngerRecord",
    component: _3facdc12,
    name: "studentInfo-student-stuStarngerRecord"
  }, {
    path: "/studentInfo/student/warning",
    component: _651efd9e,
    name: "studentInfo-student-warning"
  }, {
    path: "/teachInfo/exam/examManage",
    component: _417507b7,
    name: "teachInfo-exam-examManage"
  }, {
    path: "/teachInfo/exam/examPlan",
    component: _64d5b9fb,
    name: "teachInfo-exam-examPlan"
  }, {
    path: "/teachInfo/exam/performance",
    component: _f880ed26,
    name: "teachInfo-exam-performance"
  }, {
    path: "/teachInfo/teach/courseManage",
    component: _7abe14b2,
    name: "teachInfo-teach-courseManage"
  }, {
    path: "/teachInfo/teach/coursePlan",
    component: _91f7382a,
    name: "teachInfo-teach-coursePlan"
  }, {
    path: "/teachInfo/teach/myTable",
    component: _10c79fea,
    name: "teachInfo-teach-myTable"
  }, {
    path: "/teachInfo/teach/searchTable",
    component: _209d99e2,
    name: "teachInfo-teach-searchTable"
  }, {
    path: "/teachInfo/teach/teachPlan",
    component: _6a1f54f2,
    name: "teachInfo-teach-teachPlan"
  }, {
    path: "/teachInfo/teacher/account",
    component: _d678573a,
    name: "teachInfo-teacher-account"
  }, {
    path: "/teachInfo/teacher/auth",
    component: _c2b82a3c,
    name: "teachInfo-teacher-auth"
  }, {
    path: "/teachInfo/teacher/empower",
    component: _55035793,
    name: "teachInfo-teacher-empower"
  }, {
    path: "/teachInfo/teacher/leaveSetting",
    component: _56059653,
    name: "teachInfo-teacher-leaveSetting"
  }, {
    path: "/teachInfo/teacher/other",
    component: _6d6a8f46,
    name: "teachInfo-teacher-other"
  }, {
    path: "/teachInfo/teacher/stranger",
    component: _4684c5b0,
    name: "teachInfo-teacher-stranger"
  }, {
    path: "/",
    component: _b0a02bfe,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
