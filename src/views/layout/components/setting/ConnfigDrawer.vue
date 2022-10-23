<script setup lang="ts">
import { Sunrise, MoonNight } from '@element-plus/icons-vue';


// const props = defineProps({
//   toggleConfig: Boolean,
// });
const drawer = ref(false);
const isDarkMode = ref(isDark);
const toggleDark = (value: boolean) => {
  useToggle(value);
};
emitter.on('openPanel', () => {
  drawer.value = true;
});
</script>
<template>
  <el-drawer v-model="drawer" direction="rtl">
    <template #header="{titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">
        Cấu hình
      </h4>
    </template>
    <div class="theme d-flex flex-column align-items-center">
      <el-divider content-position="left">
        Chế độ
      </el-divider>
      <el-switch
        v-model="isDarkMode" :active-value="true" :inactive-value="false" inline-prompt :active-icon="MoonNight"
        :inactive-icon="Sunrise" size="large" style="--el-switch-on-color: #28293d;--el-switch-off-color: #555770;"
        @change="toggleDark(isDarkMode)"
      />
    </div>
  </el-drawer>
</template>

<style>
.el-drawer__header{
  margin-bottom: 0;
}
</style>
  