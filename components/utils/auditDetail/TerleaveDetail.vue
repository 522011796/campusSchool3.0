<template>
  <div>
    <el-card :body-style="{'padding': '10px'}" :selectModel="selectModel">
      <div slot="header" style="padding: 5px !important;">
        <div class="color-success">
          <el-row>
            <el-col :span="12">
              <span>申请人:</span>
              <span>{{value.apply_user_name}}</span>
            </el-col>
            <el-col :span="12">
              <span>部门:</span>
              <span>{{value.depart_name}}</span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="color-muted">
        <el-row>
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">类型:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-40+'px'}">{{value.str1}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld" style="position: relative; top: 0px">时长:</span>
                <span class="moon-content-text-ellipsis-class">{{value.double1}}天</span>
                <el-tooltip class="item" effect="dark" placement="top-start">
                  <div slot="content">
                    <div v-if="value.str3" v-for="(item, index) in JSON.parse(value.str3)">
                      <span>第{{item.section}}节课</span>
                    </div>
                  </div>
                  <i class="el-icon-info"></i>
                </el-tooltip>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row v-if="value.apply_type_code == 'TeacherBusiTripApply'" class="margin-top-10">
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">开始时间:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-90+'px'}">{{value.date1}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">结束时间:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-90+'px'}">{{value.date2}}</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row v-if="value.apply_type_code == 'TeacherLeaveApply'" class="margin-top-10">
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">申请时间:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-90+'px'}">{{value.apply_time}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">请假时间:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-90+'px'}">{{value.date2}}</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="color-muted margin-top-5">
        <el-row>
          <el-col :span="12" class="ellipsis-tag" v-if="value.apply_file != ''">
            <div>
              <div>
                <span class="title-class color-disabeld">附件:</span>
                <span>
                  <el-image style="width: 20px; height: 20px" :src="value.apply_file"></el-image>
                </span>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="line-height"></div>
        <el-row class="margin-top-10">
          <el-col :span="24" class="ellipsis-long-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">说明:</span>
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
  export default {
    name: 'TerleaveDetail',
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
        widthStyle: null,
        widthDesStyle: null
      }
    },
    created() {
      this.setWidth();
    },
    methods: {
      setWidth(){
        this.$nextTick(function () {
          if (process.client){
            this.widthStyle = document.querySelector(".ellipsis-tag").clientWidth;
            this.widthDesStyle = document.querySelector(".ellipsis-long-tag").clientWidth;
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
