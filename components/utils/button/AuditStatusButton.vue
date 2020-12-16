<template>
  <span>
    <el-button-group>
      <el-button :size="size" :type="searchStatusAuditType == null ? 'primary' : 'default'" @click="handleStausClick(null)">{{$t("全部")}}</el-button>
      <el-button :size="size" :type="searchStatusAuditType == 0 ? 'primary' : 'default'" @click="handleStausClick(0)">{{$t("待审批")}}</el-button>
      <el-button :size="size" :type="searchStatusAuditType == 3 ? 'primary' : 'default'" @click="handleStausClick(3)">{{$t("已通过")}}</el-button>
      <el-button :size="size" :type="searchStatusAuditType == 4 ? 'primary' : 'default'" @click="handleStausClick(4)">{{$t("已驳回")}}</el-button>
    </el-button-group>
  </span>
</template>

<script>
  import {oneOf} from '../../../utils/utils';
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {MessageWarning, MessageSuccess} from "../../../utils/utils";
  export default {
    name: 'auditStatusButton',
    mixins: [mixins],
    props: {
      size: {
        defalult: 'medium',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      }
    },
    computed: {

    },
    data() {
      return {
        searchStatusAuditType: null
      }
    },
    mounted() {

    },
    created() {
      //this.initConfig();
    },
    methods: {
      handleStausClick(data){
        this.searchStatusAuditType = data;
        this.$emit("click", data);
      }
    }
  }
</script>

<style scoped>

</style>
