<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">归寝查询</span>
        </div>
        <my-el-tree type="2" sub-type="2" @node-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-right-tab">
          <el-row>
            <el-col :span="14">
              <el-button-group>
                <el-button size="small" :type="searchType == -1 ? 'primary' : 'default'" @click="changeStatus(-1)">{{$t("全部")}}</el-button>
                <el-button size="small" :type="searchType == 1 ? 'primary' : 'default'" @click="changeStatus(1)">{{$t("已归寝")}}</el-button>
                <el-button size="small" :type="searchType == 3 ? 'primary' : 'default'" @click="changeStatus(3)">{{$t("晚归")}}</el-button>
                <el-button size="small" :type="searchType == 0 ? 'primary' : 'default'" @click="changeStatus(0)">{{$t("未归")}}</el-button>
                <el-button size="small" :type="searchType == 4 ? 'primary' : 'default'" @click="changeStatus(4)">{{$t("超长未归")}}</el-button>
                <el-button size="small" :type="searchType == 2 ? 'primary' : 'default'" @click="changeStatus(2)">{{$t("请假")}}</el-button>
              </el-button-group>
            </el-col>
            <el-col :span="10" class="text-right">
              <my-date-picker :clearable="true" :sel-value="searchDate" size="small" width-style="130" @change="handleTime"></my-date-picker>
              <MyInputButton size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('姓名/学号/寝室号')" @click="search"></MyInputButton>
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

            <div v-else v-for="(item, index) in tableData" :key="index">
              <div class="screen-title">
                <span class="screen-title-tag"></span>
                <span style="position: relative; top: -5px;" class="color-warning">{{item.roomNo}}</span>
              </div>
              <el-row class="margin-top-10" :gutter="16">
                <el-col :span="6" v-for="(itemChild, indexChild) in item.rollCallList" :key="indexChild" class="margin-bottom-20">
                  <el-card :body-style="{padding: '10px 10px'}" style="position: relative">
                    <span class="leave-tag bg-success">
                      {{itemChild.roomNo}}/{{itemChild.bedNo}}
                    </span>
                    <div>
                      <div class="leave-title color-grand">
                        <span class="leave-title-ellipsis-text">{{itemChild.realName}}</span>
                      </div>
                      <div class="leave-sub-title color-muted">
                        <span class="leave-title-ellipsis-text color-warning">{{itemChild.className}}</span>
                      </div>
                      <div class="leave-sub-title color-muted">
                        <span>{{$t("考勤")}}</span>
                        <span>{{itemChild.checkbedRull.startTime}}-{{itemChild.checkbedRull.endTime}}</span>
                      </div>
                      <div class="leave-sub-title color-muted">
                        <span v-if="itemChild.signStatus == 2">
                          <label>{{$t("确认")}}</label>
                        </span>
                        <span v-if="itemChild.signStatus == 4">
                          <label>{{$t("核实")}}</label>
                        </span>
                        <span v-if="itemChild.signStatus == 3">
                          <label>{{$t("签到")}}</label>
                        </span>
                        <span v-if="itemChild.signStatus == 1">
                          <label>{{$t("签到")}}</label>
                        </span>
                        <span>{{$moment(itemChild.rollCallTime).format("YYYY-MM-DD HH:mm")}}</span>
                      </div>
                      <div class="leave-sub-title color-muted">
                        <span>{{$t("类型")}}</span>
                        <span>
                        <el-tag size="small" type="warning" v-if="itemChild.signStatus == 0">
                          {{$t("未归")}}
                        </el-tag>
                          <el-tag size="small" type="warning" v-if="itemChild.signStatus == 1">
                          {{$t("已归")}}
                        </el-tag>
                          <el-tag size="small" type="warning" v-if="itemChild.signStatus == 2">
                          {{$t("请假")}}
                        </el-tag>
                          <el-tag size="small" type="warning" v-if="itemChild.signStatus == 3">
                          {{$t("晚归")}}
                        </el-tag>
                          <el-tag size="small" type="warning" v-if="itemChild.signStatus == 4">
                          {{$t("超长未归")}}
                        </el-tag>

                        <span v-if="itemChild.lastEditRecord">
                          <el-tooltip class="item" effect="dark" placement="top-start">
                            <div slot="content">
                              <my-dorm-atten-status
                                :real-name="itemChild.lastEditRecord.editUserName"
                                :src-status="itemChild.lastEditRecord.originalStatus"
                                :new-status="itemChild.lastEditRecord.finalStatus"
                                :time="$moment(itemChild.lastEditRecord.time).format('YYYY-MM-DD HH:mm')">
                              </my-dorm-atten-status>
                            </div>
                            <i class="fa fa-random color-danger"></i>
                          </el-tooltip>
                        </span>
                      </span>
                      </div>
                      <div class="leave-sub-title color-muted">
                        <span>{{$t("时长")}}</span>
                        <span>
                        <el-tag size="small" type="warning"><i class="fa fa-calendar margin-right-5"></i>{{secondsFormatInfo(itemChild.signLength)}}</el-tag>
                      </span>
                      </div>
                    </div>
                    <img v-if="itemChild.headImg" :src="itemChild.headImg" class="leave-header-logo">
                    <el-avatar v-else :size="80" class="leave-header-logo">
                      <span class="el-icon-user font-size-20"></span>
                    </el-avatar>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
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
  import MyDormAttenStatus from "../../../components/utils/status/MyDormAttenStatus";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {secondsFormat} from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {MyElTree,MyDatePicker,MyPagination,LayoutLr,MyDormAttenStatus},
    data(){
      return {
        tableData: [],
        mainType: "1",
        subType: "3",
        searchType: '-1',
        searchBuild: '',
        searchFloor: '',
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        searchDate: '',
        searchKey: '',
        searchUnit: '1',
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
          buildId: this.searchBuild,
          floorNum: this.searchFloor,
          keyWord: this.searchKey,
          delete: false,
          busiTime: this.searchDate,
          userUnit: this.searchUnit
        };
        if (this.searchType != -1){
          params['signStatus'] = this.searchType;
        }
        this.$axios.get(common.attend_dorm_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      nodeClick(data){
        this.searchBuild = "";
        this.searchFloor = "";
        this.searchUnit = 1;

        if (data.unit == 6){
          this.searchUnit = 7;
          this.searchBuild = data.id;
        }else if (data.unit == 7){
          this.searchUnit = 7;
          this.searchBuild = data.buildId;
          this.searchFloor = data.id;
        }
        this.init();
      },
      handleTime(data){
        this.searchDate = data;
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
      jumpPage(data){
        this.page = data;
        this.init();
      },
      changeStatus(type){
        this.searchType = type;
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
      },
      secondsFormatInfo(val){
        return secondsFormat(val);
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
  .screen-title-tag{
    height: 20px;
    width: 5px;
    border-radius: 5px;
    display: inline-block;
    background: #409EFF;
  }
  .screen-item{
    height: 180px;
  }
  .screen-title{
    background: #eeeeee;
    padding: 5px 5px;
  }
</style>
