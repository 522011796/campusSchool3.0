<template>
  <div>
    <div class="form-set-main">
      <div class="pull-right form-set-right padding-tb-10 padding-lr-10" style="overflow-y: auto" :style="drawHeight6">
        <template v-if="settingType == ''">
          <div class="text-center" style="margin-top: 20%;">
            <span class="color-muted font-size-15">
              <i class="fa fa-info-circle"></i>
              {{$t("请选择需要设置的模块")}}
            </span>
          </div>
        </template>

        <template v-else>
          <div class="color-sub-grand font-size-12 font-bold">
            <span><i class="fa fa-info-circle color-muted margin-right-5"></i>{{$t("字段名称")}}</span>
          </div>
          <div class="line-height"></div>
          <div class="color-muted font-size-12" v-if="settingType != 'table'">
            <div class="color-sub-grand">
              <span>{{$t("字段别名")}}</span>
            </div>
            <div class="margin-top-5">
              <el-input v-if="settingType == 'card'" size="small" class="width-300" v-model="form.cardTitle" @input="inputCard($event, settingColValue)"></el-input>
              <el-input v-if="settingType == 'search'" size="small" class="width-300" v-model="form.searchStaticTitle" @input="inputCard($event)"></el-input>
              <el-input v-if="settingType == 'bar'" size="small" class="width-300" v-model="form.chartParam" @input="inputCard($event)"></el-input>
              <el-input v-if="settingType == 'circle'" size="small" class="width-300" v-model="form.circleParams" @input="inputCard($event)"></el-input>
            </div>
          </div>
          <div v-if="settingType == 'search'" class="color-sub-grand font-size-12 margin-top-10">
            <div>
              <div>
                <span>{{$t("筛选类型")}}</span>
              </div>
              <div class="margin-top-5">
                <div class="layout-inline">
                  <my-select class="layout-item" :width-style="300" size="small" :placeholder="$t('筛选条件')" :sel-value="searchSetStaticForm" :options="searchStaticFormOptions2" :clearable="false" @change="handleSearchChange($event,1)"></my-select>
                </div>
<!--                <div class="margin-top-10">-->
<!--                  <my-cascader v-if="searchSetStaticForm == 'college'" ref="SelectorSearchCollege" size="small" width-style="300" :props="{multiple: true}" :sel-value="searchSetStaticFormOption" type="1" sub-type="4" @change="handleSearchSelect($event, 1)"></my-cascader>-->
<!--                  <my-cascader v-if="searchSetStaticForm == 'dept'" ref="SelectorSearchDept" size="small" width-style="300" :props="{multiple: true}" :sel-value="searchSetStaticFormOption" type="4" sub-type="" @change="handleSearchSelect($event, 2)"></my-cascader>-->
<!--                </div>-->
              </div>
            </div>
<!--            <div class="margin-top-10">-->
<!--              <div>-->
<!--                <span>{{$t("时间设置")}}</span>-->
<!--              </div>-->
<!--              <div class="margin-top-5">-->
<!--                <div class="layout-inline">-->
<!--                  <el-date-picker-->
<!--                    v-model="searchSetStaticTimeForm"-->
<!--                    size="small"-->
<!--                    type="daterange"-->
<!--                    range-separator="至"-->
<!--                    start-placeholder="开始日期"-->
<!--                    end-placeholder="结束日期"-->
<!--                    style="width: 300px;"-->
<!--                    @change="handleSearchChange($event, 3)">-->
<!--                  </el-date-picker>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
          </div>
          <template v-if="settingType == 'table'">
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("聚合规则")}}</span>
              </div>
              <div class="margin-top-5">
                <el-select v-model="form.tableJoin" @change="handleJoinTableChange" size="small" class="width-300" placeholder="请选择">
                  <el-option
                    v-for="item in joinTableJoinOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </template>
          <div v-if="settingType != 'search'" class="color-sub-grand font-size-12 margin-top-10">
            <div>
              <span>{{$t("选择关联表单")}}</span>
            </div>
            <div class="margin-top-5">
              <el-select v-model="form.joinFormValue" @change="handleJoinFormValue" size="small" class="width-300" placeholder="请选择">
                <el-option
                  v-for="item in joinFormOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <template v-if="settingType == 'table'">
            <div class="margin-top-5 font-size-12">
              <span>{{$t("过滤条件")}}</span>
            </div>
            <div class="margin-top-5">
              <my-cascader ref="SelectorCollege" :placeholder="$t('请选择院系')" class="margin-top-5" size="small" width-style="300" :props="{multiple: true}" :collapse-tags="true" :sel-value="form.fliterTableCollegeOption" type="1" sub-type="4" @change="handleSelectCollege($event, 'college')"></my-cascader>
              <my-cascader ref="SelectorDept" :placeholder="$t('请选择部门')" class="margin-top-5" size="small" width-style="300" :props="{multiple: true}" :collapse-tags="true" :sel-value="form.fliterTableDeptOption" type="4" sub-type="" @change="handleSelectDept($event, 'dept')"></my-cascader>

              <el-select v-model="form.fliterTableStatusOption" multiple @change="handleSelectStatus($event, 'status')" size="small" class="width-300 margin-top-5" filterable :placeholder="$t('请选择审批状态')">
                <el-option
                  v-for="item in searchStatusFormOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>

              <el-date-picker
                class="margin-top-5"
                v-model="form.fliterTableTimeOption"
                size="small"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 300px"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                @change="handleSelectFliter($event, 'time')">
              </el-date-picker>
            </div>
          </template>
          <template v-if="settingType == 'circle' && settingType != 'search'">
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("分子字段")}}</span>
              </div>
              <div class="margin-top-5">
                <div>
                  <el-row :gutter="8">
                    <el-col :span="12">
                      <el-select v-model="form.joinFormMoleculeParamsValue" size="small" placeholder="请选择字段">
                        <el-option
                          v-for="(item, index) in joinFormParamsOptions"
                          :key="index"
                          :label="item.label"
                          :value="item.value"
                          @click.native="handleJoinFormParamsChange(item, index, 'Molecule')">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="12">
                      <el-select v-model="form.circleMoleculeJoinOption" @change="handleJoinFormChange($event, 'Molecule')" size="small" placeholder="聚合规则">
                        <el-option
                          v-for="item in joinFormJoinOptions"
                          :key="item.value"
                          v-if="item.value != -1"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                </div>

                <div class="margin-top-5">
                  <el-input size="small" v-model="form.circleRealName" :placeholder="$t('请输入别名')" @input="handleCircleInput"></el-input>
                </div>

                <div>
                  <my-cascader ref="SelectorCollege" :placeholder="$t('请选择院系')" class="margin-top-5" size="small" width-style="300" :props="{multiple: true}" :collapse-tags="true" :sel-value="form.fliterMoleculeCollegeOption" type="1" sub-type="4" @change="handleSelectCollege($event, 'college', 'Molecule')"></my-cascader>
                  <my-cascader ref="SelectorDept" :placeholder="$t('请选择部门')" class="margin-top-5" size="small" width-style="300" :props="{multiple: true}" :collapse-tags="true" :sel-value="form.fliterMoleculeDeptOption" type="4" sub-type="" @change="handleSelectDept($event, 'dept', 'Molecule')"></my-cascader>

                  <el-select v-model="form.fliterMoleculeStatusOption" multiple @change="handleSelectStatus($event, 'status', 'Molecule')" size="small" class="width-300 margin-top-5" filterable :placeholder="$t('请选择审批状态')">
                    <el-option
                      v-for="item in searchStatusFormOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>

                  <el-date-picker
                    class="margin-top-5"
                    v-model="form.fliterMoleculeTimeOption"
                    size="small"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    style="width: 300px"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                    @change="handleSelectFliter($event, 'time', 'Molecule')">
                  </el-date-picker>
                </div>
              </div>
            </div>
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("分母字段")}}</span>
              </div>
              <div class="margin-top-5">
                <div>
                  <el-row :gutter="8">
                    <el-col :span="12">
                      <el-select v-model="form.joinFormDenominatorParamsValue" size="small" placeholder="请选择字段">
                        <el-option
                          v-for="(item, index) in joinFormParamsOptions"
                          :key="index"
                          :label="item.label"
                          :value="item.value"
                          @click.native="handleJoinFormParamsChange(item, index, 'Denominator')">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="12">
                      <el-select v-model="form.circleDenominatorJoinOption" @change="handleJoinFormChange($event, 'Denominator')" size="small" placeholder="聚合规则">
                        <el-option
                          v-for="item in joinFormJoinOptions"
                          :key="item.value"
                          v-if="item.value != -1"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                </div>

                <div>
                  <my-cascader ref="SelectorCollege" :placeholder="$t('请选择院系')" class="margin-top-5" size="small" width-style="300" :props="{multiple: true}" :collapse-tags="true" :sel-value="form.fliterDenominatorCollegeOption" type="1" sub-type="4" @change="handleSelectCollege($event, 'college', 'Denominator')"></my-cascader>
                  <my-cascader ref="SelectorDept" :placeholder="$t('请选择部门')" class="margin-top-5" size="small" width-style="300" :props="{multiple: true}" :collapse-tags="true" :sel-value="form.fliterDenominatorDeptOption" type="4" sub-type="" @change="handleSelectDept($event, 'dept', 'Denominator')"></my-cascader>

                  <el-select v-model="form.fliterDenominatorStatusOption" multiple @change="handleSelectStatus($event, 'status', 'Denominator')" size="small" class="width-300 margin-top-5" filterable :placeholder="$t('请选择审批状态')">
                    <el-option
                      v-for="item in searchStatusFormOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>

                  <el-date-picker
                    class="margin-top-5"
                    v-model="form.fliterDenominatorTimeOption"
                    size="small"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    style="width: 300px"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                    @change="handleSelectFliter($event, 'time', 'Denominator')">
                  </el-date-picker>
                </div>
              </div>
            </div>
          </template>
          <template v-if="settingType != 'bar' && settingType != 'table' && settingType != 'search' && settingType != 'circle'">
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("选择该表单字段")}}</span>
              </div>
              <div class="margin-top-5">
                <el-select v-model="form.joinFormParamsValue" size="small" class="width-300" placeholder="请选择">
                  <el-option
                    v-for="(item, index) in joinFormParamsOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    @click.native="handleJoinFormParamsChange(item, index)">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("该字段值的聚合规则")}}</span>
              </div>
              <div class="margin-top-5">
                <div>
                  <el-row :gutter="8">
                    <el-col :span="12">
                      <el-select v-model="form.joinFormJoinValue" @change="handleJoinFormChange($event)" size="small" placeholder="请选择">
                        <el-option
                          v-for="item in joinFormJoinOptions"
                          :key="item.value"
                          v-if="item.value != -1"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="12">
                      <el-input size="small" :placeholder="$t('字符后缀')" v-model="form.joinFormJoinFixed" @input="handleJoinFormFiextChange"></el-input>
                    </el-col>
                  </el-row>
                </div>
                <div class="margin-top-5">
                  <el-row :gutter="8">
                    <el-col :span="12">
                      <el-select v-model="form.joinFormJoinPoint" @change="handleJoinFormPointChange($event)" size="small" placeholder="小数位数">
                        <el-option
                          v-for="item in joinFormJoinPointOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="12">
                      <el-select v-model="form.joinFormJoinFormat" @change="handleJoinFormFormatChange($event)" size="small" placeholder="千分位">
                        <el-option
                          v-for="item in joinFormJoinFormatOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </template>
          <div v-show="settingType == 'bar' && settingType != 'search'">
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("横轴(单选)")}}</span>
              </div>
              <div class="margin-top-5">
                <div>
                  <el-select v-model="form.joinFormXValue" size="small" class="width-300" placeholder="请选择">
                    <el-option
                      v-for="(item, index) in joinFormParamsOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                      @click.native="handleXChange(item, index)">
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <my-cascader ref="SelectorCollege" :placeholder="$t('请选择院系')" class="margin-top-5" size="small" width-style="300" :props="{multiple: true}" :collapse-tags="true" :sel-value="form.fliterChartCollegeOption" type="1" sub-type="4" @change="handleSelectCollege($event, 'college')"></my-cascader>
                  <my-cascader ref="SelectorDept" :placeholder="$t('请选择部门')" class="margin-top-5" size="small" width-style="300" :props="{multiple: true}" :collapse-tags="true" :sel-value="form.fliterChartDeptOption" type="4" sub-type="" @change="handleSelectDept($event, 'dept')"></my-cascader>

                  <el-select v-model="form.fliterChartStatusOption" multiple @change="handleSelectStatus($event, 'status')" size="small" class="width-300 margin-top-5" filterable :placeholder="$t('请选择审批状态')">
                    <el-option
                      v-for="item in searchStatusFormOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>

                  <el-date-picker
                    class="margin-top-5"
                    v-model="form.fliterChartTimeOption"
                    size="small"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    style="width: 300px"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                    @change="handleSelectFliter($event, 'time')">
                  </el-date-picker>
                </div>
              </div>
            </div>
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("纵轴")}}</span>
                <span class="fa fa-plus-circle color-grand margin-left-5" style="font-size: 14px" @click="addYdata"></span>
              </div>
              <div class="margin-top-5">
                <div style="background: #e5e5e5;position: relative" class="margin-bottom-5 padding-lr-5 padding-tb-5" v-for="(item, indexMain) in form.chartYdataArray" :key="indexMain">
                  <span style="position: absolute;right: 0px;top: -10px;z-index: 9999;" @click="closeYdata($event, indexMain)">
                    <i class="fa fa-times-circle color-danger" style="font-size: 18px"></i>
                  </span>
                  <div>
                    <el-row :gutter="8">
                      <el-col :span="12">
                        <el-select ref="mutiSelY" v-model="item.f" size="small" placeholder="请选择字段">
                          <el-option
                            v-for="(itemChild,indexChild) in joinFormParamsOptions"
                            :key="indexChild"
                            :label="itemChild.label"
                            :value="itemChild.value"
                            @click.native="handleYChange(itemChild, indexMain)">
                          </el-option>
                        </el-select>
                      </el-col>
                      <el-col :span="12">
                        <el-select v-model="item.g" size="small" placeholder="聚合规则">
                          <el-option
                            v-for="(itemChild, indexChild) in joinFormJoinOptions"
                            :key="itemChild.value"
                            v-if="itemChild.value != -1"
                            :label="itemChild.label"
                            :value="itemChild.value"
                            @click.native="handleYJoinChange(itemChild, indexMain)">
                          </el-option>
                        </el-select>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="margin-top-5">
                    <el-input size="small" v-model="item.n" :placeholder="$t('请输入别名')" @input="handleBarInput($event, item, indexMain)"></el-input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <template v-if="settingType == 'table' && settingType != 'search'">
            <div class="color-sub-grand font-size-12 margin-top-10">
              <div>
                <span>{{$t("选择该表单字段")}}</span>
                <span class="fa fa-plus-circle color-grand margin-left-5" @click="addTableRow"></span>
              </div>
              <div class="margin-top-5">
                <div style="background: #e5e5e5;position: relative" class="margin-bottom-10 padding-lr-5 padding-tb-5" v-for="(itemMain, indexMain) in tableTitleColData" :key="indexMain">
                  <div>
                    <el-row :gutter="4" class="margin-bottom-5">
                      <el-col :span="12">
                        <el-select ref="mutiSelY" v-model="itemMain.param" size="small" placeholder="表单字段">
                          <el-option
                            v-for="(item,indexItem) in joinFormParamsOptions"
                            :key="indexItem"
                            :label="item.label"
                            :value="item.value"
                            @click.native="handleSelectLabel(item, indexItem, indexMain)">
                          </el-option>
                        </el-select>
                      </el-col>
                      <el-col :span="12">
                        <el-input size="small" v-model="itemMain.label" placeholder="请输入别名" @input="handleChangeLabel($event, itemMain, indexMain, indexMain)"></el-input>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="margin-top-5">
                    <el-row :gutter="4" class="margin-bottom-5">
                      <el-col :span="12">
                        <my-select :sel-value="itemMain.value" :options="joinFormJoinOptions" :placeholder="$t('聚合规则')" size="small" @change="handleSelectValue($event, itemMain, indexMain)"></my-select>
                      </el-col>
                      <el-col :span="12">
                        <el-input size="small" v-model="itemMain.fixed" placeholder="请输入后缀" @input="handleChangeFixed($event, itemMain, indexMain, indexMain)"></el-input>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="margin-top-5">
                    <el-row :gutter="8">
                      <el-col :span="12">
                        <el-select v-model="itemMain.point" size="small" placeholder="小数位数">
                          <el-option
                            v-for="(item, indexItem) in joinFormJoinPointOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            @click.native="handleJoinFormTablePointChange(item, indexItem, indexMain)">
                          </el-option>
                        </el-select>
                      </el-col>
                      <el-col :span="12">
                        <el-select v-model="itemMain.format" size="small" placeholder="千分位">
                          <el-option
                            v-for="(item, indexItem) in joinFormJoinFormatOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            @click.native="handleJoinFormTableFormatChange(item, indexItem, indexMain)">
                          </el-option>
                        </el-select>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="margin-top-10 text-right">
                    <el-button size="mini" type="success" @click="addTableCol($event, indexMain)">{{$t("插入下一行")}}</el-button>
                    <el-button size="mini" type="danger" @click="minsTableCol($event, indexMain)">{{$t("删除")}}</el-button>
                  </div>
                </div>
