<template>
  <div>
    <div class="form-set-main" :style="drawHeight3">
      <div class="pull-right form-set-right" style="overflow-y: auto">
        <div class="header-block padding-lr-10 border-bottom-1">
          <el-row>
            <el-col :span="24" class="text-center">
              <span class="tab-class font-bold" :class="activeName == 'only' ? 'color-warning' : ''" @click="handleClick('only')">
                <i class="fa fa-file"></i>
                {{$t('节点属性')}}
              </span>
            </el-col>
          </el-row>
        </div>
        <div class="margin-top-10 padding-lr-10 font-size-12">
          <template>
            <div>
              <div class="font-bold">{{$t("节点类型")}}</div>
                <div v-if="flowDetailData.type === 1" class="margin-top-10">{{$t("线上流程")}}</div>
                <div v-if="flowDetailData.type === 0" class="margin-top-10">{{$t("线下流程")}}</div>
            </div>
            <div class="margin-top-10">
              <div class="font-bold">{{$t("节点名称")}}</div>
              <div class="margin-top-5">
                <el-input size="mini" style="width: 100%" v-model="flowDetailData.name"></el-input>
              </div>
            </div>

            <template v-if="flowDetailData.subType == 5">
              <div class="margin-top-10">
                <div class="font-bold">{{$t("学生端显示名称")}}</div>
                <div class="margin-top-5">
                  <el-input size="mini" style="width: 100%" :row="5" v-model="flowDetailData.checkinSheetName"></el-input>
                </div>
              </div>
              <div class="margin-top-10">
                <div class="font-bold">{{$t("报到须知")}}</div>
                <div class="margin-top-5 custom-textarea-inner">
                  <el-input type="textarea" :autosize="{ minRows: 10}" style="width: 100%;" :row="10" maxlength="500" show-word-limit v-model="flowDetailData.checkinSheetTips"></el-input>
                </div>
              </div>
            </template>

            <div class="margin-top-10" v-if="flowDetailData.subType != 5">
              <template>
                <div class="font-bold">{{$t("管理员")}}</div>
                <div class="margin-top-5">
                  <el-popover
                    popper-class="custom-popper-class-form"
                    placement="left"
                    width="700"
                    trigger="click"
                    @show="handleShowTeacher(1)">
                    <div>
                      <teacher-tree-and-list-role-no-page ref="popverTeacherRef" user-type="user" :sel-arr="flowDetailData.users" set-type="check" @select="handleSelUser($event, 1)" @selectType="selType" @selectRange="selRange"></teacher-tree-and-list-role-no-page>
                    </div>
                    <el-button slot="reference" type="success" plain size="small" @click="loadingShow(1)">
                      <i v-if="refreshTeacherStatus == true" class="fa fa-refresh fa-spin"></i>
                      {{$t("管理员")}}({{$t("人数")}}:{{approverUsers.length}})
                    </el-button>
                  </el-popover>
                </div>
              </template>
            </div>
          </template>

          <template v-if="flowDetailData.subType != 5">
            <div class="margin-top-10">
              <div>
                <div>
                  <span class="font-bold">{{$t("依赖环节")}}</span>
                </div>
              </div>
              <div class="margin-top-10">
                <el-row>
                  <el-col :span="20">
                    <div style="height: 19px;line-height: 19px" v-if="flowDetailData != ''" v-for="(item, index) in flowData" :key="index">
                      <span>{{ item.name }}</span>
                    </div>
                  </el-col>
                  <el-col :span="4" class="text-center">
                    <el-checkbox-group v-if="flowDetailData != ''" v-model="flowDetailData.items" @change="handleChangeBox">
                      <div v-for="(item, index) in flowData" :key="index" class="text-right">
                        <el-checkbox :label="index" :disabled="index === flowDetailIndex">&nbsp</el-checkbox>
                      </div>
                    </el-checkbox-group>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>

          <template v-if="flowDetailData.subType == 1">
            <div class="margin-top-10">
              <div>
                <div>
                  <span class="font-bold">{{$t("分班权限")}}</span>
                </div>
              </div>
              <div class="margin-top-10">
                <el-row>
                  <el-col :span="20">
                    <div style="height: 19px;line-height: 19px">
                      <span>{{ $t("允许老师分班") }}</span>
                    </div>
                  </el-col>
                  <el-col :span="4" class="text-right">
                    <el-checkbox v-model="flowDetailData.updateClass" @change="changeUpdateClass">&nbsp;</el-checkbox>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>

          <template v-if="flowDetailData.subType != 5">
            <div class="margin-top-10">
              <div>
                <div>
                  <span class="font-bold">{{$t("设置办理有效期")}}</span>
                </div>
              </div>
              <div class="margin-top-10">
                <el-date-picker
                  v-model="flowDetailData.datetimerange"
                  :unlink-panels="true"
                  size="mini"
                  style="width: 100%"
                  format="yyyy-MM-dd HH:mm"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  @change="handleFormChange($event)">
                </el-date-picker>
              </div>
            </div>
          </template>

          <template v-if="flowDetailData.subType == 3">
            <div class="margin-top-10">
              <div class="font-bold">{{$t("缴费链接")}}</div>
              <div class="margin-top-5">
                <el-input size="mini" style="width: 100%" v-model="flowDetailData.enrollPayUrl"></el-input>
              </div>
            </div>
          </template>

          <template v-if="flowDetailData.subType != 5">
            <div class="margin-top-10">
              <div>
                <div>
                  <span class="font-bold">{{$t("办理权限")}}</span>
                </div>
              </div>
              <div class="margin-top-10">
                <el-row>
                  <el-col :span="20">
                    <span>可重复提交</span>
                  </el-col>
                  <el-col :span="4" class="text-center">
                    <el-checkbox v-model="flowDetailData.allowRepeat"></el-checkbox>
                  </el-col>
                </el-row>
              </div>
              <div class="margin-top-10">
                <el-row>
                  <el-col :span="20">
                    <span>允许撤销</span>
                  </el-col>
                  <el-col :span="4" class="text-center">
                    <el-checkbox v-model="flowDetailData.allowBack"></el-checkbox>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>

          <template v-if="flowDetailData.subType != 5 && flowDetailData.report == true">
            <div class="margin-top-10">
              <div>
                <div>
                  <span class="font-bold">{{$t("报到核验方式")}}</span>
                </div>
              </div>
              <div class="margin-top-10">
                <el-row>
                  <el-col :span="20">
                    <span>人工手动</span>
                  </el-col>
                  <el-col :span="4" class="text-center">
                    <el-checkbox v-model="flowDetailData.custom"></el-checkbox>
                  </el-col>
                </el-row>
              </div>
              <div class="margin-top-10">
                <el-row>
                  <el-col :span="20">
                    <span>二维码(主扫)</span>
                  </el-col>
                  <el-col :span="4" class="text-center">
                    <el-checkbox v-model="flowDetailData.qrcode"></el-checkbox>
                  </el-col>
                </el-row>
              </div>
              <div class="margin-top-10">
                <el-row>
                  <el-col :span="20">
                    <span>人脸识别</span>
                  </el-col>
                  <el-col :span="4" class="text-center">
                    <el-checkbox v-model="flowDetailData.face"></el-checkbox>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>

          <template v-if="flowDetailData.subType != 5 && flowDetailData.report == false">
            <div class="margin-top-10">
              <div>
                <div>
                  <span class="font-bold">{{$t("成功报到设置")}}</span>
                </div>
              </div>
              <div class="margin-top-10">
                <el-row>
                  <el-col :span="20">
                    <span>设为报到成功</span>
                  </el-col>
                  <el-col :span="4" class="text-center">
                    <el-checkbox v-model="flowDetailData.reportSuccess"></el-checkbox>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="form-set-left">
        <div class="text-center flow-main-block" style="overflow-y: auto;position: relative" :style="drawHeight5">
          <div class="flow-fixed-block font-size-12 font-bold margin-bottom-20 bg-success">
            <span>{{$t("开始")}}</span>
          </div>

          <div class="margin-bottom-20 margin-top-20">
            <my-new-student-flow-type :item-index="0" :pop-visible="popVisible" @click="selAuditType"></my-new-student-flow-type>
          </div>

          <div v-if="flowData.length > 0" v-for="(item, index) in flowData" :key="index">
            <div class="flow-item-block" @click="selFlowItemBlock($event, item, index)">
              <div class="flow-item-title-block" :class="item.subType == '1' ? 'bg-warning' : 'bg-success'">
                <i class="fa fa-times-circle flow-item-close-block color-danger" @click.stop="delAuditType($event, item, index)"></i>
                <span class="font-bold font-size-12">
                  <el-row>
                    <el-col :span="20">
                      <i class="fa fa-tag"></i>
                      <label>{{ item.name }}</label>
                      <label v-if="item.type == 1 && item.subType == 9">({{$t("线上")}})</label>
                      <label v-if="item.type == 0 && item.subType == 9">({{$t("线下")}})</label>
                    </el-col>
                    <el-col :span="4" class="text-right">
                      <i class="fa fa-cog"></i>
                    </el-col>
                  </el-row>
                </span>
              </div>
              <div class="padding-lr-10 padding-tb-10 text-left font-size-12">
                <div v-if="item.subType != 5">
                  <div>
                    <span style="position: relative; top: -5px">
                      <i class="fa fa-users"></i>
                      <label>{{ $t("人员") }}: </label>
                    </span>
                    <span>
                      <template>
                        <el-tag size="mini" v-for="(itemUser ,indexUser) in item.hName" :key="indexUser" v-if="indexUser < 4" class="margin-left-5 moon-content-text-ellipsis-class" style="width: 50px">
                          <el-tooltip class="item" effect="dark" :content="itemUser" placement="top-start">
                            <span>{{ itemUser }}</span>
                          </el-tooltip>
                        </el-tag>
                        <label class="flow-user-count-tag margin-left-5" v-if="item.users.length >= 4">4+</label>
                      </template>
                    </span>
                  </div>
                  <div class="margin-top-5">
                    <span style="position: relative; top: -5px">
                      <i class="fa fa-cog"></i>
                      <label>{{ $t("权限") }}: </label>
                    </span>
                    <span>
                      <el-tag size="mini" type="success" v-if="item.allowBack" class="margin-left-5 moon-content-text-ellipsis-class" style="width: 80px">
                        {{ $t("允许撤销") }}
                      </el-tag>
                      <el-tag size="mini" type="warning" v-if="item.allowRepeat" class="margin-left-5 moon-content-text-ellipsis-class" style="width: 80px">
                        {{ $t("可重复提交") }}
                      </el-tag>
                    </span>
                  </div>
                  <div class="margin-top-5">
                    <span style="position: relative; top: -5px">
                      <i class="fa fa-history"></i>
                      <label>{{ $t("时间") }}: </label>
                    </span>
                    <span>
                      <template>
