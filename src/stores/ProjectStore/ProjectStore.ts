export const useProjectStore = defineStore('Project', () => {
  async function get_joined_projects(userID: number) {
    return await fetchWrapper.get('/getjoinedprojects', { userID: userID });
  }
  function save_selected_project(projectID: number) {
    localStorage.setItem('selectedProject', projectID.toString());
  }
  function get_selected_project() {
    return localStorage.getItem('selectedProject');
  }
  return { get_joined_projects, save_selected_project, get_selected_project };
});