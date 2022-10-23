<script setup lang="ts">
const dialogVisible = ref(useProjectStore().is_selected_project() ? false : true);
const projects = ref([]);
const user = computed(() => {
  return JSON.parse(localStorage.getItem('user')??'');
});

const SelectProject = (pID:number) => {
  useProjectStore().save_selected_project(pID);
  dialogVisible.value = false;
};

if (dialogVisible.value) {
  const getUserProject = useProjectStore().get_joined_projects(user.value.id);
  getUserProject.then(rs => {
    projects.value = rs.data.projects;
  }).catch(rs => {
    console.log(rs.response.data);
  });
}

emitter.on('openProjectPanel', () => {
  dialogVisible.value = true;
  const getUserProject = useProjectStore().get_joined_projects(user.value.id);
  getUserProject.then(rs => {
    projects.value = rs.data.projects;
  }).catch(rs => {
    console.log(rs.response.data);
  });
});
const handleClose = (done: () => void) => {
  if (useProjectStore().is_selected_project()) {
    done();
  } else {
    ElMessage({
      message: 'Vui lòng chọn dự án.',
      type: 'warning',
    });
  }
};
</script>

<template>
  <el-dialog v-model="dialogVisible" title="CHỌN DỰ ÁN" align-center center :before-close="handleClose">
    <div class="d-flex justify-content-center gap-5">
      <el-card v-for="project in projects" :key="project['id']" shadow="hover" class="project-card" @click="SelectProject(project['id'])">
        <div class="d-flex flex-column align-items-center gap-3">
          <el-image src="src\assets\img\Imgplaceholder.svg" />
          <div>
            <h3>{{ project['title'] }}</h3>
          </div>
        </div>
      </el-card>
    </div>
  </el-dialog>
</template>

<style scoped>
.project-card{
  cursor:pointer;
}
</style>
