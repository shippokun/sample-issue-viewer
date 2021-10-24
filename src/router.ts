import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import IssueList from './pages/issues/issue-list/issue-list.page.vue';
import IssueDetail from './pages/issues/issue-detail/issue-detail.page.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/issues' },
  {
    path: '/issues',
    component: IssueList,
  },
  {
    path: '/issues/:id',
    component: IssueDetail,
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
