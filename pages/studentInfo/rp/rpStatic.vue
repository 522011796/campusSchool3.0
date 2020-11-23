<template>
  <div class="container">
    <div class="container">
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">奖惩分析</span>
          </div>
          <MyElTree type="1" sub-type="3" @node-click="nodeClick"></MyElTree>
        </div>

        <div slot="right">
          <div>
            <div>
              <el-card shadow="never" :body-style="{padding: '5px 10px',height: '120px'}">
                <el-row :gutter="8">
                  <el-col :span="8">
                    <div class="rpStatic-top-item">
                      <div>{{$t("学生人数")}}: </div>
                      <div>

                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="rpStatic-top-item">
                      <div>{{$t("类型占比")}}: </div>
                      <div>

                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="rpStatic-top-item">
                      <div>{{$t("级别占比")}}: </div>
                      <div>

                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </div>
          </div>
        </div>
      </layout-lr>
    </div>
  </div>
</template>

<script>
import mixins from "../../../utils/mixins";
export default {
  mixins: [mixins],
  data(){
    return {

    }
  },
  created() {

  },
  methods: {
    nodeClick(data){
      console.log(data);
    }
  }
}
</script>

<style>
.container {

}
</style>
