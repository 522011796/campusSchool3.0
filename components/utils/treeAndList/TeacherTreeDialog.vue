<template>
  <div>
    <drawer-layout-right ref="sysFormRef" tabindex="9999" v-bind="selectModel" @close="closeDialog" @changeDrawer="closeDetailDialog" :visible="dialogVisibleInner" size="600px" :title="title" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">

      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="small" @click="saveForm(1)">{{$t("暂存")}}</el-button>
          <el-button type="primary" size="small" :loading="btnLoading" @click="saveForm(2)">{{$t("提交")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import MySelect from "~/components/MySelect.vue";
  import {common} from "~/utils/api/url";
  import {Toast} from "vant";
  import mixins from "~/utils/mixins";
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight.vue";
  import {Message} from "element-ui";
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import systemServerValidater from "~/utils/validater/systemServerValidater";
  import SystemFormDataInfo from "~/components/utils/serverForm/SystemFormDataInfo.vue";
  import MyDatePicker from "~/components/MyDatePicker.vue";

  export default {
    name: 'TeacherTreeDialog',
    mixins: [mixins],
    components: {},
    props: {
      dialogVisible: {
        default: false,
        type: Boolean
      },
      title: {
        default: '',
        type: String
      }
    },
    computed: {
      selectModel(){
        this.dialogVisibleInner = this.dialogVisible;
      }
    },
    data() {
      return {
        loading: false,
        btnLoading: false,
        dialogVisibleInner: false,
      }
    },
    mounted() {

    },
    created() {

    },
    methods: {
      closeDialog(){

      },
      closeDetailDialog(){

      },
      cancelDrawDialog(){

      },
      saveForm(){
        let params = {};
        this.btnLoading = true;
        this.$axios.post(url, params, {loading: false}).then(res => {
          if (res.data.code == 200){
            this.dialogVisibleInner = false;
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.btnLoading = false;
        });
      }
    },
    watch: {
      dialogVisibleInner: function (value) {
        if (value == true){

        }
      }
    }
  }
</script>

<style scoped>

</style>
