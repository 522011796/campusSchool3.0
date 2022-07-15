<template>
  <div class="container">
    <layout-tb>
      <template slot="tag"></template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="text" @click="returnMain($event)">
              <i class="fa fa-arrow-left"></i>
              {{$t("返回")}}
            </el-button>
            <span class="margin-left-5">{{pageTitle}}</span>
            <el-dropdown trigger="click">
              <el-button type="primary" size="small">
                {{$t("收款人/收款项")}}<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="addUser($event)"><i class="el-icon-user margin-right-5"></i>{{$t("收款人")}}</el-dropdown-item>
                <el-dropdown-item @click.native="addPay($event)"><i class="el-icon-collection-tag margin-right-5"></i>{{$t("收款项")}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button class="" size="small" type="warning"  icon="el-icon-plus" :disabled="selPayData.length == 0" @click="mutiInfo($event)">{{$t("批量管理")}}</el-button>
            <el-dropdown trigger="click">
              <el-button type="info" size="small">
                {{$t("导入/导出")}}<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click="importInfo($event)"><i class="el-icon-upload margin-right-5"></i>{{$t("导入")}}</el-dropdown-item>
                <el-dropdown-item @click="expandInfo($event)"><i class="el-icon-download margin-right-5"></i>{{$t("导出")}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="12">
            <div class="layout-inline text-right">
              <my-cascader class="layout-item" :clearable="true" ref="SelectorDormDept" size="small" width-style="140" :sel-value="searchCommDeptBedData" type="2" sub-type="3" @change="handleCascaderBedChange($event)"></my-cascader>
              <my-cascader class="layout-item" ref="SelectorCollege" size="small" width-style="140" :sel-value="searchCollegeData" type="1" sub-type="4" @change="handleCascaderStudentChange($event)"></my-cascader>
              <my-input-button class="layout-item" ref="teacher width-100" size="small" plain width-class="width: 100px" type="success" :clearable="true" :placeholder="$t('名称/录取号')" @click="search"></my-input-button>
            </div>
          </el-col>
        </el-row>
      </div>

      <div slot="content">
        <el-table
          ref="refPayTable"
          :data="tableData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          :row-key="getPayRowKeys"
          :max-height="tableHeight.height"
          :empty-text="payTips"
          style="width: 100%"
          @selection-change="handleSelectionPayChange">
          <el-table-column
            :reserve-selection="true"
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            align="center"
            prop="department_name"
            :label="$t('姓名')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.real_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.real_name}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="action_name"
            :label="$t('录取号')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.student_id}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.student_id}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="user_name"
            :label="$t('宿舍号')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center"></div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.room_no}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="user_name"
            :label="$t('学院')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.college_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.college_name}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="user_name"
            :label="$t('专业')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.major_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.major_name}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="user_name"
            :label="$t('班级')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.class_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.class_name}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="user_name"
            :label="$t('收费项目')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.item_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.item_name}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="user_name"
            :label="$t('收费金额')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.total_amount}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.total_amount}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="user_name"
            :label="$t('减免金额')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.deduction_amount}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.deduction_amount}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="user_name"
            :label="$t('缓缴金额')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.delay_amount}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.delay_amount}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="user_name"
            :label="$t('贷款金额')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.loan_amount}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.loan_amount}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="user_name"
            :label="$t('实收金额')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.should_amount}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.should_amount}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            width="120"
            :label="$t('操作')">
            <template slot-scope="scope">
              <i class="fa fa-edit margin-right-5 color-success" @click="editInfo(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal top="10vh" :visible="dialogMutiVisible" width-style="650px" :title="$t('批量设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <div class="font-size-14 font-bold color-warning">
          <span>{{$t("已选中")}}</span>
          <span>{{selPayData.length}}</span>
        </div>
        <div class="margin-top-10">
          <el-button class="" size="small" type="danger"  icon="el-icon-delete" @click="mutiDeleteInfo($event)">{{$t("批量删除")}}</el-button>
          <span class="color-danger font-size-12">({{$t("请谨慎操作，删除后不可恢复！")}})</span>
        </div>
        <div class="margin-top-10">
          <span class="">{{$t("批量调整金额")}}</span>
          <span class="color-danger margin-left-10 font-size-12">({{$t("请谨慎操作，数据将覆盖选中的所有人！")}})</span>
        </div>
        <div class="margin-top-10">
          <el-table
            border
            ref="refTable"
            :data="tablePayData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            style="width: 100%">
            <el-table-column align="center" :label="$t('收费项目')">
              <template slot-scope="scope">
                <el-input size="mini" style="width: 80px" v-model="scope.row.itemName"></el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('应收')">
              <template slot-scope="scope">
                <el-input size="mini" style="width: 80px" v-model="scope.row.totalAmount"></el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('减免')">
              <template slot-scope="scope">
                <el-input size="mini" style="width: 80px" v-model="scope.row.deductionAmount"></el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('贷款')">
              <template slot-scope="scope">
                <el-input size="mini" style="width: 80px" v-model="scope.row.loanAmount"></el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('缓交')">
              <template slot-scope="scope">
                <el-input size="mini" style="width: 80px" v-model="scope.row.delayAmount"></el-input>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" :loading="btnLoading" @click="okDialog">
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <dialog-normal top="10vh" :visible="dialogEditVisible" width-style="650px" :title="$t('收款项设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <div class="margin-top-10">
          <el-table
            border
            ref="refTable"
            :data="tablePayEditData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            style="width: 100%">
            <el-table-column align="center" :label="$t('收费项目')">
              <template slot-scope="scope">
                <el-input size="mini" style="width: 80px" v-model="scope.row.itemName"></el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('应收')">
              <template slot-scope="scope">
                <el-input size="mini" style="width: 80px" v-model="scope.row.totalAmount"></el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('减免')">
              <template slot-scope="scope">
                <el-input size="mini" style="width: 80px" v-model="scope.row.deductionAmount"></el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('贷款')">
              <template slot-scope="scope">
                <el-input size="mini" style="width: 80px" v-model="scope.row.loanAmount"></el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('缓交')">
              <template slot-scope="scope">
                <el-input size="mini" style="width: 80px" v-model="scope.row.delayAmount"></el-input>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okEditDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawDialog" :visible="drawerPay" size="700px" :title="$t('收款项设置')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <div class="margin-top-10">
          <span class="font-size-12">{{$t("设置收款项及金额")}}</span>
          <el-button size="small" icon="el-icon-plus" @click="addPayObj($event, -1)">{{$t("添加收款项")}}</el-button>
        </div>
        <div class="margin-top-10">
          <el-table
            border
            ref="refTable"
            :data="tablePayObjData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            style="width: 100%">
            <el-table-column align="center" :label="$t('收费项目')">
              <template slot-scope="scope">
                <el-input size="mini" style="width: 80px" v-model="scope.row.itemName"></el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('应收')">
              <template slot-scope="scope">
                <el-input size="mini" style="width: 80px" v-model="scope.row.totalAmount"></el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('减免')">
              <template slot-scope="scope">
                <el-input size="mini" style="width: 80px" v-model="scope.row.deductionAmount"></el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('贷款')">
              <template slot-scope="scope">
                <el-input size="mini" style="width: 80px" v-model="scope.row.loanAmount"></el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('缓交')">
              <template slot-scope="scope">
                <el-input size="mini" style="width: 80px" v-model="scope.row.delayAmount"></el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('操作')">
              <template slot-scope="scope">
                <i class="fa fa-plus color-success margin-right-5" @click="addPayObj($event, scope.$index)"></i>
                <i class="fa fa-times color-danger" @click="deletePayObj($event, scope.$index)"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="small" type="primary" :loading="btnLoading" @click="okDrawPayDialog($event)">{{$t("保存")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawDialog" :visible="drawerStudent" size="700px" :title="$t('学生设置')" @right-close="cancelDrawDialog">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <el-row>
            <el-col :span="12">
              <span class="tab-class font-bold">
                <i class="fa fa-user"></i>
                {{$t('学生设置')}}
              </span>
            </el-col>
            <el-col :span="12" class="text-right">
              <span class="tab-class font-bold">
                <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
                <el-button size="small" type="primary" :loading="btnLoading" @click="okStudentDrawDialog($event, 2)">{{$t("保存")}}</el-button>
              </span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div>
          <div class="layout-inline">
            <my-cascader class="layout-item" :placeholder="$t('请选择专业/班级')" ref="SelectorCollege" :props="{ checkStrictly: true }" size="small" width-style="160" :clearable="true" :sel-value="searchCollegeData" type="1" sub-type="4" @change="handleCascaderDrawerStudentChange($event)"></my-cascader>
            <my-cascader class="layout-item" :placeholder="$t('请选择宿舍')" :clearable="true" ref="SelectorDrawDormDept" size="small" width-style="160" :sel-value="searchCommDormData" type="2" sub-type="3" @change="handleCascaderDormChange($event)"></my-cascader>
            <my-select class="layout-item " size="small" :placeholder="$t('选择批次')" :clearable="true" :sel-value="searchStudentPC" :options="fliterPCs" width-style="100" @change="handleSearchChange($event, 5)"></my-select>
          </div>
          <div>
            <el-table class="margin-top-10"
                      ref="tableStudentRef"
                      :row-key="getStudentRowKeys"
                      :data="tableStudnetData"
                      size="mini"
                      v-loading="tableDormLoading"
                      @selection-change="handleSelectionChange">
              <el-table-column
                width="55">
                <template slot="header" slot-scope="scope">
                  <el-checkbox v-model="commAllCheck" @change="_handleSelectionStudentAllSelect"></el-checkbox>
                </template>

                <template slot-scope="scope">
                  <el-checkbox v-model="scope.row._checked" @change="_handleSelectionStudentSelect($event, scope.row)"></el-checkbox>
                </template>
              </el-table-column>
              <el-table-column
                label="录入时间"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label>{{$moment(scope.row.regist_date).format("YYYY-MM-DD HH:mm:ss")}}</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label>{{$moment(scope.row.regist_date).format("YYYY-MM-DD HH:mm:ss")}}</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                prop="floor_num"
                :label="$t('姓名')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      {{scope.row.real_name}}
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.real_name}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                prop="floor_num"
                :label="$t('录取号')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      {{scope.row.enroll_no}}
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.enroll_no}}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('性别')"
                align="center">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <my-sex :sex="scope.row.sex"></my-sex>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <my-sex :sex="scope.row.sex"></my-sex>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('院系')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.college_name">{{scope.row.college_name}}</label>
                      <label v-else>--</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.college_name">{{scope.row.college_name}}</label>
                      <label v-else>--</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('专业')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.major_name">{{scope.row.major_name}}</label>
                      <label v-else>--</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.major_name">{{scope.row.major_name}}</label>
                      <label v-else>--</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('宿舍')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.room_no">
                        {{scope.row.build_name}}{{scope.row.floor_num}}{{$t("层")}}{{scope.row.room_no}}
                      </label>
                      <label v-else>--</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.room_no">
                        {{scope.row.build_name}}{{scope.row.floor_num}}{{$t("层")}}{{scope.row.room_no}}
                      </label>
                      <label v-else>--</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <my-pagination :total="totalStudent" :current-page="pageStudent" :page-size="numStudent" @currentPage="currentStudentPage" @sizeChange="sizeDormChange" @jumpChange="jumpStudentPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
import MyPagination from "~/components/MyPagination";
import mixins from "~/utils/mixins";
import {common} from "~/utils/api/url";
import {dormTypeText, inArray, MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
import LayoutTb from "~/components/Layout/LayoutTb";
import MySelect from "~/components/MySelect";
import MyUserType from "~/components/utils/MyUserType";
import MyDatePicker from "~/components/MyDatePicker";
import MyInputButton from "~/components/search/MyInputButton";
import linkDormValidater from "~/utils/validater/linkDormValidater";
export default {
  mixins: [mixins,linkDormValidater],
  components: {MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton},
  props: {
    pageTitle: '',
    linkId: '',
  },
  data(){
    return {
      commAllCheck: false,
      commAllCheckCount: 0,
      checkboxCount: 0,
      payTips: '',
      pageDorm: 1,
      numDorm: 20,
      totalDorm: 0,
      pageStudent: 1,
      numStudent: 20,
      totalStudent: 0,
      tableData: [],
      searchDate: [],
      typeList: [],
      searchCommDeptBedData: [],
      searchCommDormData: [],
      searchCollegeData: [],
      tableDormData: [],
      tableStudnetData: [],
      tablePayData: [],
      tablePayObjData: [],
      tablePayEditData: [],
      fliterPCs: [],
      searchKey: '',
      commSearchBuild: '',
      commSearchFloor: '',
      commSearchRoom: '',
      searchDormBuild: '',
      searchDormFloor: '',
      searchDormRoom: '',
      searchStudentPC: '',
      visible: false,
      visibleConfim: false,
      dialogVisible: false,
      drawerVisible: false,
      drawerDorm: false,
      drawerStudent: false,
      drawerPay: false,
      tableDormLoading: false,
      dialogLoading: false,
      dialogMutiVisible: false,
      btnLoading: false,
      dialogEditVisible: false,
      clearTime: '',
      action: '',
      subTitle: '',
      searchDorm: '',
      searchStudnetCollege: '',
      searchStudnetMajor: '',
      searchStudnetGrade: '',
      searchStudnetClass: '',
      searchStudnetDrawerCollege: '',
      searchStudnetDrawerMajor: '',
      searchStudnetDrawerGrade: '',
      searchStudnetDrawerClass: '',
      commSearchDrawerBuild: '',
      commSearchDrawerFloor: '',
      commSearchDrawerRoom: '',
      selStudentData: [],
      selStudentDataOk: [],
      selStudentDataBakOk: [],
      selData: [],
      selDataBakOk: [],
      selDataOk: [],
      selPayData: [],
      form: {
        id: '',
        name: '',
        students: [],
        dorm: []
      },
      formPay: {
        deductionAmount: 0,
        delayAmount: 0,
        itemName: "",
        loanAmount: 0,
        totalAmount: 0,
        itemUserId: '',
        itemId: ''
      }
    }
  },
  created() {
    this.init();
    this.initBatchList();
  },
  methods: {
    init(){
      let params = {
        page: this.page,
        num: this.num,
        linkId: this.linkId,
        collegeId: this.searchStudnetCollege,
        majorId: this.searchStudnetMajor,
        grade: this.searchStudnetGrade,
        classId: this.searchStudnetClass,
        buildingId: this.commSearchBuild,
        floor: this.commSearchFloor,
        roomId: this.commSearchRoom
      };
      this.payTips = this.$t("暂无数据");
      this.$axios.get(common.enroll_link_pay_item_user_list, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;

          // let arr = [].concat(res.data.data.list);
          // let arrTempUser = [].concat(this.selPayData);
          // for (let i = 0; i < arr.length; i++){
          //   let sel = inArray(arr[i], arrTempUser, 'id');
          //   if (sel > -1){
          //     this.$refs.refPayTable.toggleRowSelection(arr[i], true);
          //   }
          // }
        }else if(res.data.code == 400){
          this.payTips = res.data.desc;
          this.tableDormLoading = false;
        }
      });
    },
    initDorm(){
      let params = {
        page: this.pageDorm,
        num: this.numDorm,
        buildId: this.searchBuildId,
        floorNum: this.searchFloorNum
      };
      this.tableDormLoading = true;
      this.$axios.get(common.dormroom_page, {params: params}).then(res => {
        if (res.data.data){
          this.tableDormData = res.data.data.list;
          this.totalDorm = res.data.data.totalCount;
          this.numDorm = res.data.data.num;
          this.pageDorm = res.data.data.currentPage;

          this.tableDormLoading = false;
        }
      });
    },
    async getStudent(){
      let params = {
        linkId: this.linkId
      }
      await this.$axios.get(common.enroll_link_user_get, {params: params}).then(res => {
        if (res.data.data){
          let array = [];
          for (let i = 0; i < res.data.data.length; i++){
            array.push({user_id: res.data.data[i]})
          }
          this.selStudentData = [].concat(array);
          this.selStudentDataOk = [].concat(array);
          this.selStudentDataBakOk = [].concat(array);
        }
      });
    },
    initStudent(){
      let params = {
        page: this.pageStudent,
        num: this.numStudent,
        collegeId: this.searchStudnetDrawerCollege,
        majorId: this.searchStudnetDrawerMajor,
        grade: this.searchStudnetDrawerGrade,
        classId: this.searchStudnetDrawerClass,
        buildingId: this.searchDormBuild,
        floor: this.searchDormFloor,
        roomId: this.searchDormRoom,
        enrollBatch: this.searchStudentPC
      };
      this.tableDormLoading = true;
      this.$axios.get(common.enroll_student_page, {params: params}).then(res => {
        if (res.data.data){
          let intersection=[];

          if (this.selStudentData.length == 0){
            intersection = this.selStudentDataOk;
            this.selStudentData = this.selStudentDataOk;
          }else {
            this.selStudentDataOk.forEach(x=>{
              this.selStudentData.forEach(y=>{
                if(x.user_id == y.user_id){//找到相同的就push进新的数组
                  intersection.push(x);
                }
              });
            });
          }

          for (let i = 0; i < res.data.data.list.length; i++){
            let sel = inArray(res.data.data.list[i], intersection, 'user_id');
            if (sel > -1){
              res.data.data.list[i]['_checked'] = true;
              this.checkboxCount++;
            }else {
              res.data.data.list[i]['_checked'] = false;
            }
          }
          if (this.checkboxCount != 0 && this.checkboxCount == this.tableStudnetData.length){
            this.commAllCheck = true;
          }else {
            this.commAllCheck = false;
          }

          this.tableStudnetData = res.data.data.list;
          this.totalStudent = res.data.data.totalCount;
          this.numStudent = res.data.data.num;
          this.pageStudent = res.data.data.currentPage;

          this.tableDormLoading = false;
        }
      });
    },
    initBatchList(){
      let params = {};
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
    getStudentRowKeys(row) {
      return row.user_id
    },
    getPayRowKeys(row) {
      return row.id
    },
    dormTypeInfo(val){
      return dormTypeText(val);
    },
    search(data){
      this.page = 1;
      this.searchKey = data.input;
      this.init();
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
    sizeDormChange(event){
      this.pageDorm = 1;
      this.numDorm = event;
      this.initDorm();
    },
    currentDormPage(event){
      this.pageDorm = event;
      this.initDorm();
    },
    jumpDormPage(data){
      this.pageDorm = data;
      this.initDorm();
    },
    sizeStudentChange(event){
      this.pageStudent = 1;
      this.numStudent = event;
      this.initDorm();
    },
    currentStudentPage(event){
      this.pageStudent = event;
      this.initDorm();
    },
    jumpStudentPage(data){
      this.pageStudent = data;
      this.initDorm();
    },
    returnMain(){
      this.$emit("returnClick");
    },
    addUser(){
      this.getStudent();
      this.initStudent();
      this.drawerStudent = true;
    },
    addPay(){
      let params = {
        linkId: this.linkId
      };
      this.$axios.get(common.enroll_link_pay_item_list, {params: params}).then(res => {
        if (res.data.data){
          this.tablePayObjData = res.data.data;
        }
      });
      this.drawerPay = true;
    },
    importInfo(){

    },
    expandInfo(){

    },
    mutiInfo(){
      let pays = [];
      let itemIds = [];
      for (let i = 0; i < this.selPayData.length; i++){
        let sel = inArray(this.selPayData[i].item_id, itemIds);
        if (sel == -1){
          itemIds.push(this.selPayData[i].item_id);
          pays.push({
            totalAmount: this.selPayData[i].total_amount,
            deductionAmount: this.selPayData[i].deduction_amount,
            loanAmount: this.selPayData[i].loan_amount,
            delayAmount: this.selPayData[i].delay_amount,
            itemId: this.selPayData[i].item_id,
            itemName: this.selPayData[i].item_name,
          });
        }
      }
      this.tablePayData = pays;
      this.dialogMutiVisible = true;
    },
    editInfo(item){
      this.formPay = {
        deductionAmount: item.deduction_amount,
        delayAmount: item.delay_amount,
        itemName: item.item_name,
        loanAmount: item.loan_amount,
        totalAmount: item.total_amount,
        itemUserId: item.id,
        itemId: item.item_id
      }
      this.tablePayEditData = [this.formPay];
      this.dialogEditVisible = true;
    },
    setInfo(item){

    },
    deleteInfo(item){
      this.form.id = item.id;
      this.visibleConfim = true;
    },
    mutiDeleteInfo(){
      let userIds = [];
      for (let i = 0; i < this.selPayData.length; i++){
        userIds.push(this.selPayData[i].id);
      }
      let params = {
        itemUserIds: userIds.join()
      };
      params = this.$qs.stringify(params);
      this.$axios.post(common.enroll_link_pay_item_user_del_batch, params).then(res => {
        if (res.data.code == 200){
          this.selPayData = [];
          if (this.$refs.refPayTable){
            this.$refs.refPayTable.clearSelection();
          }
          this.page = 1;
          this.init();
          this.dialogMutiVisible = false;
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
      });
    },
    addPayObj(item, index){
      let obj = {
        itemName: '',
        deductionAmount: 0,
        delayAmount: 0,
        loanAmount: 0,
        totalAmount: 0
      };
      if (index == -1){
        this.tablePayObjData.push(obj);
      }else{
        this.tablePayObjData.splice(index+1, 0, obj);
      }
    },
    deletePayObj(item, index){
      this.tablePayObjData.splice(index, 1);
    },
    dormManage(){
      this.initDorm();
      this.drawerDorm = true;
    },
    studentManage(){
      this.initStudent();
      this.drawerStudent = true;
    },
    handleSelectionChange(data){
      this.selStudentData = data;
    },
    handleSelectionPayChange(data){
      this.selPayData = data;
    },
    handleSearchChange(event){
      this.searchStudentPC = event;
      this.initStudent();
    },
    handleCancelChange(data) {
      this.visibleConfim = false;
    },
    handleCascaderBedChange(data){
      this.commSearchBuild = "";
      this.commSearchFloor = "";
      this.commSearchRoom = "";
      if (data.length == 1){
        this.commSearchBuild = data[0];
      }else if (data.length == 2){
        this.commSearchBuild = data[0];
        this.commSearchFloor = data[1];
      }else if (data.length == 3){
        this.commSearchBuild = data[0];
        this.commSearchFloor = data[1];
        this.commSearchRoom = data[2];
      }
    },
    handleCascaderDormChange(data){
      this.searchDormBuild = "";
      this.searchDormFloor = "";
      this.searchDormRoom = "";
      if (data.length == 1){
        this.searchDormBuild = data[0];
      }else if (data.length == 2){
        this.searchDormBuild = data[0];
        this.searchDormFloor = data[1];
      }else if (data.length == 3){
        this.searchDormBuild = data[0];
        this.searchDormFloor = data[1];
        this.searchDormRoom = data[2];
      }
      this.pageStudent = 1;
      this.initStudent();
    },
    handleCascaderDrawerStudentChange(data){
      this.searchStudnetDrawerCollege = "";
      this.searchStudnetDrawerMajor = "";
      this.searchStudnetDrawerGrade = "";
      this.searchStudnetDrawerClass = "";
      if (data.length == 1){
        this.searchStudnetDrawerCollege = data[0];
      }else if (data.length == 2){
        this.searchStudnetDrawerCollege = data[0];
        this.searchStudnetDrawerMajor = data[1];
      }else if (data.length == 3){
        this.searchStudnetDrawerCollege = data[0];
        this.searchStudnetDrawerMajor = data[1];
        this.searchStudnetDrawerGrade = data[2];
      }else if (data.length == 4){
        this.searchStudnetDrawerCollege = data[0];
        this.searchStudnetDrawerMajor = data[1];
        this.searchStudnetDrawerGrade = data[2];
        this.searchStudnetDrawerClass = data[3];
      }
      this.pageStudent = 1;
      this.initStudent();
    },
    handleCascaderStudentChange(data){
      this.searchStudnetCollege = "";
      this.searchStudnetMajor = "";
      this.searchStudnetGrade = "";
      this.searchStudnetClass = "";
      if (data.length == 1){
        this.searchStudnetCollege = data[0];
      }else if (data.length == 2){
        this.searchStudnetCollege = data[0];
        this.searchStudnetMajor = data[1];
      }else if (data.length == 3){
        this.searchStudnetCollege = data[0];
        this.searchStudnetMajor = data[1];
        this.searchStudnetGrade = data[2];
      }else if (data.length == 4){
        this.searchStudnetCollege = data[0];
        this.searchStudnetMajor = data[1];
        this.searchStudnetGrade = data[2];
        this.searchStudnetClass = data[3];
      }
    },
    handleOkChange(data) {
      this.dialogLoading = true;
      let url = "";
      let params = {
        itemUserId: this.form.id
      }
      url = common.enroll_link_pay_item_user_del;
      params = this.$qs.stringify(params);
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200){
          this.init();
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.dialogLoading = false;
        this.visibleConfim = false;
      });
    },
    closeDialog(event){
      this.form = {
        id: '',
      };
      this.formPay = {
        deductionAmount: 0,
        delayAmount: 0,
        itemName: "",
        loanAmount: 0,
        totalAmount: 0,
        itemUserId: '',
        itemId: ''
      };
      if (this.$refs['form']){
        this.$refs['form'].resetFields();
      }
      this.dialogVisible = false;
      this.dialogMutiVisible = false;
      this.dialogEditVisible = false;
    },
    closeDrawDialog(event){
      this.pageDorm = 1;
      this.numDorm = 20;
      this.totalDorm = 0;
      this.pageStudent = 1;
      this.numStudent = 20;
      this.totalStudent = 0;
      this.searchStudnetMajor = "";
      this.searchStudnetCollege = "";
      this.searchStudnetClass = "";
      this.searchStudnetGrade = "";
      this.commSearchBuild = "";
      this.commSearchFloor = "";
      this.searchDormBuild = '';
      this.searchDormFloor = '';
      this.searchStudnetDrawerCollege = "";
      this.searchStudnetDrawerMajor = "";
      this.searchStudnetDrawerGrade = "";
      this.searchStudnetDrawerClass = "";
      this.searchStudentPC = "";
      this.searchDormRoom = "";
      this.searchCollegeData = [];
      this.searchCommDeptBedData = [];
      this.searchCommDormData = [];
      this.tablePayObjData = [];
      this.selStudentDataBakOk = [];
      this.selStudentDataOk = this.selStudentDataBakOk;
      this.selStudentData = [];
      this.resetCasadeSelector('SelectorDormDept');
      this.resetCasadeSelector('SelectorCollege');
      this.resetCasadeSelector('SelectorDrawDormDept');
      if (this.$refs.tableStudentRef){
        this.$refs.tableStudentRef.clearSelection();
      }
      this.drawerDorm = false;
      this.drawerStudent = false;
      this.drawerPay = false;
    },
    cancelDrawDialog(event){
      this.closeDrawDialog();
      this.drawerDorm = false;
      this.drawerStudent = false;
      this.drawerPay = false;
    },
    okStudentDrawDialog(event, type){
      if (this.selStudentData.length == 0){
        MessageWarning(this.$t("请选择学生"));
        return;
      }
      let studentIds = [];
      this.selStudentDataOk = JSON.parse(JSON.stringify(this.selStudentData));
      this.selStudentDataBakOk = JSON.parse(JSON.stringify(this.selStudentData));
      for (let i = 0;i < this.selStudentDataOk.length; i++){
        studentIds.push(this.selStudentDataOk[i].user_id);
      }

      let url = common.enroll_link_pay_item_user_save;
      let params = {
        linkId: this.linkId,
        userIds: studentIds.join()
      };
      this.btnLoading = true;
      params = this.$qs.stringify(params);
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200){
          this.drawerStudent = false;
          this.init();
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.btnLoading = false;
      });

      this.drawerStudent = false;
    },
    okDrawPayDialog(event, type){
      if (this.tablePayObjData.length == 0){
        MessageWarning(this.$t("请设置收款项！"));
        return;
      }
      let pays = [];
      let errorNum = 0;
      for (let i = 0;i < this.tablePayObjData.length; i++){
        if (this.tablePayObjData[i].itemName == ''){
          errorNum++;
          break;
        }
        pays.push({
          deductionAmount: this.tablePayObjData[i].deductionAmount,
          delayAmount: this.tablePayObjData[i].delayAmount,
          itemName: this.tablePayObjData[i].itemName,
          loanAmount: this.tablePayObjData[i].loanAmount,
          totalAmount: this.tablePayObjData[i].totalAmount
        });
        if (this.tablePayObjData[i].id){
          pays[i]['id'] = this.tablePayObjData[i].id;
        }
      }

      if (errorNum > 0){
        MessageWarning(this.$t("请检查数据是否填写！"));
        return;
      }

      let url = common.enroll_link_pay_item_save;
      let params = {
        linkId: this.linkId,
        list: pays
      };
      this.btnLoading = true;
      //params = this.$qs.stringify(params)
      this.$axios.post(url, JSON.stringify(params), {dataType: 'stringfy',loading: false}).then(res => {
        if (res.data.code == 200){
          this.drawerPay = false;
          this.init();
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.btnLoading = false;
      });

      this.drawerStudent = false;
    },
    cancelDialog(){
      if (this.$refs['form']){
        this.$refs['form'].resetFields();
      }
      this.dialogVisible = false;
      this.dialogMutiVisible = false;
      this.dialogEditVisible = false;
    },
    okDialog(){
      let url = '';
      let userids = [];
      let pays = [];
      let itemIds = [];
      let errorNum = 0;
      for (let i = 0; i < this.selPayData.length; i++){
        userids.push(this.selPayData[i].id);
      }

      for (let i = 0; i < this.tablePayData.length; i++){
        if (this.tablePayData[i].itemName == ''){
          errorNum++;
          break;
        }
        pays.push({
          totalAmount: this.tablePayData[i].totalAmount,
          deductionAmount: this.tablePayData[i].deductionAmount,
          loanAmount: this.tablePayData[i].loanAmount,
          delayAmount: this.tablePayData[i].delayAmount,
          itemId: this.tablePayData[i].itemId,
        });
      }

      if (errorNum > 0){
        MessageWarning(this.$t("请检查数据是否填写！"));
        return;
      }
      let params = {
        itemUserIds: userids,
        list: pays,
      };

      this.btnLoading = true;
      url = common.enroll_link_pay_item_user_update_batch;
      //params = this.$qs.stringify(params);
      this.$axios.post(url, JSON.stringify(params), {dataType: 'stringfy', loading: false}).then(res => {
        if (res.data.code == 200){
          this.dialogMutiVisible = false;
          this.selPayData = [];
          if (this.$refs.tableStudentRef){
            this.$refs.refPayTable.clearSelection();
          }
          this.init();
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.btnLoading = false;
      });
    },
    okEditDialog(){
      let url = '';
      this.btnLoading = true;
      let params = {
        itemUserId: this.formPay.itemUserId,
        itemId: this.formPay.itemId,
        totalAmount: this.formPay.totalAmount,
        deductionAmount: this.formPay.deductionAmount,
        loanAmount: this.formPay.loanAmount,
        delayAmount: this.formPay.delayAmount,
      };
      url = common.enroll_link_pay_item_edit;
      params = this.$qs.stringify(params);
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200){
          this.dialogEditVisible = false;
          this.init();
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.btnLoading = false;
      });
    },
    _handleSelectionStudentSelect(event, row){
      if (event){//选中
        this.selStudentData.push(row);
        row._checked = true;
        this.checkboxCount++;
      }else {//取消选中
        let checked = inArray(row, this.selStudentData, 'user_id');
        this.selStudentData.splice(checked,1);
        row._checked = false;
        this.checkboxCount--;
      }
      if (this.checkboxCount != 0 && this.checkboxCount == this.tableStudnetData.length){
        this.commAllCheck = true;
      }else {
        this.commAllCheck = false;
      }
    },
    _handleSelectionStudentAllSelect(selection){
      this.commAllCheck = selection;
      for (let i = 0; i < this.tableStudnetData.length; i++){
        if (selection == true){
          this.tableStudnetData[i]._checked = true;
          let checked = inArray(this.tableStudnetData[i], this.selStudentData, 'user_id');
          if (checked == -1){
            this.selStudentData.push(this.tableStudnetData[i]);
          }
          this.checkboxCount++;
        }else {
          this.tableStudnetData[i]._checked = false;
          this.checkboxCount--;
        }
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
.header-block{
  height: 40px;
  line-height: 40px;
}
</style>
