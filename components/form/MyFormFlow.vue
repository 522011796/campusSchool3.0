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
                  <my-select v-if="flowDetailData.type == 5" size="mini" :sel-value="flowDetailData.htype" :options="fiterTeacherRoleType" @change="handleUserType"></my-select>
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
                  <my-select v-if="flowDetailData.type == 2" size="mini" :sel-value="flowDetailData.htype" :options="fiterTeacherRoleType" @change="handleUserType"></my-select>
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
                    <el-col :span="8" class="text-center">
                      <el-row>
                        <el-col :span="12" class="text-center">
                          <el-checkbox></el-checkbox>
                        </el-col>
                        <el-col :span="12" class="text-center">
                          <el-checkbox></el-checkbox>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                  <el-row class="margin-top-5">
                    <el-col :span="16">
                      <span>{{$t("申请人")}}</span>
                    </el-col>
                    <el-col :span="8" class="text-center">
                      <el-row>
                        <el-col :span="12" class="text-center">
                          <el-checkbox></el-checkbox>
                        </el-col>
                        <el-col :span="12" class="text-center">
                          <el-checkbox></el-checkbox>
                        </el-col>
                      </el-row>
                    </el-col>
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
        <div class="padding-lr-10 padding-tb-10 text-right">
          <el-button size="mini" @click="versionList">{{$t("版本管理")}}</el-button>
        </div>
        <div class="text-center flow-main-block" style="overflow-y: auto;position: relative" :style="drawHeight5">
          <div class="flow-fixed-block font-size-12 font-bold margin-bottom-20 bg-success">
            <span>{{$t("开始")}}</span>
          </div>

          <div class="margin-bottom-20 margin-top-20">
            <my-form-audit-type item-index="0" @click="selAuditType"></my-form-audit-type>
          </div>

          <div v-if="flowData.length > 0" v-for="(item, index) in flowData" :key="index">
            <div class="flow-item-block" @click="selFlowItemBlock($event, item, index)">
              <div class="flow-item-title-block" :class="item.extra == 'audit' ? 'bg-warning' : 'bg-success'">
                <i class="fa fa-times-circle flow-item-close-block color-danger" @click.stop="delAuditType($event, item, index)"></i>
                <span class="font-bold font-size-12">
                  <el-row>
                    <el-col :span="20">
                      <i class="fa fa-tag"></i>
                      <label>{{ auditFlowTypeItemInfo(item.type, 'set') }}</label>
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
                      <el-tag size="mini" v-for="(itemUser ,indexUser) in item.users" :key="indexUser" v-if="indexUser < 4" class="margin-left-5 moon-content-text-ellipsis-class" style="width: 50px">
                        xxxxxxxxxxxx
                      </el-tag>
                      <label class="flow-user-count-tag margin-left-5" v-if="item.users.length >= 4">4+</label>
                    </span>
                  </div>
                  <div class="margin-top-5">
                    <span style="position: relative; top: -5px">
                      <i class="fa fa-cog"></i>
                      <label>{{ $t("权限") }}: </label>
                    </span>
                    <span>
                      <el-tag size="mini" type="success" v-for="(itemUser ,indexUser) in 2" :key="indexUser" class="margin-left-5 moon-content-text-ellipsis-class" style="width: 50px">
                        提交
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
      formId: Object
    },
    computed: {

    },
    data() {
      return {
        flowData: [],
        popVisible: false,
        refreshTeacherStatus: false,
        activeName: 'only',
        flowDetailIndex: '',
        flowDetailData: '',
        approverUsers: [],
        auditFlowType: [
          {label: this.$t("固定人审批"), text: this.$t("固定人审批"), value: 1},
          {label: this.$t("系统角色审批"), text: this.$t("系统角色审批"), value: 2},
          {label: this.$t("发起人自选审批"), text: this.$t("发起人自选审批"), value: 3},
          {label: this.$t("抄送给固定人"), text: this.$t("抄送给固定人"), value: 4},
          {label: this.$t("抄送给系统角色"), text: this.$t("抄送给系统角色"), value: 5},
          {label: this.$t("自选抄送人"), text: this.$t("自选抄送人"), value: 6},
        ],
        form: {
          auditType: '',
          name: '',
          allowBack: false,
          urge: false,
          autoAudit: false,
          merge: false
        }
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
          classShow: false,
          classEdit: false,
        };
        this.flowData.splice(index, 0, obj);
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
      },
      auditFlowTypeItemInfo(value, type){
        return flowAuditItemType(value, type);
      },
      selFlowItemBlock(event, data, index){
        this.flowDetailData = data;
        this.flowDetailIndex = index;
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
        }
        this.approverUsers = this.flowDetailData.users;
      },
      versionList(){
        this.$emit("versionClick");
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
