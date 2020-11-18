import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _dfad4160 = () => interopDefault(import('../pages/basicInfo/build.vue' /* webpackChunkName: "pages/basicInfo/build" */))
const _72ad03bc = () => interopDefault(import('../pages/basicInfo/buildSet.vue' /* webpackChunkName: "pages/basicInfo/buildSet" */))
const _39d2a54c = () => interopDefault(import('../pages/basicInfo/class.vue' /* webpackChunkName: "pages/basicInfo/class" */))
const _12957bd5 = () => interopDefault(import('../pages/basicInfo/classRoom.vue' /* webpackChunkName: "pages/basicInfo/classRoom" */))
const _c1cf9bb2 = () => interopDefault(import('../pages/basicInfo/classRoomBak.vue' /* webpackChunkName: "pages/basicInfo/classRoomBak" */))
const _58631379 = () => interopDefault(import('../pages/basicInfo/college.vue' /* webpackChunkName: "pages/basicInfo/college" */))
const _32b8c514 = () => interopDefault(import('../pages/basicInfo/dorm.vue' /* webpackChunkName: "pages/basicInfo/dorm" */))
const _0f91268f = () => interopDefault(import('../pages/basicInfo/dormRoom.vue' /* webpackChunkName: "pages/basicInfo/dormRoom" */))
const _0c4cb11b = () => interopDefault(import('../pages/basicInfo/major.vue' /* webpackChunkName: "pages/basicInfo/major" */))
const _6ed659c1 = () => interopDefault(import('../pages/basicInfo/organization.vue' /* webpackChunkName: "pages/basicInfo/organization" */))
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
    path: "/basicInfo/build",
    component: _dfad4160,
    name: "basicInfo-build"
  }, {
    path: "/basicInfo/buildSet",
    component: _72ad03bc,
    name: "basicInfo-buildSet"
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
    path: "/basicInfo/dorm",
    component: _32b8c514,
    name: "basicInfo-dorm"
  }, {
    path: "/basicInfo/dormRoom",
    component: _0f91268f,
    name: "basicInfo-dormRoom"
  }, {
    path: "/basicInfo/major",
    component: _0c4cb11b,
    name: "basicInfo-major"
  }, {
    path: "/basicInfo/organization",
    component: _6ed659c1,
    name: "basicInfo-organization"
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
