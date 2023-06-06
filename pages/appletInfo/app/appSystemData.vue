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
              <system-data-top-bar :form-id="formName"></system-data-top-bar>
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
                  <template v-if="formName == '合同管理'">
                    <el-button size="small" type="text" @click="returnMain($event)">
                      <i class="fa fa-arrow-left"></i>
                      {{$t("返回")}}
                    </el-button>
                    <el-button size="small" type="warning"  icon="el-icon-download" @click="addInfo($event, 2)">{{$t("新增合同")}}</el-button>
                  </template>
                  <template v-if="formName != '项目管理' && formName != '合同管理'">
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
            <system-data-table1 v-if="formName == '项目管理'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight2.height" @detailInfo="detailInfo($event, 1)"  @deleteInfo="deleteInfo($event, 1)" @printManage="printManage($event, 1)"></system-data-table1>
            <system-data-table2 v-if="formName == '合同管理'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height" @detailInfo="detailInfo($event, 2)"  @deleteInfo="deleteInfo($event, 2)" @printManage="printManage($event, 2)"></system-data-table2>
            <system-data-table3 v-if="formName == '应收应付'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height"></system-data-table3>
            <system-data-table4 v-if="formName == '发票管理'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height"></system-data-table4>
            <system-data-table5 v-if="formName == '交易流水'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height"></system-data-table5>
            <system-data-table6 v-if="formName == '报账/报销'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height"></system-data-table6>
            <system-data-table7 v-if="formName == '对公打款'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height"></system-data-table7>
            <system-data-table8 v-if="formName == '普通申请'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height"></system-data-table8>
            <system-data-table9 v-if="formName == '借款管理'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height"></system-data-table9>
            <system-data-table10 v-if="formName == '收款管理'" :form-id="formId" :table-data="tableDetailData" :table-height="tableHeight17.height"></system-data-table10>
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
            <el-input v-model="form.no" class="width-480"></el-input>
          </el-form-item>
          <el-form-item :label="$t('项目类型')" prop="type">
            <my-select :sel-value="form.type" :options="typeOptions" :width-style="480" @change="handleChange($event, 9)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('所属部门')" prop="dept">
            <el-select v-model="form.dept" multiple placeholder="请选择" style="width: 480px">
              <el-option
                v-for="item in deptOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <template>
            <el-row :gutter="16">
              <el-col :span="12">
                <el-form-item :label="$t('项目状态')" prop="status">
                  <my-select :width-style="182" :sel-value="form.status" :options="statusOptions" style="width: 100%" @change="handleChange($event, 11)"></my-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('负责人')" prop="user">
                  <my-select :width-style="182" :sel-value="form.user" :options="userOptions" @change="handleChange($event, 16)"></my-select>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
          <template>
            <el-row :gutter="16">
              <el-col :span="12">
                <el-form-item :label="$t('开始时间')" prop="startTime">
                  <my-date-picker :sel-value="form.startTime" width-style="182" @change="handleChange($event,13)"></my-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('结束时间')" prop="endTime">
                  <my-date-picker :sel-value="form.endTime" width-style="182" @change="handleChange($event,14)"></my-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
          <template>
            <el-row :gutter="16">
              <el-col :span="12">
                <el-form-item :label="$t('父级项目')" prop="parentObj">
                  <my-select :width-style="182" :sel-value="form.parentObj" :options="parendObjOptions" @change="handleChange($event, 15)"></my-select>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
          <el-form-item :label="$t('附件')">
            <div v-if="images.length > 0" v-for="(item, index) in images" :key="index" class="pull-left" style="position: relative;margin-right:10px;top: 10px">
              <i class="fa fa-close" style="position: absolute; right: -5px; top: -5px;font-size: 12px" @click="deleteRemoveImg(index)"></i>
              <i v-if="item.indexOf('.pdf') > -1" class="fa fa-file-pdf-o" style="height: 25px;width: 25px;font-size: 25px;position: relative;top: -2px;"></i>
              <i v-else-if="item.indexOf('.doc') > -1 || item.indexOf('.docx') > -1" class="fa fa-wordpress" style="height: 25px;width: 25px;font-size: 25px;position: relative;top: -2px;"></i>
              <img v-else :src="item" class="rp-img"/>
            </div>
            <upload-square :action="uploadFileUrl" max-size="20" :data="{path: 'PunishmentCancelApply'}" accept=".png,.jpg,.jpeg,.pdf,.doc,.docx" @success="uploadFileSuccess">
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
      <div slot="footer">
        <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okBudgetDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("提交审批")}}
        </el-button>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="dialogOrderVisible" size="600px" :title="$t('合同设置')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <el-form :model="formOrder" :rules="rules" ref="formOrder" label-width="100px">
          <el-form-item :label="$t('合同名称')" prop="name">
            <el-input v-model="formOrder.name" class="width-480"></el-input>
          </el-form-item>
          <el-form-item :label="$t('合同编号')" prop="no">
            <el-input v-model="formOrder.no" class="width-480"></el-input>
          </el-form-item>
          <el-form-item :label="$t('合同类型')" prop="type">
            <my-select :sel-value="formOrder.type" :options="typeOptions" :width-style="480" @change="handleChange($event, 1)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('关联单据')" prop="order">
            <my-select :sel-value="formOrder.order" :options="orderOptions" :width-style="480" @change="handleChange($event, 2)"></my-select>
          </el-form-item>
          <template>
            <el-row :gutter="16">
              <el-col :span="12">
                <el-form-item :label="$t('合同状态')" prop="status">
                  <my-select :width-style="182" :sel-value="formOrder.status" :options="statusOptions" style="width: 100%" @change="handleChange($event, 3)"></my-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('责任人')" prop="havePerson">
                  <my-select :width-style="182" :sel-value="formOrder.havePerson" :options="havePersionOptions" @change="handleChange($event, 8)"></my-select>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
          <template>
            <el-row :gutter="16">
              <el-col :span="12">
                <el-form-item :label="$t('合同金额')" prop="orderMoney">
                  <el-input v-model="formOrder.orderMoney" :placeholder="$t('请输入合同金额')" style="width: 182px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('所属部门')" prop="dept">
                  <my-select :width-style="182" :sel-value="formOrder.dept" :options="deptOptions" @change="handleChange($event, 5)"></my-select>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
          <template>
            <el-row :gutter="16">
              <el-col :span="12">
                <el-form-item :label="$t('开始时间')" prop="startTime">
                  <my-date-picker :sel-value="formOrder.startTime" width-style="182" @change="handleChange($event,9)"></my-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('供应商')" prop="merchat">
                  <my-select :width-style="182" :sel-value="formOrder.merchat" :options="merchatOptions" @change="handleChange($event, 6)"></my-select>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
          <template>
            <el-row :gutter="16">
              <el-col :span="12">
                <el-form-item :label="$t('关联项目')" prop="object">
                  <my-select :width-style="182" :sel-value="formOrder.object" :options="objectOptions" @change="handleChange($event, 7)"></my-select>
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
              <i v-if="item.indexOf('.pdf') > -1" class="fa fa-file-pdf-o" style="height: 25px;width: 25px;font-size: 25px;position: relative;top: -2px;"></i>
              <i v-else-if="item.indexOf('.doc') > -1 || item.indexOf('.docx') > -1" class="fa fa-wordpress" style="height: 25px;width: 25px;font-size: 25px;position: relative;top: -2px;"></i>
              <img v-else :src="item" class="rp-img"/>
            </div>
            <upload-square :action="uploadFileUrl" max-size="20" :data="{path: 'PunishmentCancelApply'}" accept=".png,.jpg,.jpeg,.pdf,.doc,.docx" @success="uploadFileSuccess">
              <div class="upload-block-class">
                <el-button type="warning" size="small"><span>{{$t("上传文件")}}</span></el-button>
              </div>
            </upload-square>
          </el-form-item>
        </el-form>

        <template>
          <div style="margin-left: 60px">
            <el-row>
              <el-col :span="12">
                <span class="color-text-default">{{$t('回款计划')}}</span>
              </el-col>
              <el-col :span="12" class="text-right">
                <span>{{$t('总金额')}}: 0</span>
                <span class="margin-left-5">{{$t('已添加')}}: 0</span>
                <span class="margin-left-5">{{$t('待添加')}}: 0</span>
              </el-col>
            </el-row>
          </div>
          <table class="custom-table" style="width: 520px;margin-top: 10px;font-size: 12px;margin-left: 60px">
            <tr>
              <th width="10%">{{$t("期数")}}</th>
              <th width="15%">{{$t("比例")}}</th>
              <th width="20%">{{$t("金额")}}</th>
              <th width="20%">{{$t("日期")}}</th>
              <th width="20%">{{$t("备注")}}</th>
              <th width="15%">{{$t("操作")}}</th>
            </tr>
            <tbody>
            <tr v-for="(item, index) in formOrder.backMoney" :key="item.id">
              <td>
                <my-select size="mini" :placeholder="$t('请选择')" :sel-value="item.type" :options="typeOptions" :width-style="90" @change="handleTableChange($event, index)"></my-select>
              </td>
              <td>
                <a href="javascript:;" class="font-size-12 color-grand">{{$t("编辑")}}</a>
              </td>
              <td>
                <el-input size="mini" style="width: 80px" v-model="item.budgetMoney"></el-input>
              </td>
              <td>
                <el-input size="mini" style="width: 80px" v-model="item.warningMoney"></el-input>
              </td>
              <td>{{item.usedMoney}}</td>
              <td>
                <i class="fa fa-plus color-success" @click="addTableItem(index)"></i>
                <i v-if="index != 0" class="fa fa-minus color-danger margin-left-5" @click="minTableItem(index)"></i>
              </td>
            </tr>
            </tbody>
          </table>
        </template>
      </div>
      <div slot="footer">
        <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okOrderDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("提交审批")}}
        </el-button>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="dialogObjServerDetail" size="600px" :title="$t('项目查看')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <div class="text-left">
          <el-button-group>
            <el-button size="small" :type="detailType == 1 ? 'primary' : 'default'" @click="changeDetailType($event ,1)">{{ $t("项目信息") }}</el-button>
            <el-button size="small" :type="detailType == 2 ? 'primary' : 'default'" @click="changeDetailType($event ,2)">{{ $t("审批详情") }}</el-button>
            <el-button size="small" :type="detailType == 3 ? 'primary' : 'default'" @click="changeDetailType($event ,3)">{{ $t("合同单据") }}</el-button>
          </el-button-group>
        </div>

        <div class="margin-top-20">
          <template v-if="detailType == 1">
            <div class="detail-block" :style="{height: drawHeight8.height}">
              <el-form label-width="100px">
                <el-form-item :label="$t('项目名称')">
                  <label>xxxxx</label>
                </el-form-item>
              </el-form>
              <el-form label-width="100px">
                <el-form-item :label="$t('项目编号')">
                  <label>xxxxx</label>
                </el-form-item>
              </el-form>
              <template>
                <el-row>
                  <el-col :span="12">
                    <el-form label-width="100px">
                      <el-form-item :label="$t('项目类型')">
                        <label>xxxxx</label>
                      </el-form-item>
                    </el-form>
                  </el-col>
                  <el-col :span="12">
                    <el-form label-width="100px">
                      <el-form-item :label="$t('项目预算')">
                        <label>xxxxx</label>
                      </el-form-item>
                    </el-form>
                  </el-col>
                </el-row>
              </template>
              <template>
                <el-row>
                  <el-col :span="12">
                    <el-form label-width="100px">
                      <el-form-item :label="$t('项目状态')">
                        <label>xxxxx</label>
                      </el-form-item>
                    </el-form>
                  </el-col>
                  <el-col :span="12">
                    <el-form label-width="100px">
                      <el-form-item :label="$t('审批状态')">
                        <label>xxxxx</label>
                      </el-form-item>
                    </el-form>
                  </el-col>
                </el-row>
              </template>
              <template>
                <el-row>
                  <el-col :span="12">
                    <el-form label-width="100px">
                      <el-form-item :label="$t('开始时间')">
                        <label>xxxxx</label>
                      </el-form-item>
                    </el-form>
                  </el-col>
                  <el-col :span="12">
                    <el-form label-width="100px">
                      <el-form-item :label="$t('结束时间')">
                        <label>xxxxx</label>
                      </el-form-item>
                    </el-form>
                  </el-col>
                </el-row>
              </template>
              <template>
                <el-row>
                  <el-col :span="12">
                    <el-form label-width="100px">
                      <el-form-item :label="$t('父级项目')">
                        <label>xxxxx</label>
                      </el-form-item>
                    </el-form>
                  </el-col>
                  <el-col :span="12">
                    <el-form label-width="100px">
                      <el-form-item :label="$t('负责人')">
                        <label>xxxxx</label>
                      </el-form-item>
                    </el-form>
                  </el-col>
                </el-row>
              </template>
              <el-form label-width="100px">
                <el-form-item :label="$t('附件')">
                  <label>xxxxx</label>
                </el-form-item>
              </el-form>
              <el-form label-width="100px">
                <el-form-item :label="$t('其他描述')">
                  <label>xxxxx</label>
                </el-form-item>
              </el-form>
            </div>
          </template>

          <template v-if="detailType == 2">
            <div class="detail-top-block" style="overflow-x: auto;padding: 20px 0px;white-space:nowrap;">
              <div :style="{width: 6 * (600/4)+'px'}">
                <div :style="{width: 600/4+'px'}" class="pull-left text-center" v-for="(n, index) in 6" :key="index">
                  <template v-if="index == 0">
                    <div class="text-center margin-bottom-5">
                      <span class="font-size-12"> &nbsp; </span>
                    </div>
                    <div class="detail-top-item-green-block">
                      <span class="font-size-12 color-white">{{$t("开始")}}</span>
                    </div>
                    <div class="text-center margin-top-5">
                      <span class="font-size-12">{{$t("提交")}}</span>
                    </div>
                  </template>
                  <template v-else-if="index == 6-1">
                    <div class="text-center margin-bottom-5">
                      <span class="font-size-12"> &nbsp; </span>
                    </div>
                    <div class="detail-top-item-default-block">
                      <span class="font-size-12 color-white">{{$t("结束")}}</span>
                    </div>
                    <div class="text-center margin-top-5">
                      <span class="font-size-12">{{$t("完成")}}</span>
                    </div>
                  </template>
                  <template v-else>
                    <div class="text-center margin-bottom-5">
                      <span class="font-size-12"> {{$t("待审核")}} </span>
                    </div>
                    <div class="detail-top-item-warning-block">
                      <div class="font-size-12 color-white moon-content-text-ellipsis-class">xxxxx</div>
                    </div>
                    <div class="text-center margin-top-5">
                      <span class="font-size-12">xxxx</span>
                    </div>
                  </template>
                </div>
                <div class="moon-clearfix"></div>
              </div>
            </div>

            <div class="detail-block margin-top-20">
              <el-steps direction="vertical" space="60px">
                <el-step v-for="(item, index) in 10" :key="index">
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
                    </div>
                  </div>
                </el-step>
              </el-steps>
            </div>
          </template>

          <template v-if="detailType == 3">
            <div class="detail-block" :style="{height: drawHeight8.height}">
              <div>
                <span>{{$t("被下列合同/单据关联")}}</span>
              </div>
              <div class="margin-top-10">
                <el-table
                  :data="tableOrderDetailData"
                  header-cell-class-name="custom-table-cell-bg"
                  size="small"
                  row-key="id"
                  border
                  :max-height="tableHeight.height"
                  style="width: 100%">
                  <el-table-column
                    align="center"
                    :label="$t('类型')">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.category_name}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          <span>{{scope.row.category_name}}</span>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    :label="$t('名称')">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.category_name}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          <span>{{scope.row.category_name}}</span>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    :label="$t('编号')">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.category_name}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          <span>{{scope.row.category_name}}</span>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    :label="$t('金额')">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.category_name}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          <span>{{scope.row.category_name}}</span>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    :label="$t('状态')">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.category_name}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          <span>{{scope.row.category_name}}</span>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    label="操作"
                    width="80">
                    <template slot-scope="scope">
                      <a href="javascript:;" class="color-success" @click="detailOrderInfo(scope.row, false)">{{$t("查看")}}</a>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div slot="footer" class="padding-lr-10">
        <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
