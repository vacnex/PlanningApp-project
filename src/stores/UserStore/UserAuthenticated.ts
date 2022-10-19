
/* Creating a store called `UserAuthenticated` and setting the initial state to `false` */
// export const useUserAuthenticatedStore = defineStore('UserAuthenticated', () => {
//   const match = document.cookie.match(new RegExp('(^| )' + 'token' + '=([^;]+)'));
//   const state = match ? true : false;
//   return { state };
// });

export const useUserAuthenticatedStore = defineStore({
  id: 'UserAuthenticated',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    state: document.cookie.match(new RegExp('(^| )' + 'token' + '=([^;]+)')) ? true : false
  }),
  actions: {
    async login(username: string, password: string) {
      return await fetchWrapper.post('/login', { username: username, password: password }).then(rs => { 
        this.state = true;

        const now = new Date();
        let time = now.getTime();
        time += 3600 * 1000;
        now.setTime(time);
        document.cookie = 'token=' + rs.data.access_token + '; expires=' + now.toUTCString() + ';';

        // redirect to previous url or default to home page
        router.push(sessionStorage.getItem('redirectPath') || '/');

        localStorage.setItem('user', JSON.stringify(rs.data.user));
        // console.info('thành công', rs.data);

      });

      // update pinia state
      // this.user = user;

      // store user details and jwt in local storage to keep user logged in between page refreshes
      // localStorage.setItem('user', JSON.stringify(user));

      // redirect to previous url or default to home page
      // router.push(this.returnUrl || '/');
    },
    logout() {
      this.state = false;
      localStorage.removeItem('user');
      router.push('/login');
    },
    get_token() {
      const token_match = document.cookie.match(new RegExp('(^| )' + 'token' + '=([^;]+)'));
      return token_match ? token_match[2]:'';
    }
  }
});