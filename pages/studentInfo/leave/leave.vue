<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">请假查询</span>
        </div>
        <MyElTree type="1" sub-type="3" @node-click="nodeClick">
          <div slot="top" class="text-center">
            <el-button type="primary" size="mini">{{$t("院系")}}</el-button>
            <el-button type="default" size="mini">{{$t("建筑楼")}}</el-button>
          </div>
        </MyElTree>
      </div>

      <div slot="right">
        <div class="layout-right-tab">
          <el-row>
            <el-col :span="10">
              <el-button size="small" type="primary"  icon="el-icon-date">{{$t("今天")}}</el-button>
              <el-button size="small" type="default" plain  icon="el-icon-date">{{$t("昨天")}}</el-button>
              <el-button size="small" type="default" plain  icon="el-icon-date">{{$t("本周")}}</el-button>
              <el-button size="small" type="warning"  icon="el-icon-download">{{$t("导出")}}</el-button>
            </el-col>
            <el-col :span="14" class="text-right">
              <my-date-picker type="daterange" size="small" width-style="240"></my-date-picker>
              <MyInputButton size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('姓名/寝室号')"></MyInputButton>
            </el-col>
          </el-row>
        </div>

        <div>
          <div class="bg-white border-bottom-1 padding-lr-5 padding-tb-5" :style="divHeight">
            <el-row :gutter="16">
              <el-col :span="6" v-for="n in 100" :key="n" class="margin-bottom-20">
                <el-card :body-style="{padding: '10px 10px'}" style="position: relative">
                  <span class="leave-tag bg-success">
                    {{$t("已通过")}}
                  </span>

                  <div>
                    <div class="leave-title color-grand">
                      <span class="leave-title-ellipsis-text">xxxxxxxxxxxxxxxxxxxxxxxx</span>
                    </div>
                    <div class="leave-sub-title color-muted">
                      <span class="leave-title-ellipsis-text">xxxxxxxxxxxxxxxxx班</span>
                    </div>
                    <div class="leave-sub-title color-muted">
                      <span>{{$t("开始")}}</span>
                      <span>2011-11-11 11:11</span>
                    </div>
                    <div class="leave-sub-title color-muted">
                      <span>{{$t("结束")}}</span>
                      <span>2011-11-11 11:11</span>
                    </div>
                    <div class="leave-sub-title color-muted">
                      <span>{{$t("类型")}}</span>
                      <span>
                        <el-tag size="small" type="warning">xxx假</el-tag>
                      </span>
                    </div>
                    <div class="leave-sub-title color-muted">
                      <span>{{$t("时长")}}</span>
                      <span>
                        <el-tag size="small" type="warning"><i class="fa fa-calendar margin-right-5"></i>0天0时0分</el-tag>
                      </span>
                    </div>
                  </div>
                  <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" class="leave-header-logo">
                </el-card>
              </el-col>
            </el-row>
          </div>

          <div class="layout-right-footer text-right">
            <MyPagination class="layout-pagination"></MyPagination>
          </div>
        </div>
      </div>
    </layout-lr>
  </div>
</template>

<script>
import MyElTree from "../../../components/tree/MyElTree";
import MyDatePicker from "../../../components/MyDatePicker";
import MyPagination from "../../../components/MyPagination";
import mixins from "../../../utils/mixins";
export default {
  mixins: [mixins],
  components: {MyElTree,MyDatePicker,MyPagination},
  data(){
    return {

    }
  },
  created() {

  },
  methods: {
    nodeClick(event){

    }
  }
}
</script>

<style>
.container {

}
.leave-tag{
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 12px;
  color: #FFFFFF;
  padding: 2px 5px;
  border-bottom-left-radius: 5px;
}
.leave-title{
  font-size: 14px;
  font-weight: bold;
}
.leave-sub-title{
  font-size: 12px;
  margin-top: 5px;
}
.leave-title-ellipsis-text{
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  max-width: 150px;
}
.leave-header-logo{
  height: 80px;
  width: 80px;
  border-radius: 100%;
  border: 1px solid #C0C4CC;
  position: absolute;
  right: 5px;
  top: 50px;
}
</style>
