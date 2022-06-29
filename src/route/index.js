import AppLayout from "../layout/AppLayout.vue";
import PageLayout from "../layout/PageLayout.vue";
import login from "../page/auth/Login.vue";
import signup from "../page/auth/Signup.vue";
import welcome from "../page/Welcome.vue";

const route = [
  {
    path: "/",
    component: welcome,
  },
  {
    path: "/home",
    name: "home",
    component: PageLayout,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: PageLayout,
  },
  {
    path: "/analyze",
    name: "analyze",
    component: PageLayout,
  },
  {
    path: "/home",
    name: "home",
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
];

export default route;
