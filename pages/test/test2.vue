<template>
  <div class="container">
    <div>
      <!--<my-select class="pull-left" :sel-value="selModel" :options="options" :clearable="true" @change="__commonSelFun($event, 'selModel')"></my-select>
      <el-button size="small" @click="clickBtn">btn</el-button>-->
    </div>
  </div>
</template>

<script>
  import mixins from "../../utils/mixins";
  import MySelect from "../../components/MySelect";
  export default {
    name: 'test2',
    mixins: [mixins],
    components: {MySelect},
    data(){
      return {
        selModel: '',
        options: [
          {
            label: '1',
            value: '11'
          },
          {
            label: '2',
            value: '22'
          }
        ]
      }
    },
    created() {

    },
    methods: {
      clickBtn(){
        console.log(this.selModel);
      }
    }
  }
</script>

<style scoped>
.container {

}
</style>