<!--        <el-button size="small" type="primary" @click="dialogLoading == false ? okOrderEditDialog() : ''">-->
<!--          <i class="el-icon-loading" v-if="dialogLoading"></i>-->
<!--          {{$t("编辑")}}-->
<!--        </el-button>-->
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDetailDialog" :visible="dialogOrderDetailVisible" size="550px" :title="$t('详细信息')" @right-close="cancelDrawDetailDialog">

    </drawer-layout-right>

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

  export default {
    components: {
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
        tableOrderDetailData: [1,2,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
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
        currentNodeKey: '',
        types: [],
        detailType: 1,
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
        mainMenuType: 1,
        subMenuType: 4,
        mainMenu: 1,
        searchDetailData: [],
        uploadFileUrl: common.upload_file,
        images: [],
        formOrder: {
          name: '',
          no: '',
          type: '',
          order: '',
          status: '',
          budget: '',
          orderMoney: '',
          dept: '',
          merchat: '',
          havePerson: '',
          object: '',
          startTime: '',
          remarks: '',
          backMoney: ''
        },
        form: {
          name: '',
          no: '',
          type: '',
          dept: [],
          status: '',
          budget: '',
          startTime: '',
          endTime: '',
          parentObj: '',
          user: '',
          remarks: '',
        }
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
            this.tableDetailData = [1,2];
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
      initAuditDetailList(id, type){
        let params = {
          id: id
        };
        this.$axios.get(common.server_form_audit_query, {params: params}).then(res=>{
          if (res.data.code == 200){
            if (res.data.data){
              if (type == 'main'){
                this.detailData = res.data.data;
                this.detailApplyAuditList = res.data.data.handleList;
              }else if (type == 'check'){
                this.detailCheckData = res.data.data;
                this.detailCheckApplyAuditList = res.data.data.handleList;
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
              }
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
        this.formId = item.id;
        this.formName = item.formName;
        this.searchDetailType = item.applet_type;
        await this.getAppletSystemServerInfo();
        let data = this.dataAppletSystemServer;
        if (data && data.length > 0 && data[0]['children']){
          this.formId = data[0]['children'][0].id;
          this.formName = data[0]['children'][0].label;
          this.defaultExpandedKeys = [data[0].id, data[0]['children'][0].id];
          this.currentNodeKey = data[0]['children'][0].id;
        }

        this.init();
      },
      detailInfo(item, type){
        if (type == 1){
          this.dialogObjServerDetail = true;
        }else if (type == 2){
          this.dialogOrderServerDetail = true;
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
      readFile(file){//预览
        ImagePreview({
          images: [file],
          closeable: false,
        });
      },
      handleCheckCancel(){
        this.dialogServerCheckDetail = false;
      },
      changeDetailType(event, type){
        this.detailType = type;
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
          name: '',
          no: '',
          type: '',
          dept: [],
          status: '',
          budget: '',
          startTime: '',
          endTime: '',
          parentObj: '',
          user: '',
          remarks: '',
        };

        this.formOrder = {
          name: '',
          no: '',
          type: '',
          order: '',
          status: '',
          budget: '',
          orderMoney: '',
          dept: '',
          merchat: '',
          havePerson: '',
          object: '',
          startTime: '',
          remarks: '',
          backMoney: ''
        };

        this.detailType = 1;
        this.dialogOrderVisible = event;
        this.dialogBudgetVisible = false;
        this.dialogObjServerDetail = false;
        this.dialogOrderServerDetail = false;
        this.dialogOrderDetailVisible = false;
      },
      closeDrawerDetailDialog(){
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
      handleChange(event, type){
        if (type == 1){
          this.formOrder.type = event;
        }else if (type == 2){
          this.formOrder.order = event;
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
          this.formName = data.label;
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
      addInfo(event, type){
        if (type == 1){
          this.dialogBudgetVisible = true;
        }else if (type == 2){
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
        }else {

        }
      },
      detailOrderInfo(){
        this.dialogOrderDetailVisible = true;
      },
      okOrderEditDialog(){

      },
      okBudgetDialog(){

      },
      okOrderDialog(){

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
  background: #67C23A;
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
</style>
