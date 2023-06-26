<template>
  <div class="container">
    <div>
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">应用管理</span>
          </div>
          <my-el-tree v-if="mainMenu == '1'" type="4" sub-type="" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
          <my-el-tree ref="appRef" v-if="mainMenu == '2'" type="140" :extra-type="appName" :currentNodeKey="currentNodeKey" :default-expanded-keys="defaultExpandedKeys" :show-campus="false" @node-click="nodeFDClick" @all-click="nodeFDClick"></my-el-tree>
        </div>

        <div slot="right">
          <div class="layout-top-tab margin-top-5">
            <el-row>
              <el-col :span="8">
                <el-button v-if="mainMenu == '1'" size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("创建应用")}}</el-button>
                <el-button v-else size="small" type="text" @click="returnMain($event)">
                  <i class="fa fa-arrow-left"></i>
                  {{$t("返回")}}
                </el-button>
                <template v-if="mainMenu == '2'">
<!--                  <el-button v-if="formId == '1'" size="small" type="primary"  icon="el-icon-plus" @click="addAccountInfo($event, 1)">{{$t("添加账户")}}</el-button>-->
                  <el-button v-if="formId == '1'" size="small" type="primary"  icon="el-icon-plus" @click="addAccountInfo($event, 1)">{{$t("添加账户")}}</el-button>
                  <el-button v-if="formId == '2'" size="small" type="primary"  icon="el-icon-plus" @click="addAccountInfo($event, 2)">{{$t("添加账户")}}</el-button>
                  <el-button v-if="formId == '3'" size="small" type="primary"  icon="el-icon-plus" @click="addMerchatInfo($event, 3)">{{$t("新增")}}</el-button>
                </template>
              </el-col>
              <el-col :span="16" class="text-right">
                <div v-if="mainMenu == '1'" class="layout-inline">
                  <my-select class="layout-item width-150" size="small" :placeholder="$t('类型')" :options="filterAppManageType" :clearable="true" @change="handleTypeChange($event, 1)"></my-select>
                  <my-select class="layout-item width-150" size="small" :placeholder="$t('状态')" :options="filterAppManageStatus" :clearable="true" @change="handleTypeChange($event, 2)"></my-select>
                  <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('名称/编号')" @click="search"></my-input-button>
                </div>
                <div v-else>
                  <div class="layout-inline">
                    <my-cascader v-if="formId == '1'" class="layout-item" ref="SelectorDept" :clearable="true" :placeholder="$t('请选择部门')" size="small" width-style="180" :collapse-tags="true" :sel-value="searchDetailDept" type="4" sub-type="" @change="handleSelectDept($event, 'dept')"></my-cascader>
                    <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('请输入信息')" @click="searchMoneyDetail" class="layout-item"></my-input-button>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="margin-top-10">
            <el-table
              v-if="mainMenu == 1"
              ref="refTable"
              :data="tableData"
              header-cell-class-name="custom-table-cell-bg"
              size="medium"
              :max-height="tableHeight2.height"
              style="width: 100%">
              <el-table-column
                align="center"
                :label="$t('名称')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{ scope.row.applet_name }}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{ scope.row.applet_name }}
                      </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('部门')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="right" popper-class="custom-table-right-popover">
                    <div class="text-center" style="max-height: 150px;overflow-y: auto">
                      <div v-for="(item, index) in scope.row.department_names.split(',')">
                        <span>{{item}}</span>
                      </div>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class" style="width: 120px;display: inline-block">
                        {{ scope.row.department_names }}
                      </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('类型')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{ serverTypeInfo(scope.row.applet_type, 'set') }}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{ serverTypeInfo(scope.row.applet_type, 'set') }}
                      </span>
                  </el-popover>
                </template>
              </el-table-column>
