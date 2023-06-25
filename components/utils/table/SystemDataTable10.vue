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
          :label="$t('标题名称')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                {{ scope.row.applyData['jk_name20230501'] ? (scope.row.applyData.jk_name20230501.value ? scope.row.applyData.jk_name20230501.value : '--') : '--' }}
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{ scope.row.applyData['jk_name20230501'] ? (scope.row.applyData.jk_name20230501.value ? scope.row.applyData.jk_name20230501.value : '--') : '--' }}
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('单号')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">{{ scope.row.formApplyNo }}</div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{ scope.row.formApplyNo }}
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
                {{$moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm:ss")}}
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{$moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm:ss")}}
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('借款金额')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                {{ scope.row.applyData['cost_allAmount20230501'] ? (scope.row.applyData.cost_allAmount20230501.value ? scope.row.applyData.cost_allAmount20230501.value : '--') : '--' }}
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{ scope.row.applyData['cost_allAmount20230501'] ? (scope.row.applyData.cost_allAmount20230501.value ? scope.row.applyData.cost_allAmount20230501.value : '--') : '--' }}
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
                <label>{{auditStatusTextInfo(scope.row.status)}}</label>
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                <label>{{auditStatusTextInfo(scope.row.status)}}</label>
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('还款状态')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                <span v-if="scope.row['off_apply20230501']" class="color-success">
                  {{$t("已支付")}}
                </span>
                <label v-else  class="color-danger">{{$t("未支付")}}</label>
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                <span v-if="scope.row['off_apply20230501']" class="color-success">
                  {{$t("已支付")}}
                </span>
                <label v-else  class="color-danger">{{$t("未支付")}}</label>
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('已还金额')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                {{ scope.row.applyData['cost_repaidAmount'] ? (scope.row.applyData.cost_repaidAmount.value ? scope.row.applyData.cost_repaidAmount.value : '--') : '--' }}
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{ scope.row.applyData['cost_repaidAmount'] ? (scope.row.applyData.cost_repaidAmount.value ? scope.row.applyData.cost_repaidAmount.value : '--') : '--' }}
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('待还金额')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                {{ scope.row.applyData['cost_notAmount'] ? (scope.row.applyData.cost_notAmount.value ? scope.row.applyData.cost_notAmount.value : '--') : '--' }}
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{ scope.row.applyData['cost_notAmount'] ? (scope.row.applyData.cost_notAmount.value ? scope.row.applyData.cost_notAmount.value : '--') : '--' }}
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
                {{scope.row.handleTime ? $moment(scope.row.handleTime).format("YYYY-MM-DD HH:mm:ss") : '--'}}
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{scope.row.handleTime ? $moment(scope.row.handleTime).format("YYYY-MM-DD HH:mm:ss") : '--'}}
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="$t('还款日期')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                {{ scope.row.applyData['hk_date20230501'] ? (scope.row.applyData.hk_date20230501.value ? scope.row.applyData.hk_date20230501.value : '--') : '--' }}
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{ scope.row.applyData['hk_date20230501'] ? (scope.row.applyData.hk_date20230501.value ? scope.row.applyData.hk_date20230501.value : '--') : '--' }}
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <!--        <el-table-column-->
        <!--          align="center"-->
        <!--          :label="$t('支付账户')">-->
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
          :label="$t('关联项目')">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
              <div class="text-center">
                {{ scope.row.applyData['xm_id20230501'] ? (scope.row.applyData.xm_id20230501.name ? scope.row.applyData.xm_id20230501.name : '--') : '--' }}
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{ scope.row.applyData['xm_id20230501'] ? (scope.row.applyData.xm_id20230501.name ? scope.row.applyData.xm_id20230501.name : '--') : '--' }}
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
                {{ scope.row.applyData['borrow_apply20230501'] ? (scope.row.applyData.borrow_apply20230501.value ? scope.row.applyData.borrow_apply20230501.value : '--') : '--' }}
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                <a v-if="scope.row.applyData['borrow_apply20230501'] && scope.row.applyData.borrow_apply20230501.value" href="javascript:;" class="color-grand" @click="detailInfo(scope.row)">{{scope.row.applyData.borrow_apply20230501.value}}</a>
                <span v-else>--</span>
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
                <label v-if="scope.row.applyData['has_budget20230501'] && scope.row.applyData['has_budget20230501']['value'] == true"
                         class="color-success">{{ $t("是") }}</label>
                <label v-else-if="scope.row.applyData['has_budget20230501'] && scope.row.applyData['has_budget20230501']['value'] == false"
                       class="color-danger">{{ $t("否") }}</label>
                <label v-else>--</label>
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                <label v-if="scope.row.applyData['has_budget20230501'] && scope.row.applyData['has_budget20230501']['value'] == true"
                       class="color-success">{{ $t("是") }}</label>
                <label v-else-if="scope.row.applyData['has_budget20230501'] && scope.row.applyData['has_budget20230501']['value'] == false"
                       class="color-danger">{{ $t("否") }}</label>
                <label v-else>--</label>
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
                {{ scope.row.applyData['tag_id20230501'] ? (scope.row.applyData.tag_id20230501.name ? scope.row.applyData.tag_id20230501.name : '--') : '--' }}
              </div>
              <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                {{ scope.row.applyData['tag_id20230501'] ? (scope.row.applyData.tag_id20230501.name ? scope.row.applyData.tag_id20230501.name : '--') : '--' }}
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          width="100"
          fixed="right"
          :label="$t('操作')">
          <template slot-scope="scope">
            <i class="fa fa-file-text margin-right-5 color-grand" @click="detailListInfo(scope.row)"></i>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
  import {auditStatusText} from "~/utils/utils";

  export default {
    name: 'SystemDataTable10',
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
      auditStatusTextInfo(str){
        return auditStatusText(str);
      },
      detailInfo(row){
        this.$emit('detailInfo', row);
      },
      deleteInfo(row){
        this.$emit('deleteInfo', row);
      },
      detailListInfo(row){
        this.$emit('detailListInfo', row);
      },
      printManage(row){
        this.$emit('printManage', row);
      },
    }
  }
</script>

<style scoped>

</style>
