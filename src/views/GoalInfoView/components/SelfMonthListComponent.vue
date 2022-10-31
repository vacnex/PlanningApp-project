<script setup lang='ts'>
import { Plus } from '@element-plus/icons-vue';
</script>

<template>
  <div class="d-flex flex-column p-2 gap-2">
    <div class="d-flex align-items-center justify-content-between">
      <div class="fs-4 fw-bold">
        <span>Mục tiêu tháng cá nhân</span>
      </div>
      <div>
        <el-button type="primary" :icon="Plus">
          Thêm
        </el-button>
      </div>
    </div>
    <div>
      <el-scrollbar height="75vh" view-class="d-flex flex-column gap-3 p-2">
        <SelfMonthItemComponent v-for="item in 10" :key="item" />
      </el-scrollbar>
    </div>
  </div>
</template>

<style scoped>
</style>
  