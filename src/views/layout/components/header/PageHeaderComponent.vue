<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue';
const project = ref(useProjectStore().projectInfo);
const router = useRouter();
// const getSelectedProject = useProjectStore().get_selected_project();
// getSelectedProject.then(rs => {
//   project.value = rs.data[0].title;
// }).catch(rs => {
//   console.log(rs.response.data);
// });

emitter.on('showProject', () => {
  project.value = useProjectStore().projectInfo.title;
});
</script>
//TODO
// [ ] load động tiêu đề page
// [ ] Check nút back

<template>
  <el-page-header v-if="router.currentRoute.value.name != 'home' && router.currentRoute.value.name != 'Dashboard'" :icon="ArrowLeft ">
    <template #content>
      <span class="fw-bold me-3 text-uppercase"> Công việc tuần 1 2/9 - 6/9 </span>
      <el-tag v-if="project">
        {{ project }}
      </el-tag>
    </template>
  </el-page-header>
</template>
<style>
.el-page-header__breadcrumb{
  margin: 0;
}
</style>