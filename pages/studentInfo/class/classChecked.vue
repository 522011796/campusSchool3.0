<template>
  <div class="container">
    <div class="container">
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">量化查询</span>
          </div>
          <my-el-tree type="1" sub-type="4" @node-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div class="layout-right-tab">
            <el-row>
              <el-col :span="8">
                <el-button-group>
                  <el-button :type="checkedType == 1 ? 'primary' : 'default'" size="small" @click="checkTypeInfo(1)">
                    <span>{{$t("全部")}}</span>
                    |
                    <span>{{checkData.checkStatusTotal}}</span>
                  </el-button>
                  <el-button :type="checkedType == 2 ? 'primary' : 'default'" size="small" @click="checkTypeInfo(2)">
                    <span>{{$t("已检查")}}</span>
                    |
                    <span>{{checkData.checkStatusTrue}}</span>
                  </el-button>
                  <el-button :type="checkedType == 3 ? 'primary' : 'default'" size="small" @click="checkTypeInfo(3)">
                    <span>{{$t("未检查")}}</span>
                    |
                    <span>{{checkData.checkStatusFalse}}</span>
                  </el-button>
                </el-button-group>
              </el-col>
              <el-col :span="16" class="text-right">
                <my-date-picker size="small" :sel-value="searchTime" @change="handleChangeTime($event,1)"></my-date-picker>
                <my-input-button size="small" plain width-class="width: 200px" type="success" :placeholder="$t('请输入班级')" :clearable="true" @click="search"></my-input-button>
              </el-col>
            </el-row>
          </div>

          <div class="bg-white border-bottom-1 padding-lr-5 padding-tb-5" :style="divHeight">
            <div v-if="tableData.length <= 0">
              <div class="text-center padding-tb-10">
                <span class="color-disabeld">{{$t("暂无数据")}}</span>
              </div>
            </div>
            <el-row v-else :gutter="16">
              <el-col :span="6" v-for="(item, index) in tableData" :key="index" class="margin-bottom-20" @click.native="detailItem($event, item)">
                <el-card :body-style="{padding: '10px'}" style="position: relative">
                  <span v-if="item.checkStatus" class="title-tag bg-success">
                    {{$t("已检查")}}
                  </span>
                  <span v-else class="title-tag bg-warning">
                    {{$t("未检查")}}
                  </span>

                  <div class="value-tag">
                    <span>{{item.allScopeRate}}%</span>
                  </div>

                  <div>
                    <i class="fa fa-home color-grand "></i>
                    <span class="color-grand font-size-18" style="font-weight: bold">{{item.className}}</span>
                  </div>
                  <div class="margin-top-10">
                    <div class="font-size-12">
                      <i class="fa fa-building color-disabeld"></i>
                      <span class="color-muted">{{item.collegeName}}</span>
                    </div>
                    <div class="font-size-12">
                      <i class="fa fa-flag color-disabeld"></i>
                      <span class="color-muted">{{item.majorName}}</span>
                    </div>
                    <div class="font-size-12 margin-top-5">
                      <i class="fa fa-bookmark color-disabeld"></i>
                      <span class="color-muted">{{item.checkItemMap.length}}{{$t("个项目")}}</span>
                    </div>
                    <div class="font-size-12 margin-top-5">
                      <i class="fa fa-calendar-check-o color-disabeld"></i>
                      <span class="color-muted" v-if="item.check_time">
                        <el-tag size="small" type="warning">
                          {{$moment(item.check_time).format("YYYY-MM-DD HH:mm")}}
                        </el-tag>
                      </span>
                      <span v-else>--</span>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </layout-lr>
    </div>

    <!--详细-->
    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="700px" :title="$t('班级详细')" @right-close="cancelDrawDialog">
      <div slot="content">
        <span tabindex="1"></span>
        <div>
          <span class="homework-title-text margin-left-10" v-if="saveStatus">
            <el-button type="primary" size="mini" @click="saveInfo">{{$t("完成检查")}}</el-button>
          </span>
          <span class="color-success homework-title-text" style="margin-top: 2px">
            <el-popover
              placement="bottom-start"
              width="450"
              hight="400"
              @show="initPersonRecord"
              trigger="click">
              <el-table size="mini" :data="tableRecordData">
                <el-table-column property="real_name" label="姓名"></el-table-column>
                <el-table-column property="student_id" label="学号"></el-table-column>
                <el-table-column property="sync_status_desc" label="类型"></el-table-column>
              </el-table>
              <el-button slot="reference" type="warning" size="mini">{{$t("人员变更记录")}}</el-button>
            </el-popover>
          </span>
        </div>
        <el-alert title="提示:状态操作完成后，请务必点击'完成检查'按钮，否则将不参与合格率计算" type="warning" :closable="false"></el-alert>
        <div class="margin-top-10" v-if="itemPubEnable">
          <div class="color-muted">
            <span>
              <label class="homework-title-tag"></label>
              <label class="homework-title-text color-warning">{{$t("公共区域")}}</label>
              <el-tooltip class="item" effect="dark" :content="$t('公共区域不合格项目将会分担给本宿舍所有人')" placement="bottom-start">
                <i class="fa fa-info-circle homework-title-text"></i>
              </el-tooltip>
            </span>
            <span class="homework-title-text margin-left-10">
              <i class="fa fa-building"></i>
              {{tableShareData.className}}
            </span>
            <!--<span class="homework-title-text margin-left-10">
              <i class="fa fa-home"></i>
              {{tableShareData.roomNo}}
            </span>-->
            <span class="homework-title-text margin-left-10">
              {{$t("班级整体合格率")}}
              <label class="color-success">{{tableShareData.allScopeRate}}%</label>
            </span>
          </div>
          <div class="bg-f5f5f5 padding-tb-5 padding-lr-5 margin-top-10">
            <div class="color-success font-size-12">
              <span v-if="tableShareData.editStatus">
                <el-button size="mini" :type="tableShareData.checkStatus == 1 ? 'success' : 'default'" class="font-size-12" style="cursor: default" @click="selAllItem(tableShareData, 1)">{{$t("合格")}}</el-button>
                <el-button size="mini" :type="tableShareData.checkStatus == 2 ? 'success' : 'default'" class="font-size-12" style="cursor: default" @click="selAllItem(tableShareData, 2)">{{$t("不合格")}}</el-button>
              </span>
              <span class="margin-left-10">
                <label>
                  <i class="fa fa-warning"></i>
                  {{$t("公共区域卫生合格率")}}
                </label>
                <label>{{tableShareData.pubScopeRate}}%</label>
              </span>
            </div>
            <el-row :gutter="8" class="margin-top-5">
              <!--<el-col :span="8" v-for="(item, index) in tableShareData.checkItemMap" :key="index" v-if="index < 3">-->
              <el-col :span="8" v-for="(item, index) in tableShareData.checkItemMap" :key="index">
                <el-card class="margin-top-5" :body-style="{padding:'10px',height: '20px'}">
                  <div>
                    <span class="color-grand checkitem-text moon-content-text-ellipsis-class">{{item.checkItem}}</span>
                    <span class="pull-right">
                      <span v-if="tableShareData.editStatus == false" class="color-disabeld">{{$t("未打分")}}</span>
                      <template v-if="tableShareData.editStatus">
                        <el-tag size="mini" :type="item.checkStatus == 1 ? 'success' : 'info'" class="font-size-12" style="cursor: default" @click="selItem(item ,1)">{{$t("合格")}}</el-tag>
                        <el-tag size="mini" :type="item.checkStatus == 2 ? 'danger' : 'info'" class="font-size-12" style="cursor: default" @click="selItem(item, 2)">{{$t("不合格")}}</el-tag>
                      </template>
                    </span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>

        <div class="margin-top-30" v-if="itemPrivEnable">
          <div class="color-muted">
            <span>
              <label class="homework-title-tag"></label>
              <label class="homework-title-text color-warning">{{$t("个人区域")}}</label>
            </span>
            <span class="homework-title-text" v-if="tableShareData.editStatus">
              <el-button size="mini" :type="tableShareData.checkStatus == 1 ? 'success' : 'default'" class="font-size-12" style="cursor: default" @click="selAllStudentItem(tableShareData, 1)">{{$t("合格")}}</el-button>
              <el-button size="mini" :type="tableShareData.checkStatus == 2 ? 'success' : 'default'" class="font-size-12" style="cursor: default" @click="selAllStudentItem(tableShareData, 2)">{{$t("不合格")}}</el-button>
            </span>
          </div>

          <div class="margin-top-10">
            <el-row :gutter="8">
              <el-col :span="12" v-for="(item, index) in tableStudentData" :key="index" class="margin-bottom-20">
                <el-card :body-style="{padding: '0px'}">
                  <div class="layout-inline padding-lr-10 padding-top-5" style="position: relative">
                    <div class="color-success" style="position: absolute; right: 10px;top: 20%;">
                      <div class="font-size-18 text-center">
                        {{item.priScopeRate}}%
                      </div>
                      <div class="font-size-12 text-center">
                        <span>{{$t("个人表现合格率")}}</span>
                      </div>
                    </div>
                    <div class="layout-item">
                      <span style="position: relative; top: -5px;">
                        <!--<img v-if="item.headImg" :src="item.headImg" class="head-img"/>-->
                        <el-avatar :size="50" icon="el-icon-user-solid"></el-avatar>
                      </span>
                    </div>
                    <div class="layout-item">
                      <div>
                        <span class="color-success" style="font-weight: bold">{{item.studentNo}}</span>
                      </div>
                      <div>
                        <span class="color-grand" style="height: 25px;line-height: 25px">{{item.realName}}</span>
                      </div>
                      <div>
                        <span class="checkitem-student-text moon-content-text-ellipsis-class color-muted font-size-12">{{item.className}}</span>
                      </div>
                    </div>
                  </div>
                  <div class="line-height"></div>
                  <div class="padding-lr-5">
                    <el-row :gutter="8">
                      <el-col class="margin-bottom-10" :span="12" v-for="(itemChild, index) in item.checkItemMap" :key="index" v-if="index < 3">
                        <el-card :body-style="{padding:'10px 5px',height: '20px'}">
                          <div>
                            <span class="color-grand checkitem-text moon-content-text-ellipsis-class">{{itemChild.checkItem}}111111</span>
                            <span class="pull-right">
                              <label v-if="tableShareData.editStatus == false" class="color-disabeld">{{$t("未打分")}}</label>
                              <template v-if="tableShareData.editStatus">
                                <el-tag size="mini" :type="itemChild.checkStatus == 1 ? 'success' : 'info'" class="font-size-12" style="cursor: default" @click="selItem(itemChild ,1)">{{$t("合格")}}</el-tag>
                                <el-tag size="mini" :type="itemChild.checkStatus == 2 ? 'danger' : 'info'" class="font-size-12" style="cursor: default" @click="selItem(itemChild, 2)">{{$t("不合格")}}</el-tag>
                              </template>
                            </span>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right">
          <el-pagination
            background
            :page-sizes="[10, 20, 50, 100]"
            layout="total, sizes, prev, pager, next"
            :total="totalStudent"
            :current-page="pageStudent"
            :page-size="numStudent"
            @size-change="sizeStudentChange"
            @current-change="currentStudentPage">
          </el-pagination>
        </div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import LayoutLr from "../../../components/Layout/LayoutLr";
  import MyInputButton from "../../../components/search/MyInputButton";
  import MyDatePicker from "../../../components/MyDatePicker";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import {common} from "../../../utils/api/url";
  import {dormTypeText, MessageError} from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {LayoutLr,MyInputButton,MyDatePicker,DrawerLayoutRight},
    data(){
      return {
        pageStudent: 1,
        numStudent: 20,
        totalStudent: 0,
        tableData: [],
        tableShareData: {},
        tableStudentData: [],
        tableRecordData: [],
        drawerVisible: false,
        allNum: 0,
        checkedNum: 0,
        uncheckedNum: 0,
        checkedType: 1,
        searchKey: '',
        itemId: '',
        searchTime: this.$moment().subtract(1, 'days').format("YYYY-MM-DD"),
        searchBuild: '',
        searchFloor: '',
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        checkData: {},
        saveStatus: true,
        itemPrivEnable: false,
        itemPubEnable: false,
      }
    },
    created() {
      this.initConfig();
      this.init();
    },
    methods: {
      initConfig(){
        let params = {
          checkType: 2
        };
        this.$axios.get(common.housework_query_setting, {params: params}).then(res => {
          if (res.data.data){
            this.itemPrivEnable = res.data.data.checkconfInfo.itemPrivEnable;
            this.itemPubEnable = res.data.data.checkconfInfo.itemPubEnable;
          }
        });
      },
      init(){
        let params = {
          page: this.page,
          num: this.num,
          realName: this.searchKey,
          roomNo: this.searchKey,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          busiTime: this.searchTime,
          checkType: 2,
          checkStatus: this.checkedType == 2 ? true : false,
        };
        this.$axios.get(common.housework_query_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;

            this.initCount(params);
          }
        });
      },
      initCount(params){
        this.$axios.get(common.housework_query_count, {params: params}).then(res => {
          if (res.data.data){
            this.checkData = res.data.data;
          }
        });
      },
      initPersonRecord(){
        let params = {
          page: 1,
          num: 100,
          wholeId: this.itemId
        };
        this.$axios.get(common.housework_query_person_change, {params: params}).then(res => {
          if (res.data.data){
            this.tableRecordData = res.data.data.list;
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
        this.init();
        this.init();
      },
      initShare(id){
        let params = {
          id: id,
          checkType: 2
        };
        this.$axios.get(common.housework_query_info, {params: params}).then(res => {
          if (res.data.data){
            this.tableShareData = res.data.data;
          }
        });
      },
      initStudent(id){
        let params = {
          page: this.pageStudent,
          num: this.numStudent,
          wholeId: id,
          checkType: 2,
          id: id,
        };
        this.$axios.get(common.housework_query_student_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableStudentData = res.data.data.list;
            this.totalStudent = res.data.data.totalCount;
            this.numStudent = res.data.data.num;
            this.pageStudent = res.data.data.currentPage;
          }
        });
      },
      detailItem(event, data){
        this.itemId= data.id;
        this.initShare(data.id);
        this.initStudent(data.id);
        this.drawerVisible = true;
      },
      search(data){
        this.searchKey = data.input;
        this.init();
      },
      checkTypeInfo(type){
        this.checkedType = type;
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
      dormTypeInfo(val){
        return dormTypeText(val);
      },
      handleChangeTime(data){
        this.searchTime = data;
      },
      closeDrawerDialog(event){
        this.itemId = "";
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      sizeStudentChange(event){
        this.pageStudent = 1;
        this.numStudent = event;
        this.initStudent(this.itemId);
      },
      currentStudentPage(event){
        this.pageStudent = this.itemId;
        this.initStudent();
      },
      selItem(item, status){
        let params = {
          id: this.itemId,
          scopeType: 1,
          checkitemId: item.id,
          checkStatus: status
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.housework_query_edit_info, params).then(res => {
          if (res.data.code == 200){
            item.checkStatus = status;
            this.initShare(this.itemId);
            this.initStudent(this.itemId);
          }else{
            MessageError(res.data.desc);
          }
        });
      },
      selAllItem(item, status){
        let params = {
          id: this.itemId,
          scopeType: 1,
          checkStatus: status
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.housework_query_edit_all_info, params).then(res => {
          if (res.data.code == 200){
            item.checkStatus = status;
            this.initShare(this.itemId);
          }else{
            MessageError(res.data.desc);
          }
        });
      },
      selAllStudentItem(item, status){
        let params = {
          id: this.itemId,
          scopeType: 1,
          checkStatus: status
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.housework_query_edit_private_info, params).then(res => {
          if (res.data.code == 200){
            item.checkStatus = status;
            this.initStudent(this.itemId);
          }else{
            MessageError(res.data.desc);
          }
        });
      },
      saveInfo(item, status){
        let params = {
          id: this.itemId
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.housework_query_save, params).then(res => {
          if (res.data.code == 200){
            this.initShare(this.itemId);
            this.initStudent(this.itemId);
            this.saveStatus = false;
          }else{
            MessageError(res.data.desc);
          }
        });
      },
      personRecord(){
        this.initPersonRecord();
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .title-tag{
    position: absolute;
    right: 0px;
    top: 0px;
    font-size: 12px;
    color: #FFFFFF;
    padding: 2px 5px;
    border-bottom-left-radius: 5px;
  }
  .value-tag{
    position: absolute;
    right: 10px;
    top: 35%;
    font-size: 20px;
    font-weight: bold;
    color: #67C23A
  }
  .homework-title-tag{
    display: inline-block;
    height: 20px;
    width: 3px;
    background: #E6A23C;
    font-weight: bold;
    border-radius: 3px;
  }
  .homework-title-text{
    font-weight: bold;
    position: relative;
    top: -5px;
  }
  .checkitem-text{
    max-width: 50px;
    display: inline-block;
  }
  .head-img{
    height: 50px;
    width: 50px;
    border-radius: 50px;
  }
  .checkitem-student-text{
    max-width: 180px;
    display: inline-block;
  }
</style>
