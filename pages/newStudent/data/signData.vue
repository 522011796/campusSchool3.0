<template>
  <div class="container">
    <div>
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">报到数据</span>
          </div>
          <my-el-tree type="1" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div class="layout-top-tab margin-top-5 custom-button-search">
            <el-row>
              <el-col :span="12">
                <div class="layout-inline">
                  <el-button class="layout-item" size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
<!--                  <tab-group-button size="small" :options='[-->
<!--                    {label:$t("总人数"), value: "1", extra: countNum},-->
<!--                    {label:$t("已报到"), value: "3", extra: signNum},-->
<!--                    {label:$t("未报到"), value: "0", extra: unSignNum}]' @click="changeStatus">-->
<!--                  </tab-group-button>-->
                  <el-button-group class="layout-item" style="position: relative; top: -1px">
                    <el-button size="small" type="text">
                      <span class="color-muted font-size-12">{{$t("总人数")}} {{countNum}} | </span>
                    </el-button>
                    <el-button size="small" type="text">
                      <span class="color-muted font-size-12">{{$t("已报到")}} {{signNum}} | </span>
                    </el-button>
                    <el-button size="small" type="text">
                      <span class="color-muted font-size-12">{{$t("未报到")}} {{unSignNum}}</span>
                    </el-button>
                  </el-button-group>
                  <my-select class="layout-item width-100" size="small" :clearable="true" :placeholder="$t('流程名称')" :sel-value="searchProcess" :options="processData" @change="handleChangeSelect($event)"></my-select>
                </div>
              </el-col>
              <el-col :span="12" class="text-right">
                <div class="layout-inline">
                  <el-date-picker
                    size="small"
                    unlink-panels
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
                    <div class="text-center">{{scope.row.major_name}}</div>
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
                      <label class="color-success" v-if="scope.row.check_status">{{$t("已报到")}}</label>
                      <label class="color-danger" v-if="!scope.row.check_status">{{$t("未报到")}}</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label class="color-success" v-if="scope.row.check_status">{{$t("已报到")}}</label>
                      <label class="color-danger" v-if="!scope.row.check_status">{{$t("未报到")}}</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('缴费状态')"
                               column-key="payType"
                               :filter-multiple="false"
                               :filters="filtersPayStatusType"
                                width="120">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.payment_status == 3" class="color-success">{{$t("已缴费")}}</label>
                      <label v-else-if="scope.row.payment_status == 2" class="color-danger">{{$t("部分缴费")}}</label>
                      <label v-else-if="scope.row.payment_status == 1" class="color-danger">{{$t("未缴费")}}</label>
                      <label v-else-if="scope.row.payment_status == 4" class="color-danger">{{$t("待核实")}}</label>
                      <label v-else>--</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.payment_status == 3" class="color-success">{{$t("已缴费")}}</label>
                      <label v-else-if="scope.row.payment_status == 2" class="color-danger">{{$t("部分缴费")}}</label>
                      <label v-else-if="scope.row.payment_status == 1" class="color-danger">{{$t("未缴费")}}</label>
                      <label v-else-if="scope.row.payment_status == 4" class="color-danger">{{$t("待核实")}}</label>
                      <label v-else>--</label>
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
              <el-table-column align="center" :label="$t('报到时间')">
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
              <el-table-column align="center" :label="$t('准时报到')"
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
                width="160"
                fixed="right"
                :label="$t('操作')">
                <template slot-scope="scope">
                  <el-button v-if="!scope.row.check_status" size="mini" type="success" @click="statusOkInfo(scope.row, 1)">{{$t("已到")}}</el-button>
                  <el-button v-if="scope.row.check_status != null && scope.row.check_status" size="mini" type="danger" @click="statusCancelInfo(scope.row, -1)">{{$t("撤销")}}</el-button>
                  <el-button size="mini" type="primary" @click="signInfo($event, scope.row)">{{$t("报到单")}}</el-button>
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
            {{$t('报到单')}}
          </span>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div>
          <div class="padding-tb-10 padding-lr-10">
            <span class="title-block-tag"></span>
            <span class="title-block-text">{{$t("基本信息")}}</span>

            <div class="pull-right">
              <el-image style="width: 120px; height: 30px" :src="g_BarCode"></el-image>
            </div>
          </div>
          <table class="custom-table">
            <tr>
              <td style="width: 20%" rowspan="2">
                <img v-if="detailData.photo_simple" :src="detailData.photo_simple"style="width: 80px; height: 80px;margin-top: 5px">
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
              <td colspan="6" class="color-muted font-size-12">
                <span v-if="detailData.build_name">
                  {{detailData.build_name}}{{detailData.floor_num}}{{$t("层")}}{{detailData.dormitory_no}}
                </span>
                <span v-if="detailData.pac_name && !detailData.build_name">
                  {{detailData.pac_name}}
                  <label class="font-size-12 color-muted">
                    (¥{{detailData.pac_price}} -- {{detailData.pac_region}})
                  </label>
                </span>
              </td>
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
                  <div class="text-center">{{scope.row.item_name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.item_name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('缓缴')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.delay_amount}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.delay_amount}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('贷款')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.loan_amount}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.loan_amount}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('减免')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.deduction_amount}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.deduction_amount}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('实缴')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.should_amount}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.should_amount}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('已缴')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.paid_amount}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.paid_amount}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('未缴金额')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.wait_amount}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.wait_amount}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="margin-top-20">
          <el-image style="width: 80px; height: 80px" :src="g_QrCode"></el-image>
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
<!--              <el-image style="width: 60px; height: 60px; margin-right: 10px" v-for="(item, index) in form.facePhotos" :key="index" :src="item">-->
<!--                <div slot="error" class="image-slot">-->
<!--                  <i class="el-icon-picture-outline"></i>-->
<!--                </div>-->
<!--              </el-image>-->
              <el-image v-if="form.photo_simple" style="width: 80px; height: 80px; margin-right: 10px" :src="form.photo_simple">
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
                  <el-form-item :label="$t('学号')" prop="stuNo">
                    <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.stuNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('身份证')" prop="idCardNo" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '身份证'">
                    <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.idCardNo" size="small" class="width-220"></el-input>
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
                  <el-form-item :label="$t('出生日期')" prop="birthday">
                    <my-date-picker :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.birthday" width-style="220" @change="handleChangeTime($event,1)"></my-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('国籍')" prop="nationality">
                    <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.nationality" :options="nationalityInfoText()" width-style="220" @change="handleSelectChange($event, 3)"></my-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
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
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '手机号'">
                    <el-form-item :label="$t('手机号')" prop="phone">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.phone" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == 'QQ'">
                    <el-form-item :label="$t('QQ')" prop="qq">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.qq" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '邮箱'">
                    <el-form-item :label="$t('邮箱')" prop="email">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.email" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '微信号'">
                    <el-form-item :label="$t('微信号')" prop="wechat">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.wechat" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '父亲姓名'">
                    <el-form-item :label="$t('父亲姓名')" prop="fatherName">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.fatherName" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '父亲电话'">
                    <el-form-item :label="$t('父亲电话')" prop="fatherPhone">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.fatherPhone" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('母亲姓名')" prop="motherName" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '母亲姓名'">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.motherName" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('母亲电话')" prop="motherPhone" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '母亲电话'">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.motherPhone" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="24">
                    <el-form-item :label="$t('详细地址')" prop="address" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '详细地址'">
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
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '学历'">
                    <el-form-item :label="$t('学历')" prop="education">
                      <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.education" :options="educationInfoText()" width-style="220"></my-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('学院/专业/(班级)')" prop="college">
                      <my-cascader :disabled="!form.updateClass" ref="SelectorCollege" width-style="220" :sel-value="form.college" type="1" sub-type="4" @change="handleCascaderChange($event, 1)"></my-cascader>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '学制'">
                    <el-form-item :label="$t('学制')" prop="eduSystem">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.eduSystem" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '招生老师'">
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
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '班主任姓名'">
                    <el-form-item :label="$t('班主任姓名')" prop="bzrName">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.bzrName" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '班主任电话'">
                    <el-form-item :label="$t('班主任电话')" prop="bzrPhone">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.bzrPhone" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '录取批次'">
                    <el-form-item :label="$t('录取批次')" prop="adBath">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.adBath" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '科目'">
                    <el-form-item :label="$t('科目')" prop="type">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.subject" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '录取省份'">
                    <el-form-item :label="$t('录取省份')" prop="adProvince">
                      <el-cascader ref="selectorProvince" size="small" :disabled="form.id != '' && oprType == 'detail'" v-model="form.adProvince" :options="provinceInfoText()" @change="handleSelectChange($event, 9)" style="width: 220px"></el-cascader>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '高考成绩'">
                    <el-form-item :label="$t('高考成绩')" prop="examScore">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.examScore" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '毕业学校'">
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
                <el-row :gutter="8">
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '毕业类型'">
                    <el-form-item :label="$t('毕业类型')" prop="graduation">
                      <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.graduation" :options="filterGraduationType" width-style="220" @change="handleSelectChange($event, 11)"></my-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '政治面貌'">
                    <el-form-item :label="$t('政治面貌')" prop="politics">
                      <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.politics" :options="filterPoliticsType" width-style="220" @change="handleSelectChange($event, 12)"></my-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '退役士兵'">
                    <el-form-item :label="$t('退役士兵')" prop="retire">
                      <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.retire" :options="filterRetireType" width-style="220" @change="handleSelectChange($event, 13)"></my-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '困难类型'">
                    <el-form-item :label="$t('困难类型')" prop="hard">
                      <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.hard" :options="filterHardType" width-style="220" @change="handleSelectChange($event, 14)"></my-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24" v-for="(item, index) in tableSelColData" :key="index" v-if="item == '其他信息'">
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
          <el-button v-if="form.updateClass" :loading="btnUpdateLoading" size="mini" type="warning" @click="updateInfo(form, -2)">{{$t("修改")}}</el-button>
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
  MessageSuccess, MessageWarning,
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
      btnUpdateLoading: false,
      searchCascader: [],
      yearOptions: [],
      bathOptions: [],
      subjectOptions: [],
      tableSelColData: [],
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
        {value: true, text: this.$t("已报到")},
        {value: false, text: this.$t("未报到")}
      ],
      filtersPayStatusType: [
        {value: 3, text: this.$t("已缴清")},
        {value: 1, text: this.$t("未缴清")},
        {value: 4, text: this.$t("待核实")}
      ],
      searchAuditType: '',
      searchSexType: '',
      searchSignTimeStatus: '',
      searchInterface: '',
      searchPayStatus: '',
      oprType: '',
      userId: '',
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
        checkin_id: '',
        facePhotos: [],
        graduation: '',
        politics: '',
        retire: '',
        hard: '',
        photo_simple: '',
        updateClass: false,
        bzrName: '',
        bzrPhone: ''
      }
    }
  },
  created() {
    this.initProcess();
    this.init();
    this.getYearInfo();
    this.initCountStatic();
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
    initCountStatic(){
      let params = {
        collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        classId: this.searchClass,
        processId: this.searchProcess
      };
      this.$axios.get(common.enroll_checkin_num, {params: params}).then(res => {
        if (res.data.data) {
          this.countNum = res.data.data.all;
          this.signNum = res.data.data.checkin;
          this.unSignNum = res.data.data.notCheckin;
        }
      });
    },
    init(){
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
        checkStatus: this.searchStatus,
        checkType: this.searchAuditType,
        paymentStatus: this.searchPayStatus
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
          for (let i = 0; i < res.data.data.length; i++){
            res.data.data[i]['wait_amount'] = res.data.data[i].should_amount - res.data.data[i].paid_amount;
          }
          this.tableSignData = res.data.data;
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
          let process = [];
          for (let i = 0; i < res.data.data.list.length; i++){
            process.push({
              label: res.data.data.list[i].processName,
              value: res.data.data.list[i].id,
              text: res.data.data.list[i].processName,
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
      this.initCountStatic();
    },
    handleCascaderChange(data, type){
      this.searchCascader = data;
      switch (type) {
        case 1:
          this.form.college = data;
          break;
      }
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
      this.initCountStatic();
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
        checkinId: item.checkin_id
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
    updateInfo(){
      if (this.form.college.length < 4){
        MessageWarning(this.$t("请设置学院/专业(班级)信息！"));
        return;
      }

      let params = {
        userId: this.userId,
        classId: this.form.college[3],
      };
      let url = common.enroll_student_update_class;
      params = this.$qs.stringify(params);
      this.btnUpdateLoading = true;
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200){
          this.init();
          this.dialogDetail = false;
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.btnUpdateLoading = false;
      });
    },
    async detailInfo(item, type){
      let params = {
        userId: item.user_id
      };
      this.userId = item.user_id;
      this.oprType = 'detail';
      await this.$axios.get(common.enroll_checkin_student_detail, {params: params}).then(res => {
        if (res.data.data){
          let photos = res.data.data.face_photos ? res.data.data.face_photos.split("|") : [];
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
            //college: [res.data.data.college_id, res.data.data.major_id, res.data.data.grade, res.data.data.class_id],
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
            checkin_id: res.data.data.checkin_id,
            facePhotos: photos,
            graduation: res.data.data.graduation_type,
            politics: res.data.data.political_type,
            retire: res.data.data.soldier,
            hard: res.data.data.difficulty_type,
            photo_simple: res.data.data.photo_simple,
            updateClass: res.data.data.otherSetting.updateClass,
            bzrName: res.data.data.master_name,
            bzrPhone: res.data.data.master_phone,
          };
        }
        if (!res.data.data.class_id){
          this.$set(this.form, 'college', [res.data.data.college_id, res.data.data.major_id]);
        }
        if (res.data.data.class_id){
          this.$set(this.form, 'college', [res.data.data.college_id, res.data.data.major_id, res.data.data.grade, res.data.data.class_id]);
        }
      });

      await this.$axios.get(common.enroll_admin_get).then(res => {
        this.tableSelColData = res.data.data.displayField;
      });

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
      this.getUserQrcode(item.user_id);
      this.getUserBarcode(item.user_id);
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
        }else if (item == 'payType'){
          this.searchPayStatus = value[item][0];
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
        checkin_id: '',
        facePhotos: [],
        photo_simple: '',
        bzrName: '',
        bzrPhone: ''
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
      this.tableSelColData = [];
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
