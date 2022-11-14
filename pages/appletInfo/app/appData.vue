<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">数据中心</span>
        </div>
        <my-el-tree v-if="mainMenu == '1'" type="4" @node-click="nodeAppClick" @all-click="nodeAppClick"></my-el-tree>
        <my-el-tree ref="appRef" v-if="mainMenu == '2'" type="110" :extra-type="appName" :currentNodeKey="currentNodeKey" :default-expanded-keys="defaultExpandedKeys" :show-campus="false" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab" v-if="mainMenu == 1">
          <el-row>
            <el-col :span="24">
              <div class="text-right layout-inline">
                <div class="layout-inline">
                  <my-select class="layout-item width-150" size="small" :placeholder="$t('类型')" :sel-value="searchType" :options="filterAppManageType" :clearable="true" @change="handleTypeChange($event, 1)"></my-select>
                  <my-select class="layout-item width-150" size="small" :placeholder="$t('状态')" :sel-value="searchStatus" :options="filterAppManageStatus" :clearable="true" @change="handleTypeChange($event, 2)"></my-select>
                  <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('名称/编号')" @click="search"></my-input-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="layout-top-tab margin-top-5" v-else>
          <el-row>
            <el-col :span="4">
              <div class="layout-inline">
                <el-button size="small" type="text" @click="returnMain($event)">
                  <i class="fa fa-arrow-left"></i>
                  {{$t("返回")}}
                </el-button>
                <el-button size="small" type="warning"  icon="el-icon-download" @click="expandInfo($event)">{{$t("导出")}}</el-button>
              </div>
            </el-col>
            <el-col :span="20" class="text-right">
              <div class="layout-inline">
                <my-cascader v-if="searchDetailType == 1" :props="{ checkStrictly: true }" class="layout-item" ref="SelectorDeptSearch" size="small" width-style="160" :clearable="true" :sel-value="searchDetailData" type="4" sub-type="" @change="handleCascaderChange($event, 1)"></my-cascader>
                <my-cascader v-if="searchDetailType == 0" :props="{ checkStrictly: true }" class="layout-item" ref="SelectorDeptSearch" size="small" width-style="160" :clearable="true" :sel-value="searchDetailData" type="1" sub-type="4" @change="handleCascaderChange($event, 0)"></my-cascader>
                <el-date-picker
                  size="small"
                  unlink-panels
                  v-model="searchTimeData"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  @change="handleChangeTime($event)"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  style="width: 220px">
                </el-date-picker>
                <my-select class="layout-item width-100" size="small" :placeholder="$t('状态')" :sel-value="searchStatus" :options="filterDetailStatus" :clearable="true" @change="handleTypeChange($event, 3)"></my-select>
                <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('编号/关键字')" class="layout-item" @click="searchDetail"></my-input-button>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="margin-top-10">
          <div v-if="mainMenu == 1" class="bg-white border-bottom-1 padding-lr-5 padding-tb-5" :style="divHeight">
            <div v-if="tableData.length <= 0">
              <div class="text-center padding-tb-10">
                <span class="color-disabeld">{{$t("暂无数据")}}</span>
              </div>
            </div>
            <el-row v-else :gutter="16">
              <el-col :span="6" v-for="(item, index) in tableData" :key="index" class="margin-bottom-20">
                <el-card :body-style="{padding: '10px 10px', height: '110px'}" style="position: relative" @click.native="detailAppInfo(item)">
                  <div class="color-muted">
                    <el-row class="color-warning">
                      <el-col :span="18">
                        <i class="fa fa-id-card"></i>
                        <span>{{item.applet_num}}</span>
                      </el-col>
                      <el-col :span="6">
                        <div class="text-right">
                          <label v-if="item.enable" class="color-success">{{$t("已发布")}}</label>
                          <label v-if="!item.enable" class="color-warning">{{$t("待发布")}}</label>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="color-muted margin-top-10">
                    <el-row>
                      <el-col :span="8">
                        <div>
                          <i class="el-icon-notebook-2 color-grand" style="font-size: 50px"></i>
                        </div>
                        <div class="color-success font-size-12 text-left margin-top-5">
                          <span>{{ serverTypeInfo(item.applet_type, 'set') }}</span>
                        </div>
                      </el-col>
                      <el-col :span="16">
                        <div class="text-right" style="position: relative">
                          <div class="moon-content-text-ellipsis-class color-grand margin-top-5" style="cursor:default;">
                            <span>
                              {{item.applet_name}}
                            </span>
                          </div>
                          <div class="moon-content-text-ellipsis-class font-size-12 margin-top-5">
                            {{$moment(item.create_time).format("YYYY-MM-DD HH:mm:ss")}}
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <el-table
            v-else
            ref="refTable"
            :data="tableDetailData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :max-height="tableHeight2.height"
            style="width: 100%">
            <el-table-column
              align="center"
              :label="$t('服务')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.formName }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.formName }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('申请日期')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ $moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm:ss") }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ $moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm:ss") }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('编号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.formApplyNo ? scope.row.formApplyNo : '--' }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.formApplyNo ? scope.row.formApplyNo : '--' }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('姓名')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.applyUserName }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.applyUserName }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('学号/工号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{ scope.row.userNo }}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{ scope.row.userNo }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班级/部门')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label v-if="scope.row.userType == 4">{{scope.row.departmentName}}</label>
                    <label v-else>{{scope.row.className}}</label>
                  </div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label v-if="scope.row.userType == 4">{{scope.row.departmentName}}</label>
                    <label v-else>{{scope.row.className}}</label>
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('状态')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label v-if="scope.row.status === -1" class="color-warning">{{$t("撤销")}}</label>
                    <label v-if="scope.row.status === 0" class="color-warning">{{$t("待审核")}}</label>
                    <label v-if="scope.row.status === 3" class="color-success">{{$t("通过")}}</label>
                    <label v-if="scope.row.status === 4" class="color-danger">{{$t("未通过")}}</label>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label v-if="scope.row.status === -1" class="color-warning">{{$t("撤销")}}</label>
                    <label v-if="scope.row.status === 0" class="color-warning">{{$t("待审核")}}</label>
                    <label v-if="scope.row.status === 3" class="color-success">{{$t("通过")}}</label>
                    <label v-if="scope.row.status === 4" class="color-danger">{{$t("未通过")}}</label>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              v-for="(item, index) in tableDataTitles"
              :key="index"
              align="center"
              width="100"
              :label="item">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <label v-if="scope.row[item]" class="moon-content-text-ellipsis-class" style="max-width: 200px !important;display: inline-block">{{scope.row[item]}}</label>
                    <label v-else>--</label>
                  </div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <label v-if="scope.row[item]" class="moon-content-text-ellipsis-class" style="max-width: 90px !important;display: inline-block">{{scope.row[item]}}</label>
                    <label v-else>--</label>
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              width="100"
              fixed="right"
              :label="$t('操作')">
              <template slot-scope="scope">
                <i class="fa fa-file-text margin-right-5 color-grand" @click="detailInfo(scope.row)"></i>
                <i class="fa fa-trash margin-right-5 color-danger" @click="deleteInfo(scope.row)"></i>
                <i class="fa fa-print color-warning" @click="printManage(scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="layout-right-footer text-right">
          <my-pagination :total="mainMenu == 1 ? total : totalDetail" :current-page="mainMenu == 1 ? page : pageDetail" :page-size="mainMenu == 1 ? num : numDetail" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <drawer-layout-right tabindex="0" :hide-footer="(detailData.status == -1 || detailData.status == 3) ? false : true" @changeDrawer="closeDrawerDialog" :visible="dialogServerDetail" size="600px" :title="$t('详情')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <div class="detail-block-title padding-lr-10 padding-tb-10 font-size-12">
          <el-row>
            <el-col :span="12">
              <span>{{$t("申请人")}}:</span>
              <span>{{ detailData.applyUserName }}</span>
            </el-col>
            <el-col :span="12">
              <span>{{$t("学号/工号")}}:</span>
              <span>{{ detailData.userNo }}</span>
            </el-col>
          </el-row>
          <el-row class="margin-top-5">
            <el-col :span="12">
              <span>{{$t("服务名称")}}:</span>
              <span>{{ detailData.formName }}</span>
            </el-col>
            <el-col :span="12">
              <span>{{$t("班级/部门")}}:</span>
              <span>
                <label v-if="detailData.userType == 5">{{ detailData.className }}</label>
                <label v-if="detailData.userType == 4">{{ detailData.departmentName }}</label>
              </span>
            </el-col>
          </el-row>
          <el-row class="margin-top-5">
            <el-col :span="12">
              <span>{{$t("申请日期")}}:</span>
              <span>{{ $moment(detailData.applyTime).format("YYYY-MM-DD HH:mm") }}</span>
            </el-col>
          </el-row>
        </div>
        <div class="margin-top-10">
          <div class="color-muted margin-top-5 font-size-12 border-bottom-1">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("申请内容")}}</label>
              </span>
          </div>
          <div class="block-item-bg font-size-12 margin-top-10 color-sub-title">
