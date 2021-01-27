<template>
  <div class="container">
    <div class="container">
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">量化统计</span>
          </div>
          <my-el-tree type="1" sub-type="4" @node-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div>
            <my-search-of-date size="small" :show-year="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType">
              <span slot="opr">
                <el-button type="warning" size="small" @click="addInfo">
                  <i class="fa fa-cog"></i>
                  {{$t("设置")}}
                </el-button>
              </span>
            </my-search-of-date>
          </div>
          <div class="margin-top-10">
            <div>
              <el-card shadow="never" :body-style="{padding: '5px 10px',height: '120px'}">
                <el-row :gutter="8">
                  <el-col :span="6">
                    <div class="rpStatic-top-item color-muted">
                      <div class="title font-size-12">{{$t("整体量化率")}}: </div>
                      <div class="margin-top-10 text-center">
                        <el-progress type="circle" :percentage="qtztRate" :width="80"></el-progress>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="rpStatic-top-item color-muted">
                      <div class="title font-size-12">{{$t("量化状态占比")}}: </div>
                      <div style="height: 100px">
                        <div v-if="allStatus.length <= 0" class="color-disabeld text-center" style="position: relative; top: 20%;">{{$t("暂无数据")}}</div>
                        <circle-chart v-else chart-id="statusId" :chart-title='$t("类型占比")' :data-key="allStatusKey" :data="allStatus"></circle-chart>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="rpStatic-top-item color-muted">
                      <div class="title font-size-12">{{$t("量化率占比(正面)")}}: </div>
                      <div style="height: 100px">
                        <div v-if="rightStatus.length <= 0" class="color-disabeld text-center" style="position: relative; top: 20%;">{{$t("暂无数据")}}</div>
                        <circle-chart v-else chart-id="rateRightId" :chart-title='$t("类型占比")' :data-key="rightStatusKey" :data="rightStatus"></circle-chart>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="rpStatic-top-item color-muted">
                      <div class="title font-size-12">{{$t("量化率占比(负面)")}}: </div>
                      <div>
                        <div style="height: 100px">
                          <div v-if="leftStatus.length <= 0" class="color-disabeld text-center" style="position: relative; top: 20%;">{{$t("暂无数据")}}</div>
                          <circle-chart v-else chart-id="rateLeftId" :chart-title='$t("级别占比")' :data-key="leftStatusKey" :data="leftStatus"></circle-chart>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </div>
          </div>

          <div class="layout-right-tab margin-top-10">
            <el-row class="layout-inline">
              <el-col :span="12">
                <span class="color-warning">{{$t("详细数据")}}</span>
                <span class="margin-left-10">
                  <i class="fa fa-user"></i>
                  <a href="javascript:;" class="color-grand" @click="detailStudent">{{$t("学生查询")}}</a>
                </span>
              </el-col>
              <el-col :span="12" class="text-right">

              </el-col>
            </el-row>
          </div>
          <div>
            <el-table
              :data="tableData"
              header-cell-class-name="custom-table-cell-bg"
              size="medium"
              :max-height="tableHeight5.height"
              style="width: 100%"
              @filter-change="fliterTable">
              <el-table-column
                align="center"
                :label="$t('日期')">

                <template slot-scope="scope">
                  <div>
                    <span v-if="searchTimeData.timeUnit == 5">{{$t("当前学期")}}</span>
                    <span v-if="searchTimeData.timeUnit == 2">{{$t("第")}} {{scope.row.weekNum}} {{$t("周")}}</span>
                    <span v-if="searchTimeData.timeUnit == null || searchTimeData.timeUnit == 1">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.busiTime}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          {{scope.row.busiTime}}
                        </div>
                      </el-popover>
                    </span>
                    <span v-if="searchTimeData.timeUnit == 3">{{scope.row.year}}-{{scope.row.month}}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('班级')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.className}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <a href="javascript:;" class="color-grand" @click="detailClass(scope.row)">{{scope.row.className}}</a>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('院系')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.collegeName}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.collegeName}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('辅导员')">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.masterTeacherName}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.masterTeacherName}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('请假率')">

                <template slot-scope="scope">
                  <span v-if="scope.row.leaveRate != null">{{scope.row.leaveRate}}%</span>
                  <span v-else>--</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('出勤率')">

                <template slot-scope="scope">
                  <span v-if="scope.row.rollCallSignRate != null">{{scope.row.rollCallSignRate}}%</span>
                  <span v-else>--</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('旷寝率')">

                <template slot-scope="scope">
                  <span v-if="scope.row.rollCallBedUnsigeRate != null">{{scope.row.rollCallBedUnsigeRate}}%</span>
                  <span v-else>--</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('惩处率')">

                <template slot-scope="scope">
                  <span v-if="scope.row.punishRate != null">{{scope.row.punishRate}}%</span>
                  <span v-else>--</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('内务合格率')">

                <template slot-scope="scope">
                  <span v-if="scope.row.dormRate != null">{{scope.row.dormRate}}%</span>
                  <span v-else>--</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('卫生合格率')">

                <template slot-scope="scope">
                  <span v-if="scope.row.classPubRate != null">{{scope.row.classPubRate}}%</span>
                  <span v-else>--</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('量化率')">

                <template slot-scope="scope">
                  <span v-if="scope.row.qtztRate != null">{{scope.row.qtztRate}}%</span>
                  <span v-else>--</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :filter-multiple="false"
                column-key="status"
                :filters="filterStatusTypes"
                :label="$t('状态')">

                <template slot-scope="scope">
                  <span>{{scope.row.qtztStatus}}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </layout-lr>
    </div>

    <dialog-normal width-style="600px" top="5vh" :visible="modalVisible" :title="$t('统计设置')" @close="closeDialog" @right-close="cancelDialog">
      <div>
        <div>
          <div>
            <span class="color-warning">{{$t("设置统计周期")}}</span>
          </div>
          <div class="margin-top-10">
            <div>
              <el-form label-width="90px">
                <el-row>
                  <el-col :span="12">
                    <el-form-item :label="$t('请假率')" prop="type">
                      <el-button-group>
                        <el-button size="small" :type="form.leaveRateType == 3 ? 'primary' : 'defalult'" @click="selRateType(3, 'leave')">{{$t("日")}}</el-button>
                        <el-button size="small" :type="form.leaveRateType == 2 ? 'primary' : 'defalult'" @click="selRateType(2, 'leave')">{{$t("周")}}</el-button>
                        <el-button size="small" :type="form.leaveRateType == 4 ? 'primary' : 'defalult'" @click="selRateType(4, 'leave')">{{$t("月")}}</el-button>
                        <el-button size="small" :type="form.leaveRateType == 1 ? 'primary' : 'defalult'" @click="selRateType(1, 'leave')">{{$t("学期")}}</el-button>
                      </el-button-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('旷寝率')" prop="type">
                      <el-button-group>
                        <el-button size="small" :type="form.unSignRateType == 3 ? 'primary' : 'defalult'" @click="selRateType(3, 'unSign')">{{$t("日")}}</el-button>
                        <el-button size="small" :type="form.unSignRateType == 2 ? 'primary' : 'defalult'" @click="selRateType(2, 'unSign')">{{$t("周")}}</el-button>
                        <el-button size="small" :type="form.unSignRateType == 4 ? 'primary' : 'defalult'" @click="selRateType(4, 'unSign')">{{$t("月")}}</el-button>
                        <el-button size="small" :type="form.unSignRateType == 1 ? 'primary' : 'defalult'" @click="selRateType(1, 'unSign')">{{$t("学期")}}</el-button>
                      </el-button-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <el-form-item :label="$t('出勤率')" prop="type">
                      <el-button-group>
                        <el-button size="small" :type="form.acturalRateType == 3 ? 'primary' : 'defalult'" @click="selRateType(3, 'actural')">{{$t("日")}}</el-button>
                        <el-button size="small" :type="form.acturalRateType == 2 ? 'primary' : 'defalult'" @click="selRateType(2, 'actural')">{{$t("周")}}</el-button>
                        <el-button size="small" :type="form.acturalRateType == 4 ? 'primary' : 'defalult'" @click="selRateType(4, 'actural')">{{$t("月")}}</el-button>
                        <el-button size="small" :type="form.acturalRateType == 1 ? 'primary' : 'defalult'" @click="selRateType(1, 'actural')">{{$t("学期")}}</el-button>
                      </el-button-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('惩处率')" prop="type">
                      <el-button-group>
                        <el-button size="small" :type="form.punishRateType == 3 ? 'primary' : 'defalult'" @click="selRateType(3, 'punish')">{{$t("日")}}</el-button>
                        <el-button size="small" :type="form.punishRateType == 2 ? 'primary' : 'defalult'" @click="selRateType(2, 'punish')">{{$t("周")}}</el-button>
                        <el-button size="small" :type="form.punishRateType == 4 ? 'primary' : 'defalult'" @click="selRateType(4, 'punish')">{{$t("月")}}</el-button>
                        <el-button size="small" :type="form.punishRateType == 1 ? 'primary' : 'defalult'" @click="selRateType(1, 'punish')">{{$t("学期")}}</el-button>
                      </el-button-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <el-form-item :label="$t('内务合格率')" prop="type">
                      <el-button-group>
                        <el-button size="small" :type="form.homeworkRateType == 3 ? 'primary' : 'defalult'" @click="selRateType(3, 'homework')">{{$t("日")}}</el-button>
                        <el-button size="small" :type="form.homeworkRateType == 2 ? 'primary' : 'defalult'" @click="selRateType(2, 'homework')">{{$t("周")}}</el-button>
                        <el-button size="small" :type="form.homeworkRateType == 4 ? 'primary' : 'defalult'" @click="selRateType(4, 'homework')">{{$t("月")}}</el-button>
                        <el-button size="small" :type="form.homeworkRateType == 1 ? 'primary' : 'defalult'" @click="selRateType(1, 'homework')">{{$t("学期")}}</el-button>
                      </el-button-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('卫生合格率')" prop="type">
                      <el-button-group>
                        <el-button size="small" :type="form.classRateType == 3 ? 'primary' : 'defalult'" @click="selRateType(3, 'class')">{{$t("日")}}</el-button>
                        <el-button size="small" :type="form.classRateType == 2 ? 'primary' : 'defalult'" @click="selRateType(2, 'class')">{{$t("周")}}</el-button>
                        <el-button size="small" :type="form.classRateType == 4 ? 'primary' : 'defalult'" @click="selRateType(4, 'class')">{{$t("月")}}</el-button>
                        <el-button size="small" :type="form.classRateType == 1 ? 'primary' : 'defalult'" @click="selRateType(1, 'class')">{{$t("学期")}}</el-button>
                      </el-button-group>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>
        </div>

        <div class="margin-top-10">
          <div>
            <span class="color-warning">{{$t("设置统计权重")}}</span>
          </div>
          <div class="margin-top-10">
            <el-form :model="form" :rules="rules" ref="form" label-width="90px">
              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('请假率')" prop="leaveRate">
                    <el-input :rows="2" v-model="form.leaveRate"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('出勤率')" prop="acturalRate">
                    <el-input :rows="2" v-model="form.acturalRate"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('旷寝率')" prop="unSignRate">
                    <el-input :rows="2" v-model="form.unSignRate"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('惩处率')" prop="type">
                    <el-input :rows="2" v-model="form.punishRate"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('内务合格率')" prop="homeworkRate">
                    <el-input :rows="2" v-model="form.homeworkRate"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('卫生合格率')" prop="classRate">
                    <el-input :rows="2" v-model="form.classRate"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>

        <div>
          <div>
            <span class="color-warning">{{$t("设置统计状态")}}</span>
            <span>
              <el-popover
                v-model="popverVisible"
                placement="top"
                width="400"
                trigger="click"
                @hide="hidePop">

                <div>
                  <el-form :model="formConf" :rules="confRules" ref="formConf" label-width="80px">
                    <el-form-item :label="$t('范围名称')" prop="name">
                      <el-input v-model="formConf.name" class="width-260"></el-input>
                    </el-form-item>
                    <el-form-item :label="$t('起始范围')" prop="min1">
                      <el-input v-model="formConf.min1" class="width-260"></el-input>
                    </el-form-item>
                    <el-form-item :label="$t('结束范围')" prop="min2">
                      <el-input v-model="formConf.min2" class="width-260"></el-input>
                    </el-form-item>
                  </el-form>
                  <div class="text-center padding-tb-5">
                    <el-button type="default" size="small">{{$t("取消")}}</el-button>
                    <el-button type="info" size="small" @click="saveConfig">{{$t("确定")}}</el-button>
                  </div>
                </div>

                <el-button slot="reference" size="small" plain type="success">{{$t("添加状态")}}</el-button>
              </el-popover>
            </span>
            <!--<span>
              <el-form :model="form" :rules="rules" ref="form" label-width="90px">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="" prop="leaveRate">
                    <el-input v-model="formConf.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                </el-col>
              </el-row>
            </span>-->
          </div>
          <div class="margin-top-10">
            <el-table
              :data="form.rateRange"
              header-cell-class-name="custom-table-cell-bg"
              size="mini"
              style="width: 100%">
              <el-table-column
                align="center"
                :label="$t('量化率范围')">
                <template slot-scope="scope">
                  <span v-if="scope.row._edit == false">{{scope.row.min}}-{{scope.row.max}}</span>
                  <span v-if="scope.row._edit == true">
                    <el-input size="mini" style="width: 50px;" v-model="scope.row.min"></el-input>
                    -
                    <el-input size="mini" style="width: 50px;" v-model="scope.row.max"></el-input>
                  </span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('状态名称')">
                <template slot-scope="scope">
                  <span v-if="scope.row._edit == false">{{scope.row.status}}</span>
                  <span v-if="scope.row._edit == true">
                    <el-input size="mini" style="width: 70px;" v-model="scope.row.status"></el-input>
                  </span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('操作')">
                <template slot-scope="scope">
                  <i v-if="scope.row._edit == true" class="fa fa-check-circle-o color-grand margin-right-5" @click="okInfo(scope.row, scope.$index)"></i>
                  <i v-if="scope.row._edit == false" class="fa fa-edit color-grand margin-right-5" @click="editInfo(scope.row, scope.$index)"></i>
                  <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row, scope.$index)"></i>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <!--学生详细-->
    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :hide-footer="false" :visible="drawerVisible" size="750px" :title="$t('学生信息')" @right-close="cancelDrawDialog">
      <div slot="content">
        <span tabindex="1"></span>
        <div class="text-right">
          <my-input-button size="small" type="success" plain :clearable="true" @click="search"></my-input-button>
        </div>

        <div class="margin-top-10">
          <el-row :gutter="16">
            <el-col :span="12" class="margin-bottom-20" v-for="(item, index) in studentData" :key="index">
              <el-card :body-style="{padding: '0px'}" style="height:115px;">
                <el-row class="padding-tb-10 padding-lr-10">
                  <el-col :span="4">
                    <el-avatar v-if="item.headImg" :size="50" :src="item.headImg"></el-avatar>
                    <el-avatar v-else :size="50" icon="el-icon-user"></el-avatar>
                  </el-col>
                  <el-col :span="11">
                    <div class="margin-top-5">
                      <span class="color-success">{{item.studentNo}}</span>
                    </div>
                    <div class="color-muted font-size-12 margin-top-5">
                      <span class="ellipsis-text moon-content-text-ellipsis-class" :title="item.realName">{{item.realName}}</span>
                      <span class="ellipsis-text moon-content-text-ellipsis-class" :title="item.className"> | {{item.className}}</span>
                    </div>
                  </el-col>
                  <el-col :span="5" class="text-center">
                    <div class="margin-top-5">
                      <span class="color-success">
                        <label v-if="item.qtztRate != null">{{item.qtztRate}}%</label>
                        <label v-else>--</label>
                      </span>
                    </div>
                    <div class="color-muted margin-top-5">
                      <span class="font-size-12">{{$t("量化合格率")}}</span>
                    </div>
                  </el-col>
                  <el-col :span="4" class="text-center">
                    <div class="margin-top-5">
                      <span class="color-success">
                        <label v-if="item.qualityScore != null">{{item.qualityScore}}</label>
                        <label v-else>--</label>
                      </span>
                    </div>
                    <div class="color-muted margin-top-5">
                      <span class="font-size-12">{{$t("素质学分")}}</span>
                    </div>
                  </el-col>
                </el-row>
                <div class="line-height2"></div>
                <el-row class="padding-tb-5">
                  <el-col :span="4" class="text-center font-size-12 color-success">
                    <div>
                      <span>{{$t("旷寝率")}}</span>
                    </div>
                    <div>
                      <span v-if="item.rollCallBedUnsigeRate != null">{{item.rollCallBedUnsigeRate}}%</span>
                      <span v-else>--</span>
                    </div>
                  </el-col>
                  <el-col :span="4" class="text-center font-size-12 color-success">
                    <div>
                      <span>{{$t("出勤率")}}</span>
                    </div>
                    <div>
                      <span v-if="item.rollCallBedSigeRate != null">{{item.rollCallBedSigeRate}}%</span>
                      <span v-else>--</span>
                    </div>
                  </el-col>
                  <el-col :span="4" class="text-center font-size-12 color-success">
                    <div>
                      <span>{{$t("惩处率")}}</span>
                    </div>
                    <div>
                      <span v-if="item.punishRate != null">{{item.punishRate}}%</span>
                      <span v-else>--</span>
                    </div>
                  </el-col>
                  <el-col :span="4" class="text-center font-size-12 color-success">
                    <div>
                      <span>{{$t("请假率")}}</span>
                    </div>
                    <div>
                      <span v-if="item.leaveRate != null">{{item.leaveRate}}%</span>
                      <span v-else>--</span>
                    </div>
                  </el-col>
                  <el-col :span="8" class="text-center font-size-12 color-success">
                    <div>
                      <span>{{$t("内务合格率")}}</span>
                    </div>
                    <div>
                      <span v-if="item.dormRate != null">{{item.dormRate}}%</span>
                      <span v-else>--</span>
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right">
          <el-pagination
            background
            :page-sizes="[10, 20, 50, 100]"
            layout="total, sizes, prev, pager, next"
            :total="totalStudent"
            :current-page="pageStudent"
            :page-size="numStudent"
            @size-change="sizeStudentChange"
            @current-change="currentStudentPage">
          </el-pagination>
        </div>
      </div>
    </drawer-layout-right>

    <!--班级详细-->
    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :hide-footer="false" :visible="drawerClassVisible" size="750px" :title="$t('班级信息')" @right-close="cancelDrawDialog">
      <div slot="content">
        <span tabindex="1"></span>
        <div class="text-right">
          <my-input-button size="small" type="success" plain :clearable="true" @click="searchClassStudent"></my-input-button>
        </div>

        <div>
          <span class="title-tag"></span>
          <span class="title-text color-warning">{{$t("公共区域")}}</span>
        </div>
        <div class="margin-top-10">
          <el-card :body-style="{padding: '10px'}">
            <el-row>
              <el-col :span="12">
                <i class="fa fa-building color-success" style="font-size: 55px"></i>
                <span style="position: relative; top: -10px;">
                  <label class="font-size-15">{{shareData.className}}</label>
                  <label class="font-size-15">|</label>
                  <label class="color-grand font-size-15">{{$t("公共区域")}}</label>
                </span>
              </el-col>
              <el-col :span="12">
                <div class="text-right margin-top-10">
                  <div>
                    <span class="color-success" v-if="shareData.classPubRate">{{shareData.classPubRate}}%</span>
                    <span class="color-success" v-else>--</span>
                  </div>
                  <div>
                    <span class="color-muted">{{$t("公共区域卫生合格率")}}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </div>

        <div class="margin-top-20">
          <span class="title-tag"></span>
          <span class="title-text color-warning">{{$t("个人区域")}}</span>
        </div>
        <div class="margin-top-10">
          <el-row :gutter="16">
            <el-col :span="12" class="margin-bottom-20" v-for="(item, index) in studentData" :key="index">
              <el-card :body-style="{padding: '0px'}" style="height:115px;">
                <el-row class="padding-tb-10 padding-lr-10">
                  <el-col :span="4">
                    <el-avatar v-if="item.headImg" :size="50" :src="item.headImg"></el-avatar>
                    <el-avatar v-else :size="50" icon="el-icon-user"></el-avatar>
                  </el-col>
                  <el-col :span="11">
                    <div class="margin-top-5">
                      <span class="color-success">{{item.studentNo}}</span>
                    </div>
                    <div class="color-muted font-size-12 margin-top-5">
                      <span class="ellipsis-text moon-content-text-ellipsis-class" :title="item.realName">{{item.realName}}</span>
                      <span class="ellipsis-text moon-content-text-ellipsis-class" :title="item.className"> | {{item.className}}</span>
                    </div>
                  </el-col>
                  <el-col :span="5" class="text-center">
                    <div class="margin-top-5">
                      <span class="color-success">
                        <label v-if="item.qtztRate != null">{{item.qtztRate}}%</label>
                        <label v-else>--</label>
                      </span>
                    </div>
                    <div class="color-muted margin-top-5">
                      <span class="font-size-12">{{$t("量化合格率")}}</span>
                    </div>
                  </el-col>
                  <el-col :span="4" class="text-center">
                    <div class="margin-top-5">
                      <span class="color-success">
                        <label v-if="item.qualityScore != null">{{item.qualityScore}}</label>
                        <label v-else>--</label>
                      </span>
                    </div>
                    <div class="color-muted margin-top-5">
                      <span class="font-size-12">{{$t("素质学分")}}</span>
                    </div>
                  </el-col>
                </el-row>
                <div class="line-height2"></div>
                <el-row class="padding-tb-5">
                  <el-col :span="4" class="text-center font-size-12 color-success">
                    <div>
                      <span>{{$t("旷寝率")}}</span>
                    </div>
                    <div>
                      <span v-if="item.rollCallBedUnsigeRate != null">{{item.rollCallBedUnsigeRate}}%</span>
                      <span v-else>--</span>
                    </div>
                  </el-col>
                  <el-col :span="4" class="text-center font-size-12 color-success">
                    <div>
                      <span>{{$t("出勤率")}}</span>
                    </div>
                    <div>
                      <span v-if="item.rollCallBedSigeRate != null">{{item.rollCallBedSigeRate}}%</span>
                      <span v-else>--</span>
                    </div>
                  </el-col>
                  <el-col :span="4" class="text-center font-size-12 color-success">
                    <div>
                      <span>{{$t("惩处率")}}</span>
                    </div>
                    <div>
                      <span v-if="item.punishRate != null">{{item.punishRate}}%</span>
                      <span v-else>--</span>
                    </div>
                  </el-col>
                  <el-col :span="4" class="text-center font-size-12 color-success">
                    <div>
                      <span>{{$t("请假率")}}</span>
                    </div>
                    <div>
                      <span v-if="item.leaveRate != null">{{item.leaveRate}}%</span>
                      <span v-else>--</span>
                    </div>
                  </el-col>
                  <el-col :span="8" class="text-center font-size-12 color-success">
                    <div>
                      <span>{{$t("内务合格率")}}</span>
                    </div>
                    <div>
                      <span v-if="item.dormRate != null">{{item.dormRate}}%</span>
                      <span v-else>--</span>
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right">
          <el-pagination
            background
            :page-sizes="[10, 20, 50, 100]"
            layout="total, sizes, prev, pager, next"
            :total="totalStudent"
            :current-page="pageStudent"
            :page-size="numStudent"
            @size-change="sizeStudentChange"
            @current-change="currentStudentPage">
          </el-pagination>
        </div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import LayoutLr from "../../../components/Layout/LayoutLr";
  import MySelect from "../../../components/MySelect";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import MyAuditDetail from "../../../components/utils/auditDetail/MyAuditDetail";
  import MyElTree from "../../../components/tree/MyElTree";
  import MyPagination from "../../../components/MyPagination";
  import MyAuditStatus from "../../../components/utils/MyAuditStatus";
  import CircleChart from "../../../components/charts/CircleChart";
  import MyRadio from "../../../components/MyRadio";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MyInputButton from "../../../components/search/MyInputButton";
  import UploadSquare from "../../../components/utils/upload/UploadSquare";
  import MySearchOfDate from "../../../components/search/MySearchOfDate";
  import {common} from "../../../utils/api/url";
  import {MessageError, MessageSuccess, MessageWarning} from "../../../utils/utils";
  import stuQuantiValidater from "../../../utils/validater/stuQuantiValidater";
  export default {
    mixins: [mixins, stuQuantiValidater],
    components: {LayoutLr,MyElTree,MySelect,DrawerLayoutRight,MyAuditDetail,MyPagination,MyAuditStatus,CircleChart,MyRadio,DialogNormal,MyInputButton,UploadSquare,MySearchOfDate},
    data(){
      return {
        filterStatusTypes: [],
        searchTimeData: {},
        searchTopTime: this.$moment().subtract(1, 'days').format("YYYY-MM-DD"),
        centerTop: ['40%', '50%'],
        pageStudent: 1,
        numStudent: 20,
        totalStudent: 0,
        dataAudit: {},
        configData: {},
        drawerVisible: false,
        drawerClassVisible: false,
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        studentLoading: false,
        popverVisible: false,
        subTitle: '',
        tableData: [],
        studentData: [],
        tableStatusData: [],
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        searchLocalClass: '',
        applyTimeBegin: '',
        applyTimeEnd: '',
        type: '',
        level: '',
        status: '',
        searchKey: '',
        searchDate: [],
        //filterTypes: [{ text: this.$t("处分"), value: '处分' }, { text: '奖励', value: '奖励' }],
        filterLevels: [],
        filterAddLevels: [],
        //filterStatus: [{ text: this.$t("待审批"), value: '0' }, { text: '已通过', value: '3' }, { text: '已驳回', value: '4' }],
        personTotal: 0,
        reTotal: 0,
        puTotal: 0,
        uploadFileAction: common.upload_file,
        typeData: [],
        typeDataKey: [],
        levelData: [],
        levelDataKey: [],
        searchStudentKey: '',
        errorStudent: '',
        staticData: {},
        qtztRate: 0,
        allStatus: [],
        allStatusKey: [],
        rightStatus: [],
        rightStatusKey: [],
        leftStatus: [],
        leftStatusKey: [],
        shareData: {},
        form: {
          leaveRateType: 3,
          unSignRateType: 3,
          acturalRateType: 3,
          punishRateType: 3,
          homeworkRateType: 3,
          classRateType: 3,
          leaveRate: '',
          unSignRate: '',
          acturalRate: '',
          punishRate: '',
          homeworkRate: '',
          classRate: '',
          rateRange: []
        },
        formConf:{
          id: '',
          name: '',
          min: '',
          max: ''
        }
      }
    },
    created() {
      this.init();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          orderAttr: 'qtztRate',
          orderAsc: false,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          qtztStatus: this.status,
          searchKey: this.searchKey
        };
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          let day = this.searchTimeData.value;
          params['busiTime'] = day;
          params['timeUnit'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeUnit'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          params['queryDate'] = this.searchTimeData.value+"-01";
          params['timeUnit'] = 4;
        }else if (this.searchTimeData.timeUnit == 5){
          params['timeUnit'] = 1;
        }else {
          let day = this.$moment(new Date()).format("YYYY-MM-DD");
          params['busiTime'] = this.$moment().subtract(1, 'days').format("YYYY-MM-DD");
          params['timeUnit'] = 3;
        }
        this.initStatic(params);
        this.initInfo(params);
        this.initLevels(params);
      },
      initInfo(params){
        this.$axios.get(common.qtzt_analysis_static_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initStatic(params){
        params = this.$qs.stringify(params);
        this.$axios.post(common.audit_re_static, params).then(res => {
          if (res.data.data){
            this.personTotal = res.data.data.studentCount;
            this.reTotal = res.data.data['奖励'];
            this.puTotal = res.data.data['处分'];

            let typeKey = [];
            let typeList = [];
            for (let i = 0; i < res.data.data.typeCountList.length; i++){
              typeKey.push(res.data.data.typeCountList[i].ptype);
              typeList.push({
                name: res.data.data.typeCountList[i].ptype,
                value: res.data.data.typeCountList[i].count,
                rate: res.data.data.typeCountList[i].rate,
              });
            }

            let levelKey = [];
            let levelList = [];
            for (let i = 0; i < res.data.data.levelCountList.length; i++){
              levelKey.push(res.data.data.levelCountList[i].plevel);
              levelList.push({
                name: res.data.data.levelCountList[i].plevel,
                value: res.data.data.levelCountList[i].count,
                rate: res.data.data.levelCountList[i].rate,
              });
            }

            this.typeData = typeList;
            this.typeDataKey = typeKey;
            this.levelData = levelList;
            this.levelDataKey = levelKey;
          }
        });
      },
      initLevels(params){
        let arr = [];
        this.rightStatus = [];
        this.rightStatusKey = [];
        this.leftStatus = [];
        this.leftStatusKey = [];
        this.$axios.get(common.qtzt_analysis_static_status_list, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.allRate.length; i++){
              if (res.data.data.allRate[i].name == '内务合格率'){
                this.rightStatus.push({
                  name: res.data.data.allRate[i].name,
                  value: res.data.data.allRate[i].value
                });
              }else if (res.data.data.allRate[i].name == '出勤率'){
                this.rightStatus.push({
                  name: res.data.data.allRate[i].name,
                  value: res.data.data.allRate[i].value
                });
              }else if (res.data.data.allRate[i].name == '班级卫生合格率'){
                this.rightStatus.push({
                  name: res.data.data.allRate[i].name,
                  value: res.data.data.allRate[i].value
                });
              }else if (res.data.data.allRate[i].name == '惩处率'){
                this.leftStatus.push({
                  name: res.data.data.allRate[i].name,
                  value: res.data.data.allRate[i].value
                });
              }else if (res.data.data.allRate[i].name == '请假率'){
                this.leftStatus.push({
                  name: res.data.data.allRate[i].name,
                  value: res.data.data.allRate[i].value
                });
              }else if (res.data.data.allRate[i].name == '旷寝率'){
                this.leftStatus.push({
                  name: res.data.data.allRate[i].name,
                  value: res.data.data.allRate[i].value
                });
              }
            }

            for (let i = 0; i < res.data.data.allStatus.length; i++){
              arr.push({
                text: res.data.data.allStatus[i].name,
                value: res.data.data.allStatus[i].name
              });
            }
            this.filterStatusTypes = arr;
            this.staticData = res.data.data.allRate;
            this.allStatus = res.data.data.allStatus;
            this.qtztRate = res.data.data.qtztRate;
          }
        });
      },
      initShare(classId){
        let params = {
          classId: classId,
        };
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          let day = this.searchTimeData.value;
          params['busiTime'] = day;
          params['timeUnit'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeUnit'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          params['queryDate'] = this.searchTimeData.value+"-01";
          params['timeUnit'] = 4;
        }else if (this.searchTimeData.timeUnit == 5){
          params['timeUnit'] = 1;
        }else {
          let day = this.$moment(new Date()).format("YYYY-MM-DD");
          params['busiTime'] = this.$moment().subtract(1, 'days').format("YYYY-MM-DD");
          params['timeUnit'] = 3;
        }
        this.$axios.get(common.qtzt_analysis_static_class_share_list, {params: params}).then(res => {
          if (res.data.data){
            this.shareData = res.data.data;
          }
        });
      },
      initStudent(classId){
        let params = {};
        if (this.searchLocalClass){
          params = {
            page: this.pageStudent,
            num: this.numStudent,
            classId: this.searchLocalClass,
            orderAttr: 'qtztRate',
            orderAsc: false,
            keyWord: this.searchStudentKey
          }
        }else {
          params = {
            page: this.pageStudent,
            num: this.numStudent,
            collegeId: this.searchCollege,
            majorId: this.searchMajor,
            grade: this.searchGrade,
            classId: this.searchClass,
            orderAttr: 'qtztRate',
            orderAsc: false,
            keyWord: this.searchStudentKey
          };
        }
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          let day = this.searchTimeData.value;
          params['busiTime'] = day;
          params['timeUnit'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeUnit'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          params['queryDate'] = this.searchTimeData.value+"-01";
          params['timeUnit'] = 4;
        }else if (this.searchTimeData.timeUnit == 5){
          params['timeUnit'] = 1;
        }else {
          let day = this.$moment(new Date()).format("YYYY-MM-DD");
          params['busiTime'] = this.$moment().subtract(1, 'days').format("YYYY-MM-DD");
          params['timeUnit'] = 3;
        }
        params['realName'] = this.searchStudentKey['input'];
        this.studentLoading = true;
        this.$axios.get(common.qtzt_analysis_static_student_page, {params: params}).then(res => {
          if (res.data.data){
            this.studentData = res.data.data.list;
            this.totalStudent = res.data.data.totalCount;
            this.numStudent = res.data.data.num;
            this.pageStudnet = res.data.data.currentPage;
          }
          this.studentLoading = false;
        });
      },
      initConfig(){
        this.$axios.get(common.qtzt_analysis_static_set_query).then(res => {
          if (res.data.data){
            this.configData = res.data.data;
            for (let i = 0; i <res.data.data.scoreRange.length; i++){
              res.data.data.scoreRange[i]['_edit'] = false;
            }
            //this.tableStatusData = res.data.data.scoreRange;
            this.form = {
              leaveRateType: res.data.data.leaveTime,
              unSignRateType: res.data.data.rollcallbedTime,
              acturalRateType: res.data.data.rollcallTime,
              punishRateType: res.data.data.punishTime,
              homeworkRateType: res.data.data.dormTime,
              classRateType: res.data.data.classTime,
              leaveRate: res.data.data.leaveWeight,
              unSignRate:  res.data.data.rollcallbedWeight,
              acturalRate:  res.data.data.rollcallWeight,
              punishRate:  res.data.data.punishWeight,
              homeworkRate:  res.data.data.dormWeight,
              classRate: res.data.data.classWeight,
              rateRange: res.data.data.scoreRange
            }
          }
        });
      },
      nodeClick(data){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        if (data.unit == 1){
          this.searchCollege = data.id;
        }else if (data.unit == 2){
          this.searchCollege = data.college_id;
          this.searchMajor = data.id;
        }else if (data.unit == 3){
          this.searchMajor = data.major_id;
          this.searchGrade = data.grade;
        }else if (data.unit == 4){
          this.searchClass = data.id;
        }
        this.init();
      },
      detailStudent(){
        this.pageStudent = 1;
        this.numStudent = 20;
        setTimeout(() => {
          this.initStudent();
        },800);
        this.drawerVisible = true;
      },
      detailClass(item){
        this.pageStudent = 1;
        this.numStudent = 20;
        this.searchLocalClass = item.classId;
        //this.shareData = item;
        setTimeout(() => {
          this.initShare(item.classId);
          this.initStudent(item.classId);
        },800);
        this.drawerClassVisible = true;
      },
      addInfo(){
        this.initConfig();
        this.modalVisible = true;
      },
      okInfo(row, index){
        let rightnNf2_Reg = /^([\+]?(([1-9]\d*)|(0)))([.]\d{0,2})?$/;
        let s1_20Reg = /^[^0-9]{1,20}$/;
        if (!rightnNf2_Reg.test(row.min) || !rightnNf2_Reg.test(row.max)){
          MessageWarning(this.$t("请输入正整数或者2位小数"))
          return;
        }
        if (!s1_20Reg.test(row.status)){
          MessageWarning(this.$t("请输入1-20位中英文或符号"))
          return;
        }
        row._edit = false;
        this.$set(this.form.rateRange, index, row);
      },
      editInfo(row, index){
        row._edit = true;
        this.$set(this.form.rateRange, index, row);
      },
      deleteInfo(row,index){
        this.form.rateRange.splice(index, 1);
      },
      searchStudent(data){
        this.searchStudentKey = data;
        this.initStudent();
      },
      handleDetail(row){
        let params = {
          id:row.object_id ? row.object_id : row.id
        };
        this.$axios.get(common.msg_detail_center, {params: params}).then(res => {
          if (res.data.code == 200){
            this.dataAudit = res.data.data;
            this.drawerVisible = true;
          }else {
            MessageWarning(res.data.desc);
          }
        });
      },
      closeDrawerDialog(event){
        this.searchLocalClass = '';
        this.drawerClassVisible = event;
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.drawerClassVisible = false;
        this.drawerVisible = false;
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
      sizeStudentChange(event){
        this.pageStudent = 1;
        this.numStudent = event;
        this.initStudent();
      },
      currentStudentPage(event){
        this.pageStudent = event;
        this.initStudent();
      },
      handleChange(data){
        this.searchDate = data;
      },
      handleRadioChange(data){
        this.form.userId = data;
      },
      handleSelect(data, type){
        if (type == 1){
          this.form.type = data;
          this.form.level = "";
          this.initLevels(data);
        }else if(type == 2){
          this.form.level = data;
        }
      },
      search(data){
        this.searchKey = data.input;
        this.init();
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'status'){
            this.status = value[item][0];
          }
        }
        this.init();
      },
      expandInfo(){
        let url = common.audit_download;
        let params = {
          page:1,
          num:99999,
          applyTypeCode: 'PunishmentApply',
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          applyTimeBegin: this.searchDate ? this.searchDate[0] : '',
          applyTimeEnd: this.searchDate ? this.searchDate[1] : '',
          str1: this.type,
          str2: this.level,
          status: this.status,
          searchKey: this.searchKey
        };
        params = this.$qs.stringify(params);
        window.open(url+"?"+params, "_self");
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      closeDialog(event){
        this.form = {
          leaveRateType: 3,
          unSignRateType: 3,
          acturalRateType: 3,
          punishRateType: 3,
          homeworkRateType: 3,
          classRateType: 3,
          leaveRate: '',
          unSignRate: '',
          acturalRate: '',
          punishRate: '',
          homeworkRate: '',
          classRate: '',
          rateRange: []
        };
        this.subTitle = "";
        this.pageStudent = 1;
        this.numStudent = 20;
        this.searchStudentKey = "";
        if (this.$refs.studentRef){
          this.$refs.studentRef.inputValue = "";
        }
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      saveConfig(event){
        this.$refs['formConf'].validate((valid) => {
          if (valid) {
            if (this.formConf.id != ''){

            }else {
              this.form.rateRange.push({
                status: this.formConf.name,
                min: this.formConf.min1,
                max: this.formConf.min2,
                _edit: false
              });
            }
            this.popverVisible = false;
          }
        });
      },
      okDialog(event){
        let url = "";
        let arr = [];
        let num = 0;
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.errorStudent = "";
            let params = {
              classTime: this.form.classRateType,
              classWeight: this.form.classRate,
              dormTime: this.form.homeworkRateType,
              dormWeight: this.form.homeworkRate,
              leaveTime: this.form.leaveRateType,
              leaveWeight: this.form.leaveRate,
              punishTime: this.form.punishRateType,
              punishWeight: this.form.punishRate,
              rollcallTime: this.form.acturalRateType,
              rollcallWeight: this.form.acturalRate,
              rollcallbedTime: this.form.unSignRateType,
              rollcallbedWeight: this.form.unSignRate
            };
            for (let i = 0; i < this.form.rateRange.length; i++){
              if (this.form.rateRange[i]._edit == true){
                num++;
              }
              arr.push({
                min: this.form.rateRange[i].min,
                max: this.form.rateRange[i].max,
                status: this.form.rateRange[i].status,
              });
            }
            if (num > 0){
              MessageWarning(this.$t("请确认范围后再进行保存"));
              return;
            }

            params['scoreRange'] = arr;
            this.dialogLoading = true;
            url = common.qtzt_analysis_static_set;
            params = JSON.stringify(params);
            this.$axios.post(url, params, {dataType: 'stringfy', loading: false}).then(res => {
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
      uploadSuccess(res, file){
        if (res.code == 200){
          this.form.file = res.data.url;
        }else {

        }
      },
      uploadError(res, file){
        MessageError(res.data.desc);
      },
      searchTopDate(data){
        this.searchTimeData = data;
        this.init();
      },
      searchTopType(data){

      },
      search(data){
        this.pageStudent = 1;
        this.searchStudentKey = data.input;
        this.initStudent();
      },
      searchClassStudent(data){
        this.pageStudent = 1;
        this.searchStudentKey = data.input;
        this.initStudent(this.searchLocalClass);
      },
      selRateType(type, selType){
        if (selType == 'leave'){
          this.form.leaveRateType = type;
        }else if (selType == 'unSign'){
          this.form.unSignRateType = type;
        }else if (selType == 'actural'){
          this.form.acturalRateType = type;
        }else if (selType == 'punish'){
          this.form.punishRateType = type;
        }else if (selType == 'homework'){
          this.form.homeworkRateType = type;
        }else if (selType == 'class'){
          this.form.classRateType = type;
        }
      },
      hidePop(){
        this.formConf = {
          id: '',
          name: '',
          min: '',
          max: ''
        };
        if (this.$refs['formConf']){
          this.$refs['formConf'].resetFields();
        }
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .rpStatic-top-item .person-item{
    display: inline-block;
    width: 60px;
  }
  .rpStatic-top-item .title{
    font-weight: bold;
  }
  .rp-img{
    height: 50px;
    width: 50px;
    border: 1px solid #dddddd;
  }
  .rp-fotter-page{
    border: 1px solid #EBEEF5;
    border-top: 0px;
    height: 30px;
    line-height: 30px;
    width: 348px;
  }
  .ellipsis-text{
    display: inline-block;
    max-width: 50px;
  }
  .title-tag{
    display: inline-block;
    height: 20px;
    width: 5px;
    border-radius: 5px;
    background: #E6A23C;
  }
  .title-text{
    position: relative;
    top: -5px;
  }
</style>
