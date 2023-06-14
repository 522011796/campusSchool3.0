<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">附件管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="24" class="text-right">
            <my-date-picker size="small" :clearable="true" type="daterange" :sel-value="searchTime" @change="handleChangeTime($event,1)"></my-date-picker>
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
            :label="$t('上传时间')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{$moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm")}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{$moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm")}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('附件名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.fileDataList.name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.fileDataList.name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('大小')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.fileDataList.size}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.fileDataList.size}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('所属人')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.realName}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.realName}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('所属部门')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.departmentName ? scope.row.departmentName : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.departmentName ? scope.row.departmentName : '--'}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('来源服务')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.fileDataList.source}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.fileDataList.source}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('关联单据号')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.formApplyNo}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <a href="javascript:;" class="color-grand" @click="detailOrderInfo(scope.row)">{{scope.row.formApplyNo}}</a>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('关联费用')">
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
            width="140">
            <template slot-scope="scope">
              <a href="javascript:;" class="color-success" @click="downInfo(scope.row, false)">{{$t("下载")}}</a>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal top="10vh" :visible="dialogType" :title="$t('类别设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('类别名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
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

    <drawer-layout-right tabindex="0" @close="closeDrawerDialog" :visible="dialogVisible" size="600px" :title="$t('详细查看')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <div class="text-left">
          <el-button-group>
            <el-button size="small" :type="detailType == 1 ? 'primary' : 'default'" @click="changeDetailType($event ,1)">{{ $t("单据信息") }}</el-button>
            <el-button size="small" :type="detailType == 2 ? 'primary' : 'default'" @click="changeDetailType($event ,2)">{{ $t("审批详情") }}</el-button>
            <el-button v-if="dataMainDetailObj.formCode != 'TYHT'" size="small" :type="detailType == 3 ? 'primary' : 'default'" @click="changeDetailType($event ,3)">{{ $t("预算信息") }}</el-button>
          </el-button-group>
        </div>

        <div class="margin-top-20">
          <template v-if="detailType == 1">
            <div class="detail-block" :style="{height: drawHeight8.height}">
              <div class="margin-top-10">
                <div class="font-bold">{{$t("当前审批环节")}}:</div>
                <div class="margin-top-10" style="padding-left:30px">
                  <span class="color-warning">{{dataMainDetailObj['handleList'] ? dataMainDetailObj.handleList[dataMainDetailObj.orderIndex-1].nodeName : ''}}</span>
                  <span>{{ auditStatusTextInfo(dataMainDetailObj.status) }}</span>
                </div>
              </div>
              <div class="margin-top-20">
                <div class="font-bold">{{$t("基础信息")}}:</div>
                <template>
                  <div class="margin-top-5">
                    <template v-if="dataMainDetailObj.formCode == 'TYHT' || dataMainDetailObj.formCode == 'XSHT' || dataMainDetailObj.formCode == 'CGHT'">
                      <el-row>
                        <el-col :span="12">
                          <el-form label-width="100px">
                            <el-form-item :label="$t('合同名称')">
                              <label>{{dataDetailObj['ht_name20230501'] ? dataDetailObj['ht_name20230501']['value'] : '--'}}</label>
                            </el-form-item>
                          </el-form>
                        </el-col>
                        <el-col :span="12">
                          <el-form label-width="100px">
                            <el-form-item :label="$t('合同编号')">
                              <label>{{dataDetailObj['ht_no20230501'] ? dataDetailObj['ht_no20230501']['value'] : '--'}}</label>
                            </el-form-item>
                          </el-form>
                        </el-col>
                      </el-row>
                      <template>
                        <el-row>
                          <el-col :span="12">
                            <el-form label-width="100px">
                              <el-form-item :label="$t('关联单据')">
                                <label>{{dataDetailObj['tag_ids20230501'] ? dataDetailObj['tag_ids20230501']['name'] : '--'}}</label>
                              </el-form-item>
                            </el-form>
                          </el-col>
                          <el-col :span="12">
                            <el-form label-width="100px">
                              <el-form-item :label="$t('合同金额')">
                                <label>{{dataDetailObj['ht_amount20230501'] ? dataDetailObj['ht_amount20230501']['value'] : '--'}}</label>
                              </el-form-item>
                            </el-form>
                          </el-col>
                        </el-row>
                      </template>
                      <template>
                        <el-row>
                          <el-col :span="12">
                            <el-form label-width="100px">
                              <el-form-item :label="$t('关联项目')">
                                <label>{{dataDetailObj['xm_id20230501'] ? (dataDetailObj['xm_id20230501']['name'] ? dataDetailObj['xm_id20230501']['name'] : '--') : '--'}}</label>
                              </el-form-item>
                            </el-form>
                          </el-col>
                          <el-col :span="12">
                            <el-form label-width="100px">
                              <el-form-item :label="$t('责任人')">
                                <label>{{dataDetailObj['ht_duty20230501'] ? (dataDetailObj['ht_duty20230501']['userName'] ? dataDetailObj['ht_duty20230501']['userName'] : '--') : '--'}}</label>
                              </el-form-item>
                            </el-form>
                          </el-col>
                        </el-row>
                      </template>
                      <el-form label-width="100px">
                        <el-form-item :label="$t('附件')">
                          <div v-if="dataDetailObj['ht_files20230501']">
                            <div v-if="dataDetailObj['ht_files20230501']['value'].length > 0" v-for="(item, index) in dataDetailObj['ht_files20230501']['value']" :key="index" class="pull-left" style="position: relative;margin-right:10px;top: 10px">
                              <i v-if="item.indexOf('.pdf') > -1" class="fa fa-file-pdf-o" style="height: 50px;width: 50px;font-size: 50px;position: relative;top: -2px;" @click="readOtherFile(item)"></i>
                              <i v-else-if="item.indexOf('.doc') > -1 || item.indexOf('.docx') > -1" class="fa fa-wordpress" style="height: 50px;width: 50px;font-size: 50px;position: relative;top: -2px;" @click="readOtherFile(item)"></i>
                              <el-image
                                v-else
                                style="width: 50px; height: 50px"
                                :src="item"
                                :preview-src-list="[item]">
                              </el-image>
                            </div>
                            <div v-else>
                              --
                            </div>
                          </div>
                          <div v-else>
                            --
                          </div>
                        </el-form-item>
                      </el-form>
                      <el-form label-width="100px">
                        <el-form-item :label="$t('其他描述')">
                          <div style="word-wrap:break-word;word-break:break-all;overflow: hidden;">{{dataDetailObj['ht_des20230501'] ? (dataDetailObj['ht_des20230501']['value'] ? dataDetailObj['ht_des20230501']['value'] : '--') : '--'}}</div>
                        </el-form-item>
                      </el-form>
                    </template>
                    <template v-if="dataMainDetailObj.formCode == 'XMGL'">
                      <el-row>
                        <el-col :span="12">
                          <el-form label-width="100px">
                            <el-form-item :label="$t('项目名称')">
                              <label>{{dataDetailObj['xm_name20230501'] ? dataDetailObj['xm_name20230501']['value'] : '--'}}</label>
                            </el-form-item>
                          </el-form>
                        </el-col>
                        <el-col :span="12">
                          <el-form label-width="100px">
                            <el-form-item :label="$t('项目编号')">
                              <label>{{dataDetailObj['xm_no20230501'] ? dataDetailObj['xm_no20230501']['value'] : '--'}}</label>
                            </el-form-item>
                          </el-form>
                        </el-col>
                      </el-row>
                      <template>
                        <el-row>
                          <el-col :span="12">
                            <el-form label-width="100px">
                              <el-form-item :label="$t('项目类型')">
                                <label>{{dataDetailObj['xm_type20230501'] ? objectTypeInfo(dataDetailObj['xm_type20230501']['value'], 'set') : '--'}}</label>
                              </el-form-item>
                            </el-form>
                          </el-col>
                          <el-col :span="12">
                            <el-form label-width="100px">
                              <el-form-item :label="$t('项目预算')">
                                <label>--</label>
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
                                <label>{{dataDetailObj['xm_status20230501'] ? (dataDetailObj['xm_status20230501']['value'] ? objectStatusInfo(dataDetailObj['xm_status20230501']['value'], 'set')  : '--') : '--'}}</label>
                              </el-form-item>
                            </el-form>
                          </el-col>
                          <el-col :span="12">
                            <el-form label-width="100px">
                              <el-form-item :label="$t('审批状态')">
                                <label>{{dataMainDetailObj.status || dataMainDetailObj.status === 0   ? auditStatusTextInfo(dataMainDetailObj.status, 'set') : '--'}}</label>
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
                                <label>{{dataDetailObj['xm_beginTime20230501'] ? (dataDetailObj['xm_beginTime20230501']['value'] ? dataDetailObj['xm_beginTime20230501']['value'] : '--') : '--'}}</label>
                              </el-form-item>
                            </el-form>
                          </el-col>
                          <el-col :span="12">
                            <el-form label-width="100px">
                              <el-form-item :label="$t('结束时间')">
                                <label>{{dataDetailObj['xm_endTime20230501'] ? (dataDetailObj['xm_endTime20230501']['value'] ? dataDetailObj['xm_endTime20230501']['value'] : '--') : '--'}}</label>
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
                                <label v-if="dataDetailObj['xm_superId20230501']">
                                  <template v-if="dataDetailObj['xm_superId20230501']['value'] == ''">
                                    {{$t("无")}}
                                  </template>
                                  <template v-else>
                                    {{dataDetailObj['xm_superId20230501'] ? (dataDetailObj['xm_superId20230501']['value'] ? dataDetailObj['xm_superId20230501']['value'] : '--') : '--'}}
                                  </template>
                                </label>
                              </el-form-item>
                            </el-form>
                          </el-col>
                          <el-col :span="12">
                            <el-form label-width="100px">
                              <el-form-item :label="$t('负责人')">
                                <label>{{dataDetailObj['xm_personId20230501'] ? (dataDetailObj['xm_personId20230501']['userName'] ? dataDetailObj['xm_personId20230501']['userName'] : '--') : '--'}}</label>
                              </el-form-item>
                            </el-form>
                          </el-col>
                        </el-row>
                      </template>
                      <el-form label-width="100px">
                        <el-form-item :label="$t('附件')">
                          <div v-if="dataDetailObj['xm_files20230501']">
                            <div v-if="dataDetailObj['xm_files20230501']['value'].length > 0" v-for="(item, index) in dataDetailObj['xm_files20230501']['value']" :key="index" class="pull-left" style="position: relative;margin-right:10px;top: 10px">
                              <i v-if="item.indexOf('.pdf') > -1" class="fa fa-file-pdf-o" style="height: 50px;width: 50px;font-size: 50px;position: relative;top: -2px;" @click="readOtherFile(item)"></i>
                              <i v-else-if="item.indexOf('.doc') > -1 || item.indexOf('.docx') > -1" class="fa fa-wordpress" style="height: 50px;width: 50px;font-size: 50px;position: relative;top: -2px;" @click="readOtherFile(item)"></i>
                              <el-image
                                v-else
                                style="width: 50px; height: 50px"
                                :src="item"
                                :preview-src-list="[item]">
                              </el-image>
                            </div>
                            <div v-else>
                              --
                            </div>
                          </div>
                          <div v-else>

                          </div>
                        </el-form-item>
                      </el-form>
                      <el-form label-width="100px">
                        <el-form-item :label="$t('其他描述')">
                          <label>{{dataDetailObj['xm_des20230501'] ? dataDetailObj['xm_des20230501']['value'] : '--'}}</label>
                        </el-form-item>
                      </el-form>
                    </template>

                    <template v-if="dataMainDetailObj == 'XSGL' || dataMainDetailObj == 'CGGL' || dataMainDetailObj == 'TYGL'">
                    </template>
                  </div>
                </template>
              </div>
            </div>
          </template>

          <template v-if="detailType == 2">
            <div class="detail-top-block" style="overflow-x: auto;padding: 20px 0px;white-space:nowrap;">
              <div :style="{width: (detailApplyAuditList.length+2) * (600/4)+'px'}">
                <div class="pull-left text-center" :style="{width: 600/4+'px'}">
                  <div class="text-center margin-bottom-5">
                    <span class="font-size-12"> &nbsp; </span>
                  </div>
                  <div class="detail-top-item-green-block">
                    <span class="font-size-12 color-white">{{$t("开始")}}</span>
                  </div>
                  <div class="text-center margin-top-5">
                    <span class="font-size-12">{{$t("提交")}}</span>
                  </div>
                </div>

                <div :style="{width: 600/4+'px'}" class="pull-left text-center" v-for="(item, index) in detailApplyAuditList" :key="index">
                  <template>
                    <div class="text-center margin-bottom-5">
                      <span class="font-size-12">
                        <label>{{ auditStatusTextInfo(item.status) }}</label>
                      </span>
                    </div>
                    <div class="detail-top-item-warning-block" :class="auditColorInfo(item.status)">
                      <el-popover
                        placement="left"
                        width="150"
                        trigger="hover">
                        <div style="max-height: 100px;overflow-y: auto">
                          <div v-for="(itemUser, indexUser) in item.handleUserNameList" :key="indexUser">
                            <div class="font-size-12 padding-tb-5 text-center">
                              <el-tag type="success" size="mini">{{itemUser}}</el-tag>
                            </div>
                          </div>
                        </div>
                        <div slot="reference" class="font-size-12 color-white moon-content-text-ellipsis-class text-center">
                          {{ item.handleUserNameList.join() }}
                        </div>
                      </el-popover>
                    </div>
                    <div class="text-center margin-top-5">
                      <span class="font-size-12">{{ item.nodeName }}</span>
                    </div>
                  </template>
                </div>

                <div class="pull-left text-center" :style="{width: 600/4+'px'}">
                  <div class="text-center margin-bottom-5">
                    <span class="font-size-12"> &nbsp; </span>
                  </div>
                  <div class="detail-top-item-default-block">
                    <span class="font-size-12 color-white">{{$t("结束")}}</span>
                  </div>
                  <div class="text-center margin-top-5">
                    <span class="font-size-12">{{$t("完成")}}</span>
                  </div>
                </div>

                <div class="moon-clearfix"></div>
              </div>
            </div>

            <div class="detail-block margin-top-20">
              <el-steps direction="vertical" space="60px">
                <el-step v-for="(item, index) in detailApplyAuditList" :key="index">
                  <div slot="icon">
                    <i v-if="item.handleLevel == 1" class="fa fa-flag" :class="auditTextColorInfo(item.status)" style="font-size: 12px"></i>
                    <i v-if="item.handleLevel == 2" class="fa fa-bullseye" style="font-size: 12px"></i>
                  </div>
                  <div slot="title" class="font-size-12">
                    <span v-if="item.nodeType == 'handle'" class="color-success">
                      {{item.nodeName}}{{ $t("审批") }}
                      <label v-if="item.andor == 'and'" class="color-warning"> ({{ $t("与签") }}) </label>
                      <label v-if="item.andor == 'or'" class="color-warning"> ({{ $t("或签") }}) </label>
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
                          <label v-if="itemUser.status === 3" class="color-success">
                            {{$t("已通过")}}
                            <el-tooltip v-if="itemUser.des" class="item" effect="dark" :content="itemUser.des" placement="top">
                              <i class="fa fa-warning color-warning"></i>
                            </el-tooltip>
                            <span v-if="itemUser.url && itemUser.url.length > 0">
                              <el-image v-for="(itemImg, indexImg) in itemUser.url" :key="indexImg" :src="itemImg" style="width: 20px; height: 20px;position: relative; top: 5px;margin-left: 5px"
                                        :preview-src-list="[itemImg]">
                              </el-image>
                            </span>
                          </label>
                          <label v-if="itemUser.status === 4" class="color-danger">{{$t("未通过")}}</label>
                          <label v-if="itemUser.status === 1" class="color-success">
                            {{$t("已通过")}}
                            <el-tooltip v-if="itemUser.des" class="item" effect="dark" :content="itemUser.des" placement="top">
                              <i class="fa fa-warning color-warning"></i>
                            </el-tooltip>
                            <span v-if="itemUser.url && itemUser.url.length > 0">
                              <el-image v-for="(itemImg, indexImg) in itemUser.url" :key="indexImg" :src="itemImg" style="width: 20px; height: 20px;position: relative; top: 5px;margin-left: 5px"
                                        :preview-src-list="[itemImg]">
                              </el-image>
                            </span>
                          </label>
                          <label v-if="itemUser.status === 2" class="color-warning">
                            {{$t("已驳回")}}
                            <el-tooltip v-if="itemUser.des" class="item" effect="dark" :content="itemUser.des" placement="top">
                              <i class="fa fa-warning color-warning"></i>
                            </el-tooltip>
                            <span v-if="itemUser.url && itemUser.url.length > 0">
                              <el-image v-for="(itemImg, indexImg) in itemUser.url" :key="indexImg" :src="itemImg" style="width: 20px; height: 20px;position: relative; top: 5px;margin-left: 5px"
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
          </template>

          <template v-if="detailType == 3">
            <div class="detail-block">
              <template v-if="dataMainDetailObj.formCode == 'XMGL'">
                <div class="margin-top-10">
                  <el-table
                    :data="tableOrderDetailData"
                    header-cell-class-name="custom-table-cell-bg"
                    size="small"
                    row-key="id"
                    border
                    :max-height="drawHeight8.height"
                    style="width: 100%">
                    <el-table-column
                      align="center"
                      :label="$t('类型')">
                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center"><span>{{formXmTextInfo(scope.row.formCode, 'set')}}</span></div>
                          <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                            <span>{{formXmTextInfo(scope.row.formCode, 'set')}}</span>
                          </div>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column
                      align="center"
                      :label="$t('名称')">
                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center"><span>{{scope.row.applyData['ht_name20230501'] ? scope.row.applyData['ht_name20230501'].value : '--'}}</span></div>
                          <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                            <span>{{scope.row.applyData['ht_name20230501'] ? scope.row.applyData['ht_name20230501'].value : '--'}}</span>
                          </div>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column
                      align="center"
                      :label="$t('编号')">
                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center">
                            <span>{{scope.row.formApplyNo}}</span>
                          </div>
                          <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                            <span>{{scope.row.formApplyNo}}</span>
                          </div>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column
                      align="center"
                      :label="$t('金额')">
                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center"><span>{{scope.row.applyData['ht_amount20230501'] ? scope.row.applyData['ht_amount20230501'].value: '--'}}</span></div>
                          <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                            <span>{{scope.row.applyData['ht_amount20230501'] ? scope.row.applyData['ht_amount20230501'].value: '--'}}</span>
                          </div>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column
                      align="center"
                      :label="$t('状态')">
                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center">
                            <span>{{auditStatusTextInfo(scope.row.status)}}</span>
                          </div>
                          <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                            <span>{{auditStatusTextInfo(scope.row.status)}}</span>
                          </div>
                        </el-popover>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </template>
              <template v-if="dataMainDetailObj.formCode == 'XSHT' || dataMainDetailObj.formCode == 'CGHT'">
                <div class="margin-top-10">
                  <el-table
                    :data="tableOrderDetailData"
                    header-cell-class-name="custom-table-cell-bg"
                    size="small"
                    row-key="id"
                    border
                    :max-height="drawHeight8.height"
                    style="width: 100%">
                    <el-table-column
                      align="center"
                      :label="$t('期数')">
                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center">{{scope.row.stage}}</div>
                          <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                            <span>{{scope.row.stage}}</span>
                          </div>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column
                      align="center"
                      :label="$t('比例')">
                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center">{{scope.row.rate}}%</div>
                          <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                            <span>{{scope.row.rate}}%</span>
                          </div>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column
                      align="center"
                      :label="$t('金额')">
                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center">{{scope.row.amount}}</div>
                          <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                            <span>{{scope.row.amount}}</span>
                          </div>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column
                      align="center"
                      :label="$t('日期')">
                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center">{{scope.row.time}}</div>
                          <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                            <span>{{scope.row.time}}</span>
                          </div>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column
                      align="center"
                      :label="$t('备注')">
                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                          <div class="text-center">
                            <div>{{scope.row.des ? scope.row.des : '--'}}</div>
                          </div>
                          <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                            <div class="moon-content-text-ellipsis-class" style="max-width: 200px">{{scope.row.des ? scope.row.des : '--'}}</div>
                          </div>
                        </el-popover>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </template>
            </div>
          </template>
        </div>
      </div>
      <div slot="footer" class="padding-lr-10">
<!--        <audit-button v-if="detailType == 2" :sel-value="dataMainDetailObj" @ok="handleOk" @no="handleNo" @cancel="handleCancel"></audit-button>-->
        <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
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
  import {
    auditStatusBgColor, auditStatusColor,
    auditStatusText, formXmText,
    MessageError,
    MessageSuccess,
    MessageWarning,
    objectStatus,
    objectType
  } from "~/utils/utils";
  import appTypeValidater from "~/utils/validater/appTypeValidater";
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight.vue";

  export default {
    components: {DrawerLayoutRight},
    mixins: [mixins, appTypeValidater],
    data(){
      return {
        subTitle: '',
        tableData: [],
        detailType: 1,
        dataDetailObj: {},
        dataMainDetailObj: {},
        detailApplyAuditList: [],
        tableOrderDetailData: [],
        dialogType: false,
        visibleConfim: false,
        dialogLoading: false,
        dialogVisible: false,
        dialogOrderDetailVisible: false,
        searchKey: '',
        searchTime: [],
        form: {
          id: '',
          name: '',
          enable: true
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
          searchKey: this.searchKey,
          beginTime: this.searchTime && this.searchTime.length > 0 ? this.searchTime[0] : '',
          endTime: this.searchTime && this.searchTime.length > 0 ? this.searchTime[1] : ''
        };
        this.$axios.get(common.file_manage_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.total;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
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
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      addInfo(){
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
      formXmTextInfo(value){
        return formXmText(value);
      },
      editInfo(item){
        this.form = {
          id: item.id,
          name: item.category_name,
          enable: item.enable
        };
        this.dialogType = true;
      },
      downInfo(){

      },
      detailOrderListInfo(){
        this.dialogOrderDetailVisible = true;
      },
      changeDetailType(event, type){
        this.detailType = type;
      },
      closeDialog(event){
        this.form = {
          id: '',
          name: '',
          enable: true
        };
        this.subTitle = "";
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      closeDrawerDialog(event){
        this.dataDetailObj = {};
        this.dataMainDetailObj = {};
        this.detailApplyAuditList = [];
        this.detailType = 1;
        this.dialogVisible = false;
      },
      closeDrawerDetailDialog(){
        this.dialogOrderDetailVisible = false;
      },
      cancelDrawDetailDialog(){
        this.dialogOrderDetailVisible = false;
      },
      cancelDialog(){
        this.dialogType = false;
      },
      cancelDrawDialog(){
        this.dataDetailObj = {};
        this.dialogVisible = false;
      },
      okDialog(){
        let url = '';
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              categoryName: this.form.name,
            };
            if (this.form.id != ''){
              params['id'] = this.form.id;
            }
            url = common.server_type_save;
            params = this.$qs.stringify(params);
            this.$axios.post(url, params).then(res => {
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
      handleChangeTime(data){
        this.searchTime = data;
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
        url = common.server_type_delete;
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
      detailOrderInfo(item){
        let params = {
          id: item.formApplyNo
        };
        this.$axios.get(common.server_form_audit_query, {params: params}).then(res=>{
          if (res.data.data){
            this.dataDetailObj = res.data.data['applyData'] ? res.data.data['applyData'] : {};
            this.dataMainDetailObj = res.data.data;
            this.detailApplyAuditList = res.data.data.handleList;
            if (res.data.data.formCode == 'XMGL'){
              console.log(1111);
              this.initReal(item._id);
            }else if (res.data.data.formCode == 'XSHT' || res.data.data.formCode == 'CGHT' || res.data.data.formCode == 'TYHT'){
              let ruleList = [];
              //let count = res.data.data.applyData['ht_stage20230501'] ? res.data.data.applyData['ht_stage20230501'].value : 0;
              for (let i = 0; i < res.data.data.payableDataList.length; i++){
                ruleList.push({
                  stage: res.data.data.payableDataList[i].stage,
                  rate: res.data.data.payableDataList[i].rate,
                  amount: res.data.data.payableDataList[i].shouldAmount,
                  time: res.data.data.payableDataList[i].time,
                  des: res.data.data.payableDataList[i].des,
                });
              }
              this.tableOrderDetailData = ruleList;
            }
          }
        });

        this.dialogVisible = true;
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
            this.detailOrderInfo(this.dataMainDetailObj, this.detailInfoType);
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
            this.detailOrderInfo(this.dataMainDetailObj, this.detailInfoType);
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
            this.detailOrderInfo(this.dataMainDetailObj, this.detailInfoType);
            this.init();
            MessageSuccess(res.data.desc);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      }
    }
  }
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
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
