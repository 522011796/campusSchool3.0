<template>
  <div class="container">
    <div>
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">报道数据</span>
          </div>
          <my-el-tree type="4" sub-type="" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div class="layout-top-tab margin-top-5">
            <el-row>
              <el-col :span="12">
                <div class="layout-inline">
                  <el-button class="layout-item" size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
                  <tab-group-button size="small" :options='[
                    {label:$t("总人数"), value: "1", extra: countNum},
                    {label:$t("已报道"), value: "3", extra: signNum},
                    {label:$t("未报道"), value: "0", extra: unSignNum}]' @click="changeStatus">
                  </tab-group-button>
                  <my-cascader class="layout-item" size="small" ref="SelectorCollege" :sel-value="searchCascader" type="4" sub-type="id" width-style="160" @change="handleCascaderChange($event)"></my-cascader>
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
              <el-table-column align="center" :label="$t('录取日期')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('录取号')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('姓名')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <a href="javascript:;" @click="detailInfo(scope.row)">1</a>
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
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('学院')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('院系')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('班级')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('招生老师')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('状态')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
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
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('报道时间')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
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
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
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
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('陪同人员')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('到达站')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
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
                  <el-button size="mini" type="success" @click="statusInfo(scope.row, 1)">{{$t("已到")}}</el-button>
                  <el-button size="mini" type="danger" @click="statusInfo(scope.row, -1)">{{$t("撤销")}}</el-button>
                  <el-button size="mini" type="primary" @click="signInfo(scope.row)">{{$t("报道单")}}</el-button>
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
                <el-image style="width: 80px; height: 80px;margin-top: 5px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-image>
              </td>
              <td style="width: 20%">{{$t("姓名")}}</td>
              <td style="width: 10%">1</td>
              <td style="width: 10%">{{$t("性别")}}</td>
              <td style="width: 10%">1</td>
              <td style="width: 20%">{{$t("录取号")}}</td>
              <td style="width: 10%">1</td>
            </tr>
            <tr>
              <td>{{$t("学院")}}</td>
              <td>1</td>
              <td>{{$t("专业")}}</td>
              <td>1</td>
              <td>1</td>
              <td>{{$t("班级")}}</td>
            </tr>
            <tr>
              <td>{{$t("宿舍信息")}}</td>
              <td colspan="6">1</td>
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
        <el-form :model="form" ref="form" label-width="90px">
          <template v-if="form.id != ''">
            <div class="color-muted margin-top-5">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("照片信息")}}</label>
              </span>
            </div>
            <div class="block-item-bg font-size-12">
              <div class="custom-el-image pull-left">
                <div class="text-center" style="width: 80px; height: 80px;">
                  <div class="block">
                    <el-image style="width: 60px; height: 60px;">
                      <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                      </div>
                    </el-image>
                  </div>
                  <div class="font-size-12 color-sub-grand margin-top-5">
                    <span>{{$t("高考照片")}}</span>
                  </div>
                </div>
              </div>
              <div class="custom-el-image pull-left margin-left-10">
                <div class="text-center" style="width: 80px; height: 80px;">
                  <div class="block">
                    <el-image style="width: 60px; height: 60px;">
                      <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                      </div>
                    </el-image>
                  </div>
                  <div class="font-size-12 color-sub-grand margin-top-5">
                    <span>{{$t("采集照片")}}</span>
                  </div>
                </div>
              </div>
              <div class="moon-clearfix"></div>
            </div>
          </template>
          <template>
            <div :class="form.id != '' ? 'margin-top-20' : 'margin-top-5'">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("基础信息")}}</label>
              </span>
            </div>
            <div class="block-item-bg font-size-12">
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('迎新年度')" prop="year">
                    <my-select :disabled="form.id != ''" class="layout-item" size="small" :placeholder="$t('请选择')" :sel-value="form.year" :options="yearOptions" width-style="220" :clearable="true" @change="handleSelectChange($event, 1)"></my-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('姓名')" prop="name">
                    <el-input :disabled="form.id != ''" v-model="form.name" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('录取号')" prop="adNo">
                    <el-input :disabled="form.id != ''" v-model="form.adNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('一卡通号')" prop="oneCardNo">
                    <el-input :disabled="form.id != ''" v-model="form.oneCardNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('学号')" prop="stuNo">
                    <el-input :disabled="form.id != ''" v-model="form.stuNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('考号')" prop="examNo">
                    <el-input :disabled="form.id != ''" v-model="form.examNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('性别')" prop="sex">
                    <my-select :disabled="form.id != ''" :sel-value="form.sex" :options="g_sex" width-style="220" @change="handleSelectChange($event, 2)"></my-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('身份证')" prop="idCardNo">
                    <el-input :disabled="form.id != ''" v-model="form.idCardNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('出生日期')" prop="birthday">
                    <my-date-picker :disabled="form.id != ''" :sel-value="form.birthday" width-style="220" @change="handleChangeTime($event,1)"></my-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('国籍')" prop="nationality">
                    <my-select :disabled="form.id != ''" :sel-value="form.nationality" :options="nationalityInfoText()" width-style="220" @change="handleSelectChange($event, 3)"></my-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="24">
                  <el-form-item :label="$t('民族')" prop="nation">
                    <my-select :disabled="form.id != ''" :sel-value="form.nation" :options="nationInfoText()" width-style="220" @change="handleSelectChange($event, 4)"></my-select>
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
                      <el-input :disabled="form.id != ''" v-model="form.phone" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('QQ')" prop="qq">
                      <el-input :disabled="form.id != ''" v-model="form.qq" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('邮箱')" prop="email">
                      <el-input :disabled="form.id != ''" v-model="form.email" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('微信号')" prop="wechat">
                      <el-input :disabled="form.id != ''" v-model="form.wechat" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('父亲姓名')" prop="fatherName">
                      <el-input :disabled="form.id != ''" v-model="form.fatherName" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('父亲电话')" prop="fatherPhone">
                      <el-input :disabled="form.id != ''" v-model="form.fatherPhone" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('母亲姓名')" prop="motherName">
                      <el-input :disabled="form.id != ''" v-model="form.motherName" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('母亲电话')" prop="motherPhone">
                      <el-input :disabled="form.id != ''" v-model="form.motherPhone" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="24">
                    <el-form-item :label="$t('详细地址')" prop="address">
                      <el-input :disabled="form.id != ''" v-model="form.address" size="small"></el-input>
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
                      <my-select :disabled="form.id != ''" :sel-value="form.education" :options="educationInfoText()" width-style="220" @change="handleSelectChange($event, 5)"></my-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('学院/专业')" prop="college">
                      <my-cascader :disabled="form.id != ''" ref="SelectorCollege" width-style="220" :sel-value="form.college" type="1" sub-type="2" @change="handleCascaderChange($event, 1)"></my-cascader>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('班级')" prop="class">
                      <my-cascader :disabled="form.id != ''" ref="selectorDept" :sel-value="form.class" type="1" sub-type="4" width-style="220" @change="handleCascaderChange($event, 2)"></my-cascader>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('班主任')" prop="headmaster">
                      <el-input :disabled="form.id != ''" v-model="form.headmaster" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('学制')" prop="eduSystem">
                      <el-input :disabled="form.id != ''" v-model="form.eduSystem" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('招生老师')" prop="recruitingTeacher">
                      <el-input :disabled="form.id != ''" v-model="form.recruitingTeacher" size="small" class="width-220"></el-input>
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
                      <my-select :disabled="form.id != ''" :sel-value="form.adBath" :options="bathOptions" width-style="220" @change="handleSelectChange($event, 7)"></my-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('科目')" prop="type">
                      <my-select :disabled="form.id != ''" :sel-value="form.subject" :options="subjectOptions" width-style="220" @change="handleSelectChange($event, 8)"></my-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('录取省份')" prop="adProvince">
                      <my-select :disabled="form.id != ''" :sel-value="form.adProvince" :options="provinceInfoText()" width-style="220" @change="handleSelectChange($event, 9)"></my-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('录取城市')" prop="adCity">
                      <my-select :disabled="form.id != ''" :sel-value="form.adCity" :options="cityInfoText()" width-style="220" @change="handleSelectChange($event, 10)"></my-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('毕业学校')" prop="graduationSchool">
                      <el-input :disabled="form.id != ''" v-model="form.graduationSchool" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('高考成绩')" prop="examScore">
                      <el-input :disabled="form.id != ''" v-model="form.examScore" size="small" class="width-220"></el-input>
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
                      <el-input :disabled="form.id != ''" v-model="form.otherMsg" type="textarea" :rows="5" size="small"></el-input>
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
          <el-button size="mini" type="success" :loading="btnLoading" @click="okFormDrawDialog($event, 1)">{{$t("已到")}}</el-button>
          <el-button size="mini" type="danger" :loading="btnLoading" @click="okFormDrawDialog($event, 1)">{{$t("撤销")}}</el-button>
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
  nationInfo,
  provinceInfo
} from "~/utils/utils";

  export default {
    mixins: [mixins],
    data(){
      return {
        tableData: [],
        tableSignData: [],
        countNum: 0,
        signNum: 0,
        unSignNum: 0,
        collegeList: [],
        categorys: [],
        types: [],
        subTitle: '',
        collegeData: '',
        searchKey: '',
        searchType: '',
        searchStatus: '',
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
        filtersAuditType: [],
        searchTimeData: [],
        filtersSexType: [
          {value: 0, text: this.$t("未知")},
          {value: 1, text: this.$t("男")},
          {value: 2, text: this.$t("女")}
        ],
        filtersSignType: [
          {value: 0, text: this.$t("是")},
          {value: 1, text: this.$t("否")}
        ],
        searchAuditType: '',
        searchSexType: '',
        searchSignTimeStatus: '',
        searchInterface: '',
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
          otherMsg: ''
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
          departmentPath: this.collegeData,
          appletType: this.searchType,
          enable: this.searchStatus,
          searchKey: this.searchKey
        };
        this.$axios.get(common.server_applet_list, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
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
        this.collegeData = data.department_path;
        this.page = 1;
        this.init();
      },
      handleCascaderChange(data){
        this.searchCascader = data;
      },
      handleChangeTime(data){
        this.searchTimeData = data;
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      expandInfo() {
        let url = common.housework_query_class_record_export;
        let params = {
          page: this.page,
          num: this.num,
        };
        params = this.$qs.stringify(params);
        window.open(url + "?" + params, "_self");
      },
      changeStatus(type){
        this.searchType = type.value;
        this.page = 1;
        this.init();
      },
      statusInfo(item, type){

      },
      detailInfo(item, type){
        this.form.id = 1;
        this.dialogDetail = true;
      },
      signInfo($event, item){
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
          arr[i]['value'] = arr[i].country_code;
        }
        return arr;
      },
      educationInfoText(){
        let arr = educationInfo();
        for (let i = 0; i < arr.length; i++){
          arr[i]['label'] = arr[i].name;
          arr[i]['value'] = arr[i].value;
        }
        return arr;
      },
      provinceInfoText(){
        let arr = provinceInfo();
        for (let i = 0; i < arr.length; i++){
          arr[i]['label'] = arr[i].name;
          arr[i]['value'] = arr[i].ProID;
        }
        return arr;
      },
      cityInfoText(){
        let arr = cityInfo();
        for (let i = 0; i < arr.length; i++){
          arr[i]['label'] = arr[i].name;
          arr[i]['value'] = arr[i].CityID;
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
          otherMsg: ''
        };
        this.subTitle = "";
        this.versionStatus = '';
        this.resetCasadeSelector('SelectorCollege');
        this.resetCasadeSelector('selectorDept');
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        this.uploadProcess = '';
        this.uploadResult = [];
        clearTimeout(this.loopTimer);
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
