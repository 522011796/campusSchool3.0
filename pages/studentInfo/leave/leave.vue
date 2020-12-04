<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">请假查询</span>
        </div>
        <MyElTree :type="mainType" :sub-type="subType" @node-click="nodeClick">
          <div slot="top" class="text-center">
            <el-button :type="mainType == 1 ? 'primary' : 'default'" size="mini" @click="changeTree(1,3)">{{$t("院系")}}</el-button>
            <el-button :type="mainType == 2 ? 'primary' : 'default'" size="mini" @click="changeTree(2,2)">{{$t("建筑楼")}}</el-button>
          </div>
        </MyElTree>
      </div>

      <div slot="right">
        <div class="layout-right-tab">
          <el-row>
            <el-col :span="10">
              <el-button size="small" :type="searchType == 1 ? 'primary' : 'default'"  icon="el-icon-date" @click="changeTime(1)">{{$t("今天")}}</el-button>
              <el-button size="small" :type="searchType == 2 ? 'primary' : 'default'" plain  icon="el-icon-date" @click="changeTime(2)">{{$t("昨天")}}</el-button>
              <el-button size="small" :type="searchType == 3 ? 'primary' : 'default'" plain  icon="el-icon-date" @click="changeTime(3)">{{$t("本周")}}</el-button>
              <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo()">{{$t("导出")}}</el-button>
            </el-col>
            <el-col :span="14" class="text-right">
              <my-date-picker type="daterange" :sel-value="searchDate" size="small" width-style="240" @change="handleTime"></my-date-picker>
              <MyInputButton size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('姓名/寝室号')" @click="search"></MyInputButton>
            </el-col>
          </el-row>
        </div>

        <div>
          <div class="bg-white border-bottom-1 padding-lr-5 padding-tb-5" :style="divHeight">
            <div v-if="tableData.length <= 0">
              <div class="text-center padding-tb-10">
                <span class="color-disabeld">{{$t("暂无数据")}}</span>
              </div>
            </div>
            <el-row v-else :gutter="16">
              <el-col :span="6" v-for="(item, index) in tableData" :key="index" class="margin-bottom-20">
                <el-card :body-style="{padding: '10px 10px'}" style="position: relative">
                  <span class="leave-tag bg-success">
                    {{$t("已通过")}}
                  </span>

                  <div>
                    <div class="leave-title color-grand">
                      <span class="leave-title-ellipsis-text">{{item.apply_user_name}}</span>
                    </div>
                    <div class="leave-sub-title color-muted">
                      <span class="leave-title-ellipsis-text color-warning">{{item.class_name}}</span>
                    </div>
                    <div class="leave-sub-title color-muted">
                      <span>{{$t("开始")}}</span>
                      <span>{{$moment(item.date1).format("YYYY-MM-DD hh:mm")}}</span>
                    </div>
                    <div class="leave-sub-title color-muted">
                      <span>{{$t("结束")}}</span>
                      <span>{{$moment(item.date2).format("YYYY-MM-DD hh:mm")}}</span>
                    </div>
                    <div class="leave-sub-title color-muted">
                      <span>{{$t("类型")}}</span>
                      <span>
                        <el-tag size="small" type="warning">{{item.str1}}</el-tag>
                      </span>
                    </div>
                    <div class="leave-sub-title color-muted">
                      <span>{{$t("时长")}}</span>
                      <span>
                        <el-tag size="small" type="warning"><i class="fa fa-calendar margin-right-5"></i>{{item.double1_str}}</el-tag>
                      </span>
                    </div>
                  </div>
                  <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" class="leave-header-logo">
                </el-card>
              </el-col>
            </el-row>
          </div>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </div>
    </layout-lr>
  </div>
</template>

