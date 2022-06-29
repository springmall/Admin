import AppLayout from "../layout/AppLayout.vue";
import PageLayout from "../layout/PageLayout.vue";
import login from "../page/auth/Login.vue";
import signup from "../page/auth/Signup.vue";
import welcome from "../page/Welcome.vue";

import dashboard from "../page/home/Dashboard.vue";
import analyze from "../page/home/Analyze.vue";
import Page404 from "../page/Page404.vue";

const route = [
  {
    path: "/",
    component: welcome,
  },
  {
    path: "/home",
    name: "home",
    component: PageLayout,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: dashboard,
      },
      {
        path: "analyze",
        name: "analyze",
        component: analyze,
      },
    ],
  },
  {
    path: "/menu",
    name: "menu",
    component: PageLayout,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/signup",
    name: "signup",
    component: signup,
  },
  {
    path: "/404",
    name: "Not Found",
    component: Page404,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Page404",
    redirect: "/404",
  },
];

export default route;
