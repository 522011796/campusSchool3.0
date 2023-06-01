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
          :label="$t('发票号码')">
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
          :label="$t('发票名称')">
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
          :label="$t('所属人')">
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
          :label="$t('发票总额')">
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
          :label="$t('税率')">
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
          :label="$t('税额')">
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
          :label="$t('未税额')">
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
          :label="$t('发票抬头')">
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
          :label="$t('销售方')">
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
          :label="$t('开票日期')">
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
          :label="$t('来源')">
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
          :label="$t('验真')">
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
          :label="$t('关联费用')">
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
          :label="$t('单据状态')">
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
          width="160"
          :label="$t('关联财务凭证号')">
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
    name: 'SystemDataTable4',
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
