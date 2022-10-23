// import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../views/layout/MainLayout.vue';
// import { useUserAuthenticatedStore } from '@/stores/UserStore/UserAuthenticated';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      redirect: '/Dashboard',
      meta: {
        requiresAuth: true,
        title: 'Dashboard'
      },
      children: [
        {
          path: '/Dashboard',
          name: 'Dashboard',
          component: () => import('../views/Dashboard.vue'),
          meta: {
            title: 'Dashboard'
          }
        },
        {
          path: '/QuanLyCongViecTuan',
          name: 'QuanLyCongViecTuan',
          component: () => import('../views/WeeklyTaskView/WeeklyTaskView.vue'),
          meta: {
            title: 'Quản lý công việc tuần'
          }
        }
      ]
    },
    {
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

  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title as string;
  }


  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = useUserAuthenticatedStore().state;
  if (requiresAuth && !currentUser) {
    sessionStorage.setItem('redirectPath', to.path);
    next('/login');
  } else if (requiresAuth && currentUser) {
    next();
  } else if (!requiresAuth && currentUser) {
    next('/');
  } else {
    next();
  }
});


export default router;