<!--                <el-row :gutter="4" v-for="(item, index) in tableTitleColData" :key="index" class="margin-bottom-5">-->
<!--                  <el-col :span="12">-->
<!--                    <el-select ref="mutiSelY" v-model="item.label" size="small" placeholder="表单字段">-->
<!--                      <el-option-->
<!--                        v-for="(item,indexItem) in joinFormParamsOptions"-->
<!--                        :key="indexItem"-->
<!--                        :label="item.label"-->
<!--                        :value="item.value"-->
<!--                        @click.native="handleSelectLabel(item, indexItem, index)">-->
<!--                      </el-option>-->
<!--                    </el-select>-->
<!--                  </el-col>-->
<!--                  <el-col :span="12">-->
<!--                    <my-select :sel-value="item.value" :options="joinFormJoinOptions" :placeholder="$t('请选择')" size="small" @change="handleSelectValue($event, item, index)"></my-select>-->
<!--                  </el-col>-->
<!--                  <el-col :span="4">-->
<!--                    <div class="margin-top-10">-->
<!--                      <i class="fa fa-plus-circle color-grand margin-right-5" style="font-size: 14px" @click="addTableCol($event, index)"></i>-->
<!--                      <i v-if="index > 0" class="fa fa-minus-circle color-danger" style="font-size: 14px" @click="minsTableCol($event, index)"></i>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                </el-row>-->
              </div>
            </div>
          </template>
          <div v-if="settingType != 'search' && settingType != 'table' && settingType != 'circle' && settingType != 'bar'" class="color-sub-grand font-size-12 margin-top-10">
            <div>
              <span>{{$t("过滤条件")}}</span>
            </div>
<!--            <div class="margin-top-5">-->
<!--              <el-select v-model="form.joinFormFliterValue" @change="handleFliterChange" size="small" class="width-300" filterable placeholder="请选择">-->
<!--                <el-option-->
<!--                  v-for="item in searchStaticFormOptions"-->
<!--                  :key="item.value"-->
<!--                  :label="item.label"-->
<!--                  :value="item.value">-->
<!--                </el-option>-->
<!--              </el-select>-->
<!--            </div>-->
            <div class="margin-top-10">
              <my-cascader ref="SelectorCollege" :placeholder="$t('请选择院系')" class="margin-top-5" size="small" width-style="300" :props="{multiple: true}" :collapse-tags="true" :sel-value="form.fliterCollegeOption" type="1" sub-type="4" @change="handleSelectCollege($event, 'college')"></my-cascader>
              <my-cascader ref="SelectorDept" :placeholder="$t('请选择部门')" class="margin-top-5" size="small" width-style="300" :props="{multiple: true}" :collapse-tags="true" :sel-value="form.fliterDeptOption" type="4" sub-type="" @change="handleSelectDept($event, 'dept')"></my-cascader>

              <el-select v-model="form.fliterStatusOption" multiple @change="handleSelectStatus($event, 'status')" size="small" class="width-300 margin-top-5" filterable :placeholder="$t('请选择审批状态')">
                <el-option
                  v-for="item in searchStatusFormOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>

              <el-date-picker
                class="margin-top-5"
                v-model="form.fliterTimeOption"
                size="small"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 300px"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                @change="handleSelectFliter($event, 'time')">
              </el-date-picker>
            </div>
          </div>
        </template>
      </div>
      <div class="form-set-left detail-card font-size-12 padding-lr-10 padding-tb-10" style="overflow-y: auto" :style="drawHeight6">
        <div class="margin-bottom-5 layout-inline">
          <span class="layout-item">
            <my-select disabled class="layout-item width-120" size="small" :placeholder="form.searchStaticTitle" :sel-value="searchStaticForm" :options="searchStaticFormOptions" :clearable="false" @change="handleSearchChange($event, 2)"></my-select>
            <span class="layout-item">
              <i class="fa fa-cog color-grand" style="font-size: 14px" @click="settingSearchDataInfo($event)"></i>
            </span>
            <el-date-picker
              disabled
              v-model="searchSetStaticTimeForm"
              size="small"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width: 240px">
              </el-date-picker>
          </span>
        </div>
        <div style="height: 140px">
          <el-row :gutter="8">
            <el-col :span="6">
              <el-card :class="settingType == 'card' && settingColValue == 1 ? 'sel-card-active' : ''" :body-style="{padding: '10px'}" style="height: 140px" @click.native="settingCardDataInfo($event,1)">
                <div slot="header" class="color-muted">
                  <span><i class="fa fa-desktop"></i></span>
                  <span>{{form.cardParam1}}</span>
                </div>
                <div class="color-muted text-center" style="position: relative">
                  <div class="form-card-content">
                    {{form.cardValue1 == '' ? '显示内容' : form.cardValue1.n}}
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :class="settingType == 'card' && settingColValue == 2 ? 'sel-card-active' : ''" :body-style="{padding: '10px'}" style="height: 140px" @click.native="settingCardDataInfo($event,2)">
                <div slot="header" class="color-muted">
                  <span><i class="fa fa-desktop"></i></span>
                  <span>{{form.cardParam2}}</span>
                </div>
                <div class="color-muted text-center" style="position: relative">
                  <div class="form-card-content">
                    {{form.cardValue2 == '' ? '显示内容' : form.cardValue2.n}}
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :class="settingType == 'card' && settingColValue == 3 ? 'sel-card-active' : ''" :body-style="{padding: '10px'}" style="height: 140px" @click.native="settingCardDataInfo($event,3)">
                <div slot="header" class="color-muted">
                  <span><i class="fa fa-desktop"></i></span>
                  <span>{{form.cardParam3}}</span>
                </div>
                <div class="color-muted text-center" style="position: relative">
                  <div class="form-card-content">
                    {{form.cardValue3 == '' ? '显示内容' : form.cardValue3.n}}
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :class="settingType == 'card' && settingColValue == 4 ? 'sel-card-active' : ''" :body-style="{padding: '10px'}" style="height: 140px" @click.native="settingCardDataInfo($event,4)">
                <div slot="header" class="color-muted">
                  <span><i class="fa fa-desktop"></i></span>
                  <span>{{form.cardParam4}}</span>
                </div>
                <div class="color-muted text-center" style="position: relative">
                  <div class="form-card-content">
                    {{form.cardValue4 == '' ? '显示内容' : form.cardValue4.n}}
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>

        <div class="margin-top-20">
          <div style="height: 300px">
            <el-row :gutter="8">
              <el-col :span="18">
                <el-card :class="settingType == 'bar' ? 'sel-card-active' : ''" :body-style="{padding: '10px'}" style="height: 300px" @click.native="settingBarDataInfo($event)">
                  <div slot="header" class="color-muted">
                    <span><i class="fa fa-bar-chart"></i></span>
                    <span>{{form.chartParam}}</span>
                  </div>
                  <div class="color-muted text-center" style="position: relative;height: 260px">
                    <bar-chart chart-id="barId" :data-legned="barDataLegned" :data-key="barDataKey" :data="barData"></bar-chart>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card :class="settingType == 'circle' ? 'sel-card-active' : ''" :body-style="{padding: '10px'}" style="height: 300px" @click.native="settingCircleDataInfo($event)">
                  <div slot="header" class="color-muted">
                    <span><i class="fa fa-pie-chart"></i></span>
                    <span>{{form.circleParams}}</span>
                  </div>
                  <div class="color-muted text-center" style="position: relative">
                    <div class="margin-top-20">
                      <div class="text-center">
                        <el-progress type="dashboard" :show-text="false" :width="160" :percentage="percentage"></el-progress>
                      </div>
                      <div class="text-center font-size-12 font-bold" style="position: relative; top: -90px">
                        <span>显示数据</span>
                      </div>
                      <div class="text-center color-muted" style="position: relative; top: -10px;">
