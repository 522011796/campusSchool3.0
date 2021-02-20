<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">设备位置</span>
        </div>
        <my-el-tree :type="mainType" :sub-type="mainSubType" @node-click="nodeClick">
          <div slot="top">
            <el-button size="small" :type="showType == 1 ? 'primary' : 'default'" @click="selBuild(1)">{{$t("教学楼")}}</el-button>
            <el-button size="small" :type="showType == 2 ? 'primary' : 'default'" @click="selBuild(2)">{{$t("宿舍楼")}}</el-button>
          </div>
        </my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="12">
              <el-button :disabled="buildMutiList.length == 0" size="small" type="primary"  icon="el-icon-plus" @click="bindInfo('muti')">{{$t("批量绑定")}}</el-button>
            </el-col>
            <el-col :span="12" class="text-right">
              <my-input-button size="small" :clearable="true" type="success" plain @click="search"></my-input-button>
            </el-col>
          </el-row>
        </div>

        <div class="margin-top-10">
          <el-table
            ref="tableMainRef"
            v-if="showType == 1"
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :max-height="tableHeight2.height"
            style="width: 100%"
            :row-key="getRowKeys"
            @selection-change="handleSelectionChange">
            <el-table-column
              :reserve-selection="true"
              type="selection"
              align="center"
              width="55">
            </el-table-column>
            <el-table-column
              :label="$t('房间编号')"
              align="center">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label>{{scope.row.classroom_no}}</label>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label>{{scope.row.classroom_no}}</label>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              prop="floor_num"
              :label="$t('楼层')"
              align="center">
            </el-table-column>
            <el-table-column
              prop="people_num"
              :label="$t('容纳人数')"
              align="center">
            </el-table-column>
            <el-table-column
              prop="classroom_no"
              :label="$t('教室用途')"
              align="center">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{mediaClassInfo(scope.row.is_media)}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{mediaClassInfo(scope.row.is_media)}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              prop="classroom_no"
              :label="$t('绑定状态')"
              align="center">
              <template slot-scope="scope">
                <span v-if="scope.row.bind > 0" class="color-success">{{$t("已绑定")}}</span>
                <span v-if="scope.row.bind == 0" class="color-warning">{{$t("未绑定")}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="classroom_no"
              :label="$t('设备名称')"
              align="center">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                      <span v-if="scope.row.deviceList && scope.row.deviceList.length > 0">
                        <label v-if="scope.row.deviceList[0].name">{{scope.row.deviceList[0].name}}</label>
                        <label v-else>--</label>
                      </span>
                    <span v-else>--</span>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <span v-if="scope.row.deviceList && scope.row.deviceList.length > 0">
                        <label v-if="scope.row.deviceList[0].name">{{scope.row.deviceList[0].name}}</label>
                        <label v-else>--</label>
                      </span>
                    <span v-else>--</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              prop="classroom_no"
              :label="$t('设备IP')"
              align="center">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                      <span v-if="scope.row.deviceList && scope.row.deviceList.length > 0">
                        <label v-if="scope.row.deviceList[0].ip">{{scope.row.deviceList[0].ip}}</label>
                        <label v-else>--</label>
                      </span>
                    <span v-else>--</span>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <span v-if="scope.row.deviceList && scope.row.deviceList.length > 0">
                        <label v-if="scope.row.deviceList[0].ip">{{scope.row.deviceList[0].ip}}</label>
                        <label v-else>--</label>
                      </span>
                    <span v-else>--</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              prop="classroom_no"
              :label="$t('设备类型')"
              align="center">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <span v-if="scope.row.deviceList && scope.row.deviceList.length > 0">{{deviceTypeInfo(scope.row.deviceList[0].type)}}</span>
                    <span v-else>--</span>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span v-if="scope.row.deviceList && scope.row.deviceList.length > 0">{{deviceTypeInfo(scope.row.deviceList[0].type)}}</span>
                    <span v-else>--</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              prop="classroom_no"
              :label="$t('在线状态')"
              align="center">

              <template slot-scope="scope">
                <my-device-online-status v-if="scope.row.deviceList && scope.row.deviceList.length > 0" :type="scope.row.deviceList[0].online"></my-device-online-status>
                <span v-else>--</span>
                <el-popover
                  placement="right"
                  width="400"
                  trigger="hover">
                  <el-table
                    :data= "scope.row.deviceList"
                    header-cell-class-name="custom-table-cell-bg"
                    size="mini"
                    style="width: 100%">
                    <el-table-column
                      :label="$t('名称')"
                      align="center">

                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center">
                            <label>{{scope.row.name ? scope.row.name : '--'}}</label>
                          </div>
                          <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                            <label>{{scope.row.name ? scope.row.name : '--'}}</label>
                          </div>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column
                      :label="$t('IP')"
                      align="center">

                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center">
                            <label>{{scope.row.ip ? scope.row.ip : '--'}}</label>
                          </div>
                          <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                            <label>{{scope.row.ip ? scope.row.ip : '--'}}</label>
                          </div>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column
                      :label="$t('SN')"
                      align="center">

                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center">
                            <label>{{scope.row.sn ? scope.row.sn : '--'}}</label>
                          </div>
                          <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                            <label>{{scope.row.sn ? scope.row.sn : '--'}}</label>
                          </div>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column
                      :label="$t('在线状态')"
                      align="center">

                      <template slot-scope="scope">
                        <my-device-online-status :type="scope.row.online"></my-device-online-status>
                      </template>
                    </el-table-column>
                    <el-table-column
                      :label="$t('操作')"
                      align="center">

                      <template slot-scope="scopeItem">
                        <i class="fa fa-trash color-danger" @click="deleteDeviceInfo(scope.row, scopeItem.row, scopeItem.$index)"></i>
                      </template>
                    </el-table-column>
                  </el-table>
                  <i slot="reference" v-show="scope.row.deviceList && scope.row.deviceList.length > 0" class="fa fa-ellipsis-h color-warning"></i>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              prop="classroom_no"
              :label="$t('操作')"
              align="center">
              <template slot-scope="scope">
                <i class="fa fa-cog color-grand" @click="bindInfo('only', scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>

          <el-table
            ref="tableMainDormRef"
            v-if="showType == 2"
            :data="tableDormData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :max-height="tableHeight2.height"
            style="width: 100%"
            :row-key="getRowDormKeys"
            @selection-change="handleSelectionChange">
            <el-table-column
              :reserve-selection="true"
              type="selection"
              align="center"
              width="55">
            </el-table-column>
            <el-table-column
              :label="$t('宿舍楼')"
              align="center">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label>{{scope.row.build_name}}</label>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label>{{scope.row.build_name}}</label>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              prop="floor_num"
              :label="$t('楼层')"
              align="center">
            </el-table-column>
            <el-table-column
              prop="room_count"
              :label="$t('宿舍数量')"
              align="center">
            </el-table-column>
            <el-table-column
              prop="classroom_no"
              :label="$t('绑定状态')"
              align="center">
              <template slot-scope="scope">
                <span v-if="scope.row.bind > 0" class="color-success">{{$t("已绑定")}}</span>
                <span v-if="scope.row.bind == 0" class="color-warning">{{$t("未绑定")}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="classroom_no"
              :label="$t('设备名称')"
              align="center">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                      <span v-if="scope.row.deviceList && scope.row.deviceList.length > 0">
                        <label v-if="scope.row.deviceList[0].name">{{scope.row.deviceList[0].name}}</label>
                        <label v-else>--</label>
                      </span>
                    <span v-else>--</span>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <span v-if="scope.row.deviceList && scope.row.deviceList.length > 0">
                        <label v-if="scope.row.deviceList[0].name">{{scope.row.deviceList[0].name}}</label>
                        <label v-else>--</label>
                      </span>
                    <span v-else>--</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              prop="classroom_no"
              :label="$t('设备IP')"
              align="center">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                      <span v-if="scope.row.deviceList && scope.row.deviceList.length > 0">
                        <label v-if="scope.row.deviceList[0].ip">{{scope.row.deviceList[0].ip}}</label>
                        <label v-else>--</label>
                      </span>
                    <span v-else>--</span>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <span v-if="scope.row.deviceList && scope.row.deviceList.length > 0">
                        <label v-if="scope.row.deviceList[0].ip">{{scope.row.deviceList[0].ip}}</label>
                        <label v-else>--</label>
                      </span>
                    <span v-else>--</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              prop="classroom_no"
              :label="$t('设备类型')"
              align="center">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <span v-if="scope.row.deviceList && scope.row.deviceList.length > 0">{{deviceTypeInfo(scope.row.deviceList[0].type)}}</span>
                    <span v-else>--</span>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span v-if="scope.row.deviceList && scope.row.deviceList.length > 0">{{deviceTypeInfo(scope.row.deviceList[0].type)}}</span>
                    <span v-else>--</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              prop="classroom_no"
              :label="$t('在线状态')"
              align="center">

              <template slot-scope="scope">
                <my-device-online-status v-if="scope.row.deviceList && scope.row.deviceList.length > 0" :type="scope.row.deviceList[0].online"></my-device-online-status>
                <span v-else>--</span>
                <el-popover
                  placement="right"
                  width="400"
                  trigger="hover">
                  <el-table
                    :data= "scope.row.deviceList"
                    header-cell-class-name="custom-table-cell-bg"
                    size="mini"
                    style="width: 100%">
                    <el-table-column
                      :label="$t('名称')"
                      align="center">

                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center">
                            <label>{{scope.row.name ? scope.row.name : '--'}}</label>
                          </div>
                          <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                            <label>{{scope.row.name ? scope.row.name : '--'}}</label>
                          </div>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column
                      :label="$t('IP')"
                      align="center">

                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center">
                            <label>{{scope.row.ip ? scope.row.ip : '--'}}</label>
                          </div>
                          <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                            <label>{{scope.row.ip ? scope.row.ip : '--'}}</label>
                          </div>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column
                      :label="$t('SN')"
                      align="center">

                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center">
                            <label>{{scope.row.sn ? scope.row.sn : '--'}}</label>
                          </div>
                          <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                            <label>{{scope.row.sn ? scope.row.sn : '--'}}</label>
                          </div>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column
                      :label="$t('在线状态')"
                      align="center">

                      <template slot-scope="scope">
                        <my-device-online-status :type="scope.row.online"></my-device-online-status>
                      </template>
                    </el-table-column>
                    <el-table-column
                      :label="$t('操作')"
                      align="center">

                      <template slot-scope="scopeItem">
                        <i class="fa fa-trash color-danger" @click="deleteDeviceInfo(scope.row, scopeItem.row, scopeItem.$index)"></i>
                      </template>
                    </el-table-column>
                  </el-table>
                  <i slot="reference" v-show="scope.row.deviceList && scope.row.deviceList.length > 0" class="fa fa-ellipsis-h color-warning"></i>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              prop="classroom_no"
              :label="$t('操作')"
              align="center">
              <template slot-scope="scope">
                <i class="fa fa-cog color-grand" @click="bindInfo('only', scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <dialog-normal :visible="modalVisible" :title="$t('绑定设备')" @close="closeDialog" @right-close="cancelDialog">
      <div>
        <div class="text-right layout-inline">
          <my-select class="layout-item" width-style="150" size="small" :sel-value="searchDeviceType" :options="getDeviceTypeInfo()" @change="handleChange"></my-select>
          <my-input-button class="layout-item" size="small" :clearable="true" type="success" plain @click="searchDevice"></my-input-button>
        </div>
        <div class="margin-top-10">
          <el-table
            ref="tableRef"
            :data="tableDeviceData"
            header-cell-class-name="custom-table-cell-bg"
            size="mini"
            :row-key="getDeviceRowKeys"
            @selection-change="handleSelectionDeviceChange"
            style="width: 100%">
            <el-table-column
              :reserve-selection="true"
              type="selection"
              align="center"
              width="55">
            </el-table-column>
            <el-table-column
              :label="$t('名称')"
              align="center">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label>{{scope.row.name ? scope.row.name : '--'}}</label>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label>{{scope.row.name ? scope.row.name : '--'}}</label>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('IP')"
              align="center">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label>{{scope.row.ip ? scope.row.ip : '--'}}</label>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label>{{scope.row.ip ? scope.row.ip : '--'}}</label>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('SN')"
              align="center">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label>{{scope.row.sn ? scope.row.sn : '--'}}</label>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label>{{scope.row.sn ? scope.row.sn : '--'}}</label>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('在线状态')"
              align="center">

              <template slot-scope="scope">
                <my-device-online-status :type="scope.row.online"></my-device-online-status>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button :disabled="deviceList.length == 0" size="small" type="primary" @click="dialogLoading == false ? okDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>
  </div>
</template>

<script>
  import LayoutLr from "../../components/Layout/LayoutLr";
  import MyElTree from "../../components/tree/MyElTree";
  import MyInputButton from "../../components/search/MyInputButton";
  import MyPagination from "../../components/MyPagination";
  import DialogNormal from "../../components/utils/dialog/DialogNormal";
  import MyNormalDialog from "../../components/utils/dialog/MyNormalDialog";
  import DrawerRight from "../../components/utils/dialog/DrawerRight";
  import MySelect from "../../components/MySelect";
  import MyDeviceOnlineStatus from "../../components/utils/status/MyDeviceOnlineStatus";
  import mixins from "../../utils/mixins";
  import {common} from "../../utils/api/url";
  import {deviceType, mediaClassText, MessageError, MessageSuccess, MessageWarning} from "../../utils/utils";
  import classroomValidater from "../../utils/validater/classroomValidater";
  export default {
    mixins: [mixins, classroomValidater],
    components: {MyElTree,MyInputButton,MyPagination,LayoutLr,DialogNormal,MyNormalDialog,DrawerRight,MySelect,MyDeviceOnlineStatus},
    data(){
      return {
        mainType: "3",
        mainSubType: "2",
        tableData: [],
        tableDormData: [],
        tableDeviceData: [],
        modalVisible: false,
        drawerVisible: false,
        visibleConfim: false,
        dialogLoading: false,
        subDetail: '',
        searchBuildId: '',
        searchFloorNum: '',
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        showType: 1,
        searchOnline: '',
        searchKey: '',
        searchDeviceType: '3',
        searchDeviceKey: '',
        deviceList: [],
        buildList: [],
        buildMutiList: [],
        setType: ''
      }
    },
    created() {
      this.init();
    },
    methods: {
      init(){
        let url = "";
        let params = {
          page: this.page,
          num: this.num,
          buildId: this.searchBuildId,
          floorNum: this.searchFloorNum,
          online: this.searchOnline
        };
        if (this.showType == 1){
          params['searchKey'] = this.searchKey;
          url = common.device_class_location_page;
        }else if (this.showType == 2){
          params['keyWord'] = this.searchKey;
          url = common.device_dorm_location_page;
        }
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            if (this.showType == 1){
              this.tableData = res.data.data.list;
            }else if(this.showType == 2){
              this.tableDormData = res.data.data.list;
            }
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initDevice(){
        let url = "";
        let params = {
          page: 1,
          num: 9999,
          deviceType: this.searchDeviceType,
          searchKey: this.searchDeviceKey
        };
        if (this.showType == 1){
          params['locationType'] = 1;
        }else if (this.showType == 2){
          params['locationType'] = 11;
        }
        this.$axios.get(common.device_unbind_list, {params: params}).then(res => {
          if (res.data.data){
            this.tableDeviceData = res.data.data;
          }
        });
      },
      nodeClick(data){
        this.searchBuildId = "";
        this.searchFloorNum = "";
        if (data.unit == 6){
          this.searchBuildId = data.id;
          this.searchFloorNum = data.floorNum;
        }else if (data.unit == 7){
          this.searchBuildId = data.buildId;
          this.searchFloorNum = data.floorNum;
        }
        this.page = 1;
        this.init();
      },
      bindInfo(type, row){
        this.setType = type;
        if (row){
          this.buildList = [{buildId: row.build_id, floorNum: row.floor_num, roomId: row.id}];
        }
        this.initDevice();
        this.modalVisible = true;
      },
      deleteDeviceInfo(areaRow, row, index){
        let url = "";
        let params = {};
        if (this.showType == 1){
          url = common.device_bind_remove;
          params = {
            sns: row.sn,
            roomId: areaRow.id
          }
        }else if(this.showType == 2){
          url = common.device_bind_dorm_remove;
          params = {
            sn: row.sn,
            buildId: areaRow.build_id,
            floorNum: areaRow.floor_num,
          }
        }
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            areaRow.deviceList.splice(index, 1);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      search(data){
        this.page = 1;
        this.searchKey = data.input;
        this.init();
      },
      searchDevice(data){
        this.page = 1;
        this.searchDeviceKey = data.input;
        this.initDevice();
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
      mediaClassInfo(val){
        return mediaClassText(val);
      },
      deviceTypeInfo(val){
        return deviceType('set', val);
      },
      getDeviceTypeInfo(){
        let obj =  deviceType('get');
        let arr = [];
        for (let i in obj){
          if (i != 1 && i != 2){
            arr.push({
              label: obj[i],
              value: i
            });
          }
        }
        return arr;
      },
      handleChange(data){
        this.searchDeviceType = data;
        this.initDevice();
      },
      closeDialog(event){
        this.subTitle = "";
        this.deviceList = [];
        this.buildList = [];
        this.searchDeviceType = "3";
        if (this.$refs.tableRef){
          this.$refs.tableRef.clearSelection();
        }
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      okDialog(event){
        let url = "";
        let arr = [];
        let roomIdArr = [];
        this.dialogLoading = true;
        for (let i = 0; i < this.deviceList.length; i++){
          arr.push(this.deviceList[i].sn);
        }
        let params = {};
        if (this.showType == 1){
          if (this.setType == 'muti'){
            for (let i = 0; i < this.buildMutiList.length; i++){
              roomIdArr.push(this.buildMutiList[i].id);
            }
            params = {
              roomId: roomIdArr.join(),
              sns: arr.join()
            }
          }else if(this.setType == 'only'){
            params = {
              roomId: this.buildList[0].roomId,
              sns: arr.join()
            }
          }
          url = common.device_bind_build_set;
        }else if (this.showType == 2){
          for (let i = 0; i < this.buildMutiList.length; i++){
            roomIdArr.push({
              floorNum: this.buildMutiList[i].floor_num,
              buildId: this.buildMutiList[i].build_id
            });
          }
          if (this.setType == 'muti'){
            params = {
              buildFloor: roomIdArr,
              snList: arr
            }
          }else if(this.setType == 'only'){
            params = {
              buildFloor: this.buildList,
              snList: arr
            }
          }
          url = common.device_bind_dorm_set;
        }
        if (this.showType == 1){
          params = this.$qs.stringify(params);
        }else if(this.showType == 2){
          params = JSON.stringify(params);
        }
        this.$axios.post(url , params, this.showType == 2 ? {dataType: 'stringfy'} : null).then(res => {
          if (res.data.code == 200){
            this.modalVisible = false;
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.dialogLoading = false;
        });
      },
      getDeviceRowKeys(row) {
        return row.sn
      },
      handleSelectionDeviceChange(data){
        this.deviceList = data;
      },
      getRowKeys(row) {
        return row.id + row.floor_num;
      },
      getRowDormKeys(row){
        return row.build_id + row.floor_num;
      },
      handleSelectionChange(data){
        this.buildMutiList = data;
      },
      selBuild(type){
        this.showType = type;
        if (type == 1){
          this.mainType = "3";
          this.mainSubType = "2";
        }else if (type == 2){
          this.mainType = "2";
          this.mainSubType = "1";
        }
        if (this.$refs.tableMainRef){
          this.$refs.tableMainRef.clearSelection();
        }
        if (this.$refs.tableMainDormRef){
          this.$refs.tableMainDormRef.clearSelection();
        }
        this.buildMutiList = [];
        this.init();
      }
    }
  }
</script>

<style scoped>
.container {

}
</style>
