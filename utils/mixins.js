import global from "~/utils/global";
import {common} from "~/utils/api/url";
import {
  setChildren,
  setCollegeChildren,
  setSchoolBuildChildren,
  setDormBuildChildren,
  setDeptChildren,
  serverType,
  serverFormType,
  setFormServerChildren,
  setDeptRoleChildren,
  inArray,
  setObjectChildren,
  setHTChildren,
  setTagChildren
} from "~/utils/utils";

export default {
  data (){
    return {
      value: '',
      testDefault: '',
      //公共属性
      total: global.total,
      page: global.page,
      num: global.num,
      loginUserName: global.loginUserName,
      collegeId: global.collegeId,
      collegeName: global.collegeName,
      campusName: global.campusName,
      organizeName: global.organizeName,
      loginUserType: global.loginUserType,
      loginUserPhone: global.loginUserPhone,
      campusLogo: global.campusLogo,
      majorId: global.majorId,
      majorName: global.majorName,
      classId: global.classId,
      className: global.className,
      gradeId: global.gradeId,
      dataCollege: global.dataCollegeList,
      dataSchoolBuild: global.dataSchoolBuildList,
      dataDormBuild: global.dataDormBuildList,
      dataRoleTreeList: global.dataRoleTreeList,
      dataDept: global.dataDeptList,
      dataApplet: global.dataAppletList,
      dataAppletServer: global.dataAppletServer,
      dataAppletSystemServer: global.dataAppletSystemServer,
      dataAppletFDServer: global.dataAppletFDServer,
      dataProcessServer: global.dataProcessServer,
      dataProcessLinkServer: global.dataProcessLinkServer,
      dataObject: global.dataObject,
      dataHt: global.dataHt,
      dataTag: global.dataTag,
      currentSeciton: global.currentSeciton,
      currentYear: global.currentYear,
      currentMonth: global.currentMonth,
      currentDay: global.currentDay,
      currentTermId: global.currentTermId,
      currentYearId: global.currentYearId,
      currentWeekNum: global.currentWeekNum,
      currentWeekNo: global.currentWeekNo,
      userJobNum: global.userJobNum,
      realName: global.realName,
      headImage: global.headImage,
      userPhone: global.userPhone,
      auditCount: global.auditCount,
      loginUserId: global.loginUserId,
      buildInterest: global.buildInterest,
      classroomUsed: global.classroomUsed,
      dormroomType: global.dormroomType,
      dormChoseType: global.dormChoseType,
      searchTeacherType: global.searchTeacherType,
      searchStudentType: global.searchStudentType,
      searchStudentType2: global.searchStudentType2,
      g_sex: global.g_sex,
      filterStatus: global.filterStatus,
      filterRpStatus: global.filterRpStatus,
      filterJCRpStatus: global.filterJCRpStatus,
      filterDetailStatus: global.filterDetailStatus,
      filterTypes: global.filterTypes,
      filterNewTypes: global.filterNewTypes,
      filterRuTypes: global.filterRuTypes,
      filterScoreTypes: global.filterScoreTypes,
      filterScoreLevels: global.filterScoreLevels,
      weekNoSelect: global.weekNoSelect,
      switchStatus: global.switchStatus,
      levelStatus: global.levelStatus,
      filterCheckStatus: global.filterCheckStatus,
      filterAreaStatus: global.filterAreaStatus,
      filterOtherAreaStatus: global.filterOtherAreaStatus,
      filterEnableStatus: global.filterEnableStatus,
      filterPhoneOwner: global.filterPhoneOwner,
      filterBillStatus: global.filterBillStatus,
      filterDeviceUseType: global.filterDeviceUseType,
      filterDeviceUseOnlyType: global.filterDeviceUseOnlyType,
      filterOnlineStatus: global.filterOnlineStatus,
      filterDormBackStatus: global.filterDormBackStatus,
      filterClassAttendStatus: global.filterClassAttendStatus,
      filterSystemAppletTypes: global.filterSystemAppletTypes,
      currentYearList: global.currentYearList,
      currentTermList: global.currentTermList,
      currentWeekList: global.currentWeekList,
      filterAttendTypes: global.filterAttendTypes,
      filterScoreFlowTypes: global.filterScoreFlowTypes,
      filterScoreFixedFlowTypes: global.filterScoreFixedFlowTypes,
      filterTripFlowTypes: global.filterTripFlowTypes,
      filterCardFlowTypes: global.filterCardFlowTypes,
      filterUserTypes: global.filterUserTypes,
      filterUserTypes2: global.filterUserTypes2,
      filterDoorOpenTypes: global.filterDoorOpenTypes,
      filterDoorOnlineStatus: global.filterDoorOnlineStatus,
      filterDoorExceptionStatus: global.filterDoorExceptionStatus,
      filterDoorInOutStatus: global.filterDoorInOutStatus,
      filterDoorSignStatus: global.filterDoorSignStatus,
      filterAuthOptions: global.filterAuthOptions,
      filterAuthOtherOptions: global.filterAuthOtherOptions,
      filterTimeStatusOptions: global.filterTimeStatusOptions,
      filterUserAccountActiveStatusOptions: global.filterUserAccountActiveStatusOptions,
      filterAppManageStatus: global.filterAppManageStatus,
      filterAppManageType: global.filterAppManageType,
      filterAppServerType: global.filterAppServerType,
      filterFlowParamType: global.filterFlowParamType,
      filterUserTeachTypes: global.filterUserTeachTypes,
      filterAppServerConditionnalNumType: global.filterAppServerConditionnalNumType,
      filterAppServerConditionnalTextType: global.filterAppServerConditionnalTextType,
      filterAppServerConditionnalRadioType: global.filterAppServerConditionnalRadioType,
      filterAppServerConditionnalAllType: global.filterAppServerConditionnalAllType,
      fiterTeacherRoleType: global.fiterTeacherRoleType,
      fiterTeacherRoleTreeType: global.fiterTeacherRoleTreeType,
      filterProcessLinkParamType: global.filterProcessLinkParamType,
      filterGraduationType: global.filterGraduationType,
      filterPoliticsType: global.filterPoliticsType,
      filterRetireType: global.filterRetireType,
      filterHardType: global.filterHardType,
      filterAccountType: global.filterAccountType,
      filterBillTypes: global.filterBillTypes,
      filterObjectTypes: global.filterObjectTypes,
      filterObjectStatus: global.filterObjectStatus,
      g_currentDate: {},
      currentYearData: '',
      currentTermData: '',
      currentWeekData: '',
      currentSetWeekNum: 0,
      currentVersion: '',
      versionData: [],
      currentDateStatus: null,
      g_QrCode: '',
      g_BarCode: '',
      g_showMoneyItem: false,
      tableHeight: {
        'height': ''
      },
      tableHeight2: {
        'height': ''
      },
      tableHeight3: {
        'height': ''
      },
      tableHeight4: {
        'height': ''
      },
      tableHeight5: {
        'height': ''
      },
      tableHeight6: {
        'height': ''
      },
      tableHeight7: {
        'height': ''
      },
      tableHeight8: {
        'height': ''
      },
      tableHeight9: {
        'height': ''
      },
      tableHeight10: {
        'height': ''
      },
      tableHeight11: {
        'height': ''
      },
      tableHeight12: {
        'height': ''
      },
      tableHeight13: {
        'height': ''
      },
      tableHeight14: {
        'height': ''
      },
      tableHeight15: {
        'height': ''
      },
      tableHeight16: {
        'height': ''
      },
      tableHeight17: {
        'height': ''
      },
      tableHeight18: {
        'height': ''
      },
      tableHeight19: {
        'height': ''
      },
      tableHeight20: {
        'height': ''
      },
      tableHeight21: {
        'height': ''
      },
      tableMiddleHeight: {
        'height': ''
      },
      divHeight: {
        'max-height': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight2: {
        'max-height': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight3: {
        'height': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight4: {
        'height': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight5: {
        'height': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight6: {
        'height': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight7: {
        'height': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight8: {
        'max-height': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight9: {
        'height': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight10: {
        'height': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight13: {
        'height': '',
        'height1': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      drawHeight: {
        'height': ''
      },
      drawHeight2: {
        'height': ''
      },
      drawHeight3: {
        'height': ''
      },
      drawHeight4: {
        'height': ''
      },
      drawHeight5: {
        'height': ''
      },
      drawHeight6: {
        'height': ''
      },
      drawHeight7: {
        'height': ''
      },
      drawHeight8: {
        'height': ''
      },
      drawHeight9: {
        'height': ''
      }
    }
  },
  mounted(){
    window.addEventListener("resize", () => {
      this.g_HH();
    });
  },
  created() {
    this.g_HH();
  },
  methods: {
    //*****以下函数为公共调用，主要用于封装，全部用两个__开头命名，（后期增加，前期未统一处理，所以前期是分别再不同的页面中）****/
    /**
     * 设置下拉数据选择
     * @param data 传递过来的选择数据
     * @param attr 传递过来需要重新设置的字段
     * @param obj 传递过来需要重新设置的数据对象，这里适用$set进行更新，实时更新数据和视图
     * @private
     */
    __selFunc(data, attr, obj){
      if (obj && typeof obj == 'object'){
        this.$set(obj, attr, data);
      }else {
        this[attr] = data;
      }
    },
    /**
     * 点击分页
     * @param event 页码
     * @param func 需要执行的函数
     * @param pageAttr 需要改变的属性，默认page
     * @private
     */
    __currentPage(event, func, pageAttr){
      if (pageAttr){
        this[pageAttr] = event;
      }else {
        this.page = event;
      }
      if(typeof func == 'function'){
        func();
      }
    },
    /**
     * 分页总条数
     * @param event 总条数
     * @param func 需要执行的函数
     * @param pageAttr 需要改变的当前page属性，默认page = 1
     * @param numAttr 需要改变的属性，默认num
     * @private
     */
    __sizeChange(event, func, pageAttr, numAttr){
      if (pageAttr){
        this[pageAttr] = 1;
      }else {
        this.page = 1;
      }
      if (numAttr){
        this[numAttr] = event;
      }else {
        this.num = event;
      }
      if(typeof func == 'function'){
        func();
      }
    },
    /**
     * 点击跳转分页
     * @param event 页码
     * @param func 需要执行的函数
     * @param pageAttr 需要改变的属性，默认page
     * @private
     */
    __jumpPage(event, func, pageAttr){
      if (pageAttr){
        this[pageAttr] = event;
      }else {
        this.page = event;
      }
      if(typeof func == 'function'){
        func();
      }
    },
    /**
     * 搜索--仅支持单一属性
     * @param event 所搜框数据
     * @param func 需要执行的函数
     * @param pageAttr 需要改变的属性，默认page=1
     * @param attr 传递过来需要重新设置的字段
     * @param obj 传递过来需要重新设置的数据对象，这里适用$set进行更新，实时更新数据和视图
     * @private
     */
    __search(event, func, pageAttr, attr, obj){
      if (event['input']){
        if (obj && typeof obj == 'object'){
          this.$set(obj, attr, event.input);
        }else {
          this[attr] = event.input;
        }
      }else {
        if (obj && typeof obj == 'object'){
          this.$set(obj, attr, event);
        }else {
          this[attr] = event;
        }
      }
      if (pageAttr){
        this[pageAttr] = 1;
      }else {
        this.page = 1;
      }
      if(typeof func == 'function'){
        func();
      }
    },
    /**
     * 关闭弹层或者抽屉
     * @param attr 需要关闭的弹层或者抽屉
     * @private
     */
    __cancelDialog(attr){
      this[attr] = false;
    },
    //*****以下函数为公共调用，主要用于获取系统数据****/
    test() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.testDefault = 1111;
          resolve(this.testDefault);
        }, 3000)
      })
    },
    g_HH(){
      if (process.browser) {
        this.tableHeight.height = window.innerHeight - 230 + 'px';
        this.tableHeight2.height = window.innerHeight - 225 + 'px';
        this.tableHeight3.height = window.innerHeight - 370 + 'px';
        this.tableHeight4.height = window.innerHeight - 440 + 'px';
        this.tableHeight5.height = window.innerHeight - 380 + 'px';
        this.tableHeight6.height = window.innerHeight - 410 + 'px';
        this.tableHeight7.height = window.innerHeight - 470 + 'px';
        this.tableHeight8.height = window.innerHeight - 100 + 'px';
        this.tableHeight9.height = window.innerHeight - 278 + 'px';
        this.tableHeight10.height = window.innerHeight - 315 + 'px';
        this.tableHeight11.height = window.innerHeight - 325 + 'px';
        this.tableHeight12.height = window.innerHeight - 340 + 'px';
        this.tableHeight13.height = window.innerHeight - 320 + 'px';
        this.tableHeight14.height = window.innerHeight - 205 + 'px';
        this.tableHeight15.height = window.innerHeight - 148 + 'px';
        this.tableHeight16.height = window.innerHeight - 130 + 'px';
        this.tableHeight17.height = window.innerHeight - 258 + 'px';
        this.tableHeight18.height = window.innerHeight - 258 + 'px';
        this.tableHeight19.height = window.innerHeight - 180 + 'px';
        this.tableHeight20.height = window.innerHeight - 170 + 'px';
        this.tableHeight21.height = window.innerHeight - 350 + 'px';
        this.tableMiddleHeight.height = window.innerHeight - 335 + 'px';
        this.divHeight["max-height"] = window.innerHeight - 205 + 'px';
        this.divHeight2["max-height"] = window.innerHeight - 235 + 'px';
        this.divHeight7["max-height"] = window.innerHeight - 240 + 'px';
        this.divHeight3.height = window.innerHeight - 235 + 'px';
        this.divHeight4.height = window.innerHeight - 125 + 'px';
        this.divHeight5.height = window.innerHeight - 140 + 'px';
        this.divHeight6.height = window.innerHeight - 360 + 'px';
        this.divHeight9.height = window.innerHeight - 300 + 'px';
        this.divHeight10.height = window.innerHeight - 230 + 'px';
        this.divHeight13.height = window.innerHeight + 'px';
        this.divHeight8["max-height"] = window.innerHeight - 190 + 'px';
        this.drawHeight.height = window.innerHeight - 80 + 'px';
        this.drawHeight2.height = window.innerHeight - 55 + 'px';
        this.drawHeight3.height = window.innerHeight - 100 + 'px';
        this.drawHeight4.height = window.innerHeight - 90 + 'px';
        this.drawHeight5.height = window.innerHeight - 160 + 'px';
        this.drawHeight6.height = window.innerHeight - 120 + 'px';
        this.drawHeight7.height = window.innerHeight - 80 + 'px';
        this.drawHeight8.height = window.innerHeight - 180 + 'px';
        this.drawHeight9.height = window.innerHeight - 120 + 'px';
      }
    },
    async initVersionData(){
      let params = {
        campusName: this.campusName
      };
      await this.$axios.get("https://campus.9451.com/campusmanage/appapi/system-version", {params: params}).then(res => {
        if (res.data.data){
          this.currentVersion = res.data.data.version;
          this.versionData = res.data.data.logs;
        }
      });
    },
    /**
     * 获取用户未读消息数量
     */
    async getNoReadNum() {
      let params = {
        actionTypeSet: '510,511,512,513,514,515,516,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531',
        applyTypeCodeSet: 'PunishmentApply,LeaveApply,TeacherLeaveApply,ScoreApply',
        actionType: '1,2,3,-1'
      };
      params = this.$qs.stringify(params);
      await this.$axios.post(common.noread_count, params).then(res => {
        if (res.data.data){
          this.auditCount = res.data.data[-2].waitCount;
        }
      });
    },
    /**
     * 获取session
     * 采用同步执行，为了在需要使用的时候，可以先执行完成后再执行下一步操作
     * @returns {Promise<void>}
     */
    async getSessionInfo() {
      let params = {
        keys:'campusId,userType,campusType,userId,username,campusName,campusLogo,realName,externalSystemName,externalSystem,termId,externalSystemName,externalSystem'
      };
      await this.$axios.get(common.session_url, {params: params, loading: false}).then(res => {
        if (res.data.data){
          this.campusId = res.data.data.campusId;
          this.campusName = res.data.data.LOGIN_RETURN_INFO.campusName;
          this.loginUserName = res.data.data.LOGIN_RETURN_INFO.username;
          this.loginUserType = res.data.data.userType;
          this.campusLogo = res.data.data.LOGIN_RETURN_INFO.logo;
          this.currentTermId = res.data.data.currentTermWeek ? res.data.data.currentTermWeek.id : '';
          this.currentYearId = res.data.data.currentTermWeek ? res.data.data.currentTermWeek.schYearId : '';
          this.userJobNum = res.data.data.LOGIN_RETURN_INFO.jobNum;
          this.realName = res.data.data.realName;
          this.headImage = res.data.data.LOGIN_RETURN_INFO.teacherPhoto;
          this.organizeName = res.data.data.LOGIN_RETURN_INFO.organize ? res.data.data.LOGIN_RETURN_INFO.organize.departmentName : '';
          this.headImage = res.data.data.headImage;
          this.loginUserId = res.data.data.LOGIN_RETURN_INFO.userInfo ? res.data.data.LOGIN_RETURN_INFO.userInfo.userId : res.data.data.userId;
          this.loginUserPhone = res.data.data.LOGIN_RETURN_INFO.phone,
          this.g_showMoneyItem = res.data.data.appletCostDisplay
        }
      });
    },
    /**
     * 获取当前时间,主要用在年月日周搜索的条件上
     * 采用同步执行，为了在需要使用的时候，可以先执行完成后再执行下一步操作
     * @returns {Promise<void>}
     */
    async getCurrentGDateInfo(campusId) {
      let params = {

      };
      await this.$axios.get(common.date_now, {params: params}).then(res => {
        if (res.data.data){
          this.g_currentDate = res.data.data;
        }
      });
    },
    /**
     * 获取当前学年学期学周
     * 采用同步执行，为了在需要使用的时候，可以先执行完成后再执行下一步操作
     * @returns {Promise<void>}
     */
    async getCurrentWeekInfo(campusId) {
      let params = {
        campusId: campusId
      };
      await this.$axios.get(common.organization_week, {params: params}).then(res => {
        if (res.data.data){
          this.currentYear = res.data.data.name;
          this.currentWeekNum = res.data.data.weekNum;
          this.currentWeekNo = res.data.data.weekNo;
          //this.currentSeciton = res.data.data.section;
        }else{
          if (res.data.code == 466){
            this.currentDateStatus = res.data.desc;
          }else if (res.data.code == 459){
            this.currentDateStatus = this.$t("缺失学年学期相关数据");
          }
        }
      });
    },
    /**
     * 获取当前系统所在的信息
     * 当前年、月、日、学期、学周等信息
     */
    async getCurrentDateInfo(){
      await this.$axios.get(common.session_url).then(res => {
        console.log(3);
      });
    },
    /**
     * 获取学院的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getCollegeInfo(type = 1) {
      await this.$axios.get(common.hierarchical_college).then(res => {
        if (res.data.data){
          this.dataCollege = setCollegeChildren(res.data.data.tree, type);
        }
      });
    },
    /**
     * 获取学院的list信息--新
     * 主要用于树形菜单,无年级，下来菜单等
     * @returns {Promise<void>}
     */
    async getCollegeInfoNew(type = 1) {
      await this.$axios.get(common.hierarchical_college_new).then(res => {
        if (res.data.data){
          this.dataCollege = setCollegeChildren(res.data.data.tree, type);
        }
      });
    },
    /**
     * 获取宿舍楼的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getDormBuildInfo(type = 1) {
      let params = {
        buildingType: 1
      };
      await this.$axios.get(common.hierarchical_build, {params: params}).then(res => {
        if (res.data.data){
          this.dataDormBuild = setDormBuildChildren(res.data.data, type);
        }
      });
    },
    /**
     * 获取教学楼的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getSchoolBuildInfo(type=1) {
      let params = {
        buildingType: 0
      };
      await this.$axios.get(common.hierarchical_build, {params: params}).then(res => {
        if (res.data.data){
          this.dataSchoolBuild = setSchoolBuildChildren(res.data.data, type);
        }
      });
    },
    /**
     * 获取部门的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getDeptInfo(type) {
      let params = {
        superDeptId: 0
      };
      await this.$axios.get(common.hierarchical_dept, {params: params}).then(res => {
        let arr = [];
        if (res.data.data){
          this.dataDept = setDeptChildren(res.data.data[0].child_list, arr, 'child_list', 'children', type);
        }
      });
    },
    /**
     * 获取应用的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getAppletInfo(searchName) {
      let params = {
        page: 1,
        num: 9999,
        searchKey: searchName
      };
      await this.$axios.get(common.server_applet_list, {params: params}).then(res => {
        let arr = [];
        if (res.data.data){
          for (let i = 0; i < res.data.data.list.length; i++){
            res.data.data.list[i]['label'] = res.data.data.list[i].applet_name;
            res.data.data.list[i]['value'] = res.data.data.list[i].id;
          }
          this.dataApplet = res.data.data.list;
        }
      });
    },
    /**
     * 获取应用服务的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getAppletServerInfo(searchName) {
      let params = {
        page: 1,
        num: 9999,
        appletId: searchName
      };
      await this.$axios.get(common.server_form_template_form_list, {params: params}).then(res => {
        let arr = [];
        console.log(res.data);
        if (res.data.data){
          this.dataAppletServer = setFormServerChildren(res.data.data);
        }
      });
    },
    /**
     * 获取系统服务的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getAppletSystemServerInfo(searchName) {
      let params = {
        page: 1,
        num: 9999,
        appletId: searchName
      };

      let arrServer = [];
      let arrServerItem = [];
      let arrLocal = [];

      await this.$axios.get('/json/systemServer.json', {params: params}).then(res => {
        let arr = [];
        if (res.data){
          arrLocal = res.data;
        }
      });

      await this.$axios.get(common.server_form_template_form_list, {params: params}).then(res => {
        if (res.data.data){
          arrServerItem = [];
          let num = 0;
          for (let i = 0; i < res.data.data.length; i++){
            if (res.data.data[i].isDefault == true){
              let dataList = res.data.data[i]['formList'] ? res.data.data[i].formList : [];
              arrServer.push({
                appletName: res.data.data[i].appletName,
                appletId: res.data.data[i].appletId,
                appletType: res.data.data[i].appletType,
                formList: []
              });
              for (let j = 0; j < dataList.length; j++){
                let sel = inArray(dataList[j], arrLocal[0].formList, 'formName');
                if (sel != -1){
                  dataList[j]['unit'] = '2';
                  arrServerItem.push(dataList[j]);
                }
              }
              arrServerItem.push({
                "formName": "应收应付",
                "id": "113",
                "formCode": "YSYF",
                "unit": "2"
              });
              arrServerItem.push({
                "formName": "发票管理",
                "id": "114",
                "formCode": "FPGL",
                "unit": "2"
              });
              arrServerItem.push({
                "formName": "交易流水",
                "id": "115",
                "formCode": "JYLS",
                "unit": "2"
              });

              arrServer[num]['formList'] = arrServerItem;
              num++;
            }
          }
        }
      });
      this.dataAppletSystemServer = setFormServerChildren(arrServer);
    },
    /**
     * 获取财务服务的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getAppletFDServerInfo(searchName) {
      let params = {
        page: 1,
        num: 9999,
        appletId: searchName
      };

      let arrServer = [];
      let arrServerItem = [];
      let arrLocal = [];

      await this.$axios.get('/json/appFDServer.json', {params: params}).then(res => {
        let arr = [];
        if (res.data){
          arrLocal = res.data;
          this.dataAppletFDServer = setFormServerChildren(arrLocal);
        }
      });
    },
    /**
     * 获取流程服务的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getLinkProcessInfo(searchName) {
      let params = {
        page: 1,
        num: 9999
      };
      await this.$axios.get(common.enroll_process_page, {params: params}).then(res => {
        let arr = [];
        if (res.data.data){
          let arr = [];
          for (let i = 0; i < res.data.data.list.length; i++) {
            res.data.data.list[i]['label'] = res.data.data.list[i].processName;
            res.data.data.list[i]['value'] = res.data.data.list[i].id;
            res.data.data.list[i]['unit'] = 1;
          }
          this.dataProcessServer = res.data.data.list;
        }
      });
    },
    /**
     * 获取流程服务的环节list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getLinkProcessLinkInfo(type) {
      let params = {};
      await this.$axios.get(common.enroll_custom_form_tree, {params: params}).then(res => {
        let arr = [];
        if (res.data.data){
          let arr = [];
          for (let i = 0; i < res.data.data.length; i++) {
            res.data.data[i]['label'] = res.data.data[i].processName;
            res.data.data[i]['value'] = res.data.data[i].id;
            res.data.data[i]['unit'] = 1;
            if (res.data.data[i]['linkList'] && res.data.data[i]['linkList'].length > 0){
              res.data.data[i]['children'] = [];
              let children = [];
              for (let j = 0; j < res.data.data[i]['linkList'].length; j++){
                if (res.data.data[i]['linkList'][j].linkSubType == type){
                  children.push({
                    label: res.data.data[i]['linkList'][j].linkName,
                    value: res.data.data[i]['linkList'][j].id,
                    unit: 2
                  });
                }
              }
              res.data.data[i]['children'] = children;
            }
          }
          this.dataProcessLinkServer = res.data.data;
        }
      });
    },
    /**
     * 获取角色的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getRoleTreeInfo(type = 1) {
      let params = {
        page: 1,
        num: 9999
      };
      await this.$axios.get(common.organize_role_page, {params: params}).then(res => {
        let arr = [];
        if (res.data.data){
          //console.log(res.data.data.list);
          for (let i = 0; i < res.data.data.list.length; i++){
            if (res.data.data.list[i].department_path != "" && res.data.data.list[i].userList.length > 0){
              arr.push(res.data.data.list[i]);
            }
          }
          this.dataRoleTreeList = setDeptRoleChildren(arr);
        }
      });
    },
    /**
     * 获取项目的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getObjectInfo(type) {
      let params = {
        //superDeptId: 0
      };
      await this.$axios.get(common.object_list, {params: params}).then(res => {
        let arr = [];
        if (res.data.data){
          this.dataObject = setObjectChildren(res.data.data);
        }
      });
    },
    /**
     * 获取合同的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getHtInfo(type) {
      let params = {
        //superDeptId: 0
      };
      await this.$axios.get(common.ht_list, {params: params}).then(res => {
        let arr = [];
        if (res.data.data){
          console.log(res.data.data);
          this.dataHt = setHTChildren(res.data.data);
        }
      });
    },
    /**
     * 获取标签的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getTagInfo(type) {
      let params = {
        //superDeptId: 0
      };
      await this.$axios.get(common.tag_list, {params: params}).then(res => {
        let arr = [];
        if (res.data.data){
          console.log(res.data.data);
          this.dataTag = setTagChildren(res.data.data);
        }
      });
    },
    /**
     * 重置集联下拉，否则会出现回显问题
     * 用于自定义集联下拉，非自定义不能使用
     */
    resetCasadeSelector(refTag) {
      if (this.$refs[refTag] && this.$refs[refTag].$refs.cascaderSelector) {
        this.$refs[refTag].$refs.cascaderSelector.$refs.panel.activePath = [];
        this.$refs[refTag].$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths();
      }
    },
    async initCurrentYearList(){
      let params = {
        page: 1,
        num: 10000
      };
      await this.$axios.get(common.year_list, {params: params}).then(res => {
        if (res.data.data){
          if (res.data.data.list.length > 0){
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['label'] = res.data.data.list[i].name;
              res.data.data.list[i]['value'] = res.data.data.list[i].id;
              if (res.data.data.list[i].current == true){
                this.currentYearData = res.data.data.list[i].id;
              }
            }
          }
          this.currentYearList = res.data.data.list;
        }
      });
    },
    async initCurrentTermList(year,resolve){
      let num = 0;
      let index = 0;
      let params = {
        page: 1,
        num: 999,
        schYearId: year
      };
      this.currentTermData = "";
      this.currentTermList = [];
      await this.$axios.get(common.term_list, {params: params}).then(res => {
        if (res.data.data && res.data.data.list.length > 0){
          for (let i = 0; i < res.data.data.list.length; i++){
            res.data.data.list[i]['label'] = res.data.data.list[i].name;
            res.data.data.list[i]['value'] = res.data.data.list[i].id;
            if (res.data.data.list[i].current == true){
              num++;
              index = i;
            }
          }
          if (num > 0){
            this.currentTermData = res.data.data.list[index].id;
          }else {
            this.currentTermData = res.data.data.list[0].id;
          }
          this.currentTermList = res.data.data.list;
        }
      });
    },
    async initCurrentWeekList(year,term){
      let currentWeekData = [];
      this.currentWeekList = [];
      this.currentSetWeekNum = 0;
      this.currentWeekData = '';
      let params = {
        syearId: year,
        termId: term
      };
      await this.$axios.get(common.week_list, {params: params}).then(res => {
        if (res.data.data && res.data.data.teachSetting){
          for (let i = 0; i < res.data.data.teachSetting.weekNum; i++){
            currentWeekData.push({
              label: this.$t("第")+ (i + 1) + this.$t("周"),
              value: i + 1
            });
          }
          if (currentWeekData.length > 0){
            this.currentWeekData = currentWeekData[0].value;
          }
          this.currentWeekList = currentWeekData;
          this.currentSetWeekNum = res.data.data.teachSetting.weekNum;
        }
      });
    },
    serverTypeInfo(value, type){
      return serverType(type, value);
    },
    serverFormTypeInfo(value, type){
      return serverFormType(type, value);
    },
    async getUserQrcode(value){
      let params = {
        userId: value
      };
      await this.$axios.get(common.enroll_student_qrcode, {params: params}).then(res => {
        if (res.data.data){
          this.g_QrCode = res.data.data.qrcodeImageBase64;
        }
      });
    },
    async getUserBarcode(value){
      let params = {
        userId: value
      };
      await this.$axios.get(common.enroll_student_barcode, {params: params}).then(res => {
        if (res.data.data){
          this.g_BarCode = res.data.data.barcodeImageBase64;
        }
      });
    },
    refreshPhoto(id){
      let params = {
        id: id
      };
      this.$axios.get(common.attend_dorm_static_refresh_face_class_record_page, {params: params}).then(res => {
        if (res.data.data){
          this.init();
        }
      });
    }
  }
}
