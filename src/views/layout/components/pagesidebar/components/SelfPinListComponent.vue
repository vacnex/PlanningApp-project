<script setup lang='ts'>

</script>

<template>
  <div class="d-flex flex-column">
    <div class="selfpin-header-text fw-bold">
      <span>Ghim Cá nhân</span>
    </div>
    <div class="selfpin-content">
      <el-scrollbar height="260px" view-class="d-flex flex-column gap-2 p-2">
        <SelfPinItemComponent v-for="item in 6" :key="item" />
      </el-scrollbar>
    </div>
  </div>
</template>

<style scoped>

</style>