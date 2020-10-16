<template>
  <div class="detail-card" :selectModel="selectModel">
    <el-timeline>
      <el-timeline-item color="#0bbd87" :timestamp="''+value.apply_time" placement="top">
        <div slot="dot" class="text-center" style="position: relative; left: -5px;font-size: 12px;height: 18px;width: 18px;border-radius: 18px;background: #67C23A;vertical-align: center">
          <i class="el-icon-s-promotion color-white" style="position: relative; top: 2px"></i>
        </div>
        <!--<credit-detail :sel-value="value"></credit-detail>-->
        <!--<repu-detail :sel-value="value"></repu-detail>-->
        <stuleave-detail :sel-value="value"></stuleave-detail>
        <!--<terleave-detail :sel-value="value"></terleave-detail>-->
      </el-timeline-item>

      <div class="detail-group-card">
        <el-timeline-item v-for="(item, index) in value.handleList" :key="item.id" placement="top">
          <span slot="dot" style="position: relative; left: -5px;font-size: 12px">
            <el-badge :value="item.orderIndex" class="item" type="success"></el-badge>
          </span>
          <el-card v-for="(itemChild, index) in item.handleUsers" :key="itemChild.id">
            <div :class="auditColor(itemChild.status)">
              <span>{{item.handleTypeName}}</span>
              <el-divider direction="vertical"></el-divider>
              <span>{{itemChild.handleName}}</span>
              <el-divider direction="vertical"></el-divider>
              <span>{{auditStatus(itemChild.status)}}</span>
              <el-divider direction="vertical"></el-divider>
              <span>{{itemChild.time}}</span>
            </div>
            <div v-if="itemChild.des && itemChild.des != ''" class="color-warning margin-top-10">
              <el-row class="margin-top-10">
                <el-col :span="4">
                  <span>审批意见:</span>
                </el-col>
                <el-col :span="20">
                  <el-tooltip class="item" effect="dark" :content="itemChild.des" placement="top-start" :tabindex="9999">
                    <span>{{itemChild.des}}</span>
                  </el-tooltip>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-timeline-item>
      </div>
    </el-timeline>
  </div>
</template>

<script>
  import CreditDetail from "./CreditDetail";
  import RepuDetail from "./RepuDetail";
  import StuleaveDetail from "./StuleaveDetail";
  import TerleaveDetail from "./TerleaveDetail";
  import {oneOf, auditStatusText, auditStatusColor} from '../../../utils/utils';
  export default {
    name: 'MyAuditDetail',
    components: {CreditDetail, RepuDetail, StuleaveDetail, TerleaveDetail},
    props: {
      selValue: {
        default: function () {
          return {};
        },
        type: Object
      },
      options: {
        default: function () {
          return [];
        },
        type: Array
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
        detailTitle: {},
        widthStyle: null
      }
    },
    methods: {
      auditStatus(val){
        return auditStatusText(val);
      },
      auditColor(val){
        return auditStatusColor(val);
      }
    }
  }
</script>

<style scoped>

</style>
