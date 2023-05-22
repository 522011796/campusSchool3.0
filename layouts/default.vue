<template>
  <div class="moon-container">
    <div class="moon-top-menu">
      <div class="pull-left moon-top-logo moon-top-logo-shadow animated fadeInLeftBig" @click="jumpIndex">
        <span class="color-white moon-top-logo-title">
          <img v-if="campusName.indexOf('大连枫叶') > -1" src="~static/img/system-logo-fy.png" style="height: 50px;width: 220px;position: relative; top: -10px;left: -10px">
          <img v-else src="~static/img/system-logo.png" style="height: 50px;width: 220px;position: relative; top: -10px;left: -10px">
        </span>
        <!--<span v-if="campusName != ''" class="color-white moon-top-logo-title animated fadeInLeft">
          <el-avatar shape="square" :size="30" :src="campusLogo" style="margin-left: 2px"></el-avatar>
          <label style="position: relative; top: -10px;">{{campusName}}</label>
        </span>-->
      </div>
      <div class="pull-right moon-top-right">
        <el-popover
          popper-class="custom-user-popover"
          placement="bottom"
          transition="zoom-in-center"
          trigger="hover"
          :visible-arrow="false">

          <div>
            <div class="moon-top-user-info-container">
              <template v-if="loginUserType == 2">
                <div class="moon-top-user-info-item">
                  <i class="fa fa-user-circle"></i>
                  <span>{{loginUserName}}</span>
                </div>
                <div class="moon-top-user-info-item">
                  <i class="fa fa-flag"></i>
                  <span>{{$t("管理员")}}</span>
                </div>
              </template>

              <template v-if="loginUserType == 4">
                <div class="moon-top-user-info-item">
                  <i class="fa fa-user-circle"></i>
                  <span>{{realName}}</span>
                </div>
                <div class="moon-top-user-info-item">
                  <i class="fa fa-id-card"></i>
                  <span>{{userJobNum}}</span>
                </div>
                <!--<div class="moon-top-user-info-item">
                  <i class="fa fa-phone"></i>
                  <span>138****3486</span>
                </div>-->
                <div class="moon-top-user-info-item">
                  <i class="fa fa-users"></i>
                  <span>{{organizeName}}</span>
                </div>
              </template>
            </div>
            <div class="moon-top-user-info-opr">
              <el-row>
                <el-col :span="12" @click.native="updatePhoneInfo">
                  <div>
                    <a href="javascript:;" class="color-white font-size-12">
                      <i class="fa fa-phone"></i>
                      {{$t("修改手机")}}
                    </a>
                  </div>
                </el-col>
                <el-col :span="12" @click.native="updatePwdInfo">
                  <div>
                    <a href="javascript:;" class="color-white font-size-12">
                      <i class="fa fa-lock"></i>
                      {{$t("修改密码")}}
                    </a>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="moon-top-user-info-opr">
              <el-row>
                <el-col :span="24" @click.native="logout">
                  <div>
                    <a href="javascript:;" class="color-white">{{$t("退出")}}</a>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>

          <span slot="reference">
            <label class="moon-top-right-item top-18">
              <el-avatar size="small" v-if="headImage != undefined" :src="headImage"></el-avatar>
              <el-avatar size="small" v-else src="/img/head-boy.png"></el-avatar>
            </label>
            <label class="moon-top-right-item top-6">
              <label class="moon-top-right-item-eliplse" v-if="loginUserType == 2">{{loginUserName}}</label>
              <label class="moon-top-right-item-eliplse" v-if="loginUserType == 4">{{realName}}</label>
            </label>
          </span>
        </el-popover>
      </div>

      <div class="moon-top-middle-menu">
        <div class="moon-top-middle-menu-title">
          <div style="display: inline-block" :style="topWidth">
            <span class="moon-top-middle-menu-item margin-right-20">
              <i class="item fa fa-th" style="font-size: 18px" @click="showMenuList($event)"></i>
            </span>


            <span class="moon-top-middle-menu-item-text" v-for="(item, index) in topMenuList" :key="index" v-if="index < widthIndex && item.show == true" @click="handleTopSelect($event, item)">
              <label class="item" :class="activeTop == item.key ? 'moon-top-middle-menu-item-text-active' : ''">{{item.name}}</label>
            </span>

            <el-popover
              v-if="topMenuList.length > 0 && topMenuList.length > widthIndex && this.topMenuList[parseInt(widthIndex) + 1]"
              v-model="moreVisible"
              popper-class="custom-user-popover custom-more-popover"
              placement="bottom"
              trigger="click"
              :visible-arrow="false"
              :popper-options="{ boundariesElement: '.moon-top-menu', gpuAcceleration: true }">
              <div>
                <ul class="pop-more">
                  <li v-for="(item, index) in topMenuList" :key="index" v-if="index >= widthIndex" @click="handleTopSelect($event, item)">
                    {{item.name}}
                  </li>
                </ul>
              </div>

              <span slot="reference" class="moon-top-middle-menu-item-text-more el-dropdown-link item" style="cursor: default">
                {{$t('更多')}} <i class="el-icon-arrow-down"></i>
              </span>
            </el-popover>

            <span class="moon-top-middle-menu-item-text-plus">
              <label class="item" @click="addMenuItem">
                <i class="fa fa-plus-circle"></i>
              </label>
            </span>
          </div>

          <div class="pull-right">
            <span class="moon-top-middle-menu-info" @click="handeCourse">
              <label v-if="currentDateStatus != null">
                <span class="color-danger">{{currentDateStatus}}</span>
              </label>
              <span v-else>
                <label>
                  <i class="fa fa-calendar"></i>
                </label>

                <el-popover trigger="hover" placement="top">
                  <div class="text-center">{{year}}</div>
                  <label slot="reference" class="name-wrapper moon-top-right-item-eliplse" style="position: relative; top: 4px;">
                    {{year}}
                  </label>
                </el-popover>

                <label>
                  {{$t("第")}}{{weekNum}}{{$t("周")}}
                </label>
                <label>
                  {{weekToText(week)}}
                </label>
              </span>
            </span>
            <span class="moon-top-middle-menu-title-icon">
              <el-badge :is-dot="auditCount > 0" class="item" v-if="loginUserType != 2">
                <i class="fa fa-bookmark" @click="showAuditMsg('LeaveApply')"></i>
              </el-badge>

              <el-badge :is-dot="bellNum > 0" class="item">
                <i class="fa fa-bell-o" @click="showMsg(0)"></i>
              </el-badge>

              <el-badge is-dot hidden class="item">
                <i class="fa fa-refresh" :class="refreshStatus == true ? 'fa-spin' : ''" @click="refreshInit($event)"></i>
              </el-badge>

              <el-badge is-dot hidden class="item">
                <i class="fa fa-cogs" @click="showSet($event)"></i>
              </el-badge>
            </span>
          </div>
          <div class="moon-clearfix"></div>
        </div>
      </div>
      <div class="moon-clearfix"></div>

      <!--消息中心-->
      <div class="drawer-custom-top">
        <el-drawer
          :visible.sync="drawer"
          :direction="direction"
          custom-class="custom-drawer"
          :before-close="handleClose"
          size="100%"
          :with-header="false"
          :modal="false"
          :close-on-press-escape="false"
          :wrapperClosable="false"
          @close="closeModalDrawer">

          <div class="drawer-main">
            <i class="fa fa-close drawer-close" @click="closeDrawer"></i>
            <div class="text-center">
            <span class="drawer-title" :class="tabVal == -1 ? 'drawer-active' : ''" @click="tabChange($event, -1)">
              {{$t("全部")}}
            </span>
              <span class="drawer-title" :class="tabVal == 1 ? 'drawer-active' : ''" @click="tabChange($event, 1)">
              {{$t("已读")}}
            </span>
              <span class="drawer-title" :class="tabVal == 0 ? 'drawer-active' : ''" @click="tabChange($event, 0)">
              {{$t("未读")}}
            </span>
            </div>
            <div class="drawer-item" :style="drawerHeight">
              <div class="padding-lr-10 padding-tb-5">
                <el-card class="margin-bottom-10" shadow="always" v-for="(item,index) in msgList" :key="index" @click.native="showMsgDetail($event,item)">
                  <div v-if="item.extraMap && item.extraMap.applyTypeCode != null">
                    <div>
                      <label>{{$t("来自")}}</label>
                      <label class="color-success" v-if="item.extraMap.userType == 5">{{item.extraMap.className}}</label>
                      <label class="color-success" v-if="item.extraMap.userType == 4">{{item.extraMap.departmentName}}</label>
                      <label class="color-grand">{{item.extraMap.realName}}</label>
                      <label>{{$t("的")}}</label>
                      <label class="color-danger">{{item.extraMap.applyTypeName}}</label>
                    </div>
                    <div class="margin-top-10 color-muted font-size-12">
                      <label>{{$moment(item.create_time).format("YYYY-MM-DD HH:mm")}}</label>
                    </div>
                  </div>
                  <span v-else>
                  <div>
                    <span>{{item.title}}</span>
                  </div>
                  <div class="margin-top-5">
                    <span class="color-muted">{{item.title_desc}}</span>
                  </div>
                  <div class="margin-top-10 color-muted font-size-12">
                    <label>{{$moment(item.create_time).format("YYYY-MM-DD HH:mm")}}</label>
                  </div>
                </span>
                </el-card>
              </div>
            </div>

            <div class="text-right padding-tb-5">
              <my-pagination :total="total" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage"></my-pagination>
            </div>
          </div>
        </el-drawer>
      </div>

      <!--审批中心-->
      <div class="drawer-custom-top">
        <el-drawer
          :visible.sync="drawerAudit"
          :direction="direction"
          custom-class="custom-drawer"
          :before-close="handleClose"
          size="100%"
          :with-header="false"
          :modal="false"
          :close-on-press-escape="false"
          :wrapperClosable="false"
          @close="closeModalDrawer">

          <div class="drawer-main">
            <i class="fa fa-close drawer-close" @click="closeDrawer"></i>
            <div class="text-center">
            <span class="drawer-audit-title" :class="tabVal == 'LeaveApply' ? 'drawer-active' : ''" @click="tabAuditChange($event, 'LeaveApply')">
              {{$t("学生请假")}}
            </span>
              <span class="drawer-audit-title" :class="tabVal == 'TeacherLeaveApply' ? 'drawer-active' : ''" @click="tabAuditChange($event, 'TeacherLeaveApply')">
              {{$t("教工请假")}}
            </span>
              <span class="drawer-audit-title" :class="tabVal == 'PunishmentApply' ? 'drawer-active' : ''" @click="tabAuditChange($event, 'PunishmentApply')">
              {{$t("学工奖惩")}}
            </span>
              <span class="drawer-audit-title" :class="tabVal == 'ScoreApply' ? 'drawer-active' : ''" @click="tabAuditChange($event, 'ScoreApply')">
              {{$t("素质学分")}}
            </span>
              <span class="drawer-audit-title" :class="tabVal == 'DoorOpenApply' ? 'drawer-active' : ''" @click="tabAuditChange($event, 'DoorOpenApply')">
              {{$t("学工门禁")}}
            </span>
              <span class="drawer-audit-title" :class="tabVal == 'TeacherDoorOpenApply' ? 'drawer-active' : ''" @click="tabAuditChange($event, 'TeacherDoorOpenApply')">
              {{$t("教工门禁")}}
            </span>
              <span class="drawer-audit-title" :class="tabVal == 'FacePhotoApply' ? 'drawer-active' : ''" @click="tabAuditChange($event, 'FacePhotoApply')">
              {{$t("人脸识别")}}
            </span>
            </div>
            <div class="drawer-item" :style="drawerHeight">
              <div class="padding-lr-10 padding-tb-5">
                <div v-if="msgAuditList.length <= 0" class="text-center">
                  <span class="color-disabeld">{{$t("暂无数据")}}</span>
                </div>
                <el-card v-else class="margin-bottom-10" shadow="always" v-for="(item,index) in msgAuditList" :key="index" @click.native="showMsgDetail($event,item)">
                  <div>
                    <label>{{$t("来自")}}</label>
                    <label class="color-success" v-if="item.user_type == 5">{{item.class_name}}</label>
                    <label class="color-success" v-if="item.user_type == 4">{{item.department_name}}</label>
                    <label class="color-grand">{{item.real_name}}</label>
                    <label>{{$t("的")}}</label>
                    <label class="color-danger">{{item.str1}}</label>
                    <label>{{$t("申请")}}</label>
                  </div>
                  <div class="margin-top-10 color-muted font-size-12">
                    <label>{{$moment(item.create_time).format("YYYY-MM-DD HH:mm")}}</label>
                  </div>
                </el-card>
              </div>
            </div>

            <div class="text-right padding-tb-5">
              <my-pagination :total="total" @currentPage="currentAuditPage" @sizeChange="sizeAuditChange" @jumpChange="jumpAuditPage"></my-pagination>
            </div>
          </div>
        </el-drawer>
      </div>

      <!--菜单列表-->
      <div class="drawer-custom-top">
        <el-drawer
          tabindex="0"
          :visible.sync="drawerMenu"
          :direction="direction"
          custom-class="custom-drawer"
          :before-close="handleClose"
          size="80%"
          :with-header="false"
          :modal="false"
          :close-on-press-escape="false"
          :wrapperClosable="true"
          :style="topDrawerWidth"
          @open="showDrawderMenuList">
          <span tabindex="1"></span>
          <div class="drawer-main-menu">
            <i class="fa fa-close drawer-menu-close" @click="closeDrawer"></i>
            <div class="drawer-main-menu-left text-center" :style="drawerMenuHeight">
              <div class="drawer-main-menu-left-container">
                <!--drawer-main-menu-left-container-item-active-->
                <div class="drawer-main-menu-left-container-item" :class="activeDialogTop == item.key ? 'moon-top-middle-menu-item-text-drawer-active' : ''" v-for="(item, index) in topMenuAllList" :key="index" @click="handleTopSelect($event, item, 'menuList')">
                  <i :class="item.icon"></i>
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <div class="drawer-main-menu-right" :style="drawerMenuHeight">
              <div class="drawer-main-menu-right-container">
                <div class="drawer-main-menu-right-container-item" v-for="(item, index) in sliderMenuDialogList" :key="item.id">
                  <div class="drawer-main-menu-right-container-item-title">
                    <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                  </div>
                  <div class="drawer-main-menu-right-container-item-list">
                    <div class="drawer-main-menu-right-container-item-list-item" v-for="(itemChild, indexChild) in item.list" :key="itemChild.id">
                      <span @click="routerUrl($event, itemChild, item)">{{itemChild.name}}</span>
                    </div>
                  </div>
                </div>
                <div class="moon-clearfix"></div>
              </div>
            </div>
            <div class="moon-clearfix"></div>
            <!--<div class="drawer-item" :style="drawerHeight">

            </div>-->
          </div>
        </el-drawer>
      </div>

      <!--系统设置-->
      <div class="drawer-custom-top" style="position: relative;">
        <el-drawer
          :visible.sync="drawerSet"
          :direction="direction"
          custom-class="custom-drawer"
          :before-close="handleClose"
          size="100%"
          :with-header="false"
          :modal="false"
          :close-on-press-escape="false"
          :wrapperClosable="true"
          @close="closeModalDrawer">

          <div class="drawer-main-menu">
            <i class="fa fa-close drawer-menu-close" @click="closeDrawer"></i>
            <div class="drawer-main-menu-left text-center" :style="drawerMenuHeight">
              <div class="drawer-main-menu-left-container">
                <div class="drawer-main-menu-left-container-item font-size-14" :class="settingType == 1 ? 'drawer-main-menu-left-container-item-active' : ''" @click="settingTypeOpr($event, 1)">
                  <i class="fa fa-home"></i>
                  <span>{{$t("学校信息")}}</span>
                </div>
                <div class="drawer-main-menu-left-container-item font-size-14" :class="settingType == 2 ? 'drawer-main-menu-left-container-item-active' : ''" @click="settingTypeOpr($event, 2)">
                  <i class="fa fa-info-circle"></i>
                  <span>{{$t("版本信息")}}</span>
                </div>
                <!--<div class="drawer-main-menu-left-container-item font-size-14" :class="settingType == 3 ? 'drawer-main-menu-left-container-item-active' : ''" @click="settingTypeOpr($event, 3)">
                  <i class="fa fa-lock"></i>
                  <span>{{$t("修改手机")}}</span>
                </div>
                <div class="drawer-main-menu-left-container-item font-size-14" :class="settingType == 4 ? 'drawer-main-menu-left-container-item-active' : ''" @click="settingTypeOpr($event, 4)">
                  <i class="fa fa-phone-square"></i>
                  <span>{{$t("修改密码")}}</span>
                </div>-->
              </div>
            </div>
            <div class="drawer-main-menu-right" :style="drawerSetHeight">
              <!--校园信息-->
              <div class="drawer-main-menu-right-container">
                <div id="campus-info" class="campus-info-container" v-if="settingType == 1">
                  <el-form label-width="80px">
                    <el-form-item label="学校名称">
                      <el-input v-model="form.name" class="width-300"></el-input>
                    </el-form-item>
                    <el-form-item label="学校LOGO">
                      <span class="pull-left">
                        <img v-if="form.logo" :src="form.logo" class="avatar">
                      </span>
                      <div class="pull-left margin-left-10">
                        <upload-square :action="uploadFileUrl" max-size="2" :data="{path: 'logo'}" accept=".png,.jpg,.jpeg" @success="uploadFileSuccess">
                          <i class="el-icon-plus avatar-uploader-icon"></i>
                        </upload-square>
                      </div>
                      <div class="moon-clearfix"></div>
                      <div class="moon-tips color-disabeld">
                        <span>{{$t("建议使用png、jpg格式，大小2M以内，建议尺寸: 108*108像素")}}</span>
                      </div>
                    </el-form-item>
                    <el-form-item label="学校地址">
                      <el-input v-model="form.address" class="width-300"></el-input>
                    </el-form-item>
                    <el-form-item label="学校编号">
                      <el-input v-model="form.no" class="width-300"></el-input>
                    </el-form-item>
                    <el-form-item label="负责人">
                      <el-input v-model="form.admin" class="width-300"></el-input>
                    </el-form-item>
                    <el-form-item label="电话">
                      <el-input v-model="form.phone" class="width-300"></el-input>
                    </el-form-item>
                    <el-form-item label="图片列表">
                      <span class="pull-left">
                        <img v-for="(item, index) in form.imgs" :key="index" :src="item.picture_url" fit="fit" style="margin-right: 10px;height: 50px;width:50px"></img>
                      </span>
                      <upload-square class="pull-left margin-left-10" :action="uploadFileListUrl" max-size="5" :data="{path: 'schoolImgList'}" accept=".png,.jpg,.jpeg" @success="uploadImgListFileSuccess">
                        <i class="el-icon-plus avatar-uploader-icon" style="height: 50px;line-height:50px;width: 50px"></i>
                      </upload-square>
                      <div class="moon-clearfix"></div>
                    </el-form-item>
                    <el-form-item label="学校介绍">
                      <quill-block :sel-value="form.remarks" :action="uploadFileUrl" accept=".png,.jpg,.jpeg" max-size="5" :data="{path: 'schoolInfoImg'}" @change="quillChange"></quill-block>
                    </el-form-item>
                  </el-form>

                  <el-button type="primary" class="setting-btn" :loading="loading" circle @click="setSchoolInfo">
                    <!--<i class="el-icon-check"></i>-->
                    {{$t("保存")}}
                  </el-button>
                </div>

                <!--版本信息-->
                <div id="version-info" class="campus-info-container" v-if="settingType == 2">
                  <div>
                    <el-timeline>
                      <el-timeline-item v-for="(item,index) in versionData" :key="index">
                        <el-card :body-style="{padding: '10px'}">
                          <div slot="header" class="clearfix">
                            <span class="font-size-15  color-warning" style="font-weight: bold">{{item.version}}</span>
                            <el-button style="float: right; padding: 3px 0" type="text">{{item.time}}</el-button>
                          </div>

                          <div>
                            <div class="margin-bottom-20" v-for="(itemChild, indexChild) in item.list" :key="indexChild">
                              <div>
                                <span class="font-size-15 color-warning" style="font-weight: bold">{{itemChild.title}}</span>
                              </div>
                              <div class="margin-top-10">
                                <div class="margin-bottom-5" v-for="(itemDesc, indexDesc) in itemChild.desc" :key="indexDesc">
                                  <div class="color-muted font-size-12">
                                    <i class="fa fa-bookmark color-disabeld margin-right-5"></i>
                                    {{itemDesc}}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </el-card>
                      </el-timeline-item>
                    </el-timeline>
                  </div>
                </div>

                <!--修改手机号-->
                <!--<div id="phone-info" class="campus-info-container" v-if="settingType == 3">
                  <el-form label-width="80px">
                    <el-form-item label="旧手机号">
                      <el-input v-model="formPhone.oldPhone" class="width-300"></el-input>
                    </el-form-item>
                    <el-form-item label="新手机号">
                      <el-input v-model="formPhone.newPhone" class="width-300"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码">
                      <el-input class="width-300" placeholder="" v-model="formPhone.phoneCode">
                        <template slot="append">
                          <timeout-button :action="updatePhoneMms" :data="{oldPhone: this.formPhone.oldPhone, newPhone: this.formPhone.newPhone, userId: this.loginUserId}">
                            <template>{{$t("获取验证码")}}</template>
                          </timeout-button>
                        </template>
                      </el-input>
                    </el-form-item>
                  </el-form>

                  <div class="text-center">
                    <el-button type="primary" size="small" :loading="loading" @click="updatePhone">{{$t("保存")}}</el-button>
                  </div>
                </div>-->

                <!--修改密码-->
                <!--<div id="pwd-info" class="campus-info-container" v-if="settingType == 4">
                  <el-form label-width="100px">
                    <el-form-item label="当前手机号">
                      <el-input v-model="formPwd.phone" class="width-300"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码">
                      <el-input class="width-300" placeholder="" v-model="formPwd.phoneCode">
                        <template slot="append">
                          <timeout-button :action="updatePwdMms" :data="{type: 1, username: this.loginUserName, userId: this.loginUserId}">
                            <template>{{$t("获取验证码")}}</template>
                          </timeout-button>
                        </template>
                      </el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                      <el-input v-model="formPwd.pwd" class="width-300"></el-input>
                    </el-form-item>
                  </el-form>

                  <div class="text-center">
                    <el-button type="primary" size="small" :loading="loading" @click="updatePwd">
                      {{$t("保存")}}
                    </el-button>
                  </div>
                </div>-->
              </div>
            </div>
            <div class="moon-clearfix"></div>
          </div>
        </el-drawer>
      </div>
    </div>

    <!--全屏布局-->
    <div v-if="layout == 'full'" :style="fullHeight">
      <nuxt ref="child"></nuxt>
    </div>

    <!--左右布局-->
    <div v-if="layout == 'lr'">
      <div v-if="showContent == false" style="position: relative">
        <layout-lr-before></layout-lr-before>
      </div>

      <div v-if="showContent == true" style="position: relative">
        <div class="moon-left-menu-tag" :style="toggleTag">
          <div class="moon-left-menu-tag-container">
            <div class="moon-left-menu-tag_indicator" @click="isCollapse == true ? toggleLeftMenu($event) : toggleRightMenu($event)">
              <i class="fa fa-chevron-left" :class="isCollapse == true ? 'icon-class-left' : 'icon-class-right'"></i>
            </div>
          </div>
        </div>

        <div class="moon-left-menu" :style="leftHeight">
          <div :style="leftItemHeight">
            <div :class="item.toggle ? 'moon-left-menu-item' : 'moon-left-menu-item-no-toggle'" v-for="(item, index) in sliderMenuList" :key="item.id">
              <div>
                <el-row @click.native="toggleMenu($event, item)">
                  <el-col :span="22">
                    <span class="title">
                      <i :class="item.icon"></i>
                      {{item.name}}
                    </span>
                  </el-col>
                  <el-col :span="2">
                    <div class="icon">
                      <i class="fa fa-angle-double-down" :class="item.toggle ? 'icon-class-up' : 'icon-class-down'"></i>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <el-collapse-transition>
                <div class="moon-left-menu-sub-item" v-show="item.toggle">
                  <ul>
                    <li style="padding-left: 20px" :class="activeSliderIndex == itemChild.key ? 'moon-left-menu-sub-item-active' : ''" v-for="(itemChild, indexChild) in item.list" :key="itemChild.id" @click="routerUrl($event, itemChild, item)">
                      <span>{{itemChild.name}}</span>
                    </li>
                  </ul>
                </div>
              </el-collapse-transition>
            </div>
          </div>

          <div v-show="isCollapse" class="moon-menu-toggle-main" style="right: 0px;">
            <div class="moon-menu-toggle-item">
              <span class="color-grand font-size-12">{{$t('固定菜单栏')}}</span>
              <el-switch
                v-model="menuToggle"
                active-color="#13ce66"
                @change="changeSwitchToggle">
              </el-switch>
            </div>
          </div>
        </div>

        <div class="moon-right-menu" :style="rightWidth">
          <div id="moon-right-item-menu" class="moon-right-item-menu select-none">
            <el-popover
              v-show="!isCollapse"
              v-model="popMenuCollapse"
              placement="bottom-start"
              popper-class="custom-popover-menu"
              width="240"
              :visible-arrow="false"
              trigger="hover"
              class="pull-left margin-right-5">

              <div>
                <div class="moon-right-pop-menu" :style="popMenuHeight">
                  <div :class="item.toggle ? 'moon-left-menu-item' : 'moon-left-menu-item-no-toggle'" v-for="(item, index) in sliderMenuList" :key="item.id">
                    <div>
                      <el-row @click.native="toggleMenu($event, item)">
                        <el-col :span="22">
                      <span class="title">
                        <i :class="item.icon"></i>
                        {{item.name}}
                      </span>
                        </el-col>
                        <el-col :span="2">
                          <div class="icon">
                            <i class="fa fa-angle-double-down" :class="item.toggle ? 'icon-class-up' : 'icon-class-down'"></i>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <el-collapse-transition>
                      <div class="moon-left-menu-sub-item" v-show="item.toggle">
                        <ul>
                          <li style="padding-left: 20px" :class="activeSliderIndex == itemChild.key ? 'moon-left-menu-sub-item-active' : ''" v-for="(itemChild, indexChild) in item.list" :key="itemChild.id" @click="routerUrl($event, itemChild, item)">
                            <span>{{itemChild.name}}</span>
                          </li>
                        </ul>
                      </div>
                    </el-collapse-transition>
                  </div>
                </div>
                <div class="moon-menu-toggle-main">
                  <div class="moon-menu-toggle-item">
                    <span class="color-grand font-size-12">{{$t('固定菜单栏')}}</span>
                    <el-switch
                      v-model="menuToggle"
                      active-color="#13ce66"
                      @change="changeSwitchToggle">
                    </el-switch>
                  </div>
                </div>
              </div>

              <span slot="reference" class="moon-menu-tab">
                <i class="fa fa-indent"></i>
                <label>{{$t("菜单列表")}}</label>
              </span>
            </el-popover>

            <div v-show="menuTabListObj[loginUserId] && menuTabListObj[loginUserId].length != '0'" class="pull-left" style="height: 40px; width: 10px;display: inline-block;background: #f5f5f5;text-align: center;position: relative;z-index: 999" @click="moveTabLeft">
              <span><i class="fa fa-angle-left color-muted"></i></span>
            </div>
            <div v-show="menuTabListObj[loginUserId] && menuTabListObj[loginUserId].length != '0'" class="pull-left" style="height: 40px; width: 10px;display: inline-block;text-align: center;position: relative;z-index: 999;margin-left: 2px" @click="clearTabLeft">
              <span><i class="fa fa-trash color-muted"></i></span>
            </div>
            <div ref="menuTagDiv" id="menuTagDiv" class="pull-left margin-left-5" style="position: relative;overflow-x: hidden;height: 40px;" :style="rightNowWidth">
              <div style="position:absolute;height: 40px;" :style="rightItemAllWidth">
                <span v-if="menuTabListObj[loginUserId]" v-for="(item,index) in menuTabListObj[loginUserId]" :key="index" style="cursor:default;">
                  <el-tag :type="item.menuList && item.menuList.key == $route.query.key ? 'success' : 'info'" closable size="medium"
                          class="margin-right-5"
                          :disable-transitions="false"
                          :effect="item.menuList && item.menuList.key == $route.query.key ? 'dark' : 'plain'"
                          @click="routerUrl($event, item.menuList, item.menuKeyList)"
                          @close="handleTabClose(index)">
                    {{item.menuList ? item.menuList.name : ''}}
                  </el-tag>
                </span>
              </div>
            </div>
            <div v-show="menuTabListObj[loginUserId] && menuTabListObj[loginUserId].length != '0'" class="pull-left" style="height: 40px; width: 10px;display: inline-block;background: #f5f5f5;text-align: center;" :style="isCollapse ? 'right: 15px' : 'right: -2px'" @click="moveTabRight">
              <span><i class="fa fa-angle-right color-muted"></i></span>
            </div>
            <div class="moon-clearfix"></div>
          </div>
          <div class="moon-right-content" :style="rightHeight">
            <Nuxt keep-alive ref="child"/>
          </div>
        </div>
        <div class="moon-clearfix"></div>
      </div>
    </div>

    <!--消息中心使用的右侧层-->
    <drawer-layout-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" :loading="drawerLoading" size="550px" :title="$t('消息详细')" @right-close="cancelDrawDialog">
      <div slot="content">
        <my-audit-detail :type="msgType" :sel-value="dataAudit"></my-audit-detail>
      </div>
      <div slot="footer">
        <audit-button :sel-value="dataAudit" @ok="handleOk" @no="handleNo" @cancel="handleCancel"></audit-button>
      </div>
    </drawer-layout-right>

    <!--课程表右侧-->
    <drawer-layout-right @changeDrawer="closeDrawerDialog" :visible="drawerCourseVisible" size="500px" :title="$t('课程表')" @right-close="cancelDrawDialog">
      <div slot="content">
        <el-calendar v-model="calendarValue" style="margin: -10px;">
          <div
            slot="dateCell"
            slot-scope="{date, data}">
            <!--自定义内容-->
            <div style="position: relative" @click="handleDays($event, data.day)">
              <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
              <div style="position: absolute; right:-8px;top: -8px;" v-for="(item, index) in calendarData">
                <el-tag size="mini" type="success" class="font-size-12" v-if="(item.days).indexOf(data.day.split('-').slice(2)[0])!=-1">{{$t("课")}}</el-tag>
              </div>
            </div>
          </div>
        </el-calendar>

        <div class="margin-top-20">
          <div class="text-center color-disabeld margin-bottom-10">
            <div>{{$t("课程安排")}}</div>
            <div class="font-size-12 color-disabeld margin-top-5">
              <span>{{defaultCourseDay}}</span>
            </div>
          </div>
          <el-timeline>
            <el-timeline-item placement="top" v-for="(item, index) in defaultCourseList" :key="index" :timestamp="`第${item.section}节`">
              <el-card :body-style="{padding: '10px'}">
                <div class="color-muted">
                  <i class="fa fa-clock-o"></i>
                  <span>{{item.sectionInfo ? item.sectionInfo.start_time : ''}}</span>
                </div>
                <div class="color-muted margin-top-5">
                  <i class="fa fa-cube"></i>
                  <span>{{item.course_name}}</span>
                </div>
                <div class="color-muted margin-top-5">
                  <i class="fa fa-home"></i>
                  <span>{{item.class_name}}</span>
                </div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </drawer-layout-right>

    <dialog-normal width-style="400px" :visible="modalMenuCustomVisible" :title="$t('自定义菜单模块')" @close="closeCustomDialog" @right-close="cancelCustomDialog">
      <div class="margin-top-10">
        <el-tree
          ref="customMenuRef"
          class="margin-left-20"
          :data="this.topMenuQuickList"
          show-checkbox
          node-key="key">
        </el-tree>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelCustomDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogCustomLoading == false ? okCustomDialog() : ''">
          <i class="el-icon-loading" v-if="dialogCustomLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <dialog-normal width-style="550px" :visible="modalPhoneCustomVisible" :title="$t('修改手机')" @close="closeCustomDialog" @right-close="cancelCustomDialog">
      <el-form :model="formPhone" :rules="rulesPhone" ref="formPhone" label-width="140px">
        <el-form-item label="提示" style="margin-bottom: 5px !important;">
          <label>{{formPhone.hidePhone}}</label>
        </el-form-item>
        <el-form-item label="旧手机号" prop="oldPhone">
          <el-input v-model="formPhone.oldPhone" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="新手机号" prop="newPhone">
          <el-input v-model="formPhone.newPhone" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="phoneCode">
          <el-input class="width-300" placeholder="" v-model="formPhone.phoneCode">
            <template slot="append">
              <timeout-button :action="updatePhoneMms" :data="{oldPhone: this.loginUserPhone, newPhone: this.formPhone.newPhone, userId: this.loginUserId}">
                <template>{{$t("获取验证码")}}</template>
              </timeout-button>
            </template>
          </el-input>
        </el-form-item>
      </el-form>

      <div slot="footer">
        <el-button size="small" @click="cancelCustomDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogCustomLoading == false ? updatePhone() : ''">
          <i class="el-icon-loading" v-if="dialogCustomLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <dialog-normal width-style="550px" :visible="modalPwdCustomVisible" :title="$t('修改密码')" @close="closeCustomDialog" @right-close="cancelCustomDialog">
      <el-form :model="formPwd" :rules="rulesPwd" ref="formPwd" label-width="140px">
        <el-form-item label="当前手机号">
          <el-input :disabled="true" v-model="formPwd.phone" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="phoneCode">
          <el-input class="width-300" placeholder="" v-model="formPwd.phoneCode">
            <template slot="append">
              <timeout-button :action="updatePwdMms" :data="{type: 1, username: this.loginUserName, userId: this.loginUserId}">
                <template>{{$t("获取验证码")}}</template>
              </timeout-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="formPwd.pwd" class="width-300"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer">
        <el-button size="small" @click="cancelCustomDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogCustomLoading == false ? updatePwd() : ''">
          <i class="el-icon-loading" v-if="dialogCustomLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>
  </div>
