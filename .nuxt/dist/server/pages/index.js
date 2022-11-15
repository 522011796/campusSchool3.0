exports.ids = [93];
exports.modules = {

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=975526d8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div data-v-975526d8>","</div>",[_c('el-row',{attrs:{"gutter":16}},[_c('el-col',{attrs:{"span":8}},[_c('el-card',{staticClass:"animated fadeInUp card-box-shadow",staticStyle:{"height":"260px"},attrs:{"body-style":{padding: '0px'}}},[_c('div',{staticClass:"padding-lr-10 padding-tb-10 color-muted"},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.sexTotal))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("人")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[_c('my-cascader',{ref:"SelectorBuild",attrs:{"props":{ checkStrictly: true },"width-style":"180","placeholder":_vm.$t('全部院系'),"clearable":true,"size":"small","sel-value":_vm.collegeData,"type":"1","sub-type":"4"},on:{"change":function($event){return _vm.handleCascaderChange($event,1)}}})],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"top-content"},[(_vm.sexTotal == 0)?_c('div',{staticClass:"text-center color-muted"},[_vm._v(_vm._s(_vm.$t("暂无数据")))]):_vm._e(),_vm._v(" "),(_vm.sexTotal != 0)?_c('sex-pie-chart',{attrs:{"chart-id":"studentPie","total":_vm.sexTotal,"male":_vm.maleTotal,"famale":_vm.famaleTotal}}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"bottom-content"},[_c('div',{staticClass:"padding-lr-10 color-muted"},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('i',{staticClass:"fa fa-mortar-board"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("学生人数")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[_c('i',{staticClass:"fa fa-flag color-grand",on:{"click":_vm.jumpStudentInfo}})])],1)],1)])])],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[(_vm.userType == 2)?_c('el-card',{staticClass:"animated fadeInUp card-box-shadow",staticStyle:{"height":"260px"},attrs:{"body-style":{padding: '0px'}}},[_c('div',{staticClass:"padding-lr-10 padding-tb-10 color-muted"},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.sexTeacherTotal))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("人")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[_c('my-cascader',{ref:"SelectorBuild",attrs:{"props":{ checkStrictly: true },"placeholder":_vm.$t('全部部门'),"width-style":"180","clearable":true,"size":"small","sel-value":_vm.deptData,"type":"4","sub-type":"id"},on:{"change":function($event){return _vm.handleCascaderChange($event, 2)}}})],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"top-content"},[(_vm.sexTeacherTotal == 0)?_c('div',{staticClass:"text-center color-muted"},[_vm._v(_vm._s(_vm.$t("暂无数据")))]):_vm._e(),_vm._v(" "),(_vm.sexTeacherTotal != 0)?_c('sex-pie-chart',{attrs:{"chart-id":"teacherPie","total":_vm.sexTeacherTotal,"male":_vm.maleTeacherTotal,"famale":_vm.famaleTeacherTotal}}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"bottom-content"},[_c('div',{staticClass:"padding-lr-10 color-muted"},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('i',{staticClass:"fa fa-user"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("教工人数")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[_c('i',{staticClass:"fa fa-flag color-grand",on:{"click":_vm.jumpTeacherInfo}})])],1)],1)])]):_vm._e(),_vm._v(" "),(_vm.userType == 4)?_c('el-card',{staticClass:"animated fadeInUp card-box-shadow",staticStyle:{"height":"260px"},attrs:{"body-style":{padding: '0px'}}},[_c('div',{staticClass:"padding-lr-10 padding-tb-10 color-muted"},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.levelTypeTotal))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("人")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[_c('my-cascader',{ref:"SelectorLevelType",attrs:{"placeholder":_vm.$t('全部院系'),"width-style":"180","clearable":true,"size":"small","sel-value":_vm.collegeLevelTypeData,"type":"1","sub-type":"4"},on:{"change":function($event){return _vm.handleCascaderChange($event, 5)}}})],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"top-content"},[(_vm.levelTypeTotal == 0)?_c('div',{staticClass:"text-center color-muted"},[_vm._v(_vm._s(_vm.$t("暂无数据")))]):_vm._e(),_vm._v(" "),(_vm.levelTypeTotal != 0)?_c('sex-pie-more-chart',{attrs:{"chart-id":"teacherPie","total":_vm.levelTypeTotal,"data":_vm.leaveAttendData}}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"bottom-content"},[_c('div',{staticClass:"padding-lr-10 color-muted"},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('i',{staticClass:"fa fa-user"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("教工人数")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[_c('i',{staticClass:"fa fa-flag"})])],1)],1)])]):_vm._e()],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-card',{staticClass:"animated fadeInUp card-box-shadow",staticStyle:{"height":"260px"},attrs:{"body-style":{padding: '0px'}}},[_c('div',{staticClass:"top-table-content color-muted"},[_c('table',{staticClass:"custom-table-white margin-top-10"},[_c('tbody',[_c('tr',[_c('td',{attrs:{"width":"30%"}},[_vm._v(_vm._s(_vm.$t("系统版本")))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.currentVersion))])]),_vm._v(" "),_c('tr',[_c('td',{attrs:{"width":"30%"}},[_vm._v(_vm._s(_vm.$t("当前学年")))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.year))])]),_vm._v(" "),_c('tr',[_c('td',{attrs:{"width":"30%"}},[_vm._v(_vm._s(_vm.$t("当前学期")))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.$t("第"))+_vm._s(_vm.weekNum)+_vm._s(_vm.$t("周")))])]),_vm._v(" "),_c('tr',[_c('td',{attrs:{"width":"30%"}},[_vm._v(_vm._s(_vm.$t("当前学周")))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.weekToText(_vm.week)))])])])])]),_vm._v(" "),_c('div',{staticClass:"bottom-content"},[_c('div',{staticClass:"padding-lr-10 color-muted"},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('i',{staticClass:"fa fa-cog"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("系统信息")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[_c('i',{staticClass:"fa fa-flag"})])],1)],1)])])],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20 custom-card-layout\" data-v-975526d8>","</div>",[_c('el-row',{attrs:{"gutter":16}},[_c('el-col',{attrs:{"span":16}},[_c('el-card',{staticClass:"animated fadeInUp card-box-shadow",staticStyle:{"height":"240px"},attrs:{"body-style":{padding: '0px'}}},[_c('div',{staticClass:"moon-clearfix padding-tb-10 padding-lr-10",attrs:{"slot":"header"},slot:"header"},[_c('span',{staticClass:"color-muted",staticStyle:{"font-weight":"bold","position":"relative","top":"5px"}},[_c('i',{staticClass:"fa fa-line-chart"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("院系统计")))])]),_vm._v(" "),_c('span',{staticClass:"pull-right"},[_c('tab-group-button',{staticClass:"pull-left",attrs:{"size":"small","options":_vm.filterTimeStatusOptions},on:{"click":_vm.handleChange}}),_vm._v(" "),_c('my-cascader',{ref:"SelectorBuild",staticClass:"pull-left margin-left-5",attrs:{"props":{ checkStrictly: true },"placeholder":_vm.$t('全部院系'),"width-style":"180","clearable":true,"size":"small","sel-value":_vm.collegeTabData,"type":"1","sub-type":"4"},on:{"change":function($event){return _vm.handleCascaderChange($event,3)}}})],1),_vm._v(" "),_c('div',{staticClass:"moon-clearfix"})]),_vm._v(" "),_c('div',{staticClass:"color-muted padding-tb-10 padding-lr-10",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"item-attend-line-ver",staticStyle:{"position":"absolute","left":"50%","top":"0px"}}),_vm._v(" "),_c('el-row',{attrs:{"gutter":16}},[_c('el-col',{attrs:{"span":12}},[_c('el-row',{attrs:{"gutter":16}},[_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("应出勤人次")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.classAttendData.shouldNum ? _vm.classAttendData.shouldNum : 0))])])])]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("已出勤人次")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.classAttendData.actualNum ? _vm.classAttendData.actualNum : 0))])])])]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("旷课人次")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.classAttendData.unSignNum ? _vm.classAttendData.unSignNum : 0))])])])])],1),_vm._v(" "),_c('el-row',{staticClass:"margin-top-10",attrs:{"gutter":16}},[_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("迟到人次")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.classAttendData.lateNum ? _vm.classAttendData.lateNum : 0))])])])]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("早退人次")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.classAttendData.leaveEarlyNum ? _vm.classAttendData.leaveEarlyNum : 0))])])])])],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-row',{attrs:{"gutter":16}},[_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("应归寝人数")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.dormAttendData.shouldNum ? _vm.dormAttendData.shouldNum : 0))])])])]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("已归寝人数")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.dormAttendData.actualNum ? _vm.dormAttendData.actualNum : 0))])])])]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("未归人数")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.dormAttendData.unSignNum ? _vm.dormAttendData.unSignNum : 0))])])])])],1),_vm._v(" "),_c('el-row',{staticClass:"margin-top-10",attrs:{"gutter":16}},[_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("晚归人数")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.dormAttendData.lateNum ? _vm.dormAttendData.lateNum : 0))])])])]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("超长未归人数")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.dormAttendData.lateLongNum ? _vm.dormAttendData.lateLongNum : 0))])])])])],1)],1)],1)],1)]),_vm._v(" "),_c('div',[_c('el-tabs',{staticClass:"margin-top-20 animated fadeInUp card-box-shadow",staticStyle:{"height":"38px"},attrs:{"active-name":_vm.activeName,"type":"border-card"},on:{"tab-click":_vm.changeNotice}},[_c('el-tab-pane',{attrs:{"label":"通知","name":"1"}}),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":"公告","name":"2"}})],1),_vm._v(" "),_c('el-card',{staticClass:"animated fadeInUp card-box-shadow",staticStyle:{"height":"320px","border-radius":"0 !important"},attrs:{"body-style":{padding: '0px'}}},[_c('el-table',{ref:"refTable",attrs:{"data":_vm.noticeData,"size":"mini","max-height":"320"}},[_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('标题')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.title ? scope.row.title : '--'))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                      "+_vm._s(scope.row.title ? scope.row.title : '--')+"\n                    ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('日期')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.$moment(scope.row.push_time).format("YYYY-MM-DD HH:mm:ss")))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                      "+_vm._s(_vm.$moment(scope.row.push_time).format("YYYY-MM-DD HH:mm:ss"))+"\n                    ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('发布人')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.sender_name ? scope.row.sender_name : '--'))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                      "+_vm._s(scope.row.sender_name ? scope.row.sender_name : '--')+"\n                    ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('操作')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('i',{staticClass:"fa fa-list-alt color-grand",on:{"click":function($event){return _vm.detailMsg(scope.row)}}})]}}])})],1)],1),_vm._v(" "),_c('div',{staticClass:"index-right-footer text-right"},[_c('my-pagination',{staticClass:"layout-pagination",attrs:{"total":_vm.total,"current-page":_vm.page,"page-size":_vm.num},on:{"currentPage":_vm.currentPage,"sizeChange":_vm.sizeChange,"jumpChange":_vm.jumpPage}})],1)],1)],1),_vm._v(" "),_c('el-col',{directives:[{name:"show",rawName:"v-show",value:(_vm.userType == 2),expression:"userType == 2"}],attrs:{"span":8}},[_c('el-card',{staticClass:"animated fadeInUp card-box-shadow",staticStyle:{"height":"140px"},attrs:{"body-style":{padding: '0px'}}},[_c('div',{staticClass:"moon-clearfix padding-tb-10 padding-lr-10",attrs:{"slot":"header"},slot:"header"},[_c('span',{staticClass:"color-muted",staticStyle:{"font-weight":"bold","position":"relative","top":"0px"}},[_c('i',{staticClass:"fa fa-line-chart"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("设备统计")))])]),_vm._v(" "),_c('span',{staticClass:"pull-right color-grand"},[_vm._v("\n              "+_vm._s(_vm.deviceTotal)+_vm._s(_vm.$t("台"))+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"moon-clearfix"})]),_vm._v(" "),_c('div',{staticClass:"color-muted padding-tb-10 padding-lr-10",staticStyle:{"position":"relative"},attrs:{"id":"deviceListOverflow"}},[(_vm.deviceListBlockType == 2)?_c('div',{staticClass:"left-tag-icon"},[_c('div',{staticClass:"right-tag-icon-container"},[_c('div',{staticClass:"right-tag-icon-text"},[_c('i',{staticClass:"fa fa-caret-left color-sub-grand",staticStyle:{"font-size":"18px"},on:{"click":function($event){return _vm.moveDevice(1)}}})])])]):_vm._e(),_vm._v(" "),(_vm.deviceListBlockType == 1)?_c('div',{staticClass:"right-tag-icon"},[_c('div',{staticClass:"right-tag-icon-container"},[_c('div',{staticClass:"right-tag-icon-text"},[_c('i',{staticClass:"fa fa-caret-right color-sub-grand",staticStyle:{"font-size":"18px"},on:{"click":function($event){return _vm.moveDevice(2)}}})])])]):_vm._e(),_vm._v(" "),(_vm.deviceListBlockType == 1)?_c('el-row',{staticClass:"animated fadeInRight",attrs:{"gutter":16}},[_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("一体机本地版")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.padLocalTotal))])])])]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("一体机云端版")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.padWoTotal))])])])]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("门禁控制器")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.doorTotal))])])])])],1):_vm._e(),_vm._v(" "),(_vm.deviceListBlockType == 2)?_c('el-row',{staticClass:"animated fadeInLeft",attrs:{"gutter":16}},[_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("控制器读头")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.doorControlTotal))])])])]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("终端机")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.terminalTotal))])])])]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("摄像机")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.videoTotal))])])])])],1):_vm._e()],1)]),_vm._v(" "),_c('el-card',{staticClass:"margin-top-20 animated fadeInUp card-box-shadow",staticStyle:{"height":"500px","overflow-y":"auto"},attrs:{"body-style":{padding: '0px'}}},[_c('div',{staticClass:"moon-clearfix padding-tb-10 padding-lr-10",attrs:{"slot":"header"},slot:"header"},[_c('span',{staticClass:"color-muted",staticStyle:{"font-weight":"bold","position":"relative","top":"5px"}},[_c('i',{staticClass:"fa fa-line-chart"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("设备状态")))])]),_vm._v(" "),_c('span',{staticClass:"pull-right"},[_c('my-select',{attrs:{"size":"small","options":_vm.filtersDeviceType,"sel-value":_vm.deviceTypeVal},on:{"change":_vm.handleChangeDevice}})],1),_vm._v(" "),_c('div',{staticClass:"moon-clearfix"})]),_vm._v(" "),_c('div',{staticClass:"color-muted padding-tb-10 padding-lr-10",staticStyle:{"position":"relative"}},[_c('el-timeline',_vm._l((_vm.deviceTypeList),function(item,index){return _c('el-timeline-item',{key:index,attrs:{"hide-timestamp":true,"timestamp":"2018/4/12","placement":"top"}},[_c('span',{attrs:{"slot":"dot"},slot:"dot"},[_c('img',{staticStyle:{"height":"20px","width":"20px","position":"relative","right":"5px"},attrs:{"src":__webpack_require__(835),"alt":""}})]),_vm._v(" "),_c('el-card',{staticClass:"font-size-12",attrs:{"body-style":{padding: '10px'}}},[_c('div',{staticClass:"color-muted"},[_c('span',{staticClass:"color-grand"},[_vm._v(_vm._s(item.name ? item.name : item.sn))]),_vm._v(" "),(item.online == false)?_c('el-tag',{staticClass:"margin-left-5",attrs:{"size":"mini","type":"danger"}},[_vm._v(_vm._s(_vm.$t("离线")))]):_vm._e(),_vm._v(" "),(item.online == true)?_c('el-tag',{staticClass:"margin-left-5",attrs:{"size":"mini","type":"success"}},[_vm._v(_vm._s(_vm.$t("在线")))]):_vm._e(),_vm._v(" "),_c('el-tag',{staticClass:"margin-left-5",attrs:{"size":"mini","type":"info"}},[_vm._v(_vm._s(_vm.$t("一体机本地版")))])],1),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('span',{staticClass:"color-disabeld"},[_vm._v(_vm._s(_vm.$t("SN"))+": "+_vm._s(item.sn))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("位置"))+": "+_vm._s(item.location_name ? item.location_name : '--'))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('i',{staticClass:"fa fa-clock-o color-disabeld"}),_vm._v(" "),_c('span',{staticClass:"color-disabeld"},[_vm._v(_vm._s(_vm.$moment(item.uptime).format("YYYY-MM-DD HH:mm:ss")))])])])],1)}),1)],1)])],1),_vm._v(" "),(_vm.userType == 4)?_c('el-col',{attrs:{"span":8}},[_c('el-card',{staticClass:"animated fadeInUp card-box-shadow",staticStyle:{"height":"140px"},attrs:{"body-style":{padding: '0px'}}},[_c('div',{staticClass:"moon-clearfix padding-tb-10 padding-lr-10",attrs:{"slot":"header"},slot:"header"},[_c('span',{staticClass:"color-muted",staticStyle:{"font-weight":"bold","position":"relative","top":"0px"}},[_c('i',{staticClass:"fa fa-line-chart"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("素质学分统计")))])]),_vm._v(" "),_c('span',{staticClass:"pull-right color-grand"},[_c('my-cascader',{ref:"SelectorBuild",attrs:{"placeholder":_vm.$t('全部院系'),"width-style":"180","clearable":true,"size":"small","sel-value":_vm.collegeCreditData,"type":"1","sub-type":"4"},on:{"change":function($event){return _vm.handleCascaderChange($event,4)}}})],1),_vm._v(" "),_c('div',{staticClass:"moon-clearfix"})]),_vm._v(" "),_c('div',{staticClass:"color-muted padding-tb-10 padding-lr-10",staticStyle:{"position":"relative"}},[_c('el-row',{attrs:{"gutter":16}},[_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("加分人数")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.creditAttendData.add ? _vm.creditAttendData.add.value : 0))])]),_vm._v(" "),_c('div',{staticClass:"pull-right"},[_c('div',{staticClass:"credit-title add"},[_vm._v("\n                      "+_vm._s(_vm.$t("加"))+"\n                    ")])]),_vm._v(" "),_c('div',{staticClass:"moon-clearfix"})])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"item-attend-block"},[_c('div',[_vm._v(_vm._s(_vm.$t("减分人数")))]),_vm._v(" "),_c('div',[_c('span',{staticClass:"font-size-25 color-grand"},[_vm._v(_vm._s(_vm.creditAttendData.minus ? _vm.creditAttendData.minus.value : 0))])]),_vm._v(" "),_c('div',{staticClass:"pull-right"},[_c('div',{staticClass:"credit-title minus"},[_vm._v("\n                      "+_vm._s(_vm.$t("减"))+"\n                    ")])]),_vm._v(" "),_c('div',{staticClass:"moon-clearfix"})])])],1)],1)]),_vm._v(" "),(_vm.userType == 4)?_c('el-card',{staticClass:"margin-top-20 animated fadeInUp card-box-shadow",staticStyle:{"height":"500px","overflow-y":"auto"},attrs:{"body-style":{padding: '0px'}}},[_c('div',{staticClass:"moon-clearfix padding-tb-10 padding-lr-10",attrs:{"slot":"header"},slot:"header"},[_c('span',{staticClass:"color-muted",staticStyle:{"font-weight":"bold","position":"relative","top":"5px"}},[_c('i',{staticClass:"fa fa-line-chart"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("素质学分动态")))])])]),_vm._v(" "),_c('div',{staticClass:"color-muted padding-tb-10 padding-lr-10",staticStyle:{"position":"relative"}},[_c('el-timeline',_vm._l((_vm.creditData),function(item,index){return _c('el-timeline-item',{key:index,attrs:{"hide-timestamp":true,"timestamp":"2018/4/12","placement":"top"}},[_c('el-card',{staticClass:"font-size-12",attrs:{"body-style":{padding: '10px'}}},[_c('div',{staticClass:"color-muted"},[_c('span',{staticClass:"color-grand"},[_vm._v(_vm._s(item.real_name))]),_vm._v(" "),(item.str1 == '加分')?_c('el-tag',{staticClass:"margin-left-5",attrs:{"size":"mini","type":"success"}},[_vm._v(_vm._s(_vm.$t("加分")))]):_vm._e(),_vm._v(" "),(item.str1 == '减分')?_c('el-tag',{staticClass:"margin-left-5",attrs:{"size":"mini","type":"danger"}},[_vm._v(_vm._s(_vm.$t("加分")))]):_vm._e(),_vm._v(" "),(item.str1 == '减分')?_c('el-tag',{staticClass:"margin-left-5",attrs:{"size":"mini","type":"danger"}},[_c('i',{staticClass:"fa fa-tag"}),_vm._v("\n                      "+_vm._s(item.double1)+_vm._s(_vm.$t("分"))+"\n                    ")]):_vm._e(),_vm._v(" "),(item.str1 == '加分')?_c('el-tag',{staticClass:"margin-left-5",attrs:{"size":"mini","type":"success"}},[_c('i',{staticClass:"fa fa-tag"}),_vm._v("\n                      "+_vm._s(item.double1)+_vm._s(_vm.$t("分"))+"\n                    ")]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('span',{staticClass:"color-disabeld"},[_vm._v(_vm._s(item.class_name))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(item.des))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5 color-disabeld"},[_c('i',{staticClass:"fa fa-clock-o color-disabeld"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$moment(item.apply_time).format("YYYY-MM-DD HH:mm:ss")))])])])],1)}),1)],1)]):_vm._e()],1):_vm._e()],1)],1),_vm._ssrNode(" "),_c('drawer-layout-right',{attrs:{"visible":_vm.drawerVisible,"size":"550px","title":_vm.$t('消息详细')},on:{"changeDrawer":_vm.closeDrawerDialog,"right-close":_vm.cancelDrawDialog}},[_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('div',{staticClass:"text-center font-size-18",staticStyle:{"font-weight":"bold"}},[_c('span',[_vm._v(_vm._s(_vm.noticeContentDetail.message ? _vm.noticeContentDetail.message.title : ''))])]),_vm._v(" "),_c('div',{staticClass:"line-height"}),_vm._v(" "),_c('div',{staticClass:"ql-editor",domProps:{"innerHTML":_vm._s(_vm.noticeContentDetail.message ? _vm.noticeContentDetail.message.content : '')}})])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=975526d8&scoped=true&

