import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/issues' },
  {
    path: '/issues',
    component: () => import('./pages/issues/issue-list/issue-list.page.vue'),
  },
  {
    path: '/issues/:id',
    component: () =>
      import('./pages/issues/issue-detail/issue-detail.page.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
