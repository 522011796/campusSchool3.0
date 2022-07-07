<template>
  <div>
    <el-popover
      placement="right"
      width="100"
      trigger="hover"
      @show="showPop"
      v-model="popVisible">
      <div class="font-size-12">
        <div class="">
          <div class="color-muted">
            <span>{{$t("线下流程")}}</span>
          </div>
          <div class="margin-left-5">
            <div class="flow-item-child-block padding-tb-5" @click="selAuditType($event, 1, 'audit', 0)">
              <i class="fa fa-user"></i>
              <span>{{$t("现场报道")}} ({{$t("系统")}})</span>
            </div>
            <div class="flow-item-child-block padding-tb-5" @click="selAuditType($event, 3, 'audit', 0)">
              <i class="fa fa-cog"></i>
              <span>{{$t("现场缴费")}} ({{$t("系统")}})</span>
            </div>
            <div class="flow-item-child-block padding-tb-5" @click="selAuditType($event, 5, 'audit', 0)">
              <i class="fa fa-cog"></i>
              <span>{{$t("打印报道单")}} ({{$t("系统")}})</span>
            </div>
            <div class="flow-item-child-block padding-tb-5" @click="selAuditType($event, 9, 'send', 0)">
              <i class="fa fa-cog"></i>
              <span>{{$t("自定义环节")}}</span>
            </div>
          </div>
        </div>
        <div class="margin-top-5">
          <div class="color-muted">
            <span>{{$t("线上流程")}}</span>
          </div>
          <div class="margin-left-5">
            <div class="flow-item-child-block padding-tb-5" @click="selAuditType($event, 4, 'send', 1)">
              <i class="fa fa-user"></i>
              <span>{{$t("信息采集")}} ({{$t("系统")}})</span>
            </div>
            <div class="flow-item-child-block padding-tb-5" @click="selAuditType($event, 0, 'send', 1)">
              <i class="fa fa-cog"></i>
              <span>{{$t("接站登记")}} ({{$t("系统")}})</span>
            </div>
            <div class="flow-item-child-block padding-tb-5" @click="selAuditType($event, 2, 'send', 1)">
              <i class="fa fa-cog"></i>
              <span>{{$t("线上选寝")}} ({{$t("系统")}})</span>
            </div>
            <div class="flow-item-child-block padding-tb-5" @click="selAuditType($event, 9, 'send', 1)">
              <i class="fa fa-cog"></i>
              <span>{{$t("自定义环节")}}</span>
            </div>
          </div>
        </div>
      </div>
      <span class="flow-item-line-block" slot="reference">
        <i class="fa fa-plus-circle color-muted" @click="addPop" style="font-size: 25px"></i>
      </span>
    </el-popover>
  </div>
</template>

<script>
  export default {
    name: 'MyNewStudentFlowType',
    props: {
      itemIndex: {
        type: [Number, String],
        default: 0
      },
      customUserStatus: {
        type: Boolean,
        default: false
      }
    },
    computed: {

    },
    data() {
      return {
        popVisible: false,
        value: ''
      }
    },
    methods: {
      addPop(){
        this.popVisible = true;
      },
      selAuditType(event, type, extra, subType){
        this.popVisible = false;
        this.$emit("click", type, extra, parseInt(this.itemIndex), subType);
      },
      showPop(){
        this.$emit("showPop");
      }
    }
  }
</script>

<style scoped>
.flow-item-line-block{
  position: relative;
}
.flow-item-line-block:after {
  content: "";
  width: 1px;
  height: 15px;
  position: absolute;
  top: -24px;
  left: 10px;
  background: #dcdfe6;
}
.flow-item-line-block:before {
  content: "";
  width: 1px;
  height: 15px;
  position: absolute;
  top: 19px;
  left: 10px;
  background: #dcdfe6;
}
.flow-item-child-block:hover{
  background: #eeeeee;
}
</style>
