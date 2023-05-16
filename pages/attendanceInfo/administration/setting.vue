<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">考勤设置</template>

      <div slot="tab">
        <el-row>
          <el-col :span="18">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加考勤组")}}</el-button>
          </el-col>
          <el-col :span="6" class="text-right">
            <!--<div class="layout-inline text-right">
              <my-select size="small" :clearable="true" :group="true" :options="typeList" class="layout-item" @change="handleSelect"></my-select>
              <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleChange" style="position: relative; top: 1px;"></my-date-picker>
              <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('登录人')" @click="search"></my-input-button>
            </div>-->
          </el-col>
        </el-row>
      </div>

      <div slot="content">
        <el-table
          ref="refTable"
          :data="tableData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          row-key="id"
          :max-height="tableHeight.height"
          style="width: 100%">
          <el-table-column
            align="center"
            :label="$t('名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.group_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.group_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('人数')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.user_size}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.user_size}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('考勤时间')">
            <template slot-scope="scope">
              <!--<el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <div v-if="scope.row.upper_time">{{scope.row.upper_time}}-{{scope.row.lower_time}}</div>
                  <div v-if="scope.row.upper_time2">{{scope.row.upper_time2}}-{{scope.row.lower_time2}}</div>
                  <div v-if="scope.row.upper_time3">{{scope.row.upper_time3}}-{{scope.row.lower_time3}}</div>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <div v-if="scope.row.upper_time">{{scope.row.upper_time}}-{{scope.row.lower_time}}</div>
                  <div v-if="scope.row.upper_time2">{{scope.row.upper_time2}}-{{scope.row.lower_time2}}</div>
                  <div v-if="scope.row.upper_time3">{{scope.row.upper_time3}}-{{scope.row.lower_time3}}</div>
                </div>
              </el-popover>-->


              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-left">
                  <div v-if="scope.row.work_day_setting" v-for="(item, index) in JSON.parse(scope.row.work_day_setting)" :key="index">
                    <div>
                      <span v-if="JSON.parse(scope.row.work_day_setting)[index].weekSwitch == true">
                        {{weekNoText2Info(index)}}:{{JSON.parse(scope.row.work_day_setting)[index].startTime}}-{{JSON.parse(scope.row.work_day_setting)[index].endTime}}
                      </span>
                    </div>
                  </div>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span class="color-grand" v-if="scope.row.upper_time">{{scope.row.upper_time}}-{{scope.row.lower_time}}</span>
                </div>
              </el-popover>

              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-left">
                  <div v-if="scope.row.work_day_setting2" v-for="(item, index) in JSON.parse(scope.row.work_day_setting2)" :key="index">
                    <div>
                      <span v-if="JSON.parse(scope.row.work_day_setting2)[index].weekSwitch == true">
                        {{weekNoText2Info(index)}}:{{JSON.parse(scope.row.work_day_setting2)[index].startTime}}-{{JSON.parse(scope.row.work_day_setting2)[index].endTime}}
                      </span>
                    </div>
                  </div>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span class="color-grand" v-if="scope.row.upper_time2">{{scope.row.upper_time2}}-{{scope.row.lower_time2}}</span>
                </div>
              </el-popover>

              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-left">
                  <div v-if="scope.row.work_day_setting3" v-for="(item, index) in JSON.parse(scope.row.work_day_setting3)" :key="index">
                    <div>
                      <span v-if="JSON.parse(scope.row.work_day_setting3)[index].weekSwitch == true">
                        {{weekNoText2Info(index)}}:{{JSON.parse(scope.row.work_day_setting3)[index].startTime}}-{{JSON.parse(scope.row.work_day_setting3)[index].endTime}}
                      </span>
                    </div>
                  </div>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span class="color-grand" v-if="scope.row.upper_time3">{{scope.row.upper_time3}}-{{scope.row.lower_time3}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('监督员')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <el-tag size="mini" type="success" class="margin-right-5" v-for="(item, index) in JSON.parse(scope.row.supervisors)" :key="index">{{item.name}}</el-tag>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <el-tag size="mini" type="success" class="margin-right-5" v-for="(item, index) in JSON.parse(scope.row.supervisors)" :key="index">{{item.name}}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('考勤方式')">
            <template slot-scope="scope">
              <span v-if="scope.row.rull_type == 0" class="color-muted">{{$t("全校")}}</span>
              <el-popover v-if="scope.row.rull_type != 0" trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <span v-if="scope.row.sign_type == 0">{{$t("LBS地图定位考勤")}}</span>
                  <span v-if="scope.row.sign_type == 0">{{$t("人脸识别考勤机")}}</span>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span v-if="scope.row.sign_type == 0">{{$t("LBS地图定位考勤")}}</span>
                  <span v-if="scope.row.sign_type == 1">{{$t("人脸识别考勤机")}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('考勤地点')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <el-tag v-if="scope.row.sign_type == 0" class="margin-right-5 margin-bottom-5" size="mini" type="success" v-for="(item, index) in JSON.parse(scope.row.area_range)" :key="index">{{item.name}}</el-tag>
                  <el-tag v-if="scope.row.sign_type == 1" class="margin-right-5 margin-bottom-5" size="mini" type="success" v-for="(item, index) in JSON.parse(scope.row.device_sns)" :key="index">{{item}}</el-tag>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <el-tag v-if="scope.row.sign_type == 0" class="margin-right-5" size="mini" type="success" v-for="(item, index) in JSON.parse(scope.row.area_range)" :key="index">{{item.name}}</el-tag>
                  <el-tag v-if="scope.row.sign_type == 1" class="margin-right-5" size="mini" type="success" v-for="(item, index) in JSON.parse(scope.row.device_sns)" :key="index">{{item}}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-edit color-grand margin-right-5" @click="editInfo(scope.row)"></i>
              <i v-if="scope.row.rull_type != 0" class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal width-style="1200px" :visible="modalVisible" :title="$t('设置分组')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="120px">
          <el-form-item :label="$t('组名')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('参与考勤')" prop="partUserIds">
            <el-popover
              popper-class="custom-popper-class-form"
              placement="right"
              width="700"
              trigger="click"
              @show="handleShowTeacher(1)"
              @hide="handleHideeacher">
              <div>
                <teacher-tree-and-list ref="popverPartRef" :sel-arr="form.partUserIds" set-type="check" @select="handleSelUser($event,1)"></teacher-tree-and-list>
              </div>
              <el-button slot="reference" type="success" plain size="small">{{$t("添加")}}</el-button>
            </el-popover>
            <span class="color-warning margin-left-10">
              <i class="fa fa-user"></i>
              {{$t("已选择")}}{{form.partUserIds.length}}{{$t("人员")}}
            </span>
          </el-form-item>
          <el-form-item :label="$t('监督员')" prop="auditUserIds">
            <el-popover
              popper-class="custom-popper-class-form"
              placement="right"
              width="700"
              trigger="click"
              @show="handleShowTeacher(2)"
              @hide="handleHideeacher">
              <div>
                <teacher-tree-and-list ref="popverAuditRef" :sel-arr="form.auditUserIds" set-type="check" @select="handleSelUser($event,2)"></teacher-tree-and-list>
              </div>
              <el-button slot="reference" type="success" plain size="small">{{$t("添加")}}</el-button>
            </el-popover>
            <span class="color-warning margin-left-10">
              <i class="fa fa-user"></i>
              {{$t("已选择")}}{{form.auditUserIds.length}}{{$t("人员")}}
            </span>
          </el-form-item>
          <el-form-item :label="$t('时间设置')">
            <div class="margin-bottom-5">
              <el-button-group>
                <el-button size="mini" :type="form.workTimes == 1 ? 'primary' : 'default'" @click="handleChange($event, 1)">{{$t('一天1次上下班')}}</el-button>
                <el-button size="mini" :type="form.workTimes == 2 ? 'primary' : 'default'" @click="handleChange($event, 2)">{{$t('一天2次上下班')}}</el-button>
                <el-button size="mini" :type="form.workTimes == 3 ? 'primary' : 'default'" @click="handleChange($event, 3)">{{$t('一天3次上下班')}}</el-button>
              </el-button-group>
              <span>
                <my-check :sel-value="form.workTimesSwitch" @change="handleChange($event, 4)">
                  <span>{{$t('打卡时间段设置')}}</span>
                </my-check>
              </span>
            </div>
            <div v-for="(item, index) in form.timeTimes" :key="index">
              <span class="font-size-12 color-muted margin-right-5">{{$t("第")}}{{index+1}}{{$t("次")}}{{$t("默认班次时间")}}</span>
              <el-time-picker
                size="mini"
                :clearable="false"
                value-format="HH:mm"
                format="HH:mm"
                v-model="item.startTime"
                :placeholder="$t('选择时间')"
                class="layout-item"
                style="width: 95px"
                @change="handleChangeTime($event, item, index, 1)">
              </el-time-picker>
              -
              <el-time-picker
                size="mini"
                :clearable="false"
                value-format="HH:mm"
                format="HH:mm"
                v-model="item.endTime"
                :placeholder="$t('选择时间')"
                class="layout-item"
                style="width: 95px"
                @change="handleChangeTime($event, item, index, 2)">
              </el-time-picker>
              <span v-if="form.workTimesSwitch == true">
                <label class="font-size-12 color-muted">
                {{$t("上班前")}}
                  <el-input size="mini" v-model="item.upBefore" style="width: 50px"></el-input>
                  {{$t("分钟")}}
                </label>
                <label class="font-size-12 color-muted">
                  {{$t("下班后")}}
                  <el-input size="mini" v-model="item.downAfter" style="width: 50px"></el-input>
                  {{$t("分钟")}}
                </label>
              </span>
            </div>
          </el-form-item>
          <el-form-item :label="$t('工作日设置')">
            <el-row :gutter="4" style="margin-left: 0px !important;margin-right: 0px !important;">
              <el-col :span="8" v-if="form.workTimes == 1 || form.workTimes == 2 || form.workTimes == 3">
                <el-card :body-style="{padding: '0px 5px'}">
                  <div>
                    <span class="font-size-12 color-muted">{{$t("第一次上下班")}}</span>
                  </div>
                  <div class="margin-top-5">
                    <ul>
                      <li class="font-size-12 color-muted" v-for="(item, index) in form.workTimeWeek1" :key="index">
                        <my-check :sel-value="item.weekSwitch" @change="handleWeekSwitch($event, item, index)">
                          <span class="font-size-12 color-muted" style="font-weight: normal">{{weekNoText2Info(index+1)}}</span>
                        </my-check>
                        <span>
                          <el-time-picker
                            size="mini"
                            :clearable="false"
                            value-format="HH:mm"
                            format="HH:mm"
                            v-model="item.startTime"
                            :placeholder="$t('选择时间')"
                            class="layout-item"
                            style="width: 95px"
                            @change="handleChangeTime($event, item, index, 3)">
                          </el-time-picker>
                          -
                          <el-time-picker
                            size="mini"
                            :clearable="false"
                            value-format="HH:mm"
                            format="HH:mm"
                            v-model="item.endTime"
                            :placeholder="$t('选择时间')"
                            class="layout-item"
                            style="width: 95px"
                            @change="handleChangeTime($event, item, index, 4)">
                          </el-time-picker>
                        </span>
                      </li>
                    </ul>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8" v-if="form.workTimes == 2 || form.workTimes == 3">
                <el-card :body-style="{padding: '0px 5px'}">
                  <div>
                    <span class="font-size-12 color-muted">{{$t("第二次上下班")}}</span>
                  </div>
                  <div class="margin-top-5">
                    <ul>
                      <li class="font-size-12 color-muted" v-for="(item, index) in form.workTimeWeek2" :key="index">
                        <my-check :sel-value="item.weekSwitch" @change="handleWeekSwitch($event, item, index)">
                          <span class="font-size-12 color-muted" style="font-weight: normal">{{weekNoText2Info(index+1)}}</span>
                        </my-check>
                        <span>
                          <el-time-picker
                            size="mini"
                            :clearable="false"
                            value-format="HH:mm"
                            format="HH:mm"
                            v-model="item.startTime"
                            :placeholder="$t('选择时间')"
                            class="layout-item"
                            style="width: 95px"
                            @change="handleChangeTime($event, item, index, 5)">
                          </el-time-picker>
                          -
                          <el-time-picker
                            size="mini"
                            :clearable="false"
                            value-format="HH:mm"
                            format="HH:mm"
                            v-model="item.endTime"
                            :placeholder="$t('选择时间')"
                            class="layout-item"
                            style="width: 95px"
                            @change="handleChangeTime($event, item, index, 6)">
                          </el-time-picker>
                        </span>
                      </li>
                    </ul>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8" v-if="form.workTimes == 3">
                <el-card :body-style="{padding: '0px 5px'}">
                  <div>
                    <span class="font-size-12 color-muted">{{$t("第三次上下班")}}</span>
                  </div>
                  <div class="margin-top-5">
                    <ul>
                      <li class="font-size-12 color-muted" v-for="(item, index) in form.workTimeWeek3" :key="index">
                        <my-check :sel-value="item.weekSwitch" @change="handleWeekSwitch($event, item, index)">
                          <span class="font-size-12 color-muted" style="font-weight: normal">{{weekNoText2Info(index+1)}}</span>
                        </my-check>
                        <span>
                          <el-time-picker
                            size="mini"
                            :clearable="false"
                            value-format="HH:mm"
                            format="HH:mm"
                            v-model="item.startTime"
                            :placeholder="$t('选择时间')"
                            class="layout-item"
                            style="width: 95px"
                            @change="handleChangeTime($event, item, index, 7)">
                          </el-time-picker>
                          -
                          <el-time-picker
                            size="mini"
                            :clearable="false"
                            value-format="HH:mm"
                            format="HH:mm"
                            v-model="item.endTime"
                            :placeholder="$t('选择时间')"
                            class="layout-item"
                            style="width: 95px"
                            @change="handleChangeTime($event, item, index, 8)">
                          </el-time-picker>
                        </span>
                      </li>
                    </ul>
                  </div>
                </el-card>
              </el-col>
            </el-row>
            <div>
              <span>
                <my-check :sel-value="form.autoSwitch" @change="handleChange($event, 5)">
                  {{$t("法定节假日自动调休")}}
                </my-check>
              </span>
            </div>
          </el-form-item>
          <el-form-item :label="$t('特殊日期')">
            <div>
              <el-date-picker
                type="dates"
                value-format="yyyy-MM-dd"
                v-model="form.mustTimes"
                :placeholder="$t('选择一个或多个日期')"
                style="width: 400px">
              </el-date-picker>
              <span class="color-muted">{{$t("必须打卡日期")}}</span>
            </div>
            <div class="margin-top-10">
              <el-date-picker
                type="dates"
                value-format="yyyy-MM-dd"
                v-model="form.noMustTimes"
                :placeholder="$t('选择一个或多个日期')"
                style="width: 400px">
              </el-date-picker>
              <span class="color-muted">{{$t("不用打卡日期")}}</span>
            </div>
          </el-form-item>
          <el-form-item :label="$t('旷工设置')">
            <div>
              <my-radio :sel-value="form.unSignRule" label="1" @change="changeStatus($event,1)">{{$t("旷工半天规则1")}}</my-radio>
              <span class="color-muted font-size-12">
                {{$t("上班时间未满")}}
                <el-input size="small" v-model="form.unSignRuleTime1" style="width: 80px;"></el-input>
                {{$t("小时/天")}}
              </span>
            </div>
            <div>
              <my-radio :sel-value="form.unSignRule" label="2" @change="changeStatus($event,2)">{{$t("旷工半天规则2")}}</my-radio>
              <span class="color-muted font-size-12">
                {{$t("迟到+早退累计")}}
                <el-input size="small" v-model="form.unSignRuleTime2" style="width: 80px;"></el-input>
                {{$t("小时/天")}}
              </span>
            </div>
            <div>
              <span class="color-muted font-size-12">
                <label class="color-grand font-size-14" style="font-weight: bold">{{$t("旷工1天规则")}}</label>
                <span>{{$t("打卡次数<=")}}</span>
                <el-input size="small" v-model="form.unSignRuleTime3" style="width: 80px;"></el-input>
                {{$t("次/天")}}
              </span>
            </div>
          </el-form-item>
          <el-form-item :label="$t('旷工月统计规则')">
            <div>
              <label class="color-grand font-size-14" style="font-weight: bold">{{$t("旷工半天统计规则")}}</label>
              <span class="color-muted font-size-12">
                {{$t("迟到+早退累计")}}
                <el-input size="small" v-model="form.unSignStaticRuleTime1" style="width: 80px;"></el-input>
                {{$t("次/月")}}
              </span>
            </div>
            <div>
              <div class="layout-inline">
                <label class="color-grand font-size-14 layout-item" style="font-weight: bold;position: relative; top: -40px;">{{$t("旷工1天统计规则")}}</label>
                <div class="color-muted font-size-12 layout-item">
                  <div>
                    {{$t("迟到+早退累计<=")}}
                    <el-input size="small" v-model="form.unSignStaticRuleTime2" style="width: 80px;"></el-input>
                    {{$t("次/月")}}
                  </div>
                  <div>
                    {{$t("迟到+早退累计")}}
                    <el-input size="small" v-model="form.unSignStaticRuleTime3" style="width: 80px;"></el-input>
                    {{$t("小时/月")}}
                  </div>
                </div>
              </div>
            </div>
          </el-form-item>
          <el-form-item :label="$t('考勤地点')" prop="deviceList">
            <div>
              <my-radio :sel-value="form.addrSwitch" label="0" @change="changeStatus($event,3)" :disabled="true">{{$t("LBS地图定位考勤")}}<span class="color-danger">({{$t("暂未开放")}})</span></my-radio>
            </div>
            <div>
              <my-radio :sel-value="form.addrSwitch" label="1" @change="changeStatus($event,4)">{{$t("人脸识别机考勤")}}</my-radio>
              <el-row :gutter="8">
                <el-col :span="6">
                  <div class="margin-bottom-5">
                    <span class="color-muted">{{$t("一体机设备")}}</span>
                  </div>
                  <el-card :body-style="{padding: '5px 5px'}" style="width: 240px; max-height: 200px; overflow: auto">
                    <span v-if="tableDeviceList.length == 0" class="color-disabeld">{{$t("暂无数据")}}</span>
                    <ul v-else>
                      <el-checkbox-group v-model="form.deviceList">
                        <li v-for="(item, index) in tableDeviceList" :key="index">
                          <el-checkbox :label="item.value" :key="index">{{item.label}}</el-checkbox>
                        </li>
                      </el-checkbox-group>
                    </ul>
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <div class="margin-bottom-5">
                    <span class="color-muted">{{$t("二维码/刷卡设备")}}</span>
                  </div>
                  <el-card :body-style="{padding: '5px 5px'}" style="width: 240px; max-height: 200px; overflow: auto">
                    <span v-if="tableDeviceList.length == 0" class="color-disabeld">{{$t("暂无数据")}}</span>
                    <ul v-else>
                      <el-checkbox-group v-model="form.deviceList">
                        <li v-for="(item, index) in tableDeviceDoorList" :key="index">
                          <el-checkbox :label="item.value" :key="index">{{item.label}}</el-checkbox>
                        </li>
                      </el-checkbox-group>
                    </ul>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" :content="tips" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import MyPagination from "../../../components/MyPagination";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {auditStatusText, MessageError, MessageSuccess, MessageWarning, weekNoText2} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyUserType from "../../../components/utils/MyUserType";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyInputButton from "../../../components/search/MyInputButton";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import ClassroomTreeAndList from "../../../components/utils/treeAndList/ClassroomTreeAndList";
  import MyCheck from "../../../components/MyCheck";
  import DormBuildTreeAndList from "../../../components/utils/treeAndList/DormBuildTreeAndList";
  import MyRadio from "../../../components/MyRadio";
  import adminSettingValidater from "../../../utils/validater/adminSettingValidater";
  export default {
    mixins: [mixins, adminSettingValidater],
    components: {
      MyRadio,
      DormBuildTreeAndList,
      MyCheck,
      MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal,ClassroomTreeAndList,MyCheck,MySelect,DormBuildTreeAndList},
    data(){
      return {
        tableData: [],
        tableSettingData: [],
        searchDate: [],
        typeList: [],
        sectionList: [],
        tableDayInfo: [],
        searchKey: '',
        visible: false,
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        modalOtherVisible: false,
        clearTime: '',
        action: '',
        subTitle: '',
        errorTips: '',
        tips: '',
        tableDeviceList: [],
        tableDeviceDoorList: [],
        form: {
          id: '',
          name: '',
          workTimes: 1,
          workTimesSwitch: false,
          timeTimes: [
            {
              startTime: '00:00',
              endTime: '00:00',
              upBefore: '',
              downAfter: ''
            }
          ],
          workTimeWeek1: [
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'}
          ],
          workTimeWeek2: [
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'}
          ],
          workTimeWeek3: [
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'}
          ],
          autoSwitch: false,
          mustTimes: [],
          noMustTimes: [],
          unSignRule: "1",
          unSignRule1: false,
          unSignRule2: false,
          unSignRuleTime1: '',
          unSignRuleTime2: '',
          unSignRuleTime3: '',
          unSignStaticRule1: false,
          unSignStaticRule2: false,
          unSignStaticRuleTime1: '',
          unSignStaticRuleTime2: '',
          unSignStaticRuleTime3: '',
          addrSwitch: "1",
          deviceList: [],
          partUserIds: [],
          auditUserIds: []
        }
      }
    },
    created() {
      this.init();
      this.initDevice("1,2,3,4", "3,4", 1);
      this.initDevice("4", "6", 2);
    },
    methods: {
      async init(){
        //await this.getSessionInfo();
        this.initPage();
      },
      initPage(){
        let params = {
          page: this.page,
          num: this.num
        };
        this.$axios.get(common.attend_admin_setting_page, {params:params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initDevice(sceneType, deviceType, type){
        let arr = [];
        let params = {
          page: 1,
          num: 999,
          sceneType: sceneType,
          deviceType: deviceType
        };
        this.$axios.get(common.device_join_in_list, {params:params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['label'] = res.data.data.list[i].name ? res.data.data.list[i].name : res.data.data.list[i].sn;
              res.data.data.list[i]['value'] = res.data.data.list[i].sn;
            }
            if (type == 1){
              this.tableDeviceList = res.data.data.list;
            }
            if (type == 2){
              this.tableDeviceDoorList = res.data.data.list;
            }
          }
        });
      },
      initSetting(row){
        let params = {};
        if (row){
          params = {
            checkbedRuleId: row.id
          };
        }
        this.$axios.get(common.attend_dorm_setting_info, {params:params}).then(res => {
          if (res.data.data){
            this.tableDayInfo = res.data.data;
          }
        });
      },
      addInfo(){
        this.initSetting();
        this.modalVisible = true;
      },
      syncInfo(){
        this.oprType = "sync";
        this.tips = this.$t("当天已考勤数据会被全部删除，是否确认？");
        this.visibleConfim = true;
      },
      otherInfo(){
        this.modalOtherVisible = true;
      },
      editInfo(row){
        console.log(row);
        let parts = row.add_teachers ? JSON.parse(row.add_teachers) : [];
        let audtis = row.supervisors ? JSON.parse(row.supervisors) : [];
        let arr = [];
        let arrAudit = [];
        let arrTimes = [];
        let weekSetting1 = row.work_day_setting ? JSON.parse(row.work_day_setting) : '';
        let weekSetting2 = row.work_day_setting2 ? JSON.parse(row.work_day_setting2) : '';
        let weekSetting3 = row.work_day_setting3 ? JSON.parse(row.work_day_setting3) : '';
        let mustTimes = row.must_attend_days ? JSON.parse(row.must_attend_days): [];
        let notMustTimes = row.not_attend_days ? JSON.parse(row.not_attend_days): [];
        let deviceList = row.device_sns ? JSON.parse(row.device_sns): [];
        this.form = {
          id: row.id,
          name: row.group_name,
          workTimes: row.day_times,
          workTimesSwitch: row.sign_time_setting,
          timeTimes: [],
          workTimeWeek1: [
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'}
          ],
          workTimeWeek2: [
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'}
          ],
          workTimeWeek3: [
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'}
          ],
          autoSwitch: row.auto_holiday,
          mustTimes: [],
          noMustTimes: [],
          unSignRule: ''+row.absent_half_rule_type,
          unSignRule1: false,
          unSignRule2: false,
          unSignRuleTime1: row.absent_half_rule_type == 1 ? row.absent_half_rule_hours : 0,
          unSignRuleTime2: row.absent_half_rule_type == 2 ? row.absent_half_rule_hours : 0,
          unSignRuleTime3: row.absent_full_rule_sign_times,
          unSignStaticRule1: false,
          unSignStaticRule2: false,
          unSignStaticRuleTime1: row.absent_half_rule_times,
          unSignStaticRuleTime2: row.absent_full_rule_times,
          unSignStaticRuleTime3: row.absent_full_rule_hours,
          addrSwitch: ''+row.sign_type,
          deviceList: [],
          partUserIds: [],
          auditUserIds: []
        };
        for (let i in weekSetting1){
          //this.form.workTimeWeek1[i-1] = {weekSwitch: true, startTime: weekSetting1[i].startTime, endTime: weekSetting1[i].endTime};
          this.$set(this.form.workTimeWeek1, i-1, {weekSwitch: true, startTime: weekSetting1[i].startTime, endTime: weekSetting1[i].endTime});
        }

        for (let i in weekSetting2){
          //this.form.workTimeWeek2[i-1] = {weekSwitch: true, startTime: weekSetting2[i].startTime, endTime: weekSetting2[i].endTime};
          this.$set(this.form.workTimeWeek2, i-1, {weekSwitch:  true, startTime: weekSetting2[i].startTime, endTime: weekSetting2[i].endTime});
        }

        for (let i in weekSetting3){
          //this.form.workTimeWeek3[i-1] = {weekSwitch: true, startTime: weekSetting3[i].startTime, endTime: weekSetting3[i].endTime};
          this.$set(this.form.workTimeWeek3, i-1, {weekSwitch:  true, startTime: weekSetting3[i].startTime, endTime: weekSetting3[i].endTime});
        }

        for (let i = 0; i < row.day_times; i++){
          if (i == 0){
            arrTimes[0] = {
              startTime: row.upper_time,
              endTime: row.lower_time,
              upBefore: row.before_stimer,
              downAfter: row.after_stimer
            };
          }
          if (i == 1){
            arrTimes[1] = {
              startTime: row.upper_time2,
              endTime: row.lower_time2,
              upBefore: row.before_stimer2,
              downAfter: row.after_stimer2
            };
          }
          if (i == 2){
            arrTimes[2] = {
              startTime: row.upper_time3,
              endTime: row.lower_time3,
              upBefore: row.before_stimer3,
              downAfter: row.after_stimer3
            };
          }
        }

        for (let i = 0; i < parts.length; i++){
          arr.push({
            user_id: parts[i]
          });
        }
        for (let i = 0; i < audtis.length; i++){
          arrAudit.push({
            user_id: audtis[i].userId,
            name: audtis[i].name,
            real_name: audtis[i].name,
          });
        }

        this.$set(this.form, 'deviceList', deviceList);
        this.$set(this.form, 'mustTimes', mustTimes);
        this.$set(this.form, 'noMustTimes', notMustTimes);
        this.$set(this.form, 'timeTimes', arrTimes);
        this.$set(this.form, 'partUserIds', arr);
        this.$set(this.form, 'auditUserIds', arrAudit);
        this.initSetting(row);
        this.modalVisible = true;
      },
      resetInfo(row){
        this.oprType = "reset";
        this.form.id = row.id;
        this.subTitle = row.name;
        this.tips = this.$t("确认需要重置时间吗？");
        this.visibleConfim = true;
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      sizeChange(event){
        this.page = 1;
        this.num = event;
        this.init();
      },
      currentPage(event){
        this.page = event;
        this.init();
      },
      jumpPage(data){
        this.page = data;
        this.init();
      },
      handleSelect(data){
        this.form.type = data;
      },
      deleteInfo(row){
        this.oprType = "del";
        this.form.id = row.id;
        this.subTitle = row.name;
        this.tips = "确认需要删除该信息？";
        this.visibleConfim = true;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          groupId: this.form.id
        };
        url = common.attend_admin_setting_delete;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.visibleConfim = false;
          this.dialogLoading = false;
        });
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      closeDialog(event){
        this.form = {
          id: '',
          name: '',
          workTimes: 1,
          workTimesSwitch: false,
          timeTimes: [
            {
              startTime: '00:00',
              endTime: '00:00',
              upBefore: '',
              downAfter: ''
            }
          ],
          workTimeWeek1: [
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'}
          ],
          workTimeWeek2: [
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'}
          ],
          workTimeWeek3: [
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'},
            {weekSwitch: false, startTime: '00:00', endTime: '00:00'}
          ],
          autoSwitch: false,
          mustTimes: [],
          noMustTimes: [],
          unSignRule: "1",
          unSignRule1: false,
          unSignRule2: false,
          unSignRuleTime1: '',
          unSignRuleTime2: '',
          unSignRuleTime3: '',
          unSignStaticRule1: false,
          unSignStaticRule2: false,
          unSignStaticRuleTime1: '',
          unSignStaticRuleTime2: '',
          unSignStaticRuleTime3: '',
          addrSwitch: "1",
          deviceList: [],
          partUserIds: [],
          auditUserIds: []
        };
        this.subTitle = "";
        this.oprType == "";
        if (this.$refs['popverPartRef']){
          this.$refs.popverPartRef._handleResetChange();
        }
        if (this.$refs['popverAuditRef']){
          this.$refs.popverAuditRef._handleResetChange();
        }
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      okDialog(event){
        let url = "";
        let _self = this;
        let errNum = 0;
        let errTimeNum = 0;
        let errWeekNum1 = 0;
        let errWeekNum2 = 0;
        let errWeekNum3 = 0;
        //let regNum = /^[1-9]*$/;
        let regNum = /^\+?[1-9]\d*$/;
        let userIds = [];
        let auditIds = [];
        let weekDay1 = {};
        let weekDay2 = {};
        let weekDay3 = {};
        this.errorTips = "";
        this.$refs['form'].validate((valid) => {
          if (valid) {
            let params = {
              groupName: this.form.name,
              departIds: [],
              dayTimes: this.form.workTimes,
              signTimeSetting: this.form.workTimesSwitch,
              autoHoliday: this.form.autoSwitch,
              mustAttendDays: (this.form.mustTimes && this.form.mustTimes.length > 0) ? JSON.stringify(this.form.mustTimes) : [],
              notAttendDays: (this.form.noMustTimes && this.form.noMustTimes.length > 0) ? JSON.stringify(this.form.noMustTimes) : [],
              absentHalfRuleType: this.form.unSignRule,
              absentHalfRuleHours: this.form.unSignRule == 1 ? this.form.unSignRuleTime1 : this.form.unSignRuleTime2,
              absentFullRuleSignTimes: this.form.unSignRuleTime3,
              absentHalfRuleTimes: this.form.unSignStaticRuleTime1,
              absentFullRuleTimes: this.form.unSignStaticRuleTime2,
              absentFullRuleHours: this.form.unSignStaticRuleTime3,
              signType: this.form.addrSwitch,
              deviceSns: (this.form.deviceList && this.form.deviceList.length > 0) ? JSON.stringify(this.form.deviceList) : []
            };

            for (let i = 0; i < this.form.timeTimes.length; i++){
              if (this.form.workTimesSwitch == true){
                if (this.form.timeTimes[i].upBefore == "" || regNum.test(this.form.timeTimes[i].upBefore) == false){
                  errTimeNum++;
                }else if (this.form.timeTimes[i].downAfter == "" || regNum.test(this.form.timeTimes[i].downAfter) == false){
                  errTimeNum++;
                }
              }
              if (i == 0){
                params['upperTime'] = this.form.timeTimes[0].startTime;
                params['lowerTime'] = this.form.timeTimes[0].endTime;
                params['beforeStimer'] = this.form.timeTimes[0].upBefore;
                params['afterStimer'] = this.form.timeTimes[0].downAfter;
              }
              if (i == 1){
                params['upperTime2'] = this.form.timeTimes[1].startTime;
                params['lowerTime2'] = this.form.timeTimes[1].endTime;
                params['beforeStimer2'] = this.form.timeTimes[1].upBefore;
                params['afterStimer2'] = this.form.timeTimes[1].downAfter;
              }
              if (i == 2){
                params['upperTime3'] = this.form.timeTimes[2].startTime;
                params['lowerTime3'] = this.form.timeTimes[2].endTime;
                params['beforeStimer3'] = this.form.timeTimes[2].upBefore;
                params['afterStimer3'] = this.form.timeTimes[2].downAfter;
              }
            }

            for (let i = 0; i < this.form.workTimeWeek1.length; i++){
              if (i == 0 && this.form.workTimeWeek1[i].weekSwitch == true){
                weekDay1['one'] = this.form.workTimeWeek1[i];
              }else if (i == 1 && this.form.workTimeWeek1[i].weekSwitch == true){
                weekDay1['two'] = this.form.workTimeWeek1[i];
              }else if (i == 2 && this.form.workTimeWeek1[i].weekSwitch == true){
                weekDay1['three'] = this.form.workTimeWeek1[i];
              }else if (i == 3 && this.form.workTimeWeek1[i].weekSwitch == true){
                weekDay1['four'] = this.form.workTimeWeek1[i];
              }else if (i == 4 && this.form.workTimeWeek1[i].weekSwitch == true){
                weekDay1['five'] = this.form.workTimeWeek1[i];
              }else if (i == 5 && this.form.workTimeWeek1[i].weekSwitch == true){
                weekDay1['six'] = this.form.workTimeWeek1[i];
              }else if (i == 6 && this.form.workTimeWeek1[i].weekSwitch == true){
                weekDay1['seven'] = this.form.workTimeWeek1[i];
              }
            }
            params['workDaySetting'] = JSON.stringify(weekDay1);

            for (let i = 0; i < this.form.workTimeWeek2.length; i++){
              if (i == 0 && this.form.workTimeWeek2[i].weekSwitch == true){
                weekDay2['one'] = this.form.workTimeWeek2[i];
              }else if (i == 1 && this.form.workTimeWeek2[i].weekSwitch == true){
                weekDay2['two'] = this.form.workTimeWeek2[i];
              }else if (i == 2 && this.form.workTimeWeek2[i].weekSwitch == true){
                weekDay2['three'] = this.form.workTimeWeek2[i];
              }else if (i == 3 && this.form.workTimeWeek2[i].weekSwitch == true){
                weekDay2['four'] = this.form.workTimeWeek2[i];
              }else if (i == 4 && this.form.workTimeWeek2[i].weekSwitch == true){
                weekDay2['five'] = this.form.workTimeWeek2[i];
              }else if (i == 5 && this.form.workTimeWeek2[i].weekSwitch == true){
                weekDay2['six'] = this.form.workTimeWeek2[i];
              }else if (i == 6 && this.form.workTimeWeek2[i].weekSwitch == true){
                weekDay2['seven'] = this.form.workTimeWeek2[i];
              }
            }
            params['workDaySetting2'] = JSON.stringify(weekDay2);

            for (let i = 0; i < this.form.workTimeWeek3.length; i++){
              if (i == 0 && this.form.workTimeWeek3[i].weekSwitch == true){
                weekDay3['one'] = this.form.workTimeWeek3[i];
              }else if (i == 1 && this.form.workTimeWeek3[i].weekSwitch == true){
                weekDay3['two'] = this.form.workTimeWeek3[i];
              }else if (i == 2 && this.form.workTimeWeek3[i].weekSwitch == true){
                weekDay3['three'] = this.form.workTimeWeek3[i];
              }else if (i == 3 && this.form.workTimeWeek3[i].weekSwitch == true){
                weekDay3['four'] = this.form.workTimeWeek3[i];
              }else if (i == 4 && this.form.workTimeWeek3[i].weekSwitch == true){
                weekDay3['five'] = this.form.workTimeWeek3[i];
              }else if (i == 5 && this.form.workTimeWeek3[i].weekSwitch == true){
                weekDay3['six'] = this.form.workTimeWeek3[i];
              }else if (i == 6 && this.form.workTimeWeek3[i].weekSwitch == true){
                weekDay3['seven'] = this.form.workTimeWeek3[i];
              }
            }
            params['workDaySetting3'] = JSON.stringify(weekDay3);

            if (this.form.partUserIds.length > 0){
              for (let i = 0; i < this.form.partUserIds.length; i ++ ){
                userIds.push(this.form.partUserIds[i].user_id);
              }
              params['addTeachers'] = userIds.length > 0 ? JSON.stringify(userIds) : [];
            }

            if (this.form.auditUserIds.length > 0){
              for (let i = 0; i < this.form.auditUserIds.length; i ++ ){
                auditIds.push(
                  {
                    userId: this.form.auditUserIds[i].user_id,
                    name: this.form.auditUserIds[i].name ? this.form.auditUserIds[i].name : this.form.auditUserIds[i].real_name,
                  }
                );
              }
              params['supervisors'] = auditIds.length > 0 ? JSON.stringify(auditIds) : [];
            }

            if (this.form.unSignRule == 1){
              /*if (this.form.unSignRuleTime1 == ""){
                errNum++;
              }else */if (!!this.form.unSignRuleTime1 != "" && regNum.test(this.form.unSignRuleTime1) == false){
                errNum++;
              }
            }

            if (this.form.unSignRule == 2){
              /*if (this.form.unSignRuleTime2 == ""){
                errNum++;
              }else */if (!!this.form.unSignRuleTime2 && regNum.test(this.form.unSignRuleTime2) == false){
                errNum++;
              }
            }

            if (!!this.form.unSignRuleTime3 && regNum.test(this.form.unSignRuleTime3) == false){
              errNum++;
            }

            if ((!!this.form.unSignStaticRuleTime1 && regNum.test(this.form.unSignStaticRuleTime1) == false) || (!!this.form.unSignStaticRuleTime2 && regNum.test(this.form.unSignStaticRuleTime2) == false) || (!!this.form.unSignStaticRuleTime3 && regNum.test(this.form.unSignStaticRuleTime3) == false)){
              errNum++;
            }

            if (errTimeNum > 0){
              MessageWarning(this.$t("时间段不能为空且必须为整数，请检查"));
              return;
            }

            if (errNum > 0){
              MessageWarning(this.$t("内容存在空值或存在零的数据，请检查"));
              return;
            }

            if (this.form.workTimes == 1 || this.form.workTimes == 2 || this.form.workTimes == 3){
              for (let i in weekDay1){
                if (weekDay1[i].weekSwitch == true){
                  errWeekNum1++;
                }
              }
              if (errWeekNum1 == 0){
                MessageWarning(this.$t("请选择第一次上下班周数"));
                return;
              }
            }

            if (this.form.workTimes == 2 || this.form.workTimes == 3){
              for (let i in weekDay2){
                if (weekDay2[i].weekSwitch == true){
                  errWeekNum2++;
                }
              }
              if (errWeekNum2 == 0){
                MessageWarning(this.$t("请选择第二次上下班周数"));
                return;
              }
            }

            if (this.form.workTimes == 3){
              for (let i in weekDay3){
                if (weekDay3[i].weekSwitch == true){
                  errWeekNum3++;
                }
              }
              if (errWeekNum3 == 0){
                MessageWarning(this.$t("请选择第三次上下班周数"));
                return;
              }
            }

            if (this.form.id != ""){
              params['groupId'] = this.form.id;
              url = common.attend_admin_setting_edit;
            }else {
              url = common.attend_admin_setting_add;
            }

            this.dialogLoading = true;
            params = this.$qs.stringify(params);
            this.$axios.post(url, params, {loading: false}).then(res => {
              if (res.data.code == 200){
                this.modalVisible = false;
                this.init();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
            });
          }
        });
      },
      handleShowTeacher(type){
        if (type == 1){
          this.$refs.popverPartRef._handleOpen();
        }else if (type == 2){
          this.$refs.popverAuditRef._handleOpen();
        }
      },
      handleHideeacher(){
        if (this.$refs['popverPartRef']){
          this.$refs.popverPartRef._handleResetChange();
        }
        if (this.$refs['popverAuditRef']){
          this.$refs.popverAuditRef._handleResetChange();
        }
      },
      handleSelUser(data, type){
        if (type == 1){
          this.form.partUserIds = data;
        }else if (type == 2){
          this.form.auditUserIds = data;
        }
      },
      handleChange(data, type){
        let timeArr = [];
        if (type == 4){
          this.form.workTimesSwitch = data;
        }else if (type == 5){
          this.form.autoSwitch = data;
        }else {
          this.form.workTimes = type;
          let timeTimes = [].concat(this.form.timeTimes);
          for (let i = 0; i < type; i++){
            timeArr.push({
              startTime: timeTimes[i] ? timeTimes[i].startTime : '00:00',
              endTime: timeTimes[i] ? timeTimes[i].endTime : '00:00',
              upBefore: timeTimes[i] ? timeTimes[i].upBefore : '',
              downAfter: timeTimes[i] ? timeTimes[i].downAfter : ''
            });
            this.form.timeTimes = timeArr;
            /*this.form.timeTimes[i] = {
              startTime: this.form.timeTimes[i].startTime ? this.form.timeTimes[i].startTime : '00:00',
              endTime: this.form.timeTimes[i].endTime ? this.form.timeTimes[i].endTime : '00:00',
              upBefore: this.form.timeTimes[i].upBefore ? this.form.timeTimes[i].upBefore : '00:00',
              downAfter: this.form.timeTimes[i].downAfter ? this.form.timeTimes[i].downAfter : '00:00'
            }*/
          }
        }
      },
      handleChangeTime(data, item, index, type){
        if (type == 1){
          this.$set(this.form.timeTimes[index],'startTime', data);
          this.setAllWeekTimes(data, index, type);
        }else if (type == 2){
          this.$set(this.form.timeTimes[index],'endTime', data);
          this.setAllWeekTimes(data, index, type);
        }else if (type == 3){
          this.$set(this.form.workTimeWeek1[index],'startTime', data);
        }else if (type == 4){
          this.$set(this.form.workTimeWeek1[index],'endTime', data);
        }else if (type == 5){
          this.$set(this.form.workTimeWeek2[index],'startTime', data);
        }else if (type == 6){
          this.$set(this.form.workTimeWeek2[index],'endTime', data);
        }else if (type == 7){
          this.$set(this.form.workTimeWeek3[index],'startTime', data);
        }else if (type == 8){
          this.$set(this.form.workTimeWeek3[index],'endTime', data);
        }
      },
      changeStatus(data, type){
        if (type == 1){
          this.form.unSignRule = data;
        }else if (type == 2){
          this.form.unSignRule = data;
        }else if (type == 3){
          this.form.addrSwitch = data;
        }else if (type == 4){
          this.form.addrSwitch = data;
        }
      },
      changeRollCall(item){
        item.rollCall = !item.rollCall;
      },
      handleWeek(data, week){
        let _self = this;
        _self.tableDayInfo.map(function (item,index) {
          item.days.map(function (itemDay,index) {
            if (itemDay && itemDay.weekNo == week){
              itemDay.rollCall = data;
            }
          });
        });
      },
      weekNoText2Info(val){
        return weekNoText2(val)
      },
      handleWeekSwitch(data, item, index){
        item.weekSwitch = data;
      },
      setAllWeekTimes(data, index, type){
        let workTimeWeek = 'workTimeWeek' + (index+1);
        for (let i = 0; i < 7; i++){
          if (type == 1){
            this.$set(this.form[workTimeWeek][i],'startTime', data);
          }else if (type == 2){
            this.$set(this.form[workTimeWeek][i],'endTime', data);
          }
        }
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
  .setting-td{
    height: 100%;
    width: 100%;
    font-size: 12px;
    position: relative;
  }
  .setting-icon{
    height: 25px;
    width: 25px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
