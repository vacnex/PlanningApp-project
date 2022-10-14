<script setup lang="ts">
import {
  Setting
} from '@element-plus/icons-vue';
</script>
<template>
  <section class="sidebar my-xxl-2 ms-xxl-1 d-xxl-flex flex-xxl-column align-items-xxl-start">
    <ul class="list-unstyled">
      <li>
          <el-button link size="large">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          </el-button>
      </li>
    </ul>
    <el-divider />
    <div class="action ms-xxl-1 mt-auto">
      <el-button circle link size="large">
        <el-icon :size="24">
          <Setting />
        </el-icon>
      </el-button>
    </div>
  </section>
</template>
<style scoped>
.sidebar {
  background-color: var(--el-bg-color-1);
  border: .5px solid var(--el-bg-color-2);
  box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);
  backdrop-filter: blur(80px);
  border-radius: 16px;
  padding: 8px 10px;
  /* width: 50px; */
  transition: width 1s ease-in-out;
}

.sidebar.expand {
  width: 200px;
}

</style>