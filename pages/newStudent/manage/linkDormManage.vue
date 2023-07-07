<template>
  <div class="container">
    <layout-tb>
      <template slot="tag"></template>

      <div slot="tab">
        <el-row>
          <el-col :span="24">
            <el-button size="small" type="text" @click="returnMain($event)">
              <i class="fa fa-arrow-left"></i>
              {{$t("返回")}}
            </el-button>
            <span class="margin-left-5">{{pageTitle}}</span>
            <el-button class="margin-left-5" size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("创建规则")}}</el-button>
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
            prop="department_name"
            :label="$t('创建时间')">

            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{$moment(scope.row.time).format("YYYY-MM-DD HH:mm:ss")}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{$moment(scope.row.time).format("YYYY-MM-DD HH:mm:ss")}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="action_name"
            :label="$t('规则名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  {{scope.row.rule_name}}
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.rule_name}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="user_name"
            :label="$t('总人数')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  {{scope.row.user_size}}
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.user_size}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
<!--          <el-table-column-->
<!--            align="center"-->
<!--            prop="ip"-->
<!--            :label="$t('状态')">-->
<!--            <template slot-scope="scope">-->
<!--              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">-->
<!--                <div class="text-center">-->

<!--                </div>-->
<!--                <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">-->

<!--                </span>-->
<!--              </el-popover>-->
<!--            </template>-->
<!--          </el-table-column>-->
          <el-table-column
            align="center"
            width="120"
            :label="$t('操作')">
            <template slot-scope="scope">
