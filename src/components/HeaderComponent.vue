<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { Sunrise, MoonNight } from '@element-plus/icons-vue';
import { toggleDark } from '../composables/dark';
import { ref } from 'vue';
const isDarkMode = ref(false);
const searchBox = ref();
</script>
<template>
  <el-header  class="d-xxl-flex align-items-xxl-center justify-content-xxl-between">
    <el-input v-model="searchBox" style="width: 15%;"  placeholder="Tìm..." :prefix-icon="Search" />
    <el-switch v-model="isDarkMode" :active-value="true" :inactive-value="false" inline-prompt :active-icon="MoonNight"
    :inactive-icon="Sunrise" size="large" @change="toggleDark()" style="--el-switch-on-color: #28293d;--el-switch-off-color: #555770;" />
  </el-header>
</template>