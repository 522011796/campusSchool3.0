(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1297:function(t,e,l){"use strict";l.r(e);l(179);var n=l(104),r={props:{chartId:"",chartTitle:{default:"达标率",type:String},data:{default:0,type:[String,Number]}},data:function(){return{}},mounted:function(){this.lineChart()},created:function(){},methods:{lineChart:function(){var t,e=document.getElementById(this.chartId);this.$echarts.init(e).setOption({grid:{top:"4%",left:"5%",right:"4%",bottom:"3%",containLabel:!0},tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[(t={radius:"100%",name:"",type:"gauge",title:{textStyle:{fontSize:13,color:"#808080",shadowColor:"#fff",shadowBlur:10}},axisLine:{lineStyle:{width:8,color:[[.2,"#c23531"],[.8,"#63869e"],[1,"#91c7ae"]]}},axisLabel:{textStyle:{}},splitLine:{length:10,lineStyle:{width:3,color:"#fff",shadowColor:"#fff",shadowBlur:10}},pointer:{width:2,length:"50%",shadowColor:"#ccc",shadowBlur:5},detail:{formatter:"{value}%",offsetCenter:[0,"20%"],textStyle:{fontSize:12}}},Object(n.a)(t,"title",{show:!0,offsetCenter:[0,"-20%"],color:"#333",fontSize:12}),Object(n.a)(t,"data",[{value:this.data,name:this.chartTitle}]),t)]})}},watch:{data:function(t,e){this.lineChart()}}},o=l(10),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{height:"100%"},attrs:{id:this.chartId}})}),[],!1,null,"4975f595",null);e.default=component.exports},1406:function(t,e,l){var content=l(1720);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(31).default)("b9d59530",content,!0,{sourceMap:!1})},1719:function(t,e,l){"use strict";var n=l(1406);l.n(n).a},1720:function(t,e,l){(e=l(30)(!1)).push([t.i,".rpStatic-top-item .person-item[data-v-3a202820]{display:inline-block;width:60px}.rpStatic-top-item .title[data-v-3a202820]{font-weight:700}.rp-img[data-v-3a202820]{height:50px;width:50px;border:1px solid #ddd}.rp-fotter-page[data-v-3a202820]{border:1px solid #ebeef5;border-top:0;height:30px;line-height:30px;width:348px}.ellipsis-text[data-v-3a202820]{display:inline-block;max-width:50px}.title-tag[data-v-3a202820]{display:inline-block;height:20px;width:5px;border-radius:5px;background:#e6a23c}.title-text[data-v-3a202820]{position:relative;top:-5px}",""]),t.exports=e},2043:function(t,e,l){"use strict";l.r(e);l(106),l(710);var n,r=l(104),o=(l(53),l(9)),c=l(76),d=l(1264),h=l(1256),m=l(236),v=l(240),f=l(1262),_=l(234),y=l(1284),w=l(1279),D=l(1269),C=l(235),S=l(1257),x=l(238),T=l(1275),k=l(7),$=(l(6),l(1534)),M={mixins:[c.a,$.a],components:{LayoutLr:d.default,MyElTree:f.default,MySelect:h.default,DrawerLayoutRight:m.default,MyAuditDetail:v.default,MyPagination:_.default,MyAuditStatus:y.default,CircleChart:w.default,MyRadio:D.default,DialogNormal:C.default,MyInputButton:S.default,UploadSquare:x.default,MySearchOfDate:T.a},data:function(){return{toggleTopShow:!1,filterStatusTypes:[],searchTimeData:{},searchTopTime:this.$moment(new Date).format("YYYY-MM-DD"),centerTop:["40%","50%"],pageStudent:1,numStudent:20,totalStudent:0,dataAudit:{},configData:{},drawerVisible:!1,drawerClassVisible:!1,modalVisible:!1,dialogLoading:!1,visibleConfim:!1,studentLoading:!1,popverVisible:!1,subTitle:"",tableData:[],studentData:[],tableStatusData:[],searchDept:"",searchCollege:"",searchMajor:"",searchGrade:"",searchClass:"",searchLocalClass:"",applyTimeBegin:"",applyTimeEnd:"",type:"",level:"",status:"",searchKey:"",searchDate:[],filterLevels:[],filterAddLevels:[],personTotal:0,reTotal:0,puTotal:0,uploadFileAction:k.a.upload_file,attendData:0,typeData:[],typeDataKey:[],levelData:[],levelDataKey:[],searchStudentKey:"",errorStudent:"",staticData:{},qtztRate:0,allStatus:[],allStatusKey:[],rightStatus:[],rightStatusKey:[],leftStatus:[],leftStatusKey:[],shareData:{},tableDetailData:[],form:{leaveRateType:3,unSignRateType:3,acturalRateType:3,punishRateType:3,homeworkRateType:3,classRateType:3,leaveRate:"",unSignRate:"",acturalRate:"",punishRate:"",homeworkRate:"",classRate:"",rateRange:[]},formConf:{id:"",name:"",min:"",max:""}}},created:function(){this.init()},methods:(n={init:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var l,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={page:t.page,num:t.num,departmentPath:t.searchDept.value,keyWord:t.searchKey,staticType:1},e.next=3,t.getCurrentGDateInfo();case 3:return e.next=5,t.getSessionInfo();case 5:1==t.searchTimeData.timeUnit?(n=t.searchTimeData.value,l.busiTime=n,l.timeUnit=3):2==t.searchTimeData.timeUnit?(l.weekNum=t.searchTimeData.value,l.timeUnit=2):3==t.searchTimeData.timeUnit?(r=t.searchTimeData.value,l.year=r.split("-")[0],l.month=r.split("-")[1],l.timeUnit=4):4==t.searchTimeData.timeUnit?(l.year=t.searchTimeData.value,l.timeUnit=6):(t.$moment(new Date).format("YYYY-MM-DD"),l.busiTime=t.$moment(new Date).format("YYYY-MM-DD"),l.timeUnit=3),l.termId=t.currentTermId,t.initStatic(l),t.initInfo(l);case 9:case"end":return e.stop()}}),e)})))()},initInfo:function(t){var e=this;this.$axios.get(k.a.attend_teacher_static_list_page,{params:t}).then((function(t){t.data.data&&(e.tableData=t.data.data.list,e.total=t.data.data.totalCount,e.num=t.data.data.num,e.page=t.data.data.currentPage)}))},initStatic:function(t){var e=this;this.$axios.get(k.a.attend_teacher_static_count,{params:t}).then((function(t){if(t.data.data){e.personTotal=t.data.data.userSize;var l,n=[];n.push({name:e.$t("迟到"),value:null==t.data.data.late?0:t.data.data.late,rate:null==t.data.data.lateRate?0:t.data.data.lateRate},{name:e.$t("早退"),value:null==t.data.data.early?0:t.data.data.early,rate:null==t.data.data.earlyRate?0:t.data.data.earlyRate},{name:e.$t("旷工"),value:null==t.data.data.abs?0:t.data.data.abs,rate:null==t.data.data.absRate?0:t.data.data.absRate},{name:e.$t("请假"),value:null==t.data.data.leave?0:t.data.data.leave,rate:null==t.data.data.leaveRate?0:t.data.data.leaveRate},{name:e.$t("出差"),value:null==t.data.data.travel?0:t.data.data.travel,rate:null==t.data.data.travelRate?0:t.data.data.travelRate}),l=[e.$t("迟到"),e.$t("早退"),e.$t("旷工"),e.$t("请假"),e.$t("出差")],e.attendData=t.data.data.chuqinRate,e.typeData=n,e.typeDataKey=l}}))},nodeClick:function(data){this.searchDept=data,this.page=1,this.init()},searchStudent:function(data){this.searchStudentKey=data,this.initStudent()},sizeChange:function(t){this.page=1,this.num=t,this.init()},currentPage:function(t){this.page=t,this.init()},jumpPage:function(data){this.page=data,this.init()},search:function(data){this.searchKey=data.input,this.init()},expandInfo:function(){var t=k.a.attend_teacher_static_page_export,e={page:this.page,num:this.num,departmentPath:this.searchDept.value,keyWord:this.searchKey,staticType:1};if(1==this.searchTimeData.timeUnit){var l=this.searchTimeData.value;e.busiTime=l,e.timeUnit=3}else if(2==this.searchTimeData.timeUnit)e.weekNum=this.searchTimeData.value,e.timeUnit=2;else if(3==this.searchTimeData.timeUnit){var n=this.searchTimeData.value;e.year=n.split("-")[0],e.month=n.split("-")[1],e.timeUnit=4}else if(4==this.searchTimeData.timeUnit)e.year=this.searchTimeData.value,e.timeUnit=6;else{this.$moment(new Date).format("YYYY-MM-DD");e.busiTime=this.$moment(new Date).format("YYYY-MM-DD"),e.timeUnit=3}e.termId=this.currentTermId,e=this.$qs.stringify(e),window.open(t+"?"+e,"_self")},searchTopDate:function(data){this.searchTimeData=data,this.page=1,this.init()},searchTopType:function(data){}},Object(r.a)(n,"search",(function(data){this.page=1,this.searchKey=data.input,this.init()})),Object(r.a)(n,"showDetail",(function(data){data&&data.workAttendMap&&data.workAttendMap.lxabsList&&(this.tableDetailData=data.workAttendMap.lxabsList),this.drawerVisible=!0})),Object(r.a)(n,"closeDrawerDialog",(function(t){this.auditObjectItem={},this.drawerVisible=t})),Object(r.a)(n,"cancelDrawDialog",(function(){this.drawerVisible=!1})),n)},R=(l(1719),l(10)),component=Object(R.a)(M,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container"},[l("div",{staticClass:"container"},[l("layout-lr",[l("div",{attrs:{slot:"left"},slot:"left"},[l("div",{staticClass:"color-muted font-size-12 padding-tb-5 margin-top-10"},[l("span",{staticClass:"layout-left-menu-title"},[t._v("考勤统计")])]),t._v(" "),l("my-el-tree",{attrs:{type:"4","sub-type":"4"},on:{"node-click":t.nodeClick,"all-click":t.nodeClick}})],1),t._v(" "),l("div",{attrs:{slot:"right"},slot:"right"},[l("div",[l("my-search-of-date-group",{attrs:{size:"small","show-year":!0,"show-term":!1,"show-week":!1,"sel-date-time":t.searchTopTime},on:{click:t.searchTopDate,"type-click":t.searchTopType}})],1),t._v(" "),l("div",{staticClass:"margin-top-10"},[0==t.toggleTopShow?l("div",{staticStyle:{position:"relative"}},[l("el-card",{attrs:{shadow:"never","body-style":{padding:"5px 10px",height:"60px"}}},[l("div",[l("el-row",[l("el-col",{attrs:{span:8}},[l("div",{staticClass:"rpStatic-top-item-mini color-muted"},[l("i",{staticClass:"fa fa-user"}),t._v("\n                      "+t._s(t.$t("总人数"))+":\n                    ")]),t._v(" "),l("div",{staticClass:"color-grand margin-top-5 font-size-25 margin-left-15",staticStyle:{"font-weight":"bold"}},[l("span",[t._v(t._s(t.personTotal))])])]),t._v(" "),l("el-col",{attrs:{span:8}},[l("div",{staticClass:"rpStatic-top-item-mini color-muted"},[l("i",{staticClass:"fa fa-cubes"}),t._v(" "),l("label",[t._v(t._s(t.$t("出勤率"))+":")])]),t._v(" "),l("div",{staticClass:"font-size-25 margin-top-5 color-muted margin-left-20"},[l("label",[t._v(t._s(t.attendData)+"%")])])]),t._v(" "),l("el-col",{attrs:{span:8}},[l("div",{staticClass:"rpStatic-top-item-mini color-muted"},[l("i",{staticClass:"fa fa-cube"}),t._v(" "),l("label",[t._v(t._s(t.$t("异常状态占比"))+":")])]),t._v(" "),t.typeData.length<=0?l("div",{staticClass:"color-disabeld margin-left-18",staticStyle:{position:"relative",top:"20%"}},[t._v(t._s(t.$t("暂无数据")))]):l("div",{staticClass:"font-size-12 color-muted margin-left-18"},[t._l(t.typeData,(function(e,n){return l("div",{key:n,staticClass:"font-size-12 color-muted"},[n<2?l("div",[l("label",[t._v(t._s(e.name)+":")]),t._v(" "),l("label",[t._v(t._s(e.rate)+"%")])]):t._e()])})),t._v(" "),t.typeData.length>2?l("div",{staticClass:"font-size-12 color-muted"},[t._v("\n                        ...\n                      ")]):t._e()],2)])],1)],1)]),t._v(" "),l("div",{staticClass:"text-center toggle-show-icon",on:{click:function(e){t.toggleTopShow=!t.toggleTopShow}}},[l("div",{staticClass:"font-size-12 toggle-show-icon-block"},[l("i",{staticClass:"fa fa-angle-double-down"}),t._v(" "),l("label",[t._v(t._s(t.$t("展开")))])])])],1):t._e(),t._v(" "),1==t.toggleTopShow?l("div",{staticStyle:{position:"relative"}},[l("el-card",{attrs:{shadow:"never","body-style":{padding:"5px 10px",height:"150px"}}},[l("el-row",{attrs:{gutter:8}},[l("el-col",{attrs:{span:8}},[l("div",{staticClass:"rpStatic-top-item color-muted"},[l("div",{staticClass:"pull-left"},[l("div",{staticClass:"margin-top-20 color-grand text-center",staticStyle:{"font-weight":"bold"}},[l("div",[l("i",{staticClass:"fa fa-id-card color-disabeld",staticStyle:{"font-size":"20px"}})]),t._v(" "),l("div",{staticClass:"margin-top-5"},[l("span",{staticClass:"font-size-25"},[t._v(t._s(t.personTotal))])])]),t._v(" "),l("div",{staticClass:"margin-top-10 color-muted"},[l("span",{staticClass:"person-item text-right"},[t._v(t._s(t.$t("总人数")))])])]),t._v(" "),l("div",{staticClass:"pull-left margin-left-10"},[l("div",{staticClass:"line-ver-height",staticStyle:{height:"150px"}})]),t._v(" "),l("div",{staticClass:"pull-left margin-left-10",staticStyle:{"overflow-y":"auto",height:"150px"}},t._l(t.typeData,(function(e,n){return l("div",{key:n,staticClass:"margin-top-5 color-muted"},[l("span",{staticClass:"text-right"},[t._v(t._s(e.name))]),t._v(" "),l("el-tag",{attrs:{size:"mini",type:"success"}},[t._v(t._s(e.value))])],1)})),0),t._v(" "),l("div",{staticClass:"moon-clearfix"})])]),t._v(" "),l("el-col",{attrs:{span:8}},[l("div",{staticClass:"rpStatic-top-item color-muted"},[l("div",{staticClass:"title"},[t._v(t._s(t.$t("出勤率"))+": ")]),t._v(" "),l("div",{staticStyle:{height:"140px"}},[l("table-bar-chart",{attrs:{"chart-id":"typeId","chart-title":t.$t("出勤率"),data:t.attendData}})],1)])]),t._v(" "),l("el-col",{attrs:{span:8}},[l("div",{staticClass:"rpStatic-top-item color-muted"},[l("div",{staticClass:"title"},[t._v(t._s(t.$t("异常状态占比"))+": ")]),t._v(" "),l("div",[l("div",{staticStyle:{height:"140px"}},[t.typeData.length<=0?l("div",{staticClass:"color-disabeld text-center",staticStyle:{position:"relative",top:"20%"}},[t._v(t._s(t.$t("暂无数据")))]):l("circle-chart",{attrs:{"chart-id":"levelId","chart-title":t.$t("等级占比"),"data-key":t.typeDataKey,data:t.typeData}})],1)])])])],1)],1),t._v(" "),l("div",{staticClass:"text-center toggle-show-icon",on:{click:function(e){t.toggleTopShow=!t.toggleTopShow}}},[l("div",{staticClass:"font-size-12 toggle-show-icon-block"},[l("i",{staticClass:"fa fa-angle-double-up"}),t._v(" "),l("label",[t._v(t._s(t.$t("收起")))])])])],1):t._e()]),t._v(" "),l("div",{staticClass:"layout-right-tab margin-top-10"},[l("el-row",{staticClass:"layout-inline"},[l("el-col",{attrs:{span:12}},[l("el-button",{attrs:{size:"small",type:"warning",icon:"el-icon-download"},on:{click:function(e){return t.expandInfo(e)}}},[t._v(t._s(t.$t("导出")))])],1),t._v(" "),l("el-col",{staticClass:"text-right",attrs:{span:12}},[l("my-input-button",{attrs:{size:"small",plain:"","width-class":"width: 150px",type:"success",clearable:!0,placeholder:t.$t("姓名/工号")},on:{click:t.search}})],1)],1)],1),t._v(" "),l("div",[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-class-name":"custom-table-cell-bg",size:"medium","max-height":0==t.toggleTopShow?t.tableHeight11.height:t.tableHeight6.height}},[l("el-table-column",{attrs:{fixed:"",align:"center",label:t.$t("姓名")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.realName))]),t._v(" "),l("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[l("span",[t._v(t._s(e.row.realName))])])])]}}])}),t._v(" "),l("el-table-column",{attrs:{fixed:"",align:"center",label:t.$t("部门")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.departName?e.row.departName:"--"))]),t._v(" "),l("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                    "+t._s(e.row.departName?e.row.departName:"--")+"\n                  ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{fixed:"",align:"center",label:t.$t("工号")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.jobNum))]),t._v(" "),l("div",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                    "+t._s(e.row.jobNum)+"\n                  ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",width:"150",label:t.$t("出勤天数")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.workAttendMap.normal))])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",width:"150",label:t.$t("累计旷工天数")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.workAttendMap.abs))])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",width:"150",label:t.$t("连续旷工天数")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",{staticClass:"color-grand",on:{click:function(l){return t.showDetail(e.row)}}},[t._v(t._s(e.row.workAttendMap.lxabs))])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",width:"150",label:t.$t("迟到次数")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.workAttendMap.late))])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",width:"150",label:t.$t("早退次数")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.workAttendMap.early))])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",width:"150",label:t.$t("累计考勤天数")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.workAttendMap.shouldDays))])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",width:"150",label:t.$t("累计出差天数")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.workAttendMap.travel))])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",width:"150",label:t.$t("连续请假次数")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.leaveMap.totalContinueLeaveCount))])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",width:"150",label:t.$t("会议缺勤次数")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.meetingMap.unSignNum))])]}}])})],1)],1),t._v(" "),l("div",{staticClass:"layout-right-footer text-right"},[l("my-pagination",{staticClass:"layout-pagination",attrs:{total:t.total,"current-page":t.page,"page-size":t.num},on:{currentPage:t.currentPage,sizeChange:t.sizeChange,jumpChange:t.jumpPage}})],1)])])],1),t._v(" "),l("drawer-layout-right",{attrs:{"hide-footer":!1,visible:t.drawerVisible,size:"550px",title:t.$t("连续旷工天数详情")},on:{changeDrawer:t.closeDrawerDialog,"right-close":t.cancelDrawDialog}},[l("div",{attrs:{slot:"content"},slot:"content"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableDetailData,"header-cell-class-name":"custom-table-cell-bg",size:"medium"}},[l("el-table-column",{attrs:{label:"次数",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.time1)+" - "+t._s(e.row.time2))])]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"days",label:"天数",align:"center"}})],1)],1),t._v(" "),l("div",{staticClass:"text-right padding-lr-10",attrs:{slot:"footer"},slot:"footer"},[t._v("\n      "+t._s(t.$t("共"))+t._s(t.tableDetailData.length)+t._s(t.$t("条"))+"\n    ")])])],1)}),[],!1,null,"3a202820",null);e.default=component.exports;installComponents(component,{MyElTree:l(1262).default,MySearchOfDateGroup:l(1278).default,TableBarChart:l(1297).default,CircleChart:l(1279).default,MyInputButton:l(1257).default,MyPagination:l(234).default,LayoutLr:l(1264).default,DrawerLayoutRight:l(236).default})}}]);