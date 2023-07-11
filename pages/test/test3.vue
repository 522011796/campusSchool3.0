<template>
  <div class="container">
    <div style="background: #FFFFFF">
      <area-and-sel-tree-list ref="areaRef" :height="450"></area-and-sel-tree-list>
    </div>

    <div>
      <el-button @click="submit">submit</el-button>
    </div>
  </div>
</template>

<script>
  import AreaAndSelTreeList from "~/components/utils/treeAndList/AreaAndSelTreeList.vue";

  export default {
    name: 'test3',
    components: {AreaAndSelTreeList},
    data(){
      return {
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
        console.log(this.$refs.areaRef.getCurrentSettingData());
      }
    }
  }
</script>

<style scoped>
.container {
  padding: 10px;
}
</style>
