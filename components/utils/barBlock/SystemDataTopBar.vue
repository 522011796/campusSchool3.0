<template>
  <div>
    <div class="font-size-12" v-if="formId == '合同管理'">
      <span class="fa fa-book color-grand"></span>
      <span>
        <label>{{$t("合同总额")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("应支付")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("待支付")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("已开票")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("待开票")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
    </div>
    <div class="font-size-12" v-if="formId == '应收应付'">
      <span class="fa fa-book color-grand"></span>
      <span>
        <label>{{$t("合同总额")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("应收/付款总额")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
    </div>
    <div class="font-size-12" v-if="formId == '发票管理'">
      <span class="fa fa-book color-grand"></span>
      <span>
        <label>{{$t("发票总额")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("未税总额")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
    </div>
    <div class="font-size-12" v-if="formId == '交易流水'">
      <span class="fa fa-book color-grand"></span>
      <span>
        <label>{{$t("账户名称")}}:</label>
        <label class="color-grand">...</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("账户余额")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("昨日收入")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("昨日支出")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
    </div>
    <div class="font-size-12" v-if="formId == '报账/报销'">
      <span class="fa fa-book color-grand"></span>
      <span>
        <label>{{$t("总额")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("已支付")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("待支付")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("审批中")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
    </div>
    <div class="font-size-12" v-if="formId == '对公打款'">
      <span class="fa fa-book color-grand"></span>
      <span>
        <label>{{$t("总额")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("已支付")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("待支付")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("审批中")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("已开票")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("未开票")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
    </div>
    <div class="font-size-12" v-if="formId == '普通申请'">
      <span class="fa fa-book color-grand"></span>
      <span>
        <label>{{$t("申请总额")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
    </div>
    <div class="font-size-12" v-if="formId == '借款管理'">
      <span class="fa fa-book color-grand"></span>
      <span>
        <label>{{$t("借款总额")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span>
        <label>{{$t("已还款")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span>
        <label>{{$t("待还款")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
    </div>
    <div class="font-size-12" v-if="formId == '收款管理'">
      <span class="fa fa-book color-grand"></span>
      <span>
        <label>{{$t("借款总额")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span>
        <label>{{$t("已收款")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span>
        <label>{{$t("待收款")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SystemDataTopBar',
    props: {
      formId: {
        defalult: ''
      },
      objData: {
        defalult: function (){
          return {}
        },
        type: Object
      }
    },
    computed: {

    },
    data() {
      return {

      }
    },
    mounted() {

    },
    created() {

    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
