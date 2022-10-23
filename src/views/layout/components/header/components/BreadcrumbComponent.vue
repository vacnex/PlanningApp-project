<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

const route = useRoute();
const levelList = ref<RouteLocationNormalizedLoaded[]>([]);
const router = useRouter();

const getBreadcrumb = (): void => {
  console.log(route);
  console.log(router);
  console.log(router.currentRoute.value);
  if (router.currentRoute.value.name != 'home' && router.currentRoute.value.name != 'Dashboard') {
    levelList.value.push(router.currentRoute.value);
  } else {
    levelList.value = [];
  }
};
onMounted(() => {
  getBreadcrumb();
});

watch(
  () => route.path,
  () => {
    getBreadcrumb();
  }
);
</script>
<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">
      Dashboard
    </el-breadcrumb-item>
    <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="{ path: item.path }">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style scoped>

</style>