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
            <span>{{$t("审批节点")}}</span>
          </div>
          <div class="margin-left-5">
            <div class="flow-item-child-block padding-tb-5" @click="selAuditType($event, 1, 'audit')">
              <i class="fa fa-user"></i>
              <span>{{$t("固定人审批")}}</span>
            </div>
            <div class="flow-item-child-block padding-tb-5" @click="selAuditType($event, 2, 'audit')">
              <i class="fa fa-cog"></i>
              <span>{{$t("系统角色审批")}}</span>
            </div>
            <div v-if="customUserStatus == false" class="flow-item-child-block padding-tb-5" @click="selAuditType($event, 3, 'audit')">
              <i class="fa fa-flag"></i>
              <span>{{$t("发起人自选审批")}}</span>
            </div>
          </div>
        </div>
        <div class="margin-top-5">
          <div class="color-muted">
            <span>{{$t("抄送节点")}}</span>
          </div>
          <div class="margin-left-5">
            <div class="flow-item-child-block padding-tb-5" @click="selAuditType($event, 4, 'send')">
              <i class="fa fa-user"></i>
              <span>{{$t("抄送给固定人")}}</span>
            </div>
            <div class="flow-item-child-block padding-tb-5" @click="selAuditType($event, 5, 'send')">
              <i class="fa fa-cog"></i>
              <span>{{$t("抄送给系统角色")}}</span>
            </div>
<!--            <div class="flow-item-child-block padding-tb-5" @click="selAuditType($event, 6, 'send')">-->
<!--              <i class="fa fa-flag"></i>-->
<!--              <span>{{$t("自选抄送人")}}</span>-->
<!--            </div>-->
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
    name: 'myFormAuditType',
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
      selAuditType(event, type, extra){
        this.popVisible = false;
        this.$emit("click", type, extra, parseInt(this.itemIndex));
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
