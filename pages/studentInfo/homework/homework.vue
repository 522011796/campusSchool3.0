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
              <el-col :span="6" v-for="(item, index) in tableData" :key="index" class="margin-bottom-20">
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
                      <span class="color-muted">{{item.checkItemMap.length}}{{$t("个项目")}}</span>
                    </div>
                    <div class="font-size-12 margin-top-5">
                      <i class="fa fa-calendar-check-o color-disabeld"></i>
                      <span class="color-muted" v-if="item.check_time">
                        <el-tag size="small" type="warning">
                          {{$moment(item.check_time).format("YYYY-MM-DD hh:mm")}}
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
  </div>
</template>

<script>
import mixins from "../../../utils/mixins";
import LayoutLr from "../../../components/Layout/LayoutLr";
import MyInputButton from "../../../components/search/MyInputButton";
import MyDatePicker from "../../../components/MyDatePicker";
import {common} from "../../../utils/api/url";
import {dormTypeText} from "../../../utils/utils";
export default {
  mixins: [mixins],
  components: {LayoutLr,MyInputButton,MyDatePicker},
  data(){
    return {
      tableData: [],
      allNum: 0,
      checkedNum: 0,
      uncheckedNum: 0,
      checkedType: 1,
      searchKey: '',
      searchTime: this.$moment().subtract(1, 'days').format("YYYY-MM-DD"),
      searchBuild: '',
      searchFloor: '',
      checkData: {}
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
        realName: this.searchKey,
        roomNo: this.searchKey,
        buildId: this.searchBuild,
        floorNum: this.searchFloor,
        busiTime: this.searchTime,
        checkType: 1,
        checkStatus: this.checkedType == 2 ? true : false,
      };
      this.$axios.get(common.housework_query_page, {params: params}).then(res => {
        console.log(res);
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
        console.log(res);
        if (res.data.data){
          this.checkData = res.data.data;
        }
      });
    },
    nodeClick(data){

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
</style>
