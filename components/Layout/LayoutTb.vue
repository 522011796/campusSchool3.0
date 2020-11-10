<template>
  <div>
    <div class="color-muted font-size-12 padding-top-5">
      <span class="layout-menu-title">
        <slot name="tag"></slot>
      </span>
    </div>

    <div class="layout-top-tab margin-top-5">
      <slot name="tab"></slot>
    </div>

    <div class="margin-top-10">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutTb',
  data(){
    return {

    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style>

</style>
