export const useProjectStore = defineStore('Project', () => {
  const projectName = ref(localStorage.getItem('selectedProject'));

  async function get_joined_projects(userID: number) {
    return await fetchWrapper.get('/getjoinedprojects', { userID: userID });
  }
  
  async function save_selected_project(pID: number) {
    await fetchWrapper.get('/Projects', { id: pID }).then(rs => {
      projectName.value = rs.data[0].title;
      localStorage.setItem('selectedProject', rs.data[0].title);
    }).catch(rs => {
      console.log(rs.response.data);
    });
  }
  return { get_joined_projects, save_selected_project, projectName };
});