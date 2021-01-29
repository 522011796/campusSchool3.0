<template>
  <div class="container">
    <div class="container">
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">内务查询</span>
          </div>
          <my-el-tree type="2" sub-type="2" @node-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div class="layout-right-tab">
            <el-row>
              <el-col :span="8">
                <!--<el-button-group>
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
                </el-button-group>-->
                <tab-group-button size="small" :options='[{label:$t("全部"), value:"1", extra: checkData.checkStatusTotal},{label:$t("已检查"), value: "2", extra: checkData.checkStatusTrue},{label:$t("未检查"), value: "3", extra: checkData.checkStatusFalse}]' @click="checkTypeInfo"></tab-group-button>
              </el-col>
              <el-col :span="16" class="text-right">
                <my-date-picker size="small" :sel-value="searchTime" @change="handleChangeTime($event,1)"></my-date-picker>
                <my-input-button size="small" plain width-class="width: 200px" type="success" :placeholder="$t('请输入宿舍号')" :clearable="true" @click="search"></my-input-button>
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
                <el-card :body-style="{padding: '10px'}" style="position: relative; height: 145px">
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
                    <span class="color-grand font-size-18" style="font-weight: bold">{{item.roomNo}}</span>
                  </div>
                  <div class="margin-top-10">
                    <div class="font-size-12">
                      <i class="fa fa-building color-disabeld"></i>
                      <span class="color-muted">{{item.buildName}}</span>
                    </div>
                    <div class="font-size-12 margin-top-5">
                      <i class="fa fa-flag color-disabeld"></i>
                      <span class="color-muted">{{dormTypeInfo(item.roomType)}}</span>
                    </div>

                    <div class="font-size-12 margin-top-5">
                      <i class="fa fa-bookmark color-disabeld"></i>
                      <span class="color-muted">
                        {{$t("公共区域项目")}}{{item.checkItemMap.length}}{{$t("个")}}
                      </span>
                    </div>
                    <div class="font-size-12 margin-top-5">
                      <i class="fa fa-calendar-check-o color-disabeld"></i>
                      <span class="color-muted" v-if="item.checkTime">
                        <el-tag size="small" type="warning">
                          {{$moment(item.checkTime).format("YYYY-MM-DD HH:mm")}}
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
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </layout-lr>
    </div>

    <!--详细-->
    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="700px" :title="$t('宿舍详细')" @right-close="cancelDrawDialog">
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
              {{tableShareData.buildName}}
            </span>
            <span class="homework-title-text margin-left-10">
              <i class="fa fa-home"></i>
              {{tableShareData.roomNo}}
            </span>
            <span class="homework-title-text margin-left-10">
              {{$t("宿舍内务合格率")}}
              <label class="color-success">{{tableShareData.allScopeRate}}%</label>
            </span>
          </div>
          <div class="bg-f5f5f5 padding-tb-5 padding-lr-5 margin-top-10">
            <div class="color-success font-size-12">
              <span v-if="tableShareData.editStatus">
                <el-button size="mini" :type="checkShareStatus == 1 ? 'success' : 'default'" class="font-size-12" style="cursor: default" @click="selAllItem(tableShareData, 1)">{{$t("合格")}}</el-button>
                <el-button size="mini" :type="checkShareStatus == 2 ? 'success' : 'default'" class="font-size-12" style="cursor: default" @click="selAllItem(tableShareData, 2)">{{$t("不合格")}}</el-button>
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
                    <span class="">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">
                          {{item.checkItem}}
                        </div>
                        <div slot="reference" class="color-grand checkitem-text moon-content-text-ellipsis-class">
                          {{item.checkItem}}
                        </div>
                      </el-popover>
                    </span>
                    <span class="pull-right">
                      <span v-if="tableShareData.editStatus == false" class="color-disabeld">{{$t("未打分")}}</span>
                      <template v-if="tableShareData.editStatus">
                        <el-tag size="mini" :type="item.checkStatus == 1 ? 'success' : 'info'" class="font-size-12" style="cursor: default" @click="selItem(item ,1, 2)">{{$t("合格")}}</el-tag>
                        <el-tag size="mini" :type="item.checkStatus == 2 ? 'danger' : 'info'" class="font-size-12" style="cursor: default" @click="selItem(item, 2, 2)">{{$t("不合格")}}</el-tag>
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
              <el-button size="mini" :type="checkPriStatus == 1 ? 'success' : 'default'" class="font-size-12" style="cursor: default" @click="selAllStudentItem(tableShareData, 1)">{{$t("合格")}}</el-button>
              <el-button size="mini" :type="checkPriStatus == 2 ? 'success' : 'default'" class="font-size-12" style="cursor: default" @click="selAllStudentItem(tableShareData, 2)">{{$t("不合格")}}</el-button>
            </span>
          </div>

          <div class="margin-top-10">
            <el-row :gutter="8">
              <el-col :span="12" v-for="(item, index) in tableStudentData" :key="index" class="margin-bottom-20">
                <el-card :body-style="{padding: '0px'}">
                  <div class="layout-inline padding-lr-10 padding-top-5">
                    <div class="layout-item">
                      <span style="position: relative; top: -5px;">
                        <img v-if="item.headImg" :src="item.headImg" class="head-img"/>
                        <el-avatar v-else :size="50" icon="el-icon-user-solid"></el-avatar>
                      </span>
                    </div>
                    <div class="layout-item">
                      <div>
                        <span class="color-success" style="font-weight: bold">{{item.bedNo}}{{$t("号床")}}</span>
                      </div>
                      <div>
                        <span class="color-grand" style="height: 25px;line-height: 25px">{{item.realName}}</span>
                      </div>
                      <div>
                        <span class="">
                          <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                            <div class="text-center">
                              {{item.className}}
                            </div>
                            <div slot="reference" class="checkitem-student-text moon-content-text-ellipsis-class color-muted font-size-12">
                              {{item.className}}
                            </div>
                          </el-popover>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="line-height"></div>
                  <div class="padding-lr-5">
                    <el-row :gutter="8">
                      <el-col class="margin-bottom-10" :span="12" v-for="(itemChild, index) in item.checkItemMap" :key="index">
                        <el-card :body-style="{padding:'10px 5px',height: '20px'}">
                          <div>
                            <span class="">
                              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                                <div class="text-center">
                                  {{itemChild.checkItem}}
                                </div>
                                <div slot="reference" class="color-grand checkitem-text moon-content-text-ellipsis-class">
                                  {{itemChild.checkItem}}
                                </div>
                              </el-popover>
                            </span>
                            <span class="pull-right">
                              <label v-if="tableShareData.editStatus == false" class="color-disabeld">{{$t("未打分")}}</label>
                              <template v-if="tableShareData.editStatus">
                                <el-tag size="mini" :type="itemChild.checkStatus == 1 ? 'success' : 'info'" class="font-size-12" style="cursor: default" @click="selStudentItem(item, itemChild ,1, 1)">{{$t("合格")}}</el-tag>
                                <el-tag size="mini" :type="itemChild.checkStatus == 2 ? 'danger' : 'info'" class="font-size-12" style="cursor: default" @click="selStudentItem(item, itemChild, 2, 1)">{{$t("不合格")}}</el-tag>
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
import TabGroupButton from "../../../components/utils/button/TabGroupButton";
import {common} from "../../../utils/api/url";
import {dormTypeText, MessageError} from "../../../utils/utils";
export default {
  mixins: [mixins],
  components: {LayoutLr,MyInputButton,MyDatePicker,DrawerLayoutRight,TabGroupButton},
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
      checkPriStatus: '',
      checkShareStatus: '',
      allNum: 0,
      checkedNum: 0,
      uncheckedNum: 0,
      checkedType: 1,
      searchKey: '',
      itemId: '',
      //searchTime: this.$moment().subtract(1, 'days').format("YYYY-MM-DD"),
      searchTime: this.$moment(new Date()).format("YYYY-MM-DD"),
      searchBuild: '',
      searchFloor: '',
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
        checkType: 1
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
        buildId: this.searchBuild,
        floorNum: this.searchFloor,
        busiTime: this.searchTime,
        checkType: 1
      };
      if (this.checkedType == 2){
        params['checkStatus'] = true;
      }else if (this.checkedType == 3){
        params['checkStatus'] = false;
      }

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
      params = {
        realName: this.searchKey,
        buildId: this.searchBuild,
        floorNum: this.searchFloor,
        busiTime: this.searchTime,
        checkType: 1
      };
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
      this.searchBuild = "";
      this.searchFloor = "";
      if (data.unit == 6){
        this.searchBuild = data.id;
        this.searchFloor = data.floorNum;
      }else if (data.unit == 7){
        this.searchBuild = data.buildId;
        this.searchFloor = data.floorNum;
      }
      this.init();
    },
    initShare(id){
      let params = {
        id: id,
        checkType: 1
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
        checkType: 1,
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
      this.saveStatus = data.editStatus;
      this.initShare(data.id);
      this.initStudent(data.id);
      this.drawerVisible = true;
    },
    search(data){
      this.searchKey = data.input;
      this.init();
    },
    checkTypeInfo(type){
      this.checkedType = type.value;
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
    dormTypeInfo(val){
      return dormTypeText(val);
    },
    handleChangeTime(data){
      this.searchTime = data;
    },
    closeDrawerDialog(event){
      this.itemId = "";
      this.checkPriStatus = '';
      this.checkShareStatus = '';
      this.drawerVisible = event;
    },
    cancelDrawDialog(){
      this.checkPriStatus = '';
      this.checkShareStatus = '';
      this.drawerVisible = false;
    },
    sizeStudentChange(event){
      this.pageStudent = 1;
      this.numStudent = event;
      this.initStudent(this.itemId);
    },
    currentStudentPage(event){
      this.pageStudent = event;
      this.initStudent(this.itemId);
    },
    selItem(item, status, type){
      let params = {
        id: this.itemId,
        scopeType: type,
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
    selStudentItem(item, itemChild, status, type){
      let params = {
        id: item.id,
        scopeType: type,
        checkitemId: itemChild.id,
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
          this.checkShareStatus = status;
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
          this.checkPriStatus = status;
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
          this.init();
          this.saveStatus = false;
          this.drawerVisible = false;
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
