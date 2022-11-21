<template>
  <div>
    <el-card :body-style="{'padding': '12px'}" :selectModel="selectModel">
      <div slot="header" style="padding: 5px !important;">
        <el-row>
          <el-col :span="24">
            <div class="color-warning">
              <span>{{$t("解除申请人")}}:</span>
              <span>{{value.apply_user_name}}</span>
              <span class="font-size-12 color-muted">({{$moment(value.apply_time).format("YYYY-MM-DD HH:mm:ss")}})</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <div class="color-muted">
          <el-row>
            <el-col :span="24">
              <div>
                <div>
                  <span v-if="value.apply_file.split(',').length > 0" class="title-class color-disabeld" style="position: relative; top: -5px;">{{$t("附件")}}:</span>
                  <span v-else class="title-class color-disabeld" style="position: relative; top: -15px;">{{$t("附件")}}:</span>
                  <span>
                            <div style="display: inline-block;margin-right: 2px" v-if="value.apply_file.split(',').length > 0" v-for="(itemImg, indexImg) in value.apply_file.split(',')" :key="indexImg">
                              <a :href="itemImg" target="_blank" v-if="itemImg.indexOf('.pdf') > -1" class="fa fa-file-pdf-o color-muted" style="height: 20px;width: 20px;font-size: 20px;position: relative;top: -2px;"></a>
                              <a :href="itemImg" target="_blank" v-else-if="itemImg.indexOf('.doc') > -1 || itemImg.indexOf('.docx') > -1" class="fa fa-wordpress color-muted" style="height: 20px;width: 20px;font-size: 20px;position: relative;top: -2px;"></a>
                              <my-head-list-img v-else :head-img="itemImg"></my-head-list-img>
                            </div>
                            <my-head-img v-else :head-img="itemImg.apply_file" style="display: inline-block;"></my-head-img>
                  </span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="color-muted">
          <el-row class="margin-top-10" v-if="value.des && value.des != ''">
            <el-col :span="24" class="ellipsis-long-tag">
              <div>
                <div>
                  <span class="title-class color-disabeld">{{$t("说明")}}:</span>
                  <el-tooltip class="item" effect="dark" :content="value.des" placement="top">
                            <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','max-width': '300px'}">
                              {{value.des}}
                            </span>
                  </el-tooltip>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  import {oneOf} from '../../../utils/utils';
  import MyHeadImg from "../common/MyHeadImg";
  import MyHeadListImg from "~/components/utils/common/MyHeadListImg";
  export default {
    name: 'rePuRemoveDetail',
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
