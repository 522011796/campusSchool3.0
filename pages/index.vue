<template>
  <div class="container">
    <div>
      <el-row :gutter="16">
        <el-col :span="8">
          <el-card :body-style="{padding: '0px'}" style="height: 260px">
            <div class="padding-lr-10 padding-tb-10 color-muted">
              <el-row>
                <el-col :span="12">
                  <span class="font-size-25 color-grand">0</span>
                  <span>{{$t("人")}}</span>
                </el-col>
                <el-col :span="12" class="text-right">
                  <my-cascader ref="SelectorBuild" width-style="180" :clearable="true" size="small" :sel-value="collegeData" type="1" sub-type="4" @change="handleCascaderChange($event,1)"></my-cascader>
                </el-col>
              </el-row>
            </div>
            <div class="top-content">

            </div>
            <div class="bottom-content">
              <div class="padding-lr-10 color-muted">
                <el-row>
                  <el-col :span="12">
                    <i class="fa fa-mortar-board"></i>
                    <span>{{$t("学生人数")}}</span>
                  </el-col>
                  <el-col :span="12" class="text-right">
                    <i class="fa fa-flag"></i>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{padding: '0px'}" style="height: 260px">
            <div class="padding-lr-10 padding-tb-10 color-muted">
              <el-row>
                <el-col :span="12">
                  <span class="font-size-25 color-grand">0</span>
                  <span>{{$t("人")}}</span>
                </el-col>
                <el-col :span="12" class="text-right">
                  <my-cascader ref="SelectorBuild" width-style="180" :clearable="true" size="small" :sel-value="deptData" type="4" sub-type="4" @change="handleCascaderChange($event, 2)"></my-cascader>
                </el-col>
              </el-row>
            </div>
            <div class="top-content">

            </div>
            <div class="bottom-content">
              <div class="padding-lr-10 color-muted">
                <el-row>
                  <el-col :span="12">
                    <i class="fa fa-user"></i>
                    <span>{{$t("教工人数")}}</span>
                  </el-col>
                  <el-col :span="12" class="text-right">
                    <i class="fa fa-flag"></i>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{padding: '0px'}" style="height: 260px">
            <div class="top-table-content color-muted">
              <table class="custom-table-white margin-top-10">
                <tr>
                  <td width="30%">{{$t("系统版本")}}</td>
                  <td></td>
                </tr>
                <tr>
                  <td width="30%">{{$t("当前学年")}}</td>
                  <td></td>
                </tr>
                <tr>
                  <td width="30%">{{$t("当前学期")}}</td>
                  <td></td>
                </tr>
                <tr>
                  <td width="30%">{{$t("当前学周")}}</td>
                  <td></td>
                </tr>
              </table>
            </div>
            <div class="bottom-content">
              <div class="padding-lr-10 color-muted">
                <el-row>
                  <el-col :span="12">
                    <i class="fa fa-cog"></i>
                    <span>{{$t("系统信息")}}</span>
                  </el-col>
                  <el-col :span="12" class="text-right">
                    <i class="fa fa-flag"></i>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="margin-top-20 custom-card-layout">
      <el-row :gutter="16">
        <el-col :span="16">
          <el-card :body-style="{padding: '0px'}" style="height: 240px">
            <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
              <span class="color-muted" style="font-weight: bold;position: relative; top: 5px;">
                <i class="fa fa-line-chart"></i>
                <span>{{$t("院系统计")}}</span>
              </span>
              <span class="pull-right">
                <my-cascader ref="SelectorBuild" width-style="180" :clearable="true" size="small" :sel-value="collegeTabData" type="1" sub-type="4" @change="handleCascaderChange($event,3)"></my-cascader>
              </span>
              <div class="moon-clearfix"></div>
            </div>
            <div class="color-muted padding-tb-10 padding-lr-10" style="position: relative">
              <div class="item-attend-line-ver" style="position: absolute; left: 50%;top: 0px;"></div>

              <el-row :gutter="16">
                <el-col :span="12">
                  <el-row :gutter="16">
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("应出勤人次")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">0</span>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("已出勤人次")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">0</span>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("旷课人次")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">0</span>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="16" class="margin-top-10">
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("迟到人次")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">0</span>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("早退人次")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">0</span>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="12">
                  <el-row :gutter="16">
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("应归寝人次")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">0</span>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("已归寝人数")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">0</span>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("未归人数")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">0</span>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="16" class="margin-top-10">
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("晚归人数")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">0</span>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("超长未归人数")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">0</span>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </el-card>

          <el-tabs type="border-card" class="margin-top-20" style="height: 400px">
            <el-tab-pane label="通知"></el-tab-pane>
            <el-tab-pane label="公告"></el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="8" v-if="userType == 4">
          <el-card :body-style="{padding: '0px'}" style="height: 140px">
            <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
              <span class="color-muted" style="font-weight: bold;position: relative; top: 0px;">
                <i class="fa fa-line-chart"></i>
                <span>{{$t("设备统计")}}</span>
              </span>
              <span class="pull-right color-grand">
                0{{$t("台")}}
              </span>
              <div class="moon-clearfix"></div>
            </div>
            <div class="color-muted padding-tb-10 padding-lr-10" style="position: relative">
              <el-row :gutter="16">
                <el-col :span="8">
                  <div class="item-attend-block">
                    <div>{{$t("一体机本地版")}}</div>
                    <div>
                      <span class="font-size-25 color-grand">0</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="item-attend-block">
                    <div>{{$t("一体机云端版")}}</div>
                    <div>
                      <span class="font-size-25 color-grand">0</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="item-attend-block">
                    <div>{{$t("门禁控制器")}}</div>
                    <div>
                      <span class="font-size-25 color-grand">0</span>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>
          <el-card :body-style="{padding: '0px'}" class="margin-top-20" style="height: 500px;overflow-y: auto">
            <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
              <span class="color-muted" style="font-weight: bold;position: relative; top: 5px;">
                <i class="fa fa-line-chart"></i>
                <span>{{$t("设备状态")}}</span>
              </span>
            </div>
            <div class="color-muted padding-tb-10 padding-lr-10" style="position: relative">
              <el-timeline>
                <el-timeline-item :hide-timestamp="true" timestamp="2018/4/12" placement="top">
                  <el-card class="font-size-12" :body-style="{padding: '10px'}">
                    <div class="color-muted">
                      <span class="color-grand">xxxxx设备</span>
                      <el-tag size="mini" type="danger" class="margin-left-5">{{$t("离线")}}</el-tag>
                      <el-tag size="mini" type="info" class="margin-left-5">{{$t("一体机本地版")}}</el-tag>
                    </div>
                    <div class="margin-top-5">
                      <span class="color-disabeld">{{$t("SN")}}: xxxxxxxxx</span>
                    </div>
                    <div class="margin-top-5">
                      <span class="color-muted">{{$t("位置")}}: xxxxxxxxx</span>
                    </div>
                    <div class="margin-top-5">
                      <i class="fa fa-times-circle"></i>
                      <span class="color-disabeld">2011-11-11 11:11:11</span>
                    </div>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-card>
        </el-col>

        <el-col :span="8" v-if="userType == 5">
          <el-card :body-style="{padding: '0px'}" style="height: 140px">
            <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
              <span class="color-muted" style="font-weight: bold;position: relative; top: 0px;">
                <i class="fa fa-line-chart"></i>
                <span>{{$t("素质学分统计")}}</span>
              </span>
              <span class="pull-right color-grand">
                <my-cascader ref="SelectorBuild" width-style="180" :clearable="true" size="small" :sel-value="collegeCreditData" type="1" sub-type="4" @change="handleCascaderChange($event,4)"></my-cascader>
              </span>
              <div class="moon-clearfix"></div>
            </div>
            <div class="color-muted padding-tb-10 padding-lr-10" style="position: relative">
              <el-row :gutter="16">
                <el-col :span="12">
                  <div class="item-attend-block">
                    <div>{{$t("加分人数")}}</div>
                    <div>
                      <span class="font-size-25 color-grand">0</span>
                    </div>

                    <div class="pull-right">
                      <div class="credit-title add">
                        {{$t("加")}}
                      </div>
                    </div>
                    <div class="moon-clearfix"></div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="item-attend-block">
                    <div>{{$t("减分人数")}}</div>
                    <div>
                      <span class="font-size-25 color-grand">0</span>
                    </div>

                    <div class="pull-right">
                      <div class="credit-title minus">
                        {{$t("减")}}
                      </div>
                    </div>
                    <div class="moon-clearfix"></div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>
          <el-card :body-style="{padding: '0px'}" class="margin-top-20" style="height: 500px;overflow-y: auto" v-if="userType == 4">
            <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
              <span class="color-muted" style="font-weight: bold;position: relative; top: 5px;">
                <i class="fa fa-line-chart"></i>
                <span>{{$t("设备状态")}}</span>
              </span>
            </div>
            <div class="color-muted padding-tb-10 padding-lr-10" style="position: relative">
              <el-timeline>
                <el-timeline-item :hide-timestamp="true" timestamp="2018/4/12" placement="top">
                  <el-card class="font-size-12" :body-style="{padding: '10px'}">
                    <div class="color-muted">
                      <span class="color-grand">xxxxx设备</span>
                      <el-tag size="mini" type="danger" class="margin-left-5">{{$t("离线")}}</el-tag>
                      <el-tag size="mini" type="info" class="margin-left-5">{{$t("一体机本地版")}}</el-tag>
                    </div>
                    <div class="margin-top-5">
                      <span class="color-disabeld">{{$t("SN")}}: xxxxxxxxx</span>
                    </div>
                    <div class="margin-top-5">
                      <span class="color-muted">{{$t("位置")}}: xxxxxxxxx</span>
                    </div>
                    <div class="margin-top-5 color-disabeld">
                      <i class="fa fa-clock-o"></i>
                      <span>2011-11-11 11:11:11</span>
                    </div>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-card>

          <el-card :body-style="{padding: '0px'}" class="margin-top-20" style="height: 500px;overflow-y: auto" v-if="userType == 5">
            <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
              <span class="color-muted" style="font-weight: bold;position: relative; top: 5px;">
                <i class="fa fa-line-chart"></i>
                <span>{{$t("素质学分动态")}}</span>
              </span>
            </div>
            <div class="color-muted padding-tb-10 padding-lr-10" style="position: relative">
              <el-timeline>
                <el-timeline-item :hide-timestamp="true" timestamp="2018/4/12" placement="top">
                  <el-card class="font-size-12" :body-style="{padding: '10px'}">
                    <div class="color-muted">
                      <span class="color-grand">xxxxx姓名</span>
                      <el-tag size="mini" type="danger" class="margin-left-5">{{$t("加分")}}</el-tag>
                      <el-tag size="mini" type="danger" class="margin-left-5">
                        <i class="fa fa-tag"></i>
                        1{{$t("分")}}
                      </el-tag>
                    </div>
                    <div class="margin-top-5">
                      <span class="color-disabeld">xxxxxxx班级}</span>
                    </div>
                    <div class="margin-top-5">
                      <span class="color-muted">xxxxxxxxxxxxxxxxxx内容</span>
                    </div>
                    <div class="margin-top-5 color-disabeld">
                      <i class="fa fa-clock-o"></i>
                      <span>2011-11-11 11:11:11</span>
                    </div>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
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
  import MyCascader from "../components/utils/select/MyCascader";
  export default {
    name: 'index',
    components: {MyCascader, MySelect,LineChart},
    data(){
      return {
        userTypeList: [],
        classList: [],
        userType: 1,
        collegeData: [],
        collegeTabData: [],
        collegeCreditData: [],
        deptData: [],
        tableData: [],
        userType: '5',
        activeName: 'notice',
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
      handleCascaderChange(data, type){
        switch (type) {
          case 1:
            this.collegeData = data;
            break;
          case 2:
            this.deptData = data;
            break;
          case 3:
            this.collegeTabData = data;
            break;
          case 4:
            this.collegeCreditData = data;
            break;
        }
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
.top-content{
  padding: 10px;
  height: 150px;
}
.top-table-content{
  padding: 10px;
  height: 202px;
}
.bottom-content{
  height: 35px;
  line-height: 35px;
  border-top: 1px solid #dddddd;
}
.item-attend-block{
  background: #f2f2f2;
  height: 100%;
  padding: 10px 10px;
  border-radius: 5px;
  position: relative;
}
.item-attend-line-ver{
  background: #f2f2f2;
  height:220px;
  width: 1px;
}
.credit-title{
  font-size: 20px;
  color: #FFFFFF;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  padding: 10px;
}
.add{
  background: rgb(160, 207, 255);
}
.minus{
  background: rgb(253, 226, 226);
}
</style>
