<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">系统应用</span>
        </div>
        <my-el-tree v-if="mainMenu == '1'" type="4" @node-click="nodeAppClick" @all-click="nodeAppClick"></my-el-tree>
        <my-el-tree ref="appRef" v-if="mainMenu == '2'" type="130" :extra-type="appName" :currentNodeKey="currentNodeKey" :default-expanded-keys="defaultExpandedKeys" :show-campus="false" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab" v-if="mainMenu == 1">
          <el-row>
            <el-col :span="24">
              <div class="text-right layout-inline">
                <div class="layout-inline">
<!--                  <my-select class="layout-item width-150" size="small" :placeholder="$t('类型')" :sel-value="searchType" :options="filterAppManageType" :clearable="true" @change="handleTypeChange($event, 1)"></my-select>-->
<!--                  <my-select class="layout-item width-150" size="small" :placeholder="$t('状态')" :sel-value="searchStatus" :options="filterAppManageStatus" :clearable="true" @change="handleTypeChange($event, 2)"></my-select>-->
<!--                  <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('名称/编号')" @click="search"></my-input-button>-->
<!--                  <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("新增项目")}}</el-button>-->
                  <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('请输入信息')" @click="search"></my-input-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

        <div v-else>
          <div v-if="formName != '项目管理'" style="position: relative;">
            <el-card shadow="never" :body-style="{padding: '5px 10px',height: '45px',lineHeight:'45px'}">
              <system-data-top-bar :form-id="formName" :obj-data="appDetailObj" :extra-data="schoolAccountIdList" @handleChange="initJYLSCount"></system-data-top-bar>
            </el-card>
          </div>

          <div :class="formName != '项目管理' ? 'layout-right-tab margin-top-5' : 'layout-top-tab margin-top-5'">
            <el-row>
              <el-col :span="4">
                <div class="layout-inline">
                  <template v-if="formName == '项目管理'">
                    <el-button size="small" type="text" @click="returnMain($event)">
                      <i class="fa fa-arrow-left"></i>
                      {{$t("返回")}}
                    </el-button>
                    <el-button size="small" type="warning"  icon="el-icon-download" @click="addInfo($event, 1)">{{$t("新增项目")}}</el-button>
                  </template>
                  <template v-if="formName == '采购合同单' || formName == '销售合同单' || formName == '通用合同单'">
                    <el-button size="small" type="text" @click="returnMain($event)">
                      <i class="fa fa-arrow-left"></i>
                      {{$t("返回")}}
                    </el-button>
                    <el-button size="small" type="warning"  icon="el-icon-download" @click="addInfo($event, 2)">{{$t("新增合同")}}</el-button>
                  </template>
                  <template v-if="formName != '项目管理' && formName != '采购合同单' && formName != '销售合同单' && formName != '通用合同单'">
                    <el-button size="small" type="success" @click="returnMain($event)">
                      <i class="fa fa-arrow-left"></i>
                      {{$t("返回")}}
                    </el-button>
                  </template>
                </div>
              </el-col>
              <el-col :span="20" class="text-right">
                <div class="layout-inline">
                  <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('请输入信息')" class="layout-item" @click="searchDetail"></my-input-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>

        <div :class="formName == '项目管理' || mainMenu == 1 ? 'margin-top-10' : ''">
          <div v-if="mainMenu == 1" class="bg-white border-bottom-1 padding-lr-5 padding-tb-5" :style="divHeight">
            <div v-if="!tableData || tableData.length <= 0">
              <div class="text-center padding-tb-10">
                <span class="color-disabeld">{{$t("暂无数据")}}</span>
              </div>
            </div>
            <el-row v-else :gutter="16">
              <el-col :span="6" v-for="(item, index) in tableData" :key="index" class="margin-bottom-20">
                <el-card :body-style="{padding: '10px 10px', height: '90px'}" style="position: relative" @click.native="detailAppInfo(item)">
                  <div class="color-muted">
                    <el-row class="color-warning">
                      <el-col :span="24">
                        <div class="text-right">
                          <label class="color-success font-size-12">{{ serverTypeInfo(item.applet_type, 'set') }}</label>
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
                      </el-col>
                      <el-col :span="16">
                        <div class="text-right" style="position: relative">
                          <div class="moon-content-text-ellipsis-class color-grand margin-top-10" style="cursor:default;">
                            <span>
                              {{item.applet_name}}
                            </span>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <template v-else>
            <system-data-table1 v-if="formName == '项目管理'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight2.height" @editInfo="editInfo($event, 1)" @detailInfo="detailInfo($event, 1)"  @deleteInfo="deleteInfo($event, 1)" @printManage="printManage($event, 1)"></system-data-table1>
            <system-data-table2 v-if="formName == '采购合同单'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height" @editInfo="editInfo($event, 2)"  @deleteInfo="deleteInfo($event, 2)" @detailInfo="detailInfo($event, 2)"></system-data-table2>
            <system-data-table2 v-if="formName == '销售合同单'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height" @editInfo="editInfo($event, 3)"  @deleteInfo="deleteInfo($event, 3)" @detailInfo="detailInfo($event, 3)"></system-data-table2>
            <system-data-table2 v-if="formName == '通用合同单'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height" @editInfo="editInfo($event, 4)"  @deleteInfo="deleteInfo($event, 4)" @detailInfo="detailInfo($event, 4)"></system-data-table2>
            <system-data-table6 v-if="formName == '报账/报销单'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height" @detailInfo="detailInfo($event, 6)" @detailListInfo="detailInfo($event, 61)"></system-data-table6>
            <system-data-table7 v-if="formName == '对公打款单'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height" @detailInfo="detailInfo($event, 7)" @detailListInfo="detailInfo($event, 71)"></system-data-table7>
            <system-data-table8 v-if="formName == '普通申请单'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height" @detailInfo="detailInfo($event, 8)" @detailListInfo="detailInfo($event, 81)"></system-data-table8>
            <system-data-table9 v-if="formName == '借款单'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height" @detailInfo="detailInfo($event, 9)" @detailListInfo="detailInfo($event, 91)"></system-data-table9>
            <system-data-table11 v-if="formName == '收款单'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height" @detailInfo="detailInfo($event, 11)" @detailListInfo="detailInfo($event, 111)"></system-data-table11>
            <system-data-table10 v-if="formName == '还款单'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height" @detailInfo="detailInfo($event, 10)" @detailListInfo="detailInfo($event, 101)"></system-data-table10>
            <system-data-table3 v-if="formName == '应收应付'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height" @detailInfo="detailInfo($event, 33)"></system-data-table3>
            <system-data-table4 v-if="formName == '发票管理'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height" @detailInfo="detailInfo($event, 44)"></system-data-table4>
            <system-data-table5 v-if="formName == '交易流水'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height" @detailInfo="detailInfo($event, 5)"></system-data-table5>
          </template>
        </div>
        <div class="layout-right-footer text-right">
          <my-pagination :total="mainMenu == 1 ? total : totalDetail" :current-page="mainMenu == 1 ? page : pageDetail" :page-size="mainMenu == 1 ? num : numDetail" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="dialogBudgetVisible" size="600px" :title="$t('项目设置')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <el-form :model="form" :rules="rules" ref="form" label-width="100px">
          <el-form-item :label="$t('项目名称')" prop="name">
            <el-input v-model="form.name" class="width-480"></el-input>
          </el-form-item>
          <el-form-item :label="$t('项目编号')" prop="no">
            <el-input v-model="form.no" class="width-480">
              <el-button slot="append" type="default" @click="autoSetNo(1)">{{$t('自动填充')}}</el-button>
            </el-input>
          </el-form-item>
          <el-form-item :label="$t('项目类型')" prop="type">
            <my-select :sel-value="form.type" :options="filterObjectTypes" :width-style="480" @change="handleChange($event, 9)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('所属部门')" prop="dept">
            <my-cascader ref="selectorDept" :props="{ checkStrictly: true }" :sel-value="form.dept" type="4" sub-type="id" width-style="480" @change="handleCascaderDeptChange($event)"></my-cascader>
          </el-form-item>
          <template>
            <el-row :gutter="16">
              <el-col :span="12">
                <el-form-item :label="$t('项目状态')">
                  <my-select :width-style="182" :sel-value="form.status" :options="filterObjectStatus" style="width: 100%" @change="handleChange($event, 11)"></my-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('负责人')">
