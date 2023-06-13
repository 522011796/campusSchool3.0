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
          :label="$t('名称')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">{{ scope.row.applyData.xm_name20230501.value }}</div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{ scope.row.applyData.xm_name20230501.value }}
            </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('编号')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">{{ scope.row.applyData.xm_no20230501.value }}</div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{ scope.row.applyData.xm_no20230501.value }}
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('所属部门')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                <label v-if="scope.row.applyData['xm_applyDept20230501']" v-for="(item, index) in scope.row.applyData.xm_applyDept20230501.deptName" :key="index">
                  <template>
                    {{item}}
                  </template>
                  <template v-if="index != scope.row.applyData.xm_applyDept20230501.deptName.length-1">/</template>
                </label>
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                <label v-if="scope.row.applyData['xm_applyDept20230501']" v-for="(item, index) in scope.row.applyData.xm_applyDept20230501.deptName" :key="index">
                  <template>{{item}}</template>
                  <template v-if="index != scope.row.applyData.xm_applyDept20230501.deptName.length-1">/</template>
                </label>
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('类型')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">{{ objectTypeInfo(scope.row.applyData.xm_type20230501.value, 'set') }}</div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{ objectTypeInfo(scope.row.applyData.xm_type20230501.value, 'set') }}
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('审批状态')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">{{ auditStatusTextInfo(scope.row.status) }}</div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{ auditStatusTextInfo(scope.row.status) }}
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('项目状态')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                {{ objectStatusInfo(scope.row.applyData.xm_status20230501.value, 'set') }}
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{ objectStatusInfo(scope.row.applyData.xm_status20230501.value, 'set') }}
              </span>
            </el-popover>
          </template>
        </el-table-column>
<!--        <el-table-column-->
<!--          align="center"-->
<!--          :label="$t('周期')">-->
<!--          <template slot-scope="scope">-->
<!--            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">-->
<!--              <div class="text-center">-->
<!--                <label v-if="scope.row.userType == 4">{{scope.row.departmentName}}</label>-->
<!--                <label v-else>{{scope.row.className}}</label>-->
<!--              </div>-->
<!--              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">-->
<!--              <label v-if="scope.row.userType == 4">{{scope.row.departmentName}}</label>-->
<!--              <label v-else>{{scope.row.className}}</label>-->
<!--            </span>-->
<!--            </el-popover>-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          align="center"-->
<!--          :label="$t('已占/预算')">-->
<!--          <template slot-scope="scope">-->
<!--            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">-->
<!--              <div class="text-center">-->
<!--                <label v-if="scope.row.userType == 4">{{scope.row.departmentName}}</label>-->
<!--                <label v-else>{{scope.row.className}}</label>-->
<!--              </div>-->
<!--              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">-->
<!--                <label v-if="scope.row.userType == 4">{{scope.row.departmentName}}</label>-->
<!--                <label v-else>{{scope.row.className}}</label>-->
<!--              </span>-->
<!--            </el-popover>-->
<!--          </template>-->
<!--        </el-table-column>-->
        <el-table-column
          align="center"
          width="100"
          fixed="right"
          :label="$t('操作')">
          <template slot-scope="scope">
            <i class="fa fa-edit margin-right-5 color-success" v-if="scope.row.status == -1 || scope.row.status == 4" @click="editInfo(scope.row)"></i>
            <i class="fa fa-file-text margin-right-5 color-grand" v-if="scope.row.status != -1 && scope.row.status != 4" @click="detailInfo(scope.row)"></i>
            <i class="fa fa-trash margin-right-5 color-danger" @click="deleteInfo(scope.row)"></i>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import {auditStatusText, objectStatus, objectType} from "~/utils/utils";

  export default {
    name: 'SystemDataTable1',
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
      objectTypeInfo(str, type){
        return objectType(type, str);
      },
      objectStatusInfo(str, type){
        return objectStatus(type, str);
      },
      auditStatusTextInfo(str){
        return auditStatusText(str);
      },
      editInfo(row){
        this.$emit('editInfo', row);
      },
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