<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="appName"-->
<!--                :label="$t('类别')">-->
<!--                <template slot-scope="scope">-->
<!--                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">-->
<!--                    <div class="text-center">{{ scope.row.category_name }}</div>-->
<!--                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">-->
<!--                        {{ scope.row.category_name }}-->
<!--                      </span>-->
<!--                  </el-popover>-->
<!--                </template>-->
<!--              </el-table-column>-->
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('状态')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.enable" class="color-success">{{$t("已发布")}}</label>
                      <label v-if="!scope.row.enable" class="color-warning">{{$t("待发布")}}</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.enable" class="color-success">{{$t("已发布")}}</label>
                      <label v-if="!scope.row.enable" class="color-warning">{{$t("待发布")}}</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="120"
                :label="$t('操作')">
                <template slot-scope="scope">
                  <i v-if="scope.row.enable" title="启用" class="fa fa-stop-circle color-warning margin-right-5" @click="statusInfo(scope.row, false)"></i>
                  <i v-if="!scope.row.enable" title="禁用" class="fa fa-play-circle color-success margin-right-5" @click="statusInfo(scope.row, true)"></i>
                  <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row)"></i>
                  <i v-if="scope.row.is_default == false" class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
                  <i v-if="scope.row.is_default == true" class="fa fa-cog color-success" @click="settingInfo(scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="60"
                :label="$t('服务')">
                <template slot-scope="scope">
                  <i class="fa fa-chevron-circle-right margin-right-5 color-grand" @click="formInfo(scope.row)"></i>
                </template>
              </el-table-column>
            </el-table>

            <template v-else-if="mainMenu == 2">
              <user-bank-account-table v-if="formId == 1" :table-data="tableDetailData" :table-height="tableHeight2.height" @editInfo="editDetailInfo($event, formId)"  @deleteInfo="deleteDetailInfo($event, formId)"></user-bank-account-table>
              <comp-bank-account-table v-if="formId == 2" :table-data="tableDetailData" :table-height="tableHeight2.height" @editInfo="editDetailInfo($event, formId)"  @deleteInfo="deleteDetailInfo($event, formId)"></comp-bank-account-table>
              <merchat-client-table v-if="formId == 3" :table-data="tableDetailData" :table-height="tableHeight2.height" @editInfo="editDetailInfo($event, formId)"  @deleteInfo="deleteDetailInfo($event, formId)"></merchat-client-table>
            </template>
          </div>
          <div class="layout-right-footer text-right">
            <my-pagination v-if="mainMenu == 1" :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
            <my-pagination v-if="mainMenu == 2" :total="totalDetail" :current-page="pageDetail" :page-size="numDetail" @currentPage="currentDetailPage" @sizeChange="sizeDetailChange" @jumpChange="jumpDetailPage" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </layout-lr>
    </div>

    <dialog-normal top="10vh" :visible="dialogApp" :title="$t('应用设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('应用名称')" prop="appName">
            <el-input v-model="form.appName" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('应用类型')" prop="type">
            <my-select :sel-value="form.type" :options="filterAppManageType" width-style="260" @change="handleFormChange($event, 1)"></my-select>
          </el-form-item>
