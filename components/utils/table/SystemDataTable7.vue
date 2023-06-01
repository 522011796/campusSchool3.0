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
          :label="$t('单号')">
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
          :label="$t('标题名称')">
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
              <div class="text-center">{{ scope.row.applyUserName }}</div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{ scope.row.applyUserName }}
            </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('部门')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">{{ scope.row.userNo }}</div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{ scope.row.userNo }}
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
                {{scope.row.className}}
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{scope.row.className}}
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('付款金额')">
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
        <el-table-column
          align="center"
          :label="$t('已到票')">
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
        <el-table-column
          align="center"
          :label="$t('未到票')">
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
        <el-table-column
          align="center"
          :label="$t('状态')">
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
        <el-table-column
          align="center"
          width="140"
          :label="$t('审批通过时间')">
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
        <el-table-column
          align="center"
          :label="$t('支付时间')">
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
        <el-table-column
          align="center"
          :label="$t('支付账户')">
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
        <el-table-column
          align="center"
          :label="$t('关联凭证')">
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
        <el-table-column
          align="center"
          :label="$t('关联单据')">
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
        <el-table-column
          align="center"
          width="140"
          :label="$t('是否占预算')">
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
    name: 'SystemDataTable7',
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
