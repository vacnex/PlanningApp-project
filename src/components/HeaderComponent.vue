<script setup lang="ts">
// import { Search } from '@element-plus/icons-vue';
import { Search, Sunrise, MoonNight, ArrowRight } from '@element-plus/icons-vue';
// import { toggleDark } from '../composables/DarkTheme';
// import { ref } from 'vue';
const isDarkMode = ref(isDark);
const toggleDark = (value: boolean) => {
  useToggle(value);
};
const searchBox = ref();
</script>
<template>
  <el-page-header class="p-3 pb-0">
    <template #breadcrumb>
      <div class="d-flex justify-content-between align-items-center">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: './' }">
            Dashboard
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <RouterLink to="/lead">
              Quản lý công việc tuần
            </RouterLink>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="d-flex gap-2">
          <el-input v-model="searchBox" placeholder="Tìm..." :prefix-icon="Search" />
          <el-switch
            v-model="isDarkMode" :active-value="true" :inactive-value="false" inline-prompt :active-icon="MoonNight"
            :inactive-icon="Sunrise" size="large" style="--el-switch-on-color: #28293d;--el-switch-off-color: #555770;"
            @change="toggleDark(isDarkMode)"
          />
        </div>
      </div>
    </template>
    <template #content>
      <span class="text-large font-600 mr-3"> CÔNG VIỆC TUẦN 1 </span>
    </template>
    <template #extra />
  </el-page-header>
</template>