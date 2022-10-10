import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useUserStore } from '@/stores/user';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/manager',
      name: 'manager',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ManagerView.vue'),
      meta: { requiresAuth: true }
    }, {
      path: '/lead',
      name: 'lead',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MemberView.vue'),
      meta: { requiresAuth: true }
    },{
      path: '/member',
      name: 'member',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LeadView.vue'),
      meta: { requiresAuth: true }
    },{
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue'),
    },
  ],
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = useUserStore().isLoggedIn;

  if (requiresAuth && !currentUser) {
    sessionStorage.setItem('redirectPath', to.path);
    next('/login');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});


export default router;
