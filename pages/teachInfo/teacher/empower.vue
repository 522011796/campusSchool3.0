<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">教工信息</span>
        </div>
        <my-el-tree type="4" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="16">
              <div class="text-left">
                <tab-group-button size="small" :options='filterAuthOptions' @click="handleChange"></tab-group-button>
                <el-button size="small" type="default" :disabled="deviceList.length <= 0" :loading="mutiUnbindLoading"  icon="el-icon-circle-close" @click="unbindMutiInfo($event)">{{$t("批量重置")}}</el-button>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="text-right">
                <my-input-button size="small" plain width-class="width: 200px" type="success" :clearable="true" @click="search"></my-input-button>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="margin-top-10">
          <el-table
            ref="refMainTable"
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :max-height="tableHeight2.height"
            @filter-change="fliterTable"
            :row-key="getRowKeys"
            @selection-change="handleSelectionChange"
            style="width: 100%">
            <el-table-column
              :reserve-selection="true"
              type="selection"
              align="center"
              width="55">
            </el-table-column>
            <el-table-column
              align="center"
              prop="real_name"
              :label="$t('姓名')">
              <template slot-scope="scope">
                <label class="color-grand" @click="detialRecordInfo(scope.row)">{{scope.row.real_name}}</label>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="college_no"
              :label="$t('部门')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.depart_name ?  scope.row.depart_name : '--'}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{ scope.row.depart_name ?  scope.row.depart_name : '--'}}
                </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="class_no"
              :label="$t('工号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.job_name ?  scope.row.job_name : '--'}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{ scope.row.job_name ?  scope.row.job_name : '--'}}
                </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="class_no"
              :label="$t('在职状态')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{studyTypeInfo(scope.row.work_enjoy, 'set')}}</div>
                  <span slot="reference" class="name-wrapper">
                  {{studyTypeInfo(scope.row.work_enjoy, 'set')}}
                </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="class_no"
              :label="$t('授权状态')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center"><my-auth-options :status="scope.row.ai_sync_status"></my-auth-options></div>
                  <span slot="reference" class="name-wrapper">
                    <my-auth-options :status="scope.row.ai_sync_status"></my-auth-options>
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="class_no"
              :filter-multiple="false"
              column-key="accountStatus"
              :filters="filterUserAccountActiveStatusOptions"
              :label="$t('激活状态')">
              <template slot="header">
                <span>{{$t('激活状态')}}</span>
                <span v-if="filterUserAccountActiveStatusOptionsText != ''" class="font-size-12 color-disabeld moon-content-text-ellipsis-class">{{filterUserAccountActiveStatusOptionsText}}</span>
              </template>
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <span v-if="scope.row.sso_user_id == null" class="color-danger">{{$t("未激活")}}</span>
                    <span v-if="scope.row.sso_user_id != null" class="color-success">{{$t("已激活")}}</span>
                  </div>
                  <span slot="reference" class="name-wrapper">
                    <span v-if="scope.row.sso_user_id == null" class="color-danger">{{$t("未激活")}}</span>
                    <span v-if="scope.row.sso_user_id != null" class="color-success">{{$t("已激活")}}</span>
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="class_no"
              :label="$t('已授权/总数')">
              <template slot-scope="scope">
                <el-tooltip class="item" effect="dark" :content="$t('点击可查看详细设备授权信息')" placement="top">
                  <div @click="detialDeviceInfo(scope.row)" style="cursor: default">
                    <span class="color-success">
                      <label v-if="scope.row.ai_sync_success">{{scope.row.ai_sync_success}}</label>
                      <label v-else>0</label>
                    </span>
                    /
                    <span class="color-grand">
                      {{scope.row.ai_sync_all}}
                    </span>
                  </div>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="class_no"
              width="120"
              :label="$t('注册照片')">
              <template slot-scope="scope">
                <my-head-img class="pull-left" v-if="scope.row.photo" :head-img="scope.row.photo"></my-head-img>
                <span v-if="scope.row.face_photos && scope.row.face_photos != '|'">
                  <my-head-img class="pull-left margin-left-5" v-for="(item, index) in scope.row.face_photos.split('|')" :head-img="item" :key="index"></my-head-img>
                </span>
                <div class="moon-clearfix"></div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              fixed="right"
              label="操作"
              width="120">
              <template slot-scope="scope">
                <i class="fa fa-cog margin-right-5 color-success" @click="detailInfo(scope.row)"></i>
                <i class="fa margin-right-5 color-grand" :class="scope.row.loading ? 'fa-spinner fa-spin' : 'fa-retweet'" @click="syncInfo(scope.row)"></i>
                <i v-if="scope.row.sso_user_id && scope.row.sso_user_id != null" class="fa fa-unlock margin-right-5 color-success" @click="unBindInfo(scope.row)"></i>
                <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
          </div>
        </div>

        <!--<div  class="bg-white border-bottom-1 padding-lr-5 padding-tb-5" :style="divHeight">
          <div v-if="tableData.length <= 0">
            <div class="text-center padding-tb-10">
              <span class="color-disabeld">{{$t("暂无数据")}}</span>
            </div>
          </div>
          <el-row :gutter="16">
            <el-col :span="6" v-for="(item, index) in tableData" :key="index" class="margin-bottom-20">
              <el-card :body-style="{padding: '0px 0px', height: '100px'}" style="position: relative">
                <div class="padding-lr-10 padding-tb-10">
                  <div class="color-muted">
                    <el-row class="color-warning">
                      <el-col :span="12">
                        <i class="fa fa-id-card"></i>
                        <span>{{item.job_num}}</span>
                      </el-col>
                      <el-col :span="12">
                        <div class="text-right">
                          &lt;!&ndash;<i class="fa fa-ellipsis-h"></i>&ndash;&gt;
                          <my-auth-options :status="item.ai_sync_status"></my-auth-options>
                        </div>
                      </el-col>
                    </el-row>
                  </div>

                  <div class="color-muted margin-top-10">
                    <el-row>
                      <el-col :span="8">
                        <div>
                          <img v-if="item.photo" :src="item.photo" key="contain" style="width: 40px; height: 40px" />
                          <el-avatar v-if="!item.photo" shape="square" :size="40" icon="el-icon-user-solid"></el-avatar>
                        </div>
                        <div class="color-success font-size-12 text-left">
                          &lt;!&ndash;<span>
                            <label v-if="item.status">{{studentTeachStatusInfo(item.status, 'set')}}</label>
                            <label v-else>&#45;&#45;</label>
                          </span>&ndash;&gt;
                          <span class="color-warning margin-left-10">
                          <label>{{studyTypeInfo(item.work_enjoy, 'set')}}</label>
                        </span>
                        </div>
                      </el-col>
                      <el-col :span="16">
                        <div class="text-right">
                          <div>
                            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                              <div class="text-left">
                                <div>
                                  <span>{{$t("已授权")}}：</span>
                                  <span>
                                  <label v-if="item.ai_sync_success">{{item.ai_sync_success}}</label>
                                  <label v-else>0</label>
                                </span>
                                </div>
                                <div>
                                  <span>{{$t("设备总数")}}：</span>
                                  <span>
                                  {{item.ai_sync_all}}
                                </span>
                                </div>
                              </div>
                              <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class color-warning">
                              <span class="color-success">
                                <label v-if="item.ai_sync_success">{{item.ai_sync_success}}</label>
                                <label v-else>0</label>
                              </span>
                                /
                                <span class="color-grand">
                                {{item.ai_sync_all}}
                              </span>
                              </div>
                            </el-popover>
                          </div>
                          <div class="moon-content-text-ellipsis-class">
                            {{item.real_name}}
                          </div>
                          <div class="moon-content-text-ellipsis-class">
                            {{item.depart_name}}
                          </div>
                          &lt;!&ndash;<div class="moon-content-text-ellipsis-class">
                            {{workTitleInfo(item.title, 'set')}}
                          </div>&ndash;&gt;
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
                <div class="line-height"></div>
                <div>
                  <el-row>
                    <el-col :span="24" class="text-right padding-lr-10">
                      <label class="font-size-12" @click="detailInfo(item)">{{$t("授权")}}</label>
                      <label class="font-size-12 margin-left-5">{{$t("同步")}}</label>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>-->

        <!--<div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>-->
      </div>
    </layout-lr>

    <drawer-layout-right  @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="550px" :title="$t('教师授权管理')" @right-close="cancelDrawDialog">
      <div slot="content" class="bg-white padding-lr-10 padding-tb-10" style="border-radius: 5px">
        <div>
          <div>
            <span class="title-tag"></span>
            <span class="color-warning" style="position: relative; top: -5px;">{{$t("人脸/卡号授权")}}</span>
          </div>
          <div class="margin-top-10">
            <div>
              <el-row>
                <el-col :span="12">
                  <span v-if="form.imgList.length == 0">&nbsp;</span>
                  <div v-else v-for="(item, index) in form.imgList" :key="index" style="height: 90px;position: relative;float: left;margin-right: 2px">
                    <i class="fa fa-window-close-o" style="position: absolute;right: 0px;top:-5px;" @click="deleteImg(index)"></i>
                    <img class="user-header-photo" :src="item" style="height:100%;">
                  </div>
                  <div class="moon-clearfix"></div>
                </el-col>
                <el-col :span="12" class="color-muted">
                  <div class="font-size-12">
                    <span>1、{{$t("请添加1-3张包含正脸的照片，且足够清晰")}}</span>
                  </div>
                  <div class="font-size-12 margin-top-5">
                    <span>2、{{$t("请确保照片为同一人")}}</span>
                  </div>
                  <div class="font-size-12 margin-top-5">
                    <span>3、{{$t("请在拍照按钮计时完成后再进行，拍照过程中请不要关闭该操作页和刷新页面")}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="margin-top-10">
              <el-row>
                <el-col :span="12">
                  <span>{{$t("授权卡号")}}</span>
                  <span>
                    <el-input size="small" v-model="form.cardNo" class="width-150"></el-input>

                    <el-popover
                      v-model="timerVisible"
                      placement="right"
                      width="500"
                      trigger="click"
                      @hide="hideCardSet">
                      <div style="position: relative">
                        <div class="popover-mask" v-if="maskShow">
                          <div class="text-center margin-top-30">
                            <el-progress type="circle" :percentage="loopTimerCount" :format="timerFormat"></el-progress>
                          </div>
                          <div class="text-center color-muted margin-top-10" style="font-weight: bold">
                            <span>{{$t("请将IC卡/身份证放在刷卡区域")}}</span>
                          </div>
                          <div class="text-center color-muted margin-top-10">
                            <span class="color-danger">{{errorCardTips}}</span>
                          </div>
                          <div class="text-center color-muted margin-top-10">
                            <a href="javascript:;" class="color-warning" @click="closeKeyModal">{{$t("手动关闭")}}</a>
                          </div>
                        </div>
                        <el-table height="300" :data="deviceAllData">
                          <el-table-column align="center" label="设备名称">
                            <template slot-scope="scope">
                              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                                <div class="text-center">{{scope.row.name ? scope.row.name : '--'}}</div>
                                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                                  {{scope.row.name ? scope.row.name : '--'}}
                                </div>
                              </el-popover>
                            </template>
                          </el-table-column>
                          <el-table-column align="center" prop="sn" label="序列号">
                            <template slot-scope="scope">
                              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                                <div class="text-center">{{scope.row.sn ? scope.row.sn : '--'}}</div>
                                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                                  {{scope.row.sn ? scope.row.sn : '--'}}
                                </div>
                              </el-popover>
                            </template>
                          </el-table-column>
                          <el-table-column align="center" label="类型">
                            <template slot-scope="scope">
                              <span>{{deviceTypeInfo(scope.row.type)}}</span>
                            </template>
                          </el-table-column>
                          <el-table-column align="center" width="80" label="操作">
                            <template slot-scope="scope">
                              <div>
                                <i class="fa fa-cog color-grand margin-right-5" @click="selKeyDevice(scope.row)"></i>
                                <i v-if="keyDeviceSn == scope.row.sn" class="fa fa-check-circle-o color-success"></i>
                              </div>
                            </template>
                          </el-table-column>
                        </el-table>
                      </div>
                      <a slot="reference" href="javascript:;" class="color-warning font-size-12">
                        <i class="fa fa-cogs color-grand"></i>
                      </a>
                    </el-popover>
                  </span>
                </el-col>
                <el-col :span="12">
                  <div class="text-right layout-inline">
                    <upload-square class="layout-item" :limit="9999" :action="uploadFileUrl" max-size="2" :data="{path: 'studentPhone'}" accept=".png,.jpg,.jpeg" @success="uploadFileSuccess">
                      <el-button size="small" type="primary" icon="el-icon-upload">{{$t("本地上传")}}</el-button>
                    </upload-square>
                    <el-button :disabled="this.photoTimer != null" class="layout-item" size="small" type="warning" icon="el-icon-camera-solid" @click="photoChange">
                      <span v-if="this.photoTimer != null">({{loopTimerCount}})</span>
                      {{$t("拍照")}}
                    </el-button>

                    <el-popover
                      placement="right"
                      width="500"
                      trigger="click">
                      <div>
                        <el-table height="300" :data="deviceData">
                          <el-table-column align="center" label="设备名称">
                            <template slot-scope="scope">
                              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                                <div class="text-center">{{scope.row.name ? scope.row.name : '--'}}</div>
                                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                                  {{scope.row.name ? scope.row.name : '--'}}
                                </div>
                              </el-popover>
                            </template>
                          </el-table-column>
                          <el-table-column align="center" prop="sn" label="序列号">
                            <template slot-scope="scope">
                              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                                <div class="text-center">{{scope.row.sn ? scope.row.sn : '--'}}</div>
                                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                                  {{scope.row.sn ? scope.row.sn : '--'}}
                                </div>
                              </el-popover>
                            </template>
                          </el-table-column>
                          <el-table-column align="center" label="类型">
                            <template slot-scope="scope">
                              <span>{{$t("一体机本地版")}}</span>
                            </template>
                          </el-table-column>
                          <el-table-column align="center" width="80" label="操作">
                            <template slot-scope="scope">
                              <i class="fa fa-cog color-grand margin-right-5" @click="selPhoteDevice(scope.row)"></i>
                              <i v-if="photoDeviceSn == scope.row.sn" class="fa fa-check-circle-o color-success"></i>
                            </template>
                          </el-table-column>
                        </el-table>
                      </div>
                      <a slot="reference" href="javascript:;" class="color-warning font-size-12">{{$t("拍照设备")}}</a>
                    </el-popover>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <span class="color-danger">{{errorTips}}</span>
          <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="small" type="primary" :loading="drawerLoading" @click="okDrawDialog">{{$t("设置")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerDeviceVisible" :loading="drawerLoading" size="850px" :title="$t('授权设备')" @right-close="cancelDrawDialog">
      <div slot="content">
        <!--<div class="margin-bottom-10">
          <tab-group-button size="small" :options='filterAuthOtherOptions' @click="handleDeviceChange"></tab-group-button>
        </div>-->
        <el-table
          ref="refDeviceTable"
          :data="tableDeviceData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          v-loading="loadingDevice"
          :max-height="tableHeight8.height"
          style="width: 100%"
          @filter-change="fliterTable">
          <el-table-column
            align="center"
            prop="real_name"
            :label="$t('设备名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{ scope.row.name ?  scope.row.name : '--'}}</div>
                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{ scope.row.name ?  scope.row.name : '--'}}
                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="college_no"
            :label="$t('设备类型')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{deviceTypeInfo(scope.row.type)}}</div>
                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{deviceTypeInfo(scope.row.type)}}
                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="college_no"
            :label="$t('IP')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.ip}}</div>
                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.ip}}
                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="college_no"
            :label="$t('SN')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.sn}}</div>
                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.sn}}
                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="college_no"
            :label="$t('授权时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.sync_time ? $moment(scope.row.sync_time).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.sync_time ? $moment(scope.row.sync_time).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="college_no"
            :filter-multiple="false"
            column-key="status"
            :filters="filterAuthOtherOptions"
            width="150"
            :label="$t('授权状态')">
            <template slot="header">
              <span>{{$t('授权状态')}}</span>
              <span v-if="filterAuthOtherOptionsText != ''" class="font-size-12 color-disabeld moon-content-text-ellipsis-class">{{filterAuthOtherOptionsText}}</span>
            </template>
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center"><my-auth-options :status="scope.row.sync_status"></my-auth-options></div>
                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <my-auth-options :status="scope.row.sync_status"></my-auth-options>
                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa margin-right-5 color-grand" :class="scope.row.loading ? 'fa-spinner fa-spin' : 'fa-retweet'" @click="syncDeviceInfo(scope.row)"></i>
              <i class="fa color-danger" :class="scope.row.downloading ? 'fa-spinner fa-spin' : 'fa-cloud-download'" @click="downloadInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <my-pagination :total="totalDevice" :current-page="pageDevice" :page-size="numDevice" @currentPage="currentDevicePage" @sizeChange="sizeDeviceChange" @jumpChange="jumpDevicePage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerRecordVisible" :loading="drawerLoading" size="850px" :title="$t('授权记录')" @right-close="cancelDrawDialog">
      <div slot="content">
        <div class="margin-bottom-10 text-right">
          <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChangeTime" style="position: relative; top: 1px;"></my-date-picker>
          <el-button size="small" type="success" plain @click="handleSearchClick">{{$t("搜索")}}</el-button>
        </div>
        <el-table
          ref="refRecordTable"
          :data="tableRecordData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          v-loading="loadingDevice"
          :max-height="tableHeight8.height"
          style="width: 100%"
          @filter-change="fliterTable">
          <el-table-column
            align="center"
            prop="real_name"
            :label="$t('设备名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{ scope.row.name ?  scope.row.name : '--'}}</div>
                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{ scope.row.name ?  scope.row.name : '--'}}
                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="college_no"
            :filter-multiple="false"
            column-key="deviceType"
            :filters="filtersDeviceType"
            :label="$t('设备类型')">
            <template slot="header">
              <span>{{$t('设备类型')}}</span>
              <span v-if="filtersDeviceTypeText != ''" class="font-size-12 color-disabeld moon-content-text-ellipsis-class">{{filtersDeviceTypeText}}</span>
            </template>
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{deviceTypeInfo(scope.row.device_type)}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{deviceTypeInfo(scope.row.device_type)}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="college_no"
            :label="$t('IP')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.ip}}</div>
                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.ip}}
                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="college_no"
            :label="$t('SN')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.sn}}</div>
                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.sn}}
                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="college_no"
            :label="$t('授权时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.add_time ? $moment(scope.row.add_time).format("YYYY-MM-DD HH:mm:ss") : '--'}}</div>
                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.add_time ? $moment(scope.row.add_time).format("YYYY-MM-DD HH:mm:ss") : '--'}}
                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="college_no"
            :label="$t('照片抓怕')">
            <template slot-scope="scope">
              <my-head-img :head-img="scope.row"></my-head-img>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="college_no"
            width="150"
            :label="$t('用途')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <my-device-use-type :type="scope.row.scene_type"></my-device-use-type>
                </div>
                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <my-device-use-type :type="scope.row.scene_type"></my-device-use-type>
                </span>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="college_no"
            :label="$t('识别状态')">
            <template slot-scope="scope">
              <span v-if="scope.row.alive_type == 1" class="color-success">{{$t("通过")}}</span>
              <span v-if="scope.row.alive_type != 1" class="color-danger">{{$t("失败")}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <my-pagination :total="totalTeacher" :current-page="pageTeacher" :page-size="numTeacher" @currentPage="currentTeacherPage" @sizeChange="sizeTeacherChange" @jumpChange="jumpTeacherPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </drawer-layout-right>


    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="删除后会清空所有授权数据，确认需要执行该操作吗？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="cancelDrawDialog"></my-normal-dialog>
    <my-normal-dialog :visible.sync="visibleBindConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要重置该人员信息吗？" @ok-click="handleBindOkChange" @cancel-click="handleCancelChange" @close="cancelDrawDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
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
  import UploadSquare from "../../../components/utils/upload/UploadSquare";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import TabGroupButton from "../../../components/utils/button/TabGroupButton";
  import MyAuthOptions from "../../../components/utils/status/MyAuthOptions";
  import MyHeadImg from "../../../components/utils/common/MyHeadImg";
  import MyDeviceUseType from "../../../components/utils/status/MyDeviceUseType";
  import {
    deviceType,
    MessageError,
    MessageSuccess, MessageWarning,
    nationInfo,
    studentTeachStatus, studyType,
    teacherTypeInfo,
    workEnjoy,
    workTitle
  } from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,UploadSquare,DrawerLayoutRight,TabGroupButton,MyAuthOptions,MyHeadImg,MyDeviceUseType},
    data(){
      return {
        searchDate: [],
        pageDevice: 1,
        totalDevice: 0,
        numDevice: 20,
        pageTeacher: 1,
        totalTeacher: 0,
        numTeacher: 20,
        tableData: [],
        statusList: [],
        teachList: [],
        deviceData: [],
        deviceAllData: [],
        bedData: [],
        tableDeviceData: [],
        userData: {},
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        maskShow: false,
        timerVisible: false,
        syncLoading: false,
        drawerDeviceVisible: false,
        loadingList: false,
        loadingDevice: false,
        drawerRecordVisible: false,
        mutiUnbindLoading: false,
        tableRecordData: [],
        deviceList: [],
        aiSyncStatus: '',
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        searchDormId: '',
        searchKey: '',
        searckDeviceKey: '',
        searchDeviceType: '',
        searchRecodeDeviceType: '',
        searchDept: '',
        searchStatus: '',
        searchTeach: '',
        subTitle: '',
        uploadProcess: '',
        uploadResult: {},
        uploadFile: common.teacher_file + "?fileName=" + encodeURIComponent(this.$t("学生导入模板20180130_v2.xls")),
        uploadAction: common.student_upload,
        uploadFileUrl: common.upload_file,
        loopTimer: null,
        resultList: [],
        errorTips: '',
        photoDeviceSn: '',
        photoDeviceIp: '',
        photoDevicePwd: '',
        photoSign: '',
        photoTimer: null,
        keyTimer: null,
        keyDeviceSn: '',
        keySign: '',
        loopTimerCount: 60,
        selDormTips: '',
        errorCardTips: '',
        deviceObj: '',
        deviceRecordObj: '',
        syncStatus: '',
        filterAuthOtherOptionsText: '',
        searchRecordDeviceType: '',
        filtersDeviceTypeText: '',
        filtersDeviceType: [],
        visibleBindConfim: false,
        filterUserAccountActiveStatusOptionsText: '',
        searchAccountStatusType: '',
        form: {
          status: '',
          attnedType: '',
          classId: '',
          dormId: '',
          classData: [],
          dormData: [],
          cardNo: '',
          imgList: [],
          buildId: '',
          floorNum: '',
          dormId: '',
          bedId: '',
          searchDept: '',
          userId: ''
        },
        formUser: {
          userId: '',
          pass: ''
        }
      }
    },
    created() {
      this.init();
      this.initAllDevice();
      this.initDevice();
      this.deviceTypeGetInfo();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          departmentPath: this.searchDept,
          deleted: 0,
          aiSyncStatus: this.aiSyncStatus,
          searchKey: this.searchKey.input
        };
        if (this.searchAccountStatusType !== ""){
          params['bind'] = this.searchAccountStatusType;
        }
        //params = this.$qs.stringify(params);
        this.tableData = [];
        this.$axios.get(common.tearcher_info_setting_page, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['loading'] = false;
            }
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initAllDevice(){
        let params = {
          page: 1,
          num: 9999,
          searchKey: this.searckDeviceKey,
          type: this.searchDeviceType
        };
        this.$axios.get(common.device_take_list, {params: params}).then(res => {
          if (res.data.data){
            this.deviceAllData = res.data.data;
          }
        });
      },
      initDevice(){
        let params = {
          page: 1,
          num: 9999,
          searchKey: this.searckDeviceKey,
          type: 3
        };
        this.$axios.get(common.device_take_list, {params: params}).then(res => {
          if (res.data.data){
            this.deviceData = res.data.data;
          }
        });
      },
      initBed(){
        let params = {
          page: 1,
          num: 9999,
          dormitoryId: this.searchDormId
        };
        this.$axios.get(common.bed_select_list, {params: params}).then(res => {
          if (res.data.data){
            this.bedData = res.data.data;
          }
        });
      },
      initUserDevice(row){
        let params = {
          page: this.pageDevice,
          num: this.numDevice,
          userId: this.deviceObj.user_id,
          syncStatus: this.syncStatus
        };
        this.loadingDevice = true;
        this.$axios.get(common.face_sync_teacher_device_list, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['loading'] = false;
              res.data.data.list[i]['downloading'] = false;
            }
            this.tableDeviceData = res.data.data.list;
            this.totalDevice = res.data.data.totalCount;
            this.numDevice = res.data.data.num;
            this.pageDevice = res.data.data.currentPage;
          }
          this.loadingDevice = false;
        });
      },
      initUserRecord(row){
        let params = {
          page: this.pageTeacher,
          num: this.numTeacher,
          userId: this.deviceRecordObj.user_id,
        };
        if (this.searchRecodeDeviceType){
          params['type'] = this.searchRecodeDeviceType
        }

        if (this.searchDate && this.searchDate.length > 0){
          params['beginTime'] = this.searchDate[0];
        }

        if (this.searchDate && this.searchDate.length > 0){
          params['endTime'] = this.searchDate[1];
        }

        this.loadingDevice = true;
        params = this.$qs.stringify(params);
        this.$axios.post(common.face_sync_teacher_face_record_list, params).then(res => {
          if (res.data.data){
            this.tableRecordData = res.data.data.list;
            this.totalTeacher = res.data.data.totalCount;
            this.numTeacher = res.data.data.num;
            this.pageTeacher = res.data.data.currentPage;
          }
          this.loadingDevice = false;
        });
      },
      importInfo(){

      },
      exportInfo(row){

      },
      detialDeviceInfo(row){
        this.deviceObj = row;
        setTimeout(() => {
          this.initUserDevice();
        },800);
        this.drawerDeviceVisible = true;
      },
      detialRecordInfo(row){
        this.deviceRecordObj = row;
        setTimeout(() => {
          this.initUserRecord();
        },800);
        this.drawerRecordVisible = true;
      },
      syncDeviceInfo(row){
        let params = {
          userId: this.deviceObj.user_id,
          sn: row.sn
        };
        row.loading = true;
        this.$axios.get(common.sync_device_auth_opr, {params: params, loading: false}).then(res => {
          if (res.data.code == 200){
            //MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          row.loading = false;
        });
      },
      downloadInfo(row){
        window.open(common.down_device_auth_opr + "?userId=" + this.deviceObj.user_id + "&sn=" + row.sn, '_self');
      },
      syncInfo(row){
        let params = {
          userId: row.user_id
        };
        row.loading = true;
        this.$axios.get(common.face_sync_teacher, {params: params, loading: false}).then(res => {
          if (res.data.code == 200){
            this.initDevice();
            //MessageSuccess(res.data.desc);
          }else {
            //MessageError(res.data.desc);
          }

          row.loading = false;
        });
      },
      unBindInfo(item){
        this.formUser.userId = item.user_id;
        this.visibleBindConfim = true;
      },
      deleteInfo(row){
        this.form.id = row.user_id;
        this.visibleConfim = true;
      },
      detailInfo(row){
        this.userData = row;
        this.form.cardNo = row.face_cards;
        this.form.userId = row.user_id;
        this.form.imgList = [];
        if (row.photo && row.photo != ""){
          this.form.imgList.push(row.photo);
        }
        if (row.face_photos && row.face_photos != "" && row.face_photos != "|"){
          let img = row.face_photos.split("|");
          for (let i = 0; i < img.length; i++){
            this.form.imgList.push(img[i]);
          }
        }

        this.drawerVisible = true;
      },
      nodeClick(data){
        this.searchDept = "";
        this.searchDept = data.department_path;
        this.page = 1;
        this.init();
      },
      nodeDormClick(data){
        if (data.unit == 8){
          this.searchDormId = data.id;
          this.initBed();
        }
      },
      search(data){
        this.searchKey = data;
        this.page = 1;
        this.init();
      },
      handleSearchClick(){
        this.pageTeacher = 1;
        this.initUserRecord();
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
      sizeDeviceChange(event){
        this.pageDevice = 1;
        this.numDevice = event;
        this.initUserDevice();
      },
      currentDevicePage(event){
        this.pageDevice = event;
        this.initUserDevice();
      },
      jumpDevicePage(data){
        this.pageDevice = data;
        this.initUserDevice();
      },
      sizeTeacherChange(event){
        this.pageTeacher = 1;
        this.numTeacher = event;
        this.initUserRecord();
      },
      currentTeacherPage(event){
        this.pageTeacher = event;
        this.initUserRecord();
      },
      jumpTeacherPage(data){
        this.pageTeacher = data;
        this.initUserRecord();
      },
      handleSelect(data, type){
        if (type == 1){
          this.form.studentInfo.status = data;
        }else if (type == 2){
          this.form.studentInfo.attendType = data;
        }
      },
      studyTypeInfo(val, type){
        if (type == 'get'){
          let arr = workEnjoy(type, val);
          let arrItem = [];
          for (let item in arr){
            arrItem.push({
              label: arr[item].name,
              value: arr[item].code
            });
          }
          return arrItem;
        }else {
          let obj = workEnjoy(type, val);
          return obj ? obj : '--';
        }
      },
      workTitleInfo(val, type){
        if (type == 'get'){
          let arr = workTitle(type, val);
          let arrItem = [];
          for (let item in arr){
            arrItem.push({
              label: arr[item],
              value: item
            });
          }
          return arrItem;
        }else {
          return workTitle(type, val);
        }
      },
      handleCascaderChange(data){
        this.form.studentInfo.collegeId = data[0];
        this.form.studentInfo.majorId = data[0];
        //this.form.studentInfo.grade = data[0];
        this.form.studentInfo.classz = data[0];
        this.form.classData = data;
      },
      closeDrawerDialog(event){
        this.form = {
          status: '',
          attnedType: '',
          classId: '',
          dormId: '',
          classData: [],
          dormData: [],
          cardNo: '',
          imgList: [],
          buildId: '',
          floorNum: '',
          dormId: '',
          bedId: '',
          searchDept: '',
          userId: ''
        };

        this.formUser = {
          userId: '',
          pass: ''
        };
        this.selDormTips = "";
        this.subTitle = "";
        this.keyDeviceSn = "";
        this.maskShow = false;
        clearTimeout(this.photoTimer);
        clearTimeout(this.keyTimer);
        this.loopTimerCount = 60;
        this.$set(this.form,'deptdata', []);
        this.resetCasadeSelector('selectorClass');
        this.resetCasadeSelector('selectorDorm');
        this.deviceObj = {};
        this.deviceRecordObj = {};
        this.pageDevice = 1;
        this.numDevice = 20;
        this.totalDevice = 0;
        this.searchDeviceType = '';
        this.tableDeviceData = [];
        if (this.$refs['refRecordTable']){
          this.$refs.refRecordTable.clearFilter();
        }
        if (this.$refs['refDeviceTable']){
          this.$refs.refDeviceTable.clearFilter();
        }
        this.syncStatus = '';
        this.filterAuthOtherOptionsText = '';
        this.filtersDeviceTypeText = '';
        this.searchRecodeDeviceType = '';
        this.tableRecordData = [];
        this.searchDate = [];
        this.drawerVisible = event;
        this.drawerDeviceVisible = event;
        this.drawerRecordVisible = event;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
        this.drawerDeviceVisible = false;
        this.drawerRecordVisible = false;
        this.visibleBindConfim = false;
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
        this.drawerDeviceVisible = false;
        this.drawerRecordVisible = false;
        this.visibleBindConfim = false;
      },
      okDrawDialog(event){
        let url = "";
        let imgUrl = [];
        let params = {
          cards: this.form.cardNo,
          userId: this.form.userId
        };
        params['urls']  = this.form.imgList.join();

        url = common.tearcher_info_setting;
        params = this.$qs.stringify(params);
        this.drawerLoading = true;
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.drawerVisible = false;
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.drawerLoading = false;
        });
      },
      uploadFileSuccess(res, file){
        if (res.code == 200){
          if (this.form.imgList.length < 3){
            this.form.imgList.push(res.data.url);
          }else {
            MessageWarning(this.$t("头像最多只能3张"));
          }
        }else {

        }
      },
      selPhoteDevice(row){
        this.photoDeviceSn = row.sn;
        this.photoDevicePwd = row.password;
        this.photoDeviceIp = row.ip;
      },
      selKeyDevice(row){
        this.keyDeviceSn = row.sn;
        this.keySign = new Date().getTime() + Math.random();
        let params = {
          sn: this.keyDeviceSn,
          sign: this.keySign
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.device_take_get_card, params).then(res => {
          if (res.data.code == 200){
            clearTimeout(this.keyTimer);
            this.maskShow = true;
            this.loopKeyTime();
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      closeKeyModal(){
        clearTimeout(this.keyTimer);
        this.loopTimerCount = 60;
        this.keyDeviceSn = "";
        this.maskShow = false;
        this.errorCardTips = "";
      },
      photoChange(){
        if (this.photoDeviceSn == ""){
          MessageWarning(this.$t("请选择需要拍照的设备"));
          return;
        }
        this.photoSign = new Date().getTime() + Math.random();
        let params = {
          userId: this.userData.user_id,
          sort: this.form.imgList.length + 1,
          ip: this.photoDeviceIp,
          password: this.photoDevicePwd,
          sn: this.photoDeviceSn,
          sign: this.photoSign
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.device_take_face, params).then(res => {
          if (res.data.code == 200){
            clearTimeout(this.photoTimer);
            this.photoTimer = null;
            this.loopPhotoTime();
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      loopPhotoTime(){
        let params = {
          userId: this.userData.user_id,
          sign: this.photoSign
        };
        this.$axios.get(common.device_take_get_face, {params: params}).then(res => {
          if (res.data.code == 201){
            clearTimeout(this.photoTimer);
            this.photoTimer = null;
            this.photoTimer = setTimeout(() => {
              this.loopTimerCount--;
              if (this.loopTimerCount <= 0){
                clearTimeout(this.photoTimer);
                this.photoTimer = null;
                this.loopTimerCount = 60;
                return;
              }
              this.loopPhotoTime();
            },1000);
          }else if (res.data.code == 200){
            clearTimeout(this.photoTimer);
            this.photoTimer = null;
            this.loopTimerCount = 60;
            this.form.imgList.push(res.data.data.imgUrl)
          }else {
            clearTimeout(this.photoTimer);
            this.photoTimer = null;
            this.loopTimerCount = 60;
            MessageError(res.data.desc);
          }
        });
      },
      loopKeyTime(){
        let params = {
          sn: this.keyDeviceSn,
          sign: this.keySign
        };
        this.$axios.get(common.device_take_get_loop_card, {params: params}).then(res => {
          if (res.data.code == 202){
            clearTimeout(this.keyTimer);
            this.keyTimer = setTimeout(() => {
              this.loopTimerCount--;
              if (this.loopTimerCount <= 0){
                clearTimeout(this.keyTimer);
                this.loopTimerCount = 60;
                this.maskShow = false;
                this.timerVisible = false;
                return;
              }
              this.loopKeyTime();
            },1000);
          }else if (res.data.code == 200){
            clearTimeout(this.keyTimer);
            this.loopTimerCount = 60;
            this.form.cardNo = res.data.data.idcardNum;
            this.maskShow = false;
            this.timerVisible = false;
            this.keyDeviceSn = "";
          }else {
            clearTimeout(this.keyTimer);
            this.loopTimerCount = 60;
            this.keyDeviceSn = "";
            this.maskShow = true;
            this.timerVisible = true;
            //MessageError(res.data.desc);
            this.errorCardTips = res.data.desc;
          }
        });
      },
      selDorm(row){
        this.form.buildId = row.build_id;
        this.form.floorNum = row.floor_num;
        this.form.dormId = row.dormitory_no;
        this.form.bedId = row.bed_id;
        this.form.studentInfo.bedNo = row.bed_no;
        this.selDormTips = row.build_name +"-"+ row.floor_num+"楼" +"-"+ row.dormitory_no +"-"+ row.bed_no+"号床";
      },
      deviceTypeInfo(val){
        return deviceType('set',val);
      },
      deleteImg(index){
        this.form.imgList.splice(index, 1);
      },
      timerFormat(val){
        return val + "s";
      },
      handleChange(type){
        this.page = 1;
        this.aiSyncStatus = type.value;
        this.init();
      },
      handleDeviceChange(type){
        this.page = 1;
        this.syncStatus = type.value;
        this.initUserDevice();
      },
      hideCardSet(){
        this.maskShow = false;
        this.timerVisible = false;
        this.errorCardTips = "";
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          userId: this.form.id
        }
        url = common.face_sync_teacher_del;
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
      },
      handleBindOkChange(){
        let url = "";
        let params = {
          userId: this.formUser.userId
        };
        this.dialogLoading = true;
        url = common.student_parent_unbind;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params, {loading: false}).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.visibleBindConfim = false;
          this.dialogLoading = false;
        });
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
        this.visibleBindConfim = false;
      },
      handleChangeTime(data){
        this.searchDate = data;
      },
      deviceTypeGetInfo(type, val){
        let arr = [];
        let deviceList = deviceType('get', val);
        for (let i in deviceList){
          arr.push({
            value: i,
            text: deviceList[i]
          });
        }
        this.filtersDeviceType = arr;
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'status'){
            this.filterAuthOtherOptionsText = "";
            this.syncStatus = value[item][0];
            for (let i = 0; i < this.filterAuthOtherOptions.length; i++){
              if (this.syncStatus == this.filterAuthOtherOptions[i].value){
                this.filterAuthOtherOptionsText = this.filterAuthOtherOptions[i].text;
              }
            }
            this.pageDevice = 1;
            this.initUserDevice();
          }else if (item == 'deviceType'){
            this.filtersDeviceTypeText = "";
            this.searchRecodeDeviceType = value[item][0];
            for (let i = 0; i < this.filtersDeviceType.length; i++){
              if (this.searchRecodeDeviceType == this.filtersDeviceType[i].value){
                this.filtersDeviceTypeText = this.filtersDeviceType[i].text;
              }
            }
            this.pageTeacher = 1;
            this.initUserRecord();
          }else if (item == 'accountStatus'){
            this.filterUserAccountActiveStatusOptionsText = "";
            this.searchAccountStatusType = value[item][0];
            for (let i = 0; i < this.filterUserAccountActiveStatusOptions.length; i++){
              if (this.searchAccountStatusType == this.filterUserAccountActiveStatusOptions[i].value){
                this.filterUserAccountActiveStatusOptionsText = this.filterUserAccountActiveStatusOptions[i].text;
              }
            }
            this.page = 1;
            this.init();
          }
        }

      },
      getRowKeys(row) {
        return row.user_id
      },
      handleSelectionChange(data){
        this.deviceList = data;
      },
      unbindMutiInfo(){
        let arr = [];
        for (let i = 0; i < this.deviceList.length; i++){
          arr.push(this.deviceList[i].user_id);
        }
        let params = {
          userId: arr.join()
        };
        params = this.$qs.stringify(params);
        this.mutiUnbindLoading = true;
        this.$axios.post(common.student_parent_unbind, params, {loading: false}).then(res => {
          if (res.data.code == 200){
            this.init();
            this.deviceList = [];
            this.$refs.refMainTable.clearSelection();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.mutiUnbindLoading = false;
        });
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .title-tag{
    height:20px;
    width: 5px;
    background: #E6A23C;
    display: inline-block;
    border-radius: 5px;
  }
  .user-header-photo{
    height: 90px;
    width: 75px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    margin-right: 5px;
  }
  .popover-mask{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #dddddd;
    z-index: 2
  }
  .hover-tips:hover{
    border-bottom: 1px solid #077DBA;
  }
</style>
