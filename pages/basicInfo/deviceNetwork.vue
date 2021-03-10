<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">设备网络配置</template>

      <div slot="content" class="bg-f5f5f5">
        <div class="margin-top-10 padding-tb-10">
          <el-form :model="formConf" :rules="rulesConf" ref="formConf" label-width="140px">
            <el-form-item :label="$t('IP地址')">
              <el-row>
                <el-col :span="6">
                  <el-form-item prop="ipStart">
                    <el-input v-model="formConf.ipStart" class="width-260"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="1" class="text-center">
                  -
                </el-col>
                <el-col :span="6">
                  <el-form-item prop="ipEnd">
                    <el-input v-model="formConf.ipEnd" class="width-260"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item :label="$t('子网掩码')" prop="netmask">
              <el-input v-model="formConf.netmask" class="width-260"></el-input>
            </el-form-item>
            <el-form-item :label="$t('网关')" prop="gateway">
              <el-input v-model="formConf.gateway" class="width-260"></el-input>
            </el-form-item>
            <el-form-item :label="$t('首选DNS')" prop="dns1">
              <el-input v-model="formConf.dns1" class="width-260"></el-input>
            </el-form-item>
            <el-form-item :label="$t('备选DNS')" prop="dns2">
              <el-input v-model="formConf.dns2" class="width-260"></el-input>
            </el-form-item>
          </el-form>

          <div class="padding-lr-10 text-center">
            <el-button size="small" type="primary" :loading="loading" @click="okConfDialog">{{$t("设置")}}</el-button>
          </div>
        </div>
      </div>
    </layout-tb>
  </div>
</template>

<script>
  import mixins from "../../utils/mixins";
  import {common} from "../../utils/api/url";
  import {MessageError, MessageSuccess} from "../../utils/utils";
  import deviceNetworkValidater from "../../utils/validater/deviceNetworkValidater";
export default {
  mixins: [mixins, deviceNetworkValidater],
  components: {},
  data(){
    return {
      formConf: {
        ipStart: '',
        ipEnd: '',
        gateway: '',
        netmask: '',
        dns1: '',
        dns2: '',
      },
      loading: false
    }
  },
  created() {
    this.init();
  },
  methods: {
    init(row){
      this.$axios.get(common.device_get).then(res => {
        if (res.data.data){
          this.formConf = {
            ipStart: res.data.data.ipStart,
            ipEnd: res.data.data.ipEnd,
            gateway: res.data.data.gateway,
            netmask: res.data.data.netmask,
            dns1: res.data.data.dns1,
            dns2: res.data.data.dns2,
          };
        }
      });
    },
    okConfDialog(){
      this.$refs['formConf'].validate((valid) => {
        if (valid) {
          let params = {
            ipStart: this.formConf.ipStart,
            ipEnd: this.formConf.ipEnd,
            gateway: this.formConf.gateway,
            netmask: this.formConf.netmask,
            dns1: this.formConf.dns1,
            dns2: this.formConf.dns2,
          };

          params = this.$qs.stringify(params);
          this.loading = true;
          this.$axios.post(common.device_set, params).then(res => {
            if (res.data.code == 200){
              this.init();
              MessageSuccess(res.data.desc);
            }else {
              MessageError(res.data.desc);
            }
            this.loading = false;
          });
        }
      });
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
</style>
