<template>
  <div class="moon-container">
    <div class="moon-top-menu">
      <div class="pull-left moon-top-logo">

      </div>
      <div class="pull-right moon-top-right">

      </div>
      <div class="moon-top-middle-menu">

      </div>
      <div class="moon-flearfix"></div>
    </div>
    <div class="moon-left-menu" :style="leftHeight">
      <div class="moon-left-collapse">
        <i class="fa fa-navicon color-muted" @click="toggleCollapse"></i>
      </div>
      <el-menu class="el-menu-vertical-demo" :collapse-transition="false" :collapse="isCollapse">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="moon-right-menu" :style="rightWidth">
      <div class="moon-right-item-menu">
        <el-tag closable size="medium" v-for="n in 6" class="margin-right-5">{{n}}</el-tag>
      </div>
      <div class="moon-right-content">
        <Nuxt />
      </div>
    </div>
    <div class="moon-flearfix"></div>
  </div>
</template>

<script>
  export default {
    name: 'default',
    data(){
      return {
        isCollapse: false,
        leftHeight: {
          'height': '',
          'width': '200px'
        },
        rightHeight: {
          'height': ''
        },
        rightWidth: {
          'marginLeft': '200px'
        }
      }
    },
    created() {
      this.hh();
    },
    methods: {
      hh(){
        if (process.browser) {
          this.leftHeight.height = window.innerHeight - 60 + 'px';
          this.rightHeight.height = window.innerHeight - 60 - 40 + 'px';
        }
      },
      toggleCollapse(){
        this.isCollapse = !this.isCollapse;
        if (!this.isCollapse){
          this.rightWidth.marginLeft = "200px";
          this.leftHeight.width = "200px";
        }else {
          this.rightWidth.marginLeft = "65px";
          this.leftHeight.width = "65px";
        }
      }
    }
  }
</script>

<style scoped>

</style>