// EXTERNAL MODULE: ./components/charts/LineChart.vue + 4 modules
var LineChart = __webpack_require__(176);

// EXTERNAL MODULE: ./components/MySelect.vue + 4 modules
var MySelect = __webpack_require__(147);

// EXTERNAL MODULE: ./components/utils/select/MyCascader.vue + 4 modules
var MyCascader = __webpack_require__(151);

// EXTERNAL MODULE: ./components/charts/SexPieChart.vue + 4 modules
var SexPieChart = __webpack_require__(450);

// EXTERNAL MODULE: ./components/charts/SexPieMoreChart.vue + 4 modules
var SexPieMoreChart = __webpack_require__(451);

// EXTERNAL MODULE: ./components/utils/dialog/DrawerLayoutRight.vue + 4 modules
var DrawerLayoutRight = __webpack_require__(29);

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// EXTERNAL MODULE: ./utils/api/url.js
var api_url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'index',
  mixins: [mixins["a" /* default */]],
  components: {
    MyCascader: MyCascader["default"],
    MySelect: MySelect["default"],
    LineChart: LineChart["default"],
    SexPieChart: SexPieChart["default"],
    SexPieMoreChart: SexPieMoreChart["default"],
    DrawerLayoutRight: DrawerLayoutRight["default"]
  },

  data() {
    return {
      userTypeList: [],
      classList: [],
      collegeData: [],
      collegeTabData: [],
      collegeCreditData: [],
      deptData: [],
      tableData: [],
      creditData: [],
      collegeLevelTypeData: [],
      userType: '5',
      activeName: '1',
      searchSex: '',
      searchCollege: '',
      searchMajor: '',
      searchClass: '',
      searchGrade: '',
      searchDept: '',
      sexTotal: 0,
      maleTotal: 0,
      famaleTotal: 0,
      sexTeacherTotal: 0,
      maleTeacherTotal: 0,
      famaleTeacherTotal: 0,
      padLocalTotal: 0,
      padWoTotal: 0,
      doorTotal: 0,
      deviceTotal: 0,
      videoTotal: 0,
      terminalTotal: 0,
      levelTypeTotal: 0,
      doorControlTotal: 0,
      year: '',
      weekNum: '',
      week: '',
      deviceTypeDate: [],
      deviceTypeList: [],
      filtersDeviceType: [],
      deviceTypeVal: '3',
      timelineIcon: '~/static/img/timelist-icon-title.png',
      leaveAttendData: [],
      classAttendData: {},
      creditAttendData: {},
      dormAttendData: {},
      noticeData: [],
      circularData: [],
      drawerVisible: false,
      noticeContentDetail: '',
      searchTimeStatus: '',
      deviceCardWidth: {
        width: '0px'
      },
      deviceListBlockType: 1,

      format(percentage) {
        return percentage === 100 ? '' : `${percentage}%`;
      }

    };
  },

  mounted() {
    this.$nextTick(() => {
      let deviceCardWidth = this.$refs;
      this.deviceCardWidth = '0px';
    });
  },

  created() {
    this.layoutInit();
    this.init();
  },

  methods: {
    layoutInit() {
      this.$parent.$parent.layout = 'full';
    },

    async init() {
      await this.getSessionInfo();
      await this.getCurrentWeekInfo(this.campusId);
      await this.initVersionData();
      this.initStudentSex();
      this.initTeacherSex();
      this.initDeviceType();
      this.initDeviceList(this.deviceTypeVal);
      this.deviceTypeGetInfo();
      this.initTimeStatus();
      this.initLevelStatic();
      this.initNotice(1);
      this.initCreditStatic();
      this.initCreditList();
      this.userType = this.loginUserType;
      this.year = this.currentYear;
      this.weekNum = this.currentWeekNum;
      this.week = this.currentWeekNo;
    },

    initStudentSex() {
      let total = 0;
      let params = {
        collegeIdList: this.collegeData[0],
        majorIdList: this.collegeData[1],
        gradeList: this.collegeData[2],
        classIdList: this.collegeData[3]
      };
      this.sexTotal = 0;
      this.maleTotal = 0;
      this.famaleTotal = 0;
      this.$axios.get(api_url["a" /* common */].index_sex, {
        params: params
      }).then(res => {
        if (res.data.data) {
          for (let i = 0; i < res.data.data.length; i++) {
            total += res.data.data[i].count;
            this.sexTotal = total;

            if (res.data.data[i].sex == 1) {
              this.maleTotal = res.data.data[i].count;
            } else if (res.data.data[i].sex == 2) {
              this.famaleTotal = res.data.data[i].count;
            }
          }
        }
      });
    },

    initTeacherSex() {
      let total = 0;
      let params = {
        //collegeIdList: this.campusId,
        departmentId: this.deptData[this.deptData.length - 1]
      };
      this.sexTeacherTotal = 0;
      this.maleTeacherTotal = 0;
      this.famaleTeacherTotal = 0;
      this.$axios.get(api_url["a" /* common */].index_ter_sex, {
        params: params
      }).then(res => {
        if (res.data.data) {
          for (let i = 0; i < res.data.data.length; i++) {
            total += res.data.data[i].count;

            if (res.data.data[i].sex == 1) {
              this.maleTeacherTotal = res.data.data[i].count;
            } else if (res.data.data[i].sex == 2) {
              this.famaleTeacherTotal = res.data.data[i].count;
            }
          }

          this.sexTeacherTotal = total;
        }
      });
    },

    initDeviceType() {
      let total = 0;
      let params = {};
      this.deviceTypeDate = 0;
      this.padLocalTotal = 0;
      this.padWoTotal = 0;
      this.doorTotal = 0;
      this.deviceTotal = 0;
      this.videoTotal = 0;
      this.terminalTotal = 0;
      this.doorControlTotal = 0;
      this.$axios.get(api_url["a" /* common */].index_device_type).then(res => {
        if (res.data.data) {
          this.deviceTypeDate = res.data.data;

          for (let i = 0; i < res.data.data.length; i++) {
            total += res.data.data[i].count;

            if (res.data.data[i].type == 1) {
              this.terminalTotal = res.data.data[i].count;
            } else if (res.data.data[i].type == 2) {
              this.videoTotal = res.data.data[i].count;
            } else if (res.data.data[i].type == 3) {
              this.padLocalTotal = res.data.data[i].count;
            } else if (res.data.data[i].type == 4) {
              this.padWoTotal = res.data.data[i].count;
            } else if (res.data.data[i].type == 5) {
              this.doorTotal = res.data.data[i].count;
            } else if (res.data.data[i].type == 6) {
              this.doorControlTotal = res.data.data[i].count;
            }
          }

          this.deviceTotal = total;
        }
      });
    },

    initDeviceList(type) {
      let url = "";
      let params = {
        page: 1,
        num: 10
      };

      if (type == 4) {
        url = api_url["a" /* common */].wo_pad_page;
      } else if (type == 3) {
        url = api_url["a" /* common */].local_pad_page;
      } else if (type == 6) {
        url = api_url["a" /* common */].dormaccess_control_device_page;
      }

      this.$axios.get(url, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.deviceTypeList = res.data.data.list;
        }
      });
    },

    initAttendStatic(params) {
      /*let params = {
        collegeIdList: this.collegeTabData[0],
        majorIdList: this.collegeTabData[1],
        classIdList: this.collegeTabData[3]
      };*/
      params['collegeId'] = this.collegeTabData[0];
      params['majorId'] = this.collegeTabData[1];
      params['grade'] = this.collegeTabData[2];
      params['classId'] = this.collegeTabData[3]; //this.initTimeStatus(params);
      //this.initLevelStatic(params);

      this.initClassStatic(params); //this.initCreditStatic(params);

      this.initDormStatic(params);
    },

    initLevelStatic() {
      let url = api_url["a" /* common */].index_level_static;
      let params = {
        collegeIdList: this.collegeLevelTypeData[0],
        majorIdList: this.collegeLevelTypeData[1],
        classIdList: this.collegeLevelTypeData[3]
      };
      let total = 0;
      this.leaveAttendData = [];
      this.$axios.get(url, {
        params: params
      }).then(res => {
        if (res.data.data) {
          for (let i = 0; i < res.data.data.length; i++) {
            total += res.data.data[i].count;
          }

          this.levelTypeTotal = total;
          this.leaveAttendData = res.data.data;
        }
      });
    },

    initClassStatic(params) {
      let url = api_url["a" /* common */].index_class_static;
      this.$axios.get(url, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.classAttendData = res.data.data;
        }
      });
    },

    initCreditStatic() {
      let url = api_url["a" /* common */].index_credit_static;
      let credit = {
        add: {
          label: '加分',
          value: 0
        },
        minus: {
          label: '减分',
          value: 0
        }
      };
      let params = {
        collegeIdList: this.collegeCreditData[0],
        majorIdList: this.collegeCreditData[1],
        classIdList: this.collegeCreditData[3]
      };
      this.$axios.get(url, {
        params: params
      }).then(res => {
        if (res.data.data) {
          for (let i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].str1 == "加分") {
              credit['add'] = {
                label: res.data.data[i].str1,
                value: res.data.data[i].count
              };
            }

            if (res.data.data[i].str1 == "减分") {
              credit['minus'] = {
                label: res.data.data[i].str1,
                value: res.data.data[i].count
              };
            }
          }

          this.creditAttendData = credit;
        }
      });
    },

    initDormStatic(params) {
      let url = api_url["a" /* common */].index_dorm_static;
      this.$axios.get(url, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.dormAttendData = res.data.data;
        }
      });
    },

    initNotice(type) {
      let url = api_url["a" /* common */].circular_page;
      let params = {
        page: 1,
        num: this.num,
        type: 0,
        actionType: type,
        draft: false
      };
      this.$axios.get(url, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.noticeData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },

    initCreditList() {
      let url = api_url["a" /* common */].audit_page;
      let params = {
        page: 1,
        num: 20,
        collegeId: this.collegeCreditData[0],
        majord: this.collegeCreditData[1],
        classId: this.collegeCreditData[3],
        applyTypeCode: 'ScoreApply'
      };
      this.$axios.get(url, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.creditData = res.data.data.list;
        }
      });
    },

    initTimeStatus() {
      let params = {}; //时间类型

      if (this.searchTimeStatus == 1) {
        params['busiTime'] = this.$moment(new Date()).format("YYYY-MM-DD");
        params['timeUnit'] = 3;
      } else if (this.searchTimeStatus == 2) {
        params['weekNum'] = this.currentWeekNum;
        params['timeUnit'] = 2;
      } else if (this.searchTimeStatus == 3) {
        let month = this.$moment(new Date()).format("YYYY-MM");
        params['year'] = month.split("-")[0];
        params['month'] = month.split("-")[1];
        params['timeUnit'] = 4;
      } else if (this.searchTimeStatus == 4) {
        params['timeUnit'] = 1;
      } else {
        let day = this.$moment(new Date()).format("YYYY-MM-DD");
        params['busiTime'] = this.$moment(new Date()).format("YYYY-MM-DD");
        params['timeUnit'] = 3;
      }

      params['termId'] = this.currentTermId;
      this.initAttendStatic(params);
    },

    detailNoticeInfo(msgId) {
      let url = api_url["a" /* common */].msg_detail;
      let params = {
        msgId: msgId,
        needComment: true,
        hemlType: 'userinfo'
      };
      this.$axios.get(url, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.noticeContentDetail = res.data.data;
        }
      });
    },

    handleCascaderChange(data, type) {
      switch (type) {
        case 1:
          this.collegeData = data;
          this.initStudentSex();
          break;

        case 2:
          this.deptData = data;
          this.initTeacherSex();
          break;

        case 3:
          this.collegeTabData = data;
          this.initTimeStatus();
          break;

        case 4:
          this.collegeCreditData = data;
          this.initCreditStatic();
          this.initCreditList();
          break;

        case 5:
          this.collegeLevelTypeData = data;
          this.initLevelStatic();
          break;
      }
    },

    handleClick(tab, event) {},

    weekToText(val) {
      return Object(utils["X" /* weekNoText */])(val);
    },

    deviceTypeInfo(val) {
      return Object(utils["l" /* deviceType */])('set', val);
    },

    handleChangeDevice(data) {
      this.deviceTypeVal = data;
      this.initDeviceList(data);
    },

    deviceTypeGetInfo(type, val) {
      let arr = [];
      let deviceList = Object(utils["l" /* deviceType */])('get', val);

      for (let i in deviceList) {
        if (i == 3 || i == 4 || i == 6) {
          arr.push({
            value: i,
            text: deviceList[i],
            label: deviceList[i]
          });
        }
      }

      this.filtersDeviceType = arr;
    },

    changeNotice(data) {
      this.activeName = data.name;
      this.initNotice(data.name);
    },

    sizeChange(event) {
      this.page = 1;
      this.num = event;
      this.initNotice(this.activeName);
    },

    currentPage(event) {
      this.page = event;
      this.initNotice(this.activeName);
    },

    jumpPage(data) {
      this.page = data;
      this.initNotice(this.activeName);
    },

    closeDrawerDialog(event) {
      this.noticeContentDetail = "";
      this.drawerVisible = event;
    },

    closeDrawDialog(event) {
      this.noticeContentDetail = "";
      this.drawerVisible = false;
    },

    cancelDrawDialog() {
      this.noticeContentDetail = "";
      this.drawerVisible = false;
    },

    detailMsg(row) {
      this.detailNoticeInfo(row.id);
      this.drawerVisible = true;
    },

    moveDevice(type) {
      this.deviceListBlockType = type;
    },

    handleChange(data) {
      this.searchTimeStatus = data.value;
      this.initTimeStatus();
    },

    jumpStudentInfo() {
      this.$router.push({
        path: '/studentInfo/student/manage',
        query: {
          top: 'studentInfo',
          key: 'stuManage',
          sub: 'studentManage'
        }
      });
    },

    jumpTeacherInfo() {
      this.$router.push({
        path: '/basicInfo/teacher',
        query: {
          top: 'basicInfo',
          key: 'teacher',
          sub: 'personInfo'
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(836)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "975526d8",
  "680ec52e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyCascader: __webpack_require__(151).default,SexPieChart: __webpack_require__(450).default,SexPieMoreChart: __webpack_require__(451).default,TabGroupButton: __webpack_require__(168).default,MyPagination: __webpack_require__(27).default,MySelect: __webpack_require__(147).default,DrawerLayoutRight: __webpack_require__(29).default})


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MySelect.vue?vue&type=template&id=6f874b25&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-select',_vm._b({style:(_vm.width),attrs:{"setPlaceholder":_vm.setPlaceholder,"placeholder":_vm.selectPlaceholder,"size":_vm.size,"clearable":_vm.clearable,"disabled":_vm.disabled,"filterable":_vm.filterable,"loading":_vm.loading,"remote":_vm.remote,"remote-method":_vm.remoteMethod,"setWidth":_vm.setWidth},on:{"change":_vm.handleChange},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},'el-select',_vm.selectModel,false),[(_vm.group == false)?_vm._l((_vm.options),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value,"disabled":item.disabled}})}):_vm._e(),_vm._v(" "),(_vm.group == true)?_vm._l((_vm.options),function(itemGroup){return _c('el-option-group',{key:itemGroup.label,attrs:{"label":itemGroup.label}},_vm._l((itemGroup.options),function(itemChild){return _c('el-option',{key:itemChild.value,attrs:{"label":itemChild.label,"value":itemChild.value}})}),1)}):_vm._e()],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MySelect.vue?vue&type=template&id=6f874b25&

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MySelect.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MySelectvue_type_script_lang_js_ = ({
  name: 'mySelect',
  props: {
    placeholder: {
      default: '',
      type: String
    },
    selValue: {
      default: '',
      type: [String, Number, Boolean]
    },
    options: {
      default: function () {
        return [];
      },
      type: Array
    },
    size: {
      defalult: 'medium',
      validate: function (val) {
        return Object(utils["D" /* oneOf */])(val, ['large', 'medium', 'small', 'mini']);
      }
    },
    clearable: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    filterable: {
      default: false,
      type: Boolean
    },
    remote: {
      default: false,
      type: Boolean
    },
    loading: {
      default: false,
      type: Boolean
    },
    group: {
      default: false,
      type: Boolean
    },
    remoteMethod: {
      default: function (data) {
        return data;
      },
      type: Function
    },
    widthStyle: {
      default: '',
      type: [String, Number]
    }
  },
  computed: {
    selectModel() {
      this.value = this.selValue;
    },

    setPlaceholder() {
      this.selectPlaceholder = this.placeholder ? this.placeholder : this.$t("请选择");
    },

    setWidth() {
      if (!!this.widthStyle) {
        this.width = {
          'width': this.widthStyle + "px"
        };
      }
    }

  },

  data() {
    return {
      selectPlaceholder: '',
      value: '',
      width: ''
    };
  },

  methods: {
    handleChange(data) {
      this.$emit('change', data);
    }

  }
});
// CONCATENATED MODULE: ./components/MySelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MySelectvue_type_script_lang_js_ = (MySelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/MySelect.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MySelectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "15d91728"
  
)

/* harmony default export */ var MySelect = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/select/MyCascader.vue?vue&type=template&id=39aac623&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-cascader',_vm._b({ref:"cascaderSelector",style:(_vm.width),attrs:{"options":_vm.data,"setWidth":_vm.setWidth,"disabled":_vm.disabled,"clearable":_vm.clearable,"size":_vm.size,"props":_vm.props,"placeholder":_vm.placeholder,"collapse-tags":_vm.collapseTags},on:{"change":_vm.handleChange},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},'el-cascader',_vm.selectModel,false))],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/select/MyCascader.vue?vue&type=template&id=39aac623&

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/select/MyCascader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var MyCascadervue_type_script_lang_js_ = ({
  name: 'myCascader',
  mixins: [mixins["a" /* default */]],
  props: {
    selValue: {
      default: function () {
        return [];
      },
      type: Array
    },
    props: {
      default: function () {
        return {};
      },
      type: Object
    },
    placeholder: {
      default: '请选择',
      type: String
    },
    label: {
      default: '',
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    },
    clearable: {
      default: false,
      type: Boolean
    },
    size: {
      defalult: 'medium',
      validate: function (val) {
        return Object(utils["D" /* oneOf */])(val, ['large', 'medium', 'small', 'mini']);
      }
    },
    type: {
      default: '',
      type: String
    },
    subType: {
      default: 1,
      type: String
    },
    widthStyle: {
      default: '',
      type: [String, Number]
    },
    collapseTags: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    selectModel() {
      this.value = this.selValue;
    },

    setWidth() {
      if (!!this.widthStyle) {
        this.width = {
          'width': this.widthStyle + "px"
        };
      }
    }

  },

  data() {
    return {
      value: '',
      options: [],
      width: '',
      data: []
    };
  },

  created() {
    this.initInfo();
  },

  methods: {
    async initInfo() {
      if (this.type == 1) {
        await this.getCollegeInfo(this.subType);
        this.data = this.dataCollege;
      } else if (this.type == 2) {
        await this.getDormBuildInfo(this.subType);
        this.data = this.dataDormBuild;
      } else if (this.type == 3) {
        await this.getSchoolBuildInfo(this.subType);
        this.data = this.dataSchoolBuild;
      } else if (this.type == 4) {
        await this.getDeptInfo(this.subType);
        this.data = this.dataDept;
      } else if (this.type == 5) {
        await this.getRoleTreeInfo();
        this.data = this.dataRoleTreeList;
      }
    },

    handleChange(data) {
      this.$emit('change', data);
    }

  },
  watch: {
    type(val) {
      this.initInfo();
    },

    subType(val) {
      this.initInfo();
    }

  }
});
// CONCATENATED MODULE: ./components/utils/select/MyCascader.vue?vue&type=script&lang=js&
 /* harmony default export */ var select_MyCascadervue_type_script_lang_js_ = (MyCascadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/select/MyCascader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  select_MyCascadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7344a2af"
  
)

/* harmony default export */ var MyCascader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(172);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("efebb4ae", content, true, context)
};

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/button/TabGroupButton.vue?vue&type=template&id=584b8f5c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btn-group-block select-none",class:_vm.setClass,style:(_vm.setBgColor)},[_vm._ssrNode("<div class=\"btn-group-item-active\""+(_vm._ssrStyle(null,[_vm.transformBtnGroup,_vm.setActiveColor], null))+" data-v-584b8f5c></div> <div class=\"btn-group-item\" data-v-584b8f5c>"+(_vm._ssrList((_vm.options),function(item,index){return ("<div"+(_vm._ssrClass("btn-group-item-default pull-left",_vm.isActive == index ? 'is-active' : ''))+" data-v-584b8f5c>"+_vm._ssrEscape("\n      "+_vm._s(item.label))+((item.extra || item.extra == 0)?(_vm._ssrEscape(" | "+_vm._s(item.extra))):"<!---->")+"</div>")}))+" <div class=\"moon-clearfix\" data-v-584b8f5c></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/button/TabGroupButton.vue?vue&type=template&id=584b8f5c&scoped=true&

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/button/TabGroupButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TabGroupButtonvue_type_script_lang_js_ = ({
  name: 'auditStatusButton',
  props: {
    options: {
      default: function () {
        return [];
      },
      type: Array
    },
    size: {
      defalult: 'medium',
      validate: function (val) {
        return Object(utils["D" /* oneOf */])(val, ['large', 'medium', 'small', 'mini']);
      }
    },
    bgColor: {
      default: '#409EFF',
      type: String
    },
    activeColor: {
      default: '#FFFFFF',
      type: String
    }
  },
  computed: {
    setClass() {
      return [{
        ['tab-group-button-medium']: !this.size,
        [`tab-group-button-${this.size}`]: !!this.size
      }];
    },

    setBgColor() {
      this.bgGroupColor.background = this.bgColor;
      return this.bgGroupColor;
    },

    setActiveColor() {
      this.activeGroupColor.background = this.activeColor;
      return this.activeGroupColor;
    }

  },

  data() {
    return {
      selVal: 1,
      selIndex: 0,
      widthAll: 0,
      isActive: '',
      selStatus: -1,
      transformBtnGroup: {
        transform: 'translateX(0px)',
        transition: '0.5s',
        width: ''
      },
      activeGroupColor: {
        background: "#FFFFFF"
      },
      bgGroupColor: {
        background: "#409EFF"
      }
    };
  },

  mounted() {
    this.initTabGroupDefaultSel();
  },

  created() {//this.initConfig();
  },

  methods: {
    initTabGroupDefaultSel() {
      let widthAll = 0;
      let translateX = widthAll + 8 + "px";
      /*this.transformBtnGroup.width = groupItem[0].clientWidth + "px";
      this.transformBtnGroup.transform = 'translateX(' + translateX + ')';*/

      setTimeout(() => {
        let groupItem = document.querySelectorAll(".btn-group-item-default");
        this.transformBtnGroup.width = groupItem && groupItem.length > 0 ? groupItem[0].clientWidth + "px" : '0px';
        this.transformBtnGroup.transform = 'translateX(' + translateX + ')';
      }, 800);
    },

    handelChange(data, item, index) {
      let padding = 10;
      let widthAll = 0;
      this.selVal = item;
      this.selIndex = index;
      let groupItem = document.querySelectorAll(".btn-group-item-default");

      for (let i = 0; i < groupItem.length; i++) {
        if (i < index) {
          widthAll += groupItem[i].clientWidth;
        }

        if (index == i) {
          this.transformBtnGroup.width = groupItem[i].clientWidth + "px";
          break;
        }
      }

      let translateX = widthAll + 8 + "px";
      this.transformBtnGroup.transform = 'translateX(' + translateX + ')';
      this.isActive = index;
      this.$emit('click', item);
    }

  },
  watch: {
    options: function (newQuestion, oldQuestion) {
      setTimeout(() => {
        let widthAll = 0;
        let groupItem = document.querySelectorAll(".btn-group-item-default");

        for (let i = 0; i < groupItem.length; i++) {
          if (i < this.selIndex) {
            widthAll += groupItem[i].clientWidth;
          }

          if (this.selIndex == i) {
            this.transformBtnGroup.width = groupItem[i].clientWidth + "px";
            break;
          }
        }

        let translateX = widthAll + 8 + "px";
        this.transformBtnGroup.transform = 'translateX(' + translateX + ')';
        this.isActive = this.selIndex;
      }, 800);
    }
  }
});
// CONCATENATED MODULE: ./components/utils/button/TabGroupButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_TabGroupButtonvue_type_script_lang_js_ = (TabGroupButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/button/TabGroupButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(171)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  button_TabGroupButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "584b8f5c",
  "b0c1da2a"
  
)

/* harmony default export */ var TabGroupButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabGroupButton_vue_vue_type_style_index_0_id_584b8f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(164);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabGroupButton_vue_vue_type_style_index_0_id_584b8f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabGroupButton_vue_vue_type_style_index_0_id_584b8f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabGroupButton_vue_vue_type_style_index_0_id_584b8f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabGroupButton_vue_vue_type_style_index_0_id_584b8f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabGroupButton_vue_vue_type_style_index_0_id_584b8f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".btn-group-block[data-v-584b8f5c]{padding:10px 8px;border-radius:5px;display:inline-block;vertical-align:middle;white-space:nowrap;transition:transform .3s;z-index:2;line-height:15px}.btn-group-block[data-v-584b8f5c],.btn-group-item[data-v-584b8f5c]{position:relative}.btn-group-item-default[data-v-584b8f5c]{padding:0 8px;border-radius:5px;display:inline-block;cursor:default;color:#fff}.is-active[data-v-584b8f5c]{color:#595959}.tab-group-button-medium[data-v-584b8f5c]{padding:12px 8px;font-size:12px}.tab-group-button-small[data-v-584b8f5c]{padding:9px 8px;font-size:12px}.tab-group-button-mini[data-v-584b8f5c]{padding:7px 8px;font-size:12px}.tab-group-button-large[data-v-584b8f5c]{padding:14px 8px}.tab-group-button-medium .btn-group-item-active[data-v-584b8f5c]{position:absolute;top:5px;left:0;height:24px;transform:translateX(0);border-radius:5px}.tab-group-button-small .btn-group-item-active[data-v-584b8f5c]{position:absolute;top:5px;left:0;height:22px;transform:translateX(0);border-radius:5px}.tab-group-button-mini .btn-group-item-active[data-v-584b8f5c]{position:absolute;top:5px;left:0;height:18px;transform:translateX(0);border-radius:5px}.tab-group-button-large .btn-group-item-active[data-v-584b8f5c]{position:absolute;top:8px;left:0;height:28px;transform:translateX(0);border-radius:5px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/charts/LineChart.vue?vue&type=template&id=3ca07f7e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"height":"100%"},attrs:{"id":_vm.chartId}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/charts/LineChart.vue?vue&type=template&id=3ca07f7e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/charts/LineChart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var LineChartvue_type_script_lang_js_ = ({
  props: {
    chartId: '',
    chartTitle: '',
    dataLegned: {
      default: function () {
        return [];
      },
      type: Array
    },
    dataKey: {
      default: function () {
        return [];
      },
      type: Array
    },
    data: {
      default: function () {
        return [];
      },
      type: Array
    }
  },

  data() {
    return {};
  },

  mounted() {
    this.lineChart();
  },

  created() {},

  methods: {
    lineChart() {
      let _self = this;

      let lineId = document.getElementById(this.chartId); //找到绘制的区域,强烈推荐使用refs

      let myChart = this.$echarts.init(lineId); //初始化

      myChart.setOption({
        //官网例子
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: this.dataLegned
        },
        grid: {
          top: '15%',
          left: '2%',
          right: '2%',
          bottom: '8%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#DCDFE6',
              //左边线的颜色
              width: '1' //坐标线的宽度

            }
          },
          axisLabel: {
            interval: 0,
            rotate: 40,
            textStyle: {
              color: '#333333' //坐标值得具体的颜色

            }
          },
          data: this.dataKey
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#eeeeee'
            }
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#DCDFE6',
              //左边线的颜色
              width: '1' //坐标线的宽度

            }
          },
          axisLabel: {
            textStyle: {
              color: '#333333' //坐标值得具体的颜色

            }
          }
        },
        series: this.data
      }, true);
    }

  },
  watch: {
    data: function (newQuestion, oldQuestion) {
      this.lineChart();
    }
  }
});
// CONCATENATED MODULE: ./components/charts/LineChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_LineChartvue_type_script_lang_js_ = (LineChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/charts/LineChart.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  charts_LineChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3ca07f7e",
  "d0d607a0"
  
)

