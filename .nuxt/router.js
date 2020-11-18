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
    path: "/",
    component: _41b58047,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
