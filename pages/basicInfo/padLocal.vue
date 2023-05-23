<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">请假审批</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加设备")}}</el-button>
            <el-button size="small" type="default" :disabled="deviceList.length <= 0" :loading="mutiDeleteLoading"  icon="el-icon-delete" @click="deleteMutiInfo($event)">{{$t("批量删除")}}</el-button>
            <el-button size="small" type="default" :disabled="deviceList.length <= 0" :loading="mutiResetLoading"  icon="el-icon-refresh" @click="resetMutiInfo($event)">{{$t("批量重启")}}</el-button>
            <el-button size="small" type="default" :disabled="deviceList.length <= 0" :loading="mutiUnbindLoading"  icon="el-icon-circle-close" @click="unbindMutiInfo($event)">{{$t("批量解绑")}}</el-button>
            <el-button size="small" type="warning"  icon="el-icon-setting" @click="confInfo($event)">{{$t("设备配置")}}</el-button>
          </el-col>
          <el-col :span="12" class="text-right">
            <my-input-button size="small" :clearable="true" type="success" plain @click="search"></my-input-button>
          </el-col>
        </el-row>
      </div>

      <div slot="content">
        <el-table
          ref="refTable"
          :data="tableData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          :row-key="getRowKeys"
          :max-height="tableHeight.height"
          @selection-change="handleSelectionChange"
          style="width: 100%"
          @filter-change="fliterTable">
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
                <div class="text-center">{{scope.row.name ? scope.row.name : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.name ? scope.row.name : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('SN')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.sn}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.sn}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('IP')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.ip}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.ip}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('人数')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.person_count}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.person_count}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('照片')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.face_count}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.face_count}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('软件版本')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.version}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.version}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('用途')">
            <template slot-scope="scope">
