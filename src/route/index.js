

import PageLayout from "../layout/PageLayout.vue";
import login from "../page/auth/Login.vue";
import signup from "../page/auth/Signup.vue";

import dashboard from "../page/home/Dashboard.vue";
import analyze from "../page/home/Analyze.vue";
import Page404 from "../page/Page404.vue";
import Profile from "../page/user/Profile.vue";
import MessageCenter from "../page/user/MessageCenter.vue";
import Setting from "../page/user/Setting.vue";

import TabPage from "../page/widget/TabPage.vue";
import TablePage from "../page/widget/TablePage.vue";
import TreePage from "../page/widget/TreePage.vue";
import DropdownPage from "../page/widget/DropdownPage.vue";

const route = [
  {
    path: "/",
    redirect: "/home"
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
    path: "/widget",
    component: PageLayout,
    children: [
      {
        path: "table",
        component: TablePage,
      },
      {
        path: "tab",
        component: TabPage,
      },
      {
        path: "dropdown",
        component: DropdownPage,
      },
      {
        path: "tree",
        component: TreePage,
      },
    ],
  },
  {
    path: "/user",
    component: PageLayout,
    children: [
      {
        path: "profile",
        name: "user-center",
        component: Profile,
      },
      {
        path: "message",
        name: "user-message",
        component: MessageCenter,
      },
      {
        path: "setting",
        name: "system-setting",
        component: Setting,
      },
    ],
  },
  {
    path: "/system",
    component: PageLayout,
    children: [
      {
        path: "themeBuilder",
        component: () => import(`../page/system/ThemeBuilder.vue`),
      },
      {
        path: "languageBuilder",
        component: () => import(`../page/system/LanguageBuilder.vue`),
      },
    ]
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


console.log(route);





export default route;
