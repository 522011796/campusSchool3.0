(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1292:function(t,e,r){var o=r(180),n=r(35),l=r(36),c=r(37).f,d=r(241),m=r(1302),h=d("meta"),f=0,v=Object.isExtensible||function(){return!0},S=function(t){c(t,h,{value:{objectID:"O"+ ++f,weakData:{}}})},meta=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!l(t,h)){if(!v(t))return"F";if(!e)return"E";S(t)}return t[h].objectID},getWeakData:function(t,e){if(!l(t,h)){if(!v(t))return!0;if(!e)return!1;S(t)}return t[h].weakData},onFreeze:function(t){return m&&meta.REQUIRED&&v(t)&&!l(t,h)&&S(t),t}};o[h]=!0},1301:function(t,e,r){"use strict";var o=r(15),n=r(21),l=r(181),c=r(49),d=r(1292),m=r(712),h=r(711),f=r(35),v=r(20),S=r(361),_=r(183),y=r(364);t.exports=function(t,e,r){var C=-1!==t.indexOf("Map"),L=-1!==t.indexOf("Weak"),w=C?"set":"add",F=n[t],k=F&&F.prototype,T=F,D={},x=function(t){var e=k[t];c(k,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(L&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return L&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(L&&!f(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(l(t,"function"!=typeof F||!(L||k.forEach&&!v((function(){(new F).entries().next()})))))T=r.getConstructor(e,t,C,w),d.REQUIRED=!0;else if(l(t,!0)){var $=new T,A=$[w](L?{}:-0,1)!=$,I=v((function(){$.has(1)})),R=S((function(t){new F(t)})),O=!L&&v((function(){for(var t=new F,e=5;e--;)t[w](e,e);return!t.has(-0)}));R||((T=e((function(e,r){h(e,T,t);var o=y(new F,e,T);return null!=r&&m(r,o[w],o,C),o}))).prototype=k,k.constructor=T),(I||O)&&(x("delete"),x("has"),C&&x("get")),(O||A)&&x(w),L&&k.clear&&delete k.clear}return D[t]=T,o({global:!0,forced:T!=F},D),_(T,t),L||r.setStrong(T,t,C),T}},1302:function(t,e,r){var o=r(20);t.exports=!o((function(){return Object.isExtensible(Object.preventExtensions({}))}))},1303:function(t,e,r){"use strict";var o=r(37).f,n=r(182),l=r(713),c=r(184),d=r(711),m=r(712),h=r(362),f=r(363),v=r(32),S=r(1292).fastKey,_=r(111),y=_.set,C=_.getterFor;t.exports={getConstructor:function(t,e,r,h){var f=t((function(t,o){d(t,f,e),y(t,{type:e,index:n(null),first:void 0,last:void 0,size:0}),v||(t.size=0),null!=o&&m(o,t[h],t,r)})),_=C(e),L=function(t,e,r){var o,n,l=_(t),c=w(t,e);return c?c.value=r:(l.last=c={index:n=S(e,!0),key:e,value:r,previous:o=l.last,next:void 0,removed:!1},l.first||(l.first=c),o&&(o.next=c),v?l.size++:t.size++,"F"!==n&&(l.index[n]=c)),t},w=function(t,e){var r,o=_(t),n=S(e);if("F"!==n)return o.index[n];for(r=o.first;r;r=r.next)if(r.key==e)return r};return l(f.prototype,{clear:function(){for(var t=_(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,v?t.size=0:this.size=0},delete:function(t){var e=_(this),r=w(this,t);if(r){var o=r.next,n=r.previous;delete e.index[r.index],r.removed=!0,n&&(n.next=o),o&&(o.previous=n),e.first==r&&(e.first=o),e.last==r&&(e.last=n),v?e.size--:this.size--}return!!r},forEach:function(t){for(var e,r=_(this),o=c(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(o(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!w(this,t)}}),l(f.prototype,r?{get:function(t){var e=w(this,t);return e&&e.value},set:function(t,e){return L(this,0===t?0:t,e)}}:{add:function(t){return L(this,t=0===t?0:t,t)}}),v&&o(f.prototype,"size",{get:function(){return _(this).size}}),f},setStrong:function(t,e,r){var o=e+" Iterator",n=C(e),l=C(o);h(t,e,(function(t,e){y(this,{type:o,target:t,state:n(t),kind:e,last:void 0})}),(function(){for(var t=l(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),f(e)}}},1308:function(t,e,r){"use strict";var o=r(1301),n=r(1303);t.exports=o("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n)},1311:function(t,e,r){"use strict";r.r(e);r(237),r(709),r(179);var o,n=r(104),l=r(1265),c=r(7),d=r(1269),m=r(1257),h=r(6),f={name:"studentTreeAndListNoPage",components:(o={MyRadio:d.default,MyCascader:l.default},Object(n.a)(o,"MyRadio",d.default),Object(n.a)(o,"MyInputButton",m.default),o),props:{selValue:{default:"",type:[String,Array]},selArr:{default:function(){return[]},type:Array},setType:{default:"radio",type:[String,Number]},userType:{default:"",type:String},groupId:{default:"",type:[String,Number]},maxHeight:{default:"300",type:[String,Number]}},computed:{_selValue:function(){this.commSelUserVal=this.selValue},_selArr:function(){}},data:function(){return{commAllCheck:!1,commAllCheckCount:0,value:"",commPage:1,commNum:20,commTotalTotal:0,tableTeacherCommData:[],searchCommDeptData:[],commSex:"",commSearchKey:"",commSearchDept:"",commSearchCollege:"",commSearchMajor:"",commSearchGrade:"",commSearchClass:"",commSelUserVal:"",commSelUserArr:[],commSelUserNameArr:[],commSelUserTempArr:[],commSelUserValObj:{},commSelUserValArr:[],commLoading:!1,commFlag:!1,commMultipleSelection:[],commRow:"",commGetRowKeys:function(t){return t.user_id}}},created:function(){},methods:{_initTeacher:function(){var t=this;this.checkboxCount=0;var e={page:this.commPage,num:this.commNum,deleted:0,sex:this.commSex.sex,collegeId:this.commSearchCollege,majorId:this.commSearchMajor,grade:this.commSearchGrade,clasz:this.commSearchClass,groupId:this.groupId};this.commLoading=!0,e.realName=this.commSearchKey.input,this.$axios.get(c.a.dormaccess_student_select_status_page,{params:e}).then((function(e){if(e.data.data){for(var i=0;i<e.data.data.list.length;i++){Object(h.u)(e.data.data.list[i],t.commSelUserArr,"user_id")>-1?(t.commFlag=!0,e.data.data.list[i]._checked=!0,t.checkboxCount++):e.data.data.list[i]._checked=!1}0!=t.checkboxCount&&t.checkboxCount==t.tableTeacherCommData.length?t.commAllCheck=!0:t.commAllCheck=!1,t.commFlag=!1,t.tableTeacherCommData=e.data.data.list,t.commTotalTotal=e.data.data.totalCount,t.commNum=e.data.data.num,t.commPage=e.data.data.currentPage}t.commLoading=!1}))},_handleOpen:function(t){this.commPage=1,this.commNum=20,this.commSex=t||"",this.commSelUserArr=this.selArr,this._initTeacher()},_handleChange:function(data,t){this.commSelUserVal=data.user_id,this.commSelUserValObj=data,this.$emit("change",data)},_handleCascaderChange:function(data){this.commSearchCollege="",this.commSearchMajor="",this.commSearchGrade="",this.commSearchClass="",1==data.length?this.commSearchCollege=data[0]:2==data.length?(this.commSearchCollege=data[0],this.commSearchMajor=data[1]):3==data.length?(this.commSearchCollege=data[0],this.commSearchMajor=data[1],this.commSearchGrade=data[2]):4==data.length&&(this.commSearchCollege=data[0],this.commSearchMajor=data[1],this.commSearchGrade=data[2],this.commSearchClass=data[3]),this.commPage=1,this._initTeacher()},_handleSelectionSelect:function(t,e){if(t)this.commSelUserArr.push(e),e._checked=!0,this.checkboxCount++;else{var r=Object(h.u)(e,this.commSelUserArr,"user_id");this.commSelUserArr.splice(r,1),e._checked=!1,this.checkboxCount--}0!=this.checkboxCount&&this.checkboxCount==this.tableTeacherCommData.length?this.commAllCheck=!0:this.commAllCheck=!1,this.$emit("select",this.commSelUserArr)},_handleSelectionAllSelect:function(t){this.commAllCheck=t;for(var i=0;i<this.tableTeacherCommData.length;i++)if(1==t){this.tableTeacherCommData[i]._checked=!0,-1==Object(h.u)(this.tableTeacherCommData[i],this.commSelUserArr,"user_id")&&this.commSelUserArr.push(this.tableTeacherCommData[i]),this.checkboxCount++}else{var e=Object(h.u)(this.tableTeacherCommData[i],this.commSelUserArr,"user_id");this.commSelUserArr.splice(e,1),this.tableTeacherCommData[i]._checked=!1,this.checkboxCount--}this.$emit("select",this.commSelUserArr)},_handleSelectionChange:function(data){},_handleSizeChange:function(data){this.commPage=1,this.commNum=data,this._initTeacher()},_handleCurrentChange:function(data){this.commPage=data,this._initTeacher()},_handleResetChange:function(){this.value="",this.commNum=20,this.commPage=1,this.searchCommDeptData=[],this.commSearchKey="",this.commSearchDept="",this.commSelUserVal="",this.commSelUserValObj={},this.commSelUserValArr=[],this.commSelUserArr=[],this.$refs.SelectorDept&&this.$refs.SelectorDept.$refs.cascaderSelector&&this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths(),this.$refs.SelectorDept&&this.$refs.SelectorDept.$refs.cascaderSelector&&this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths()},_handleSelect:function(){this.commFlag=!0;for(var t=[],e=[].concat(this.tableTeacherCommData),r=[].concat(this.selArr),i=0;i<e.length;i++){Object(h.u)(e[i],r,"user_id")>-1&&(t.push(e[i]),this.$refs.commTableRef.toggleRowSelection(e[i],!0))}this.commSelUserTempArr=t,this.commFlag=!1},_handleSearch:function(data){this.commSearchKey=data,this.commPage=1,this._initTeacher()},_getSelectData:function(){this.$emit("select",this.commSelUserArr)},_selectBedno:function(t){var e=this,r={bedNo:this.commSex.bedNo,dromId:this.commSex.dormId,studentId:t.user_id,majorClassId:t.clasz};r=this.$qs.stringify(r),this.$axios.post(c.a.dorm_user_class_bed_distribute,r).then((function(t){t.data.data?(e._initTeacher(),Object(h.b)(t.data.desc),e.$emit("distribute",t.data.data)):Object(h.c)(t.data.desc)}))}}},v=r(10),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"commTeacherList"},[r("div",{staticClass:"layout-inline"},[r("my-cascader",{ref:"SelectorDept",staticClass:"layout-item",attrs:{size:"small","width-style":"160","sel-value":t.searchCommDeptData,type:"1","sub-type":"4"},on:{change:function(e){return t._handleCascaderChange(e)}}}),t._v(" "),r("my-input-button",{staticClass:"layout-item",attrs:{size:"small",clearable:!0,type:"success",plain:""},on:{click:t._handleSearch}})],1),t._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.commLoading,expression:"commLoading"}],ref:"commTableRef",attrs:{data:t.tableTeacherCommData,"max-height":t.maxHeight,size:"mini"}},["select"==t.setType?r("el-table-column",{attrs:{align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[null==e.row.bed_no?r("a",{staticClass:"color-grand",attrs:{href:"javascript:;"},on:{click:function(r){return t._selectBedno(e.row)}}},[t._v(t._s(t.$t("分配")))]):r("label",{staticClass:"color-warning"},[t._v(t._s(t.$t("已分配")))])]}}],null,!1,3111910370)}):t._e(),t._v(" "),"check"==t.setType?r("el-table-column",{attrs:{align:"center",width:"55"},scopedSlots:t._u([{key:"header",fn:function(e){return[r("el-checkbox",{on:{change:t._handleSelectionAllSelect},model:{value:t.commAllCheck,callback:function(e){t.commAllCheck=e},expression:"commAllCheck"}})]}},{key:"default",fn:function(e){return[r("el-checkbox",{on:{change:function(r){return t._handleSelectionSelect(r,e.row)}},model:{value:e.row._checked,callback:function(r){t.$set(e.row,"_checked",r)},expression:"scope.row._checked"}})]}}],null,!1,1304403255)}):t._e(),t._v(" "),"radio"==t.setType?r("el-table-column",{attrs:{align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("my-radio",t._b({attrs:{"sel-value":t.commSelUserVal,label:e.row.user_id},on:{change:function(r){return t._handleChange(e.row)}}},"my-radio",t._selValue,!1),[r("span")])]}}],null,!1,4043958644)}):t._e(),t._v(" "),r("el-table-column",{attrs:{property:"real_name",align:"center",label:"姓名"}}),t._v(" "),r("el-table-column",{attrs:{property:"student_id",align:"center",label:"学号"}}),t._v(" "),r("el-table-column",{attrs:{property:"",align:"center",label:"班级"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[r("div",{staticClass:"text-center"},[t._v(t._s(e.row.class_name?e.row.class_name:"--"))]),t._v(" "),r("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n            "+t._s(e.row.class_name?e.row.class_name:"--")+"\n          ")])])]}}])})],1),t._v(" "),r("div",{staticClass:"text-right margin-top-10"},[r("el-pagination",{attrs:{"current-page":t.commPage,"page-sizes":[10,20,30,50,100],"page-size":t.commNum,layout:"total, sizes, prev, pager, next",total:t.commTotalTotal},on:{"size-change":t._handleSizeChange,"current-change":t._handleCurrentChange}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MyCascader:r(1265).default,MyInputButton:r(1257).default,MyRadio:r(1269).default})},1317:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var o=r(242);var n=r(366);function l(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(n.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1398:function(t,e,r){var content=r(1704);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("7aaa4e5e",content,!0,{sourceMap:!1})},1703:function(t,e,r){"use strict";var o=r(1398);r.n(o).a},1704:function(t,e,r){(e=r(30)(!1)).push([t.i,".container[data-v-26646f28]{padding:10px 15px}.header-block[data-v-26646f28]{height:40px;line-height:40px}.title-block-tag[data-v-26646f28]{display:inline-block;height:20px;width:3px;background:#e6a23c;font-weight:700;border-radius:3px}.title-block-text[data-v-26646f28]{font-weight:700;position:relative;top:-5px}.block-item-bg[data-v-26646f28]{border-radius:5px;background:#fff;padding:10px}",""]),t.exports=e},2037:function(t,e,r){"use strict";r.r(e);r(237),r(360),r(65),r(43),r(106),r(1308),r(137),r(710),r(136),r(107);var o=r(1317),n=(r(53),r(9)),l=r(76),c=r(1261),d=r(1257),m=r(234),h=r(235),f=r(1260),v=r(1268),S=r(7),_=r(6),y=r(236),C=(r(1309),r(1265)),L=r(1527),w=r(1256),F=r(1533),k={mixins:[l.a,F.a],components:{MySelect:w.default,PcStaticTemplate:L.default,MyCascader:C.default,DrawerLayoutRight:y.default,LayoutTb:c.default,MyInputButton:d.default,MyPagination:m.default,DialogNormal:h.default,MyNormalDialog:f.default,DrawerRight:v.default},data:function(){return{drawerAddInfo:!1,drawerVisible:!1,drawerLoading:!1,visibleConfim:!1,dialogLoading:!1,btnLoading:!1,refreshTeacherStatus:!1,refreshStudentStatus:!1,tableData:[],searchKey:"",departmentPath:"",teacherArray:[],approverUsers:[],roleList:[],errorTeacher:"",roleOptions:[],title:"",titleType:"",searchCommDeptData:[],staticFormList:[],searchStaticForm:"",staticPcFormList:[],staticPcFormData:[],formId:"",staticId:"",typeList:[{label:"PC端模板",value:!0}],formStatic:{id:"",name:"",type:"",collegeAndDeptType:"0",collegeAndDept:[],roleStudents:[],roleTeachers:[],permissionContent:"",permissionContentArray:[],approverTeacherId:[],approverStudentId:[],roleList:[],collegeRole:[],deptRole:[],roleUsers:[]},form:{id:"",name:"",des:"",roleType:0,roleOprLook:!1,roleOprDel:!1,roleOprSubmit:!1,roleOprImOrEx:!1,roleTeachers:!1,roleStudents:!1,roleUsers:[],roleUserGroup:[],enable:!0,permissionContent:"",permissionContentArray:[],approverTeacherId:[],approverStudentId:[],roleList:[]}}},created:function(){this.init()},methods:{init:function(){var t=this,e={page:this.page,num:this.num,searchKey:this.searchKey,departmentPath:this.departmentPath};this.$axios.get(S.a.static_appinfo_form_page,{params:e}).then((function(e){e.data.data&&(t.tableData=e.data.data.list,t.total=e.data.data.totalCount,t.num=e.data.data.num,t.page=e.data.data.currentPage)}))},initFormList:function(){var t=this;this.$axios.get(S.a.static_appinfo_form_page,{params:{page:1,num:9999}}).then((function(e){if(e.data.data){for(var r=[],i=0;i<e.data.data.list.length;i++)r.push({label:e.data.data.list[i].stat_name,value:e.data.data.list[i].id});t.staticFormList=r}}))},addInitData:function(t,e){this.drawerAddInfo=!0},openedForm:function(){this.$refs.pcRef&&this.$refs.pcRef.initAsync()},settingInfo:function(data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.titleType=data.web_type,t.title=data.web_type?t.$t("PC端数据配置"):t.$t("H5端数据配置"),r={id:data.id},e.next=5,t.$axios.get(S.a.static_appinfo_form_info,{params:r}).then((function(e){if(200==e.data.code){for(var i=0;i<e.data.data.unitList.length;i++)0==i?(delete e.data.data.unitList[i].campusId,delete e.data.data.unitList[i].filterRules,delete e.data.data.unitList[i].groupRule,delete e.data.data.unitList[i].groupType,delete e.data.data.unitList[i].relaFormId,delete e.data.data.unitList[i].relaFromField1,delete e.data.data.unitList[i].relaFromField2):1==i||2==i||3==i||4==i||7==i?(delete e.data.data.unitList[i].campusId,delete e.data.data.unitList[i].relaFromField2,e.data.data.unitList[i].relaFromField1=null!=e.data.data.unitList[i].relaFromField1&&""!=e.data.data.unitList[i].relaFromField1?JSON.parse(e.data.data.unitList[i].relaFromField1):[],""==e.data.data.unitList[i].filterRules||null==e.data.data.unitList[i].filterRules?delete e.data.data.unitList[i].filterRules:e.data.data.unitList[i].filterRules=null!=e.data.data.unitList[i].filterRules&&""!=e.data.data.unitList[i].filterRules?JSON.parse(e.data.data.unitList[i].filterRules):""):5==i?(delete e.data.data.unitList[i].campusId,e.data.data.unitList[i].relaFromField1=null!=e.data.data.unitList[i].relaFromField1&&""!=e.data.data.unitList[i].relaFromField1?JSON.parse(e.data.data.unitList[i].relaFromField1):[],e.data.data.unitList[i].relaFromField2=null!=e.data.data.unitList[i].relaFromField2&&""!=e.data.data.unitList[i].relaFromField2?JSON.parse(e.data.data.unitList[i].relaFromField2):[],""==e.data.data.unitList[i].filterRules||null==e.data.data.unitList[i].filterRules?delete e.data.data.unitList[i].filterRules:e.data.data.unitList[i].filterRules=null!=e.data.data.unitList[i].filterRules&&""!=e.data.data.unitList[i].filterRules?JSON.parse(e.data.data.unitList[i].filterRules):""):6==i?(delete e.data.data.unitList[i].campusId,e.data.data.unitList[i].relaFromField1=null!=e.data.data.unitList[i].relaFromField1&&""!=e.data.data.unitList[i].relaFromField1?JSON.parse(e.data.data.unitList[i].relaFromField1):[],e.data.data.unitList[i].relaFromField2=null!=e.data.data.unitList[i].relaFromField2&&""!=e.data.data.unitList[i].relaFromField2?JSON.parse(e.data.data.unitList[i].relaFromField2):[],""==e.data.data.unitList[i].filterRules||null==e.data.data.unitList[i].filterRules?delete e.data.data.unitList[i].filterRules:e.data.data.unitList[i].filterRules=null!=e.data.data.unitList[i].filterRules&&""!=e.data.data.unitList[i].filterRules?JSON.parse(e.data.data.unitList[i].filterRules):"",""==e.data.data.unitList[i].filterRules2||null==e.data.data.unitList[i].filterRules2?delete e.data.data.unitList[i].filterRules2:e.data.data.unitList[i].filterRules2=null!=e.data.data.unitList[i].filterRules2&&""!=e.data.data.unitList[i].filterRules2?JSON.parse(e.data.data.unitList[i].filterRules2):""):delete e.data.data.unitList[i].campusId;t.staticPcFormData=e.data.data.unitList}}));case 5:t.staticId=data.id+"",t.drawerVisible=!0;case 7:case"end":return e.stop()}}),e)})))()},editInfo:function(data){var t=this,e={id:data.id};this.$axios.get(S.a.static_appinfo_form_info,{params:e,loading:!1}).then((function(e){t.formStatic={id:e.data.data.id,name:e.data.data.statName,type:e.data.data.webType,collegeAndDeptType:1==e.data.data.departmentType?"1":"0",collegeAndDept:[],roleStudents:e.data.data.permission.permissionStudentSwitch,roleTeachers:e.data.data.permission.permissionTeacherSwitch,permissionContent:"",permissionContentArray:[],approverTeacherId:[],approverStudentId:[],roleList:null!=e.data.data.permission.roleContent&&""!=e.data.data.permission.roleContent?JSON.parse(e.data.data.permission.roleContent):[],collegeRole:null!=e.data.data.permission.collegeContent&&""!=e.data.data.permission.collegeContent?e.data.data.permission.collegeContent.split(","):[],deptRole:[],roleUsers:[]};var r=[];if(t.form.permissionContentArray=[],t.approverUsers=[],""!=e.data.data.permission.userContent){t.approverUsers=e.data.data.permission.userContent.split(","),r=e.data.data.permission.userContent.split(",");for(var i=0;i<r.length;i++)t.formStatic.permissionContentArray.push({user_id:r[i]})}var o=[];if(1==e.data.data.departmentType)for(var n=0;n<e.data.data.collegeList.length;n++)o.push([e.data.data.collegeList[n].collegeId]);else for(var l=0;l<e.data.data.deptList.length;l++)e.data.data.deptList[l].departmentIds&&e.data.data.deptList[l].departmentIds.length>0&&o.push(JSON.parse(e.data.data.deptList[l].departmentIds));t.formStatic.collegeAndDept=o})),this.drawerAddInfo=!0},deleteInfo:function(t){this.form.id=t.id,this.visibleConfim=!0},sizeChange:function(t){this.page=1,this.num=t,this.init()},currentPage:function(t){this.page=t,this.init()},jumpPage:function(data){this.page=data,this.init()},search:function(data){this.searchKey=data.input,this.page=1,this.init()},changeFormType:function(data){},handleSearchChange:function(data,t){switch(t){case 1:this.searchStaticForm=data}},handleCascaderChange:function(data){this.departmentPath=data[data.length-1],this.page=1,this.init()},closeDrawerDialog:function(t){this.closeDialog(),this.$refs.pcRef&&this.$refs.pcRef.closePcDialog(),this.drawerAddInfo=!1,this.drawerVisible=!1},cancelDrawDialog:function(){this.drawerAddInfo=!1,this.drawerVisible=!1},closeDialog:function(t){this.formStatic={id:"",name:"",type:"",collegeAndDeptType:"1",collegeAndDept:[],roleStudents:[],roleTeachers:[],permissionContent:"",permissionContentArray:[],approverTeacherId:[],approverStudentId:[],roleList:[],collegeRole:[],deptRole:[],roleUsers:[]},this.form={id:"",name:"",des:"",roleType:0,roleOprLook:!1,roleOprDel:!1,roleOprSubmit:!1,roleOprImOrEx:!1,roleTeachers:!1,roleStudents:!1,roleUsers:[],roleUserGroup:[],enable:!0,permissionContent:"",permissionContentArray:[],approverTeacherId:[],approverStudentId:[],roleList:[]},this.errorTeacher="",this.teacherArray=[],this.approverUsers=[],this.resetCasadeSelector("selectorDept"),this.resetCasadeSelector("SelectorCollege"),this.$refs.form&&this.$refs.form.resetFields()},handleOkChange:function(data){var t=this;this.dialogLoading=!0;var e,r={id:this.form.id};e=S.a.static_appinfo_form_del,r=this.$qs.stringify(r),this.$axios.post(e,r,{loading:!1}).then((function(e){200==e.data.code?(t.init(),Object(_.b)(e.data.desc)):Object(_.a)(e.data.desc),t.visibleConfim=!1,t.dialogLoading=!1}))},handleCancelChange:function(data){this.visibleConfim=!1},handleSelect:function(t,e){if(1==e){var r="1"==e;this.formStatic.type=r}else 2==e?this.formStatic.collegeAndDept=t:3==e&&(this.formStatic.collegeAndDept=[],this.formStatic.collegeAndDeptType=t)},handleUserType:function(t){this.formStatic.collegeRole=t},handleDeptChange:function(data){this.formStatic.roleList=data},changeFormTeacher:function(data){this.formStatic.roleTeachers=data},changeFormStudent:function(data){this.formStatic.roleStudents=data},loadingShow:function(t){var e=this,r=null;switch(clearTimeout(r),t){case 1:this.refreshTeacherStatus=!0,r=setTimeout((function(){e.refreshTeacherStatus=!1,clearTimeout(r)}),1e3);break;case 2:this.refreshStudentStatus=!0,r=setTimeout((function(){e.refreshStudentStatus=!1,clearTimeout(r)}),1e3)}},handleShowTeacher:function(t){var e=this;setTimeout((function(){1==t?e.$refs.popverTeacherRef._handleOpen():2==t&&e.$refs.popverStudentRef._handleOpen()}),800)},handleSelUser:function(data,t){if(1==t){this.formStatic.approverTeacherId=data;var e=this.formStatic.approverStudentId?this.formStatic.approverStudentId:[];this.formStatic.roleUsers=e.concat(this.formStatic.approverTeacherId)}else if(2==t){this.form.approverStudentId=data;var r=this.formStatic.approverTeacherId?this.formStatic.approverTeacherId:[];this.formStatic.roleUsers=r.concat(this.formStatic.approverStudentId)}this.formStatic.roleUsers=Object(o.a)(new Set(this.formStatic.roleUsers)),this.approverUsers=this.formStatic.roleUsers},okDrawDialog:function(t){var e,r=this;this.staticPcFormList=[];var o=this.$refs.pcRef;if(0!=o.staticPcFormList.length)if(""!=o.staticPcFormList[0].filterType&&""!=o.staticPcFormList[0].unitName)if(""!=o.staticPcFormList[1].relaFormId&&0!=o.staticPcFormList[1].relaFromField1.length&&""!=o.staticPcFormList[1].unitName)if(""!=o.staticPcFormList[2].relaFormId&&0!=o.staticPcFormList[2].relaFromField1.length&&""!=o.staticPcFormList[2].unitName)if(""!=o.staticPcFormList[3].relaFormId&&0!=o.staticPcFormList[3].relaFromField1.length&&""!=o.staticPcFormList[3].unitName)if(""!=o.staticPcFormList[4].relaFormId&&0!=o.staticPcFormList[4].relaFromField1.length&&""!=o.staticPcFormList[4].unitName)if(""!=o.staticPcFormList[5].relaFormId&&0!=o.staticPcFormList[5].relaFromField1.length&&0!=o.staticPcFormList[5].relaFromField2.length&&""!=o.staticPcFormList[5].unitName)if(""!=o.staticPcFormList[6].relaFormId&&0!=o.staticPcFormList[6].relaFromField1.length&&""!=o.staticPcFormList[6].unitName)if(""!=o.staticPcFormList[7].relaFormId&&0!=o.staticPcFormList[7].relaFromField1.length&&""!==o.staticPcFormList[7].groupType){var n={list:o.staticPcFormList};e=S.a.static_appinfo_form_unit_save,this.btnLoading=!0,this.$axios.post(e,n,{loading:!1,dataType:"stringfy"}).then((function(t){200==t.data.code?(r.drawerVisible=!1,r.$refs.pcRef.closePcDialog(),r.init(),Object(_.b)(t.data.desc)):Object(_.a)(t.data.desc),r.btnLoading=!1}))}else Object(_.c)(this.$t("请设置表格信息"));else Object(_.c)(this.$t("请设置环形图信息"));else Object(_.c)(this.$t("请设置柱状图信息"));else Object(_.c)(this.$t("请设置顶部卡片信息"));else Object(_.c)(this.$t("请设置顶部卡片信息"));else Object(_.c)(this.$t("请设置顶部卡片信息"));else Object(_.c)(this.$t("请设置顶部卡片信息"));else Object(_.c)(this.$t("请设置搜索栏信息"));else Object(_.c)(this.$t("检测到统计表单信息未设置完全，请设置"))},okFormDrawDialog:function(){var t=this;this.$refs.formStatic.validate((function(e){if(e){for(var r={statName:t.formStatic.name,webType:t.formStatic.type,departmentType:t.formStatic.collegeAndDeptType,departmentIds:t.formStatic.collegeAndDept.length>0?JSON.stringify(t.formStatic.collegeAndDept):"",permissionStudentSwitch:t.formStatic.roleStudents,permissionTeacherSwitch:t.formStatic.roleTeachers,collegeContent:t.formStatic.collegeRole.length>0?t.formStatic.collegeRole.join():"",roleContent:t.formStatic.roleList.length>0?JSON.stringify(t.formStatic.roleList):""},o=[],i=0;i<t.formStatic.permissionContentArray.length;i++)o.push(t.formStatic.permissionContentArray[i].user_id);r.userContent=o.join(),""!=t.formStatic.id&&(r.id=t.formStatic.id),r=t.$qs.stringify(r),t.btnLoading=!0,t.$axios.post(S.a.static_appinfo_form_save,r,{loading:!1}).then((function(e){200==e.data.code?(t.drawerAddInfo=!1,t.init(),Object(_.b)(e.data.desc)):Object(_.a)(e.data.desc),t.btnLoading=!1}))}}))},appClick:function(){this.$refs.pcRef.h5Dialog=!0}}},T=(r(1703),r(10)),component=Object(T.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("layout-tb",[r("template",{slot:"tag"},[t._v("统计表管理")]),t._v(" "),r("div",{attrs:{slot:"tab"},slot:"tab"},[r("el-row",[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"layout-inline"},[r("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-plus"},on:{click:function(e){return t.addInitData(e)}}},[t._v(t._s(t.$t("创建统计表")))]),t._v(" "),r("my-cascader",{ref:"SelectorDeptSearch",staticClass:"layout-item",attrs:{props:{checkStrictly:!0},size:"small","width-style":"160",clearable:!0,"sel-value":t.searchCommDeptData,type:"4","sub-type":""},on:{change:function(e){return t.handleCascaderChange(e)}}})],1)]),t._v(" "),r("el-col",{staticClass:"text-right",attrs:{span:12}},[r("MyInputButton",{attrs:{size:"small",plain:"","width-class":"width: 150px",type:"success",clearable:!0,placeholder:t.$t("名称")},on:{click:t.search}})],1)],1)],1),t._v(" "),r("div",{attrs:{slot:"content"},slot:"content"},[r("el-table",{ref:"refTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-class-name":"custom-table-cell-bg",size:"medium","max-height":t.tableHeight.height}},[r("el-table-column",{attrs:{align:"center",prop:"permission_name",label:t.$t("名称")},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[r("div",{staticClass:"text-center"},[t._v(t._s(e.row.stat_name))]),t._v(" "),r("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[r("span",[t._v(t._s(e.row.stat_name))])])])]}}])}),t._v(" "),r("el-table-column",{attrs:{align:"center",label:t.$t("创建时间")},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(t.$moment(e.row.create_time).format("YYYY-MM-DD HH:mm")))])]}}])}),t._v(" "),r("el-table-column",{attrs:{align:"center",label:t.$t("部门/院系")},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-popover",{attrs:{trigger:"hover",placement:"left"}},[r("div",{staticClass:"text-center"},[""!=e.row.department_names&&null!=e.row.department_names?r("div",{staticStyle:{"max-height":"200px","overflow-y":"auto"}},t._l(e.row.department_names.split(","),(function(e,o){return r("div",{key:o},[r("span",{staticClass:"font-size-12"},[t._v(t._s(e))])])})),0):r("div",[t._v("--")])]),t._v(" "),r("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[r("span",[t._v(t._s(e.row.department_names?e.row.department_names:"--"))])])])]}}])}),t._v(" "),r("el-table-column",{attrs:{align:"center",label:t.$t("模版类型")},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[r("div",{staticClass:"text-center"},[t._v(t._s(e.row.web_type?t.$t("PC模版"):t.$t("H5模版")))]),t._v(" "),r("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[r("span",[t._v(t._s(e.row.web_type?t.$t("PC模版"):t.$t("H5模版")))])])])]}}])}),t._v(" "),r("el-table-column",{attrs:{align:"center",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("i",{staticClass:"fa fa-cog margin-right-5 color-grand",on:{click:function(r){return t.settingInfo(e.row)}}}),t._v(" "),r("i",{staticClass:"fa fa-edit margin-right-5 color-grand",on:{click:function(r){return t.editInfo(e.row)}}}),t._v(" "),r("i",{staticClass:"fa fa-trash color-danger",on:{click:function(r){return t.deleteInfo(e.row)}}})]}}])})],1),t._v(" "),r("div",{staticClass:"layout-right-footer text-right"},[r("my-pagination",{staticClass:"layout-pagination",attrs:{total:t.total,"current-page":t.page,"page-size":t.num},on:{currentPage:t.currentPage,sizeChange:t.sizeChange,jumpChange:t.jumpPage}})],1)],1)],2),t._v(" "),r("drawer-layout-right",{attrs:{visible:t.drawerAddInfo,size:"600px",title:t.$t("统计表设置")},on:{changeDrawer:t.closeDrawerDialog,"right-close":t.cancelDrawDialog}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("div",[r("div",{staticClass:"color-muted margin-top-5"},[r("span",[r("label",{staticClass:"title-block-tag"}),t._v(" "),r("label",{staticClass:"title-block-text color-warning"},[t._v(t._s(t.$t("基础信息")))])])]),t._v(" "),r("div",{staticClass:"block-item-bg font-size-12",staticStyle:{position:"relative"}},[r("el-form",{ref:"formStatic",attrs:{model:t.formStatic,rules:t.staticRules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:t.$t("名称"),prop:"name"}},[r("el-input",{staticClass:"width-300",attrs:{size:"small"},model:{value:t.formStatic.name,callback:function(e){t.$set(t.formStatic,"name",e)},expression:"formStatic.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:t.$t("类型"),prop:"name"}},[r("my-select",{attrs:{size:"small",clearable:!0,"sel-value":t.formStatic.type,options:t.typeList,"width-style":"300"},on:{change:function(e){return t.handleSelect(e,1)}}})],1),t._v(" "),r("el-form-item",{attrs:{label:t.$t("部门/院系"),prop:"name"}},[r("div",[r("el-radio-group",{on:{change:function(e){return t.handleSelect(e,3)}},model:{value:t.formStatic.collegeAndDeptType,callback:function(e){t.$set(t.formStatic,"collegeAndDeptType",e)},expression:"formStatic.collegeAndDeptType"}},[r("el-radio",{attrs:{label:"0"}},[t._v("部门")]),t._v(" "),r("el-radio",{attrs:{label:"1"}},[t._v("院系")])],1)],1),t._v(" "),r("my-cascader",{ref:"SelectorCollege",attrs:{size:"small","sel-value":t.formStatic.collegeAndDept,props:{multiple:!0},type:0==t.formStatic.collegeAndDeptType?"4":"1","sub-type":1==t.formStatic.collegeAndDeptType?"1":"id","width-style":"300"},on:{change:function(e){return t.handleSelect(e,2)}}})],1)],1)],1)]),t._v(" "),r("div",{staticClass:"margin-top-20"},[r("div",{staticClass:"color-muted margin-top-5"},[r("span",[r("label",{staticClass:"title-block-tag"}),t._v(" "),r("label",{staticClass:"title-block-text color-warning"},[t._v(t._s(t.$t("权限成员")))])])]),t._v(" "),r("div",{staticClass:"block-item-bg font-size-12",staticStyle:{position:"relative"}},[r("div",{staticClass:"padding-lr-10"},[r("div",[r("div",{staticClass:"margin-top-5"},[r("span",{staticClass:"color-muted margin-right-10"},[t._v(t._s(t.$t("成员范围"))+": ")]),t._v(" "),r("el-checkbox",{on:{change:t.changeFormStudent},model:{value:t.formStatic.roleStudents,callback:function(e){t.$set(t.formStatic,"roleStudents",e)},expression:"formStatic.roleStudents"}},[r("span",{staticClass:"font-size-12"},[t._v(t._s(t.$t("所有学生")))])]),t._v(" "),r("el-checkbox",{on:{change:t.changeFormTeacher},model:{value:t.formStatic.roleTeachers,callback:function(e){t.$set(t.formStatic,"roleTeachers",e)},expression:"formStatic.roleTeachers"}},[r("span",{staticClass:"font-size-12"},[t._v(t._s(t.$t("所有老师")))])])],1)]),t._v(" "),r("div",{staticClass:"margin-top-10"},[r("div",{staticClass:"margin-top-10"},[r("span",{staticClass:"color-muted margin-right-10"},[t._v(t._s(t.$t("组织范围"))+": ")]),t._v(" "),r("el-popover",{attrs:{"popper-class":"custom-popper-class-form",placement:"top",width:"700",trigger:"click"},on:{show:function(e){return t.handleShowTeacher(1)}}},[r("div",[r("teacher-tree-and-list-no-page",{ref:"popverTeacherRef",attrs:{"user-type":"user","group-id":t.formStatic.id,"sel-arr":t.formStatic.permissionContentArray,"set-type":"check"},on:{select:function(e){return t.handleSelUser(e,1)}}})],1),t._v(" "),r("el-button",{attrs:{slot:"reference",type:"success",plain:"",size:"small"},on:{click:function(e){return t.loadingShow(1)}},slot:"reference"},[1==t.refreshTeacherStatus?r("i",{staticClass:"fa fa-refresh fa-spin"}):t._e(),t._v("\n                    "+t._s(t.$t("教师"))+"\n                  ")])],1),t._v(" "),r("el-popover",{attrs:{"popper-class":"custom-popper-class-form",placement:"top",width:"700",trigger:"click"},on:{show:function(e){return t.handleShowTeacher(2)}}},[r("div",[r("student-tree-and-list-no-page",{ref:"popverStudentRef",attrs:{"group-id":t.formStatic.id,"sel-arr":t.formStatic.permissionContentArray,"set-type":"check"},on:{select:function(e){return t.handleSelUser(e,2)}}})],1),t._v(" "),r("el-button",{attrs:{slot:"reference",type:"success",plain:"",size:"small"},on:{click:function(e){return t.loadingShow(2)}},slot:"reference"},[1==t.refreshStudentStatus?r("i",{staticClass:"fa fa-refresh fa-spin"}):t._e(),t._v("\n                    "+t._s(t.$t("学生"))+"\n                  ")])],1),t._v(" "),r("span",[t._v(t._s(t.$t("人数"))+": "+t._s(t.approverUsers.length))])],1)]),t._v(" "),r("div",{staticClass:"margin-top-10"},[r("div",{staticClass:"layout-inline font-size-12",staticStyle:{position:"relative"}},[r("span",{staticClass:"layout-item color-muted margin-right-10"},[t._v(t._s(t.$t("院系角色"))+": ")]),t._v(" "),r("el-select",{staticStyle:{width:"300px"},attrs:{size:"small",multiple:""},on:{change:t.handleUserType},model:{value:t.formStatic.collegeRole,callback:function(e){t.$set(t.formStatic,"collegeRole",e)},expression:"formStatic.collegeRole"}},t._l(t.fiterTeacherRoleTreeType,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),t._v(" "),r("div",{staticClass:"margin-top-10"},[r("div",{staticClass:"layout-inline font-size-12",staticStyle:{position:"relative"}},[r("span",{staticClass:"layout-item color-muted margin-right-10"},[t._v(t._s(t.$t("部门角色"))+": ")]),t._v(" "),r("my-cascader",{ref:"SelectorDept",staticClass:"layout-item",attrs:{clearable:!0,props:{multiple:!0},size:"small","width-style":"300","sel-value":t.formStatic.roleList,type:"5","sub-type":""},on:{change:function(e){return t.handleDeptChange(e)}}})],1)])])])])]),t._v(" "),r("div",{staticClass:"padding-lr-10",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:t.cancelDrawDialog}},[t._v(t._s(t.$t("取消")))]),t._v(" "),r("el-button",{attrs:{size:"small",type:"primary",loading:t.btnLoading},on:{click:function(e){return t.okFormDrawDialog()}}},[t._v("\n        "+t._s(t.$t("确定"))+"\n      ")])],1)]),t._v(" "),r("drawer-layout-right",{attrs:{visible:t.drawerVisible,size:"85%",title:t.title},on:{changeDrawer:t.closeDrawerDialog,opened:t.openedForm,"right-close":t.cancelDrawDialog}},[r("div",{attrs:{slot:"title"},slot:"title"},[r("div",{staticClass:"header-block padding-lr-10"},[r("el-row",[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"layout-inline"},[r("span",{staticClass:"tab-class font-bold layout-item"},[t._v("\n                "+t._s(t.title)+"\n              ")]),t._v(" "),r("el-button",{attrs:{type:"warning",size:"small"},on:{click:t.appClick}},[t._v(t._s(t.$t("移动端模版预览")))])],1)])],1)],1)]),t._v(" "),r("div",{attrs:{slot:"content"},slot:"content"},[1==t.titleType?[r("pc-static-template",{ref:"pcRef",attrs:{"static-id":t.staticId,"static-pc-form-data":t.staticPcFormData}})]:t._e()],2),t._v(" "),r("div",{staticClass:"padding-lr-10",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:t.cancelDrawDialog}},[t._v(t._s(t.$t("取消")))]),t._v(" "),r("el-button",{attrs:{size:"small",type:"primary",loading:t.btnLoading},on:{click:function(e){return t.okDrawDialog()}}},[t._v("\n        "+t._s(t.$t("确定"))+"\n      ")])],1)]),t._v(" "),r("my-normal-dialog",{attrs:{visible:t.visibleConfim,loading:t.dialogLoading,title:"提示",content:"确认需要删除该信息？"},on:{"update:visible":function(e){t.visibleConfim=e},"ok-click":t.handleOkChange,"cancel-click":t.handleCancelChange,close:t.closeDialog}})],1)}),[],!1,null,"26646f28",null);e.default=component.exports;installComponents(component,{MyCascader:r(1265).default,MyInputButton:r(1257).default,MyPagination:r(234).default,LayoutTb:r(1261).default,MySelect:r(1256).default,TeacherTreeAndListNoPage:r(1305).default,StudentTreeAndListNoPage:r(1311).default,DrawerLayoutRight:r(236).default,PcStaticTemplate:r(1527).default,MyNormalDialog:r(1260).default})}}]);