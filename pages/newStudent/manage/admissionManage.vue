<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">录取管理</span>
        </div>
        <my-el-tree type="1" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="9">
              <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加")}}</el-button>
              <el-dropdown trigger="click">
                <el-button type="info" size="small">
                  {{$t("导入/导出")}}<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="importInfo($event)">
                    <i class="el-icon-upload"></i>
                    {{$t("导入")}}
                  </el-dropdown-item>
                  <el-dropdown-item @click.native="exportInfo($event)">
                    <i class="el-icon-download"></i>
                    {{$t("导出")}}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-button size="small" type="warning"  icon="el-icon-s-custom" @click="manageInfo($event)">{{$t("管理员")}}</el-button>
            </el-col>
            <el-col :span="15" class="text-right">
              <div class="layout-inline">
                <el-date-picker
                  size="small"
                  unlink-panels
                  v-model="searchTimeData"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  @change="handleChangeTime($event,2)"
                  style="width: 220px">
                </el-date-picker>
                <my-select class="layout-item " size="small" :placeholder="$t('选择批次')" :clearable="true" :sel-value="searchStudentPC" :options="fliterPCs" width-style="100" @change="handleSearchChange($event, 1)"></my-select>
                <my-input-button :show-select="true" :options="searchStudentType" size="small" plain width-class="width: 200px" type="success" :clearable="true" @click="search"></my-input-button>
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
            style="width: 100%">
            <el-table-column align="center" :label="$t('录取日期')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{$moment(scope.row.regist_date).format("YYYY-MM-DD")}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{$moment(scope.row.regist_date).format("YYYY-MM-DD")}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('入学编号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.enroll_no}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.enroll_no}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('姓名')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.real_name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.real_name}}
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
                  <div class="text-center">{{scope.row.enroll_teacher ? scope.row.enroll_teacher : '--'}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label>{{scope.row.enroll_teacher ? scope.row.enroll_teacher : '--'}}</label>
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              v-for="(item, index) in tableColData" :key="index"
              align="center"
              :label=item>
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.values[index].value}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.values[index].value}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              width="120"
              fixed="right"
              :label="$t('操作')">
              <template slot-scope="scope">
                <i class="fa fa-eye color-warning margin-right-5" @click="detailInfo(scope.row)"></i>
                <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row)"></i>
                <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <drawer-layout-right tabindex="0" :show-close="true" @changeDrawer="closeDialog" :visible="drawerForm" size="750px">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <span class="tab-class font-bold">
            {{$t('学生信息')}}
          </span>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <el-form :model="form" ref="form" :rules="rules" label-width="140px">
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
                  <el-form-item :label="$t('入学编号')" prop="adNo">
                    <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.adNo" size="small" class="width-220"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('学号')" prop="stuNo">
                    <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.stuNo" size="small" class="width-220"></el-input>
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
                    <el-form-item :label="$t('邮政编码')" prop="postalCode">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.postalCode" size="small" :placeholder="$t('请填写邮政编码')"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="24">
                    <el-form-item :label="$t('详细地址')" prop="address">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.address" size="small" :placeholder="$t('请填写详细地址至楼号门牌号')"></el-input>
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
                    <el-form-item :label="$t('学院/专业/(班级)')" prop="college">
                      <my-cascader :props="{ checkStrictly: true }" :disabled="form.id != '' && oprType == 'detail'" ref="SelectorCollege" width-style="220" :sel-value="form.college" type="1" sub-type="4" @change="handleCascaderChange($event, 1)"></my-cascader>
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
                    <el-form-item :label="$t('班主任姓名')" prop="bzrName">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.bzrName" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('班主任电话')" prop="bzrPhone">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.bzrPhone" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
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
<!--                    <el-form-item :label="$t('录取城市')" prop="adCity">-->
<!--                      <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.adCity" :options="cityInfoText()" width-style="220" @change="handleSelectChange($event, 10)"></my-select>-->
<!--                    </el-form-item>-->
                    <el-form-item :label="$t('高考成绩')" prop="examScore">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.examScore" size="small" class="width-220"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('毕业学校')" prop="graduationSchool">
                      <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.graduationSchool" size="small" class="width-220" :placeholder="$t('请填写学校全称')"></el-input>
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
                  <el-col :span="12">
                    <el-form-item :label="$t('毕业类型')" prop="graduation">
                      <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.graduation" :options="filterGraduationType" width-style="220" @change="handleSelectChange($event, 11)"></my-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('政治面貌')" prop="politics">
                      <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.politics" :options="filterPoliticsType" width-style="220" @change="handleSelectChange($event, 12)"></my-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="8">
                  <el-col :span="12">
                    <el-form-item :label="$t('退役士兵')" prop="retire">
                      <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.retire" :options="filterRetireType" width-style="220" @change="handleSelectChange($event, 13)"></my-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('困难类型')" prop="hard">
                      <my-select :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.hard" :options="filterHardType" width-style="220" @change="handleSelectChange($event, 14)"></my-select>
                    </el-form-item>
                  </el-col>
                </el-row>
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
      <div slot="footer" v-if="footerHidden == true">
        <div class="text-right padding-lr-10">
          <el-button size="mini" @click="cancelFormDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="mini" type="success" :loading="btnLoading" @click="okFormDrawDialog()">{{$t("保存")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" :show-close="true" @changeDrawer="closeDialog" :visible="drawerManage" size="550px">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <span class="tab-class font-bold">
            {{$t('管理员')}}
          </span>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div>
          <div class="color-muted margin-top-5">
            <span>
              <label class="title-block-tag"></label>
              <label class="title-block-text color-warning">
                {{$t("设置管理员")}}
                <span style="color: #909399;font-weight: normal">({{$t("管理员可以添加、编辑、删除学生")}})</span>
              </label>
            </span>
          </div>
          <div class="block-item-bg font-size-12">
            <el-popover
              popper-class="custom-popper-class-form"
              placement="top"
              width="700"
              trigger="click"
              @show="handleShowTeacher(1)">
              <div>
                <teacher-tree-and-list-no-page ref="popverTeacherRef" user-type="user" :sel-arr="teacherArray" set-type="check" @select="handleSelUser($event, 1)"></teacher-tree-and-list-no-page>
              </div>
              <el-button slot="reference" type="success" plain size="small" @click="loadingShow(1)">
                <i v-if="refreshTeacherStatus == true" class="fa fa-refresh fa-spin"></i>
                {{$t("添加老师")}}
              </el-button>
            </el-popover>
            <span>{{$t("人数")}}: {{approverUsers.length}}</span>
          </div>
        </div>

        <div class="margin-top-20">
          <div class="color-muted margin-top-5">
            <span>
              <label class="title-block-tag"></label>
              <label class="title-block-text color-warning">
                {{$t("字段显示管理")}}
                <span style="color: #909399;font-weight: normal">({{$t("未选中的字段不予显示")}})</span>
              </label>
            </span>
          </div>
          <div class="block-item-bg font-size-12">
            <el-checkbox-group v-model="tableSelColData">
              <el-row>
                <el-col :span="6" v-for="(item, index) in tableAllColData" :key="index">
                  <el-checkbox :label=item.name>
                    <span class="font-size-12">{{item.name}}</span>
                  </el-checkbox>
                </el-col>
              </el-row>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="mini" @click="cancelManageDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="mini" type="success" :loading="btnLoading" @click="okManageDrawDialog()">{{$t("保存")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-right @changeDrawer="closeDialog" :visible="drawerUpload" accept=".xls,.xlsx" :loading="btnLoading" :hide-footer="true" size="400px" :title="$t('导入学生')" :action="uploadAction" :download-file="uploadFile" :result="uploadResult" :process="uploadProcess" @right-close="closeDialog" @success="uploadSuccess" @error="uploadError">

    </drawer-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
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
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";
  import admissionValidater from "~/utils/validater/admissionValidater";
  import MySelect from "~/components/MySelect";
  import MyCascader from "~/components/utils/select/MyCascader";

  export default {
    components: {MyCascader, MySelect, DrawerLayoutRight},
    mixins: [mixins, admissionValidater],
    data(){
      return {
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        years: [],
        tableData: [],
        tableColData: [],
        tableSelColData: [],
        tableColValueData: [],
        collegeList: [],
        categorys: [],
        types: [],
        tableCBData: [],
        subTitle: '',
        collegeData: '',
        searchKey: '',
        searchType: '',
        searchStatus: '',
        oprType: '',
        dialogLoading: false,
        dialogVisible: false,
        visibleConfim: false,
        dialogAd: false,
        dialogDetail: false,
        drawerForm: false,
        drawerManage: false,
        drawerUpload: false,
        drawerDetail: false,
        btnLoading: false,
        footerHidden: true,
        yearOptions: [],
        bathOptions: [],
        subjectOptions: [],
        teacherArray: [],
        approverUsers: [],
        refreshTeacherStatus: false,
        uploadProcess: '',
        uploadResult: [],
        uploadFile: common.enroll_student_template_download,
        uploadAction: common.enroll_student_import,
        loopTimer: null,
        resultList: [],
        displayField: [],
        fliterPCs: [],
        searchStudentPC: '',
        searchTimeData: [],
        tableAllColData: [{
          "name": this.$t("手机号")
        },{
          "name": this.$t("父亲姓名")
        },{
          "name": this.$t("微信号")
        },{
          "name": this.$t("邮政编码")
        },{
          "name": this.$t("详细地址")
        },{
          "name": this.$t("QQ")
        },{
          "name": this.$t("邮箱")
        },{
          "name": this.$t("母亲电话")
        },{
          "name": this.$t("科目")
        },{
          "name": this.$t("父亲电话")
        },{
          "name": this.$t("母亲姓名")
        },{
          "name": this.$t("录取批次")
        },{
          "name": this.$t("高考成绩")
        },{
          "name": this.$t("学历")
        },{
          "name": this.$t("毕业学校")
        },{
          "name": this.$t("录取省份")
        },{
          "name": this.$t("学制")
        },{
          "name": this.$t("其他信息")
        },{
          "name": this.$t("毕业类型")
        },{
          "name": this.$t("政治面貌")
        },{
          "name": this.$t("退役士兵")
        },{
          "name": this.$t("困难类型")
        },{
          "name": this.$t("身份证")
        },{
          "name": this.$t("班主任姓名")
        },{
          "name": this.$t("班主任电话")
        }],
        form: {
          id: '',
          user_id: '',
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
          email: '',
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
          adProvince: [],
          adCity: '',
          graduationSchool: '',
          examScore: '',
          otherMsg: '',
          facePhotos: [],
          graduation: '',
          politics: '',
          retire: '',
          hard: '',
          bzrName: '',
          bzrPhone: '',
          postalCode: ''
        }
      }
    },
    created() {
      this.init();
      this.initCollegeAndDorm();
      this.getYearInfo();
      this.initBatchList();
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
        let params = {
          page: this.page,
          num: this.num,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          enrollBatch: this.searchStudentPC,
          beginTime: (this.searchTimeData && this.searchTimeData.length > 0) ? this.$moment(this.searchTimeData[0]).format("YYYY-MM-DD") : '',
          endTime: (this.searchTimeData && this.searchTimeData.length > 0) ? this.$moment(this.searchTimeData[1]).format("YYYY-MM-DD") : '',

      };
        let contentArr = [];
        let contentValArr = [];
        params[this.searchKey['select']] = this.searchKey['input'];
        this.$axios.get(common.enroll_student_page, {params: params}).then(res => {
          if (res.data.data){
            let valuesArr = [];
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['values'] = [
                {label: i+'', value: i}
              ];
            }
            this.tableData = res.data.data.list;
            //this.tableColData = valuesArr;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initBatchList(){
        let params = {};
        this.tableStudentLoading = true;
        this.$axios.get(common.enroll_batch_list, {params: params, loading: false}).then(res => {
          if (res.data.data){
            let arr = [];
            for (let i = 0; i < res.data.data.length; i++){
              arr.push({
                label: res.data.data[i].enroll_batch,
                value: res.data.data[i].enroll_batch,
                text: res.data.data[i].enroll_batch
              });
            }
            this.fliterPCs = arr;
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
      search(data){
        this.searchKey = data;
        this.page = 1;
        this.init(data);
      },
      handleSearchChange(event, type){
        if (type == 1){
          this.searchStudentPC = event;
        }
      },
      initCollegeAndDorm(){
        let arr = [];
        this.$axios.get(common.housework_query_check_college).then(res => {
          if (res.data.data){
            arr.push({
              label: this.$t("全校"),
              value: '-1',
              type: 3
            });
            for (let i = 0; i < res.data.data.length; i++ ){
              arr.push({
                label: res.data.data[i].name,
                value: res.data.data[i].id + "-" + res.data.data[i].college_no + "-" + "1",
                type: 2
              });
            }

            this.$axios.get(common.housework_query_check_dorm, {params: {type: 1}}).then(res => {
              if (res.data.data){
                for (let i = 0; i < res.data.data.length; i++ ){
                  arr.push({
                    label: res.data.data[i].buildingName,
                    value: res.data.data[i].id + "-" + res.data.data[i].buildingNo + "-" + "2",
                    type: 1
                  });
                }
                this.tableCBData = arr;
              }
            });
          }
        });
      },
      addInfo(){
        this.oprType = 'add';
        this.footerHidden = true;
        this.drawerForm = true;
      },
      importInfo(){
        this.drawerUpload = true;
      },
      exportInfo(){
        let url = "";
        let params = {
          page: 1,
          num: 864000
        };
        params = this.$qs.stringify(params);
        url = common.enroll_student_export;
        window.open(url+"?"+params, "_self");
      },
      manageInfo(){
        let teacherArray = [];
        this.$axios.get(common.enroll_admin_get).then(res => {
          if (res.data.data && res.data.data.teacherId.length > 0){
            for (let i = 0; i < res.data.data.teacherId.length; i++){
              teacherArray.push({
                user_id: res.data.data.teacherId[i]
              });
            }
            this.teacherArray = teacherArray;
            this.approverUsers = teacherArray;
          }

          this.tableSelColData = res.data.data.displayField;
        });

        this.drawerManage = true;
      },
      async editInfo(item){
        this.oprType = 'edit';
        let params = {
          userId: item.user_id
        };
        await this.$axios.get(common.enroll_student_detail, {params: params}).then(res => {
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
              //college: [item.college_id, item.major_id],
              major: '',
              //class: [item.college_id, item.major_id, item.grade, item.clasz],
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
              facePhotos: photos,
              graduation: res.data.data.graduation_type,
              politics: res.data.data.political_type,
              retire: res.data.data.soldier,
              hard: res.data.data.difficulty_type,
              bzrName: res.data.data.master_name,
              bzrPhone: res.data.data.master_phone,
              postalCode: res.data.data.postal_code,
            };
          }
        });
        if (!item.clasz){
          this.$set(this.form, 'college', [item.college_id, item.major_id]);
        }
        if (item.clasz){
          this.$set(this.form, 'college', [item.college_id, item.major_id, item.clasz]);
        }
        this.footerHidden = true;
        this.drawerForm = true;
      },
      async detailInfo(item){
        this.oprType = 'detail';
        let params = {
          userId: item.user_id
        };
        await this.$axios.get(common.enroll_student_detail, {params: params}).then(res => {
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
              college: [item.college_id, item.major_id, item.grade, item.clasz],
              major: '',
              class: [item.college_id, item.major_id, item.grade, item.clasz],
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
              postalCode: res.data.data.postal_code,
            };
          }
        });
        this.$set(this.form, 'class', [item.college_id, item.major_id, item.grade, item.clasz]);
        if (!item.clasz){
          this.$set(this.form, 'college', [item.college_id, item.major_id]);
        }
        if (item.clasz){
          this.$set(this.form, 'college', [item.college_id, item.major_id, item.grade, item.clasz]);
        }
        this.footerHidden = false;
        this.drawerForm = true;
      },
      deleteInfo(item){
        this.form.id = item.id;
        this.form.user_id = item.user_id;
        this.visibleConfim = true;
      },
      closeDialog(event){
        this.form = {
          id: '',
          user_id: '',
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
          email: '',
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
          adProvince: [],
          adCity: '',
          graduationSchool: '',
          examScore: '',
          otherMsg: '',
          facePhotos: [],
          bzrName: '',
          bzrPhone: '',
          postalCode: '',
        };
        this.subTitle = "";
        this.versionStatus = '';
        this.resetCasadeSelector('SelectorCollege');
        this.resetCasadeSelector('selectorDept');
        this.resetCasadeSelector('selectorProvince');
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        this.uploadProcess = '';
        this.uploadResult = [];
        clearTimeout(this.loopTimer);
        this.loopTimer = null;
        this.teacherArray = [];
        this.approverUsers = [];
        this.dialogLoading = false;
        this.btnLoading = false;
        this.drawerForm = false;
        this.drawerManage = false;
        this.drawerUpload = false;
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
      handleSelectChange(event, type){
        if (type == 1){
          this.form.year = event;
        }else if (type == 2){
          this.form.sex = event;
        }else if (type == 3){
          this.form.nationality = event;
        }else if (type == 4){
          this.form.nation = event;
        }else if (type == 5){
          this.form.education = event;
        }else if (type == 6){
          this.form.college = event;
        }else if (type == 7){
          this.form.adBath = event;
        }else if (type == 8){
          this.form.subjectOptions = event;
        }else if (type == 9){
          this.form.adProvince = event;
        }else if (type == 10){
          this.form.adCity = event;
        }else if (type == 11){
          this.form.graduation = event;
        }else if (type == 12){
          this.form.politics = event;
        }else if (type == 13){
          this.form.retire = event;
        }else if (type == 14){
          this.form.hard = event;
        }
      },
      handleChangeTime(event, type){
        if (type == 1){
          this.form.birthday = event;
        }else if(type == 2){
          this.searchTimeData = event ? event : [];
        }
      },
      handleCascaderChange(data, type){
        switch (type) {
          case 1:
            this.form.college = data;
            break;
          case 2:
            this.form.class = data;
            break;
        }
      },
      handleShowTeacher(type){
        setTimeout(()=>{
          if (type == 1){
            this.$refs.popverTeacherRef._handleOpen();
          }
        },800);
      },
      loadingShow(type){
        let timer = null;
        clearTimeout(timer);
        switch (type) {
          case 1:
            this.refreshTeacherStatus = true;
            timer = setTimeout(() => {
              this.refreshTeacherStatus = false;
              clearTimeout(timer);
            },1000);
            break;
        }
      },
      handleSelUser(data, type){
        if (type == 1){
          this.teacherArray = data;
        }
        this.approverUsers = this.teacherArray;
      },
      cancelFormDrawDialog(){
        this.closeDialog();
        this.drawerForm = false;
      },
      cancelManageDrawDialog(){
        this.closeDialog();
        this.drawerManage = false;
      },
      okFormDrawDialog(event){
        let url = "";
        this.$refs['form'].validate((valid) => {
          if (valid) {
            // if (this.form.college.length == 3){
            //   MessageWarning("请选择到班级");
            //   return;
            // }
            let params = {
              enrollId: this.form.year,
              realName: this.form.name,
              enrollNo: this.form.adNo,
              schoolCarNo: this.form.oneCardNo,
              studentId: this.form.stuNo,
              examNo: this.form.examNo,
              sex: this.form.sex,
              certificateNum: this.form.idCardNo,
              birthday: this.form.birthday,
              nationality: this.form.nationality,
              nation: this.form.nation,
              phone: this.form.phone,
              email: this.form.email,
              qq: this.form.qq,
              wechat: this.form.wechat,
              fatherPhone: this.form.fatherPhone,
              fatherName: this.form.fatherName,
              matherPhone: this.form.motherPhone,
              matherName: this.form.motherName,
              nativePlace: this.form.address,
              eduLevel: this.form.education,
              collegeId: this.form.college[0],
              majorId: this.form.college[1],
              clasz: this.form.college.length == 3 ? this.form.college[2] : '',
              eduYear: this.form.eduSystem,
              enrollTeacher: this.form.recruitingTeacher,
              enrollBatch: this.form.adBath,
              enrollType: this.form.subject,
              enrollProvince: this.form.adProvince.length > 0 ? this.form.adProvince[0] : '',
              enrollCity: this.form.adProvince.length > 0 ? this.form.adProvince[1] : '',
              highSchool: this.form.graduationSchool,
              gaokaoScore: this.form.examScore,
              des: this.form.otherMsg,
              graduationType: this.form.graduation,
              politicalType: this.form.politics,
              soldier: this.form.retire,
              difficultyType: this.form.hard,
              masterName: this.form.bzrName,
              masterPhone: this.form.bzrPhone,
              postalCode: this.form.postalCode,
            };

            url = common.enroll_student_save;
            if (this.form.id != ""){
              params['userId'] = this.form.user_id;
              params['id'] = this.form.id;
            }

            url = common.enroll_student_save;
            params = this.$qs.stringify(params);
            this.btnLoading = true;
            this.$axios.post(url, params, {loading: false}).then(res => {
              if (res.data.code == 200){
                this.drawerForm = false;
                this.init();
                this.closeDialog();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.btnLoading = false;
            });
          }
        });
      },
      okManageDrawDialog(event){
        let array = [];
        for (let i = 0; i < this.teacherArray.length; i++){
          array.push(this.teacherArray[i].user_id);
        }
        console.log(this.tableSelColData);
        let params = {
          teacherId: array.join(),
          displayField: this.tableSelColData.join()
        };

        let url = common.enroll_admin_setting;
        params = this.$qs.stringify(params);
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
      },
      uploadSuccess(res, file){
        //this.uploadProcess = res.desc;

        if (res.code == 200){
          this.uploadProcess = res.desc;
          this.uploadResult = [res.desc];
          this.loopUploadResult(res.data);
        }else {
          this.uploadProcess = res.desc;
          this.resultList = [];
        }
      },
      uploadError(res, file){
        this.uploadProcess = res.data.data;
      },
      loopUploadResult(uuid){
        this.getUploadResult(uuid);
      },
      getUploadResult(uuid) {
        let _self = this;
        let num = 0;
        clearTimeout(this.loopTimer);
        let params = {
          taskId: uuid
        };
        this.$axios.get(common.enroll_student_import_result, {params: params}).then(res => {
          let result = "";
          if (res.data.code == 200) {
            let arrResult = [];
            if (res.data.data && res.data.data.length > 0) {
              arrResult = res.data.data;
              if (arrResult[res.data.data.length - 1] == '导入结束'){
                num++;
              }
              if (num > 0){
                this.uploadResult = arrResult;
                clearTimeout(this.loopTimer);
                this.loopTimer = null;
                this.uploadProcess = this.$t("导入操作已完成，请查看上传结果！");
              }else {
                this.uploadResult = arrResult;
                this.loopTimer = setTimeout(function () {
                  _self.getUploadResult(uuid);
                }, 10000);
              }
            } else {
              this.uploadResult = [this.$t("上传停止！")];
              clearTimeout(this.loopTimer);
            }
          }
        });
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          userId: this.form.user_id
        }
        url = common.enroll_student_del;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params, {loading: false}).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.visibleConfim = false;
          this.dialogLoading = false;
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
.tab-class{
  cursor: default;
  padding: 10px;
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
.block-item-bg{
  border-radius: 5px;
  background: #FFFFFF;
  padding: 10px;
}
</style>
