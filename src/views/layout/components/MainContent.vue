<script setup lang="ts">
</script>
<template>
  <el-container>
    <RouterView>
      <template #default="{ Component, route }">
        <el-main class="d-flex flex-column pt-0">
          <PageHeaderComponent v-if="Component" />
          <component :is="Component" :key="route.fullPath" class="main-content" />
          <FooterComponent class="mt-auto" />
        </el-main>
        <PageSidebarComponent />
      </template>
    </RouterView>
  </el-container>
</template>
  