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
        <span class="moon-top-right-item top-18">
          <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
        </span>
        <span class="moon-top-right-item top-6">
          <label>xxxxxx</label>
        </span>

        <el-badge is-dot hidden class="item">
          <i class="fa fa-cog"></i>
        </el-badge>
      </div>
      <div class="moon-top-middle-menu">
        <div class="moon-top-middle-menu-title">
          <span class="moon-top-middle-menu-item">
            <i class="item fa fa-th" style="font-size: 18px"></i>
          </span>

          <span class="moon-top-middle-menu-item-text" v-for="(item, index) in topMenuList" :key="index" @click="handleTopSelect($event, item)">
            <label class="item" :class="activeTop == item.key ? 'moon-top-middle-menu-item-text-active' : ''">{{item.name}}</label>
          </span>

          <span class="moon-top-middle-menu-item-text">
            <!--<label class="item">
              <el-tag type="info" size="small" closable>标签三</el-tag>
            </label>-->
            <label class="item">
              <i class="fa fa-plus-circle"></i>
            </label>
          </span>

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
                <i class="fa fa-refresh"></i>
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
        <div class="moon-left-menu-item" v-for="(item, index) in sliderMenuList" :key="item.id">
          <div>
            <el-row @click.native="toggleMenu($event, item)">
              <el-col :span="22">
              <span class="title">
                <i class="fa fa-info-circle"></i>
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

      <div class="moon-right-menu" :style="rightWidth">
        <div class="moon-right-item-menu">
          <!--<el-tag closable size="medium" color="#ffffff" v-for="n in 6" :key="n" class="margin-right-5">{{n}}</el-tag>-->
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
        leftHeight: {
          'height': '',
          'width': '200px'
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
        toggleTag: {

        }
      }
    },
    mounted () {
      this.screenWidth = document.body.clientWidth;
      // 监听窗口大小
      window.onresize = () => {
        return (() => {
          this.screenWidth = document.body.clientWidth;
        })()
      }
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
          this.rightHeight.height = window.innerHeight - 60 - 40 + 'px';
          this.drawerHeight.height = window.innerHeight - 60 - 120 + 'px';
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
                  path: this.sliderMenuList[0].path,
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
      showAuditMsg(){
        this.drawerAudit = true;
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
      },
      toggleLeftMenu(event){
        this.isCollapse = false;
        this.rightWidth.marginLeft = "0px";
        this.leftHeight.width = "0px";
        this.leftHeight['padding'] = "0px";
        this.toggleTag['left'] = "0px";
      },
      toggleRightMenu(event){
        this.isCollapse = true;
        this.rightWidth.marginLeft = "220px";
        this.leftHeight.width = "200px";
        this.leftHeight['padding'] = "10px";
        this.toggleTag['left'] = "220px";
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
.moon-left-menu-tag{
  position: absolute;
  top: 0;
  bottom: 0;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  left: 220px;
  transition: all .2s ease-in-out;
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
</style>