/* harmony default export */ var LineChart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(837);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3fe58421", content, true, context)
};

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/charts/SexPieChart.vue?vue&type=template&id=22d7eccf&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"height":"100%"},attrs:{"id":_vm.chartId}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/charts/SexPieChart.vue?vue&type=template&id=22d7eccf&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/charts/SexPieChart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var SexPieChartvue_type_script_lang_js_ = ({
  props: {
    chartId: '',
    chartTitle: '',
    dataLegned: {
      default: function () {
        return [];
      },
      type: Array
    },
    dataKey: {
      default: function () {
        return [];
      },
      type: Array
    },
    total: {
      default: 0,
      type: [String, Number]
    },
    male: {
      default: 0,
      type: [String, Number]
    },
    famale: {
      default: 0,
      type: [String, Number]
    },
    other: {
      default: 0,
      type: [String, Number]
    }
  },

  data() {
    return {};
  },

  mounted() {
    this.lineChart();
  },

  created() {},

  methods: {
    lineChart() {
      let _self = this;

      let other = this.total - this.male - this.famale;
      let lineId = document.getElementById(this.chartId); //找到绘制的区域,强烈推荐使用refs

      let myChart = this.$echarts.init(lineId); //初始化

      myChart.setOption({
        //官网例子
        tooltip: {
          trigger: 'item',
          formatter: '{b}:{c}人'
        },
        series: [{
          name: '性别分布',
          type: "pie",
          radius: ['70%', '100%'],
          startAngle: 180,
          center: ['center', '65%'],
          data: [{
            value: this.male,
            name: "男",
            itemStyle: {
              normal: {
                color: '#4C8DFA'
              }
            }
          }, {
            value: this.famale,
            name: "女",
            itemStyle: {
              normal: {
                color: '#FFD18B'
              }
            }
          }, {
            value: other,
            name: "其他",
            itemStyle: {
              normal: {
                color: '#FF0033'
              }
            }
          }, {
            value: this.total,
            name: '',
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              normal: {
                color: 'transparent',
                borderWidth: 0,
                shadowBlur: 0,
                borderColor: 'transparent',
                shadowColor: 'transparent'
              }
            }
          }]
        }]
      }, true);
    }

  },
  watch: {
    total: function (newQuestion, oldQuestion) {
      this.lineChart();
    },
    male: function (newQuestion, oldQuestion) {
      this.lineChart();
    },
    famale: function (newQuestion, oldQuestion) {
      this.lineChart();
    }
  }
});
// CONCATENATED MODULE: ./components/charts/SexPieChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_SexPieChartvue_type_script_lang_js_ = (SexPieChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/charts/SexPieChart.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  charts_SexPieChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "22d7eccf",
  "0f50dcc4"
  
)

