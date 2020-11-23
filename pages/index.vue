<template>
  <div class="container">
    <el-card :body-style="{padding: '10px', background: '#fefefe'}">
      <div class="layout-inline">
        <!--<el-button-group class="layout-item">
          <el-button type="info" size="small">{{$t("班级")}}</el-button>
          <el-button type="" size="small">{{$t("本人")}}</el-button>
        </el-button-group>
        |-->
        <el-button-group class="layout-item">
          <el-button type="info" size="small">{{$t("周")}}</el-button>
          <el-button type="" size="small">{{$t("年")}}</el-button>
          <el-button type="" size="small">{{$t("学期")}}</el-button>
        </el-button-group>
        |
        <my-select size="small" class="width-150 layout-item" :options="classList" :placeholder="$t('请选择班级')"></my-select>
      </div>
    </el-card>

    <div class="margin-top-20">
      <el-row :gutter="8">
        <el-col :span="18">
          <div class="color-disabeld">
            <i class="fa fa-mortar-board"></i>
            <span>{{$t("学生班级概况")}}</span>
          </div>
          <div class="margin-top-5">
            <el-card>
              <div>
                <el-row>
                  <el-col :span="8">
                    <div class="pull-left">
                      <div class="color-disabeld">
                        <span>{{$t("课堂统计")}}</span>
                      </div>
                      <div class="color-muted font-size-12 margin-top-5">
                        <span>{{$t("出勤率")}}</span>
                        <span>0%</span>
                      </div>
                      <div class="font-size-12 color-disabeld margin-top-10">
                        <i class="fa fa-user"></i>
                        <span>{{$t("人数")}}</span>
                        <span>0</span>
                      </div>
                    </div>

                    <el-progress class="pull-left margin-left-20" type="circle" :width="70" :percentage="0"></el-progress>
                    <div class="moon-clearfix"></div>
                  </el-col>
                  <el-col :span="8">
                    <div class="pull-left">
                      <div class="color-disabeld">
                        <span>{{$t("归寝统计")}}</span>
                      </div>
                      <div class="color-muted font-size-12 margin-top-5">
                        <span>{{$t("归寝率")}}</span>
                        <span>0%</span>
                      </div>
                      <div class="font-size-12 color-disabeld margin-top-10">
                        <i class="fa fa-user"></i>
                        <span>{{$t("人数")}}</span>
                        <span>0</span>
                      </div>
                    </div>

                    <el-progress class="pull-left margin-left-20" type="circle" :width="70" :percentage="0"></el-progress>
                    <div class="moon-clearfix"></div>
                  </el-col>
                  <el-col :span="8">
                    <div class="pull-left">
                      <div class="color-disabeld">
                        <span>{{$t("量化评比")}}</span>
                      </div>
                      <div class="color-muted font-size-12 margin-top-5">
                        <span>{{$t("量化率")}}</span>
                        <span>0%</span>
                      </div>
                      <div class="font-size-12 color-disabeld margin-top-10">
                        <i class="fa fa-user"></i>
                        <span>{{$t("人数")}}</span>
                        <span>0</span>
                      </div>
                    </div>

                    <el-progress class="pull-left margin-left-20" type="circle" :width="70" :percentage="0"></el-progress>
                    <div class="moon-clearfix"></div>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </div>

          <div class="margin-top-20">
            <el-row :gutter="16">
              <el-col :span="8">
                <el-card>
                  <div class="color-disabeld">
                    <span>{{$t("学分概况")}}</span>

                    <span class="color-muted font-size-12 margin-top-5">
                      <label>
                        {{$t("达标率")}}
                        0%
                      </label>
                    </span>
                  </div>
                  <div>
                    <div class="color-muted font-size-12 margin-top-10">
                      <div>
                        {{$t("已达标")}}
                        <span>0{{$t("人")}}</span>
                      </div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#67C23A" :format="format"></el-progress>
                      </div>
                    </div>
                    <div class="color-muted font-size-12 margin-top-10">
                      <div>
                        {{$t("未达标")}}
                        <span>0{{$t("人")}}</span>
                      </div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#e6a23c" :format="format"></el-progress>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card>
                  <div class="color-disabeld">
                    <span>{{$t("奖惩概况")}}</span>
                    <!--<span class="color-muted font-size-12 margin-top-5">
                      <label>
                        {{$t("处分")}}
                        0{{$t("人")}}
                      </label>
                    </span>-->
                  </div>
                  <div>
                    <div class="color-muted font-size-12 margin-top-10">
                      <div>
                        {{$t("奖励")}}
                        <span>0{{$t("人")}}</span>
                      </div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#67C23A" :format="format"></el-progress>
                      </div>
                    </div>
                    <div class="color-muted font-size-12 margin-top-10">
                      <div>
                        {{$t("处分")}}
                        <span>0{{$t("人")}}</span>
                      </div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#e6a23c" :format="format"></el-progress>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card>
                  <div class="color-disabeld">
                    <span>{{$t("宿舍内务概况")}}</span>
                  </div>
                  <div>
                    <div class="color-muted font-size-12 margin-top-10">
                      <div>
                        {{$t("合格")}}
                        <span>0</span>
                      </div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#67C23A" :format="format"></el-progress>
                      </div>
                    </div>
                    <div class="color-muted font-size-12 margin-top-10">
                      <div>
                        {{$t("不合格")}}
                        <span>0</span>
                      </div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#e6a23c" :format="format"></el-progress>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>

          <div class="margin-top-20">
            <el-row :gutter="16">
              <el-col :span="24">
                <el-card :body-style="{padding: '10px'}">
                  <div style="height: 270px" id="lineId">
                    <div class="color-disabeld">
                      <span>{{$t("课堂考勤趋势图")}}</span>
                    </div>
                    <line-chart></line-chart>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>

          <div class="margin-top-20">
            <el-row :gutter="16">
              <el-col :span="8">
                <div class="index_item">
                  <el-card class="item">
                    <div>
                      <div class="color-disabeld">
                        <span>{{$t("旷课")}}</span>
                        <span>0{{$t("次")}}</span>
                      </div>
                      <div class="margin-top-5">
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#f56c6c" :format="format"></el-progress>
                      </div>
                    </div>
                    <div class="margin-top-5">
                      <div class="color-disabeld">
                        <span>{{$t("迟到")}}</span>
                        <span>0{{$t("次")}}</span>
                      </div>
                      <div class="margin-top-5">
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#E6A23C" :format="format"></el-progress>
                      </div>
                    </div>
                    <div class="margin-top-5">
                      <div class="color-disabeld">
                        <span>{{$t("早退")}}</span>
                        <span>0{{$t("次")}}</span>
                      </div>
                      <div class="margin-top-5">
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#909399" :format="format"></el-progress>
                      </div>
                    </div>
                    <div class="margin-top-5">
                      <div class="color-disabeld">
                        <span>{{$t("正常")}}</span>
                        <span>0{{$t("次")}}</span>
                      </div>
                      <div class="margin-top-5">
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#67C23A" :format="format"></el-progress>
                      </div>
                    </div>
                  </el-card>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="index_item">
                  <el-card class="item">
                    <div>
                      <div class="color-disabeld">
                        <span>{{$t("旷寝")}}</span>
                        <span>0{{$t("次")}}</span>
                      </div>
                      <div class="margin-top-5">
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#f56c6c" :format="format"></el-progress>
                      </div>
                    </div>
                    <div class="margin-top-5">
                      <div class="color-disabeld">
                        <span>{{$t("晚归")}}</span>
                        <span>0{{$t("次")}}</span>
                      </div>
                      <div class="margin-top-5">
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#E6A23C" :format="format"></el-progress>
                      </div>
                    </div>
                    <div class="margin-top-5">
                      <div class="color-disabeld">
                        <span>{{$t("超长未归")}}</span>
                        <span>0{{$t("次")}}</span>
                      </div>
                      <div class="margin-top-5">
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#909399" :format="format"></el-progress>
                      </div>
                    </div>
                    <div class="margin-top-5">
                      <div class="color-disabeld">
                        <span>{{$t("正常")}}</span>
                        <span>0{{$t("次")}}</span>
                      </div>
                      <div class="margin-top-5">
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#67C23A" :format="format"></el-progress>
                      </div>
                    </div>
                  </el-card>
                </div>
              </el-col>
              <el-col :span="8" style="position: relative">
                <div class="index_item">
                  <el-card class="item_top">
                    <el-row>
                      <el-col :span="8">
                        <div class="color-disabeld"><i class="fa fa-male color-disabeld margin-right-5"></i>{{$t("男")}}</div>
                        <el-progress class="margin-left-20 margin-top-5" type="circle" :width="70" :percentage="0"></el-progress>
                      </el-col>
                      <el-col :span="8">
                        <div class="color-disabeld"><i class="fa fa-female color-disabeld margin-right-5"></i>{{$t("女")}}</div>
                        <el-progress class="margin-left-20 margin-top-5" type="circle" :width="70" :percentage="0"></el-progress>
                      </el-col>
                      <el-col :span="8">
                        <div class="color-disabeld"><i class="fa fa-info-circle color-disabeld margin-right-5"></i>{{$t("未知")}}</div>
                        <el-progress class="margin-left-20 margin-top-5" type="circle" :width="70" :percentage="0"></el-progress>
                      </el-col>
                    </el-row>
                  </el-card>

                  <el-card class="item_bottom" style="position: absolute; top: 149px; width: 100%">
                    <div>
                      <el-row>
                        <el-col :span="8">
                          <div class="color-disabeld">
                            <i></i>
                            <span>{{$t("总床位")}}</span>
                          </div>
                          <div class="color-muted margin-top-5">
                            <span>0</span>
                          </div>
                        </el-col>
                        <el-col :span="8">
                          <div class="color-disabeld">
                            <span>{{$t("已安排床位")}}</span>
                          </div>
                          <div class="color-muted margin-top-5">
                            <span>0</span>
                          </div>
                        </el-col>
                        <el-col :span="8">
                          <div class="color-disabeld">
                            <span>{{$t("空余床位")}}</span>
                          </div>
                          <div class="color-muted margin-top-5">
                            <span>0</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="color-disabeld">
            <i class="fa fa-bar-chart"></i>
            <span>{{$t("教师/校园概况")}}</span>
            <el-tooltip class="item" effect="dark" placement="top-start" offset="-2">
              <div slot="content">
                <div>
                  <span>{{$t("管理员账号查看数据为校园所有数据")}}</span>
                </div>
                <div>
                  <span>{{$t("教师账号查看数据为自身所有数据")}}</span>
                </div>
              </div>
              <i class="fa fa-warning color-warning"></i>
            </el-tooltip>
          </div>
          <el-card class="margin-top-5">
            <div class="color-disabeld">
              <span>{{$t("设备概况")}}</span>
            </div>
            <el-row class="margin-top-5">
              <el-col :span="12">
                <div class="color-muted">
                  <i class="fa fa-cube"></i>
                  <span>{{$t("终端")}}</span>
                  <span>0</span>
                </div>
                <div class="font-size-12 color-disabeld">
                  <div class="margin-left-20 margin-top-5">
                    <span>{{$t("在线")}}</span>
                    <span>0</span>
                  </div>
                  <div class="margin-left-20 margin-top-5">
                    <span>{{$t("离线")}}</span>
                    <span>0</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="color-muted">
                  <i class="fa fa-video-camera"></i>
                  <span>{{$t("摄像头")}}</span>
                  <span>0</span>
                </div>
                <div class="font-size-12 color-disabeld">
                  <div class="margin-left-20 margin-top-5">
                    <span>{{$t("在线")}}</span>
                    <span>0</span>
                  </div>
                  <div class="margin-left-20 margin-top-5">
                    <span>{{$t("离线")}}</span>
                    <span>0</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="margin-top-10">
              <el-col :span="12">
                <div class="color-muted">
                  <i class="fa fa-mobile-phone"></i>
                  <span>{{$t("平板")}}</span>
                  <span>0</span>
                </div>
                <div class="font-size-12 color-disabeld">
                  <div class="margin-left-20 margin-top-5">
                    <span>{{$t("在线")}}</span>
                    <span>0</span>
                  </div>
                  <div class="margin-left-20 margin-top-5">
                    <span>{{$t("离线")}}</span>
                    <span>0</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="color-muted">
                  <i class="fa fa-map"></i>
                  <span>{{$t("门禁")}}</span>
                  <span>0</span>
                </div>
                <div class="font-size-12 color-disabeld">
                  <div class="margin-left-20 margin-top-5">
                    <span>{{$t("在线")}}</span>
                    <span>0</span>
                  </div>
                  <div class="margin-left-20 margin-top-5">
                    <span>{{$t("离线")}}</span>
                    <span>0</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>

          <el-card class="margin-top-20">
            <div class="color-disabeld">
              <span>{{$t("日常考勤")}}</span>
            </div>
            <div class="margin-top-20 color-muted">
              <div class="color-disabeld">
                <span>{{$t("总次数")}}</span>
                <span>0{{$t("次")}}</span>
              </div>
              <div class="margin-top-5">
                <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#67C23A" :format="format"></el-progress>
              </div>
              <div class="color-disabeld margin-top-10">
                <span>{{$t("总天数")}}</span>
                <span>0{{$t("天")}}</span>
              </div>
              <div class="margin-top-5">
                <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#e6a23c" :format="format"></el-progress>
              </div>
            </div>
          </el-card>

          <el-card class="margin-top-20">
            <div class="color-disabeld">
              <span>{{$t("行政考勤")}}</span>
              <span class="font-size-12 color-muted">
                {{$t("出勤率")}}
                <label>0%</label>
              </span>
            </div>
            <div class="margin-top-20 color-muted">
              <el-row>
                <el-col :span="6" class="font-size-12 text-center">
                  <div>
                    {{$t("迟到")}}
                  </div>
                  <el-progress type="circle" :width="70" :percentage="0" class="margin-top-5"></el-progress>
                </el-col>
                <el-col :span="6" class="font-size-12 text-center">
                  <div>
                    {{$t("请假")}}
                  </div>
                  <el-progress type="circle" :width="70" :percentage="0" class="margin-top-5"></el-progress>
                </el-col>
                <el-col :span="6" class="font-size-12 text-center">
                  <div>
                    {{$t("早退")}}
                  </div>
                  <el-progress type="circle" :width="70" :percentage="0" class="margin-top-5"></el-progress>
                </el-col>
                <el-col :span="6" class="font-size-12 text-center">
                  <div>
                    {{$t("旷工")}}
                  </div>
                  <el-progress type="circle" :width="70" :percentage="0" class="margin-top-5"></el-progress>
                </el-col>
              </el-row>
            </div>
          </el-card>

          <el-card class="margin-top-20">
            <div class="color-disabeld">
              <span>{{$t("会议考勤")}}</span>
              <span class="font-size-12 color-muted">
                {{$t("出勤率")}}
                <label>0%</label>
              </span>
            </div>
            <div class="margin-top-20 color-muted">
              <el-row>
                <el-col :span="8" class="font-size-12 text-center">
                  <div>
                    {{$t("正常")}}
                  </div>
                  <el-progress type="circle" :width="70" :percentage="0" class="margin-top-5"></el-progress>
                </el-col>
                <el-col :span="8" class="font-size-12 text-center">
                  <div>
                    {{$t("请假")}}
                  </div>
                  <el-progress type="circle" :width="70" :percentage="0" class="margin-top-5"></el-progress>
                </el-col>
                <el-col :span="8" class="font-size-12 text-center">
                  <div>
                    {{$t("缺勤")}}
                  </div>
                  <el-progress type="circle" :width="70" :percentage="0" class="margin-top-5"></el-progress>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import LineChart from "../components/charts/LineChart";
  import MySelect from "../components/MySelect";
  export default {
    name: 'index',
    components: {MySelect,LineChart},
    data(){
      return {
        userTypeList: [],
        classList: [],
        userType: 1,
        format(percentage) {
          return percentage === 100 ? '' : `${percentage}%`;
        }
      }
    },
    created() {
      this.layoutInit();
    },
    methods: {
      layoutInit(){
        this.$parent.$parent.layout = 'full';
      },
    }
  }
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
.index_item{
  height: 220px;
  position: relative;
}
.index_item .item{
  height: 220px;
}
.index_item .item_top{
  height: 130px;
}
.index_item .item_bottom{
  height: 70px;
}
</style>
