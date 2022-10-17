
/* Creating a store called `UserAuthenticated` and setting the initial state to `false` */
export const useUserAuthenticatedStore = defineStore('UserAuthenticated', () => {
  const match = document.cookie.match(new RegExp('(^| )' + 'token' + '=([^;]+)'));
  const state = match ? true : false;
  return { state };
});