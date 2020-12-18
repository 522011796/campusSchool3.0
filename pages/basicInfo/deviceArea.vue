<template>
  <div class="container">
    deviceArea
  </div>
</template>

<script>
  import LayoutLr from "../../components/Layout/LayoutLr";
  import MyElTree from "../../components/tree/MyElTree";
  import MyInputButton from "../../components/search/MyInputButton";
  import MyPagination from "../../components/MyPagination";
  import DialogNormal from "../../components/utils/dialog/DialogNormal";
  import MyNormalDialog from "../../components/utils/dialog/MyNormalDialog";
  import DrawerRight from "../../components/utils/dialog/DrawerRight";
  import MySelect from "../../components/MySelect";
  import mixins from "../../utils/mixins";
  import {common} from "../../utils/api/url";
  import {MessageError, MessageSuccess} from "../../utils/utils";
  import classroomValidater from "../../utils/validater/classroomValidater";
  export default {
    mixins: [mixins, classroomValidater],
    components: {MyElTree,MyInputButton,MyPagination,LayoutLr,DialogNormal,MyNormalDialog,DrawerRight,MySelect},
    data(){
      return {
        drawerVisible: false,
        visibleConfim: false,
        dialogLoading: false,
        subDetail: '',
      }
    },
    created() {

    },
    methods: {

    }
  }
</script>

<style>
.container {

}
</style>
