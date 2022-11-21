<template>
  <span>
    <template>
      <span v-if="status === 0">
        <label class="color-muted">{{$t("审批中")}}</label>
      </span>
      <span v-if="status == 3">
        <label class="color-success">{{$t("处分中")}}</label>
      </span>
      <span v-if="status == 4">
        <label class="color-warning">{{$t("已驳回")}}</label>
      </span>
      <span v-if="status == 5">
        <label class="color-warning">{{$t("已逾期")}}</label>
      </span>
      <span v-if="status == 8">
        <label class="color-warning">{{$t("已解除")}}</label>
      </span>
    </template>
  </span>
</template>

<script>
  export default {
    name: 'myAuditPuStatus',
    props: {
      status: {
        default: 0,
        type: [String, Number]
      },
      handler: {
        default: '',
        type: String, Number
      }
    },
    computed: {
      selectModel(){

      }
    },
    data() {
      return {
        value: ''
      }
    },
    methods: {

    }
  }
</script>
