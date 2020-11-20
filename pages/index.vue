<template>
  <div class="container">
    <div v-for="n in 100" :key="n">{{n}}</div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data(){
      return {

      }
    },
    created() {
      this.layoutInit();
    },
    methods: {
      layoutInit(){
        this.$parent.$parent.layout = 'full';
      },
    }
  }
</script>

<style scoped>
.container {

}
</style>
