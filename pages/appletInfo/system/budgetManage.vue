<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">预算管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="6">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("新增预算")}}</el-button>
          </el-col>
          <el-col :span="18" class="text-right">
            <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('请输入信息')" @click="search"></my-input-button>
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
            :label="$t('预算名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.budget_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.budget_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('关联单据')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.form_name_list}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.form_name_list}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('关联费用')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.cost_name_list}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.cost_name_list}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('时间范围')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <template v-if="scope.row.time_type == 4">
                    <span>{{scope.row.time_year}}</span>
                    -
                    <span>{{scope.row.time_month}}</span>
                  </template>
                  <template v-if="scope.row.time_type == 3">
                    <span>{{scope.row.time_year}}</span>
                    -
                    <span>{{scope.row.time_month}}{{$t("季度")}}</span>
                  </template>
                  <template v-if="scope.row.time_type == 2">
                    <span v-if="scope.row.time_month == 1">{{$t("上半年")}}</span>
                    <span v-if="scope.row.time_month == 2">{{$t("下半年")}}</span>
                  </template>
                  <template v-if="scope.row.time_type == 1">
                    <span>{{scope.row.time_year}}</span>
                  </template>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <template v-if="scope.row.time_type == 4">
                    <span>{{scope.row.time_year}}</span>-<span>{{scope.row.time_month}}</span>
                  </template>
                  <template v-if="scope.row.time_type == 3">
                    <span>{{scope.row.time_year}}</span>-<span>{{scope.row.time_month}}{{$t("季度")}}</span>
                  </template>
                  <template v-if="scope.row.time_type == 2">
                    <span v-if="scope.row.time_month == 1">{{$t("上半年")}}</span>
                    <span v-if="scope.row.time_month == 2">{{$t("下半年")}}</span>
                  </template>
                  <template v-if="scope.row.time_type == 1">
                    <span>{{scope.row.time_year}}</span>
                  </template>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('预算')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.budget_used}}/{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.budget_used}}/{{scope.row.budget_total}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('已占用')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.budget_used}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.budget_used}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('预警状态')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <span v-if="scope.row.warning_limit == 0">{{$t("无")}}</span>
                  <span v-if="scope.row.warning_limit == 1">{{$t("仅提醒")}}</span>
                  <span v-if="scope.row.warning_limit == 2">{{$t("禁止提交")}}</span>
                  <span v-if="scope.row.warning_limit == 3">{{$t("审批加签")}}</span>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span v-if="scope.row.warning_limit == 0">{{$t("无")}}</span>
                  <span v-if="scope.row.warning_limit == 1">{{$t("仅提醒")}}</span>
                  <span v-if="scope.row.warning_limit == 2">{{$t("禁止提交")}}</span>
                  <span v-if="scope.row.warning_limit == 3">{{$t("审批加签")}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('启用状态')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <span v-if="scope.row.enable == true" class="color-success">{{$t("启用")}}</span>
                  <span v-if="scope.row.enable == false" class="color-danger">{{$t("禁用")}}</span>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span v-if="scope.row.enable == true" class="color-success">{{$t("启用")}}</span>
                  <span v-if="scope.row.enable == false" class="color-danger">{{$t("禁用")}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="140">
            <template slot-scope="scope">
              <i v-if="scope.row.enable" class="fa fa-stop-circle color-warning margin-right-5" @click="statusInfo(scope.row, false)"></i>
              <i v-if="!scope.row.enable" class="fa fa-play-circle color-success margin-right-5" @click="statusInfo(scope.row, true)"></i>

              <i class="fa fa-edit color-grand margin-right-5" @click="editInfo(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <drawer-layout-right tabindex="0" :wrapper-closable="false" theme="light" @close="closeDialog" @changeDrawer="closeDialog" :visible="dialogType" size="850px" :title="$t('预算设置')" @right-close="cancelDialog">
      <div slot="content">
        <div class="margin-top-10">
          <el-form :model="form" :rules="rules" ref="form" label-width="100px">
            <el-form-item :label="$t('预算名称')" prop="name">
              <el-input v-model="form.name" class="width-350"></el-input>
            </el-form-item>
            <el-form-item :label="$t('关联单据')" prop="order">
              <el-select multiple v-model="form.order" style="width: 350px" @change="handleChange($event, 1)" placeholder="请选择">
                <el-option
                  v-for="item in filterBillTypes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="$t('关联费用')" prop="money">
              <el-select multiple v-model="form.money" style="width: 350px" @change="handleChange($event, 2)" placeholder="请选择">
                <el-option
                  v-for="item in moneyOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="$t('时间范围')" style="position: relative">
              <div class="layout-inline">
                <my-select :sel-value="form.time1" :options="time1Options" :placeholder="$t('周期')" :width-style="113" @change="handleTimeChange($event, 1)" class="layout-item"></my-select>
                <my-select :sel-value="form.time2" :options="time2Options" :placeholder="$t('财年')" :width-style="113" @change="handleTimeChange($event, 2)" class="layout-item"></my-select>
                <my-select v-if="form.time1 != 1" :sel-value="form.time3" :options="time3Options" :placeholder="timeExtra" :width-style="113" @change="handleTimeChange($event, 3)" class="layout-item"></my-select>
              </div>
              <div style="position: absolute;left: 0px;top: 35px">
                <span class="color-danger">{{ errorTime }}</span>
              </div>
            </el-form-item>
            <el-form-item :label="$t('超标限制')">
              <div>
                <el-radio-group v-model="form.maxLimit">
                  <el-radio label="1">{{ $t('仅提醒') }}</el-radio>
                  <el-radio label="2">{{ $t('禁止提交') }}</el-radio>
                  <el-radio label="3">{{ $t('审批加签') }}</el-radio>
                </el-radio-group>
                <my-select v-if="form.maxLimit == 3" :placeholder="$t('请选择审批流程')" :sel-value="form.maxLimitExtra" :options="processOptions" :width-style="350" @change="handleChange($event, 4)"></my-select>
              </div>
            </el-form-item>
            <el-form-item :label="$t('预警限制')">
              <div>
                <el-radio-group v-model="form.warningLimit">
                  <el-radio label="0">{{ $t('无') }}</el-radio>
                  <el-radio label="1">{{ $t('仅提醒') }}</el-radio>
                  <el-radio label="2">{{ $t('禁止提交') }}</el-radio>
                  <el-radio label="3">{{ $t('审批加签') }}</el-radio>
                </el-radio-group>
                <my-select v-if="form.warningLimit == 3" :placeholder="$t('请选择审批流程')" :sel-value="form.warningLimitExtra" :options="processOptions" :width-style="350" @change="handleChange($event, 3)"></my-select>
              </div>
            </el-form-item>
            <el-form-item :label="$t('转结开关')">
              <div class="layout-inline">
                <el-radio-group class="layout-item" v-model="form.changeSwitch">
                  <el-radio :label="true">{{ $t('是') }}</el-radio>
                  <el-radio :label="false">{{ $t('否') }}</el-radio>
                </el-radio-group>
                <span class="font-size-12 color-muted margin-left-5">
                  <i class="fa fa-info-circle"></i>
                  {{ $t('未用完预算自动结转到次年/次月') }}
                </span>
              </div>
            </el-form-item>
            <el-form-item :label="$t('可见范围')">
              <div>
                <el-radio-group v-model="form.rangeType" @change="handleSeeChange">
                  <el-radio label="0">{{ $t('全部可见') }}</el-radio>
                  <el-radio label="1">{{ $t('部分可见') }}</el-radio>
                </el-radio-group>
              </div>
              <div class="margin-top-5" v-if="form.rangeType == 1">
                <div>
                  <el-button :type="selRangeType == 1 ? 'success' : ''" size="mini" @click="handleSelRangeType($event,1)">{{ $t('组织架构') }}</el-button>
                  <el-button :type="selRangeType == 2 ? 'success' : ''" size="mini" @click="handleSelRangeType($event,2)">{{ $t('部门') }}</el-button>
                  <el-button :type="selRangeType == 3 ? 'success' : ''" size="mini" @click="handleSelRangeType($event,3)">{{ $t('角色') }}</el-button>
                </div>
                <div class="margint-top-5 block-div-class">
                  <div v-show="selRangeType == 1">
                    <div class="range-left">
                      <my-el-tree-block type="4" sub-type="" :show-filter="false" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree-block>
                    </div>
                    <div class="range-right padding-lr-5">
                      <div>
                        <el-row>
                          <el-col :span="24" class="text-right">
                            <my-input-button ref="teacher" size="mini" plain width-class="width: 120px" type="success" :clearable="true" :placeholder="$t('请输入信息')" @click="searchSel"></my-input-button>
                          </el-col>
                        </el-row>
                      </div>
                      <div class="custom-table-el">
                        <el-table
                          ref="tableRefSel"
                          v-loading="teacherLoading"
                          :data="tableSelData"
                          header-cell-class-name="custom-table-cell-bg"
                          size="small"
                          :row-key="getRowKeys"
                          max-height="370px"
                          style="width: 100%"
                          @selection-change="handleSelectionChange">
                          <el-table-column
                            :reserve-selection="true"
                            type="selection"
                            align="center"
                            width="55">
                          </el-table-column>
                          <el-table-column
                            align="center"
                            :label="$t('名称')">
                            <template slot-scope="scope">
                              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                                <div class="text-center">{{scope.row.real_name}}</div>
                                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                                {{scope.row.real_name}}
                              </span>
                              </el-popover>
                            </template>
                          </el-table-column>
                          <el-table-column
                            align="center"
                            :label="$t('部门')">
                            <template slot-scope="scope">
                              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                                <div class="text-center">{{scope.row.department_name}}</div>
                                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                                {{scope.row.department_name}}
                              </span>
                              </el-popover>
                            </template>
                          </el-table-column>
                          <el-table-column align="center" label="性别" :show-overflow-tooltip="true">
                            <template slot-scope="scope">
                              <my-sex :sex="scope.row.sex" tag="text"></my-sex>
                            </template>
                          </el-table-column>
                        </el-table>
                        <div class="text-right" style="height: 35px;line-height: 35px">
                          <el-pagination
                            background
                            :pager-count="pageCount"
                            :page-sizes="[10, 20, 50, 100]"
                            layout="sizes, prev, pager, next"
                            :total="totalTeacher"
                            :current-page="pageTeacher"
                            :page-size="numTeacher"
                            @size-change="sizeTeacherChange"
                            @current-change="currentTeacherPage">
                          </el-pagination>
                        </div>
                      </div>
                    </div>
                    <div class="moon-clearfix"></div>
                  </div>
                  <div v-show="selRangeType == 2">
                    <div class="rang-block">
                      <my-el-tree-block ref="deptRefSel" type="4" sub-type="" node-key="department_path" :show-filter="false" :show-campus="false" :show-checkbox="true" :defaultCheckedKeys="defaultCheckedKeys"></my-el-tree-block>
                    </div>
                  </div>
                  <div v-show="selRangeType == 3">
                    <div class="rang-block">
                      <my-el-tree ref="roleRefSel" type="150" sub-type="" :show-filter="false" :show-campus="false" :show-checkbox="true" :defaultCheckedKeys="defaultCheckedRoleKeys"></my-el-tree>
                    </div>
                  </div>
                </div>
              </div>
            </el-form-item>
          </el-form>

          <div>
            <div style="margin-left: 32px;">
              <span>{{$t('规则设置')}}</span>
            </div>
            <table class="custom-table" style="width: 780px;margin-left: 32px;margin-top: 10px;font-size: 12px">
              <tr>
                <th width="20%">{{$t("预算类别")}}</th>
                <th width="15%">{{$t("具体范围")}}</th>
                <th width="15%">{{$t("预算额度")}}({{$t("元")}})</th>
                <th width="15%">{{$t("预警金额")}}({{$t("元")}})</th>
                <th width="10%">{{$t("转结金额")}}</th>
                <th width="10%">{{$t("已用金额")}}</th>
                <th width="15%">{{$t("操作")}}</th>
              </tr>
              <tbody>
              <tr v-for="(item, index) in form.rule" :key="item.id">
                <td>
                  <my-select size="mini" :placeholder="$t('请选择')" :sel-value="item.type" :options="typeOptions" :width-style="100" @change="handleTableChange($event, index)"></my-select>
                </td>
                <td>
                  <template v-if="item.type != 3">
                    <a href="javascript:;" class="font-size-12 color-grand" @click="handleEdit($event, index)">{{$t("编辑")}}</a>
                    <span v-if="item.range.length > 0" class="color-success font-size-12">({{$t("已设置")}})</span>
                    <span v-if="item.range.length == 0" class="color-muted font-size-12">({{$t("未设置")}})</span>
                  </template>
                  <span v-else-if="item.type == 3">{{$t("提交人")}}</span>
                  <span v-else>--</span>

                </td>
                <td>
                  <el-input size="mini" style="width: 80px" v-model="item.budgetMoney"></el-input>
                </td>
                <td>
                  <el-input size="mini" style="width: 80px" v-model="item.warningMoney"></el-input>
                </td>
                <td>{{item.changeMoney}}</td>
                <td>{{item.usedMoney}}</td>
                <td>
                  <i class="fa fa-plus color-success" @click="addTableItem(index)"></i>
                  <i v-if="index != 0" class="fa fa-minus color-danger margin-left-5" @click="minTableItem(index)"></i>
                </td>
              </tr>
              </tbody>
            </table>
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
    </drawer-layout-right>

    <drawer-layout-right theme="light" tabindex="0" :wrapper-closable="false" @close="closeEditDialog" @changeDrawer="closeEditDialog" :visible="dialogEdit" size="650px" :title="$t('范围设置')" @right-close="cancelEditDialog">
      <div slot="content">
        <div class="margin-top-10">
          <my-el-tree-block v-if="dialogEditType == 1" ref="deptBlockRefSel" type="4" sub-type="" node-key="department_path" :show-filter="false" :show-campus="false" :show-checkbox="true" :defaultCheckedKeys="defaultCheckedKeys"></my-el-tree-block>
          <my-el-tree-block v-if="dialogEditType == 2" ref="deptBlockRefSel" type="122" sub-type="" node-key="id" :show-filter="false" :show-campus="false" :show-checkbox="true" :defaultCheckedKeys="defaultCheckedKeys"></my-el-tree-block>
          <my-el-tree-block v-if="dialogEditType == 5" ref="deptBlockRefSel" type="123" sub-type="" node-key="id" :show-filter="false" :show-campus="false" :show-checkbox="true" :defaultCheckedKeys="defaultCheckedKeys"></my-el-tree-block>
          <my-el-tree-block v-if="dialogEditType == 4" ref="deptBlockRefSel" type="124" sub-type="" node-key="id" :show-filter="false" :show-campus="false" :show-checkbox="true" :defaultCheckedKeys="defaultCheckedKeys"></my-el-tree-block>
        </div>
      </div>
      <div slot="footer">
        <el-button size="small" @click="cancelEditDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okEditDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {inArray, MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import appTypeValidater from "~/utils/validater/appTypeValidater";
  import budgetValidater from "~/utils/validater/budgetValidater";
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";
  import MyElTreeBlock from "~/components/tree/MyElTreeBlock";

  export default {
    components: {MyElTreeBlock, DrawerLayoutRight},
    mixins: [mixins, budgetValidater],
    data(){
      return {
        pageCount: 5,
        pageTeacher: 1,
        numTeacher: 20,
        totalTeacher: 0,
        subTitle: '',
        tableData: [],
        tableSelData: [],
        dialogType: false,
        visibleConfim: false,
        dialogLoading: false,
        dialogEdit: false,
        teacherLoading: false,
        dialogIndex: '',
        dialogEditType: '',
        searchKey: '',
        timeExtra: '',
        orderOptions: [],
        moneyOptions: [],
        processOptions: [],
        costOptions: [],
        defaultCheckedKeys: [],
        defaultCheckedRoleKeys: [],
        rowSelectFlag: false,
        searchTeacherKey: '',
        selRangeType: 1,
        typeOptions: [
          {label: this.$t("按部门"), text: this.$t("按部门"), value: 1},
          {label: this.$t("按项目"), text: this.$t("按项目"), value: 2},
          {label: this.$t("按提交人"), text: this.$t("按提交人"), value: 3},
          {label: this.$t("按标签"), text: this.$t("按标签"), value: 4},
          {label: this.$t("按合同"), text: this.$t("按合同"), value: 5}
        ],
        errorTime: '',
        time1Options: [
          {label: this.$t("月"), text: this.$t("月"), value: 4},
          {label: this.$t("季度"), text: this.$t("季度"), value: 3},
          {label: this.$t("半年度"), text: this.$t("半年度"), value: 2},
          {label: this.$t("年度"), text: this.$t("年度"), value: 1}
        ],
        time2Options: [],
        time3Options: [],
        form: {
          id: '',
          name: '',
          order: [],
          money: [],
          time1: '',
          time2: '',
          time3: '',
          maxLimit: '1',
          maxLimitExtra: '',
          warningLimit: '0',
          warningLimitExtra: '',
          changeSwitch: true,
          process: '',
          userRange: [],
          deptRange: [],
          roleRange: [],
          userEditRange: [],
          rangeType: '0',
          rule: [
            {
              type: '',
              range: [],
              budgetMoney: '0',
              warningMoney: '0',
              changeMoney: '0',
              usedMoney: '0/0'
            }
          ]
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
          searchKey: this.searchKey
        };
        this.$axios.get(common.budget_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initFlow(formId){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.server_form_template_form_process_page, {params: params}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.list.length; i++){
              array.push({
                label: res.data.data.list[i].process_name,
                value: res.data.data.list[i].id+"",
              });
            }
            this.processOptions = array;
          }
        });
      },
      initMoney(){
        let params = {};
        this.$axios.get(common.cost_list, {params: params}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i].cost_name,
                text: res.data.data[i].cost_name,
                value: res.data.data[i].cost_id,
              });
            }
            this.moneyOptions = array;
          }
        });
      },
      initTeacher(){
        let params = {
          page: this.pageTeacher,
          num: this.numTeacher,
          deleted: 0,
          departPath: this.selTreeId,
        };
        params['realName'] = this.searchTeacherKey['input'];
        this.$axios.get(common.teacher_list, {params: params}).then(res => {
          if (res.data.data){
            this.tableSelData = res.data.data.page.list;
            this.totalTeacher = res.data.data.page.totalCount;
            this.numTeacher = res.data.data.page.num;
            this.pageTeacher = res.data.data.page.currentPage;

            setTimeout(() => {
              this.rowSelectFlag = true;
              let arr = this.form.userRange.length > 0 ? JSON.parse(JSON.stringify(this.form.userRange)) : [];
              for (let i = 0; i < this.tableSelData.length; i++){
                let sel = inArray(this.tableSelData[i], arr, 'user_id');
                if (sel > -1){
                  if (this.$refs['tableRefSel']){
                    this.$refs.tableRefSel.toggleRowSelection(this.tableSelData[i], true);
                  }
                }
              }
              this.rowSelectFlag = false;
            },0);

            this.teacherLoading = false;
          }
        });
      },
      initSelTeacher(data){
        let roleRange = data.roleRange;
        let userRange = data.userRange;
        let deptRange = data.deptRange;
        let roleArr = [];
        let userArr = [];
        let deptArr = [];
        for (let i = 0; i < roleRange.length; i++){
          roleArr.push(roleRange[i].ranges);
        }
        for (let i = 0; i < deptRange.length; i++){
          deptArr.push(deptRange[i].ranges);
        }
        for (let i = 0; i < userRange.length; i++){
          userArr.push({
            user_id: userRange[i].ranges
          });
        }

        console.log(userArr);
        this.form.userRange = userArr;
        this.defaultCheckedRoleKeys = roleArr;
        this.defaultCheckedKeys = deptArr;

        this.pageTeacher = 1;
        this.teacherLoading = true;
        setTimeout(() => {
          this.initTeacher();
        },800);
      },
      sizeTeacherChange(event){
        this.pageTeacher = 1;
        this.numTeacher = event;
        this.initTeacher();
      },
      currentTeacherPage(event){
        this.pageTeacher = event;
        this.initTeacher();
      },
      searchSel(event){
        this.searchTeacherKey = event;
        this.initTeacher();
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      addInfo(){
        this.pageTeacher = 1;
        this.teacherLoading = true;
        setTimeout(() => {
          this.initTeacher();
        },800);

        this.initFlow();
        this.initMoney();
        this.dialogType = true;
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
      editInfo(item){
        let params = {
          budgetId: item.id
        };
        this.$axios.get(common.budget_info, {params: params}).then(res => {
          if (res.data.data){
            let costIdList = [];
            if (res.data.data.cost_id_list && res.data.data.cost_id_list != ''){
              let costIdTempList = res.data.data.cost_id_list.split(",");
              for (let i = 0; i < costIdTempList.length; i++){
                costIdList.push(parseInt(costIdTempList[i]));
              }
            }

            let formCodeList = [];
            if (res.data.data.form_code_list && res.data.data.form_code_list != ''){
              let formIdTempList = res.data.data.form_code_list.split(",");
              for (let i = 0; i < formIdTempList.length; i++){
                formCodeList.push(formIdTempList[i]);
              }
            }

            let ruleList = [];
            let ruleTempList = res.data.data.budgetRuleList;
            for (let i = 0; i < ruleTempList.length; i++){
              let ruleRangeList = [];
              if (ruleTempList[i].rule_range_list && ruleTempList[i].rule_range_list != ''){
                ruleRangeList = ruleTempList[i].rule_range_list.split(",");
              }
              ruleList.push({
                id: ruleTempList[i].id,
                type: ruleTempList[i].rule_type,
                range: ruleTempList[i].rule_type == 3 ? [] : ruleRangeList,
                budgetMoney: ruleTempList[i].budget_total,
                warningMoney: ruleTempList[i].budget_warn,
                changeMoney: ruleTempList[i].budget_transfer,
                usedMoney: ruleTempList[i].budget_used+"/"+ruleTempList[i].budget_total,
              });
            }

            this.form = {
              id: item.id,
              name: item.budget_name,
              order: formCodeList,
              money: costIdList,
              time1: item.time_type,
              time2: item.time_year,
              time3: item.time_month,
              maxLimit: item.excess_limit+'',
              maxLimitExtra: item.excess_process_id ? item.excess_process_id+'' : '',
              warningLimit: item.warning_limit+'',
              warningLimitExtra: item.warning_process_id ? item.warning_process_id+'' : '',
              changeSwitch: item.transfer,
              process: '',
              userRange: [],
              deptRange: [],
              roleRange: [],
              userEditRange: [],
              rangeType: item.range_type+'',
              rule: ruleList
            };
            this.initSelTeacher(res.data.data);
          }
        });

        let timeYear = [];
        let timeMonth = [];
        this.timeExtra = '';

        timeYear = this.initYear();
        this.time2Options = timeYear;

        if (item.time_type == 4){
          this.timeExtra = this.$t("月份");
          timeMonth = this.initMonth();
          this.time3Options = timeMonth;
        }else if (item.time_type == 3){
          this.timeExtra = this.$t("季度");
          timeMonth = this.initJD();
          this.time3Options = timeMonth;
        }else if (item.time_type == 2){
          this.timeExtra = this.$t("年度");
          timeMonth = this.initND();
          this.time3Options = timeMonth;
        }

        this.initMoney();
        this.initFlow();
        this.dialogType = true;
      },
      deleteInfo(item){
        this.form.id = item.id;
        this.visibleConfim = true;
      },
      statusInfo(item, status){
        let params = {
          budgetId: item.id,
          enable: status
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.budget_enable, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      nodeClick(data){
        this.selTreeId = data.id ? data.id : '';
        this.initTeacher();
      },
      nodeChange(data, checked, indeterminate){
        console.log(data, checked, indeterminate);
      },
      handleChange(event, type){
        if (type == 1){
          this.form.order = event;
        }else if (type == 2){
          this.form.money = event;
        }else if (type == 3){
          this.form.warningLimitExtra = event;
        }else if (type == 4){
          this.form.maxLimitExtra = event;
        }
      },
      handleTimeChange(event, type){
        if (type == 1){
          let timeYear = [];
          let timeMonth = [];
          this.form.time1 = event;
          this.form.time2 = '';
          this.form.time3 = '';
          this.timeExtra = '';

          timeYear = this.initYear();
          this.time2Options = timeYear;

          if (event == 4){
            this.timeExtra = this.$t("月份");
            timeMonth = this.initMonth();
            this.time3Options = timeMonth;
          }else if (event == 3){
            this.timeExtra = this.$t("季度");
            timeMonth = this.initJD();
            this.time3Options = timeMonth;
          }else if (event == 2){
            this.timeExtra = this.$t("年度");
            timeMonth = this.initND();
            this.time3Options = timeMonth;
          }

        }else if (type == 2){
          this.form.time2 = event;
        }else if (type == 3){
          this.form.time3 = event;
        }
      },
      initYear(){
        let timeYear = [];
        for (let i = 0; i < 5; i++){
          let yearInt = this.$moment().format("YYYY");
          let year = parseInt(yearInt) + i;
          timeYear.push({label: year, text: year, value: year},)
        }
        return timeYear;
      },
      initMonth(){
        let timeMonth = [];
        for (let i = 0; i < 12; i++){
          let month = i + 1;
          timeMonth.push({label: month+"月", text: month+"月", value: month},)
        }
        return timeMonth;
      },
      initJD(){
        let timeMonth = [];
        for (let i = 0; i < 4; i++){
          let month = i + 1;
          timeMonth.push({label: month+"季度", text: month+"季度", value: month},)
        }
        return timeMonth;
      },
      initND(){
        let timeMonth = [];
        timeMonth = [
          {label: "上半年", text: "上半年", value: 1},
          {label: "下半年", text: "下半年", value: 2}
        ];
        return timeMonth;
      },
      handleTableChange(event, index){
        this.$set(this.form.rule[index], 'type', event);
      },
      handleEdit(event, index){
        this.dialogIndex = index;
        this.dialogEditType = this.form.rule[index].type;
        this.defaultCheckedKeys = this.form.rule[index].range;
        this.defaultCheckedKeysBak = this.form.rule[index].range;
        console.log(this.form.rule[index].type);

        if(this.$refs['deptBlockRefSel'] && this.form.rule[index].type == 1){
          this.$refs.deptBlockRefSel.$refs.tree.setCheckedKeys(this.form.rule[index].range);
        }else if(this.$refs['deptBlockRefSel'] && this.form.rule[index].type == 2){
          this.$refs.deptBlockRefSel.$refs.tree.setCheckedKeys(this.form.rule[index].range);
        }else if(this.$refs['deptBlockRefSel'] && this.form.rule[index].type == 4){
          this.$refs.deptBlockRefSel.$refs.tree.setCheckedKeys(this.form.rule[index].range);
        }else if(this.$refs['deptBlockRefSel'] && this.form.rule[index].type == 5){
          this.$refs.deptBlockRefSel.$refs.tree.setCheckedKeys(this.form.rule[index].range);
        }

        this.dialogEdit = true;
      },
      addTableItem(index){
        let obj = {
          type: '',
          range: [],
          budgetMoney: '0',
          warningMoney: '0',
          changeMoney: '0',
          usedMoney: '0/0'
        };
        this.form.rule.splice(index+1, 0, obj);
      },
      minTableItem(index){
        this.form.rule.splice(index, 1);
      },
      closeDialog(event){
        this.form = {
          id: '',
          name: '',
          order: [],
          money: [],
          time1: '',
          time2: '',
          time3: '',
          maxLimit: '1',
          maxLimitExtra: '',
          warningLimit: '0',
          warningLimitExtra: '',
          changeSwitch: true,
          userRange: [],
          deptRange: [],
          roleRange: [],
          userEditRange: [],
          rangeType: '0',
          rule: [
            {
              type: '',
              range: '',
              budgetMoney: '0',
              warningMoney: '0',
              changeMoney: '0',
              usedMoney: '0/0'
            }
          ]
        };
        this.subTitle = "";
        this.errorTime = '';
        this.selRangeType = 1;
        this.searchTeacherKey = '';
        this.rowSelectFlag = false;
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      cancelDialog(){
        this.dialogType = false;
      },
      closeEditDialog(event){
        this.dialogIndex = '';
        this.dialogEditType = '';
        this.dialogEdit = false;
      },
      cancelEditDialog(){
        this.defaultCheckedKeys = this.form.rule[this.dialogIndex].range;
        this.defaultCheckedKeysBak = [];
        this.dialogIndex = '';
        if(this.$refs['deptBlockRefSel']){
          console.log(this.defaultCheckedKeys);
          this.$refs.deptBlockRefSel.$refs.tree.setCheckedKeys([]);
        }
        this.dialogEdit = false;
      },
      okEditDialog(){
        if (this.form.rule[this.dialogIndex].type == 1){
          let deptArr  = this.setAreaChildren(this.$refs.deptBlockRefSel.$refs.tree.getCheckedNodes(), 'dept');
          this.$set(this.form.rule[this.dialogIndex], 'range', deptArr);
        }else if (this.form.rule[this.dialogIndex].type == 2){
          let deptArr  = this.setAreaChildren(this.$refs.deptBlockRefSel.$refs.tree.getCheckedNodes());
          this.$set(this.form.rule[this.dialogIndex], 'range', deptArr);
        }else if (this.form.rule[this.dialogIndex].type == 4){
          let deptArr  = this.setAreaChildren(this.$refs.deptBlockRefSel.$refs.tree.getCheckedNodes());
          this.$set(this.form.rule[this.dialogIndex], 'range', deptArr);
        }else if (this.form.rule[this.dialogIndex].type == 5){
          let deptArr  = this.setAreaChildren(this.$refs.deptBlockRefSel.$refs.tree.getCheckedNodes());
          this.$set(this.form.rule[this.dialogIndex], 'range', deptArr);
        }
        console.log(this.form.rule);
        this.dialogEdit = false;
      },
      okDialog(){
        let url = '';
        let error = 0;
        let req = /^([\+]?(([1-9]\d*)|(0)))([.]\d{0,2})?$/;
        this.$refs['form'].validate((valid) => {
          if (valid) {
            let deptArr  = [];
            let roleArr  = [];
            let userArray  = [];

            if (this.form.time1 == ''){
              MessageWarning(this.$t("请设置时间范围！"));
              return;
            }else if (this.form.time1 == 1){
              if (this.form.time1 == '' || this.form.time2 == ''){
                MessageWarning(this.$t("请设置时间范围！"));
                return;
              }
            }else if (this.form.time1 != 1 && this.form.time1 != ''){
              if (this.form.time1 == '' || this.form.time2 == '' || this.form.time3 == ''){
                MessageWarning(this.$t("请设置时间范围！"));
                return;
              }
            }

            let params = {
              budgetName: this.form.name,
              appletFormTypeCodes: this.form.order,
              appletCostIds: this.form.money,
              excessLimit: this.form.maxLimit,
              warningLimit: this.form.warningLimit,
              timeType: this.form.time1,
              timeYear: this.form.time2,
              timeMonth: this.form.time3,
              transfer: this.form.changeSwitch,
              rangeType: this.form.rangeType
            };

            if (this.form.maxLimit == 3){
              if (this.form.maxLimitExtra != null && this.form.maxLimitExtra == ""){
                MessageWarning(this.$t("请设置流程！"));
                return;
              }
              params['excessProcessId'] = this.form.maxLimitExtra;
            }
            if (this.form.warningLimit == 3){
              if (this.form.warningLimitExtra != null && this.form.warningLimitExtra == ""){
                MessageWarning(this.$t("请设置流程！"));
                return;
              }
              params['warningProcessId'] = this.form.warningLimitExtra;
            }

            if (this.form.rangeType == 1){
              deptArr  = this.setAreaChildren(this.$refs.deptRefSel.$refs.tree.getCheckedNodes(), 'dept');
              roleArr  = this.setAreaChildren(this.$refs.roleRefSel.$refs.tree.getCheckedNodes());
              if (deptArr.length > 0){
                params['deptRange'] = deptArr.join();
              }
              if (roleArr.length > 0){
                params['roleRange'] = roleArr.join();
              }
              if (this.form.userRange.length > 0){
                for (let i = 0; i < this.form.userRange.length; i++){
                  userArray.push(this.form.userRange[i].user_id);
                }
                params['userRange'] = userArray.join();
              }

              if (deptArr.length == 0 && roleArr.length == 0 && this.form.userRange.length == 0){
                MessageWarning(this.$t("请选择范围"));
                this.dialogLoading = false;
                return;
              }
            }

            for (let i = 0; i < this.form.rule.length; i++){
              if (this.form.rule[i]['type'] == ''){
                error++;
              }
              if (this.form.rule[i]['type'] != ''){
                if (this.form.rule[i]['type'] == 1){
                  if (this.form.rule[i]['range'].length == 0){
                    error++;
                  }
                }
              }
              if (!req.test(this.form.rule[i]['budgetMoney'])){
                error++;
              }
              if (!req.test(this.form.rule[i]['warningMoney'])){
                error++;
              }
            }

            if (error > 0){
              MessageWarning(this.$t("规则数据存在未设置或者异常，请检查！"));
              return;
            }

            let ruleArray = [];
            for (let i = 0; i < this.form.rule.length; i++){
              ruleArray.push({
                ruleType: this.form.rule[i].type,
                appletBudgetRuleRanges: this.form.rule[i].range == "按提交人" ? [] : this.form.rule[i].range,
                budgetTotal: this.form.rule[i].budgetMoney,
                budgetWarn: this.form.rule[i].warningMoney
              });
            }

            if (ruleArray.length > 0){
              params['appletBudgetRuleValList'] = ruleArray;
            }

            if (this.form.id != ''){
              params['id'] = this.form.id;
            }

            url = common.budget_save;
            //params = this.$qs.stringify(params);
            this.dialogLoading = true;
            this.$axios.post(url, JSON.stringify(params), {dataType: 'stringfy'}).then(res => {
              if (res.data.code == 200){
                this.dialogType = false;
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
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      getRowKeys(row) {
        return row.user_id;
      },
      handleSeeChange(event){
        if (event == 1){
          this.pageTeacher = 1;
          this.teacherLoading = true;
          setTimeout(() => {
            this.initTeacher();
          },800);
        }
      },
      handleSelectionChange(data){
        if (this.rowSelectFlag) return;
        this.form.userRange = data;
        console.log(this.form.userRange);
      },
      handleSelRangeType(event, type){
        if (type == 1){
          this.pageTeacher = 1;
          this.teacherLoading = true;
          setTimeout(() => {
            this.initTeacher();
          },800);
        }
        this.selRangeType = type;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          budgetId: this.form.id
        }
        url = common.budget_del;
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
      setAreaChildren(tree, type){//迭代方法
        let _self = this;
        let obj = [];
        if (tree && tree.length > 0){
          tree.map(function (item,index) {
            if (type == 'dept'){
              obj.push(item.department_path);
            }else {
              obj.push(item.id);
            }

            if(item['children'] != undefined && item['children'].length > 0){
              _self.setAreaChildren(item['children']);
            }
          });
        }
        return obj;
      }
    }
  }
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
.block-div-class{
  width: 710px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  height: 450px;
}
.range-left{
  float: left;
  height: 450px;
  width: 200px;
  border-right: 1px solid #dddddd;
  overflow-y: auto;
}
.range-right{
  margin-left: 201px;
  height: 450px;
  overflow-y: auto;
}
.rang-block{
  height: 350px;
  overflow-y: auto;
}
</style>
