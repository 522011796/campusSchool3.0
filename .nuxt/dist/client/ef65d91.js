(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{1256:function(t,e,l){"use strict";l.r(e);l(179);var n=l(6),r={name:"mySelect",props:{placeholder:{default:"",type:String},selValue:{default:"",type:[String,Number,Boolean]},options:{default:function(){return[]},type:Array},size:{defalult:"medium",validate:function(t){return Object(n.D)(t,["large","medium","small","mini"])}},clearable:{default:!1,type:Boolean},disabled:{default:!1,type:Boolean},filterable:{default:!1,type:Boolean},remote:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},group:{default:!1,type:Boolean},remoteMethod:{default:function(data){return data},type:Function},widthStyle:{default:"",type:[String,Number]}},computed:{selectModel:function(){this.value=this.selValue},setPlaceholder:function(){this.selectPlaceholder=this.placeholder?this.placeholder:this.$t("请选择")},setWidth:function(){this.widthStyle&&(this.width={width:this.widthStyle+"px"})}},data:function(){return{selectPlaceholder:"",value:"",width:""}},methods:{handleChange:function(data){this.$emit("change",data)}}},o=l(10),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("el-select",t._b({style:t.width,attrs:{setPlaceholder:t.setPlaceholder,placeholder:t.selectPlaceholder,size:t.size,clearable:t.clearable,disabled:t.disabled,filterable:t.filterable,loading:t.loading,remote:t.remote,"remote-method":t.remoteMethod,setWidth:t.setWidth},on:{change:t.handleChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},"el-select",t.selectModel,!1),[0==t.group?t._l(t.options,(function(t,e){return l("el-option",{key:e,attrs:{label:t.label,value:t.value,disabled:t.disabled}})})):t._e(),t._v(" "),1==t.group?t._l(t.options,(function(e){return l("el-option-group",{key:e.label,attrs:{label:e.label}},t._l(e.options,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)})):t._e()],2)],1)}),[],!1,null,null,null);e.default=component.exports},1257:function(t,e,l){"use strict";l.r(e);var n=l(6),r={name:"myInputButton",props:{placeholder:{default:"请输入内容",type:String},widthClass:{default:"width: 150px",type:String},selectWidthClass:{default:"width: 100px",type:String},size:{defalult:"medium",validate:function(t){return Object(n.D)(t,["large","medium","small","mini"])}},type:{defalult:"",validate:function(t){return Object(n.D)(t,["success","info","warning","danger","primary"])}},plain:{default:!1,type:Boolean},iconStyle:{default:"",type:String},showSelect:{default:!1,type:Boolean},clearable:{default:!1,type:Boolean},options:{default:function(){return[]},type:Array}},computed:{},mounted:function(){this.showIcon=""!==this.iconStyle},data:function(){return{inputValue:"",selectValue:"",showIcon:!1}},methods:{handleClick:function(data){var t={};this.selectValue?t={select:this.selectValue,input:this.inputValue}:this.selectValue||(t={input:this.inputValue}),this.$emit("click",t)},selectChange:function(data){this.selectValue=data}}},o=l(10),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("span",[l("el-input",{style:t.widthClass,attrs:{size:t.size,placeholder:t.placeholder,clearable:t.clearable},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}},[t.showSelect?l("el-select",{style:t.selectWidthClass,attrs:{slot:"prepend",clearable:t.clearable,placeholder:t.$t("请选择")},on:{change:t.selectChange},slot:"prepend",model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}},t._l(t.options,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:t.disabled}})})),1):t._e()],1),t._v(" "),l("el-button",{attrs:{size:t.size,type:t.type,plain:t.plain},on:{click:t.handleClick}},[t.showIcon?l("i",{class:t.iconStyle}):t._e(),t._v("\n    "+t._s(t.$t("搜索"))+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},1259:function(t,e,l){var content=l(1267);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(31).default)("ca81b0e2",content,!0,{sourceMap:!1})},1262:function(t,e,l){"use strict";l.r(e);l(135),l(105),l(179),l(53);var n=l(9),r=l(6),o={name:"myElTree",mixins:[l(76).a],components:{},props:{selValue:{default:!1,type:[Boolean,Array,Number,String]},size:{defalult:"small",validate:function(t){return Object(r.D)(t,["large","medium","small","mini"])}},defaultCheckedKeys:{default:function(){return[]},type:Array},defaultExpandedKeys:{default:function(){return[]},type:Array},currentNodeKey:{default:"",type:[String,Number]},width:{default:"",type:[String,Number]},iconExtra:{default:"",type:String},iconPrefix:{default:"",type:String},showCheckbox:{default:!1,type:Boolean},opr:{default:!1,type:Boolean},type:{default:"",type:String},subType:{default:"1",type:String},extraType:{default:"",type:String},showCampus:{default:!0,type:Boolean}},computed:{selectModel:function(){this.dataCollege=this.setData(this.data)},setClass:function(){return[]}},data:function(){return{data:[],filterText:"",slotDefault:!1,slotTop:!1,nodeTreeCurrentId:"7",selectCampusAll:!0}},mounted:function(){this.slotDefault=void 0!==this.$slots.middle,this.slotTop=void 0!==this.$slots.top},created:function(){this.initInfo()},methods:{initInfo:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getSessionInfo();case 2:if(1!=t.type){e.next=8;break}return e.next=5,t.getCollegeInfo(t.subType);case 5:t.data=t.dataCollege,e.next=60;break;case 8:if(2!=t.type){e.next=14;break}return e.next=11,t.getDormBuildInfo(t.subType);case 11:t.data=t.dataDormBuild,e.next=60;break;case 14:if(3!=t.type){e.next=20;break}return e.next=17,t.getSchoolBuildInfo(t.subType);case 17:t.data=t.dataSchoolBuild,e.next=60;break;case 20:if(4!=t.type){e.next=26;break}return e.next=23,t.getDeptInfo(t.subType);case 23:t.data=t.dataDept,e.next=60;break;case 26:if(100!=t.type){e.next=32;break}return e.next=29,t.getAppletInfo(t.extraType);case 29:t.data=t.dataApplet,e.next=60;break;case 32:if(110!=t.type){e.next=40;break}return e.next=35,t.getAppletServerInfo(t.extraType);case 35:t.data=t.dataAppletServer,t.selectCampusAll=!1,t.$nextTick((function(){t.$refs.tree&&t.$refs.tree.setCurrentKey(t.currentNodeKey)})),e.next=60;break;case 40:if(111!=t.type){e.next=46;break}return e.next=43,t.getAppletServerInfo(t.extraType);case 43:t.data=t.dataAppletServer,e.next=60;break;case 46:if(120!=t.type){e.next=54;break}return e.next=49,t.getLinkProcessInfo();case 49:t.data=t.dataProcessServer,t.selectCampusAll=!1,t.$nextTick((function(){t.$refs.tree&&t.$refs.tree.setCurrentKey(t.currentNodeKey)})),e.next=60;break;case 54:if(121!=t.type){e.next=60;break}return e.next=57,t.getLinkProcessLinkInfo(t.subType);case 57:t.data=t.dataProcessLinkServer,t.selectCampusAll=!1,t.$nextTick((function(){t.$refs.tree&&t.$refs.tree.setCurrentKey(t.currentNodeKey)}));case 60:case"end":return e.stop()}}),e)})))()},filterNode:function(t,data){return!t||-1!==data.label.indexOf(t)},handleNodeClick:function(data){this.selectCampusAll=!1,this.$emit("node-click",data)},handleCheckChange:function(data,t,e){this.$emit("check-change",data,t,e)},nodeClickCampusAll:function(data){this.selectCampusAll=!0,this.$emit("all-click",data)}},watch:{filterText:function(t){this.$refs.tree.filter(t)},type:function(t){this.initInfo()},subType:function(t){this.initInfo()}}},c=(l(1266),l(10)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t.slotTop?l("div",{staticClass:"padding-tb-5 padding-lr-10"},[t._t("top")],2):t._e(),t._v(" "),l("div",{staticClass:"padding-tb-5 padding-lr-10"},[l("el-input",{attrs:{size:"medium",placeholder:"输入关键字进行过滤"},model:{value:t.filterText,callback:function(e){t.filterText=e},expression:"filterText"}})],1),t._v(" "),t.slotDefault?l("div",{staticClass:"padding-tb-5 padding-lr-10"},[t._t("middle")],2):t._e(),t._v(" "),l("div",{staticClass:"tree-container custom-el-tree margin-top-5"},[t.showCampus?l("el-tooltip",{attrs:{effect:"dark",content:t.campusName,placement:"top"}},[l("div",{staticClass:"moon-content-text-ellipsis-class",class:1==t.selectCampusAll?"tree-el-tree-all":"tree-el-tree-all-no",on:{click:t.nodeClickCampusAll}},[t._v("\n        "+t._s(t.campusName)+"\n      ")])]):t._e(),t._v(" "),l("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{data:t.data,"show-checkbox":t.showCheckbox,"filter-node-method":t.filterNode,"default-checked-keys":t.defaultCheckedKeys,"default-expanded-keys":t.defaultExpandedKeys,currentNodeKey:t.currentNodeKey,"node-key":"id","highlight-current":1!=t.selectCampusAll},on:{"node-click":t.handleNodeClick,"check-change":t.handleCheckChange}})],1)])}),[],!1,null,"3c5e5d0c",null);e.default=component.exports},1264:function(t,e,l){"use strict";l.r(e);var n={name:"LayoutLr"},r=l(10),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"layout-left-menu animated fadeInLeft"},[this._t("left")],2),this._v(" "),e("div",{staticClass:"layout-right-menu"},[this._t("right")],2)])}),[],!1,null,"42aaf4c3",null);e.default=component.exports},1265:function(t,e,l){"use strict";l.r(e);l(179),l(53);var n=l(9),r=l(6),o={name:"myCascader",mixins:[l(76).a],props:{selValue:{default:function(){return[]},type:Array},props:{default:function(){return{}},type:Object},placeholder:{default:"请选择",type:String},label:{default:"",type:String},disabled:{default:!1,type:Boolean},clearable:{default:!1,type:Boolean},size:{defalult:"medium",validate:function(t){return Object(r.D)(t,["large","medium","small","mini"])}},type:{default:"",type:String},subType:{default:1,type:String},widthStyle:{default:"",type:[String,Number]},collapseTags:{default:!1,type:Boolean}},computed:{selectModel:function(){this.value=this.selValue},setWidth:function(){this.widthStyle&&(this.width={width:this.widthStyle+"px"})}},data:function(){return{value:"",options:[],width:"",data:[]}},created:function(){this.initInfo()},methods:{initInfo:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=t.type){e.next=6;break}return e.next=3,t.getCollegeInfo(t.subType);case 3:t.data=t.dataCollege,e.next=28;break;case 6:if(2!=t.type){e.next=12;break}return e.next=9,t.getDormBuildInfo(t.subType);case 9:t.data=t.dataDormBuild,e.next=28;break;case 12:if(3!=t.type){e.next=18;break}return e.next=15,t.getSchoolBuildInfo(t.subType);case 15:t.data=t.dataSchoolBuild,e.next=28;break;case 18:if(4!=t.type){e.next=24;break}return e.next=21,t.getDeptInfo(t.subType);case 21:t.data=t.dataDept,e.next=28;break;case 24:if(5!=t.type){e.next=28;break}return e.next=27,t.getRoleTreeInfo();case 27:t.data=t.dataRoleTreeList;case 28:case"end":return e.stop()}}),e)})))()},handleChange:function(data){this.$emit("change",data)}},watch:{type:function(t){this.initInfo()},subType:function(t){this.initInfo()}}},c=l(10),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("el-cascader",t._b({ref:"cascaderSelector",style:t.width,attrs:{options:t.data,setWidth:t.setWidth,disabled:t.disabled,clearable:t.clearable,size:t.size,props:t.props,placeholder:t.placeholder,"collapse-tags":t.collapseTags},on:{change:t.handleChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},"el-cascader",t.selectModel,!1))],1)}),[],!1,null,null,null);e.default=component.exports},1266:function(t,e,l){"use strict";var n=l(1259);l.n(n).a},1267:function(t,e,l){(e=l(30)(!1)).push([t.i,".tree-el-tree-all[data-v-3c5e5d0c]{background:#f0f7ff}.tree-el-tree-all[data-v-3c5e5d0c],.tree-el-tree-all-no[data-v-3c5e5d0c]{height:25px;line-height:25px;padding:3px 10px;text-align:left;font-size:14px;color:#606266}",""]),t.exports=e},1282:function(t,e,l){"use strict";l.r(e);var n={props:{chartId:"",chartTitle:"",dataLegned:{default:function(){return[]},type:Array},dataKey:{default:function(){return[]},type:Array},data:{default:function(){return[]},type:Array}},data:function(){return{}},mounted:function(){this.lineChart()},created:function(){},methods:{lineChart:function(){var t=document.getElementById(this.chartId);this.$echarts.init(t).setOption({tooltip:{trigger:"axis"},legend:{data:this.dataLegned},grid:{top:"15%",left:"2%",right:"2%",bottom:"8%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisLine:{lineStyle:{type:"solid",color:"#DCDFE6",width:"1"}},axisLabel:{interval:0,rotate:40,textStyle:{color:"#333333"}},data:this.dataKey},yAxis:{type:"value",splitLine:{show:!0,lineStyle:{type:"dashed",color:"#eeeeee"}},axisLine:{lineStyle:{type:"solid",color:"#DCDFE6",width:"1"}},axisLabel:{textStyle:{color:"#333333"}}},series:this.data},!0)}},watch:{data:function(t,e){this.lineChart()}}},r=l(10),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{height:"100%"},attrs:{id:this.chartId}})}),[],!1,null,"3ca07f7e",null);e.default=component.exports},1296:function(t,e,l){"use strict";l.r(e);var n={props:{chartId:"",chartTitle:"",dataLegned:{default:function(){return[]},type:Array},dataKey:{default:function(){return[]},type:Array},data:{default:function(){return[]},type:Array}},data:function(){return{}},mounted:function(){this.lineChart()},created:function(){},methods:{lineChart:function(){var t=document.getElementById(this.chartId);this.$echarts.init(t).setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!0,data:this.dataLegned},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:this.dataKey,axisLabel:{interval:0,formatter:function(t){var e=t;return t&&t.length>=5&&(e=e.substr(0,4)+"..."),e}}}],yAxis:[{type:"value"}],dataZoom:[{type:"slider",xAxisIndex:[0],filterMode:"empty",startValue:0,endValue:9,borderColor:"transparent",handleSize:0,showDetail:!1,zoomLock:!1}],series:this.data},!0)}},watch:{data:function(t,e){this.lineChart()}}},r=l(10),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{height:"100%"},attrs:{id:this.chartId}})}),[],!1,null,"39634f9f",null);e.default=component.exports},1457:function(t,e,l){"use strict";var n=l(15),r=l(112),o=l(1458),c=l(714),d=l(20),h=1..toFixed,f=Math.floor,m=function(t,e,l){return 0===e?l:e%2==1?m(t,e-1,l*t):m(t*t,e/2,l)};n({target:"Number",proto:!0,forced:h&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){h.call({})}))},{toFixed:function(t){var e,l,n,d,h=o(this),v=r(t),data=[0,0,0,0,0,0],_="",y="0",C=function(t,e){for(var l=-1,n=e;++l<6;)n+=t*data[l],data[l]=n%1e7,n=f(n/1e7)},x=function(t){for(var e=6,l=0;--e>=0;)l+=data[e],data[e]=f(l/t),l=l%t*1e7},k=function(){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+c.call("0",7-e.length)+e}return s};if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(h!=h)return"NaN";if(h<=-1e21||h>=1e21)return String(h);if(h<0&&(_="-",h=-h),h>1e-21)if(l=(e=function(t){for(var e=0,l=t;l>=4096;)e+=12,l/=4096;for(;l>=2;)e+=1,l/=2;return e}(h*m(2,69,1))-69)<0?h*m(2,-e,1):h/m(2,e,1),l*=4503599627370496,(e=52-e)>0){for(C(0,l),n=v;n>=7;)C(1e7,0),n-=7;for(C(m(10,n,1),0),n=e-1;n>=23;)x(1<<23),n-=23;x(1<<n),C(1,1),x(2),y=k()}else C(0,l),C(1<<-e,0),y=k()+c.call("0",v);return y=v>0?_+((d=y.length)<=v?"0."+c.call("0",v-d)+y:y.slice(0,d-v)+"."+y.slice(d-v)):_+y}})},1458:function(t,e,l){var n=l(67);t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},1459:function(t,e,l){var content=l(1819);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(31).default)("0a9be69c",content,!0,{sourceMap:!1})},1818:function(t,e,l){"use strict";var n=l(1459);l.n(n).a},1819:function(t,e,l){(e=l(30)(!1)).push([t.i,".top-block[data-v-06a0c9a0]{height:290px;background:#fff}.content-block[data-v-06a0c9a0]{height:300px;background:#fff}.title-block-tag[data-v-06a0c9a0]{display:inline-block;height:20px;width:3px;background:#e6a23c;font-weight:700;border-radius:3px}.title-block-text[data-v-06a0c9a0]{font-weight:700;position:relative;top:-5px}.top-text-block[data-v-06a0c9a0]{position:relative;top:-10px}",""]),t.exports=e},2084:function(t,e,l){"use strict";l.r(e);l(1457),l(106),l(710),l(53);var n=l(9),r=l(7),o=l(76),c=l(1296),d=l(1282),h=l(235),f=l(6),m={components:{MySelect:l(1256).default,DialogNormal:h.default,LineChart:d.default,BarChart:c.default},mixins:[o.a],data:function(){return{searchCollege:"",searchMajor:"",searchGrade:"",searchClass:"",collegeData:[],flowOptions:[],monthOptions:[],searchName:"",processId:"",lineChartData:[],barChartData:[],circleChartData:[],tableData:[],searchKey:"",userId:"",searchStatus:"",searchMonth:"",barDataKey:[],barData:[],barDataLegned:[],lineData:[],lineKeyData:[],lineLegned:[],complateRate:0,complateCount:0,complatedNum:0,unComplateNum:0,searchTime:"",timeOptions:[],tableColData:[],tableDetailData:[],dialogVisible:!1,yearOptions:[],filterStatus:[{label:this.$t("已完成"),text:this.$t("已完成"),value:!0},{label:this.$t("未完成"),text:this.$t("未完成"),value:!1}],form:{imgList:[],id:"",year:"",name:"",adNo:"",oneCardNo:"",stuNo:"",examNo:"",sex:"",idCardNo:"",birthday:"",nationality:"",nation:"",phone:"",qq:"",college:[],major:"",class:[],teacher:"",facePhotos:[]}}},created:function(){this.$moment().format("YYYY-MM");this.initMonth(),this.init()},methods:{nodeClick:function(data){this.searchCollege="",this.searchMajor="",this.searchGrade="",this.searchClass="",1==data.unit?this.searchCollege=data.id:2==data.unit?(this.searchCollege=data.college_id,this.searchMajor=data.id):3==data.unit?(this.searchMajor=data.major_id,this.searchGrade=data.grade):4==data.unit&&(this.searchClass=data.id),this.page=1,this.init()},handleSearchChange:function(t,e){1==e?(this.searchName=t,this.processId=t,this.initBar(),this.initLine(this.searchMonth),this.initStudent(),this.initRate()):2==e&&(this.searchMonth=t,this.initLine(this.searchMonth))},initMonth:function(){for(var t=this.$moment().format("YYYY"),e=[],i=0;i<12;i++)e.push({label:t+"-"+(i+1),value:t+"-"+(i+1),text:t+"-"+(i+1)});this.monthOptions=e,this.searchMonth=this.$moment().format("YYYY-MM")},init:function(){this.initProcess(),this.initMonth(),this.initBar(),this.initLine(this.searchMonth),this.initStudent(),this.initRate()},initProcess:function(){var t=this;this.$axios.get(r.a.enroll_process_page,{params:{page:1,num:99999}}).then((function(e){if(e.data.data){for(var l=[],i=0;i<e.data.data.list.length;i++)l.push({label:e.data.data.list[i].processName,value:e.data.data.list[i].id,text:e.data.data.list[i].processName});t.flowOptions=l}}))},initStudent:function(){var t=this,e={page:this.page,num:this.num,status:this.searchStatus,searchKey:this.searchKey,processId:this.processId,collegeId:this.searchCollege,majorId:this.searchMajor,grade:this.searchGrade,classId:this.searchClass};this.$axios.get(r.a.enroll_stat_process_by_user_page,{params:e}).then((function(e){e.data.data&&(t.tableData=e.data.data.list,t.total=e.data.data.totalCount,t.num=e.data.data.num,t.page=e.data.data.currentPage)}))},initBar:function(){var t=this,e={processId:this.processId,collegeId:this.searchCollege,majorId:this.searchMajor,grade:this.searchGrade,classId:this.searchClass};this.$axios.get(r.a.enroll_stat_link_general,{params:e}).then((function(e){if(e.data.data){var l=[],n=[],r=[];for(var o in e.data.data)l.push(e.data.data[o].linkName),n.push(e.data.data[o].downCount),r.push(e.data.data[o].undownCount);t.barDataLegned=[t.$t("已完成"),t.$t("未完成")],t.barDataKey=l,t.barData=[{name:"已完成",type:"bar",barWidth:10,data:n},{name:"未完成",type:"bar",barWidth:10,data:r}]}}))},initLine:function(t){var e=this,l={month:t,collegeId:this.searchCollege,majorId:this.searchMajor,grade:this.searchGrade,classId:this.searchClass,processId:this.processId};this.$axios.get(r.a.enroll_stat_process_by_time,{params:l}).then((function(t){if(t.data.data){e.lineLegned=[];var l=[],n=[];e.lineLegned=[e.$t("已完成")];for(var i=0;i<t.data.data.length;i++)l.push(t.data.data[i].num),n.push(t.data.data[i].day);e.lineKeyData=n,e.lineData=[{name:e.$t("已完成"),type:"line",data:l}]}}))},initRate:function(){var t=this,e={collegeId:this.searchCollege,majorId:this.searchMajor,grade:this.searchGrade,classId:this.searchClass,processId:this.processId};this.$axios.get(r.a.enroll_stat_process_general,{params:e}).then((function(e){if(e.data.data){t.complateCount=parseInt(e.data.data.downCount)+parseInt(e.data.data.undownCount),t.complatedNum=e.data.data.downCount,t.unComplateNum=e.data.data.undownCount;var l=parseInt(e.data.data.downCount)/(parseInt(e.data.data.downCount)+parseInt(e.data.data.undownCount))*100;parseInt(e.data.data.downCount)+parseInt(e.data.data.undownCount)==0&&(l=0),t.complateRate=parseInt(l.toFixed(0))}}))},initDetail:function(t){var e=this,l={processId:this.processId,userId:t},n="";this.$axios.get(r.a.enroll_stat_link_list_by_user,{params:l}).then((function(t){if(t.data.data){e.tableDetailData=t.data.data;for(var i=0;i<t.data.data.length;i++)n=t.data.data[i].linkList;e.tableColData=n}}))},sizeChange:function(t){this.page=1,this.num=t,this.initStudent()},currentPage:function(t){this.page=t,this.initStudent()},jumpPage:function(data){this.page=data,this.initStudent()},closeDialog:function(t){this.form={imgList:[],id:"",year:"",name:"",adNo:"",oneCardNo:"",stuNo:"",examNo:"",sex:"",idCardNo:"",birthday:"",nationality:"",nation:"",phone:"",qq:"",college:[],major:"",class:[],teacher:"",facePhotos:[]}},cancelDialog:function(){this.dialogVisible=!1},detailInfo:function(t,e){var l=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={userId:e.user_id},l.oprType="detail",t.next=4,l.$axios.get(r.a.enroll_checkin_student_detail,{params:n}).then((function(t){if(t.data.data){var e=t.data.data.face_photos?t.data.data.face_photos.split("|"):[];l.form={id:t.data.data.id,user_id:t.data.data.user_id,year:t.data.data.enroll_id,name:t.data.data.real_name,adNo:t.data.data.enroll_no,oneCardNo:t.data.data.school_car_no,stuNo:t.data.data.student_id,examNo:t.data.data.exam_no,sex:t.data.data.sex+"",idCardNo:t.data.data.certificate_num,birthday:t.data.data.birthday?l.$moment(t.data.data.birthday).format("YYYY-MM-DD"):"",nationality:""+t.data.data.nationality,nation:t.data.data.nation,phone:t.data.data.phone,qq:t.data.data.qq,email:t.data.data.email,wechat:t.data.data.wechat,fatherName:t.data.data.father_name,fatherPhone:t.data.data.father_phone,motherName:t.data.data.mather_name,motherPhone:t.data.data.mather_phone,address:t.data.data.native_place,education:t.data.data.edu_level,college:[t.data.data.college_id,t.data.data.major_id,t.data.data.grade,t.data.data.class_id],major:"",class:[t.data.data.college_id,t.data.data.major_id,t.data.data.grade,t.data.data.class_id],eduSystem:t.data.data.edu_year,headmaster:t.data.data.master_teacher_name,recruitingTeacher:t.data.data.enroll_teacher,adBath:t.data.data.enroll_batch,subject:t.data.data.enroll_type,adProvince:[t.data.data.enroll_province,t.data.data.enroll_city],adCity:t.data.data.enroll_city+"",graduationSchool:t.data.data.high_school,examScore:t.data.data.gaokao_score,otherMsg:t.data.data.des,checkStatus:t.data.data.check_status,checkinId:t.data.data.checkin_id,checkin_id:t.data.data.checkin_id,facePhotos:e}}}));case 4:l.initDetail(e.user_id),l.dialogVisible=!0;case 6:case"end":return t.stop()}}),t)})))()},search:function(data){this.searchKey=data.input,this.page=1,this.initStudent()},expandInfo:function(){var t,e={processId:this.processId,collegeId:this.searchCollege,majorId:this.searchMajor,grade:this.searchGrade,classId:this.searchClass,status:this.searchStatus,searchKey:this.searchKey};e=this.$qs.stringify(e),t=r.a.enroll_stat_process_student_export,window.open(t+"?"+e,"_self")},fliterTable:function(t,e,l){for(var n in t)"status"==n&&(this.searchStatus=t[n][0]);this.page=1,this.initStudent()},handleCancelChange:function(data){this.visibleConfim=!1},handleOkChange:function(data){var t=this;this.dialogLoading=!0;var e,l={ids:this.id};e=r.a.dormaccess_exception_unbind,l=this.$qs.stringify(l),this.$axios.post(e,l).then((function(e){200==e.data.code?(t.init(),Object(f.b)(e.data.desc)):Object(f.a)(e.data.desc),t.visibleConfim=!1,t.dialogLoading=!1}))}}},v=(l(1818),l(10)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container",style:t.divHeight4},[l("div",[l("layout-lr",[l("div",{attrs:{slot:"left"},slot:"left"},[l("div",{staticClass:"color-muted font-size-12 padding-tb-5 margin-top-10"},[l("span",{staticClass:"layout-left-menu-title"},[t._v("应用管理")])]),t._v(" "),l("my-el-tree",{attrs:{type:"1","sub-type":"4"},on:{"node-click":t.nodeClick,"all-click":t.nodeClick}})],1),t._v(" "),l("div",{attrs:{slot:"right"},slot:"right"},[l("div",[l("my-select",{staticClass:"layout-item width-150",attrs:{size:"small",placeholder:t.$t("选择流程"),"sel-value":t.searchName,options:t.flowOptions,clearable:!0},on:{change:function(e){return t.handleSearchChange(e,1)}}})],1),t._v(" "),l("div",{staticClass:"margin-top-10 top-block"},[l("div",{staticClass:"padding-tb-10 padding-lr-10"},[l("span",{staticClass:"title-block-tag"}),t._v(" "),l("span",{staticClass:"title-block-text"},[t._v(t._s(t.$t("完成情况对比")))])]),t._v(" "),l("div",{staticStyle:{height:"220px"}},[l("bar-chart",{attrs:{"chart-id":"barId","chart-title":"","data-legned":t.barDataLegned,"data-key":t.barDataKey,data:t.barData}})],1)]),t._v(" "),l("div",{staticClass:"margin-top-10"},[l("el-row",{attrs:{gutter:8}},[l("el-col",{attrs:{span:16}},[l("div",{staticClass:"content-block"},[l("div",{staticClass:"padding-tb-10 padding-lr-10"},[l("el-row",[l("el-col",{staticClass:"text-left",attrs:{span:12}},[l("span",{staticClass:"title-block-tag"}),t._v(" "),l("span",{staticClass:"title-block-text"},[t._v(t._s(t.$t("整体完成率趋势")))])]),t._v(" "),l("el-col",{attrs:{span:12}},[l("div",{staticClass:"layout-inline text-right"},[l("my-select",{staticClass:"layout-item width-150",attrs:{size:"mini",placeholder:t.$t("选择时间"),"sel-value":t.searchMonth,options:t.monthOptions,clearable:!1},on:{change:function(e){return t.handleSearchChange(e,2)}}})],1)])],1)],1),t._v(" "),l("div",{staticStyle:{height:"255px"}},[l("line-chart",{attrs:{"chart-id":"lineId","data-key":t.lineKeyData,data:t.lineData,"data-legned":t.lineLegned}})],1)])]),t._v(" "),l("el-col",{attrs:{span:8}},[l("div",{staticClass:"content-block text-center"},[l("div",{staticStyle:{position:"relative"}},[l("span",{staticClass:"font-size-12 color-muted",staticStyle:{position:"absolute",bottom:"10px",left:"45%"}},[t._v(t._s(t.$t("完成率")))]),t._v(" "),l("el-progress",{staticClass:"margin-top-30",attrs:{type:"dashboard","stroke-width":5,percentage:t.complateRate}})],1),t._v(" "),l("div",[l("div",[l("span",[t._v(t._s(t.$t("总人数"))+": "+t._s(t.complateCount))])]),t._v(" "),l("div",[l("span",[t._v(t._s(t.$t("已完成"))+": "+t._s(t.complatedNum))])]),t._v(" "),l("div",[l("span",[t._v(t._s(t.$t("未完成"))+": "+t._s(t.unComplateNum))])])])])])],1)],1),t._v(" "),l("div",{staticClass:"margin-top-10 top-block"},[l("div",{staticClass:"padding-tb-10 padding-lr-10"},[l("el-row",[l("el-col",{attrs:{span:12}},[l("span",{staticClass:"title-block-tag"}),t._v(" "),l("span",{staticClass:"title-block-text"},[t._v(t._s(t.$t("完成状态数据表")))])]),t._v(" "),l("el-col",{attrs:{span:12}},[l("div",{staticClass:"layout-inline text-right"},[l("el-button",{staticClass:"layout-item",attrs:{size:"small",type:"warning",icon:"el-icon-download"},on:{click:function(e){return t.expandInfo(e)}}},[t._v(t._s(t.$t("导出")))]),t._v(" "),l("my-input-button",{ref:"teacher width-150",attrs:{size:"small",plain:"","width-class":"width: 180px",type:"success",clearable:!0,placeholder:t.$t("名称/录取号")},on:{click:t.search}})],1)])],1)],1),t._v(" "),l("div",{staticStyle:{"min-height":"300px"}},[l("el-table",{ref:"refTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-class-name":"custom-table-cell-bg",size:"medium"},on:{"filter-change":t.fliterTable}},[l("el-table-column",{attrs:{align:"center",label:t.$t("姓名")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.real_name))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[l("a",{staticClass:"color-grand",attrs:{href:"javascript:;"},on:{click:function(l){return t.detailInfo(l,e.row)}}},[t._v(t._s(e.row.real_name))])])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("学院")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.college_name))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                      "+t._s(e.row.college_name)+"\n                    ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("专业")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.major_name))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                      "+t._s(e.row.major_name)+"\n                    ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("班级")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.class_name))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                  "+t._s(e.row.class_name)+"\n                ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("招生老师")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.enroll_teacher))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                      "+t._s(e.row.enroll_teacher)+"\n                    ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("环节总数")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.link_size))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                      "+t._s(e.row.link_size)+"\n                    ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("已完成")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.completed_link_size))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                      "+t._s(e.row.completed_link_size)+"\n                  ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("完成状态"),"filter-multiple":!1,"column-key":"status",filters:t.filterStatus},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.name))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[e.row.status?l("label",{staticClass:"color-success"},[t._v(t._s(t.$t("已完成")))]):t._e(),t._v(" "),e.row.status?t._e():l("label",{staticClass:"color-danger"},[t._v(t._s(t.$t("未完成")))])])])]}}])})],1),t._v(" "),l("div",{staticClass:"layout-right-footer text-right"},[l("my-pagination",{staticClass:"layout-pagination",attrs:{total:t.total,"current-page":t.page,"page-size":t.num},on:{currentPage:t.currentPage,sizeChange:t.sizeChange,jumpChange:t.jumpPage}})],1)],1)])])])],1),t._v(" "),l("dialog-normal",{attrs:{top:"10vh","width-style":"750px",visible:t.dialogVisible,title:t.$t("详细信息"),"show-footer":!1},on:{close:t.closeDialog,"right-close":t.cancelDialog}},[l("div",{staticClass:"margin-top-10"},[l("div",[l("div",[l("div",{staticClass:"padding-tb-10 padding-lr-10"},[l("span",{staticClass:"title-block-tag"}),t._v(" "),l("span",{staticClass:"title-block-text"},[t._v(t._s(t.$t("照片信息")))])])]),t._v(" "),l("div",t._l(t.form.facePhotos,(function(t,e){return l("el-image",{key:e,staticStyle:{width:"60px",height:"60px","margin-right":"10px"},attrs:{src:t}},[l("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[l("i",{staticClass:"el-icon-picture-outline"})])])})),1)]),t._v(" "),l("div",{staticClass:"margin-top-10"},[l("div",[l("div",{staticClass:"padding-tb-10 padding-lr-10"},[l("span",{staticClass:"title-block-tag"}),t._v(" "),l("span",{staticClass:"title-block-text"},[t._v(t._s(t.$t("基础信息")))])])]),t._v(" "),l("div",[l("el-form",{ref:"form",attrs:{model:t.form,"label-width":"90px"}},[l("el-row",{attrs:{gutter:8}},[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:t.$t("迎新年度"),prop:"year"}},[l("my-select",{staticClass:"layout-item",attrs:{disabled:""!=t.form.id,size:"small",placeholder:t.$t("请选择"),"sel-value":t.form.year,options:t.yearOptions,"width-style":"220",clearable:!0},on:{change:function(e){return t.handleSelectChange(e,1)}}})],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:t.$t("姓名"),prop:"name"}},[l("el-input",{staticClass:"width-220",attrs:{disabled:""!=t.form.id,size:"small"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1)],1),t._v(" "),l("el-row",{attrs:{gutter:8}},[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:t.$t("录取号"),prop:"year"}},[l("my-cascader",{ref:"SelectorCollege",attrs:{disabled:""!=t.form.id,"width-style":"220","sel-value":t.form.college,type:"1","sub-type":"2"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:t.$t("性别"),prop:"name"}},[l("my-select",{attrs:{disabled:""!=t.form.id,"sel-value":t.form.sex,options:t.g_sex,"width-style":"220"}})],1)],1)],1),t._v(" "),l("el-row",{attrs:{gutter:8}},[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:t.$t("学院/专业"),prop:"college"}},[l("my-cascader",{ref:"SelectorCollege",attrs:{disabled:""!=t.form.id,"width-style":"220","sel-value":t.form.college,type:"1","sub-type":"2"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:t.$t("班级"),prop:"class"}},[l("my-cascader",{ref:"selectorDept",attrs:{disabled:""!=t.form.id,"sel-value":t.form.class,type:"1","sub-type":"4","width-style":"220"}})],1)],1)],1),t._v(" "),l("el-row",{attrs:{gutter:8}},[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:t.$t("迎新老师"),prop:"year"}},[l("el-input",{staticClass:"width-220",attrs:{disabled:""!=t.form.id,size:"small"},model:{value:t.form.teacher,callback:function(e){t.$set(t.form,"teacher",e)},expression:"form.teacher"}})],1)],1)],1)],1)],1)]),t._v(" "),l("div",{staticClass:"margin-top-10"},[l("div",[l("div",{staticClass:"padding-tb-10 padding-lr-10"},[l("span",{staticClass:"title-block-tag"}),t._v(" "),l("span",{staticClass:"title-block-text"},[t._v(t._s(t.$t("流程完成情况")))])])]),t._v(" "),l("div",[l("el-table",{ref:"refDetailTable",staticStyle:{width:"100%"},attrs:{data:t.tableDetailData,"header-cell-class-name":"custom-table-cell-bg",size:"medium"}},[l("el-table-column",{attrs:{align:"center",label:t.$t("流程名称")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.process_name))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                    "+t._s(e.row.process_name)+"\n                  ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("环节数量")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(t.tableColData.length))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                    "+t._s(t.tableColData.length)+"\n                  ")])])]}}])}),t._v(" "),t._l(t.tableColData,(function(e,n){return l("el-table-column",{key:n,attrs:{align:"center",label:e.link_name},scopedSlots:t._u([{key:"default",fn:function(n){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[e.status?l("label",{staticClass:"color-success"},[t._v(t._s(t.$t("已完成")))]):t._e(),t._v(" "),e.status?t._e():l("label",{staticClass:"color-danger"},[t._v(t._s(t.$t("未完成")))])]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[e.status?l("label",{staticClass:"color-success"},[t._v(t._s(t.$t("已完成")))]):t._e(),t._v(" "),e.status?t._e():l("label",{staticClass:"color-danger"},[t._v(t._s(t.$t("未完成")))])])])]}}],null,!0)})}))],2)],1)])])])],1)}),[],!1,null,"06a0c9a0",null);e.default=component.exports;installComponents(component,{MyElTree:l(1262).default,MySelect:l(1256).default,BarChart:l(1296).default,LineChart:l(1282).default,MyInputButton:l(1257).default,MyPagination:l(234).default,LayoutLr:l(1264).default,MyCascader:l(1265).default,DialogNormal:l(235).default})}}]);