<!--                  <my-select :width-style="182" :sel-value="form.user" :options="userOptions" @change="handleChange($event, 16)"></my-select>-->
                  <el-popover
                    popper-class="custom-popper-class-form"
                    placement="left"
                    width="700"
                    trigger="click"
                    @show="handleShowTeacher(1)">
                    <div>
                      <teacher-tree-and-list ref="popverUserRef" :sel-value="form.userId" @change="handleSelCreateUser($event, 1)"></teacher-tree-and-list>
                    </div>
                    <el-button slot="reference" type="success" plain size="small">{{$t("添加")}}</el-button>
                  </el-popover>
                  <span v-if="form.user != ''" class="color-warning margin-left-10">
                    <i class="fa fa-user"></i>
                    {{form.user}}
                  </span>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
          <template>
            <el-row :gutter="16">
              <el-col :span="12">
                <el-form-item :label="$t('开始时间')">
                  <my-date-picker :sel-value="form.startTime" width-style="182" @change="handleChange($event,13)"></my-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('结束时间')">
                  <my-date-picker :sel-value="form.endTime" width-style="182" @change="handleChange($event,14)"></my-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
          <template>
            <el-row :gutter="16">
              <el-col :span="12">
                <el-form-item :label="$t('父级项目')">
                  <my-select :width-style="182" :sel-value="form.parentObj" :options="parendObjOptions" @change="handleChange($event, 15)"></my-select>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
          <el-form-item :label="$t('附件')">
            <div v-if="images.length > 0" v-for="(item, index) in images" :key="index" class="pull-left" style="position: relative;margin-right:10px;top: 10px">
              <i class="fa fa-close" style="position: absolute; right: -5px; top: -5px;font-size: 12px" @click="deleteRemoveImg(index)"></i>
              <i v-if="item.indexOf('.pdf') > -1" class="fa fa-file-pdf-o" style="height: 50px;width: 50px;font-size: 50px;position: relative;top: -2px;"></i>
              <i v-else-if="item.indexOf('.doc') > -1 || item.indexOf('.docx') > -1" class="fa fa-wordpress" style="height: 50px;width: 50px;font-size: 50px;position: relative;top: -2px;"></i>
              <img v-else :src="item" class="rp-img"/>
            </div>
            <upload-square :action="uploadFileUrl" :multiple="true" max-size="20" :data="{path: 'objectApp'}" accept=".png,.jpg,.jpeg,.pdf,.doc,.docx" @success="uploadFileSuccess">
              <div class="upload-block-class">
                <el-button type="warning" size="small"><span>{{$t("上传文件")}}</span></el-button>
              </div>
            </upload-square>
          </el-form-item>
          <el-form-item :label="$t('备注')" class="custom-textarea-inner">
            <el-input type="textarea" v-model="form.remarks" maxlength="300" show-word-limit class="width-480"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="padding-lr-10">
        <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okBudgetDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("提交审批")}}
        </el-button>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @close="closeDrawerDialog" :visible="dialogOrderVisible" size="600px" :title="$t('合同设置')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <el-form :model="formOrder" :rules="rules" ref="formOrder" label-width="100px">
          <el-form-item :label="$t('合同名称')" prop="name">
            <el-input v-model="formOrder.name" class="width-480"></el-input>
          </el-form-item>
          <el-form-item :label="$t('合同编号')" prop="no">
            <el-input v-model="formOrder.no" class="width-480">
              <el-button slot="append" type="default" @click="autoSetNo(2)">{{$t('自动填充')}}</el-button>
            </el-input>
          </el-form-item>
          <el-form-item :label="$t('关联单据')">
            <el-select v-model="formOrder.order" filterable placeholder="请选择" value-key="value" style="width: 480px;" @change="handleChange($event, 2)">
              <el-option v-for="item in filterBillTypes" :key="item.value" :label="item.label" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <template>
            <el-row :gutter="16">
              <el-col :span="12">
                <el-form-item :label="$t('合同金额')" prop="orderMoney">
                  <el-input v-model="formOrder.orderMoney" :placeholder="$t('请输入合同金额')" style="width: 182px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('责任人')">
                  <el-popover
                    popper-class="custom-popper-class-form"
                    placement="left"
                    width="700"
                    trigger="click"
                    @show="handleShowTeacher(2)">
                    <div>
                      <teacher-tree-and-list ref="popverOrderRef" :sel-value="formOrder.userId" @change="handleSelCreateUser($event, 2)"></teacher-tree-and-list>
                    </div>
                    <el-button slot="reference" type="success" plain size="small">{{$t("添加")}}</el-button>
                  </el-popover>
                  <span v-if="formOrder.user != ''" class="color-warning margin-left-10">
                    <i class="fa fa-user"></i>
                    {{formOrder.user}}
                  </span>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
          <template>
            <el-row :gutter="16">
              <el-col :span="12">
                <el-form-item :label="$t('关联项目')">
                  <el-select v-model="formOrder.object" filterable placeholder="请选择" value-key="value" style="width: 182px;" @change="handleChange($event, 7)">
                    <el-option v-for="item in objectOptions" :key="item.value" :label="item.label" :value="item"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('所属部门')">
                  <my-cascader ref="selectorDept" :props="{ checkStrictly: true }" :sel-value="formOrder.dept" type="4" sub-type="id" width-style="182" @change="handleCascaderDeptChange($event)"></my-cascader>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
          <template>
            <el-row :gutter="16">
              <el-col :span="12">
                <el-form-item :label="$t('供应商')">
                  <my-select :width-style="182" :sel-value="formOrder.merchat" :options="merchatOptions" @change="handleChange($event, 6)"></my-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('申请时间')">
                  <my-date-picker :sel-value="form.startTime" width-style="182" @change="handleChange($event,18)"></my-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
          <el-form-item :label="$t('备注')" class="custom-textarea-inner">
            <el-input type="textarea" v-model="formOrder.remarks" maxlength="300" show-word-limit class="width-480"></el-input>
          </el-form-item>
          <el-form-item :label="$t('附件')">
            <div v-if="images.length > 0" v-for="(item, index) in images" :key="index" class="pull-left" style="position: relative;margin-right:10px;top: 10px">
              <i class="fa fa-close" style="position: absolute; right: -5px; top: -5px;font-size: 12px" @click="deleteRemoveImg(index)"></i>
              <i v-if="item.indexOf('.pdf') > -1" class="fa fa-file-pdf-o" style="height: 50px;width: 50px;font-size: 50px;position: relative;top: -2px;"></i>
              <i v-else-if="item.indexOf('.doc') > -1 || item.indexOf('.docx') > -1" class="fa fa-wordpress" style="height: 50px;width: 50px;font-size: 50px;position: relative;top: -2px;"></i>
              <img v-else :src="item" class="rp-img"/>
            </div>
            <upload-square :action="uploadFileUrl" max-size="20" :data="{path: 'PunishmentCancelApply'}" accept=".png,.jpg,.jpeg,.pdf,.doc,.docx" @success="uploadFileSuccess">
              <div class="upload-block-class">
                <el-button type="warning" size="small"><span>{{$t("上传文件")}}</span></el-button>
              </div>
            </upload-square>
          </el-form-item>
        </el-form>

        <template v-if="formCode != 'TYHT'">
          <div style="margin-left: 60px">
            <el-row>
              <el-col :span="12">
                <span class="color-text-default">{{$t('回款计划')}}</span>
                <el-tooltip class="item" effect="dark" :content="$t('金额仅供参考,准确数据需要提交后查看详细信息')" placement="right">
                  <i class="fa fa-info-circle"></i>
                </el-tooltip>
              </el-col>
              <el-col :span="12" class="text-right">
                &nbsp;
