<template>
  <div class="container">
    <div>
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">报道数据</span>
          </div>
          <my-el-tree type="1" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div class="layout-top-tab margin-top-5">
            <el-row>
              <el-col :span="12">
                <div class="layout-inline">
                  <el-button class="layout-item" size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
<!--                  <tab-group-button size="small" :options='[-->
<!--                    {label:$t("总人数"), value: "1", extra: countNum},-->
<!--                    {label:$t("已报道"), value: "3", extra: signNum},-->
<!--                    {label:$t("未报道"), value: "0", extra: unSignNum}]' @click="changeStatus">-->
<!--                  </tab-group-button>-->
                  <el-button-group class="layout-item" style="position: relative; top: -1px">
                    <el-button size="small" type="default">
                      <span class="color-muted font-size-12">{{$t("总人数")}}|{{countNum}}</span>
                    </el-button>
                    <el-button size="small" type="default">
                      <span class="color-muted font-size-12">{{$t("已报道")}}|{{signNum}}</span>
                    </el-button>
                    <el-button size="small" type="default">
                      <span class="color-muted font-size-12">{{$t("未报道")}}|{{unSignNum}}</span>
                    </el-button>
                  </el-button-group>
                  <my-select class="layout-item width-150" size="small" :clearable="true" :sel-value="searchProcess" :options="processData" @change="handleChangeSelect($event)"></my-select>
                </div>
              </el-col>
              <el-col :span="12" class="text-right">
                <div class="layout-inline">
                  <el-date-picker
                    size="small"
                    v-model="searchTimeData"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    @change="handleChangeTime"
                    style="width: 220px">
                  </el-date-picker>
                  <my-input-button ref="teacher width-150" size="small" plain width-class="width: 120px" type="success" :clearable="true" :placeholder="$t('姓名/录取号')" @click="search"></my-input-button>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="margin-top-10">
            <el-table
              ref="refTable"
              :data="tableData"
              header-cell-class-name="custom-table-cell-bg"
              size="medium"
              :max-height="tableHeight2.height"
              @filter-change="fliterTable"
              style="width: 100%">
              <el-table-column align="center" :label="$t('姓名')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.real_name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <a href="javascript:;" class="color-grand" @click="detailInfo(scope.row)">{{scope.row.real_name}}</a>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('录取号')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.student_id}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.student_id}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('性别')"
                               column-key="sexType"
                               :filter-multiple="false"
                               :filters="filtersSexType">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center"><my-sex tag="text" :sex="scope.row.sex"></my-sex></div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <my-sex tag="text" :sex="scope.row.sex"></my-sex>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('学院')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.college_name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.college_name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('专业')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.major_name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('班级')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.class_name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.class_name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('招生老师')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.enroll_teacher}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.enroll_teacher}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('状态')"
                               column-key="statusType"
                               :filter-multiple="false"
                               :filters="filtersStutasType">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label class="color-success" v-if="scope.row.check_status">{{$t("已报道")}}</label>
                      <label class="color-danger" v-if="!scope.row.check_status">{{$t("未报道")}}</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label class="color-success" v-if="scope.row.check_status">{{$t("已报道")}}</label>
                      <label class="color-danger" v-if="!scope.row.check_status">{{$t("未报道")}}</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center"
                               width="120"
                               :label="$t('核验方式')"
                               column-key="auditType"
                               :filter-multiple="false"
                               :filters="filtersAuditType">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label class="color-success" v-if="scope.row.check_type == 0">{{$t("人工")}}</label>
                      <label class="color-danger" v-if="scope.row.check_type == 1">{{$t("二维码")}}</label>
                      <label class="color-danger" v-if="scope.row.check_type == 2">{{$t("人脸识别")}}</label>
                      <label v-if="scope.row.check_user_name">({{scope.row.check_user_name}})</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label class="color-success" v-if="scope.row.check_type == 0">{{$t("人工")}}</label>
                      <label class="color-danger" v-if="scope.row.check_type == 1">{{$t("二维码")}}</label>
                      <label class="color-danger" v-if="scope.row.check_type == 2">{{$t("人脸识别")}}</label>
                      <label v-if="scope.row.check_user_name">({{scope.row.check_user_name}})</label>
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('报道时间')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.check_time">{{$moment(scope.row.check_time).format("YYYY-MM-DD HH:mm:ss")}}</label>
                      <label v-else>--</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.check_time">{{$moment(scope.row.check_time).format("YYYY-MM-DD HH:mm:ss")}}</label>
                      <label v-else>--</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('准时报道')"
                               width="120"
                               column-key="signType"
                               :filter-multiple="false"
                               :filters="filtersSignType">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label class="color-success" v-if="scope.row.check_on_time">{{$t("是")}}</label>
                      <label class="color-danger" v-if="!scope.row.check_on_time">{{$t("否")}}</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label class="color-success" v-if="scope.row.check_on_time">{{$t("是")}}</label>
                      <label class="color-danger" v-if="!scope.row.check_on_time">{{$t("否")}}</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('是否接站')"
                               width="120"
                               column-key="interfaceType"
                               :filter-multiple="false"
                               :filters="filtersSignType">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label class="color-success" v-if="scope.row.need_receive">{{$t("是")}}</label>
                      <label class="color-danger" v-if="!scope.row.need_receive">{{$t("否")}}</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label class="color-success" v-if="scope.row.need_receive">{{$t("是")}}</label>
                      <label class="color-danger" v-if="!scope.row.need_receive">{{$t("否")}}</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('陪同人员')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.escorts_num}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.escorts_num}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('到达站')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.arrive_station}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="260"
                fixed="right"
                :label="$t('操作')">
                <template slot-scope="scope">
                  <el-button v-if="!scope.row.check_status" size="mini" type="success" @click="statusOkInfo(scope.row, 1)">{{$t("已到")}}</el-button>
                  <el-button v-if="scope.row.check_status != null && scope.row.check_status" size="mini" type="danger" @click="statusCancelInfo(scope.row, -1)">{{$t("撤销")}}</el-button>
                  <el-button size="mini" type="primary" @click="signInfo($event, scope.row)">{{$t("报道单")}}</el-button>
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

    <drawer-layout-right tabindex="0" :show-close="true" @changeDrawer="closeDialog" :visible="dialogVisible" size="680px">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <span class="tab-class font-bold">
            <i class="fa fa-file"></i>
            {{$t('报道单')}}
          </span>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div>
          <div class="padding-tb-10 padding-lr-10">
            <span class="title-block-tag"></span>
            <span class="title-block-text">{{$t("基本信息")}}</span>
          </div>
          <table class="custom-table">
            <tr>
              <td style="width: 20%" rowspan="2">
                <el-image style="width: 80px; height: 80px;margin-top: 5px" :src="detailData.photo_simple"></el-image>
              </td>
              <td style="width: 10%" class="font-size-12 font-bold">{{$t("姓名")}}</td>
              <td style="width: 20%" class="color-muted font-size-12">{{detailData.real_name}}</td>
              <td style="width: 10%" class="font-size-12 font-bold">{{$t("性别")}}</td>
              <td style="width: 10%" class="color-muted font-size-12">
                <my-sex tag="text" :sex="detailData.sex"></my-sex>
              </td>
              <td style="width: 10%" class="font-size-12 font-bold">{{$t("录取号")}}</td>
              <td style="width: 20%" class="color-muted font-size-12">{{detailData.student_id}}</td>
            </tr>
            <tr>
              <td class="font-size-12 font-bold">{{$t("学院")}}</td>
              <td class="color-muted font-size-12">{{detailData.college_name}}</td>
              <td class="font-size-12 font-bold">{{$t("专业")}}</td>
              <td class="color-muted font-size-12">{{detailData.major_name}}</td>
              <td class="font-size-12 font-bold">{{$t("班级")}}</td>
              <td class="color-muted font-size-12">{{detailData.class_name}}</td>
            </tr>
            <tr>
              <td class="font-size-12 font-bold">{{$t("宿舍信息")}}</td>
              <td colspan="6" v-if="detailData.build_name" class="color-muted font-size-12">{{detailData.build_name}}{{$("楼")}}{{detailData.floor_num}}{{$("层")}}{{detailData.dormitory_no}}</td>
            </tr>
          </table>
        </div>
        <div class="margin-top-20">
          <div class="padding-tb-10 padding-lr-10">
            <span class="title-block-tag"></span>
            <span class="title-block-text">{{$t("缴费信息")}}</span>
          </div>
          <el-table
            border
            ref="refTable"
            :data="tableSignData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            style="width: 100%">
            <el-table-column align="center" :label="$t('费用名称')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('缓缴')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('贷缴')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('减免')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('实缴')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('已缴')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('未缴金额')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" :show-close="true" @changeDrawer="closeDialog" :visible="dialogDetail" size="680px">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <span class="tab-class font-bold">
            <i class="fa fa-user"></i>
            {{$t('学生信息')}}
          </span>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <el-form :model="form" ref="form" label-width="120px">
          <template v-if="form.id != '' && oprType == 'detail'">
            <div class="color-muted margin-top-5">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("照片信息")}}</label>
              </span>
            </div>
            <div class="block-item-bg font-size-12">
              <el-image style="width: 60px; height: 60px; margin-right: 10px" v-for="(item, index) in form.facePhotos" :key="index" :src="item">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
          </template>
          <template>
            <div :class="form.id != '' && oprType == 'detail' ? 'margin-top-20' : 'margin-top-5'">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("基础信息")}}</label>
              </span>
            </div>
            <div class="block-item-bg font-size-12">
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('迎新年度')" prop="year">
                    <my-select :disabled="form.id != '' && oprType == 'detail'" class="layout-item" size="small" :placeholder="$t('请选择')" :sel-value="form.year" :options="years" width-style="220" :clearable="false" @change="handleSelectChange($event, 1)"></my-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('姓名')" prop="name">
                    <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.name" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('录取号')" prop="adNo">
                    <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.adNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('一卡通号')" prop="oneCardNo">
                    <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.oneCardNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('学号')" prop="stuNo">
                    <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.stuNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('考号')" prop="examNo">
                    <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.examNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('性别')" prop="sex">
                    <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.sex" :options="g_sex" width-style="220" @change="handleSelectChange($event, 2)"></my-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('身份证')" prop="idCardNo">
                    <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.idCardNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('出生日期')" prop="birthday">
                    <my-date-picker :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.birthday" width-style="220" @change="handleChangeTime($event,1)"></my-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('国籍')" prop="nationality">
                    <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.nationality" :options="nationalityInfoText()" width-style="220" @change="handleSelectChange($event, 3)"></my-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="24">
                  <el-form-item :label="$t('民族')" prop="nation">
                    <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.nation" :options="nationInfoText()" width-style="220" @change="handleSelectChange($event, 4)"></my-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </template>

          <template>
            <div class="margin-top-20">
              <div class="color-muted margin-top-5">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("联系方式")}}</label>
              </span>
              </div>
              <div class="block-item-bg font-size-12">
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('手机号')" prop="phone">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.phone" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('QQ')" prop="qq">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.qq" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('邮箱')" prop="email">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.email" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('微信号')" prop="wechat">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.wechat" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('父亲姓名')" prop="fatherName">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.fatherName" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('父亲电话')" prop="fatherPhone">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.fatherPhone" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('母亲姓名')" prop="motherName">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.motherName" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('母亲电话')" prop="motherPhone">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.motherPhone" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="24">
                    <el-form-item :label="$t('详细地址')" prop="address">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.address" size="small"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>

          <template>
            <div class="margin-top-20">
              <div class="color-muted margin-top-5">
                <span>
                  <label class="title-block-tag"></label>
                  <label class="title-block-text color-warning">{{$t("入学信息")}}</label>
                </span>
              </div>
              <div class="block-item-bg font-size-12">
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('学历')" prop="education">
                      <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.education" :options="educationInfoText()" width-style="220" @change="handleSelectChange($event, 5)"></my-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('学院/专业/班级')" prop="college">
                      <my-cascader :disabled="form.id != '' && oprType == 'detail'" ref="SelectorCollege" width-style="220" :sel-value="form.college" type="1" sub-type="4" @change="handleCascaderChange($event, 1)"></my-cascader>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <!--                  <el-col :span="12">-->
                  <!--                    <el-form-item :label="$t('班级')" prop="class">-->
                  <!--                      <my-cascader :disabled="form.id != '' && oprType == 'detail'" ref="selectorDept" :sel-value="form.class" type="1" sub-type="4" width-style="220" @change="handleCascaderChange($event, 2)"></my-cascader>-->
                  <!--                    </el-form-item>-->
                  <!--                  </el-col>-->
                  <el-col :span="12">
                    <el-form-item :label="$t('学制')" prop="eduSystem">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.eduSystem" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('招生老师')" prop="recruitingTeacher">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.recruitingTeacher" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>

          <template>
            <div class="margin-top-20">
              <div class="color-muted margin-top-5">
                <span>
                  <label class="title-block-tag"></label>
                  <label class="title-block-text color-warning">{{$t("学历信息")}}</label>
                </span>
              </div>
              <div class="block-item-bg font-size-12">
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('录取批次')" prop="adBath">
                      <!--                      <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.adBath" :options="bathOptions" width-style="220" @change="handleSelectChange($event, 7)"></my-select>-->
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.adBath" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('科目')" prop="type">
                      <!--                      <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.subject" :options="subjectOptions" width-style="220" @change="handleSelectChange($event, 8)"></my-select>-->
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.subject" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('录取省份')" prop="adProvince">
                      <!--                      <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.adProvince" :options="provinceInfoText()" width-style="220" @change="handleSelectChange($event, 9)"></my-select>-->
                      <el-cascader ref="selectorProvince" size="small" :disabled="form.id != '' && oprType == 'detail'" v-model="form.adProvince" :options="provinceInfoText()" @change="handleSelectChange($event, 9)" style="width: 220px"></el-cascader>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('高考成绩')" prop="examScore">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.examScore" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('毕业学校')" prop="graduationSchool">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.graduationSchool" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>

          <template>
            <div class="margin-top-20">
              <div class="color-muted margin-top-5">
                <span>
                  <label class="title-block-tag"></label>
                  <label class="title-block-text color-warning">{{$t("其他信息")}}</label>
                </span>
              </div>
              <div class="block-item-bg font-size-12 custom-textarea-inner">
                <el-row>
                  <el-col :span="24">
                    <el-form-item :label="$t('其他信息')" prop="otherMsg">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.otherMsg" type="textarea" :rows="5" size="small"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>
        </el-form>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="mini" @click="cancelFormDrawDialog">{{$t("取消")}}</el-button>

          <el-button v-if="!form.checkStatus" :loading="btnLoading" size="mini" type="success" @click="statusOkInfo(form, 1)">{{$t("已到")}}</el-button>
          <el-button v-if="form.checkStatus != null && form.checkStatus" :loading="btnLoading" size="mini" type="danger" @click="statusCancelInfo(form, -1)">{{$t("撤销")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
import mixins from "~/utils/mixins";
import {common} from "~/utils/api/url";
import {
  cityInfo,
  educationInfo,
  MessageError,
  MessageSuccess,
  nationalityInfo,
  nationInfo, provinceArrayInfo,
  provinceInfo
} from "~/utils/utils";
import MySelect from "~/components/MySelect";

export default {
  components: {MySelect},
  mixins: [mixins],
  data(){
    return {
      tableData: [],
      tableSignData: [],
      processData: [],
      years: [],
      countNum: 0,
      signNum: 0,
      unSignNum: 0,
      collegeList: [],
      categorys: [],
      types: [],
      subTitle: '',
      collegeData: '',
      searchProcess: '',
      searchKey: '',
      searchType: '',
      searchStatus: '',
      searchCollege: '',
      searchMajor: '',
      searchGrade: '',
      searchClass: '',
      dialogLoading: false,
      dialogVisible: false,
      dialogDetail: false,
      visibleConfim: false,
      footerHidden: false,
      btnLoading: false,
      searchCascader: [],
      yearOptions: [],
      bathOptions: [],
      subjectOptions: [],
      detailData: {},
      filtersAuditType: [
        {value: 0, text: this.$t("人工")},
        {value: 1, text: this.$t("二维码")},
        {value: 2, text: this.$t("人脸识别")}
      ],
      searchTimeData: [],
      filtersSexType: [
        {value: 3, text: this.$t("未知")},
        {value: 1, text: this.$t("男")},
        {value: 2, text: this.$t("女")}
      ],
      filtersSignType: [
        {value: true, text: this.$t("是")},
        {value: false, text: this.$t("否")}
      ],
      filtersStutasType: [
        {value: true, text: this.$t("已报道")},
        {value: false, text: this.$t("未报道")}
      ],
      searchAuditType: '',
      searchSexType: '',
      searchSignTimeStatus: '',
      searchInterface: '',
      oprType: '',
      form: {
        id: '',
        year: '',
        name: '',
        adNo: '',
        oneCardNo: '',
        stuNo: '',
        examNo: '',
        sex: '',
        idCardNo: '',
        birthday: '',
        nationality: '',
        nation: '',
        phone: '',
        qq: '',
        wechat: '',
        fatherName: '',
        fatherPhone: '',
        motherName: '',
        motherPhone: '',
        address: '',
        education: '',
        college: [],
        major: '',
        class: [],
        eduSystem: '',
        headmaster: '',
        recruitingTeacher: '',
        adBath: '',
        subject: '',
        adProvince: '',
        adCity: '',
        graduationSchool: '',
        examScore: '',
        otherMsg: '',
        check_status: '',
        checkStatus: '',
        checkinId: '',
      }
    }
  },
  created() {
    this.initProcess();
    this.init();
    this.getYearInfo();
  },
  methods: {
    getYearInfo(){
      let params = {
        page: 1,
        num: 9999
      };
      this.$axios.get(common.enroll_page, {params: params}).then(res => {
        if (res.data.data){
          let years = [];
          for (let i = 0; i < res.data.data.list.length; i++){
            years.push({
              label: res.data.data.list[i].enrollName,
              text: res.data.data.list[i].enrollName,
              value: res.data.data.list[i].id
            });
          }
          this.years = years;
        }
      });
    },
    init(){
      console.log(this.searchTimeData);
      let params = {
        page: this.page,
        num: this.num,
        checkinStartTime: (this.searchTimeData && this.searchTimeData.length > 0) ? this.$moment(this.searchTimeData[0]).format("YYYY-MM-DD") : '',
        checkinEndTime: (this.searchTimeData && this.searchTimeData.length > 0) ? this.$moment(this.searchTimeData[1]).format("YYYY-MM-DD") : '',
        sex: this.searchSexType,
        checkinOnTime: this.searchSignTimeStatus,
        needReceive: this.searchInterface,
        searchKey: this.searchKey,
        processId: this.searchProcess,
        collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        classId: this.searchClass,
      };
      this.$axios.get(common.enroll_checkin_page, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },
    initPay(item){
      let params = {
        userId: item.user_id
      };
      this.$axios.get(common.enroll_checkin_pay_list_by_user, {params: params}).then(res => {
        if (res.data.data){
          this.tableSignData = res.data.data.list;
        }
      });
    },
    initProcess(){
      let params = {
        page: 1,
        num: 99999
      };
      this.$axios.get(common.enroll_process_page, {params: params}).then(res => {
        if (res.data.data){
          console.log(res.data.data);
          let process = [];
          for (let i = 0; i < res.data.data.length; i++){
            process.push({
              label: res.data.data.name,
              value: res.data.data.id,
              text: res.data.data.name,
            });
          }
          this.processData = process;
        }
      });
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
      this.page = 1;
      this.init();
    },
    handleCascaderChange(data){
      this.searchCascader = data;
    },
    handleChangeSelect(data){
      this.searchProcess = data;
    },
    handleChangeTime(data){
      this.searchTimeData = data ? data : [];
    },
    search(data){
      this.searchKey = data.input;
      this.page = 1;
      this.init();
    },
    expandInfo() {
      let url = common.enroll_checkin_export;
      let params = {
        page: 1,
        num: 99999,
        checkinStartTime: (this.searchTimeData && this.searchTimeData.length > 0) ? this.$moment(this.searchTimeData[0]).format("YYYY-MM-DD") : '',
        checkinEndTime: (this.searchTimeData && this.searchTimeData.length > 0) ? this.$moment(this.searchTimeData[1]).format("YYYY-MM-DD") : '',
        sex: this.searchSexType,
        checkinOnTime: this.searchSignTimeStatus,
        needReceive: this.searchInterface,
        searchKey: this.searchKey,
        processId: this.searchProcess,
        collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        classId: this.searchClass,
      };
      params = this.$qs.stringify(params);
      window.open(url + "?" + params, "_self");
    },
    changeStatus(type){
      this.searchType = type.value;
      this.page = 1;
      this.init();
    },
    statusOkInfo(item, type){
      let params = {
        userId: item.user_id
      };

      let url = common.enroll_checkin_handle;
      params = this.$qs.stringify(params);
      this.btnLoading = true;
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200){
          this.init();
          this.dialogDetail = false;
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.btnLoading = false;
      });
    },
    statusCancelInfo(item, type){
      let params = {
        checkinId: item.checkinId
      };

      let url = common.enroll_checkin_revoke;
      params = this.$qs.stringify(params);
      this.btnLoading = true;
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200){
          this.init();
          this.dialogDetail = false;
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.btnLoading = false;
      });
    },
    async detailInfo(item, type){
      let params = {
        userId: item.user_id
      };
      this.oprType = 'detail';
      await this.$axios.get(common.enroll_checkin_student_detail, {params: params}).then(res => {
        if (res.data.data){
          this.form = {
            id: res.data.data.id,
            user_id: res.data.data.user_id,
            year: res.data.data.enroll_id,
            name: res.data.data.real_name,
            adNo: res.data.data.enroll_no,
            oneCardNo: res.data.data.school_car_no,
            stuNo: res.data.data.student_id,
            examNo: res.data.data.exam_no,
            sex: res.data.data.sex+'',
            idCardNo: res.data.data.certificate_num,
            birthday: res.data.data.birthday ? this.$moment(res.data.data.birthday).format("YYYY-MM-DD") : '',
            nationality: ''+res.data.data.nationality,
            nation: res.data.data.nation,
            phone: res.data.data.phone,
            qq: res.data.data.qq,
            email: res.data.data.email,
            wechat: res.data.data.wechat,
            fatherName: res.data.data.father_name,
            fatherPhone: res.data.data.father_phone,
            motherName: res.data.data.mather_name,
            motherPhone: res.data.data.mather_phone,
            address: res.data.data.native_place,
            education: res.data.data.edu_level,
            college: [res.data.data.college_id, res.data.data.major_id, res.data.data.grade, res.data.data.class_id],
            major: '',
            class: [res.data.data.college_id, res.data.data.major_id, res.data.data.grade, res.data.data.class_id],
            eduSystem: res.data.data.edu_year,
            headmaster: res.data.data.master_teacher_name,
            recruitingTeacher: res.data.data.enroll_teacher,
            adBath: res.data.data.enroll_batch,
            subject: res.data.data.enroll_type,
            adProvince: [res.data.data.enroll_province,res.data.data.enroll_city],
            adCity: res.data.data.enroll_city+'',
            graduationSchool: res.data.data.high_school,
            examScore: res.data.data.gaokao_score,
            otherMsg: res.data.data.des,
            checkStatus: res.data.data.check_status,
            checkinId: res.data.data.checkin_id,
          };
        }
      });
      //this.$set(this.form, 'class', [item.college_id, item.major_id, item.grade, item.clasz]);
      //console.log(this.form);
      this.dialogDetail = true;
    },
    signInfo(event, item){
      let params = {
        userId: item.user_id
      };
      this.$axios.get(common.enroll_checkin_student_detail, {params: params}).then(res => {
        if (res.data.data){
          this.detailData = res.data.data;
        }
      });
      this.initPay(item);
      this.dialogVisible = true;
    },
    fliterTable(value, row, column){
      for (let item in value){
        if (item == 'auditType'){
          this.searchAuditType = value[item][0];
        }else if (item == 'sexType'){
          this.searchSexType = value[item][0];
        }else if (item == 'signType'){
          this.searchSignTimeStatus = value[item][0];
        }else if (item == 'interfaceType'){
          this.searchInterface = value[item][0];
        }else if (item == 'statusType'){
          this.searchStatus = value[item][0];
        }
      }
      this.init();
    },
    nationInfoText(){
      let arr = nationInfo();
      for (let i = 0; i < arr.length; i++){
        arr[i]['label'] = arr[i].name;
        arr[i]['value'] = arr[i].code;
      }
      return arr;
    },
    nationalityInfoText(){
      let arr = nationalityInfo();
      for (let i = 0; i < arr.length; i++){
        arr[i]['label'] = arr[i].country_name_cn;
        arr[i]['value'] = ""+arr[i].country_code;
        arr[i]['text'] = arr[i].country_name_cn;
      }
      return arr;
    },
    educationInfoText(){
      let arr = educationInfo();
      for (let i = 0; i < arr.length; i++){
        arr[i]['label'] = arr[i].name;
        arr[i]['value'] = ""+arr[i].value;
        arr[i]['text'] = arr[i].name;
      }
      return arr;
    },
    provinceInfoText(){
      let arr = provinceArrayInfo();
      let province = [];
      for (let i = 0; i < arr.length; i++){
        province.push({
          label: arr[i].label,
          value: arr[i].label
        });
        if (arr[i]['children']){
          province[i]['children'] = [];
          for (let j = 0; j < arr[i].children.length; j++){
            province[i]['children'].push({
              label: arr[i].children[j],
              value: arr[i].children[j]
            });
          }
        }
      }
      return province;
    },
    cityInfoText(){
      let arr = cityInfo();
      for (let i = 0; i < arr.length; i++){
        arr[i]['label'] = arr[i].name;
        arr[i]['value'] = ""+arr[i].CityID;
        arr[i]['text'] = arr[i].name;
      }
      return arr;
    },
    closeDialog(event){
      this.form = {
        id: '',
        year: '',
        name: '',
        adNo: '',
        oneCardNo: '',
        stuNo: '',
        examNo: '',
        sex: '',
        idCardNo: '',
        birthday: '',
        nationality: '',
        nation: '',
        phone: '',
        qq: '',
        wechat: '',
        fatherName: '',
        fatherPhone: '',
        motherName: '',
        motherPhone: '',
        address: '',
        education: '',
        college: [],
        major: '',
        class: [],
        eduSystem: '',
        headmaster: '',
        recruitingTeacher: '',
        adBath: '',
        subject: '',
        adProvince: '',
        adCity: '',
        graduationSchool: '',
        examScore: '',
        otherMsg: '',
        checkStatus: '',
        checkinId: '',
      };
      this.subTitle = "";
      this.versionStatus = '';
      this.detailData = {};
      this.resetCasadeSelector('SelectorCollege');
      this.resetCasadeSelector('selectorDept');
      if (this.$refs['form']){
        this.$refs['form'].resetFields();
      }
      this.loopTimer = null;
      this.teacherArray = [];
      this.approverUsers = [];
      this.btnLoading = false;
      this.dialogVisible = false;
      this.dialogDetail = false;
    },
    cancelFormDrawDialog(){
      this.closeDialog();
      this.drawerForm = false;
    },
    okFormDrawDialog(event, type){
      let params = {

      };

      let url = common.circular_add;
      //params = this.$qs.stringify(params);
      this.btnLoading = true;
      this.$axios.post(url, params, {loading: false}).then(res => {
        if (res.data.code == 200){
          this.drawerManage = false;
          this.init();
          this.closeDialog();
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.btnLoading = false;
      });
    }
  }
}
</script>

<style scoped>
.header-block{
  height: 40px;
  line-height: 40px;
}
.block-table-main{
  border: 1px solid #DCDFE6;
}
.block-table-main .item{
  height: 40px;
  line-height: 40px;
}
.title-block-tag{
  display: inline-block;
  height: 20px;
  width: 3px;
  background: #E6A23C;
  font-weight: bold;
  border-radius: 3px;
}
.title-block-text{
  font-weight: bold;
  position: relative;
  top: -5px;
}
</style>
