<template>
  <div class="container">
    <div class="layout-left-menu animated fadeInUp">
      <slot name="left">

      </slot>
    </div>

    <div class="layout-right-menu animated fadeInUp">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutLr',
}
</script>

<style scoped>

</style>