<!--                        <div>-->
<!--                          <span>{{percentageText}}</span>-->
<!--                        </div>-->
                        <div>
                          <span>{{percentageValue}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>

        <div class="margin-top-20" :class="settingType == 'table' ? 'sel-card-active' : ''">
          <el-table
            @click.native="settingTableDataInfo($event)"
            ref="refTable"
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            row-key="id"
            style="width: 100%">
            <el-table-column
              v-for="(item, index) in tableTitleColData" :key="index"
              align="center"
              :label="item.title == '' ? '字段' : item.title">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{item.value == '' ? '内容' : item.value}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span>{{item.valueText == '' ? '内容' : item.valueText}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>

          </el-table>
        </div>
      </div>
      <div class="moon-clearfix"></div>
    </div>

    <dialog-normal top="5vh" :visible="h5Dialog" :show-footer="false" :append-to-body="true" width-style="450px" :title="$t('移动端模版预览(仅展示)')" @close="closeDialog" @right-close="closeDialog">
      <div>
        <div>
          <div style="height: 35px">
            <el-row>
              <el-col :span="8">
                <el-button class="layout-item" style="margin-top: 5px" size="small" type="warning" plain native-type="button">{{$t('选择表单')}}</el-button>
              </el-col>
              <el-col :span="16" class="text-right">
                <el-button class="layout-item" style="margin-top: 5px" size="small" type="warning" plain native-type="button">{{$t('选择部门/院系')}}</el-button>
                <el-button class="layout-item" style="margin-top: 5px" size="small" type="default" plain native-type="button">{{$t('选择时间')}}</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
        <el-card :body-style="{padding: '10px'}" style="height: 150px" class="margin-top-5">
          <div style="height: 75px;width: 100%">
            <el-row>
              <el-col :span="12">
                <div class="text-left padding-lr-5">
                  <div>
                    <span class="font-size-12 font-bold">{{form.cardValue1 == '' ? '字段内容' : form.cardValue1.n}}</span>
                  </div>
                  <div class="margin-top-5">
                    <span class="font-size-12 color-muted">显示内容</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="text-right padding-lr-5">
                  <div>
                    <span class="font-size-12 font-bold">{{form.cardValue2 == '' ? '字段内容' : form.cardValue2.n}}</span>
                  </div>
                  <div class="margin-top-5">
                    <span class="font-size-12 color-muted">显示内容</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div style="height: 75px;width: 100%">
            <el-row>
              <el-col :span="12">
                <div class="text-left padding-lr-5">
                  <div>
                    <span class="font-size-12 font-bold">{{form.cardValue3 == '' ? '字段内容' : form.cardValue3.n}}</span>
                  </div>
                  <div class="margin-top-5">
                    <span class="font-size-12 color-muted">显示内容</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="text-right padding-lr-5">
                  <div>
                    <span class="font-size-12 font-bold">{{form.cardValue4 == '' ? '字段内容' : form.cardValue4.n}}</span>
                  </div>
                  <div class="margin-top-5">
                    <span class="font-size-12 color-muted">显示内容</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>

        <el-card :body-style="{padding: '10px'}" class="margin-top-10" style="height: 180px">
          <div class="color-muted text-center" style="position: relative">
            <div>
              <div class="text-center">
                <el-progress type="dashboard" :show-text="false" :width="160" :percentage="percentage"></el-progress>
              </div>
              <div class="text-center font-size-12 font-bold" style="position: relative; top: -90px">
                <span>显示数据</span>
              </div>
              <div class="text-center color-muted font-size-12" style="position: relative; top: -30px;">
                <div>
                  <span>{{percentageValue}}</span>
                </div>
              </div>
            </div>
          </div>
        </el-card>

        <el-card :body-style="{padding: '10px'}" class="margin-top-10" style="height: 350px">
          <div style="height: 350px;width: 100%" class="text-center;">
            <h-bar-chart chart-id="hbarId" :data-legned="barDataLegned" :data-key="barDataKey" :data="barData"></h-bar-chart>
          </div>
        </el-card>
      </div>
    </dialog-normal>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import BarChart from "~/components/charts/BarChart";
  import {common} from "~/utils/api/url";
  import MyCascader from "~/components/utils/select/MyCascader";
  import {inArray} from "~/utils/utils";
  import DialogNormal from "~/components/utils/dialog/DialogNormal";

  export default {
    name: 'pcStaticTemplate',
    components: {DialogNormal, MyCascader, BarChart},
    mixins: [mixins],
    props: {
      staticId: String,
      staticPcFormData: Array
    },
    computed: {

    },
    data() {
      return {
        h5Dialog: false,
        staticPcFormList: [
          {
            filterType: '',
            unitName: '',
            statId: '',
            unitType: '4'
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            filterRules2: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            relaFormId: '',
            relaFromField1: {
              d: true,
              f: "",
              g: 5,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            },
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            filterRules2: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            relaFormId: '',
            relaFromField1: {
              d: true,
              f: "",
              g: 5,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            },
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            filterRules2: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            relaFormId: '',
            relaFromField1: {
              d: true,
              f: "",
              g: 5,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            },
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            filterRules2: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            relaFormId: '',
            relaFromField1: {
              d: true,
              f: "",
              g: 5,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            },
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            filterRules2: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            relaFormId: '',
            relaFromField1: {
              d: true,
              f: "",
              g: 5,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            },
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            filterRules2: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            relaFormId: '',
            relaFromField1: {
              d: true,
              f: "",
              g: 5,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            },
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            filterRules2: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            relaFormId: '',
            relaFromField1: {
              d: true,
              f: "",
              g: 5,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            },
            groupRule: '-1',
            unitType: '0',
            statId: ''
          }
        ],
        settingType: '',
        settingColValue: '',
        searchStaticTitle: this.$t("筛选条件"),
        searchStaticForm: '',
        searchSetStaticForm: '',
        searchSetStaticFormOption: '',
        searchSetStaticTimeForm: [],
        searchStaticFormOptions: [{
          label: this.$t("时间"),
          value: 'time'
        },{
          label: this.$t("部门"),
          value: 'dept'
        },{
          label: this.$t("院系"),
          value: 'college'
        },{
          label: this.$t("表单状态"),
          value: 'status'
        }],
        searchStatusFormOptions: [{
          label: this.$t("撤销"),
          value: '-1'
        },{
          label: this.$t("待审核"),
          value: '0'
        },{
          label: this.$t("通过"),
          value: '3'
        },{
          label: this.$t("未通过"),
          value: '4'
        }],
        searchStaticFormOptions2: [{
          label: this.$t("部门"),
          value: 'dept'
        },{
          label: this.$t("院系"),
          value: 'college'
        },],
        form: {
          searchStaticTitle: '筛选条件',
          cardParam1: '字段名称',
          cardParam2: '字段名称',
          cardParam3: '字段名称',
          cardParam4: '字段名称',
          cardValue1: '',
          cardValue1Text: '',
          cardValue2: '',
          cardValue2Text: '',
          cardValue3: '',
          cardValue3Text: '',
          cardValue4: '',
          cardValue4Text: '',
          cardForm1: '',
          cardForm2: '',
          cardForm3: '',
          cardForm4: '',
          cardJoin1: '0',
          cardJoinFixed1: '',
          cardJoinPoint1: '0',
          cardJoinFormat1: false,
          cardJoin2: '0',
          cardJoinFixed2: '',
          cardJoinPoint: '0',
          cardJoinFormat2: false,
          cardJoin3: '0',
          cardJoinFixed3: '',
          cardJoinPoint3: '0',
          cardJoinFormat3: false,
          cardJoin4: '0',
          cardJoinFixed4: '',
          cardJoinPoint4: '0',
          cardJoinFormat4: false,
          cardFliter1: '',
          cardFliter2: '',
          cardFliter3: '',
          cardFliter4: '',
          cardFliterOption1: '',
          cardFliterCollegeOption1: '',
          cardFliterDeptOption1: '',
          cardFliterStatusOption1: '',
          cardFliterTimeOption1: '',
          cardFliterOption2: '',
          cardFliterCollegeOption2: '',
          cardFliterDeptOption2: '',
          cardFliterStatusOption2: '',
          cardFliterTimeOption2: '',
          cardFliterOption3: '',
          cardFliterCollegeOption3: '',
          cardFliterDeptOption3: '',
          cardFliterStatusOption3: '',
          cardFliterTimeOption3: '',
          cardFliterOption4: '',
          cardFliterCollegeOption4: '',
          cardFliterDeptOption4: '',
          cardFliterStatusOption4: '',
          cardFliterTimeOption4: '',
          cardFliterStartTime1: '',
          cardFliterEndTime1: '',
          cardFliterStartTime2: '',
          cardFliterEndTime2: '',
          cardFliterStartTime3: '',
          cardFliterEndTime3: '',
          cardFliterStartTime4: '',
          cardFliterEndTime4: '',
          chartParam: '字段名称',
          chartValue: '',
          chartValueText: '',
          chartJoin: '',
          chartForm: '',
          chartFliter: '',
          chartFliterOption: '',
          chartXdata: '',
          chartXdataObj: '',
          chartXFliterCollege: [],
          chartXFliterDept: [],
          chartXFliterStatus: [],
          chartXFliterTime: [],
          chartYdata: '',
          chartYdataObj: '',
          chartYdataArray: [],
          cardTitle: '',
          cardValue: '',
          circleParams: '字段名称',
          circleValue: 0,
          circleValueText: '',
          circleMoleculeValue: '',
          circleMoleculeValueText: '',
          circleDenominatorValue: '',
          circleDenominatorValueText: '',
          circleForm: '',
          circleFliter: '',
          circleFliterOption: '',
          circleFliterMoleculeCollegeOption: [],
          circleFliterMoleculeDeptOption: [],
          circleFliterMoleculeStatusOption: [],
          circleFliterMoleculeTimeOption: [],
          circleFliterMoleculeStartTime: '',
          circleFliterMoleculeEndTime: '',
          circleFliterDenominatorCollegeOption: [],
          circleFliterDenominatorDeptOption: [],
          circleFliterDenominatorStatusOption: [],
          circleFliterDenominatorTimeOption: [],
          circleFliterDenominatorStartTime: '',
          circleFliterDenominatorEndTime: '',
          circleFliterStartTime: '',
          circleFliterEndTime: '',
          circleJoin: '-1',
          circleRealName: '',
          circleMoleculeJoin: '5',
          circleDenominatorJoin: '5',
          circleDenominatorJoinOption: '5',
          circleMoleculeJoinOption: '5',
          tableForm: '',
          tableValue: '',
          tableValueText: '',
          tableFliter: '',
          tableFliterOption: '',
          tableFliterStartTime: '',
          tableFliterEndTime: '',
          tableJoin: '',
          joinFormValue: '',
          joinFormParamsValue: '',
          joinFormParamsValueObj: {},
          joinFormFliterValue: '',
          joinFormJoinValue: '',
          joinFormJoinFixed: '',
          joinFormJoinPoint: '0',
          joinFormJoinFormat: '0',
          joinFormXValue: '',
          joinFormYValue: [],
          fliterOption: [],
          fliterCollegeOption: [],
          fliterDeptOption: [],
          fliterStatusOption: [],
          fliterTimeOption: [],
          fliterOptionStartTime: '',
          fliterOptionEndTime: '',
          joinTableJoinValue: [],
          joinTableCollege: [],
          joinTableDept: [],
          joinTableStatus: [],
          joinTableTime: [],
          joinFormMoleculeParamsValue: '',
          joinFormMoleculeParamsValueObj: {},
          joinFormDenominatorParamsValue: '',
          joinFormDenominatorParamsValueObj: {},
          fliterMoleculeCollegeOption: [],
          fliterMoleculeDeptOption: [],
          fliterMoleculeStatusOption: [],
          fliterMoleculeTimeOption: [],
          fliterDenominatorCollegeOption: [],
          fliterDenominatorDeptOption: [],
          fliterDenominatorStatusOption: [],
          fliterDenominatorTimeOption: [],
          fliterChartCollegeOption: [],
          fliterChartDeptOption: [],
          fliterChartStatusOption: [],
          fliterChartTimeOption: [],
          fliterTableCollegeOption: [],
          fliterTableDeptOption: [],
          fliterTableStatusOption: [],
          fliterTableTimeOption: [],
        },
        joinFormValueOptions: [],
        joinFormParamsOptions: [],
        joinFormParamsMutiOptions: [],
        joinFormParamsOptionsArray: [],
        joinFormFliterOptions: [],
        joinFormXOptions: [],
        joinFormYOptions: [],
        joinFormOptions: [],
        formTableData: [{
          label: '',
          value: '0'
        }],
        formTableParamsOptions: [],
        joinFormJoinFormatOptions: [{
          value: false,
          label: this.$t("禁用千分位")
        },{
          value: true,
          label: this.$t("启用千分位")
        }],
        joinFormJoinPointOptions: [{
          value: '0',
          label: this.$t("无小数位")
        },{
          value: '1',
          label: this.$t("1位小数")
        },{
          value: '2',
          label: this.$t("2位小数")
        },{
          value: '3',
          label: this.$t("3位小数")
        },{
          value: '4',
          label: this.$t("4位小数")
        },{
          value: '5',
          label: this.$t("5位小数")
        }],
        joinFormJoinOptions: [{
          value: '-1',
          label: this.$t("不聚合")
        },{
          value: '0',
          label: this.$t("求和")
        },{
          value: '1',
          label: this.$t("平均值")
        },{
          value: '2',
          label: this.$t("最大值")
        },{
          value: '3',
          label: this.$t("最小值")
        },{
          value: '4',
          label: this.$t("计数")
        },{
          value: '5',
          label: this.$t("计数(去重复)")
        }],
        joinTableJoinOptions: [{
          value: '0',
          label: this.$t("按人员聚合")
        },{
          value: '1',
          label: this.$t("按部门聚合")
        },{
          value: '2',
          label: this.$t("按院系聚合")
        }],
        tableData: ["1"],
        tableTitleColData: [
          {
            title: '',
            label: '',
            value: '',
            param: '',
            valueText: "",
            fixed: '',
            point: '',
            format: '',
            obj: {
              d:'',
              f:'',
              n:'',
              g:'-1',
              zwf: false,
              hz:'',
              jd:'0'
            }
          }
        ],
        percentage: 0,
        percentageText: '内容',
        percentageValue: '表单字段',
        barDataLegned: ['类型1','类型2','类型3'],
        barDataKey: ['字段1','字段2','字段3'],
        barData: [
          {
            name: '类型1',
            type: 'bar',
            barWidth:15,
            data:[10,10,10]
          },
          {
            name: '类型2',
            type: 'bar',
            barWidth:15,
            data:[10,10,10]
          },
          {
            name: '类型3',
            type: 'bar',
            barWidth:15,
            data:[10,10,10]
          }
        ]
      }
    },
    created() {
      this.initAsync();
    },
    methods: {
      async initAsync(){
        await this.init();
        await this.initData();
      },
      initData(){
        if (this.staticPcFormData.length > 0){
          console.log(this.staticPcFormData);
          this.staticPcFormList = this.staticPcFormData;
          this.searchStaticTitle = this.staticPcFormData[0].unitName;
          this.searchSetStaticForm = this.getTitleFliterText(this.staticPcFormData[0].filterType);

          this.setFliterParamDataFormat(1);
          this.form.cardFliterTimeOption1 = this.setFliterTimeFormat(1);
          this.form.cardFliterDeptOption1 = this.setFliterDeptFormat(1);
          this.form.cardFliterCollegeOption1 = this.setFliterCollegeFormat(1);
          this.form.cardFliterStatusOption1 = this.setFliterStatusFormat(1);

          this.setFliterParamDataFormat(2);
          this.form.cardFliterTimeOption2 = this.setFliterTimeFormat(2);
          this.form.cardFliterDeptOption2 = this.setFliterDeptFormat(2);
          this.form.cardFliterCollegeOption2 = this.setFliterCollegeFormat(2);
          this.form.cardFliterStatusOption2 = this.setFliterStatusFormat(2);

          this.setFliterParamDataFormat(3);
          this.form.cardFliterTimeOption3 = this.setFliterTimeFormat(3);
          this.form.cardFliterDeptOption3 = this.setFliterDeptFormat(3);
          this.form.cardFliterCollegeOption3 = this.setFliterCollegeFormat(3);
          this.form.cardFliterStatusOption3 = this.setFliterStatusFormat(3);

          this.setFliterParamDataFormat(4);
          this.form.cardFliterTimeOption4 = this.setFliterTimeFormat(4);
          this.form.cardFliterDeptOption4 = this.setFliterDeptFormat(4);
          this.form.cardFliterCollegeOption4 = this.setFliterCollegeFormat(4);
          this.form.cardFliterStatusOption4 = this.setFliterStatusFormat(4);

          this.setFliterBarParamDataFormat(5);
          this.form.chartXFliterTime = this.setFliterTimeFormat(5);
          this.form.chartXFliterDept = this.setFliterDeptFormat(5);
          this.form.chartXFliterCollege = this.setFliterCollegeFormat(5);
          this.form.chartXFliterStatus = this.setFliterStatusFormat(5);

          this.setFliterCircleParamDataFormat(6);
          this.form.circleFliterMoleculeTimeOption = this.setFliterTimeFormat(6, "Molecule");
          this.form.circleFliterMoleculeDeptOption = this.setFliterDeptFormat(6, "Molecule");
          this.form.circleFliterMoleculeCollegeOption = this.setFliterCollegeFormat(6, "Molecule");
          this.form.circleFliterMoleculeStatusOption = this.setFliterStatusFormat(6, "Molecule");

          this.form.circleFliterDenominatorTimeOption = this.setFliterTimeFormat(6, "Denominator");
          this.form.circleFliterDenominatorDeptOption = this.setFliterDeptFormat(6, "Denominator");
          this.form.circleFliterDenominatorCollegeOption = this.setFliterCollegeFormat(6, "Denominator");
          this.form.circleFliterDenominatorStatusOption = this.setFliterStatusFormat(6, "Denominator");

          this.form.tableForm = this.staticPcFormData[7].relaFormId;
          let tabletTitleData = this.staticPcFormData[7].relaFromField1 != "" ? this.staticPcFormData[7].relaFromField1 : [];
          let tableColArray = [];
          for (let i = 0; i < tabletTitleData.length; i++){
            tableColArray.push(
              {
                title: tabletTitleData[i].n,
                label: tabletTitleData[i].n,
                value: tabletTitleData[i].g+"",
                param: tabletTitleData[i].f,
                valueText: "",
                fixed: tabletTitleData[i]['hz'] ? tabletTitleData[i]['hz'] : '',
                point: tabletTitleData[i]['jd'] ? tabletTitleData[i]['jd']+"" : '0',
                format: tabletTitleData[i]['zwf'] ? tabletTitleData[i]['zwf'] : false,
                obj: {
                  d:tabletTitleData[i].d,
                  f:tabletTitleData[i].f,
                  n:tabletTitleData[i].n,
                  g:tabletTitleData[i].g+"",
                  zwf:tabletTitleData[i].zwf ? tabletTitleData[i].zwf : false,
                  hz:tabletTitleData[i].hz,
                  jd:tabletTitleData[i].jd+""
                }
              },
            );
          }
          this.tableTitleColData = tableColArray;
          this.form.tableJoin = this.staticPcFormData[7].groupType+"";
          this.staticPcFormData[7].relaFromField1 = this.staticPcFormData[7].relaFromField1;

          this.form.joinTableTime = this.setFliterTimeFormat(7);
          this.form.joinTableDept = this.setFliterDeptFormat(7);
          this.form.joinTableCollege = this.setFliterCollegeFormat(7);
          this.form.joinTableStatus = this.setFliterStatusFormat(7);
        }
      },
      setFliterParamDataFormat(index){
        this.form["cardParam"+index] = this.staticPcFormData[index].unitName;
        this.form["cardValue"+index+"Text"] = this.staticPcFormData[index].relaFromField1[0]['f'];
        this.form["cardForm"+index] = this.staticPcFormData[index].relaFormId;
        this.form["cardValue"+index] = this.staticPcFormData[index].relaFromField1[0];
        this.form["cardFliter"+index] = this.getTitleFliterText(this.staticPcFormData[index].filterType);
        this.form["cardJoin"+index] = this.staticPcFormData[index].relaFromField1[0]['g'] + "";
        this.form["cardJoinFormat"+index] = this.staticPcFormData[index].relaFromField1[0]['zwf'];
        this.form["cardJoinFixed"+index] = this.staticPcFormData[index].relaFromField1[0]['hz'];
        this.form["cardJoinPoint"+index] = this.staticPcFormData[index].relaFromField1[0]['jd'];
      },
      setFliterBarParamDataFormat(index){
        this.form.chartParam = this.staticPcFormData[index].unitName;
        this.form.chartForm = this.staticPcFormData[index].relaFormId;
        this.form.chartXdata = this.staticPcFormData[index].relaFromField1[0]['f'];
        this.form.chartXdataObj = this.staticPcFormData[index].relaFromField1[0];
        this.form.chartFliter = this.getTitleFliterText(this.staticPcFormData[index].filterType);
        //this.form.chartFliterOption = [];
        let yData = this.staticPcFormData[index].relaFromField2 != undefined ? this.staticPcFormData[index].relaFromField2 : []
        let yDataArray = [];
        for (let i = 0; i < yData.length; i++){
          yData[i]['g'] = yData[i]['g'] || yData[i]['g'] === 0 ? yData[i]['g']+"" : "5";
          yDataArray.push(yData[i].f);
        }
        this.form.chartYdata = yDataArray;
        this.form.chartYdataObj = this.staticPcFormData[index].relaFromField2;
        this.form.chartYdataArray = this.staticPcFormData[index].relaFromField2 != undefined ? this.staticPcFormData[index].relaFromField2 : [];
      },
      setFliterCircleParamDataFormat(index){
        this.staticPcFormData[index].relaFromField1 = this.staticPcFormData[index].relaFromField1;
        this.form.circleParams = this.staticPcFormData[index].unitName;
        this.form.circleValueText = this.staticPcFormData[index].relaFromField1[0]['f'];
        this.form.circleForm = this.staticPcFormData[index].relaFormId;
        this.form.circleValue = this.staticPcFormData[index].relaFromField1[0];
        this.form.circleFliter = this.getTitleFliterText(this.staticPcFormData[index].filterType);
        this.form.circleJoin = this.staticPcFormData[index].groupRule+"";
        this.percentageValue = this.staticPcFormData[index].relaFromField1[0]['n'];
        this.form.circleMoleculeValueText = this.staticPcFormData[index].relaFromField1[0]['f'];
        this.form.circleMoleculeJoinOption = this.staticPcFormData[index].relaFromField1[0]['g']+"";
        this.form.circleMoleculeJoin = this.staticPcFormData[index].relaFromField1[0]['g']+"";
        this.form.circleMoleculeValue = this.staticPcFormData[index].relaFromField1[0];
        this.form.joinFormMoleculeParamsValue = this.staticPcFormData[index].relaFromField1[0]['f'];
        this.form.circleRealName = this.staticPcFormData[index].relaFromField1[0]['n'];
        this.form.circleDenominatorValueText = this.staticPcFormData[index].relaFromField2[0]['f'];
        this.form.circleDenominatorJoinOption = this.staticPcFormData[index].relaFromField2[0]['g']+"";
        this.form.circleDenominatorJoin = this.staticPcFormData[index].relaFromField2[0]['g']+"";
        this.form.circleDenominatorValue = this.staticPcFormData[index].relaFromField2[0];
        this.form.joinFormDenominatorParamsValue = this.staticPcFormData[index].relaFromField2[0]['f'];
      },
      setFliterTimeFormat(index, type){
        let time = "";
        if (type == "Molecule"){
          time = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";
        }else if (type == "Denominator"){
          time = this.staticPcFormData[index].filterRules2 != "" ? this.staticPcFormData[index].filterRules2 : "";
        }else {
          time = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";
        }

        if (time['date1'] && time['date2']){
          let start = time['date1'] != "" ? time.date1 : "";
          let end = time['date2'] != "" > 0 ? time.date2 : "";
          return [start, end];
        }else {
          return [];
        }
      },
      setFliterDeptFormat(index, type){
        let deptId = "";
        if (type == "Molecule"){
          deptId = this.staticPcFormData[index].filterRules = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";
        }else if (type == "Denominator"){
          deptId = this.staticPcFormData[index].filterRules2 = this.staticPcFormData[index].filterRules2 != "" ? this.staticPcFormData[index].filterRules2 : "";
        }else {
          deptId = this.staticPcFormData[index].filterRules = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";
        }

        //let deptId = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";
        return deptId['deptId'] == "" ? [] : JSON.parse(deptId.deptId);
      },
      setFliterCollegeFormat(index, type){
        let collegeId = "";
        if (type == "Molecule"){
          collegeId = this.staticPcFormData[index].filterRules = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";
        }else if (type == "Denominator"){
          collegeId = this.staticPcFormData[index].filterRules2 = this.staticPcFormData[index].filterRules2 != "" ? this.staticPcFormData[index].filterRules2 : "";
        }else {
          collegeId = this.staticPcFormData[index].filterRules = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";
        }
        //let collegeId = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";
        return collegeId['collegeId'] == "" ? [] : JSON.parse(collegeId.collegeId);
      },
      setFliterStatusFormat(index, type){
        let statusId = "";
        if (type == "Molecule"){
          statusId = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : ""
        }else if (type == "Denominator"){
          statusId = this.staticPcFormData[index].filterRules2 != "" ? this.staticPcFormData[index].filterRules2 : ""
        }else {
          statusId = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : ""
        }
        return statusId['applyStatus'] == "" ? [] : JSON.parse(statusId.applyStatus);
      },
      async init(){
        //server_list_list2
        let params = {

        };
        await this.$axios.get(common.server_list_list2,{params: params}).then(res => {
          if (res.data.code == 200){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                value: res.data.data[i].id,
                label: res.data.data[i].form_name
              });
            }
            this.joinFormOptions = array;
          }
        });
      },
      async getFiledInfo(formId){
        //server_list_list2
        let params = {
          formId: formId
        };
        await this.$axios.get(common.server_list_field,{params: params}).then(res => {
          if (res.data.code == 200){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                id: i,
                value: res.data.data[i].f,
                label: res.data.data[i].n,
                extra: res.data.data[i].d
              });
            }
            this.joinFormParamsOptions = array;
            this.joinFormParamsOptionsArray = res.data.data;
          }
        });
      },
      async settingCardDataInfo(event, value){
        this.settingType = 'card';
        this.form.fliterOption = [];
        this.resetCasadeSelector('SelectorCollege');
        this.resetCasadeSelector('SelectorDept');

        if (value == 1){
          await this.getFiledInfo(this.form.cardForm1);
          this.form.cardTitle = this.form.cardParam1;
          this.form.joinFormParamsValue = this.form.cardValue1Text == '' ? '' : this.form.cardValue1Text;
          this.form.joinFormValue = this.form.cardForm1;
          this.form.joinFormJoinValue = this.form.cardJoin1 != "undefined" && this.form.cardJoin1 != '' ? this.form.cardJoin1 : '5';
          this.form.joinFormJoinFixed = this.form.cardJoinFixed1;
          this.form.joinFormJoinPoint = this.form.cardJoinPoint1 != undefined && this.form.cardJoinPoint1 != '' ? this.form.cardJoinPoint1 : '0';
          this.form.joinFormJoinFormat = this.form.cardJoinFormat1;
          this.form.joinFormFliterValue = this.form.cardFliter1;
          this.form.fliterCollegeOption = this.form.cardFliterCollegeOption1 == "" ? [] : this.form.cardFliterCollegeOption1;
          this.form.fliterDeptOption = this.form.cardFliterDeptOption1 == "" ? [] : this.form.cardFliterDeptOption1;
          this.form.fliterStatusOption = this.form.cardFliterStatusOption1 == "" ? [] : this.form.cardFliterStatusOption1;
          this.form.fliterTimeOption = this.form.cardFliterTimeOption1 == "" ? [] : this.form.cardFliterTimeOption1;

          this.staticPcFormList[1] = this.setStatucFormListObj(this.form.cardFliter1,this.form.cardParam1,this.form.cardForm1,this.form.cardValue1,this.form.cardJoin1,this.staticId,0);
          //this.staticPcFormList[1]['groupRule'] = this.form.cardJoin1;
          this.staticPcFormList[1]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue('college', this.staticPcFormList[1]['filterRules'], this.form.cardFliterCollegeOption1);
          this.staticPcFormList[1]['filterRules']['deptId'] = this.setFliterOnlyOptionValue('dept', this.staticPcFormList[1]['filterRules'], this.form.cardFliterDeptOption1);
          this.staticPcFormList[1]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue('status', this.staticPcFormList[1]['filterRules'], this.form.cardFliterStatusOption1);
          let date = this.setFliterOnlyOptionValue('time', this.staticPcFormList[1]['filterRules'], this.form.cardFliterTimeOption1);
          this.staticPcFormList[1]['filterRules']['date1'] = date['date1'];
          this.staticPcFormList[1]['filterRules']['date2'] = date['date2'];

        }else if (value == 2){
          await this.getFiledInfo(this.form.cardForm2);
          this.form.cardTitle = this.form.cardParam2;
          this.form.joinFormParamsValue = this.form.cardValue2Text == '' ? '' : this.form.cardValue2Text;
          this.form.joinFormValue = this.form.cardForm2;

          this.form.joinFormJoinValue = this.form.cardJoin2 != "undefined" && this.form.cardJoin2 != '' ? this.form.cardJoin2 : '5';
          this.form.joinFormJoinFixed = this.form.cardJoinFixed2;
          this.form.joinFormJoinPoint = this.form.cardJoinPoint2 != undefined && this.form.cardJoinPoint2 != '' ?this.form.cardJoinPoint2 : '0';
          this.form.joinFormJoinFormat = this.form.cardJoinFormat2;
          this.form.joinFormFliterValue = this.form.cardFliter2;
          this.form.fliterCollegeOption = this.form.cardFliterCollegeOption2 == "" ? [] : this.form.cardFliterCollegeOption2;
          this.form.fliterDeptOption = this.form.cardFliterDeptOption2 == "" ? [] : this.form.cardFliterDeptOption2;
          this.form.fliterStatusOption = this.form.cardFliterStatusOption2 == "" ? [] : this.form.cardFliterStatusOption2;
          this.form.fliterTimeOption = this.form.cardFliterTimeOption2 == "" ? [] : this.form.cardFliterTimeOption2;

          this.staticPcFormList[2] = this.setStatucFormListObj(this.form.cardFliter2,this.form.cardParam2,this.form.cardForm2,this.form.cardValue2,this.form.cardJoin2,this.staticId,0);
          //this.staticPcFormList[2]['groupRule'] = this.form.cardJoin2;

          this.staticPcFormList[2]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue('college', this.staticPcFormList[2]['filterRules'], this.form.cardFliterCollegeOption2);
          this.staticPcFormList[2]['filterRules']['deptId'] = this.setFliterOnlyOptionValue('dept', this.staticPcFormList[2]['filterRules'], this.form.cardFliterDeptOption2);
          this.staticPcFormList[2]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue('status', this.staticPcFormList[2]['filterRules'], this.form.cardFliterStatusOption2);
          let date = this.setFliterOnlyOptionValue('time', this.staticPcFormList[2]['filterRules'], this.form.cardFliterTimeOption2);
          this.staticPcFormList[2]['filterRules']['date1'] = date['date1'];
          this.staticPcFormList[2]['filterRules']['date2'] = date['date2'];
        }else if (value == 3){
          await this.getFiledInfo(this.form.cardForm3);
          this.form.cardTitle = this.form.cardParam3;
          this.form.joinFormParamsValue = this.form.cardValue3Text == '' ? '' : this.form.cardValue3Text;
          this.form.joinFormValue = this.form.cardForm3;
          this.form.joinFormJoinValue = this.form.cardJoin3 != "undefined" && this.form.cardJoin3 != '' ? this.form.cardJoin3 : '5';
          this.form.joinFormJoinFixed = this.form.cardJoinFixed3;
          this.form.joinFormJoinPoint = this.form.cardJoinPoint3 != undefined && this.form.cardJoinPoint3 != '' ? this.form.cardJoinPoint3 : '0';
          this.form.joinFormJoinFormat = this.form.cardJoinFormat3;
          this.form.joinFormFliterValue = this.form.cardFliter3;
          this.form.fliterCollegeOption = this.form.cardFliterCollegeOption3 == "" ? [] : this.form.cardFliterCollegeOption3;
          this.form.fliterDeptOption = this.form.cardFliterDeptOption3 == "" ? [] : this.form.cardFliterDeptOption3;
          this.form.fliterStatusOption = this.form.cardFliterStatusOption3 == "" ? [] : this.form.cardFliterStatusOption3;
          this.form.fliterTimeOption = this.form.cardFliterTimeOption3 == "" ? [] : this.form.cardFliterTimeOption3;

          this.staticPcFormList[3] = this.setStatucFormListObj(this.form.cardFliter3,this.form.cardParam3,this.form.cardForm3,this.form.cardValue3,this.form.cardJoin3,this.staticId,0);
          //this.staticPcFormList[3]['groupRule'] = this.form.cardJoin3;
          this.staticPcFormList[3]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue('college', this.staticPcFormList[3]['filterRules'], this.form.cardFliterCollegeOption3);
          this.staticPcFormList[3]['filterRules']['deptId'] = this.setFliterOnlyOptionValue('dept', this.staticPcFormList[3]['filterRules'], this.form.cardFliterDeptOption3);
          this.staticPcFormList[3]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue('status', this.staticPcFormList[3]['filterRules'], this.form.cardFliterStatusOption3);
          let date = this.setFliterOnlyOptionValue('time', this.staticPcFormList[3]['filterRules'], this.form.cardFliterTimeOption3);
          this.staticPcFormList[3]['filterRules']['date1'] = date['date1'];
          this.staticPcFormList[3]['filterRules']['date2'] = date['date2'];
        }else if (value == 4){
          await this.getFiledInfo(this.form.cardForm4);
          this.form.cardTitle = this.form.cardParam4;
          this.form.joinFormParamsValue = this.form.cardValue4Text == '' ? '' : this.form.cardValue4Text;
          this.form.joinFormValue = this.form.cardForm4;
          this.form.joinFormJoinValue = this.form.cardJoin4 != "undefined" && this.form.cardJoin4 != '' ? this.form.cardJoin4 : '5';
          this.form.joinFormJoinFixed = this.form.cardJoinFixed4;
          this.form.joinFormJoinPoint = this.form.cardJoinPoint4 != undefined && this.form.cardJoinPoint4 != '' ? this.form.cardJoinPoint4 : '0';
          this.form.joinFormJoinFormat = this.form.cardJoinFormat4;
          this.form.joinFormFliterValue = this.form.cardFliter4;
          this.form.fliterCollegeOption = this.form.cardFliterCollegeOption4 == "" ? [] : this.form.cardFliterCollegeOption4;
          this.form.fliterDeptOption = this.form.cardFliterDeptOption4 == "" ? [] : this.form.cardFliterDeptOption4;
          this.form.fliterStatusOption = this.form.cardFliterStatusOption4 == "" ? [] : this.form.cardFliterStatusOption4;
          this.form.fliterTimeOption = this.form.cardFliterTimeOption4 == "" ? [] : this.form.cardFliterTimeOption4;

          this.staticPcFormList[4] = this.setStatucFormListObj(this.form.cardFliter4,this.form.cardParam4,this.form.cardForm4,this.form.cardValue4,this.form.cardJoin4,this.staticId,0);
          //this.staticPcFormList[4]['groupRule'] = this.form.cardJoin4;
          this.staticPcFormList[4]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue('college', this.staticPcFormList[4]['filterRules'], this.form.cardFliterCollegeOption4);
          this.staticPcFormList[4]['filterRules']['deptId'] = this.setFliterOnlyOptionValue('dept', this.staticPcFormList[4]['filterRules'], this.form.cardFliterDeptOption4);
          this.staticPcFormList[4]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue('status', this.staticPcFormList[4]['filterRules'], this.form.cardFliterStatusOption4);
          let date = this.setFliterOnlyOptionValue('time', this.staticPcFormList[4]['filterRules'], this.form.cardFliterTimeOption4);
          this.staticPcFormList[4]['filterRules']['date1'] = date['date1'];
          this.staticPcFormList[4]['filterRules']['date2'] = date['date2'];
        }
        this.settingColValue = value;
      },
      async settingBarDataInfo(event){
        this.settingType = 'bar';
        this.settingColValue = '';

        await this.getFiledInfo(this.form.chartForm);
        this.form.joinFormXValue = "";
        this.form.joinFormYValue = [];
        this.form.joinFormValue = this.form.chartForm;
        this.form.joinFormFliterValue = this.form.chartFliter;
        this.form.joinFormXValue = this.form.chartXdata;
        this.form.joinFormYValue = this.form.chartYdata;
        this.form.fliterOption = this.form.chartFliterOption;

        this.form.fliterChartCollegeOption = this.form.chartXFliterCollege;
        this.form.fliterChartDeptOption = this.form.chartXFliterDept;
        this.form.fliterChartStatusOption = this.form.chartXFliterStatus;
        this.form.fliterChartTimeOption = this.form.chartXFliterTime;

        this.staticPcFormList[5] = this.setStatucFormListObj2(this.form.chartFliter,this.form.chartParam,this.form.chartForm,this.form.chartXdataObj,this.form.chartYdataObj,this.form.chartJoin,this.staticId,1);
        //this.staticPcFormList[5]['filterRules'] = this.setFliterOptionValue(this.form.chartFliter, this.staticPcFormList[5]['filterRules'], this.form.chartFliterOption);
        this.staticPcFormList[5]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue('college', this.staticPcFormList[5]['filterRules'], this.form.chartXFliterCollege);
        this.staticPcFormList[5]['filterRules']['deptId'] = this.setFliterOnlyOptionValue('dept', this.staticPcFormList[5]['filterRules'], this.form.chartXFliterDept);
        this.staticPcFormList[5]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue('status', this.staticPcFormList[5]['filterRules'], this.form.chartXFliterStatus);
        let date = this.setFliterOnlyOptionValue('time', this.staticPcFormList[5]['filterRules'], this.form.chartXFliterTime);
        this.staticPcFormList[5]['filterRules']['date1'] = date['date1'];
        this.staticPcFormList[5]['filterRules']['date2'] = date['date2'];

        this.setBarChartData();
      },
      async settingCircleDataInfo(event){
        this.settingType = 'circle';
        this.settingColValue = '';

        await this.getFiledInfo(this.form.circleForm);
        this.form.circleParams = this.form.circleParams;
        this.form.joinFormParamsValue = this.form.circleValueText == '' ? '' : this.form.circleValueText;
        this.form.joinFormValue = this.form.circleForm;
        this.form.joinFormJoinValue = this.form.circleJoin;
        this.form.joinFormFliterValue = this.form.circleFliter;

        this.form.joinFormMoleculeParamsValue = this.form.circleMoleculeValueText;
        this.circleRealName = this.circleRealName;
        this.form.circleMoleculeJoinOption = this.form.circleMoleculeJoin ? this.form.circleMoleculeJoin : '5';
        this.form.fliterMoleculeCollegeOption = this.form.circleFliterMoleculeCollegeOption;
        this.form.fliterMoleculeDeptOption = this.form.circleFliterMoleculeDeptOption;
        this.form.fliterMoleculeStatusOption = this.form.circleFliterMoleculeStatusOption;
        this.form.fliterMoleculeTimeOption = this.form.circleFliterMoleculeTimeOption;

        this.form.joinFormDenominatorParamsValue = this.form.circleDenominatorValueText;
        this.form.circleDenominatorJoinOption = this.form.circleDenominatorJoin ? this.form.circleDenominatorJoin : '5';
        this.form.fliterDenominatorCollegeOption = this.form.circleFliterDenominatorCollegeOption;
        this.form.fliterDenominatorDeptOption = this.form.circleFliterDenominatorDeptOption;
        this.form.fliterDenominatorStatusOption = this.form.circleFliterDenominatorStatusOption;
        this.form.fliterDenominatorTimeOption = this.form.circleFliterDenominatorTimeOption;

        this.percentage = 0;
        this.percentageValue = this.percentageValue == '表单字段' ? '表单字段' : this.percentageValue;
        this.form.fliterMoleculeOption = this.form.circleFliterOption;

        this.staticPcFormList[6] = this.setStatucFormListObj3(this.form.circleParams,this.form.circleForm,this.form.circleMoleculeValue,this.form.circleDenominatorValue,this.staticId,5);
        //this.staticPcFormList[6]['filterRules'] = this.setFliterOptionValue(this.form.circleFliter, this.staticPcFormList[6]['filterRules'], this.form.circleFliterOption);
        this.staticPcFormList[6]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue('college', this.staticPcFormList[6]['filterRules'], this.form.circleFliterMoleculeCollegeOption);
        this.staticPcFormList[6]['filterRules']['deptId'] = this.setFliterOnlyOptionValue('dept', this.staticPcFormList[6]['filterRules'], this.form.circleFliterMoleculeDeptOption);
        this.staticPcFormList[6]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue('status', this.staticPcFormList[6]['filterRules'], this.form.circleFliterMoleculeStatusOption);
        let date = this.setFliterOnlyOptionValue('time', this.staticPcFormList[6]['filterRules'], this.form.circleFliterMoleculeTimeOption);
        this.staticPcFormList[6]['filterRules']['date1'] = date['date1'];
        this.staticPcFormList[6]['filterRules']['date2'] = date['date2'];

        this.staticPcFormList[6]['filterRules2']['collegeId'] = this.setFliterOnlyOptionValue('college', this.staticPcFormList[6]['filterRules2'], this.form.circleFliterDenominatorCollegeOption);
        this.staticPcFormList[6]['filterRules2']['deptId'] = this.setFliterOnlyOptionValue('dept', this.staticPcFormList[6]['filterRules2'], this.form.circleFliterDenominatorDeptOption);
        this.staticPcFormList[6]['filterRules2']['applyStatus'] = this.setFliterOnlyOptionValue('status', this.staticPcFormList[6]['filterRules2'], this.form.circleFliterDenominatorStatusOption);
        let date2 = this.setFliterOnlyOptionValue('time', this.staticPcFormList[6]['filterRules2'], this.form.circleFliterDenominatorTimeOption);
        this.staticPcFormList[6]['filterRules2']['date1'] = date2['date1'];
        this.staticPcFormList[6]['filterRules2']['date2'] = date2['date2'];
      },
      async settingTableDataInfo(event){
        this.settingType = 'table';
        this.settingColValue = '';

        await this.getFiledInfo(this.form.circleForm);
        this.form.joinFormValue = this.form.tableForm;
        this.form.joinFormFliterValue = this.form.tableFliter;

        let array = this.setTableInfoData();
        this.staticPcFormList[7] = this.setStatucTableListObj(this.form.tableJoin,'',this.form.tableForm,array,this.form.tableJoin,this.staticId,3);
        this.form.fliterTableCollegeOption = this.form.joinTableCollege;
        this.form.fliterTableDeptOption = this.form.joinTableDept;
        this.form.fliterTableStatusOption = this.form.joinTableStatus;
        this.form.fliterTableTimeOption = this.form.joinTableTime;

        this.staticPcFormList[7]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue('college', this.staticPcFormList[7]['filterRules'], this.form.fliterTableCollegeOption);
        this.staticPcFormList[7]['filterRules']['deptId'] = this.setFliterOnlyOptionValue('dept', this.staticPcFormList[7]['filterRules'], this.form.fliterTableDeptOption);
        this.staticPcFormList[7]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue('status', this.staticPcFormList[7]['filterRules'], this.form.fliterTableStatusOption);
        let date2 = this.setFliterOnlyOptionValue('time', this.staticPcFormList[7]['filterRules'], this.form.fliterTableTimeOption);
        this.staticPcFormList[7]['filterRules']['date1'] = date2['date1'];
        this.staticPcFormList[7]['filterRules']['date2'] = date2['date2'];
        //this.staticPcFormList[7]['groupType'] = this.setFliterOptionValue(this.form.circleFliter, this.staticPcFormList[6]['filterRules'], this.form.circleFliterOption);
      },
      settingSearchDataInfo(event){
        this.settingType = 'search';
        this.settingColValue = '';
        //console.log(this.searchSetStaticForm, this.form.searchStaticTitle);
        let filterType = this.getTilterType(this.searchSetStaticForm);
        this.staticPcFormList[0] = {
          filterType: filterType,
          unitName: this.form.searchStaticTitle,
          statId: this.staticId,
          unitType: 4
        };
      },
      getTitleFliterText(data){
        let filterType = "";
        if (data == 0){
          filterType = "time";
        }else if (data == 1){
          filterType = "dept";
        }else if (data == 2){
          filterType = "college";
        }else if (data == 3){
          filterType = "status";
        }
        return filterType;
      },
      getTilterType(type){
        let filterType = "";
        if (type == "time"){
          filterType = 0;
        }else if (type == "college"){
          filterType = 2;
        }else if (type == "dept"){
          filterType = 1;
        }else if (type == "status"){
          filterType = 3;
        }
        return filterType;
      },
      setFliterOptionValue(type,staticPcForm1,data){
        let staticPcForm = {};
        if (type == 'time'){
          staticPcForm['date1'] = data.length > 0 ? data[0] : '';
          staticPcForm['date2'] = data.length > 0 ? data[1] : '';
        }else if (type == 'dept'){
          staticPcForm['deptId'] = JSON.stringify(data);
        }else if (type == 'college'){
          staticPcForm['collegeId'] = JSON.stringify(data);
        }else if (type == 'status'){
          staticPcForm['applyStatus'] = parseInt(data);
        }
        return staticPcForm;
      },
      setFliterOnlyOptionValue(type,staticPcForm1,data){
        let staticPcForm = {};
        if (type == 'time'){
          staticPcForm['date1'] = data && data.length > 0 ? data[0] : '';
          staticPcForm['date2'] = data && data.length > 0 ? data[1] : '';
        }else if (type == 'dept'){
          staticPcForm = data ? JSON.stringify(data) : "";
        }else if (type == 'college'){
          staticPcForm = data ? JSON.stringify(data) : "";
        }else if (type == 'status'){
          staticPcForm = data ? JSON.stringify(data) : "";
        }
        return staticPcForm;
      },
      setStatucFormListObj(cardFliter,cardParam,cardForm,relaFromField,cardJoin,staticId,unitType){
        let obj = {
          filterType: this.getTilterType(cardFliter),
          unitName: cardParam,
          filterRules: {},
          relaFormId: cardForm,
          relaFromField1: [
            relaFromField != '' ? relaFromField : {
              d: true,
              f: "",
              g: 5,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            }
          ],
          relaFromField2: [

          ],
          groupRule: cardJoin,
          unitType: unitType,
          statId: staticId
        }
        return obj;
      },
      setStatucFormListObj2(cardFliter,cardParam,cardForm,relaFromField1,relaFromField2,cardJoin,staticId,unitType){
        let obj = {
          filterType: this.getTilterType(cardFliter),
          unitName: cardParam,
          filterRules: {},
          relaFormId: cardForm,
          relaFromField1: [
            relaFromField1 != '' ? relaFromField1 : {
              d: true,
              f: "",
              g: 5,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            }
          ],
          relaFromField2: relaFromField2,
          groupRule: cardJoin,
          unitType: unitType,
          statId: staticId
        }
        return obj;
      },
      setStatucFormListObj3(unitName,cardForm,relaFromField1,relaFromField2,staticId,unitType){
        let obj = {
          filterType: '',
          unitName: unitName,
          filterRules: {},
          filterRules2: {},
          relaFormId: cardForm,
          relaFromField1: [
            relaFromField1 != '' ? relaFromField1 : {
              d: true,
              f: "",
              g: 5,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            }
          ],
          relaFromField2: [
            relaFromField2 != '' ? relaFromField2 : {
              d: true,
              f: "",
              g: 5,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            }
          ],
          groupRule: '',
          unitType: unitType,
          statId: staticId
        }
        return obj;
      },
      setStatucTableListObj(cardFliter,cardParam,cardForm,relaFromField,cardJoin,staticId,unitType){
        let obj = {
          //filterType: cardFliter,
          unitName: cardParam,
          filterRules: {},
          relaFormId: cardForm,
          relaFromField1: relaFromField,
          groupRule: cardJoin,
          unitType: unitType,
          statId: staticId,
          groupType: cardFliter
        }
        return obj;
      },
      setTableInfoData(){
        let tableCol = this.tableTitleColData;
        let array = [];
        for (let i = 0; i < tableCol.length; i++){
          //tableCol[i].obj
          array.push({
            d: tableCol[i].obj['d'],
            n: tableCol[i].obj['n'],
            f: tableCol[i].obj['f'],
            g: tableCol[i].obj['g'],
            jd: tableCol[i].obj['jd'] ? tableCol[i].obj['jd'] : '0',
            hz: tableCol[i].obj['hz'] ? tableCol[i].obj['hz'] : '',
            zwf: tableCol[i].obj['zwf'],
          });
        }
        return array;
      },
      setBarChartData(){
        let array = this.form.chartYdataArray;
        let legned = [];
        let yData = [];
        let arrayObj = [];
        let yDataNum = [];
        let key = [];

        for (let i = 0; i < array.length; i++){
          yDataNum.push(10);
        }

        for (let i = 0; i < array.length; i++){
          legned.push(array[i]['n']);
          arrayObj.push(array[i]);

          yData.push({
            name: array[i]['n'],
            type: 'bar',
            barWidth:15,
            data:yDataNum
          });
        }

        for (let i = 0; i < 3; i++){
          key.push(this.form.chartXdataObj['n']+i);
        }
        this.barDataLegned = legned;
        this.barData = yData;
        this.barDataKey = key;
        this.staticPcFormList[5]['relaFromField2'] = arrayObj;
      },
      addTableRow(){
        let obj = {
          title: '',
          label: '',
          value: '-1',
          fixed: '',
          point: '0',
          format: false,
          relaName: '',
          obj: {
            d:'',
            f:'',
            n:'',
            g:'-1',
            jd: '0',
            zwf: false,
            hz: ''
          }
        };
        this.tableTitleColData.splice(this.tableTitleColData.length,0, obj);
        this.staticPcFormList[7]['relaFromField1'] = this.setTableInfoData();
      },
      addTableCol(event, index){
        let obj = {
          title: '',
          label: '',
          value: '-1',
          fixed: '',
          point: '0',
          format: false,
          relaName: '',
          obj: {
            d:'',
            f:'',
            n:'',
            g:'-1',
            jd: '0',
            zwf: false,
            hz: ''
          }
        };
        this.tableTitleColData.splice(index+1,0, obj);
        this.staticPcFormList[7]['relaFromField1'] = this.setTableInfoData();
      },
      minsTableCol(event, index){
        this.tableTitleColData.splice(index,1);
        this.staticPcFormList[7]['relaFromField1'] = this.setTableInfoData();
      },
      inputCard(event, value){
        if (value){
          if (value == 1){
            this.form.cardParam1 = this.form.cardTitle;
            this.staticPcFormList[1]['unitName'] = this.form.cardTitle;
          }else if (value == 2){
            this.form.cardParam2 = this.form.cardTitle;
            this.staticPcFormList[2]['unitName'] = this.form.cardTitle;
          }else if (value == 3){
            this.form.cardParam3 = this.form.cardTitle;
            this.staticPcFormList[3]['unitName'] = this.form.cardTitle;
          }else if (value == 4){
            this.form.cardParam4 = this.form.cardTitle;
            this.staticPcFormList[4]['unitName'] = this.form.cardTitle;
          }
        }else {
          if (this.settingType == 'search'){
            this.staticPcFormList[0]['unitName'] = this.form.searchStaticTitle;
          }else if (this.settingType == 'bar'){
            this.staticPcFormList[5]['unitName'] = this.form.chartParam;
          }else if (this.settingType == 'circle'){
            this.staticPcFormList[6]['unitName'] = this.form.circleParams;
          }else if (this.settingType == 'table'){
            this.staticPcFormList[7]['unitName'] = "";
          }
        }

      },
      handleSearchChange(data, type){
        if(type == 1){
          this.searchSetStaticFormOption = [];
          this.searchSetStaticForm = data;
          this.searchStaticForm = data;
          let filterType = "";
          if (data == "time"){
            filterType = 0;
          }else if (data == "college"){
            filterType = 2;
          }else if (data == "dept"){
            filterType = 1;
          }
          this.staticPcFormList[0]['filterType'] = filterType;
        }else if(type == 2){
          this.searchStaticForm = data;
        }else if(type == 2){
          this.searchSetStaticTimeForm = data;
        }
      },
      handleSelect(event, index){

      },
      handleSearchSelect(data, type){
        if (type == 1){
          this.searchSetStaticFormOption = data;
        }else if (type == 2){
          this.searchSetStaticFormOption = data;
        }
      },
      handleSelectLabel(item, indexItem, index){
        item.label = item.label;
        let obj = this.joinFormParamsOptionsArray[indexItem];
        this.tableTitleColData[index]['obj']['n'] = obj.n;
        this.tableTitleColData[index]['obj']['f'] = obj.f;
        this.tableTitleColData[index]['obj']['d'] = obj.d;
        this.tableTitleColData[index]['obj']['hz'] = obj['hz'] ? obj['hz'] : '';
        this.tableTitleColData[index]['obj']['jd'] = obj['jd'] ? obj['jd'] : '0';
        this.tableTitleColData[index]['obj']['zwf'] = obj['zwf'];
        this.$set(this.tableTitleColData[index], 'title', obj.n);
        this.$set(this.tableTitleColData[index], 'label', obj.n);

        let tableCol = this.tableTitleColData;
        let array = [];
        for (let i = 0; i < tableCol.length; i++){
          array.push(tableCol[i].obj);
        }
        this.staticPcFormList[7]['relaFromField1'] = array;
      },
      handleChangeLabel(data, item, indexItem, index){
        this.tableTitleColData[index]['obj']['n'] = data;
        this.tableTitleColData[index]['title'] = data;

        this.staticPcFormList[7]['relaFromField1'] = this.setTableInfoData();
      },
      handleChangeFixed(data,item, indexItem, index){
        this.tableTitleColData[index]['obj']['hz'] = data;
        this.staticPcFormList[7]['relaFromField1'] = this.setTableInfoData();
      },
      handleJoinFormParamsChange(item, data, type){
        let obj = {};
        obj['d'] = this.joinFormParamsOptionsArray[parseInt(data)]['d'];
        obj['f'] = this.joinFormParamsOptionsArray[parseInt(data)]['f'];
        obj['n'] = this.joinFormParamsOptionsArray[parseInt(data)]['n'];
        this.form.joinFormParamsValue = item.value;
        this.form.joinFormParamsValueObj = obj;
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            obj['g'] = parseInt(this.form.cardJoin1);
            obj['zwf'] = this.form.cardJoinFormat1;
            obj['jd'] = parseInt(this.form.cardJoinPoint1);
            obj['hz'] = this.form.cardJoinFixed1;
            this.form.cardValue1 = obj;
            this.form.cardValue1Text = item.value;
            this.staticPcFormList[1]['relaFromField1'] = [obj];
          }else if (this.settingColValue == 2){
            obj['g'] = parseInt(this.form.cardJoin2);
            obj['zwf'] = this.form.cardJoinFormat2;
            obj['jd'] = parseInt(this.form.cardJoinPoint2);
            obj['hz'] = this.form.cardJoinFixed2;
            this.form.cardValue2 = obj;
            this.form.cardValue2Text = item.value;
            this.staticPcFormList[2]['relaFromField1'] = [obj];
          }else if (this.settingColValue == 3){
            obj['g'] = parseInt(this.form.cardJoin3);
            obj['zwf'] = this.form.cardJoinFormat3;
            obj['jd'] = parseInt(this.form.cardJoinPoint3);
            obj['hz'] = this.form.cardJoinFixed3;
            this.form.cardValue3 = obj;
            this.form.cardValue3Text = item.value;
            this.staticPcFormList[3]['relaFromField1'] = [obj];
          }else if (this.settingColValue == 4){
            obj['g'] = parseInt(this.form.cardJoin4);
            obj['zwf'] = this.form.cardJoinFormat4;
            obj['jd'] = parseInt(this.form.cardJoinPoint4);
            obj['hz'] = this.form.cardJoinFixed4;
            this.form.cardValue4 = obj;
            this.form.cardValue4Text = item.value;
            this.staticPcFormList[4]['relaFromField1'] = [obj];
          }
        }else if (this.settingType == 'circle'){
          if (type == 'Molecule'){
            this.form.joinFormMoleculeParamsValue = item.value;
            this.form.joinFormMoleculeParamsValueObj = obj;
            this.form.circleMoleculeValue = obj;
            this.form.circleMoleculeValueText = item.value;
            obj['g'] = parseInt(this.form.circleMoleculeJoinOption);
            this.staticPcFormList[6]['relaFromField1'] = [obj];
            this.percentageValue = this.form.circleRealName != "" ? this.form.circleRealName : obj.n;
          }else if (type == 'Denominator'){
            this.form.joinFormDenominatorParamsValue = item.value;
            this.form.joinFormDenominatorParamsValueObj = obj;
            this.form.circleDenominatorValue = obj;
            this.form.circleDenominatorValueText = item.value;
            obj['g'] = parseInt(this.form.circleMoleculeJoinOption);
            this.staticPcFormList[6]['relaFromField2'] = [obj];
          }
          this.percentage = 0;
        }
      },
      handleJoinFormValue(data){
        this.form.joinFormValue = data;
        this.form.joinFormParamsValue = "";
        this.form.joinFormParamsValueObj = {};
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardForm1 = data;
            this.staticPcFormList[1]['relaFormId'] = data;
            this.form.cardValue1 = "";
            this.form.cardValue1Text = "";
          }else if (this.settingColValue == 2){
            this.form.cardForm2 = data;
            this.staticPcFormList[2]['relaFormId'] = data;
            this.form.cardValue2 = "";
            this.form.cardValue2Text = "";
          }else if (this.settingColValue == 3){
            this.form.cardForm3 = data;
            this.staticPcFormList[3]['relaFormId'] = data;
            this.form.cardValue3 = "";
            this.form.cardValue3Text = "";
          }else if (this.settingColValue == 4){
            this.form.cardForm4 = data;
            this.staticPcFormList[4]['relaFormId'] = data;
            this.form.cardValue4 = "";
            this.form.cardValue4Text = "";
          }
        }else if (this.settingType == 'circle'){
          this.form.circleForm = data;
          this.staticPcFormList[6]['relaFormId'] = data;
          this.form.circleValue = "";
          this.form.circleValueText = "";
        }else if (this.settingType == 'table'){
          this.form.tableForm = data;
          this.staticPcFormList[7]['relaFormId'] = data;
          this.form.tableValue = "";
          this.form.tableValueText = "";
        }else if (this.settingType == 'bar'){
          this.form.chartForm = data;
          this.staticPcFormList[5]['relaFormId'] = data;
          this.form.chartValue = "";
          this.form.chartValueText = "";
        }
        this.getFiledInfo(data);
      },
      handleXChange(item,data){
        let obj = {};
        obj['d'] = this.joinFormParamsOptionsArray[data]['d'];
        obj['f'] = this.joinFormParamsOptionsArray[data]['f'];
        obj['n'] = this.joinFormParamsOptionsArray[data]['n'];
        this.form.chartXdata = item.value;
        this.form.chartXdataObj = obj;
        this.staticPcFormList[5]['relaFromField1'] = [obj];
      },
      handleYJoinChange(item, index){
        this.$set(this.form.chartYdataArray[index], 'g', item['value']);
      },
      handleYChange(item, index){
        let array = [];
        let arrayObj = [];
        let yData = [];
        let yDataNum = [];
        let arrayF = [];
        let tempData = {
          d: item['extra'],
          n: item['label'],
          f: item['value'],
        }

        // let sel = inArray(tempData, this.form.chartYdataArray, 'f');
        // if (sel > -1){
        //   this.form.chartYdataArray.splice(sel,1);
        // }else {
        //   this.form.chartYdataArray.push(tempData);
        // }

        this.$set(this.form.chartYdataArray[index], 'd', item['extra']);
        this.$set(this.form.chartYdataArray[index], 'n', item['label']);
        this.$set(this.form.chartYdataArray[index], 'f', item['value']);

        this.setBarChartData();
      },
      handleSelectValue(event, item, index){
        this.tableTitleColData[index]['obj']['g'] = event;
        item.value = event;
        item.valueText = '';
        this.staticPcFormList[7]['relaFromField1'] = this.setTableInfoData();
      },
      handleFliterChange(data){
        this.form.joinFormFliterValue = data;
        this.form.fliterOption = [];
        this.resetCasadeSelector('SelectorCollege');
        this.resetCasadeSelector('SelectorDept');
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardFliter1 = data;
            this.staticPcFormList[1]['filterRules'] = {};
            this.staticPcFormList[1]['filterType'] = this.getTilterType(data);
          }else if (this.settingColValue == 2){
            this.form.cardFliter2 = data;
            this.staticPcFormList[2]['filterRules'] = {};
            this.staticPcFormList[2]['filterType'] = this.getTilterType(data);
          }else if (this.settingColValue == 3){
            this.form.cardFliter3 = data;
            this.staticPcFormList[3]['filterRules'] = {};
            this.staticPcFormList[3]['filterType'] = this.getTilterType(data);
          }else if (this.settingColValue == 4){
            this.form.cardFliter4 = data;
            this.staticPcFormList[4]['filterRules'] = {};
            this.staticPcFormList[4]['filterType'] = this.getTilterType(data);
          }
        }else if (this.settingType == 'circle'){
          this.form.circleFliter = data;
          this.staticPcFormList[6]['filterType'] = this.getTilterType(data);
        }else if (this.settingType == 'bar'){
          this.form.chartFliter = data;
          this.staticPcFormList[5]['filterType'] = this.getTilterType(data);
          if (data == 'time'){
            this.barDataKey = ['时间1','时间2','更多'];
          }else if (data == 'dept'){
            this.barDataKey = ['部门1','部门2','更多'];
          }else if (data == 'college'){
            this.barDataKey = ['学院1','学院2','更多'];
          }

          let barData = [];
          let array = [];
          for (let i = 0; i < this.barDataLegned.length; i++){
            barData.push({
              name: this.barDataLegned[i],
              type: 'bar',
              barWidth:15,
              data:[10,10,10]
            });
          }
          this.barData = barData;
        }else if (this.settingType == 'table'){
          this.form.tableFliter = data;
        }
      },
      handleJoinFormChange(data, type){
        this.form.joinFormJoinValue = data;
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardJoin1 = data;
            this.staticPcFormList[1]['relaFromField1'][0]['g'] = parseInt(data);
          }else if (this.settingColValue == 2){
            this.form.cardJoin2 = data;
            this.staticPcFormList[2]['relaFromField1'][0]['g'] = parseInt(data);
          }else if (this.settingColValue == 3){
            this.form.cardJoin3 = data;
            this.staticPcFormList[3]['relaFromField1'][0]['g'] = parseInt(data);
          }else if (this.settingColValue == 4){
            this.form.cardJoin4 = data;
            this.staticPcFormList[4]['relaFromField1'][0]['g'] = parseInt(data);
          }
        }else if (this.settingType == 'circle'){
          if (type == 'Molecule'){
            this.form.circleMoleculeJoin = data;
            this.form.circleMoleculeJoinOption = data;
            this.staticPcFormList[6]['relaFromField1'][0]['g'] = parseInt(data);
          }else if (type == 'Denominator'){
            this.form.circleDenominatorJoin = data;
            this.form.circleDenominatorJoinOption = data;
            this.staticPcFormList[6]['relaFromField2'][0]['g'] = parseInt(data);
          }
        }else if (this.settingType == 'table'){
          this.form.tableJoin = data;
          this.staticPcFormList[7]['groupRule'] = data;
        }else if (this.settingType == 'bar'){
          this.form.chartJoin = data;
          this.staticPcFormList[5]['groupRule'] = data;
        }
      },
      handleJoinFormFiextChange(data){
        this.form.joinFormJoinFixed = data;
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardJoinFixed1 = data;
            this.staticPcFormList[1]['relaFromField1'][0]['hz'] = data;
          }else if (this.settingColValue == 2){
            this.form.cardJoinFixed2 = data;
            this.staticPcFormList[2]['relaFromField1'][0]['hz'] = data;
          }else if (this.settingColValue == 3){
            this.form.cardJoinFixed3 = data;
            this.staticPcFormList[3]['relaFromField1'][0]['hz'] = data;
          }else if (this.settingColValue == 4){
            this.form.cardJoinFixed4 = data;
            this.staticPcFormList[4]['relaFromField1'][0]['hz'] = data;
          }
        }
      },
      handleJoinFormTablePointChange(data, indexItem, index){
        this.tableTitleColData[index]['obj']['jd'] = data.value;
        this.staticPcFormList[7]['relaFromField1'] = this.setTableInfoData();
      },
      handleJoinFormPointChange(data){
        this.form.joinFormJoinPoint = data;
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardJoinPoint1 = data;
            this.staticPcFormList[1]['relaFromField1'][0]['jd'] = data;
          }else if (this.settingColValue == 2){
            this.form.cardJoinPoint2 = data;
            this.staticPcFormList[2]['relaFromField1'][0]['jd'] = data;
          }else if (this.settingColValue == 3){
            this.form.cardJoinPoint3 = data;
            this.staticPcFormList[3]['relaFromField1'][0]['jd'] = data;
          }else if (this.settingColValue == 4){
            this.form.cardJoinPoint4 = data;
            this.staticPcFormList[4]['relaFromField1'][0]['jd'] = data;
          }
        }
      },
      handleJoinFormTableFormatChange(data, indexItem, index){
        this.tableTitleColData[index]['obj']['zwf'] = data.value;
        this.staticPcFormList[7]['relaFromField1'] = this.setTableInfoData();
      },
      handleJoinFormFormatChange(data){
        this.form.joinFormJoinFormat = data;
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardJoinFormat1 = data;
            this.staticPcFormList[1]['relaFromField1'][0]['zwf'] = data;
          }else if (this.settingColValue == 2){
            this.form.cardJoinFormat2 = data;
            this.staticPcFormList[2]['relaFromField1'][0]['zwf'] = data;
          }else if (this.settingColValue == 3){
            this.form.cardJoinFormat3 = data;
            this.staticPcFormList[3]['relaFromField1'][0]['zwf'] = data;
          }else if (this.settingColValue == 4){
            this.form.cardJoinFormat4 = data;
            this.staticPcFormList[4]['relaFromField1'][0]['zwf'] = data;
          }
        }
      },
      handleJoinTableChange(data){
        this.form.tableJoin = data;
        this.staticPcFormList[7]['groupType'] = data;
      },
      handleCircleInput(data){
        this.form.circleRealName = data;
        this.percentageValue = data;
        this.staticPcFormList[6]['relaFromField1'][0]['n'] = data;
      },
      handleBarInput(data, item, index){
        this.$set(this.form.chartYdataArray[index], 'n', data);
        this.setBarChartData();
      },
      handleSelectCollege(data, type, type2){
        this.form.fliterCollegeOption = data;
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardFliterCollegeOption1 = data;
            this.staticPcFormList[1]['filterRules']['collegeId'] = "";
            this.staticPcFormList[1]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[1],data);
          }else if (this.settingColValue == 2){
            this.form.cardFliterCollegeOption2 = data;
            this.staticPcFormList[2]['filterRules']['collegeId'] = "";
            this.staticPcFormList[2]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[2],data);
          }else if (this.settingColValue == 3){
            this.form.cardFliterCollegeOption3 = data;
            this.staticPcFormList[3]['filterRules']['collegeId'] = "";
            this.staticPcFormList[3]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[3],data);
          }else if (this.settingColValue == 4){
            this.form.cardFliterCollegeOption4 = data;
            this.staticPcFormList[4]['filterRules']['collegeId'] = "";
            this.staticPcFormList[4]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[4],data);
          }
        }else if (this.settingType == 'circle'){
          if (type2 == 'Molecule'){
            this.form.circleFliterMoleculeCollegeOption = data;
            this.form.fliterMoleculeCollegeOption = data;
            this.staticPcFormList[6]['filterRules']['collegeId'] = "";
            this.staticPcFormList[6]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[6],data);
          }else if (type2 == 'Denominator'){
            this.form.circleFliterDenominatorCollegeOption = data;
            this.form.fliterDenominatorCollegeOption = data;
            this.staticPcFormList[6]['filterRules2']['collegeId'] = "";
            this.staticPcFormList[6]['filterRules2']['collegeId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[6],data);
          }
        }else if (this.settingType == 'bar'){
          this.form.fliterChartCollegeOption = data;
          this.form.chartXFliterCollege = data;
          this.staticPcFormList[5]['filterRules']['collegeId'] = "";
          this.staticPcFormList[5]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[5],data);
        }else if (this.settingType == 'table'){
          this.form.fliterTableCollegeOption = data;
          this.form.joinTableCollege = data;
          this.staticPcFormList[7]['filterRules']['collegeId'] = "";
          this.staticPcFormList[7]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[7],data);
        }
      },
      handleSelectDept(data, type, type2){
        this.form.fliterDeptOption = data;
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardFliterDeptOption1 = data;
            this.staticPcFormList[1]['filterRules']['deptId'] = "";
            this.staticPcFormList[1]['filterRules']['deptId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[1],data);
          }else if (this.settingColValue == 2){
            this.form.cardFliterDeptOption2 = data;
            this.staticPcFormList[2]['filterRules']['deptId'] = "";
            this.staticPcFormList[2]['filterRules']['deptId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[2],data);
          }else if (this.settingColValue == 3){
            this.form.cardFliterDeptOption3 = data;
            this.staticPcFormList[3]['filterRules']['deptId'] = "";
            this.staticPcFormList[3]['filterRules']['deptId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[3],data);
          }else if (this.settingColValue == 4){
            this.form.cardFliterDeptOption4 = data;
            this.staticPcFormList[4]['filterRules']['deptId'] = "";
            this.staticPcFormList[4]['filterRules']['deptId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[4],data);
          }
        }else if (this.settingType == 'circle'){
          if (type2 == 'Molecule'){
            this.form.circleFliterMoleculeDeptOption = data;
            this.form.fliterMoleculeDeptOption = data;
            this.staticPcFormList[6]['filterRules']['deptId'] = "";
            this.staticPcFormList[6]['filterRules']['deptId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[6],data);
          }else if (type2 == 'Denominator'){
            this.form.circleFliterDenominatorDeptOption = data;
            this.form.fliterDenominatorDeptOption = data;
            this.staticPcFormList[6]['filterRules2']['deptId'] = "";
            this.staticPcFormList[6]['filterRules2']['deptId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[6],data);
          }
        }else if (this.settingType == 'bar'){
          this.form.fliterChartDeptOption = data;
          this.form.chartXFliterDept = data;
          this.staticPcFormList[5]['filterRules']['deptId'] = "";
          this.staticPcFormList[5]['filterRules']['deptId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[5],data);
        }else if (this.settingType == 'table'){
          this.form.fliterTableDeptOption = data;
          this.form.joinTableDept = data;
          this.staticPcFormList[7]['filterRules']['deptId'] = "";
          this.staticPcFormList[7]['filterRules']['deptId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[7],data);
        }
      },
      handleSelectStatus(data, type, type2){
        this.form.fliterStatusOption = data;
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardFliterStatusOption1 = data;
            this.staticPcFormList[1]['filterRules']['applyStatus'] = "";
            this.staticPcFormList[1]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[1],data);
          }else if (this.settingColValue == 2){
            this.form.cardFliterStatusOption2 = data;
            this.staticPcFormList[2]['filterRules']['applyStatus'] = "";
            this.staticPcFormList[2]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[2],data);
          }else if (this.settingColValue == 3){
            this.form.cardFliterStatusOption3 = data;
            this.staticPcFormList[3]['filterRules']['applyStatus'] = "";
            this.staticPcFormList[3]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[3],data);
          }else if (this.settingColValue == 4){
            this.form.cardFliterStatusOption4 = data;
            this.staticPcFormList[4]['filterRules']['applyStatus'] = "";
            this.staticPcFormList[4]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[4],data);
          }
        }else if (this.settingType == 'circle'){
          if (type2 == 'Molecule'){
            this.form.circleFliterMoleculeStatusOption = data;
            this.form.fliterMoleculeStatusOption = data;
            this.staticPcFormList[6]['filterRules']['applyStatus'] = "";
            this.staticPcFormList[6]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[6],data);
          }else if (type2 == 'Denominator'){
            this.form.circleFliterDenominatorStatusOption = data;
            this.form.fliterDenominatorStatusOption = data;
            this.staticPcFormList[6]['filterRules2']['applyStatus'] = "";
            this.staticPcFormList[6]['filterRules2']['applyStatus'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[6],data);
          }
        }else if (this.settingType == 'bar'){
          this.form.fliterChartStatusOption = data;
          this.form.chartXFliterStatus = data;
          this.staticPcFormList[5]['filterRules']['applyStatus'] = "";
          this.staticPcFormList[5]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[5],data);
        }else if (this.settingType == 'table'){
          this.form.fliterTableStatusOption = data;
          this.form.joinTableStatus = data;
          this.staticPcFormList[7]['filterRules']['applyStatus'] = "";
          this.staticPcFormList[7]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[7],data);
        }
      },
      handleSelectFliter(data, type, type2){
        this.form.fliterTimeOption = data;
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardFliterTimeOption1 = data;
            this.staticPcFormList[1]['filterRules']['date1'] = "";
            this.staticPcFormList[1]['filterRules']['date2'] = "";
            let date = this.setFliterOptionValue(type, this.staticPcFormList[1],data);
            this.staticPcFormList[1]['filterRules']['date1'] = date['date1'];
            this.staticPcFormList[1]['filterRules']['date2'] = date['date2'];
          }else if (this.settingColValue == 2){
            this.form.cardFliterTimeOption2 = data;
            this.staticPcFormList[2]['filterRules']['date1'] = "";
            this.staticPcFormList[2]['filterRules']['date2'] = "";
            let date = this.setFliterOptionValue(type, this.staticPcFormList[1],data);
            this.staticPcFormList[2]['filterRules']['date1'] = date['date1'];
            this.staticPcFormList[2]['filterRules']['date2'] = date['date2'];
          }else if (this.settingColValue == 3){
            this.form.cardFliterTimeOption3 = data;
            this.staticPcFormList[3]['filterRules']['date1'] = "";
            this.staticPcFormList[3]['filterRules']['date2'] = "";
            let date = this.setFliterOptionValue(type, this.staticPcFormList[1],data);
            this.staticPcFormList[3]['filterRules']['date1'] = date['date1'];
            this.staticPcFormList[3]['filterRules']['date2'] = date['date2'];
          }else if (this.settingColValue == 4){
            this.form.cardFliterTimeOption4 = data;
            this.staticPcFormList[4]['filterRules']['date1'] = "";
            this.staticPcFormList[4]['filterRules']['date2'] = "";
            let date = this.setFliterOptionValue(type, this.staticPcFormList[1],data);
            this.staticPcFormList[4]['filterRules']['date1'] = date['date1'];
            this.staticPcFormList[4]['filterRules']['date2'] = date['date2'];
          }
        }else if (this.settingType == 'circle'){
          if (type2 == 'Molecule'){
            this.form.circleFliterMoleculeTimeOption = data;
            this.form.fliterMoleculeTimeOption = data;
            let date = this.setFliterOptionValue(type, this.staticPcFormList[6],data);
            this.staticPcFormList[6]['filterRules']['date1'] = date['date1'];
            this.staticPcFormList[6]['filterRules']['date2'] = date['date2'];
          }else if (type2 == 'Denominator'){
            this.form.circleFliterDenominatorTimeOption = data;
            this.form.fliterDenominatorTimeOption = data;
            let date = this.setFliterOptionValue(type, this.staticPcFormList[6],data);
            this.staticPcFormList[6]['filterRules2']['date1'] = date['date1'];
            this.staticPcFormList[6]['filterRules2']['date2'] = date['date2'];
          }
        }else if (this.settingType == 'bar'){
          this.form.fliterChartTimeOption = data;
          this.form.chartXFliterTime = data;
          let date = this.setFliterOptionValue(type, this.staticPcFormList[5],data);
          this.staticPcFormList[5]['filterRules']['date1'] = date['date1'];
          this.staticPcFormList[5]['filterRules']['date2'] = date['date2'];
        }else if (this.settingType == 'table'){
          this.form.fliterTableTimeOption = data;
          this.form.joinTableTime = data;
          let date = this.setFliterOptionValue(type, this.staticPcFormList[7],data);
          this.staticPcFormList[7]['filterRules']['date1'] = date['date1'];
          this.staticPcFormList[7]['filterRules']['date2'] = date['date2'];
        }
      },
      handleSelectTime(data){
        this.form.fliterOption = data;
        if (this.settingType == 'card'){
          if (this.settingColValue == 1){
            this.form.cardFliterOption1 = data;
            this.staticPcFormList[1]['filterRules'] = {};
            this.staticPcFormList[1]['filterRules'] = this.setFliterOptionValue(this.form.cardFliter1, this.staticPcFormList[1],data);
          }else if (this.settingColValue == 2){
            this.form.cardFliterOption2 = data;
            this.staticPcFormList[2]['filterRules'] = {};
            this.staticPcFormList[2]['filterRules'] = this.setFliterOptionValue(this.form.cardFliter2, this.staticPcFormList[2],data);
          }else if (this.settingColValue == 3){
            this.form.cardFliterOption3 = data;
            this.staticPcFormList[3]['filterRules'] = {};
            this.staticPcFormList[3]['filterRules'] = this.setFliterOptionValue(this.form.cardFliter3, this.staticPcFormList[3],data);
          }else if (this.settingColValue == 4){
            this.form.cardFliterOption4 = data;
            this.staticPcFormList[4]['filterRules'] = {};
            this.staticPcFormList[4]['filterRules'] = this.setFliterOptionValue(this.form.cardFliter4, this.staticPcFormList[4],data);
          }
        }else if (this.settingType == 'circle'){
          this.form.circleFliterOption = data;
          this.staticPcFormList[6]['filterRules'] = {};
          this.staticPcFormList[6]['filterRules'] = this.setFliterOptionValue(this.form.circleFliter, this.staticPcFormList[6],data);
        }else if (this.settingType == 'bar'){
          this.form.chartFliterOption = data;
          this.staticPcFormList[5]['filterRules'] = {};
          this.staticPcFormList[5]['filterRules'] = this.setFliterOptionValue(this.form.chartFliter, this.staticPcFormList[5],data);
        }else if (this.settingType == 'table'){
          this.form.tableFliterOption = data;
          this.staticPcFormList[7]['filterRules'] = {};
          this.staticPcFormList[7]['filterRules'] = this.setFliterOptionValue(this.form.tableFliter, this.staticPcFormList[7],data);
        }
      },
      closeYdata(event, index){
        this.form.chartYdataArray.splice(index, 1);
        this.setBarChartData();
      },
      addYdata(){
        let obj = {
          d: '',
          n: '',
          f: '',
          g: '5'
        };
        this.form.chartYdataArray.splice(this.form.chartYdataArray.length, 0, obj);
        this.setBarChartData();
      },
      closeDialog(){
        this.h5Dialog = false;
      },
      closePcDialog(){
        this.settingColValue = '';
        this.settingType = '';
        this.searchSetStaticForm = "";
        this.percentage = 0;
        this.percentageText = '内容';
        this.percentageValue = '表单字段';
        this.barDataLegned = ['类型1','类型2','类型3'], this.barDataKey = ['字段1','字段2','字段3'];
        this.tableTitleColData = [
          {
            title: '',
            label: '',
            value: '',
            param: '',
            valueText: "",
            fixed: '',
            point: '',
            format: '',
            obj: {
              d:'',
              f:'',
              n:'',
              g:'-1',
              zwf: false,
              hz:'',
              jd:'0'
            }
          }
        ];

        this.barData = [
          {
            name: '类型1',
            type: 'bar',
            barWidth:15,
            data:[10,10,10]
          },
          {
            name: '类型2',
            type: 'bar',
            barWidth:15,
            data:[10,10,10]
          },
          {
            name: '类型3',
            type: 'bar',
            barWidth:15,
            data:[10,10,10]
          }
        ];
        this.staticPcFormList = [
          {
            filterType: '',
            unitName: '',
            statId: '',
            unitType: '4'
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            filterRules2: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            relaFormId: '',
            relaFromField1: {
              d: true,
              f: "",
              g: 0,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            },
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            filterRules2: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            relaFormId: '',
            relaFromField1: {
              d: true,
              f: "",
              g: 0,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            },
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            filterRules2: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            relaFormId: '',
            relaFromField1: {
              d: true,
              f: "",
              g: 0,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            },
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            filterRules2: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            relaFormId: '',
            relaFromField1: {
              d: true,
              f: "",
              g: 0,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            },
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            filterRules2: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            relaFormId: '',
            relaFromField1: {
              d: true,
              f: "",
              g: 0,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            },
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            filterRules2: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            relaFormId: '',
            relaFromField1: {
              d: true,
              f: "",
              g: 0,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            },
            groupRule: '-1',
            unitType: '0',
            statId: ''
          },
          {
            filterType: '',
            unitName: '',
            filterRules: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            filterRules2: {
              applyStatus: "",
              collegeId: "",
              date1: "",
              date2: "",
              deptId: "",
            },
            relaFormId: '',
            relaFromField1: {
              d: true,
              f: "",
              g: 0,
              n: "",
              hz: "",
              jd: 0,
              zwf: false,
            },
            groupRule: '-1',
            unitType: '0',
            statId: ''
          }
        ];
        this.form = {
          searchStaticTitle: '筛选条件',
          cardParam1: '字段名称',
          cardParam2: '字段名称',
          cardParam3: '字段名称',
          cardParam4: '字段名称',
          cardValue1: '',
          cardValue1Text: '',
          cardValue2: '',
          cardValue2Text: '',
          cardValue3: '',
          cardValue3Text: '',
          cardValue4: '',
          cardValue4Text: '',
          cardForm1: '',
          cardForm2: '',
          cardForm3: '',
          cardForm4: '',
          cardJoin1: '0',
          cardJoinFixed1: '',
          cardJoinPoint1: '0',
          cardJoinFormat1: false,
          cardJoin2: '0',
          cardJoinFixed2: '',
          cardJoinPoint: '0',
          cardJoinFormat2: false,
          cardJoin3: '0',
          cardJoinFixed3: '',
          cardJoinPoint3: '0',
          cardJoinFormat3: false,
          cardJoin4: '0',
          cardJoinFixed4: '',
          cardJoinPoint4: '0',
          cardJoinFormat4: false,
          cardFliter1: '',
          cardFliter2: '',
          cardFliter3: '',
          cardFliter4: '',
          cardFliterOption1: '',
          cardFliterCollegeOption1: '',
          cardFliterDeptOption1: '',
          cardFliterStatusOption1: '',
          cardFliterTimeOption1: '',
          cardFliterOption2: '',
          cardFliterCollegeOption2: '',
          cardFliterDeptOption2: '',
          cardFliterStatusOption2: '',
          cardFliterTimeOption2: '',
          cardFliterOption3: '',
          cardFliterCollegeOption3: '',
          cardFliterDeptOption3: '',
          cardFliterStatusOption3: '',
          cardFliterTimeOption3: '',
          cardFliterOption4: '',
          cardFliterCollegeOption4: '',
          cardFliterDeptOption4: '',
          cardFliterStatusOption4: '',
          cardFliterTimeOption4: '',
          cardFliterStartTime1: '',
          cardFliterEndTime1: '',
          cardFliterStartTime2: '',
          cardFliterEndTime2: '',
          cardFliterStartTime3: '',
          cardFliterEndTime3: '',
          cardFliterStartTime4: '',
          cardFliterEndTime4: '',
          chartParam: '字段名称',
          chartValue: '',
          chartValueText: '',
          chartJoin: '',
          chartForm: '',
          chartFliter: '',
          chartFliterOption: '',
          chartXdata: '',
          chartXdataObj: '',
          chartXFliterCollege: [],
          chartXFliterDept: [],
          chartXFliterStatus: [],
          chartXFliterTime: [],
          chartYdata: '',
          chartYdataObj: '',
          chartYdataArray: [],
          cardTitle: '',
          cardValue: '',
          circleParams: '字段名称',
          circleValue: 0,
          circleValueText: '',
          circleMoleculeValue: '',
          circleMoleculeValueText: '',
          circleDenominatorValue: '',
          circleDenominatorValueText: '',
          circleForm: '',
          circleFliter: '',
          circleFliterOption: '',
          circleFliterMoleculeCollegeOption: [],
          circleFliterMoleculeDeptOption: [],
          circleFliterMoleculeStatusOption: [],
          circleFliterMoleculeTimeOption: [],
          circleFliterMoleculeStartTime: '',
          circleFliterMoleculeEndTime: '',
          circleFliterDenominatorCollegeOption: [],
          circleFliterDenominatorDeptOption: [],
          circleFliterDenominatorStatusOption: [],
          circleFliterDenominatorTimeOption: [],
          circleFliterDenominatorStartTime: '',
          circleFliterDenominatorEndTime: '',
          circleFliterStartTime: '',
          circleFliterEndTime: '',
          circleJoin: '-1',
          circleRealName: '',
          circleMoleculeJoin: '5',
          circleDenominatorJoin: '5',
          circleDenominatorJoinOption: '5',
          circleMoleculeJoinOption: '5',
          tableForm: '',
          tableValue: '',
          tableValueText: '',
          tableFliter: '',
          tableFliterOption: '',
          tableFliterStartTime: '',
          tableFliterEndTime: '',
          tableJoin: '',
          joinFormValue: '',
          joinFormParamsValue: '',
          joinFormParamsValueObj: {},
          joinFormFliterValue: '',
          joinFormJoinValue: '',
          joinFormJoinFixed: '',
          joinFormJoinPoint: '0',
          joinFormJoinFormat: '0',
          joinFormXValue: '',
          joinFormYValue: [],
          fliterOption: [],
          fliterCollegeOption: [],
          fliterDeptOption: [],
          fliterStatusOption: [],
          fliterTimeOption: [],
          fliterOptionStartTime: '',
          fliterOptionEndTime: '',
          joinTableJoinValue: [],
          joinTableCollege: [],
          joinTableDept: [],
          joinTableStatus: [],
          joinTableTime: [],
          joinFormMoleculeParamsValue: '',
          joinFormMoleculeParamsValueObj: {},
          joinFormDenominatorParamsValue: '',
          joinFormDenominatorParamsValueObj: {},
          fliterMoleculeCollegeOption: [],
          fliterMoleculeDeptOption: [],
          fliterMoleculeStatusOption: [],
          fliterMoleculeTimeOption: [],
          fliterDenominatorCollegeOption: [],
          fliterDenominatorDeptOption: [],
          fliterDenominatorStatusOption: [],
          fliterDenominatorTimeOption: [],
          fliterChartCollegeOption: [],
          fliterChartDeptOption: [],
          fliterChartStatusOption: [],
          fliterChartTimeOption: [],
          fliterTableCollegeOption: [],
          fliterTableDeptOption: [],
          fliterTableStatusOption: [],
          fliterTableTimeOption: [],
        }
      }
    }
  }
</script>

<style scoped>
.form-set-main{
  box-shadow: 0px 0px 4px #DCDFE6;
  border-right: 1px solid #DCDFE6;
}
.form-set-left{
  background: #f8f8f8;
  height: 100%;
  margin-right: 330px;
  box-shadow: 0px 0px 4px #DCDFE6;
}
.form-set-right{
  width: 300px;
  background: #f8f8f8;
  height: 100%;
  box-shadow: 0px 0px 4px #DCDFE6;
}
.form-card-content {
  position:relative;
  margin-top: 15%;
}
.sel-card-active{
  box-shadow: 0px 0px 4px #909399;
}
</style>
