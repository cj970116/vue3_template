<template>
  <div class="main-conmtainer">
    <img alt="Vue logo" src="../assets/logo.png" />
    <span>Main</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, getCurrentInstance } from 'vue'
  import { getDicDTOListByType } from '../interfaces/system'
  export default defineComponent({
    setup() {
      onMounted(() => {
        const { proxy }: any = getCurrentInstance()
        console.log(proxy.$config)
      })
      return {}
    }
  })
</script>

<style lang="postcss" scoped>
  .main-conmtainer {
    @apply flex flex-col items-center bg-green-300 h-screen box-border p-1;
    img {
      @apply w-10;
    }
    span {
      font-size: 50px;
      @apply text-white;
    }
  }
  /* .main-conmtainer img {
    @apply w-20;
  } */
</style>
