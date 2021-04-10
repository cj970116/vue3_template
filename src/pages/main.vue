<template>
  <div class="main-conmtainer">
    <img alt="Vue logo" src="../assets/logo.png" />
    <span>Main</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    setup() {
      let name = 'cjee'
      return {}
    }
  })
</script>

<style lang="postcss" scoped>
  .main-conmtainer {
    @apply container flex flex-col items-center bg-green-300 h-screen;
    img {
      @apply w-60;
    }
    span {
      @apply text-white text-4xl;
    }
  }
  /* .main-conmtainer img {
    @apply w-20;
  } */
</style>