<!--                <span>{{$t('总金额')}}: 0</span>-->
<!--                <span class="margin-left-5">{{$t('已添加')}}: 0</span>-->
<!--                <span class="margin-left-5">{{$t('待添加')}}: 0</span>-->
              </el-col>
            </el-row>
          </div>
          <table class="custom-table" style="width: 520px;margin-top: 10px;font-size: 12px;margin-left: 60px">
            <tr>
              <th width="8%">{{$t("期数")}}</th>
              <th width="15%">{{$t("比例")}}</th>
              <th width="15%">{{$t("金额")}}</th>
              <th width="27%">{{$t("日期")}}</th>
              <th width="20%">{{$t("备注")}}</th>
              <th width="15%">{{$t("操作")}}</th>
            </tr>
            <tbody>
            <tr v-for="(item, index) in formOrder.backMoney" :key="item.id">
              <td>
<!--                <el-input size="mini" style="width: 45px" v-model="item.stage"></el-input>-->
                <label>{{index+1}}</label>
              </td>
              <td>
                <el-input size="mini" style="width: 55px" placeholder="1-100" v-model="item.rate"></el-input>%
              </td>
              <td>
                <label>{{isNaN((item.rate * formOrder.orderMoney / 100)) ? '合同金额有误' : (item.rate * formOrder.orderMoney / 100).toFixed(2)}}</label>
              </td>
              <td>
                <my-date-picker size="mini" :sel-value="item.time" width-style="125" @change="handleChange($event,17, index)"></my-date-picker>
              </td>
              <td>
                <el-input size="mini" style="width: 85px" v-model="item.des"></el-input>
              </td>
              <td>
                <i class="fa fa-plus color-success" @click="addTableItem(index)"></i>
                <i v-if="index != 0" class="fa fa-minus color-danger margin-left-5" @click="minTableItem(index)"></i>
              </td>
            </tr>
            </tbody>
          </table>
        </template>
      </div>
      <div slot="footer" class="padding-lr-10">
        <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okOrderDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("提交审批")}}
        </el-button>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @close="closeDrawerDialog" :visible="dialogObjServerDetail" size="600px" :title="$t('详细查看')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <form-system-detail
          :form-code="formCode"
          :detail-type="detailType"
          :data-main-detail-obj="dataMainDetailObj"
          :data-detail-obj="dataDetailObj"
          :extra-data-list="payableDataList"
          :serial-data-list="serialDataList"
          :detail-apply-audit-list="detailApplyAuditList"
          :table-order-detail-data="tableOrderDetailData"
          :draw-height="tableHeight19.height"
          :table-height="tableHeight.height"
          @changeDetailType="changeDetailType"
          @detailOrderInfo="detailOrderInfo">

        </form-system-detail>
      </div>
      <div slot="footer">
        <audit-button v-if="detailType == 2" :sel-value="dataMainDetailObj" @ok="handleOk" @no="handleNo" @cancel="handleCancel"></audit-button>
        <div class="padding-lr-10">
          <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDetailDialog" :visible="dialogOrderDetailVisible" size="550px" :title="$t('详细信息')" @right-close="cancelDrawDetailDialog">
      <div slot="content" class="color-muted">
        <div class="detail-block" :style="{height: drawHeight9.height}">
          <form-system-order-detail
            :detail-type="detailOrderType"
            :data-detail-obj="dataOrderDetailObj"
            :data-main-detail-obj = "dataOrderMainDetailObj"
            :extra-data-list="payableOrderDataList"
            :serial-data-list="serialDataList"
            :detail-apply-audit-list="detailOrderApplyAuditList"
            :table-order-detail-data="payableOrderDataList"
            :draw-height="tableHeight19.height"
            :table-height="tableHeight.height"
            @changeDetailType="changeOrderDetailType">

          </form-system-order-detail>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @close="closeDrawerDialog" :visible="dialogTagsVisible" size="600px" :title="$t('详细查看')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <form-system-tags-detail
          :detail-type="detailType"
          :data-detail-obj="dataDetailObj"
          :data-main-detail-obj = "dataMainDetailObj"
          :extra-data-list="tableTagsDetailData"
          :serial-data-list="serialDataList"
          :detail-apply-audit-list="detailApplyAuditList"
          :draw-height="drawHeight8.height"
          @changeDetailType="changeDetailType">

        </form-system-tags-detail>
      </div>
      <div slot="footer" class="padding-lr-10">
        <!--        <audit-button v-if="detailType == 2" :sel-value="dataMainDetailObj" @ok="handleOk" @no="handleNo" @cancel="handleCancel"></audit-button>-->
        <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @close="closeDrawerDialog" :visible="dialogNormalVisible" size="600px" :title="$t('详细查看')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <form-system-normal-detail
          :detail-type="detailType"
          :data-detail-obj="dataDetailObj"
          :data-main-detail-obj = "dataMainDetailObj"
          :extra-data-list="tableNormalDetailData"
          :serial-data-list="serialDataList"
          :detail-apply-audit-list="detailApplyAuditList"
          :draw-height="drawHeight8.height"
          @changeDetailType="changeDetailType">

        </form-system-normal-detail>
      </div>
      <div slot="footer">
        <audit-button v-if="detailType == 2" :sel-value="dataMainDetailObj" @ok="handleOk" @no="handleNo" @cancel="handleCancel"></audit-button>
        <div class="padding-lr-10">
          <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {
    auditStatusBgColor,
    auditStatusColor,
    auditStatusText, formXmText,
    MessageError,
    MessageSuccess,
    MessageWarning,
    objectStatus,
    objectType
  } from "~/utils/utils";
  import MyElTree from "~/components/tree/MyElTree";
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";
  import MyInputButton from "~/components/search/MyInputButton";
  import SystemDataTopBar from "~/components/utils/barBlock/SystemDataTopBar";
  import SystemDataTable from "~/components/utils/table/SystemDataTable1";
  import SystemDataTable1 from "~/components/utils/table/SystemDataTable1";
  import SystemDataTable2 from "~/components/utils/table/SystemDataTable2";
  import SystemDataTable3 from "~/components/utils/table/SystemDataTable3";
  import SystemDataTable4 from "~/components/utils/table/SystemDataTable4";
  import SystemDataTable5 from "~/components/utils/table/SystemDataTable5";
  import SystemDataTable6 from "~/components/utils/table/SystemDataTable6";
  import SystemDataTable7 from "~/components/utils/table/SystemDataTable7";
  import SystemDataTable8 from "~/components/utils/table/SystemDataTable8";
  import SystemDataTable9 from "~/components/utils/table/SystemDataTable9";
  import SystemDataTable10 from "~/components/utils/table/SystemDataTable10";
  import orderValidater from "~/utils/validater/orderValidater";
  import appObjectValidater from "~/utils/validater/appObjectValidater";
  import TeacherTreeAndList from "~/components/utils/treeAndList/TeacherTreeAndList.vue";
  import FormSystemOrderDetail from "~/components/utils/formDetail/FormSystemOrderDetail.vue";
  import FormSystemDetail from "~/components/utils/formDetail/FormSystemDetail.vue";
  import FormSystemTagsDetail from "~/components/utils/formDetail/FormSystemTagsDetail.vue";
  import FormSystemNormalDetail from "~/components/utils/formDetail/FormSystemNormalDetail.vue";
  import SystemDataTable11 from "~/components/utils/table/SystemDataTable11.vue";

  export default {
    components: {
      SystemDataTable11,
      FormSystemNormalDetail,
      FormSystemTagsDetail,
      FormSystemDetail,
      FormSystemOrderDetail,
      TeacherTreeAndList,
      SystemDataTable10,
      SystemDataTable9,
      SystemDataTable8,
      SystemDataTable7,
      SystemDataTable6,
      SystemDataTable5,
      SystemDataTable4,
      SystemDataTable3,
      SystemDataTable2,
      SystemDataTable1, SystemDataTable, SystemDataTopBar, MyInputButton, DrawerLayoutRight, MyElTree},
    mixins: [mixins,orderValidater,appObjectValidater],
    data(){
      return {
        appName: '',
        pageDetail: 1,
        numDetail: 20,
        totalDetail: 0,
        tableData: [],
        tableDetailData: [],
        tableDataTitles: [],
        tableOrderDetailData: [],
        tableTagsDetailData: [],
        tableNormalDetailData: [],
        collegeList: [],
        categorys: [],
        applyContentArr: [],
        defaultExpandedKeys: [],
        typeOptions: [],
        orderOptions: [],
        budgetOptions: [],
        statusOptions: [],
        deptOptions: [],
        parendObjOptions: [],
        userOptions: [],
        merchatOptions: [],
        objectOptions: [],
        havePersionOptions: [],
        appDetailObj: {},
        dataDetailObj: {},
        dataMainDetailObj: {},
        dataOrderDetailObj: {},
        dataOrderMainDetailObj: {},
        schoolAccountIdList: [],
        detailOrderApplyAuditList: [],
        payableOrderDataList: [],
        currentNodeKey: '',
        types: [],
        detailType: 1,
        detailOrderType: 1,
        detailInfoType: '',
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
        formCode: '',
        formName: '',
        listId: '',
        appletId: '',
        uploadFile: common.doomroom_import_file + "?fileName=" + encodeURIComponent(this.$t("模板.xlsx")),
        uploadAction: common.doomroom_import,
        uploadResult: {},
        detailData: '',
        detailCheckData: '',
        uploadProcess: '',
        detailApplyContentData: [],
        detailApplyAuditList: [],
        detailCheckApplyContentData: [],
        detailCheckApplyAuditList: [],
        payableDataList: [],
        serialDataList: [],
        dialogLoading: false,
        dialogApp: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        dialogServer: false,
        dialogServerDetail: false,
        dialogObjServerDetail: false,
        dialogOrderServerDetail: false,
        dialogServerCheckDetail: false,
        dialogOrderVisible: false,
        dialogBudgetVisible: false,
        dialogOrderDetailVisible: false,
        dialogTagsVisible: false,
        dialogNormalVisible: false,
        mainMenuType: 1,
        subMenuType: 4,
        mainMenu: 1,
        searchDetailData: [],
        uploadFileUrl: common.upload_file,
        images: [],
        files: [],
        submitStatus: true,
        formOrder: {
          id: '',
          name: '',
          no: '',
          type: '',
          order: '',
          ordername: '',
          status: '',
          budget: '',
          orderMoney: '',
          dept: [],
          deptName: [],
          merchat: '',
          havePerson: '',
          object: '',
          objectName: '',
          startTime: '',
          remarks: '',
          backMoney: [
            {
              stage: 1,
              rate: 1,
              amount: 0,
              time: '',
              des: ''
            }
          ],
          user: '',
          userId: '',
        },
        form: {
          id: '',
          name: '',
          no: '',
          type: '',
          dept: [],
          deptName: [],
          status: '',
          budget: '',
          startTime: '',
          endTime: '',
          parentObj: '',
          user: '',
          userId: '',
          remarks: '',
          fileList: []
        }
      }
    },
    created() {
      this.initApp();
    },
    methods: {
      init(){
        let url = '';
        let params = {
          page: this.pageDetail,
          num: this.numDetail,
          queryApplyListType: this.queryApplyListType,
          formId: this.formId,
          formCode: this.formCode,
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
        url = common.server_form_template_form_apply_page;
        if (this.formCode == 'YSYF'){
          url = common.payable_manage_page;
        }else if (this.formCode == 'FPGL'){
          url = common.invoice_manage_page;
        }else if (this.formCode == 'JYLS'){
          url = common.serial_manage_page;
        }

        let applyContentArr = [];
        let applyContent = [];
        this.tableDetailData = [];
        this.$axios.get(url, {params: params}).then(res => {
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
          searchKey: this.searchKey,
          isDefault: true
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
      initAuditDetailList(id, type, extra){
        let params = {
          id: id
        };
        this.detailApplyAuditList = [];
        this.$axios.get(common.server_form_audit_query, {params: params}).then(res=>{
          if (res.data.code == 200){
            if (res.data.data){
              if (type == 'main'){
                this.detailData = res.data.data;
                this.detailApplyAuditList = res.data.data.handleList && res.data.data.handleList.length > 0 ? res.data.data.handleList : [];
              }else if (type == 'check'){
                this.detailCheckData = res.data.data;
                this.detailCheckApplyAuditList = res.data.data.handleList && res.data.data.handleList.length > 0 ? res.data.data.handleList : [];
                let orderIndex = res.data.data.orderIndex;

                if (res.data.data.applyContent  && res.data.data.applyContent != "[]"){
                  this.detailCheckApplyContentData = JSON.parse(res.data.data.applyContent);
                }

                for (let i = 0; i < res.data.data.handleList.length; i++){
                  if (res.data.data.handleList[i].orderIndex == orderIndex){
                    this.detailCheckApplyAuditUserData = {
                      agreen1: res.data.data.handleList[i].agreed1,
                      notagreed1: res.data.data.handleList[i].notagreed1
                    };
                  }
                }
              }else if (type == 'edit'){
                if (extra == 1){
                  this.form = {
                    id: res.data.data.id,
                    name: res.data.data.applyData.xm_name20230501.value,
                    no: res.data.data.applyData.xm_no20230501.value,
                    type: res.data.data.applyData.xm_type20230501.value,
                    dept: res.data.data.applyData['xm_applyDept20230501'] ? res.data.data.applyData.xm_applyDept20230501.value : '',
                    deptName: res.data.data.applyData['xm_applyDept20230501'] ? res.data.data.applyData.xm_applyDept20230501.deptName : '',
                    status: res.data.data.applyData.xm_status20230501.value+'',
                    budget: '',
                    startTime: res.data.data.applyData.xm_beginTime20230501.value,
                    endTime: res.data.data.applyData.xm_endTime20230501.value,
                    parentObj: res.data.data.applyData.xm_superId20230501.value,
                    user: res.data.data.applyData.xm_personId20230501.userName,
                    userId: res.data.data.applyData.xm_personId20230501.userId,
                    remarks: res.data.data.applyData.xm_des20230501.value,
                    fileList: []
                  };
                  this.images = res.data.data.applyData.xm_files20230501.value;
                  this.files = res.data.data.applyData.xm_files20230501.filename;
                }else if (extra == 4 || extra == 2 || extra == 3){
                  let order = "";
                  let orderName = "";
                  let object = "";
                  let objectName = "";

                  if (res.data.data.applyData['tag_ids20230501'] && res.data.data.applyData['tag_ids20230501']['value'] != ''){
                    order = {
                      label: res.data.data.applyData.tag_ids20230501.name,
                      text: res.data.data.applyData.tag_ids20230501.name,
                      value: res.data.data.applyData.tag_ids20230501.value
                    };
                  }else {
                    order = '';
                  }

                  if (res.data.data.applyData['tag_ids20230501'] && res.data.data.applyData['tag_ids20230501']['name'] != ''){
                    orderName = res.data.data.applyData.tag_ids20230501.name;
                  }else {
                    order = '';
                  }

                  if (res.data.data.applyData['xm_id20230501'] && res.data.data.applyData['xm_id20230501']['value'] != ''){
                    object = {
                      label: res.data.data.applyData.xm_id20230501.name,
                      text: res.data.data.applyData.xm_id20230501.name,
                      value: res.data.data.applyData.xm_id20230501.value
                    };
                  }else {
                    order = '';
                  }

                  if (res.data.data.applyData['xm_id20230501'] && res.data.data.applyData['xm_id20230501']['name'] != ''){
                    objectName = res.data.data.applyData.xm_id20230501.name;
                  }else {
                    objectName = '';
                  }

                  this.formOrder = {
                    id: res.data.data.id,
                    name: res.data.data.applyData.ht_name20230501.value,
                    no: res.data.data.applyData.ht_no20230501.value,
                    type: '',
                    order: order,
                    ordername: orderName,
                    status: '',
                    budget: '',
                    orderMoney: res.data.data.applyData.ht_amount20230501.value,
                    dept: res.data.data.applyData['apply_dept20230501'] ? res.data.data.applyData.apply_dept20230501.value : '',
                    deptName: res.data.data.applyData['apply_dept20230501'] ? res.data.data.applyData.apply_dept20230501.deptName : '',
                    merchat: res.data.data.applyData.ht_supplierId20230501.value,
                    havePerson: '',
                    object: object,
                    objectName: objectName,
                    startTime: res.data.data.applyData['ht_time20230501'] ? res.data.data.applyData.ht_time20230501.value : '',
                    remarks: res.data.data.applyData['ht_des20230501'] ? res.data.data.applyData.ht_des20230501.value : '',
                    backMoney: [],
                    user: res.data.data.applyData['ht_duty20230501'] ? res.data.data.applyData.ht_duty20230501.userName : '',
                    userId: res.data.data.applyData['ht_duty20230501'] ? res.data.data.applyData.ht_duty20230501.userId : ''
                  }
                  this.images = res.data.data.applyData.ht_files20230501.value;
                  this.files = res.data.data.applyData.ht_files20230501.filename;

                  if (extra == 2 || extra == 3 || extra == 4){
                    let ruleList = [];
                    let count = res.data.data.applyData['ht_stage20230501'] ? res.data.data.applyData['ht_stage20230501'].value : 0;
                    console.log(count);
                    for (let i = 0; i < count; i++){
                      ruleList.push({
                        stage: res.data.data.applyData['ht_payStage20230501_'+(i+1)].value,
                        rate: res.data.data.applyData['ht_payRate20230501_'+(i+1)].value,
                        amount: res.data.data.applyData['ht_payAmount20230501_'+(i+1)].value,
                        time: res.data.data.applyData['ht_payTime20230501_'+(i+1)].value,
                        des: res.data.data.applyData['ht_payDes20230501_'+(i+1)].value
                      });
                    }
                    this.formOrder.backMoney = ruleList;
                  }
                }
              }else if (type == 'detail'){
                if (extra == 1){
                  this.dataDetailObj = res.data.data['applyData'] ? res.data.data['applyData'] : {};
                  this.dataMainDetailObj = res.data.data;
                  this.detailApplyAuditList = res.data.data.handleList && res.data.data.handleList.length > 0 ? res.data.data.handleList : [];
                }else if (extra == 2 || extra == 3 || extra == 4 || extra == 5 || extra == 44 || extra == 33){
                  this.dataDetailObj = res.data.data['applyData'] ? res.data.data['applyData'] : {};
                  this.dataMainDetailObj = res.data.data;
                  this.detailApplyAuditList = res.data.data.handleList && res.data.data.handleList.length > 0 ? res.data.data.handleList : [];
                  this.payableDataList = res.data.data.payableDataList;
                  this.serialDataList = res.data.data.serialDataList;
                  this.tableOrderDetailData = res.data.data.payableDataList;
                }else if (extra == 91 || extra == 101 || extra == 111 || extra == 61 || extra == 81 || extra == 71){
                  this.dataDetailObj = res.data.data['applyData'] ? res.data.data['applyData'] : {};
                  this.dataMainDetailObj = res.data.data;
                  this.detailApplyAuditList = res.data.data.handleList && res.data.data.handleList.length > 0 ? res.data.data.handleList : [];
                  this.payableDataList = res.data.data.payableDataList;
                  this.serialDataList = res.data.data.serialDataList;
                  this.tableNormalDetailData = res.data.data.payableDataList;
                }else if (extra == 9 || extra == 10 || extra == 11 || extra == 6){
                  this.dataDetailObj = res.data.data['applyData'] ? res.data.data['applyData'] : {};
                  this.dataMainDetailObj = res.data.data;
                  this.detailApplyAuditList = res.data.data.handleList && res.data.data.handleList.length > 0 ? res.data.data.handleList : [];
                  if (res.data.data.formCode == 'XMGL'){
                    this.initReal(item._id);
                  }else if (res.data.data.formCode == 'XSHT' || res.data.data.formCode == 'CGHT' || res.data.data.formCode == 'TYHT'){
                    let ruleList = [];
                    //let count = res.data.data.applyData['ht_stage20230501'] ? res.data.data.applyData['ht_stage20230501'].value : 0;
                    console.log(res.data.data.payableDataList);
                    for (let i = 0; i < res.data.data.payableDataList.length; i++){
                      ruleList.push({
                        stage: res.data.data.payableDataList[i].stage,
                        rate: res.data.data.payableDataList[i].rate,
                        amount: res.data.data.payableDataList[i].shouldAmount,
                        time: res.data.data.payableDataList[i].time,
                        des: res.data.data.payableDataList[i].des,
                      });
                    }
                    this.tableTagsDetailData = ruleList;
                  }
                }
              }else if (type == 'detailOrder'){
                if (extra == 1){
                  this.dataOrderDetailObj = res.data.data['applyData'] ? res.data.data['applyData'] : {};
                  this.dataOrderMainDetailObj = res.data.data;
                  this.detailOrderApplyAuditList = res.data.data.handleList && res.data.data.handleList.length > 0 ? res.data.data.handleList : [];
                }else if (extra == 2){
                  this.dataOrderDetailObj = res.data.data['applyData'] ? res.data.data['applyData'] : {};
                  this.dataOrderMainDetailObj = res.data.data;
                  this.detailOrderApplyAuditList = res.data.data.handleList && res.data.data.handleList.length > 0 ? res.data.data.handleList : [];
                  this.payableOrderDataList = res.data.data.payableDataList;
                  this.serialDataList = res.data.data.serialDataList;
                }
              }
            }
          }
        });
      },
      initParentList(){
        let params = {};
        this.$axios.get(common.object_order_used_list, {params: params}).then(res=> {
          if (res.data.code == 200) {
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i].applyData.xm_name20230501.value,
                text: res.data.data[i].applyData.xm_name20230501.value,
                value: res.data.data[i]._id
              });
              this.objectOptions = array;
              this.parendObjOptions = array;
            }
          }
        });
      },
      initMerchatList(){
        let params = {};
        this.$axios.get(common.supplier_account_list, {params: params}).then(res=> {
          if (res.data.code == 200) {
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i].company,
                text: res.data.data[i].company,
                value: res.data.data[i].id
              });
              this.merchatOptions = array;
            }
          }
        });
      },
      initReal(id){
        let params = {
          id: id,
          page: 1,
          num: 9999
        };
        this.$axios.get(common.object_xm_real_page, {params: params}).then(res=> {
          if (res.data.code == 200) {
            this.tableOrderDetailData = res.data.data.list;
          }
        });
      },
      async initCountInfo(formCode){
        if (formCode == 'YSYF'){
          this.initYSYFCount();
        }else if (formCode == 'FPGL'){
          this.initFPGLCount();
        }else if (formCode == 'JYLS'){
          await this.initSchoolAccount();
          //await this.initJYLSCount(this.schoolAccountIdList.length > 0 ? this.schoolAccountIdList[0].account_id : '');
          await this.initJYLSCount();
        }else if (formCode == 'TYHT' || formCode == 'XSHT' || formCode == 'CGHT'){
          this.initTYHTCount();
        }else if (formCode == 'BZBX'){
          this.initBZBXCount();
        }else if (formCode == 'JKGL'){
          this.initJKGLCount();
        }else if (formCode == 'HKD'){
          this.initHKDCount();
        }else if (formCode == 'PTGL'){
          this.initPTGLCount();
        }else if (formCode == 'DGDK'){
          this.initDGDKCount();
        }else if (formCode == 'SKD'){
          this.initSKDCount();
        }
      },
      initYSYFCount(){
        this.$axios.get(common.payable_manage_count).then(res=> {
          if (res.data.code == 200) {
            if (res.data.data) {
              this.appDetailObj = res.data.data;
            }
          }
        });
      },
      initFPGLCount(){
        this.$axios.get(common.invoice_manage_count).then(res=> {
          if (res.data.code == 200) {
            if (res.data.data) {
              this.appDetailObj = res.data.data;
            }
          }
        });
      },
      async initJYLSCount(schoolAccountId){
        let params = {
          schoolAccountNo: schoolAccountId ? schoolAccountId : ''
        };
        this.$axios.get(common.serial_manage_count, {params: params}).then(res=> {
          if (res.data.code == 200) {
            if (res.data.data) {
              this.appDetailObj = res.data.data;
              this.appDetailObj['account'] = [];
            }
          }
        });
      },
      async initTYHTCount(){
        let params = {
          formCode: this.formCode
        };
        this.$axios.get(common.ht_manage_count, {params: params}).then(res=> {
          if (res.data.code == 200) {
            if (res.data.data) {
              this.appDetailObj = res.data.data;
            }
          }
        });
      },
      async initBZBXCount(){
        let params = {
          formCode: this.formCode
        };
        this.$axios.get(common.bzbx_manage_count, {params: params}).then(res=> {
          if (res.data.code == 200) {
            if (res.data.data) {
              this.appDetailObj = res.data.data;
            }
          }
        });
      },
      async initSchoolAccount(){
        let params = {};
        await this.$axios.get(common.school_account_list).then(res=> {
          if (res.data.code == 200) {
            if (res.data.data) {
              this.schoolAccountIdList = res.data.data;
            }
          }
        });
      },
      async initJKGLCount(){
        let params = {
          formCode: this.formCode
        };
        this.$axios.get(common.jk_manage_count, {params: params}).then(res=> {
          if (res.data.code == 200) {
            if (res.data.data) {
              this.appDetailObj = res.data.data;
            }
          }
        });
      },
      async initHKDCount(){
        let params = {
          formCode: this.formCode
        };
        this.$axios.get(common.hk_manage_count, {params: params}).then(res=> {
          if (res.data.code == 200) {
            if (res.data.data) {
              this.appDetailObj = res.data.data;
            }
          }
        });
      },
      async initPTGLCount(){
        let params = {
          formCode: this.formCode
        };
        this.$axios.get(common.pt_manage_count, {params: params}).then(res=> {
          if (res.data.code == 200) {
            if (res.data.data) {
              this.appDetailObj = res.data.data;
            }
          }
        });
      },
      async initDGDKCount(){
        let params = {
          formCode: this.formCode
        };
        this.$axios.get(common.dgdk_manage_count, {params: params}).then(res=> {
          if (res.data.code == 200) {
            if (res.data.data) {
              this.appDetailObj = res.data.data;
            }
          }
        });
      },
      async initSKDCount(){
        let params = {
          formCode: this.formCode
        };
        this.$axios.get(common.skd_manage_count, {params: params}).then(res=> {
          if (res.data.code == 200) {
            if (res.data.data) {
              this.appDetailObj = res.data.data;
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
        this.formId = '';
        this.formCode = '';
        this.initApp();
      },
      objectTypeInfo(str, type){
        return objectType(type, str);
      },
      objectStatusInfo(str, type){
        return objectStatus(type, str);
      },
      auditStatusTextInfo(str){
        return auditStatusText(str);
      },
      auditColorInfo(val){
        return auditStatusBgColor(val);
      },
      auditTextColorInfo(val){
        return auditStatusColor(val);
      },
      formXmTextInfo(str, type){
        return formXmText(str, type);
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
        this.formId = item.id;
        this.formCode = item.code;
        this.formName = item.formName;
        this.searchDetailType = item.applet_type;
        await this.getAppletSystemServerInfo();
        let data = this.dataAppletSystemServer;
        if (data && data.length > 0 && data[0]['children']){
          this.formId = data[0]['children'][0].id;
          this.formName = data[0]['children'][0].label;
          this.formCode = data[0]['children'][0].code;
          this.defaultExpandedKeys = [data[0].id, data[0]['children'][0].id];
          this.currentNodeKey = data[0]['children'][0].id;

          this.initCountInfo(this.formCode);
        }

        this.init();
      },
      async editInfo(item, type){
        await this.getSessionInfo();
        this.submitStatus = true;
        if (type == 1){
          this.initParentList();
          this.initAuditDetailList(item.id, 'edit', 1);
          this.dialogBudgetVisible = true;
        }else if (type == 2){
          this.initParentList();
          this.initMerchatList();
          this.initAuditDetailList(item.id, 'edit', 2);
          this.dialogOrderVisible = true;
        }else if (type == 3){
          this.initParentList();
          this.initMerchatList();
          this.initAuditDetailList(item.id, 'edit', 3);
          this.dialogOrderVisible = true;
        }else if (type == 4){
          this.initParentList();
          this.initMerchatList();
          this.initAuditDetailList(item.id, 'edit', 4);
          this.dialogOrderVisible = true;
        }
      },
      detailInfo(item, type){
        this.detailInfoType = type;
        if (type == 1){
          this.initReal(item.id);
          this.initAuditDetailList(item.id, 'detail', 1);
          this.dialogObjServerDetail = true;
        }else if (type == 2){
          //this.initReal(item.id);
          this.initAuditDetailList(item.id, 'detail', 2);
          this.dialogObjServerDetail = true;
        }else if (type == 3){
          //this.initReal(item.id);
          this.initAuditDetailList(item.id, 'detail', 3);
          this.dialogObjServerDetail = true;
        }else if (type == 4){
          //this.initReal(item.id);
          this.initAuditDetailList(item.id, 'detail', 4);
          this.dialogObjServerDetail = true;
        }else if (type == 44){
          //this.initReal(item.id);
          this.initAuditDetailList(item._id, 'detail', 44);
          this.dialogObjServerDetail = true;
        }else if (type == 33){
          //this.initReal(item.id);
          this.initAuditDetailList(item._id, 'detail', 33);
          this.dialogObjServerDetail = true;
        }else if (type == 5){
          //this.initReal(item.id);
          this.initAuditDetailList(item._id, 'detail', 5);
          this.dialogObjServerDetail = true;
        }else if (type == 6){
          //this.initReal(item.id);
          this.initAuditDetailList(item.applyData.borrow_apply20230501.value, 'detail', 6);
          this.dialogTagsVisible = true;
        }else if (type == 7){
          //this.initReal(item.id);
          this.initAuditDetailList(item.applyData.off_apply20230501.value, 'detail', 7);
          this.dialogTagsVisible = true;
        }else if (type == 8){
          //this.initReal(item.id);
          this.initAuditDetailList(item.applyData.off_apply20230501.value, 'detail', 8);
          this.dialogTagsVisible = true;
        }else if (type == 9){
          //this.initReal(item.id);
          this.initAuditDetailList(item.applyData.off_apply20230501.value, 'detail', 9);
          this.dialogTagsVisible = true;
        }else if (type == 10){
          //this.initReal(item.id);
          this.initAuditDetailList(item.applyData.borrow_apply20230501.value, 'detail', 10);
          this.dialogTagsVisible = true;
        }else if (type == 11){
          //this.initReal(item.id);
          this.initAuditDetailList(item.applyData.borrow_apply20230501.value, 'detail', 11);
          this.dialogTagsVisible = true;
        }else if (type == 61){
          //this.initReal(item.id);
          this.initAuditDetailList(item.id, 'detail', 61);
          this.dialogNormalVisible = true;
        }else if (type == 71){
          //this.initReal(item.id);
          this.initAuditDetailList(item.id, 'detail', 71);
          this.dialogNormalVisible = true;
        }else if (type == 81){
          //this.initReal(item.id);
          this.initAuditDetailList(item.id, 'detail', 81);
          this.dialogNormalVisible = true;
        }else if (type == 91){
          //this.initReal(item.id);
          this.initAuditDetailList(item.id, 'detail', 91);
          this.dialogNormalVisible = true;
        }else if (type == 101){
          //this.initReal(item.id);
          this.initAuditDetailList(item.id, 'detail', 101);
          this.dialogNormalVisible = true;
        }else if (type == 111){
          //this.initReal(item.id);
          this.initAuditDetailList(item.id, 'detail', 111);
          this.dialogNormalVisible = true;
        }
      },
      detailCheckClick($event, id){
        this.initAuditDetailList(id, 'check');
        this.dialogServerCheckDetail = true;
      },
      deleteInfo(item){
        this.listId = item._id;
        this.visibleConfim = true;
      },
      printManage(item){
        window.open('/appletInfo/app/formPrint?serverId=' + item._id + "&title=" + item.formName + "&time=" + this.$moment().format("YYYY-MM-DD HH:mm:ss"), '_blank');
      },
      autoSetNo(type){
        let url = common.object_order_auto_no;
        let params = {};

        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            if (type == 1){
              this.form.no = res.data.data.formApplyNo;
            }else if (type == 2){
              this.formOrder.no = res.data.data.formApplyNo;
            }
          }
        });
      },
      readFile(file){//预览
        ImagePreview({
          images: [file],
          closeable: false,
        });
      },
      readOtherFile(file){
        window.open(file, "_blank");
      },
      handleShowTeacher(type){
        if (type == 1){
          this.$refs.popverUserRef._handleOpen();
        }else if (type == 2){
          this.$refs.popverOrderRef._handleOpen();
        }
      },
      handleSelCreateUser(data, type){
        if (type == 1){
          this.form.user = data.real_name;
          this.form.userId = data.user_id;
        }else if (type == 2){
          this.formOrder.user = data.real_name;
          this.formOrder.userId = data.user_id;
        }
      },
      handleCheckCancel(){
        this.dialogServerCheckDetail = false;
      },
      changeDetailType(event, type){
        this.detailType = type;
      },
      changeOrderDetailType(event, type){
        this.detailOrderType = type;
      },
      closeDialog(event){
        this.listId = "";
        this.subTitle = "";
        this.detailData = '';
        this.detailApplyContentData = [];
        this.detailApplyAuditList = [];
      },
      closeDrawerDialog(event){
        this.form = {
          id: '',
          name: '',
          no: '',
          type: '',
          dept: [],
          deptName: [],
          status: '',
          budget: '',
          startTime: '',
          endTime: '',
          parentObj: '',
          user: '',
          remarks: '',
          fileList: []
        };

        this.formOrder = {
          id: '',
          name: '',
          no: '',
          type: '',
          order: '',
          ordername: '',
          status: '',
          budget: '',
          orderMoney: '',
          dept: [],
          deptName: [],
          merchat: '',
          havePerson: '',
          object: '',
          objectName: '',
          startTime: '',
          remarks: '',
          backMoney: [
            {
              stage: 1,
              rate: 1,
              amount: 0,
              time: '',
              des: ''
            }
          ],
          user: '',
          userId: '',
        };

        this.detailType = 1;
        this.images = [];
        this.files = [];
        this.submitStatus = true;
        this.tableOrderDetailData = [];
        this.tableTagsDetailData = [];
        this.tableNormalDetailData = [];
        this.objectOptions = [];
        this.merchatOptions = [];
        this.parendObjOptions = [];
        this.payableDataList = [];
        this.dialogLoading = false;
        this.resetCasadeSelector('selectorDept');
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        this.dialogOrderVisible = event;
        this.dialogBudgetVisible = false;
        this.dialogObjServerDetail = false;
        this.dialogOrderServerDetail = false;
        this.dialogOrderDetailVisible = false;
        this.dialogTagsVisible = false;
        this.dialogNormalVisible = false;
      },
      closeDrawerDetailDialog(){
        this.dataOrderDetailObj = {};
        this.dataOrderMainDetailObj = {};
        this.payableOrderDataList = [];
        this.detailOrderApplyAuditList = [];
        this.detailOrderType = 1;
        this.dialogOrderDetailVisible = false;
      },
      closeCheckDrawerDialog(event){
        this.dialogServerCheckDetail = event;
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      cancelDrawDialog(){
        this.dialogOrderVisible = false;
        this.dialogBudgetVisible = false;
        this.dialogObjServerDetail = false;
        this.dialogOrderServerDetail = false;
        this.dialogOrderDetailVisible = false;
        this.dialogTagsVisible = false;
        this.dialogNormalVisible = false;
      },
      cancelDrawDetailDialog(){
        this.dialogOrderDetailVisible = false;
      },
      cancelCheckDrawDialog(){
        this.dialogServerCheckDetail = false;
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      handleChange(event, type, index){
        if (type == 1){
          this.formOrder.type = event;
        }else if (type == 2){
          this.formOrder.order = event;
          this.formOrder.ordername = event.label;
        }else if (type == 3){
          this.formOrder.status = event;
        }else if (type == 4){
          this.formOrder.budget = event;
        }else if (type == 5){
          this.formOrder.dept = event;
        }else if (type == 6){
          this.formOrder.merchat = event;
        }else if (type == 7){
          this.formOrder.object = event;
          this.formOrder.objectName = event.label;
        }else if (type == 8){
          this.formOrder.havePerson = event;
        }else if (type == 9){
          this.form.type = event;
        }else if (type == 10){
          this.form.dept = event;
        }else if (type == 11){
          this.form.status = event;
        }else if (type == 12){
          this.form.budget = event;
        }else if (type == 13){
          this.form.startTime = event;
        }else if (type == 14){
          this.form.endTime = event;
        }else if (type == 15){
          this.form.parentObj = event;
        }else if (type == 16){
          this.form.user = event;
        }else if (type == 17){
          this.$set(this.formOrder.backMoney[index], 'time', event);
        }else if (type == 18){
          this.formOrder.startTime = event;
        }
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.listId
        }
        url = common.server_form_audit_delete;
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
        this.pageDetail = 1;

        if (data.unit == 2){
          this.formId = data.id;
          this.formName = data.label;
          this.formCode = data.code;
          this.initCountInfo(data.code);
          this.init();
        }
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
      handleCascaderDeptChange(data){
        this.form.dept = data;
        this.form.deptName = this.$refs['selectorDept'].$refs.cascaderSelector.getCheckedNodes()[0].pathLabels;

        this.formOrder.dept = data;
        this.formOrder.deptName = this.$refs['selectorDept'].$refs.cascaderSelector.getCheckedNodes()[0].pathLabels;
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
      },
      async addInfo(event, type){
        await this.getSessionInfo();
        this.submitStatus = true;
        if (type == 1){
          this.initParentList();
          this.dialogBudgetVisible = true;
        }else if (type == 2){
          this.initParentList();
          this.initMerchatList();
          this.dialogOrderVisible = true;
        }
      },
      deleteRemoveImg(event, index){
        //this.form.file = "";
        this.images.splice(index, 1);
      },
      uploadFileSuccess(res, file){
        if (res.code == 200){
          this.images.push(res.data.url);
          this.files.push(file.name);
        }else {

        }
      },
      detailOrderInfo(item){
        console.log(111);
        this.initAuditDetailList(item.id, 'detailOrder', 2);
        this.dialogOrderDetailVisible = true;
      },
      okOrderEditDialog(){

      },
      okBudgetDialog(){
        let url = '';
        let error = 0;
        let req = /^([\+]?(([1-9]\d*)|(0)))([.]\d{0,2})?$/;
        this.$refs['form'].validate((valid) => {
          if (valid) {

            let params = {};
            let contentJson = {};
            if (this.formCode == 'XMGL'){
              contentJson = [
                {
                  field: 'xm_name20230501',
                  value: this.form.name,
                },
                {
                  field: 'xm_no20230501',
                  value: this.form.no,
                },
                {
                  field: 'xm_applyDept20230501',
                  value: this.form.dept,
                  deptName: this.form.deptName,
                },
                {
                  field: 'xm_type20230501',
                  value: this.form.type,
                },
                {
                  field: 'xm_status20230501',
                  value: this.form.status,
                },
                {
                  field: 'xm_beginTime20230501',
                  value: this.form.startTime,
                },
                {
                  field: 'xm_endTime20230501',
                  value: this.form.endTime,
                },
                {
                  field: 'xm_superId20230501',
                  value: this.form.parentObj,
                },
                {
                  field: 'xm_personId20230501',
                  value: this.form.userId,
                  userId: this.form.userId,
                  userName: this.form.user,
                },
                {
                  field: 'xm_files20230501',
                  value: this.images,
                  filename: this.files
                },
                {
                  field: 'xm_des20230501',
                  value: this.form.remarks
                }
              ];
              params = {
                formCode: this.formCode,
                userId: this.loginUserId,
                applyContent: JSON.stringify(contentJson),
                submit: this.submitStatus
              }
              url = common.object_order_add;
            }

            if (this.form.id != ''){
              params['id'] = this.form.id;
            }

            params = this.$qs.stringify(params);
            this.dialogLoading = true;
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.dialogBudgetVisible = false;
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
      okOrderDialog(){
        let url = '';
        let error = 0;
        let req = /^([1-9][0-9]{0,1}|100)$/;
        this.$refs['formOrder'].validate((valid) => {
          if (valid) {
            let params = {};
            let contentJson = {};
            contentJson = [
              {
                field: 'ht_name20230501',
                value: this.formOrder.name,
              },
              {
                field: 'ht_no20230501',
                value: this.formOrder.no,
              },
              {
                field: 'tag_ids20230501',
                value: this.formOrder.order.value,
                name: this.formOrder.ordername,
              },
              {
                field: 'ht_amount20230501',
                value: this.formOrder.orderMoney,
              },
              {
                field: 'apply_dept20230501',
                value: this.formOrder.dept,
                deptName: this.formOrder.deptName,
              },
              {
                field: 'ht_time20230501',
                value: this.formOrder.startTime,
                deptName: this.formOrder.startTime,
              },
              {
                field: 'xm_id20230501',
                value: this.formOrder.object.value,
                name: this.formOrder.objectName,
              },
              {
                field: 'ht_status20230501',
                value: this.formOrder.status,
              },
              {
                field: 'ht_duty20230501',
                value: this.formOrder.userId,
                userId: this.formOrder.userId,
                userName: this.formOrder.user,
              },
              {
                field: 'ht_supplierId20230501',
                value: this.formOrder.merchat
              },
              {
                field: 'ht_files20230501',
                value: this.images,
                filename: this.files
              },
              {
                field: 'ht_des20230501',
                value: this.formOrder.remarks
              }
            ];
            this.dialogLoading = true;

            if (this.formCode == 'CGHT' || this.formCode == 'XSHT'){
              let backRule = [];
              let error = 0;
              for (let i = 0; i < this.formOrder.backMoney.length; i++){
                if (this.formOrder.backMoney[i].rate == ''){
                  error++;
                  break;
                }
                if (this.formOrder.backMoney[i].rate != '' && !req.test(this.formOrder.backMoney[i].rate)){
                  error++;
                  break;
                }
                if (this.formOrder.backMoney[i].time == ''){
                  error++;
                  break;
                }

                contentJson.push({
                  field: 'ht_payStage20230501_' + (i+1),
                  value: this.formOrder.backMoney[i].stage
                },{
                  field: 'ht_payRate20230501_' + (i+1),
                  value: this.formOrder.backMoney[i].rate
                },{
                  field: 'ht_payAmount20230501_' + (i+1),
                  value: this.formOrder.backMoney[i].amount
                },{
                  field: 'ht_payTime20230501_' + (i+1),
                  value: this.formOrder.backMoney[i].time
                },{
                  field: 'ht_payDes20230501_' + (i+1),
                  value: this.formOrder.backMoney[i].des
                });
              }

              if (error > 0){
                this.dialogLoading = false;
                MessageWarning(this.$t("支付比例或时间设置有误(比例:1-100),请检查!"));
                return;
              }
            }

            params = {
              formCode: this.formCode,
              userId: this.loginUserId,
              applyContent: JSON.stringify(contentJson),
              submit: this.submitStatus
            }
            console.log(this.formCode);

            url = common.object_order_add;

            if (this.formOrder.id != ''){
              params['id'] = this.formOrder.id;
            }

            params = this.$qs.stringify(params);
            this.$axios.post(url, params, {loading: false}).then(res => {
              if (res.data.code == 200){
                this.dialogOrderVisible = false;
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
      handleOk(data,textarea){
        let params = {
          id: this.dataMainDetailObj.id ? this.dataMainDetailObj.id : this.dataMainDetailObj.id,
          status: 1,
          des: textarea
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_form_audit_handle, params).then(res => {
          if (res.data.code == 200){
            this.detailInfo(this.dataMainDetailObj, this.detailInfoType);
            this.init();
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      },
      handleNo(data,textarea){
        let params = {
          id: this.dataMainDetailObj.id ? this.dataMainDetailObj.id : this.dataMainDetailObj.id,
          status: 2,
          des: textarea
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_form_audit_handle, params).then(res => {
          if (res.data.code == 200){
            this.detailInfo(this.dataMainDetailObj, this.detailInfoType);
            this.init();
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      },
      handleCancel(data){
        let params = {
          id: this.dataMainDetailObj.id ? this.dataMainDetailObj.id : this.dataMainDetailObj.id,
          status: -1
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_form_audit_handle, params).then(res => {
          if (res.data.code == 200){
            this.detailInfo(this.dataMainDetailObj, this.detailInfoType);
            this.init();
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      },
      addTableItem(index){
        let obj = {
          stage: 1,
          rate: 1,
          amount: 0,
          time: '',
          des: ''
        };
        this.formOrder.backMoney.splice(index+1, 0, obj);
      },
      minTableItem(index){
        this.formOrder.backMoney.splice(index, 1);
      }
    }
  }
</script>

<style scoped>
.block-item-row{
  height: 35px;
  line-height: 35px;
}
.header-block{
  height: 40px;
  line-height: 40px;
}
.detail-top-block{
  border-radius: 5px;
  background: #ffffff;
  height: 100px;
}
.detail-block{
  border-radius: 5px;
  background: #ffffff;
  padding: 10px 10px;
}
.detail-top-item-green-block{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #67C23A;
  position: relative;
  margin: 0 auto;
}
.detail-top-item-warning-block{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  //background: #67C23A;
  position: relative;
  margin: 0 auto;
}
.detail-top-item-error-block{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #F56C6C;
  position: relative;
  margin: 0 auto;
}
.detail-top-item-default-block{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #C0C4CC;
  position: relative;
  margin: 0 auto;
}
.rp-img{
  height: 50px;
  width: 50px;
  border: 1px solid #dddddd;
}
</style>