<!--          <el-form-item :label="$t('应用类别')" prop="category">-->
<!--&lt;!&ndash;            <my-select :sel-value="form.category" :options="categorys" width-style="260" @change="handleFormChange($event, 2)"></my-select>&ndash;&gt;-->
<!--            <el-select v-model="form.category" :placeholder="$t('请选择')" @change="handleFormChange($event, 2)" style="width: 260px">-->
<!--              <el-option v-for="item in categorys" :key="item.value" :label="item.label" :value="item.value" :disabled="item.enable == false"></el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->
          <el-form-item>
            <span slot="label" class="custon-form-start-tag">{{$t('归属部门')}}</span>
            <my-cascader ref="SelectorCollege" :sel-value="form.dept" :props="{multiple: true}" type="4" sub-type="id" width-style="260" @change="handleCascaderChange($event)"></my-cascader>
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

    <dialog-normal top="10vh" :visible="dialogDetail"  :width-style="formId == 2 ? '850px' : '550px'" :title="$t('账号设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <template v-if="formId == 1">
          <el-form :model="formTeacherAccount" :rules="rulesTeacher" ref="formTeacherAccount" label-width="140px">
            <el-form-item :label="$t('姓名')">
              <el-popover
                popper-class="custom-popper-class-form"
                placement="top"
                width="700"
                trigger="click"
                @show="handleShowTeacher(1)">
                <div>
                  <teacher-tree-and-list ref="popverCreateRef" :sel-value="formTeacherAccount.userId" @change="handleSelCreateUser($event, 1)"></teacher-tree-and-list>
                </div>
                <el-button slot="reference" type="success" plain size="small">{{$t("添加")}}</el-button>
              </el-popover>
              <span v-if="formTeacherAccount.name != ''" class="color-warning margin-left-10">
              <i class="fa fa-user"></i>
              {{formTeacherAccount.name}}
            </span>
            </el-form-item>
            <el-form-item :label="$t('类型')" key="accountSchoolType" prop="accountTeacherType">
              <my-select :sel-value="formTeacherAccount.accountTeacherType" :options="filterAccountType" width-style="260" @change="handleFormChange($event, 5)"></my-select>
            </el-form-item>
            <el-form-item v-if="formTeacherAccount.accountTeacherType != 2 && formTeacherAccount.accountTeacherType != 3" :label="$t('开户行')" key="bankName" prop="bankName">
              <el-input v-model="formTeacherAccount.bankName" class="width-260"></el-input>
            </el-form-item>
            <el-form-item v-if="formTeacherAccount.accountTeacherType != 2 && formTeacherAccount.accountTeacherType != 3" :label="$t('户名')" key="bankAccountName" prop="bankAccountName">
              <el-input v-model="formTeacherAccount.bankAccountName" class="width-260"></el-input>
            </el-form-item>
            <el-form-item :label="$t('账号')" key="bankAccount" prop="bankAccount">
              <el-input v-model="formTeacherAccount.bankAccount" class="width-260"></el-input>
            </el-form-item>
          </el-form>
        </template>

        <template v-if="formId == 3">
          <el-form :model="formMerchatAccount" :rules="rulesMerchat" ref="formMerchatAccount" label-width="140px">
            <el-form-item :label="$t('类型')" key="accountType" prop="accountType">
              <my-select :sel-value="formMerchatAccount.accountType" :options="filterAccountType" width-style="260" @change="handleFormChange($event, 3)"></my-select>
            </el-form-item>
            <el-form-item :label="$t('公司名称')" key="company" prop="company">
              <el-input v-model="formMerchatAccount.company" class="width-260"></el-input>
            </el-form-item>
            <el-form-item :label="$t('税号')" key="taxNo" prop="taxNo">
              <el-input v-model="formMerchatAccount.taxNo" class="width-260"></el-input>
            </el-form-item>
            <el-form-item :label="$t('单位地址')" key="address" prop="address">
              <el-input v-model="formMerchatAccount.address" class="width-260"></el-input>
            </el-form-item>
            <el-form-item :label="$t('联系人')" key="contact" prop="contact">
              <el-input v-model="formMerchatAccount.contact" class="width-260"></el-input>
            </el-form-item>
            <el-form-item :label="$t('电话')" key="phone" prop="phone">
              <el-input v-model="formMerchatAccount.phone" class="width-260"></el-input>
            </el-form-item>
            <el-form-item v-if="formMerchatAccount.accountType != 2 && formMerchatAccount.accountType != 3" :label="$t('开户行')" key="bankMerName" prop="bankMerName">
              <el-input v-model="formMerchatAccount.bankMerName" class="width-260"></el-input>
            </el-form-item>
            <el-form-item :label="$t('银行账户')" key="bankMerAccount" prop="bankMerAccount">
              <el-input v-model="formMerchatAccount.bankMerAccount" class="width-260"></el-input>
            </el-form-item>
          </el-form>
        </template>

        <template v-if="formId == 2">
          <el-form :model="formSchoolAccount" :rules="rulesSchool" ref="formSchoolAccount" label-width="140px">
            <el-form-item :label="$t('账户类型')" key="accountSchoolType" prop="accountSchoolType">
              <my-select :sel-value="formSchoolAccount.accountSchoolType" :options="filterAccountType" width-style="300" @change="handleFormChange($event, 4)"></my-select>
            </el-form-item>
            <el-form-item v-if="formSchoolAccount.accountSchoolType != 2 && formSchoolAccount.accountSchoolType != 3" :label="$t('开户行')" key="bankSchoolName" prop="bankSchoolName">
              <el-input v-model="formSchoolAccount.bankSchoolName" class="width-300"></el-input>
            </el-form-item>
            <el-form-item v-if="formSchoolAccount.accountSchoolType != 2 && formSchoolAccount.accountSchoolType != 3" :label="$t('户名')" key="accountName" prop="accountName">
              <el-input v-model="formSchoolAccount.accountName" class="width-300"></el-input>
            </el-form-item>
            <el-form-item :label="$t('银行账户')" key="bankSchoolAccount" prop="bankSchoolAccount">
              <el-input v-model="formSchoolAccount.bankSchoolAccount" class="width-300"></el-input>
            </el-form-item>
            <el-form-item :label="$t('可见范围')">
              <div>
                <el-radio-group v-model="formSchoolAccount.rangeType">
                  <el-radio label="0">{{ $t('全部可见') }}</el-radio>
                  <el-radio label="1">{{ $t('部分可见') }}</el-radio>
                </el-radio-group>
              </div>
              <div class="margin-top-5" v-if="formSchoolAccount.rangeType == 1">
                <div>
                  <el-button :type="selRangeType == 1 ? 'success' : ''" size="mini" @click="handleSelRangeType($event,1)">{{ $t('组织架构') }}</el-button>
                  <el-button :type="selRangeType == 2 ? 'success' : ''" size="mini" @click="handleSelRangeType($event,2)">{{ $t('部门') }}</el-button>
                  <el-button :type="selRangeType == 3 ? 'success' : ''" size="mini" @click="handleSelRangeType($event,3)">{{ $t('角色') }}</el-button>
                </div>
                <div class="margint-top-5 block-div-class">
                  <div v-show="selRangeType == 1">
                    <div class="range-left">
                      <my-el-tree-block type="4" sub-type="" :show-filter="false" @node-click="nodeTeacherClick" @all-click="nodeTeacherClick"></my-el-tree-block>
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
        </template>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okAccountDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import MyInputButton from "~/components/search/MyInputButton";
  import MySelect from "~/components/MySelect";
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {inArray, MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import appManageValidater from "~/utils/validater/appManageValidater";
  import MyCascader from "~/components/utils/select/MyCascader";
  import MyElTree from "~/components/tree/MyElTree";
  import UserBankAccountTable from "~/components/utils/table/UserBankAccountTable";
  import CompBankAccountTable from "~/components/utils/table/CompBankAccountTable";
  import MerchatClientTable from "~/components/utils/table/MerchatClientTable";
  import DialogNormal from "~/components/utils/dialog/DialogNormal";
  import appMerchatManageValidater from "~/utils/validater/appMerchatManageValidater";
  import appTeacherManageValidater from "~/utils/validater/appTeacherManageValidater";
  import appSchoolManageValidater from "~/utils/validater/appSchoolManageValidater";
  export default {
    mixins: [mixins,appManageValidater,appMerchatManageValidater,appTeacherManageValidater,appSchoolManageValidater],
    components: {
      DialogNormal,
      MerchatClientTable,
      CompBankAccountTable, UserBankAccountTable, MyElTree, MyCascader, MySelect, MyInputButton},
    data(){
      return {
        pageCount: 5,
        pageTeacher: 1,
        numTeacher: 20,
        totalTeacher: 0,
        pageDetail: 1,
        numDetail: 20,
        totalDetail: 0,
        mainMenuType: 1,
        subMenuType: 4,
        mainMenu: 1,
        tableData: [],
        tableDetailData: [],
        tableSelData: [],
        collegeList: [],
        categorys: [],
        types: [],
        subTitle: '',
        collegeData: '',
        searchKey: '',
        searchMoneyKey: '',
        searchTreeKey: '',
        searchType: '',
        searchDetailKey: '',
        searchDetailDept: [],
        searchStatus: '',
        appName: '',
        currentNodeKey: '',
        defaultExpandedKeys: [],
        formId: '',
        formName: '',
        detailId: '',
        dialogLoading: false,
        dialogApp: false,
        visibleConfim: false,
        dialogDetail: false,
        dialogAccount: false,
        teacherLoading: false,
        dialogType: '',
        rowSelectFlag: false,
        defaultCheckedKeys: [],
        defaultCheckedRoleKeys: [],
        selRangeType: 1,
        form: {
          id: '',
          appName: '',
          type: '',
          category: '',
          dept: []
        },
        formTeacherAccount: {
          id: '',
          name: '',
          dept: '',
          bankName: '',
          bankAccountName: '',
          bankAccount: '',
          userId: '',
          accountTeacherType: ''
        },
        formMerchatAccount: {
          id: '',
          accountType: '',
          company: '',
          taxNo: '',
          address: '',
          contact: '',
          bankMerName: '',
          bankMerAccountName: '',
          bankMerAccount: '',
          phone: ''
        },
        formSchoolAccount: {
          id: '',
          accountSchoolType: '',
          accountName: '',
          bankSchoolName: '',
          bankSchoolAccountName: '',
          bankSchoolAccount: '',
          oprType: '',
          rangeType: '0',
          userRange: [],
          deptRange: [],
          roleRange: [],
          userEditRange: []
        }
      }
    },
    created() {
      this.init();
      //this.initCategory();
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
      initFD(){
        let url = "";
        let params = {
          page: this.pageDetail,
          num: this.numDetail,
          formId: this.formId,
          searchKey: this.searchDetailKey,
          departmentPath: this.searchDetailDept.length > 0 ? this.searchDetailDept[this.searchDetailDept.length-1] : ''
        };
        if (this.formId == 1){
          url = common.teacher_account_page;
        }else if (this.formId == 3){
          url = common.supplier_account_page;
        }else if (this.formId == 2){
          url = common.school_account_page;
        }
        console.log(params);
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            this.tableDetailData = res.data.data.list;
            this.totalDetail = res.data.data.totalCount;
            this.numDetail = res.data.data.num;
            this.pageDetail = res.data.data.currentPage;
          }
        });
      },
      initType(){

      },
      initCategory(){
        let params = {};
        this.$axios.get(common.server_type_all_list, {params: params}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                text: res.data.data[i].categoryName,
                value: res.data.data[i].id+'',
                label: res.data.data[i].categoryName,
                enable: res.data.data[i].enable
              });
            }
            this.categorys = array;
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
        params['realName'] = this.searchTreeKey['input'];
        this.$axios.get(common.teacher_list, {params: params}).then(res => {
          if (res.data.data){
            this.tableSelData = res.data.data.page.list;
            this.totalTeacher = res.data.data.page.totalCount;
            this.numTeacher = res.data.data.page.num;
            this.pageTeacher = res.data.data.page.currentPage;

            setTimeout(() => {
              this.rowSelectFlag = true;
              let arr = this.formSchoolAccount.userRange.length > 0 ? JSON.parse(JSON.stringify(this.formSchoolAccount.userRange)) : [];
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
      async initSelTeacher(id){
        let params = {
          id: id
        };
        await this.$axios.get(common.school_account_info, {params: params}).then(res => {
          if (res.data.data){
            console.log(res.data.data);
            let roleRange = res.data.data.roleRange;
            let userRange = res.data.data.userRange;
            let deptRange = res.data.data.deptRange;
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

            console.log(deptArr);
            this.formSchoolAccount.userRange = userArr;
            this.defaultCheckedRoleKeys = roleArr;
            this.defaultCheckedKeys = deptArr;
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
      sizeDetailChange(event){
        this.pageDetail = 1;
        this.numDetail = event;
        this.initFD();
      },
      currentDetailPage(event){
        this.pageDetail = event;
        this.initFD();
      },
      jumpDetailPage(data){
        this.pageDetail = data;
        this.initFD();
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
      nodeClick(data){
        this.collegeData = data.department_path;
        this.page = 1;
        this.init();
      },
      nodeTeacherClick(data){
        this.selTreeId = data.id ? data.id : '';
        this.initTeacher();
      },
      nodeFDClick(data){
        this.formId = "";
        this.pageDetail = 1;

        if (data.unit == 2){
          this.formId = data.id;
          this.formName = data.label;
          this.initFD();
        }
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init(data);
      },
      searchSel(event){
        this.searchTreeKey = event;
        this.initTeacher();
      },
      searchMoneyDetail(data){
        this.searchDetailKey = data.input;
        this.pageDetail = 1;
        this.initFD();
      },
      setTeacherName(){
        this.dialogAccount = true;
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
      handleShowTeacher(type){
        if (type == 1){
          this.$refs.popverCreateRef._handleOpen();
        }
      },
      handleSelCreateUser(data, type){
        if (type == 1){
          this.formTeacherAccount.name = data.real_name;
          this.formTeacherAccount.userId = data.user_id;
        }
      },
      handleSelectionChange(data){
        if (this.rowSelectFlag) return;
        this.formSchoolAccount.userRange = data;
      },
      getRowKeys(row) {
        return row.user_id;
      },
      addInfo(){
        this.dialogApp = true;
      },
      addAccountInfo(event, type){
        this.dialogType = type;
        if (this.formId == 2){
          setTimeout(() => {
            this.initTeacher();
          },800);
        }
        this.dialogDetail = true;
      },
      addMerchatInfo(){
        this.dialogDetail = true;
      },
      async editDetailInfo(item, type){
        if (type == 1){
          this.formTeacherAccount = {
            id: item.id,
            accountTeacherType: item.account_type+'',
            name: item.real_name,
            dept: '',
            bankName: item.bank_name,
            bankAccountName: item.account_name,
            bankAccount: item.account_num,
            userId: item.user_id
          }
        }else if (type == 3){
          console.log(item);
          this.formMerchatAccount = {
            id: item.id,
            accountType: item.account_type+'',
            company: item.company,
            taxNo: item.tax_no,
            address: item.address,
            contact: item.contact,
            bankMerName: item.bank_name,
            bankMerAccountName: '',
            bankMerAccount: item.account_num,
            phone: item.phone
          }
        }else if (type == 2){
          console.log(item);
          this.formSchoolAccount = {
            id: item.id,
            accountSchoolType: item.account_type+'',
            accountName: item.account_name,
            bankSchoolName: item.bank_name,
            bankSchoolAccountName: '',
            bankSchoolAccount: item.account_num,
            oprType: '',
            rangeType: item.range_type+'',
            userRange: [],
            deptRange: [],
            roleRange: [],
            userEditRange: []
          }
          await this.initSelTeacher(item.id);

          this.pageTeacher = 1;
          this.teacherLoading = true;
          setTimeout(() => {
            this.initTeacher();
          },800);
        }
        this.dialogDetail = true;
      },
      myInfo(){

      },
      editInfo(item){
        let deptArr = [];
        let params = {
          id: item.id
        };
        this.form = {
          id: item.id,
          appName: item.applet_name,
          type: item.applet_type + '',
          category: item.category_id + ''
        }
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_applet_deptinfo, params).then(res => {
          if (res.data.code == 200){
            for (let i = 0; i < res.data.data.length; i++){
              let dept = [];
              let array = res.data.data[i].departmentIds.split(",");
              for (let j = 0; j < array.length; j++){
                dept.push(parseInt(array[j]));
              }
              deptArr.push(dept);
            }
            this.form.dept = deptArr;
          }
          this.dialogApp = true;
        });
      },
      deleteInfo(item){
        this.form.id = item.id;
        this.visibleConfim = true;
      },
      deleteDetailInfo(item, type){
        this.detailId = item.id;
        this.visibleConfim = true;
      },
      async settingInfo(item){
        this.mainMenu = 2;
        this.pageDetail = 1;
        this.appName = ''+item.id;
        this.appletId = item.id;
        this.formId = item.id;
        this.formName = item.formName;
        this.searchDetailType = item.applet_type;
        await this.getAppletFDServerInfo();
        let data = this.dataAppletFDServer;
        if (data && data.length > 0 && data[0]['children']){
          this.formId = data[0]['children'][0].id;
          this.formName = data[0]['children'][0].label;
          this.defaultExpandedKeys = [data[0].id, data[0]['children'][0].id];
          this.currentNodeKey = data[0]['children'][0].id;
        }
        this.initFD();
      },
      statusInfo(item, type){
        let params = {
          id: item.id,
          enable: type
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_applet_enable, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      formInfo(item){
        this.$router.push({
          path: '/appletInfo/app/appCreate',
          query: {
            id: item.id,
            appName: item.applet_name,
            top: 'appletInfo',
            key: 'appCreate',
            sub: 'appCenter'
          }
        });
      },
      returnMain(){
        this.mainMenu = 1;
        this.page = 1;
        this.departmentPath = '';
        this.appletType = '';
        this.enable = '';
        this.searchKey = '';
        this.formId = '';
        this.searchDetailKey = '';
        this.searchDetailDept = [];
        this.resetCasadeSelector('SelectorDept');
        this.init();
      },
      handleSelectDept(data, type, type2){
        if (type == 'dept'){
          this.searchDetailDept = data;
        }else if (type == 'dept2'){
          this.form.dept = data[data.length - 1];
        }
      },
      handleCascaderChange(data){
        this.form.dept = data;
      },
      handleTypeChange(event, type){
        if (type == 1){
          this.searchType = event;
        }else if (type == 2){
          this.searchStatus = event;
        }
      },
      handleFormChange(event, type){
        if (type == 1){
          this.form.type = event;
        }else if (type == 2){
          this.form.category = event;
        }else if (type == 3){
          this.formMerchatAccount.accountType = event;
        }else if (type == 4){
          this.formSchoolAccount.accountSchoolType = event;
        }else if (type == 5){
          this.formTeacherAccount.accountTeacherType = event;
        }
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
      },
      cancelDialog(){
        this.dialogApp = false;
        this.dialogDetail = false;
      },
      okDialog(){
        let url = '';
        this.$refs['form'].validate((valid) => {
          if (valid) {
            let deptArrStr = '';
            let deptArr = [];
            if (this.form.dept.length == 0){
              MessageWarning(this.$t("请选择部门"));
              return;
            }
            for (let i = 0; i < this.form.dept.length; i++){
              deptArrStr += this.form.dept[i].join();
              if (this.form.dept.length - 1 != i){
                deptArrStr += '|';
              }
            }
            let params = {
              appletName: this.form.appName,
              appletType: this.form.type,
              //categoryId: this.form.category,
              departmentIds: deptArrStr,
            };
            if (this.form.id != ''){
              params['id'] = this.form.id;
            }
            url = common.server_applet_save;
            params = this.$qs.stringify(params);
            this.dialogLoading = true;
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.dialogApp = false;
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
      okAccountDialog(){
        let url = '';
        if (this.formId == 1){
          this.$refs['formTeacherAccount'].validate((valid) => {
            if (valid) {
              if (this.formTeacherAccount.userId == ""){
                MessageWarning(this.$t("请设置姓名！"));
                return;
              }

              let params = {
                accountType: this.formTeacherAccount.accountTeacherType,
                userId: this.formTeacherAccount.userId,
                accountNum: this.formTeacherAccount.bankAccount
              };
              if (this.formTeacherAccount.accountTeacherType != 2 && this.formTeacherAccount.accountTeacherType != 3){
                params['bankName'] = this.formTeacherAccount.bankName;
                params['accountName'] = this.formTeacherAccount.bankAccountName;
              }
              if (this.formTeacherAccount.id != ''){
                params['id'] = this.formTeacherAccount.id;
              }
              url = common.teacher_account_save;
              params = this.$qs.stringify(params);
              this.dialogLoading = true;
              this.$axios.post(url, params).then(res => {
                if (res.data.code == 200){
                  this.dialogDetail = false;
                  this.initFD();
                  MessageSuccess(res.data.desc);
                }else {
                  MessageError(res.data.desc);
                }
                this.dialogLoading = false;
              });
            }
          });
        }else if (this.formId == 3){
          this.$refs['formMerchatAccount'].validate((valid) => {
            if (valid) {
              let params = {
                accountType: this.formMerchatAccount.accountType,
                company: this.formMerchatAccount.company,
                taxNo: this.formMerchatAccount.taxNo,
                address: this.formMerchatAccount.address,
                contact: this.formMerchatAccount.contact,
                phone: this.formMerchatAccount.phone,
                accountNum: this.formMerchatAccount.bankMerAccount
              };
              if (this.formMerchatAccount.accountType != 2 && this.formMerchatAccount.accountType != 3){
                //params['accountName'] = this.formMerchatAccount.bankMerName;
                params['bankName'] = this.formMerchatAccount.bankMerName;
              }
              if (this.formMerchatAccount.id != ''){
                params['id'] = this.formMerchatAccount.id;
              }
              url = common.supplier_account_save;
              params = this.$qs.stringify(params);
              this.dialogLoading = true;
              this.$axios.post(url, params).then(res => {
                if (res.data.code == 200){
                  this.dialogDetail = false;
                  this.initFD();
                  MessageSuccess(res.data.desc);
                }else {
                  MessageError(res.data.desc);
                }
                this.dialogLoading = false;
              });
            }
          });
        }if (this.formId == 2){
          this.$refs['formSchoolAccount'].validate((valid) => {
            if (valid) {
              let deptArr  = [];
              let roleArr  = [];
              let userArray  = [];

              this.dialogLoading = true;
              let url = "";
              let params = {
                accountName: this.formSchoolAccount.accountName,
                rangeType: this.formSchoolAccount.rangeType,
                accountType: this.formSchoolAccount.accountSchoolType,
                accountNum:this.formSchoolAccount.bankSchoolAccount
              };
              if (this.formSchoolAccount.accountSchoolType != 2 && this.formSchoolAccount.accountSchoolType != 3){
                params['bankName'] = this.formSchoolAccount.bankSchoolName;

              }

              url = common.school_account_save;
              if (this.formSchoolAccount.id && this.formSchoolAccount.id != ""){
                params['id'] = this.formSchoolAccount.id;
              }

              if (this.formSchoolAccount.rangeType == 1){
                deptArr  = this.setAreaChildren(this.$refs.deptRefSel.$refs.tree.getCheckedNodes(), 'dept');
                roleArr  = this.setAreaChildren(this.$refs.roleRefSel.$refs.tree.getCheckedNodes());
                if (deptArr.length > 0){
                  params['deptRange'] = deptArr.join();
                }
                if (roleArr.length > 0){
                  params['roleRange'] = roleArr.join();
                }
                if (this.formSchoolAccount.userRange.length > 0){
                  for (let i = 0; i < this.formSchoolAccount.userRange.length; i++){
                    userArray.push(this.formSchoolAccount.userRange[i].user_id);
                  }
                  params['userRange'] = userArray.join();
                }

                if (deptArr.length == 0 && roleArr.length == 0 && this.formSchoolAccount.userRange.length == 0){
                  MessageWarning(this.$t("请选择范围"));
                  this.dialogLoading = false;
                  return;
                }
              }
              console.log(3,params);
              params = this.$qs.stringify(params);

              this.$axios.post(url, params, {loading: false}).then(res=>{
                if (res.data.code == 200){
                  this.initFD();
                  this.dialogDetail = false;
                  MessageSuccess(res.data.desc);
                }else {
                  MessageError(res.data.desc);
                }
                this.dialogLoading = false;
              });
            }
          });
        }
      },
      closeDialog(event){
        this.form = {
          id: '',
          appName: '',
          type: '',
          category: '',
          dept: []
        };
        this.formTeacherAccount = {
          id: '',
          name: '',
          dept: '',
          bankName: '',
          bankAccountName: '',
          bankAccount: '',
          userId: '',
          accountTeacherType: ''
        };
        this.formMerchatAccount = {
          id: '',
          accountType: '',
          company: '',
          taxNo: '',
          address: '',
          contact: '',
          bankMerName: '',
          bankMerAccountName: '',
          bankMerAccount: '',
          phone: ''
        };
        this.formSchoolAccount = {
          id: '',
          accountSchoolType: '',
          accountName: '',
          bankSchoolName: '',
          bankSchoolAccountName: '',
          bankSchoolAccount: '',
          oprType: '',
          rangeType: '0',
          userRange: [],
          deptRange: [],
          roleRange: [],
          userEditRange: []
        };
        this.subTitle = "";
        this.detailId = "";
        this.searchTreeKey = '';
        this.selRangeType = 1;
        this.selTreeId = '';
        this.$set(this.form,'dept', []);
        this.resetCasadeSelector('SelectorCollege');
        //this.resetCasadeSelector('SelectorDept2');
        this.dialogDetail = false;
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        if (this.$refs['formTeacherAccount']){
          this.$refs['formTeacherAccount'].resetFields();
        }
        if (this.$refs['formMerchatAccount']){
          this.$refs['formMerchatAccount'].resetFields();
        }
        if (this.$refs['formSchoolAccount']){
          this.$refs['formSchoolAccount'].resetFields();
        }
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.form.id
        }
        url = common.server_applet_delete;
        if (this.mainMenu == 2){
          params = {
            id: this.detailId
          }
          if (this.formId == 1){
            url = common.teacher_account_del;
          }else if (this.formId == 3){
            url = common.supplier_account_del;
          }else if (this.formId == 2){
            url = common.school_account_del;
          }
        }
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            if (this.mainMenu == 2){
              if (this.formId == 1 || this.formId == 3 || this.formId == 2){
                this.initFD();
              }
            }else {
              this.init();
            }
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
.custon-form-start-tag:before {
  content: '*';
  color: #F56C6C;
  margin-right: 4px;
}
.block-div-class{
  width: 690px;
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
