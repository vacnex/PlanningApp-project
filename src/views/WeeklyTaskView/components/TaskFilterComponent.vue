<script setup lang='ts'>
import { Plus } from '@element-plus/icons-vue';

const radio = ref(3);
</script>

<template>
  <div class="d-flex justify-content-end px-3 gap-2 align-items-center">
    <el-button type="primary" :icon="Plus">
      Thêm
    </el-button>
    <div class="filter-group p-2">
      <el-radio-group v-model="radio">
        <el-radio :label="1">
          Option A
        </el-radio>
        <el-radio :label="2">
          Option B
        </el-radio>
        <el-radio :label="3">
          Option C
        </el-radio>
        <el-radio :label="4">
          Option D
        </el-radio>
      </el-radio-group>
    </div>
  </div>
</template>


<style scoped>
.filter-group{
  border-radius: 10px;
  background-color: var(--el-bg-color-2)
}
</style>
