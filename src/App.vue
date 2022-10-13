<script setup lang="ts">
// import { RouterView } from 'vue-router';
// import { locale } from './stores/LocaleStore/Locale';
const LocaleVN = locale;
</script>

<template>
  <el-config-provider :locale="LocaleVN">
    <RouterView />
  </el-config-provider>
</template>

<style scoped>

</style>
