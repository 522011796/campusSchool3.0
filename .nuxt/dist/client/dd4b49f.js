(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1357:function(t,e,o){var content=o(1621);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("7d7a7037",content,!0,{sourceMap:!1})},1620:function(t,e,o){"use strict";var n=o(1357);o.n(n).a},1621:function(t,e,o){(e=o(30)(!1)).push([t.i,".container[data-v-4deb6c17]{padding:10px 15px}",""]),t.exports=e},2011:function(t,e,o){"use strict";o.r(e);o(360),o(65);var n=o(234),l=o(76),r=o(7),c=o(6),d=o(1261),f=o(1256),h=o(1273),m=o(1258),_=o(1257),v=o(235),w=o(1268),$=o(1532),y={mixins:[l.a,$.a],components:{MyPagination:n.default,LayoutTb:d.default,MySelect:f.default,MyUserType:h.default,MyDatePicker:m.default,MyInputButton:_.default,DialogNormal:v.default,DrawerRight:w.default},data:function(){return{tableData:[],searchDate:[],typeList:[],selData:[],visible:!1,modalVisible:!1,modalAuthVisible:!1,dialogLoading:!1,visibleConfim:!1,autoLoading:!1,drawerVisible:!1,drawerLoading:!1,tipsText:this.$t("APP手机号认证失败提示信息"),clearTime:"",action:"",subTitle:"",phoneOwner:"",status:"",searchKey:"",uploadFile:r.a.file_import_modal+"?fileName="+encodeURIComponent(this.$t("手机号录入模板.xls")),uploadAction:r.a.phone_limit_import,uploadResult:{},uploadProcess:"",form:{id:"",phone:"",name:"",no:"",des:"",phoneOwner:"1"},formAuth:{switch:!1,content:""}}},created:function(){this.init()},methods:{init:function(){var t=this,e={page:this.page,num:this.num,phoneOwner:this.phoneOwner,status:this.status,searchKey:this.searchKey};this.$axios.get(r.a.phone_limit_page,{params:e}).then((function(e){e.data.data&&(t.tableData=e.data.data.list,t.total=e.data.data.totalCount,t.num=e.data.data.num,t.page=e.data.data.currentPage)}))},initConfig:function(){var t=this;this.$axios.get(r.a.phone_limit_tips_get).then((function(e){e.data.data&&(t.formAuth={switch:e.data.data.status,content:e.data.data.des})}))},addInfo:function(){this.modalVisible=!0},settingInfo:function(){this.initConfig(),this.modalAuthVisible=!0},search:function(data){this.searchKey=data.input,this.page=1,this.init()},sizeChange:function(t){this.page=1,this.num=t,this.init()},currentPage:function(t){this.page=t,this.init()},jumpPage:function(data){this.page=data,this.init()},handleSelect:function(data){this.form.type=data},editInfo:function(t){this.form={id:t.id,phone:t.phone,name:t.name,no:t.phone_no,des:t.des,phoneOwner:t.phone_owner},this.modalVisible=!0},deleteInfo:function(t){this.form.id=t.id,this.subTitle=t.phone,this.visibleConfim=!0},importInfo:function(t){this.drawerVisible=!0},exportInfo:function(){var t,e={page:1,num:99999,phoneOwner:this.phoneOwner,status:this.status,searchKey:this.searchKey};e=this.$qs.stringify(e),t=r.a.phone_limit_export,window.open(t+"?"+e,"_self")},handleOkChange:function(data){var t=this;this.dialogLoading=!0;var e,o={id:this.form.id};e=r.a.phone_limit_del,o=this.$qs.stringify(o),this.$axios.post(e,o).then((function(e){200==e.data.code?(t.init(),Object(c.b)(e.data.desc)):Object(c.a)(e.data.desc),t.visibleConfim=!1,t.dialogLoading=!1}))},handleCancelChange:function(data){this.visibleConfim=!1},cancelDialog:function(){this.modalVisible=!1,this.modalAuthVisible=!1},closeDialog:function(t){this.form={id:"",phone:"",name:"",no:"",des:"",phoneOwner:"1"},this.formAuth={switch:!1,content:""},this.subTitle="",this.$refs.form&&this.$refs.form.resetFields(),this.$refs.formAuth&&this.$refs.formAuth.resetFields()},okDialog:function(t){var e=this,o="";this.$refs.form.validate((function(t){if(t){e.dialogLoading=!0;var n={phone:e.form.phone,name:e.form.name,phoneNo:e.form.no,des:e.form.des,phoneOwner:e.form.phoneOwner};""!=e.form.id&&(n.id=e.form.id),o=r.a.phone_limit_save,n=e.$qs.stringify(n),e.$axios.post(o,n,{loading:!1}).then((function(t){200==t.data.code?(e.modalVisible=!1,e.init(),Object(c.b)(t.data.desc)):Object(c.a)(t.data.desc),e.dialogLoading=!1}))}}))},okAuthDialog:function(t){var e=this,o="";this.$refs.formAuth.validate((function(t){if(t){e.dialogLoading=!0;var n={status:e.formAuth.switch,des:e.formAuth.content};o=r.a.phone_limit_tips_set,n=e.$qs.stringify(n),e.$axios.post(o,n).then((function(t){200==t.data.code?(e.modalAuthVisible=!1,e.init(),Object(c.b)(t.data.desc)):Object(c.a)(t.data.desc),e.dialogLoading=!1}))}}))},fliterTable:function(t,e,o){for(var n in t)"status"==n?this.status=t[n][0]:"owner"==n&&(this.phoneOwner=t[n][0]);this.init()},selOwner:function(t){this.form.phoneOwner=t},autoNo:function(){var t=this;this.autoLoading=!0,this.$axios.get(r.a.phone_limit_no).then((function(e){200==e.data.code?t.form.no=e.data.data:Object(c.a)(e.data.desc),t.autoLoading=!1}))},getRowKeys:function(t){return t.id},handleSelectionChange:function(data){this.selData=data},mutiOprInfo:function(t){var e=this,o=[],n={},l="";if(0!=this.selData.length){for(var i=0;i<this.selData.length;i++)o.push(this.selData[i].id);1==t?(n={id:o.join(),statsu:!0},l=r.a.phone_limit_status,this.$axios.get(l,{params:n}).then((function(t){200==t.data.code?(Object(c.b)(t.data.desc),e.init(),e.selData=[],e.$refs.refTable.clearSelection()):Object(c.a)(t.data.desc)}))):2==t?(n={id:o.join(),statsu:!1},l=r.a.phone_limit_status,this.$axios.get(l,{params:n}).then((function(t){200==t.data.code?(Object(c.b)(t.data.desc),e.init(),e.selData=[],e.$refs.refTable.clearSelection()):Object(c.a)(t.data.desc)}))):3==t&&(n={id:o.join()},l=r.a.phone_limit_del,n=this.$qs.stringify(n),this.$axios.post(l,n).then((function(t){200==t.data.code?(Object(c.b)(t.data.desc),e.init(),e.selData=[],e.$refs.refTable.clearSelection()):Object(c.a)(t.data.desc)})))}else Object(c.c)(this.$t("请选择需要操作的数据"))},closeDrawerDialog:function(t){this.uploadProcess="",this.uploadResult={},this.drawerVisible=t},cancelDrawDialog:function(){this.uploadProcess="",this.uploadResult={},this.drawerVisible=!1},uploadSuccess:function(t,e){this.uploadProcess=t.desc,200==t.code?this.uploadResult=t.data?t.data:[t.desc]:t.data?this.uploadResult=t.data:this.uploadResult=[t.desc]},uploadError:function(t,e){this.uploadProcess=t.data.data}}},k=(o(1620),o(10)),component=Object(k.a)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("layout-tb",[o("template",{slot:"tag"},[t._v("认证管理")]),t._v(" "),o("div",{attrs:{slot:"tab"},slot:"tab"},[o("el-row",[o("el-col",{attrs:{span:12}},[o("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-plus"},on:{click:function(e){return t.addInfo(e)}}},[t._v(t._s(t.$t("添加号码")))]),t._v(" "),o("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-circle-check"},on:{click:function(e){return t.mutiOprInfo(1)}}},[t._v(t._s(t.$t("批量启用")))]),t._v(" "),o("el-button",{attrs:{size:"small",type:"warning",icon:"el-icon-remove-outline"},on:{click:function(e){return t.mutiOprInfo(2)}}},[t._v(t._s(t.$t("批量停用")))]),t._v(" "),o("el-button",{attrs:{size:"small",type:"danger",icon:"el-icon-delete"},on:{click:function(e){return t.mutiOprInfo(3)}}},[t._v(t._s(t.$t("批量删除")))]),t._v(" "),o("el-button",{attrs:{size:"small",type:"text",icon:"el-icon-setting"},on:{click:function(e){return t.settingInfo(e)}}},[t._v(t._s(t.$t("认证设置")))])],1),t._v(" "),o("el-col",{staticClass:"text-right",attrs:{span:12}},[o("div",{staticClass:"layout-inline text-right"},[o("el-button",{attrs:{size:"small",type:"default",icon:"el-icon-download"},on:{click:function(e){return t.exportInfo(e)}}},[t._v(t._s(t.$t("导出")))]),t._v(" "),o("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-upload"},on:{click:function(e){return t.importInfo(e)}}},[t._v(t._s(t.$t("导入")))]),t._v(" "),o("my-input-button",{attrs:{size:"small",plain:"","width-class":"width: 200px",type:"success",clearable:!0,placeholder:t.$t("编号/手机/姓名/号段/备注")},on:{click:t.search}})],1)])],1)],1),t._v(" "),o("div",{attrs:{slot:"content"},slot:"content"},[o("el-table",{ref:"refTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-class-name":"custom-table-cell-bg",size:"medium","row-key":"id","row-key":t.getRowKeys,"max-height":t.tableHeight.height},on:{"filter-change":t.fliterTable,"selection-change":t.handleSelectionChange}},[o("el-table-column",{attrs:{"reserve-selection":!0,type:"selection",width:"55"}}),t._v(" "),o("el-table-column",{attrs:{align:"center",prop:"phone_no",label:t.$t("编号")},scopedSlots:t._u([{key:"default",fn:function(e){return[""!=e.row.phone_no?o("span",[t._v(t._s(e.row.phone_no))]):o("span",[t._v("--")])]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",prop:"section_no",label:t.$t("号段")}}),t._v(" "),o("el-table-column",{attrs:{align:"center",prop:"phone",label:t.$t("手机号")}}),t._v(" "),o("el-table-column",{attrs:{align:"center",prop:"phone_owner","filter-multiple":!1,"column-key":"owner",filters:t.filterPhoneOwner,label:t.$t("运营商")},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.phone_owner?o("span",[t._v(t._s(t.$t("移动")))]):t._e(),t._v(" "),2==e.row.phone_owner?o("span",[t._v(t._s(t.$t("联通")))]):t._e(),t._v(" "),3==e.row.phone_owner?o("span",[t._v(t._s(t.$t("电信")))]):t._e(),t._v(" "),4==e.row.phone_owner?o("span",[t._v(t._s(t.$t("其他")))]):t._e()]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:t.$t("姓名")},scopedSlots:t._u([{key:"default",fn:function(e){return[""!=e.row.name?o("span",[t._v(t._s(e.row.name))]):o("span",[t._v("--")])]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:t.$t("备注")},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[o("div",{staticClass:"text-center"},[""!=e.row.des?o("span",[t._v(t._s(e.row.des))]):o("span",[t._v("--")])]),t._v(" "),o("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[""!=e.row.des?o("span",[t._v(t._s(e.row.des))]):o("span",[t._v("--")])])])]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:t.$t("录入日期")},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[o("div",{staticClass:"text-center"},[o("span",[t._v(t._s(t.$moment(e.row.add_time).format("YYYY-MM-DD HH:mm:ss")))])]),t._v(" "),o("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[o("span",[t._v(t._s(t.$moment(e.row.add_time).format("YYYY-MM-DD HH:mm:ss")))])])])]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center","filter-multiple":!1,"column-key":"status",filters:t.filterEnableStatus,label:t.$t("状态")},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?o("span",{staticClass:"color-success"},[t._v(t._s(t.$t("启用")))]):t._e(),t._v(" "),0==e.row.status?o("span",{staticClass:"color-warning"},[t._v(t._s(t.$t("停用")))]):t._e()]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("i",{staticClass:"fa fa-edit color-grand margin-right-5",on:{click:function(o){return t.editInfo(e.row)}}}),t._v(" "),o("i",{staticClass:"fa fa-trash color-danger",on:{click:function(o){return t.deleteInfo(e.row)}}})]}}])})],1),t._v(" "),o("div",{staticClass:"layout-right-footer text-right"},[o("my-pagination",{staticClass:"layout-pagination",attrs:{total:t.total,"current-page":t.page,"page-size":t.num},on:{currentPage:t.currentPage,sizeChange:t.sizeChange,jumpChange:t.jumpPage}})],1)],1)],2),t._v(" "),o("dialog-normal",{attrs:{visible:t.modalVisible,title:t.$t("号码设置")},on:{close:t.closeDialog,"right-close":t.cancelDialog}},[o("div",{staticClass:"margin-top-10"},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"140px"}},[o("el-form-item",{attrs:{label:t.$t("手机号"),prop:"phone"}},[o("el-input",{staticClass:"width-260",model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),t._v(" "),o("el-form-item",{attrs:{label:t.$t("姓名"),prop:"name"}},[o("el-input",{staticClass:"width-260",model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:t.$t("备注"),prop:"des"}},[o("el-input",{staticClass:"width-260",model:{value:t.form.des,callback:function(e){t.$set(t.form,"des",e)},expression:"form.des"}})],1),t._v(" "),o("el-form-item",{attrs:{label:t.$t("编号"),prop:"no"}},[o("el-input",{staticClass:"width-260",model:{value:t.form.no,callback:function(e){t.$set(t.form,"no",e)},expression:"form.no"}},[o("el-button",{attrs:{slot:"append"},on:{click:t.autoNo},slot:"append"},[t.autoLoading?o("i",{staticClass:"el-icon-loading"}):t._e(),t._v("\n              "+t._s(t.$t("自动"))+"\n            ")])],1)],1),t._v(" "),o("el-form-item",{attrs:{label:t.$t("运营商")}},[o("el-button-group",[o("el-button",{attrs:{size:"small",type:1==t.form.phoneOwner?"primary":"default"},on:{click:function(e){return t.selOwner(1)}}},[t._v(t._s(t.$t("移动")))]),t._v(" "),o("el-button",{attrs:{size:"small",type:2==t.form.phoneOwner?"primary":"default"},on:{click:function(e){return t.selOwner(2)}}},[t._v(t._s(t.$t("联通")))]),t._v(" "),o("el-button",{attrs:{size:"small",type:3==t.form.phoneOwner?"primary":"default"},on:{click:function(e){return t.selOwner(3)}}},[t._v(t._s(t.$t("电信")))]),t._v(" "),o("el-button",{attrs:{size:"small",type:4==t.form.phoneOwner?"primary":"default"},on:{click:function(e){return t.selOwner(4)}}},[t._v(t._s(t.$t("其他")))])],1)],1)],1)],1),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"small"},on:{click:t.cancelDialog}},[t._v(t._s(t.$t("取消")))]),t._v(" "),o("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){0==t.dialogLoading&&t.okDialog()}}},[t.dialogLoading?o("i",{staticClass:"el-icon-loading"}):t._e(),t._v("\n        "+t._s(t.$t("确定"))+"\n      ")])],1)]),t._v(" "),o("dialog-normal",{attrs:{visible:t.modalAuthVisible,title:t.tipsText},on:{close:t.closeDialog,"right-close":t.cancelDialog}},[o("div",{staticClass:"margin-top-10"},[o("el-form",{ref:"formAuth",attrs:{model:t.formAuth,rules:t.rulesAuth,"label-width":"140px"}},[o("el-form-item",{attrs:{label:t.$t("功能启用")}},[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.formAuth.switch,callback:function(e){t.$set(t.formAuth,"switch",e)},expression:"formAuth.switch"}})],1),t._v(" "),o("el-form-item",{attrs:{label:t.$t("提示信息"),prop:"content"}},[o("el-input",{staticClass:"width-260",attrs:{type:"textarea",rows:4},model:{value:t.formAuth.content,callback:function(e){t.$set(t.formAuth,"content",e)},expression:"formAuth.content"}})],1)],1)],1),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"small"},on:{click:t.cancelDialog}},[t._v(t._s(t.$t("取消")))]),t._v(" "),o("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){0==t.dialogLoading&&t.okAuthDialog()}}},[t.dialogLoading?o("i",{staticClass:"el-icon-loading"}):t._e(),t._v("\n        "+t._s(t.$t("确定"))+"\n      ")])],1)]),t._v(" "),o("drawer-right",{attrs:{visible:t.drawerVisible,accept:".xls,.xlsx",data:{all:!0},loading:t.drawerLoading,"hide-footer":!0,size:"400px",title:t.$t("导入手机号"),action:t.uploadAction,"download-file":t.uploadFile,result:t.uploadResult,process:t.uploadProcess},on:{changeDrawer:t.closeDrawerDialog,"right-close":t.cancelDrawDialog,success:t.uploadSuccess,error:t.uploadError}}),t._v(" "),o("my-normal-dialog",{attrs:{visible:t.visibleConfim,loading:t.dialogLoading,title:"提示",detail:t.subTitle,content:"确认需要删除该信息？"},on:{"update:visible":function(e){t.visibleConfim=e},"ok-click":t.handleOkChange,"cancel-click":t.handleCancelChange,close:t.closeDialog}})],1)}),[],!1,null,"4deb6c17",null);e.default=component.exports;installComponents(component,{MyInputButton:o(1257).default,MyPagination:o(234).default,LayoutTb:o(1261).default,DialogNormal:o(235).default,DrawerRight:o(1268).default,MyNormalDialog:o(1260).default})}}]);