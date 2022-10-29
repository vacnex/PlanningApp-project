<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue';
const router = useRouter();

const projectName = computed(() => {
  if (useProjectStore().projectName) {
    return useProjectStore().projectName;
  }
});
</script>
//TODO
// [ ] load động tiêu đề page
// [ ] Check nút back

<template>
  <el-page-header v-if="router.currentRoute.value.name != 'home' && router.currentRoute.value.name != 'Dashboard'" :icon="ArrowLeft ">
    <template #content>
      <el-skeleton v-if="!projectName" animated>
        <template #template>
          <el-skeleton-item variant="text" style="width: 300px" />
        </template>
      </el-skeleton>
      <span v-else class="fw-bold me-3 text-uppercase"> Công việc tuần 1 2/9 - 6/9 </span>
      <el-tag v-if="projectName">
        {{ projectName }}
      </el-tag>
    </template>
  </el-page-header>
</template>
<style>
.el-page-header__breadcrumb{
  margin: 0;
}
</style>