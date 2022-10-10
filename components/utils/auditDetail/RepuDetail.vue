<template>
  <div>
    <el-card :body-style="{'padding': '10px'}" :selectModel="selectModel">
      <div slot="header" style="padding: 5px !important;">
        <div class="color-success">
          <span>{{$t("申请老师")}}:</span>
          <span>{{value.apply_user_name}}</span>
          <span class="font-size-12 color-muted">({{$moment(value.apply_time).format("YYYY-MM-DD HH:mm:ss")}})</span>
        </div>
      </div>
      <div class="color-muted">
        <el-row>
          <el-col :span="24">
            <div>
              <span class="color-disabeld">{{$t("学生姓名")}}:</span>
              <span>{{value.real_name}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row class="margin-top-10">
          <el-col :span="8" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("班级")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-70+'px'}" :title="value.class_name">{{value.class_name}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("专业")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-70+'px'}" :title="value.major_name">{{value.major_name}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("院系")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-70+'px'}" :title="value.college_name">{{value.college_name}}</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="line-height"></div>
      <div class="color-muted">
        <el-row>
          <el-col :span="8" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("类型")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-40+'px'}" :title="value.str1">{{value.str1}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("级别")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-40+'px'}" :title="value.str2">{{value.str2}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8" class="ellipsis-tag" v-if="value.apply_file && value.apply_file != ''">
            <div>
              <div>
                <span v-if="value.apply_file.split(',').length > 0" class="title-class color-disabeld" style="position: relative; top: -5px;">{{$t("附件")}}:</span>
                <span v-else class="title-class color-disabeld" style="position: relative; top: -15px;">{{$t("附件")}}:</span>
                <span>
                  <!--<el-image style="width: 20px; height: 20px" :src="value.apply_file"></el-image>-->
                  <div style="display: inline-block;margin-right: 2px" v-if="value.apply_file.split(',').length > 0" v-for="(item, index) in value.apply_file.split(',')" :key="index">
                    <a :href="item" target="_blank" v-if="item.indexOf('.pdf') > -1" class="fa fa-file-pdf-o color-muted" style="height: 20px;width: 20px;font-size: 20px;position: relative;top: -2px;"></a>
                    <a :href="item" target="_blank" v-else-if="item.indexOf('.doc') > -1 || item.indexOf('.docx') > -1" class="fa fa-wordpress color-muted" style="height: 20px;width: 20px;font-size: 20px;position: relative;top: -2px;"></a>
                    <my-head-list-img v-else :head-img="item"></my-head-list-img>
                  </div>
                  <my-head-img v-else :head-img="value.apply_file" style="display: inline-block;"></my-head-img>
                </span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="margin-top-10" v-if="value.des && value.des != ''">
          <el-col :span="24" class="ellipsis-long-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("说明")}}:</span>
                <el-tooltip class="item" effect="dark" :content="value.des" placement="top">
                  <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','max-width': widthDesStyle - 60 +'px'}">
                    {{value.des}}
                  </span>
                </el-tooltip>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
  import {oneOf} from '../../../utils/utils';
  import MyHeadImg from "../common/MyHeadImg";
  import MyHeadListImg from "~/components/utils/common/MyHeadListImg";
  export default {
    name: 'rePuDetail',
    components: {MyHeadListImg, MyHeadImg},
    props: {
      selValue: {
        default: function () {
          return {};
        },
        type: Object
      },
      options: {
        default: function () {
          return [];
        },
        type: Array
      }
    },
    computed: {
      selectModel(){
        this.value = this.selValue;
      }
    },
    data() {
      return {
        value: '',
        widthDesStyle: null,
        widthStyle: null
      }
    },
    mounted() {
      this.setWidth();
    },
    created() {

    },
    methods: {
      setWidth(){
        this.$nextTick(function () {
          if (process.client){
            if (document.querySelector(".ellipsis-long-tag") != null){
              this.widthStyle = document.querySelector(".ellipsis-tag") ? document.querySelector(".ellipsis-tag").clientWidth : 0;
              this.widthDesStyle = document.querySelector(".ellipsis-long-tag") ? document.querySelector(".ellipsis-long-tag").clientWidth : 0;
            }
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
