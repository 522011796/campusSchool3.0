<template>
  <div class="container">
    <div style="background: #FFFFFF">
      <area-and-sel-tree-list ref="areaRef" :height="450"></area-and-sel-tree-list>
    </div>

    <div>
      <el-button @click="submit">submit</el-button>
      <el-button @click="showTeacher">teacherList</el-button>
    </div>

    <teacher-dialog-tree-list size="800px" title="xxx" set-type="check" :dialog-visible="dialogTeacher" @closeParentDialog="closeTeacherDialog" @okDrawDialog="okDrawDialog"></teacher-dialog-tree-list>
  </div>
</template>

<script>
  import AreaAndSelTreeList from "~/components/utils/treeAndList/AreaAndSelTreeList.vue";
  import TeacherDialogTreeList from "~/components/utils/treeAndList/TeacherDialogTreeList.vue";
  import dialog from "element-ui/packages/dialog";

  export default {
    name: 'test3',
    computed: {
      dialog() {
        return dialog
      }
    },
    components: {TeacherDialogTreeList, AreaAndSelTreeList},
    data(){
      return {
        dialogTeacher: false,
        form: {
          oprType: '',
          rangeType: '0',
          id: '',
          deptSuperId: '',
          superName: '',
          name: '',
          no: '',
          process: '',
          userRange: [],
          deptRange: [],
          roleRange: [],
          userEditRange: []
        }
      }
    },
    methods: {
      submit(){
        if (this.$refs['areaRef']){
          console.log(this.$refs.areaRef.getCurrentSettingData());
        }
      },
      showTeacher(){
        this.dialogTeacher = true;
      },
      closeTeacherDialog(){
        this.dialogTeacher = false;
      },
      okDrawDialog(data){
        console.log(data);
      }
    }
  }
</script>

<style scoped>
.container {
  padding: 10px;
}
</style>