<!--              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">-->
<!--                <div class="text-center">-->
<!--                  <my-device-use-type-array :type="scope.row.scene_type"></my-device-use-type-array>-->
<!--                </div>-->
<!--                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class color-warning">-->
<!--                  -->
<!--                </div>-->
<!--              </el-popover>-->
              <my-device-use-type-array :type="scope.row.scene_type"></my-device-use-type-array>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('设备位置')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" width="400" popper-class="custom-table-popover">
                <div class="text-center">
                  <!--<el-tag class="" v-if="scope.row.location_name" size="mini" type="success" v-for="(item, index) in scope.row.location_name.split(',')" :key="index">
                    {{item}}
                  </el-tag>
                  <span v-else>&#45;&#45;</span>-->
                  {{scope.row.location_name ? scope.row.location_name : '--'}}
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.location_name ? scope.row.location_name : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('备注')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.comment ? scope.row.comment : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  {{scope.row.comment ? scope.row.comment : '--'}}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :filter-multiple="false"
            column-key="status"
            :filters="filterOnlineStatus">
            <template slot="header">
              <span>{{$t('状态')}}</span>
              <span v-if="filterOnlineStatusText != ''" class="font-size-12 color-disabeld">{{filterOnlineStatusText}}</span>
            </template>
            <template slot-scope="scope">
              <div v-if="scope.row.online == false" class="color-warning">{{$t("离线")}}</div>
              <div v-if="scope.row.online == true" class="color-success">
                <span v-if="scope.row.user_sync_count > 0" style="position: relative; top:-8px;">{{$t("在线")}}</span>
                <span v-else>{{$t("在线")}}</span>
                <span v-if="scope.row.user_sync_count > 0">
                  <el-tooltip class="item" effect="dark" :content="$t('同步剩余') + ':' + scope.row.user_sync_count" placement="right">
                    <!--<i class="fa fa-recycle"></i>-->
                    <img src="~static/img/cloud-loading.gif" style="height: 30px;width: 30px;">
                  </el-tooltip>
                </span>
                <span v-if="scope.row.user_sync_count < 0">
                  <el-tooltip class="item" effect="dark" :content="$t('同步完成')" placement="right">
                    <i class="el-icon-warning"></i>
                  </el-tooltip>
                </span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-cog margin-right-5 color-success" @click="setInfo(scope.row)"></i>
              <i class="fa fa-trash margin-right-5 color-danger" @click="deleteInfo(scope.row)"></i>
              <i class="fa fa-close margin-right-5 color-grand" @click="unbindInfo(scope.row)"></i>
              <el-popover
                placement="right"
                width="400"
                trigger="click">
                <div>
                  <div>
                    <span>
                      <el-button size="small" type="success" plain :loading="perLoading" @click="syncInfo(scope.row, 1)">
                        {{$t("人员校验")}}
                      </el-button>
                      <label class="color-warning font-size-12">{{$t("校验设备中的人员信息是否正确")}}</label>
                    </span>
                  </div>
                  <div class="margin-top-10">
                    <span>
                      <el-button size="small" type="success" plain :loading="picLoading" @click="syncInfo(scope.row, 2)">{{$t("同步照片")}}</el-button>
                      <label class="color-warning font-size-12">{{$t("重新向该设备同步失败的照片信息")}}</label>
                    </span>
                  </div>
                </div>
                <i slot="reference" class="fa fa-ellipsis-h color-warning"></i>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal top="10vh" :visible="modalVisible" :title="$t('添加设备')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('IP地址')" prop="ip">
            <el-input v-model="form.ip" class="width-260">
              <label slot="append" type="success" plain size="mini" @click="getSn">
                <i class="el-icon-loading" v-if="loading"></i>
                {{$t("获取序列号")}}
              </label>
            </el-input>
          </el-form-item>
          <el-form-item :label="$t('序列号')" prop="sn">
            <el-input :disabled="true" v-model="form.sn" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('备注')" prop="comment">
            <el-input v-model="form.comment" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('通讯密码')" prop="pwd">
            <el-input v-model="form.pwd" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('设备用途')" prop="uses">
            <my-select :sel-value="form.use" :multiple="true" :options="filterDeviceUseOnlyType" width-style="260" @change="handleSelect($event,3)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('设备方向')" prop="uses" v-if="form.use.join().indexOf('3') > -1 || form.use.join().indexOf('4') > -1">
            <el-radio-group size="small" v-model="form.sceneConnectType">
              <el-radio-button label="1">{{$t('进入')}}</el-radio-button>
              <el-radio-button label="2">{{$t('外出')}}</el-radio-button>
            </el-radio-group>
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

    <dialog-normal top="10vh" :visible="modalConfVisible" :title="$t('设备配置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="formConf" :rules="rulesConf" ref="formConf" label-width="140px">
          <el-form-item :label="$t('设备密码')" prop="pwd">
            <el-input v-model="formConf.pwd" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('识别回调地址')" prop="faceCallBack">
            <el-input v-model="formConf.faceCallBack" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('心跳地址')" prop="hurtCallBack">
            <el-input v-model="formConf.hurtCallBack" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('照片注册地址')">
            <el-input v-model="formConf.padPhotoRegisterCallbackUrl" class="width-260"></el-input>
          </el-form-item>
          <!--<el-form-item :label="$t('NTP服务地址')">
            <el-input v-model="formConf.ntpAddr" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('NTP服务端口')">
            <el-input v-model="formConf.ntpPort" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('NTP更新周期')">
            <el-input v-model="formConf.ntpTime" class="width-260"></el-input>
          </el-form-item>-->
        </el-form>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okConfDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <!--设置平板-->
    <drawer-layout-right @changeDrawer="closeDrawerDialog" :hide-footer="false" :visible="drawerVisible" size="550px" :title="$t('设备设置')" @right-close="cancelDrawDialog">
      <div slot="content">
        <div>
          <el-form :model="form" :rules="rules" ref="form" label-width="110px">
            <template>
              <el-form-item :label="$t('名称')" prop="classNo">
                <el-input v-model="formSet.name" class="width-300"></el-input>
              </el-form-item>
              <el-form-item :label="$t('IP')" prop="ip">
                <el-input v-model="formSet.ip" class="width-300"></el-input>
              </el-form-item>
              <el-form-item :label="$t('备注')" prop="comment">
                <el-input v-model="formSet.comment" class="width-300"></el-input>
              </el-form-item>
              <el-form-item :label="$t('通途')" prop="uses">
                <my-select :sel-value="formSet.use" :multiple="true" :options="filterDeviceUseOnlyType" width-style="300" @change="handleSelect($event,4)"></my-select>
              </el-form-item>
              <el-form-item :label="$t('方向')" v-if="formSet.use.join().indexOf('3') > -1 || formSet.use.join().indexOf('4') > -1">
                <el-radio-group size="small" v-model="formSet.sceneSubType">
                  <el-radio-button label="1">{{$t('进入')}}</el-radio-button>
                  <el-radio-button label="2">{{$t('外出')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </template>

            <template>
              <div class="margin-bottom-10">
                <span class="color-warning">{{$t("输出设置")}}</span>
              </div>
              <el-form-item :label="$t('语音播报模式')">
                <el-radio-group size="small" v-model="formSet.ttsModType">
                  <el-radio-button label="1">{{$t('不需要语音播报')}}</el-radio-button>
                  <el-radio-button label="2">{{$t('播报名字')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item :label="$t('屏幕显示模式')">
                <el-radio-group size="small" v-model="formSet.displayModType">
                  <el-radio-button label="1">{{$t('显示名字')}}</el-radio-button>
                  <el-radio-button label="2">{{$t('不显示')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item :label="$t('串口输出模式')">
                <el-radio-group size="small" v-model="formSet.comModType">
                  <el-radio-button label="1">{{$t('开门')}}</el-radio-button>
                  <el-radio-button label="2">{{$t('不输出')}}</el-radio-button>
                  <el-radio-button label="3">{{$t('输出phone')}}</el-radio-button>
                  <el-radio-button label="4">{{$t('输出IDNO')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item :label="$t('韦根类型')">
                <el-radio-group size="small" v-model="formSet.wg">
                  <el-radio-button label="">{{$t('不需要韦根')}}</el-radio-button>
                  <el-radio-button label="#WG{id}#">{{$t('韦根26')}}</el-radio-button>
                  <el-radio-button label="#34WG{id}#">{{$t('韦根34')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item :label="$t('继电器开关')">
                <el-radio-group size="small" v-model="formSet.isOpenRelay">
                  <el-radio-button label="1">{{$t('输出')}}</el-radio-button>
                  <el-radio-button label="2">{{$t('不输出')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </template>

            <template>
              <div class="margin-bottom-10">
                <span class="color-warning">{{$t("陌生人参数")}}</span>
              </div>
              <el-form-item :label="$t('陌生人开关')">
                <el-radio-group size="small" v-model="formSet.recStrangerType">
                  <el-radio-button label="1">{{$t('不识别陌生人')}}</el-radio-button>
                  <el-radio-button label="2">{{$t('陌生人开关')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </template>

            <template>
              <div class="margin-bottom-10">
                <span class="color-warning">{{$t("识别参数")}}</span>
              </div>
              <el-form-item :label="$t('识别距离')">
                <el-radio-group size="mini" v-model="formSet.identifyDistance">
                  <el-radio-button label="0">{{$t('无限制')}}</el-radio-button>
                  <el-radio-button label="0.5">0.5{{$t('米内')}}</el-radio-button>
                  <el-radio-button label="1">1{{$t('米内')}}</el-radio-button>
                  <el-radio-button label="1.5">1.5{{$t('米内')}}</el-radio-button>
                  <el-radio-button label="2">2{{$t('米内')}}</el-radio-button>
                </el-radio-group>
                <el-radio-group size="mini" v-model="formSet.identifyDistance">
                  <el-radio-button label="2.5">2.5{{$t('米内')}}</el-radio-button>
                  <el-radio-button label="3">3{{$t('米内')}}</el-radio-button>
                  <el-radio-button label="3.5">3.5{{$t('米内')}}</el-radio-button>
                  <el-radio-button label="4">4{{$t('米内')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item :label="$t('识别等级')">
                <my-select :sel-value="formSet.recRank" :options="levelInfo(null)" @change="handleSelect($event,1)"></my-select>
              </el-form-item>
              <el-form-item :label="$t('时间窗')">
                <el-input size="small" v-model style="width: 80px" v-model="formSet.saveIdentifyTime"></el-input>{{$t('秒')}}
              </el-form-item>
              <el-form-item :label="$t('人脸识别阀值')">
                <el-input size="small" v-model style="width: 80px" v-model="formSet.identifyScores"></el-input>{{$t('刷脸模式')}}
              </el-form-item>
              <el-form-item :label="$t('继电器控制时间')">
                <el-input size="small" v-model style="width: 80px" v-model="formSet.delayTimeForCloseDoor"></el-input>{{$t('毫秒')}}
              </el-form-item>
              <el-form-item :label="$t('多人脸检测')">
                <my-select :sel-value="formSet.multiplayerDetection" :options="levelInfo(3)" @change="handleSelect($event,2)"></my-select>
              </el-form-item>
            </template>

            <template>
              <div class="margin-bottom-10">
                <span class="color-warning">{{$t("识别模式")}}</span>
              </div>
              <el-form-item :label="$t('刷脸识别')">
                <el-radio-group size="small" v-model="formSet.recModeFaceEnable">
                  <el-radio-button label="2">{{$t('打开')}}</el-radio-button>
                  <el-radio-button label="1">{{$t('关闭')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item :label="$t('刷卡识别')">
                <el-radio-group size="small" v-model="formSet.recModeCardEnable">
                  <el-radio-button label="2">{{$t('打开')}}</el-radio-button>
                  <el-radio-button label="1">{{$t('关闭')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item :label="$t('刷卡模式')">
                <el-radio-group size="small" v-model="formSet.recModeCardEnable">
                  <el-radio-button label="2">{{$t('打开')}}</el-radio-button>
                  <el-radio-button label="1">{{$t('关闭')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item :label="$t('刷卡刷脸双模式')">
                <el-radio-group size="small" v-model="formSet.recModeCardFaceEnable">
                  <el-radio-button label="2">{{$t('打开')}}</el-radio-button>
                  <el-radio-button label="1">{{$t('关闭')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item :label="$t('认证比对模式')">
                <el-radio-group size="small" v-model="formSet.recModeIdcardFaceEnable">
                  <el-radio-button label="2">{{$t('打开')}}</el-radio-button>
                  <el-radio-button label="1">{{$t('关闭')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </template>

            <template>
              <div class="margin-bottom-10">
                <span class="color-warning">{{$t("显示参数")}}</span>
              </div>
              <el-form-item :label="$t('IP显示')">
                <el-radio-group size="small" v-model="formSet.showIp">
                  <el-radio-button label="0">{{$t('显示')}}</el-radio-button>
                  <el-radio-button label="1">{{$t('隐藏')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item :label="$t('设备序列号显示')">
                <el-radio-group size="small" v-model="formSet.showDeviceKey">
                  <el-radio-button label="0">{{$t('显示')}}</el-radio-button>
                  <el-radio-button label="1">{{$t('隐藏')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item :label="$t('人员数显示')">
                <el-radio-group size="small" v-model="formSet.showPeopleNum">
                  <el-radio-button label="0">{{$t('显示')}}</el-radio-button>
                  <el-radio-button label="1">{{$t('隐藏')}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </template>
          </el-form>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="small" type="primary" :loading="drawerLoading" @click="okDrawDialog">{{$t("设置")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" :content="deleteSetTitle" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import MyPagination from "../../components/MyPagination";
  import mixins from "../../utils/mixins";
  import {common} from "../../utils/api/url";
  import {inArray, levelText, MessageError, MessageSuccess, MessageWarning} from "../../utils/utils";
  import LayoutTb from "../../components/Layout/LayoutTb";
  import MySelect from "../../components/MySelect";
  import MyInputButton from "../../components/search/MyInputButton";
  import DialogNormal from "../../components/utils/dialog/DialogNormal";
  import DrawerLayoutRight from "../../components/utils/dialog/DrawerLayoutRight";
  import MyDeviceUseType from "../../components/utils/status/MyDeviceUseType";
  import padLocalValidater from "../../utils/validater/padLocalValidater";
  import MyDeviceUseTypeArray from "~/components/utils/status/MyDeviceUseTypeArray";
  export default {
    mixins: [mixins, padLocalValidater],
    components: {
      MyDeviceUseTypeArray,
      MyPagination,LayoutTb,MySelect,MyInputButton,DialogNormal,DrawerLayoutRight,MyDeviceUseType},
    data(){
      return {
        tableData: [],
        searchDate: [],
        typeList: [],
        searchKey: '',
        visible: false,
        modalVisible: false,
        dialogLoading: false,
        drawerLoading: false,
        modalConfVisible: false,
        visibleConfim: false,
        drawerVisible: false,
        loading: false,
        perLoading: false,
        picLoading: false,
        mutiDeleteLoading: false,
        mutiUnbindLoading: false,
        mutiResetLoading: false,
        searchOnline: '',
        config: {},
        subTitle: '',
        deleteSetTitle: '确认需要删除该信息？',
        status: '',
        deviceList: [],
        filterOnlineStatusText: '',
        form: {
          id: '',
          ip: '',
          sn: '',
          comment: '',
          name: '',
          pwd: '',
          use: [],
          sceneType: [],
          sceneSubType: 1,
          sceneConnectType: 1,
          sceneControlType: 1
        },
        formSet: {
          setType: '',
          id: '',
          sn: '',
          name: '',
          ip: '',
          comment: '',
          use: [],
          sceneType: [],
          sceneSubType: 1,
          sceneConnectType: 1,
          sceneControlType: 1,
          ttsModType: 1,//语音播报模式,
          displayModType: 1,//屏幕显示模式,
          comModType: 1,//串口输出模式,
          wg: '',//韦根类型,
          isOpenRelay: 1,//继电器开关,
          recStrangerType: 1,//陌生人开关,
          indentifyDistance: 0,//识别距离,
          recRank: 1,//识别等级,
          saveIdentifyTime: '',//时间窗,
          identifyDistance: 0,//人脸识别阀值,
          delayTimeForCloseDoor: 500,//继电器时间,
          multiplayerDetection: 1,//多人脸识别
          recModeFaceEnable: 1,//人脸识别
          recModeCardEnable: 1,//刷卡识别
          recModeCardFaceEnable: 2,//人脸刷卡
          recModeIdcardFaceEnable: 2,//认证比对
          showIp: 0,//ip显示
          showDeviceKey: 0,//设备序列号显示
          showPeopleNum: 0,//人员数显示
        },
        formConf: {
          pwd: '',
          faceCallBack: '',
          hurtCallBack: '',
          padPhotoRegisterCallbackUrl: '',
          ntpAddr: '',
          ntpPort: '',
          ntpTime: '',
        },
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
          keyWord: this.searchKey,
          type: 3,
          online: this.searchOnline
        };
        this.$axios.get(common.local_pad_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      getSn(){
        let params = {
          ip: this.form.ip
        };
        this.loading = true;
        this.$axios.get(common.local_pad_sn, {params: params}).then(res => {
          if (res.data.data != null){
            this.form.sn = res.data.data.sn;
          }else {
            MessageError(res.data.desc);
          }
          this.loading = false;
        });
      },
      initConfig(row){
        let params = {
          sn: row.sn
        };
        this.$axios.get(common.local_pad_config_get, {params: params}).then(res => {
          if (res.data.data){
            this.formSet = {
              name: res.data.data.name,
              ip: res.data.data.ip,
              comment: res.data.data.comment,
              use: res.data.data.sceneType && res.data.data.sceneType != "" ? JSON.parse(res.data.data.sceneType) : [],
              sceneType: res.data.data.sceneType && res.data.data.sceneType != "" ? res.data.data.sceneType.split(",") : [],
              sceneSubType: res.data.data.sceneSubType ? res.data.data.sceneSubType : 1,
              sceneConnectType: res.data.data.sceneConnectType,
              sceneControlType: res.data.data.sceneControlType,
              ttsModType: res.data.data.config.ttsModType,//语音播报模式,
              displayModType: res.data.data.config.displayModType,//屏幕显示模式,
              comModType: res.data.data.config.comModType,//串口输出模式,
              wg: res.data.data.config.wg,//韦根类型,
              isOpenRelay: res.data.data.config.isOpenRelay,//继电器开关,
              recStrangerType: res.data.data.config.recStrangerType,//陌生人开关,
              identifyDistance: res.data.data.config.identifyDistance,//识别距离,
              recRank: ''+res.data.data.config.recRank,//识别等级,
              saveIdentifyTime: res.data.data.config.saveIdentifyTime,//时间窗,
              identifyScores: res.data.data.config.identifyScores,//人脸识别阀值,
              delayTimeForCloseDoor: res.data.data.config.delayTimeForCloseDoor ? res.data.data.config.delayTimeForCloseDoor : 500,//继电器时间,
              multiplayerDetection: ''+res.data.data.config.multiplayerDetection,//多人脸识别
              recModeFaceEnable: res.data.data.identify_model.recModeFaceEnable,//人脸识别
              recModeCardEnable: res.data.data.identify_model.recModeCardEnable,//刷卡识别
              recModeCardFaceEnable: res.data.data.identify_model.recModeCardFaceEnable,//人脸刷卡
              recModeIdcardFaceEnable: res.data.data.identify_model.recModeIdcardFaceEnable,//认证比对
              showIp: res.data.data.widget_config.showIp,//ip显示
              showDeviceKey: res.data.data.widget_config.showDeviceKey,//设备序列号显示
              showPeopleNum: res.data.data.widget_config.showPeopleNum,//人员数显示
            }
            this.formSet['sn'] = row.sn;
          }
        });
      },
      initSetting(row){
        this.$axios.get(common.device_get).then(res => {
          if (res.data.data){
            this.formConf = {
              pwd: res.data.data.padPassword,
              faceCallBack: res.data.data.padCallbackUrl,
              hurtCallBack: res.data.data.padHeartCallbackUrl,
              padPhotoRegisterCallbackUrl: res.data.data.padPhotoRegisterCallbackUrl,
              ntpAddr: res.data.data.ntpServer,
              ntpPort: res.data.data.ntpPort,
              ntpTime: res.data.data.ntpInterval,
            };
          }
        });
      },
      setCallbackUrl(){
        let params = {
          callbackUrl: this.formConf.faceCallBack
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.device_pad_local_check_down, params).then(res => {
          if (res.data.code == 200){

          }else {
            MessageWarning(res.data.desc);
          }
        });
      },
      setHurtCallbackUrl(){
        let params = {
          callbackUrl: this.formConf.hurtCallBack
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.device_pad_local_hurt_down, params).then(res => {
          if (res.data.code == 200){

          }else {
            MessageWarning(res.data.desc);
          }
        });
      },
      addInfo(){
        this.modalVisible = true;
      },
      setInfo(row){
        this.initConfig(row);
        this.drawerVisible = true;
      },
      confInfo(){
        this.initSetting();
        this.modalConfVisible = true;
      },
      syncInfo(row, type){
        let url = "";
        let params = {
          sn: row.sn
        };
        if (type == 2){
          url = common.local_pad_config_picsync;
          this.picLoading = true;
        }else if (type == 1){
          url = common.local_pad_config_persync;
          this.perLoading = true;
        }
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.des);
          }else {
            MessageError(res.data.des);
          }
          this.picLoading = false;
          this.perLoading = false;
        });
      },
      unbindInfo(row){
        this.deleteSetTitle = this.$t("确认需要解绑该设备？")
        this.formSet.sn = row.sn;
        this.formSet.setType = 'unbind';
        this.subTitle = row.name;
        this.visibleConfim = true;
      },
      deleteInfo(row){
        this.formSet.sn = row.sn;
        this.formSet.setType = 'delete';
        this.subTitle = row.name;
        this.visibleConfim = true;
      },
      deleteMutiInfo(){
        let arr = [];
        for (let i = 0; i < this.deviceList.length; i++){
          arr.push(this.deviceList[i].sn);
        }
        let params = {
          snList: arr.join(),
          reset: true
        };
        params = this.$qs.stringify(params);
        this.mutiDeleteLoading = true;
        this.$axios.post(common.local_pad_muti_delete, params).then(res => {
          if (res.data.code == 200){
            this.init();
            this.deviceList = [];
            this.$refs.refTable.clearSelection();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.mutiDeleteLoading = false;
        });
      },
      resetMutiInfo(){
        let arr = [];
        for (let i = 0; i < this.deviceList.length; i++){
          arr.push(this.deviceList[i].sn);
        }
        let params = {
          snList: arr.join()
        };
        params = this.$qs.stringify(params);
        this.mutiResetLoading = true;
        this.$axios.post(common.local_pad_muti_reset, params).then(res => {
          if (res.data.code == 200){
            this.init();
            this.deviceList = [];
            this.$refs.refTable.clearSelection();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.mutiResetLoading = false;
        });
      },
      unbindMutiInfo(){
        let arr = [];
        for (let i = 0; i < this.deviceList.length; i++){
          arr.push(this.deviceList[i].sn);
        }
        let params = {
          snList: arr.join(),
          reset: false
        };
        params = this.$qs.stringify(params);
        this.mutiUnbindLoading = true;
        this.$axios.post(common.local_pad_muti_delete, params).then(res => {
          if (res.data.code == 200){
            this.init();
            this.deviceList = [];
            this.$refs.refTable.clearSelection();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.mutiUnbindLoading = false;
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
      search(data){
        this.page = 1;
        this.searchKey = data.input;
        this.init();
      },
      okDialog(){
        let url = "";
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              ip: this.form.ip,
              sn: this.form.sn,
              port: 8090,
              type: this.form.name,
              name: this.form.name,
              pass: this.form.pwd,
              comment: this.form.comment,
              manufacturer: 'uface',
              sceneType: this.form.use.length > 0 ? this.form.use.join() : ""
            };
            if (this.form.use.join().indexOf('3') > -1 || this.form.use.join().indexOf('4') > -1){
              params['sceneSubType'] = this.form.sceneSubType;
            }
            params = this.$qs.stringify(params);
            this.$axios.post(common.local_pad_add, params, {loading: false}).then(res => {
              if (res.data.code == 200){
                this.modalVisible = false;
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
      okConfDialog(){
        let url = "";
        this.$refs['formConf'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              padPassword: this.formConf.pwd,
              padCallbackUrl: this.formConf.faceCallBack,
              padHeartCallbackUrl: this.formConf.hurtCallBack,
              padPhotoRegisterCallbackUrl: this.formConf.padPhotoRegisterCallbackUrl,
              //ntpAddr: this.formConf.ntpAddr,
              //ntpPort: this.formConf.ntpPort,
              //ntpTime: this.formConf.ntpTime,
            };

            params = this.$qs.stringify(params);
            this.$axios.post(common.device_set, params).then(res => {
              if (res.data.code == 200){
                this.modalConfVisible = false;
                this.init();
                this.setCallbackUrl();
                this.setHurtCallbackUrl();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
            });
          }
        });
      },
      closeDialog(event){
        this.form = {
          id: '',
          ip: '',
          sn: '',
          comment: '',
          name: '',
          pwd: '',
          use: [],
          sceneType: [],
          sceneSubType: 1,
          sceneConnectType: 1,
          sceneControlType: 1,
        };
        this.formConf = {
          pwd: '',
          faceCallBack: '',
          hurtCallBack: '',
          padPhotoRegisterCallbackUrl: ''
        };
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        if (this.$refs['formConf']){
          this.$refs['formConf'].resetFields();
        }
      },
      cancelDialog(){
        this.modalConfVisible = false;
        this.modalVisible = false;
      },
      closeDrawerDialog(event){
        this.formSet = {
          setType: '',
          id: '',
          sn: '',
          name: '',
          ip: '',
          comment: '',
          use: [],
          sceneType: [],
          sceneSubType: 1,
          sceneConnectType: 1,
          sceneControlType: 1,
          ttsModType: 1,//语音播报模式,
          displayModType: 1,//屏幕显示模式,
          comModType: 1,//串口输出模式,
          wg: '',//韦根类型,
          isOpenRelay: 1,//继电器开关,
          recStrangerType: 1,//陌生人开关,
          indentifyDistance: 0,//识别距离,
          recRank: 1,//识别等级,
          saveIdentifyTime: '',//时间窗,
          identifyDistance: 0,//人脸识别阀值,
          delayTimeForCloseDoor: 500,//继电器时间,
          multiplayerDetection: 1,//多人脸识别
          recModeFaceEnable: 1,//人脸识别
          recModeCardEnable: 1,//刷卡识别
          recModeCardFaceEnable: 2,//人脸刷卡
          recModeIdcardFaceEnable: 2,//认证比对
          showIp: 0,//ip显示
          showDeviceKey: 0,//设备序列号显示
          showPeopleNum: 0,//人员数显示
        };
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      okDrawDialog(event){
        this.drawerLoading = true;
        let params = {};
        params = this.formSet;
        params["sceneType"] = this.formSet.use.length > 0 ? this.formSet.use.join() : "";
        params = this.$qs.stringify(params);
        this.$axios.post(common.local_pad_config_set, params).then(res => {
          if (res.data.code == 200){
            this.drawerVisible = false;
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.drawerLoading = false;
        });
      },
      handleSelect(data, type){
        switch (type) {
          case 1:
            this.formSet.recRank = data;
            break;
          case 2:
            this.formSet.mutiplayerDetetion = data;
            break;
          case 3:
            {
              let array = data;
              let indexSel = "";
              let proNum = data.findIndex((item, index) =>{
                let indexSel3 = "";
                let indexSel4 = "";
                indexSel3 = inArray(3, array);
                indexSel4 = inArray(4, array);

                if (array.length > 0 && (array.join().indexOf("3") > -1 && array.join().indexOf("4") > -1)){
                  if (indexSel3 > indexSel4){
                    indexSel = parseInt(indexSel4);
                    array.splice(indexSel, 1);
                  }
                }

                if (array.length > 0 && (array.join().indexOf("3") > -1 && array.join().indexOf("4") > -1)){
                  if (indexSel3 < indexSel4){
                    indexSel = parseInt(indexSel3);
                    array.splice(indexSel, 1);
                  }
                }
              });
              this.form.use = array;
            }
            break
          case 4:
            {
              let array = data;
              let indexSel = "";
              let proNum = data.findIndex((item, index) =>{
                let indexSel3 = "";
                let indexSel4 = "";
                indexSel3 = inArray(3, array);
                indexSel4 = inArray(4, array);

                if (array.length > 0 && (array.join().indexOf("3") > -1 && array.join().indexOf("4") > -1)){
                  if (indexSel3 > indexSel4){
                    indexSel = parseInt(indexSel4);
                    array.splice(indexSel, 1);
                  }
                }

                if (array.length > 0 && (array.join().indexOf("3") > -1 && array.join().indexOf("4") > -1)){
                  if (indexSel3 < indexSel4){
                    indexSel = parseInt(indexSel3);
                    array.splice(indexSel, 1);
                  }
                }
              });
              this.formSet.use = array;
            }
            break
        }
      },
      levelInfo(filterVal){
        let arrItem = levelText();
        let arr = [];
        for (let item in arrItem){
          if (filterVal){
            if (item != 3){
              arr.push(
                {
                  label: arrItem[item],
                  value: item
                }
              );
            }
          }else {
            arr.push(
              {
                label: arrItem[item],
                value: item
              }
            );
          }
        }
        return arr;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          sn: this.formSet.sn,
          reset: true
        };
        if (this.formSet.setType == 'unbind'){
          params['reset'] = false;
        }
        url = common.local_pad_config_delete;
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
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      getRowKeys(row) {
        return row.sn
      },
      handleSelectionChange(data){
        this.deviceList = data;
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'status'){
            this.searchOnline = value[item][0];
            this.filterOnlineStatusText = "";
            for (let i = 0; i < this.filterOnlineStatus.length; i++){
              if (this.searchOnline == this.filterOnlineStatus[i].value){
                this.filterOnlineStatusText = this.filterOnlineStatus[i].text;
              }
            }
          }
        }
        this.page = 1;
        this.init();
      }
    }
  }
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
</style>
