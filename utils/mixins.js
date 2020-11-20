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
      currentYear: global.currentYear,
      currentMonth: global.currentMonth,
      currentDay: global.currentDay,
      currentTermId: global.currentTermId,
      currentWeekNum: global.currentWeekNum,
      currentWeekNo: global.currentWeekNo,
      userJobNum: global.userJobNum,
      realName: global.realName,
      headImage: global.headImage,
      userPhone: global.userPhone,
      auditCount: global.auditCount,
      loginUserId: global.loginUserId,
      tableHeight: {
        'height': ''
      },
      drawHeight: {
        'height': ''
      }
    }
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
        this.tableHeight.height = window.innerHeight - 248 + 'px';
        this.drawHeight.height = window.innerHeight - 80 + 'px';
      }
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
        this.campusId = res.data.data.campusId;
        this.campusName = res.data.data.campusName;
        this.loginUserName = res.data.data.username;
        this.loginUserType = res.data.data.userType;
        this.campusLogo = res.data.data.campusLogo;
        this.currentTermId = res.data.data.currentTermId;
        this.userJobNum = res.data.data.jobNum;
        this.realName = res.data.data.realName;
        this.headImage = res.data.data.headImage;
        this.organizeName = res.data.data.organizeName;
        this.headImage = res.data.data.headImage;
        this.loginUserId = res.data.data.userId;
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
    async getCollegeInfo() {
      await this.$axios.get(common.hierarchical_college).then(res => {
        let groupArr = [];
        if (res.data.data){
          this.dataCollege = setCollegeChildren(res.data.data.tree, groupArr, 'children');
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
    async getDeptInfo() {
      let params = {
        superDeptId: 0
      };
      await this.$axios.get(common.hierarchical_dept, {params: params}).then(res => {
        let arr = [];
        if (res.data.data){
          this.dataDept = setDeptChildren(res.data.data[0].child_list, arr, 'child_list', 'children');
        }
      });
    }
  }
}
