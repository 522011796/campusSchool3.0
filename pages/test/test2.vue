<template>
  <div class="container">
    <div>test2</div>
  </div>
</template>

<script>
  import mixins from "../../utils/mixins";
  export default {
    name: 'test2',
    mixins: [mixins],
    data(){
      return {

      }
    },
    created() {
      console.log(this.page);
    },
    methods: {

    }
  }
</script>

<style scoped>
.container {

}
</style>
