export const useUserInfoStore = defineStore('UserInfo', () => {
  // const user = localStorage.getItem('user') ? JSON.parse(localUser) : null;
  function get_user_infor() {
    const localUser = localStorage.getItem('user');
    if (localUser) {
      return JSON.parse(localUser);
    } else {
      return null;
    }
  }
  return { get_user_infor };
});