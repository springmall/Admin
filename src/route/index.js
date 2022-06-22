import AppLayout from "../layout/AppLayout.vue";
import PageLayout from "../layout/PageLayout.vue";
import login from "../page/auth/Login.vue";
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
    path: "/login",
    name: "login",
    component: login,
  },
];

export default route;
