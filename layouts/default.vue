<template>
  <div class="moon-container">
    <div class="moon-top-menu">
      <div class="pull-left moon-top-logo">
        <span class="color-white moon-top-logo-title">
          <i class="fa fa-home"></i>
          智慧校园系统
        </span>
      </div>
      <div class="pull-right moon-top-right">
        <el-popover
          popper-class="custom-user-popover"
          placement="bottom"
          transition="zoom-in-center"
          trigger="hover">

          <div>
            <div class="moon-top-user-info-container">
              <div class="moon-top-user-info-item">
                <i class="fa fa-user-circle"></i>
                <span>admin</span>
              </div>
              <div class="moon-top-user-info-item">
                <i class="fa fa-id-card"></i>
                <span>000001</span>
              </div>
              <div class="moon-top-user-info-item">
                <i class="fa fa-phone"></i>
                <span>138****3486</span>
              </div>
              <div class="moon-top-user-info-item">
                <i class="fa fa-users"></i>
                <span>部门1</span>
              </div>
            </div>
            <div class="moon-top-user-info-opr">
              <el-row>
                <el-col :span="24">
                  <div>
                    <span>{{$t("退出")}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>

          <span slot="reference">
            <label class="moon-top-right-item top-18">
              <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
            </label>
            <label class="moon-top-right-item top-6">
              <label>xxxxxx</label>
            </label>
          </span>
        </el-popover>
      </div>
      <div class="moon-top-middle-menu">
        <div class="moon-top-middle-menu-title">
          <div style="display: inline-block" :style="topWidth">
            <span class="moon-top-middle-menu-item">
              <i class="item fa fa-th" style="font-size: 18px" @click="showMenuList($event)"></i>
            </span>

            <span class="moon-top-middle-menu-item-text" v-for="(item, index) in topMenuList" :key="index" v-if="index <= widthIndex" @click="handleTopSelect($event, item)">
              <label class="item" :class="activeTop == item.key ? 'moon-top-middle-menu-item-text-active' : ''">{{item.name}}</label>
            </span>

            <!--<span class="moon-top-middle-menu-item-text" v-if="topMenuList.length > widthIndex">
              <label class="item">更多</label>
            </span>-->
            <el-dropdown class="moon-top-middle-menu-item-text" v-if="topMenuList.length > widthIndex">
              <span class="el-dropdown-link item">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

            <span class="moon-top-middle-menu-item-text">
              <label class="item">
                <i class="fa fa-plus-circle"></i>
              </label>
            </span>
          </div>

          <div class="pull-right">
            <span class="moon-top-middle-menu-info">
              <label>
                <i class="fa fa-calendar"></i>
              </label>
              <label>
                2020第一学年
              </label>
              <label>
                第23周
              </label>
              <label>
                周二
              </label>
            </span>
            <span class="moon-top-middle-menu-title-icon">
              <el-badge is-dot class="item">
                <i class="fa fa-bookmark" @click="showAuditMsg($event)"></i>
              </el-badge>

              <el-badge is-dot class="item">
                <i class="fa fa-bell-o" @click="showMsg($event)"></i>
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
      <el-drawer
        :visible.sync="drawer"
        :direction="direction"
        custom-class="custom-drawer"
        :before-close="handleClose"
        size="100%"
        :with-header="false"
        :modal="false"
        :close-on-press-escape="false"
        :wrapperClosable="false">

        <div class="drawer-main">
          <i class="fa fa-close drawer-close" @click="closeDrawer"></i>
          <div class="text-center">
            <span class="drawer-title" :class="tabVal == 1 ? 'drawer-active' : ''" @click="tabChange($event, 1)">
              {{$t("全部")}}
            </span>
            <span class="drawer-title" :class="tabVal == 2 ? 'drawer-active' : ''" @click="tabChange($event, 2)">
              {{$t("已读")}}
            </span>
            <span class="drawer-title" :class="tabVal == 3 ? 'drawer-active' : ''" @click="tabChange($event, 3)">
              {{$t("未读")}}
            </span>
          </div>
          <div class="drawer-item" :style="drawerHeight">

          </div>
        </div>
      </el-drawer>

      <!--审批中心-->
      <el-drawer
        :visible.sync="drawerAudit"
        :direction="direction"
        custom-class="custom-drawer"
        :before-close="handleClose"
        size="100%"
        :with-header="false"
        :modal="false"
        :close-on-press-escape="false"
        :wrapperClosable="false">

        <div class="drawer-main">
          <i class="fa fa-close drawer-close" @click="closeDrawer"></i>
          <div class="text-center">
            <span class="drawer-audit-title" :class="tabVal == 1 ? 'drawer-active' : ''" @click="tabChange($event, 1)">
              {{$t("学生请假申请")}}
            </span>
            <span class="drawer-audit-title" :class="tabVal == 2 ? 'drawer-active' : ''" @click="tabChange($event, 2)">
              {{$t("教工请假申请")}}
            </span>
            <span class="drawer-audit-title" :class="tabVal == 3 ? 'drawer-active' : ''" @click="tabChange($event, 3)">
              {{$t("学工奖惩申请")}}
            </span>
            <span class="drawer-audit-title" :class="tabVal == 4 ? 'drawer-active' : ''" @click="tabChange($event, 4)">
              {{$t("素质学分申请")}}
            </span>
            <span class="drawer-audit-title" :class="tabVal == 5 ? 'drawer-active' : ''" @click="tabChange($event, 5)">
              {{$t("学工门禁申请")}}
            </span>
            <span class="drawer-audit-title" :class="tabVal == 6 ? 'drawer-active' : ''" @click="tabChange($event, 6)">
              {{$t("教工门禁申请")}}
            </span>
          </div>
          <div class="drawer-item" :style="drawerHeight">

          </div>
        </div>
      </el-drawer>

      <!--菜单列表-->
      <el-drawer
        :visible.sync="drawerMenu"
        :direction="direction"
        custom-class="custom-drawer"
        :before-close="handleClose"
        size="80%"
        :with-header="false"
        :modal="false"
        :close-on-press-escape="false"
        :wrapperClosable="true">

        <div class="drawer-main-menu">
          <i class="fa fa-close drawer-menu-close" @click="closeDrawer"></i>
          <div class="drawer-main-menu-left text-center" :style="drawerMenuHeight">
            <div class="drawer-main-menu-left-container">
              <div class="drawer-main-menu-left-container-item drawer-main-menu-left-container-item-active" v-for="(item, index) in topMenuList" :key="index">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
              </div>
            </div>
          </div>
          <div class="drawer-main-menu-right" :style="drawerMenuHeight">
            <div class="drawer-main-menu-right-container">
              <div class="drawer-main-menu-right-container-item" v-for="(item, index) in sliderMenuList" :key="item.id">
                <div class="drawer-main-menu-right-container-item-title">
                  <i :class="item.icon"></i>
                  <span>{{item.name}}</span>
                </div>
                <div class="drawer-main-menu-right-container-item-list">
                  <div class="drawer-main-menu-right-container-item-list-item" v-for="(itemChild, indexChild) in item.list" :key="itemChild.id">
                    <span>{{itemChild.name}}</span>
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

      <!--系统设置-->
      <el-drawer
        :visible.sync="drawerSet"
        :direction="direction"
        custom-class="custom-drawer"
        :before-close="handleClose"
        size="100%"
        :with-header="false"
        :modal="false"
        :close-on-press-escape="false"
        :wrapperClosable="true">

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
              <div class="drawer-main-menu-left-container-item font-size-14" :class="settingType == 3 ? 'drawer-main-menu-left-container-item-active' : ''" @click="settingTypeOpr($event, 3)">
                <i class="fa fa-lock"></i>
                <span>{{$t("修改密码")}}</span>
              </div>
              <div class="drawer-main-menu-left-container-item font-size-14" :class="settingType == 4 ? 'drawer-main-menu-left-container-item-active' : ''" @click="settingTypeOpr($event, 4)">
                <i class="fa fa-phone-square"></i>
                <span>{{$t("修改手机")}}</span>
              </div>
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
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      >
                      <img v-if="form.logo" :src="form.logo" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
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
                    <el-avatar shape="square" :size="50" v-for="(item, index) in form.imgs" :key="index" :src="item" style="margin-right: 10px"></el-avatar>
                  </el-form-item>
                  <el-form-item label="学校介绍">

                  </el-form-item>
                </el-form>
              </div>

              <!--版本信息-->
              <div id="version-info" class="campus-info-container" v-if="settingType == 2">
                <div>
                  <el-timeline>
                    <el-timeline-item v-for="n in 10" :key="n">
                      <el-card :body-style="{padding: '10px'}">
                        <div slot="header" class="clearfix">
                          <span class="font-size-15  color-warning" style="font-weight: bold">v1.0.0</span>
                          <el-button style="float: right; padding: 3px 0" type="text">2020-11-11 11:11:11</el-button>
                        </div>

                        <div>
                          <div>
                            <div>
                              <span class="font-size-15 color-warning" style="font-weight: bold">新功能</span>
                            </div>
                            <div class="margin-top-5">
                              jasljflajskfjasjflakljsf;ajsljfkasjklfjaklsjdkfalks;
                              jasljflajskfjasjflakljsf;ajsljfkasjklfjaklsjdkfalks;
                              jasljflajskfjasjflakljsf;ajsljfkasjklfjaklsjdkfalks;
                              jasljflajskfjasjflakljsf;ajsljfkasjklfjaklsjdkfalks;
                            </div>
                          </div>

                          <div class="margin-top-20">
                            <div>
                              <span class="font-size-15 color-warning" style="font-weight: bold">BUG修复</span>
                            </div>
                            <div class="margin-top-5">
                              jasljflajskfjasjflakljsf;ajsljfkasjklfjaklsjdkfalks;
                              jasljflajskfjasjflakljsf;ajsljfkasjklfjaklsjdkfalks;
                              jasljflajskfjasjflakljsf;ajsljfkasjklfjaklsjdkfalks;
                              jasljflajskfjasjflakljsf;ajsljfkasjklfjaklsjdkfalks;
                            </div>
                          </div>

                          <div class="margin-top-20">
                            <div>
                              <span class="font-size-15 color-warning" style="font-weight: bold">其他说明</span>
                            </div>
                            <div class="margin-top-5">
                              jasljflajskfjasjflakljsf;ajsljfkasjklfjaklsjdkfalks;
                              jasljflajskfjasjflakljsf;ajsljfkasjklfjaklsjdkfalks;
                              jasljflajskfjasjflakljsf;ajsljfkasjklfjaklsjdkfalks;
                              jasljflajskfjasjflakljsf;ajsljfkasjklfjaklsjdkfalks;
                            </div>
                          </div>
                        </div>
                      </el-card>
                    </el-timeline-item>
                  </el-timeline>
                </div>
              </div>

              <!--修改手机号-->
              <div id="phone-info" class="campus-info-container" v-if="settingType == 3">
                <el-form label-width="80px">
                  <el-form-item label="旧手机号">
                    <el-input v-model="formPhone.oldPhone" class="width-300"></el-input>
                  </el-form-item>
                  <el-form-item label="新手机号">
                    <el-input v-model="formPhone.newPhone" class="width-300"></el-input>
                  </el-form-item>
                  <el-form-item label="验证码">
                    <el-input v-model="formPhone.phoneCode" class="width-300"></el-input>
                  </el-form-item>
                </el-form>
              </div>

              <!--修改密码-->
              <div id="pwd-info" class="campus-info-container" v-if="settingType == 4">
                <el-form label-width="100px">
                  <el-form-item label="当前手机号">
                    <el-input v-model="formPwd.phone" class="width-300"></el-input>
                  </el-form-item>
                  <el-form-item label="验证码">
                    <el-input v-model="formPwd.phoneCode" class="width-300"></el-input>
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input v-model="formPwd.pwd" class="width-300"></el-input>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <div class="moon-clearfix"></div>
        </div>
      </el-drawer>
    </div>

    <div style="position: relative">
      <div class="moon-left-menu-tag" :style="toggleTag">
        <div class="moon-left-menu-tag-container">
          <div class="moon-left-menu-tag_indicator" @click="isCollapse == true ? toggleLeftMenu($event) : toggleRightMenu($event)">
            <i class="fa fa-chevron-left" :class="isCollapse == true ? 'icon-class-left' : 'icon-class-right'"></i>
          </div>
        </div>
      </div>

      <div class="moon-left-menu" :style="leftHeight">
        <div :style="leftItemHeight">
          <div class="moon-left-menu-item" v-for="(item, index) in sliderMenuList" :key="item.id">
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

        <div class="moon-menu-toggle-main" style="right: 0px;">
          <div class="moon-menu-toggle-item">
            <span class="color-white font-size-12">{{$t('固定菜单栏')}}</span>
            <el-switch
              v-model="menuToggle"
              active-color="#13ce66"
              @change="changeSwitchToggle">
            </el-switch>
          </div>
        </div>
      </div>

      <div class="moon-right-menu" :style="rightWidth">
        <div class="moon-right-item-menu">
          <!--<el-tag closable size="medium" color="#ffffff" v-for="n in 6" :key="n" class="margin-right-5">{{n}}</el-tag>-->
          <el-popover
            v-show="!isCollapse"
            v-model="popMenuCollapse"
            placement="bottom-start"
            popper-class="custom-popover"
            width="240"
            :visible-arrow="false"
            trigger="hover">

            <div>
              <div class="moon-right-pop-menu" :style="popMenuHeight">
                <div class="moon-left-menu-item" v-for="(item, index) in sliderMenuList" :key="item.id">
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
                  <span class="color-white font-size-12">{{$t('固定菜单栏')}}</span>
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
        </div>
        <div class="moon-right-content" :style="rightHeight">
          <Nuxt />
        </div>
      </div>
      <div class="moon-clearfix"></div>
    </div>
  </div>
</template>

<script>
  import mixins from '../utils/mixins';
  export default {
    name: 'default',
    mixins: [mixins],
    data(){
      return {
        activeTabName: 'all',
        showMenu: false,
        isCollapse: true,
        drawer: false,
        drawerAudit: false,
        drawerMenu: false,
        drawerSet: false,
        refreshStatus: false,
        menuToggle: true,
        popMenuCollapse: false,
        settingType: 1,
        direction: 'ttb',
        screenWidth: 0,
        activeIndex: '1',
        activeSliderIndex: '',
        topMenuList: [],
        sliderMenuList: [],
        clickType: '',
        tabVal: '1',
        activeSlider: '',
        activeTop: '',
        activeSubSlider: '',
        widthIndex: 0,
        topWidth: {
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
          imgs: ["https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg", "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"]
        },
        formPhone: {
          oldPhone: '',
          newPhone: '',
          phoneCode: '',
        },
        formPwd: {
          phone: '',
          phoneCode: '',
          pwd: ''
        }
      }
    },
    mounted () {
      this.screenWidth = document.body.clientWidth;
      let width = document.querySelector(".moon-top-middle-menu-title").clientWidth;
      this.topWidth.width = width - 400 + 'px';
      this.widthIndex = (width - 400) / 150;
      // 监听窗口大小
      window.onresize = () => {
        width = document.querySelector(".moon-top-middle-menu-title").clientWidth;
        return (() => {
          this.screenWidth = document.body.clientWidth;
          this.topWidth.width = width - 400 + 'px';
          this.widthIndex = (width - 400) / 150;
        })()
      };
    },
    created() {
      this.hh();
      this.init();
      this.activeIndex = this.$route.query.top;
      this.activeSliderIndex = this.$route.query.key;
      this.activeSubSlider = this.$route.query.sub;
      this.getTopMenu();
      this.getSliderMenu("basicInfo");
    },
    methods: {
      hh(){
        if (process.browser) {
          this.leftHeight.height = window.innerHeight - 60 + 'px';
          this.leftItemHeight.height = window.innerHeight - 105 + 'px';
          this.rightHeight.height = window.innerHeight - 60 - 40 + 'px';
          this.drawerHeight.height = window.innerHeight - 60 - 120 + 'px';
          this.drawerMenuHeight.height = window.innerHeight - 60 + 'px';
          this.drawerSetHeight.height = window.innerHeight - 60 + 'px';
          this.popMenuHeight.height = window.innerHeight - 60 - 100 + 'px';
        }
      },
      async init() {
        await this.getSessionInfo();
        this.test1();
      },
      test1() {
        console.log(2);
        console.log(this.value, this.testDefault);
      },
      handleTopSelect(event, item) {
        this.getSliderMenu(item.key, 'click');
      },
      getTopMenu(){
        this.$axios.get('/json/topMenu.json').then(res => {
          this.topMenuList = res.data;
        })
      },
      getSliderMenu(key, type){
        this.activeTop = key;
        this.$axios.get('/json/sliderMenu.json').then(res => {
          for (let i = 0; i < res.data.length; i++){
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
          }
          this.setSliderSubToggle();
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
      },
      toggleMenu(event, item){
        item.toggle = !item.toggle;
      },
      showMsg(event){
        this.drawer = true;
      },
      refreshInit(event){
        let _self = this;
        this.refreshStatus = true;
        setTimeout(() => {
          this.refreshStatus = false;
        },2000);
      },
      showAuditMsg(){
        this.drawerAudit = true;
      },
      showMenuList(){
        this.drawerMenu = true;
      },
      showSet(){
        this.drawerSet = true;
      },
      handleClose(done) {
        done();
      },
      tabChange(event, type){
        this.tabVal = type;
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
      },
      toggleRightMenu(event){
        this.isCollapse = true;
        this.popMenuCollapse = false;
        this.menuToggle = true;
        this.rightWidth.marginLeft = "220px";
        this.leftHeight.width = "200px";
        this.leftHeight['padding'] = "10px";
        this.toggleTag['left'] = "220px";
      },
      settingTypeOpr(event, type){
        this.settingType = type;
      },
      changeSwitchToggle(event){
        if (event == true){
          this.menuToggle = true;
          this.toggleRightMenu();
        }else if (event == false){
          this.menuToggle = false;
          this.toggleLeftMenu();
        }
      }
    },
    watch: {
      '$route': function (to, from) {//监听路由变化,为了浏览器点击后退和前进也能切换菜单选中
        this.$nextTick(() => {
          this.clickType = "";
          this.activeSliderIndex = this.$route.query.key;
          this.activeIndex = this.$route.query.top;
          this.activeSubSlider = this.$route.query.sub;
          if (this.activeTop != this.$route.query.top){
            this.getSliderMenu(this.$route.query.top);
          }
          this.setSliderSubToggle();
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
  font-size: 18px;
  font-weight: bold;
  position: relative;
  top: 18px;
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
  margin-left: 20px;
  opacity: 1;
  height: 60px;
  line-height: 60px;
  display: inline-block;
}
.moon-top-middle-menu-item-text-active:after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0px;
  left: calc(50% - 20px);
  width: 40px;
  height: 3px;
  background: #409eff;
}
.moon-top-middle-menu-item .item{
  padding: 10px 5px;
  position: relative;
  display: inline-block;
  opacity: 1;
  cursor: default;
}
.moon-left-menu-item{
  background: rgba(217, 236, 255, 0.3);
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
  color: #FFFFFF;
  cursor: default;
}
.moon-left-menu-sub-item ul li:hover{
  background: rgba(236, 245, 255, 0.2);
}
.moon-left-menu-sub-item-active{
  background: rgba(236, 245, 255, 0.3);
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
  background-color: #fff;
  border-radius: 0 4px 4px 0;
  border: 1px solid #e5e5e5;
  border-left-color: transparent;
  opacity: 1;
  transition-property: background-color,opacity;
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
  background: rgb(140, 197, 255);
  background-image: linear-gradient(to bottom, rgb(179, 216, 255) , rgb(140, 197, 255));
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
.drawer-main-menu-right-container{
  margin-top: 40px;
}
.drawer-main-menu-right-container-item{
  float: left;
  margin-right: 50px;
}
.drawer-main-menu-right-container-item-title{
  color: #E6A23C;
  font-weight: bold;
}
.drawer-main-menu-right-container-item-list{
  margin-top: 10px;
}
.drawer-main-menu-right-container-item-list-item{
  padding: 5px 0px;
  cursor: default;
}
.drawer-main-menu-left-container-item-active:after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: calc(50% - 40px);
  width: 80px;
  height: 3px;
  background: #409eff;
}
.moon-top-user-info-container{
  padding: 10px 15px;
}
.moon-top-user-info-item{
  padding:5px 0px;
}
.moon-top-user-info-opr{
  border-top: 1px solid #E4E7ED;
  text-align: center;
  padding: 5px 0px;
  color: #E6A23C;
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
</style>
