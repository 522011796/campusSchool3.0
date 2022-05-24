<template>
  <div>
    <div class="form-set-main" :style="drawHeight3">
      <div class="pull-right form-set-right" style="overflow-y: auto">
        <div class="header-block padding-lr-10 border-bottom-1">
          <el-row>
            <el-col :span="12" class="text-center">
              <span class="tab-class font-bold" :class="activeName == 'only' ? 'color-warning' : ''" @click="handleClick('only')">
                <i class="fa fa-file"></i>
                {{$t('节点属性')}}
              </span>
            </el-col>
            <el-col :span="12" class="text-center">
              <span class="tab-class font-bold margin-left-5" :class="activeName == 'flow' ? 'color-warning' : ''" @click="handleClick('flow')">
                <i class="fa fa-line-chart"></i>
                {{$t('流程属性')}}
              </span>
            </el-col>
          </el-row>
        </div>
        <div class="margin-top-10 padding-lr-10 font-size-12">
          <template v-if="activeName == 'only'">
            <div>
              <div class="font-bold">{{$t("节点类型")}}</div>
<!--              <my-select class="margin-top-5" size="mini" :placeholder="$t('类型')" :sel-value="flowDetailData.type" :options="auditFlowType" :clearable="false" @change="handleAuditTypeChange"></my-select>-->
                <div v-if="flowDetailData.extra == 'audit'" class="margin-top-10">{{$t("审批节点")}}</div>
                <div v-if="flowDetailData.extra == 'send'" class="margin-top-10">{{$t("抄送节点")}}</div>
            </div>
            <div class="margin-top-10">
              <div class="font-bold">{{$t("节点名称")}}</div>
              <div class="margin-top-5">
                <el-input size="mini" style="width: 100%" v-model="flowDetailData.name"></el-input>
              </div>
            </div>
            <div class="margin-top-10">
              <template v-if="flowDetailData.extra == 'send'">
                <div class="font-bold">{{$t("抄送人")}}</div>
                <div class="margin-top-5">
                  <el-popover
                    v-if="flowDetailData.type == 4 || flowDetailData.type == 6"
                    popper-class="custom-popper-class-form"
                    placement="left"
                    width="700"
                    trigger="click"
                    @show="handleShowTeacher(1)">
                    <div>
                      <teacher-tree-and-list-no-page ref="popverTeacherRef" user-type="user" :sel-arr="flowDetailData.users" set-type="check" @select="handleSelUser($event, 1)"></teacher-tree-and-list-no-page>
                    </div>
                    <el-button slot="reference" type="success" plain size="small" @click="loadingShow(1)">
                      <i v-if="refreshTeacherStatus == true" class="fa fa-refresh fa-spin"></i>
                      {{$t("抄送人")}}({{$t("人数")}}:{{approverUsers.length}})
                    </el-button>
                  </el-popover>
                  <my-select v-if="flowDetailData.type == 5" size="mini" :sel-value="flowDetailData.hType" :options="fiterTeacherRoleType" @change="handleUserType"></my-select>
                </div>
              </template>
              <template v-if="flowDetailData.extra == 'audit'">
                <div class="font-bold">{{$t("审批人")}}</div>
                <div class="margin-top-5">
                  <el-popover
                    v-if="flowDetailData.type == 1 || flowDetailData.type == 3"
                    popper-class="custom-popper-class-form"
                    placement="left"
                    width="700"
                    trigger="click"
                    @show="handleShowTeacher(1)">
                    <div>
                      <teacher-tree-and-list-no-page ref="popverTeacherRef" user-type="user" :sel-arr="flowDetailData.users" set-type="check" @select="handleSelUser($event, 1)"></teacher-tree-and-list-no-page>
                    </div>
                    <el-button slot="reference" type="success" plain size="small" @click="loadingShow(1)">
                      <i v-if="refreshTeacherStatus == true" class="fa fa-refresh fa-spin"></i>
                      {{$t("审批人")}}({{$t("人数")}}:{{approverUsers.length}})
                    </el-button>
                  </el-popover>
                  <my-select v-if="flowDetailData.type == 2" size="mini" :sel-value="flowDetailData.hType" :options="fiterTeacherRoleType" @change="handleUserType"></my-select>
                </div>
              </template>
            </div>

            <template v-if="flowDetailData.extra != 'send'">
              <div class="margin-top-10 border-bottom-1 padding-bottom-5">
                <div class="font-bold">{{$t("多人审批规则")}}</div>
                <div class="margin-top-10">
                  <el-row>
                    <el-col :span="20">
                      <span>{{$t("会签")}}</span>
                      <span class="color-muted">({{$t("所有审批人同意")}})</span>
                    </el-col>
                    <el-col :span="4" class="text-right">
                      <el-radio v-model="flowDetailData.andor" label="and">&nbsp;</el-radio>
                    </el-col>
                  </el-row>
                </div>
                <div class="margin-top-10">
                  <el-row>
                    <el-col :span="20">
                      <span>{{$t("或签")}}</span>
                      <span class="color-muted">({{$t("其中一人审批同意")}})</span>
                    </el-col>
                    <el-col :span="4" class="text-right">
                      <el-radio v-model="flowDetailData.andor" label="or">&nbsp;</el-radio>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <div class="margin-top-10 border-bottom-1 padding-bottom-5">
                <div class="font-bold">{{$t("审批签名")}}</div>
                <div class="margin-top-10">
                  <el-row>
                    <el-col :span="20">
                      <span>{{$t("开启签名")}}</span>
                    </el-col>
                    <el-col :span="4" class="text-center">
                      <el-checkbox v-model="flowDetailData.waitName"></el-checkbox>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <div class="margin-top-10 border-bottom-1 padding-bottom-5">
                <div class="font-bold">{{$t("按钮权限")}}</div>
                <div class="margin-top-10">
                  <el-row>
                    <el-col :span="16">
                      &nbsp;
                    </el-col>
                    <el-col :span="8" class="text-center">
                      <el-row>
                        <el-col :span="12" class="text-center">
                          <span>{{$t("显示")}}</span>
                        </el-col>
                        <el-col :span="12" class="text-center">
                          <span>{{$t("批量")}}</span>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                  <el-row class="margin-top-5">
                    <el-col :span="16">
                      <span>{{$t("同意")}}</span>
                    </el-col>
                    <el-col :span="8" class="text-center">
                      <el-row>
                        <el-col :span="12" class="text-center">
                          <el-checkbox v-model="flowDetailData.allowShow"></el-checkbox>
                        </el-col>
                        <el-col :span="12" class="text-center">
                          <el-checkbox v-model="flowDetailData.allowMuti"></el-checkbox>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                  <el-row class="margin-top-5">
                    <el-col :span="16">
                      <span>{{$t("驳回")}}</span>
                    </el-col>
                    <el-col :span="8" class="text-center">
                      <el-row>
                        <el-col :span="12" class="text-center">
                          <el-checkbox v-model="flowDetailData.rejectShow"></el-checkbox>
                        </el-col>
                        <el-col :span="12" class="text-center">
                          <el-checkbox v-model="flowDetailData.rejectMuti"></el-checkbox>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                  <el-row class="margin-top-5">
                    <el-col :span="16">
                      <span>{{$t("转交")}}</span>
                    </el-col>
                    <el-col :span="8" class="text-center">
                      <el-row>
                        <el-col :span="12" class="text-center">
                          <el-checkbox v-model="flowDetailData.transferShow"></el-checkbox>
                        </el-col>
                        <el-col :span="12" class="text-center">
                          <el-checkbox v-model="flowDetailData.transferMuti"></el-checkbox>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <div class="margin-top-10 border-bottom-1 padding-bottom-5">
                <div class="font-bold">{{$t("节点字段权限")}}</div>
                <div class="margin-top-10">
                  <el-row>
                    <el-col :span="16">
                      &nbsp;
                    </el-col>
                    <el-col :span="8" class="text-center">
                      <el-row>
                        <el-col :span="12" class="text-center">
                          <span>{{$t("显示")}}</span>
                        </el-col>
                        <el-col :span="12" class="text-center">
                          <span>{{$t("编辑")}}</span>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                  <el-row class="margin-top-5">
                    <el-col :span="16">
                      <span>{{$t("全选")}}</span>
                    </el-col>
                    <el-col :span="4" class="text-center">
                      <el-row>
                        <el-col :span="24" class="text-center">
                          <el-checkbox v-model="checkRight1All" @change="handleCheckAllChangeRight1"></el-checkbox>
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col :span="4" class="text-center">
                      <el-row>
                        <el-col :span="24" class="text-center">
                          <el-checkbox v-model="checkRight2All" @change="handleCheckAllChangeRight2"></el-checkbox>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                  <el-row class="margin-top-5">
                    <el-col :span="16">
                      <el-row v-for="(item, index) in formFieldList" :key="index">
                        <el-col :span="24">
                          <span>{{ item.title }}</span>
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col :span="4" class="text-center displaynone-checkbox">
                      <el-checkbox-group v-model="flowDetailData.right1" @change="handleCheckedRight1Change">
                        <el-row v-for="(item, index) in formFieldList" :key="index">
                          <el-col :span="24" class="text-center">
                            <el-checkbox :label="item.field">&nbsp;</el-checkbox>
                          </el-col>
                        </el-row>
                      </el-checkbox-group>
                    </el-col>
                    <el-col :span="4" class="text-center displaynone-checkbox">
                      <el-checkbox-group v-model="flowDetailData.right2" @change="handleCheckedRight2Change">
                        <el-row v-for="(item, index) in formFieldList" :key="index">
                          <el-col :span="24">
                            <el-checkbox :label="item.field">&nbsp;</el-checkbox>
                          </el-col>
                        </el-row>
                      </el-checkbox-group>
                    </el-col>