<!--            <div class="block-item-row padding-lr-10 font-bold" v-for="(item, index) in detailApplyContentData">-->
<!--              <span class="color-muted" style="position: relative;top: -13px">{{item.title}}: </span>-->
<!--              <el-tooltip class="item" effect="dark" :content="item.value" placement="top">-->
<!--                  <span class="moon-content-text-ellipsis-class" style="max-width: 400px;display: inline-block">-->
<!--                    {{ item.value }}-->
<!--                  </span>-->
<!--              </el-tooltip>-->
<!--            </div>-->
<!--            <template v-for="(item, index) in detailApplyContentData">-->
<!--              <div v-if="item.type != 'fc-editor' && item.type != 'upload'" class="block-item-row padding-lr-10 font-bold">-->
<!--                <span class="color-muted" style="position: relative;top: -13px">{{item.title}}: </span>-->
<!--                <el-tooltip class="item" effect="dark" :content="item.value" placement="top">-->
<!--                    <span class="moon-content-text-ellipsis-class" style="max-width: 400px;display: inline-block">-->
<!--                      {{ item.value }}-->
<!--                    </span>-->
<!--                </el-tooltip>-->
<!--              </div>-->
<!--              <div v-else-if="item.type != 'fc-editor' && item.type == 'upload'" class="padding-lr-10 font-bold">-->
<!--                <span v-if="!item.value || item.value.length <= 0" class="color-muted" style="position: relative;top: 10px">{{item.title}}: </span>-->
<!--                <span v-else class="color-muted" style="position: relative;top: -13px">{{item.title}}: </span>-->
<!--                <span v-if="!item.value || item.value.length <= 0">-->
<!--                    <div style="height: 20px;line-height: 20px"></div>-->
<!--                  </span>-->
<!--                <span v-else class="custom-avatar" style="display: inline-block;margin-right: 5px;" v-for="(itemImg, indexImg) in item.value" :key="indexImg">-->
<!--&lt;!&ndash;                    <el-avatar shape="square" size="small" :src="itemImg"></el-avatar>&ndash;&gt;-->
<!--                  <el-image style="width: 30px; height: 30px"-->
<!--                    :src="itemImg"-->
<!--                    :preview-src-list="item.value">-->
<!--                  </el-image>-->
<!--                </span>-->
<!--              </div>-->
<!--              <div v-else class="padding-lr-10">-->
<!--                <span class="color-muted font-bold" style="position: relative;top: -150px">{{item.title}}: </span>-->
<!--                <div v-if="item.type == 'fc-editor'"  v-html="item.value" style="max-width: 400px;height: 150px;overflow-y:auto;display: inline-block;border: 1px solid #dddddd;border-radius: 5px;width: 100%;padding: 10px">-->
<!--                </div>-->
<!--              </div>-->
<!--            </template>-->
            <table class="custom-table">
              <tr v-for="(item, index) in detailApplyContentData" :key="index">
                <template  v-if="item.type != 'fc-editor' && item.type != 'upload'">
                  <td style="width: 20%;text-align: right;padding-right: 15px">
                    <span class="color-muted moon-content-text-ellipsis-class">
                      <label class="font-size-12">{{item.title}}</label>
                    </span>
                  </td>
                  <td style="text-align: left;padding-left: 15px">
                    <el-tooltip class="item" effect="dark" :content="item.value" placement="top">
                    <span class="moon-content-text-ellipsis-class">
                      <label class="font-size-12">{{ item.value }}</label>
                    </span>
                    </el-tooltip>
                  </td>
                </template>

                <template v-else-if="item.type != 'fc-editor' && item.type == 'upload'">
                  <td style="width: 20%;text-align: right;padding-right: 15px">
                    <span v-if="!item.value || item.value.length <= 0" class="color-muted moon-content-text-ellipsis-class">
                      {{item.title}}
                    </span>
                    <span v-else class="color-muted" style="position: relative;">{{item.title}}: </span>
                  </td>
                  <td style="text-align: left;padding-left: 15px">
                    <span v-if="!item.value || item.value.length <= 0">
                      <div style="height: 20px;line-height: 20px"></div>
                    </span>
                    <span v-else class="custom-avatar" style="display: inline-block;margin-right: 5px;position: relative; top: 5px" v-for="(itemImg, indexImg) in item.value" :key="indexImg">
