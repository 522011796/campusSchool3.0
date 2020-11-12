<template>
  <div>
    <el-card :body-style="{'padding': '10px'}" :selectModel="selectModel">
      <div slot="header" style="padding: 5px !important;">
        <div class="color-success">
          <span>{{$t("申请人")}}:</span>
          <span>{{value.apply_user_name}}</span>
        </div>
      </div>
      <div class="color-muted">
        <el-row>
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("类型")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-40+'px'}">{{value.str1}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("时长")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-40+'px'}">{{value.double1}}天</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="margin-top-10">
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("开始时间")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-90+'px','position': 'relative','top': '-2px'}">{{$moment(value.date1).format("YYYY-MM-DD HH:mm:ss")}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("结束时间")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-90+'px','position': 'relative','top': '-2px'}">{{$moment(value.date2).format("YYYY-MM-DD HH:mm:ss")}}</span>
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
                <span class="title-class color-disabeld">{{$t("附件")}}:</span>
                <span>
                  <el-image style="width: 20px; height: 20px" :src="value.apply_file"></el-image>
                </span>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="line-height"></div>
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
  export default {
    name: 'StuleaveDetail',
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
