<template>
  <div>
    <div class="font-size-12" v-if="formId == '采购合同单' || formId == '销售合同单' || formId == '通用合同单'">
      <span class="fa fa-book color-grand"></span>
      <span>
        <label>{{$t("合同总额")}}:</label>
        <label class="color-grand">{{objData.totalAmount}}</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("应支付")}}:</label>
        <label class="color-grand">{{objData.shouldAmount}}</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("待支付")}}:</label>
        <label class="color-grand">{{objData.waitAmount}}</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("已开票")}}:</label>
        <label class="color-grand">{{objData.invoiceAmount}}</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("待开票")}}:</label>
        <label class="color-grand">{{objData.notInvoiceAmount}}</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
    </div>
    <div class="font-size-12" v-if="formId == '应收应付'">
      <span class="fa fa-book color-grand"></span>
      <span>
        <label>{{$t("合同总额")}}:</label>
        <label class="color-grand">{{objData.invoiceAmount}}</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("应收/付款总额")}}:</label>
        <label class="color-grand">{{objData.shouldAmount}}</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
    </div>
    <div class="font-size-12" v-if="formId == '发票管理'">
      <span class="fa fa-book color-grand"></span>
      <span>
        <label>{{$t("发票总额")}}:</label>
        <label class="color-grand">{{objData.totalAmount}}</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("未税总额")}}:</label>
        <label class="color-grand">{{objData.unTaxAmount}}</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
    </div>
    <div class="font-size-12" v-if="formId == '交易流水'">
      <span class="fa fa-book color-grand"></span>
      <span>
        <label>{{$t("账户名称")}}:</label>
        <el-dropdown trigger="click" @command="_handleChange">
          <span class="el-dropdown-link font-size-12 color-grand">
            {{ accountValue == '' ? $t("请选择账户") : accountValue  }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in extraData" :key="index" :command="item">
              {{item.account_name}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
      <span class="margin-left-10">
        <label>{{$t("昨日收入")}}:</label>
        <label class="color-grand">{{objData.intAmount}}</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
      <span class="margin-left-10">
        <label>{{$t("昨日支出")}}:</label>
        <label class="color-grand">{{objData.outAmount}}</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
    </div>
    <div class="font-size-12" v-if="formId == '报账/报销单'">
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
    <div class="font-size-12" v-if="formId == '对公打款单'">
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
    <div class="font-size-12" v-if="formId == '普通申请单'">
      <span class="fa fa-book color-grand"></span>
      <span>
        <label>{{$t("申请总额")}}:</label>
        <label class="color-grand">0</label>
        <label class="color-grand">{{$t("元")}}</label>
      </span>
    </div>
    <div class="font-size-12" v-if="formId == '借款单'">
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
    <div class="font-size-12" v-if="formId == '收款单'">
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
    <div class="font-size-12" v-if="formId == '还款单'">
      <span class="fa fa-book color-grand"></span>
      <span>
        <label>{{$t("还款总额")}}:</label>
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
  </div>
</template>

<script>
  import Ar from "element-ui/src/locale/lang/ar";

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
      },
      extraData: {
        defalult: function (){
          return []
        },
        type: Array
      }
    },
    computed: {

    },
    data() {
      return {
        accountValue: '',
        accountId: ''
      }
    },
    mounted() {
      this._initExtra();
    },
    created() {

    },
    methods: {
      _initExtra(){
        this.accountValue = this.extraData.length > 0 ? this.extraData[0].account_name : '';
      },
      _handleChange(event){
        this.accountValue = event.account_name;
        this.accountId = event.account_id;

        this.$emit('handleChange', event.account_id);
      }
    }
  }
</script>

<style scoped>

</style>
