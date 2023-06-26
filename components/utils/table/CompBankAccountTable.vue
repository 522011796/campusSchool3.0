<template>
  <div>
    <el-table
      ref="refTable"
      :data="tableData"
      header-cell-class-name="custom-table-cell-bg"
      size="medium"
      :max-height="tableHeight"
      style="width: 100%">

      <template>
        <el-table-column
          align="center"
          :label="$t('账户类型')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">{{ accountTypeInfo(scope.row.account_type, 'set') }}</div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{ accountTypeInfo(scope.row.account_type, 'set') }}
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('户名')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">{{ scope.row.account_name ? scope.row.account_name : '--' }}</div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{ scope.row.account_name ? scope.row.account_name : '--' }}
            </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('开户行')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">{{ scope.row.bank_name ? scope.row.bank_name : '--' }}</div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{ scope.row.bank_name ? scope.row.bank_name : '--' }}
            </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('账号')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">{{ scope.row.account_num ? scope.row.account_num : '--' }}</div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{ scope.row.account_num ? scope.row.account_num : '--' }}
            </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('可见范围')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                <label v-if="scope.row.range_type == 0">{{$t("全部可见")}}</label>
                <label v-if="scope.row.range_type == 1">{{$t("部分可见")}}</label>
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <label v-if="scope.row.range_type == 0">{{$t("全部可见")}}</label>
                  <label v-if="scope.row.range_type == 1">{{$t("部分可见")}}</label>
                </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('操作')">
          <template slot-scope="scope">
            <a href="javascript:;" class="color-success" @click="editInfo(scope.row)">{{$t("编辑")}}</a>
            ｜
            <a href="javascript:;" class="color-danger margin-left-5" @click="deleteInfo(scope.row)">{{$t("删除")}}</a>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
  import {accountType} from "~/utils/utils";

  export default {
    name: 'CompBankAccountTable',
    props: {
      formId: {
        defalult: ''
      },
      tableData: {
        defalult: function (){
          return []
        },
        type: Array
      },
      tableHeight: ''
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
      accountTypeInfo(str, type){
        return accountType(str, type);
      },
      detailInfo(row){
        this.$emit('detailInfo', row);
      },
      addInfo(row){
        this.$emit('addInfo', row);
      },
      editInfo(row){
        this.$emit('editInfo', row);
      },
      deleteInfo(row){
        this.$emit('deleteInfo', row);
      },
      printManage(row){
        this.$emit('printManage', row);
      },
    }
  }
</script>

<style scoped>

</style>
