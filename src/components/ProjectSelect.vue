<script setup lang="ts">
const dialogVisible = ref(useProjectStore().get_selected_project() ? false : true);
const projects = ref([]);
const user = computed(() => {
  return JSON.parse(localStorage.getItem('user')??'');
});

const getUserProject = useProjectStore().get_joined_projects(user.value.id);
getUserProject.then(rs => {
  projects.value = rs.data.projects;
}).catch(rs => {
  console.log(rs.response.data);
});

const SelectedProject = (pID:number) => {
  useProjectStore().save_selected_project(pID);
  dialogVisible.value = false;
};


</script>

<template>
  <el-dialog v-model="dialogVisible" title="CHỌN DỰ ÁN" align-center center>
    <div class="d-flex justify-content-center gap-5">
      <el-card v-for="project in projects" :key="project['id']" shadow="hover" class="project-card" @click="SelectedProject(project['id'])">
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
