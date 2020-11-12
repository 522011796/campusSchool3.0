<template>
  <div :selectModel="selectModel">
    <div v-if="value.handle == true">
      <el-button type="success" size="small" plain @click="handleOk">{{$t("同意")}}</el-button>
      <el-button type="warning" size="small" plain @click="handleNo">{{$t("驳回")}}</el-button>
      <el-button type="info" size="small" v-if="value.cancel= true" plain @click="handleCancel">{{$t("撤销")}}</el-button>
    </div>
    <div v-if="value.handle == false">
      <div v-if="value.status == 2" class="bg-danger color-white text-center">
        <span>{{$t("已驳回")}}</span>
      </div>
      <div v-if="value.status == 3" class="bg-success color-white text-center">
        <span>{{$t("已通过")}}</span>
      </div>
      <div v-if="value.status == 4" class="bg-danger color-white text-center">
        <span>{{$t("已驳回")}}</span>
      </div>
      <div v-if="value.status == -1" class="bg-muted color-white text-center">
        <span>{{$t("已撤销")}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {oneOf} from '../../../utils/utils';
  export default {
    name: 'AuditButton',
    props: {
      selValue: {
        default: function () {
          return {};
        },
        type: Object
      }
    },
    computed: {
      selectModel(){
        this.value = this.selValue;
      }
    },
    data() {
      return {
        value: '',
        widthStyle: null,
        widthDesStyle: null
      }
    },
    created() {

    },
    methods: {
      handleOk(data){
        this.$emit('ok', data);
      },
      handleNo(data){
        this.$emit('no', data);
      },
      handleCancel(data){
        this.$emit('cancel', data);
      }
    }
  }
</script>

<style scoped>

</style>
