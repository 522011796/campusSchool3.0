<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">学生信息</span>
        </div>
        <my-el-tree type="1" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-right-tab">
          <el-row>
            <el-col :span="showTableAndList == false ? 10 : 9">
              <tab-group-button size="small" :options='filterAuthOptions' @click="handleChange"></tab-group-button>
              <el-button v-if="showTableAndList == false" size="small" type="default" :disabled="deviceList.length <= 0" :loading="mutiUnbindLoading"  icon="el-icon-circle-close" @click="unbindMutiInfo($event)">{{$t("批量重置")}}</el-button>
            </el-col>
            <el-col :span="showTableAndList == false ? 14 : 15">
              <div class="text-right layout-inline">
                <i :class="showTableAndList == false ? 'fa fa-table' : 'fa fa-list'" @click="changeTableAndList"></i>
                <my-select v-if="showTableAndList == true" width-style="99" :clearable="true" :sel-value="searchAccountStatusType" :options="filterUserAccountActiveStatusOptions" :placeholder="$t('激活状态')" class="layout-item" size="small" @change="handleSelect($event, 3)"></my-select>
                <my-select width-style="99" :clearable="true" :sel-value="searchStatus" :options="studentTeachStatusInfo(null, 'get')" :placeholder="$t('学籍状态')" class="layout-item" size="small" @change="handleSelect($event, 1)"></my-select>
                <my-select width-style="99" :clearable="true" :sel-value="searchTeach" :options="studyTypeInfo(null, 'get')" :placeholder="$t('就读形式')" class="layout-item" size="small" @change="handleSelect($event, 2)"></my-select>
                <my-input-button class="layout-item" :placeholder="$t('姓名/学号/账号')" :show-select="false" :options="searchStudentType" size="small" plain width-class="width: 105px" type="success" :clearable="true" @click="search"></my-input-button>
              </div>
            </el-col>
          </el-row>
        </div>

        <div v-if="showTableAndList == true" class="bg-white border-bottom-1 padding-lr-5 padding-tb-5" :style="divHeight">
          <div v-if="tableData.length <= 0">
            <div class="text-center padding-tb-10">
              <span class="color-disabeld">{{$t("暂无数据")}}</span>
            </div>
          </div>
          <el-row v-else :gutter="16">
            <el-col :span="6" v-for="(item, index) in tableData" :key="index" class="margin-bottom-20">
              <el-card :body-style="{padding: '10px 10px', height: '110px'}" style="position: relative" @click.native="detailInfo(item)">
                <div class="color-muted">
                  <el-row class="color-warning">
                    <el-col :span="12">
                      <i class="fa fa-id-card"></i>
                      <span>{{item.student_id}}</span>
                    </el-col>
                    <el-col :span="12">
                      <div class="text-right">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center"><my-auth-options :status="item.ai_sync_status"></my-auth-options></div>
                          <span slot="reference" class="name-wrapper">
                            <my-auth-options :status="item.ai_sync_status"></my-auth-options>
                          </span>
                        </el-popover>
                        <el-popover
                          placement="bottom"
                          width="300"
                          trigger="hover">

                          <div class="text-left">
                            <div>
                              <div class="margin-bottom-5 color-disabeld font-size-12">
                                <span>{{$t("操作")}}</span>
                              </div>
                              <el-button size="mini" plain type="success" @click="detialRecordInfo(item)">
                                <i class="fa fa-cog"></i>
                                <span>{{$t("识别记录")}}</span>
                              </el-button>
                              <el-button size="mini" plain type="warning" @click="syncInfo(item)">
                                <i class="fa" :class="item.loading ? 'fa-spinner fa-spin' : 'fa-retweet'"></i>
                                <span>{{$t("同步")}}</span>
                              </el-button>
                              <el-button size="mini" plain type="danger" @click="deleteInfo(item)">
                                <i class="fa fa-trash"></i>
                                <span>{{$t("清除")}}</span>
                              </el-button>
                            </div>
                            <div class="line-height"></div>
                            <div>
                              <div class="margin-bottom-5 color-disabeld font-size-12">
                                <span>{{$t("其他")}}</span>
                              </div>
                              <!--<el-button size="mini" plain type="success" @click="resetPwdInfo(item)">
                                <i class="fa fa-lock"></i>
                                <span>{{$t("重置密码")}}</span>
                              </el-button>-->
                              <el-button v-if="item.sso_user_id && item.sso_user_id != null" size="mini" plain type="warning" @click="unBindInfo(item)">
                                <i class="fa fa-unlock"></i>
                                <span>{{$t("重置账号")}}</span>
                              </el-button>
                              <el-button size="mini" plain type="danger" @click="parentInfo(item)">
                                <i class="fa fa-user"></i>
                                <span>{{$t("家长信息")}}</span>
                              </el-button>
                              <el-button size="mini" plain type="warning" @click="detialDeviceInfo(item)">
                                <i class="fa fa-cube"></i>
                                <span>{{$t("授权设备")}}</span>
                                (<span class="color-success">
                                  <label v-if="item.ai_sync_success">{{item.ai_sync_success}}</label>
                                  <label v-else>0</label>
                                </span>
                                /
                                <span class="color-grand">
                                  {{item.ai_sync_all}}
                                </span>)
                              </el-button>
                            </div>
                            <div class="line-height"></div>
                            <div>
                              <div class="margin-bottom-5 color-disabeld font-size-12">
                                <span>{{$t("申请")}}</span>
                              </div>
                              <el-button size="mini" plain type="success" @click="creditInfo(item)">
                                <i class="fa fa-flag"></i>
                                <span>{{$t("学分申请")}}</span>
                              </el-button>
                              <el-button size="mini" plain type="warning" @click="rpInfo(item)">
                                <i class="fa fa-star"></i>
                                <span>{{$t("奖惩申请")}}</span>
                              </el-button>
                            </div>
                          </div>

                          <i slot="reference" class="fa fa-ellipsis-h"></i>
                        </el-popover>
                      </div>
                    </el-col>
                  </el-row>
                </div>

                <div class="color-muted margin-top-10">
                  <el-row>
                    <el-col :span="8">
                      <div>
                        <img v-if="item.photo" :src="item.photo" key="contain" style="width: 50px; height: 50px" />
                        <el-avatar v-if="!item.photo" shape="square" :size="50" icon="el-icon-user-solid"></el-avatar>
                      </div>
                      <div class="color-success font-size-12 text-left">
                        <!--<span>
                          <label v-if="item.status">{{studentTeachStatusInfo(item.status, 'set')}}</label>
                          <label v-else>&#45;&#45;</label>
                        </span>-->
                        <span class="color-warning margin-left-5">
                          <!--<label>{{studyTypeInfo(item.attend_type, 'set')}}</label>-->
                          <span v-if="item.sso_user_id == null" class="color-danger">{{$t("未激活")}}</span>
                          <span v-if="item.sso_user_id != null" class="color-success">{{$t("已激活")}}</span>
                        </span>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="text-right" style="position: relative">
                        <div class="moon-content-text-ellipsis-class" style="cursor:default;position: relative; z-index: 99;">
                          <label @click.stop="detialDeviceInfo(item)">
                            <span class="color-success">
                              <label v-if="item.ai_sync_success">{{item.ai_sync_success}}</label>
                              <label v-else>0</label>
                            </span>
                              /
                              <span class="color-grand">
                              {{item.ai_sync_all}}
                            </span>
                          </label>
                        </div>
                        <div class="moon-content-text-ellipsis-class color-grand" style="cursor:default;">
                          <span @click="detailInfo(item)">
                            {{item.real_name}}
                          </span>
                        </div>
                        <div class="moon-content-text-ellipsis-class">
                          {{item.class_name}}
                        </div>
                        <div class="moon-content-text-ellipsis-class">
                          {{item.college_name}}
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>

        <div v-if="showTableAndList == false" class="margin-top-10">
          <el-table
            ref="refMainTable"
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :max-height="tableHeight14.height"
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
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label class="color-grand" @click="detialRecordInfo(scope.row)">{{scope.row.real_name}}</label>
                  </div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label class="color-grand" @click="detialRecordInfo(scope.row)">{{scope.row.real_name}}</label>
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="college_no"
              :label="$t('班级')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.class_name ?  scope.row.class_name : '--'}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{ scope.row.class_name ?  scope.row.class_name : '--'}}
                </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="class_no"
              :label="$t('学号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.student_id ?  scope.row.student_id : '--'}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{ scope.row.student_id ?  scope.row.student_id : '--'}}
                </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="class_no"
              :label="$t('就读形式')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{studyTypeInfo(scope.row.attend_type, 'set')}}</div>
                  <span slot="reference" class="name-wrapper">
                  {{studyTypeInfo(scope.row.attend_type, 'set')}}
                </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="class_no"
              :label="$t('学籍状态')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{studentTeachStatusInfo(scope.row.status, 'set')}}</div>
                  <span slot="reference" class="name-wrapper">
                  {{studentTeachStatusInfo(scope.row.status, 'set')}}
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
              width="100"
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
                    <span v-if="scope.row.sso_user_id != null" class="color-success">{{$t("账号")}}:{{scope.row.account1}}</span>
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
              width="100"
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
                <el-popover
                  placement="bottom"
                  width="300"
                  trigger="hover">

                  <div class="text-left">
                    <div>
                      <div class="margin-bottom-5 color-disabeld font-size-12">
                        <span>{{$t("操作")}}</span>
                      </div>
                      <el-button size="mini" plain type="warning" @click="syncInfo(scope.row)">
                        <i class="fa" :class="scope.row.loading ? 'fa-spinner fa-spin' : 'fa-retweet'"></i>
                        <span>{{$t("同步")}}</span>
                      </el-button>
                      <el-button v-if="scope.row.sso_user_id && scope.row.sso_user_id != null" size="mini" plain type="warning" @click="unBindInfo(scope.row)">
                        <i class="fa fa-unlock"></i>
                        <span>{{$t("重置账号")}}</span>
                      </el-button>
                      <el-button size="mini" plain type="danger" @click="deleteInfo(scope.row)">
                        <i class="fa fa-trash"></i>
                        <span>{{$t("清除")}}</span>
                      </el-button>
                    </div>
                    <div class="line-height"></div>
                    <div>
                      <div class="margin-bottom-5 color-disabeld font-size-12">
                        <span>{{$t("申请")}}</span>
                      </div>
                      <el-button size="mini" plain type="success" @click="creditInfo(scope.row)">
                        <i class="fa fa-flag"></i>
                        <span>{{$t("学分申请")}}</span>
                      </el-button>
                      <el-button size="mini" plain type="warning" @click="rpInfo(scope.row)">
                        <i class="fa fa-star"></i>
                        <span>{{$t("奖惩申请")}}</span>
                      </el-button>
                    </div>
                  </div>

                  <i slot="reference" class="fa fa-ellipsis-h color-warning"></i>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <drawer-layout-right  @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="550px" :title="$t('学生管理')" @right-close="cancelDrawDialog">
      <div slot="content" class="bg-white padding-lr-10 padding-tb-10" style="border-radius: 5px">
        <div class="color-muted" style="position: relative;">
          <el-row>
            <el-col :span="18">
              <div>
                <i class="fa fa-user-circle-o"></i>
                <span>{{$t("姓名")}}: </span>
                <span>{{userData.real_name}}</span>
              </div>
              <div class="margin-top-10">
                <i class="fa fa-building"></i>
                <span>{{$t("班级")}}: </span>
                <span>{{userData.class_name}}</span>
              </div>
              <div class="margin-top-10">
                <i class="fa fa-flag"></i>
                <span>{{$t("专业")}}: </span>
                <span>{{userData.major_name}}</span>
              </div>
              <div class="margin-top-10">
                <i class="fa fa-home"></i>
                <span>{{$t("院系")}}: </span>
                <span>{{userData.college_name}}</span>
              </div>
              <div class="margin-top-10">
                <i class="fa fa-phone-square"></i>
                <span>{{$t("手机号")}}: </span>
                <span>{{userData.phone}}</span>
              </div>
              <div class="margin-top-10">
                <i class="fa fa-credit-card"></i>
                <span>{{$t("账号")}}: </span>
                <span>{{userData.account1}}</span>
                <span v-if="userData.account2">/ {{userData.account2}}</span>
              </div>
            </el-col>
            <el-col :span="6" style="position: relative">
              <div style="position: absolute; top: 40px; right: 20px;">
                <div class="color-success">
                  <span class="font-size-25">{{userData.quality_score}}</span>
                  <span class="color-muted">{{$t("分")}}</span>
                </div>
                <div class="margin-top-5">
                  <el-popover
                    placement="left"
                    width="400"
                    trigger="click"
                    @show="userInfoDetail"
                    @hide="hideUserIndefoDetail">
                    <div v-show="showIframe == false" v-loading="showIframe == false" style="height: 600px">

                    </div>
                    <div v-show="showIframe == true">
                      <iframe :src="userInfoRul" frameborder="0" scrolling="auto" style="width: 100%; height: 600px"></iframe>
                    </div>
                    <el-button slot="reference" type="success" size="mini">
                      <i class="fa fa-id-badge"></i>
                      {{$t("个人报告")}}
                    </el-button>
                  </el-popover>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="line-height"></div>
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
                          <div class="text-center color-muted margin-top-20">
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
        <div class="line-height"></div>
        <div>
          <div>
            <span class="title-tag"></span>
            <span class="color-warning" style="position: relative; top: -5px;">{{$t("其他管理")}}</span>
          </div>
          <div class="margin-top-5">
            <el-form :model="form" ref="form" label-width="80px">
              <el-form-item :label="$t('学籍状态')" prop="status">
                <my-select width-style="260" :clearable="true" :sel-value="form.studentInfo.status" :options="studentTeachStatusInfo(null, 'get')" :placeholder="$t('学籍状态')" class="layout-item" @change="handleSelect($event, 1)"></my-select>
              </el-form-item>
              <el-form-item :label="$t('就读形式')" prop="attnedType">
                <my-select width-style="260" :clearable="true" :sel-value="form.studentInfo.attendType" :options="studyTypeInfo(null, 'get')" :placeholder="$t('就读形式')" class="layout-item" @change="handleSelect($event, 2)"></my-select>
              </el-form-item>
              <el-form-item :label="$t('班级分配')">
                <my-cascader ref="selectorClass" :sel-value="form.classData" type="1" sub-type="4" width-style="260" @change="handleCascaderChange($event, 1)"></my-cascader>
              </el-form-item>
              <el-form-item :label="$t('宿舍分配')">
                <!--<my-cascader ref="selectorDorm" :sel-value="form.dormData" type="2" sub-type="3" width-style="260" @change="handleCascaderChange($event, 2)"></my-cascader>-->
                <el-popover
                  placement="top"
                  width="500"
                  trigger="click">

                  <div>
                    <el-row>
                      <el-col :span="6">
                        <div style="height: 350px;overflow-y: auto;border-right: 1px solid #dddddd">
                          <my-el-tree :show-campus="false" type="2" sub-type="3" @node-click="nodeDormClick"></my-el-tree>
                        </div>
                      </el-col>
                      <el-col :span="18">
                        <div style="height: 350px;overflow-y: auto;">
                          <el-table :data="bedData">
                            <el-table-column align="center" prop="bed_no" label="床号"></el-table-column>
                            <el-table-column align="center" label="分配">
                              <template slot-scope="scope">
                                <span class="color-success" v-if="scope.row.user_id == null">{{$t("未分配")}}</span>
                                <span class="color-warning" v-else>{{$t("已分配")}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column align="center" prop="bedNo" label="状态">
                              <template slot-scope="scope">
                                <span class="color-success" v-if="scope.row.enable">{{$t("启用")}}</span>
                                <span class="color-warning" v-else>{{$t("禁用")}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column align="center" width="80" label="操作">
                              <template slot-scope="scope">
                                <span v-if="scope.row.user_id != null">--</span>
                                <i v-else class="fa fa-cog color-grand" @click="selDorm(scope.row)"></i>
                              </template>
                            </el-table-column>
                          </el-table>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  <el-button slot="reference" type="warning" size="small">{{$t("选择")}}</el-button>
                </el-popover>
                <span class="color-warning">{{selDormTips}}</span>
              </el-form-item>
            </el-form>
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
                <div class="text-center">
                  <span v-if="scope.row.sync_status == 2">{{scope.row.sync_des}}</span>
                  <my-auth-options v-else :status="scope.row.sync_status"></my-auth-options>
                </div>
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

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerRecordVisible" :loading="drawerLoading" size="850px" :title="$t('识别记录')" @right-close="cancelDrawDialog">
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
            :label="$t('识别时间')">
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
            :label="$t('照片抓拍')">
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
              <span v-if="scope.row.alive_type == 2" class="color-danger">{{$t("失败")}}</span>
              <span v-if="scope.row.alive_type == 3" class="color-danger">{{$t("无权限")}}</span>
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

    <dialog-normal width-style="700px" top="10vh" :visible="modalCreditVisible" :title="$t('学分申请')" @close="closeDrawerDialog" @right-close="cancelDrawDialog">
      <div class="margin-top-10">
        <el-form :model="formCredit" :rules="rulesCredit" ref="formCredit" label-width="140px">
          <el-form-item :label="$t('类型')" prop="type">
            <my-select :sel-value="formCredit.type" :options="filterScoreTypes" width-style="350" @change="handleCreditSelect($event, 1)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('一级项目')" prop="object1">
            <my-select :sel-value="formCredit.object1" :options="objectOne" width-style="350" @change="handleCreditSelect($event, 2)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('二级项目')" prop="object2">
            <my-select :sel-value="formCredit.object2" :options="objectTwo" width-style="350" @change="handleCreditSelect($event, 3)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('附件')">
            <div v-if="formCredit.file != ''" class="pull-left" style="position: relative">
              <i class="fa fa-close" style="position: absolute; right: -5px; top: -5px;" @click="deleteCreditImg"></i>
              <img :src="formCredit.file" class="credit-img"/>
            </div>
            <upload-square class="pull-left margin-left-10 margin-top-5" :limit="9999" :action="uploadFileAction" max-size="8" :data="{path: 'creditFile'}" accept=".png,.jpg,.jpeg" @success="uploadSuccess">
              <el-button size="small" type="primary">{{$t("点击上传")}}</el-button>
            </upload-square>
            <span class="pull-left color-danger font-size-12 margin-left-10 margin-top-5">{{$t("文件不超过8M")}}</span>
            <div class="moon-clearfix"></div>
          </el-form-item>
          <el-form-item :label="$t('说明')">
            <el-input type="textarea" :rows="2" v-model="formCredit.des" class="width-350"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <dialog-normal width-style="600px" top="10vh" :visible="modalRpVisible" :title="$t('奖惩申请')" @close="closeDrawerDialog" @right-close="cancelDrawDialog">
      <div class="margin-top-10">
        <el-form :model="formRp" :rules="rulesRp" ref="formRp" label-width="140px">
          <el-form-item :label="$t('类型')" prop="type">
            <my-select :sel-value="formRp.type" :options="filterTypes" width-style="350" @change="handleRpSelect($event, 1)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('级别')" prop="level">
            <my-select :sel-value="formRp.level" :options="filterAddLevels" width-style="350" @change="handleRpSelect($event, 2)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('附件')">
            <div v-if="formRp.file != ''" class="pull-left" style="position: relative">
              <i class="fa fa-close" style="position: absolute; right: -5px; top: -5px;" @click="deleteRpImg"></i>
              <img :src="formRp.file" class="credit-img"/>
            </div>
            <upload-square class="pull-left margin-left-10 margin-top-5" :limit="9999" :action="uploadFileAction" max-size="8" :data="{path: 'reFile'}" accept=".png,.jpg,.jpeg" @success="uploadRpSuccess">
              <el-button size="small" type="primary">{{$t("点击上传")}}</el-button>
            </upload-square>
            <span class="pull-left color-danger font-size-12 margin-left-10 margin-top-5">{{$t("文件不超过8M")}}</span>
            <div class="moon-clearfix"></div>
          </el-form-item>
          <el-form-item :label="$t('说明')">
            <el-input type="textarea" :rows="2" v-model="formRp.des" class="width-350"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okRpDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <dialog-normal width-style="600px" top="10vh" :visible="modalParentVisible" :title="$t('家长信息')" @close="closeDrawerDialog" @right-close="cancelDrawDialog">
      <div class="margin-top-10">
        <el-form :model="formParent" :rules="rulesParent" ref="formParent" label-width="140px">
          <el-form-item :label="$t('手机号')" prop="phone">
            <el-input v-model="formParent.phone" class="width-260"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okParentDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="删除后会清空所有授权数据，确认需要执行该操作吗？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="cancelDrawDialog"></my-normal-dialog>
    <my-normal-dialog :visible.sync="visibleBindConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要重置该人员信息吗？" @ok-click="handleBindOkChange" @cancel-click="handleCancelChange" @close="cancelDrawDialog"></my-normal-dialog>
    <my-normal-dialog :visible.sync="visiblePwdConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要重置该人员登录密码吗？" @ok-click="handlePwdOkChange" @cancel-click="handleCancelChange" @close="cancelDrawDialog"></my-normal-dialog>

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
  import stuManageApplyValidater from "../../../utils/validater/stuManageApplyValidater";
  export default {
    mixins: [mixins,stuManageApplyValidater],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,UploadSquare,DrawerLayoutRight},
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
        userData: {},
        filterLevels: [],
        filterAddLevels: [],
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        maskShow: false,
        timerVisible: false,
        showIframe: false,
        loadingDevice: false,
        drawerRecordVisible: false,
        drawerDeviceVisible: false,
        modalCreditVisible: false,
        modalRpVisible: false,
        modalPrentVisible: false,
        modalParentVisible: false,
        visibleBindConfim: false,
        visiblePwdConfim: false,
        mutiUnbindLoading: false,
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        searchDormId: '',
        searchKey: '',
        searckDeviceKey: '',
        searchDeviceType: '',
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
        userInfoRul: '',
        tableRecordData: [],
        tableDeviceData: [],
        filterAuthOtherOptionsText: '',
        filtersDeviceTypeText: '',
        syncStatus: '',
        deviceRecordObj: {},
        deviceObj: {},
        objectOne: [],
        objectTwo: [],
        errorStudent: '',
        uploadFileAction: common.upload_file,
        auditObjectItem: {},
        showTableAndList: true,
        filterUserAccountActiveStatusOptionsText: '',
        searchAccountStatusType: '',
        deviceList: [],
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
          bedId: '',
          filterAuthOtherOptionsText: '',
          searchRecordDeviceType: '',
          filtersDeviceTypeText: '',
          filtersDeviceType: [],
          studentInfo: {
            attendType: "",
            bedNo: '',
            birthday: "",
            certificateNum: "",
            certificateType: "",
            className: "",
            clasz: '',
            claszDate: "",
            collegeId: '',
            dormId: '',
            email: "",
            majorId: '',
            nation: "",
            nativePlace: "",
            nickName: "",
            parentContactInfo: "",
            parentName: "",
            phone: "",
            realName: "",
            schoolInTime: "",
            sex: '',
            status: "",
            studentId: "",
            userId: ""
          }
        },
        formCredit: {
          id: '',
          type: '',
          object1: '',
          object2: '',
          des: '',
          userId: [],
          file: '',
        },
        formRp: {
          id: '',
          type: '',
          level: '',
          file: '',
          des: '',
          userId:[]
        },
        formParent: {
          phone: '',
          userId:''
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
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          deleted: 0,
          aiSyncStatus: this.aiSyncStatus
        };
        if (this.searchStatus != ''){
          params['status'] = this.searchStatus;
        }
        if (this.searchTeach != ''){
          params['attendType'] = this.searchTeach;
        }

        if (this.searchAccountStatusType !== ""){
          params['bind'] = this.searchAccountStatusType;
        }
        params['searchKey'] = this.searchKey['input'];
        //params = this.$qs.stringify(params);
        this.tableData = [];
        this.$axios.get(common.face_sync_auth_student_list, {params: params}).then(res => {
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
        this.$axios.get(common.face_sync_student_device_list, {params: params}).then(res => {
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
        this.$axios.post(common.face_sync_student_face_record_list, params).then(res => {
          if (res.data.data){
            this.tableRecordData = res.data.data.list;
            this.totalTeacher = res.data.data.totalCount;
            this.numTeacher = res.data.data.num;
            this.pageTeacher = res.data.data.currentPage;
          }
          this.loadingDevice = false;
        });
      },
      initObject(type, typeName){
        let params = {
          scoreType: type
        };
        if (typeName){
          params['socreName'] = typeName;
        }
        params = this.$qs.stringify(params);
        this.$axios.post(common.audit_credit_type_fliter, params).then(res => {
          if (res.data.data){
            if (typeName){
              for (let i = 0; i < res.data.data.length; i++){
                res.data.data[i]['label'] = res.data.data[i].socre_name_sub;
                res.data.data[i]['value'] = res.data.data[i].socre_name_sub;
              }
              //this.objectOne = res.data.data;
              this.objectTwo = res.data.data;
              this.form.object2 = "";
            }else {
              for (let i = 0; i < res.data.data.length; i++){
                res.data.data[i]['label'] = res.data.data[i].socre_name;
                res.data.data[i]['value'] = res.data.data[i].socre_name;
              }
              this.objectOne = res.data.data;
            }
          }
        });
      },
      initLevels(type){
        let params = {
          page: 1,
          num: 99999,
          levelType: type
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.audit_re_level, params).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['text'] = res.data.data.list[i].level_name;
              res.data.data.list[i]['value'] = res.data.data.list[i].level_name;
            }
            if (type){
              this.filterAddLevels = res.data.data.list;
            }
            if (!type){
              this.filterLevels = res.data.data.list;
            }
          }
        });
      },
      initParentInfo(item){
        let params = {
          userId: item.user_id
        };
        this.$axios.get(common.student_parent_get, {params: params}).then(res => {
          if (res.data.data){
            this.formParent.phone = res.data.data.phone;
          }
        });
      },
      importInfo(){

      },
      exportInfo(row){

      },
      creditInfo(item){
        this.formCredit.userId = [{user_id: item.user_id}];
        this.modalCreditVisible = true;
      },
      rpInfo(item){
        this.formRp.userId = [{user_id: item.user_id}];
        this.modalRpVisible = true;
      },
      resetPwdInfo(item){
        this.formUser.userId = item.user_id;
        this.formUser.pass = (item.certificate_num && item.certificate_num != '') ? item.certificate_num.substr(item.certificate_num.length-6) : '';
        this.visiblePwdConfim = true;
      },
      unBindInfo(item){
        this.formUser.userId = item.user_id;
        this.visibleBindConfim = true;
      },
      parentInfo(item){
        this.formParent.userId = item.user_id;
        this.initParentInfo(item);
        this.modalParentVisible = true;
      },
      syncDeviceInfo(row){
        let params = {
          userId: this.deviceObj.user_id,
          sn: row.sn
        };
        row.loading = true;
        this.$axios.get(common.sync_device_student_auth_opr, {params: params, loading: false}).then(res => {
          if (res.data.code == 200){
            //MessageSuccess(res.data.desc);
          }else {
            //MessageError(res.data.desc);
          }

          MessageSuccess(row.sn + ": " + this.$t("同步操作成功"));
          row.loading = false;
        });
      },
      downloadInfo(row){
        window.open(common.down_device_student_auth_opr + "?userId=" + this.deviceObj.user_id + "&sn=" + row.sn, '_self');
      },
      syncInfo(row){
        let params = {
          userId: row.user_id
        };
        row.loading = true;
        this.$axios.get(common.face_sync_student, {params: params, loading: false}).then(res => {
          if (res.data.code == 200){
            this.init();
            //MessageSuccess(res.data.desc);
          }else {
            //MessageError(res.data.desc);
          }

          MessageSuccess(row.real_name + ": " + this.$t("同步操作成功"));
          row.loading = false;
        });
      },
      deleteInfo(row){
        this.form.id = row.user_id;
        this.visibleConfim = true;
      },
      detailInfo(row){
        this.userData = row;
        this.form.status = row.status;
        this.form.attnedType = row.attend_type;
        this.form.classData = [row.college_id, row.major_id, row.grade, row.clasz];
        this.form.dormData = [row.build_id, row.floor_num, row.drom_id];
        this.form.cardNo = row.face_cards;
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
        if (row.floor_num){
          this.selDormTips = row.build_name +"-"+ row.floor_num+"楼" +"-"+ row.dormitory_no +"-"+ row.bed_no+"号床";
        }
        this.form.studentInfo = {
          attendType: row.attend_type,
          bedNo: row.bed_no,
          birthday: row.birthday ? this.$moment(row.birthday).format("YYYY-MM-DD") : '',
          certificateNum: row.certificate_num,
          certificateType: row.certificate_type,
          className: row.class_name,
          clasz: row.clasz,
          claszDate: this.$moment(row.clasz_date).format("YYYY-MM-DD"),
          collegeId: row.college_id,
          dormId: row.dorm_id,
          majorId: row.major_id,
          nation: row.nation,
          nativePlace: row.native_place,
          nickName: row.nick_name,
          parentContactInfo: row.parent_contact_info,
          parentName: row.parent_name,
          phone: row.phone ? row.phone : '',
          realName: row.real_name,
          schoolInTime: this.$moment(row.school_in_time).format("YYYY-MM-DD"),
          sex: row.sex,
          status: row.status,
          studentId: row.student_id,
          userId: row.user_id
        };
        if (row.email){
          this.form.studentInfo['email'] = row.email;
        }

        this.drawerVisible = true;
      },
      nodeClick(data){
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
      handleSelect(data, type){
        if (type == 1){
          this.form.studentInfo.status = data;
        }else if (type == 2){
          this.form.studentInfo.attendType = data;
        }else if (type == 3){
          this.searchAccountStatusType = data;
        }
        this.page = 1;
        this.init();
      },
      studyTypeInfo(val, type){
        if (type == 'get'){
          let arr = studyType(type, val);
          let arrItem = [];
          for (let item in arr){
            arrItem.push({
              label: arr[item].name,
              value: arr[item].code
            });
          }
          return arrItem;
        }else {
          let obj = studyType(type, val);
          return obj ? obj.name : '--';
        }
      },
      studentTeachStatusInfo(val, type){
        if (type == 'get'){
          let arr = studentTeachStatus(type, val);
          let arrItem = [];
          for (let item in arr){
            arrItem.push({
              label: arr[item],
              value: item
            });
          }
          return arrItem;
        }else {
          return studentTeachStatus(type, val);
        }
      },
      handleCascaderChange(data){
        this.form.studentInfo.collegeId = data[0];
        this.form.studentInfo.majorId = data[1];
        //this.form.studentInfo.grade = data[0];
        this.form.studentInfo.clasz = data[3];
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
          bedId: '',
          studentInfo: {
            attendType: "",
            bedNo: '',
            birthday: "",
            certificateNum: "",
            certificateType: "",
            className: "",
            clasz: '',
            claszDate: "",
            collegeId: '',
            dormId: '',
            email: "",
            majorId: '',
            nation: "",
            nativePlace: "",
            nickName: "",
            parentContactInfo: "",
            parentName: "",
            phone: "",
            realName: "",
            schoolInTime: "",
            sex: '',
            status: "",
            studentId: "",
            userId: ""
          }
        };

        this.formCredit = {
          id: '',
          type: '',
          object1: '',
          object2: '',
          des: '',
          userId: [],
          file: ''
        };
        this.formRp = {
          id: '',
          type: '',
          level: '',
          file: '',
          des: '',
          userId:[]
        };
        this.filterAddLevels = [];

        this.formParent = {
          phone: '',
          userId:''
        };

        this.formUser = {
          userId: '',
          pass: ''
        };

        this.objectOne = [];
        this.objectTwo = [];
        if (this.$refs['formCredit']){
          this.$refs['formCredit'].resetFields();
        }

        if (this.$refs['formRp']){
          this.$refs['formRp'].resetFields();
        }

        if (this.$refs['formParent']){
          this.$refs['formParent'].resetFields();
        }

        this.selDormTips = "";
        this.subTitle = "";
        this.keyDeviceSn = "";
        this.maskShow = false;
        clearTimeout(this.photoTimer);
        clearTimeout(this.keyTimer);
        this.loopTimerCount = 60;
        this.$set(this.form,'deptdata', []);
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
        this.resetCasadeSelector('selectorClass');
        this.resetCasadeSelector('selectorDorm');
        this.drawerVisible = event;
        this.drawerDeviceVisible = event;
        this.drawerRecordVisible = event;
        this.modalCreditVisible = event;
        this.modalRpVisible = event;
        this.modalParentVisible = event;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
        this.drawerDeviceVisible = false;
        this.drawerRecordVisible = false;
        this.modalCreditVisible = false;
        this.modalRpVisible = false;
        this.modalParentVisible = false;
        this.visibleConfim = false;
        this.visiblePwdConfim = false;
        this.visibleBindConfim = false;
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
        this.drawerDeviceVisible = false;
        this.drawerRecordVisible = false;
        this.modalCreditVisible = false;
        this.modalRpVisible = false;
        this.modalParentVisible = false;
      },
      okDrawDialog(event){
        let url = "";
        let imgUrl = [];
        this.$refs['form'].validate((valid) => {
          if (valid) {
            let params = {
              cards: this.form.cardNo != '' ? [this.form.cardNo] : [],
              userId: this.form.studentInfo.userId
            };

            for (let i = 0; i < this.form.imgList.length; i++){
              imgUrl.push({
                cache: true,
                url: this.form.imgList[i]
              });
            }
            params['urlList']  = imgUrl;
            params['studentInfo'] = this.form.studentInfo;
            params['sn'] = this.photoDeviceSn;

            url = common.student_info_setting;
            //params = this.$qs.stringify(params);
            this.drawerLoading = true;
            this.$axios.post(url, JSON.stringify(params), {dataType: 'stringfy'}).then(res => {
              if (res.data.code == 200){
                this.drawerVisible = false;
                this.init();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.drawerLoading = false;
            });
          }
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
      deleteCreditImg(){
        this.formCredit.file = "";
      },
      userInfoDetail(){
        let authCookie = "";
        let host = window.location.host;
        host = "http://" + host.split(":")[0];
        let hostEncodeURIComponent = encodeURIComponent(host+":10201");
        this.showIframe = false;
        this.$axios(common.userinfo_cookie_auth).then(res => {
          if (res.data.data){
            authCookie = res.data.data.cookie;
            let url = 'https://campus.9451.com:9999/userDetail?userId='+ this.userData.user_id + "&campusUrl="+ hostEncodeURIComponent + "&campusType="+ "jump" + "&cookie=" + authCookie;
            this.userInfoRul = url;
            setTimeout(() => {
              this.showIframe = true;
            }, 2000);
          }
        });
      },
      hideUserIndefoDetail(){
        this.userInfoRul = "";
        this.showIframe = false;
      },
      timerFormat(val){
        return val + "s";
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
        url = common.face_sync_student_del;
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
      handlePwdOkChange(){
        let url = "";
        let params = {
          userId: this.formUser.userId,
          pass: this.formUser.pass
        };
        this.dialogLoading = true;
        url = common.student_parent_reset_pwd;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
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
        this.visiblePwdConfim = false;
        this.visibleBindConfim = false;
      },
      handleChange(type){
        this.page = 1;
        this.aiSyncStatus = type.value;
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
      fliterTable(value, row, column) {
        for (let item in value) {
          if (item == 'status') {
            this.filterAuthOtherOptionsText = "";
            this.syncStatus = value[item][0];
            for (let i = 0; i < this.filterAuthOtherOptions.length; i++) {
              if (this.syncStatus == this.filterAuthOtherOptions[i].value) {
                this.filterAuthOtherOptionsText = this.filterAuthOtherOptions[i].text;
              }
            }
            this.pageDevice = 1;
            this.initUserDevice();
          } else if (item == 'deviceType') {
            this.filtersDeviceTypeText = "";
            this.searchRecodeDeviceType = value[item][0];
            for (let i = 0; i < this.filtersDeviceType.length; i++) {
              if (this.searchRecodeDeviceType == this.filtersDeviceType[i].value) {
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
      handleChangeTime(data){
        this.searchDate = data;
      },
      handleSearchClick(){
        this.pageTeacher = 1;
        this.initUserRecord();
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
      handleCreditSelect(data, type){
        switch (type) {
          case 1:
            this.formCredit.type = data;
            this.formCredit.object1 = '';
            this.formCredit.object2 = '';
            this.objectOne = [];
            this.objectTwo = [];
            this.initObject(data);
            break;
          case 2:
            this.formCredit.object1 = data;
            this.initObject(this.formCredit.type, data)
            break;
          case 3:
            this.formCredit.object2 = data;
            break;
        }
      },
      handleRpSelect(data, type){
        if (type == 1){
          this.$set(this.formRp, 'type', ''+data);
          this.$set(this.formRp, 'level', '');
          this.initLevels(data);
        }else if(type == 2){
          this.$set(this.formRp, 'level', ""+data);
        }
      },
      cancelDialog(){
        this.modalCreditVisible = false;
        this.modalRpVisible = false;
        this.modalParentVisible = false;
      },
      okDialog(event){
        let url = "";
        let arr = [];
        this.$refs['formCredit'].validate((valid) => {
          if (valid) {
            this.errorStudent = "";
            for (let i = 0; i < this.formCredit.userId.length; i++){
              arr.push(this.formCredit.userId[i].user_id);
            }
            this.dialogLoading = true;
            let params = {
              applyFile: this.formCredit.file,
              applyTypeCode: "ScoreApply",
              des: this.formCredit.des,
              str1: this.formCredit.type == "false" ? "减分" : "加分",
              str2: this.formCredit.object1,
              str3: this.formCredit.object2,
              userId: arr.join(),
              userType: "5"
            };
            url = common.audit_re_add;
            params = JSON.stringify(params);
            this.$axios.post(url, params, {dataType: 'stringfy', loading: false}).then(res => {
              if (res.data.code == 200){
                this.modalCreditVisible = false;
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
            });
          }
        });
      },
      okParentDialog(event){
        let url = "";
        this.$refs['formParent'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              userId: this.formParent.userId,
              phone: this.formParent.phone
            };
            url = common.student_parent_set;
            params = this.$qs.stringify(params, {loading: false});
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.modalParentVisible = false;
                this.init();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
            });
          }
        });
      },
      uploadSuccess(res, file){
        if (res.code == 200){
          this.formCredit.file = res.data.url;
        }else {

        }
      },
      uploadError(res, file){
        MessageError(res.data.desc);
      },
      okRpDialog(event){
        let url = "";
        let arr = [];
        this.$refs['formRp'].validate((valid) => {
          if (valid) {
            this.errorStudent = "";
            for (let i = 0; i < this.formRp.userId.length; i++){
              arr.push(this.formRp.userId[i].user_id);
            }
            this.dialogLoading = true;
            let params = {
              applyFile: this.formRp.file,
              applyTypeCode: "PunishmentApply",
              des: this.formRp.des,
              str1: this.formRp.type,
              str2: this.formRp.level,
              userId: arr.join(),
              userType: "5"
            };
            url = common.audit_re_add;
            params = JSON.stringify(params);
            this.$axios.post(url, params, {dataType: 'stringfy', loading: false}).then(res => {
              if (res.data.code == 200){
                this.modalRpVisible = false;
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
            });
          }
        });
      },
      uploadRpSuccess(res, file){
        if (res.code == 200){
          this.formRp.file = res.data.url;
        }else {

        }
      },
      uploadRpError(res, file){
        MessageError(res.data.desc);
      },
      deleteRpImg(){
        this.formRp.file = "";
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
      },
      changeTableAndList(){
        this.showTableAndList = !this.showTableAndList;
        this.searchAccountStatusType = '';
        this.filterUserAccountActiveStatusOptionsText = '';
        this.page = 1;
        this.init();
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
  margin-right: 0px;
}
.popover-mask{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #dddddd;
  z-index: 2
}
.credit-img{
  height: 50px;
  width: 50px;
  border: 1px solid #dddddd;
}
</style>
