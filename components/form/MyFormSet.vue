<template>
  <div>
    <div class="form-set-main" :style="drawHeight3">
      <div class="pull-left form-set-left">
        <div class="form-set-menu-item" :class="activeSetMenu == 1 ? 'form-set-menu-item-active' : ''" @click="selSetMenu(1)">
          <span>{{$t("基础设置")}}</span>
        </div>
        <div class="form-set-menu-item" :class="activeSetMenu == 2 ? 'form-set-menu-item-active' : ''" @click="selSetMenu(2)">
          <span>{{$t("消息推送")}}</span>
        </div>
        <div class="form-set-menu-item" :class="activeSetMenu == 3 ? 'form-set-menu-item-active' : ''" @click="selSetMenu(3)">
          <span>{{$t("打印模版")}}</span>
        </div>
        <div class="form-set-menu-item" :class="activeSetMenu == 4 ? 'form-set-menu-item-active' : ''" @click="selSetMenu(4)">
          <span>{{$t("权限设置")}}</span>
        </div>
        <div class="form-set-menu-item" :class="activeSetMenu == 5 ? 'form-set-menu-item-active' : ''" @click="selSetMenu(5)">
          <span>{{$t("跨应用取数")}}</span>
        </div>
      </div>
      <div class="form-set-right">
        <div v-if="activeSetMenu == 4">
          <my-form-set-role :formId="formId" :data="roleTableData" @init="initRoleGroup"></my-form-set-role>
        </div>
      </div>
      <div class="moon-clearfix"></div>
    </div>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import MyFormSetRole from "~/components/form/MyFormSetRole";
  import {common} from "~/utils/api/url";

  export default {
    name: 'myFormSet',
    components: {MyFormSetRole},
    mixins: [mixins],
    props: {
      formId: Object
    },
    computed: {

    },
    data() {
      return {
        activeSetMenu: 1,
        roleTableData: [],
      }
    },
    methods: {
      initRoleGroup(){
        let params = {
          page: this.page,
          num:9999,
          searchKey: this.searchKey
        };
        this.$axios.get(common.server_form_template_permission_list, {params: params}).then(res => {
          if (res.data.data){
            this.roleTableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      selSetMenu(index){
        this.activeSetMenu = index;
        if (index == 4){
          this.initRoleGroup();
        }
      },
      initParent(){
        this.$emit('init');
      }
    }
  }
</script>

<style scoped>
.form-set-main{
  box-shadow: 0px 0px 4px #DCDFE6;
  border-right: 1px solid #DCDFE6;
}
.form-set-left{
  width: 200px;
  height: 100%;
  background: #f8f8f8;
  border-right: 1px solid #DCDFE6;
}
.form-set-right{
  margin-left: 201px;
  height: 100%;
}
.form-set-menu-item{
  font-size: 12px;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.form-set-menu-item-active{
  background: #3E8DB8;
  color: #FFFFFF;
}
</style>