<script>
import LayoutLr from "../../../components/Layout/LayoutLr";
import MyElTree from "../../../components/tree/MyElTree";
import MyDatePicker from "../../../components/MyDatePicker";
import MyPagination from "../../../components/MyPagination";
import mixins from "../../../utils/mixins";
import {common} from "../../../utils/api/url";
export default {
  mixins: [mixins],
  components: {MyElTree,MyDatePicker,MyPagination,LayoutLr},
  data(){
    return {
      tableData: [],
      mainType: "1",
      subType: "3",
      searchType: '1',
      searchBuild: '',
      searchFloor: '',
      searchCollege: '',
      searchMajor: '',
      searchGrade: '',
      searchClass: '',
      searchDate: [this.$moment(new Date()).format("YYYY-MM-DD"), this.$moment(new Date()).format("YYYY-MM-DD")],
      searchKey: '',
      searchStartTime: this.$moment(new Date()).format("YYYY-MM-DD"),
      searchEndTime: this.$moment(new Date()).format("YYYY-MM-DD")
    }
  },
  created() {
    this.init();
  },
  methods: {
    init(){
      let params = {
        page: this.page,
        num: this.num,
        searchKey: this.searchKey,
        delete: false,
        status: 3,
        applyTimeBegin: this.searchStartTime,
        applyTimeEnd: this.searchEndTime,
        applyTypeCode: 'LeaveApply'
      };
      if (this.mainType == 1){
        params['collegeId'] = this.searchCollege;
        params['majorId'] = this.searchMajor;
        params['grade'] = this.searchGrade;
        params['classId'] = this.searchClass;
      }else if (this.mainType == 2){
        params['buildingId'] = this.searchBuild;
        params['floorNum'] = this.searchFloor;
      }
      this.$axios.get(common.audit_page, {params: params}).then(res => {
        console.log(res);
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },
    nodeClick(data){
      this.searchCollege = "";
      this.searchMajor = "";
      this.searchGrade = "";
      this.searchClass = "";
      this.searchBuild = "";
      this.searchFloor = "";

      if (this.mainType == 1){
        if (data.unit == 1){
          this.searchCollege = data.id;
        }else if (data.unit == 2){
          this.searchCollege = data.college_id;
          this.searchMajor = data.id;
        }else if (data.unit == 3){
          this.searchMajor = data.major_id;
          this.searchGrade = data.grade;
        }else if (data.unit == 4){
          this.searchClass = data.id;
        }
      }else if (this.mainType == 2){
        if (data.unit == 6){
          this.searchBuild = data.id;
        }else if (data.unit == 7){
          this.searchBuild = data.buildId;
          this.searchFloor = data.id;
        }
      }
      this.init();
    },
    expandInfo(){
      let url = common.audit_download;
      let params = {
        page: 1,
        num: 9999,
        searchKey: this.searchKey,
        delete: false,
        status: 3,
        applyTimeBegin: this.searchStartTime,
        applyTimeEnd: this.searchEndTime,
        applyTypeCode: 'LeaveApply'
      };
      if (this.mainType == 1){
        params['collegeId'] = this.searchCollege;
        params['majorId'] = this.searchMajor;
        params['grade'] = this.searchGrade;
        params['classId'] = this.searchClass;
      }else if (this.mainType == 1){
        params['buildingId'] = this.searchBuild;
        params['floorNum'] = this.searchFloor;
      }
      params = this.$qs.stringify(params);
      window.open(url+"?"+params, "_self");
    },
    handleTime(data){
      this.searchDate = data;
      this.searchStartTime = data[0];
      this.searchEndTime = data[1];
    },
    search(data){
      this.searchKey = data.input;
      this.init();
    },
    sizeChange(event){
      this.page = 1;
      this.num = event;
      this.init();
    },
    currentPage(event){
      this.page = event;
      this.init();
    },
    changeTime(type){
      this.searchType = type;
      switch (type) {
        case 1:
          this.searchStartTime = this.$moment(new Date()).format("YYYY-MM-DD");
          this.searchEndTime = this.$moment(new Date()).format("YYYY-MM-DD");
          break;
        case 2:
          this.searchStartTime = this.$moment().subtract(1, 'days').format("YYYY-MM-DD");
          this.searchEndTime = this.$moment().subtract(1, 'days').format("YYYY-MM-DD");
          break;
        case 3:
          this.searchStartTime = this.$moment().weekday(0).format('YYYY-MM-DD');
          this.searchEndTime = this.$moment(new Date()).format("YYYY-MM-DD");
          break
      }
      this.$set(this.searchDate,[0],this.searchStartTime);
      this.$set(this.searchDate,[1],this.searchEndTime);
      this.init();
    },
    changeTree(mainType, subType){
      this.searchCollege = "";
      this.searchMajor = "";
      this.searchGrade = "";
      this.searchClass = "";
      this.searchBuild = "";
      this.searchFloor = "";
      this.mainType = ''+mainType;
      this.subType = ''+subType;
      this.init();
    }
  }
}
</script>

<style scoped>
.container {

}
.leave-tag{
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 12px;
  color: #FFFFFF;
  padding: 2px 5px;
  border-bottom-left-radius: 5px;
}
.leave-title{
  font-size: 14px;
  font-weight: bold;
}
.leave-sub-title{
  font-size: 12px;
  margin-top: 5px;
}
.leave-title-ellipsis-text{
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  max-width: 150px;
}
.leave-header-logo{
  height: 80px;
  width: 80px;
  border-radius: 100%;
  border: 1px solid #C0C4CC;
  position: absolute;
  right: 5px;
  top: 50px;
}
</style>
