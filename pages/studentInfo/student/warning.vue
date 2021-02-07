<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">学生报警</template>

      <div slot="tab">
        <el-row>
          <el-col :span="24" class="text-right">
            <div class="layout-inline text-right">
              <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
            </div>
          </el-col>
        </el-row>
      </div>

      <div slot="content">
        <el-table
          ref="refTable"
          :data="tableData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          row-key="id"
          :max-height="tableHeight.height"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="department_name"
            :label="$t('时间')">

            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{$moment(scope.row.created_time).format("YYYY-MM-DD HH:mm:ss")}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{$moment(scope.row.created_time).format("YYYY-MM-DD HH:mm:ss")}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="name"
            :label="$t('姓名')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="student_id"
            :label="$t('学号')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="phone"
            :label="$t('联系方式')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="class_name"
            :label="$t('所在班级')">
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('报警位置')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.address}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.address}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="class_name"
            width="80"
            :label="$t('操作')">

            <template slot-scope="scope">
              <i class="fa fa-eye color-grand" @click="showDetail(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal width-style="1100px" :visible="modalVisible" :show-footer="false" :title="$t('学生报警')" @close="closeDialog" @right-close="cancelDialog">
      <el-row>
        <el-col :span="6">
          <div class="margin-right-10">
            <el-card :body-style="{padding: '10px'}">
              <div class="font-size-12 color-muted">
                <div>
                  <span>{{$t("学生")}}: </span>
                  <span>{{alarmInfo ? alarmInfo.studentName : ''}}</span>
                </div>
                <div class="margin-top-5">
                  <span>{{$t("联系方式")}}: </span>
                  <span>{{alarmInfo ? alarmInfo.studentPhone : ''}}</span>
                </div>
                <div class="margin-top-5">
                  <span>{{$t("班级")}}: </span>
                  <span>{{alarmInfo ? alarmInfo.className : this.$t("未设置")}}</span>
                </div>
                <div class="margin-top-5">
                  <span>{{$t("班主任")}}: </span>
                  <span>{{alarmInfo.realName ? alarmInfo.realName : this.$t("未设置")}}</span>
                </div>
                <div class="margin-top-5">
                  <span>{{$t("班主任联系方式")}}: </span>
                  <span>{{alarmInfo.realName ? alarmInfo.phone : this.$t("未设置")}}</span>
                </div>
              </div>
            </el-card>
          </div>

          <div class="margin-top-20">
            <span class="color-warning font-size-12">
              <i class="fa fa-location-arrow"></i> {{$t("点击下面地址右侧地图可以进行位置查看")}}
            </span>
          </div>
          <el-card :body-style="{padding: '10px'}" class="margin-right-10 margin-top-5" style="position: relative">
            <label style="position: absolute; right: 10px; top: 5px; z-index: 999">
              <i class="fa fa-refresh color-warning" :class="refreshStatus == true ? 'fa-spin' : ''" @click="refreshDetail"></i>
            </label>
            <div class="font-size-12 color-muted">
              <div class="map-item" v-for="(item, index) in addrData" :key="index" @click="detailItem(item)">
                <div class="map-item-child">
                  <el-row>
                    <el-col :span="18">
                      <el-popover trigger="hover" placement="right" popper-class="custom-table-popover">
                        <div class="text-center">
                          <div class="moon-content-text-ellipsis-class">{{(item.address && item.address != "") ? item.address : '--'}}</div>
                        </div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          <div class="moon-content-text-ellipsis-class">
                            <label>{{(item.address && item.address != "") ? item.address : '--'}}</label>
                          </div>
                        </div>
                      </el-popover>
                    </el-col>
                    <el-col :span="6">
                      <el-popover trigger="hover" placement="right" popper-class="custom-table-popover">
                        <div class="text-center">
                          <div class="moon-content-text-ellipsis-class">{{$moment(item.create_time).format("YYYY-MM-DD HH:mm:ss")}}</div>
                        </div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          <div class="moon-content-text-ellipsis-class">
                            <label>{{$moment(item.create_time).format("YYYY-MM-DD HH:mm:ss")}}</label>
                          </div>
                        </div>
                      </el-popover>
                    </el-col>
                  </el-row>
                </div>
                <div v-if="item.voice_url" class="font-size-12 color-disabeld" style="position: relative">
                  <div style="background: rgb(241,243, 244); height: 30px; width: 40px; position: absolute; right: 10px; top: 0px; z-index: 999;"></div>
                  <audio class="audit-item" controls>
                    <source :src="item.voice_url" type="audio/mpeg">
                    {{$t("浏览器不支持播放器")}}
                  </audio>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="18">
          <div id="roadmap" style="height: 450px;overflow-y: auto">

          </div>
        </el-col>
      </el-row>
    </dialog-normal>
  </div>
</template>

