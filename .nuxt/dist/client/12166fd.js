(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1427:function(t,e,n){var content=n(1762);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("59656bc4",content,!0,{sourceMap:!1})},1761:function(t,e,n){"use strict";var l=n(1427);n.n(l).a},1762:function(t,e,n){(e=n(30)(!1)).push([t.i,".container[data-v-326677dc]{padding:10px 15px}",""]),t.exports=e},2059:function(t,e,n){"use strict";n.r(e);var l=n(234),r=n(76),o=n(7),c=n(6),d=n(1261),m=n(1256),f=n(1273),h=n(1258),v=n(1257),_=n(1300),y=n(235),w=n(236),C=n(1294),x=n(239),D={mixins:[r.a,_.a],components:{MyPagination:l.default,LayoutTb:d.default,MySelect:m.default,MyUserType:f.default,MyDatePicker:h.default,MyInputButton:v.default,DialogNormal:y.default,DrawerLayoutRight:w.default,AuditStatusButton:C.default,AuditButton:x.default},data:function(){return{tableData:[],searchDate:[],typeList:[],searchKey:"",visible:!1,modalVisible:!1,dialogLoading:!1,visibleConfim:!1,drawerVisible:!1,clearTime:"",action:"",subTitle:"",dataAudit:{},status:"",auditObjectItem:{},msgType:"",form:{id:"",name:"",type:""}}},created:function(){this.init()},methods:{init:function(){var t=this,e={page:this.page,num:this.num,applyTypeCode:"PunishmentApply",applyTimeBegin:this.searchDate?this.searchDate[0]:"",applyTimeEnd:this.searchDate?this.searchDate[1]:"",status:this.status,searchKey:this.searchKey};this.$axios.get(o.a.audit_page,{params:e}).then((function(e){e.data.data&&(t.tableData=e.data.data.list,t.total=e.data.data.totalCount,t.num=e.data.data.num,t.page=e.data.data.currentPage)}))},addInfo:function(){this.modalVisible=!0},detailInfo:function(t){var e=this,n={id:(t.id,t.id)};this.auditObjectItem=t,this.$axios.get(o.a.msg_detail_center,{params:n}).then((function(t){200==t.data.code?(e.dataAudit=t.data.data,e.drawerVisible=!0):Object(c.c)(t.data.desc)}))},search:function(data){this.searchKey=data.input,this.page=1,this.init()},sizeChange:function(t){this.page=1,this.num=t,this.init()},currentPage:function(t){this.page=t,this.init()},jumpPage:function(data){this.page=data,this.init()},closeDrawerDialog:function(t){this.auditObjectItem={},this.drawerVisible=t},cancelDrawDialog:function(){this.drawerVisible=!1},handleClick:function(data){this.page=1,this.status=data,this.init()},handleChange:function(data){this.searchDate=data},handleOk:function(data,textarea){var t=this,e={applyId:(this.auditObjectItem.id,this.auditObjectItem.id),status:1,des2:textarea};e=this.$qs.stringify(e),this.$axios.post(o.a.msg_handle,e).then((function(e){200==e.data.code?(t.detailInfo(t.auditObjectItem),t.init(),Object(c.b)(e.data.desc)):Object(c.c)(e.data.desc)}))},handleNo:function(data,textarea){var t=this,e={applyId:(this.auditObjectItem.id,this.auditObjectItem.id),status:2,des2:textarea};e=this.$qs.stringify(e),this.$axios.post(o.a.msg_handle,e).then((function(e){200==e.data.code?(t.detailInfo(t.auditObjectItem),t.init(),Object(c.b)(e.data.desc)):Object(c.c)(e.data.desc)}))},handleCancel:function(data){var t=this,e={applyId:(this.auditObjectItem.id,this.auditObjectItem.id),status:-1};e=this.$qs.stringify(e),this.$axios.post(o.a.msg_handle,e).then((function(e){200==e.data.code?(t.detailInfo(t.auditObjectItem),t.init(),Object(c.b)(e.data.desc)):Object(c.c)(e.data.desc)}))}}},j=(n(1761),n(10)),component=Object(j.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("layout-tb",[n("template",{slot:"tag"},[t._v("奖惩审批")]),t._v(" "),n("div",{attrs:{slot:"tab"},slot:"tab"},[n("el-row",[n("el-col",{attrs:{span:12}},[n("audit-status-button",{attrs:{size:"small"},on:{click:t.handleClick}})],1),t._v(" "),n("el-col",{staticClass:"text-right",attrs:{span:12}},[n("my-date-picker",{staticStyle:{position:"relative",top:"1px"},attrs:{"sel-value":t.searchDate,clearable:!0,type:"daterange",size:"small","width-style":"240"},on:{change:t.handleChange}}),t._v(" "),n("my-input-button",{attrs:{size:"small",clearable:!0,type:"success",plain:""},on:{click:t.search}})],1)],1)],1),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("el-table",{ref:"refTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-class-name":"custom-table-cell-bg",size:"medium","row-key":"id","max-height":t.tableHeight.height}},[n("el-table-column",{attrs:{align:"center",label:t.$t("日期")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[n("div",{staticClass:"text-center"},[t._v(t._s(e.row.apply_time?t.$moment(e.row.apply_time).format("YYYY-MM-DD"):"--"))]),t._v(" "),n("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                "+t._s(e.row.apply_time?t.$moment(e.row.apply_time).format("YYYY-MM-DD"):"--")+"\n              ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("学生")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[n("div",{staticClass:"text-center"},[t._v(t._s(e.row.real_name))]),t._v(" "),n("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                "+t._s(e.row.real_name)+"\n              ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("学号")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[n("div",{staticClass:"text-center"},[t._v(t._s(e.row.student_id))]),t._v(" "),n("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                "+t._s(e.row.student_id)+"\n              ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("系部")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[n("div",{staticClass:"text-center"},[t._v(t._s(e.row.college_name))]),t._v(" "),n("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                "+t._s(e.row.college_name)+"\n              ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("专业")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[n("div",{staticClass:"text-center"},[t._v(t._s(e.row.major_name))]),t._v(" "),n("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                "+t._s(e.row.major_name)+"\n              ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("班级")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[n("div",{staticClass:"text-center"},[t._v(t._s(e.row.class_name))]),t._v(" "),n("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                "+t._s(e.row.class_name)+"\n              ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("类型")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[n("div",{staticClass:"text-center"},[t._v(t._s(e.row.str1))]),t._v(" "),n("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                "+t._s(e.row.str1)+"\n              ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("级别")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[n("div",{staticClass:"text-center"},[t._v(t._s(e.row.str2))]),t._v(" "),n("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                "+t._s(e.row.str2)+"\n              ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("说明")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[n("div",{staticClass:"text-center"},[t._v(t._s(e.row.des))]),t._v(" "),n("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                "+t._s(e.row.des)+"\n              ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"level_name",label:t.$t("状态/审核人")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[n("div",{staticClass:"text-center"},[n("my-audit-status",{attrs:{status:e.row.status,handler:e.row.handler_name}})],1),t._v(" "),n("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[n("my-audit-status",{attrs:{status:e.row.status,handler:e.row.handler_name}})],1)])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"fa fa-cog color-danger",on:{click:function(n){return t.detailInfo(e.row)}}})]}}])})],1),t._v(" "),n("div",{staticClass:"layout-right-footer text-right"},[n("my-pagination",{staticClass:"layout-pagination",attrs:{total:t.total,"current-page":t.page,"page-size":t.num},on:{currentPage:t.currentPage,sizeChange:t.sizeChange,jumpChange:t.jumpPage}})],1)],1)],2),t._v(" "),n("drawer-layout-right",{attrs:{"hide-footer":!1,visible:t.drawerVisible,size:"550px",title:t.$t("奖惩审批")},on:{changeDrawer:t.closeDrawerDialog,"right-close":t.cancelDrawDialog}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("my-audit-detail",{attrs:{type:"PunishmentApply","sel-value":t.dataAudit}})],1),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("audit-button",{attrs:{"sel-value":t.dataAudit},on:{ok:t.handleOk,no:t.handleNo,cancel:t.handleCancel}})],1)])],1)}),[],!1,null,"326677dc",null);e.default=component.exports;installComponents(component,{AuditStatusButton:n(1294).default,MyDatePicker:n(1258).default,MyInputButton:n(1257).default,MyAuditStatus:n(1284).default,MyPagination:n(234).default,LayoutTb:n(1261).default,MyAuditDetail:n(240).default,AuditButton:n(239).default,DrawerLayoutRight:n(236).default})}}]);