/* harmony default export */ var SexPieChart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/charts/SexPieMoreChart.vue?vue&type=template&id=5224c04e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"height":"100%"},attrs:{"id":_vm.chartId}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/charts/SexPieMoreChart.vue?vue&type=template&id=5224c04e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/charts/SexPieMoreChart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var SexPieMoreChartvue_type_script_lang_js_ = ({
  props: {
    chartId: '',
    chartTitle: '',
    dataLegned: {
      default: function () {
        return [];
      },
      type: Array
    },
    dataKey: {
      default: function () {
        return [];
      },
      type: Array
    },
    total: {
      default: 0,
      type: [String, Number]
    },
    data: {
      default: function () {
        return [];
      },
      type: Array
    }
  },

  data() {
    return {};
  },

  mounted() {
    this.lineChart();
  },

  created() {},

  methods: {
    lineChart() {
      let _self = this;

      let dataList = [];

      if (this.data.length > 0) {
        for (let i = 0; i < this.data.length; i++) {
          dataList.push({
            value: this.data[i].count,
            name: this.data[i].str1,
            itemStyle: {
              normal: {//color: '#4C8DFA'
              }
            }
          });
        }

        dataList.push({
          value: this.total,
          name: '',
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          itemStyle: {
            normal: {
              color: 'transparent',
              borderWidth: 0,
              shadowBlur: 0,
              borderColor: 'transparent',
              shadowColor: 'transparent'
            }
          }
        });
      }

      let lineId = document.getElementById(this.chartId); //找到绘制的区域,强烈推荐使用refs

      let myChart = this.$echarts.init(lineId); //初始化

      myChart.setOption({
        //官网例子
        tooltip: {
          trigger: 'item',
          formatter: '{b}:{c}人'
        },
        series: [{
          name: '类型分布',
          type: "pie",
          radius: ['70%', '100%'],
          startAngle: 180,
          center: ['center', '65%'],
          data: dataList
        }]
      }, true);
    }

  },
  watch: {
    data: function (newQuestion, oldQuestion) {
      this.lineChart();
    }
  }
});
// CONCATENATED MODULE: ./components/charts/SexPieMoreChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_SexPieMoreChartvue_type_script_lang_js_ = (SexPieMoreChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/charts/SexPieMoreChart.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  charts_SexPieMoreChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5224c04e",
  "6fc7dc6e"
  
)

