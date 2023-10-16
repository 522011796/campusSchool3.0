<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">线上选寝</span>
        </div>
        <my-el-tree type="1" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="24">
              <div class="text-right">
                <div class="layout-inline text-right">
                  <my-select class="layout-item" :clearable="true" width-style="120" size="small" :sel-value="searchStatus" :options="filterBillStatus" @change="handeSelect"></my-select>
                  <my-date-picker class="layout-item" style="position: relative; top: 1px;" type="daterange" :sel-value="searchDate" size="small" width-style="240" @change="handleTime"></my-date-picker>
                  <my-input-button class="layout-item" size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('手机号/姓名')" @click="search"></my-input-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="margin-top-10">
          <el-table
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :max-height="tableHeight2.height"
            style="width: 100%">
            <el-table-column
              :label="$t('日期')"
              align="center">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.add_time ? $moment(scope.row.add_time).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.add_time ? $moment(scope.row.add_time).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('院系')"
              align="center">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.college_name }}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.college_name }}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('专业')"
              align="center">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.major_name }}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.major_name }}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('班级')"
              align="center">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.clazz_name }}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.clazz_name }}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('申请人')"
              align="center">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.real_name }}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.real_name }}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('手机号')"
              align="center">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.phone }}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.phone }}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('收款人')"
              align="center">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.handler_name }}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.handler_name }}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('宿舍')"
              align="center">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div>
                    <div>
                      <span>{{$t("宿舍")}}:</span>
                      <span>{{scope.row.chose_name}}</span>
                    </div>
                    <div>
                      <span>{{$t("房号")}}:</span>
                      <span>{{scope.row.dormitory_no}}</span>
                    </div>
                    <div>
                      <span>{{$t("床号")}}:</span>
                      <span>{{scope.row.bed_no}}</span>
                    </div>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.dormitory_no }}
                    <i class="fa fa-info-circle"></i>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('类型')"
              align="center">
              <template slot-scope="scope">
                {{dormTypeInfo(scope.row.type)}}
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('金额')"
              align="center">
              <template slot-scope="scope">
                <span>{{scope.row.room_price}}</span>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('缴费状态')"
              align="center">
              <template slot-scope="scope">
                <span v-if="scope.row.status == 1" class="color-warning">{{$t("未缴费")}}</span>
                <span v-if="scope.row.status == 2" class="color-success">{{$t("已缴费")}}</span>
                <span v-if="scope.row.status == 7" class="color-disabeld">{{$t("取消")}}</span>
              </template>
            </el-table-column>
            <el-table-column
              fixed="right"
              :label="$t('操作')"
              align="center"
              width="80">
              <template slot-scope="scope">
                <i v-if="scope.row.status == 1" class="fa fa-cog color-grand" @click="setInfo(scope.row)"></i>
                <span v-else>--</span>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" content="确认该学生已缴费？" :detail="subDetail" @ok-click="handleOkChange" @cancel-click="handleCancelChange"></my-normal-dialog>
  </div>
</template>

<script>
  import {common} from "../../../utils/api/url";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MyNormalDialog from "../../../components/utils/dialog/MyNormalDialog";
  import DrawerRight from "../../../components/utils/dialog/DrawerRight";
  import MyCascader from "../../../components/utils/select/MyCascader";
  import MySelect from "../../../components/MySelect";
  import {dormTypeText, inArray, MessageError, MessageSuccess, paddingChecked} from "../../../utils/utils";
  import mixins from "../../../utils/mixins";
  import dormroomValidater from "../../../utils/validater/dormroomValidater";
  import MyElTree from "../../../components/tree/MyElTree";
  import UploadSquare from "../../../components/utils/upload/UploadSquare";
  import MyInputButton from "../../../components/search/MyInputButton";

  export default {
    mixins: [mixins, dormroomValidater],
    components: {MyElTree, DialogNormal,MyNormalDialog,DrawerRight,MyCascader,MySelect,UploadSquare,MyInputButton},
    data(){
      return {
        tableData: [],
        tableTeacherData: [],
        searchBuildId: '',
        searchFloorNum: '',
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        loadingList: false,
        subTitle: '',
        subDetail: '',
        errorTips: '',
        searchTeacherName: '',
        searchKey: '',
        searchDate: '',
        searchStatus: '',
        uploadFileUrl: common.upload_file,
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        form: {
          id: '',
          buildName: '',
          buildData: [],
          floor: '',
          roomNo: '',
          areaTotal: '0',
          personTotal: '',
          type: '',
          video: false,
          buildId: "",
          buildingName: "",
          floorNum: "",
          arrow: '',
          price: '',
          reamrks: '',
          goodsNum: '',
          teacherId: [],
          choseLimit: false,
          switch: true,
          imgList: [],
          roomPhotos: ""
        },
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
          addTimeBegin: this.searchDate ? this.searchDate[0] : '',
          addTimeEnd: this.searchDate ? this.searchDate[1] : '',
          searchKey: this.searchKey,
          status: this.searchStatus,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          clazz: this.searchClass,
        };
        this.$axios.get(common.dorm_online_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      editInfo(row){
        let teacher_id = !row.teacher_id ? [] : row.teacher_id.split(",");
        let photos = row.room_photos ? row.room_photos.split("|") : [];
        this.form = {
          id: row.id,
          buildName: row.build_name,
          buildData: [row.build_id, row.floor_num],
          floor: '',
          roomNo: row.dormitory_no,
          areaTotal: '0',
          personTotal: row.people_num,
          type: ''+row.type,
          video: false,
          buildId: row.build_id,
          buildingName: row.build_name,
          floorNum: row.floor_num,
          arrow: row.room_orient,
          price: row.room_price,
          remarks: row.room_des,
          goodsNum: row.people_num,
          teacherId: teacher_id,
          choseLimit: row.chose_limit == 0 ? true : false,
          imgList: photos,
          roomPhotos: ""
        };
        this.modalVisible = true;
      },
      deleteInfo(row){
        this.form.id = row.id;
        this.subDetail = row.dormitory_no;
        this.visibleConfim = true;
      },
      nodeClick(data){
        // this.searchBuildId = "";
        // this.searchFloorNum = "";
        // if (data.unit == 6){
        //   this.searchBuildId = data.id;
        //   this.searchFloorNum = data.floorNum;
        // }else if (data.unit == 7){
        //   this.searchBuildId = data.buildId;
        //   this.searchFloorNum = data.floorNum;
        // }
        // this.page = 1;

        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
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
        this.page = 1;
        this.init();
      },
      setInfo(row){
        this.form.id = row.id;
        this.subDetail = row.real_name ;
        this.visibleConfim = true;
      },
      search(data){
        this.page = 1;
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
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      dormTypeInfo(val){
        return dormTypeText(val);
      },
      handleTime(data){
        this.searchDate = data;
      },
      handeSelect(data){
        this.searchStatus = data;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.form.id
        };
        url = common.dorm_online_handle;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.visibleConfim = false;
          this.dialogLoading = false;
        });
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .room-photo{
    height: 50px;
    width: 45px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    margin-right: 5px;
    display: inline-block;
  }
</style>
