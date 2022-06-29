import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import SpringMall from "./SpringMall.vue";
import routes from "./route/index.js";
import { createI18n } from "vue-i18n";
import { message } from "./i18n";

import Center from "./view/Center.vue";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFile,
  faFolder,
  faFolderOpen,
  faUserSecret,
  faChevronCircleRight,
  faChevronCircleDown,
  faFolderClosed,
  faSpinner,
  faCircle,
  faCircleNotch,
  faAdd,
  faFolderPlus,
  faFileCirclePlus,
  faArrowLeft,
  faArrowDown,
  faAngleDown,
  faAngleLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from "pinia";

library.add(
  faFolderPlus,
  faFileCirclePlus,
  faAdd,
  faUserSecret,
  faFile,
  faFolder,
  faFolderOpen,
  faFolderClosed,
  faChevronCircleRight,
  faChevronCircleDown,
  faSpinner,
  faCircleNotch,
  faArrowLeft,
  faAngleLeft,
  faArrowDown,
  faAngleDown,
  faBars
);

const app = createApp(SpringMall);

const i18n = createI18n({
  locale: "zh",
  fallbackLocale: "zh",
  messages: message,
});

app.use(i18n);

app.use(createPinia());

app.component("font-awesome-icon", FontAwesomeIcon);

var componentsList = [];

var components = import.meta.globEager("./components/*.vue");
for (const idx in components) {
  componentsList.push(components[idx].default);
}

var layout = import.meta.globEager("./layout/*.vue");
for (const idx in layout) {
  componentsList.push(layout[idx].default);
}

componentsList.forEach((component) => {
  app.component(component.name, component);
});



const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

app.use(router);

app.mount("#app");
