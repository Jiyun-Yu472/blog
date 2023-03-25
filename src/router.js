import { createWebHistory, createRouter } from "vue-router";
import List from "./components/BlogListPage.vue";
import Home from "./components/BlogHome.vue";
import Detail from "./components/BlogDetail.vue";
import Author from "./components/BlogAuthor.vue";
// import BlogList from "./assets/blog";
const routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "/list",
    component: List,
    // props: { BlogList },
  },
  {
    path: "/detail/:blogId",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