<!--              <i class="fa fa-flag margin-right-5 color-grand" @click="setInfo(scope.row)"></i>-->
              <i class="fa fa-edit margin-right-5 color-success" @click="editInfo(scope.row)"></i>
              <i class="fa fa-eye margin-right-5 color-success" v-if="scope.row.rule_type == 1" @click="detailInfo(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal top="10vh" width-style="650px" :visible="dialogVisible" :title="$t('规则设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="200px">
          <el-form-item :label="$t('规则名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('选寝类型')" prop="type">
            <my-select class="layout-item" width-style="260" :sel-value="form.type" :options="filterType" :clearable="true" @change="handleSearchChange($event, 3)"></my-select>
          </el-form-item>
          <template v-if="form.type == 0">
            <el-form-item :label="$t('宿舍范围')" prop="dorm">
              <el-button size="mini" type="warning" @click="dormManage">{{$t('添加宿舍')}}</el-button>
              <span class="color-muted margin-left-10">{{$t('宿舍数量')}}</span>
              <span class="color-muted">{{selDormDataOk.length}}</span>
            </el-form-item>
          </template>
<!--          <template v-if="form.type == 1">-->
<!--            <el-form-item :label="$t('选寝范围')" prop="type">-->
<!--              <my-select class="layout-item" width-style="260" :sel-value="form.area" :options="filterArea" :clearable="true" @change="handleSearchChange($event, 4)"></my-select>-->
<!--            </el-form-item>-->
<!--          </template>-->
          <el-form-item :label="$t('学生范围')" prop="student">
            <el-button size="mini" type="warning" @click="studentManage">{{$t('添加学生')}}</el-button>
            <span class="color-muted margin-left-10">{{$t('学生人数')}}</span>
            <span class="color-muted">{{selStudentDataOk.length}}</span>
            <span class="color-muted">{{$t('人')}}</span>
          </el-form-item>
          <template v-if="form.type == 1">
            <div>
              <el-button size="mini" icon="el-icon-plus" type="success" plain @click="addObj($event, -1)">{{$t("添加套餐")}}</el-button>
            </div>
            <div class="margin-top-5">
              <el-table
                border
                ref="refTable"
                :data="form.package"
                header-cell-class-name="custom-table-cell-bg"
                size="medium"
                style="width: 100%">
                <el-table-column align="center" :label="$t('区域范围')">
                  <template slot-scope="scope">
                    <el-input size="mini" style="width: 80px" v-model="scope.row.packageArea"></el-input>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('套餐名称')">
                  <template slot-scope="scope">
                    <el-input size="mini" style="width: 80px" v-model="scope.row.packageName"></el-input>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('套餐价格')">
                  <template slot-scope="scope">
                    <el-input size="mini" style="width: 80px" v-model="scope.row.packagePrice"></el-input>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('套餐数量')">
                  <template slot-scope="scope">
                    <el-input size="mini" style="width: 80px" v-model="scope.row.packageNum"></el-input>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('示意图')">
                  <template slot-scope="scope">
                    <div class="layout-inline">
                      <span class="custom-avatar layout-item" style="position: relative; top: 2px" v-if="scope.row.packageImg.length > 0">
                        <el-image v-for="(item, index) in scope.row.packageImg" :key="index" style="width: 15px; height: 15px;margin-right: 5px" :src="item" fit="fill"></el-image>
                      </span>
                      <span>
                      <upload-square class="layout-item" :action="uploadFileUrl" max-size="8" :limit="3" :data="{path: 'package'}" accept=".png,.jpg,.jpeg" @success="(res, file)=>uploadFileSuccess(res, file, scope.$index)">
                        <div class="upload-block-class">
                          <span class="fa fa-plus-circle color-success"></span>
                        </div>
                      </upload-square>
                    </span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column align="center" width="80" :label="$t('操作')">
                  <template slot-scope="scope">
                    <i class="fa fa-plus color-success margin-right-5" @click="addObj($event, scope.$index)"></i>
                    <i class="fa fa-times color-danger" @click="deleteObj($event, scope.$index)"></i>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </template>
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

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawDialog" :visible="drawerDorm" size="700px" :title="$t('宿舍设置')" @right-close="cancelDrawDialog">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <el-row>
            <el-col :span="12">
              <span class="tab-class font-bold">
                <i class="fa fa-user"></i>
                {{$t('宿舍设置')}}
              </span>
            </el-col>
            <el-col :span="12" class="text-right">
              <span class="tab-class font-bold">
                <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
                <el-button size="small" type="primary" @click="okDrawDialog($event, 1)">{{$t("保存")}}</el-button>
              </span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div>
          <div class="layout-inline">
            <my-cascader class="layout-item" :clearable="true" ref="SelectorDormDept" size="small" width-style="160" :sel-value="searchCommDeptBedData" type="2" sub-type="2" @change="handleCascaderBedChange($event)"></my-cascader>
            <my-select class="layout-item" size="small" :clearable="true" :options="filtersDormType" @change="handleSearchChange($event, 1)"></my-select>
          </div>
          <div>
            <el-table class="margin-top-10"
                      ref="tableDormRef"
                      :data="tableDormData"
                      size="mini"
                      v-loading="tableDormLoading"
                      :row-key="getDormRowKeys"
                      @selection-change="handleDormSelectionChange">
              <el-table-column
                width="55">
                <template slot="header" slot-scope="scope">
                  <el-checkbox v-model="commAllCheck" @change="_handleSelectionAllSelect"></el-checkbox>
                </template>

                <template slot-scope="scope">
                  <el-checkbox v-model="scope.row._checked" @change="_handleSelectionSelect($event, scope.row)"></el-checkbox>
                </template>
              </el-table-column>
              <el-table-column
                label="楼栋"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label>{{scope.row.build_name}}</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label>{{scope.row.build_name}}</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                prop="floor_num"
                :label="$t('楼层')"
                align="center">
              </el-table-column>
              <el-table-column
                :label="$t('类型')"
                align="center">

                <template slot-scope="scope">
                  <span>{{dormTypeInfo(scope.row.type)}}</span>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('管理员')"
                align="center">

                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label>{{scope.row.teacher_name ? scope.row.teacher_name : '--'}}</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label>{{scope.row.teacher_name ? scope.row.teacher_name : '--'}}</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('床位总数')"
                align="center">
                <template slot-scope="scope">
                  <span>{{scope.row.people_num}}</span>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('可用床位')"
                align="center">
                <template slot-scope="scope">
                  <span>{{scope.row.people_num - scope.row.has_people_num}}</span>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('朝向')"
                align="center">
                <template slot-scope="scope">
                  <span>{{scope.row.room_orient}}</span>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('单价')"
                align="center">
                <template slot-scope="scope">
                  <span>{{scope.row.room_price}}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <my-pagination :total="totalDorm" :current-page="pageDorm" :page-size="numDorm" @currentPage="currentDormPage" @sizeChange="sizeDormChange" @jumpChange="jumpDormPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawDialog" :visible="drawerStudent" size="850px" :title="$t('学生设置')" @right-close="cancelDrawDialog">
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
                <el-button size="small" type="primary" @click="okDrawDialog($event, 2)">{{$t("保存")}}</el-button>
              </span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div>
          <div class="layout-inline">
            <my-cascader :props="{ checkStrictly: true }" class="layout-item" ref="SelectorCollege" size="small" width-style="150" :clearable="true" :sel-value="searchCollegeData" type="1" sub-type="4" @change="handleCascaderStudentChange($event)"></my-cascader>
            <my-select class="layout-item" width-style="140" size="small" :clearable="true" :sel-value="searchDormSex" :options="g_sex" @change="handleSearchChange($event, 2)"></my-select>
            <my-select class="layout-item " size="small" :placeholder="$t('选择批次')" :clearable="true" :sel-value="searchStudentPC" :options="fliterPCs" width-style="100" @change="handleSearchChange($event, 5)"></my-select>
            <el-date-picker
              size="small"
              unlink-panels
              v-model="searchTimeUserData"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              @change="handleChangeTime($event,1)"
              style="width: 220px">
            </el-date-picker>
            <my-input-button ref="userRef" size="small" plain width-class="width: 130px" type="success" :clearable="true" :placeholder="$t('名称')" @click="searchUser"></my-input-button>
          </div>
          <div>
            <el-table class="margin-top-10"
                      ref="tableStudentRef"
                      :data="tableStudnetData"
                      size="mini"
                      v-loading="tableDormLoading"
                      :row-key="getStudentRowKeys"
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
          <my-pagination :total="totalStudent" :current-page="pageStudent" :page-size="numStudent" @currentPage="currentStudentPage" @sizeChange="sizeStudentChange" @jumpChange="jumpStudentPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawDialog" :visible="dialogPackage" size="700px" :title="$t('套餐详细')" @right-close="cancelDrawDialog">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <el-row>
            <el-col :span="24">
              <span class="tab-class font-bold">
                <i class="fa fa-file"></i>
                {{$t('套餐详细')}}
              </span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div>
          <div>
            <el-table class="margin-top-10"
                      ref="tableDormRef"
                      :data="tablePackagedata"
                      size="mini"
                      v-loading="tableDormLoading">
              <el-table-column
                prop="floor_num"
                :label="$t('套餐名称')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label>{{scope.row.pacName}}</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label>{{scope.row.pacName}}</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('套餐价格')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label>{{scope.row.pacPrice}}</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label>{{scope.row.pacPrice}}</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('套餐总量')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label>{{scope.row.pacNum}}</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label>{{scope.row.pacNum}}</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                :label="$t('剩余总数')"
                align="center">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label>{{scope.row.pacNum - scope.row.pacNumChose}}</label>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label>{{scope.row.pacNum - scope.row.pacNumChose}}</label>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
            </el-table>
          </div>
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
import UploadSquare from "~/components/utils/upload/UploadSquare";
import DialogNormal from "~/components/utils/dialog/DialogNormal";
import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";
export default {
  mixins: [mixins,linkDormValidater],
  components: {
    DrawerLayoutRight,
    DialogNormal, UploadSquare, MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton},
  props: {
    pageTitle: '',
    linkId: '',
    processId: ''
  },
  data(){
    return {
      commAllCheck: false,
      commAllCheckCount: 0,
      checkboxCount: 0,
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
      searchCollegeData: [],
      tableDormData: [],
      tableStudnetData: [],
      tablePackagedata: [],
      fliterPCs: [],
      searchKey: '',
      commSearchBuild: '',
      commSearchFloor: '',
      searchDormSex: '',
      searchDormType: '',
      commFlag: false,
      visible: false,
      visibleConfim: false,
      dialogVisible: false,
      drawerVisible: false,
      drawerDorm: false,
      drawerStudent: false,
      tableDormLoading: false,
      dialogLoading: false,
      rowSelectFlag: false,
      dialogPackage: false,
      clearTime: '',
      action: '',
      subTitle: '',
      searchDorm: '',
      searchStudnetCollege: '',
      searchStudnetMajor: '',
      searchStudnetGrade: '',
      searchStudnetClass: '',
      selStudentData: [],
      selStudentDataOk: [],
      selStudentDataBakOk: [],
      selDormData: [],
      selDormDataOk: [],
      selDormDataBakOk: [],
      commRow: '',
      searchStudentPC: '',
      uploadFileUrl: common.upload_file,
      searchTimeUserData: [],
      searchUserKey: '',
      filterType: [
        { text: this.$t("按宿舍选"), value: 0 ,label: this.$t("按宿舍选")},
        { text: this.$t("按套餐选"), value: 1 ,label: this.$t("按套餐选")},
      ],
      filtersDormType: [
        {text: '男生宿舍',value: "0", label: '男生宿舍'},
        {text: '女生宿舍',value: "1", label: '女生宿舍'}
      ],
      filterArea: [
        {text: '校内宿舍',value: 1, label: '校内宿舍'},
        {text: '校外公寓',value: 2, label: '校外公寓'}
      ],
      form: {
        id: '',
        name: '',
        students: [],
        dorm: [],
        type: 0,
        package: [],
        area: 1,
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
        linkId: this.linkId
      };
      this.$axios.get(common.enroll_link_dorm_rule, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },
    initDorm(){
      let params = {
        page: this.pageDorm,
        num: this.numDorm,
        buildId: this.searchBuildId,
        floorNum: this.searchFloorNum,
        type: this.searchDormType
      };
      this.checkboxCount = 0;
      this.tableDormLoading = true;
      this.$axios.get(common.dormroom_page, {params: params}).then(res => {
        if (res.data.data){
          let intersection=[];

          if (this.selDormData.length == 0){
            intersection = this.selDormDataOk;
            this.selDormData = this.selDormDataOk;
          }else {
            this.selDormDataOk.forEach(x=>{
              this.selDormData.forEach(y=>{
                if(x.id == y.id){//找到相同的就push进新的数组
                  intersection.push(x);
                }
              });
            });
          }
          for (let i = 0; i < res.data.data.list.length; i++){
            let sel = inArray(res.data.data.list[i], intersection, 'id');
            if (sel > -1){
              this.commFlag = true;
              res.data.data.list[i]['_checked'] = true;
              this.checkboxCount++;
            }else {
              res.data.data.list[i]['_checked'] = false;
            }
          }
          if (this.checkboxCount != 0 && this.checkboxCount == this.tableDormData.length){
            this.commAllCheck = true;
          }else {
            this.commAllCheck = false;
          }
          this.commFlag = false;
          this.tableDormData = res.data.data.list;
          this.totalDorm = res.data.data.totalCount;
          this.numDorm = res.data.data.num;
          this.pageDorm = res.data.data.currentPage;

          // this.rowSelectFlag = true
          // let selArr = [];
          // let arr = [].concat(res.data.data.list);
          // let arrTempUser = [].concat(this.selDormDataOk);
          //
          // for (let i = 0; i < arr.length; i++){
          //   let sel = inArray(arr[i], arrTempUser, 'id');
          //   if (sel > -1){
          //     this.$refs.tableDormRef.toggleRowSelection(arr[i], true);
          //   }
          // }
          // this.rowSelectFlag = false
          this.tableDormLoading = false;
        }
      });
    },
    initStudent(){
      let params = {
        page: this.pageStudent,
        num: this.numStudent,
        collegeId: this.searchStudnetCollege,
        majorId: this.searchStudnetMajor,
        grade: this.searchStudnetGrade,
        classId: this.searchStudnetClass,
        sex: this.searchDormSex,
        enrollBatch: this.searchStudentPC,
        beginTime: (this.searchTimeUserData && this.searchTimeUserData.length > 0) ? this.$moment(this.searchTimeUserData[0]).format("YYYY-MM-DD") : '',
        endTime: (this.searchTimeUserData && this.searchTimeUserData.length > 0) ? this.$moment(this.searchTimeUserData[1]).format("YYYY-MM-DD") : '',
        searchKey: this.searchUserKey,
        processId: this.processId,
        topUserId: this.selStudentData.length > 0 ? this.selStudentData : []
      };
      this.checkboxCount = 0;
      this.tableDormLoading = true;
      this.$axios.post(common.enroll_student_page, JSON.stringify(params) ,{dataType: 'stringfy'}).then(res => {
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
              this.commFlag = true;
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
          this.commFlag = false;

          this.tableStudnetData = res.data.data.list;
          this.totalStudent = res.data.data.totalCount;
          this.numStudent = res.data.data.num;
          this.pageStudent = res.data.data.currentPage;

          // this.rowSelectFlag = true
          // let selArr = [];
          // let arr = [].concat(res.data.data.list);
          // let arrTempUser = [].concat(this.selStudentDataOk);
          //
          // for (let i = 0; i < arr.length; i++){
          //   let sel = inArray(arr[i], arrTempUser, 'user_id');
          //   if (sel > -1){
          //     this.$refs.tableStudentRef.toggleRowSelection(arr[i], true);
          //   }
          // }
          // this.rowSelectFlag = false
          this.tableDormLoading = false;
        }
      });
    },
    initPackage(item){
      let params = {
        id: item.id
      };
      this.tableDormLoading = true;
      this.$axios.get(common.enroll_link_dorm_info, {params: params, loading: false}).then((res)=>{
        if (res.data.data) {
          this.tablePackagedata = res.data.data.listPackage;
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
    getDormRowKeys(row) {
      return row.id;
    },
    handleSelectionChange(data){
      //this.selStudentData = data;
    },
    handleDormSelectionChange(data){
      //console.log(data);
      //this.selDormData = data;
    },
    _handleSelectionSelect(event, row){
      if (event){//选中
        this.selDormData.push(row);
        row._checked = true;
        this.checkboxCount++;
      }else {//取消选中
        let checked = inArray(row, this.selDormData, 'id');
        this.selDormData.splice(checked,1);
        row._checked = false;
        this.checkboxCount--;
      }
      if (this.checkboxCount != 0 && this.checkboxCount == this.tableDormData.length){
        this.commAllCheck = true;
      }else {
        this.commAllCheck = false;
      }
    },
    _handleSelectionAllSelect(selection){
      this.commAllCheck = selection;
      for (let i = 0; i < this.tableDormData.length; i++){
        if (selection == true){
          this.tableDormData[i]._checked = true;
          let checked = inArray(this.tableDormData[i], this.selDormData, 'id');
          if (checked == -1){
            this.selDormData.push(this.tableDormData[i]);
          }
          this.checkboxCount++;
        }else {
          this.tableDormData[i]._checked = false;
          let checked = inArray(this.tableDormData[i], this.selDormData, 'id');
          if (checked > -1){
            this.selDormData.splice(checked, 1);
            i = i - 1;
          }
          this.checkboxCount--;
        }
      }
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
          let checked = inArray(this.tableStudnetData[i], this.selStudentData, 'user_id');
          if (checked > -1){
            this.selStudentData.splice(checked, 1);
            i = i - 1;
          }
          this.checkboxCount--;
        }
      }
    },
    removeDuplicateObj(arr){
      let newArr = []
      let obj = {};
      for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i].id]) {
          newArr.push(arr[i]);
          obj[arr[i].id] = true;
        }
      }
      return newArr
    },
    dormTypeInfo(val){
      return dormTypeText(val);
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
      this.initStudent();
    },
    currentStudentPage(event){
      this.pageStudent = event;
      this.initStudent();
    },
    jumpStudentPage(data){
      this.pageStudent = data;
      this.initStudent();
    },
    returnMain(){
      this.$emit("returnClick");
    },
    addInfo(){
      this.dialogVisible = true;
    },
    detailInfo(item){
      this.initPackage(item);
      this.dialogPackage = true;
    },
    editInfo(item){
      this.form = {
        id: item.id,
        name: item.rule_name,
        type: item.rule_type
      };
      let params = {
        id: item.id
      };
      this.$axios.get(common.enroll_link_dorm_info, {params: params, loading: false}).then((res)=>{
        if (res.data.data){
          let arrayStudent = [];
          let arrayDorm = [];
          let arrayPackage = [];
          for (let i = 0; i < res.data.data.userList.length; i++){
            arrayStudent.push({
              user_id: res.data.data.userList[i].userId
            });
          }
          for (let i = 0; i < res.data.data.roomList.length; i++){
            arrayDorm.push({
              id: res.data.data.roomList[i].roomId
            });
          }

          for (let i = 0; i < res.data.data.listPackage.length; i++){
            arrayPackage.push({
              id: res.data.data.listPackage[i].id,
              packageArea: res.data.data.listPackage[i].pacRegion,
              packageName: res.data.data.listPackage[i].pacName,
              packagePrice: res.data.data.listPackage[i].pacPrice,
              packageNum: res.data.data.listPackage[i].pacNum,
              packageImg: res.data.data.listPackage[i].pacLogo ? res.data.data.listPackage[i].pacLogo.split(",") : [],
            });
          }

          this.selStudentData = [].concat(arrayStudent);
          this.selStudentDataOk = [].concat(arrayStudent);
          this.selStudentDataBakOk = [].concat(arrayStudent);

          this.selDormData = [].concat(arrayDorm);
          this.selDormDataOk = [].concat(arrayDorm);
          this.selDormDataBakOk = [].concat(arrayDorm);

          this.form.package = arrayPackage;
        }
      });

      this.dialogVisible = true;
    },
    setInfo(item){

    },
    deleteInfo(item){
      this.form.id = item.id;
      this.visibleConfim = true;
    },
    dormManage(){
      if (this.$refs.tableDormRef){
        this.$refs.tableDormRef.clearSelection();
      }
      this.pageDorm = 1;
      this.initDorm();
      this.drawerDorm = true;
    },
    studentManage(){
      if (this.$refs.tableStudentRef){
        this.$refs.tableStudentRef.clearSelection();
      }
      this.pageStudent = 1;
      this.initStudent();
      this.drawerStudent = true;
    },
    handleCancelChange(data) {
      this.visibleConfim = false;
    },
    handleSearchChange(event, type){
      if (type == 1){
        this.searchDormType = event;
        this.pageDorm = 1;
        this.initDorm();
      }else if (type == 2){
        this.pageStudent = 1;
        this.searchDormSex = event;
        //this.initStudent();
      }else if (type == 3){
        this.form.type = event;
      }else if (type == 4){
        this.form.area = event;
      }else if (type == 5){
        this.searchStudentPC = event;
        //this.initStudent();
      }
    },
    handleCascaderBedChange(data){
      this.commSearchBuild = "";
      this.commSearchFloor = "";
      if (data.length == 1){
        this.commSearchBuild = data[0];
      }else if (data.length == 2){
        this.commSearchBuild = data[0];
        this.commSearchFloor = data[1];
      }
      this.pageDorm = 1;
      this.initDorm();
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
      this.pageStudent = 1;
      //this.initStudent();
    },
    handleChangeTime(event, type){
      if (type == 1){
        this.searchTimeUserData = event ? event : [];
      }
    },
    searchUser(data){
      this.pageStudent = 1;
      this.searchUserKey = data.input;
      this.initStudent();
    },
    handleOkChange(data) {
      this.dialogLoading = true;
      let url = "";
      let params = {
        id: this.form.id
      }
      url = common.enroll_link_dorm_del;
      params = this.$qs.stringify(params);
      this.$axios.post(url, params, {loading: false}).then(res => {
        if (res.data.code == 200){
          this.init();
          MessageSuccess(res.data.desc);
        }else {
          MessageError(res.data.desc);
        }
        this.visibleConfim = false;
      });
    },
    closeDialog(event){
      this.form = {
        id: '',
        name: '',
        students: [],
        dorm: [],
        type: 0,
        package: [],
        area: 1,
      };
      if (this.$refs['form']){
        this.$refs['form'].resetFields();
      }
      this.selStudentDataOk = [];
      this.selStudentDataBakOk = [];
      this.selStudentData = [];
      this.selDormDataOk = [];
      this.selDormDataBakOk = [];
      this.selDormData = [];
      this.drawerVisible = false;
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
      this.searchStudentPC = "";
      this.searchDormSex = "";
      this.searchCollegeData = [];
      this.searchCommDeptBedData = [];
      this.resetCasadeSelector('SelectorDormDept');
      this.resetCasadeSelector('SelectorCollege');
      this.selStudentDataOk = this.selStudentDataBakOk;
      this.selStudentData = [];
      this.selDormDataOk = this.selDormDataBakOk;
      this.selDormData = [];
      if (this.$refs.tableStudentRef){
        this.$refs.tableStudentRef.clearSelection();
      }
      if (this.$refs.tableDormRef){
        this.$refs.tableDormRef.clearSelection();
      }
      this.searchUserKey = "";
      if (this.$refs.teacher){
        this.$refs.teacher.inputValue = "";
      }
      if (this.$refs.userRef){
        this.$refs.userRef.inputValue = "";
      }
      this.searchTimeUserData = [];
      this.commAllCheck = false;
      this.drawerDorm = false;
      this.drawerStudent = false;
      this.dialogPackage = false;
    },
    cancelDrawDialog(event){
      this.closeDrawDialog();
      this.drawerDorm = false;
      this.drawerStudent = false;
    },
    cancelDialog(){
      if (this.$refs['form']){
        this.$refs['form'].resetFields();
      }
      this.dialogVisible = false;
    },
    okDialog(){
      let url = '';
      this.$refs['form'].validate((valid) => {
        if (valid) {
          let studentIds = [];
          let roomIds = [];
          let params = {};

          if (this.form.type === 0){
            if (this.selDormDataOk.length == 0){
              MessageWarning(this.$t("请选择宿舍！"));
              return;
            }

            for (let i = 0;i < this.selStudentDataOk.length; i++){
              studentIds.push(this.selStudentDataOk[i].user_id);
            }
            for (let i = 0;i < this.selDormDataOk.length; i++){
              roomIds.push(this.selDormDataOk[i].id);
            }
            params = {
              linkId: this.linkId,
              ruleName: this.form.name,
              ruleType: this.form.type,
              roomIds: roomIds.join(),
              userIds: studentIds.join(),
            }
          }else if (this.form.type === 1){
            if (this.form.package.length == 0){
              MessageWarning(this.$t("请设置套餐！"));
              return;
            }
            let packageArr = [];
            for(let i = 0; i < this.form.package.length; i++){
              packageArr.push({
                "pacRegion": this.form.package[i].packageArea,
                "pacName": this.form.package[i].packageName,
                "pacPrice": this.form.package[i].packagePrice,
                "pacNum": this.form.package[i].packageNum,
                "pacLogo": this.form.package[i].packageImg.join()
              });
              if (this.form.package[i].id){
                packageArr[i]['id'] = this.form.package[i].id;
              }
            }
            for (let i = 0;i < this.selStudentDataOk.length; i++){
              studentIds.push(this.selStudentDataOk[i].user_id);
            }
            params = {
              linkId: this.linkId,
              ruleName: this.form.name,
              ruleType: this.form.type,
              packages: JSON.stringify(packageArr),
              userIds: studentIds.join(),
            }
          }
          if (this.selStudentDataOk.length == 0){
            MessageWarning(this.$t("请选择学生！"));
            return;
          }

          this.dialogLoading = true;

          if (this.form.id != ''){
            params['id'] = this.form.id;
          }
          url = common.enroll_link_dorm_save;
          params = this.$qs.stringify(params);
          this.$axios.post(url, params, {loading: false}).then(res => {
            if (res.data.code == 200){
              this.dialogVisible = false;
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
    okDrawDialog(event, type){
      let url = "";
      if (type == 1){
        // if (this.selDormData.length == 0){
        //   MessageWarning(this.$t("请选择宿舍"));
        //   return;
        // }
        this.selDormDataOk = JSON.parse(JSON.stringify(this.selDormData));
        this.selDormDataBakOk = JSON.parse(JSON.stringify(this.selDormData));
      }else if (type == 2){
        // if (this.selStudentData.length == 0){
        //   MessageWarning(this.$t("请选择学生"));
        //   return;
        // }
        this.selStudentDataOk = JSON.parse(JSON.stringify(this.selStudentData));
        this.selStudentDataBakOk = JSON.parse(JSON.stringify(this.selStudentData));
      }
      this.drawerStudent = false;
      this.drawerDorm = false;
    },
    addObj(item, index){
      let obj = {
        packageArea: '',
        packageName: '',
        packagePrice: 0,
        packageNum: 0,
        packageImg: [],
      };
      if (index == -1){
        this.form.package.push(obj);
      }else{
        this.form.package.splice(index+1, 0, obj);
      }
    },
    deleteObj(item, index){
      this.form.package.splice(index, 1);
    },
    uploadFileSuccess(res, file, index){
      if (res.code == 200){
        let images = this.form.package[index]['packageImg'];
        images.push(res.data.url);
        this.$set(this.form.package[index], 'packageImg', images);
        console.log(this.form.package,index);
      }else {

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