</template>

<script>
  import mixins from '../utils/mixins';
  import MyPagination from "../components/MyPagination";
  import DrawerLayoutRight from "../components/utils/dialog/DrawerLayoutRight";
  import MyAuditDetail from "../components/utils/auditDetail/MyAuditDetail";
  import AuditButton from "../components/utils/auditDetail/AuditButton";
  import TimeoutButton from "../components/utils/button/TimeoutButton";
  import UploadSquare from "../components/utils/upload/UploadSquare";
  import QuillBlock from "../components/utils/upload/QuillBlock";
  import LayoutLrBefore from "../components/Layout/LayoutLrBefore";
  import DialogNormal from "../components/utils/dialog/DialogNormal";
  import {auditStatusColor, weekNoText, MessageSuccess, MessageError, MessageWarning, inArray} from "../utils/utils";
  import {common} from "../utils/api/url";
  import defaultCustomValidater from "../utils/validater/defaultCustomValidater";
  export default {
    name: 'default',
    mixins: [mixins,defaultCustomValidater],
    components: {MyPagination, DrawerLayoutRight,MyAuditDetail,AuditButton,TimeoutButton,UploadSquare,LayoutLrBefore,DialogNormal},
    computed: {

    },
    data(){
      return {
        layout: 'lr',
        activeTabName: 'all',
        menuTabList: [],
        showContent: false,
        showMenu: false,
        isCollapse: true,
        drawer: false,
        drawerAudit: false,
        drawerMenu: false,
        drawerSet: false,
        refreshStatus: false,
        menuToggle: true,
        popMenuCollapse: false,
        drawerVisible: false,
        drawerCourseVisible: false,
        drawerLoading: false,
        moreVisible: false,
        modalMenuCustomVisible: false,
        dialogCustomLoading: false,
        modalPhoneCustomVisible: false,
        modalPwdCustomVisible: false,
        showMore: false,
        settingType: 1,
        direction: 'ttb',
        screenWidth: 0,
        activeIndex: '1',
        activeSliderIndex: '',
        topMenuList: [],
        menuTabListObj: {},
        topMenuAllList: [],
        topMenuQuickList: [],
        sliderMenuList: [],
        sliderMenuDialogList: [],
        clickType: '',
        tabVal: '0',
        activeSlider: '',
        activeTop: '',
        activeDialogTop: '',
        activeSubSlider: '',
        widthIndex: 0,
        year: '',
        courseYear: this.$moment(new Date()).format("YYYY"),
        courseMonth: this.$moment(new Date()).format("MM"),
        courseDay: this.$moment(new Date()).format("DD"),
        weekNum: '',
        week: '',
        bellNum: 0,
        auditNum: 0,
        msgList: [],
        msgAuditList: [],
        loading: false,
        menuLoading: false,
        msgType: '',
        calendarValue: new Date(),
        dataAudit: {},
        objectId: '',
        auditObjectItem: {},
        updatePhoneMms: common.updatephone_admin_save,
        updatePwdMms: common.updatepwd_admin_save,
        uploadFileUrl: common.upload_file,
        uploadFileListUrl: common.upload_imglist_file,
        calendarData: [],
        defaultCourseList: [],
        checkedMenuList: [],
        defaultCourseDay: '',
        rightNowWidth: {
          width: '0px'
        },
        rightItemAllWidth: {
          width: '0px'
        },
        topWidth: {
          width: '0px'
        },
        topDrawerWidth: {
          width: '0px'
        },
        leftHeight: {
          'height': '',
          'width': '200px'
        },
        leftItemHeight: {
          'height': '',
          'overflow-y': 'auto'
        },
        rightHeight: {
          'height': ''
        },
        rightWidth: {
          'marginLeft': '220px'
        },
        drawerHeight: {
          'height': '',
          'overflow-y': 'auto'
        },
        drawerMenuHeight: {
          'height': '',
          'overflow-y': 'auto'
        },
        drawerSetHeight: {
          'height': '',
          'overflow-y': 'auto'
        },
        popMenuHeight: {
          'height': '',
          'overflow-y': 'auto'
        },
        fullHeight: {
          'height': '',
          'overflow-y': 'auto'
        },
        toggleTag: {

        },
        form: {
          name: '',
          logo: '',
          admin: '',
          phone: '',
          address: '',
          no: '',
          remarks: '',
          imgs: []
        },
        formPhone: {
          hiePhone: '',
          oldPhone: '',
          newPhone: '',
          phoneCode: '',
        },
        formPwd: {
          phone: '',
          phoneCode: '',
          pwd: ''
        },
        setData: {},
      }
    },
    mounted () {
      let rightWidth = this.loginUserType == 2 ? 400 : 410;
      this.screenWidth = document.body.clientWidth;
      let width = document.querySelector(".moon-top-middle-menu-title").clientWidth;
      this.topWidth.width = width - rightWidth + 'px';
      this.topDrawerWidth.width = width + 'px';
      this.widthIndex = (width - rightWidth) / 110 -2;
      // 监听窗口大小
      window.onresize = () => {
        this.getMenuTabWdith();
        this.hh();
        if (document.querySelector(".moon-top-middle-menu-title")){
          width = document.querySelector(".moon-top-middle-menu-title").clientWidth;
          return (() => {
            this.screenWidth = document.body.clientWidth;
            this.topWidth.width = width - rightWidth + 'px';
            this.widthIndex = (width - rightWidth) / 110 - 2;
          })()
        }
      };

      //浏览器关闭
      let beginTime = 0;//执行onbeforeunload的开始时间
      let differTime = 0;//时间差
      window.addEventListener("unload", () => {
        differTime = new Date().getTime() - beginTime;
        if(differTime <= 5) {
          localStorage.removeItem("menuTabList");
        }
      });
      window.addEventListener('beforeunload', e => {
        beginTime = new Date().getTime();
        var n = e.screenX - window.screenLeft;
        var b = n > document.documentElement.scrollWidth-20;
        if(b && e.clientY < 0 || e.altKey)
        {
          console.log("是关闭而非刷新");
        }
      });

      this.getMenuTabWdith();

      this.showContent = true;
    },
    beforeCreate: function(){
      this.showContent = false;
    },
    created() {
      if (this.$route.name == "index" || this.$route.name == null){
        this.layout = "full";
      }
      this.hh();
      this.init();
      this.getBell();
      this.activeIndex = this.$route.query.top;
      this.activeTop = this.$route.query.top;
      this.activeSliderIndex = this.$route.query.key;
      this.activeSubSlider = this.$route.query.sub;
    },
    methods: {
      hh(){
        if (process.browser) {
          this.leftHeight.height = window.innerHeight - 60 + 'px';
          this.fullHeight.height = window.innerHeight - 60 + 'px';
          this.leftItemHeight.height = window.innerHeight - 105 + 'px';
          this.rightHeight.height = window.innerHeight - 60 - 40 + 'px';
          this.drawerHeight.height = window.innerHeight - 60 - 120 + 'px';
          this.drawerMenuHeight.height = window.innerHeight - 60 + 'px';
          this.drawerSetHeight.height = window.innerHeight - 60 + 'px';
          this.popMenuHeight.height = window.innerHeight - 60 - 100 + 'px';
        }
      },
      getLocastorage(){
        if (process.client){
          let menuTabList = localStorage.getItem("menuTabList");
          if (menuTabList){
            this.menuTabListObj = JSON.parse(menuTabList);
          }
        }
        if (this.menuTabListObj[this.loginUserId]){
          this.$set(this.rightItemAllWidth,'width', this.menuTabListObj[this.loginUserId].length * 135 +'px');
        }else {
          this.$set(this.rightItemAllWidth,'width', 0 * 135 +'px');
        }
      },
      getMenuTabWdith(){
        //获取menuTab的宽度
        this.$nextTick(() => {
          let menuTabWidth = document.querySelector("#menuTagDiv") ? document.querySelector("#menuTagDiv").clientWidth : 0;
          let menuRightWidth = document.querySelector(".moon-right-menu") ? document.querySelector(".moon-right-menu").clientWidth : 0;
          let menuPopMenu = 140;
          let rightNowWidth = menuRightWidth;
          if (!this.isCollapse){
            rightNowWidth = menuRightWidth - menuPopMenu;
          }else {
            rightNowWidth = menuRightWidth - 48;
          }
          this.rightNowWidth.width = rightNowWidth + "px";
        });
      },
      moveTabRight(){
        let scrollWith =  document.querySelector("#menuTagDiv").scrollWidth;
        document.getElementById("menuTagDiv").scrollLeft += 135;
      },
      moveTabLeft(){
        let scrollWith =  document.querySelector("#menuTagDiv").scrollWidth;
        document.getElementById("menuTagDiv").scrollLeft -= 135;
      },
      clearTabLeft(){
        if (process.client){
          let menuTabList = localStorage.getItem("menuTabList");
          if (menuTabList){
            this.menuTabListObj = JSON.parse(menuTabList);
          }
        }
        if (this.menuTabListObj[this.loginUserId]){
          delete this.menuTabListObj[this.loginUserId];
          localStorage.setItem("menuTabList", JSON.stringify(this.menuTabListObj));
        }
      },
      async init() {
        await this.getSessionInfo();
        await this.getCurrentWeekInfo(this.campusId);
        await this.getNoReadNum();
        this.initCourseDate(this.loginUserId);
        await this.initVersionData();
        this.year = this.currentYear;
        this.weekNum = this.currentWeekNum;
        this.week = this.currentWeekNo;
        this.updatePhoneMms = this.loginUserType == 2 ? common.updatephone_admin_save : common.updatephone_teacher_save;
        this.updatePwdMms = this.loginUserType == 2 ? common.updatepwd_admin_save : common.updatepwd_mms;
        this.getTopMenu();
        this.getSliderMenu(this.activeTop, 'init');
        //获取menuTab
        this.getLocastorage();
      },
      test1() {
      },
      handleTopSelect(event, item, type) {
        this.drawerAudit = false;
        this.drawerSet = false;
        this.drawer = false;
        this.moreVisible = false;
        if (type == "menuList"){
          this.drawerMenu = true;
        }else{
          this.drawerMenu = false;
        }
        this.getSliderMenu(item.key, 'click', type);
      },
      getTopMenu(){
        /*this.$axios.get('/json/topMenu.json').then(res => {
          this.topMenuAllList = res.data;
          for (let i = 0; i < res.data.length; i++){
            res.data[i]['label'] = res.data[i].name;
            if (res.data[i].show){
              this.topMenuList.push(res.data[i]);
            }
          }
        })*/
        this.checkedMenuList = [];
        let params = {
          campusName: this.campusName
        };
        this.$axios.get('https://campus.9451.com/campusmanage/appapi/system-menu', {params: params}).then(res => {
          let menuArr = [];
          this.topMenuList = [];
          if (res.data.data){
            for (let i = 0; i < res.data.data.length; i++){
              menuArr.push(res.data.data[i].key);
              res.data.data[i]['label'] = res.data.data[i].name;
            }

            let params = {
              menuNo: menuArr.join()
            };
            //获取角色拥有的所有列表
            if (this.loginUserType == 2){//超级管理员
              this.topMenuQuickList = res.data.data;//快捷列表
              this.topMenuAllList = res.data.data;//所有列表
              this.$axios.get(common.menuno_quick_list, {params: params}).then(resCustom => {
                if (resCustom.data.code != 200){
                  return;
                }
                if (resCustom.data.data){
                  for (let i = 0; i < res.data.data.length; i++){
                    for (let j = 0; j < resCustom.data.data.length; j++) {
                      if (resCustom.data.data[j].menu_no == res.data.data[i].key) {
                        res.data.data[i]['show'] = true;
                        res.data.data[i]['label'] = res.data.data[i].name;
                        this.topMenuList.push(res.data.data[i]);
                        this.checkedMenuList.push(resCustom.data.data[j].menu_no);
                      }
                    }
                  }
                }
              });
            }else if(this.loginUserType == 4){//教师
              let menuTopArr = [];
              let menuTopQuickArr = [];
              this.$axios.get(common.menuno_role_list, {params: params}).then(resRole => {
                if (resRole.data.code != 200){
                  return;
                }
                if (resRole.data.data){
                  for (let i = 0; i < res.data.data.length; i++){
                    for (let j = 0; j < resRole.data.data.length; j++){
                      let indexOfKey = inArray(res.data.data[i], menuTopArr, 'key');
                      if (resRole.data.data[j].menu_no == res.data.data[i].key && indexOfKey == -1){
                        menuTopQuickArr.push(res.data.data[i].key);
                        menuTopArr.push({
                          name: res.data.data[i].name,
                          label: res.data.data[i].name,
                          key: res.data.data[i].key,
                        });
                        continue;
                      }
                    }
                  }

                  let params = {
                    menuNo:menuTopQuickArr.join()
                  };
                  this.$axios.get(common.menuno_quick_list, {params: params}).then(resCustom => {
                    if (resCustom.data.data){
                      for (let i = 0; i < menuTopArr.length; i++){
                        for (let j = 0; j < resCustom.data.data.length; j++) {
                          if (resCustom.data.data[j].menu_no == menuTopArr[i].key) {
                            menuTopArr[i]['show'] = true;
                            menuTopArr[i]['label'] = menuTopArr[i].name;
                            this.topMenuList.push(menuTopArr[i]);
                            this.checkedMenuList.push(resCustom.data.data[j].menu_no);
                          }
                        }
                      }
                    }
                  });

                  if (this.$route.query.top){
                    let indexTopArr = [{key: this.$route.query.top}];
                    let indexTop = inArray(indexTopArr[0], menuTopArr, 'key');
                    if (indexTop == -1){
                      MessageWarning(this.$t("检测到您没有权限访问该模块，请联系管理员"));
                      this.$router.push("/");
                    }
                  }

                  this.topMenuAllList = menuTopArr;//所有列表
                  this.topMenuQuickList = menuTopArr;//快捷列表
                }
              });
            }
          }
        });
      },
      getSliderMenu(key, type, subType){
        if (subType != "menuList"){
          this.activeTop = key;
        }else {
          this.activeDialogTop = key;
        }
        let roleGroupArr = [];
        let menuList = [];

        this.menuLoading = true;
        this.$axios.get('/json/sliderMenu.json').then(res => {
          let params = {
            campusName: this.campusName
          };
          this.$axios.get('https://campus.9451.com/campusmanage/appapi/system-menu', {params: params, loading: false}).then(resAll => {
              let menuArr = [];
              if (resAll.data.data) {
                for (let i = 0; i < resAll.data.data.length; i++) {
                  menuArr.push(resAll.data.data[i].key);
                }

                let params = {
                  menuNo: menuArr.join()
                };

                this.$axios.get(common.menuno_role_list, {params: params}).then(resSub => {
                  if (resSub.data.code != 200){
                    return;
                  }
                  if (resSub.data.data){
                    for (let i = 0; i < resSub.data.data.length; i++){
                      if (resSub.data.data[i].menu_no == key && resSub.data.data[i].level == 1){
                        let indexMenu = inArray(resSub.data.data[i], roleGroupArr, 'id');
                        if (indexMenu == -1){
                          roleGroupArr.push({
                            name: resSub.data.data[i].name,
                            key: resSub.data.data[i].menu_no,
                            id: resSub.data.data[i].id,
                            list: []
                          });
                        }
                      }
                    }

                    for (let i = 0; i < roleGroupArr.length; i++) {
                      for (let j = 0; j < res.data.length; j++){
                        if (key == res.data[j].key) {
                          for (let z = 0; z < res.data[j].list.length; z++){
                            if (roleGroupArr[i].id == res.data[j].list[z].id){
                              roleGroupArr[i]['name'] = res.data[j].list[z].name;
                              roleGroupArr[i]['icon'] = res.data[j].list[z].icon;
                              roleGroupArr[i]['toggle'] = res.data[j].list[z].toggle;
                              roleGroupArr[i]['key'] = res.data[j].list[z].key;
                              roleGroupArr[i]['keySub'] = res.data[j].list[z].keySub;
                              roleGroupArr[i]['list'] = res.data[j].list[z].list;
                            }
                          }

                          menuList = [];
                          for (let k = 0; k < resSub.data.data.length; k++){
                            if (this.loginUserType == 2){
                              if (resSub.data.data[k].pId == roleGroupArr[i].id && resSub.data.data[k].level == 2){
                                for (let h = 0; h < roleGroupArr[i]['list'].length; h++){
                                  if (roleGroupArr[i]['list'][h].id == resSub.data.data[k].id){
                                    menuList.push({
                                      name: roleGroupArr[i]['list'][h].name,
                                      key: roleGroupArr[i]['list'][h].key,
                                      id: roleGroupArr[i]['list'][h].id,
                                      top: roleGroupArr[i]['list'][h].top,
                                      path: roleGroupArr[i]['list'][h].path
                                    });
                                  }
                                }
                              }
                            }else if (this.loginUserType == 4){
                              if (resSub.data.data[k].parent_id == roleGroupArr[i].id && resSub.data.data[k].level == 2){
                                for (let h = 0; h < roleGroupArr[i]['list'].length; h++){
                                  if (roleGroupArr[i]['list'][h].id == resSub.data.data[k].id){
                                    menuList.push({
                                      name: roleGroupArr[i]['list'][h].name,
                                      key: roleGroupArr[i]['list'][h].key,
                                      id: roleGroupArr[i]['list'][h].id,
                                      top: roleGroupArr[i]['list'][h].top,
                                      path: roleGroupArr[i]['list'][h].path
                                    });
                                  }
                                }
                              }
                            }
                          }
                          roleGroupArr[i]['list'] = menuList;
                        }
                      }
                    }
                  }

                  if (type == 'init' || subType == 'menuList'){
                    this.sliderMenuDialogList = roleGroupArr;
                  }else{
                    this.sliderMenuList = roleGroupArr;
                  }

                  if (type == 'init'){
                    this.sliderMenuList = roleGroupArr;
                  }

                  for (let i = 0; i < roleGroupArr.length; i++){
                    if (type == "click" && subType != 'menuList'){
                      this.$router.push({
                        path: this.sliderMenuList[0].list[0].path,
                        query: {
                          top: this.sliderMenuList[0].list[0].top,
                          key: this.sliderMenuList[0].list[0].key,
                          sub: this.sliderMenuList[0].key
                        }
                      });


                      let tabArr = this.inArrayPrivateObj(this.sliderMenuList[0].list[0].id, this.menuTabListObj[this.loginUserId]);
                      if (tabArr != -1){
                        document.getElementById("menuTagDiv").scrollLeft = tabArr * 80;
                      }
                    }
                    break;
                  }
                  this.setSliderSubToggle();

                  if (this.$route.query.top){
                    let indexTopArr = [{keySub: key}];
                    let indexTop = inArray(indexTopArr[0], roleGroupArr, 'keySub');
                    if (this.$route.query.top && indexTop == -1){
                      MessageWarning(this.$t("检测到您没有权限访问该模块，请联系管理员"));
                      this.$router.push("/");
                      return;
                    }
                  }


                  this.menuLoading = false;
                });
              }
          });

          /*for (let i = 0; i < res.data.length; i++){
            if (key == res.data[i].key){
              this.sliderMenuList = res.data[i].list;
              if (type == "click"){
                this.$router.push({
                  path: this.sliderMenuList[0].list[0].path,
                  query: {
                    top: this.sliderMenuList[0].list[0].top,
                    key: this.sliderMenuList[0].list[0].key,
                    sub: this.sliderMenuList[0].key
                  }
                });
              }
              break;
            }
          }*/
          //this.setSliderSubToggle();
        });
      },
      setSliderSubToggle(){
        for (let i = 0; i < this.sliderMenuList.length; i++){
          if (this.sliderMenuList[i].key == this.activeSubSlider){
            this.sliderMenuList[i].toggle = true;
          }
        }
      },
      routerUrl(event, item, itemSub){
        //设置tab
        //let tabArr = this.inArrayPrivate(item.id, this.menuTabList);
        let tabArr = this.inArrayPrivateObj(item.id, this.menuTabListObj[this.loginUserId]);
        if (tabArr == -1){
          /*this.menuTabList.push({
            menuList: item,
            menuKeyList: itemSub
          });*/
          if (Object.keys(this.menuTabListObj).length == 0 || !this.menuTabListObj[this.loginUserId] || Object.keys(this.menuTabListObj[this.loginUserId]).length == 0){
            this.menuTabListObj[this.loginUserId] = [];
            this.menuTabListObj[this.loginUserId].push(
              {
                menuList: item,
                menuKeyList: itemSub
              }
            );
          }else {
            this.menuTabListObj[this.loginUserId].push(
              {
                menuList: item,
                menuKeyList: itemSub
              }
            );
          }
          let width = parseInt(this.rightItemAllWidth.width.substr(0,this.rightItemAllWidth.width.length-2)) + 135;
          this.$set(this.rightItemAllWidth,'width', width +'px');
          if (document.getElementById("menuTagDiv")){
            document.getElementById("menuTagDiv").scrollLeft = width;
          }
        }else {
          if (document.getElementById("menuTagDiv")){
            document.getElementById("menuTagDiv").scrollLeft = tabArr * 80;
          }
        }

        localStorage.setItem("menuTabList", JSON.stringify(this.menuTabListObj));

        this.activeSliderIndex = item.key;
        this.activeSubSlider = itemSub.key;
        this.$router.push({
          path: item.path,
          query: {
            top: item.top,
            key: item.key,
            sub: itemSub.key
          }
        });
        this.popMenuCollapse = false;
        this.drawerMenu = false;
      },
      toggleMenu(event, item){
        item.toggle = !item.toggle;
      },
      showMsg(type){
        let params = {
          page: this.page,
          num: this.num,
          actionGroup: 1,
          readed: type == -1 ? '' : type
        };
        this.tabVal = type;
        params = this.$qs.stringify(params);
        setTimeout(() => {
          this.$axios.post(common.msgRead_list, params).then(res => {
            if (res.data.code == 200){
              this.msgList = res.data.data.list;
              this.total = res.data.data.totalCount;
            }
            this.loading = false
          });
        },800);
        this.drawer = true;
      },
      refreshInit(event){
        let _self = this;
        this.refreshStatus = true;
        if(this.$refs.child.$children[0].init){
          this.$refs.child.$children[0].init();//设置子页面的函数
        }
        setTimeout(() => {
          this.refreshStatus = false;
        },2000);
      },
      showAuditMsg(type){
        let params = {
          page: this.page,
          num: this.num,
          applyTypeCode: type,
          hasHandle: false
        };
        this.tabVal = type;
        setTimeout(() => {
          this.$axios.get(common.msg_audit_list, {params: params}).then(res => {
            if (res.data.code == 200){
              this.msgAuditList = res.data.data.list;
              this.total = res.data.data.totalCount;
            }
            this.loading = false
          });
        },800);
        this.drawerAudit = true;
      },
      showMenuList(){
        this.drawerMenu = true;
      },
      showSet(){
        setTimeout(() => {
          this.getSchoolInfo();
        },800);
        this.drawerSet = true;
      },
      handleClose(done) {
        done();
      },
      handleTabClose(index){
        this.menuTabListObj[this.loginUserId].splice(index, 1);
        let width = parseInt(this.rightItemAllWidth.width.substr(0,this.rightItemAllWidth.width.length-2)) - 135;
        this.$set(this.rightItemAllWidth,'width', width +'px');
        localStorage.setItem("menuTabList", JSON.stringify(this.menuTabListObj));
      },
      tabChange(event, type){
        this.tabVal = type;
        this.showMsg(type);
      },
      tabAuditChange(event, type){
        this.tabVal = type;
        this.showAuditMsg(type);
      },
      closeDrawer(){
        this.drawer = false;
        this.drawerAudit = false;
        this.drawerMenu = false;
        this.drawerSet = false;
      },
      toggleLeftMenu(event){
        this.isCollapse = false;
        this.popMenuCollapse = false;
        this.menuToggle = false;
        this.rightWidth.marginLeft = "0px";
        this.leftHeight.width = "0px";
        this.leftHeight['padding'] = "0px";
        this.toggleTag['left'] = "0px";
        this.getMenuTabWdith();
      },
      toggleRightMenu(event){
        this.isCollapse = true;
        this.popMenuCollapse = false;
        this.menuToggle = true;
        this.rightWidth.marginLeft = "220px";
        this.leftHeight.width = "200px";
        this.leftHeight['padding'] = "10px";
        this.toggleTag['left'] = "220px";
        this.getMenuTabWdith();
      },
      settingTypeOpr(event, type){
        this.settingType = type;
        this.closeModalDrawer();
        if (type == 1){
          this.getSchoolInfo();
        }
      },
      changeSwitchToggle(event){
        if (event == true){
          this.menuToggle = true;
          this.toggleRightMenu();
        }else if (event == false){
          this.menuToggle = false;
          this.toggleLeftMenu();
        }
      },
      weekToText(val){
        return weekNoText(val);
      },
      getBell(){
        this.$axios.post(common.noread_num).then(res => {
          if (res.data.code == 200){
            this.bellNum = res.data.data;
          }
        });
      },
      currentPage(event){
        this.page = event;
        this.showMsg(this.tabVal);
      },
      sizeChange(event){
        this.page = 1;
        this.num = event;
        this.showMsg(this.tabVal);
      },
      jumpPage(data){
        this.page = data;
        this.showMsg(this.tabVal);
      },
      currentAuditPage(event){
        this.page = event;
        this.showAuditMsg(this.tabVal);
      },
      sizeAuditChange(event){
        this.page = 1;
        this.num = event;
        this.showAuditMsg(this.tabVal);
      },
      jumpAuditPage(data){
        this.page = data;
        this.showAuditMsg(this.tabVal);
      },
      closeModalDrawer(){
        this.page = 1;
        this.num = 20;
        this.total = 0;
        this.msgList = [];
        this.msgAuditList = [];
        this.tabVal = 0;
        this.form = {
          name: '',
          logo: '',
          admin: '',
          phone: '',
          address: '',
          no: '',
          remarks: '',
          imgs: []
        };
        this.formPhone = {
          oldPhone: '',
          newPhone: '',
          phoneCode: '',
        };
        this.formPwd = {
          phone: '',
          phoneCode: '',
          pwd: ''
        };
      },
      showMsgDetail(event, item){
        let params = {
          id:item.object_id ? item.object_id : item.id
        };
        this.auditObjectItem = item;
        this.$axios.get(common.msg_detail_center, {params: params}).then(res => {
          if (res.data.code == 200){
            this.dataAudit = res.data.data;
            this.msgType = res.data.data.apply_type_code;
            this.drawerVisible = true;
            this.setRead(item);
          }else {
            MessageWarning(res.data.desc);
          }
        });
      },
      setRead(item){
        let params = {
          msgId:item.id,
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.msg_readed, params).then(res => {
          if (res.data.code == 200){
            this.showMsg(this.tabVal);
          }
        });
      },
      closeDrawerDialog(event){
        this.msgType = '';
        this.auditObjectItem = {};
        this.defaultCourseDay = '';
        this.drawerVisible = event;
        this.drawerCourseVisible = event;
      },
      cancelDrawDialog(){
        this.defaultCourseDay = '';
        this.drawerVisible = false;
        this.drawerCourseVisible = false;
      },
      handleOk(data,textarea){
        let params = {
          applyId: this.auditObjectItem.object_id ? this.auditObjectItem.object_id : this.auditObjectItem.id,
          status: 1,
          des2: textarea
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.msg_handle, params).then(res => {
          if (res.data.code == 200){
            this.showMsgDetail(null, this.auditObjectItem);
            if (this.auditObjectItem.object_id){
              this.showMsg(this.tabVal);
            }else {
              this.showAuditMsg(this.tabVal);
            }
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      },
      handleNo(data,textarea){
        let params = {
          applyId: this.auditObjectItem.object_id ? this.auditObjectItem.object_id : this.auditObjectItem.id,
          status: 2,
          des2: textarea
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.msg_handle, params).then(res => {
          if (res.data.code == 200){
            this.showMsgDetail(null, this.auditObjectItem);
            if (this.auditObjectItem.object_id){
              this.showMsg(this.tabVal);
            }else {
              this.showAuditMsg(this.tabVal);
            }
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      },
      handleCancel(data){
        let params = {
          applyId: this.auditObjectItem.object_id ? this.auditObjectItem.object_id : this.auditObjectItem.id,
          status: -1
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.msg_handle, params).then(res => {
          if (res.data.code == 200){
            this.showMsgDetail(null, this.auditObjectItem);
            if (this.auditObjectItem.object_id){
              this.showMsg(this.tabVal);
            }else {
              this.showAuditMsg(this.tabVal);
            }
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      },
      updatePhoneInfo(){
        if (this.loginUserPhone && this.loginUserPhone != ""){
          let phone = this.loginUserPhone;
          this.formPhone.hidePhone = phone.substr(0,3)+"****"+phone.substr(7);
        }
        this.modalPhoneCustomVisible = true;
      },
      updatePwdInfo(){
        if (this.loginUserPhone && this.loginUserPhone != ""){
          let phone = this.loginUserPhone;
          this.formPwd.phone = phone.substr(0,3)+"****"+phone.substr(7);
        }
        this.modalPwdCustomVisible = true;
      },
      updatePhone(){
        this.$refs['formPhone'].validate((valid) => {
          if (valid) {
            let params = {};
            let url = "";
            if (this.loginUserType == 4){
              params = {
                phone: this.formPhone.oldPhone,
                captcha: this.formPhone.phoneCode,
                userId: this.loginUserId,
                username: this.loginUserName,
                appcode: 12,
              };
              url = common.updatephone_save;
            }else{
              params = {
                newPhone: this.formPhone.newPhone,
                captcha: this.formPhone.phoneCode,
                phone: this.loginUserPhone,
              };
              url = common.updatephone_admin_save_url;
            }
            params = this.$qs.stringify(params);
            this.loading = true;
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.modalPhoneCustomVisible = false;
                MessageSuccess(res.data.desc);
              }else{
                MessageWarning(res.data.desc);
              }
              this.loading = false;
            });
          }
        });
      },
      updatePwd(){
        this.$refs['formPwd'].validate((valid) => {
          if (valid) {
            let url = common.updatepwd_admin_save_pass;
            let params = {
              pass: this.formPwd.pwd,
              captcha: this.formPwd.phoneCode
            };
            if (this.loginUserType == 4){
              params = {
                userId: this.loginUserId,
                password: this.formPwd.pwd,
                appcode: 12,
                captcha: this.formPwd.phoneCode
              };
              url = common.updatepwd_save;
            }
            params = this.$qs.stringify(params);
            this.loading = true;
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                MessageSuccess(res.data.desc);
              }else{
                MessageWarning(res.data.desc);
              }
              this.loading = false;
            });
          }
        });
      },
      getSchoolInfo(){
        this.$axios.get(common.school_info).then(res => {
          if (res.data.code == 200){
            let school = res.data.data.school;
            let schoolInfo = res.data.data.schoolInfo;
            this.form = {
              name: school.name,
              logo: school.logo,
              admin: schoolInfo.responsiblePersonName,
              phone: schoolInfo.phone,
              address: schoolInfo.address,
              no: school.campusNo,
              remarks: schoolInfo.description,
              imgs: res.data.data.imgList
            };
          }
        });
      },
      uploadFileSuccess(res,file){
        if (res.code == 200){
          this.form.logo = res.data.url;
        }else {
          MessageWarning(res.desc);
        }
      },
      uploadImgListFileSuccess(res,file){
        if (res.code == 200){
          this.form.imgs.push({
            id: res.data.id,
            picture_url: res.data.pictureUrl,

          });
        }else {
          MessageWarning(res.desc);
        }
      },
      quillSuccess(res,file){

      },
      quillChange(data){
        //this.form.remarks = data.text;
        this.form.remarks = data.html;
      },
      setSchoolInfo(){
        let params = {
          responsiblePersonName: this.form.admin,
          phone: this.form.phone,
          address: this.form.address,
          description: this.form.remarks,
          campusNo: this.form.no
        };
        params = this.$qs.stringify(params);
        this.loading = true;
        this.$axios.post(common.update_school_info, params).then(res => {
          if (res.data.code == 200){
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.loading = false;
        });
      },
      handeCourse(){
        let currentDay = this.$moment(new Date()).format("YYYY-MM-DD");
        setTimeout(()=>{
          this.$nextTick(() => {
            if (process.client){
              // 点击前一个月
              let prevBtn = document.querySelector(
                ".el-calendar__button-group .el-button-group>button:nth-child(1)"
              );
              prevBtn.addEventListener("click", e => {
                this.courseYear = this.$moment(this.calendarValue).format("YYYY");
                this.courseMonth = this.$moment(this.calendarValue).format("MM");
                this.defaultCourseDay = this.$moment(this.calendarValue).format("YYYY-MM-01");
                this.initCourseList(this.$moment(this.calendarValue).format("YYYY-MM-01"));
                this.initCourseDate(this.loginUserId);
              });

              // 点击下一个月
              let nextBtn = document.querySelector(
                ".el-calendar__button-group .el-button-group>button:nth-child(3)"
              );
              nextBtn.addEventListener("click", () => {
                this.courseYear = this.$moment(this.calendarValue).format("YYYY");
                this.courseMonth = this.$moment(this.calendarValue).format("MM");
                this.defaultCourseDay = this.$moment(this.calendarValue).format("YYYY-MM-01");
                this.initCourseList(this.$moment(this.calendarValue).format("YYYY-MM-01"));
                this.initCourseDate(this.loginUserId);
              });

              //点击今天
              let todayBtn = document.querySelector(
                ".el-calendar__button-group .el-button-group>button:nth-child(2)"
              );
              todayBtn.addEventListener("click", () => {
                this.courseYear = this.$moment(this.calendarValue).format("YYYY");
                this.courseMonth = this.$moment(this.calendarValue).format("MM");
                this.defaultCourseDay = this.$moment(this.calendarValue).format("YYYY-MM-DD");
                this.initCourseList(currentDay);
                this.initCourseDate(this.loginUserId);
              });
            }
          });
        },1000);

        this.defaultCourseDay = currentDay;
        this.initCourseList(currentDay);
        this.initCourseDate(this.loginUserId);
        this.drawerCourseVisible = true;
      },
      handleDays(event, day){
        this.defaultCourseDay = day;
        this.initCourseList(day);
      },
      initCourseList(day){
        let params = {
          teacherId: this.loginUserId,
          busiTime: day
        };
        this.$axios.get(common.course_static_course_list, {params: params}).then(res => {
          if (res.data.data){
            this.defaultCourseList = res.data.data;
          }
        });
      },
      initCourseDate(teacherId){
        let arr = [];
        let params = {
          teacherId: teacherId,
          year: this.courseYear,
          month: this.courseMonth
        };
        this.$axios.get(common.course_static_date, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.length; i++){
              let str = "";
              if (res.data.data[i] < 10){
                str = "0" + res.data.data[i];
                arr.push(str);
              }else {
                arr.push(''+res.data.data[i]);
              }
            }
            this.calendarData = [{days: arr}];
          }
        });
      },
      logout(){
        this.$axios.post(common.logout_url).then(res => {
          if (res.data.code == 200){
            localStorage.removeItem("menuTabList");
            this.$router.push("/login");
          }
        });
      },
      jumpIndex(){
        this.$router.push("/");
      },
      inArrayPrivate(search, array){
        for(var i in array){
          if(array[i]['menuList']['id'] == search){
            return i;
          }
        }
        return -1;
      },
      inArrayPrivateObj(search, array){
        for(var i in array){
          if(array[i]['menuList']['id'] == search){
            return i;
          }
        }
        return -1;
      },
      addMenuItem(){
        //MessageWarning("请先测试和确认模块功能点。");
        setTimeout(()=>{
          if (this.$refs.customMenuRef){
            this.$refs.customMenuRef.setCheckedKeys(this.checkedMenuList, true);
          }
        },800);
        this.modalMenuCustomVisible = true;
      },
      closeCustomDialog(event){
        this.formPhone = {
          phone: '',
          phoneCode: '',
          pwd: ''
        };

        this.formPwd = {
          phone: '',
          phoneCode: '',
          pwd: ''
        };

        if (this.$refs['formPhone']){
          this.$refs['formPhone'].resetFields();
        }

        if (this.$refs['formPwd']){
          this.$refs['formPwd'].resetFields();
        }
      },
      cancelCustomDialog(){
        this.modalMenuCustomVisible = false;
        this.modalPhoneCustomVisible = false;
        this.modalPwdCustomVisible = false;
      },
      okCustomDialog(event){
        let url = "";
        let arr = [];
        let getMenusNodes = this.$refs.customMenuRef.getCheckedNodes();
        for (let i = 0; i < getMenusNodes.length; i++){
          arr.push(getMenusNodes[i].key);
        }
        let params = {
          menuNo: arr.join()
        };
        url = common.menuno_add;
        this.dialogCustomLoading = true;
        //params = this.$qs.stringify(params);
        this.$axios.get(url, {params: params,loading: false}).then(res => {
          if (res.data.code == 200){
            this.modalMenuCustomVisible = false;
            this.getTopMenu();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.dialogCustomLoading = false;
        });
      },
      removeQuickMenu(node, data){
        let params = {
          menuNo: data.key
        };
        let url = common.menuno_quick_list_del;
        //params = this.$qs.stringify(params);
        this.$axios.get(url, {params: params,loading: false}).then(res => {
          if (res.data.code == 200){
            this.getTopMenu();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      showMoreItem(item){
        if (this.topMenuList.length >= widthIndex){

        }
        if (item && item != undefined){
          this.showMore = false;
        }
      },
      showDrawderMenuList(){
        //this.activeTop = 'basicInfo';
        if (this.topMenuAllList && this.topMenuAllList.length > 0){
          this.getSliderMenu(this.topMenuAllList[0].key, null, 'menuList');
        }
      }
    },
    watch: {
      '$route': function (to, from) {//监听路由变化,为了浏览器点击后退和前进也能切换菜单选中
        this.$nextTick(() => {
          this.layout = "lr";
          this.clickType = "";
          this.activeSliderIndex = this.$route.query.key;
          this.activeIndex = this.$route.query.top;
          this.activeSubSlider = this.$route.query.sub;
          if (this.activeTop != this.$route.query.top){
            this.getSliderMenu(this.$route.query.top);
          }
          this.setSliderSubToggle();
          let width = parseInt(this.rightItemAllWidth.width.substr(0,this.rightItemAllWidth.width.length-2));
          if (width <= 0){
            this.getMenuTabWdith();
          }
          if (this.menuTabListObj[this.loginUserId]){
            this.getLocastorage();
            this.getMenuTabWdith();
          }
        });
      },
      screenWidth(val) {
        this.screenWidth = val;
        if (this.screenWidth-100 < 1200){
          this.isCollapse = false;
          this.toggleLeftMenu();
        }else {
          this.isCollapse = true;
          this.toggleRightMenu();
        }
      }
    }
  }
</script>

<style scoped>
.moon-top-logo-title{
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  top: 15px;
}
.moon-top-middle-menu-title-icon{
  position: relative;
  top: 18px;
  font-size: 20px;
  color: #FFFFFF;
}
.moon-top-middle-menu-title-icon .item{
  margin-left: 20px;
}
.moon-top-middle-menu-info{
  background: #C0C4CC;
  border: 1px solid #dddddd;
  border-radius: 10px;
  padding: 8px 10px;
  position: relative;
  top: 15px;
  margin-left: 20px;
  font-size: 12px;
  color: #FFFFFF;
}
.moon-top-right-item{
  position: relative;
  color: #FFFFFF;
  font-weight: bold;
}
.moon-top-right-item-eliplse{
  display: inline-block;
  max-width: 55px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  position: relative;
  top: 5px;
}
.moon-top-right-item.top-18{
  top: 18px;
}
.moon-top-right-item.top-6{
  top: 6px;
}
.moon-top-right .item{
  font-size: 20px;
  color: #FFFFFF;
  position: relative;
  top: 6px;
  margin-right: 10px;
  margin-left: 10px;
}
.moon-top-middle-menu-item{
  position: relative;
  top: 2px;
  font-size: 15px;
  color: #FFFFFF;
  margin-left: 20px;
}
.moon-top-middle-menu-item-text{
  position: relative;
  font-size: 15px;
  color: #FFFFFF;
  margin-left: 0px;
  opacity: 1;
  height: 60px;
  line-height: 60px;
  width: 90px;
  display: inline-block;
}
.moon-top-middle-menu-item-text-more{
  position: relative;
  font-size: 15px;
  color: #FFFFFF;
  margin-left: 0px;
  opacity: 1;
  height: 60px;
  line-height: 60px;
  width: 60px;
  display: inline-block;
}
.moon-top-middle-menu-item-text-plus{
  position: relative;
  font-size: 15px;
  color: #FFFFFF;
  margin-left: 0px;
  opacity: 1;
  height: 60px;
  line-height: 60px;
  width: 30px;
  display: inline-block;
}
.moon-top-middle-menu-item-text-active:after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0px;
  left: calc(50% - 45px);
  width: 60px;
  height: 3px;
  background: #E6A23C;
}
.drawer-main-menu-left-container-item.moon-top-middle-menu-item-text-drawer-active{
  background: rgba(140, 197, 255, 1);
}
.moon-top-middle-menu-item-text-drawer-active:after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0px;
  left: calc(50% - 30px);
  width: 60px;
  height: 3px;
  background: #E6A23C;
}
.moon-top-middle-menu-item .item{
  padding: 10px 5px;
  position: relative;
  display: inline-block;
  opacity: 1;
  cursor: default;
}
.moon-left-menu-item{
  background: #077DBA;
  padding: 12px 10px 10px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  filter:alpha(opacity=75);
  -moz-opacity:0.75;
  -khtml-opacity: 0.75;
  opacity: 0.75;
}
.moon-left-menu-item-no-toggle{
  background: #A6D4EB;
  padding: 12px 10px 10px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.moon-left-menu-item .title{
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  cursor: default;
}
.moon-left-menu-item .icon{
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  position: relative;
  top: 0px;
  cursor: default;
}
.moon-left-menu-sub-item{

}
.moon-left-menu-sub-item ul{
  padding: 0px 0px;
  color: #FFFFFF;
  margin-top: 5px;
}
.moon-left-menu-sub-item ul li{
  padding: 10px 0px;
  color: #dddddd;
  cursor: default;
}
.moon-left-menu-sub-item ul li:hover{
  background: rgba(236, 245, 255, 0.2);
}
.moon-left-menu-sub-item-active{
  color: #444444 !important;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.5);
}
.icon-class-down{
  transform: rotate(0deg);
  transition: all .2s ease-in-out;
}
.icon-class-up{
  transform: rotate(180deg);
  transition: all .2s ease-in-out;
}
.icon-class-left{
  color: #dddddd;
  transform: rotate(0deg);
}
.icon-class-right{
  transform: rotate(180deg);
}
.drawer-main{
  margin: 0px 300px;
  position: relative;
}
.drawer-main-menu{
  margin: 0px 0px;
  position: relative;
}
.drawer-title, .drawer-audit-title{
  position: relative;
  display: inline-block;
  height: 45px;
  line-height: 45px;
  padding: 0px 15px;
  opacity: 1;
  cursor: default;
}
.drawer-active:after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: calc(50% - 15px);
  width: 30px;
  height: 3px;
  background: #409eff;
}
.drawer-audit-title:after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: calc(50% - 40px);
  width: 80px;
  height: 3px;
}
.drawer-item{
  background: #FFFFFF;
  padding: 10px 0px;
  border-radius: 5px;
  margin-top: 10px;
}
.drawer-close{
  position: absolute;
  right: 0px;
  top: 10px;
  font-size: 20px;
  color: #999999;
}
.drawer-menu-close{
  position: absolute;
  right: 30px;
  top: 10px;
  font-size: 25px;
  color: #999999;
  z-index: 9999;
}
.moon-left-menu-tag{
  position: absolute;
  top: 0;
  bottom: 0;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  left: 220px;
  transition: all .2s ease-in-out;
  z-index: 99;
}
.moon-left-menu-tag .moon-left-menu-tag-container {
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
}
.moon-left-menu-tag .moon-left-menu-tag_indicator {
  margin-top: -44.5px;
  width: 100%;
  height: 30px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #EBEEF5;
  border-radius: 0 4px 4px 0;
  border: 1px solid #e5e5e5;
  border-left-color: transparent;
  opacity: 1;
  /*transition-property: background-color,opacity;*/
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  color: #dddddd;
  padding-right: 2px;
}
.moon-left-menu-tag_indicator:hover{
  background: rgb(160, 207, 255);
  color: #FFFFFF;
}
.moon-menu-tab{
  border-radius: 2px;
  border: 1px solid #DCDFE6;
  font-size: 12px;
  padding: 5px 10px;
}
.moon-menu-tab:hover{
  color: #FFFFFF;
  background: rgb(160, 207, 255);
  border: 1px solid rgb(160, 207, 255);
}
.moon-right-pop-menu{
  overflow-y: auto;
  position: relative;
  background: #E6E6E6;
  background-image: linear-gradient(to bottom, #E6E6E6 , #E6E6E6);
  padding: 10px 10px;
  position: relative;
}
.drawer-main-menu-left{
  width: 220px;
  position: relative;
  float: left;
  background: rgba(198, 226, 255, 0.9);
}
.drawer-main-menu-right{
  margin-left: 220px;
  position: relative;
  padding:0px 50px;
}
.drawer-main-menu-left-container{
  margin-top: 30px;
  /*background: rgba(140, 197, 255, 0.3);
  margin: 30px 15px;
  padding: 10px 0px;
  border-radius: 5px;*/
}
.drawer-main-menu-left-container-item{
  padding: 10px 0px;
  margin-top: 5px;
  cursor: default;
  position: relative;
  background: rgba(140, 197, 255, 0.6);
  margin: 10px 15px;
  border-radius: 5px;
  color: #ffffff;
}
.drawer-main-menu-left-container-item:hover{
  background: rgba(140, 197, 255, 0.9);
}
.drawer-main-menu-right-container{
  margin-top: 40px;
}
.drawer-main-menu-right-container-item{
  float: left;
  margin-right: 50px;
  height: 240px;
}
.drawer-main-menu-right-container-item-title{
  color: #E6A23C;
  font-weight: bold;
}
.drawer-main-menu-right-container-item-list{
  margin-top: 10px;
}
.drawer-main-menu-right-container-item-list-item{
  padding: 5px 2px;
  text-align: left;
  cursor: default;
}
.drawer-main-menu-right-container-item-list-item:hover{
  background: rgb(198, 226, 255);
  color: #f8f8f8;
  border-radius: 2px;
}
.drawer-main-menu-left-container-item.drawer-main-menu-left-container-item-active{
  background: rgba(140, 197, 255, 1);
}
.drawer-main-menu-left-container-item-active:after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: calc(50% - 40px);
  width: 80px;
  height: 3px;
  background: #E6A23C;
}
.moon-top-user-info-container{
  padding: 10px 15px;
  color: #fefefe;
}
.moon-top-user-info-item{
  padding:5px 0px;
}
.moon-top-user-info-opr{
  border-top: 1px solid #E4E7ED;
  text-align: center;
  padding: 5px 0px;
  color: #E6A23C;
  cursor: default;
}
.campus-info-container{
  background: #FFFFFF;
  padding: 20px 20px;
  margin: 20px 20px;
  border-radius: 4px;
}
.campus-info-logo-avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.campus-info-logo-avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px dashed #dddddd;
}
.avatar {
  width: 60px;
  height: 60px;
}
.pop-more{
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
}
.pop-more li{
  height: 30px;
  line-height: 30px;
  padding: 5px 10px;
  color: #fefefe;
  font-size: 14px;
  cursor: default;
  text-align: center;
}
.pop-more li:hover{
  height: 30px;
  line-height: 30px;
  background: #FFFFFF;
  filter:alpha(opacity=75);
  -moz-opacity:0.75;
  -khtml-opacity: 0.75;
  opacity: 0.75;
  color: #444444;
}
.moon-tips{
  line-height: 10px !important;
  font-size: 12px;
}
.setting-btn{
  position: fixed;
  right: 10px;
  top:50%;
  font-size: 12px;
}
.calendar-day{
  padding: 10px;
}
</style>
