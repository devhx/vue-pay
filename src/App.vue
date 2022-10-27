<template>
  <div id="wrapper">
    <home/>
  </div>
</template>

<script setup>
import home from './views/index.vue'
</script>

<style lang="scss">
#wrapper {
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