<!--                        <el-tag size="mini" v-for="(itemUser ,indexUser) in item.items" :key="indexUser" v-if="indexUser < 4" class="margin-left-5 moon-content-text-ellipsis-class" style="width: 50px">-->
<!--                          <el-tooltip class="item" effect="dark" :content="flowData[itemUser].name" placement="top-start">-->
<!--                            <span>{{ flowData[itemUser].name }}</span>-->
<!--                          </el-tooltip>-->
<!--                        </el-tag>-->
<!--                        <label class="flow-user-count-tag margin-left-5" v-if="item.users.length >= 4">4+</label>-->
                        <el-tag size="mini" type="success" class="margin-left-5 moon-content-text-ellipsis-class" style="width: 240px">
                          {{$moment(item.datetimerange[0]).format("YYYY-MM-DD HH:mm")}}
                          -
                          {{$moment(item.datetimerange[1]).format("YYYY-MM-DD HH:mm")}}
                        </el-tag>
                      </template>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="margin-bottom-20 margin-top-20">
              <my-new-student-flow-type :item-index="index+1" :pop-visible="popVisible" @click="selAuditType"></my-new-student-flow-type>
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
  import {
    flowAuditItemType,
    MessageError,
    MessageSuccess,
    MessageWarning,
    newStudentFlowAuditItemType
  } from "~/utils/utils";
  import MySelect from "~/components/MySelect";
  import MyFormAuditType from "~/components/form/MyFormAuditType";
  import MyNewStudentFlowType from "~/components/flow/MyNewStudentFlowType";
  import TeacherTreeAndListRoleNoPage from "~/components/utils/treeAndList/TeacherTreeAndListRoleNoPage";

  export default {
    name: 'MyNewStudentFlow',
    components: {TeacherTreeAndListRoleNoPage, MyNewStudentFlowType, MyFormAuditType, MySelect},
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
            allowRepeat: false,
            allowBack: false,
            reportSuccess: false,
            face: false,
            qrcode: false,
            custom: false,
            report: '',
            datetimerange: [],
            items: [],
            hType: '',
            hName: '',
            subType: '',
            enrollPayUrl: '',
            checkinSheetName: '',
            updateClass: false,
            checkinSheetTips: ''
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
      selType(data, userId){
        for (let i = 0; i < this.flowDetailData.users.length; i++){
          if (userId == this.flowDetailData.users[i].user_id){
            this.flowDetailData.users[i]['right_type'] = data;
          }
        }
      },
      selRange(data, userId){
        for (let i = 0; i < this.flowDetailData.users.length; i++){
          if (userId == this.flowDetailData.users[i].user_id){
            this.flowDetailData.users[i]['right_range'] = data;
          }
        }
      },
      selAuditType(subType, extra, index, type){
        let obj = {
          type: type,
          extra: extra,
          name: this.auditFlowTypeItemInfo(subType, 'set'),
          users: [],
          allowRepeat: false,
          allowBack: false,
          reportSuccess: false,
          face: false,
          qrcode: false,
          custom: false,
          report: subType == 1 ? true : false,
          datetimerange: [],
          items: [],
          hType: '',
          hName: '',
          subType: subType,
          enrollPayUrl: '',
          checkinSheetName: '',
          updateClass: false,
          checkinSheetTips: ''
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
        return newStudentFlowAuditItemType(value, type);
      },
      selFlowItemBlock(event, data, index){
        this.flowDetailData = data;
        this.approverUsers = data.users;
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
            },1500);
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
      handleFormChange(event, type){
        this.flowData[this.flowDetailIndex]['datetimerange'] = [this.$moment(event[0]).format("YYYY-MM-DD HH:mm"), this.$moment(event[1]).format("YYYY-MM-DD HH:mm")];
      },
      versionList(){
        this.$emit("versionClick");
      },
      handleChangeBox(data){
        this.flowData[this.flowDetailIndex].items = data;
      },
      changeUpdateClass(data){
        //this.$emit("updateClass", data);
        this.flowData[this.flowDetailIndex]['updateClass'] = data;
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
