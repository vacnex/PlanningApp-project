export const useProjectStore = defineStore('Project', () => {
  const projectInfo = ref();
  const selectedProject = localStorage.getItem('selectedProject');
  if (selectedProject) {
    projectInfo.value = JSON.parse(selectedProject)['title'];
  }
  async function get_joined_projects(userID: number) {
    return await fetchWrapper.get('/getjoinedprojects', { userID: userID });
  }
  function is_selected_project() {
    return localStorage.getItem('selectedProject') ? true : false;
  }
  async function save_selected_project(pID: number) {
    await fetchWrapper.get('/Projects', { id: pID }).then(rs => {
      projectInfo.value = rs.data[0];
      localStorage.setItem('selectedProject', JSON.stringify(rs.data[0]));
      emitter.emit('showProject' as any);
    }).catch(rs => {
      console.log(rs.response.data);
    });
  }
  return { get_joined_projects, save_selected_project, is_selected_project, projectInfo };
});