<!--                      <el-avatar shape="square" size="small" :src="itemImg" fit="fill"></el-avatar>-->
                      <el-image
                        style="width: 30px; height: 30px"
                        :src="itemImg"
                        :preview-src-list="item.value">
                      </el-image>
                    </span>
                  </td>
                </template>

                <template v-else>
                  <td style="width: 20%;text-align: right;padding-right: 15px">
                    <span class="color-muted font-bold moon-content-text-ellipsis-class" style="position: relative;top: -50px;">{{item.title}}: </span>
                  </td>
                  <td style="text-align: left;padding-left: 15px">
                    <div v-if="item.type == 'fc-editor'"  v-html="item.value" style="width: 90%;height: 150px;overflow-y:auto;display: inline-block;border: 1px solid #dddddd;border-radius: 5px;padding: 0px 10px">
                    </div>
                  </td>
                </template>
              </tr>
            </table>
          </div>
        </div>
        <div class="margin-top-10" v-if="detailData.formType != 0">
          <div class="color-muted margin-top-5 font-size-12 border-bottom-1">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("审批进度")}}</label>
              </span>
          </div>
          <div class="block-item-bg font-size-12 margin-top-10 color-sub-title">
            <el-steps direction="vertical" space="60px">
              <el-step v-for="(item, index) in detailApplyAuditList" :key="index">
                <div slot="icon">
                  <i class="fa fa-flag" style="font-size: 12px"></i>
                </div>
                <div slot="title" class="font-size-12">
                  <span v-if="item.nodeType == 'handle'" class="color-success">
                    {{ $t("审批") }}
                    <label v-if="item.andor == 'and'"> ({{ $t("与签") }}) </label>
                    <label v-if="item.andor == 'or'"> ({{ $t("或签") }}) </label>
                  </span>
                  <span v-if="item.nodeType == 'cc'" class="color-warning">{{ $t("抄送") }}</span>
                </div>
                <div slot="description" class="font-size-12 color-sub-title">
                  <div>
                    <template v-if="item.nodeType == 'handle'">
                      <div v-for="(itemUser, indexUser) in item.handleUserList" :key="indexUser">
                        <span class="color-grand"> <i class="fa fa-user"></i> {{ itemUser.userName }} </span>
                        <span class="margin-left-10">
                          <label v-if="itemUser.status === -1" class="color-warning">{{$t("撤销")}}</label>
                          <label v-if="itemUser.status === 0" class="color-warning">{{$t("待审核")}}</label>
                          <label v-if="itemUser.status === 3" class="color-success">{{$t("通过")}}</label>
                          <label v-if="itemUser.status === 4" class="color-danger">{{$t("未通过")}}</label>
                          <label v-if="itemUser.status === 1" class="color-warning">{{$t("已通过")}}</label>
                          <label v-if="itemUser.status === 2" class="color-warning">
                            {{$t("已驳回")}}
                            <el-tooltip v-if="itemUser.des" class="item" effect="dark" :content="itemUser.des" placement="top">
                              <i class="fa fa-warning color-warning"></i>
                            </el-tooltip>
                            <span v-if="itemUser.url && itemUser.url.length > 0">
                              <el-image v-for="(itemImg, indexImg) in itemUser.url" :key="indexImg" :src="itemImg" style="width: 20px; height: 20px;position: relative; top: 5px"
                                        :preview-src-list="[itemImg]">
                              </el-image>
                            </span>
                          </label>
                          <label v-if="itemUser.status === 5" class="color-warning">{{$t("无需审批")}}</label>
                          <label v-if="itemUser.status === 8" class="color-warning">{{$t("审批中")}}</label>
                        </span>
                        <span class="margin-left-10" v-if="itemUser.handleTime">
                          <label class="color-muted">{{$moment(itemUser.handleTime).format("YYYY-MM-DD HH:mm:ss")}}</label>
                        </span>
                      </div>
                    </template>
                    <template v-if="item.nodeType == 'cc'">
                      <el-tag size="mini" v-for="(itemUser, indexUser) in item.handleUserNameList" :key="indexUser" v-if="indexUser <= 5">
                        <div class="moon-content-text-ellipsis-class" style="width: 50px">
                          <el-tooltip class="item" effect="dark" :content="itemUser" placement="top-start">
                            <span>{{ itemUser }}</span>
                          </el-tooltip>
                        </div>
                      </el-tag>

                      <el-popover
                        placement="left"
                        width="200"
                        trigger="hover"
                        v-if="item.handleUserNameList.length > 5">
                        <div style="height: 100px;overflow-y: auto">
                          <div v-for="(itemUser, indexUser) in item.handleUserNameList" :key="indexUser">
                            <div class="font-size-12 padding-tb-5">
                              <span>{{itemUser}}</span>
                            </div>
                          </div>
                        </div>
                        <el-tag slot="reference" size="mini" type="success">
                          <div class="moon-content-text-ellipsis-class padding-lr-5">
                            <i class="fa fa-user"></i>
                            <label class="margin-left-5">{{item.handleUserNameList.length}}</label>
                          </div>
                        </el-tag>
                      </el-popover>
                    </template>
                  </div>
                </div>
              </el-step>
            </el-steps>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div v-if="detailData.status === -1" class="color-white text-center bg-warning">{{$t("撤销")}}</div>
        <div v-if="detailData.status === 3" class="color-white text-center bg-success">{{$t("已通过")}}</div>
      </div>
    </drawer-layout-right>

    <drawer-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" accept=".png,.jpg,.jpeg" :data="{all: true}" :loading="drawerLoading" :hide-footer="true" size="400px" :title="$t('导入数据')" :action="uploadAction" :download-file="uploadFile" :result="uploadResult" :process="uploadProcess" @right-close="cancelDrawDialog" @success="uploadSuccess" @error="uploadError"></drawer-right>
    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {MessageError, MessageSuccess} from "~/utils/utils";
  import MyElTree from "~/components/tree/MyElTree";
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";
  import MyInputButton from "~/components/search/MyInputButton";

  export default {
    components: {MyInputButton, DrawerLayoutRight, MyElTree},
    mixins: [mixins],
    data(){
      return {
        appName: '',
        pageDetail: 1,
        numDetail: 20,
        totalDetail: 0,
        tableData: [],
        tableDetailData: [],
        tableDataTitles: [],
        collegeList: [],
        categorys: [],
        applyContentArr: [],
        defaultExpandedKeys: [],
        currentNodeKey: '',
        types: [],
        subTitle: '',
        collegeData: '',
        searchKey: '',
        searchDetailKey: '',
        searchType: '',
        searchStatus: '',
        searchAuditStatus: '',
        beginTime: '',
        endTime: '',
        departmentPath: '',
        college: '',
        queryApplyListType: 0,
        searchDetailType: '',
        searchDetailCollege: '',
        searchDetailDept: '',
        searchTimeData: [],
        formId: '',
        listId: '',
        appletId: '',
        uploadFile: common.doomroom_import_file + "?fileName=" + encodeURIComponent(this.$t("模板.xlsx")),
        uploadAction: common.doomroom_import,
        uploadResult: {},
        detailData: '',
        uploadProcess: '',
        detailApplyContentData: [],
        detailApplyAuditList: [],
        dialogLoading: false,
        dialogApp: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        dialogServer: false,
        dialogServerDetail: false,
        mainMenuType: 1,
        subMenuType: 4,
        mainMenu: 1,
        searchDetailData: []
      }
    },
    created() {
      this.initApp();
    },
    methods: {
      init(){
        let params = {
          page: this.pageDetail,
          num: this.numDetail,
          queryApplyListType: this.queryApplyListType,
          formId: this.formId,
          appletId: this.appletId,
          status: this.searchAuditStatus,
          searchKey: this.searchDetailKey,
          beginTime: this.beginTime,
          endTime: this.endTime,
        };
        if (this.searchDetailType == 1){
          params['departmentPath'] = this.departmentPath;
        }else if (this.searchDetailType == 0){
          params['collegeId'] = this.collegeData[0];
          params['majorId'] = this.collegeData[1];
          //params['grade'] = this.collegeData[2];
          params['classId'] = this.collegeData[3];
        }
        let applyContentArr = [];
        let applyContent = [];
        this.$axios.get(common.server_form_template_form_apply_page, {params: params}).then(res => {
          if (res.data.data){
            if (res.data.data.list && res.data.data.list.length > 0 && res.data.data.list[0].applyContent){
              applyContentArr = JSON.parse(res.data.data.list[0].applyContent);
            }

            for (let i = 0; i < res.data.data.list.length; i++){
              if (res.data.data.list[i].applyContent){
                let applyContent = JSON.parse(res.data.data.list[i].applyContent);
                res.data.data.list[i]['applyContentObj'] = JSON.parse(res.data.data.list[i].applyContent);
              }
            }

            this.applyContentArr = applyContentArr;
            this.tableDataTitles = res.data.data.title;
            this.tableDetailData = res.data.data.list;
            this.totalDetail = res.data.data.total;
            this.numDetail = res.data.data.num;
            this.pageDetail = res.data.data.page;
          }
        });
      },
      initApp(){
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
      initAuditDetailList(id){
        let params = {
          id: id
        };
        this.$axios.get(common.server_form_audit_query, {params: params}).then(res=>{
          if (res.data.code == 200){
            if (res.data.data){
              this.detailApplyAuditList = res.data.data.handleList;
            }
          }
        });
      },
      sizeChange(event){
        if (this.mainMenu == 1){
          this.page = 1;
          this.num = event;
          this.initApp();
        }else {
          this.pageDetail = 1;
          this.numDetail = event;
          this.init();
        }
      },
      currentPage(event){
        if (this.mainMenu == 1){
          this.page = event;
          this.initApp();
        }else {
          this.pageDetail = event;
          this.init();
        }
      },
      jumpPage(data){
        if (this.mainMenu == 1){
          this.pageDetail = data;
          this.initApp();
        }else {
          this.page = data;
          this.init();
        }
      },
      uploadData(){
        this.drawerVisible = true;
      },
      returnMain(){
        this.searchKey = "";
        this.collegeData = "";
        this.searchType = "";
        this.searchStatus = "";
        this.page = 1;
        this.mainMenu = 1;
        this.searchAuditStatus = '';
        this.beginTime = '';
        this.endTime = '';
        this.searchTimeData = [];
        this.searchDetailData = [];
        this.college = '';
        this.departmentPath = '';
        this.collegeData = [];
        this.initApp();
      },
      expandInfo(){
        let url = "";
        let params = {
          queryApplyListType: this.queryApplyListType,
          status: this.searchStatus
        };
        params['formId'] = this.formId;
        params['appletId'] = this.appletId;
        params = this.$qs.stringify(params);
        url = common.server_form_audit_export;
        window.open(url+"?"+params, "_self");
      },
      async detailAppInfo(item){
        this.mainMenu = 2;
        this.pageDetail = 1;
        this.appName = ''+item.id;
        this.appletId = item.id;
        this.formId = '';
        this.searchDetailType = item.applet_type;
        await this.getAppletServerInfo(this.appName);
        let data = this.dataAppletServer;
        if (data && data[0]['children']){
          this.formId = data[0]['children'][0].id;
          this.defaultExpandedKeys = [data[0].id, data[0]['children'][0].id];
          this.currentNodeKey = data[0]['children'][0].id;
        }

        this.init();
      },
      detailInfo(item){
        this.detailData = item;
        if (item.applyContent  && item.applyContent != "[]"){
          let ruleList = [];
          //this.detailApplyContentData = JSON.parse(item.applyContent);
          this.detailApplyContentData = this.setRuleChild(JSON.parse(item.applyContent), ruleList);
        }
        this.initAuditDetailList(item._id);
        this.dialogServerDetail = true;
      },
      deleteInfo(item){
        this.listId = item._id;
        this.visibleConfim = true;
      },
      printManage(item){
        window.open('/appletInfo/app/formPrint?serverId=' + item._id + "&title=" + item.formName + "&time=" + this.$moment().format("YYYY-MM-DD HH:mm:ss"), '_blank');
      },
      readFile(file){//预览
        ImagePreview({
          images: [file],
          closeable: false,
        });
      },
      closeDialog(event){
        this.listId = "";
        this.subTitle = "";
        this.detailData = '';
        this.detailApplyContentData = [];
        this.detailApplyAuditList = [];
      },
      closeDrawerDialog(event){
        this.drawerVisible = event;
        this.dialogServerDetail = event;
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
        this.dialogServerDetail = false;
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.listId
        }
        url = common.server_form_audit_delete;
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
      okDrawDialog(event){
        this.drawerLoading = true;
        setTimeouts(() => {
          this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          });
          this.drawerLoading = false;
          this.drawerVisible = false;
        },2000)
      },
      uploadSuccess(res, file){
        this.uploadProcess = res.desc;

        if (res.code == 200){
          this.uploadResult = res.data ? res.data : [res.desc];;
        }else {
          if (res.data){
            this.uploadResult = res.data;
          }else {
            this.uploadResult = [res.desc];
          }
        }
      },
      uploadError(res, file){
        this.uploadProcess = res.data.data;
      },
      nodeAppClick(data){
        this.collegeData = data.department_path;
        this.page = 1;
        this.initApp();
      },
      nodeClick(data){
        this.formId = "";
        this.page = 1;

        if (data.unit == 2){
          this.formId = data.id;
          this.init();
        }
        // if (data.unit != 1){
        //   this.init();
        // }
      },
      handleTypeChange(event, type){
        if (type == 1){
          this.searchType = event;
        }else if (type == 2){
          this.searchStatus = event;
        }else if (type == 3){
          this.searchAuditStatus = event;
        }
      },
      handleChangeTime(event){
        this.searchTimeData = event ? event : [];
        this.beginTime = event ? event[0] : '';
        this.endTime = event ? event[1] : '';
      },
      handleCascaderChange(data, type){
        if (type == 1){
          this.departmentPath = data[data.length-1];
        }else if (type == 0){
          this.collegeData = data;
        }
        this.searchDetailData = data;
        this.pageDetail = 1;
        this.init();
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.initApp(data);
      },
      searchDetail(data){
        this.searchDetailKey = data.input;
        this.pageDetail = 1;
        this.init();
      },
      setRuleChild(rule, ruleList){
        let obj = {};
        for (let i = 0; i < rule.length; i++){
          if (rule[i]['children'] && rule[i]['children'].length > 0){
            this.setRuleChild(rule[i]['children'], ruleList);
            continue;
          }else {
            if (rule[i].field){
              obj = {
                field: rule[i].field,
                title: rule[i].title,
                type: rule[i].type,
                value: rule[i].value
              }
              ruleList.push(obj);
            }
          }
        }
        return ruleList;
      }
    }
  }
</script>

<style scoped>
.block-item-row{
  height: 35px;
  line-height: 35px;
}
</style>
