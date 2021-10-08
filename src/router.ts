import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/issues" },
  {
    path: "/issues",
    component: () =>
      import("./pages/issues/issue-list").then((m) => m.IssueList),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