<!--                    <el-col :span="8" class="text-center">-->
<!--                      <el-row>-->
<!--                        <el-col :span="12" class="text-center">-->
<!--                          <el-checkbox :true-label="item.field" :false-label="item.field" @change="handleCheckedRight1Change"></el-checkbox>-->
<!--                        </el-col>-->
<!--                        <el-col :span="12" class="text-center">-->
<!--                          <el-checkbox v-model="item.field" @change="handleCheckedRight2Change"></el-checkbox>-->
<!--                        </el-col>-->
<!--                      </el-row>-->
<!--                    </el-col>-->
                  </el-row>
                </div>
              </div>
            </template>
          </template>

          <template v-if="activeName == 'flow'">
            <div class="margin-top-10">
              <div>
                <div>
                  <span>{{$t("流程名称")}}</span>
                </div>
                <el-row class="margin-top-10">
                  <el-col :span="24">
                    <el-input size="mini" style="width: 100%" v-model="form.name"></el-input>
                  </el-col>
                </el-row>
              </div>
              <div class="margin-top-10">
                <el-row>
                  <el-col :span="20">
                    <span>{{$t("流程发起后允许撤回")}}</span>
                  </el-col>
                  <el-col :span="4" class="text-center">
                    <el-checkbox v-model="form.allowBack"></el-checkbox>
                  </el-col>
                </el-row>
              </div>
              <div class="margin-top-10">
                <el-row>
                  <el-col :span="20">
                    <span>{{$t("允许流程发起人催办")}}</span>
                  </el-col>
                  <el-col :span="4" class="text-center">
                    <el-checkbox v-model="form.urge"></el-checkbox>
                  </el-col>
                </el-row>
              </div>
              <div class="margin-top-10">
                <el-row>
                  <el-col :span="20">
                    <span>{{$t("审批人为发起人时自动审批")}}</span>
                  </el-col>
                  <el-col :span="4" class="text-center">
                    <el-checkbox v-model="form.autoAudit"></el-checkbox>
                  </el-col>
                </el-row>
              </div>
              <div class="margin-top-10">
                <el-row>
                  <el-col :span="20">
                    <span>{{$t("相邻节点审批人合并审批")}}</span>
                  </el-col>
                  <el-col :span="4" class="text-center">
                    <el-checkbox v-model="form.merge"></el-checkbox>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="form-set-left">
        <div class="padding-lr-10 padding-tb-10 text-right border-bottom-1">
          <span v-if="form.name != ''" class="color-muted margin-right-10 font-size-12">
            {{$t("当前版本")}}: {{form.name}}
          </span>
          <el-button size="mini" @click="versionList">{{$t("版本管理")}}</el-button>
        </div>
        <div class="text-center flow-main-block" style="overflow-y: auto;position: relative" :style="drawHeight5">
          <div class="flow-fixed-block font-size-12 font-bold margin-bottom-20 bg-success">
            <span>{{$t("开始")}}</span>
          </div>

          <div class="margin-bottom-20 margin-top-20">
            <my-form-audit-type item-index="0" :custom-user-status="flowCustonUserStatus" @click="selAuditType" @showPop="showPop"></my-form-audit-type>
          </div>

          <div v-if="flowData.length > 0" v-for="(item, index) in flowData" :key="index">
            <div class="flow-item-block" @click="selFlowItemBlock($event, item, index)">
              <div class="flow-item-title-block" :class="item.extra == 'audit' ? 'bg-warning' : 'bg-success'">
                <i class="fa fa-times-circle flow-item-close-block color-danger" @click.stop="delAuditType($event, item, index)"></i>
                <span class="font-bold font-size-12">
                  <el-row>
                    <el-col :span="20">
                      <i class="fa fa-tag"></i>
                      <label>{{ item.name }}</label>
                    </el-col>
                    <el-col :span="4" class="text-right">
                      <i class="fa fa-cog"></i>
                    </el-col>
                  </el-row>
                </span>
              </div>
              <div class="padding-lr-10 padding-tb-10 text-left font-size-12">
                <div>
                  <div>
                    <span style="position: relative; top: -5px">
                      <i class="fa fa-users"></i>
                      <label>{{ $t("人员") }}: </label>
                    </span>
                    <span>
                      <template v-if="item.type == 1 || item.type == 3 || item.type == 4 || item.type == 6">
                        <el-tag size="mini" v-for="(itemUser ,indexUser) in item.hName" :key="indexUser" v-if="indexUser < 4" class="margin-left-5 moon-content-text-ellipsis-class" style="width: 50px">
                          {{ itemUser }}
                        </el-tag>
                        <label class="flow-user-count-tag margin-left-5" v-if="item.users.length >= 4">4+</label>
                      </template>
                      <template v-if="item.type == 2 || item.type == 5">
                        <el-tag size="mini" class="margin-left-5 moon-content-text-ellipsis-class" style="width: 50px">
                          <label v-if="item.hType == 'MasterTeacher'">{{$t("班主任")}}</label>
                          <label v-if="item.hType == 'CoachTeacher'">{{$t("辅导员")}}</label>
                          <label v-if="item.hType == 'DirectorTeacher'">{{$t("系主任")}}</label>
                          <label v-if="item.hType == 'DormitorTeacher'">{{$t("宿管员")}}</label>
                          <label v-if="item.hType == 'DeputyDirectorTeacher'">{{$t("系副主任")}}</label>
                          <label v-if="item.hType == 'StudentManageTeacher'">{{$t("学管主任")}}</label>
                          <label v-if="item.hType == 'SecretaryTeacher'">{{$t("系部主任")}}</label>
                        </el-tag>
                      </template>
                    </span>
                  </div>
                  <div class="margin-top-5" v-if="item.extra != 'send'">
                    <span style="position: relative; top: -5px">
                      <i class="fa fa-cog"></i>
                      <label>{{ $t("权限") }}: </label>
                    </span>
                    <span>
                      <el-tag size="mini" type="success" v-if="item.allowShow || item.allowMuti" class="margin-left-5 moon-content-text-ellipsis-class" style="width: 50px">
                        {{ $t("提交") }}
                      </el-tag>
                      <el-tag size="mini" type="success" v-if="item.rejectShow || item.rejectMuti" class="margin-left-5 moon-content-text-ellipsis-class" style="width: 50px">
                        {{ $t("驳回") }}
                      </el-tag>
                      <el-tag size="mini" type="success" v-if="item.transferShow || item.transferMuti" class="margin-left-5 moon-content-text-ellipsis-class" style="width: 50px">
                        {{ $t("转交") }}
                      </el-tag>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="margin-bottom-20 margin-top-20">
              <my-form-audit-type :item-index="index+1" :pop-visible="popVisible" @click="selAuditType"></my-form-audit-type>
            </div>
          </div>

          <div class="flow-fixed-block font-size-12 font-bold bg-danger">
            <span>{{$t("结束")}}</span>
          </div>
        </div>
      </div>
      <div class="moon-clearfix"></div>
    </div>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {flowAuditItemType, MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import MySelect from "~/components/MySelect";
  import MyFormAuditType from "~/components/form/MyFormAuditType";

  export default {
    name: 'myFormFlow',
    components: {MyFormAuditType, MySelect},
    mixins: [mixins],
    props: {
      formId: Object,
      flowData: {
        default: function () {
          return [];
        },
        type: Array
      },
      form: {
        default: function () {
          return {
            auditType: '',
            name: '',
            allowBack: false,
            urge: false,
            autoAudit: false,
            merge: false
          };
        },
        type: Object
      }
    },
    computed: {

    },
    data() {
      return {
        checkRight1All: false,
        checkRight2All: false,
        popVisible: false,
        refreshTeacherStatus: false,
        activeName: 'only',
        flowCustonUserStatus: false,
        flowDetailIndex: '',
        flowDetailData: '',
        approverUsers: [],
        formFieldList: [],
        auditFlowType: [
          {label: this.$t("固定人审批"), text: this.$t("固定人审批"), value: 1},
          {label: this.$t("系统角色审批"), text: this.$t("系统角色审批"), value: 2},
          {label: this.$t("发起人自选审批"), text: this.$t("发起人自选审批"), value: 3},
          {label: this.$t("抄送给固定人"), text: this.$t("抄送给固定人"), value: 4},
          {label: this.$t("抄送给系统角色"), text: this.$t("抄送给系统角色"), value: 5},
          {label: this.$t("自选抄送人"), text: this.$t("自选抄送人"), value: 6},
        ]
      }
    },
    created() {

    },
    methods: {
      selAuditType(type, extra, index){
        let obj = {
          type: type,
          extra: extra,
          name: this.auditFlowTypeItemInfo(type, 'set'),
          users: [],
          hType: '',
          hName: '',
          andor: 'or',
          waitName: false,
          allowShow: false,
          allowMuti: false,
          rejectShow: false,
          rejectMuti: false,
          transferShow: false,
          transferMuti: false,
          allShow: false,
          allEdit: false,
          applicantShow: false,
          applicantEdit: false,
          right1: [],
          right2: [],
        };
        this.flowData.splice(index, 0, obj);
        this.selFlowItemBlock(null, obj, index);
      },
      delAuditType(event, data, index){
        this.flowData.splice(index, 1);
      },
      handleClick(type){
        this.activeName = type;
      },
      handleAuditTypeChange(data){
        this.form.auditType = data;
      },
      handleUserType(data){
        this.flowDetailData.htype = data;
        this.flowDetailData.hType = data;
      },
      auditFlowTypeItemInfo(value, type){
        return flowAuditItemType(value, type);
      },
      selFlowItemBlock(event, data, index){
        this.flowDetailData = data;
        this.approverUsers = data.users;
        this.flowDetailIndex = index;
        let ruleList = [];
        if (this.formId.form_content){
          let form_content = JSON.parse(this.formId.form_content);
          //this.formFieldList = form_content.rule;

          this.formFieldList = this.setRuleChild(form_content.rule, ruleList);

          if (this.formFieldList.length == this.flowDetailData.right1.length){
            this.checkRight1All = true;
          }else {
            this.checkRight1All = false;
          }

          if (this.formFieldList.length == this.flowDetailData.right2.length){
            this.checkRight2All = true;
          }else {
            this.checkRight2All = false;
          }
        }
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
      loadingShow(type){
        let timer = null;
        clearTimeout(timer);
        switch (type) {
          case 1:
            this.refreshTeacherStatus = true;
            timer = setTimeout(() => {
              this.refreshTeacherStatus = false;
              clearTimeout(timer);
            },1000);
            break;
        }
      },
      handleShowTeacher(type){
        setTimeout(()=>{
          if (type == 1){
            this.$refs.popverTeacherRef._handleOpen();
          }
        },800);
      },
      handleSelUser(data, type){
        if (type == 1){
          this.flowDetailData.users = data;
          this.flowDetailData.hName = [];
          for (let i = 0; i < data.length; i++){
            this.flowDetailData.hName.push(data[i].real_name);
          }
        }
        this.approverUsers = this.flowDetailData.users;
      },
      versionList(){
        this.$emit("versionClick");
      },
      handleCheckedRight1Change(data){
        this.flowDetailData.right1 = data;
        if (this.formFieldList.length == this.flowDetailData.right1.length){
          this.checkRight1All = true;
        }else {
          this.checkRight1All = false;
        }
      },
      handleCheckedRight2Change(data){
        this.flowDetailData.right2 = data;
        if (this.formFieldList.length == this.flowDetailData.right2.length){
          this.checkRight2All = true;
        }else {
          this.checkRight2All = false;
        }
      },
      handleCheckAllChangeRight1(data){
        if (data == true){
          if (this.formId.form_content){
            let arr = [];
            for(let i = 0; i < this.formFieldList.length; i++){
              arr.push(this.formFieldList[i].field);
            }
            this.flowDetailData.right1 = arr;
          }
        }else{
          this.flowDetailData.right1 = [];
        }
      },
      handleCheckAllChangeRight2(data){
        if (data == true){
          if (this.formId.form_content){
            let arr = [];
            for(let i = 0; i < this.formFieldList.length; i++){
              arr.push(this.formFieldList[i].field);
            }
            this.flowDetailData.right2 = arr;
          }
        }else{
          this.flowDetailData.right2 = [];
        }
      },
      showPop(){
        this.flowCustonUserStatus = false;
        for (let i = 0; i < this.flowData.length; i++){
          if(this.flowData[i].hType == 'CustomUser'){
            this.flowCustonUserStatus = true;
            break;
          }
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
  margin-right: 310px;
  box-shadow: 0px 0px 4px #DCDFE6;
}
.form-set-right{
  width: 300px;
  background: #f8f8f8;
  height: 100%;
  box-shadow: 0px 0px 4px #DCDFE6;
}
.form-set-menu-item{
  font-size: 12px;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.form-set-menu-item-active{
  background: #3E8DB8;
  color: #FFFFFF;
}
.title-block-tag{
  display: inline-block;
  height: 20px;
  width: 3px;
  background: #E6A23C;
  font-weight: bold;
  border-radius: 3px;
}
.title-block-text{
  font-weight: bold;
  position: relative;
  top: -5px;
}
.item-tag-block{
  height: 25px;
  line-height: 25px;
  background: rgb(140, 197, 255);
  border-radius: 5px;
  padding: 0px 10px;
  color: #909399;
}
.flow-main-block{

}
.flow-fixed-block{
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 100%;
  margin: 0 auto;
  margin-top: 20px;
  color: #FFFFFF;
}
.flow-item-block{
  border-radius: 5px;
  background: #FFFFFF;
  min-height: 50px;
  width: 350px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 4px #DCDFE6;
}
.flow-item-title-block{
  position: relative;
  height: 30px;
  line-height: 30px;
  padding: 0px 10px;
  color: #FFFFFF;
  text-align: left;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.flow-item-close-block{
  position: absolute;
  right: -10px;
  top: -10px;
}
.flow-user-count-tag{
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 100%;
  background: #F56C6C;
  text-align: center;
  font-size: 12px;
  color: #FFFFFF;
  top: -5px;
}
.header-block{
  height: 40px;
  line-height: 40px;
}
.tab-class{
  cursor: default;
  padding: 10px;
}
</style>
