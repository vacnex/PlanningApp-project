// import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
export const useUserStore = defineStore('user', () => {
  const match = document.cookie.match(new RegExp('(^| )' + 'token' + '=([^;]+)'));
  const isLoggedIn = match?true:false;
  return { isLoggedIn };
});