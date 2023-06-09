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
          :label="$t('类型')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">{{ scope.row.formName }}</div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{ scope.row.formName }}
            </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('合同编号')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">{{ $moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm:ss") }}</div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{ $moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm:ss") }}
            </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('合同名称')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">{{ scope.row.formApplyNo ? scope.row.formApplyNo : '--' }}</div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{ scope.row.formApplyNo ? scope.row.formApplyNo : '--' }}
            </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('申请人')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">{{ scope.row.realName }}</div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{ scope.row.realName }}
            </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('部门')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">{{ scope.row.departmentName }}</div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{ scope.row.departmentName }}
            </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('提交时间')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                {{ $moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm:ss") }}
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{ $moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm:ss") }}
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('合同总额')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                <label>{{scope.row.payableDataList.invoiceAmount}}</label>
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                <label>{{scope.row.payableDataList.invoiceAmount}}</label>
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('期数')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                <label>{{scope.row.payableDataList.stage}}</label>
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                <label>{{scope.row.payableDataList.stage}}</label>
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          width="120"
          :label="$t('应收/付款')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                <label>{{scope.row.payableDataList.shouldAmount}}</label>
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                <label>{{scope.row.payableDataList.shouldAmount}}</label>
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('开票额')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                <label>{{scope.row.payableDataList.invoiceAmount}}</label>
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                <label>{{scope.row.payableDataList.invoiceAmount}}</label>
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('逾期状态')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                <label v-if="scope.row.payableDataList.overdueStatus === 0" class="color-success">{{$t("未逾期")}}</label>
                <label v-if="scope.row.payableDataList.overdueStatus === 1" class="color-danger">{{$t("已逾期")}}</label>
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                <label v-if="scope.row.payableDataList.overdueStatus === 0" class="color-success">{{$t("未逾期")}}</label>
                <label v-if="scope.row.payableDataList.overdueStatus === 1" class="color-danger">{{$t("已逾期")}}</label>
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('逾期天数')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                <label>scope.row.payableDataList.overdueDays</label>
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                <label>scope.row.payableDataList.overdueDays</label>
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('关联项目')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                <label>scope.row.payableDataList.overdueDays</label>
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                <label>scope.row.payableDataList.overdueDays</label>
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('标签')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                <label v-if="scope.row.userType == 4">{{scope.row.departmentName}}</label>
                <label v-else>{{scope.row.className}}</label>
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                <label v-if="scope.row.userType == 4">{{scope.row.departmentName}}</label>
                <label v-else>{{scope.row.className}}</label>
              </span>
            </el-popover>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'SystemDataTable3',
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
      detailInfo(row){
        this.$emit('detailInfo', row);
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
