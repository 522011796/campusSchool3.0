<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">宿舍信息</span>
        </div>
        <my-el-tree :type="mainType" :sub-type="subType" @node-click="nodeClick" @all-click="nodeClick">
          <div slot="top" class="text-center">
            <el-button :type="showType == 2 ? 'primary' : 'default'" size="mini" @click="changeTree(2,3, 2)">{{$t("宿舍楼")}}</el-button>
            <el-button :type="showType == 1 ? 'primary' : 'default'" size="mini" @click="changeTree(1,4, 1)">{{$t("班级")}}</el-button>
          </div>
        </my-el-tree>
      </div>

      <div slot="right">
        <div class="margin-top-10">
          <div v-if="toggleTopShow == false" style="position: relative;">
            <el-card shadow="never" :body-style="{padding: '5px 10px',height: '60px'}">
              <div>
                <el-row>
                  <el-col :span="8">
                    <div class="rpStatic-top-item-mini color-muted">
                      <i class="fa fa-bed"></i>
                      <label>{{$t("总床位")}}:</label>
                    </div>
                    <div class="font-size-25 margin-top-5 color-muted margin-left-20">
                      <label>{{Object.keys(dormData).length > 0 ? dormData[0].people_num + dormData[1].people_num : 0}}</label>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="rpStatic-top-item-mini color-muted">
                      <i class="fa fa-bed"></i>
                      <label>{{$t("已分配")}}:</label>
                    </div>
                    <div class="font-size-25 margin-top-5 color-muted margin-left-20">
                      <label>{{Object.keys(dormData).length  > 0 ? dormData[0].has_people_num + dormData[1].has_people_num : 0}}</label>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="rpStatic-top-item-mini color-muted">
                      <i class="fa fa-bed"></i>
                      <label>{{$t("未分配")}}:</label>
                    </div>
                    <div class="font-size-25 margin-top-5 color-muted margin-left-20">
                      <label>{{Object.keys(dormData).length  > 0 ? dormData[0].not_people_num + dormData[1].not_people_num : 0}}</label>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-card>
            <div class="text-center toggle-show-icon" @click="toggleTopShow = !toggleTopShow">
              <div class="font-size-12 toggle-show-icon-block">
                <i class="fa fa-angle-double-down"></i>
                <label>{{$t("展开")}}</label>
              </div>
            </div>
          </div>
          <div v-if="toggleTopShow == true" style="position: relative;">
            <el-card shadow="never" :body-style="{padding: '5px 10px',height: '120px'}">
              <el-row>
                <el-col :span="8">
                  <div class="layout-inline padding-lr-10">
                    <div class="layout-item margin-top-30">
                      <div>
                        <i class="fa fa-bed color-warning" style="font-size: 35px"></i>
                      </div>
                      <div>
                        <span class="color-warning font-size-12">{{$t("总床位")}}</span>
                      </div>
                    </div>

                    <div class="layout-item font-size-12 color-warning margin-left-10">
                      <div>
                        <span>{{$t("总床位")}}</span>
                        <span>{{Object.keys(dormData).length > 0 ? dormData[0].people_num + dormData[1].people_num : 0}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span>{{$t("男生")}}</span>
                        <span>{{Object.keys(dormData).length  > 0 ? dormData[0].people_num : 0}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span>{{$t("女生")}}</span>
                        <span>{{Object.keys(dormData).length  > 0 ? dormData[1].people_num : 0}}</span>
                      </div>
                    </div>
                  </div>
                </el-col>

                <el-col :span="8">
                  <div class="layout-inline padding-lr-10">
                    <div class="layout-item margin-top-30">
                      <div>
                        <i class="fa fa-bed color-success" style="font-size: 35px"></i>
                      </div>
                      <div>
                        <span class="color-warning font-size-12">{{$t("已分配")}}</span>
                      </div>
                    </div>

                    <div class="layout-item font-size-12 color-success margin-left-10">
                      <div>
                        <span>{{$t("已分配")}}</span>
                        <span>{{Object.keys(dormData).length  > 0 ? dormData[0].has_people_num + dormData[1].has_people_num : 0}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span>{{$t("男生")}}</span>
                        <span>{{Object.keys(dormData).length  > 0 ? dormData[0].has_people_num : 0}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span>{{$t("女生")}}</span>
                        <span>{{Object.keys(dormData).length  > 0 ? dormData[1].has_people_num : 0}}</span>
                      </div>
                    </div>
                  </div>
                </el-col>

                <el-col :span="8">
                  <div class="layout-inline padding-lr-10">
                    <div class="layout-item margin-top-30">
                      <div>
                        <i class="fa fa-bed color-danger" style="font-size: 35px"></i>
                      </div>
                      <div>
                        <span class="color-danger font-size-12">{{$t("未分配")}}</span>
                      </div>
                    </div>

                    <div class="layout-item font-size-12 color-danger margin-left-10">
                      <div>
                        <span>{{$t("未分配")}}</span>
                        <span>{{Object.keys(dormData).length  > 0 ? dormData[0].not_people_num + dormData[1].not_people_num : 0}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span>{{$t("男生")}}</span>
                        <span>{{Object.keys(dormData).length  > 0 ? dormData[0].not_people_num : 0}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span>{{$t("女生")}}</span>
                        <span>{{Object.keys(dormData).length  > 0 ? dormData[1].not_people_num : 0}}</span>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-card>
            <div class="text-center toggle-show-icon" @click="toggleTopShow = !toggleTopShow">
              <div class="font-size-12 toggle-show-icon-block">
                <i class="fa fa-angle-double-up"></i>
                <label>{{$t("收起")}}</label>
              </div>
            </div>
          </div>

          <div class="layout-right-tab margin-top-10">
            <el-row class="layout-inline">
              <el-col :span="12">
                <el-button size="small" type="primary"  icon="el-icon-upload" @click="addInfo()">{{$t("导入")}}</el-button>
                <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo()">{{$t("导出")}}</el-button>

                <my-select :placeholder="$t('状态')" :sel-value="searchStatusType" class="layout-item" :clearable="true" size="small" width-style="120" :options="searchStatusTypeInfo()" @change="handleChange($event, 1)"></my-select>
                <my-select v-if="showType == 2" :placeholder="$t('类型')" :sel-value="searchDormType" class="layout-item" :clearable="true" size="small" width-style="120" :options="dormroomType" @change="handleChange($event, 2)"></my-select>
              </el-col>
              <el-col :span="12" class="text-right">
                <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('姓名/学号')" @click="search"></my-input-button>
              </el-col>
            </el-row>
          </div>

          <div class="bg-f5f5f5 border-bottom-1 padding-lr-5 padding-tb-5" :style="toggleTopShow == false ? divHeight9 : divHeight6">
            <div v-for="(item, index) in tableData" :key="index">
              <div class="dorm-block">
                <span class="dorm-blick-tag"></span>
                <label v-if="showType == 2">
                  <span class="color-success margin-left-5 font-size-14" style="position: relative; top: -12px;">{{item.dormitory_no}}</span>
                  <span class="color-muted margin-left-5 font-size-14" style="position: relative; top: -12px;">
                    <i v-if="item.type == 0" class="fa fa-male"></i>
                    <i v-if="item.type == 1" class="fa fa-famale"></i>
                    <label>{{dormTypeTextInfo(item.type)}}</label>
                    <label class="color-warning">
                      ({{item.has_people_num}}/{{item.people_num}})
                    </label>
                  </span>
                </label>
                <label v-if="showType == 1">
                  <span class="color-success margin-left-5 font-size-14" style="position: relative; top: -12px;">{{item.class_name}}</span>
                </label>

                <i v-if="showType == 2" class="fa fa-scissors color-danger pull-right" style="position: relative; top: 10px; right: 10px" @click="removeBed(item, 'clearDormRoomId')"></i>
              </div>
              <el-row :gutter="16" class="margin-top-10">
                <el-col :span="8" v-for="(itemChild, indexChild) in item.list" :key="indexChild" class="margin-bottom-20">
                  <el-card shadow="hover" :body-style="{padding: '5px 10px',height: '130px'}">
                    <el-row>
                      <el-col :span="9">
                        <div class="color-warning font-size-14">
                          <i class="fa fa-id-card"></i>
                          <span v-if="!itemChild.student_id && showType == 2">
                            {{$t("空床位")}}
                          </span>
                          <el-tooltip v-if="itemChild.student_id" class="item" effect="dark" :content="itemChild.student_id" placement="top-start">
                            <span class="moon-content-text-ellipsis-class dorm-card-title">{{itemChild.student_id}}</span>
                          </el-tooltip>
                        </div>
                        <div class="color-warning font-size-14 margin-top-10">
                          <el-avatar v-if="!itemChild.photo_simple" shape="square" :size="50">
                            <i class="el-icon-user-solid" style="font-size: 20px"></i>
                          </el-avatar>
                          <img v-if="itemChild.photo_simple" src="" style="height:50px;width: 50px"/>
                        </div>
                        <div class="margin-top-5">
                          <el-tooltip class="item" effect="dark" :content="searchStatusTypeSet(itemChild.status)" placement="top-start">
                            <span class="color-success font-size-14 moon-content-text-ellipsis-class dorm-card-status margin-left-10">{{searchStatusTypeSet(itemChild.status)}}</span>
                          </el-tooltip>
                        </div>
                      </el-col>
                      <el-col :span="15" class="text-right">
                        <div class="color-warning font-size-14">
                          <span v-if="showType == 2" class="moon-content-text-ellipsis-class dorm-card-title">
                            <label v-if="itemChild.student_id != null" @click="removeBed(itemChild, 'clearBedId')">
                              <i class="fa fa-trash color-danger"></i>
                            </label>

                            <label v-if="itemChild.enable == false" @click="removeBed(itemChild, 'enableBedId')">
                              <i class="fa fa-check-square-o color-success"></i>
                            </label>

                            <label v-if="itemChild.enable == true && itemChild.student_id == null" @click="removeBed(itemChild, 'disableBedId')">
                              <i class="fa fa-ban color-danger"></i>
                            </label>

                            {{itemChild.bed_no}}号床
                          </span>

                          <span v-if="showType == 1">
                            <label v-if="itemChild.bed_no != null" @click="removeBed(itemChild, 'clearBedId')">
                              <i class="fa fa-trash color-danger"></i>
                            </label>
                            <label v-if="itemChild.bed_no != null">{{itemChild.bed_no}}号床</label>
                            <!--<el-popover
                              v-else
                              width="700"
                              trigger="click"
                              @show="handleShowDorm(itemChild.user_id, itemChild)"
                              @hide="handleHideDorm(itemChild.user_id, itemChild)">
                              <div>
                                <dorm-build-tree-and-list :ref="`popverDormRef${itemChild.user_id}`" :sel-arr="dormIds" set-type="select" @distribute="handleSelBuild($event, itemChild.user_id)"></dorm-build-tree-and-list>
                              </div>
                              <a slot="reference" href="javascript:;" class="color-success">
                                <i class="fa fa-bed"></i>
                                {{$t("分配床位")}}
                              </a>
                            </el-popover>-->
                            <a v-if="!itemChild.bed_no || itemChild.bed_no == null" slot="reference" href="javascript:;" class="color-success bed-dorm-color" @click="setDormList(itemChild)">
                              <i class="fa fa-bed" style="font-size: 14px"></i>
                              {{$t("分配床位")}}
                            </a>
                          </span>
                        </div>
                        <div v-if="!itemChild.student_id" class="margin-top-10">
                          <!--<el-popover
                            width="700"
                            trigger="click"
                            @show="handleShowStudent(itemChild.id, itemChild)">
                            <div>
                              <student-tree-and-list :ref="`popverStudentRef${itemChild.id}`" :sel-arr="studentIds" set-type="select" @distribute="handleSelUser($event, itemChild.id)"></student-tree-and-list>
                            </div>
                            <div slot="reference">
                              <div>
                                <i class="fa fa-bed color-warning margin-right-5" style="font-size: 30px;"></i>
                              </div>
                              <div class="font-size-12">
                                <span class="color-muted">{{$t("分配学生")}}</span>
                              </div>
                            </div>
                          </el-popover>-->
                          <div @click="setStudentList(itemChild)">
                            <div>
                              <i class="fa fa-bed bed-color margin-right-5" style="font-size: 40px;"></i>
                            </div>
                            <div class="font-size-14">
                              <span class="color-muted">{{$t("分配学生")}}</span>
                            </div>
                          </div>
                        </div>
                        <div v-if="itemChild.student_id">
                          <div class="font-size-14 margin-top-5">
                            <el-tooltip class="item" effect="dark" :content="itemChild.real_name" placement="left">
                              <span class="moon-content-text-ellipsis-class dorm-card-name">{{itemChild.real_name}}</span>
                            </el-tooltip>
                          </div>
                          <div class="font-size-14 margin-top-5">
                            <span class="color-muted" v-if="showType == 2">{{itemChild.build_name}}</span>
                            <span class="color-muted" v-if="showType == 1">
                              <my-sex tag="text" :sex="itemChild.sex"></my-sex>
                            </span>
                          </div>
                          <div class="font-size-14 margin-top-5">
                            <span class="color-muted">{{itemChild.major_name}}</span>
                          </div>
                          <div class="font-size-14 margin-top-5">
                            <span class="color-muted">{{itemChild.class_name}}</span>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
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

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerStudentVisible" :loading="drawerLoading" size="800px" :title="$t('分配学生')" @right-close="cancelDrawDialog">
      <div slot="content">
        <div class="layout-inline">
          <my-cascader class="layout-item" ref="SelectorDept" size="small" width-style="160" :clearable="true" :sel-value="searchCommDeptData" type="1" sub-type="4" @change="handleCascaderChange($event)"></my-cascader>
          <my-input-button ref="searchInput" class="layout-item" size="small" :clearable="true" type="success" plain @click="handleSearch"></my-input-button>
        </div>
        <el-table ref="studentTableRef"
                  header-cell-class-name="custom-table-cell-bg"
                  :data="tableStudentData"
                  size="mini"
                  class="margin-top-10"
                  v-loading="tableStudentLoading">
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <a href="javascript:;" class="color-grand" v-if="scope.row.bed_no == null" @click="selectBedno(scope.row)">{{$t("分配")}}</a>
              <label class="color-warning" v-else>{{$t("已分配")}}</label>
            </template>
          </el-table-column>
          <el-table-column property="real_name" align="center" label="姓名">

          </el-table-column>
          <el-table-column property="student_id" align="center" label="学号">

          </el-table-column>
          <el-table-column property="" align="center" label="班级">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.class_name ? scope.row.class_name : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.class_name ? scope.row.class_name : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <my-pagination :total="studentTotal" :current-page="studentPage" :page-size="studentNum" @currentPage="currentStudentPage" @sizeChange="sizeStudentChange" @jumpChange="jumpStudentPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerDormVisible" :loading="drawerLoading" size="800px" :title="$t('分配床位')" @right-close="cancelDrawDialog">
      <div slot="content">
        <div class="layout-inline"  v-if="!commDrawer">
          <my-cascader class="layout-item" :clearable="true" ref="SelectorDormDept" size="small" width-style="160" :sel-value="searchCommDeptBedData" type="2" sub-type="2" @change="handleCascaderBedChange($event)"></my-cascader>
        </div>
        <el-table class="margin-top-10"  v-if="!commDrawer" ref="dormTableRef"
                  :data="tableDormData"
                  size="mini"
                  v-loading="tableDormLoading">
          <el-table-column
            label="操作"
            align="center">
            <template slot-scope="scope">
              <a href="javascript:;" class="color-grand" @click="selectDorm(scope.row)">{{$t("分配")}}</a>
            </template>
          </el-table-column>
          <el-table-column property="dormitory_no" align="center" label="宿舍编号">

          </el-table-column>
          <el-table-column align="center" label="宿舍类型">
            <template slot-scope="scope">
              <label>{{dormTypeTextInfo(scope.row.type)}}</label>
            </template>
          </el-table-column>
          <el-table-column property="student_id" align="center" label="容纳人数">
            <template slot-scope="scope">
              <label>{{scope.row.has_people_num}}</label>
              /
              <label>{{scope.row.people_num}}</label>
            </template>
          </el-table-column>
        </el-table>

        <div v-if="commDrawer">
          <div class="layout-inline">
            <el-button size="small" type="success" plain @click="returnDormList">
              <i class="fa fa-arrow-left"></i>
              {{$t("返回")}}
            </el-button>
          </div>
          <div class="margin-top-10">
            <el-table ref="commTableRef"
                      :data="tableDormCommDormData"
                      size="mini">
              <el-table-column
                label="床号"
                align="center">
                <template slot-scope="scope">
                  <span>{{scope.row.bed_no}}号床</span>
                </template>
              </el-table-column>
              <el-table-column
                label="状态"
                align="center">
                <template slot-scope="scope">
                  <span v-if="scope.row.student_id != null" class="color-warning">{{$t("已分配")}}</span>
                  <span v-else class="color-success">{{$t("未分配")}}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                align="center">
                <template slot-scope="scope">
                  <a href="javascript:;" v-if="scope.row.student_id == null" class="color-grand" @click="selectDormBedno(scope.row)">{{$t("选择")}}</a>
                  <span v-else>--</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <my-pagination v-if="!commDrawer" :total="commTotal" :current-page="commPage" :page-size="commNum" @currentPage="currentDormPage" @sizeChange="sizeDormChange" @jumpChange="jumpDormPage" class="layout-pagination"></my-pagination>
          <span v-if="commDrawer" class="margin-right-10">{{$t("共")}} {{tableDormCommDormData.length}} {{$t("条")}}</span>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" accept=".xls,.xlsx" :loading="drawerLoading" :hide-footer="true" size="400px" :title="$t('导入信息')" :action="uploadAction" :download-file="uploadFile" :result="uploadResult" :process="uploadProcess" @right-close="cancelDrawDialog" @success="uploadSuccess" @error="uploadError">

    </drawer-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" :content="comfirmMess" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {
    dormTypeText,
    inArray,
    MessageError,
    MessageSuccess,
    MessageWarning,
    studentTeachStatus
  } from "../../../utils/utils";
  import LayoutLr from "../../../components/Layout/LayoutLr";
  import MyElTree from "../../../components/tree/MyElTree";
  import MyPagination from "../../../components/MyPagination";
  import MyInputButton from "../../../components/search/MyInputButton";
  import MySex from "../../../components/MySex";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MySelect from "../../../components/MySelect";
  import MyCascader from "../../../components/utils/select/MyCascader";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyNormalDialog from "../../../components/utils/dialog/MyNormalDialog";
  import DrawerRight from "../../../components/utils/dialog/DrawerRight";
  import MySearchOfDate from "../../../components/search/MySearchOfDate";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import StudentTreeAndList from "../../../components/utils/treeAndList/StudentTreeAndList";
  import DormBuildTreeAndList from "../../../components/utils/treeAndList/DormBuildTreeAndList";
  import {
    clearData, deviceType,
    dormStatus
  } from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,MySearchOfDate,DrawerLayoutRight,StudentTreeAndList,DormBuildTreeAndList},
    data(){
      return {
        commPage: 1,
        commNum: 20,
        commTotal: 0,
        tableDormCommDormData: [],
        commSearchBuild: '',
        commSearchFloor: '',
        studentTotal: 0,
        studentNum: 20,
        studentPage: 1,
        tableStudentData: [],
        tableDormData: [],
        tableStudentLoading: false,
        tableDormLoading: false,
        toggleTopShow: false,
        searchTimeData: {},
        commSearchKey: '',
        commSearchDept: '',
        commSearchCollege: '',
        commSearchMajor: '',
        commSearchGrade: '',
        commSearchClass: '',
        commDrawer: false,
        commSex: '',
        tableData: [],
        tableDetailData: [],
        searchDate: [],
        filtersDeviceType: [],
        filterStatusTypes: [],
        searchCommDeptData: [],
        searchCommDeptBedData: [],
        dormData: {},
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        drawerStudentVisible: false,
        drawerDormVisible: false,
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        searchBuild: '',
        searchFloor: '',
        searchDorm: '',
        searchKey: '',
        searchDeviceType: '',
        searchDept: '',
        searchStatusType: '',
        searchDormType: '',
        subTitle: '',
        searchType: -1,
        searchDetailType: -1,
        showType: 2,
        mainType: "2",
        subType: "3",
        uploadFile: common.teacher_file + "?fileName=" + encodeURIComponent(this.$t("宿舍分配模板.xls")),
        uploadAction: common.dorm_user_class_import,
        searchTopTime: this.$moment(new Date).format("YYYY-MM-DD"),
        uploadProcess: '',
        uploadResult: [],
        loopTimer: null,
        resultList: [],
        studentIds: [],
        dormIds: [],
        comfirmMess: '',
        oprId: '',
        clearType: ''
      }
    },
    created() {
      this.initInfo();
    },
    methods: {
      initInfo(){
        this.init();
        this.initDormInfo();
      },
      init(){
        let url = "";
        let params = {
          page: this.page,
          num: this.num,
          searchKey: this.searchKey,
          status: this.searchStatusType
        };
        if (this.showType == 1){
          params['collegeId'] = this.searchCollege;
          params['majorId'] = this.searchMajor;
          params['grade'] = this.searchGrade;
          params['classId'] = this.searchClass;
          url = common.dorm_user_class_list;
        }else if (this.showType == 2){
          params['buildId'] = this.searchBuild;
          params['floorNum'] = this.searchFloor;
          params['dormId'] = this.searchDorm;
          params['type'] = this.searchDormType;
          url = common.dorm_user_dorm_list;
        }
        params = this.clearDataInfo(params);
        this.tableData = [];
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initDormInfo(){
        this.$axios.post(common.dorm_bed_info).then(res => {
          if (res.data.data){
            this.dormData = res.data.data;
          }
        });
      },
      initStudent(){
        let params = {
          page: this.studentPage,
          num: this.studentNum,
          deleted: 0,
          sex: this.commSex.type == 0 ? 1 : 2,
          collegeId: this.commSearchCollege,
          majorId: this.commSearchMajor,
          grade: this.commSearchGrade,
          clasz: this.commSearchClass,
        };
        this.tableStudentLoading = true;
        params['realName'] = this.commSearchKey['input'];
        params = this.$qs.stringify(params);
        this.$axios.post(common.dorm_user_class_bed_into, params).then(res => {
          if (res.data.data){
            this.tableStudentData = res.data.data.list;
            this.studentTotal= res.data.data.totalCount;
            this.studentNum = res.data.data.num;
            this.studentPage = res.data.data.currentPage;
          }
          this.tableStudentLoading = false;
        });
      },
      initDorm(){
        let params = {
          page: this.commPage,
          num: this.commNum,
          deleted: 0,
          type: this.commSex.sex == 1 ? 0 : 1,
          buildId: this.commSearchBuild,
          floorNum: this.commSearchFloor,
        };
        this.tableDormLoading = true;
        params['realName'] = this.commSearchKey['input'];
        this.$axios.get(common.dormroom_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableDormData = res.data.data.list;
            this.commTotal= res.data.data.totalCount;
            this.commNum = res.data.data.num;
            this.commPage = res.data.data.currentPage;
          }
          this.tableDormLoading = false;
        });
      },
      addInfo(){
        this.drawerVisible = true;
      },
      expandInfo(){
        let url = common.dorm_user_class_export;
        let params = {
          page: 1,
          num: 99999,
          //searchKey: this.searchKey,
          //status: this.searchStatusType
        };
        if (this.showType == 1){
          params['collegeId'] = this.searchCollege;
          params['majorId'] = this.searchMajor;
          params['grade'] = this.searchGrade;
          params['classId'] = this.searchClass;
        }else if (this.showType == 2){
          params['buildId'] = this.searchBuild;
          params['floorNum'] = this.searchFloor;
          params['dormId'] = this.searchDorm;
          params['type'] = this.searchDormType;
        }
        params = this.clearDataInfo(params);
        params = this.$qs.stringify(params);
        window.open(url+"?"+params, "_self");
      },
      nodeClick(data){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        this.searchBuild = "";
        this.searchFloor = "";
        this.searchDorm = "";

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
          }else if (data.unit == 8){
            this.searchBuild = data.buildId;
            this.searchFloor = data.floorNum;
            this.searchDorm = data.id;
          }
        }
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
        this.studentPage = data;
        this.initStudent();
      },
      jumpStudentPage(data){
        this.pageStudent = data;
        this.studentPage();
      },
      sizeStudentChange(event){
        this.studentPage = 1;
        this.studentNum = event;
        this.initStudent();
      },
      currentStudentPage(event){
        this.studentPage = event;
        this.initStudent();
      },
      jumpDormPage(data){
        this.commPage = data;
        this.studentPage();
      },
      sizeDormChange(event){
        this.commPage = 1;
        this.commNum = event;
        this.initDorm();
      },
      currentDormPage(event){
        this.commPage = event;
        this.initDorm();
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      handleChangeTime(data, type){
        switch (type) {
          case 1:
            this.form.borthday = data;
            break;
          case 2:
            this.form.innerTime = data;
            break;
          case 3:
            this.form.workTime = data;
            break;
        }
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      closeDrawerDialog(event){
        console.log(111);
        this.uploadProcess = '';
        this.uploadResult = [];
        clearTimeout(this.loopTimer);
        this.loopTimer = null;
        this.tableStudentData = [];
        this.tableDormData = [];
        this.commDrawer = false;
        if (this.$refs['searchInput']){
          this.$refs.searchInput.inputValue = ""
        }
        this.searchCommDeptData = [];
        this.searchCommDeptBedData = [];
        this.commSearchCollege = "";
        this.commSearchMajor = "";
        this.commSearchGrade = "";
        this.commSearchClass = "";
        this.commSearchBuild = "";
        this.commSearchFloor = "";
        this.commSearchKey = "";
        this.resetCasadeSelector('SelectorDept');
        this.resetCasadeSelector('SelectorDormDept');
        this.drawerVisible = event;
        this.drawerStudentVisible = event;
        this.drawerDormVisible = event;
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      cancelDrawDialog(){
        this.uploadProcess = '';
        this.uploadResult = [];
        this.drawerVisible = false;
        this.drawerStudentVisible = false;
        this.drawerDormVisible = false;
      },
      uploadInfo(){
        this.drawerVisible = true;
      },
      uploadSuccess(res, file){
        if (res.code == 200){
          this.uploadProcess = res.desc;
          this.loopUploadResult(res.data);
        }else {
          this.uploadProcess = this.$t("文件上传成功,正在导入文件...");
          this.resultList = [];
          if (res.data){
            for (let i in res.data){
              this.uploadResult.push(res.data[i]);
            }
          }else {
            this.uploadResult = [res.desc];
          }
        }
      },
      uploadError(res, file){
        this.uploadProcess = res.data.data;
      },
      loopUploadResult(uuid){
        this.getUploadResult(uuid);
      },
      getUploadResult(uuid) {
        let _self = this;
        clearTimeout(this.loopTimer);
        let params = {
          uuid: uuid,
          action: 2
        };
        this.$axios.get(common.upload_loop_result, {params: params}).then(res => {
          let result = "";
          if (res.data.code == 200) {
            let arrResult = [];
            if (res.data.data) {
              for (let i = 0; i < res.data.data.length; i++) {
                //设置结果列表
                if (res.data.data[i].line) {
                  arrResult.push(this.$t("第") + res.data.data[i].line + this.$t("行") + JSON.parse(res.data.data[i].mess).join());
                } else {
                  arrResult.push(JSON.parse(res.data.data[i].mess).join());
                }
                if (res.data.data[i].status == 1) {
                  //this.loopStatus = true;
                  this.uploadResult = arrResult;
                  clearTimeout(this.loopTimer);
                  break;
                } else {
                  this.loopTimer = setTimeout(function () {
                    _self.getUploadResult(uuid)
                  }, 10000);
                }
              }
            } else {
              this.uploadResult = [this.$t("上传停止！")];
              clearTimeout(this.loopTimer);
            }
          }
        });
      },
      dormStatusInfo(val){
        return dormStatus('set', val);
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'deviceType'){
            this.searchDeviceType = value[item][0];
          }
        }
        this.init();
      },
      searchStatusTypeInfo(){
        let arr = [];
        let arrJson = studentTeachStatus('get');
        for (let i in arrJson){
          arr.push({
            label: arrJson[i],
            value: i
          });
        }

        return arr;
      },
      searchStatusTypeSet(val){
        return studentTeachStatus('set', val);
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      changeTree(mainType, subType, type){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        this.searchBuild = "";
        this.searchFloor = "";
        this.mainType = ''+mainType;
        this.subType = ''+subType;
        this.showType = type;
        this.page = 1;
        this.num = 20;
        this.init();
      },
      clearDataInfo(data){
        return clearData(data);
      },
      handleChange(data, type){
        switch (type) {
          case 1:
            this.searchStatusType = data;
            break;
          case 2:
            this.searchDormType = data;
            break;
        }
        this.page = 1;
        this.init();
      },
      dormTypeTextInfo(val){
        return dormTypeText(val);
      },
      handleShowStudent(index, params){
        let data = {
          sex: params.sex,
          bedNo: params.bed_no,
          dormId: params.drom_id,
        };
        this.$refs[`popverStudentRef${index}`][0]._handleOpen(data);
        this.drawerStudentVisible = true;
      },
      handleShowDorm(index, params){
        let type = "";
        if (params.sex == 2){
          type = 1;
        }else if (params.sex == 1){
          type = 0;
        }
        let data = {
          type: type,
          userId: params.user_id,
          majorId: params.class_id
        };
        this.$refs[`popverDormRef${index}`][0]._handleOpen(data);
      },
      handleHideDorm(index, params){
        this.$refs[`popverDormRef${index}`][0]._handleResetChange();
      },
      handleSelUser(data, id){
        if (data != null){
          this.initInfo();
        }
      },
      handleSelBuild(data, id){
        if (data != null){
          this.initInfo();
        }
      },
      removeBed(item, type){
        this.clearType = type;
        if (type == 'clearDormRoomId'){
          this.oprId = item.drom_id;
          this.comfirmMess = this.$t("确认要清空该房间的数据吗？");
        }else if (type == 'clearBedId'){
          this.oprId = item.id ? item.id : item.bed_id;
          this.comfirmMess = this.$t("确认清空该床位吗？");
        }else if (type == 'enableBedId'){
          this.oprId = item.id;
          this.comfirmMess = this.$t("确认启用该床位吗？");
        }else if (type == 'disableBedId'){
          this.oprId = item.id;
          this.comfirmMess = this.$t("确认禁用该床位吗？");
        }
        this.visibleConfim = true;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {};
        if (this.clearType == "clearDormRoomId"){
          params = {
            id: this.oprId,
            locationType: 13
          };
          url = common.dorm_user_class_student_clear;
        }else if (this.clearType == 'clearBedId'){
          params = {
            bedId: this.oprId
          };
          url = common.dorm_user_class_bed_clear;
        }else if (this.clearType == 'enableBedId'){
          params = {
            bedId: this.oprId,
            enable: true
          };
          url = common.dorm_user_class_bed_enable;
        }else if (this.clearType == 'disableBedId'){
          params = {
            bedId: this.oprId,
            enable: false
          };
          url = common.dorm_user_class_bed_enable;
        }
        params = this.$qs.stringify(params);
        this.$axios.post(url, params, {loading: false}).then(res => {
          if (res.data.code == 200){
            this.initInfo();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.visibleConfim = false;
          this.dialogLoading = false;
        });
      },
      closeDialog(event){

      },
      setDormList(row){
        this.commPage = 1;
        this.commNum = 20;
        this.commSex = row;
        setTimeout(() => {
          this.initDorm();
        }, 800);
        this.drawerDormVisible = true;
      },
      setStudentList(row){
        this.studentPage = 1;
        this.studentNum = 20;
        this.commSex = row;
        setTimeout(() => {
          this.initStudent();
        }, 800);
        this.drawerStudentVisible = true;
      },
      selectBedno(row){
        let params = {
          bedNo: this.commSex.bed_no,
          dromId: this.commSex.drom_id,
          studentId: row.user_id,
          majorClassId: row.clasz
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.dorm_user_class_bed_distribute, params).then(res => {
          if (res.data.data){
            this.initDorm();
            this.init();
            this.drawerStudentVisible = false;
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      },
      handleSearch(data){
        this.commSearchKey = data;
        this.studentPage = 1;
        this.initStudent();
      },
      handleCascaderChange(data){
        this.commSearchCollege = "";
        this.commSearchMajor = "";
        this.commSearchGrade = "";
        this.commSearchClass = "";
        if (data.length == 1){
          this.commSearchCollege = data[0];
        }else if (data.length == 2){
          this.commSearchCollege = data[0];
          this.commSearchMajor = data[1];
        }else if (data.length == 3){
          this.commSearchCollege = data[0];
          this.commSearchMajor = data[1];
          this.commSearchGrade = data[2];
        }else if (data.length == 4){
          this.commSearchCollege = data[0];
          this.commSearchMajor = data[1];
          this.commSearchGrade = data[2];
          this.commSearchClass = data[3];
        }
        this.studentPage = 1;
        this.initStudent();
      },
      selectDormBedno(row){
        let params = {
          bedNo: row.bed_no,
          dromId: row.drom_id,
          studentId: this.commSex.user_id,
          majorClassId: this.commSex.major_id
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.dorm_user_class_bed_distribute, params, {loading: false}).then(res => {
          if (res.data.data){
            this.initDorm();
            this.init();
            this.drawerDormVisible = false;
            this.commDrawer = false;
            MessageSuccess(res.data.desc);
            this.$emit("distribute", res.data.data);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      },
      selectDorm(row){
        let params = {
          page: 1,
          num: 9999,
          dormitoryId: row.id
        };
        this.$axios.get(common.dorm_user_class_bed_list, {params: params}).then(res=>{
          if (res.data.data){
            this.tableDormCommDormData = res.data.data;
          }
        });
        this.commDrawer = true;
      },
      returnDormList(){
        this.commDrawer = false;
      },
      handleCascaderBedChange(data){
        //this.commSearchDept = data[data.length-1];
        this.commSearchBuild = "";
        this.commSearchFloor = "";
        if (data.length == 1){
          this.commSearchBuild = data[0];
        }else if (data.length == 2){
          this.commSearchBuild = data[0];
          this.commSearchFloor = data[1];
        }
        this.commPage = 1;
        this.initDorm();
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .dorm-block{
    background: #f3f3f3;
    height: 35px;
    line-height: 35px;
    position: relative;
  }
  .dorm-blick-tag{
    width: 5px;
    height: 35px;
    background: #E6A23C;
    display: inline-block;
  }
  .dorm-card-title{
    max-width: 130px;
    display: inline-block;
    position: relative;
    top:2px;
  }
  .dorm-card-name{
    max-width: 100px;
    display: inline-block;
    position: relative;
    top:2px;
  }
  .dorm-card-status{
    max-width: 30px;
    display: inline-block;
    position: relative;
    top:2px;
  }
  .bed-color{
    color: #E6A23C;
  }
  .bed-color:hover{
    color: #409EFF;
  }
  .bed-dorm-color:hover{
    color: #409EFF;
  }
</style>