/* harmony default export */ var SexPieMoreChart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/timelist-icon-title.731c6a2.png";

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_975526d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(427);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_975526d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_975526d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_975526d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_975526d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_975526d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-975526d8]{padding:10px 15px}.top-content[data-v-975526d8]{padding:10px;height:150px}.top-table-content[data-v-975526d8]{padding:10px;height:202px}.bottom-content[data-v-975526d8]{height:35px;line-height:35px;border-top:1px solid #ddd}.item-attend-block[data-v-975526d8]{background:#f2f2f2;height:100%;padding:10px;border-radius:5px;position:relative}.item-attend-line-ver[data-v-975526d8]{background:#f2f2f2;height:220px;width:1px}.credit-title[data-v-975526d8]{font-size:20px;color:#fff;position:absolute;top:50%;transform:translateY(-50%);right:10px;padding:10px}.add[data-v-975526d8]{background:#a0cfff}.minus[data-v-975526d8]{background:#fde2e2}.index-right-footer[data-v-975526d8]{background:#fff;border:1px solid #ebeef5;border-top:0 solid #ddd;padding:0 0 5px}.card-box-shadow[data-v-975526d8]{box-shadow:0 0 4px #bbb}.device-over-flow[data-v-975526d8]{float:left;width:100%}.left-tag-icon[data-v-975526d8]{left:0}.left-tag-icon[data-v-975526d8],.right-tag-icon[data-v-975526d8]{position:absolute;top:0;bottom:0;display:flex;transition:all .2s ease-in-out;z-index:99}.right-tag-icon[data-v-975526d8]{right:0}.left-tag-icon .right-tag-icon-container[data-v-975526d8],.right-tag-icon .right-tag-icon-container[data-v-975526d8]{width:100%;height:100%;display:flex;align-items:center;cursor:pointer}.left-tag-icon .right-tag-icon-text[data-v-975526d8],.right-tag-icon .right-tag-icon-text[data-v-975526d8]{margin-top:.5px;width:100%;height:30px;display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:1;transition-duration:.2s;transition-timing-function:ease-in-out;color:#ddd;padding-right:2px}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=index.js.map