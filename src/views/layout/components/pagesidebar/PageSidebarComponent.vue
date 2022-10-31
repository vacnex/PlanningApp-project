<script setup lang="ts">
</script>
<template>
  <section class="sidebar my-1 d-flex flex-column gap-2">
    <TeamPinListComponent />
    <SelfPinListComponent />
  </section>
</template>

<style scoped>
.sidebar {
  background-color: var(--el-bg-color-1);
  border-bottom: .5px solid var(--el-bg-color-2);
  border-left: .5px solid var(--el-bg-color-2);
  border-top: .5px solid var(--el-bg-color-2);

  box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);
  backdrop-filter: blur(80px);

  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
  padding: 16px 18px;
  max-width: 20vw;
  min-width: 20vw;
}
</style>