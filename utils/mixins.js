import global from "~/utils/global";
import {common} from "~/utils/api/url";

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
        console.log(res.data.data);
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
        this.currentYear = res.data.data.name;
        this.currentWeekNum = res.data.data.weekNum;
        this.currentWeekNo = res.data.data.weekNo;

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
      await this.$axios.get(common.session_url).then(res => {
        this.dataCollege = [{
          label: '学院1',
          id: '1',
          show: false,
          children: [{
            label: '专业',
            id: '11',
            unit: 1,
            show: false,
            children: [{
              label: '一年级',
              id: '12',
              unit: 2,
              show: false,
              children: [{
                label: '班级1',
                id: '13',
                unit: 3,
                show: false,
              },{
                label: '班级2',
                id: '14',
                unit: 3,
                show: false,
                disabled: true,
                children: [{
                  label: '1001',
                  id: '15',
                  unit: 3,
                },{
                  label: '1002',
                  id: '16',
                  unit: 3,
                  disabled: true
                }]
              }]
            },{
              label: '二年级',
              id: '15',
              unit: 2,
              show: false,
            }]
          }]
        },{
          label: '学院2',
          id: '2',
          show: false,
          children: [{
            label: '专业2',
            id: '21',
            unit: 1,
            show: false,
            children: [{
              label: '一年级',
              id: '22',
              unit: 2,
              show: false,
              children: [{
                label: '班级1',
                id: '23',
                unit: 3,
                show: false,
              },{
                label: '班级2',
                id: '24',
                unit: 3,
                disabled: true,
                show: false,
              }]
            },{
              label: '二年级',
              id: '25',
              unit: 2,
              show: false,
            }]
          }]
        }];
      });
    },
    /**
     * 获取宿舍楼的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getDormBuildInfo() {
      await this.$axios.get(common.session_url).then(res => {
        this.dataDormBuild = [{
          label: '宿舍楼1',
          id: '1',
          children: [{
            label: '楼1',
            id: '2',
            unit: 1,
            children: [{
              label: '1层',
              id: '3',
              unit: 2,
              children: [{
                label: '1001',
                id: 4,
                unit: 3
              },{
                label: '1002',
                id: 5,
                unit: 3
              }]
            },{
              label: '2层',
              id: '6',
              unit: 2,
              children: [{
                label: '2001',
                id: 7,
                unit: 3
              },{
                label: '2002',
                id: 8,
                unit: 3
              }]
            }]
          }]
        },{
          label: '宿舍楼2',
          id: '11',
          children: [{
            label: '楼1',
            id: '12',
            unit: 1,
            children: [{
              label: '1层',
              id: '13',
              unit: 2,
              children: [{
                label: '1001',
                id: 14,
                unit: 3
              },{
                label: '1002',
                id: 15,
                unit: 3
              }]
            },{
              label: '2层',
              id: '16',
              unit: 2,
              children: [{
                label: '2001',
                id: 17,
                unit: 3
              },{
                label: '2002',
                id: 18,
                unit: 3
              }]
            }]
          }]
        }];
      });
    },
    /**
     * 获取教学楼的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getSchoolBuildInfo() {
      await this.$axios.get(common.session_url).then(res => {
        this.dataSchoolBuild = [{
          label: '教学楼1',
          id: '1',
          children: [{
            label: '楼1',
            id: '11',
            unit: 1,
            children: [{
              label: '1层',
              id: '1',
              unit: 2,
              children: [{
                label: '2001',
                id: 17,
                unit: 3
              },{
                label: '2002',
                id: 18,
                unit: 3
              }]
            },{
              label: '2层',
              id: '2',
              unit: 2,
            }]
          }]
        },{
          label: '教学楼2',
          id: '1',
          children: [{
            label: '楼1',
            id: '11',
            unit: 1,
            children: [{
              label: '1层',
              id: '1',
              unit: 2,
            },{
              label: '2层',
              id: '2',
              unit: 2,
              children: [{
                label: '2001',
                id: 17,
                unit: 3
              },{
                label: '2002',
                id: 18,
                unit: 3
              }]
            }]
          }]
        }];
      });
    },
    /**
     * 获取部门的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getDeptInfo() {
      await this.$axios.get(common.session_url).then(res => {
        this.dataDept = [{
          label: '部门1',
          id: '1',
          children: [{
            label: '楼1',
            id: '11',
            unit: 1,
            children: [{
              label: '1层',
              id: '1',
              unit: 2,
              children: [{
                label: '2001',
                id: 17,
                unit: 3
              },{
                label: '2002',
                id: 18,
                unit: 3
              }]
            },{
              label: '2层',
              id: '2',
              unit: 2,
            }]
          }]
        },{
          label: '部门2',
          id: '1',
          children: [{
            label: '楼1',
            id: '11',
            unit: 1,
            children: [{
              label: '1层',
              id: '1',
              unit: 2,
            },{
              label: '2层',
              id: '2',
              unit: 2,
              children: [{
                label: '2001',
                id: 17,
                unit: 3,
                children: [{
                  label: '2001',
                  id: 19,
                  unit: 3
                },{
                  label: '2002',
                  id: 20,
                  unit: 3
                }]
              },{
                label: '2002',
                id: 18,
                unit: 3
              }]
            }]
          }]
        }];
      });
    }
  }
}