<script>
  import MyPagination from "../../../components/MyPagination";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {MessageError, MessageSuccess} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyUserType from "../../../components/utils/MyUserType";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyInputButton from "../../../components/search/MyInputButton";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  export default {
    mixins: [mixins],
    components: {MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal},
    data(){
      return {
        tableData: [],
        searchDate: [],
        typeList: [],
        searchKey: '',
        visible: false,
        clearTime: '',
        action: '',
        modalVisible: false,
        map: {},
        marker: {},
        addrLineArr: [],
        alarmInfo: {},
        addrData: [],
        rowData: {},
        refreshStatus: false
      }
    },
    mounted() {

    },
    created() {
      this.init();
      this.initType();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          timeStart: (this.searchDate && this.searchDate.length > 0) ? (this.searchDate[0] + ' 00:00:00') : '',
          timeEnd: (this.searchDate && this.searchDate.length > 0) ? (this.searchDate[1] + ' 23:59:00') : '',
        };
        this.$axios.get(common.student_info_warning, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initType(){
        this.$axios.get(common.log_type).then(res => {
          if (res.data.data){
            let arr = [];
            for (let i = 0; i < res.data.data.length; i++){
              arr.push({
                label: res.data.data[i].name,
                id: res.data.data[i].id
              });
              if (res.data.data[i].list && res.data.data[i].list.length > 0){
                arr[i]['options'] = [];
                for (let j = 0; j < res.data.data[i].list.length; j++){
                  arr[i]['options'].push({
                    label: res.data.data[i].list[j].name,
                    id: res.data.data[i].list[j].id,
                    action: res.data.data[i].list[j].action,
                    value: res.data.data[i].list[j].action
                  });
                }
              }
            }
            this.typeList = arr;
          }
        });
      },
      initDetail(row){
        let params = {
          alarmId: row.id,
          classId: row.class_id
        };
        this.rowData = row;
        this.$axios.get(common.student_info_warning_detail_list, {params: params}).then(res => {
          if (res.data.data){
            this.alarmInfo = res.data.data;
            this.$set(this.alarmInfo, 'studentName', row.name);
            this.$set(this.alarmInfo, 'studentPhone', row.phone);
            this.$set(this.alarmInfo, 'className', row.class_name);
          }else {
            this.$set(this.alarmInfo, 'studentName', row.name);
            this.$set(this.alarmInfo, 'studentPhone', row.phone);
            this.$set(this.alarmInfo, 'className', row.class_name);
          }
        });
      },
      initMap(row, type){
        this.map = new AMap.Map("roadmap", {
          resizeEnable: true,
          zoom: 15
        });
        this.initAddrList(row, type);
      },
      addMarker(longitude, latitude){
        this.marker = new AMap.Marker({
          position: [longitude, latitude],
          content: '<div class="marker-route marker-marker-bus-from"></div>'
        });
        this.marker.setMap(this.map);
      },
      initAddrList(row, type){
        let lineArr = [];
        let params = {
          page : 1,
          num: 999,
          alarmId: row.id
        };
        if (type == 'local'){
          this.addrLineArr[this.addrLineArr.length-1];

          if ((!this.addrLineArr[0] && this.addrLineArr[0] != "") && !this.addrLineArr[1] && this.addrLineArr[1] != ""){
            this.map.setCenter(this.addrLineArr[this.addrLineArr.length-1]);
            this.addMarker(this.addrLineArr[this.addrLineArr.length-1][0], this.addrLineArr[this.addrLineArr.length-1][1]);
          }
        }else {
          this.$axios.get(common.student_info_warning_detail_map_list, {params: params}).then(res => {
            if (res.data.data){
              if (type == 'refresh'){
                this.addrData = res.data.data.locationPage.list;
              }else {
                this.addrData = res.data.data.locationPage.list;
                for (let i = 0; i < res.data.data.locationPage.list.length; i++){
                  lineArr.push([res.data.data.locationPage.list[i].longitude, res.data.data.locationPage.list[i].latitude]);
                }
                this.addrLineArr = lineArr;

                if ((!this.addrLineArr[0] && this.addrLineArr[0] != "") && !this.addrLineArr[1] && this.addrLineArr[1] != ""){
                  this.map.setCenter(this.addrLineArr[this.addrLineArr.length-1]);
                  this.addMarker(this.addrLineArr[this.addrLineArr.length-1][0], this.addrLineArr[this.addrLineArr.length-1][1]);
                }
              }
            }
          });
        }
      },
      clearInfo(){
        if (this.clearTime == ""){
          MessageSuccess(this.$t("请选择需要清空的日期"));
          return;
        }
        let params = {
          time: this.clearTime ? this.clearTime + " 23:59:59" : ''
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.log_clear, params).then(res => {
          if (res.data.code ==200){
            this.visible = false;
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
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
      handleChange(data){
        this.searchDate = data;
        this.page = 1;
        this.init();
      },
      handleClear(data){
        this.clearTime = data;
      },
      closePopover(){
        this.clearTime = "";
      },
      handleSelect(data){
        this.action = data;
        this.init();
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      closeDialog(event){
        this.modalVisible = false;
      },
      showDetail(row){
        this.modalVisible = true;
        this.initDetail(row);
        this.$nextTick(()=>{
          this.initMap(row);
        });
      },
      detailItem(row){
        this.$nextTick(()=>{
          this.addrLineArr = [[row.longitude, row.latitude]];
          this.initMap(row, 'local');
        });
      },
      refreshDetail(){
        this.refreshStatus = true;
        setTimeout(() => {
          this.refreshStatus = false;
          this.initAddrList(this.rowData, 'refresh');
        },1500);
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
  .map-item{
    border-bottom: 1px solid #dddddd;
  }
  .map-item-child{
    height: 45px;
    line-height: 45px;
  }
  .audit-item{
    height: 30px !important;
    width: 100% !important;
    border-radius: 0px !important;
  }
</style>
