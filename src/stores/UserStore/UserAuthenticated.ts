// import { ref, computed } from 'vue';
// import { defineStore } from 'pinia';
export const useUserAuthenticatedStore = defineStore('UserAuthenticated', () => {
  const match = document.cookie.match(new RegExp('(^| )' + 'token' + '=([^;]+)'));
  const state = match ? true : false;
  return { state };
});