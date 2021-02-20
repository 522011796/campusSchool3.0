import global from "~/utils/global";
import {common} from "~/utils/api/url";
import {setChildren, setCollegeChildren, setSchoolBuildChildren, setDormBuildChildren, setDeptChildren} from "~/utils/utils";

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
      loginUserType: global.loginUserType,
      campusLogo: global.campusLogo,
      majorId: global.majorId,
      majorName: global.majorName,
      classId: global.classId,
      className: global.className,
      gradeId: global.gradeId,
      dataCollege: global.dataCollegeList,
      dataSchoolBuild: global.dataSchoolBuildList,
      dataDormBuild: global.dataDormBuildList,
      dataDept: global.dataDeptList,
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
      searchTeacherType: global.searchTeacherType,
      searchStudentType: global.searchStudentType,
      searchStudentType2: global.searchStudentType2,
      g_sex: global.g_sex,
      filterStatus: global.filterStatus,
      filterTypes: global.filterTypes,
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
      filterOnlineStatus: global.filterOnlineStatus,
      filterDormBackStatus: global.filterDormBackStatus,
      filterClassAttendStatus: global.filterClassAttendStatus,
      currentYearList: global.currentYearList,
      currentTermList: global.currentTermList,
      currentWeekList: global.currentWeekList,
      filterAttendTypes: global.filterAttendTypes,
      filterScoreFlowTypes: global.filterScoreFlowTypes,
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
      g_currentDate: {},
      currentYearData: '',
      currentTermData: '',
      currentWeekData: '',
      currentSetWeekNum: 0,
      currentVersion: '',
      versionData: [],
      currentDateStatus: null,
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
      drawHeight: {
        'height': ''
      },
      drawHeight2: {
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
        this.tableMiddleHeight.height = window.innerHeight - 335 + 'px';
        this.divHeight["max-height"] = window.innerHeight - 205 + 'px';
        this.divHeight2["max-height"] = window.innerHeight - 235 + 'px';
        this.divHeight7["max-height"] = window.innerHeight - 240 + 'px';
        this.divHeight3.height = window.innerHeight - 235 + 'px';
        this.divHeight4.height = window.innerHeight - 125 + 'px';
        this.divHeight5.height = window.innerHeight - 140 + 'px';
        this.divHeight6.height = window.innerHeight - 360 + 'px';
        this.drawHeight.height = window.innerHeight - 80 + 'px';
        this.drawHeight2.height = window.innerHeight - 15 + 'px';
      }
    },
    async initVersionData(){
      let params = {
        campusName: this.campusName
      };
      await this.$axios.get("http://campus.9451.com/campusmanage/appapi/system-version", {params: params}).then(res => {
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
      await this.$axios.get(common.session_url, {params: params}).then(res => {
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
    }
  }
}
