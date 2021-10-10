import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { IssueList } from "./pages/issues/issue-list";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/issues" },
  {
    path: "/issues",
    component: IssueList,
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
