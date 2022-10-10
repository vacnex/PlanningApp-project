<script setup lang="ts">
import {
  Setting
} from '@element-plus/icons-vue'
</script>
<template>
  <section class="sidebar my-xxl-2 ms-xxl-1  d-xxl-flex flex-xxl-column">
    <el-button link size="large">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    </el-button>
    <el-divider />
    <el-button circle link class="mt-xxl-auto" size="large">
      <el-icon :size="30" >
        <Setting />
      </el-icon>
    </el-button>
  </section>
</template>
<style scoped>
.sidebar {
  background-color: var(--el-bg-color-1);
  border: .5px solid var(--el-bg-color-2);
  box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);
  backdrop-filter: blur(80px);
  border-radius: 16px;
  padding:  20px 22px;
}
</style>