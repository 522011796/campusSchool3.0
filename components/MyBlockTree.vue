<template>
  <div class="my-block-tree-container" :setSize="setSize">
    <div v-for="item in dataCollege" :key="item.id">
      <div class="my-block-tree-title" v-if="showTitle" :style="titleBgColor" :setTitleStyle="setTitleStyle" :align="align" @click="handleTitleClick($event,item)">
        <div class="content-text-class" :style="alignStyle" :setAlign="setAlign">
          <span :class="titleIcon" class="icon-inner-class"></span>
          <span :style="contentTextStyle">{{item.label}}</span>
          <!--<span class="icon-class" :class="item.show ? 'el-icon-arrow-up' : 'el-icon-arrow-down'" :style="iconStyle"></span>-->
          <span class="el-icon-arrow-up" :class="item.show ? 'icon-class-down' : 'icon-class-up'" :style="iconStyle"></span>
          <div class="moon-clearfix"></div>
        </div>
      </div>
      <el-collapse-transition>
        <div class="my-block-tree-content" v-show="item.show">
          <div class="my-block-tree-item block-content-text-class" :style="itemStyle" :setAlign="setAlign" v-for="itemChild in item.children" :key="itemChild.id" @click="handleItem($event,itemChild)">
            <span :class="itemIcon" class="icon-inner-class"></span>
            <span :style="contentTextStyle">{{itemChild.label}}</span>
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
  import {oneOf} from "../utils/utils";
  export default {
    name: 'myBlockTree',
    props: {
      selValue: {
        default: '',
        type: String
      },
      label: {
        default: '',
        type: String
      },
      size: {
        defalult: 'medium',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      },
      titleColor: {
        default: '',
        type: String
      },
      align: {
        defalult: 'left',
        validate: function (val) {
          return oneOf(val, ['center', 'left', 'right']);
        }
      },
      titleIcon: {
        default: '',
        type: String
      },
      itemIcon: {
        default: '',
        type: String
      }
    },
    computed: {
      selectModel(){
        this.value = this.selValue;
      },
      setTitleStyle(){
        if (!!this.titleColor){
          this.titleBgColor['background'] = this.titleColor;
          this.titleBgColor['color'] = '#ffffff';
          this.titleBgColor['border-color'] = this.titleColor;
        }else {
          this.titleBgColor['background'] = '#ffffff';
          this.titleBgColor['color'] = '#303133';
          this.titleBgColor['border-color'] = '#303133';
          this.titleBgColor['border'] = '1px solid #DCDFE6';
          this.titleBgColor['border-top-left-radius'] = '0px';
          this.titleBgColor['border-top-right-radius'] = '0px';
        }
      },
      setAlign() {
        this.alignStyle['text-align'] = this.align;
        this.itemStyle['text-align'] = this.align;
      },
      setSize(){
        if (this.size == "large"){
          this.titleBgColor['padding'] = "14px 10px";
          this.itemStyle['padding'] = "14px 10px";
          this.iconStyle['top'] = "15px";
        }else if (this.size == "medium"){
          this.titleBgColor['padding'] = "12px 10px";
          this.itemStyle['padding'] = "12px 10px";
          this.iconStyle['top'] = "15px";
        }else if (this.size == "small"){
          this.titleBgColor['padding'] = "8px 10px";
          this.itemStyle['padding'] = "8px 10px";
          this.iconStyle['top'] = "10px";
        }else if (this.size == "mini"){
          this.titleBgColor['padding'] = "6px 10px";
          this.itemStyle['padding'] = "6px 10px";
          this.iconStyle['top'] = "8px";
        }
      }
    },
    data() {
      return {
        value: '',
        titleBgColor: {},
        showTitle: true,
        showItem: true,
        itemStyle: {},
        sizeStyle: {},
        alignStyle: {},
        contentTextStyle: {},
        iconStyle: {},
        dataCollege: [{
          label: '学院1',
          id: '1',
          show: true,
          children: [{
            label: '专业',
            id: '11',
            unit: 1,
            children: [{
              label: '一年级',
              id: '12',
              unit: 2,
              children: [{
                label: '班级1',
                id: '13',
                unit: 3,
              },{
                label: '班级2',
                id: '14',
                unit: 3,
                disabled: true
              }]
            },{
              label: '二年级',
              id: '15',
              unit: 2,
            }]
          }]
        },{
          label: '学院2',
          id: '2',
          show: true,
          children: [{
            label: '专业2',
            id: '21',
            unit: 1,
            children: [{
              label: '一年级',
              id: '22',
              unit: 2,
              children: [{
                label: '班级1',
                id: '23',
                unit: 3,
              },{
                label: '班级2',
                id: '24',
                unit: 3,
                disabled: true
              }]
            },{
              label: '二年级',
              id: '25',
              unit: 2,
            }]
          }]
        }]
      }
    },
    mounted() {

    },
    created() {
      if (process.browser){
        this.setContentStyle();
      }
    },
    methods: {
      setContentStyle(){
        let width = document.querySelector(".my-block-tree-container").clientWidth;
        if (width > 0){
          width = width - 60;
        }
        this.contentTextStyle.width = width +"px";
      },
      handleChange(data) {
        this.$emit('change', data);
      },
      handleItem(event, data) {
        this.$emit('click', data);
      },
      handleTitleClick(event, item){
        item.show = !item.show;
      }
    }
  }
</script>

<style scoped>
.my-block-tree-container{
  width: 100%;
  position: relative;
  border-radius: 0px;
}
.my-block-tree-title{
  padding: 12px 10px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  margin-bottom: 1px;
  position: relative;
}
.my-block-tree-content{

}
.my-block-tree-item{
  padding: 12px 10px;
  border-bottom: 1px solid #DCDFE6;
  border-left: 1px solid #DCDFE6;
  border-right: 1px solid #DCDFE6;
  color: #909399;
}
.my-block-tree-item:hover{
  background: rgb(244, 244, 245);;
}
.icon-class-down{
  position: absolute;
  top: 12px;
  right: 10px;
  transform: rotate(0deg);
  transition: all .2s ease-in-out;
}
.icon-class-up{
  position: absolute;
  top: 12px;
  right: 10px;
  transform: rotate(180deg);
  transition: all .2s ease-in-out;
}
.content-text-class{
  display:inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.block-content-text-class{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.icon-inner-class{
  position: relative;
}
</style>
